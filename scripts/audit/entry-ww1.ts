import { readdirSync, readFileSync } from 'node:fs';
import { EVENTS, FIGURES, CAMPAIGN_LINES, SOURCES, UNCERTAINTIES, COUNTRY_STATS, STATUS_ORDER } from '/Users/ka-kinpoon/Project/WW2/WW1-European/lib/data/index';
import { TURNING_POINTS } from '/Users/ka-kinpoon/Project/WW2/WW1-European/lib/data/turning-points';
import { PLACES } from '/Users/ka-kinpoon/Project/WW2/WW1-European/lib/data/places';
import { statusFor } from '/Users/ka-kinpoon/Project/WW2/WW1-European/lib/data/status';
import { MONTHS, nearestSnapshot } from '/Users/ka-kinpoon/Project/WW2/WW1-European/lib/site';

const dir = '/Users/ka-kinpoon/Project/WW2/WW1-European/public/data/borders';
const names = new Set<string>();
for (const f of readdirSync(dir).filter((f) => f.endsWith('.json') && f !== 'manifest.json')) {
  const fc = JSON.parse(readFileSync(`${dir}/${f}`, 'utf8'));
  for (const feat of fc.features) names.add(feat.properties.name);
}
const timeline: Record<string, Record<string, string>> = {};
for (const m of MONTHS) {
  const snap = nearestSnapshot(m.key).snapshot;
  const row: Record<string, string> = {};
  for (const n of names) row[n] = statusFor(m.key, n);
  timeline[m.key] = row;
}
console.log(JSON.stringify({ EVENTS, FIGURES, CAMPAIGN_LINES, SOURCES, UNCERTAINTIES, COUNTRY_STATS, STATUS_ORDER, TURNING_POINTS, PLACES, MONTHS, timeline, territories: [...names] }, null, 1));
