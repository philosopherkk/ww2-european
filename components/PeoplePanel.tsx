'use client';

import { useMemo, useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import type { Bloc, Level } from '@/lib/data';
import { EVENTS, FIGURES, FIGURE_BY_ID } from '@/lib/data';
import { PORTRAITS } from '@/lib/data/portraits';
import { FigurePortrait } from './FigurePortrait';
import { BLOC_META, longDate } from '@/lib/site';

interface Props {
  level: Level;
  focusId: string | null;
  onFocus: (id: string | null) => void;
  onOpenEvent: (id: string) => void;
}

export default function PeoplePanel({ level, focusId, onFocus, onOpenEvent }: Props) {
  const [query, setQuery] = useState('');
  const [bloc, setBloc] = useState<Bloc | 'all'>('all');
  const figure = focusId ? FIGURE_BY_ID[focusId] : null;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FIGURES.filter((f) => {
      if (bloc !== 'all' && f.bloc !== bloc) return false;
      if (!q) return true;
      return (
        f.name.toLowerCase().includes(q) ||
        f.role.toLowerCase().includes(q) ||
        f.country.toLowerCase().includes(q)
      );
    });
  }, [query, bloc]);

  const eventsWithFigure = useMemo(() => {
    if (!focusId) return [];
    return EVENTS.filter((e) => e.figures?.includes(focusId));
  }, [focusId]);

  const blocCounts = useMemo(() => {
    const counts: Partial<Record<Bloc, number>> = {};
    for (const f of FIGURES) counts[f.bloc] = (counts[f.bloc] ?? 0) + 1;
    return counts;
  }, []);
  const blocs = (Object.keys(BLOC_META) as Bloc[]).filter((b) => blocCounts[b]);

  if (figure) {
    return (
      <div className="space-y-4">
        <button
          type="button"
          onClick={() => onFocus(null)}
          className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-stone-300 bg-white px-3 text-sm font-medium text-stone-700 hover:bg-stone-100"
        >
          <ArrowLeft size={16} aria-hidden /> All people
        </button>

        <div className="mx-auto max-w-3xl rounded-xl border border-stone-300 bg-white p-4 shadow-sm sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="relative h-20 w-20 shrink-0">
                <FigurePortrait portrait={PORTRAITS[figure.id]} name={figure.name} showCredit />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-semibold leading-tight text-stone-900">{figure.name}</h2>
                <p className="text-sm text-stone-700">
                  {figure.birthDeath} · {figure.country}
                </p>
              </div>
            </div>
            <span
              className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
              style={{ background: BLOC_META[figure.bloc].textColor ?? BLOC_META[figure.bloc].color }}
            >
              {BLOC_META[figure.bloc].label}
            </span>
          </div>
          <p className="mt-1 text-sm font-medium text-stone-700">{figure.role}</p>

          {PORTRAITS[figure.id] && (
            <p className="mt-2 text-[11px] leading-snug text-stone-600">
              Photograph: {PORTRAITS[figure.id].credit},{" "}
              <a
                href={PORTRAITS[figure.id].page}
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Wikimedia Commons
              </a>
            </p>
          )}

          <p className="mt-4 text-base leading-relaxed text-stone-800">{figure.bio[level]}</p>

          {level !== 'university' && (
            <details className="mt-3 rounded-md border border-stone-200 bg-stone-50 p-2.5">
              <summary className="cursor-pointer text-xs font-semibold text-stone-700">
                The scholarly version
              </summary>
              <p className="mt-2 text-[13px] leading-relaxed text-stone-700">
                {figure.bio.university}
              </p>
            </details>
          )}
        </div>

        <div className="mx-auto max-w-3xl">
          <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-stone-600">
            In {figure.name.split(' ').slice(-1)[0]}&rsquo;s events
          </h3>
          <ul className="space-y-1.5">
            {eventsWithFigure.map((e) => (
              <li key={e.id}>
                <button
                  type="button"
                  onClick={() => onOpenEvent(e.id)}
                  className="min-h-12 w-full rounded-lg border border-stone-200 bg-white px-3 py-2 text-left text-sm hover:border-stone-400"
                >
                  <span className="text-xs text-stone-600">
                    {longDate(e.date, e.precision)}
                  </span>
                  <span className="block font-medium text-stone-800">{e.title}</span>
                </button>
              </li>
            ))}
            {eventsWithFigure.length === 0 && (
              <li className="text-sm text-stone-600">
                This person does not appear in a dated event on this site.
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="sticky top-0 z-20 -mx-3 space-y-2 border-b border-stone-200 bg-stone-100/95 px-3 pb-2.5 pt-2 backdrop-blur sm:-mx-4 sm:px-4">
        <label className="relative block">
          <span className="sr-only">Search people</span>
          <Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, job or country"
            className="h-11 w-full rounded-xl border border-stone-300 bg-white pl-10 pr-3 text-base outline-none focus:border-stone-500 sm:text-sm"
          />
        </label>
        <div
          className="flex flex-wrap gap-1.5"
          role="group"
          aria-label="Filter by side"
        >
          <Chip active={bloc === 'all'} onClick={() => setBloc('all')} label="All" count={FIGURES.length} />
          {blocs.map((b) => (
            <Chip
              key={b}
              active={bloc === b}
              onClick={() => setBloc(bloc === b ? 'all' : b)}
              label={BLOC_META[b].label}
              count={blocCounts[b] ?? 0}
              color={BLOC_META[b].color}
            />
          ))}
        </div>
      </div>

      <p className="text-sm text-stone-600">
        {filtered.length === FIGURES.length
          ? `${FIGURES.length} people`
          : `${filtered.length} of ${FIGURES.length} people`}
        . Each biography is written at your reading level.
      </p>

      {filtered.length === 0 && (
        <p className="rounded-xl border border-dashed border-stone-300 bg-white p-4 text-sm text-stone-600">
          Nobody matches &ldquo;{query}&rdquo;
          {bloc !== 'all' ? ` among ${BLOC_META[bloc].label}` : ''}. Try a surname, a country or a
          rank such as &ldquo;Field Marshal&rdquo;.
        </p>
      )}

      <ul className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((f) => (
          <li key={f.id}>
            <button
              type="button"
              onClick={() => onFocus(f.id)}
              className="h-full w-full rounded-xl border border-stone-300 border-l-4 bg-white p-3 text-left shadow-sm hover:border-stone-400 hover:shadow"
              style={{ borderLeftColor: BLOC_META[f.bloc].color }}
            >
              <div className="flex items-start gap-3">
                <div className="relative h-12 w-12 shrink-0">
                  <FigurePortrait portrait={PORTRAITS[f.id]} name={f.name} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-serif text-lg font-semibold leading-snug text-stone-900">
                    {f.name}
                  </p>
                  <p className="text-xs text-stone-600">
                    {f.birthDeath} · {f.country}
                  </p>
                  <p className="mt-1 line-clamp-2 text-sm leading-snug text-stone-700">{f.role}</p>
                  <p
                    className="mt-1.5 text-xs font-semibold"
                    style={{ color: BLOC_META[f.bloc].textColor ?? BLOC_META[f.bloc].color }}
                  >
                    {BLOC_META[f.bloc].label}
                  </p>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Chip({
  active,
  onClick,
  label,
  count,
  color,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
  color?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex h-9 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-3 text-sm font-medium ${
        active
          ? 'border-stone-800 bg-stone-800 text-white'
          : 'border-stone-300 bg-white text-stone-700 hover:bg-stone-100'
      }`}
    >
      {color && (
        <span
          aria-hidden
          className="h-2.5 w-2.5 rounded-full ring-1 ring-white/70"
          style={{ background: color }}
        />
      )}
      {label}
      <span className={`text-xs tabular-nums ${active ? 'text-stone-300' : 'text-stone-500'}`}>
        {count}
      </span>
    </button>
  );
}
