/**
 * Builds public/data/world/world.json: the context layer drawn under the Stanford
 * border snapshots when the map is zoomed out to the whole world.
 *
 *   node scripts/build-world-layer.mjs [--out DIR] [--refresh]
 *
 * Source: Natural Earth 1:50m admin-0 countries and admin-1 provinces (public domain),
 * https://github.com/nvkelso/natural-earth-vector. Raw downloads are cached in
 * scripts/.cache/world-src; --refresh re-downloads.
 *
 * What this layer is, and is not:
 *  - The outlines are MODERN. Colours are computed at runtime by lib/data/world-status.ts
 *    from a dated timeline for each key, so a polygon labelled "Burma" is today's Myanmar
 *    coloured for who held most of it on the snapshot date. There is no 1939-45 geometry.
 *  - Europe is left to the Stanford layers. Parts of the countries Stanford already draws
 *    are dropped when they fall inside its box (below); overseas parts (French Guiana,
 *    the Azores, Svalbard ...) are kept and given their own keys.
 *  - The Soviet successor states keep only the land that NO Stanford polygon covers in any
 *    snapshot (so the two layers never overlap), merged under the single key SUN. That
 *    includes the Urals and Kazakhstan: the Stanford "Soviet Union" ends near 57-60 degrees
 *    east and north of 50 degrees, not at the edge of its box. South Sakhalin and the Kuril
 *    Islands become JPN.
 *  - China is the 28 provinces other than Liaoning, Jilin and Heilongjiang (key CHN);
 *    those three are the key MCK, a modern-province stand-in for Manchukuo.
 */
import * as turf from '@turf/turf';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CACHE = path.join(ROOT, 'scripts/.cache/world-src');
const argv = process.argv.slice(2);
const outFlag = argv.indexOf('--out');
const OUT = path.resolve(ROOT, outFlag === -1 ? 'public/data/world' : argv[outFlag + 1]);
const REFRESH = argv.includes('--refresh');
fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(CACHE, { recursive: true });

const BASE = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/';
const SOURCES = {
  countries: 'ne_50m_admin_0_countries.geojson',
  admin1: 'ne_50m_admin_1_states_provinces.geojson',
};

const SIMPLIFY = 0.01; // degrees, about 1 km
const MIN_AREA_KM2 = 8; // parts below this go, except the largest part of each key
const DECIMALS = 3;
const SLIVER_KM2 = 5000; // pieces smaller than this inside the Stanford box are coast mismatch, not land

/** Extent of the Stanford layers: west, south, east, north. */
const BOX = [-24.5, 34.6, 62, 71];

/** ADM0 codes of the countries the Stanford layers already draw. */
const COVERED = new Set(
  ('ALB AND AUT BEL BGR BIH CHE CYP CYN CZE DEU DNK ESP FIN FRA GBR GRC HRV HUN IRL ISL ITA ' +
    'KOS LIE LUX MCO MKD MLT MNE NLD NOR POL PRT ROU SMR SRB SVK SVN SWE TUR VAT ALD JEY GGY ' +
    'IMN FRO').split(' ')
);
/** Soviet successor states: what Stanford does not cover, merged as SUN. */
const SOVIET = new Set('RUS UKR BLR EST LVA LTU MDA GEO ARM AZE KAZ UZB TKM KGZ TJK'.split(' '));
/** Not drawn at all. */
const DROP = new Set(['ATA', 'ATF', 'HMD', 'KAS', 'ATC', 'IOA', 'NFK', 'CHN']);

