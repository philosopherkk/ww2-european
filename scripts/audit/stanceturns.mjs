#!/usr/bin/env node
/* stanceturns — no month may change the map's colours in silence.
 *
 * The map resolves its fills by month, so a reader who steps from one month to the next and sees a
 * country change colour has been told something. This gate checks that the site actually says
 * something in that month: a card dated in it, a card dated in the month before (the reader has
 * just read it), or a snapshot note, which is what the Sources panel calls "the N months with a note
 * of their own". A month that repaints with none of those is a silent map change.
 *
 * Nothing here is remembered. The matrix of which place is in which colour for which month is
 * computed by the REPO'S OWN code — esbuild bundles a generated entry against the repo and it calls
 * the same statusFor() the map calls, on the same snapshot files the map fetches, and the same
 * nearestSnapshot() that decides which file a month uses. The `@` alias is read out of the repo's
 * tsconfig, so a re-anchored alias cannot make this gate read a stale copy of the data.
 *
 *   node stanceturns.mjs <ww1|ww2>            REPO=<tree> DUMP=<wwN.json>
 *   SELFTEST=1 node stanceturns.mjs ww2       planted failures must be caught
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const site = process.argv[2];
if (!['ww1', 'ww2'].includes(site)) { console.error('usage: stanceturns.mjs <ww1|ww2>'); process.exit(2); }
const SELFTEST = process.env.SELFTEST === '1';
const REPO = process.env.REPO || (site === 'ww2' ? '/Users/ka-kinpoon/Project/WW2/ww2-european' : '/Users/ka-kinpoon/Project/WW2/WW1-European');
const AUDIT = path.dirname(path.resolve(process.argv[1]));
const DUMP = process.env.DUMP || path.join(AUDIT, `${site}.json`);
if (!fs.existsSync(REPO)) { console.error(`no repo at ${REPO}`); process.exit(2); }
if (!fs.existsSync(DUMP)) { console.error(`no dump at ${DUMP}: re-dump first, a gate with no dump beside it reads nothing`); process.exit(2); }

const dump = JSON.parse(fs.readFileSync(DUMP, 'utf8'));
const MONTHS = (dump.MONTHS || []).map((m) => (typeof m === 'string' ? m : m.key ?? Object.keys(m)[0]));
const EVENTS = dump.EVENTS || [];
if (!MONTHS.length || !EVENTS.length) { console.error(`dump has ${MONTHS.length} months and ${EVENTS.length} events — refusing`); process.exit(2); }

/* ---------------------------------------------------------------- the matrix, from the repo's own code */
/* tsconfig is JSONC: a comment marker appears inside the include string for TypeScript sources,
 * so a blind regex strip of C-style comments cuts the file in half. Walk the characters instead and
 * strip comments only when outside a string. */
function stripJsonc(src) {
  let out = '', i = 0, inStr = false;
  while (i < src.length) {
    const c = src[i], n = src[i + 1];
    if (inStr) { out += c; if (c === '\\') { out += n; i += 2; continue; } if (c === '"') inStr = false; i += 1; continue; }
    if (c === '"') { inStr = true; out += c; i += 1; continue; }
    if (c === '/' && n === '/') { while (i < src.length && src[i] !== '\n') i += 1; continue; }
    if (c === '/' && n === '*') { i = src.indexOf('*/', i + 2) + 2; continue; }
    out += c; i += 1;
  }
  return out;
}
const tsconfig = JSON.parse(stripJsonc(fs.readFileSync(path.join(REPO, 'tsconfig.json'), 'utf8')));
const paths = Object.entries(tsconfig?.compilerOptions?.paths || {});
if (!paths.length) { console.error('tsconfig has no paths: this gate cannot resolve the repo alias'); process.exit(2); }
const alias = {};
for (const [k, v] of paths) alias[k.replace(/\/\*$/, '')] = path.join(REPO, String(v[0]).replace(/\/\*$/, ''));

