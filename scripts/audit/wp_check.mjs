#!/usr/bin/env node
/* Waypoint proof: does each map vertex actually sit where the curated link claims it does?

    node wp_check.cjs <ww1|ww2> <payload.json> <out.json>     SELFTEST=1 node wp_check.cjs

    <payload.json> is a findings file with a `links` array of { line, at, event, want }. `want` is
    the place the waypoint is entitled to name — a `/`-separated list of accepted spellings
    ("Thessaloniki / Salonika"), because the site names places as contemporaries did.

For each link this reads the vertex coordinates OUT OF THE LIVE DUMP, reverse-geocodes them, forward-
geocodes the claimed place, and records both plus the distance. The output is a proof file keyed
`line@at` with exactly the fields apply_ww1_gaps.py and apply_ww1_links.py re-check:

    { coords, want, at, event, window, locality, city, district, region, country, hay, km, nearest, ok }

The applier REFUSES a link whose proof is not `ok: true`, whose `at`/`event` differ from the row, or
whose `coords` no longer match the vertex it is about to write (a line that moved since the proof).

Names are compared after folding case and diacritics, so an ASCII-typed "Munchen" matches "München" — but
an exonym is a different word, so "Munich" does NOT match "München". Listing every accepted spelling in
`want` is the fix, never a hidden alias table inside this tool.

Why the joined fields and not `locality`: Salonika answers "1st District of Thessaloniki" and Kazan
answers "Vakhitovskiy Rayon" with the real name only in `city`, so an assertion against `locality`
alone fails a correct pin. `hay` is every returned name joined; `ok` needs the claimed place in it
AND the vertex within WP_KM (60 km by default, per-link `max_km` overrides).

This gate REPORTS. `ok: false` with a reason is a correct result — the applier is what refuses.

    WP_CACHE=<dir>   canned Nominatim bodies, one JSON per sha1(url) — {"json": {...}} (the self-test
                     uses this so it never touches the network)
    WP_KM=<n>        distance limit
    Nominatim policy: one request per second, descriptive User-Agent, no bulk downloads.
*/
/* CommonJS (.cjs) on purpose: the name in the notes and in the applier's comments is wp_check.cjs. */
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const AUDIT = resolve(__dirname);
const SITE = process.argv[2];
const PAYLOAD = process.argv[3];
const OUT = process.argv[4];
/* Same rule as linkcheck.py: the places are read from a tree, so the tree is named, never assumed. */
const SELF_REPO = AUDIT.endsWith('/scripts/audit') ? resolve(AUDIT, '..', '..') : null;
const REPOS = (() => {
  const base = { ww1: '/Users/ka-kinpoon/Project/WW2/WW1-European', ww2: '/Users/ka-kinpoon/Project/WW2/ww2-european' };
  if (process.env.REPO) return { ww1: process.env.REPO, ww2: process.env.REPO };
  if (SELF_REPO) return { ww1: SELF_REPO, ww2: SELF_REPO };
  return base;
})();
const UA = 'ww2-european-audit/1.0 (waypoint proof for the historical map at ww2-european.vercel.app)';
const KM_LIMIT = Number(process.env.WP_KM || 60);
const CACHE = process.env.WP_CACHE || `${AUDIT}/cache/geocode`;

const fold = (s) => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

