'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { ChevronDown, MapPin, Users } from 'lucide-react';
import ErasMenu from '@/components/ErasMenu';
import { eraKindLabel, eraLongDate } from '@/lib/eras/format';
import type {
  EraEpisode,
  EraEvent,
  EraFigure,
  EraLevel,
  EraPeriod,
} from '@/lib/eras/types';

const EraMap = dynamic(() => import('@/components/EraMap'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[280px] items-center justify-center rounded-xl border border-stone-300 bg-white text-sm text-stone-600">
      Loading the map…
    </div>
  ),
});

const WW1_BASE = process.env.NEXT_PUBLIC_WW1_URL ?? 'https://ww1-european.vercel.app';

const LEVELS: { id: EraLevel; short: string }[] = [
  { id: 'primary', short: 'Primary' },
  { id: 'secondary', short: 'Secondary' },
  { id: 'university', short: 'University' },
];

const HEADINGS: Record<EraLevel, { cause: string; what: string; consequence: string }> = {
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

export default function EraView({ period }: { period: EraPeriod }) {
  const [episodeId, setEpisodeId] = useState(period.episodes[0]?.id ?? '');
  const episode = period.episodes.find((item) => item.id === episodeId) ?? period.episodes[0];
  const [level, setLevel] = useState<EraLevel>('secondary');
  const [openIds, setOpenIds] = useState<string[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  const figuresById = new Map(episode?.figures.map((figure) => [figure.id, figure]) ?? []);
  const placedNames =
    episode?.lines.flatMap((line) =>
      line.waypoints.filter((waypoint) => waypoint.lat != null && waypoint.lng != null).map((waypoint) => waypoint.name)
    ) ?? [];

  function openEvent(id: string) {
    setActiveId(id);
    setOpenIds((ids) => (ids.includes(id) ? ids : [...ids, id]));
    window.setTimeout(() => {
      document.getElementById(`era-event-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 0);
  }

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <header className="sticky top-0 z-[600] bg-stone-900 text-stone-50">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-5 gap-y-2 px-3 py-2.5 sm:px-4">
          <div className="min-w-0 flex-1">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone-500">
              Worldwarpedia
            </div>
            <h1 className="font-serif text-xl font-semibold leading-tight tracking-tight sm:text-2xl">
              {episode?.title ?? period.label}
            </h1>
            <p className="mt-0.5 text-xs text-stone-400">
              {episode ? episode.monthLabel : period.label}
              <span className="text-stone-500"> · </span>
              {period.label}
            </p>
          </div>
          {episode && (
            <div
              className="flex items-stretch overflow-hidden rounded-lg border border-stone-600"
              role="group"
              aria-label="Reading level"
            >
              {LEVELS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setLevel(item.id)}
                  aria-pressed={level === item.id}
                  className={`px-2.5 py-1.5 text-sm font-medium sm:px-3.5 ${
                    level === item.id
                      ? 'bg-stone-50 text-stone-900'
                      : 'text-stone-300 hover:bg-stone-800 hover:text-white'
                  }`}
                >
                  {item.short}
                </button>
              ))}
            </div>
          )}
          <div className="flex items-center gap-2">
            <ErasMenu current={`/era/${period.id}`} />
            <div
              className="flex items-stretch overflow-hidden rounded-lg border border-stone-600"
              role="group"
              aria-label="War"
            >
              <a
                href={WW1_BASE}
                className="px-2.5 py-1.5 text-sm font-medium text-stone-300 hover:bg-stone-800 hover:text-white sm:px-3"
              >
                WW1
              </a>
              <a
                href="/"
                className="px-2.5 py-1.5 text-sm font-medium text-stone-300 hover:bg-stone-800 hover:text-white sm:px-3"
              >
                WW2
              </a>
            </div>
          </div>
        </div>
      </header>

      {!episode ? (
        <main className="mx-auto max-w-3xl px-4 py-10">
          <p className="text-stone-700">Research for this period is not done yet.</p>
        </main>
      ) : (
      <main className="mx-auto max-w-[1400px] px-3 py-3 sm:px-4 sm:py-4">
        {period.episodes.length > 1 && (
          <nav aria-label="Campaigns in this period" className="mb-3 flex flex-wrap gap-2">
            {period.episodes.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setEpisodeId(item.id)}
                aria-current={item.id === episode.id ? 'true' : undefined}
                className={`rounded-full border px-3 py-1.5 text-sm font-medium ${
                  item.id === episode.id
                    ? 'border-stone-900 bg-stone-900 text-white'
                    : 'border-stone-300 bg-white text-stone-800 hover:bg-stone-50'
                }`}
              >
                {item.title}
              </button>
            ))}
          </nav>
        )}

        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.9fr)] lg:items-start lg:gap-4">
          <section aria-label="Map" className="lg:sticky lg:top-24">
            <div className="h-[280px] overflow-hidden rounded-xl border border-stone-300 bg-white sm:h-[360px] lg:h-[520px]">
              <EraMap
                lines={episode.lines}
                links={episode.links}
                activeEventId={activeId}
                onPickEvent={openEvent}
              />
            </div>
            {episode.lines.length === 0 ? (
              <p className="mt-2 text-sm leading-relaxed text-stone-700">No march is drawn.</p>
            ) : (
              <p className="mt-2 text-sm leading-relaxed text-stone-700">
                {episode.monthLabel}. {episode.lines.map((line) => line.name).join(' ')}
              </p>
            )}
            {placedNames.length > 0 && (
              <p className="mt-1 text-sm leading-relaxed text-stone-600">
                {placedNames.join(' · ')}
              </p>
            )}
            {episode.lines.map((line) => (
              <p key={line.id} className="mt-1 text-sm leading-relaxed text-stone-600">
                {line.summary}
              </p>
            ))}
          </section>

          <div className="flex flex-col gap-3">
            {episode.events.map((event) => (
              <EventArticle
                key={event.id}
                event={event}
                level={level}
                open={openIds.includes(event.id)}
                active={activeId === event.id}
                figuresById={figuresById}
                onToggle={() => {
                  setActiveId(event.id);
                  setOpenIds((ids) =>
                    ids.includes(event.id) ? ids.filter((id) => id !== event.id) : [...ids, event.id]
                  );
                }}
              />
            ))}
            {episode.figures.length > 0 && (
              <section aria-label="People" className="mt-2 flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-semibold text-stone-900">People</h2>
                {episode.figures.map((figure) => (
                  <FigureArticle key={figure.id} figure={figure} level={level} />
                ))}
              </section>
            )}
          </div>
        </div>
      </main>
      )}

      <footer className="border-t border-stone-300 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 py-5 text-xs leading-relaxed text-stone-600">
          <p>
            {episode ? `${episode.monthLabel}. ` : ''}Basemap: OpenStreetMap. No historical frontier is drawn.
          </p>
        </div>
      </footer>
    </div>
  );
}

function EventArticle({
  event,
  level,
  open,
  active,
  figuresById,
  onToggle,
}: {
  event: EraEvent;
  level: EraLevel;
  open: boolean;
  active: boolean;
  figuresById: Map<string, EraFigure>;
  onToggle: () => void;
}) {
  const text = event.levels[level];
  const headings = HEADINGS[level];
  const people = event.figures.flatMap((id) => {
    const figure = figuresById.get(id);
    return figure ? [figure] : [];
  });

  return (
    <article
      id={`era-event-${event.id}`}
      className={`overflow-hidden rounded-xl border border-l-4 bg-white shadow-sm ${
        active ? 'border-stone-700 ring-2 ring-amber-400' : 'border-stone-300'
      }`}
      style={{ borderLeftColor: '#1e3a5f' }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-start gap-3 px-3.5 py-3 text-left hover:bg-stone-50"
      >
        <span className="min-w-0 flex-1">
          <span className="text-xs font-medium text-stone-600">
            {eraLongDate(event.date, event.precision)} · {eraKindLabel(event.kind)}
          </span>
          <span className="mt-0.5 block font-serif text-lg font-semibold leading-snug text-stone-900 sm:text-xl">
            {event.title}
          </span>
          {!open && <span className="mt-1 line-clamp-2 text-sm leading-snug text-stone-600">{text.what}</span>}
          <span className="mt-2 block text-xs text-stone-600">{event.countries.join(' · ')}</span>
        </span>
        <ChevronDown
          size={20}
          aria-hidden
          className={`mt-1 shrink-0 text-stone-500 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="space-y-4 border-t border-stone-200 px-3.5 py-3.5">
          <Section label={headings.cause} text={text.cause} />
          <Section label={headings.what} text={text.what} />
          <Section label={headings.consequence} text={text.consequence} />
          {event.note && (
            <p className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm leading-relaxed text-stone-700">
              <span className="font-semibold text-stone-700">For the record: </span>
              {event.note}
            </p>
          )}
          {event.mapNote && (
            <p className="flex gap-1.5 text-sm leading-relaxed text-stone-700">
              <MapPin size={15} className="mt-1 shrink-0" aria-hidden />
              <span>{event.mapNote}</span>
            </p>
          )}
          {people.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 border-t border-stone-100 pt-3">
              <Users size={14} className="text-stone-500" aria-hidden />
              <span className="text-sm text-stone-600">People involved:</span>
              {people.map((figure) => (
                <a
                  key={figure.id}
                  href={`#era-figure-${figure.id}`}
                  className="rounded-full border border-stone-300 bg-white px-3 py-1 text-sm font-medium text-stone-700 hover:border-stone-500 hover:bg-stone-100"
                >
                  {figure.name}
                </a>
              ))}
            </div>
          )}
          <SourceList sources={event.sources} />
        </div>
      )}
    </article>
  );
}

function FigureArticle({ figure, level }: { figure: EraFigure; level: EraLevel }) {
  return (
    <article id={`era-figure-${figure.id}`} className="rounded-xl border border-stone-300 bg-white px-3.5 py-3 shadow-sm">
      <h3 className="font-serif text-lg font-semibold text-stone-900">{figure.name}</h3>
      <p className="text-xs text-stone-600">
        {figure.role} · {figure.country} · {figure.allegiance}
      </p>
      <p className="mt-2 text-[15px] leading-relaxed text-stone-800">{figure.bio[level]}</p>
      {figure.note && (
        <p className="mt-2 rounded-lg border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm leading-relaxed text-stone-700">
          <span className="font-semibold text-stone-700">For the record: </span>
          {figure.note}
        </p>
      )}
    </article>
  );
}

function Section({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600">{label}</h4>
      <p className="mt-1 text-[15px] leading-relaxed text-stone-800">{text}</p>
    </div>
  );
}

function SourceList({ sources }: { sources: EraEvent['sources'] }) {
  if (sources.length === 0) return null;
  return (
    <details className="border-t border-stone-100 pt-3 text-sm text-stone-700">
      <summary className="cursor-pointer font-medium text-stone-800">Sources</summary>
      <ul className="mt-2 space-y-1">
        {sources.map((source) => (
          <li key={source.url}>
            <a href={source.url} className="underline decoration-stone-400 underline-offset-2 hover:text-stone-900">
              {source.publisher}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
