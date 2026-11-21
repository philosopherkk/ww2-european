/**
 * Builds public/data/borders for the First World War site.
 *
 *   node scripts/build-ww1-border-data.mjs [--out DIR] [--refresh]
 *
 * Geometry source (one file, fetched once and cached in scripts/.cache/ww1-src):
 *   Jack Kavanagh, "Map of Europe, c. 1914", University College Dublin, Zenodo,
 *   DOI 10.5281/zenodo.20119653, v1, CC BY 4.0 — first_world_war.json.
 *   It is a purpose-made 1914 boundary map: the European polities plus the
 *   North African coast, WGS 84, high resolution (150k points for Russia alone).
 *
 * What this script does to it:
 *  - keeps only the polities inside the European theatre. The source has 29
 *    features: Europe plus Algeria, Tunisia, Libya, Morocco, Egypt and Iran, and
 *    those six are dropped, which is why Sinai, Palestine, Mesopotamia and Persia
 *    have no coloured land under them; Liechtenstein is in the source but not in
 *    KEEP, so it is dropped, and Monaco, San Marino, Andorra, Vatican City,
 *    Iceland and Malta are not in the source at all;
 *  - clips everything to the theatre box and throws away islands under 25 km²,
 *    which is what makes the file small enough for a browser;
 *  - simplifies with turf, so the outlines are for reading, not surveying;
 *  - writes ONE geometry file (July 1914) and a manifest that points every month
 *    of the war at it.
 *
 * Two settings were chosen by measurement, not taste, and both were too coarse
 * before. The test is putting known places inside the polygons of the built
 * file — see scripts/check-border-places.mjs, which runs the list and fails on
 * a regression (towns whose 1914 sovereign is documented, for example Galway,
 * Wexford, Corfu, Lewis, Man and Sylt):
 *  - MIN_ISLAND_KM2 was 900, which dropped Lewis, Man, Wight, Anglesey, Arran,
 *    Islay, Corfu, Sylt, Usedom, Bornholm, Samos, Lemnos and the Frisian isles,
 *    so Greek Corfu and German Sylt sat uncoloured on a map of 1914. At 25 km²
 *    they are drawn and the file is still one fetch (0.6 MB, 211 KB gzipped);
 *    at 5 km² the Venetian lagoon sandbars come back too, but the polygon count
 *    more than doubles for two pixels of land, so the cut-off stays at 25.
 *  - SIMPLIFY_TOLERANCE was 0.03 degrees, about 3 km, which ate Galway Bay and
 *    Wexford: both fell outside the British polygons. At 0.01 degrees they are
 *    inside; 0.015 does not recover Galway.
 *
 * Defects in the source that this script does NOT and cannot fix, measured the
 * same way — they need better geometry, not new words in the site's prose:
 *  - the Italy/Austria-Hungary frontier in the Friuli-Venezia Giulia sector is not
 *    the 1914 one: the edge of the Italian polygon follows the Soča (Isonzo) front
 *    of 1915-17, so Trieste, Monfalcone, Duino, Cormons, Gradisca, Grado,
 *    Cervignano and Aquileia are inside the Italian polygon, though all of them
 *    were in the County of Görz and Gradiska / Austrian Littoral until 23 May 1915
 *    (Görz itself, Pula, Rijeka and Ljubljana are correctly Austrian). Zenodo
 *    21341486 and the aourednik world_1914 set have the same line, so changing
 *    source does not help; it needs digitising from a period map.
 *  - the Irish coastline in the source cuts across the bays, so Dublin,
 *    Belmullet, Tralee, Valentia and Malin Head fall outside the British ring in
 *    the source file itself (the ring also crosses itself 12 times; repairing it
 *    with jsts changes none of those). The UK coastline would have to come from
 *    OpenStreetMap or Natural Earth, which is a licensing decision.
 *  - the Venetian lagoon is a hole in the mainland ring and its sandbars are not
 *    drawn as land, so the Lido and Chioggia are uncoloured at any threshold
 *    that keeps the file small.
 *
 * The single geometry file is a deliberate choice, not laziness: no freely
 * licensed dataset exists that subdivides the Russian and Habsburg empires
 * month by month, so the shapes stay at their July 1914 state for the whole war
 * and the monthly change is carried by the COLOURS, which come from
 * lib/data/status.ts. lib/site.ts and components/MapBrowser.tsx expect dated
 * snapshots, so the manifest supplies one entry per month pointing at the same
 * file; that keeps the month slider honest (gapMonths is always 0) while the map
 * header says plainly that the shapes are the 1914 ones.
 */
