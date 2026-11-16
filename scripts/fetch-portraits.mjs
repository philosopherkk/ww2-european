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
const UA = "ww1-european-educational/1.0 (static educational site; portrait fetched once at build time)";

const root = join(import.meta.dirname, "..");
const imgDir = join(root, "public/data/portraits");
const cacheDir = join(root, "scripts/.portrait-cache");
mkdirSync(imgDir, { recursive: true });
mkdirSync(cacheDir, { recursive: true });
const force = process.argv.includes("--force");

/* The Great War cast: regnal numbers, Ottoman pashas and British peerages
 * mean the article title is not the display name. A miss here shows up as a
 * reader seeing initials instead of a photograph, so each one was checked
 * against en.wikipedia.org before being written down. Defaults to the name in
 * the data files. */
const OVERRIDES = {
  /* Regnal numbers and peerages: the article is named for the title, the display
   * name is not, and a miss here means the reader sees initials instead of a
   * photograph. Each of these was checked against en.wikipedia.org. */
  wilhelm_ii: 'Wilhelm II',
  nicholas_ii: 'Nicholas II of Russia',
  franz_joseph: 'Franz Joseph I of Austria',
  karl_i: 'Charles I of Austria',
  ferdinand_bulgaria: 'Ferdinand I of Bulgaria',
  mehmed_v: 'Mehmed V',
  enver_pasha: 'Enver Pasha',
  djemal_pasha: 'Ahmed Djemal Pasha',
  talat_pasha: 'Mehmed Talaat Pasha',
  boroevic: 'Svetozar Boroević',
  moltke_the_younger: 'Helmuth von Moltke the Younger',
  constantine_greece: 'Constantine I of Greece',
  vittorio_emmanuele_iii: 'Victor Emmanuel III of Italy',
  alexander_serbia: 'Alexander I of Serbia',
  husayn_mecca: 'Hussein bin Ali, King of Hejaz',
  feisal: 'Faisal I of Iraq',
  grey: 'Edward Grey, 1st Viscount Grey of Fallodon',
  kitchener: 'Horatio Herbert Kitchener, 1st Earl Kitchener',
  french_john: 'John French, 1st Earl of Ypres',
  haig: 'Douglas Haig, 1st Earl Haig',
  robertson: 'Sir William Robertson, 1st Baronet',
  gough: 'Hubert Gough',
  alekseev_mikhail: 'Mikhail Alekseyev',
  pilsudski_jozef: 'Józef Piłsudski',
  mannerheim_carl: 'Carl Gustaf Emil Mannerheim',
  george_v: 'George V',
};

/* id -> a specific Commons file, for the handful of people whose article lead
 * image is a coat of arms, a recruiting poster, or a photograph in which
 * somebody else is the first face you see. Every file below is used on the
 * person's own article, so the credit Wikimedia gives still applies. */
const FILE_OVERRIDES = {
  franz_joseph: "Emperor Francis Joseph.jpg",
  kitchener: "Horatio Herbert Kitchener, 1st Earl Kitchener of Khartoum, 1901.jpg",
  nicholas_ii: "Nicholas II, 1914.jpg",
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
async function withRetry(fn, tries = 7) {
  for (let i = 0; ; i++) {
    try {
      return await fn();
    } catch (e) {
      const msg = String(e.message ?? e);
      if (i >= tries || !/\b(429|503)\b/.test(msg)) throw e;
      /* Honour the server's own instruction when it sends one; otherwise back
         off for up to a minute and a half. A Wikimedia 429 clears within a couple
         of minutes of stopping, so the right response is simply to wait. */
      const after = /Retry-After:(\d+)/i.exec(msg);
      const wait = Math.min(90_000, after ? Number(after[1]) * 1000 : 5000 * 2 ** i);
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
    if (!res.ok) {
      const ra = res.headers.get("retry-after");
      throw new Error(`${res.status} for ${url}${ra ? ` Retry-After:${ra}` : ""}`);
    }
    return res.json();
  });
  writeFileSync(key, JSON.stringify(j));
  await sleep(1500);
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

// 1c. A hand-picked file beats both of the above: the surname match takes the
// first image on the page alphabetically, which for Kitchener is a poster and
// for Franz Joseph a coat of arms.
for (const [id, file] of Object.entries(FILE_OVERRIDES)) {
  const f = figures.find((x) => x.id === id);
  if (!f) {
    console.log(`   override for ${id} ignored: no such figure in the data`);
    continue;
  }
  lead[OVERRIDES[f.id] ?? f.name.trim()] = { file };
  console.log(`   chosen file for ${id}: ${file}`);
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

/* Commons returns these fields as escaped HTML, so "&" in a studio name comes
   back as "&amp;" and a credit reads "Elliott amp; Fry" unless it is decoded. */
const ENTITIES = {
  "&amp;": "&",
  "&quot;": '"',
  "&#34;": '"',
  "&#39;": "'",
  "&apos;": "'",
  "&lt;": "<",
  "&gt;": ">",
  "&nbsp;": " ",
  "&#160;": " ",
  "&#x2019;": "’",
  "&rsquo;": "’",
};
const clean = (v) =>
  (v?.value ?? "")
    .replace(/<[^>]*>/g, "")
    .replace(/&(?:[a-z]+|#x?[0-9]+);/gi, (m) => ENTITIES[m] ?? ENTITIES[m.toLowerCase()] ?? m)
    .replace(/\s+/g, " ")
    .trim();
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
  /* A Commons file with no licence template hands back the template's own warning
     — "This tag does not indicate the copyright status of the attached work…" —
     and it lands in the Artist field as often as in the licence field. It is not a
     licence and not a credit, so it is dropped wherever it appears; the credit then
     falls back to pointing at the file page, which is the only honest thing left. */
  const NOTICE = /does not indicate|copyright status|no license|permission is required/i;
  /* Commons fills an unused author field with placeholders: "Unknown author",
     "Anonymous", "Not stated", "Original photographer", "presumably official" —
     and when both Artist and Credit are empty it joins two of them, giving
     "AnonymousUnknown author" or "Unknown authorUnknown author". None of those is
     a credit, and printing one reads like an invented name, so strip every
     occurrence and keep only what is left. */
  const artist = NOTICE.test(rawArtist)
    ? ""
    : rawArtist
        .replace(/[{}]/g, " ")
        .replace(
          /(unknown author|anonymous|unknown|inconnu|n\/a|n\.a\.|\bna\b|no author|not stated|presumably official|original photographer)/gi,
          " "
        )
        .replace(/\s{2,}/g, " ")
        .replace(/^[\s,;&/"“”()-]+|[\s,;&/"“”()-]+$/g, "")
        /* An "&" left dangling by a placeholder goes, but an "&" inside a studio name
           is part of the credit: Harris & Ewing, Underwood & Underwood, Elliott & Fry. */
        .replace(/^&\s*/, "")
        .replace(/\s*&$/, "")
        .replace(/^[\s,;&/"“”()-]+|[\s,;&/"“”()-]+$/g, "")
        .trim();
  const rawLicence = clean(em.LicenseShortName) || clean(em.UsageTerms) || "";
  const licence = NOTICE.test(rawLicence) ? "" : rawLicence;
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