const out = path.join(os.tmpdir(), `stanceturns-${site}.mjs`);
const entry = path.join(os.tmpdir(), `stanceturns-${site}-entry.ts`);
const BODY = `
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { statusFor, SNAPSHOT_NOTES } from '@/lib/data/status';
import { SNAPSHOTS, nearestSnapshot } from '@/lib/site';

const REPO = '__REPO__';
const MONTHS: string[] = __MONTHS__;
const names = new Map<string, string[]>();
for (const s of SNAPSHOTS) {
  // Same path the browser fetches, resolved on disk: /data/borders/<date>.json.
  const rel = String(s.file).replace(/^\\/+data\\//, 'data/');
  const gj = JSON.parse(readFileSync(path.join(REPO, 'public', rel), 'utf8'));
  names.set(s.date, [...new Set(gj.features.map((f: any) => f.properties?.name).filter(Boolean))]);
}
const rows = MONTHS.map((mk) => {
  const snap = nearestSnapshot(mk).snapshot;
  const list = names.get(snap.date) || [];
  const places: Record<string, string> = {};
  for (const n of list) places[n] = statusFor(snap.date, n);
  return { month: mk, date: snap.date, file: snap.file, label: snap.label, places };
});
console.log(JSON.stringify({ rows, notes: Object.keys(SNAPSHOT_NOTES) }));
`;
fs.writeFileSync(entry, BODY.replace('__REPO__', REPO).replace('__MONTHS__', JSON.stringify(MONTHS)));
/* esbuild is not in the app's node_modules (it ships inside Next), so bundle with the CLI the
 * README already uses — and fail loudly if it is missing rather than verdict on nothing. */
const aliasArgs = Object.entries(alias).flatMap(([k, v]) => ['--alias:' + k + '=' + v]);
execFileSync('npx', ['--no-install', 'esbuild', entry, '--bundle', '--platform=node', '--format=esm',
  '--outfile=' + out, '--log-level=error', ...aliasArgs], { cwd: REPO, stdio: 'inherit' });
const computed = JSON.parse(execFileSync(process.execPath, [out], { maxBuffer: 1 << 28, encoding: 'utf8' }));
const rows = computed.rows;
const NOTES = new Set(computed.notes);
/* A plumbing failure must not read as a clean run: no places or no diffs at all is an error, not a pass. */
const withPlaces = rows.filter((r) => Object.keys(r.places).length > 5);
if (withPlaces.length < rows.length * 0.9 || rows.length !== MONTHS.length) {
  console.error(`only ${withPlaces.length} of ${rows.length} months resolved their places — refusing to verdict`);
  process.exit(2);
}

/* ---------------------------------------------------------------- the rule */
const byMonth = new Map();
for (const r of rows) byMonth.set(r.month, r);
const ordered = MONTHS.map((m) => byMonth.get(m)).filter(Boolean);
const cardsIn = new Set(EVENTS.map((e) => String(e.date).slice(0, 7)));
const sig = (r) => Object.entries(r.places).map(([k, v]) => `${k}=${v}`).sort().join(';');

function changes(model) {
  const out = [];
  for (let i = 1; i < model.length; i += 1) {
    const a = sig(model[i - 1]);
    const b = sig(model[i]);
    if (a === b) continue;
    const before = model[i - 1].places;
    const after = model[i].places;
    const diff = [];
    for (const k of new Set([...Object.keys(before), ...Object.keys(after)])) {
      if (before[k] !== after[k]) diff.push(`${k}: ${before[k] ?? 'gone'} -> ${after[k] ?? 'gone'}`);
    }
    if (diff.length) out.push({ month: model[i].month, date: model[i].date, diff, snapshotChanged: model[i - 1].date !== model[i].date });
  }
  return out;
}

/* The card set is a parameter, not a captured global, for a reason the first self-test proved:
 * WW2 has a card in 95 of its 99 months and WW1 in all 53, so "plant a silent repaint in a month
 * with no card" cannot be satisfied by picking a month — the test has to strip the coverage itself.
 * A gate that could only fail in a month the data happens to leave empty would never fail. */
function verdict(model, notes, cards) {
  const bad = [];
  for (const c of changes(model)) {
    const prevIdx = MONTHS.indexOf(c.month) - 1;
    const prev = prevIdx >= 0 ? MONTHS[prevIdx] : null;
    const covered = cards.has(c.month) || (prev && cards.has(prev)) || notes.has(c.date);
    if (!covered) bad.push(c);
  }
  return { changed: changes(model), bad };
}