import * as turf from '@turf/turf';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CACHE = path.join(ROOT, 'scripts/.cache/ww1-src');
const argv = process.argv.slice(2);
const outFlag = argv.indexOf('--out');
const OUT = path.resolve(ROOT, outFlag === -1 ? 'public/data/borders' : argv[outFlag + 1]);
const REFRESH = argv.includes('--refresh');
fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(CACHE, { recursive: true });

const SOURCE_URL = 'https://zenodo.org/records/20119653/files/first_world_war.json?download=1';
const SOURCE =
  'Boundaries of Europe in July 1914: Jack Kavanagh, "Map of Europe, c. 1914", ' +
  'University College Dublin, Zenodo, DOI 10.5281/zenodo.20119653 (CC BY 4.0). ' +
  'Clipped to the European theatre and simplified.';

/** Name in the source file -> name shown on the map. Dropped if absent. */
const KEEP = {
  'United Kingdom': 'United Kingdom',
  France: 'France',
  Germany: 'Germany',
  Russia: 'Russia',
  'Austria-Hungary': 'Austria-Hungary',
  'Ottoman Empire': 'Ottoman Empire',
  Italy: 'Italy',
  Serbia: 'Serbia',
  Montenegro: 'Montenegro',
  Romania: 'Romania',
  Bulgaria: 'Bulgaria',
  Greece: 'Greece',
  Albania: 'Albania',
  Belgium: 'Belgium',
  Netherlands: 'Netherlands',
  Luxembourg: 'Luxembourg',
  Switzerland: 'Switzerland',
  Denmark: 'Denmark',
  Norway: 'Norway',
  Sweden: 'Sweden',
  Spain: 'Spain',
  Portugal: 'Portugal',
};

const ISO3 = {
  'United Kingdom': 'GBR',
  France: 'FRA',
  Germany: 'DEU',
  Russia: 'RUS',
  'Austria-Hungary': 'AUT',
  'Ottoman Empire': 'OTE',
  Italy: 'ITA',
  Serbia: 'SRB',
  Montenegro: 'MNE',
  Romania: 'ROU',
  Bulgaria: 'BGR',
  Greece: 'GRC',
  Albania: 'ALB',
  Belgium: 'BEL',
  Netherlands: 'NLD',
  Luxembourg: 'LUX',
  Switzerland: 'CHE',
  Denmark: 'DNK',
  Norway: 'NOR',
  Sweden: 'SWE',
  Spain: 'ESP',
  Portugal: 'PRT',
};

// See the header: both values were chosen by the check in
// scripts/check-border-places.mjs. Lower the island cut-off further only if the
// polygon count stays acceptable, and the tolerance only with the file size in mind.
const MIN_ISLAND_KM2 = 25;
const SIMPLIFY_TOLERANCE = 0.01;

// The source stores every vertex with about fifteen significant digits. Four
// decimals is five metres, far inside the simplify tolerance above, and it takes
// the file from 1.4 MB to 0.6 MB (431 KB to 211 KB gzipped), which matters because
// this one file is fetched for all 53 monthly snapshots.
const COORD_DECIMALS = 4;

/** Trims the precision of a coordinate array. */
function roundCoords(coords) {
  if (typeof coords[0] === 'number') return [coords[0].toFixed(COORD_DECIMALS) * 1, coords[1].toFixed(COORD_DECIMALS) * 1];
  return coords.map(roundCoords);
}

/** Rings smaller than MIN_ISLAND_KM2 are dropped. */
function dropSmallRings(poly) {
  const polys = poly.geometry.type === 'MultiPolygon' ? poly.geometry.coordinates : [poly.geometry.coordinates];
  const kept = polys.filter((rings) => {
    try {
      return turf.area(turf.polygon(rings)) / 1e6 >= MIN_ISLAND_KM2;
    } catch {
      return false;
    }
  });
  if (!kept.length) return null;
  return turf.multiPolygon(kept);
}

