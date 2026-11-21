# WW1-European: working brief for Cursor / Grok 4.7

You are taking over the **World War 1 site only**. The WW2 site at
`/Users/ka-kinpoon/Project/WW2/ww2-european` is being worked by another agent right now —
**do not read-modify-write anything in that worktree**, and do not run builds that write
into it. Both worktrees share one git repository, so `git status` from either shows the
same object database; commit specific paths, never `git add -A`.

Read this whole file before editing. The section "Things already investigated — do not
re-investigate" is the most valuable part: several plausible-looking bugs there are
deliberate, and several apparent defects have already been disproved.

---

## 1. What this site is

- Next.js (app router), one page: `app/page.tsx`, seven components in `components/`,
  all data in `lib/data/*.ts`, map tiles in `public/data/borders/`.
- Production: **https://ww1-european.vercel.app**. Repo `philosopherkk/ww2-european`;
  this worktree is on branch **`ww1-european`** (HEAD `fa89f79`).
- Content: 102 events over 53 months (Jul 1914 – Nov 1918), 72 figures, 42 campaign
  lines, 16 turning points, one border geometry re-labelled across 53 snapshots.
- Reading levels: every event has `levels.primary | secondary | university` with parts
  `cause | what | consequence`; figures have `bio.<level>`.

## 2. Orientation commands (all verified working, read-only)

```bash
cd /Users/ka-kinpoon/Project/WW2/WW1-European
npx tsc --noEmit                     # must be 0 errors
node scripts/check-border-places.mjs # expect: "all 53 places correct"

# dump all data to JSON for scripted checks
cd scripts/audit
npx esbuild entry-ww1.ts --bundle --platform=node --format=esm --outfile=/tmp/e1.mjs
node /tmp/e1.mjs > ww1.json          # ~790 KB, keys EVENTS FIGURES CAMPAIGN_LINES …
python3 linkcheck.py ww1             # expect "48 links over 32 of 42 lines, 0 problems"
python3 lengths.py ww1               # fields over the reading-level caps
python3 hygiene2.py                  # duplicate/encoding/typography sweep
```

Dev server: `npx next dev -p 3124` (or any free port; port 3123 is usually held by the
other agent). Start it as a background process — `nohup … &` inside a single shell call
dies when the call returns.

Map: the basemap **must** stay `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`.
CARTO now serves a watermarked "API KEY REQUIRED" tile and Wikimedia's tileserver answers
a public deployment with 403 HTML, which Chrome blocks. Do not "optimise" the tile URL.

## 3. Editorial rules — these are hard

1. **Reading-level word caps**: primary ≤ 45, secondary ≤ 97, university ≤ 143 words per
   part. `python3 scripts/audit/lengths.py ww1` counts with
   `[A-Za-zÀ-ž0-9’'\-]+`. Campaign `summary` / `strength` / `operation` must stay within
   the original length +10 %.
2. **en-GB spelling** throughout ("judgement", "centre", "organised").
3. **Never invent** a coordinate, date, unit strength or figure. If no source prints the
   number, do not write the number.
4. A claim may only be changed to `wrong` on **two independent reliable publishers**.
   All Wikipedia language editions count as **one** family, not two. A figure already
   hedged ("about", "perhaps") where sources genuinely disagree is **confirmed** — leave it.
5. **Never reword prose to match bad map geometry.** If the pixels are wrong, the pixels
   are the bug. Prose is currently correct for the 1914 Littoral even though the map draws
   it Austrian-then-Italian; that mismatch is documented, not an error to reconcile.
6. Prose style already established: date ranges in event cards must match the source
   window, `mapNote` fields explain what the map does *not* show, and no em-dash chains.

## 4. In-flight human work — do not touch or commit these

This working tree has uncommitted edits by the human and another agent:

```
 M lib/data/portrait-types.ts
 M lib/data/portraits.ts
 M lib/data/turning-points.ts
 M public/data/portraits/manifest.json
 M scripts/fetch-portraits.mjs
```

Leave all five alone: never revert, restyle or commit them. `turning-points.ts` in
particular carries ~118 lines of in-progress shortening plus a new card
`bucharest_1918_05`. If you have a finding about turning points, **write it down for the
human instead of editing the file.**

