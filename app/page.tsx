'use client';

import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  Map as MapIcon,
  Pause,
  Play,
  Scale,
  Table,
  Users,
} from 'lucide-react';
import EventCard from '@/components/EventCard';
import NumbersPanel from '@/components/NumbersPanel';
import PeoplePanel from '@/components/PeoplePanel';
import SourcesPanel from '@/components/SourcesPanel';
import type { Level } from '@/lib/data';
import { EVENTS } from '@/lib/data';
import { LEVELS, MONTHS, monthKeyOf } from '@/lib/site';

/* Leaflet touches `window` as soon as it loads, so the map is only ever
 * mounted in the browser. */
const MapBrowser = dynamic(() => import('@/components/MapBrowser'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[460px] items-center justify-center rounded-lg border border-stone-300 bg-white text-sm text-stone-500">
      Loading the map…
    </div>
  ),
});

const START = MONTHS.findIndex((m) => m.key === '1939-09');

type Tab = 'map' | 'people' | 'numbers' | 'sources';

const TABS: { id: Tab; label: string; icon: typeof MapIcon }[] = [
  { id: 'map', label: 'Map & timeline', icon: MapIcon },
  { id: 'people', label: 'People', icon: Users },
  { id: 'numbers', label: 'Numbers', icon: Table },
  { id: 'sources', label: 'Sources & how to read', icon: Scale },
];

const SCOPES = [
  { id: 'month', label: 'This month' },
  { id: 'year', label: 'This year' },
  { id: 'war', label: 'Whole war' },
] as const;

type Scope = (typeof SCOPES)[number]['id'];

