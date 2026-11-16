'use client';

import { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
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

  if (figure) {
    return (
      <div className="space-y-4">
        <button
          type="button"
          onClick={() => onFocus(null)}
          className="inline-flex items-center gap-1 text-sm font-medium text-stone-600 hover:text-stone-900"
        >
          <X size={14} /> Back to all people
        </button>

        <div className="rounded-lg border border-stone-300 bg-white p-4 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-16 shrink-0">
                <FigurePortrait portrait={PORTRAITS[figure.id]} name={figure.name} showCredit />
              </div>
              <div>
                <h2 className="text-xl font-bold text-stone-900">{figure.name}</h2>
                <p className="text-sm text-stone-600">
                  {figure.birthDeath} · {figure.country}
                </p>
              </div>
            </div>
            <span
              className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
              style={{ background: BLOC_META[figure.bloc].color }}
            >
              {BLOC_META[figure.bloc].label}
            </span>
          </div>
          <p className="mt-1 text-sm font-medium text-stone-700">{figure.role}</p>

          {PORTRAITS[figure.id] && (
            <p className="mt-2 text-[11px] leading-snug text-stone-500">
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

          <p className="mt-3 text-[15px] leading-relaxed text-stone-800">{figure.bio[level]}</p>

          {level !== 'university' && (
            <details className="mt-3 rounded-md border border-stone-200 bg-stone-50 p-2.5">
              <summary className="cursor-pointer text-xs font-semibold text-stone-600">
                The scholarly version
              </summary>
              <p className="mt-2 text-[13px] leading-relaxed text-stone-700">
                {figure.bio.university}
              </p>
            </details>
          )}
        </div>

        <div>
          <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-stone-500">
            In {figure.name.split(' ').slice(-1)[0]}&rsquo;s events
          </h3>
          <ul className="space-y-1.5">
            {eventsWithFigure.map((e) => (
              <li key={e.id}>
                <button
                  type="button"
                  onClick={() => onOpenEvent(e.id)}
                  className="w-full rounded-md border border-stone-200 bg-white px-3 py-2 text-left text-sm hover:border-stone-400"
                >
                  <span className="text-xs text-stone-500">
                    {longDate(e.date, e.precision)}
                  </span>
                  <span className="block font-medium text-stone-800">{e.title}</span>
                </button>
              </li>
            ))}
            {eventsWithFigure.length === 0 && (
              <li className="text-sm text-stone-500">
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
      <div className="flex flex-wrap items-center gap-2">
        <label className="relative flex-1 min-w-[200px]">
          <Search size={15} className="absolute left-2 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, job or country"
            className="w-full rounded-md border border-stone-300 bg-white py-1.5 pl-7 pr-2 text-sm outline-none focus:border-stone-500"
          />
        </label>
        <select
          value={bloc}
          onChange={(e) => setBloc(e.target.value as Bloc | 'all')}
          className="rounded-md border border-stone-300 bg-white px-2 py-1.5 text-sm"
        >
          <option value="all">All sides</option>
          {(Object.keys(BLOC_META) as Bloc[]).map((b) => (
            <option key={b} value={b}>
              {BLOC_META[b].label}
            </option>
          ))}
        </select>
      </div>

      <p className="text-xs text-stone-500">
        {filtered.length} of {FIGURES.length} people. Each biography is written at your reading
        level.
      </p>

      <ul className="grid gap-2 sm:grid-cols-2">
        {filtered.map((f) => (
          <li key={f.id}>
            <button
              type="button"
              onClick={() => onFocus(f.id)}
              className="h-full w-full rounded-md border border-stone-300 bg-white p-3 text-left hover:border-stone-500 hover:shadow-sm"
            >
              <div className="flex items-start gap-2.5">
                <div className="relative h-10 w-10 shrink-0">
                  <FigurePortrait portrait={PORTRAITS[f.id]} name={f.name} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-semibold leading-snug text-stone-900">{f.name}</p>
                    <span
                      className="mt-0.5 shrink-0 rounded-full px-2 py-px text-[10px] font-semibold text-white"
                      style={{ background: BLOC_META[f.bloc].color }}
                    >
                      {BLOC_META[f.bloc].label}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500">
                    {f.birthDeath} · {f.country}
                  </p>
                  <p className="mt-1 text-[13px] leading-snug text-stone-700">{f.role}</p>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
