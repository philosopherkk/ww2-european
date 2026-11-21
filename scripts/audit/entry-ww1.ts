// Development-only data dump for the audit scripts. Nothing in the app imports
// this file, but `next build` type-checks everything under the repo, so the
// imports here have to resolve the same way they do in the app: relative, never
// with an absolute local path (an absolute path builds on one laptop and fails
// the deployment build everywhere else).
//
// Regenerate the dump the checks read with (run from the repository root, which
// is where the border data below is looked for):
//   npx esbuild scripts/audit/entry-ww1.ts --bundle --platform=node --format=esm \
//     --outfile=/tmp/ww1-dump.mjs && node /tmp/ww1-dump.mjs > /tmp/ww1.json
import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { EVENTS, FIGURES, CAMPAIGN_LINES, SOURCES, UNCERTAINTIES, COUNTRY_STATS, STATUS_ORDER } from '../../lib/data/index';
import { TURNING_POINTS } from '../../lib/data/turning-points';
import { PLACES } from '../../lib/data/places';
import { statusFor } from '../../lib/data/status';
import { MONTHS, nearestSnapshot } from '../../lib/site';

const dir = resolve('public/data/borders');
const names = new Set<string>();
for (const f of readdirSync(dir).filter((f) => f.endsWith('.json') && f !== 'manifest.json')) {
  const fc: { features: { properties: { name: string } }[] } = JSON.parse(readFileSync(`${dir}/${f}`, 'utf8'));
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
