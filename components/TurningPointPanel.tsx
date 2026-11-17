'use client';

import { BookOpen, ChevronDown, Flag, MapPin } from 'lucide-react';
import { EVENT_BY_ID } from '@/lib/data';
import type { Level } from '@/lib/data';
import type { TurningPoint } from '@/lib/data/turning-points';

/**
 * The turning-point panel shown above the event list when the selected month
 * is one of the keys in lib/data/turning-points.ts. It states what changed in
 * the month at the reader's level and points at the event cards that carry the
 * detail; what the month did NOT settle, the map note and the sources fold into
 * one disclosure so the events are never a screenful away. Nothing plays itself
 * away.
 */
export default function TurningPointPanel({
  tp,
  level,
  onOpenEvent,
}: {
  tp: TurningPoint;
  level: Level;
  onOpenEvent: (id: string) => void;
}) {
  const known = tp.eventIds.map((id) => EVENT_BY_ID[id]).filter(Boolean);
  return (
    <aside className="mb-3 rounded-xl border border-amber-800/40 bg-amber-50 p-3.5">
      <p className="flex items-start gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-900">
        <Flag size={14} className="mt-px shrink-0" aria-hidden />
        <span>Turning point · {tp.title}</span>
      </p>
      <p className="mt-2 text-[15px] leading-relaxed text-stone-800">
        <span className="font-semibold">Why this month matters. </span>
        {tp.matters[level]}
      </p>

      {known.length > 0 && (
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {known.map((e) => (
            <button
              key={e.id}
              type="button"
              onClick={() => onOpenEvent(e.id)}
              className="min-h-9 rounded-full border border-amber-800/40 bg-white px-3 text-left text-sm font-medium text-amber-900 hover:bg-amber-100"
            >
              {e.title}
            </button>
          ))}
        </div>
      )}

      <details className="group mt-3 border-t border-amber-800/20 pt-2">
        <summary className="flex min-h-9 cursor-pointer list-none items-center gap-1.5 text-sm font-semibold text-amber-900 [&::-webkit-details-marker]:hidden">
          <ChevronDown
            size={16}
            aria-hidden
            className="transition-transform group-open:rotate-180"
          />
          What it did not settle, and the sources
        </summary>
        <p className="mt-1.5 text-[15px] leading-relaxed text-stone-800">
          <span className="font-semibold">What it did not settle. </span>
          {tp.unsettled[level]}
        </p>

        {tp.mapNote && (
          <p className="mt-2 flex gap-1.5 text-sm leading-relaxed text-stone-700">
            <MapPin size={15} className="mt-1 shrink-0" aria-hidden />
            <span>{tp.mapNote}</span>
          </p>
        )}

        <p className="mt-2 flex items-start gap-1.5 text-xs leading-relaxed text-stone-600">
          <BookOpen size={13} className="mt-0.5 shrink-0" aria-hidden />
          <span>Sources: {tp.sources.join(' · ')}</span>
        </p>
      </details>
    </aside>
  );
}
