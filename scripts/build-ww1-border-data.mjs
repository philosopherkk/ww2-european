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
 *  - keeps only the polities the site colours. The source has 29 features: Europe
 *    plus Algeria, Tunisia, Libya, Morocco, Egypt and Iran, and those six are
 *    dropped, which is why the Sinai, Persia and the North African coast have no
 *    coloured land under them; Palestine, Arabia and Mesopotamia do, because the
 *    source draws them as the Ottoman Empire; Liechtenstein is in the source but
 *    not in KEEP, so it is dropped, and Monaco, San Marino, Andorra, Vatican City,
 *    Iceland and Malta are not in the source at all;
 *  - drops the one colonial ring that is welded to a metropolitan polygon, Spain's
 *    in the Western Sahara (see DROP_SPAIN_SOUTH_OF), so the map does not claim one
 *    empire's Sahara while leaving another's Algeria unpainted;
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
 *  - MIN_ISLAND_KM2 was 900, which dropped Anglesey, Arran, Islay, Man, Wight,
 *    Corfu, Samos, Samothrace and Bornholm, so Greek Corfu and Danish Bornholm sat
 *    uncoloured on a map of 1914 (Lewis, Sylt and Usedom were already big enough to
 *    survive). At 25 km² they are drawn and the file is still one fetch (0.76 MB,
 *    257 KB gzipped); at 5 km² the Venetian lagoon sandbars come back too, but the
 *    polygon count more than doubles for two pixels of land, so it stays at 25.
 *  - SIMPLIFY_TOLERANCE was 0.03 degrees, about 3 km, which ate Galway Bay,
 *    Wexford and the roadstead of Brest: all three fell outside the polygons. At
 *    0.01 degrees they are inside; 0.015 does not recover Galway.
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
 *  - the Irish coastline in the source cuts across the bays, so Dublin, Howth and
 *    Dun Laoghaire fell outside the British ring in the source file itself (the ring
 *    also crosses itself 12 times). FIXED here, see addIrishCoast(): the island's
 *    outline from Natural Earth 1:50m (public domain) is unioned with the source
 *    ring, so the ring only gains the land its chords had cut off. Nothing else
 *    in the United Kingdom feature is touched.
 *  - the Venetian lagoon is a hole in the mainland ring. Its main islands were not
 *    drawn at all — the city of Venice itself, the Lido, Murano and Pellestrina sat
 *    uncoloured in every month, which reads as water under the fifth city of Italy.
 *    They are drawn now, by the coordinate allow-list in TINY_BOXES below: five rings
 *    of 3.4 to 15 km², +2,117 B and +118 vertices, +5 parts. Measured as the short axis
 *    of the bounding box times the pixels per degree: 0.3 to 1.0 px in the Europe view
 *    (zoom 4), 1.1 to 3.8 px at zoom 6 and 4.6 to 15.2 px at zoom 8, the closest this
 *    map goes. So the city is painted at every zoom but is only legible close in, which
 *    is what the sources list says rather than what this build lets us promise. The thin
 *    sandbars are still not drawn. Neither is anything south of the lagoon: a census of
 *    every ring whose centre falls in 45.10–45.90 N, 12.00–12.90 E finds none between
 *    45.10 and 45.37 N, so Chioggia is not a matter of the floor at all — the source
 *    has no ring there for any build to keep.
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
const NE_URL =
  'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson';
const SOURCE =
  'Boundaries of Europe in July 1914: Jack Kavanagh, "Map of Europe, c. 1914", ' +
  'University College Dublin, Zenodo, DOI 10.5281/zenodo.20119653 (CC BY 4.0). ' +
  'Clipped to the European theatre and simplified. The coast of the island of Ireland is ' +
  'completed from Natural Earth 1:50m (public domain), because the source draws chords ' +
  'across its eastern bays.';

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

/**
 * The one exception to MIN_ISLAND_KM2, and it is a COORDINATE allow-list, not a
 * name list: a ring smaller than 25 km² survives if its centroid falls inside one
 * of these boxes and it reaches the box's own area floor, and it is then simplified
 * at the box's own tolerance. Outside a box every ring is decided and simplified
 * exactly as before, so the global rule and the global tolerance are untouched.
 *
 * Why a box and not a lower global floor, measured on 25 Nov 2026 with the check
 * script as the judge (each build was copied over the shipped file, checked, and
 * the shipped bytes restored, and the control profile reproduced the shipped file
 * byte for byte, so the deltas below are the honest cost of each):
 *   - this box at a 3 km² floor:      +2,117 B (0.28%), 418 parts -> 423, 5 rings;
 *   - the same box at 1 km²:          +3,606 B, +13 parts;
 *   - 5 km² EVERYWHERE:               +71,596 B, +608 parts;
 *   - 1 km² everywhere:               +176,325 B, +1,928 parts.
 * So the global floor stays at 25 and the lagoon is rescued on its own merits: the
 * five rings are Venice itself (6.8 km²), the Lido (8.1), Murano, Pellestrina and
 * one more, and the check script's Venice test stops being a waived warning and
 * becomes a real assertion. The tolerance in a box has to be finer than the global
 * 0.01° (about 1.1 km), or a 3 km² island is simplified away again: at 0.01° this
 * box rescues only 2 parts and the lagoon still reads as water.
 */
