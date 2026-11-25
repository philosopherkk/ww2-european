'use client';

import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  GraduationCap,
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
import { CAMPAIGN_LINES, EVENT_BY_ID, EVENTS } from '@/lib/data';
import { LINKS_BY_EVENT, LINKS_BY_LINE } from '@/lib/data/campaign-events';
import { turningPointFor } from '@/lib/data/turning-points';
import {
  campaignVisible,
  LEVELS,
  longDate,
  MONTH_INDEX,
  MONTHS,
  monthKeyOf,
  SIDE_META,
  WW1_MONTH_KEYS,
} from '@/lib/site';

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

const START = MONTHS.findIndex((m) => m.key === '1939-09');

const WW1_BASE = process.env.NEXT_PUBLIC_WW1_URL ?? 'https://ww1-european.vercel.app';

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
  // Army-movement line under the cursor on the map, and the event card under
  // the cursor in the list: each lights up what the other is linked to.
  const [hoverLine, setHoverLine] = useState<string | null>(null);
  const [hoverEvent, setHoverEvent] = useState<string | null>(null);
  // The address bar is the shareable copy of this view; it is read once after
  // mount (window is not available during the static prerender) and then
  // maintained with replaceState, never pushState — autoplay must not fill the
  // browser history with 92 entries.
  const [urlHydrated, setUrlHydrated] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  // On phones the map is pinned under the month bar while the events scroll
  // beneath it; the reader can make it taller to look at it properly.
  const [mapTall, setMapTall] = useState(false);
  const [barH, setBarH] = useState(82);
  const barRef = useRef<HTMLDivElement>(null);

  const month = MONTHS[monthIdx];
  const monthKey = month.key;
  const turningPoint = turningPointFor(monthKey);
  const monthYear = Number(monthKey.slice(0, 4));
  const ww1Idx = Math.round((monthIdx / Math.max(1, MONTHS.length - 1)) * (WW1_MONTH_KEYS.length - 1));
  const ww1Href = `${WW1_BASE}/?m=${WW1_MONTH_KEYS[ww1Idx]}`;

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
      const m = q.get('month');
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
    url.searchParams.set('month', monthKey);
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

  const linkedEventIds = useMemo(
    () => new Set((hoverLine ? LINKS_BY_LINE[hoverLine] ?? [] : []).map((l) => l.event)),
    [hoverLine]
  );
  const highlightLineIds = useMemo(
    () => (hoverEvent ? (LINKS_BY_EVENT[hoverEvent] ?? []).map((l) => l.line) : []),
    [hoverEvent]
  );

  /* The month's own lines, in the order the map draws them, listed so the reader never has to hit
   * the stroke to read one. Measured on production 23 Nov: at the World extent a line is a 1-6
   * pixel corridor, and of 32 taps on the drawn strokes only 2 opened the popup of the line under
   * the finger. Lines with dated events on them lead, because those are the ones being chased. */
  const linesForMonth = useMemo(() => {
    const present = CAMPAIGN_LINES.filter((l) => campaignVisible(l, monthKey));
    return [
      ...present.filter((l) => (LINKS_BY_LINE[l.id] ?? []).length > 0),
      ...present.filter((l) => (LINKS_BY_LINE[l.id] ?? []).length === 0),
    ];
  }, [monthKey]);
  const [allLinesOpenMonth, setAllLinesOpenMonth] = useState<string | null>(null);
  const allLinesOpen = allLinesOpenMonth === monthKey;

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

  // The month bar is taller where the year marks show, so the pinned map
  // measures it instead of guessing.
  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setBarH(Math.round(el.getBoundingClientRect().height)));
    ro.observe(el);
    return () => ro.disconnect();
  }, [tab]);

  // Scroll the list back to the top whenever the month changes.
  useEffect(() => {
    if (scope === 'month') listRef.current?.scrollTo({ top: 0 });
  }, [monthKey, scope]);
  return (
    <div
      className="pb-nav min-h-screen bg-stone-100 text-stone-900"
      style={{ '--bar-h': `${barH}px` } as React.CSSProperties}
    >
      <header className="bg-stone-900 text-stone-50">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-5 gap-y-2 px-3 py-2.5 sm:px-4 xl:flex-nowrap xl:py-3">
          <div className="w-full min-w-0 xl:w-auto">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone-500">
              Worldwarpedia
            </div>
            <h1 className="font-serif text-xl font-semibold leading-tight tracking-tight sm:text-2xl">
              The Second World War
            </h1>
            <div className="mt-0.5 flex items-center justify-between gap-3">
              <p className="text-xs text-stone-400">
                {MONTHS[0].label} – {MONTHS[LAST].label}
                <span className="hidden sm:inline"> · month by month</span>
              </p>
              <WarSwitch href={ww1Href} near={WW1_MONTH_KEYS[ww1Idx]} className="flex xl:hidden" />
            </div>
          </div>

          <TabButtons tab={tab} onChange={setTab} variant="header" />

          <div
            className="hidden items-stretch overflow-hidden rounded-lg border border-stone-600 xl:flex"
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

          <WarSwitch href={ww1Href} near={WW1_MONTH_KEYS[ww1Idx]} className="hidden xl:flex" />
        </div>
      </header>

      {tab === 'map' && (
        <div
          ref={barRef}
          className="sticky top-0 z-[500] border-b border-stone-300 bg-white/95 shadow-sm backdrop-blur"
        >
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
          <div
            className="flex flex-col gap-2 lg:grid lg:grid-cols-[minmax(0,1.4fr)_minmax(380px,1fr)] lg:gap-4"
            style={
              {
                '--map-h': mapTall ? 'clamp(300px, 62dvh, 560px)' : 'clamp(210px, 34dvh, 340px)',
              } as React.CSSProperties
            }
          >
            <section
              aria-label="Map"
              className="contents min-w-0 lg:flex lg:flex-col lg:gap-2 lg:sticky lg:top-[6rem] lg:h-[calc(100vh-14rem)] xl:h-[calc(100vh-10.5rem)] lg:min-h-[480px]"
            >
              <div className="flex flex-wrap gap-1.5 pb-0.5">
                <Toggle
                  on={showBorders}
                  onClick={() => setShowBorders((v) => !v)}
                  label="Territories"
                  icon={MapIcon}
                />
                <Toggle
                  on={showCampaigns}
                  onClick={() => setShowCampaigns((v) => !v)}
                  label="Army movements"
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
              <div className="contents lg:block lg:min-h-0 lg:flex-1">
                <MapBrowser
                  monthKey={monthKey}
                  showCampaigns={showCampaigns}
                  showBorders={showBorders}
                  detailed={detailed}
                  showPlaces={showPlaces}
                  tall={mapTall}
                  onToggleTall={() => setMapTall((v) => !v)}
                  highlightLineIds={highlightLineIds}
                  onLineHover={setHoverLine}
                  hoverEventId={hoverEvent}
                  onOpenEvent={openEventFrom}
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

              {scope === 'month' && linesForMonth.length > 0 && (
                <section className="rounded-xl border border-stone-300 bg-white p-3">
                  <button
                    type="button"
                    onClick={() => setAllLinesOpenMonth((m) => (m === monthKey ? null : monthKey))}
                    aria-expanded={allLinesOpen}
                    className="flex w-full items-center justify-between gap-2 text-left"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
                      Lines in {month.label} ({linesForMonth.length})
                    </span>
                    <ChevronDown
                      size={14}
                      aria-hidden
                      className={`shrink-0 text-stone-500 transition-transform ${allLinesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <p className="text-xs leading-relaxed text-stone-600">
                    A line is an arrow only a few pixels wide at world scale, and the arrows crowd
                    where the fronts overlap, so tapping one often opens a neighbour’s popup. These
                    are the lines the map draws this month with their side and dates; open one on
                    the map for its full account, or use the links below each to its events.
                  </p>
                  <ul className="space-y-2 pt-2">
                    {(allLinesOpen ? linesForMonth : linesForMonth.slice(0, 6)).map((l) => {
                      const side = SIDE_META[l.side];
                      const evs = LINKS_BY_LINE[l.id] ?? [];
                      return (
                        <li
                          key={l.id}
                          className="border-l-2 pl-2 text-sm leading-snug"
                          style={{ borderColor: side.color }}
                        >
                          <p className="font-semibold">{l.name}</p>
                          <p className="text-xs text-stone-600">
                            {side.label}
                            {l.operation ? ` · ${l.operation}` : ''} · {longDate(l.from, 'day')} to{' '}
                            {longDate(l.to, 'day')}
                          </p>
                          {evs.length > 0 && (
                            <ul className="space-y-0.5 pt-1">
                              {evs.map((link) => {
                                const ev = EVENT_BY_ID[link.event];
                                if (!ev) return null;
                                return (
                                  <li key={link.event}>
                                    <button
                                      type="button"
                                      onClick={() => openEventFrom(ev.id)}
                                      className="text-left text-xs text-sky-800 underline decoration-sky-800/40 underline-offset-2 hover:decoration-sky-800"
                                    >
                                      {ev.title}
                                      <span className="text-stone-600">
                                        {' '}
                                        · {longDate(ev.date, ev.precision)}
                                      </span>
                                    </button>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                  {!allLinesOpen && linesForMonth.length > 6 && (
                    <button
                      type="button"
                      onClick={() => setAllLinesOpenMonth(monthKey)}
                      className="pt-2 text-xs font-semibold text-sky-800 underline decoration-sky-800/40 underline-offset-2"
                    >
                      Show all {linesForMonth.length} lines
                    </button>
                  )}
                </section>
              )}

              <div className="space-y-2.5 pb-2">
                {visibleEvents.length === 0 && (
                  <p className="rounded-xl border border-dashed border-stone-300 bg-white p-4 text-sm leading-relaxed text-stone-600">
                    Nothing dated to {month.label} in this database. Use the year or whole-war view,
                    or step to a neighbouring month — the armies were usually doing something the
                    month before.
                  </p>
                )}
                {groups.map((g) => (
                  <div key={g.key} className="space-y-2.5">
                    {scope !== 'month' && (
                      <h3 className="sticky top-[calc(var(--bar-h)+var(--map-h))] z-10 -mx-1 bg-stone-100/95 px-1 py-1.5 text-xs font-bold uppercase tracking-wider text-stone-600 backdrop-blur lg:top-0">
                        {g.label}
                      </h3>
                    )}
                    {g.events.map((e) => (
                      <div
                        key={e.id}
                        id={`event-${e.id}`}
                        className="scroll-mt-[calc(var(--bar-h)+var(--map-h)+0.5rem)] lg:scroll-mt-28"
                        onMouseEnter={() => setHoverEvent(e.id)}
                        onMouseLeave={() => setHoverEvent(null)}
                        onFocus={() => setHoverEvent(e.id)}
                        onBlur={() => setHoverEvent(null)}
                      >
                        <EventCard
                          event={e}
                          level={level}
                          linked={linkedEventIds.has(e.id)}
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
        <div className="mx-auto max-w-[1400px] px-4 py-5 text-xs leading-relaxed text-stone-600">
          <p>
            An educational resource on the Second World War: the European theatre, and the wider
            war from China and Burma to the Pacific. Text written for three
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

      <TabButtons tab={tab} onChange={setTab} variant="bottom" level={level} onLevel={setLevel} />
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
      <a
        href={href}
        title={`Open the First World War site near ${near} — the same point in that war`}
        className="px-3 py-1.5 text-sm font-medium text-stone-300 hover:bg-stone-800 hover:text-white xl:py-1.5"
      >
        WW1
      </a>
      <span
        aria-current="page"
        className="bg-stone-50 px-3 py-1.5 text-sm font-bold text-stone-900 xl:py-1.5"
      >
        WW2
      </span>
    </div>
  );
}

function TabButtons({
  tab,
  onChange,
  variant,
  level,
  onLevel,
}: {
  tab: Tab;
  onChange: (t: Tab) => void;
  variant: 'header' | 'bottom';
  level?: Level;
  onLevel?: (l: Level) => void;
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
      <div className="mx-auto grid max-w-xl grid-cols-5">
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
        {level && onLevel && <LevelPicker level={level} onLevel={onLevel} />}
      </div>
    </nav>
  );
}

/* The reading level lives in the bottom bar on phones so it costs no space at
 * the top; the three choices open in a small panel above the bar. */
function LevelPicker({ level, onLevel }: { level: Level; onLevel: (l: Level) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  const current = LEVELS.find((l) => l.id === level) ?? LEVELS[1];
  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`Reading level: ${current.label}. Change`}
        className={`flex w-full flex-col items-center gap-0.5 border-t-2 pb-2 pt-2 text-xs font-medium ${
          open ? 'border-stone-900 text-stone-900' : 'border-transparent text-stone-600'
        }`}
      >
        <GraduationCap size={22} aria-hidden strokeWidth={open ? 2.4 : 1.8} />
        {current.short}
      </button>
      {open && (
        <div
          role="group"
          aria-label="Reading level"
          className="absolute bottom-full right-2 mb-2 w-[min(18rem,calc(100vw-1.5rem))] rounded-xl border border-stone-300 bg-white p-1.5 shadow-lg"
        >
          {LEVELS.map((l) => (
            <button
              key={l.id}
              type="button"
              aria-pressed={level === l.id}
              onClick={() => {
                onLevel(l.id);
                setOpen(false);
              }}
              className={`block w-full rounded-lg px-3 py-2.5 text-left ${
                level === l.id ? 'bg-stone-900 text-white' : 'text-stone-800 hover:bg-stone-100'
              }`}
            >
              <span className="block text-sm font-semibold">{l.label}</span>
              <span className={`block text-xs ${level === l.id ? 'text-stone-300' : 'text-stone-600'}`}>
                {l.hint}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
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
      className={`inline-flex h-11 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-3 text-sm font-medium sm:h-9 ${
        on
          ? 'border-stone-800 bg-stone-800 text-white'
          : 'border-stone-300 bg-white text-stone-600 hover:bg-stone-100'
      }`}
    >
      <Icon size={15} aria-hidden /> {label}
    </button>
  );
}
