'use client';

import { ChevronDown } from 'lucide-react';
import {
  FIGURES,
  FIGURE_BY_ID,
  SNAPSHOT_NOTES,
  SOURCES,
  UNCERTAINTIES,
} from '@/lib/data';
import { PORTRAITS } from '@/lib/data/portraits';
import { MONTHS, SNAPSHOTS } from '@/lib/site';

const PORTRAIT_LIST = Object.values(PORTRAITS).sort((a, b) =>
  (FIGURE_BY_ID[a.id]?.name ?? a.id).localeCompare(FIGURE_BY_ID[b.id]?.name ?? b.id)
);

/** Months whose colour change is worth a sentence in its own right. */
const NOTED_MONTHS = SNAPSHOTS.filter((s) => SNAPSHOT_NOTES[s.date]);

/** Disclosed rather than hidden: everything a reader could reasonably catch us on. */
const MAP_LIMITS: { head: string; body: string }[] = [
  {
    head: 'One frontier state, drawn for every month',
    body:
      'The outlines are those of July 1914 and they never move, in any of the 53 months. That is the single biggest thing wrong with this map, and it is deliberate: no freely licensed dataset redraws the Romanov, Habsburg, Hohenzollern and Ottoman empires month by month, and a invented frontier is worse than an absent one. So the map answers “who was at war with whom in this month, and where were the armies”, which is what the colours and the lines can honestly carry, and it leaves “what new state was proclaimed here in October 1918” to the events. Germany’s gains at Brest-Litovsk, the successor states of 1918 and the Allied advance into the Rhineland are all described there and not drawn here.',
  },
  {
    head: 'Two giant polygons swallow half the war’s politics',
    body:
      'Russia is one shape running east to the 70th meridian and Austria-Hungary is one shape, so everything inside them is one colour. Poland, Finland, Ukraine, the Baltic states, Czechoslovakia and the South Slav state have no outline of their own in 1914 and get none when they appear in 1918. Ireland sits inside the United Kingdom; Trentino, Trieste and Dalmatia sit inside Austria-Hungary, and those three are precisely what the Treaty of London promised Italy in April 1915; Alsace-Lorraine sits inside Germany, as it had since 1871.',
  },
  {
    head: 'A whole country is one colour, so occupation is invisible',
    body:
      'The status table records polities, not parts of polities. Belgium therefore has one colour in 1916, although the Yser salient behind the Belgian army was never occupied; Romania has one colour after December 1916, although the armies of four powers held Bucharest, the oil and the richer half of the country, while the government and the army held on in Moldavia under Russian protection. Northern France, Serbia, Poland and the Baltic coast are the same problem. Where it matters, the month’s note says so.',
  },
  {
    head: 'Land with no colour is outside this dataset',
    body:
      'The source has 29 features: the states of Europe plus Algeria, Tunisia, Libya, Morocco, Egypt and Iran. This map keeps 22 of them, and the seven it drops carry no political colour anywhere — Egypt, Iran, Algeria, Tunisia, Libya, Morocco and Liechtenstein. That is a choice, not a limit: those six large shapes are in the data and this atlas declines to draw them, because a single July-1914 polygon for Egypt or Persia would imply a settled frontier that the war itself was redrawing. The whole of Arabia is blank for the other reason, which is that the source has no feature for it at all. The lines that run on over that land are still drawn, because they can be placed against the coastline, but the reader should know they are running over ground this map cannot classify. Cyprus is coloured British because the source puts it inside the United Kingdom feature, which is right enough: it was administered from Britain from 1878 and annexed on 5 November 1914. The chips of country names under an event card are a separate list and follow the events, not the outlines: India, whose troops fought at Gallipoli and up the Tigris, and Mexico, which Germany tried to bring into the war in January 1917, are named on cards and drawn nowhere on this map.',
  },
  {
    head: 'What the coloured area reaches, and what it still misses',
    body:
      'The box runs from 25° W to the 70th meridian and from 12.5° N in the Gulf of Aden to 82° N; inside it the source’s own outlines are used whole. Until 25 November 2026 it stopped at the 34th meridian, the 45th parallel and 71.5° N, which is why Palestine, Mesopotamia, the Caucasus, the steppe east of Poland and the Arctic islands carried no colour at all. Widening it added no state and made no new claim: it only stopped discarding land the source itself draws. The published shape went from 330 pieces and 35,268 vertices to 418 and 41,956, and the file from 640 KB to 761 KB, 257 KB over the wire. A quarter-degree sweep of the two builds — 106,299 points — found 13,070 newly coloured and none lost. So Rafah, Gaza, Beersheba, Jerusalem, Amman, Aqaba, Damascus, Mosul, Baghdad, Basra and Erzurum are now drawn as Ottoman, and Astrakhan, Orenburg, Baku, Ganja, Ashgabat, Merv and Tashkent as Russian; the Canaries come out Spanish and Madeira Portuguese, while the Azores sit west of the box and stay blank. Going the whole way to the source’s own limit, 113.9° E in Siberia, was built and measured — 490 polygons, 887 KB, 298 KB gzipped — and rejected: that is another 126 KB for ground nothing in this timeline narrates. What the new 82° N edge does buy is the high Arctic: the published file now paints Russian land as far north as 81.85° N, 59.05° E, which is Franz Josef Land, and Novaya Zemlya north to it, where the old file stopped at 71.5° N. What is still blank, and why: Suez, Port Said and El Arish, Tabriz and Tehran, Algiers, Tunis, Tripoli and Fez are in the source and are dropped by the choice described above. Aden, Riyadh and Kuwait City, and the khanate oases of Khiva and Bukhara — Kunya-Urgench, Karshi, Termez, Dushanbe — are blank because the source has no feature for them, which produces the strangest result on this map: Nukus, on the Amu Darya, is Russian, and the oasis town 20 km to its north is nothing. Bear Island, Longyearbyen in Spitsbergen and Reykjavik are blank for the same reason; so are the tip of North Cape and the tip of the Kanin Peninsula, where a coastline drawn at one part in 110 million has no room for a headland.',
  },
  {
    head: 'Lakes and straits are not cut out',
    body:
      'The source is a map of empires and has no water layer, so a polity’s ring covers whatever inland water lies inside it. Each body below was probed in a box that is open water in reality, so the number is the answer and not a guess: Lake Ladoga and Lake Onega, both Russian, 100% painted; Lake Van, inside the Ottoman feature, 100%; the Dead Sea and the Sea of Galilee, Ottoman, 100%; the Gulf of Aqaba at 28.5° N, Ottoman, 100%; the whole Aral Sea, a box 3° wide at 45° N, Russian, 100%; the Sea of Azov at 46.4° N, Russian, 62% painted and the rest its own shallow shoal water; the Dardanelles at the Narrows, Ottoman, 79%. Narrower straits mostly came out blank, so they read correctly as water: the Kerch Strait 1%, the Sea of Marmara 5%, the Gulf of Corinth 14%. And these read as nothing, all at 0% in a mostly-water box: the Gulf of Riga, the Gulf of Finland, the Gulf of Bothnia at 64° N, the Black Sea, the Caspian, the Skagerrak and Lake Urmia. So the map has two kinds of error, and they point opposite ways. Ladoga, Onega, Van and the Dardanelles have been here since the map was built; the Aral and the Gulf of Aqaba came in with the wider box, because the old box ended south and west of both. Cutting the coloured water out is possible but not clean: the lake layer everyone would use publishes today’s shorelines, and in this box it holds 312 features, 261 of them not reservoirs, with two polygons for the Aral covering about 6,800 km² of a sea this source paints whole — subtracting them would leave the Aral mostly coloured and bisected by a false modern coast. Lakes that have barely changed — Ladoga, Onega, Van — could be cut that way; the Aral and the straits could not. Nothing in this file was drawn by hand, and nothing in it will be.',
  },
  {
    head: 'Small places were dropped',
    body:
      'Island rings under 25 km² were removed to keep the file small enough to serve, which is why the Venetian lagoon’s sandbars are not drawn as land, and Malta, Kos and most of the Dodecanese are not in the source at all. Lemnos is drawn, as Greek, and so is Mudros Bay, where the armistice that ended the war with the Ottoman Empire was signed on 30 October 1918. Liechtenstein is in the source but left out here. Monaco, San Marino, Andorra, Vatican City and Iceland are simply not in the source.',
  },
  {
    head: 'One island in the source is labelled wrongly',
    body:
      'Rhodes is inside the Greek polygon. In July 1914 the Dodecanese had been occupied by Italy since May 1912 and were still, in law, Ottoman, which is one of the reasons Italy and the Ottoman Empire could drift apart over them. The map repeats its source here rather than silently redrawing it, so the reader is told in this list rather than misled by a colour.',
  },
  {
    head: 'The outlines are smoothed',
    body:
      'Curves were simplified to about 1 km. That is what makes 53 months servable from a static file, and it is why you should not measure anything with this map or use it to settle where a frontier ran in detail. The frontier lines are also one cartographer’s reading of the July 1914 administrative state, published in 2026, not an official boundary commission product.',
  },
  {
    head: 'The colour is ours, not the source’s',
    body:
      'The source records the name of each polity and nothing else: no alliances, no occupations, no dates. The allegiance you see comes from a change-point table written for this site in lib/data/status.ts and checked against the references below, one entry per polity for the month in which the change happened. Snapshots are dated the last day of the month, so the colour on the map and the events listed beside it describe the same moment.',
  },
  {
    head: 'Solid lines are held fronts, dashed lines are movements',
    body:
      'A solid line was held by the side named on it for the whole period shown, and carries no ring, because putting a “how far the advance got” dot on the Aisne in October 1917 would be a lie about a place where almost nobody advanced. A dashed line is the whole axis of an operation, and its ring marks roughly where that operation had got to by the month you are reading. There are three line colours — Central Powers, Entente and associated, and Russian — because Russia leaves the war inside the span of this map, and a Russian line in the Entente colour would read as British or French in 1918.',
  },
  {
    head: 'A line is an axis, not a route march',
    body:
      'Each line joins five to eight real places along an axis, every one geocoded and written into the data file as a comment. Armies did not walk straight lines: they moved on roads, converged, split again and were counterattacked sideways. So a line answers “which way was this offensive going and how far did it get”, and does not answer “which villages were occupied on 14 March”. Withdrawals are not drawn in reverse: an army that retreated is shown by the front line it fell back to, and the retreat itself is in the events. A line is shown for its official operational dates, so one can still appear in a month when the offensive had already been called off.',
  },
  {
    head: 'The shortest lines are a few pixels long',
    body:
      'A line is opened by hovering or tapping it, and no zoom this site offers makes every line long enough to aim at. In September 1918, on the two screen sizes this site is tested at, the Fifth Ypres line measures 2 by 2 px on a phone looking at Europe and is down to a pixel or less once the whole world is in frame, and the Amiens line is 4 by 2 px on a phone. The pursuit towards Damascus, which is 15 by 16 px on a desktop looking at Europe, is 2 by 2 px on a phone at the world extent. At that zoom the renderer also drops the intermediate points, so a line built from four or five named places is drawn as its two endpoints. Nothing is hidden: the pins on those lines open their entries as usual, every line is named in the month list, and the events carry what a two-pixel line cannot.',
  },
  {
    head: 'Sea and air war has no lines',
    body:
      'Lines are ground axes. Jutland, the U-boat campaigns, the Zeppelin and Gotha raids on England, the minefields and the blockade are carried by the events, because a fleet has no axis of advance and a ship’s wake is not a front. The Dardanelles in 1915 is the one partial exception: the strait and the beachheads are places, so they can be joined, but the fleet’s sweeps up the strait on 18 March are not drawn.',
  },
  {
    head: 'This map stops at the armistice, not the peace',
    body:
      'The last month is November 1918. Saint-Germain, Trianon, Neuilly and Sèvres lie beyond it, and so do the Polish-Soviet war, the Russian civil war, the Hungarian Soviet Republic and the Turkish War of Independence. The Europe shown in the final frame is therefore a Europe that had already ceased to exist by the time the armistice was signed, and the map says so rather than drawing a peace settlement it has no data for.',
  },
  {
    head: 'The basemap underneath is today’s world',
    body:
      'Roads, rivers and place names come from live OpenStreetMap tiles, drawn in grey and faded so the 1914 fills and the front lines read first. They are there to tell you where a town is, not to tell you anything about 1916: several of the names on them postdate the war, and the borders that matter on this map are the ones we draw ourselves.',
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
            Pick a month on the slider at the top — {MONTHS[0].label} to{' '}
            {MONTHS[MONTHS.length - 1].label}, one month at a time. The arrows step a month, and
            play runs through it for you.
          </li>
          <li>
            The map colours show <strong>who was at war, and on which side</strong>, in that month.
            The frontiers themselves are those of July 1914 and do not move; hover for the name,
            click for the status and the month’s note.
          </li>
          <li>
            Switch on <strong>fronts and movements</strong> for the lines: solid where an army held
            a front, dashed for an offensive, with a ring on the dashed ones showing how far it had
            got. Hover or click a line for the dates, the summary and the forces committed.
          </li>
          <li>
            Choose a <strong>reading level</strong> — primary school, secondary school or
            university. Every event and biography is written three times over, and an event card can
            show all three side by side.
          </li>
          <li>
            Each event is split into <strong>why it happened</strong>,{' '}
            <strong>what happened</strong> and <strong>what followed</strong>, so the chain of cause
            and consequence is always visible. Where historians still differ over a figure, the card
            gives a range and says who disagrees.
          </li>
          <li>
            Every date is <strong>New Style</strong> (Gregorian). Some belligerents still used the{' '}
            <strong>Julian calendar</strong> for part of the war — Russia until 14 February 1918,
            Romania until 1919, Greece until 1923 and Montenegro throughout — so events in the east
            read up to thirteen days later here than in the documents written at the time. Where the
            calendar matters to the story, the card says which style it is using.
          </li>
        </ol>
      </section>

      <section id="map-limits" className={CARD}>
        <h2 className="text-lg font-bold text-stone-900">The map data and its limits</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-stone-700">
          The outlines come from one published file: Jack Kavanagh,{' '}
          <em>Map of Europe, c. 1914</em> (University College Dublin, Zenodo, DOI 10.5281/
          zenodo.20119653, CC BY 4.0), a purpose-made boundary map of the July 1914 states of Europe
          at high resolution. It is fetched once, clipped to the box named below (25° W to the 70th
          meridian, 12.5° N in the Gulf of Aden to 82° N), simplified and
          served as a static GeoJSON file from this site. One correction is made to it: the source
          draws the east coast of Ireland as straight chords across the bays, which left Dublin
          outside the United Kingdom, so the island’s coastline is completed from Natural Earth
          (1:50m, public domain) and nothing else in the file is touched; the pipeline is in{' '}
          <code className="rounded bg-stone-100 px-1 py-px text-[13px]">
            scripts/build-ww1-border-data.mjs
          </code>{' '}
          and can be re-run. The month slider has an entry for every month of the war, all of them
          pointing at that one file, so the slider never has a gap — and the map header says in every
          month that the shapes are the 1914 ones.
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-stone-700">
          What you see coloured is therefore constant; what you see labelled is not. Allegiance,
          armistice, separate peace and dissolution are recorded per polity in a table written for
          this site and checked against the references below, with the month in which each change
          took effect. {NOTED_MONTHS.length} of the {SNAPSHOTS.length} months carry a note of their
          own, because in those months the gap between the frozen frontier and the war on the ground
          is widest.
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
          <summary className="cursor-pointer text-sm font-semibold text-stone-700">
            The {NOTED_MONTHS.length} months with a note of their own
          </summary>
          <ul className="mt-2 space-y-1.5 text-[13px] leading-relaxed text-stone-700">
            {NOTED_MONTHS.map((s) => (
              <li key={s.id}>
                <span className="font-medium text-stone-800">{s.label}</span>
                {` — ${SNAPSHOT_NOTES[s.date]}`}
              </li>
            ))}
          </ul>
        </details>
        <p className="mt-3 text-[13px] leading-snug text-stone-600">
          Every month in the timeline has a snapshot entry: {SNAPSHOTS.length} months,{' '}
          {SNAPSHOTS[0]?.countries} territories drawn in each of them, all from the same July 1914
          geometry.
        </p>
      </section>

      <section id="sources" className={CARD}>
        <h2 className="text-lg font-bold text-stone-900">Where the numbers and the text come from</h2>
        <p className="mt-1 text-sm text-stone-700">
          Every figure on this site was taken from a published source rather than estimated. Where a
          total is genuinely argued over, the range is given rather than a single number, and the two
          names behind the range are usually named. Casualty totals say whether they include deaths
          in captivity and whether the 1918 influenza is in or out, because most published totals
          exclude it and readers otherwise compare mismatched numbers.
        </p>
        <ul className="mt-3 space-y-3">
          {SOURCES.map((s) => (
            <li key={s.citation} className="border-l-2 border-stone-300 pl-3">
              <p className="text-[15px] font-medium leading-snug text-stone-900">{s.citation}</p>
              <p className="text-xs text-stone-600">{s.publisher}</p>
              <p className="mt-0.5 text-[13px] leading-snug text-stone-700">{s.usedFor}</p>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block break-all py-1.5 text-xs text-blue-700 underline hover:text-blue-900"
              >
                {s.url}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section id="photographs" className={CARD}>
        <h2 className="text-lg font-bold text-stone-900">Photographs of the people</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-stone-700">
          {PORTRAIT_LIST.length} of the {FIGURES.length} biographies carry a photograph. Each one is
          the lead image of that person&rsquo;s English Wikipedia article, which means it is a file
          on Wikimedia Commons, public domain or freely licensed — which for the Great War is usually
          true in fact as well as in law, since the men who fought it were photographed by the state
          that sent them. The copies are downloaded once at build time and served from this site
          rather than hotlinked, and the credit Wikimedia gives for each file travels with it.{' '}
          {FIGURES.length - PORTRAIT_LIST.length} people have no usable photograph there and are
          shown as their initials instead.
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-stone-700">
          The photograph is chosen by Wikipedia, not by us, so a few are studio portraits taken before
          the war and a few show the person in the field, sometimes years later. Where an article has
          no lead image, the build script looks through the images the article actually uses and takes
          the first named after the person; those choices are listed below so you can check them.
        </p>
        <details className="mt-3">
          <summary className="cursor-pointer text-sm font-semibold text-stone-700">
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
          Historians do not agree on all of these numbers, and several of them are argued over
          politically as well as scholarly. If a source gives you one figure without a range, treat it
          with suspicion — including ours.
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
          The Armenian genocide and the killing of the Assyrian and Greek populations of the Ottoman
          Empire, the mass reprisals against civilians in Belgium, France and Serbia, the death rates
          among prisoners of war and in captivity, the effect of the blockade on the civilian
          population of Germany and Austria-Hungary, and the 1918 influenza pandemic are part of this
          history and are described here plainly, at each reading level in language suited to the
          reader. Events of that kind are marked with a candle.
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-stone-700">
          Period terms are quoted rather than used as our own voice, and numbers of victims are given
          as ranges where the evidence is contested — which in this war is very often. The site covers
          Europe and the empires drawn in from Europe: the Ottoman, Caucasus, Mesopotamian, Palestinian
          and African campaigns are included. It does not cover the Pacific and East Asian war, the
          postwar settlements of 1919-20, or the civil wars that followed, except where they bear on
          the fighting here.
        </p>
      </section>
      </div>
    </div>
  );
}