function haversineKm(a, b) {
  const R = 6371, d = (x) => (x * Math.PI) / 180;
  // The longitude term is a SINE. With a cosine here, two identical points came out 20,000 km apart
  // and every waypoint "proved" too far from its own name — found by running the tool live, not by
  // the pure judge, which is why the pure judge is not enough for maths.
  const h = Math.sin(d(b[0] - a[0]) / 2) ** 2 +
    Math.cos(d(a[0])) * Math.cos(d(b[0])) * Math.sin(d(b[1] - a[1]) / 2) ** 2;
  return Math.round(2 * R * Math.asin(Math.sqrt(h)) * 10) / 10;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let lastCall = 0;

async function nominatim(params, { reverse = false, noLanguage = false } = {}) {
  // `accept-language`, not `acceptlanguage`: the misspelling is silently ignored and Nominatim answers
  // in the local script, so "Thessaloniki" came back as Δημοτική Ενότητα Θεσαλονίκης and failed.
  const q = new URLSearchParams({ format: 'jsonv2', ...params });
  if (!noLanguage) q.set('accept-language', 'en');
  const url = `https://nominatim.openstreetmap.org/${reverse ? 'reverse' : 'search'}?${q}`;
  const key = createHash('sha1').update(url).digest('hex');
  const cacheFile = `${CACHE}/${key}.json`;
  if (existsSync(cacheFile)) return JSON.parse(readFileSync(cacheFile, 'utf8'));
  if (!process.env.WP_CACHE) {
    const wait = lastCall + 1100 - Date.now();
    if (wait > 0) await sleep(wait);
    lastCall = Date.now();
    // The header, not only the query param: with the header pinned to "en" on BOTH calls, the
    // noLanguage render came back in English too and Passendale still failed. One call asks for English,
    // the other asks for nothing and gets the local name.
    const headers = { 'user-agent': UA };
    if (!noLanguage) headers['accept-language'] = 'en';
    const res = await fetch(url, { headers });
    if (!res.ok) return { status: res.status, error: `HTTP ${res.status}`, json: {} };
    const body = await res.json();
    const env = { url, status: res.status, json: body };
    mkdirSync(CACHE, { recursive: true });
    writeFileSync(cacheFile, JSON.stringify(env));
    return env;
  }
  // Self-test mode with no canned body: return nothing rather than reach the network.
  return { status: 0, error: `no canned body for ${url}`, json: {} };
}

/* Nominatim answers differently depending on the language asked for, and BOTH are the same place: the
   English render of the Passendale pin says "Passchendaele", the local render says "Passendale". Reading
   only one of them produced a false failure on a correct pin (26 Nov), so `hay` is the union of both
   renders. That is reading one record twice — it is NOT an alias table, which is what I must not build. */
function unionHay(a, b) {
  const seen = new Set(), out = [];
  for (const part of [String(a || ''), String(b || '')].flatMap((x) => x.split(/\s*\|\s*/))) {
    const k = fold(part);
    if (k && !seen.has(k)) { seen.add(k); out.push(part); }
  }
  return out.join(' | ');
}

/* The one rule this tool exists to enforce, kept pure so the self-test can plant every case. */
function judge({ hay, want, km, limit = KM_LIMIT }) {
  const alts = String(want || '').split('/').map((s) => s.trim()).filter(Boolean);
  if (!alts.length) return { ok: false, why: 'no `want` place to assert' };
  const h = fold(hay);
  const matched = alts.find((w) => fold(w) && ` ${h} `.includes(` ${fold(w)} `));
  if (!matched) return { ok: false, why: `none of [${alts.join(', ')}] appears in the returned names` };
  if (km === null || km === undefined) return { ok: false, why: `no forward geocode for "${matched}" to measure against` };
  if (km > limit) return { ok: false, why: `vertex is ${km} km from "${matched}" (limit ${limit})` };
  return { ok: true, why: `matches "${matched}" ${km} km from the vertex` };
}

async function main() {
  const dump = JSON.parse(readFileSync(`${AUDIT}/out/_shared/live-${SITE}.json`, 'utf8'));
  const lines = Object.fromEntries([...dump.CAMPAIGN_LINES, ...(dump.MARCH_LINES || [])].map((l) => [l.id, l]));
  const events = Object.fromEntries(dump.EVENTS.map((e) => [e.id, e.date]));
  const links = JSON.parse(readFileSync(PAYLOAD, 'utf8')).links || [];
  if (!links.length) {
    console.error(`wp_check: ${PAYLOAD} has no links array — proving nothing is a pass that measured nothing`);
    process.exit(2);
  }
  const proof = {};
  let bad = 0;
  for (const l of links) {
    const ln = lines[l.line];
    const vertex = ln && ln.path ? ln.path[l.at] : undefined;
    if (!ln || !vertex) {
      console.log(`FAIL ${l.line}@${l.at} NO SUCH LINE OR WAYPOINT (line ${ln ? `path len ${ln.path.length}` : 'missing'})`);
      proof[`${l.line}@${l.at}`] = { ok: false, coords: null, want: l.want, at: l.at, event: l.event, why: 'no such waypoint' };
      bad++;
      continue;
    }
    const coords = Array.isArray(vertex) ? vertex : [vertex.lat, vertex.lng];
    const revEn = await nominatim({ lat: coords[0], lon: coords[1], zoom: 10, addressdetails: 1 }, { reverse: true });
    const revLocal = await nominatim({ lat: coords[0], lon: coords[1], zoom: 10, addressdetails: 1 }, { reverse: true, noLanguage: true });
    const rev = revEn.json && revEn.json.address ? revEn : revLocal;
    const a = (rev.json && rev.json.address) || {};
    const seg = [String((revEn.json && revEn.json.display_name) || ''), String((revLocal.json && revLocal.json.display_name) || '')]
      .join(', ').split(', ').map((s) => s.trim()).filter(Boolean);
    const rec = {
      coords: coords.map((n) => Math.round(Number(n) * 100) / 100),
      want: l.want, at: l.at, event: l.event, window: [ln.from || null, ln.to || null],
      eventDate: events[l.event] || null,
      locality: seg[0] || '', city: a.city || a.town || a.village || a.municipality || '',
      district: a.city_district || a.district || a.suburb || a.county || '',
      region: a.state || a.region || '', country: a.country || '',
      geocodeStatus: rev.status || 0,
    };
    rec.localityLocal = String((revLocal.json && revLocal.json.display_name) || '').split(', ')[0] || '';
    rec.hay = unionHay([rec.locality, rec.city, rec.district, rec.region, rec.country, ...seg].join(' | '), rec.localityLocal);
    const alts = String(l.want || '').split('/').map((s) => s.trim()).filter(Boolean);
    let km = null, nearest = null;
    for (const w of alts) {
      const fwd = await nominatim({ q: w, limit: 1, addressdetails: 1 });
      const hit = Array.isArray(fwd.json) ? fwd.json[0] : null;
      if (hit) {
        km = haversineKm(coords, [Number(hit.lat), Number(hit.lon)]);
        nearest = hit.display_name;
        break;
      }
    }
    rec.km = km;
    rec.nearest = nearest;
    const verdict = judge({ hay: rec.hay, want: l.want, km, limit: l.max_km || KM_LIMIT });
    rec.ok = verdict.ok;
    rec.why = verdict.why;
    proof[`${l.line}@${l.at}`] = rec;
    console.log(`${rec.ok ? 'ok  ' : 'FAIL'} ${l.line}@${l.at} ${rec.coords.join(', ')} ${rec.window[0]}..${rec.window[1]}` +
      ` card ${rec.eventDate || '—'}\n       answers: ${rec.locality}${rec.city && rec.city !== rec.locality ? ` | city ${rec.city}` : ''}` +
      ` | km ${km ?? '—'} — ${rec.why}`);
    if (!rec.ok) bad++;
  }
  writeFileSync(OUT, JSON.stringify(proof, null, 1));
  console.log(`\n${Object.keys(proof).length} waypoints proven, ${bad} not ok — ${OUT}`);
  process.exit(bad ? 1 : 0);
}

function selftest() {
  // Every case here is the bug this tool was written to catch: a correct pin rejected because the
  // name sits in `city` not `locality`, and a wrong pin accepted because nobody measured the gap.
  const cases = [
    ['a pin answering with an administrative district still passes when the place is in `city`',
      { hay: '1st District of Thessaloniki Thessaloniki Central Macedonia Greece', want: 'Thessaloniki / Salonika', km: 1.2 }, true],
    ['the same pin fails when the claimed place is nowhere in the answer',
      { hay: 'Kavala East Macedonia and Thrace Greece', want: 'Thessaloniki / Salonika', km: 1.2 }, false],
    ['a vertex 300 km from the place it names is NOT ok even when the name appears',
      { hay: 'Sedan Grand Est France', want: 'Sedan', km: 300.4 }, false],
    ['a transliterated name typed without diacritics still matches the accented answer',
      { hay: 'München Bayern Deutschland', want: 'Munchen', km: 3 }, true],
    ['an EXONYM is a different word: "Munich" does not match "München" unless the payload lists it',
      { hay: 'München Bayern Deutschland', want: 'Munich', km: 3 }, false],
    ['listing the exonym as an alternative is exactly what the `want` list is for',
      { hay: 'München Bayern Deutschland', want: 'Munich / München', km: 3 }, true],
    ['no forward geocode means the distance was never measured, so it is not ok',
      { hay: 'Rabaul East New Britain Papua New Guinea', want: 'Rabaul', km: null }, false],
    ['an empty `want` asserts nothing and must not pass',
      { hay: 'Somewhere France', want: '', km: 0 }, false],
    ['the LOCAL-language render of a correct pin passes when the English render lacks the name',
      { hay: 'Passchendaele Zonnebeke | Passendale Zonnebeke Ieper', want: 'Passendale', km: 0 }, true],
    ['and the English render carries a pin whose local name is in another script',
      { hay: 'Δημοτική Ενότητα Θεσαλονίκης | Thessaloniki Municipal Unit', want: 'Thessaloniki / Salonika', km: 0.4 }, true],
    ['unionHay never invents a name: nothing in either render matches',
      { hay: unionHay('Kavala Greece', 'Καβάλα'), want: 'Thessaloniki', km: 1 }, false],
    ['a per-link limit is honoured',
      { hay: 'Kokopo East New Britain Papua New Guinea', want: 'Rabaul / Kokopo', km: 34, limit: 60 }, true],
  ];
  let bad = 0;
  for (const [why, input, want] of cases) {
    const got = judge({ limit: 60, ...input });
    const ok = got.ok === want;
    console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${why}${ok ? '' : ` → got ${got.ok} (${got.why})`}`);
    if (!ok) bad++;
  }
  // The distance maths, planted: a cosine in the longitude term scored two IDENTICAL points 20,000 km
  // apart, which would have failed every correct pin — the pure judge above cannot see that class.
  const geo = [
    ['the same point is 0 km from itself', [40.64, 22.94], [40.64, 22.94], 0],
    ['Thessaloniki to Istanbul: 509 km by the tool, and 6.04° lon × 111.3 × cos 40.8° + 0.37° lat ≈ 510 km',
      [40.64, 22.94], [41.01, 28.98], 510],
    ['one degree of latitude is about 111 km', [0, 0], [1, 0], 111],
    ['one degree of longitude at the equator is about 111 km', [0, 0], [0, 1], 111],
  ];
  for (const [why, a, b, expect] of geo) {
    const got = haversineKm(a, b);
    const ok = Math.abs(got - expect) <= Math.max(12, expect * 0.03);
    console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${why}${ok ? '' : ` → got ${got} km, expected about ${expect}`}`);
    if (!ok) bad++;
  }
  console.log(bad ? `SELFTEST FAILED (${bad})`
    : 'SELFTEST passed: the joined-name rule and the distance limit both bite; a nameless or unmeasured pin is never ok');
  return bad ? 1 : 0;
}

if (process.env.SELFTEST === '1') process.exit(selftest());
if (!REPOS[SITE] || !PAYLOAD || !OUT) {
  console.log('usage: node wp_check.cjs <ww1|ww2> <payload.json> <out.json>');
  process.exit(2);
}
if (!existsSync(`${AUDIT}/out/_shared/live-${SITE}.json`)) {
  console.error(`wp_check: no dump at out/_shared/live-${SITE}.json — re-dump before writing a proof`);
  process.exit(2);
}
main();
