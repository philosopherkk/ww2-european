'use client';

import type { ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { SOURCES, UNCERTAINTIES, FIGURES, FIGURE_BY_ID } from '@/lib/data';
import { PORTRAITS } from '@/lib/data/portraits';
import { MONTHS, SNAPSHOTS } from '@/lib/site';

const PORTRAIT_LIST = Object.values(PORTRAITS).sort((a, b) =>
  (FIGURE_BY_ID[a.id]?.name ?? a.id).localeCompare(FIGURE_BY_ID[b.id]?.name ?? b.id)
);

/** Disclosed rather than hidden: everything a reader could reasonably catch us on. */
const MAP_LIMITS: { head: string; body: string }[] = [
  {
    head: 'Territory outside the European dataset uses modern outlines',
    body:
      'Measured on a quarter-degree grid over the box the Europe view frames, 13,975 of 37,502 land points sit outside the Stanford European dataset in the April 1942 map — 37% of the land inside that box — and 13,977 and 13,973 in the April 1938 and April 1945 maps. The ground is everything south of the Mediterranean and east of the Baltic states below the Soviet Union: North Africa to Egypt, the Levant, Iraq, Iran, Central Asia as far as the 68th meridian, and the part of Greenland’s west coast the box reaches. Those lands are filled at every extent (including the Europe view) by the modern-outlines layer, using today’s country outlines and per-month political colours rather than period border polygons. The Tunisian, Egyptian and Syrian campaign lines therefore run across modern outlines.',
  },
  {
    head: 'Where the coloured area stops, and why it stops there',
    body:
      'Two layers put colour on this map: a per-month border layer for the European theatre, and a modern-outlines layer that draws where that one does not. The per-month layer is cut to a box, and until 25 November 2026 that box ended at 62° E. Walking the published file on a quarter-degree grid shows what that did: between 66° N and 69° N the old file stopped at 47.60° E, 49.10° E, 61.25° E and 61.25° E, a sawn cut running across the Kola Peninsula and the Nenets coast instead of a coastline. The dataset holds ground further out in that band, so the eastern bound now ends at 66.5° E, just past the furthest it reaches. The same walk on the file published today gives 65.1° E at 66° N, 66.1° E at 67° N, 65.7° E at 68° N and 65.0° E at 69° N: 178 more quarter-degree points of coast in each of the twelve monthly maps. Every one of them is land — checked against an independent map of the modern world, none of the newly coloured ground is sea — and total painted coverage on a 0.1° grid grew by 0.48%.',
  },
  {
    head: 'The straight edge is gone; the blank steppe is not',
    body:
      'The same walk finds the easternmost painted ground south of 66° N at 66.25° E (at 65.75° N), and it is the same after the widening: the Yamal, the Ob and the Gydan are not in that dataset at any longitude, and no box makes them appear. Outside the European dataset, the modern-outlines layer paints North Africa, the Levant, Iraq, Iran, Iceland and the steppe east of the Urals at every extent using modern country outlines. The north edge stays at 71° N. Raising it to 71.5° N was built and measured: thirty more points of coast in each month, and four in every month of that is open sea in the Barents and Kara seas north of the coast, which is the same fault we are removing, only shorter. A box taken to 82° N was also built and measured: the April 1942 file grows from 313 KB to 342 KB, and the only new land is Franz Josef Land and the north end of Novaya Zemlya — the New Siberian Islands are not in that dataset at any longitude either, so most of that taller box is blank ocean. One small thing was lost in the widening. A quarter-degree point a month at 59.5° E 64.5° N, a river channel where the simplifier now takes a shortcut, is no longer coloured; looked at a hundredth of a degree, the new file gains eleven points of bank there as it loses twenty, which is about six square kilometres of riverbank given up for eleven taken.',
  },
  {
    head: 'The modern outlines carry no water either',
    body:
      'Both layers on this map are maps of polities, not of hydrography, so inland water belongs to whoever surrounds it. Every claim here was tested by putting a grid over a box that is open water in reality and asking which colour, if any, covers it in the April 1942 map. Lake Ladoga comes out painted in every one of 425 points, Finnish in the west and Soviet in the east; Lake Onega in every one of 493; Lake Van in every one of 143, Turkish; the Sea of Azov in 40 of 65. The Black Sea, the largest blank on the map, the Sea of Marmara, the Kerch Strait, the Dardanelles, the Gulf of Aqaba and the Dead Sea are left blank, which is correct. On the modern-outlines layer the Aral Sea is Soviet Union in all 305 points, the Sea of Galilee belongs to the feature named Israel in all 104, and the Dead Sea is split between features named Jordan, Israel and Palestine. Not every water body is filled: the sound between the two halves of Novaya Zemlya, and the one between Spitsbergen and Barentsøya, are blank there too. So the fault has a rule of thumb — a wide shallow sea inside a big empire gets painted as land, a narrow channel does not. Where the two layers disagree about a coastline, the month layer wins inside the European theatre and the modern layer outside it. Neither was redrawn by hand, and neither is a substitute for a survey.',
  },
  {
    head: 'Two shapes in the last snapshot are frozen',
    body:
      'The Germany polygon of 30 April 1945 is byte-identical to the one the layer published for 30 April 1944, and the Italian Social Republic keeps the shape it was given in 1943. So in the last month of the war the map still paints the Reich west of the Oder, and paints Rome and Naples as Italian Social Republic territory — Naples was lost in October 1943 and Rome in June 1944, and Vienna fell on 13 April 1945. Read that snapshot as "the 1944 frontier under attack", not as the situation on the ground.',
  },
  {
    head: 'Austria and Poland never appear as countries',
    body:
      'There is no Austria feature in any snapshot, because the layer treats 1938-1945 annexed territory as part of the Reich. Poland appears in April 1939 and then disappears: in 1940-1945 the map can show only the General Government and the Protectorate of Bohemia and Moravia, with the annexed provinces counted as Germany. That absence is the historical fact, but it is also a data gap, and the events carry what the map cannot show.',
  },
  {
    head: 'July 1937 to March 1938 carry no European border fills',
    body:
      'The timeline opens in July 1937, because that is when the war being mapped began, but the earliest European border state in the dataset is dated 30 April 1938, after the Anschluss. Rather than painting Austria inside the German Reich onto 1937 or early 1938, the nine months from July 1937 to March 1938 leave the European fills off and show only the world layer and the China campaign lines. From April 1938 the map draws the nearest published state on or before the month chosen, so April 1938 carries May 1938 to March 1939 (up to eleven months in the past); the Sudetenland annexed in October 1938 and Prague occupied on 15 March 1939 appear when the April 1939 state takes over.',
  },
  {
    head: 'Small enclaves were dropped',
    body:
      'Ring holes and tiny enclaves were not preserved, which loses a few kilometres of coastline at Vyborg, Sevastopol and Reggio Calabria; those places can read as the wrong colour.',
  },
  {
    head: 'The outlines are smoothed',
    body:
      'Curves were simplified to about 2 km. That is what makes the files small enough to serve, and it is why you should not use this map to measure distances or to settle where a frontier ran in detail.',
  },
  {
    head: 'Two labels were corrected against the map',
    body:
      'In the September 1941 and April 1942 states the source puts the names of the two Reichskommissariate, and the names of their Reichskommissars, on each other’s polygons: the shape reaching the Baltic coast is labelled Reichskommissariat Ukraine and headed by Erich Koch, though that was Hinrich Lohse’s territory, and the shape covering Ukraine is the other way round. The build script labels both by geography rather than by the attribute, and says so in its log.',
  },
  {
    head: 'Micro-states are not drawn',
    body:
      'Gibraltar, Monaco, San Marino, Vatican City and Liechtenstein are in the source layer but are under the minimum area this map keeps, so they have no polygon. They are neither white nor guessed at — they are simply absent.',
  },
  {
    head: 'The basemap underneath is today’s world',
    body:
      'Roads, rivers and place names come from live OpenStreetMap tiles. The faded view drains them to grey so the 1938-1945 fills read first; switch on “Detailed map” in the map controls to see the place names and geography clearly while zooming in. Either way the tiles are today’s world, there to tell you where a town is, not what it was in 1943: the borders that matter here are the coloured ones we draw ourselves.',
  },
  {
    head: 'The ring on a line is an interpolation',
    body:
      'This is a schematic axis of advance through named places, not a surveyed daily front line. The ring marks an interpolated position along that axis by date, not a documented map reference for that morning. The fraction of the line travelled is a linear reading of the campaign’s date window, which is a teaching device rather than a record of where troops stood on a particular day.',
  },
  {
    head: 'Lines show advance only',
    body:
      'A dashed line that reads in one direction cannot tell you which way an army was moving, so withdrawals are left to the events, and the date window on a line is its official operational dates — a line can still be showing in a month when the offensive had already been called off.',
  },
  {
    head: 'A line is an axis, not a route march',
    body:
      'Each line joins five to eight real places along an axis of advance, with the geocoded coordinates in the data file as comments. Armies did not walk straight lines: they moved on roads, converged, split again and were counterattacked sideways. So a line answers “which way was this offensive going and how far did it get”, and the ring on it marks the point the advance had reached by the end of the selected month. It does not answer “which towns were occupied on 14 March”.',
  },
  {
    head: 'Axis lines that were not German are drawn in the German colour',
    body:
      'The legend has three colours — German, Soviet, Western Allied — because those are the three things a reader can use to read the map. Romania attacked Odessa, Hungary fought on the Danube and in the Balaton fighting, Finland defended Karelia, and the 17th Army that was destroyed in the Crimea in 1944 contained German and Romanian units alike. Those operations are drawn in the German colour and the text says who was actually fighting.',
  },
  {
    head: 'The shortest axes are a few pixels long',
    body:
      'A line is opened by hovering or tapping it, and no zoom this site offers makes every axis long enough to aim at. In May 1942, on the two screen sizes this site is tested at, the Luzon axis of the Philippines campaign measures 3 by 8 px on a desktop looking at Asia and 2 by 6 px on a phone, and 1 by 4 px or less once the whole world is in frame; the Sevastopol axis is a single pixel across at the world extent, and the Rangoon axis is 1 by 9 px on a phone. At that zoom the renderer also drops the intermediate points, so an axis built from six named places is drawn as two or three. The data is not missing anything: the pins on those axes open their entries as usual, every campaign is named in the month list, and the events carry what a two-pixel line cannot.',
  },
  {
    head: 'Most air and sea battles have no lines',
    body:
      'Most lines are ground axes of advance, so open-ocean patrol campaigns and strategic bombing offensives are carried by the events instead — no patrol lines for the U-boat war in the Atlantic, no arcs for the Battle of Britain, and no ring round the Courland pocket. Point-to-point crossings at sea (Dunkirk, the Channel Dash, the Dodecanese) and the airborne drop on Crete are drawn with distinct dashes and no progress ring.',
  },
  {
    head: 'A month with no lines is a month with no ground offensive',
    body:
      'Lines exist only where an army moved on prepared ground in an operation with a name. Run the slider across the whole range and four stretches show no line at all: January to May 1938, when the war in China was in the pause between the fall of Nanjing and the campaign for Wuhan; November 1938 to April 1939, the last peace months in Europe and the same Chinese pause; July to November 1940, after the fall of France and before the Balkans; and June 1943, the deliberate pause before Kursk. Those blanks are a claim about the war, not a gap in the data: the fighting in those months was at sea, in the air, behind the lines, or in the occupied countries, and it is carried by the timeline instead. The China war also fills less of this map than it did in fact — three lines for 1937 and 1938 against a war of garrisons, river gunboats and railhead raids, because a named operation is what a marching line can honestly draw.',
  },
];

const SECTIONS = [
  { id: 'how-to-read', label: 'How to read' },
  { id: 'map-limits', label: 'Map limits' },
  { id: 'sources', label: 'Sources' },
  { id: 'photographs', label: 'Photographs' },
  { id: 'disputed', label: 'Still argued over' },
  { id: 'content-notes', label: 'Content notes' },
];

const CARD = 'scroll-mt-16 rounded-xl border border-stone-300 bg-white p-4 shadow-sm sm:p-5';

/**
 * The bibliography holds markdown italics, because that is how a book title is written down:
 * `_Cataclysm: The First World War as Political Tragedy_`. Printed as plain text a reader sees the
 * underscores, so each balanced pair becomes <em> and everything else is returned unchanged.
 *
 * A pair is emphasis only when it delimits a phrase from the surrounding text: neither underscore may sit
 * inside a word. `world_countries_1938` is a file name the reader has to type, so its underscores stay,
 * which is where markdown and a bibliography disagree and the bibliography wins.
 */
function citationText(citation: string): ReactNode {
  const parts: ReactNode[] = [];
  const re = /_([^_\s][^_]*?)_/g;
  const insideWord = (i: number) => /[\p{L}\p{N}]/u.test(citation[i] ?? '');
  let last = 0;
  for (let m = re.exec(citation); m; m = re.exec(citation)) {
    const end = m.index + m[0].length;
    if (insideWord(m.index - 1) || insideWord(end)) continue;
    if (m.index > last) parts.push(citation.slice(last, m.index));
    parts.push(<em key={m.index}>{m[1]}</em>);
    last = end;
  }
  if (last < citation.length) parts.push(citation.slice(last));
  return parts.length === 1 && typeof parts[0] === 'string' ? parts[0] : parts;
}


export default function SourcesPanel() {
  return (
    <div className="space-y-5">
      <div className="mx-auto max-w-3xl space-y-4">
      <nav
        aria-label="On this page"
        className="no-scrollbar sticky top-0 z-20 -mx-3 flex gap-1.5 overflow-x-auto border-b border-stone-200 bg-stone-100/95 px-3 py-2.5 backdrop-blur sm:-mx-4 sm:px-4 lg:mx-0 lg:px-0"
      >
        {SECTIONS.map((sec) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className="inline-flex h-9 shrink-0 items-center rounded-full border border-stone-300 bg-white px-3.5 text-sm font-medium text-stone-700 hover:bg-stone-100"
          >
            {sec.label}
          </a>
        ))}
      </nav>
      <section id="how-to-read" className={CARD}>
        <h2 className="text-lg font-bold text-stone-900">How to read this site</h2>
        <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-[15px] leading-relaxed text-stone-700">
          <li>
            Pick a month on the slider at the top — the whole war from{' '}
            {MONTHS[0].label} to {MONTHS[MONTHS.length - 1].label}, one month at a time. The
            arrows step a month, and play runs through it for you.
          </li>
          <li>
            The map colours show <strong>who held each territory</strong> in that month. Hover for
            the name, click for who ran it and where the government was.
          </li>
          <li>
            Switch on <strong>army movements</strong> to see dashed lines for the major offensives
            that were underway that month. Hover or click a line for the operation name, dates and
            the forces committed.
          </li>
          <li>
            Choose a <strong>reading level</strong> — primary school, secondary school or
            university. Every event and biography is written three times over, and an event card
            can show all three side by side.
          </li>
          <li>
            Each event is split into <strong>why it happened</strong>,{' '}
            <strong>what happened</strong> and <strong>what followed</strong>, so the chain of
            cause and consequence is always visible.
          </li>
        </ol>
      </section>

      <section id="map-limits" className={CARD}>
        <h2 className="text-lg font-bold text-stone-900">The map data and its limits</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-stone-700">
          The outlines come from a published GIS dataset of monthly European border states during
          the Second World War, served as an ArcGIS feature layer and mirrored by the Stanford
          Spatial History Project. Twelve of those states were downloaded as GeoJSON, clipped to the
          European extent, simplified and served as static files from this site; the pipeline is in{' '}
          <code className="rounded bg-stone-100 px-1 py-px text-[13px]">scripts/build-border-data.mjs</code>{' '}
          and can be re-run. Only a minority of the ninety-nine months in 1937-1945 are published
          without a licence, and one of those we deliberately left out: the September 1939 state
          draws Poland as a single undivided polygon, with no line between the German and Soviet
          occupations that began on 28 and 17 September. October 1939 shows the partition properly
          and is one month away, so September 1939 shows the October map and says so.
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-stone-700">
          What the source layer records for the political status of a territory is not reliable — it
          labels Italy &ldquo;Allies&rdquo; in April 1942 and Belgium &ldquo;Allied&rdquo; in
          October 1943. So the geometry is the source&rsquo;s, but the fill colour comes from a
          status table written for this site and checked against the references below. Where the two
          disagree, the table wins.
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-stone-700">
          The dataset is a series of dated states, not a film. Only {SNAPSHOTS.length} of them are
          here, so the map shows the closest state in time to the month you picked and tells you how
          far away it is. Border changes that happened between the recorded states — the Fourth
          Partition of Poland, the Italian armistice, the 1945 frontier on the Oder-Neisse — are
          described in the events instead of being invented on the map.
        </p>
        <h3 className="mt-4 text-base font-semibold text-stone-900">
          Known limits, stated plainly
        </h3>
        <div className="mt-2 divide-y divide-stone-200 rounded-lg border border-stone-200">
          {MAP_LIMITS.map((limit) => (
            <details key={limit.head} className="group">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 px-3 py-2 text-[15px] font-semibold text-stone-800 hover:bg-stone-50 [&::-webkit-details-marker]:hidden">
                <span>{limit.head}</span>
                <ChevronDown
                  size={18}
                  aria-hidden
                  className="shrink-0 text-stone-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="px-3 pb-3 text-[15px] leading-relaxed text-stone-700">{limit.body}</p>
            </details>
          ))}
        </div>
        <details className="mt-3">
          <summary className="min-h-6 cursor-pointer py-1 text-sm font-semibold text-stone-700">
            The {SNAPSHOTS.length} dated map states
          </summary>
          <ul className="mt-2 grid gap-x-4 gap-y-1 text-sm text-stone-700 sm:grid-cols-2">
            {SNAPSHOTS.map((s) => (
              <li key={s.id} className="flex flex-wrap gap-x-2">
                <span className="font-medium text-stone-800">{s.label}</span>
                <span className="text-stone-500">{s.date}</span>
                <span className="text-stone-600">{s.countries} territories</span>
              </li>
            ))}
          </ul>
        </details>
      </section>

      <section id="sources" className={CARD}>
        <h2 className="text-lg font-bold text-stone-900">Where the numbers and the text come from</h2>
        <p className="mt-1 text-sm text-stone-700">
          Every figure on this site was taken from a published source rather than estimated. Where a
          total is genuinely argued over, the range is given rather than a single number.
        </p>
        <ul className="mt-3 space-y-3">
          {SOURCES.map((s) => (
            <li key={s.citation} className="border-l-2 border-stone-300 pl-3">
              <p className="text-[15px] font-medium leading-snug text-stone-900">{citationText(s.citation)}</p>
              <p className="text-xs text-stone-600">{s.publisher}</p>
              <p className="mt-0.5 break-words text-[13px] leading-snug text-stone-700">{s.usedFor}</p>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block break-all py-2 text-xs text-blue-700 underline hover:text-blue-900"
              >
                {s.url}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-snug text-stone-700">
          <span className="font-semibold text-stone-900">The fact-checking this text went through.</span>{' '}
          Every event card and biography was re-checked line by line against published sources, and the
          corrections were then checked again. Dates were the most common error: the Second Battle of Sirte
          was a March 1942 battle that had wandered into 1943, Rommel left Tunisia in March 1943 and not
          October 1942, and the Soviet refusal of landing rights to the Warsaw Uprising came on 22 August,
          not the 18th. Units were the next: one general had been given a division he never commanded, and
          another had his eastern and western commands in the wrong order. Two claims were reversed because
          the sources said the opposite — the Czechoslovak president of 1939 was tried and convicted, not
          left untried, and Ribbentrop pressed Tokyo towards war with the United States rather than warning
          against it. Where a number could not be traced to a solid source at all, it was cut rather than
          quietly kept: no aircraft figure for the Ardennes offensive, no count of Danish SS volunteers. The
          Dresden figure of 200,000 is now given for what it is — a postwar report the 2010 historians’
          commission found to be a forgery.
        </p>
      </section>

      <section id="photographs" className={CARD}>
        <h2 className="text-lg font-bold text-stone-900">Photographs of the people</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-stone-700">
          {PORTRAIT_LIST.length} of the {FIGURES.length} biographies carry a photograph. Each one is
          the lead image of that person&rsquo;s English Wikipedia article, which means it is a file
          on Wikimedia Commons, public domain or freely licensed. The copies are downloaded once at
          build time and served from this site rather than hotlinked, and the credit Wikimedia gives
          for each file travels with it. {FIGURES.length - PORTRAIT_LIST.length} people have no
          usable photograph there and are shown as their initials instead.
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-stone-700">
          The photograph is chosen by Wikipedia, not by us, so a few are studio portraits and a few
          show the person in the field. Where an article has no lead image, the build script looks
          through the images the article actually uses and takes the first named after the person;
          those choices are listed below so you can check them.
        </p>
        <details className="mt-3">
          <summary className="min-h-6 cursor-pointer py-1 text-sm font-semibold text-stone-700">
            Every photograph and its credit
          </summary>
          <ul className="mt-2 space-y-1 text-[13px] leading-snug text-stone-700">
            {PORTRAIT_LIST.map((p) => (
              <li key={p.id}>
                <span className="font-medium text-stone-800">
                  {FIGURE_BY_ID[p.id]?.name ?? p.id}
                </span>{' '}
                — {p.credit},{' '}
                <a
                  href={p.page}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-stone-900"
                >
                  {p.file}
                </a>
              </li>
            ))}
          </ul>
        </details>
      </section>

      <section id="disputed" className="scroll-mt-16 rounded-xl border border-amber-300 bg-amber-50 p-4 sm:p-5">
        <h2 className="text-lg font-bold text-stone-900">What is still argued over</h2>
        <p className="mt-1 text-sm text-stone-700">
          Historians do not agree on all of these numbers. If a source gives you one figure without
          a range, treat it with suspicion — including ours.
        </p>
        <dl className="mt-3 space-y-2">
          {UNCERTAINTIES.map((u) => (
            <div key={u.topic} className="rounded-md bg-white/70 p-2.5">
              <dt className="text-sm font-semibold text-stone-800">{u.topic}</dt>
              <dd className="text-[13px] leading-relaxed text-stone-700">{u.range}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="content-notes" className={CARD}>
        <h2 className="text-lg font-bold text-stone-900">Content warnings and language</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-stone-700">
          The genocide of the Jews of Europe, the murder of disabled people, the treatment of Soviet
          prisoners of war, mass reprisals against civilians, and rape are part of this history and
          are described here plainly, at each reading level in language suited to the reader. Events
          of that kind are marked with a candle.
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-stone-700">
          Period terms are quoted rather than used as our own voice, and numbers of victims are
          given as ranges where the evidence is contested. The atlas runs the whole war: it opens
          in China in July 1937 and follows the fighting through Europe, the Mediterranean, North
          Africa, Burma and China to the Pacific islands and the end of the war in Manchuria and
          Korea. How finely the map can show that varies with the sources: the month-by-month borders
          of the states of Europe come from a published GIS dataset, and outside Europe the world
          layer is drawn from national archives at the coarse resolution described above, so a month
          is shown by colour where the data supports a border and by a dated note where it does not.
          Campaigns beyond those theatres appear where the atlas has a dated event for them, not as a
          general survey.
        </p>
      </section>
      </div>
    </div>
  );
}
