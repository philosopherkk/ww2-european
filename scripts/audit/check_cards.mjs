#!/usr/bin/env node
// Structural gate for subagent deliverables. Usage:
//   node check_cards.mjs <ww1|ww2> events <file.json>
//   node check_cards.mjs <ww1|ww2> lines  <file.json>
// Item shape: the WWxEvent / CampaignLine fields at the top level of each item, plus
// `sources: [{url,publisher,quote}]`, `confidence`, and optionally `fronts_new` /
// `countries_new` (names the agent is asking KK to add). Exit 1 if any item fails.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';

const [war, mode, file] = process.argv.slice(2);
if (!war || !mode || !file) {
  console.error('usage: check_cards.mjs <ww1|ww2> <events|lines> <file.json>');
  process.exit(2);
}
const here = new URL('.', import.meta.url).pathname;
const readJson = (p, what) => {
  /* A gate that dies with a raw stack trace on a mistyped path gets "re-run with the right path"
     instead of "the file I thought I was gating was never there". Say which file it wanted. */
  try {
    return JSON.parse(readFileSync(p, 'utf8'));
  } catch (e) {
    console.error(`check_cards: cannot read ${what}: ${p} (${e.code || e.message})`);
    process.exit(2);
  }
};
/* Which dump represents "live". It used to be hard-coded to out/_shared/live-<war>.json beside this
   file, so a test or a worktree run that passed a different dump in its env was silently gating the
   file beside the gate — test_check_cards_ids.py sets LIVE_DUMP for exactly this, and until now that
   setting did nothing. DUMP wins, then LIVE_DUMP, then the file beside the gate; and the path is
   printed, because a verdict about the wrong tree is worse than no verdict. */
const DUMP = process.env.DUMP || process.env.LIVE_DUMP || `${here}out/_shared/live-${war}.json`;
const live = readJson(DUMP, 'the live dump (re-dump it first, or pass DUMP=)');
const data = readJson(file, 'the payload under test');
const items = data.items || [];

/* Three ways this gate used to be able to print a green verdict without measuring anything: a
   payload with no items and no links, an empty or wrong-shaped live dump, and a dump older than the
   repo it is supposed to represent (the stale out/_shared/live-wwN.json has silently gated the wrong
   tree before). All three are refusals now, exit 2, with ALLOW_STALE=1 as the documented override. */
if (items.length === 0 && !(data.links || []).length) {
  console.error(`check_cards: ${file} has no items and no links — gating nothing is a pass that measured nothing`);
  process.exit(2);
}
if (!Array.isArray(live.EVENTS) || live.EVENTS.length === 0 || !Array.isArray(live.CAMPAIGN_LINES) || live.CAMPAIGN_LINES.length === 0) {
  console.error(`check_cards: the live dump for ${war} has no EVENTS or no CAMPAIGN_LINES — re-dump before believing a verdict`);
  process.exit(2);
}
const newestDataFile = (repo) => {
  let newest = { m: 0, f: '' };
  const walk = (dir) => {
    for (const ent of readdirSync(dir, { withFileTypes: true })) {
      if (ent.name === 'portraits') continue;
      const p = `${dir}/${ent.name}`;
      if (ent.isDirectory()) walk(p);
      else if (/\.(ts|json)$/.test(ent.name)) {
        const m = statSync(p).mtimeMs;
        if (m > newest.m) newest = { m, f: p };
      }
    }
  };
  walk(`${repo}/lib/data`);
  return newest;
};
/* Which tree the vocabularies and the timeline are read from. A gate that always reads the same
   absolute path silently gates a tree nobody is about to ship — that is exactly how a "green battery
   for the worktree" can really be a verdict about the main tree. Precedence: REPO=<tree>, else the
   repo this file is committed inside (<repo>/scripts/audit/), else the sibling checkout. */
const SELF_REPO = (() => {
  const d = here.replace(/\/+$/, '');
  return d.endsWith('/scripts/audit') ? resolve(d, '..', '..') : null;
})();
const REPO = process.env.REPO || SELF_REPO ||
  { ww1: '/Users/ka-kinpoon/Project/WW2/WW1-European', ww2: '/Users/ka-kinpoon/Project/WW2/ww2-european' }[war];
