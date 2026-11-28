'use client';

import { useState } from 'react';
import { ChevronDown, MapPin, Users } from 'lucide-react';
import type { LevelText, WW2Event } from '@/lib/data';
import { FIGURE_BY_ID } from '@/lib/data';
import { PORTRAITS } from '@/lib/data/portraits';
import { FigurePortrait } from './FigurePortrait';
import LevelUpButton from './LevelUpButton';
import ListenButton from './ListenButton';
import { FRONT_META, KIND_META, longDate } from '@/lib/site';
import { LEVELS, speechText, textForLevel, type ReadingLevel } from '@/lib/reading-level';

const HEADINGS: Record<ReadingLevel, { cause: string; what: string; consequence: string }> = {
  story: {
    cause: 'Why',
    what: 'What happened',
    consequence: 'What happened next',
  },
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

function ownStory(story: LevelText | undefined): story is LevelText {
  return Boolean(story && story.cause.trim() && story.what.trim() && story.consequence.trim());
}

function tierText(event: WW2Event, id: ReadingLevel): LevelText | null {
  switch (id) {
    case 'story':
      return ownStory(event.story) ? event.story : null;
    case 'primary':
    case 'secondary':
    case 'university':
      return event.levels[id];
    default: {
      const exhaustive: never = id;
      return exhaustive;
    }
  }
}

interface Props {
  event: WW2Event;
  level: ReadingLevel;
  onLevelChange: (level: ReadingLevel) => void;
  onOpenFigure?: (id: string) => void;
  defaultOpen?: boolean;
  /** The army-movement line this event belongs to is under the cursor on the map. */
  linked?: boolean;
}

function Section({ label, text, story }: { label: string; text: string; story: boolean }) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600">{label}</h4>
      <p className={`mt-1 leading-relaxed text-stone-800 ${story ? 'text-lg' : 'text-[15px]'}`}>{text}</p>
    </div>
  );
}

export default function EventCard({
  event,
  level,
  onLevelChange,
  onOpenFigure,
  defaultOpen = false,
  linked = false,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const [prevDefaultOpen, setPrevDefaultOpen] = useState(defaultOpen);
  // A card that is already mounted keeps its own open state, so a turning point opening one
  // of its linked events in the same month would scroll without opening it. defaultOpen only
  // arrives as a change, so the card has to follow it.
  if (defaultOpen !== prevDefaultOpen) {
    setPrevDefaultOpen(defaultOpen);
    if (defaultOpen) setOpen(true);
  }
  const storyShell = level === 'story';
  const shown: ReadingLevel = storyShell && !ownStory(event.story) ? 'primary' : level;
  const headings = HEADINGS[shown];
  const text = textForLevel(event.levels, event.story, level);
  const kind = KIND_META[event.kind];
  const compare = LEVELS.filter((item) => tierText(event, item.id));

  return (
    <article
      data-linked={linked || undefined}
      data-reading-level={level}
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
            <span aria-hidden className={storyShell ? 'text-3xl leading-none' : 'text-sm leading-none'}>
              {kind.emoji}
            </span>
            {longDate(event.date, event.precision)} · {kind.label}
            {linked && (
              <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-[11px] font-semibold text-amber-900">
                On the line you are pointing at
              </span>
            )}
          </span>
          <span className={`mt-0.5 block font-serif font-semibold leading-snug text-stone-900 ${storyShell ? 'text-2xl' : 'text-lg sm:text-xl'}`}>
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
          {storyShell && <ListenButton text={speechText(text)} />}
          <Section label={headings.cause} text={text.cause} story={storyShell} />
          <Section label={headings.what} text={text.what} story={storyShell} />
          <Section label={headings.consequence} text={text.consequence} story={storyShell} />

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
            <LevelUpButton level={level} onChange={onLevelChange} large={storyShell} />
          </div>

          <details className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-700">
            <summary className="cursor-pointer font-medium text-stone-800">For a parent: compare reading levels</summary>
            <div className="mt-3 space-y-3">
              {compare.map((item) => {
                const block = tierText(event, item.id);
                if (!block) return null;
                const labels = HEADINGS[item.id];
                return (
                  <div key={item.id} className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-stone-600">{item.label}</p>
                    <Section label={labels.cause} text={block.cause} story={false} />
                    <Section label={labels.what} text={block.what} story={false} />
                    <Section label={labels.consequence} text={block.consequence} story={false} />
                  </div>
                );
              })}
            </div>
          </details>
        </div>
      )}
    </article>
  );
}
