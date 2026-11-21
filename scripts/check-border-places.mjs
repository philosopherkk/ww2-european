/**
 * Checks the built border layer by asking which polity polygon a known town falls
 * inside. The towns are chosen because their 1914 sovereign is documented, so a
 * failure means the geometry moved a border, not that a date is in dispute.
 *
 *   node scripts/check-border-places.mjs [path/to/1914-07-01.json]
 *
 * Exits 1 if any town in EXPECTED is in the wrong polity or in none. The
 * KNOWN_SOURCE_DEFECTS list is printed as warnings: those places are wrong in
 * the source dataset (see the header of build-ww1-border-data.mjs), and the
 * check does not fail on them so that the build stays usable until better
 * geometry arrives. When that happens, move the place into EXPECTED.
 */
import * as turf from '@turf/turf';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FILE = process.argv[2]
  ? path.resolve(ROOT, process.argv[2])
  : path.join(ROOT, 'public/data/borders/1914-07-01.json');

/** Town -> [name, lng, lat, polity it must fall inside]. */
const EXPECTED = [
  ['London', -0.12, 51.5, 'United Kingdom'],
  ['Douglas, Isle of Man', -4.48, 54.15, 'United Kingdom'],
  ['Newport, Isle of Wight', -1.3, 50.68, 'United Kingdom'],
  ['Stornoway, Isle of Lewis', -6.39, 58.21, 'United Kingdom'],
  ['Cork', -8.47, 51.898, 'United Kingdom'],
  ['Galway', -9.05, 53.27, 'United Kingdom'],
  ['Wexford', -6.46, 52.335, 'United Kingdom'],
  ['Belfast', -5.93, 54.6, 'United Kingdom'],
  ['Berlin', 13.4, 52.52, 'Germany'],
  ['Westerland, Sylt', 8.33, 54.9, 'Germany'],
  ['Usedom', 14.05, 53.98, 'Germany'],
  ['Memel', 21.13, 55.71, 'Germany'],
  ['Königsberg', 20.5, 54.7, 'Germany'],
  ['Copenhagen', 12.57, 55.68, 'Denmark'],
  ['Bornholm', 14.9, 55.08, 'Denmark'],
  ['Paris', 2.35, 48.86, 'France'],
  ['Brest', -4.49, 48.39, 'France'],
  ['Cherbourg', -1.62, 49.64, 'France'],
  ['Rome', 12.5, 41.9, 'Italy'],
  ['Milan', 9.19, 45.46, 'Italy'],
  ['Udine', 13.235, 46.06, 'Italy'],
  ['Vienna', 16.37, 48.21, 'Austria-Hungary'],
  ['Budapest', 19.04, 47.5, 'Austria-Hungary'],
  ['Prague', 14.42, 50.09, 'Austria-Hungary'],
  ['Kraków', 19.94, 50.06, 'Austria-Hungary'],
  ['Pula', 13.85, 44.87, 'Austria-Hungary'],
  ['Fiume / Rijeka', 14.44, 45.33, 'Austria-Hungary'],
  ['Laibach / Ljubljana', 14.51, 46.05, 'Austria-Hungary'],
  ['Sarajevo', 18.41, 43.86, 'Austria-Hungary'],
  ['Görz / Gorizia', 13.65, 45.94, 'Austria-Hungary'],
  ['Warsaw', 20.99, 52.23, 'Russia'],
  ['Vilna', 25.28, 54.69, 'Russia'],
  ['Riga', 24.1, 56.95, 'Russia'],
  ['Kars', 43.09, 40.6, 'Russia'],
  ['Belgrade', 20.46, 44.82, 'Serbia'],
  ['Cetinje', 18.92, 42.39, 'Montenegro'],
  ['Bucharest', 26.1, 44.43, 'Romania'],
  ['Sofia', 23.32, 42.7, 'Bulgaria'],
  ['Corfu', 19.92, 39.62, 'Greece'],
  ['Samos', 26.97, 37.75, 'Greece'],
  ['Mytilini, Lesbos', 26.55, 39.1, 'Greece'],
  ['Chios', 26.13, 38.37, 'Greece'],
  ['Samothrace', 25.5, 40.45, 'Greece'],
  ['Athens', 23.72, 37.98, 'Greece'],
  ['Constantinople', 28.97, 41.01, 'Ottoman Empire'],
  ['Amsterdam', 4.89, 52.37, 'Netherlands'],
  ['Brussels', 4.35, 50.85, 'Belgium'],
  ['Luxembourg', 6.13, 49.61, 'Luxembourg'],
  ['Bern', 7.45, 46.95, 'Switzerland'],
  ['Madrid', -3.7, 40.42, 'Spain'],
  ['Lisbon', -9.14, 38.72, 'Portugal'],
  ['Stockholm', 18.07, 59.33, 'Sweden'],
  ['Christiania / Oslo', 10.74, 59.91, 'Norway'],
];

