'use client';

import { useMemo } from 'react';
import type { Bloc, CountryStat, Level } from '@/lib/data';
import { BLOCS, COUNTRY_STATS } from '@/lib/data';
import { formatMillions, STAT_YEARS } from '@/lib/site';

const BLOC_ORDER: Bloc[] = ['allies', 'soviet', 'axis', 'co_belligerent'];
const BLOC_COLOR: Record<Bloc, string> = {
  axis: '#A93226',
  allies: '#2E6F9E',
  soviet: '#C8791A',
  co_belligerent: '#6E7F2B',
  collaboration: '#8B5E3C',
  occupied: '#5B6B73',
  neutral: '#8C979B',
};

function Bar({
  value,
  max,
  color,
  label,
}: {
  value: number;
  max: number;
  color: string;
  label: string;
}) {
  const pct = max > 0 ? Math.max(2, Math.round((value / max) * 100)) : 0;
  return (
    <div className="flex items-center gap-2">
      <div className="h-3 flex-1 overflow-hidden rounded-sm bg-stone-200">
        <div className="h-full rounded-sm" style={{ width: `${pct}%`, background: color }} />
      </div>
      <span className="w-[86px] shrink-0 text-right text-xs tabular-nums text-stone-600">
        {label}
      </span>
    </div>
  );
}

export default function NumbersPanel({
  year,
  onYearChange,
  level,
}: {
  year: number;
  onYearChange: (year: number) => void;
  level: Level;
}) {
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

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-stone-300 bg-white p-3 shadow-sm">
        <h2 className="text-sm font-bold uppercase tracking-wide text-stone-500">
          Which year? ({year})
        </h2>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {STAT_YEARS.map((y) => (
            <button
              key={y}
              type="button"
              onClick={() => onYearChange(y)}
              className={`rounded-md border px-2.5 py-1 text-sm font-medium ${
                y === year
                  ? 'border-stone-800 bg-stone-800 text-white'
                  : 'border-stone-300 bg-white text-stone-700 hover:bg-stone-100'
              }`}
            >
              {y}
            </button>
          ))}
        </div>
        <p className="mt-2 text-xs leading-relaxed text-stone-500">
          Population is on that year&rsquo;s borders, so it moves when a country is invaded,
          partitioned or annexed. Armed forces are personnel under arms in all services. Figures are
          rounded estimates; see Sources for the ranges.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {blocTotals.map(({ bloc, forces, names }) => (
          <div key={bloc} className="rounded-lg border border-stone-300 bg-white p-3 shadow-sm">
            <div className="flex items-baseline justify-between">
              <h3 className="font-semibold text-stone-800">{BLOCS[bloc].label}</h3>
              <span className="text-sm font-bold tabular-nums" style={{ color: BLOC_COLOR[bloc] }}>
                {forces > 0 ? `${forces.toFixed(1)} m under arms` : 'n/a'}
              </span>
            </div>
            <p className="mt-1 text-xs text-stone-500">{names.join(', ') || 'no member state with figures for this year'}</p>
            <p className="mt-1 text-[13px] leading-snug text-stone-600">{BLOCS[bloc].blurb}</p>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        {rows.map(({ stat, year: y }) => (
          <CountryRow key={stat.id} stat={stat} population={y.population} forces={y.armedForces} note={y.note} maxPopulation={maxPopulation} maxForces={maxForces} level={level} />
        ))}
      </div>
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
}: {
  stat: CountryStat;
  population: number;
  forces: number;
  note?: string;
  maxPopulation: number;
  maxForces: number;
  level: Level;
}) {
  return (
    <div className="rounded-lg border border-stone-300 bg-white p-3 shadow-sm">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <h3 className="font-bold text-stone-900">
          {stat.name}
          <span className="ml-2 text-xs font-normal text-stone-500">capital {stat.capital}</span>
        </h3>
        <span
          className="rounded-full px-2 py-px text-[10px] font-semibold text-white"
          style={{ background: BLOC_COLOR[stat.bloc] }}
        >
          {BLOCS[stat.bloc]?.label ?? stat.bloc}
        </span>
      </div>

      <div className="mt-2 grid gap-x-4 gap-y-2 sm:grid-cols-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-500">
            Population
          </p>
          <Bar
            value={population}
            max={maxPopulation}
            color="#78716C"
            label={formatMillions(population)}
          />
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-500">
            Armed forces
          </p>
          <Bar
            value={forces}
            max={maxForces}
            color={BLOC_COLOR[stat.bloc]}
            label={formatMillions(forces)}
          />
        </div>
      </div>

      <dl className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-xs text-stone-600">
        <div>
          <dt className="inline font-semibold">Peak under arms: </dt>
          <dd className="inline">{formatMillions(stat.peakForces)}</dd>
        </div>
        <div>
          <dt className="inline font-semibold">Military dead: </dt>
          <dd className="inline">{formatMillions(stat.militaryDeaths)}</dd>
        </div>
        <div>
          <dt className="inline font-semibold">Civilian dead: </dt>
          <dd className="inline">{formatMillions(stat.civilianDeaths)}</dd>
        </div>
      </dl>

      {level === 'primary' ? (
        <p className="mt-2 rounded bg-stone-50 px-2 py-1.5 text-[13px] text-stone-700">
          {stat.simple}
        </p>
      ) : (
        <p className="mt-2 text-xs leading-relaxed text-stone-500">{stat.deathsNote}</p>
      )}

      {note && (
        <p className="mt-1 text-[11px] italic leading-snug text-stone-400">{note}</p>
      )}
    </div>
  );
}