const TINY_BOXES = [
  { label: 'Venetian lagoon', box: [12.15, 45.25, 12.75, 45.75], minAreaKm2: 3, tolerance: 0.002 },
];

/** The box a ring's centroid falls in, if any. A ring turf cannot measure rescues nothing. */
function tinyRule(ringCoords) {
  try {
    const c = turf.centroid(turf.polygon([ringCoords])).geometry.coordinates;
    for (const t of TINY_BOXES) {
      const [w, s, e, n] = t.box;
      if (c[0] >= w && c[0] <= e && c[1] >= s && c[1] <= n) return t;
    }
  } catch {
    /* not a ring the check script can measure, so it is dropped as before */
  }
  return null;
}

// Theatre extent (lng/lat): west, south, east, north.
//
// This was [-25, 34, 45, 71.5] until 25 Nov 2026, and 45 E and 34 N are the edges
// of nothing: they cut through states the source draws whole. The source's Russia
// reaches 113.9 E, so Ekaterinburg, Baku and Tashkent sat off the map; its Ottoman
// Empire reaches 48.6 E and 12.7 N, so Palestine, Arabia and Ottoman Mesopotamia
// sat off it too — Jerusalem, Gaza, Kut and Basra are places this site tells
// stories about, and they had no border under them at all. The box was widened to
// 70 E and 12.5 N on 25 Nov 2026, which left one straight edge at 70 E in the
// Kazakh steppe: the reader could see the Russia fill stop dead on a meridian.
//
// On 27 Nov 2026 KK called for that last straight edge to go. The east bound is
// now 120 E, past the source's own furthest vertex at 113.92 E, so nothing is cut
// and the edge is the source's own coast. The cost is real and is stated in the
// sources panel: another 16% over the 70 E build for land no line of this site
// reaches. It is paid so the map does not show a sawn border.
//
// Measured cost of the wider box, counted on the two published files: 330 parts and
// 35,633 vertices become 418 and 42,409, and 640 KB and 215 KB gzipped become 761 KB and
// 257 KB gzipped. The rule is the sum of the ring lengths and it is printed with the
// number, because every ring in these files is closed and a recount that used
// length - 1 came out twenty-four low on both files at once - the same figure the sources
// list quotes, so a stray off-by-one in a one-off count would otherwise have moved the
// published claim. Counting parts and vertices per polity, and hashing each polity's rings,
// eighteen of the twenty-two are unchanged; four move: Russia 33 parts and 5,471 vertices
// to 102 and 10,961, the Ottoman Empire 6 and 1,333 to 15 and 2,425, Spain 6 and 1,434 to
// 14 and 1,600 (the Canary Islands) and Portugal 1 and 393 to 3 and 421 (Madeira). Norway's
// 90 parts are identical too, and that is worth saying because the old north edge was
// 71.5 N: the source's own Norwegian coast tops out at 71.181 N, so it never reached the
// edge it is now cut further from, and the taller edge changes nothing on that coast. What
// the taller edge does buy is Russian land to 81.854 N, which is Franz Josef Land.
//
// What is still outside, and deliberately so, is in SourcesPanel: the source's
// Egypt, Iran, Libya, Algeria, Tunisia and Morocco are not painted here at all.
const CLIP = [-25, 12.5, 120, 82];

// The source stores every vertex with about fifteen significant digits. Four
// decimals is five metres, far inside the simplify tolerance above, and it takes
// the file from 1.6 MB to 0.76 MB (511 KB to 257 KB gzipped), which matters because
// this one file is fetched for all 53 monthly snapshots.
const COORD_DECIMALS = 4;

/**
 * The source attaches one colonial possession to a metropolitan polygon: a single
 * ring of Spain runs down to 20.8 N across the Western Sahara and Ifni. Every
 * other empire in this file is drawn as its European metropole alone — the source
 * keeps Algeria, Tunisia, Morocco, Egypt and Libya as separate features, and this
 * map does not paint any of them — so leaving that ring in would give a reader a
 * map where the Sahara belongs to Spain and Algeria belongs to nobody. It is
 * dropped. The Canary Islands are their own rings and reach no further south than
 * 27.64 N, so they are untouched; the cut is at 27.5 N, between the two.
 */
const DROP_SPAIN_SOUTH_OF = 27.5;

/** Drops rings of a polygon that reach south of a latitude. */
function dropRingsSouthOf(poly, south) {
  const polys = poly.geometry.type === 'MultiPolygon' ? poly.geometry.coordinates : [poly.geometry.coordinates];
  const kept = polys.filter((rings) => {
    const [, minLat] = turf.bbox(turf.polygon(rings));
    return minLat >= south;
  });
  if (!kept.length) return null;
  return turf.multiPolygon(kept);
}

/** Trims the precision of a coordinate array. */
function roundCoords(coords) {
  if (typeof coords[0] === 'number') return [coords[0].toFixed(COORD_DECIMALS) * 1, coords[1].toFixed(COORD_DECIMALS) * 1];
  return coords.map(roundCoords);
}