const model = ordered;
if (SELFTEST) {
  const idx = 1 + Math.floor(model.length / 2);
  const target = model[idx];
  const prev = MONTHS[idx - 1];
  const key = Object.keys(target.places)[0];
  const other = [...new Set(model.flatMap((r) => Object.values(r.places)))].find((v) => v !== target.places[key]);
  if (!key || !other) { console.log('SELFTEST FAIL: no place and no second status to plant'); process.exit(1); }
  const planted = structuredClone(model);
  planted[idx].places = { ...target.places, [key]: other };
  const bare = new Set([...cardsIn].filter((m) => m !== target.month && m !== prev));
  const noNotes = new Set();

  const seen = verdict(planted, noNotes, bare);
  if (!seen.bad.some((b) => b.month === target.month && b.diff.some((d) => d.startsWith(`${key}:`)))) {
    console.log(`SELFTEST FAIL: a repainted month with no card and no note was not reported ` +
      `(${seen.bad.length} bad of ${seen.changed.length} changes; planted ${target.month} ${key} -> ${other})`);
    process.exit(1);
  }
  /* Locality and effect, stated exactly: the plant must make the planted month repaint (or, if that
   * month already repainted for a real reason, its diff must now name the planted place), and no
   * month other than the planted one and the month after it may see its diff move. */
  const base = verdict(model, noNotes, bare);
  const sigOf = (list) => new Map(list.map((c) => [c.month, c.diff.slice().sort().join(';')]));
  const before = sigOf(base.changed);
  const after = sigOf(seen.changed);
  const wasThere = before.has(target.month);
  if (!wasThere && !after.has(target.month)) {
    console.log(`SELFTEST FAIL: planting a repaint in ${target.month}, which does not otherwise change, did not make it a change month`);
    process.exit(1);
  }
  for (const month of new Set([...before.keys(), ...after.keys()])) {
    if (before.get(month) === after.get(month)) continue;
    if (month !== target.month && month !== MONTHS[idx + 1]) {
      console.log(`SELFTEST FAIL: planting one place in ${target.month} also moved the diff of ${month}, so the diff is not local`);
      process.exit(1);
    }
  }
  for (const [what, cards2, notes2] of [
    ['a card in that month', new Set([...bare, target.month]), noNotes],
    ['a card in the month before', new Set([...bare, prev]), noNotes],
    ['a snapshot note on the state it resolves to', noNotes, new Set([target.date])],
  ]) {
    if (verdict(planted, notes2, cards2).bad.some((b) => b.month === target.month)) {
      console.log(`SELFTEST FAIL: the planted silent repaint still failed with ${what}`);
      process.exit(1);
    }
  }
  const frozen = structuredClone(model);
  for (let i = 1; i < frozen.length; i += 1) frozen[i].places = { ...frozen[i - 1].places };
  if (verdict(frozen, noNotes, bare).changed.length) {
    console.log('SELFTEST FAIL: a frozen model, which changes nothing, reported a change'); process.exit(1);
  }
  if (!verdict(model, noNotes, bare).changed.length) {
    console.log('SELFTEST FAIL: the real model reports no repaint at all, so this gate could never fail'); process.exit(1);
  }
  console.log(`SELFTEST ok on ${model.length} months: a planted silent repaint is reported; each coverage arm ` +
    `(a card in the month, a card the month before, a snapshot note) clears it; a frozen model reports 0 changes`);
  process.exit(0);
}

/* The report is a function because the first time this gate ran inside a checkout, the selftest
 * branch exited before the last four lines and those lines still referenced a `notes` variable that
 * only exists as a parameter of verdict(). A gate whose verdict line throws is a gate nobody ran. */
function report() {
  const { changed, bad } = verdict(model, NOTES, cardsIn);
  const cards = [...cardsIn];
  console.log(`${site}: ${model.length} months, ${Object.keys(model[0].places).length} places resolved by the repo's own statusFor(), ` +
    `${changed.length} months repaint, ${NOTES.size} snapshot dates carry a note, ${cards.length} months have a card`);
  const unexplained = changed.filter((c) => !cards.includes(c.month) && !NOTES.has(c.date));
  for (const c of bad) {
    console.log(`FAIL ${c.month}: the map changes colour with no card in it or the month before, and no snapshot note ` +
      `(${c.diff.length} places, e.g. ${c.diff.slice(0, 3).join('; ')})`);
  }
  console.log(`\n${bad.length ? `${changed.length} repainted months, ${unexplained.length} of them unexplained` : `${changed.length} repainted months, all explained by a card in that month, the month before, or a snapshot note`}`);
  return bad.length;
}

if (SELFTEST) {
  // Exercise the report path too: it is where the last bug was, and it is the line a human reads.
  const lines = [];
  const log = console.log;
  console.log = (...a) => lines.push(a.join(' '));
  let threw = null, nbad = null;
  try { nbad = report(); } catch (e) { threw = e; } finally { console.log = log; }
  if (threw) { console.log(`SELFTEST FAIL: the report line throws — ${threw.message}`); process.exit(1); }
  if (!lines.some((l) => /repaint/.test(l))) { console.log('SELFTEST FAIL: the report line printed no tally'); process.exit(1); }
  console.log(`  ok   the report path runs and prints a tally (${nbad} unexplained on this tree)`);
  process.exit(0);
}

process.exit(report() ? 1 : 0);