Re-check `git status` before and after every edit: another writer can silently revert
your change. If your edit vanished, re-apply and note it rather than assuming you never
made it.

## 5. The border pipeline — what was already fixed, do not regress it

`scripts/build-ww1-border-data.mjs` builds `public/data/borders/1914-07-01.json`, the one
geometry reused by all 53 snapshots. Commits `82886ca` and `fa89f79` changed it from
409 KB / 49 polygons to **628 KB / 211 KB gz / 330 polygons**, because the build was
deleting islands the site names in prose.

Current constants (do not "tidy" them):

- `MIN_ISLAND_KM2 = 25` — was **900**, which deleted Anglesey, Arran, Islay, Mann, Wight,
  Corfu, Samos, Samothrace and Bornholm.
- `SIMPLIFY_TOLERANCE = 0.01` — was **0.03**, which deleted the Brest peninsula.
- `COORD_DECIMALS = 4` — added: source vertices carry ~15 digits; 4 dp ≈ 5 m and is what
  paid for the extra polygons.

The build is deterministic: `node scripts/build-ww1-border-data.mjs` reproduces the
committed file byte-for-byte. **Always run `node scripts/check-border-places.mjs` after a
rebuild** — it is a 53-place point-in-polygon battery (`EXPECTED`, exits 1 on failure;
`KNOWN_SOURCE_DEFECTS` prints warnings for the errors that live in the source). If you
change a constant and the battery drops below 53, your change is wrong.

Measured and **rejected** options, so they don't get retried:

- `jsts buffer(0)` validity repair: fixes Ireland's 12 self-crossings, changes no point's
  membership. No benefit, added dependency.
- Subtracting pairwise border overlaps: Memelland overlaps by 2,293.7 km² but every
  neighbouring pair overlaps 2–80 km² and Germany already wins on z-order.
- Island cut at 5 km²: restores the 4.7–15.3 km² Venetian lagoon rings but takes 330 →
  845 polygons.
- Swapping the source dataset: `aourednik/historical-basemaps` `world_1914.geojson` scores
  **40/58** on this battery versus our 58/58 — no polygon anywhere under 1000 km², so
  Malta, the Isle of Man, Sylt, Usedom, Bornholm and the Greek islands are gone, and
  Copenhagen, Lisbon, Stockholm and Constantinople fall inside *no* polity.

One improvement that is available and safe: the WW2 build has a `KEEP_TINY` rule which is
a **coordinate** allow-list (Malta at 35.9 E, 27.43 N), not a name list. The WW1 source
does contain the small rings (10,444 rings, 6,613 of them under 1 km²), so a coordinate
allow-list would restore the Venice lagoon isles (12.33 E, 45.43 N) and Bornholm/Rønne
(14.9 E, 55.08 N) without a global threshold change. Ask the human before doing it.

## 6. Things already investigated — do not re-investigate

**Known defects in the source geometry** (`scripts/.cache/ww1-src/first_world_war.json`,
Kavanagh, Zenodo). They are in the source, not caused by our build:

- The Italy/Austria-Hungary frontier is drawn along the **Soča (Isonzo) front of 1915-17**,
  not the 1914 border: Trieste, Duino, Monfalcone, Cormons, Gradisca, Grado, Cervignano
  and Aquileia read as Italian, while Görz, Pula, Rijeka and Ljubljana are correctly
  Austrian. The error **weaves** — 23–39 km too far east at Trieste, correct at Sagrado,
  18 km too far *west* at Caporetto — so no uniform nudge fixes it. A second dataset
  (`world_1914`) has the identical error, so this is a property of the free-data commons.
- The Ireland ring self-intersects 12 times and excludes the bays: **Dublin, Belmullet,
  Tralee, Valentia and Malin Head fall outside the UK polygon.**
- Venice lagoon is a hole with no sandbar rings; Lemnos is drawn Ottoman; Bornholm's
  polygon is a few km off centre (Rønne outside, Nexø inside).

