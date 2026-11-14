// Fetches a photograph for every figure and writes it into public/data/portraits
// plus a generated lib/data/portraits.ts carrying the src and the attribution.
//
//   node scripts/fetch-portraits.mjs [--force]
//
// The image for each person is the lead image of their English Wikipedia article,
// which is always a file on Wikimedia Commons - public domain or freely licensed.
// Nothing is invented here: if Wikipedia has no lead image for someone, they are
// reported and the site falls back to a letter block.
//
// Responses and images are cached under scripts/.portrait-cache so a re-run after
// editing names only fetches what changed.
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const WIDTH = 320;
const UA = "ww2-european-educational/1.0 (static educational site; portrait fetched once at build time)";

const root = join(import.meta.dirname, "..");
const imgDir = join(root, "public/data/portraits");
const cacheDir = join(root, "scripts/.portrait-cache");
mkdirSync(imgDir, { recursive: true });
mkdirSync(cacheDir, { recursive: true });
const force = process.argv.includes("--force");

// id -> Wikipedia article title. Defaults to the name in the data files; the
// entries below are the titles that differ from it.
const OVERRIDES = {
  harris: "Arthur Harris",
  gort: "John Gort, 1st Viscount Gort",
  alexander: "Harold Alexander, 1st Earl Alexander of Tunis",
  cripps: "Stafford Cripps",
  haakon: "Haakon VII",
  viktor_emmanuel: "Victor Emmanuel III of Italy",
  leclerc: "Philippe Leclerc de Hauteclocque",
  attlee: "Clement Attlee",
};

