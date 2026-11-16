'use client';

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
      'Russia is one shape running to the 45th meridian and Austria-Hungary is one shape, so everything inside them is one colour. Poland, Finland, Ukraine, the Baltic states, Czechoslovakia and the South Slav state have no outline of their own in 1914 and get none when they appear in 1918. Ireland sits inside the United Kingdom; Trentino, Trieste and Dalmatia sit inside Austria-Hungary, and those three are precisely what the Treaty of London promised Italy in April 1915; Alsace-Lorraine sits inside Germany, as it had since 1871.',
  },
  {
    head: 'A whole country is one colour, so occupation is invisible',
    body:
      'The status table records polities, not parts of polities. Belgium therefore has one colour in 1916, although the Yser salient behind the Belgian army was never occupied; Romania has one colour after December 1916, although the armies of four powers held Bucharest, the oil and the richer half of the country, while the government and the army held on in Moldavia under Russian protection. Northern France, Serbia, Poland and the Baltic coast are the same problem. Where it matters, the month’s note says so.',
  },
  {
    head: 'Land with no colour is outside this dataset',
    body:
      'The source has 29 features: the states of Europe plus Algeria, Tunisia, Libya, Morocco, Egypt and Iran. This map keeps 22 of them, and the six it drops are the ones the war reached hardest in the south-east: everything south of the 34th parallel, including the Suez Canal, Gaza, Beersheba, Jerusalem and Damascus, and everything east of the 45th meridian, including Baghdad, Persia and the Caspian shore at Baku, carries no political colour at all. The lines for those campaigns are still drawn, because they can be placed against the coastline, but the reader should know they are running over land this map cannot classify. Cyprus is coloured British because the source puts it inside the United Kingdom feature, which is right enough: it was administered from Britain from 1878 and annexed on 5 November 1914. The chips of country names under an event card are a separate list and follow the events, not the outlines: India, whose troops fought at Gallipoli and up the Tigris, and Mexico, which Germany tried to bring into the war in January 1917, are named on cards and drawn nowhere on this map.',
  },
  {
    head: 'Small places were dropped',
    body:
      'Island rings under about 900 km² were removed to keep the file small enough to serve, and Malta, the Dodecanese and most of the smaller Aegean islands are not in the source at all. So Lemnos is not drawn — which is awkward, since the armistice that ended the war with the Ottoman Empire was signed in Mudros Bay on that island on 30 October 1918 — and Liechtenstein, although present in the source, falls under the cut-off. Monaco, San Marino, Andorra, Vatican City and Iceland are simply not in the source.',
  },
  {
    head: 'One island in the source is labelled wrongly',
    body:
      'Rhodes is inside the Greek polygon. In July 1914 the Dodecanese had been occupied by Italy since May 1912 and were still, in law, Ottoman, which is one of the reasons Italy and the Ottoman Empire could drift apart over them. The map repeats its source here rather than silently redrawing it, so the reader is told in this list rather than misled by a colour.',
  },
  {
    head: 'The outlines are smoothed',
    body:
      'Curves were simplified to about 2 to 3 km. That is what makes 53 months servable from a static file, and it is why you should not measure anything with this map or use it to settle where a frontier ran in detail. The frontier lines are also one cartographer’s reading of the July 1914 administrative state, published in 2026, not an official boundary commission product.',
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

export default function SourcesPanel() {
  return (
    <div className="space-y-5">
      <section className="rounded-lg border border-stone-300 bg-white p-4 shadow-sm">
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
        </ol>
      </section>

      <section className="rounded-lg border border-stone-300 bg-white p-4 shadow-sm">
        <h2 className="text-lg font-bold text-stone-900">The map data and its limits</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-stone-700">
          The outlines come from one published file: Jack Kavanagh,{' '}
          <em>Map of Europe, c. 1914</em> (University College Dublin, Zenodo, DOI 10.5281/
          zenodo.20119653, CC BY 4.0), a purpose-made boundary map of the July 1914 states of Europe
          at high resolution. It is fetched once, clipped to the European theatre, simplified and
          served as a static GeoJSON file from this site; the pipeline is in{' '}
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
        <ul className="mt-1.5 space-y-1.5 text-[14px] leading-relaxed text-stone-700">
          {MAP_LIMITS.map((limit) => (
            <li key={limit.head} className="pl-3">
              <strong className="font-semibold">{limit.head}.</strong> {limit.body}
            </li>
          ))}
        </ul>
        <details className="mt-3">
          <summary className="cursor-pointer text-sm font-semibold text-stone-700">
            The {NOTED_MONTHS.length} months with a note of their own
          </summary>
          <ul className="mt-2 space-y-1.5 text-[13px] leading-relaxed text-stone-600">
            {NOTED_MONTHS.map((s) => (
              <li key={s.id}>
                <span className="font-medium text-stone-800">{s.label}</span>
                {` — ${SNAPSHOT_NOTES[s.date]}`}
              </li>
            ))}
          </ul>
        </details>
        <p className="mt-3 text-[13px] leading-snug text-stone-500">
          Every month in the timeline has a snapshot entry: {SNAPSHOTS.length} months,{' '}
          {SNAPSHOTS[0]?.countries} territories drawn in each of them, all from the same July 1914
          geometry.
        </p>
      </section>

      <section className="rounded-lg border border-stone-300 bg-white p-4 shadow-sm">
        <h2 className="text-lg font-bold text-stone-900">Where the numbers and the text come from</h2>
        <p className="mt-1 text-sm text-stone-600">
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
      </section>

      <section className="rounded-lg border border-stone-300 bg-white p-4 shadow-sm">
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

      <section className="rounded-lg border border-stone-300 bg-white p-4 shadow-sm">
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
  );
}
