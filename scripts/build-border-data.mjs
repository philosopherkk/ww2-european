/**
 * Rebuilds public/data/borders from the published border layers.
 *
 *   node scripts/build-border-data.mjs [--out DIR] [--refresh]
 *
 * Sources, both public and token-free:
 *   - "WWII Borders <Month> <Year>"  (Spatial History Project, Stanford / UMaine CLIR copies)
 *   - single-month layers such as "October_31_1939" (UMaine CLIR copies)
 * Raw downloads are cached in scripts/.cache/border-src so the pipeline can be re-run
 * offline; --refresh re-downloads. Everything after the download is deterministic.
 *
 * Two things to know before changing this:
 *  - The source `Foreign_Po` (controller) attribute is NOT used for colours. It is
 *    wrong in places: Italy is "Allies" in September 1941, "Belligerent" in 1939,
 *    and Iceland is "Neutral" while under British occupation. Colours come from
 *    lib/data/status.ts, which is reviewed by hand.
 *  - The 300 km² cut-off below keeps the file light but deletes small states, so
 *    KEEP_TINY re-adds them at a finer resolution. Without it Malta disappears.
 */
import * as turf from '@turf/turf';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CACHE = path.join(ROOT, 'scripts/.cache/border-src');
const argv = process.argv.slice(2);
const outFlag = argv.indexOf('--out');
const OUT = path.resolve(ROOT, outFlag === -1 ? 'public/data/borders' : argv[outFlag + 1]);
const REFRESH = argv.includes('--refresh');
fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(CACHE, { recursive: true });

const SOURCE =
  'European borders during the Second World War, month by month: The Spatial History ' +
  'Project, Stanford University (copies held by the University of Maine CLIR Geospatial Hub)';

// Documented border state -> ISO date used to order it against the month slider.
const SNAPSHOTS = [
  ['1938-04-30', 'umfesri', 'WWII_Borders_April_1938'],
  ['1939-04-30', 'umfesri', 'WWII_Borders_April_1939'],
  ['1939-10-31', 'umaine', 'October_31_1939'],
  ['1940-04-30', 'umfesri', 'WWII_Borders_April_1940'],
  ['1941-04-30', 'umfesri', 'WWII_Borders_April_1941'],
  ['1941-09-30', 'umaine', 'September_30_1941'],
  ['1942-04-30', 'umfesri', 'WWII_Borders_April_1942'],
  ['1943-04-30', 'umfesri', 'WWII_Borders_April_1943'],
  ['1943-06-30', 'umaine', 'June_30_1943'],
  ['1943-10-31', 'umfesri', 'WWII_Borders_October_1943'],
  ['1944-04-30', 'umfesri', 'WWII_Borders_April_1944'],
  ['1945-04-30', 'umfesri', 'WWII_Borders_April_1945'],
];

const HOST = {
  umfesri: 'https://services6.arcgis.com/HvbabY0grzgZwGW1/arcgis/rest/services',
  umaine: 'https://services1.arcgis.com/PbxdWcUY1TFauNzT/arcgis/rest/services',
};

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'];
const label = (iso) => `${MONTH_NAMES[Number(iso.slice(5, 7)) - 1]} ${iso.slice(0, 4)}`;

// European theatre extent (lng/lat). Reaches past Arkhangelsk and includes
// Moscow so the Eastern Front is visible; North Africa sits below as backdrop.
const CLIP = [-25, 33, 62, 71];

// Kept at a finer tolerance because the blanket cut-off below would delete them.
const KEEP_TINY = { Malta: { tolerance: 0.002, minAreaKm2: 3, decimals: 4 } };

const MIN_AREA_M2 = 300_000_000; // 300 km²
// Simplification tolerance in degrees. 0.02 is about 2 km: finer than the lines
// on a map of the whole theatre, and it keeps the files small enough to load fast.
const TOLERANCE = 0.02;
const DECIMALS = 3;