// Read id -> name straight out of the figure data rather than restating it here.
const figDir = join(root, "lib/data");
const figures = [];
for (const f of readdirSync(figDir).filter((f) => f.startsWith("figures-"))) {
  const src = readFileSync(join(figDir, f), "utf8");
  const re = /\bid:\s*['"]([^'"]+)['"],\s*\n\s*name:\s*['"]([^'"]*)['"]/g;
  for (const m of src.matchAll(re)) figures.push({ id: m[1], name: m[2] });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Wikimedia rate-limits aggressively, so back off rather than hammer.
async function withRetry(fn, tries = 4) {
  for (let i = 0; ; i++) {
    try {
      return await fn();
    } catch (e) {
      if (i >= tries || !/\b(429|503)\b/.test(String(e.message ?? e))) throw e;
      const wait = 2000 * 2 ** i;
      console.log(`   rate limited, waiting ${wait / 1000}s`);
      await sleep(wait);
    }
  }
}

async function getJson(url) {
  const key = join(cacheDir, "json-" + createHash("sha1").update(url).digest("hex") + ".json");
  if (existsSync(key) && !force) return JSON.parse(readFileSync(key, "utf8"));
  const j = await withRetry(async () => {
    const res = await fetch(url, { headers: { "user-agent": UA } });
    if (!res.ok) throw new Error(`${res.status} for ${url}`);
    return res.json();
  });
  writeFileSync(key, JSON.stringify(j));
  await sleep(700);
  return j;
}

async function getImage(url) {
  const key = join(cacheDir, createHash("sha1").update(url).digest("hex") + ".bin");
  if (existsSync(key) && !force) return readFileSync(key);
  const buf = await withRetry(async () => {
    const res = await fetch(url, { headers: { "user-agent": UA } });
    if (!res.ok) throw new Error(`${res.status} for ${url}`);
    return Buffer.from(await res.arrayBuffer());
  });
  const jpeg = buf[0] === 0xff && buf[1] === 0xd8;
  const png = buf[0] === 0x89 && buf[1] === 0x50;
  if (!jpeg && !png) throw new Error(`not an image (${buf.length} bytes) for ${url}`);
  writeFileSync(key, buf);
  return buf;
}

// 1. lead image of each article
const titles = figures.map((f) => OVERRIDES[f.id] ?? f.name.trim());
const lead = {};
for (let i = 0; i < titles.length; i += 20) {
  const u = new URL("https://en.wikipedia.org/w/api.php");
  u.search = new URLSearchParams({
    action: "query", format: "json", redirects: "1",
    titles: titles.slice(i, i + 20).join("|"),
    prop: "pageimages", piprop: "original|name",
  }).toString();
  const j = await getJson(u.toString());
  for (const p of Object.values(j.query?.pages ?? {})) {
    if (p.title && p.original?.source) lead[p.title] = { file: p.pageimage, url: p.original.source };
  }
}

// 1b. Some articles have no lead image. For those, look at the files the article
// actually uses and take the first named after the person - a fallback we can audit,
// since the chosen file name is printed and stored in the manifest.
const noLead = figures.filter((f) => !lead[OVERRIDES[f.id] ?? f.name.trim()]);
for (const f of noLead) {
  const title = OVERRIDES[f.id] ?? f.name.trim();
  const u = new URL("https://en.wikipedia.org/w/api.php");
  u.search = new URLSearchParams({
    action: "query", format: "json", redirects: "1", titles: title,
    prop: "images", imlimit: "20",
  }).toString();
  const j = await getJson(u.toString());
  const page = Object.values(j.query?.pages ?? {})[0];
  const cands = (page?.images ?? []).map((i) => i.title.replace(/^File:/, ""));
  const surname = (f.name.match(/([\p{L}''-]{4,})\s*$/u) ?? [])[1]?.toLowerCase() ?? f.name.toLowerCase();
  const pick = cands.find((c) => c.toLowerCase().includes(surname));
  if (pick) {
    lead[title] = { file: pick };
    console.log(`   no lead image for ${f.id}; using ${pick}`);
  }
}

// 2. attribution + sized preview for each file. converttitles and redirects matter:
// the title Wikipedia gives can differ in case or underscores from the Commons page.
const fileOf = (u) => decodeURIComponent(new URL(u).pathname.split("/").pop());
const wanted = Object.entries(lead).map(([t, v]) => ({ title: t, file: v.file ?? fileOf(v.url) }));
const byTitle = new Map(wanted.map((w) => [w.title, w.file]));
const norm = (s) => s.replace(/^File:/i, "").replace(/_/g, " ").toLowerCase();
const info = {};
for (let i = 0; i < wanted.length; i += 20) {
  const u = new URL("https://commons.wikimedia.org/w/api.php");
  u.search = new URLSearchParams({
    action: "query", format: "json", converttitles: "1", redirects: "1",
    titles: wanted.slice(i, i + 20).map((w) => `File:${w.file}`).join("|"),
    prop: "imageinfo", iiprop: "url|extmetadata|mime", iiurlwidth: String(WIDTH),
  }).toString();
  const j = await getJson(u.toString());
  for (const p of Object.values(j.query?.pages ?? {})) {
    const ii = p.imageinfo?.[0];
    if (!ii?.url) continue;
    info[norm(p.title)] = { page: p, ii };
  }
}

const clean = (v) => (v?.value ?? "").replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
const entries = [];
const missing = [];
for (const { id, name } of figures) {
  const title = OVERRIDES[id] ?? name.trim();
  const src = lead[title];
  if (!src) {
    missing.push(`${id} (${title}): Wikipedia has no lead image`);
    continue;
  }
  const file = byTitle.get(title) ?? fileOf(src.url);
  const hit = info[norm(file)];
  if (!hit) {
    missing.push(`${id}: Commons has no page for ${file}`);
    continue;
  }
  const { page, ii } = hit;
  // Ask the API for the sized preview (iiurlwidth above) rather than building the
  // thumb path ourselves: several originals are far too big for Commons to resize on
  // the fly, and the API returns a URL that actually resolves.
  const thumb = ii.thumburl ?? ii.url;
  const buf = await getImage(thumb);
  const ext = buf[0] === 0x89 ? "png" : "jpg";
  writeFileSync(join(imgDir, `${id}.${ext}`), buf);
  const em = ii.extmetadata ?? {};
  // clean() takes the extmetadata field object and reads its .value (it carries HTML).
  // Commons puts the credit in Artist for some files and in Credit for others, and
  // fills unused ones with "Unknown author", which is not a credit we need to repeat.
  const rawArtist = clean(em.Artist) || clean(em.Credit) || "";
  const artist = /^unknown/i.test(rawArtist) || rawArtist.length < 3 ? "" : rawArtist;
  const licence = clean(em.LicenseShortName) || clean(em.UsageTerms) || "";
  entries.push({
    id,
    src: `/data/portraits/${id}.${ext}`,
    file: page.title.replace(/^File:/, ""),
    artist,
    licence,
    // Commons metadata is inconsistent about which fields carry the credit, so
    // collapse it to one string that is always true: either the credit Wikimedia
    // gives us, or a pointer to the file page.
    credit:
      artist && licence ? `${artist}, ${licence}` : artist || licence || "see the Commons file page",
    page: ii.descriptionurl,
  });
}

entries.sort((a, b) => a.id.localeCompare(b.id));
const banner = `// GENERATED by scripts/fetch-portraits.mjs - do not edit by hand.\n// Photographs are the lead image of each person's Wikipedia article; every\n// file is public domain or freely licensed on Wikimedia Commons, and the credit\n// and licence below are the attribution Wikimedia gives us for each one.\nimport type { Portrait } from "./portrait-types";\n\nexport const PORTRAITS: Record<string, Portrait> = ${JSON.stringify(Object.fromEntries(entries.map((e) => [e.id, e])), null, 2)};\n`;
writeFileSync(join(root, "lib/data/portraits.ts"), banner);
writeFileSync(join(imgDir, "manifest.json"), JSON.stringify(entries, null, 2));

console.log(`\n${entries.length} portraits written, ${readdirSync(imgDir).filter((f) => f !== "manifest.json").length} files on disk`);
if (missing.length) {
  console.log(`\n${missing.length} with no photograph:`);
  for (const m of missing) console.log("  " + m);
}