/** Wrong in the source dataset: [name, lng, lat, polity it should be in]. */
const KNOWN_SOURCE_DEFECTS = [
  // The north-eastern edge of the Italian polygon follows the Soča (Isonzo) line
  // of 1915-17, not the 1914 frontier, so the Austrian Littoral reads as Italian.
  ['Gradisca / Gradisca d’Isonzo', 13.507, 45.907, 'Austria-Hungary'],
  ['Cormons', 13.451, 45.956, 'Austria-Hungary'],
  ['Monfalcone', 13.534, 45.802, 'Austria-Hungary'],
  ['Grado', 13.395, 45.674, 'Austria-Hungary'],
  ['Trieste', 13.77, 45.65, 'Austria-Hungary'],
  ['Dublin', -6.26, 53.345, 'United Kingdom'],
  ['Venice', 12.335, 45.438, 'Italy'], // the city islands fall under the 25 km² cut-off
  ['Lemnos', 26.06, 39.9, 'Greece'], // Ottoman in the source; after 1913 only Imbros and Tenedos were
  ['Rønne, Bornholm', 14.71, 55.05, 'Denmark'], // the island is drawn a few km off centre
];

const gj = JSON.parse(fs.readFileSync(FILE, 'utf8'));
const byName = new Map();
for (const f of gj.features) {
  if (!byName.has(f.properties.name)) byName.set(f.properties.name, []);
  byName.get(f.properties.name).push(f.geometry);
}

function holders(lng, lat) {
  const hits = [];
  for (const [name, geoms] of byName) {
    for (const g of geoms) {
      try {
        if (turf.booleanPointInPolygon([lng, lat], g, { ignoreBoundary: true })) hits.push(name);
      } catch {
        /* a bad ring is reported below as a miss */
      }
    }
  }
  return hits;
}

let failures = 0;
console.log(FILE.split(path.sep).pop());
for (const [place, lng, lat, want] of EXPECTED) {
  const hits = holders(lng, lat);
  const ok = hits.includes(want);
  if (!ok) failures++;
  console.log(
    `  ${ok ? 'ok  ' : 'FAIL'} ${place.padEnd(24)} in ${hits.length ? hits.join(' + ') : 'nothing'}${ok ? '' : `, expected ${want}`}`
  );
}

for (const [place, lng, lat, want] of KNOWN_SOURCE_DEFECTS) {
  const hits = holders(lng, lat);
  if (hits.includes(want)) {
    console.log(`  NOTE ${place.padEnd(24)} now in ${want}: fixed in the source, move it into EXPECTED`);
  } else {
    console.log(`  warn ${place.padEnd(24)} in ${hits.length ? hits.join(' + ') : 'nothing'}, should be ${want}`);
  }
}

console.log(failures ? `${failures} of ${EXPECTED.length} places in the wrong polity` : `all ${EXPECTED.length} places correct`);
process.exit(failures ? 1 : 0);