// The source layers are inconsistent in one place: Reichskommissariat Ostland is
// misspelled in the October 1943 state. Fixed here so the data stays readable.
const NAME_FIX = {
  'Reichkommissariat Ostland': 'Reichskommissariat Ostland',
  'Protectorate of Bohemia Moravia': 'Protectorate of Bohemia and Moravia',
};

// The September 1941 and April 1942 states carry the two names and the two Reichskommissare
// on each other's polygons: the shape that reaches the Baltic coast (lat 59.7) is the
// Reichskommissariat Ostland, Hinrich Lohse's territory; the one covering Ukraine, Erich
// Koch's, never reaches past lat 53. The map is labelled by geography, not by the label.
function correctLabels(feature, iso, log) {
  if (!/^Reichs?kommissariat (Ostland|Ukraine)$/i.test(feature.properties.name)) return feature;
  const ringCoords =
    feature.geometry.type === 'Polygon' ? feature.geometry.coordinates : feature.geometry.coordinates.flat(1);
  const maxLat = Math.max(...ringCoords.map((ring) => Math.max(...ring.map((p) => p[1]))));
  const inTheBaltics = maxLat > 55;
  const want = inTheBaltics ? 'Reichskommissariat Ostland' : 'Reichskommissariat Ukraine';
  const head = inTheBaltics ? 'Hinrich Lohse (Reichskommissar)' : 'Erich Koch (Reichskommissar)';
  if (feature.properties.name !== want) {
    log.push(`${iso}: labelled ${feature.properties.name} by geography (reaches lat ${maxLat.toFixed(1)})`);
    feature.properties.name = want;
  }
  if (feature.properties.headOfState !== head) {
    log.push(`${iso}: head of state for ${want} corrected to ${head}`);
    feature.properties.headOfState = head;
  }
  return feature;
}

const clean = (v) => {
  if (v == null) return null;
  const s = String(v).trim();
  if (!s || s === '<Null>' || s === ' ') return null;
  return s;
};

const ringsOf = (geom) =>
  !geom ? [] : geom.type === 'Polygon' ? [geom.coordinates] : geom.type === 'MultiPolygon' ? geom.coordinates : [];

const roundRings = (coords, decimals) => {
  const f = (p) => [Number(p[0].toFixed(decimals)), Number(p[1].toFixed(decimals))];
  return coords.map((poly) => poly.map((ring) => ring.map(f)));
};

/** Clip a geometry to the theatre and merge the surviving pieces into one geometry. */
function clipGeometry(geometry) {
  const rings = ringsOf(geometry);
  if (!rings.length) return null;
  let clipped;
  try {
    const out = turf.bboxClip(geometry, CLIP);
    clipped = out?.geometry || out;
  } catch {
    return null;
  }
  const coords = ringsOf(clipped);
  if (!coords.length) return null;
  return coords.length === 1
    ? { type: 'Polygon', coordinates: coords[0] }
    : { type: 'MultiPolygon', coordinates: coords };
}

function featureFor(name, geometry, props, opts = {}) {
  const tolerance = opts.tolerance ?? TOLERANCE;
  const decimals = opts.decimals ?? DECIMALS;
  const minAreaM2 = (opts.minAreaKm2 ?? MIN_AREA_M2 / 1e6) * 1e6;
  let geom = geometry;
  try {
    const s = turf.simplify(turf.feature(geom), { tolerance, highQuality: true });
    if (s?.geometry) geom = s.geometry;
  } catch {
    /* keep the clipped geometry */
  }
  let polys = ringsOf(geom).filter((rings) => rings[0]?.length >= 4);
  polys = polys.filter((rings) => {
    try {
      return turf.area(turf.polygon(rings)) >= minAreaM2;
    } catch {
      return false;
    }
  });
  if (!polys.length) return null;
  const coordinates = roundRings(polys, decimals);
  return {
    type: 'Feature',
    properties: {
      name,
      controller: clean(props?.Foreign_Po) || '',
      headOfState: clean(props?.Head_of_St) || '',
      govtInExile: clean(props?.Govt_in_Ex) || '',
    },
    geometry:
      coordinates.length === 1
        ? { type: 'Polygon', coordinates: coordinates[0] }
        : { type: 'MultiPolygon', coordinates },
  };
}

