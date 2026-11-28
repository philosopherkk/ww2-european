'use client';

import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Globe2, MapPin, Pause, Play, Users } from 'lucide-react';
import EraWarSwitch from '@/components/EraWarSwitch';
import type { EraMapExtent } from '@/components/EraMap';
import { eraKindLabel, eraLongDate } from '@/lib/eras/format';
import type { EraEvent, EraFigure, EraLevel, EraPeriod } from '@/lib/eras/types';

const EraMap = dynamic(() => import('@/components/EraMap'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[280px] items-center justify-center rounded-xl border border-stone-300 bg-white text-sm text-stone-600">
      Loading the map…
    </div>
  ),
});

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

function eventYear(iso: string): number {
  const year = Number(iso.slice(0, 4));
  return Number.isFinite(year) ? year : 0;
}

export default function EraView({ period }: { period: EraPeriod }) {
  const events = useMemo(() => period.episodes.flatMap((item) => item.events), [period]);
  const lines = useMemo(() => period.episodes.flatMap((item) => item.lines), [period]);
  const links = useMemo(() => period.episodes.flatMap((item) => item.links), [period]);
  const figures = useMemo(() => period.episodes.flatMap((item) => item.figures), [period]);
  const years = useMemo(() => {
    const found = new Set(events.map((event) => eventYear(event.date)));
    return Array.from(found).sort((a, b) => a - b);
  }, [events]);
  const hasAmericas = events.some((event) => event.fronts.includes('americas'));

  const [yearIdx, setYearIdx] = useState(0);
  const [level, setLevel] = useState<EraLevel>('secondary');
  const [openIds, setOpenIds] = useState<string[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const [extent, setExtent] = useState<EraMapExtent>('auto');

  const safeIdx = years.length === 0 ? 0 : Math.min(yearIdx, years.length - 1);
  const year = years[safeIdx];
  const last = Math.max(years.length - 1, 0);
  const visible = useMemo(
    () => events.filter((event) => year != null && eventYear(event.date) === year),
    [events, year]
  );
  const yearEventIds = useMemo(() => visible.map((event) => event.id), [visible]);
  const visibleIds = useMemo(() => new Set(yearEventIds), [yearEventIds]);
  const visibleLines = lines.filter((line) =>
    links.some((link) => link.lineId === line.id && visibleIds.has(link.eventId))
  );
  const marchLines = visibleLines.filter(
    (line) => line.waypoints.filter((waypoint) => waypoint.lat != null && waypoint.lng != null).length > 1
  );
  const placedNames = visibleLines.flatMap((line) =>
    line.waypoints
      .filter((waypoint) => waypoint.lat != null && waypoint.lng != null)
      .map((waypoint) => waypoint.name)
  );
  const figureIds = new Set(visible.flatMap((event) => event.figures));
  const visibleFigures = figures.filter((figure) => figureIds.has(figure.id));
  const figuresById = new Map(figures.map((figure) => [figure.id, figure]));

  const heading = (() => {
    if (visible.length === 1) return visible[0].title;
    const home = period.episodes.find((item) =>
      visible.every((event) => item.events.some((candidate) => candidate.id === event.id))
    );
    return home?.title ?? period.label;
  })();

  const go = useCallback(
    (delta: number) => {
      setYearIdx((i) => Math.min(years.length - 1, Math.max(0, i + delta)));
      setExtent('auto');
      setActiveId(null);
      setOpenIds([]);
    },
    [years.length]
  );

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      setYearIdx((i) => {
        if (i >= years.length - 1) {
          setPlaying(false);
          return i;
        }
        return i + 1;
      });
      setExtent('auto');
      setActiveId(null);
      setOpenIds([]);
    }, 1100);
    return () => window.clearInterval(id);
  }, [playing, years.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (
        el &&
        (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || el.isContentEditable)
      ) {
        return;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      } else if (e.key === ' ' || e.key === 'p' || e.key === 'P') {
        if (el?.closest('button, a[href], summary')) return;
        e.preventDefault();
        setPlaying((value) => !value);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  function chooseYear(index: number) {
    setYearIdx(index);
    setExtent('auto');
    setActiveId(null);
    setOpenIds([]);
    setPlaying(false);
  }

  function openEvent(id: string) {
    const event = events.find((item) => item.id === id);
    if (event) {
      const index = years.indexOf(eventYear(event.date));
      if (index >= 0) setYearIdx(index);
    }
    setExtent('auto');
    setActiveId(id);
    setOpenIds((ids) => (ids.includes(id) ? ids : [...ids, id]));
    window.setTimeout(() => {
      document.getElementById(`era-event-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 0);
  }

  const fill = last === 0 ? 100 : (safeIdx / last) * 100;

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <header className="relative z-[600] bg-stone-900 text-stone-50">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-5 gap-y-2 px-3 py-2.5 sm:px-4 xl:flex-nowrap">
          <div className="w-full min-w-0 xl:w-auto xl:flex-1">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone-500">
              Worldwarpedia
            </div>
            <h1 className="font-serif text-xl font-semibold leading-tight tracking-tight sm:text-2xl">
              {heading}
            </h1>
            <div className="mt-0.5 flex items-center justify-between gap-2">
              <p className="min-w-0 text-xs leading-snug text-stone-400">
                {year != null ? year : period.label}
                <span className="text-stone-500"> · </span>
                {period.label}
              </p>
              <EraWarSwitch current={`/era/${period.id}`} className="flex shrink-0 xl:hidden" />
            </div>
          </div>
          {years.length > 0 && (
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
                  className={`px-2 py-1.5 text-sm font-medium sm:px-3.5 ${
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
          <EraWarSwitch current={`/era/${period.id}`} className="hidden xl:flex" />
        </div>
      </header>

      {years.length > 0 && (
        <div className="sticky top-0 z-[500] border-b border-stone-300 bg-white/95 shadow-sm backdrop-blur">
          <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-3 gap-y-0 px-3 pb-1 pt-2 sm:px-4 lg:flex-nowrap lg:gap-x-4 lg:pb-2">
            <div className="flex flex-1 items-center gap-1.5 lg:flex-none">
              <button
                type="button"
                onClick={() => go(-1)}
                disabled={safeIdx === 0}
                aria-label="Previous year"
                className="grid h-10 w-10 place-items-center rounded-lg border border-stone-300 bg-white hover:bg-stone-100 disabled:opacity-35"
              >
                <ChevronLeft size={20} />
              </button>
              <label className="relative min-w-0 flex-1 lg:w-[190px] lg:flex-none">
                <span className="sr-only">Choose year</span>
                <select
                  aria-label="Choose year"
                  value={safeIdx}
                  onChange={(e) => chooseYear(Number(e.target.value))}
                  className="h-10 w-full cursor-pointer appearance-none rounded-lg border border-stone-300 bg-white pl-3 pr-8 text-center font-serif text-lg font-semibold tabular-nums text-stone-900 hover:bg-stone-50"
                >
                  {years.map((item, index) => (
                    <option key={item} value={index}>
                      {item}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  aria-hidden
                  className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-500"
                />
              </label>
              <button
                type="button"
                onClick={() => go(1)}
                disabled={safeIdx === last}
                aria-label="Next year"
                className="grid h-10 w-10 place-items-center rounded-lg border border-stone-300 bg-white hover:bg-stone-100 disabled:opacity-35"
              >
                <ChevronRight size={20} />
              </button>
              <button
                type="button"
                onClick={() => setPlaying((value) => !value)}
                aria-label={playing ? 'Pause' : 'Play through the era'}
                className={`inline-flex h-10 items-center gap-1.5 rounded-lg px-3 text-sm font-semibold ${
                  playing
                    ? 'bg-red-900 text-white hover:bg-red-950'
                    : 'bg-stone-900 text-white hover:bg-stone-700'
                }`}
              >
                {playing ? <Pause size={17} /> : <Play size={17} />}
                <span className="hidden sm:inline">{playing ? 'Pause' : 'Play'}</span>
              </button>
            </div>
            <div className="order-last mt-0.5 w-full lg:order-none lg:mt-0 lg:flex-1">
              <input
                type="range"
                min={0}
                max={last}
                value={safeIdx}
                aria-label="Year on the timeline"
                aria-valuetext={year != null ? String(year) : period.label}
                onChange={(e) => chooseYear(Number(e.target.value))}
                style={{ '--fill': `${fill}%` } as React.CSSProperties}
                className="month-slider block w-full"
              />
              <div className="relative mx-[11px] hidden h-7 sm:block">
                {years.map((item, index) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => chooseYear(index)}
                    style={{ left: last === 0 ? '0%' : `${(index / last) * 100}%` }}
                    className={`absolute top-0 h-7 -translate-x-1/2 rounded px-2 text-xs tabular-nums hover:bg-stone-100 hover:text-stone-900 ${
                      item === year ? 'font-bold text-red-900' : 'text-stone-600'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {years.length === 0 ? (
        <main className="mx-auto max-w-3xl px-4 py-10">
          <p className="text-stone-700">Research for this period is not done yet.</p>
        </main>
      ) : (
      <main className="mx-auto max-w-[1400px] px-3 py-3 sm:px-4 sm:py-4">
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.9fr)] lg:items-start lg:gap-4">
          <section aria-label="Map" className="lg:sticky lg:top-24">
            <div className="relative h-[280px] overflow-hidden rounded-xl border border-stone-300 bg-white sm:h-[360px] lg:h-[520px]">
              <EraMap
                lines={lines}
                links={links}
                activeEventId={activeId}
                yearEventIds={yearEventIds}
                extent={hasAmericas ? extent : 'auto'}
                onPickEvent={openEvent}
              />
              {hasAmericas && (
                <div
                  role="group"
                  aria-label="Map extent"
                  className="absolute bottom-7 right-2 z-[450] flex max-w-[calc(100%-6rem)] overflow-hidden rounded-full border border-stone-300 bg-white/95 text-[11px] font-semibold text-stone-800 shadow-md backdrop-blur sm:bottom-8 sm:text-xs"
                >
                  <button
                    type="button"
                    onClick={() => setExtent('america')}
                    aria-pressed={extent === 'america'}
                    aria-label="America"
                    className={`inline-flex min-h-11 items-center gap-1 px-2 sm:h-9 sm:min-h-9 sm:px-2.5 ${
                      extent === 'america' ? 'bg-stone-800 text-white' : 'hover:bg-stone-100'
                    }`}
                  >
                    <span className="sm:hidden">AM</span>
                    <span className="hidden sm:inline">America</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setExtent('world')}
                    aria-pressed={extent === 'world'}
                    aria-label="World"
                    className={`inline-flex min-h-11 items-center gap-1 px-2 sm:h-9 sm:min-h-9 sm:px-2.5 ${
                      extent === 'world' ? 'bg-stone-800 text-white' : 'hover:bg-stone-100'
                    }`}
                  >
                    <Globe2 size={13} aria-hidden />
                    <span className="sm:hidden">WLD</span>
                    <span className="hidden sm:inline">World</span>
                  </button>
                </div>
              )}
            </div>
            {marchLines.length === 0 ? (
              <p className="mt-2 text-sm leading-relaxed text-stone-700">No march is drawn.</p>
            ) : (
              <p className="mt-2 text-sm leading-relaxed text-stone-700">
                {year}. {marchLines.map((line) => line.name).join(' ')}
              </p>
            )}
            {placedNames.length > 0 && (
              <p className="mt-1 text-sm leading-relaxed text-stone-600">{placedNames.join(' · ')}</p>
            )}
            {visibleLines.map((line) => (
              <p key={line.id} className="mt-1 text-sm leading-relaxed text-stone-600">
                {line.summary}
              </p>
            ))}
          </section>

          <div className="flex flex-col gap-3">
            {visible.map((event) => (
              <EventArticle
                key={event.id}
                event={event}
                level={level}
                open={openIds.includes(event.id)}
                active={activeId === event.id}
                figuresById={figuresById}
                onToggle={() => {
                  setExtent('auto');
                  setActiveId(event.id);
                  setOpenIds((ids) =>
                    ids.includes(event.id) ? ids.filter((id) => id !== event.id) : [...ids, event.id]
                  );
                }}
              />
            ))}
            {visibleFigures.length > 0 && (
              <section aria-label="People" className="mt-2 flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-semibold text-stone-900">People</h2>
                {visibleFigures.map((figure) => (
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
            {year != null ? `${year}. ` : ''}Basemap: OpenStreetMap. No historical frontier is drawn.
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