async function load(name) {
  const file = path.join(CACHE, SOURCES[name]);
  if (REFRESH || !fs.existsSync(file)) {
    const res = await fetch(BASE + SOURCES[name]);
    if (!res.ok) throw new Error(`${name}: HTTP ${res.status}`);
    fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
  }
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

/** Union of every polygon in every Stanford snapshot. */
function stanfordFootprint() {
  const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'public/data/borders/manifest.json'), 'utf8'));
  const polys = [];
  for (const snap of manifest.snapshots) {
    const file = path.join(ROOT, 'public', snap.file.replace(/^\//, ''));
    for (const f of JSON.parse(fs.readFileSync(file, 'utf8')).features) {
      const parts = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
      for (const p of parts) polys.push(turf.polygon(p));
    }
  }
  const batches = [];
  for (let i = 0; i < polys.length; i += 40) {
    batches.push(turf.union(turf.featureCollection(polys.slice(i, i + 40))));
  }
  return turf.union(turf.featureCollection(batches));
}

const polysOf = (g) => (g.type === 'Polygon' ? [g.coordinates] : g.coordinates);
const bboxOf = (poly) => {
  let w = 180, s = 90, e = -180, n = -90;
  for (const [x, y] of poly[0]) {
    if (x < w) w = x;
    if (x > e) e = x;
    if (y < s) s = y;
    if (y > n) n = y;
  }
  return [w, s, e, n];
};
const centre = (poly) => {
  const [w, s, e, n] = bboxOf(poly);
  return [(w + e) / 2, (s + n) / 2];
};
const insideBox = ([x, y]) => x >= BOX[0] && x <= BOX[2] && y >= BOX[1] && y < BOX[3] - 0.1;
const inRect = (c, [w, s, e, n]) => c[0] >= w && c[0] <= e && c[1] >= s && c[1] <= n;

/** Clip one polygon to a rectangle with holes handled; returns polygons (possibly none). */
function clip(poly, rect) {
  const f = turf.bboxClip(turf.polygon(poly), rect);
  const g = f.geometry;
  const out = g.type === 'Polygon' ? [g.coordinates] : g.coordinates;
  return out
    .map((p) => p.filter((r) => r.length >= 4))
    .filter((p) => p.length > 0 && turf.area(turf.polygon(p)) > 0);
}

/** What is left of a polygon once the Stanford footprint is taken out. */
function uncovered(poly, footprint) {
  const d = turf.difference(turf.featureCollection([turf.polygon(poly), footprint]));
  if (!d) return [];
  const pieces = d.geometry.type === 'Polygon' ? [d.geometry.coordinates] : d.geometry.coordinates;
  // Slivers inside the box are where Stanford's coarse coast falls short of Natural Earth's.
  return pieces.filter((q) => insideBox(centre(q)) ? turf.area(turf.polygon(q)) / 1e6 >= SLIVER_KM2 : true);
}

/** Overseas parts of countries Stanford covers get their own key. */
function keyForOverseas(code, c) {
  const [x, y] = c;
  if (code === 'FRA') {
    if (y < 8 && x < -40) return 'FRA_GUF';
    if (y > 10 && x < -50) return 'FRA_ANT';
    if (x > 40 && x < 50) return 'FRA_MYT';
    if (x > 50 && x < 60) return 'FRA_REU';
    return 'FRA';
  }
  if (code === 'NLD') return 'NLD_CAR';
  return code;
}

const parts = new Map(); // key -> Polygon coordinate arrays
const NAMES = {
  SUN: 'Soviet Union',
  MCK: 'Manchukuo (modern Liaoning, Jilin and Heilongjiang)',
  CHN: 'China',
  FRA_GUF: 'French Guiana',
  FRA_ANT: 'Guadeloupe and Martinique',
  FRA_MYT: 'Mayotte',
  FRA_REU: 'Réunion',
  NLD_CAR: 'Dutch Caribbean islands',
  NOR: 'Norway (Svalbard and Jan Mayen)',
  PRT: 'Portugal (Azores and Madeira)',
  ESP: 'Spain (Canary Islands)',
};
const add = (key, poly) => {
  if (!parts.has(key)) parts.set(key, []);
  parts.get(key).push(poly);
};

const footprint = stanfordFootprint();
const countries = await load('countries');
for (const f of countries.features) NAMES[f.properties.ADM0_A3] ??= f.properties.ADMIN;
const unmapped = [];

for (const f of countries.features) {
  const code = f.properties.ADM0_A3;
  if (DROP.has(code)) continue;
  for (const poly of polysOf(f.geometry)) {
    const c = centre(poly);
    if (SOVIET.has(code)) {
      // Kuril Islands and the south of Sakhalin were Japanese.
      if (code === 'RUS' && inRect(c, [145, 43, 157, 51.5])) {
        add('JPN', poly);
        continue;
      }
      if (code === 'RUS' && inRect(c, [141, 45, 145, 55])) {
        for (const p of clip(poly, [-180, -90, 180, 50])) add('JPN', p);
        for (const p of clip(poly, [-180, 50, 180, 90])) add('SUN', p);
        continue;
      }
      for (const p of uncovered(poly, footprint)) add('SUN', p);
      continue;
    }
    if (COVERED.has(code)) {
      if (insideBox(c)) continue;
      add(keyForOverseas(code, c), poly);
      continue;
    }
    add(code, poly);
  }
}

// China: modern provinces, Manchukuo carved out as a disclosed stand-in.
const admin1 = await load('admin1');
const chinaCountry = countries.features.find((f) => f.properties.ADM0_A3 === 'CHN');
const provinces = admin1.features.filter((f) => f.properties.admin === 'China');
const MANCHU = new Set(['Liaoning', 'Jilin', 'Heilongjiang']);
const manchu = provinces.filter((f) => MANCHU.has(f.properties.name));
if (manchu.length !== 3) throw new Error('expected Liaoning, Jilin and Heilongjiang');
const manchuUnion = turf.union(turf.featureCollection(manchu));
const mck = turf.intersect(turf.featureCollection([chinaCountry, manchuUnion]));
const chn = turf.difference(turf.featureCollection([chinaCountry, manchuUnion]));
for (const [key, g] of [['MCK', mck], ['CHN', chn]]) {
  for (const poly of polysOf(g.geometry)) add(key, poly);
}

const round = (n) => Number(n.toFixed(DECIMALS));
const clean = (poly) => {
  const rings = [];
  poly.forEach((ring, i) => {
    const pts = [];
    for (const [x, y] of ring) {
      const p = [round(x), round(y)];
      const q = pts[pts.length - 1];
      if (!q || q[0] !== p[0] || q[1] !== p[1]) pts.push(p);
    }
    if (pts.length >= 4) rings.push(pts);
    else if (i === 0) rings.length = 0;
  });
  return rings.length ? rings : null;
};

const features = [];
const report = [];
for (const [key, polys] of [...parts.entries()].sort(([a], [b]) => a.localeCompare(b))) {
  const sized = polys
    .map((p) => ({ p, km2: turf.area(turf.polygon(p)) / 1e6 }))
    .sort((a, b) => b.km2 - a.km2);
  const kept = [];
  sized.forEach(({ p, km2 }, i) => {
    if (i > 0 && km2 < MIN_AREA_KM2) return;
    let q = p;
    try {
      const s = turf.simplify(turf.polygon(p), { tolerance: SIMPLIFY, highQuality: false });
      q = s.geometry.coordinates;
    } catch {
      /* keep the unsimplified outline */
    }
    const c = clean(q) ?? clean(p);
    if (c) kept.push(c);
  });
  if (!kept.length) continue;
  report.push(`${key}:${kept.length}/${polys.length}`);
  features.push({
    type: 'Feature',
    properties: { key, name: NAMES[key] ?? key },
    geometry: { type: 'MultiPolygon', coordinates: kept },
  });
}

const out = {
  type: 'FeatureCollection',
  source:
    'Natural Earth 1:50m admin-0 countries and admin-1 provinces (public domain). Modern outlines; ' +
    'colours are computed per date by lib/data/world-status.ts.',
  features,
};
const file = path.join(OUT, 'world.json');
fs.writeFileSync(file, JSON.stringify(out));
const bytes = fs.statSync(file).size;
console.log(`${features.length} keys, ${(bytes / 1024).toFixed(0)} KB -> ${path.relative(ROOT, file)}`);
console.log(report.join(' '));
if (unmapped.length) console.log('unmapped:', unmapped.join(' '));