async function download(iso, host, service) {
  const file = path.join(CACHE, `st_${iso}.geojson`);
  if (!REFRESH && fs.existsSync(file) && fs.statSync(file).size > 100_000) {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  }
  const url = `${HOST[host]}/${service}/FeatureServer/0/query`;
  const q = new URLSearchParams({ where: '1=1', outFields: '*', f: 'geojson' });
  let last;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(`${url}?${q}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error.message || 'ArcGIS error');
      if (!data.features?.length) throw new Error('no features returned');
      fs.writeFileSync(file, JSON.stringify(data));
      console.log(`  fetched ${service}: ${data.features.length} features`);
      return data;
    } catch (err) {
      last = err;
      console.warn(`  attempt ${attempt} failed for ${service}: ${err.message}`);
      await new Promise((r) => setTimeout(r, 1500 * attempt));
    }
  }
  throw new Error(`could not download ${service}: ${last?.message}`);
}

const manifest = [];

for (const [iso, host, service] of SNAPSHOTS) {
  const raw = await download(iso, host, service);
  const out = [];
  const dropped = [];
  const corrected = [];

  // One country can be spread over several features (France into zone libre and
  // zone occupée, Finland into ceded and non-ceded areas). Collect by name so the
  // reader sees one state with one colour, and dissolve the pieces.
  const byName = new Map();
  for (const f of raw.features) {
    const rawName = clean(f.properties?.Name);
    if (!rawName) continue;
    const name = NAME_FIX[rawName] || rawName;
    const geom = clipGeometry(f.geometry);
    if (!geom) {
      dropped.push(`${name} (outside the map window)`);
      continue;
    }
    const pieces = byName.get(name) || { geoms: [], props: f.properties };
    pieces.geoms.push(geom);
    byName.set(name, pieces);
  }

  for (const [name, { geoms, props }] of byName) {
    const opts = KEEP_TINY[name];
    let feature = null;
    if (geoms.length === 1) {
      feature = featureFor(name, geoms[0], props, opts);
    } else {
      // Union the pieces, then fall back to a plain merge if the union fails.
      let union = null;
      try {
        const polys = [];
        for (const g of geoms) for (const r of ringsOf(g)) polys.push(turf.polygon(r));
        let acc = polys[0];
        for (const p of polys.slice(1)) acc = turf.union(acc, p);
        union = acc?.geometry || null;
      } catch {
        union = null;
      }
      if (union) {
        feature = featureFor(name, union, props, opts);
      } else {
        const coords = [];
        for (const g of geoms) for (const r of ringsOf(g)) coords.push(r);
        feature = featureFor(name, { type: 'MultiPolygon', coordinates: coords }, props, opts);
      }
    }
    if (feature) out.push(correctLabels(feature, iso, corrected));
    else dropped.push(name);
  }

  out.sort((a, b) => a.properties.name.localeCompare(b.properties.name));
  const json = JSON.stringify({ type: 'FeatureCollection', snapshot: iso, source: SOURCE, features: out });
  fs.writeFileSync(path.join(OUT, `${iso}.json`), json);
  manifest.push({ id: service, date: iso, label: label(iso), file: `/data/borders/${iso}.json`, countries: out.length });
  console.log(
    `${iso}  features=${String(out.length).padStart(3)}  ${(json.length / 1024).toFixed(0)} KB` +
      (dropped.length ? `\n           dropped: ${dropped.join('; ')}` : '') +
      (corrected.length ? `\n           corrected: ${[...new Set(corrected)].join('; ')}` : '')
  );
}

fs.writeFileSync(
  path.join(OUT, 'manifest.json'),
  JSON.stringify(
    {
      source: SOURCE,
      note: 'Documented border states. The map shows the state closest in time to the month you picked and says how far away it is.',
      snapshots: manifest,
    },
    null,
    1
  )
);
console.log(`\n${manifest.length} snapshots written to ${OUT}`);
