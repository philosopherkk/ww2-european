'use client';

import { SOURCES, UNCERTAINTIES, FIGURES, FIGURE_BY_ID } from '@/lib/data';
import { PORTRAITS } from '@/lib/data/portraits';
import { MONTHS, SNAPSHOTS } from '@/lib/site';

const PORTRAIT_LIST = Object.values(PORTRAITS).sort((a, b) =>
  (FIGURE_BY_ID[a.id]?.name ?? a.id).localeCompare(FIGURE_BY_ID[b.id]?.name ?? b.id)
);

/** Disclosed rather than hidden: everything a reader could reasonably catch us on. */
const MAP_LIMITS: { head: string; body: string }[] = [
  {
    head: 'Land with no colour is outside this dataset',
    body:
      'The source layer has no polygons for North Africa, the Levant, Iraq or Iran, so roughly a quarter of the framed area — everything south of the Mediterranean and east of the Baltic states below the Soviet Union — carries no political colour at all. The Tunisian, Egyptian and Syrian campaign lines therefore run across land this map cannot classify.',
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
      'Roads, rivers and place names come from live OpenStreetMap tiles, drawn in grey and faded so the 1938-1945 fills read first. They are there to tell you where a town is, not to tell you anything about 1943: the borders that matter on this map are the coloured ones we draw ourselves, and the modern names sit under them.',
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
    head: 'Air and sea battles have no lines',
    body:
      'Lines are ground axes of advance, so the battles at sea and in the air are carried by the events instead. That means no track for the Bismarck’s last voyage, whose Denmark Strait position at 63.3° N, 31.8° W sits at the rim of the area this map frames, and a ship’s wake is not an axis of advance anyway; no patrol lines for the U-boat war in the Atlantic; no arcs for the Battle of Britain or the bombing offensive; and no ring round the Courland pocket, where a blockade by sea and air — not an advance — is what kept Army Group Centre trapped there from October 1944 to May 1945. The one exception is the Channel Dash of 11-13 February 1942, which was a movement of ships through a strait that any army map can place, so it is drawn.',
  },
  {
    head: 'A month with no lines is a month with no ground offensive',
    body:
      'Lines exist only where an army moved on prepared ground in an operation with a name. That leaves the eight peace months of 1939, the five months after the fall of France when nothing moved on land in western Europe, the pause before Kursk in June 1943, and the months after 8 May 1945 empty. Those blanks are a claim about the war, not a gap in the data: the fighting in those months was at sea, in the air, behind the lines, or in the occupied countries, and it is carried by the timeline instead.',
  },
];

export default function SourcesPanel() {
  return (
    <div className="space-y-5">
      <section className="rounded-lg border border-stone-300 bg-white p-4 shadow-sm">
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

      <section className="rounded-lg border border-stone-300 bg-white p-4 shadow-sm">
        <h2 className="text-lg font-bold text-stone-900">The map data and its limits</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-stone-700">
          The outlines come from a published GIS dataset of monthly European border states during
          the Second World War, served as an ArcGIS feature layer and mirrored by the Stanford
          Spatial History Project. Twelve of those states were downloaded as GeoJSON, clipped to the
          European extent, simplified and served as static files from this site; the pipeline is in{' '}
          <code className="rounded bg-stone-100 px-1 py-px text-[13px]">scripts/build-border-data.mjs</code>{' '}
          and can be re-run. Only a minority of the ninety-six months in 1938-1945 are published
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
        <ul className="mt-1.5 space-y-1.5 text-[14px] leading-relaxed text-stone-700">
          {MAP_LIMITS.map((limit) => (
            <li key={limit.head} className="pl-3">
              <strong className="font-semibold">{limit.head}.</strong> {limit.body}
            </li>
          ))}
        </ul>
        <ul className="mt-3 space-y-1 text-sm text-stone-600">
          {SNAPSHOTS.map((s) => (
            <li key={s.id} className="flex flex-wrap gap-x-2">
              <span className="font-medium text-stone-700">{s.label}</span>
              <span className="text-stone-400">{s.date}</span>
              <span className="text-stone-500">{s.countries} territories</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-lg border border-stone-300 bg-white p-4 shadow-sm">
        <h2 className="text-lg font-bold text-stone-900">Where the numbers and the text come from</h2>
        <p className="mt-1 text-sm text-stone-600">
          Every figure on this site was taken from a published source rather than estimated. Where a
          total is genuinely argued over, the range is given rather than a single number.
        </p>
        <ul className="mt-3 space-y-3">
          {SOURCES.map((s) => (
            <li key={s.citation} className="border-l-2 border-stone-300 pl-3">
              <p className="text-[15px] font-medium leading-snug text-stone-900">{s.citation}</p>
              <p className="text-xs text-stone-500">{s.publisher}</p>
              <p className="mt-0.5 text-[13px] leading-snug text-stone-600">{s.usedFor}</p>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-xs text-blue-700 underline hover:text-blue-900"
              >
                {s.url}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-snug text-stone-600">
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

      <section className="rounded-lg border border-stone-300 bg-white p-4 shadow-sm">
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
          <summary className="cursor-pointer text-sm font-semibold text-stone-700">
            Every photograph and its credit
          </summary>
          <ul className="mt-2 space-y-1 text-[13px] leading-snug text-stone-600">
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

      <section className="rounded-lg border border-amber-300 bg-amber-50 p-4">
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

      <section className="rounded-lg border border-stone-300 bg-white p-4 shadow-sm">
        <h2 className="text-lg font-bold text-stone-900">Content warnings and language</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-stone-700">
          The genocide of the Jews of Europe, the murder of disabled people, the treatment of Soviet
          prisoners of war, mass reprisals against civilians, and rape are part of this history and
          are described here plainly, at each reading level in language suited to the reader. Events
          of that kind are marked with a candle.
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-stone-700">
          Period terms are quoted rather than used as our own voice, and numbers of victims are
          given as ranges where the evidence is contested. The site covers the European theatre. It
          does not cover the Pacific war, China, or the colonial campaigns beyond Europe except
          where they bear on the fighting here.
        </p>
      </section>
    </div>
  );
}
