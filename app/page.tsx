'use client';

import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Layers3,
  Map as MapIcon,
  MapPin,
  Pause,
  Play,
  Scale,
  Swords,
  Table,
  Users,
  type LucideIcon,
} from 'lucide-react';
import EventCard from '@/components/EventCard';
import NumbersPanel from '@/components/NumbersPanel';
import PeoplePanel from '@/components/PeoplePanel';
import SourcesPanel from '@/components/SourcesPanel';
import TurningPointPanel from '@/components/TurningPointPanel';
import type { Level } from '@/lib/data';
import { EVENT_BY_ID, EVENTS } from '@/lib/data';
import { turningPointFor } from '@/lib/data/turning-points';
import { LEVELS, MONTH_INDEX, MONTHS, monthKeyOf } from '@/lib/site';

/* Leaflet touches `window` as soon as it loads, so the map is only ever
 * mounted in the browser. */
const MapBrowser = dynamic(() => import('@/components/MapBrowser'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[320px] items-center justify-center rounded-xl border border-stone-300 bg-white text-sm text-stone-600">
      Loading the map…
    </div>
  ),
});

/* July 1914, so the first thing a reader sees is the month the war began. */
const START = MONTHS.findIndex((m) => m.key === '1914-07');

/* The WW2 sister site's timeline (1938-01 to 1945-08), used only to carry the
 * reader's approximate place in the war across the cross-site switch. */
const WW2_MONTH_KEYS: string[] = Array.from({ length: 92 }, (_, i) => {
  const n = 1938 * 12 + i;
  return `${Math.floor(n / 12)}-${String((n % 12) + 1).padStart(2, '0')}`;
});

type Tab = 'map' | 'people' | 'numbers' | 'sources';

const TABS: { id: Tab; label: string; short: string; icon: LucideIcon }[] = [
  { id: 'map', label: 'Map & timeline', short: 'Map', icon: MapIcon },
  { id: 'people', label: 'People', short: 'People', icon: Users },
  { id: 'numbers', label: 'Numbers', short: 'Numbers', icon: Table },
  { id: 'sources', label: 'Sources & how to read', short: 'Sources', icon: Scale },
];

/* Where each year starts on the slider, for the year marks under it. */
const YEAR_MARKS = Array.from(new Set(MONTHS.map((m) => m.year))).map((year) => ({
  year,
  index: MONTHS.findIndex((m) => m.year === year),
}));

