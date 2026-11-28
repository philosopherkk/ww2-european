'use client';

import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Globe2, MapPin, Pause, Play, Users } from 'lucide-react';
import ErasMenu from '@/components/ErasMenu';
import LevelUpButton from '@/components/LevelUpButton';
import ListenButton from '@/components/ListenButton';
import StorySteps from '@/components/StorySteps';
import type { EraMapExtent } from '@/components/EraMap';
import { eraKindEmoji, eraKindLabel, eraLongDate } from '@/lib/eras/format';
import type { EraEvent, EraFigure, EraLevelText, EraPeriod } from '@/lib/eras/types';
import {
  bioForLevel,
  isReadingLevel,
  LEVELS,
  readStoredReadingLevel,
  speechText,
  textForLevel,
  writeStoredReadingLevel,
  type ReadingLevel,
} from '@/lib/reading-level';

const EraMap = dynamic(() => import('@/components/EraMap'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[280px] items-center justify-center rounded-xl border border-stone-300 bg-white text-sm text-stone-600">
      Loading the map…
    </div>
  ),
});

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
  const [level, setLevel] = useState<ReadingLevel>('secondary');
  const [levelReady, setLevelReady] = useState(false);
  const chooseLevel = useCallback((next: ReadingLevel) => {
    setLevel(next);
    writeStoredReadingLevel(next);
  }, []);
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
    const id = window.setTimeout(() => {
      const query = new URLSearchParams(window.location.search);
      const storedLevel = query.get('level');
      if (isReadingLevel(storedLevel)) {
        setLevel(storedLevel);
        writeStoredReadingLevel(storedLevel);
      } else {
        const stored = readStoredReadingLevel();
        if (stored) setLevel(stored);
      }
      setLevelReady(true);
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!levelReady) return;
    const url = new URL(window.location.href);
    url.searchParams.set('level', level);
    window.history.replaceState(null, '', url.toString());
  }, [level, levelReady]);

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

  const stepStory = useCallback(
    (delta: number) => {
      const ids = visible.map((event) => event.id);
      if (ids.length === 0) return;
      const current = activeId && ids.includes(activeId) ? ids.indexOf(activeId) : -1;
      const next = Math.min(ids.length - 1, Math.max(0, current + delta));
      const id = ids[next];
      if (!id) return;
      setExtent('auto');
      setActiveId(id);
      setOpenIds((open) => (open.includes(id) ? open : [...open, id]));
      window.setTimeout(() => {
        document.getElementById(`era-event-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 0);
    },
    [visible, activeId]
  );
  const storyIndex = activeId ? visible.findIndex((event) => event.id === activeId) : -1;

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
              <ErasMenu current={`/era/${period.id}`} className="flex shrink-0 xl:hidden" />
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
                  onClick={() => chooseLevel(item.id)}
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
          <ErasMenu current={`/era/${period.id}`} className="hidden shrink-0 xl:flex" />
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
              <ContinentLabels
                extent={extent}
                hasAmericas={hasAmericas}
                onEurope={() => setExtent('auto')}
                onAmericas={() => setExtent('america')}
                onWorld={() => setExtent('world')}
              />
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
            {level === 'story' && (
              <StorySteps
                index={storyIndex}
                count={visible.length}
                onBack={() => stepStory(-1)}
                onNext={() => stepStory(1)}
              />
            )}
            {visible.map((event) => (
              <EventArticle
                key={event.id}
                event={event}
                level={level}
                onLevelChange={chooseLevel}
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

function ownStory(story: EraLevelText | undefined): story is EraLevelText {
  return Boolean(story && story.cause.trim() && story.what.trim() && story.consequence.trim());
}

function eraTier(event: EraEvent, id: ReadingLevel): EraLevelText | null {
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

function EventArticle({
  event,
  level,
  onLevelChange,
  open,
  active,
  figuresById,
  onToggle,
}: {
  event: EraEvent;
  level: ReadingLevel;
  onLevelChange: (level: ReadingLevel) => void;
  open: boolean;
  active: boolean;
  figuresById: Map<string, EraFigure>;
  onToggle: () => void;
}) {
  const storyShell = level === 'story';
  const shown: ReadingLevel = storyShell && !ownStory(event.story) ? 'primary' : level;
  const text = textForLevel(event.levels, event.story, level);
  const headings = HEADINGS[shown];
  const people = event.figures.flatMap((id) => {
    const figure = figuresById.get(id);
    return figure ? [figure] : [];
  });
  const compare = LEVELS.filter((item) => item.id !== 'story' || ownStory(event.story));

  return (
    <article
      id={`era-event-${event.id}`}
      data-reading-level={level}
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
          <span className="flex items-center gap-1.5 text-xs font-medium text-stone-600">
            <span aria-hidden className={storyShell ? 'text-3xl leading-none' : 'text-sm leading-none'}>
              {eraKindEmoji(event.kind)}
            </span>
            {eraLongDate(event.date, event.precision)} · {eraKindLabel(event.kind)}
          </span>
          <span className={`mt-0.5 block font-serif font-semibold leading-snug text-stone-900 ${storyShell ? 'text-2xl' : 'text-lg sm:text-xl'}`}>
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
          <LevelUpButton level={level} onChange={onLevelChange} large={storyShell} />
          <details className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-700">
            <summary className="cursor-pointer font-medium text-stone-800">For a parent: compare reading levels</summary>
            <div className="mt-3 space-y-3">
              {compare.map((item) => {
                const block = eraTier(event, item.id);
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
          <SourceList sources={event.sources} />
        </div>
      )}
    </article>
  );
}

function FigureArticle({ figure, level }: { figure: EraFigure; level: ReadingLevel }) {
  return (
    <article id={`era-figure-${figure.id}`} className="rounded-xl border border-stone-300 bg-white px-3.5 py-3 shadow-sm">
      <h3 className="font-serif text-lg font-semibold text-stone-900">{figure.name}</h3>
      <p className="text-xs text-stone-600">
        {figure.role} · {figure.country} · {figure.allegiance}
      </p>
      <p className={`mt-2 leading-relaxed text-stone-800 ${level === 'story' ? 'text-lg' : 'text-[15px]'}`}>
        {bioForLevel(
          {
            primary: figure.bio.primary,
            secondary: figure.bio.secondary,
            university: figure.bio.university,
            story: figure.story,
          },
          level,
        )}
      </p>
      {figure.note && (
        <p className="mt-2 rounded-lg border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm leading-relaxed text-stone-700">
          <span className="font-semibold text-stone-700">For the record: </span>
          {figure.note}
        </p>
      )}
    </article>
  );
}

function Section({ label, text, story = false }: { label: string; text: string; story?: boolean }) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600">{label}</h4>
      <p className={`mt-1 leading-relaxed text-stone-800 ${story ? 'text-lg' : 'text-[15px]'}`}>{text}</p>
    </div>
  );
}

function ContinentLabels({
  extent,
  hasAmericas,
  onEurope,
  onAmericas,
  onWorld,
}: {
  extent: EraMapExtent;
  hasAmericas: boolean;
  onEurope: () => void;
  onAmericas: () => void;
  onWorld: () => void;
}) {
  const labels = [
    { id: 'europe', label: 'Europe' },
    { id: 'asia', label: 'Asia' },
    { id: 'africa', label: 'Africa' },
    { id: 'americas', label: 'Americas' },
    { id: 'oceania', label: 'Oceania' },
    { id: 'world', label: 'World' },
  ] as const;
  return (
    <div
      role="group"
      aria-label="Map extent"
      className="absolute bottom-7 right-2 z-[450] flex max-w-[calc(100%-1rem)] flex-wrap justify-end gap-1 rounded-xl border border-stone-300 bg-white/95 p-1 text-[11px] font-semibold text-stone-800 shadow-md backdrop-blur sm:bottom-8 sm:text-xs"
    >
      {labels.map((item) => {
        const pressable = item.id === 'europe' || (hasAmericas && (item.id === 'americas' || item.id === 'world'));
        const pressed =
          (item.id === 'europe' && extent === 'auto') ||
          (item.id === 'americas' && extent === 'america') ||
          (item.id === 'world' && extent === 'world');
        if (!pressable) {
          return (
            <span key={item.id} className="inline-flex min-h-9 items-center px-2 text-stone-400">
              {item.label}
            </span>
          );
        }
        return (
          <button
            key={item.id}
            type="button"
            aria-pressed={pressed}
            onClick={() => pickContinent(item.id, onEurope, onAmericas, onWorld)}
            className={`inline-flex min-h-9 items-center gap-1 rounded-lg px-2 ${
              pressed ? 'bg-stone-800 text-white' : 'hover:bg-stone-100'
            }`}
          >
            {item.id === 'world' && <Globe2 size={13} aria-hidden />}
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

function pickContinent(
  id: 'europe' | 'asia' | 'africa' | 'americas' | 'oceania' | 'world',
  onEurope: () => void,
  onAmericas: () => void,
  onWorld: () => void,
) {
  switch (id) {
    case 'europe':
      onEurope();
      return;
    case 'americas':
      onAmericas();
      return;
    case 'world':
      onWorld();
      return;
    case 'asia':
    case 'africa':
    case 'oceania':
      return;
    default: {
      const exhaustive: never = id;
      return exhaustive;
    }
  }
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
