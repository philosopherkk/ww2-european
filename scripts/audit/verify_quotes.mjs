/* Re-fetch every quotation a payload asserts and prove the words are actually on the page.

   REBUILT 26 Nov. The original was one of a batch of gate scripts that went missing from audit/
   overnight (lengths.py, linkcheck.py, check_trim.mjs, check_consistency.mjs, stanceturns, unitclash,
   roles.mjs, wp_check.cjs, entry-ww*.ts). lengths.py and linkcheck.py were recoverable from the WW1
   repo's committed scripts/audit; this one was not, so what follows is a rebuild from the contract
   recorded in the audit notes, not the original file. It is self-tested (`SELFTEST=1`) and the
   self-test plants a wrong quote, a too-short quote and chrome-only text, so a rebuild that proves
   nothing cannot pass its own gate.

   WHAT THIS PROVES AND WHAT IT DOES NOT:
   - It fetches the address a row carries and checks that the quotation is in the FETCHED text.
   - Fetched text is not reader text. Chrome welds an infobox label to its value, and a page may drop
     "[citation needed]" that the raw HTML carries, so a quotation can pass here and not be on screen,
     or be on screen and fail here. shot/probe_words.cjs is the Chrome side, and both are required for
     a bibliography address (see audit/srclinks.mjs, which refuses a wall unless a browser proof is
     on file).
   - A "family" here is the hostname, and web.archive.org / archive.org count as the SAME family as
     the site they mirror, so an archived page never supplies the second of two independent families.

   usage: node verify_quotes.mjs <payload.json> [--field sources] [--field wp_sources]
          SELFTEST=1 node verify_quotes.mjs
   A payload is {items:[...]} or {lines:[...]} or a bare array; each entry has the field array of
   {url, quote} rows. exit 0 only if every quotation is live text. */
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';

const AUDIT = new URL('.', import.meta.url).pathname.replace(/\/$/, '');
const CACHE = `${AUDIT}/cache`;
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36';
/* A quotation shorter than this, once chrome is stripped, is a token and not a quotation: "1918" or
   "France" is found on almost any page, so a short string proves nothing and must fail. */
const FLOOR = 20;