export default function Home() {
  const [monthIdx, setMonthIdx] = useState(START === -1 ? 0 : START);
  const [level, setLevel] = useState<Level>('secondary');
  const [tab, setTab] = useState<Tab>('map');
  const [scope, setScope] = useState<Scope>('month');
  const [showCampaigns, setShowCampaigns] = useState(true);
  const [showBorders, setShowBorders] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [focusFigure, setFocusFigure] = useState<string | null>(null);
  const [openEvent, setOpenEvent] = useState<string | null>(null);
  const [statYear, setStatYear] = useState(1939);
  const listRef = useRef<HTMLDivElement>(null);

  const month = MONTHS[monthIdx];
  const monthKey = month.key;

  const go = useCallback(
    (delta: number) => {
      setMonthIdx((i) => Math.min(MONTHS.length - 1, Math.max(0, i + delta)));
    },
    []
  );

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      setMonthIdx((i) => {
        if (i >= MONTHS.length - 1) {
          setPlaying(false);
          return i;
        }
        return i + 1;
      });
    }, 1100);
    return () => window.clearInterval(id);
  }, [playing]);

  // Keep the numbers tab in step with the month being read.
  useEffect(() => setStatYear(Number(monthKey.slice(0, 4))), [monthKey]);

  const openEventFrom = useCallback((id: string) => {
    const event = EVENTS.find((e) => e.id === id);
    if (!event) return;
    const idx = MONTHS.findIndex((m) => m.key === monthKeyOf(event.date));
    if (idx >= 0) setMonthIdx(idx);
    setScope('month');
    setTab('map');
    setOpenEvent(id);
    setFocusFigure(null);
    window.requestAnimationFrame(() => {
      document.getElementById(`event-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }, []);

  const visibleEvents = useMemo(() => {
    if (scope === 'war') return EVENTS;
    if (scope === 'year') return EVENTS.filter((e) => e.date.startsWith(monthKey.slice(0, 4)));
    return EVENTS.filter((e) => monthKeyOf(e.date) === monthKey);
  }, [scope, monthKey]);

  const monthCount = useMemo(
    () => EVENTS.filter((e) => monthKeyOf(e.date) === monthKey).length,
    [monthKey]
  );

  // Scroll the list back to the top whenever the month changes.
  useEffect(() => {
    if (scope === 'month') listRef.current?.scrollTo({ top: 0 });
  }, [monthKey, scope]);

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <header className="border-b border-stone-300 bg-stone-900 text-stone-50">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 px-4 py-3">
          <div>
            <h1 className="text-lg font-bold leading-tight sm:text-xl">
              The Second World War in Europe
            </h1>
            <p className="text-xs text-stone-300 sm:text-[13px]">
              Month by month, {MONTHS[0].label} to {MONTHS[MONTHS.length - 1].label} · borders,
              armies, causes and consequences
            </p>
          </div>
          <div
            className="flex items-stretch overflow-hidden rounded-lg border border-stone-600"
            role="group"
            aria-label="Reading level"
          >
            {LEVELS.map((l) => (
              <button
                key={l.id}
                type="button"
                title={l.hint}
                onClick={() => setLevel(l.id)}
                aria-pressed={level === l.id}
                className={`px-3 py-1.5 text-sm font-medium ${
                  level === l.id
                    ? 'bg-stone-50 text-stone-900'
                    : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
                }`}
              >
                {l.short}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Month control */}
      <div className="sticky top-0 z-[500] border-b border-stone-300 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-3 gap-y-2 px-4 py-2">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => go(-1)}
              disabled={monthIdx === 0}
              aria-label="Previous month"
              className="rounded-md border border-stone-300 p-1.5 hover:bg-stone-100 disabled:opacity-40"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? 'Pause' : 'Play through the war'}
              className="rounded-md border border-stone-300 p-1.5 hover:bg-stone-100"
            >
              {playing ? <Pause size={18} /> : <Play size={18} />}
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              disabled={monthIdx === MONTHS.length - 1}
              aria-label="Next month"
              className="rounded-md border border-stone-300 p-1.5 hover:bg-stone-100 disabled:opacity-40"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <p className="min-w-[150px] text-lg font-bold tabular-nums text-stone-900">
            {month.label}
          </p>

          <label className="flex min-w-[220px] flex-1 items-center gap-2">
            <span className="sr-only">Choose month</span>
            <input
              type="range"
              min={0}
              max={MONTHS.length - 1}
              value={monthIdx}
              onChange={(e) => setMonthIdx(Number(e.target.value))}
              className="h-2 w-full cursor-pointer accent-red-800"
            />
          </label>

          <span className="hidden gap-1 text-xs text-stone-500 sm:flex">
            {[1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945].map((y) => (
              <button
                key={y}
                type="button"
                onClick={() =>
                  setMonthIdx(MONTHS.findIndex((m) => m.year === y && (m.month === 1 || m.key === `${y}-01`)))
                }
                className="rounded border border-stone-300 px-1.5 py-0.5 hover:bg-stone-100"
              >
                {y}
              </button>
            ))}
          </span>
        </div>
      </div>

      <nav className="border-b border-stone-300 bg-white">
        <div className="mx-auto flex max-w-[1400px] flex-wrap gap-1 px-4">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              aria-current={tab === id ? 'page' : undefined}
              className={`flex items-center gap-1.5 border-b-2 px-3 py-2 text-sm font-medium ${
                tab === id
                  ? 'border-red-800 text-red-900'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              <Icon size={15} /> {label}
            </button>
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-[1400px] px-4 py-4">
        {tab === 'map' && (
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(340px,1fr)]">
            <section className="flex min-h-[560px] flex-col gap-2 lg:sticky lg:top-[9.5rem] lg:h-[calc(100vh-11rem)]">
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <Toggle
                  on={showBorders}
                  onClick={() => setShowBorders((v) => !v)}
                  label="Territories"
                />
                <Toggle
                  on={showCampaigns}
                  onClick={() => setShowCampaigns((v) => !v)}
                  label="Army movements"
                />
                <span className="ml-auto text-xs text-stone-500">
                  {monthCount} {monthCount === 1 ? 'event' : 'events'} this month · click a country
                  or a line for details
                </span>
              </div>
              <div className="min-h-[460px] flex-1">
                <MapBrowser
                  monthKey={monthKey}
                  showCampaigns={showCampaigns}
                  showBorders={showBorders}
                />
              </div>
            </section>

            <section className="min-w-0">
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-base font-bold text-stone-900">
                  {scope === 'month'
                    ? month.label
                    : scope === 'year'
                      ? `${month.year}`
                      : 'The whole war'}{' '}
                  <span className="font-normal text-stone-500">
                    · {visibleEvents.length} {visibleEvents.length === 1 ? 'event' : 'events'}
                  </span>
                </h2>
                <div className="flex overflow-hidden rounded-md border border-stone-300">
                  {SCOPES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setScope(s.id)}
                      aria-pressed={scope === s.id}
                      className={`px-2.5 py-1 text-xs font-medium ${
                        scope === s.id
                          ? 'bg-stone-800 text-white'
                          : 'bg-white text-stone-600 hover:bg-stone-100'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div
                ref={listRef}
                className="max-h-[calc(100vh-14rem)] space-y-2 overflow-y-auto pr-1 lg:max-h-[calc(100vh-13rem)]"
              >
                {visibleEvents.length === 0 && (
                  <p className="rounded-lg border border-dashed border-stone-300 bg-white p-4 text-sm text-stone-500">
                    Nothing dated to {month.label} in this database. Use the year or whole-war view,
                    or step to a neighbouring month — the armies were usually doing something the
                    month before.
                  </p>
                )}
                {visibleEvents.map((e) => (
                  <div key={e.id} id={`event-${e.id}`} className="scroll-mt-4">
                    <EventCard
                      event={e}
                      level={level}
                      defaultOpen={openEvent === e.id}
                      onOpenFigure={(id) => {
                        setFocusFigure(id);
                        setTab('people');
                      }}
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {tab === 'people' && (
          <PeoplePanel
            level={level}
            focusId={focusFigure}
            onFocus={setFocusFigure}
            onOpenEvent={openEventFrom}
          />
        )}

        {tab === 'numbers' && (
          <NumbersPanel year={statYear} onYearChange={setStatYear} level={level} />
        )}

        {tab === 'sources' && <SourcesPanel />}
      </main>

      <footer className="border-t border-stone-300 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 py-4 text-xs leading-relaxed text-stone-500">
          <p>
            An educational resource on the Second World War in Europe. Text written for three
            reading levels; dates, strengths and casualty figures checked against the published
            sources listed under &ldquo;Sources &amp; how to read&rdquo;, where the figures still
            argued over by historians are set out as ranges.
          </p>
          <p className="mt-1">
            Border geometry: European Borders During World War II (Stanford Spatial History
            Project / ArcGIS feature layer). Territory status and all text: written and checked for
            this site.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Toggle({ on, onClick, label }: { on: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-sm font-medium ${
        on
          ? 'border-stone-800 bg-stone-800 text-white'
          : 'border-stone-300 bg-white text-stone-600 hover:bg-stone-100'
      }`}
    >
      {on ? <Eye size={14} /> : <EyeOff size={14} />} {label}
    </button>
  );
}