/**
 * Decides and simplifies one polygon at a time, in the source's order, so a ring
 * outside a TINY_BOXES box is bit-identical to what the previous build wrote and a
 * ring inside one gets that box's area floor and tolerance. Returns the multipolygon
 * and how many rings the box rescued, which is printed at the end of the run.
 */
function keepAndSimplify(poly) {
  const polys = poly.geometry.type === 'MultiPolygon' ? poly.geometry.coordinates : [poly.geometry.coordinates];
  const out = [];
  let saved = 0;
  for (const rings of polys) {
    let areaKm2 = NaN;
    try {
      areaKm2 = turf.area(turf.polygon(rings)) / 1e6;
    } catch {
      continue; // a ring that cannot be measured is dropped, as it always was
    }
    const rule = areaKm2 < MIN_ISLAND_KM2 ? tinyRule(rings[0]) : null;
    if (areaKm2 < MIN_ISLAND_KM2 && !rule) continue;
    if (rule && areaKm2 < rule.minAreaKm2) continue;
    saved += rule ? 1 : 0;
    const piece = turf.simplify(turf.polygon(rings), {
      tolerance: rule ? rule.tolerance : SIMPLIFY_TOLERANCE,
      highQuality: true,
    });
    const g = piece?.geometry;
    if (!g) continue;
    const rs = g.type === 'MultiPolygon' ? g.coordinates.flat() : [g.coordinates];
    for (const r of rs) out.push(r);
  }
  if (!out.length) return [null, 0];
  return [turf.multiPolygon(out), saved];
}

let naturalEarth = null;

async function loadNaturalEarth() {
  const cached = path.join(CACHE, 'ne_50m_admin_0_countries.geojson');
  if (!REFRESH && fs.existsSync(cached)) return JSON.parse(fs.readFileSync(cached, 'utf8'));
  console.log('downloading', NE_URL);
  const res = await fetch(NE_URL);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  const text = await res.text();
  fs.writeFileSync(cached, text);
  return JSON.parse(text);
}

const ringsOf = (f) => (f.geometry.type === 'MultiPolygon' ? f.geometry.coordinates : [f.geometry.coordinates]);

/**
 * The island of Ireland was wholly in the United Kingdom in July 1914. The source
 * ring for it (the one polygon wholly west of 5.3 W and larger than 50,000 km2)
 * is replaced by its union with Natural Earth's outline of the island, which is
 * the Republic's two polygons plus the one Northern Ireland polygon of the UK feature.
 */
function addIrishCoast(poly) {
  const rings = ringsOf(poly);
  const isIreland = (r) => {
    const p = turf.polygon(r);
    const b = turf.bbox(p);
    return b[2] < -5.3 && b[1] > 51 && b[3] < 55.5 && turf.area(p) / 1e6 > 50000;
  };
  const idx = rings.findIndex(isIreland);
  if (idx === -1) throw new Error('the source has no Irish ring any more; check addIrishCoast');
  const ire = naturalEarth.features.find((f) => f.properties.ADMIN === 'Ireland');
  const uk = naturalEarth.features.find((f) => f.properties.ADMIN === 'United Kingdom');
  const ni = ringsOf(uk).filter((r) => {
    const p = turf.polygon(r);
    const b = turf.bbox(p);
    return b[0] > -8.3 && b[2] < -5.3 && b[1] > 54 && b[3] < 55.4 && turf.area(p) / 1e6 > 5000;
  });
  if (!ire || ni.length !== 1) throw new Error('Natural Earth Ireland/Northern Ireland not found');
  let island = turf.union(turf.featureCollection([...ringsOf(ire), ...ni].map((r) => turf.polygon(r))));
  island = turf.union(turf.featureCollection([turf.polygon(rings[idx]), island]));
  const rest = rings.filter((_, i) => i !== idx);
  return turf.multiPolygon([...rest, ...ringsOf(island)]);
}

function prepare(feature) {
  const name = KEEP[feature.properties.name];
  if (!name) return null;
  let poly = turf.combine({ type: 'FeatureCollection', features: [feature] }).features[0];
  if (!poly) return null;
  if (name === 'United Kingdom') poly = addIrishCoast(poly);
  poly = turf.bboxClip(poly, CLIP);
  if (name === 'Spain') poly = dropRingsSouthOf(poly, DROP_SPAIN_SOUTH_OF);
  if (!poly) return null;
  let saved = 0;
  [poly, saved] = keepAndSimplify(poly);
  if (!poly) return null;
  rescued.push([name, saved]);
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

/** Which feature rescued how many sub-MIN_ISLAND_KM2 rings through TINY_BOXES, for the log. */
const rescued = [];

const src = await loadSource();
naturalEarth = await loadNaturalEarth();
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
const savedTotal = rescued.reduce((n, [, k]) => n + k, 0);
console.log(
  `island floor ${MIN_ISLAND_KM2} km², ${TINY_BOXES.length} allow-list box(es), ` +
  `${savedTotal} ring(s) rescued: ${rescued.filter(([, k]) => k).map(([n, k]) => `${n} ${k}`).join(', ') || 'none'}`
);