Fixing any of these needs **new geometry from a period map, or an OSM / Natural Earth
coastline** — a licensing decision for the human. Never hand-draw coordinates.

**Claims that were tested and withdrawn — do not "rediscover" them:**

- "Cork, Galway and Sligo fall outside the UK polygon" — partly false; the Cork latitude
  used in the probe was a typo (`41.85`, which is in Spain). Correct latitude is 51.898.
- "Pula renders uncoloured" — false.
- "Kars inside Russia is wrong for 1914" — false; it is correct.
- "Memelland's overlap must be subtracted" — false (see above).
- `september_1941_state` and `surrender_1945_05` — audited, **no change needed**.

## 7. Data structures worth knowing

- `lib/data/campaign-events.ts` — curated `{line, event, at}` links from campaign lines to
  events. `scripts/audit/linkcheck.py ww1` validates the line id, the waypoint index and
  that `at` is within ±3 days of the line's window. Currently 48 links over 32 of 42
  lines, 0 problems. Any new link must pass it.
- `lib/site.ts` — `nearestSnapshot()` maps a month to the snapshot it should display.
  Cards that bracket months outside their own snapshot are deliberate.
- `lib/data/status.ts` — status per polity per month; the map fill colour comes from
  here, never from a status field in the source GeoJSON.
- Cards are keyed by `id`; several audit scripts anchor edits to an `id` block rather than
  to a raw string search, because the same sentence can appear in two cards.

## 8. Known open prose items — decide with the human, don't guess

Evidence is already collected; the human's call is needed on each:

| item | finding | state |
|---|---|---|
| `events-1938-1940.ts:181` (guarantee date) | printed "30 March", sources say 31 March | fix ready |
| "Dobruja passed to Bulgaria" | should be **Southern** Dobruja | only one publisher so far |
| `montenegro_occupied_1916_01` | "one month after Serbia" → **two** (Serbia 1915-11, Montenegro 1916-01 per `status.ts`) | fix ready |
| `caporetto` | site says 24 Oct – 19 Nov, Britannica says 19 Dec for the breakout | open |
| `siege_of_kut` day count | en.wiki is self-contradictory; no second publisher prints a total | leave |
| `bulge`, `compass_1940` | ambiguous antecedent, not a factual error | style only |

Reading-level backlog: **176 WW1 fields are over cap** (events and figures; turning-point
`matters` are within cap). Fixing them needs `scripts/audit/apply_field.py`, one whole
`levels.<lvl>.<part>` value at a time — it refuses straight apostrophes, HTML entities and
over-cap replacements, and writes nothing if any item in a batch fails. Use typographic
apostrophes (’) and literal characters, never `&mdash;`-style entities in JS strings.

## 9. Deploying and verifying — the trap that bites

The Vercel project `ww1-european` builds branch **`main`**, not `ww1-european`, and the
API token cannot change `productionBranch`. So a push to `main` puts the **WW2** build on
the WW1 alias. Symptom: `https://ww1-european.vercel.app` returns HTML identical to the
WW2 site and a 12-entry border manifest.

Recovery:

```bash
npx vercel ls ww1-european                       # deployment id from the list
npx vercel promote https://ww1-european-<id>-basedkk.vercel.app --yes
```

Only ever verify a URL a real deploy produced: `curl` the production domain, then check
in Chrome at 1440×900 and 390×844. Preview/deployment aliases answer 302 to `curl`
(auth protection), so they cannot be verified from a shell — do not report an alias as
live. The border layer is 211 KB gzipped and takes 1–2.5 s to paint; 0 console errors is
the expected result.

## 10. Confirm your understanding before editing

Answer these to the human in your own words before touching any data file:

1. Which two files must you never commit, and why?
2. What must the output of `check-border-places.mjs` be, and what does a lower number mean?
3. Why is the 1914 map showing Trieste as Italian even though the prose is correct?
4. What do you do when you find a figure you believe is wrong but have only one publisher for?
5. A campaign line's card is 105 words at secondary level. What's the maximum you may make it?
6. The human pushes to `main` and `ww1-european.vercel.app` starts showing 1943 events.
   What happened and what is the command to fix it?
