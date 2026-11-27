'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { Bloc, CountryStat, Level } from '@/lib/data';
import { BLOCS, COUNTRY_STATS } from '@/lib/data';
import { BLOC_META, formatMillions, STAT_YEARS } from '@/lib/site';

const BLOC_ORDER: Bloc[] = ['allies', 'soviet', 'axis', 'co_belligerent'];

type SortKey = 'forces' | 'population' | 'militaryDeaths' | 'civilianDeaths' | 'name';

const SORTS: { id: SortKey; label: string }[] = [
  { id: 'forces', label: 'Armed forces' },
  { id: 'population', label: 'Population' },
  { id: 'militaryDeaths', label: 'Military dead' },
  { id: 'civilianDeaths', label: 'Civilian dead' },
  { id: 'name', label: 'A–Z' },
];

function Bar({ value, max, color }: { value: number; max: number; color: string }) {
  const pct = max > 0 ? Math.max(1.5, (value / max) * 100) : 0;
  return (
    <div className="h-2.5 overflow-hidden rounded-full bg-stone-200" aria-hidden>
      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
    </div>
  );
}

function Pill({
  active,
  onClick,
  children,
  color,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex h-9 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 text-sm font-medium ${
        active
          ? 'border-stone-800 bg-stone-800 text-white'
          : 'border-stone-300 bg-white text-stone-700 hover:bg-stone-100'
      }`}
    >
      {color && (
        <span aria-hidden className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
      )}
      {children}
    </button>
  );
}

export default function NumbersPanel({ initialYear, level }: { initialYear: number; level: Level }) {
  // The panel owns its year; the parent remounts it with `key={monthYear}` when
  // the reader steps into a different year of the timeline.
  const [year, setYear] = useState(initialYear);
  const [sort, setSort] = useState<SortKey>('forces');
  const [blocFilter, setBlocFilter] = useState<Bloc | 'all'>('all');
  const yearRow = useRef<HTMLDivElement>(null);

  // On a phone the chip row scrolls sideways; bring the chosen year into view
  // without moving the page.
  useEffect(() => {
    const row = yearRow.current;
    const active = row?.querySelector<HTMLElement>('[aria-pressed="true"]');
    if (row && active) {
      row.scrollTo({ left: active.offsetLeft - row.clientWidth / 2 + active.clientWidth / 2, behavior: 'smooth' });
    }
  }, [year]);

  const rows = useMemo(
    () =>
      COUNTRY_STATS.map((stat) => ({
        stat,
        year: stat.series.find((s) => s.year === year) ?? stat.series[stat.series.length - 1],
      })),
    [year]
  );

  const maxPopulation = Math.max(...rows.map((r) => r.year.population));
  const maxForces = Math.max(...rows.map((r) => r.year.armedForces));

  const blocTotals = useMemo(() => {
    return BLOC_ORDER.map((bloc) => {
      const members = rows.filter(
        (r) => r.stat.bloc === bloc && BLOCS[bloc].members.includes(r.stat.name)
      );
      return {
        bloc,
        forces: members.reduce((sum, r) => sum + r.year.armedForces, 0),
        names: members.map((r) => r.stat.name),
      };
    });
  }, [rows]);
  const maxBlocForces = Math.max(...blocTotals.map((b) => b.forces));

  const blocsPresent = useMemo(
    () => Array.from(new Set(COUNTRY_STATS.map((s) => s.bloc))),
    []
  );

  const shown = useMemo(() => {
    const list = rows.filter((r) => blocFilter === 'all' || r.stat.bloc === blocFilter);
    const value = (r: (typeof rows)[number]) => {
      switch (sort) {
        case 'forces':
          return r.year.armedForces;
        case 'population':
          return r.year.population;
        case 'militaryDeaths':
          return r.stat.militaryDeaths;
        case 'civilianDeaths':
          return r.stat.civilianDeaths;
        default:
          return 0;
      }
    };
    return [...list].sort((a, b) =>
      sort === 'name' ? a.stat.name.localeCompare(b.stat.name) : value(b) - value(a)
    );
  }, [rows, sort, blocFilter]);

  return (
    <div className="space-y-4">
      <div className="sticky top-0 z-20 -mx-3 border-b border-stone-200 bg-stone-100/95 px-3 py-2.5 backdrop-blur sm:-mx-4 sm:px-4">
        <div className="flex items-center gap-3">
          <h2 className="shrink-0 text-sm font-bold uppercase tracking-wide text-stone-600">Year</h2>
          <div
            ref={yearRow}
            className="no-scrollbar relative -mr-3 flex gap-1.5 overflow-x-auto pr-3"
            role="group"
            aria-label="Which year"
          >
            {STAT_YEARS.map((y) => (
              <Pill key={y} active={y === year} onClick={() => setYear(y)}>
                {y}
              </Pill>
            ))}
          </div>
        </div>
      </div>

      <details className="rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-700 shadow-sm">
        <summary className="cursor-pointer font-medium text-stone-800">How to read these numbers</summary>
        <p className="mt-2 leading-relaxed">
          Population is on that year&rsquo;s borders, so it moves when a country is invaded,
          partitioned or annexed. Armed forces are personnel under arms in all services. Dead are
          totals for the whole war. Figures are rounded estimates; see Sources for the ranges. Bars
          are scaled to the largest country shown, so only compare bars within one measure.
        </p>
      </details>

      <section className="rounded-xl border border-stone-300 bg-white p-4 shadow-sm">
        <h2 className="font-serif text-xl font-semibold text-stone-900">
          Armies under arms, {year}
        </h2>
        <p className="text-sm text-stone-600">Millions of personnel, by side.</p>
        <ul className="mt-3 space-y-3">
          {blocTotals.map(({ bloc, forces, names }) => (
            <li key={bloc}>
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-semibold text-stone-800">{BLOCS[bloc].label}</span>
                <span className="font-bold tabular-nums" style={{ color: BLOC_META[bloc].color }}>
                  {forces > 0 ? `${forces.toFixed(1)} m` : 'n/a'}
                </span>
              </div>
              <div className="mt-1">
                <Bar value={forces} max={maxBlocForces} color={BLOC_META[bloc].color} />
              </div>
              <p className="mt-1 text-xs text-stone-600">
                {names.join(', ') || 'no member state with figures for this year'}
              </p>
            </li>
          ))}
        </ul>
        <details className="mt-3 border-t border-stone-200 pt-2.5">
          <summary className="cursor-pointer text-sm font-medium text-stone-700">
            Who is in each group
          </summary>
          <dl className="mt-2 space-y-2.5">
            {blocTotals.map(({ bloc }) => (
              <div key={bloc}>
                <dt className="text-sm font-semibold text-stone-800">{BLOCS[bloc].label}</dt>
                <dd className="text-sm leading-snug text-stone-700">{BLOCS[bloc].blurb}</dd>
              </div>
            ))}
          </dl>
        </details>
      </section>

      <section aria-label="Country figures" className="space-y-3">
        <div className="space-y-2">
          <div className="no-scrollbar flex items-center gap-1.5 overflow-x-auto" role="group" aria-label="Sort countries by">
            <span className="shrink-0 pr-1 text-sm text-stone-600">Sort by</span>
            {SORTS.map((s) => (
              <Pill key={s.id} active={sort === s.id} onClick={() => setSort(s.id)}>
                {s.label}
              </Pill>
            ))}
          </div>
          <div className="no-scrollbar flex items-center gap-1.5 overflow-x-auto" role="group" aria-label="Show countries from">
            <span className="shrink-0 pr-1 text-sm text-stone-600">Show</span>
            <Pill active={blocFilter === 'all'} onClick={() => setBlocFilter('all')}>
              All {COUNTRY_STATS.length}
            </Pill>
            {blocsPresent.map((b) => (
              <Pill
                key={b}
                active={blocFilter === b}
                onClick={() => setBlocFilter(blocFilter === b ? 'all' : b)}
                color={BLOC_META[b].color}
              >
                {BLOCS[b]?.label ?? b}
              </Pill>
            ))}
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-2">
          {shown.map(({ stat, year: y }) => (
            <CountryRow
              key={stat.id}
              stat={stat}
              population={y.population}
              forces={y.armedForces}
              note={y.note}
              maxPopulation={maxPopulation}
              maxForces={maxForces}
              level={level}
              highlight={sort}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function Figure({
  label,
  value,
  active,
}: {
  label: string;
  value: string;
  active?: boolean;
}) {
  return (
    <div className={`rounded-lg px-2.5 py-2 ${active ? 'bg-stone-800 text-white' : 'bg-stone-100'}`}>
      <dt className={`text-xs ${active ? 'text-stone-300' : 'text-stone-600'}`}>{label}</dt>
      <dd className="text-[15px] font-bold tabular-nums">{value}</dd>
    </div>
  );
}

function CountryRow({
  stat,
  population,
  forces,
  note,
  maxPopulation,
  maxForces,
  level,
  highlight,
}: {
  stat: CountryStat;
  population: number;
  forces: number;
  note?: string;
  maxPopulation: number;
  maxForces: number;
  level: Level;
  highlight: SortKey;
}) {
  return (
    <article
      className="rounded-xl border border-stone-300 border-l-4 bg-white p-4 shadow-sm"
      style={{ borderLeftColor: BLOC_META[stat.bloc].color }}
    >
      <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
        <div>
          <h3 className="font-serif text-xl font-semibold leading-tight text-stone-900">{stat.name}</h3>
          <p className="text-xs text-stone-600">Capital {stat.capital}</p>
        </div>
        <span
          className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
          style={{ background: BLOC_META[stat.bloc].color }}
        >
          {BLOCS[stat.bloc]?.label ?? stat.bloc}
        </span>
      </div>

      <div className="mt-3 space-y-3">
        <div>
          <div className="flex items-baseline justify-between">
            <p className="text-sm text-stone-700">Population</p>
            <p className="font-bold tabular-nums text-stone-900">{formatMillions(population)}</p>
          </div>
          <Bar value={population} max={maxPopulation} color="#78716C" />
        </div>
        <div>
          <div className="flex items-baseline justify-between">
            <p className="text-sm text-stone-700">Armed forces</p>
            <p className="font-bold tabular-nums text-stone-900">{formatMillions(forces)}</p>
          </div>
          <Bar value={forces} max={maxForces} color={BLOC_META[stat.bloc].color} />
          {note && <p className="mt-1 text-xs leading-snug text-stone-600">{note}</p>}
        </div>
      </div>

      <dl className="mt-3 grid grid-cols-3 gap-1.5">
        <Figure label="Peak under arms" value={formatMillions(stat.peakForces)} />
        <Figure
          label="Military dead"
          value={formatMillions(stat.militaryDeaths)}
          active={highlight === 'militaryDeaths'}
        />
        <Figure
          label="Civilian dead"
          value={formatMillions(stat.civilianDeaths)}
          active={highlight === 'civilianDeaths'}
        />
      </dl>

      {level === 'primary' ? (
        <p className="mt-3 rounded-lg bg-stone-50 px-3 py-2 text-sm leading-relaxed text-stone-700">
          {stat.simple}
        </p>
      ) : (
        <details className="mt-3 border-t border-stone-200 pt-2">
          <summary className="cursor-pointer text-sm font-medium text-stone-700">
            About the death figures
          </summary>
          <p className="mt-1.5 text-sm leading-relaxed text-stone-600">{stat.deathsNote}</p>
        </details>
      )}
    </article>
  );
}
