'use client';

import { useState } from 'react';
import { ChevronDown, Layers, Users } from 'lucide-react';
import type { Level, LevelText, WW2Event } from '@/lib/data';
import { FIGURE_BY_ID } from '@/lib/data';
import { PORTRAITS } from '@/lib/data/portraits';
import { FigurePortrait } from './FigurePortrait';
import { FRONT_META, KIND_META, LEVELS, longDate } from '@/lib/site';

const HEADINGS: Record<Level, { cause: string; what: string; consequence: string }> = {
  primary: {
    cause: 'Why it happened',
    what: 'What happened',
    consequence: 'What followed',
  },
  secondary: {
    cause: 'Causes',
    what: 'What happened',
    consequence: 'Consequences',
  },
  university: {
    cause: 'Background and causes',
    what: 'The course of events',
    consequence: 'Significance and the historical debate',
  },
};

interface Props {
  event: WW2Event;
  level: Level;
  onOpenFigure?: (id: string) => void;
  defaultOpen?: boolean;
}

function Section({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <h4 className="text-[11px] font-bold uppercase tracking-wider text-stone-500">{label}</h4>
      <p className="mt-0.5 text-[15px] leading-relaxed text-stone-800">{text}</p>
    </div>
  );
}

export default function EventCard({ event, level, onOpenFigure, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const [showAllLevels, setShowAllLevels] = useState(false);
  const headings = HEADINGS[level];
  const text: LevelText = event.levels[level];
  const kind = KIND_META[event.kind];

  return (
    <article className="rounded-lg border border-stone-300 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start gap-3 rounded-t-lg px-3 py-2.5 text-left hover:bg-stone-50"
      >
        <span className="mt-0.5 text-lg leading-none" aria-hidden>
          {kind.emoji}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-xs font-medium text-stone-500">
            {longDate(event.date, event.precision)} · {kind.label}
          </span>
          <span className="block font-semibold leading-snug text-stone-900">{event.title}</span>
          <span className="mt-1 flex flex-wrap gap-1">
            {event.fronts.map((f) => (
              <span
                key={f}
                className="rounded-full px-2 py-px text-[11px] font-medium text-white"
                style={{ background: FRONT_META[f].color }}
              >
                {FRONT_META[f].label}
              </span>
            ))}
          </span>
        </span>
        <ChevronDown
          size={18}
          className={`mt-1 shrink-0 text-stone-400 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="space-y-3 border-t border-stone-200 px-3 py-3">
          {showAllLevels ? (
            LEVELS.map((l) => (
              <div key={l.id} className="rounded-md border border-stone-200 bg-stone-50 p-2.5">
                <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-stone-500">
                  {l.label} · {l.hint}
                </p>
                <div className="space-y-2">
                  <Section label={HEADINGS[l.id].cause} text={event.levels[l.id].cause} />
                  <Section label={HEADINGS[l.id].what} text={event.levels[l.id].what} />
                  <Section
                    label={HEADINGS[l.id].consequence}
                    text={event.levels[l.id].consequence}
                  />
                </div>
              </div>
            ))
          ) : (
            <>
              <Section label={headings.cause} text={text.cause} />
              <Section label={headings.what} text={text.what} />
              <Section label={headings.consequence} text={text.consequence} />
              {event.note && (
                <p className="rounded-md border border-stone-200 bg-stone-50 px-2.5 py-2 text-[13px] leading-relaxed text-stone-600">
                  <span className="font-semibold text-stone-700">Figure for the record: </span>
                  {event.note}
                </p>
              )}
            </>
          )}

          {(event.figures?.length ?? 0) > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 border-t border-stone-100 pt-2">
              <Users size={14} className="text-stone-400" aria-hidden />
              <span className="text-xs text-stone-500">People involved:</span>
              {event.figures?.map((id) => {
                const figure = FIGURE_BY_ID[id];
                if (!figure) return null;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => onOpenFigure?.(id)}
                    title={`Open ${figure.name}`}
                    className="flex items-center gap-1.5 rounded-full border border-stone-300 bg-white py-0.5 pl-0.5 pr-2 text-xs font-medium text-stone-700 hover:border-stone-500 hover:bg-stone-100"
                  >
                    <span className="relative h-5 w-5 shrink-0">
                      <FigurePortrait portrait={PORTRAITS[id]} name={figure.name} />
                    </span>
                    {figure.name}
                  </button>
                );
              })}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2 border-t border-stone-100 pt-2">
            <button
              type="button"
              onClick={() => setShowAllLevels((v) => !v)}
              className="inline-flex items-center gap-1 rounded border border-stone-300 px-2 py-0.5 text-xs font-medium text-stone-700 hover:bg-stone-100"
            >
              <Layers size={13} />
              {showAllLevels ? 'Show only my reading level' : 'Compare all three reading levels'}
            </button>
            <span className="text-[11px] text-stone-400">
              Reading level: {LEVELS.find((l) => l.id === level)?.label}
            </span>
          </div>
        </div>
      )}
    </article>
  );
}