if (!existsSync(REPO)) { console.error(`check_cards: REPO=${REPO} does not exist — refusing to gate a tree it cannot read`); process.exit(2); }
console.error(`check_cards: reading vocabularies and bounds from ${REPO}`);
const repoNewest = newestDataFile(REPO);
const dumpMtime = statSync(DUMP).mtimeMs;
if (dumpMtime < repoNewest.m && !process.env.ALLOW_STALE) {
  console.error(`check_cards: ${DUMP} is older than ${repoNewest.f.slice(REPO.length + 1)} — ` +
    `the dump gates a tree that no longer exists. Re-dump and cp in one command, or ALLOW_STALE=1 with a reason.`);
  process.exit(2);
}

/* The bloc vocabulary, read from the repo rather than remembered here: WW1 declares `Side` in
   lib/data/types.ts and WW2 in lib/data/campaigns.ts, and a list kept in this file had already gone
   stale — it flagged WW1's `entente`, which is declared and drawn on prod, as "needs a union
   change". Unreadable union is reported as unchecked, never as a verdict. */
const SIDES = (() => {
  const repo = { ww1: '/Users/ka-kinpoon/Project/WW2/WW1-European', ww2: '/Users/ka-kinpoon/Project/WW2/ww2-european' }[war];
  for (const f of ['lib/data/types.ts', 'lib/data/campaigns.ts']) {
    try {
      const m = readFileSync(`${repo}/${f}`, 'utf8').match(/export type Side\s*=\s*([^;]+);/);
      if (m) return new Set(m[1].split('|').map((s) => s.trim().replace(/'/g, '')));
    } catch { /* this file does not declare it; try the next */ }
  }
  return null;
})();

const WORDS = /[A-Za-zÀ-ž0-9’'\-]+/g;
const wc = (s) => (String(s).match(WORDS) || []).length;
const CAPS = { primary: 45, secondary: 97, university: 143 };
const FRONTS = new Set({
  ww1: ['western', 'eastern', 'italian', 'balkans', 'middle_east', 'caucasus', 'africa', 'naval', 'air', 'home', 'politics'],
  ww2: ['western', 'eastern', 'balkans', 'mediterranean', 'home', 'arctic', 'politics', 'atlantic', 'air_war', 'pacific', 'china_burma_india', 'americas'],
}[war]);
/* APPLIED=1 checks cards that are already merged, where the site's own event shape
 * (no `confidence`, no per-item `sources`) is correct and the id is by definition live. */
const APPLIED = process.env.APPLIED === '1';
/* The timeline bounds are read from the dump, so a longer atlas never blocks a valid card. */
const monthKeys = (live.MONTHS || []).map((m) => m.key).sort();
const LO = monthKeys[0] || (war === 'ww1' ? '1914-07' : '1938-01');
const HI = monthKeys[monthKeys.length - 1] || (war === 'ww1' ? '1918-11' : '1945-08');
const KINDS = new Set({
  ww1: ['battle', 'offensive', 'siege', 'invasion', 'landing', 'raid', 'politics', 'diplomacy', 'conference', 'alliance', 'revolution', 'armistice', 'resistance', 'mass_killing', 'technology', 'blockade', 'home_front'],
  ww2: ['battle', 'politics', 'invasion', 'war_crime', 'conference', 'liberation', 'home_front', 'resistance', 'evacuation', 'alliance'],
}[war]);
const COUNTRIES = new Set(live.EVENTS.flatMap((e) => e.countries || []));
/* Every field a deliverable may carry. A key outside this list is a FAIL: a field the
 * merger does not know about is silently dropped, so the card would ship without the
 * thing the author thought they had added. */
const ALLOW = {
  events: new Set(['id', 'date', 'precision', 'kind', 'title', 'fronts', 'countries', 'figures',
    'mapNote', 'levels', 'note', 'sources', 'confidence', 'fronts_new', 'countries_new']),
  lines: new Set(['id', 'name', 'side', 'domain', 'from', 'to', 'summary', 'strength', 'path', 'links', 'operation',
    'needs', 'front_proposed', 'sources', 'confidence', 'wp_sources', 'uncertainties', 'why_missing', 'needs_cards', 'kind']),
};
const FIGURE_IDS = new Set(live.FIGURES.map((f) => f.id));
const EVENT_IDS = new Set(live.EVENTS.map((e) => e.id));
/* WW1 keeps `kind: 'front'` rows in CAMPAIGN_LINES and `kind: 'advance'` rows in MARCH_LINES. With
   only the first array here, an applied march line FAILed "id is not in the live dump" and a proposal
   reusing a shipped march id PASSed "id already in the live dump" — the second is the dangerous one.
   Guarded by test_check_cards_ids.py, which plants the one-array version and requires it to fail. */
const LINE_ROWS = [...live.CAMPAIGN_LINES, ...(live.MARCH_LINES || [])];
const LINE_IDS = new Set(LINE_ROWS.map((l) => l.id));
const known = [];
for (const p of live.PLACES || []) known.push([p.lat, p.lng]);
for (const l of LINE_ROWS) for (const [a, b] of l.path) known.push([a, b]);
const nearKnown = (a, b) => known.some(([x, y]) => Math.abs(x - a) < 0.03 && Math.abs(y - b) < 0.03);

const strings = (o, out = []) => {
  if (typeof o === 'string') out.push(o);
  else if (Array.isArray(o)) o.forEach((x) => strings(x, out));
  else if (o && typeof o === 'object') Object.entries(o).forEach(([k, v]) => { if (k !== 'sources' && k !== 'wp_sources') strings(v, out); });
  return out;
};

let bad = 0;
const seen = new Set();
const report = (id, problems, notes) => {
  if (problems.length) bad += 1;
  console.log(`${problems.length ? 'FAIL' : 'ok  '} ${id}${notes.length ? '  [' + notes.join('; ') + ']' : ''}`);
  for (const p of problems) console.log('       - ' + p);
};

for (const it of items) {
  const problems = [];
  const notes = [];
  const id = it.id || '(no id)';
  if (!/^[a-z0-9_]+$/.test(id)) problems.push('id must be lowercase a-z 0-9 _');
  if (seen.has(id)) problems.push('duplicate id inside this file');
  seen.add(id);
  if (!APPLIED && (EVENT_IDS.has(id) || LINE_IDS.has(id))) problems.push('id already in the live dump');
  if (APPLIED && mode === 'events' && !EVENT_IDS.has(id)) problems.push('id is not in the live dump (not applied?)');
  for (const k of Object.keys(it)) if (!ALLOW[mode].has(k)) problems.push('unknown field, the merger would drop it: ' + k);

  for (const s of strings(it)) {
    if (/[A-Za-z]'[A-Za-z]/.test(s) || /(^|\s)'|'(\s|$)/.test(s)) problems.push('straight apostrophe in: ' + s.slice(0, 50));
    if (/&[a-z]+;|&#\d+;/i.test(s)) problems.push('HTML entity in: ' + s.slice(0, 50));
  }

  const srcs = it.sources || [];
  if (srcs.length < 2) notes.push('fewer than 2 sources: not ready');
  for (const s of srcs) {
    if (!s.url || !/^https?:\/\//.test(s.url)) problems.push('source without http url');
    if (!s.quote || s.quote.length < 25) problems.push('source quote missing or under 25 chars: ' + (s.url || ''));
  }
  if (!APPLIED && !['high', 'medium', 'low'].includes(it.confidence)) problems.push('confidence must be high|medium|low');

  if (mode === 'events') {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(it.date || '')) problems.push('date must be YYYY-MM-DD');
    const lo = LO;
    const hi = HI;
    const m = (it.date || '').slice(0, 7);
    if (m < lo || m > hi) problems.push(`date outside the site's timeline ${lo}..${hi}`);
    if (!['day', 'month'].includes(it.precision)) problems.push('precision day|month');
    if (!it.title || it.title.length > 110) problems.push('title missing or over 110 chars');
    if (!KINDS.has(it.kind)) problems.push('kind not in vocabulary: ' + it.kind);
    if (!Array.isArray(it.fronts) || !it.fronts.length) problems.push('fronts missing');
    for (const f of it.fronts || []) if (!FRONTS.has(f) && !(it.fronts_new || []).includes(f)) problems.push('front not in vocabulary and not in fronts_new: ' + f);
    for (const f of it.fronts_new || []) notes.push('NEW front ' + f);
    for (const c of it.countries || []) if (!COUNTRIES.has(c) && !(it.countries_new || []).includes(c)) problems.push('country not in dump and not in countries_new: ' + c);
    for (const c of it.countries_new || []) notes.push('NEW country ' + c);
    for (const f of it.figures || []) if (!FIGURE_IDS.has(f)) problems.push('figure id not in dump: ' + f);
    const wcs = {};
    for (const lvl of Object.keys(CAPS)) {
      for (const part of ['cause', 'what', 'consequence']) {
        const t = it.levels && it.levels[lvl] && it.levels[lvl][part];
        if (!t) { problems.push(`missing levels.${lvl}.${part}`); continue; }
        const n = wc(t);
        wcs[`${lvl[0]}.${part[0]}`] = n;
        if (n > CAPS[lvl]) problems.push(`levels.${lvl}.${part} is ${n} words, cap ${CAPS[lvl]}`);
        if (lvl === 'primary' && n < 12) problems.push(`levels.primary.${part} only ${n} words`);
      }
    }
    if (it.mapNote) {
      if (wc(it.mapNote) > 55) problems.push(`mapNote ${wc(it.mapNote)} words, cap 55`);
      if (!/^[A-Z]/.test(it.mapNote)) problems.push('mapNote must start with a capital');
      if (/^On the map/i.test(it.mapNote)) problems.push('mapNote must not begin "On the map" (the card prints that lead-in)');
    } else notes.push('no mapNote');
    if (it.note && wc(it.note) > 160) notes.push('note is ' + wc(it.note) + ' words');
    notes.push(Object.entries(wcs).map(([k, v]) => `${k}${v}`).join(' '));
  } else {
    // APPLIED=1 checks work that is already in the site tree: the id must be in the
    // dump (line 78 covers the reverse case for proposals), and so must linked events.
    if (APPLIED && !LINE_IDS.has(it.id)) problems.push('id is not in the live dump (not applied?)');
    /* The bloc vocabulary is the repo's own `Side` union, not a list kept here. A hard-coded list
       in this file flagged WW1's `entente` — declared at lib/data/types.ts:137 and drawn on prod —
       as "needs Side union change", which is the same class of stale-vocabulary bug that made
       srclinks probe 105 of 106 rows. If the union cannot be read, say so and let every side through
       rather than inventing a verdict. */
    /* The bloc vocabulary is the repo's own `Side` union, not a list kept here (see SIDES below). */
    if (!SIDES) notes.push('could not read the Side union from the repo — side value unchecked');
    else if (!SIDES.has(it.side)) notes.push(`side value ${it.side} is outside the declared Side union (${[...SIDES].join(', ')}) — needs a union change, a colour and a legend entry`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(it.from || '') || !/^\d{4}-\d{2}-\d{2}$/.test(it.to || '')) problems.push('from/to must be YYYY-MM-DD');
    else if (it.to < it.from) problems.push('to before from');
    if (!it.name || !it.summary) problems.push('name and summary required');
    const p = it.path;
    if (!Array.isArray(p) || p.length < 3) problems.push('path needs at least 3 waypoints');
    else {
      p.forEach((pt, i) => {
        if (!Array.isArray(pt) || pt.length !== 2 || typeof pt[0] !== 'number' || typeof pt[1] !== 'number') { problems.push(`path[${i}] not [lat,lng]`); return; }
        if (Math.abs(pt[0]) > 90 || Math.abs(pt[1]) > 180) problems.push(`path[${i}] out of range`);
        if (Math.abs(pt[0]) < 0.001 && Math.abs(pt[1]) < 0.001) problems.push(`path[${i}] is 0,0`);
        const ws = (it.wp_sources || [])[i];
        const ok = nearKnown(pt[0], pt[1]);
        if (!ok && !(ws && ws.place && ws.url && ws.quote)) problems.push(`path[${i}] ${pt} matches no known place or line waypoint and has no wp_sources[${i}] {place,url,quote}`);
        if (ok) notes.push(`wp${i}=known`);
      });
      let longest = 0;
      for (let i = 1; i < p.length; i++) {
        const R = 6371, rad = Math.PI / 180;
        const [a, b] = p[i - 1], [c, d] = p[i];
        const x = Math.sin(((c - a) * rad) / 2) ** 2 + Math.cos(a * rad) * Math.cos(c * rad) * Math.sin(((d - b) * rad) / 2) ** 2;
        longest = Math.max(longest, 2 * R * Math.asin(Math.sqrt(x)));
      }
      if (longest > 1500) notes.push(`longest hop ${Math.round(longest)} km`);
    }
    for (const lk of it.links || []) {
      if (!EVENT_IDS.has(lk.event) && !seen.has(lk.event)) problems.push(`link event not in dump: ${lk.event}`);
      if (typeof lk.at !== 'number' || lk.at < 0 || (p && lk.at >= p.length)) problems.push(`link ${lk.event}: at=${lk.at} outside the path`);
    }
  }
  report(id, problems, notes);
}
console.log(`\n${items.length} items, ${bad} failing`);
if (data.skipped) console.log(`${data.skipped.length} skipped`);
process.exit(bad ? 1 : 0);