const LAST = MONTHS.length - 1;

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
  const [detailed, setDetailed] = useState(false);
  const [showPlaces, setShowPlaces] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [focusFigure, setFocusFigure] = useState<string | null>(null);
  const [openEvent, setOpenEvent] = useState<string | null>(null);
  // The address bar is the shareable copy of this view; it is read once after
  // mount (window is not available during the static prerender) and then
  // maintained with replaceState, never pushState — autoplay must not fill the
  // browser history with 92 entries.
  const [urlHydrated, setUrlHydrated] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const month = MONTHS[monthIdx];
  const monthKey = month.key;
  const turningPoint = turningPointFor(monthKey);
  const monthYear = Number(monthKey.slice(0, 4));
  const ww2Idx = Math.round((monthIdx / Math.max(1, MONTHS.length - 1)) * (WW2_MONTH_KEYS.length - 1));
  const ww2Href = `https://ww2-european.vercel.app/?month=${WW2_MONTH_KEYS[ww2Idx]}`;

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

  // Read the shareable URL once, after the first paint. The read is deferred
  // out of the effect body so it does not trigger a synchronous cascade of
  // renders during hydration (react-hooks/set-state-in-effect).
  useEffect(() => {
    const id = window.setTimeout(() => {
      const q = new URLSearchParams(window.location.search);
      const m = q.get('m') ?? q.get('month');
      if (m && m in MONTH_INDEX) setMonthIdx(MONTH_INDEX[m]);
      const l = q.get('level');
      if (l === 'primary' || l === 'secondary' || l === 'university') setLevel(l);
      const t = q.get('tab');
      if (t === 'map' || t === 'people' || t === 'numbers' || t === 'sources') setTab(t);
      const ev = q.get('event');
      if (ev && EVENT_BY_ID[ev]) setOpenEvent(ev);
      setUrlHydrated(true);
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  // Write the current view back into the address bar.
  useEffect(() => {
    if (!urlHydrated) return;
    const url = new URL(window.location.href);
    url.searchParams.set('m', monthKey);
    url.searchParams.set('level', level);
    url.searchParams.set('tab', tab);
    if (openEvent && EVENT_BY_ID[openEvent]) url.searchParams.set('event', openEvent);
    else url.searchParams.delete('event');
    window.history.replaceState(null, '', url.toString());
  }, [monthKey, level, tab, openEvent, urlHydrated]);

  // Keyboard: arrows step the months, space plays the timeline on the map tab,
  // escape closes an open card. None of it fires while a control has focus.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (
        el &&
        (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || el.isContentEditable)
      )
        return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      } else if (e.key === ' ' && tab === 'map') {
        e.preventDefault();
        setPlaying((p) => !p);
      } else if (e.key === 'Escape') {
        setOpenEvent(null);
        // EventCard owns its open state; click the card header so the card
        // itself closes, not just the URL entry.
        const card = openEvent ? document.getElementById(`event-${openEvent}`) : null;
        const header = card?.querySelector<HTMLButtonElement>('button[aria-expanded="true"]');
        header?.click();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, tab, openEvent]);

  // A new tab starts at the top; otherwise a long Numbers page would leave the
  // reader halfway down a short People page.
  useEffect(() => {
    if (urlHydrated) window.scrollTo({ top: 0 });
  }, [tab, urlHydrated]);

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

  // Year and whole-war lists are broken up by month so a long list can be scanned.
  const groups = useMemo(() => {
    const out: { key: string; label: string; events: typeof EVENTS }[] = [];
    for (const e of visibleEvents) {
      const key = monthKeyOf(e.date);
      const last = out[out.length - 1];
      if (last && last.key === key) last.events.push(e);
      else out.push({ key, label: MONTHS[MONTH_INDEX[key]]?.label ?? key, events: [e] });
    }
    return out;
  }, [visibleEvents]);

  // Scroll the list back to the top whenever the month changes.
  useEffect(() => {
    if (scope === 'month') listRef.current?.scrollTo({ top: 0 });
  }, [monthKey, scope]);
  return (
    <div className="pb-nav min-h-screen bg-stone-100 text-stone-900">
      <header className="bg-stone-900 text-stone-50">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-5 gap-y-2 px-3 py-2.5 sm:px-4 xl:flex-nowrap xl:py-3">
          <div className="w-full min-w-0 xl:w-auto">
            <h1 className="font-serif text-xl font-semibold leading-tight tracking-tight sm:text-2xl">
              The First World War in Europe
            </h1>
            <div className="mt-0.5 flex items-center justify-between gap-3">
              <p className="text-xs text-stone-400">
                {MONTHS[0].label} – {MONTHS[LAST].label}
                <span className="hidden sm:inline"> · month by month</span>
              </p>
              <WarSwitch href={ww2Href} near={WW2_MONTH_KEYS[ww2Idx]} className="flex xl:hidden" />
            </div>
          </div>

          <TabButtons tab={tab} onChange={setTab} variant="header" />

          <div
            className="flex w-full items-stretch overflow-hidden rounded-lg border border-stone-600 xl:w-auto"
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
                className={`flex-1 px-3 py-2 text-sm font-medium xl:flex-none xl:px-3.5 xl:py-1.5 ${
                  level === l.id
                    ? 'bg-stone-50 text-stone-900'
                    : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
                }`}
              >
                {l.short}
              </button>
            ))}
          </div>

          <WarSwitch href={ww2Href} near={WW2_MONTH_KEYS[ww2Idx]} className="hidden xl:flex" />
        </div>
      </header>

      {tab === 'map' && (
        <div className="sticky top-0 z-[500] border-b border-stone-300 bg-white/95 shadow-sm backdrop-blur">
          <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-3 gap-y-0 px-3 pb-1 pt-2 sm:px-4 lg:flex-nowrap lg:gap-x-4 lg:pb-2">
            <div className="flex flex-1 items-center gap-1.5 lg:flex-none">
              <button
                type="button"
                onClick={() => go(-1)}
                disabled={monthIdx === 0}
                aria-label="Previous month"
                className="grid h-10 w-10 place-items-center rounded-lg border border-stone-300 bg-white hover:bg-stone-100 disabled:opacity-35"
              >
                <ChevronLeft size={20} />
              </button>
              <label className="relative min-w-0 flex-1 lg:w-[190px] lg:flex-none">
                <span className="sr-only">Choose month</span>
                <select
                  aria-label="Choose month"
                  value={monthIdx}
                  onChange={(e) => setMonthIdx(Number(e.target.value))}
                  className="h-10 w-full cursor-pointer appearance-none rounded-lg border border-stone-300 bg-white pl-3 pr-8 text-center font-serif text-lg font-semibold tabular-nums text-stone-900 hover:bg-stone-50"
                >
                  {YEAR_MARKS.map(({ year }) => (
                    <optgroup key={year} label={String(year)}>
                      {MONTHS.filter((m) => m.year === year).map((m) => (
                        <option key={m.key} value={MONTH_INDEX[m.key]}>
                          {m.label}
                        </option>
                      ))}
                    </optgroup>
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
                disabled={monthIdx === LAST}
                aria-label="Next month"
                className="grid h-10 w-10 place-items-center rounded-lg border border-stone-300 bg-white hover:bg-stone-100 disabled:opacity-35"
              >
                <ChevronRight size={20} />
              </button>
              <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? 'Pause' : 'Play through the war'}
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
                max={LAST}
                value={monthIdx}
                aria-label="Month on the timeline"
                aria-valuetext={month.label}
                onChange={(e) => setMonthIdx(Number(e.target.value))}
                style={{ '--fill': `${(monthIdx / LAST) * 100}%` } as React.CSSProperties}
                className="month-slider block w-full"
              />
              <div className="relative mx-[11px] hidden h-7 sm:block">
                {YEAR_MARKS.map(({ year, index }) => (
                  <button
                    key={year}
                    type="button"
                    onClick={() => setMonthIdx(index)}
                    style={{ left: `${(index / LAST) * 100}%` }}
                    className={`absolute top-0 h-7 -translate-x-1/2 rounded px-2 text-xs tabular-nums hover:bg-stone-100 hover:text-stone-900 ${
                      month.year === year ? 'font-bold text-red-900' : 'text-stone-600'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="mx-auto max-w-[1400px] px-3 py-3 sm:px-4 sm:py-4">
        {tab === 'map' && (
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(380px,1fr)]">
            <section
              aria-label="Map"
              className="flex min-w-0 flex-col gap-2 lg:sticky lg:top-[6rem] lg:h-[calc(100vh-14rem)] xl:h-[calc(100vh-10.5rem)] lg:min-h-[480px]"
            >
              <div className="no-scrollbar -mx-3 flex gap-1.5 overflow-x-auto px-3 pb-0.5 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
                <Toggle
                  on={showBorders}
                  onClick={() => setShowBorders((v) => !v)}
                  label="Who was at war"
                  icon={MapIcon}
                />
                <Toggle
                  on={showCampaigns}
                  onClick={() => setShowCampaigns((v) => !v)}
                  label="Fronts and movements"
                  icon={Swords}
                />
                <Toggle
                  on={detailed}
                  onClick={() => setDetailed((v) => !v)}
                  label="Detailed map"
                  icon={Layers3}
                />
                <Toggle
                  on={showPlaces}
                  onClick={() => setShowPlaces((v) => !v)}
                  label="Place markers"
                  icon={MapPin}
                />
              </div>
              <div className="min-h-0 lg:flex-1">
                <MapBrowser
                  monthKey={monthKey}
                  showCampaigns={showCampaigns}
                  showBorders={showBorders}
                  detailed={detailed}
                  showPlaces={showPlaces}
                />
              </div>
            </section>

            <section
              ref={listRef}
              aria-label="Events"
              className="min-w-0 lg:h-[calc(100vh-14rem)] xl:h-[calc(100vh-10.5rem)] lg:min-h-[480px] lg:overflow-y-auto lg:pr-1"
            >
              <div className="mb-3 space-y-2">
                <div className="flex items-end justify-between gap-3">
                  <h2 className="min-w-0 font-serif text-2xl font-semibold leading-none text-stone-900">
                    {scope === 'month'
                      ? month.label
                      : scope === 'year'
                        ? `${month.year}`
                        : 'The whole war'}
                    <span className="ml-2 whitespace-nowrap font-sans text-sm font-normal text-stone-600">
                      {visibleEvents.length} {visibleEvents.length === 1 ? 'event' : 'events'}
                    </span>
                  </h2>
                  <label className="flex items-center gap-1.5 text-xs text-stone-600 xl:hidden">
                    Level
                    <select
                      aria-label="Reading level for event cards"
                      value={level}
                      onChange={(e) => setLevel(e.target.value as Level)}
                      className="h-9 rounded-lg border border-stone-300 bg-white px-2 text-sm font-medium text-stone-800"
                    >
                      {LEVELS.map((l) => (
                        <option key={l.id} value={l.id}>
                          {l.short}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div
                  className="grid grid-cols-3 overflow-hidden rounded-lg border border-stone-300 bg-white"
                  role="group"
                  aria-label="Which events to list"
                >
                  {SCOPES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setScope(s.id)}
                      aria-pressed={scope === s.id}
                      className={`h-9 text-sm font-medium ${
                        scope === s.id
                          ? 'bg-stone-800 text-white'
                          : 'text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {scope === 'month' && turningPoint && (
                <TurningPointPanel tp={turningPoint} level={level} onOpenEvent={openEventFrom} />
              )}

              <div className="space-y-2.5 pb-2">
                {visibleEvents.length === 0 && (
                  <p className="rounded-xl border border-dashed border-stone-300 bg-white p-4 text-sm leading-relaxed text-stone-600">
                    Nothing dated to {month.label} in this database. Use the year or whole-war
                    view, or step to a neighbouring month — a battle that began at the end of one
                    month is usually dated to the day it opened.
                  </p>
                )}
                {groups.map((g) => (
                  <div key={g.key} className="space-y-2.5">
                    {scope !== 'month' && (
                      <h3 className="sticky top-[5.4rem] z-10 -mx-1 bg-stone-100/95 px-1 py-1.5 text-xs font-bold uppercase tracking-wider text-stone-600 backdrop-blur lg:top-0">
                        {g.label}
                      </h3>
                    )}
                    {g.events.map((e) => (
                      <div key={e.id} id={`event-${e.id}`} className="scroll-mt-28">
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
          <NumbersPanel key={monthYear} initialYear={monthYear} level={level} />
        )}

        {tab === 'sources' && <SourcesPanel />}
      </main>

      <footer className="border-t border-stone-300 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 py-4 text-xs leading-relaxed text-stone-600">
          <p>
            An educational resource on the First World War in Europe and the empires drawn into
            it. Text written for three reading levels; dates, strengths and casualty figures checked
            against the published sources listed under &ldquo;Sources &amp; how to read&rdquo;, where
            the figures still argued over by historians are set out as ranges.
          </p>
          <p className="mt-1">
            Border geometry: Jack Kavanagh, &ldquo;Map of Europe, c. 1914&rdquo; (University College
            Dublin, Zenodo, CC BY 4.0), one boundary state for July 1914 drawn for every month. Who
            was at war with whom, the front lines and all text: written and checked for this site.
          </p>
        </div>
      </footer>

      <TabButtons tab={tab} onChange={setTab} variant="bottom" />
    </div>
  );
}

function WarSwitch({ href, near, className }: { href: string; near: string; className: string }) {
  return (
    <div
      className={`shrink-0 items-stretch overflow-hidden rounded-lg border border-stone-600 ${className}`}
      role="group"
      aria-label="War"
    >
      <span
        aria-current="page"
        className="bg-stone-50 px-3 py-1.5 text-sm font-bold text-stone-900 xl:py-1.5"
      >
        WW1
      </span>
      <a
        href={href}
        title={`Open the Second World War site near ${near} — the same point in that war`}
        className="px-3 py-1.5 text-sm font-medium text-stone-300 hover:bg-stone-800 hover:text-white xl:py-1.5"
      >
        WW2
      </a>
    </div>
  );
}

function TabButtons({
  tab,
  onChange,
  variant,
}: {
  tab: Tab;
  onChange: (t: Tab) => void;
  variant: 'header' | 'bottom';
}) {
  if (variant === 'header') {
    return (
      <nav
        className="hidden flex-1 justify-center gap-1 xl:flex"
        role="tablist"
        aria-label="Main sections"
      >
        {TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            onClick={() => onChange(id)}
            className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium ${
              tab === id
                ? 'bg-stone-50 text-stone-900'
                : 'text-stone-300 hover:bg-stone-800 hover:text-white'
            }`}
          >
            <Icon size={16} aria-hidden /> {label}
          </button>
        ))}
      </nav>
    );
  }
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-[600] border-t border-stone-300 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-2px_8px_rgb(0_0_0/0.06)] backdrop-blur xl:hidden"
      role="tablist"
      aria-label="Sections"
    >
      <div className="mx-auto grid max-w-xl grid-cols-4">
        {TABS.map(({ id, short, icon: Icon }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            onClick={() => onChange(id)}
            className={`flex flex-col items-center gap-0.5 border-t-2 pb-2 pt-2 text-xs font-medium ${
              tab === id ? 'border-red-800 text-red-900' : 'border-transparent text-stone-600'
            }`}
          >
            <Icon size={22} aria-hidden strokeWidth={tab === id ? 2.4 : 1.8} />
            {short}
          </button>
        ))}
      </div>
    </nav>
  );
}

function Toggle({
  on,
  onClick,
  label,
  icon: Icon,
}: {
  on: boolean;
  onClick: () => void;
  label: string;
  icon: LucideIcon;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className={`inline-flex h-9 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-3 text-sm font-medium ${
        on
          ? 'border-stone-800 bg-stone-800 text-white'
          : 'border-stone-300 bg-white text-stone-600 hover:bg-stone-100'
      }`}
    >
      <Icon size={15} aria-hidden /> {label}
    </button>
  );
}
