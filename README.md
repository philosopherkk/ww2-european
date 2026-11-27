# The Great War in Europe — month by month

An interactive teaching site about the First World War: a monthly timeline from July 1914 to
November 1918, the borders of July 1914 on a real map with the belligerents re-coloured every
month, front lines and offensives drawn as arrows, the people involved, and every event written
three times over for three reading levels.

## What is here

| Part | Contents |
| --- | --- |
| Map & timeline | 53 months on a slider, one July 1914 geometry coloured by who is at war with whom, 45 campaign lines and 12 march lines (solid for held fronts, dashed for offensives underway that month), 16 turning-point panels for the months in which the colours change, click any country or line for detail |
| Events | 158 events, each split into **why it happened**, **what happened** and **what followed** |
| People | 72 biographies, each with a period photograph, from emperors and field marshals to pashas, prime ministers, a nurse and two revolutionaries |
| Numbers | Population, mobilisation and casualty tables for 16 states, with ranges wherever historians disagree and a note on each figure saying whether influenza deaths are inside it or outside |
| Sources & how to read | What the map data is, what it cannot show, and every source used |

Reading levels are genuine rewrites, not tooltips: **primary school** (age 7-11), **secondary
school** (age 11-16) and **university**. An event card can show all three side by side. The
university level carries the argument — the Verdun attrition memorandum, whether the Somme's
first-day figure is a count or a compilation, what "mutiny" means in the 1917 French army returns.

No month of the war is left empty: the smallest month has one event, and the quietest months are
the ones where the fighting genuinely was quiet.

## Scope

The theatre is Europe, plus the Ottoman, Caucasus, Persian and Mesopotamian campaigns, the Arab
Revolt, the African campaigns and the naval war, because all of them were decided by European
decisions and all of them changed the map this site draws. The 1914 Pacific and East Asian
campaigns are inside that scope, because they were the German colonies taken by Japan and the
Dominions in the first months of the war; the later China and Pacific war, the Western Front's
colonial recruiting outside those campaigns, and the settlements of 1919-20 are out of scope. The
boundary is stated in the Sources panel rather than left to the reader to infer.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npx tsc --noEmit # typecheck
```

## The border data

Country outlines come from one published dataset: Jack Kavanagh, *"Map of Europe, c. 1914"*,
University College Dublin, Zenodo, DOI [10.5281/zenodo.20119653](https://zenodo.org/records/20119653),
CC BY 4.0. It is clipped to the European extent, simplified and dissolved into static GeoJSON that
this site serves from `public/data/borders/`.

```bash
node scripts/build-ww1-border-data.mjs           # uses scripts/.cache/
node scripts/build-ww1-border-data.mjs --refresh # re-download from the source
```

Two decisions in that script are deliberate and will look like bugs:

- The source carries a 1914 status field. It is not used. Fill colour always comes from the
  hand-written belligerent table in `lib/data/status.ts`, because a status frozen at July 1914
  would tell a reader that the United States was at peace in 1918.
- The source's Ottoman polygon stops at the 34th parallel and its Russian one at the 45th
  meridian, so there is no land to colour under Jerusalem, Baghdad or Baku. The script clips to
  that extent rather than inventing geometry, and the lines and cards that run past it say so.

Portraits are cached from Wikipedia by `scripts/fetch-portraits.mjs` into
`public/data/portraits/`, with `manifest.json` recording each file's Wikipedia page, author and
licence.

Everything the map cannot show is disclosed in `components/SourcesPanel.tsx`: the single boundary
state, the clipped Ottoman and Russian edges, the micro-states and islands the source does not
carry, Rhodes drawn inside the wrong polygon, and the smoothing tolerance.

## Deploy

Live at **https://ww1-european.vercel.app** — production as of 25 November 2026 is commit
`829c72c` on the `ww1-european` branch, in the Vercel project `ww1-european` (team `basedkk`).

The project **is** Git-connected: a push to `ww1-european` builds and promotes production by
itself, and the branch's own deployments are the ones that carry this domain. Do not promote a
preview built from `main` to this domain — commits on `main` belong to the Second World War site,
which is a different Vercel project, and aliasing one of its previews here would serve the wrong
atlas. Two projects cannot share the alias either way.

A month can be linked directly with `?m=YYYY-MM`, for example
`https://ww1-european.vercel.app/?m=1916-07`; the app also writes the reading level and the open
tab into the query string (`?m=1914-07&level=secondary&tab=map`).

## Sources

Maps: Jack Kavanagh (UCD, Zenodo) for the July 1914 boundaries, and OpenStreetMap map tiles for
the modern basemap underneath. Photographs: Wikimedia Commons, public domain and freely licensed
images, credited individually in the Sources panel.

Text and figures: the British War Office *Statistics of the Military Effort* (1922), the US War
Department returns of 1924, the International Labour Office questionnaire of 1923-25, the German
*Sanitätsbericht* (1934), Huber, Mortara, Hersch, Urlanis and Erlikman for the population and
loss tables, and Erickson and Haythornthwaite for the Ottoman and imperial armies. Narrative and
argument: Strachan, Stevenson, Herwig, Clark, Fromkin, McMeekin, Suny, and the *Cambridge History
of the First World War*, with 1914-1918-online for the questions historians still argue about.
The full list, with what each source was used for, is in the Sources panel.
