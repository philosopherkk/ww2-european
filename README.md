# The Second World War in Europe — month by month

An interactive teaching site about the European theatre of the Second World War: a monthly
timeline from January 1938 to August 1945, period border states on a real map, army movement
lines, the people involved, and every event written three times over for three reading levels.

**Live site:** <https://ww2-european.vercel.app>

## What is here

| Part | Contents |
| --- | --- |
| Map & timeline | 92 months on a slider, borders coloured by who held the territory, dashed lines for offensives underway that month, click any country or line for detail |
| Events | 125 events, each split into **why it happened**, **what happened** and **what followed** |
| People | 76 biographies, from heads of state to partisans, economists and camp survivors |
| Numbers | Population, armed-forces and casualty tables, with ranges where historians disagree |
| Sources & how to read | What the map data is, what it cannot show, and every source used |

Reading levels are genuine rewrites, not tooltips: **primary school** (age 7-11), **secondary
school** (age 11-16) and **university**. An event card can show all three side by side.

The site covers the European theatre. The Pacific war, China and the colonial campaigns beyond
Europe are out of scope except where they bear on the fighting here; that boundary is stated in
the Sources panel rather than left to the reader to infer.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npx tsc --noEmit # typecheck
```

## The border data

Country outlines come from a published GIS dataset of monthly European border states during the
war, served as an ArcGIS feature layer and mirrored by the Stanford Spatial History Project. The
twelve states that are published without a licence were downloaded, clipped to the European
extent, simplified and dissolved into static GeoJSON that this site serves from
`public/data/borders/`.

```bash
node scripts/build-border-data.mjs           # uses scripts/.cache/border-src/
node scripts/build-border-data.mjs --refresh # re-download from the source
```

Two things about this data are worth knowing before changing it:

- The source's own `Political_Status` field is wrong in places (Italy is labelled "Allies" in
  April 1942), so fill colour comes from the hand-written status table in `lib/data/status.ts`,
  never from the source attribute.
- In the September 1941 and April 1942 states the source puts each Reichskommissariat's name and
  Reichskommissar on the other's polygon, so `correctLabels()` in the build script labels both by
  geography instead. That is deliberate — do not "fix" it back.

Everything the map cannot show is disclosed in `components/SourcesPanel.tsx`: which months have
no published state, the two shapes frozen in the April 1945 snapshot, the missing Austria and
Poland polygons, dropped micro-states, and the smoothing tolerance.

## Deploy

The Vercel project is connected to this repository, so a push to `main` builds and promotes a
production deployment automatically.

## Sources

Maps: Stanford Spatial History Project (after U. Maine / Rutgers), OpenStreetMap data via
Wikimedia map tiles.
Text and figures: Oxford, Cambridge and Cambridge History of the Second World War; Beevor;
Glantz; Snyder; Tooze; Longerich; and the published archival figures listed in the Sources panel.