function prepare(feature) {
  const name = KEEP[feature.properties.name];
  if (!name) return null;
  let poly = turf.combine({ type: 'FeatureCollection', features: [feature] }).features[0];
  if (!poly) return null;
  poly = turf.bboxClip(poly, [-25, 34, 45, 71.5]);
  poly = dropSmallRings(poly);
  if (!poly) return null;
  poly = turf.simplify(poly, { tolerance: SIMPLIFY_TOLERANCE, highQuality: true });
  poly.geometry.coordinates = roundCoords(poly.geometry.coordinates);
  poly.properties = {
    name,
    iso3: ISO3[name],
    snapshot: '1914-07-01',
    source: SOURCE,
  };
  return poly;
}

function countPoints(geometry) {
  let n = 0;
  const walk = (a) => {
    if (typeof a[0] === 'number') n++;
    else a.forEach(walk);
  };
  walk(geometry.coordinates);
  return n;
}

async function loadSource() {
  const cached = path.join(CACHE, 'first_world_war.json');
  if (!REFRESH && fs.existsSync(cached)) return JSON.parse(fs.readFileSync(cached, 'utf8'));
  console.log('downloading', SOURCE_URL);
  const res = await fetch(SOURCE_URL);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  const text = await res.text();
  fs.writeFileSync(cached, text);
  return JSON.parse(text);
}

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'];

/** Every month of the war: July 1914 to November 1918 inclusive. */
function months() {
  const out = [];
  for (let y = 1914; y <= 1918; y++) {
    for (let m = 1; m <= 12; m++) {
      if (y === 1914 && m < 7) continue;
      if (y === 1918 && m > 11) continue;
      out.push(`${y}-${String(m).padStart(2, '0')}`);
    }
  }
  return out;
}

const src = await loadSource();
const features = src.features.map(prepare).filter(Boolean);

// Anything the source calls a European polity but KEEP does not know is a bug.
const unknown = src.features
  .map((f) => f.properties.name)
  .filter(
    (n) =>
      !KEEP[n] &&
      !['Morocco', 'Libya', 'Egypt', 'Algeria', 'Tunisia', 'Iran', 'Liechtenstein'].includes(n)
  );
if (unknown.length) console.warn('dropped (not in KEEP):', unknown.join(', '));

const names = features.map((f) => f.properties.name);
for (const want of Object.values(KEEP)) {
  if (!names.includes(want)) console.warn(`source has no ${want} polygon`);
}

const geometry = { type: 'FeatureCollection', features };
fs.writeFileSync(path.join(OUT, '1914-07-01.json'), JSON.stringify(geometry));

const manifest = {
  source: SOURCE,
  note:
    'One boundary state — Europe as it stood on 1 July 1914 — drawn for every month of the war. ' +
    'What changes month by month is who is at war with whom and whose army holds the ground, which ' +
    'is carried by the colours in lib/data/status.ts. The front line and its movement are drawn as ' +
    'campaign lines.',
  // A snapshot is dated the last day of its month: the map shows the situation
  // as at the end of the month, which is the moment the event cards describe.
  snapshots: months().map((key) => {
    const [y, m] = key.split('-').map(Number);
    const last = new Date(Date.UTC(y, m, 0)).getUTCDate();
    return {
      id: `WW1_${MONTH_NAMES[m - 1]}_${y}`,
      date: `${key}-${String(last).padStart(2, '0')}`,
      label: `${MONTH_NAMES[m - 1]} ${y}`,
      file: '/data/borders/1914-07-01.json',
      countries: features.length,
    };
  }),
};
fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 1));

console.log(
  `wrote ${features.length} polities, ${countPoints(geometry.features[0].geometry)} points in the first polygon, ` +
  `${fs.statSync(path.join(OUT, '1914-07-01.json')).size >> 10} KB, ${manifest.snapshots.length} monthly snapshot entries`
);
console.log(names.join(', '));