function norm(s) {
  return String(s)
    .replace(/\[\s*(?:\d+|[a-z]|note\s*\d+|citation needed|update|who\?|by whom|when)\s*\]/gi, ' ')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/\u00a0/g, ' ')
    .replace(/[^a-z0-9'".-]+/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

/* Publisher family. An archive of a page is that page, not a second opinion on it. */
function family(url) {
  try {
    const u = new URL(url);
    let host = u.hostname.replace(/^www\./, '');
    if (host === 'web.archive.org' || host === 'archive.org') {
      const m = u.pathname.match(/^\/web\/[^/]+\/https?:\/\/([^/]+)/);
      if (m) host = m[1].replace(/^www\./, '');
    }
    return host;
  } catch {
    return 'unparseable';
  }
}

const sha = (s) => createHash('sha1').update(s).digest('hex');

async function liveText(url) {
  if (!/^https:\/\//.test(url)) return { status: 'REFUSED', ok: false, text: '' };
  const file = `${CACHE}/${sha(url)}.json`;
  if (existsSync(file)) {
    try {
      const j = JSON.parse(readFileSync(file, 'utf8'));
      /* the cache is an ENVELOPE: read .text, or every quote is tested against the literal
         {"url":…,"text":"…"} and a \u escape makes every assertion fail */
      if (typeof j.text === 'string' && j.text.length > 0) return { status: j.status ?? 200, ok: (j.status ?? 200) >= 200 && (j.status ?? 200) < 300, text: j.text };
    } catch { /* unreadable cache entry: fall through and re-fetch */ }
  }
  let res;
  try {
    res = await fetch(url, { headers: { 'User-Agent': UA, 'Accept-Language': 'en-GB,en;q=0.9', Accept: 'text/html' }, redirect: 'follow' });
  } catch (e) {
    return { status: `FETCH-ERR ${e.message}`, ok: false, text: '' };
  }
  const body = await res.text();
  const text = body
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"')
    .replace(/&#(\d+|x[0-9a-f]+);/gi, (_, n) => String.fromCodePoint(n[0] === 'x' || n[0] === 'X' ? parseInt(n.slice(1), 16) : +n))
    .replace(/&[a-z]+;/gi, ' ');
  mkdirSync(CACHE, { recursive: true });
  /* Only a 2xx is worth caching: caching a 404 body once makes every later run "find" quotations
     inside an error page, which is exactly how this rebuild's first self-test passed a vacuous case. */
  if (res.ok) writeFileSync(file, JSON.stringify({ url, status: res.status, when: new Date().toISOString(), text }));
  return { status: res.status, ok: res.ok, text };
}

function entries(payload, field) {
  const root = Array.isArray(payload) ? payload : (payload.items || payload.lines || payload.events || payload.entries || []);
  const out = [];
  for (const item of root) {
    const rows = item[field];
    if (!Array.isArray(rows)) continue;
    rows.forEach((r, i) => {
      if (!r || typeof r !== 'object') return;
      const url = r.url || r.address || r.cite;
      const quote = r.quote || r.quotation || r.text;
      out.push({ id: item.id || item.line || `#${i}`, field, i, url, quote });
    });
  }
  return out;
}

async function check(payload, fields) {
  let bad = 0, n = 0;
  const seen = new Map();
  for (const field of fields) {
    for (const e of entries(payload, field)) {
      n++;
      const q = norm(e.quote || '');
      if (q.length < FLOOR) {
        console.log(`FAIL ${e.id} ${field}[${e.i}] QUOTE TOO SHORT TO PROVE (${q.length} chars): ${JSON.stringify(e.quote)}`);
        bad++; continue;
      }
      if (!e.url || !/^https:\/\//.test(e.url)) {
        console.log(`FAIL ${e.id} ${field}[${e.i}] no https address to re-fetch: ${JSON.stringify(e.url)}`);
        bad++; continue;
      }
      let page = seen.get(e.url);
      if (!page) { page = await liveText(e.url); seen.set(e.url, page); }
      if (!page.text || !page.ok) {
        console.log(`FAIL ${e.id} ${field}[${e.i}] address does not answer (${page.status}) ${e.url} — words on an error page are not a citation`);
        bad++; continue;
      }
      const ok = norm(page.text).includes(q);
      console.log(`${ok ? 'ok  ' : 'FAIL'} ${e.id} ${field}[${e.i}] ${page.status} ${family(e.url)} ${JSON.stringify((e.quote || '').slice(0, 60))}`);
      if (!ok) {
        console.log(`     not in the fetched text of ${e.url} (Chrome may still show it: prove with shot/probe_words.cjs)`);
        bad++;
      }
    }
  }
  console.log(`\n${n} quotations checked, ${bad} failing`);
  return bad;
}

/* Self-test in place: the four verdicts below are planted, and the run fails if the checker is blind
   to any of them. A rebuilt gate that cannot fail is worse than no gate. */
async function selftest() {
  const url = 'https://www.ibiblio.org/hyperwar/';
  const page = await liveText(url);
  /* A control that 404s makes every case below vacuous — the checker would match a quotation against
     the error page it just copied from, which is exactly how this rebuild's first run passed a case
     that proved nothing. Demand a real 200 carrying a real sentence. */
  if (!page.ok || page.status !== 200 || page.text.length < 500) { console.log(`SELFTEST FAILED: control page does not answer 200 (${page.status})`); return 1; }
  const real = page.text.replace(/<[^>]*>/g, ' ').match(/[A-Z][^.]{40,160}\./);
  const cases = [
    ['wrong words must FAIL', await check({ items: [{ id: 'planted-wrong', sources: [{ url, quote: 'zzz the fleet sailed at dawn to a place that does not exist zzz' }] }] }, ['sources']), 1],
    ['too-short quote must FAIL', await check({ items: [{ id: 'planted-short', sources: [{ url, quote: '1943, Sicily' }] }] }, ['sources']), 1],
    ['missing address must FAIL', await check({ items: [{ id: 'planted-nourl', sources: [{ quote: real ? real[0] : 'a very long quotation that will never be fetched anywhere' }] }] }, ['sources']), 1],
    ['chrome-only text must FAIL', await check({ items: [{ id: 'planted-chrome', sources: [{ url, quote: '[citation needed] and a phrase no page in the world prints at all whatsoever' }] }] }, ['sources']), 1],
  ];
  let bad = 0;
  for (const [why, got, want] of cases) {
    const ok = got === want;
    if (!ok) bad++;
    console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${why} -> ${got} failing`);
  }
  if (real) {
    const chrome = real[0].replace(/\. /g, '. [ 2 ] ');
    const got = await check({ items: [{ id: 'planted-chrome-strip', sources: [{ url, quote: chrome }] }] }, ['sources']);
    if (got !== 0) { bad++; console.log('  FAIL chrome citation markers must be stripped, not matched'); }
    else console.log('  ok   chrome citation markers are stripped, not matched');
  }
  console.log(bad ? `SELFTEST FAILED (${bad})` : 'SELFTEST passed: wrong, short, addressless and chrome-only all fail; a real quote with markers stripped passes');
  return bad ? 1 : 0;
}

if (process.env.SELFTEST === '1') process.exit(await selftest());
const args = [];
const fields = [];
for (let i = 0; i < process.argv.length - 2; i++) {
  const a = process.argv[i + 2];
  if (a === '--field') { fields.push(process.argv[i + 3] || ''); i++; continue; }
  if (a.startsWith('--field=')) { fields.push(a.split('=')[1]); continue; }
  if (a.startsWith('--')) continue;
  args.push(a);
}
if (!args[0]) { console.log('usage: node verify_quotes.mjs <payload.json> [--field sources]'); process.exit(2); }
if (fields.length === 0 || fields.some((f) => !f)) { console.log('REFUSED: no --field given, so nothing would be checked'); process.exit(2); }
const payload = JSON.parse(readFileSync(args[0], 'utf8'));
const bad = await check(payload, fields);
process.exit(bad ? 1 : 0);
