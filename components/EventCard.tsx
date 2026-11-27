'use client';

import { useState } from 'react';
import { ChevronDown, Layers, MapPin, Users } from 'lucide-react';
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
  /** The army-movement line this event belongs to is under the cursor on the map. */
  linked?: boolean;
}

function Section({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600">{label}</h4>
      <p className="mt-1 text-[15px] leading-relaxed text-stone-800">{text}</p>
    </div>
  );
}

export default function EventCard({
  event,
  level,
  onOpenFigure,
  defaultOpen = false,
  linked = false,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const [prevDefaultOpen, setPrevDefaultOpen] = useState(defaultOpen);
  const [showAllLevels, setShowAllLevels] = useState(false);
  // A card that is already mounted keeps its own open state, so a turning point opening one
  // of its linked events in the same month would scroll without opening it. defaultOpen only
  // arrives as a change, so the card has to follow it.
  if (defaultOpen !== prevDefaultOpen) {
    setPrevDefaultOpen(defaultOpen);
    if (defaultOpen) setOpen(true);
  }
  const headings = HEADINGS[level];
  const text: LevelText = event.levels[level];
  const kind = KIND_META[event.kind];

  return (
    <article
      data-linked={linked || undefined}
      className={`overflow-hidden rounded-xl border border-l-4 bg-white shadow-sm transition-shadow ${
        linked ? 'border-stone-700 ring-2 ring-amber-400 shadow-md' : 'border-stone-300'
      }`}
      style={{ borderLeftColor: FRONT_META[event.fronts[0]]?.color ?? '#a8a29e' }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start gap-3 px-3.5 py-3 text-left hover:bg-stone-50"
      >
        <span className="min-w-0 flex-1">
          <span className="flex items-center gap-1.5 text-xs font-medium text-stone-600">
            <span aria-hidden className="text-sm leading-none">
              {kind.emoji}
            </span>
            {longDate(event.date, event.precision)} · {kind.label}
            {linked && (
              <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-[11px] font-semibold text-amber-900">
                On the line you are pointing at
              </span>
            )}
          </span>
          <span className="mt-0.5 block font-serif text-lg font-semibold leading-snug text-stone-900 sm:text-xl">
            {event.title}
          </span>
          {!open && (
            <span className="mt-1 line-clamp-2 text-sm leading-snug text-stone-600">
              {text.what}
            </span>
          )}
          <span className="mt-2 flex flex-wrap gap-1">
            {event.fronts.map((f) => (
              <span
                key={f}
                className="rounded-full px-2 py-0.5 text-xs font-medium text-white"
                style={{ background: FRONT_META[f].color }}
              >
                {FRONT_META[f].label}
              </span>
            ))}
          </span>
        </span>
        <ChevronDown
          size={20}
          aria-hidden
          className={`mt-1 shrink-0 text-stone-500 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="space-y-4 border-t border-stone-200 px-3.5 py-3.5">
          {showAllLevels ? (
            LEVELS.map((l) => (
              <div key={l.id} className="rounded-lg border border-stone-200 bg-stone-50 p-3">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-stone-600">
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
            </>
          )}

          {event.note && (
            <p className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm leading-relaxed text-stone-700">
              <span className="font-semibold text-stone-700">For the record: </span>
              {event.note}
            </p>
          )}

          {event.mapNote && (
            <p className="flex gap-1.5 border-t border-stone-100 pt-3 text-sm leading-relaxed text-stone-700">
              <MapPin size={15} className="mt-1 shrink-0" aria-hidden />
              <span>
                <span className="font-semibold text-stone-700">On the map: </span>
                {event.mapNote}
              </span>
            </p>
          )}

          {(event.figures?.length ?? 0) > 0 && (
            <div className="flex flex-wrap items-center gap-2 border-t border-stone-100 pt-3">
              <Users size={14} className="text-stone-500" aria-hidden />
              <span className="text-sm text-stone-600">People involved:</span>
              {event.figures?.map((id) => {
                const figure = FIGURE_BY_ID[id];
                if (!figure) return null;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => onOpenFigure?.(id)}
                    title={`Open ${figure.name}`}
                    className="flex min-h-9 items-center gap-2 rounded-full border border-stone-300 bg-white py-1 pl-1 pr-3 text-sm font-medium text-stone-700 hover:border-stone-500 hover:bg-stone-100"
                  >
                    <span className="relative h-7 w-7 shrink-0">
                      <FigurePortrait portrait={PORTRAITS[id]} name={figure.name} />
                    </span>
                    {figure.name}
                  </button>
                );
              })}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2 border-t border-stone-100 pt-3">
            <button
              type="button"
              onClick={() => setShowAllLevels((v) => !v)}
              className="inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-stone-300 px-3 text-sm font-medium text-stone-700 hover:bg-stone-100"
            >
              <Layers size={13} />
              {showAllLevels ? 'Show only my reading level' : 'Compare all three reading levels'}
            </button>
            <span className="text-xs text-stone-600">
              Reading level: {LEVELS.find((l) => l.id === level)?.label}
            </span>
          </div>
        </div>
      )}
    </article>
  );
}
