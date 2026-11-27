'use client';

import { Fragment, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  CircleMarker,
  MapContainer,
  Marker,
  Pane,
  Polygon,
  Polyline,
  Popup,
  TileLayer,
  Tooltip,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import L from 'leaflet';
import { ChevronDown, Info, ListTree, Maximize2, Minimize2 } from 'lucide-react';
import type { CampaignLine, Side, TerritoryStatus } from '@/lib/data';
import {
  CAMPAIGN_LINES,
  EVENT_BY_ID,
  EVENTS,
  STATUS_META,
  STATUS_ORDER,
  SNAPSHOT_NOTES,
  WORLD_KEY_NOTES,
  statusFor,
  worldNameFor,
  worldNoteFor,
  worldStatusFor,
} from '@/lib/data';
import { LINKS_BY_LINE } from '@/lib/data/campaign-events';
import RegionToggle from '@/components/RegionToggle';
import { REGION_BY_ID, type Region } from '@/lib/regions';
import { PLACES } from '@/lib/data/places';
import {
  campaignVisible,
  DOMAIN_ORDER,
  LINE_DOMAIN_META,
  lineDashOf,
  lineDomainOf,
  longDate,
  MONTH_INDEX,
  MONTHS,
  monthEndDate,
  monthKeyOf,
  nearestSnapshot,
  SIDE_META,
  type LineDomain,
} from '@/lib/site';

/* The border files are GeoJSON: coordinates are [lng, lat], Leaflet wants [lat, lng]. */
type Ring = number[][];
type LatLng = [number, number];
interface FeatureProps {
  name: string;
  controller: string | null;
  headOfState: string | null;
  govtInExile: string | null;
}
interface Feature {
  type: 'Feature';
  properties: FeatureProps;
  geometry: { type: 'Polygon'; coordinates: Ring[] } | { type: 'MultiPolygon'; coordinates: Ring[][] };
}
interface FeatureCollection {
  type: 'FeatureCollection';
  snapshot: string;
  source?: string;
  features: Feature[];
}

interface WorldFeature {
  type: 'Feature';
  properties: { key: string; name: string };
  geometry: { type: 'MultiPolygon'; coordinates: Ring[][] };
}
interface WorldCollection {
  type: 'FeatureCollection';
  features: WorldFeature[];
}

/**
 * The numbered event pin. The icon is cached by its html on purpose: react-leaflet builds a fresh
 * L.divIcon for <Marker> on every render, and it calls setIcon whenever that object is not the previous
 * one (react-leaflet/lib/Marker.js:12). Leaflet reuses the marker DIV but rewrites its innerHTML
 * (leaflet/src/layer/marker/DivIcon.js:53), which replaces the badge under the finger. When that lands
 * between mousedown and mouseup — leaving a line starts a 220 ms timer that re-renders, and clicking a
 * card and then a pin re-renders on the card's blur — Chrome fires no click at all, and the pin cannot
 * be opened. Identical html returns the identical object, so setIcon runs only when the badge must
 * actually look different. Proven by shot/mypinfix.cjs.
 */
const PIN_ICONS = new Map<string, L.DivIcon>();
function pinIcon(html: string) {
  let icon = PIN_ICONS.get(html);
  if (!icon) {
    if (PIN_ICONS.size > 400) PIN_ICONS.clear();
    PIN_ICONS.set(html, (icon = L.divIcon({ className: '', html, iconSize: [0, 0] })));
  }
  return icon;
}

/** The gold ring is the highlight for the card being hovered or focused. It is written onto the badge
 *  element instead of being baked into the icon html for the same reason: any html change makes Leaflet
 *  replace the badge, and the click that changed focus would always be the click it destroyed. */
const PIN_SHADOW = '0 1px 4px rgba(0,0,0,.45)';
const PIN_SHADOW_STRESSED = `0 0 0 4px #fbbf24, ${PIN_SHADOW}`;
function setPinRing(marker: L.Marker | null, stressed: boolean) {
  const badge = marker?.getElement()?.firstElementChild;
  if (badge instanceof HTMLElement) badge.style.boxShadow = stressed ? PIN_SHADOW_STRESSED : PIN_SHADOW;
}

const toLatLngRings = (rings: Ring[]) =>
  rings.map((ring) => ring.map(([lng, lat]) => [lat, lng] as LatLng));

const toLatLngPolys = (geometry: Feature['geometry']): LatLng[][][] => {
  const polys = geometry.type === 'Polygon' ? [geometry.coordinates] : geometry.coordinates;
  return polys.map(toLatLngRings);
};

/** Degrees apart; plenty accurate for placing an arrow tip on a route. */
function planeDistance(a: LatLng, b: LatLng) {
  const dx = (b[1] - a[1]) * Math.cos((a[0] * Math.PI) / 180);
  const dy = b[0] - a[0];
  return Math.hypot(dx, dy);
}

/**
 * Walk `fraction` of the way along a route. Used to put the tip of an advance
 * where the ground actually was in the month being read, instead of always at
 * the final objective.
 */
function pointAlong(path: LatLng[], fraction: number): LatLng {
  if (path.length === 1 || fraction >= 1) return path[path.length - 1];
  if (fraction <= 0) return path[0];
  const lengths: number[] = [];
  let total = 0;
  for (let i = 1; i < path.length; i++) {
    const d = planeDistance(path[i - 1], path[i]);
    lengths.push(d);
    total += d;
  }
  let target = total * fraction;
  for (let i = 0; i < lengths.length; i++) {
    if (target <= lengths[i]) {
      const t = lengths[i] === 0 ? 0 : target / lengths[i];
      return [
        path[i][0] + (path[i + 1][0] - path[i][0]) * t,
        path[i][1] + (path[i + 1][1] - path[i][1]) * t,
      ];
    }
    target -= lengths[i];
  }
  return path[path.length - 1];
}

/** How far through an operation the end of the selected month is, 0 to 1. */
function progressThrough(line: CampaignLine, monthKey: string) {
  const [y, m] = monthKey.split('-').map(Number);
  const monthEnd = Date.UTC(y, m, 0, 23, 59, 59); // day 0 of next month = last day of this one
  const from = Date.parse(line.from);
  const to = Date.parse(line.to);
  if (!Number.isFinite(from) || !Number.isFinite(to) || to <= from) return 1;
  return Math.min(1, Math.max(0, (monthEnd - from) / (to - from)));
}

const SIDE_ORDER: Side[] = ['german', 'japanese', 'soviet', 'western'];

const ASIA_FRONTS = new Set(['china', 'china_burma_india', 'pacific']);

function defaultRegionFor(monthKey: string): Region {
  const evs = EVENTS.filter((e) => monthKeyOf(e.date) === monthKey);
  const lines = CAMPAIGN_LINES.filter((l) => campaignVisible(l, monthKey));
  if (evs.length === 0 && lines.length === 0) return 'europe';
  const allAsiaEvents = evs.every((e) => e.fronts.every((f) => ASIA_FRONTS.has(f)));
  const allAsiaLines = lines.every((l) => l.path.every(([lat, lng]) => lng > 65 || lat < 15));
  if (!allAsiaEvents || !allAsiaLines) return 'europe';
  const spansPacific = lines.some((l) => l.path.some(([, lng]) => lng > 150 || lng < -100));
  return spansPacific ? 'world' : 'asia';
}

interface Props {
  monthKey: string;
  manualRegion?: Region | null;
  onRegionChange?: (r: Region) => void;
  showCampaigns: boolean;
  showBorders: boolean;
  /** Keep the modern place names legible under the territory fills. */
  detailed: boolean;
  /** Dots for the named places the campaign lines run through. */
  showPlaces: boolean;
  /** Phones: the pinned map is taller when true. */
  tall?: boolean;
  onToggleTall?: () => void;
  /** Lines to emphasise because the reader is pointing at one of their events. */
  highlightLineIds?: string[];
  /** The line under the cursor (or opened by a tap), or null; the page lights up its events. */
  onLineHover?: (id: string | null) => void;
  /** Event pinned on a line, hovered in the list, so its own pin can be stressed. */
  hoverEventId?: string | null;
  onOpenEvent?: (id: string) => void;
}

export default function MapBrowser({
  monthKey,
  manualRegion: controlledRegion,
  onRegionChange,
  showCampaigns,
  showBorders,
  detailed,
  showPlaces,
  tall = false,
  onToggleTall,
  highlightLineIds,
  onLineHover,
  hoverEventId = null,
  onOpenEvent,
}: Props) {
  const { snapshot, gapMonths, isEarlier } = useMemo(
    () => nearestSnapshot(monthKey),
    [monthKey]
  );
  const showEuropeanSnapshot = isEarlier;
  const monthLabel = MONTHS[MONTH_INDEX[monthKey]]?.label ?? monthKey;
  const autoRegion = useMemo(() => defaultRegionFor(monthKey), [monthKey]);
  const [localRegion, setLocalRegion] = useState<Region | null>(null);
  const manualRegion = controlledRegion !== undefined ? controlledRegion : localRegion;
  const setManualRegion = onRegionChange ?? setLocalRegion;
  const region = manualRegion ?? autoRegion;
  const [data, setData] = useState<FeatureCollection | null>(null);
  const [errorInfo, setErrorInfo] = useState<{ file: string; message: string } | null>(null);
  const [showNote, setShowNote] = useState(false);
  const [zoom, setZoom] = useState(4);
  const [world, setWorld] = useState<WorldCollection | null>(null);
  // The key is open on wide screens and tucked behind a button on phones and tablets,
  // where an open key would cover a third of the map.
  const [keyOpen, setKeyOpen] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 1280px)').matches
  );

  useEffect(() => {
    let cancelled = false;
    fetch(snapshot.file)
      .then((r) => {
        if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
        return r.json();
      })
      .then((json: FeatureCollection) => {
        if (!cancelled) setData(json);
      })
      .catch((e: unknown) => {
        if (!cancelled)
          setErrorInfo({ file: snapshot.file, message: e instanceof Error ? e.message : String(e) });
      });
    return () => {
      cancelled = true;
    };
  }, [snapshot.file]);

  /* The world layer is one static file of modern outlines, fetched once; the colours
   * are computed per snapshot below, so switching months only restyles it. */
  useEffect(() => {
    let cancelled = false;
    fetch('/data/world/world.json')
      .then((r) => {
        if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
        return r.json();
      })
      .then((json: WorldCollection) => {
        if (!cancelled) setWorld(json);
      })
      .catch((e: unknown) => {
        console.warn('world layer failed to load', e);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const worldTerritories = useMemo(() => {
    if (!world) return [];
    return world.features.map((f) => ({
      key: f.properties.key,
      name: worldNameFor(f.properties.key, f.properties.name),
      positions: f.geometry.coordinates.map(toLatLngRings),
    }));
  }, [world]);

  /**
   * The world layer has modern outlines and a dated status table of its own, so unlike the
   * border layers it is coloured on the selected month — except for the keys that delegate to
   * the Stanford table, which is dated by snapshot, so those are resolved on the snapshot the
   * month falls back to. Otherwise Norway would be drawn in the occupied colour in July 1937.
   */
  const worldStatuses = useMemo(
    () =>
      new Map(
        worldTerritories.map((t) => [
          t.key,
          worldStatusFor(monthEndDate(monthKey), t.key, snapshot.date),
        ])
      ),
    [worldTerritories, monthKey, snapshot.date]
  );

  /* Converting ~19,000 vertices is the expensive part of a render, so it is
   * done once per fetched geometry file and reused while the reader toggles layers
   * or steps months within the same snapshot. */
  const territoryGeoms = useMemo(() => {
    if (!data) return [];
    return data.features.map((f) => ({
      name: f.properties.name,
      headOfState: f.properties.headOfState,
      govtInExile: f.properties.govtInExile,
      polys: toLatLngPolys(f.geometry),
    }));
  }, [data]);

  const territoryStatuses = useMemo(
    () =>
      new Map<string, TerritoryStatus>(
        territoryGeoms.map((t) => [t.name, statusFor(snapshot.date, t.name)])
      ),
    [territoryGeoms, snapshot.date]
  );

  const lines: CampaignLine[] = useMemo(
    () => (showCampaigns ? CAMPAIGN_LINES.filter((l) => campaignVisible(l, monthKey)) : []),
    [showCampaigns, monthKey]
  );

  /* A line is "active" while the cursor is on it or its popup is open, and also
   * while the reader points at one of its events in the list. The short delay
   * on leaving lets the cursor travel from the line to an event pin without
   * the pin vanishing under it. */
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const [leaving, setLeaving] = useState(false);
  const enterLine = useCallback((id: string) => {
    setLeaving(false);
    setHoverId(id);
  }, []);
  const leaveLine = useCallback(() => {
    setLeaving(true);
  }, []);
  useEffect(() => {
    if (!leaving) return;
    const t = setTimeout(() => {
      setHoverId(null);
      setLeaving(false);
    }, 220);
    return () => clearTimeout(t);
  }, [leaving]);

  /* A line popup is longer than the pinned phone map is tall, which pushed its
   * close button off the top of the screen; capped, it scrolls instead. The top
   * padding keeps the close button clear of the map-size button. */
  const popupMaxHeight = typeof window !== 'undefined' && window.innerWidth < 1024 ? 170 : 340;

  /* An invisible stroke wider than the drawn line, carrying the line's tooltip and popup so a
   * corridor a few pixels long still has a target. Measured 22 Nov: widening it further on phones
   * (30 px with round caps) did NOT make the World extent usable - at 390 px that view draws the
   * Earth 512 px wide, the island corridors are 1-6 px long and no hover produced a tooltip at any
   * weight - while fat strokes two pixels apart start stealing each other's hovers. So the weight
   * stays; `line-hover` is a fixed class so probes and styles can find these paths without matching
   * on stroke-width. */
  const hoverWeight = 18;

  const focusedId = hoverId ?? openId;
  useEffect(() => {
    onLineHover?.(focusedId);
  }, [focusedId, onLineHover]);

  const activeIds = useMemo(() => {
    const ids = new Set<string>(highlightLineIds ?? []);
    if (focusedId) ids.add(focusedId);
    return ids;
  }, [highlightLineIds, focusedId]);

  const presentStatuses = useMemo(() => {
    const worldSet = new Set(worldStatuses.values());
    const europeSet = showEuropeanSnapshot ? new Set(territoryStatuses.values()) : null;
    return STATUS_ORDER.filter((s) => worldSet.has(s) || Boolean(europeSet?.has(s)));
  }, [territoryStatuses, worldStatuses, showEuropeanSnapshot]);

  const presentSides = useMemo(
    () => SIDE_ORDER.filter((s) => lines.some((l) => l.side === s)),
    [lines]
  );

  /* Which elements are on screen: the Key shows a dash row only for a line the
   * reader can actually see, and the sea and air rows are what tell them a dash
   * is a ship's route or a route flown, not an army's axis. The land row is
   * shown only once there is something to contrast it with: until a route at sea
   * or a route flown is on screen it would be a new sentence in the Key that
   * answers no question, and every month's Key would change on the day this
   * ships. Drop the last line of the filter to make it permanent. */
  const keyDomains = useMemo(() => {
    const set = new Set<LineDomain>();
    lines.forEach((l) => set.add(lineDomainOf(l)));
    const present = DOMAIN_ORDER.filter((d) => set.has(d));
    return present.some((d) => d !== 'land') ? present : present.filter((d) => d !== 'land');
  }, [lines]);

  const note = SNAPSHOT_NOTES[snapshot.date];
  const worldNote = worldNoteFor(monthKey, snapshot.date);
  const error = errorInfo?.file === snapshot.file ? errorInfo.message : null;
  const showMarkers = showPlaces && zoom >= 7;

  return (
    <div className="contents lg:flex lg:h-full lg:flex-col lg:gap-2">
      <div className="text-[13px]">
        <div className="flex items-center justify-between gap-2">
          <p className="min-w-0 leading-snug text-stone-800">
            {showEuropeanSnapshot ? (
              <>
                <span className="font-semibold">Borders as of {snapshot.label}</span>
                {gapMonths > 0 && (
                  <span className="text-stone-600">
                    {' '}
                    — {gapMonths} {gapMonths === 1 ? 'month' : 'months'} earlier than {monthLabel}.
                  </span>
                )}
              </>
            ) : (
              <span className="font-semibold">
                No European border state is published for {monthLabel}.
              </span>
            )}
          </p>
          {note && (
            <button
              type="button"
              onClick={() => setShowNote((v) => !v)}
              className="inline-flex h-8 shrink-0 items-center gap-1 rounded-full border border-stone-300 bg-white px-2.5 text-xs font-medium text-stone-700 hover:bg-stone-100"
              aria-expanded={showNote}
            >
              <Info size={14} aria-hidden />
              <span className="hidden sm:inline">What this map does and does not show</span>
              <span className="sm:hidden">About this map</span>
            </button>
          )}
        </div>
        {!showEuropeanSnapshot && (
          <p className="mt-1 text-xs leading-snug text-stone-600">
            Austria was still an independent state; the earliest European snapshot is April 1938, so
            European fills are left off here and fighting appears on the world layer and China line.
          </p>
        )}
        {showNote && note && (
          <div className="mt-2 space-y-2 rounded-lg border border-stone-200 bg-white p-2.5 text-xs leading-relaxed text-stone-700">
            <p>{showEuropeanSnapshot ? note : `Earliest European state (${snapshot.label}, not drawn on ${monthLabel}): ${note}`}</p>
            {worldNote && (
              <p>
                <span className="font-semibold">Outside Europe. </span>
                {worldNote}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="sticky top-[var(--bar-h,5.2rem)] isolate z-30 h-[var(--map-h,50vh)] overflow-hidden rounded-xl border border-stone-300 bg-stone-100 shadow-sm lg:relative lg:top-auto lg:z-auto lg:h-auto lg:min-h-[240px] lg:flex-1">
        <MapContainer
          center={[50.5, 14]}
          zoom={4}
          minZoom={3}
          maxZoom={16}
          zoomSnap={0.5}
          scrollWheelZoom
          maxBounds={[
            [30, -34],
            [74, 68],
          ]}
          maxBoundsViscosity={0.8}
          className="h-full w-full"
        >
          <ZoomReporter onZoom={setZoom} />
          <MapResizer mapLabel={`Map of the Second World War in ${monthLabel}`} />
          <ViewController region={region} />
          {/* CARTO's basemaps began demanding an API key and now serve a watermarked
              "API KEY REQUIRED" tile, and Wikimedia's tileserver answers a public
              deployment's referrer with a 403 HTML page that Chrome then blocks as an
              image. The OpenStreetMap tiles need no key and send permissive CORS and an
              image content type from any referrer, so they are the base layer; the grey
              wash is in globals.css. */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            subdomains="abc"
            noWrap
            bounds={[
              [-85.0511, -180],
              [85.0511, 180],
            ]}
            key={detailed ? 'detailed-basemap' : 'faded-basemap'}
            className={detailed ? 'basemap-tiles basemap-detailed' : 'basemap-tiles'}
          />

          <TerritoryBorders
            showBorders={showBorders}
            showEuropeanSnapshot={showEuropeanSnapshot}
            detailed={detailed}
            worldTerritories={worldTerritories}
            worldStatuses={worldStatuses}
            territoryGeoms={territoryGeoms}
            territoryStatuses={territoryStatuses}
            monthLabel={monthLabel}
            snapshotLabel={snapshot.label}
          />

          {/* Army lines live in their own pane above the territories. The border
              polygons are added after their file loads, so in the shared overlay
              pane they landed on top of the lines and swallowed every hover. */}
          <Pane name="campaigns" style={{ zIndex: 450 }}>
          {lines.map((line) => {
            const side = SIDE_META[line.side];
            const domain = LINE_DOMAIN_META[lineDomainOf(line)];
            const showsProgress = lineDomainOf(line) === 'land';
            const progress = progressThrough(line, monthKey);
            const tip = pointAlong(line.path, progress);
            const active = activeIds.has(line.id);
            const dimmed = activeIds.size > 0 && !active;
            const links = LINKS_BY_LINE[line.id] ?? [];
            const numbered = links
              .filter((l) => EVENT_BY_ID[l.event])
              .sort((a, b) => EVENT_BY_ID[a.event].date.localeCompare(EVENT_BY_ID[b.event].date));
            const numberOf = new Map(numbered.map((l, i) => [l.event, i + 1]));
            const pins = new Map<number, string[]>();
            for (const l of numbered) pins.set(l.at, [...(pins.get(l.at) ?? []), l.event]);
            const lineHandlers = {
              mouseover: () => enterLine(line.id),
              mouseout: leaveLine,
              popupopen: () => setOpenId(line.id),
              popupclose: () => setOpenId((cur) => (cur === line.id ? null : cur)),
            };
            return (
              <Fragment key={line.id}>
                <Polyline
                  positions={line.path}
                  interactive={false}
                  pathOptions={{
                    color: side.color,
                    weight: active ? 6 : 3.5,
                    opacity: dimmed ? 0.3 : 1,
                    dashArray: active ? undefined : lineDashOf(line),
                  }}
                />
                {/* A wide, invisible copy of the line carries the hover and the
                    popup, so a 3.5 px stroke is not a 3.5 px target. */}
                <Polyline
                  positions={line.path}
                  eventHandlers={lineHandlers}
                  pathOptions={{ color: side.color, weight: hoverWeight, opacity: 0,
                    className: 'line-hover', lineCap: 'round' }}
                >
                  <Tooltip sticky>
                    <span className="text-xs font-semibold">{line.name}</span>
                    {numbered.length > 0 && (
                      <span className="mt-1 block w-60 whitespace-normal text-[11px] font-normal leading-snug">
                        {numbered.map((l) => (
                          <span key={l.event} className="block">
                            <span className="font-semibold">{numberOf.get(l.event)}.</span>{' '}
                            {EVENT_BY_ID[l.event].title}
                            <span className="text-stone-600">
                              {' '}
                              · {longDate(EVENT_BY_ID[l.event].date, EVENT_BY_ID[l.event].precision)}
                            </span>
                          </span>
                        ))}
                      </span>
                    )}
                    <span className="mt-0.5 block text-[10px] font-normal text-stone-700">
                      {domain.tooltip}
                    </span>
                  </Tooltip>
                  <Popup className="map-popup" autoPanPaddingTopLeft={[10, 52]} autoPanPaddingBottomRight={[10, 10]}>
                    <div
                      className="space-y-1 overflow-y-auto pb-1 pr-1 pt-1 text-sm [&_p]:!my-0"
                      style={{ maxHeight: popupMaxHeight }}
                    >
                      <p className="text-base font-semibold">{line.name}</p>
                      <p
                        className="text-xs font-medium uppercase tracking-wide"
                        style={{ color: side.color }}
                      >
                        {side.label}
                        {lineDomainOf(line) !== 'land' ? ` · ${domain.label}` : ''}
                        {line.operation ? ` · ${line.operation}` : ''}
                      </p>
                      <p className="text-xs text-stone-600">
                        {line.from} to {line.to}
                      </p>
                      {links.length > 0 && (
                        <div className="pt-1">
                          <p className="text-xs font-semibold">Events on this line</p>
                          <ul className="mt-0.5 space-y-0.5">
                            {links.map((l) => (
                              <li key={l.event}>
                                <button
                                  type="button"
                                  onClick={() => onOpenEvent?.(l.event)}
                                  className="inline-block min-h-6 py-1 text-left text-xs text-sky-800 underline decoration-sky-800/40 underline-offset-2 hover:decoration-sky-800"
                                >
                                  {EVENT_BY_ID[l.event].title}
                                  <span className="text-stone-600">
                                    {' '}
                                    · {longDate(EVENT_BY_ID[l.event].date, EVENT_BY_ID[l.event].precision)}
                                  </span>
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <p className="pt-1">{line.summary}</p>
                      {line.strength && (
                        <p className="pt-1 text-xs">
                          <span className="font-medium">Committed: </span>
                          {line.strength}
                        </p>
                      )}
                      <p className="pt-1 text-xs text-stone-600">{domain.caveat}</p>
                    </div>
                  </Popup>
                </Polyline>
                {/* The ring is a position along the line by date, which is a
                    claim about ground an advance had crossed. A convoy was
                    either at port or on its way, and a route flown is not a
                    front, so no ring is drawn at sea or in the air. */}
                {showsProgress && (
                  <CircleMarker
                    center={tip}
                    radius={5}
                    interactive={false}
                    pathOptions={{
                      color: side.color,
                      fillColor: '#fff',
                      fillOpacity: dimmed ? 0.4 : 1,
                      opacity: dimmed ? 0.4 : 1,
                      weight: 2.5,
                    }}
                  />
                )}
                {active &&
                  [...pins.entries()].map(([at, ids]) => {
                    const stressed = ids.includes(hoverEventId ?? '');
                    const label = ids.map((id) => numberOf.get(id)).join('·');
                    return (
                      <Marker
                        key={`${line.id}-pin-${at}`}
                        position={line.path[at]}
                        zIndexOffset={1000}
                        ref={(m: L.Marker | null) => setPinRing(m, stressed)}
                        icon={pinIcon(
                          `<span style="position:absolute;transform:translate(-50%,-50%);display:grid;place-items:center;min-width:22px;height:22px;padding:0 5px;box-sizing:border-box;border:2.5px solid #1c1917;border-radius:999px;background:${side.color};color:#fff;font:700 11px/1 system-ui,sans-serif;white-space:nowrap;box-shadow:${PIN_SHADOW}">${label}</span>`,
                        )}
                        eventHandlers={{
                          mouseover: () => enterLine(line.id),
                          mouseout: leaveLine,
                          popupopen: () => setOpenId(line.id),
                          popupclose: () => setOpenId((cur) => (cur === line.id ? null : cur)),
                        }}
                      >
                        <Tooltip direction="top" offset={[0, -12]} opacity={1}>
                          {ids.map((id) => (
                            <span key={id} className="block w-48 whitespace-normal text-[11px] leading-snug">
                              <span className="font-semibold">{EVENT_BY_ID[id].title}</span>
                              <span className="text-stone-600">
                                {' '}
                                · {longDate(EVENT_BY_ID[id].date, EVENT_BY_ID[id].precision)}
                              </span>
                            </span>
                          ))}
                        </Tooltip>
                        <Popup className="map-popup">
                          <div className="space-y-1 text-sm">
                            <p className="text-xs font-semibold uppercase tracking-wide text-stone-600">
                              {line.name}
                            </p>
                            {ids.map((id) => (
                              <button
                                key={id}
                                type="button"
                                onClick={() => onOpenEvent?.(id)}
                                className="inline-block min-h-6 py-1 text-left text-sm font-medium text-sky-800 underline decoration-sky-800/40 underline-offset-2 hover:decoration-sky-800"
                              >
                                {EVENT_BY_ID[id].title}
                              </button>
                            ))}
                            <p className="pt-1 text-xs text-stone-600">
                              Open the event card for the full account.
                            </p>
                          </div>
                        </Popup>
                      </Marker>
                    );
                  })}
              </Fragment>
            );
          })}
          </Pane>

          {showMarkers &&
            PLACES.map((place) => (
              <CircleMarker
                key={place.name}
                center={[place.lat, place.lng]}
                radius={detailed ? 3 : 2.5}
                pathOptions={{
                  color: detailed ? '#1c1917' : '#44403c',
                  fillColor: '#fff',
                  fillOpacity: 0.9,
                  weight: 1.5,
                  opacity: detailed ? 0.9 : 0.6,
                }}
              >
                <Tooltip direction="top" offset={[0, -3]} opacity={1}>
                  <span className="text-[11px] font-semibold">{place.name}</span>
                  <span className="mt-0.5 block text-[10px] font-normal text-stone-600">
                    Place marker from campaign waypoint data · not a front line or event pin
                  </span>
                </Tooltip>
              </CircleMarker>
            ))}
        </MapContainer>

        <div className="absolute right-2 top-2 z-[450] flex items-start gap-1.5 lg:hidden">
          <span className="rounded-md border border-stone-300 bg-white/90 px-2 py-1 text-[11px] font-semibold leading-none text-stone-800 shadow-sm backdrop-blur">
            {showEuropeanSnapshot ? `Borders as of ${snapshot.label}` : 'No 1937–early 38 borders'}
          </span>
          {onToggleTall && (
            <button
              type="button"
              onClick={onToggleTall}
              aria-pressed={tall}
              aria-label={tall ? 'Make the map smaller' : 'Make the map taller'}
              className="grid h-9 w-9 place-items-center rounded-full border border-stone-300 bg-white/95 text-stone-800 shadow-md backdrop-blur"
            >
              {tall ? <Minimize2 size={16} aria-hidden /> : <Maximize2 size={16} aria-hidden />}
            </button>
          )}
        </div>

        <RegionToggle region={region} onChange={setManualRegion} />

        {showEuropeanSnapshot && !data && !error && (
          <div className="absolute inset-0 z-[500] flex items-center justify-center bg-stone-100/80 text-sm text-stone-700">
            Loading {snapshot.label} borders…
          </div>
        )}
        {error && (
          <div className="absolute inset-0 z-[500] flex items-center justify-center p-6 text-center text-sm text-red-700">
            The border data for {snapshot.label} could not be loaded ({error}).
          </div>
        )}

        <div className="absolute bottom-6 left-2 z-[450] max-w-[min(86%,20rem)] sm:bottom-7">
          {keyOpen && (
            <div className="mb-1.5 max-h-[calc(var(--map-h,60vh)-4.5rem)] overflow-y-auto lg:max-h-[60vh] rounded-lg border border-stone-300 bg-white/95 p-2.5 text-xs shadow-md backdrop-blur">
              <p className="mb-1.5 font-semibold text-stone-800">
                {showBorders ? 'Who held the territory' : 'Army movements'}
              </p>
              <ul className="space-y-1">
                {showBorders &&
                  presentStatuses.map((s) => (
                    <li key={s} className="flex items-center gap-2 leading-tight">
                      <span
                        className="inline-block h-3 w-4 shrink-0 rounded-sm border"
                        style={{ background: STATUS_META[s].color, borderColor: STATUS_META[s].stroke }}
                      />
                      {STATUS_META[s].label}
                    </li>
                  ))}
                {presentSides.map((side) => (
                  <li key={side} className="flex items-center gap-2 leading-tight">
                    <svg width="16" height="6" aria-hidden className="shrink-0">
                      <line
                        x1="0"
                        y1="3"
                        x2="16"
                        y2="3"
                        stroke={SIDE_META[side].color}
                        strokeWidth="3"
                        strokeDasharray="8 6"
                      />
                    </svg>
                    {SIDE_META[side].label}
                  </li>
                ))}
                {keyDomains.map((domain) => (
                  <li key={domain} className="flex items-center gap-2 leading-tight">
                    <svg width="22" height="6" aria-hidden className="shrink-0">
                      <line
                        x1="0"
                        y1="3"
                        x2="22"
                        y2="3"
                        stroke="#44403c"
                        strokeWidth="3"
                        strokeDasharray={LINE_DOMAIN_META[domain].dash}
                      />
                    </svg>
                    {LINE_DOMAIN_META[domain].keyLabel}
                  </li>
                ))}
                {showCampaigns && lines.length === 0 && (
                  <li className="leading-snug text-stone-600">
                    No major offensive this month — read the events for what was happening.
                  </li>
                )}
                {showPlaces && zoom < 7 && (
                  <li className="leading-snug text-stone-600">
                    Zoom in to 7 or closer for place markers.
                  </li>
                )}
              </ul>
            </div>
          )}
          <button
            type="button"
            onClick={() => setKeyOpen((v) => !v)}
            aria-expanded={keyOpen}
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-stone-300 bg-white/95 px-3 text-xs font-semibold text-stone-800 shadow-md backdrop-blur hover:bg-white"
          >
            <ListTree size={14} aria-hidden /> Key
            <ChevronDown
              size={14}
              aria-hidden
              className={`transition-transform ${keyOpen ? '' : 'rotate-180'}`}
            />
          </button>
        </div>
      </div>

      {/* Always visible, never behind a disclosure: the snapshot caveat is part of the
          map (PACK B 1A). */}
      <p className="text-xs leading-relaxed text-stone-600">
        {showEuropeanSnapshot
          ? `The European colours are one dated state (${snapshot.label}), not the month’s daily front. Frontiers changed on particular days, sometimes several times in a month; the event cards name the changes in between.`
          : `No European border snapshot is drawn for ${monthLabel} because the earliest published state is April 1938, after the Anschluss.`}{' '}
        Outside the European dataset the outlines are today&rsquo;s, coloured for the month you
        select, so a whole country takes the colour of the power that held most of it. Select a
        country or a line for details.
      </p>
    </div>
  );
}

/** The map box changes height (pinned, taller, rotated phone); tell Leaflet. */
function MapResizer({ mapLabel }: { mapLabel: string }) {
  const map = useMap();
  useEffect(() => {
    const el = map.getContainer();
    el.setAttribute('aria-label', mapLabel);
    const ro = new ResizeObserver(() => map.invalidateSize());
    ro.observe(el);
    return () => ro.disconnect();
  }, [map, mapLabel]);
  return null;
}

/** Re-frames the map when the reader switches extent. */
function ViewController({ region }: { region: Region }) {
  const map = useMap();
  const first = useRef(true);
  useEffect(() => {
    const v = REGION_BY_ID[region];
    /* Measured 23 Nov on the deployed site: at 390 px the World fit wants zoom 0.5 (Earth about 362
     * px wide in a 364 px box), but the region floor of 1 clamped it to zoom 1, which draws the
     * Earth 512 px wide — so the Pacific half of the world sat off-frame and the central-Pacific
     * line projected outside the renderer&rsquo;s bounds, coming back as an empty path (`M0 0`) that no
     * tap or hover can reach at any stroke weight. Zooming in does not help either: the corridors
     * are 1-6 px long only because the whole ocean is in frame. So on a narrow screen let the world
     * extent fit itself down to 0 and put the whole Earth in the box; wide screens keep 1, where the
     * fit already lands at 1.83 with the world inside the frame. */
    const narrowScreen = typeof window !== 'undefined' && window.innerWidth < 640;
    const floor = region === 'world' && narrowScreen ? 0.5 : v.minZoom;
    map.setMinZoom(floor);
    map.setMaxBounds(v.bounds);
    if (first.current) {
      first.current = false;
      if (region !== 'europe') {
        if (v.fit) map.fitBounds(v.bounds, { animate: false, padding: [8, 8] });
        else map.setView(v.center, v.zoom, { animate: false });
      }
      return;
    }
    if (v.fit) map.fitBounds(v.bounds, { animate: true, duration: 0.8, padding: [8, 8] });
    else map.flyTo(v.center, v.zoom, { duration: 0.8 });
  }, [region, map]);
  return null;
}

/** Reports zoom changes without touching React state inside an effect. */
function ZoomReporter({ onZoom }: { onZoom: (zoom: number) => void }) {
  const map = useMap();
  useMapEvents({
    zoomend: () => onZoom(map.getZoom()),
  });
  return null;
}

interface WorldTerritoryGeom {
  key: string;
  name: string;
  positions: LatLng[][][];
}

interface TerritoryGeom {
  name: string;
  headOfState: string | null;
  govtInExile: string | null;
  polys: LatLng[][][];
}

/**
 * Territory fills stay isolated from hover/zoom state so moving the cursor across a
 * campaign line never re-reconciles 220+ country polygons, and each MultiPolygon is
 * mounted once per polity rather than once per ring.
 */
const TerritoryBorders = memo(function TerritoryBorders({
  showBorders,
  showEuropeanSnapshot,
  detailed,
  worldTerritories,
  worldStatuses,
  territoryGeoms,
  territoryStatuses,
  monthLabel,
  snapshotLabel,
}: {
  showBorders: boolean;
  showEuropeanSnapshot: boolean;
  detailed: boolean;
  worldTerritories: WorldTerritoryGeom[];
  worldStatuses: Map<string, TerritoryStatus>;
  territoryGeoms: TerritoryGeom[];
  territoryStatuses: Map<string, TerritoryStatus>;
  monthLabel: string;
  snapshotLabel: string;
}) {
  if (!showBorders) return null;
  return (
    <>
      <Pane name="world" style={{ zIndex: 395 }}>
        {worldTerritories.map((t) => {
          const status = worldStatuses.get(t.key) ?? 'unknown';
          const meta = STATUS_META[status];
          const keyNote = WORLD_KEY_NOTES[t.key];
          return (
            <Polygon
              key={t.key}
              positions={t.positions}
              pathOptions={{
                color: meta.stroke,
                weight: 0.8,
                fillColor: meta.color,
                fillOpacity: detailed ? 0.2 : 0.52,
              }}
            >
              <Tooltip sticky direction="center" opacity={1}>
                <span className="text-xs font-semibold">{t.name}</span>
                <span className="block text-[11px] font-normal">{meta.label}</span>
              </Tooltip>
              <Popup className="map-popup">
                <div className="space-y-1 text-sm">
                  <p className="text-base font-semibold">{t.name}</p>
                  <p className="font-medium" style={{ color: meta.stroke }}>
                    {meta.label}
                  </p>
                  {keyNote && <p>{keyNote}</p>}
                  <p className="pt-1 text-xs text-stone-600">
                    Status as recorded for {monthLabel}, for the territory as a whole. The
                    outline is today&rsquo;s, not the frontier of the time.
                  </p>
                </div>
              </Popup>
            </Polygon>
          );
        })}
      </Pane>

      {showEuropeanSnapshot &&
        territoryGeoms.map((t) => {
          const meta = STATUS_META[territoryStatuses.get(t.name) ?? 'unknown'];
          return (
            <Polygon
              key={t.name}
              positions={t.polys}
              pathOptions={{
                color: meta.stroke,
                weight: 1,
                fillColor: meta.color,
                fillOpacity: detailed ? 0.2 : 0.52,
              }}
            >
              {/* Colour is never the only channel: the status is spelled out
                  in this tooltip, in the popup, and in the legend. */}
              <Tooltip sticky direction="center" opacity={1}>
                <span className="text-xs font-semibold">{t.name}</span>
                <span className="block text-[11px] font-normal">{meta.label}</span>
              </Tooltip>
              <Popup className="map-popup">
                <div className="space-y-1 text-sm">
                  <p className="text-base font-semibold">{t.name}</p>
                  <p className="font-medium" style={{ color: meta.stroke }}>
                    {meta.label}
                  </p>
                  {t.headOfState && (
                    <p>
                      <span className="text-stone-600">Head of state / authority: </span>
                      {t.headOfState}
                    </p>
                  )}
                  {t.govtInExile && (
                    <p>
                      <span className="text-stone-600">Government in exile: </span>
                      {t.govtInExile}
                    </p>
                  )}
                  <p className="pt-1 text-xs text-stone-600">
                    Status as recorded for {snapshotLabel}. Land with no colour is outside
                    this border dataset, not empty.
                  </p>
                </div>
              </Popup>
            </Polygon>
          );
        })}
    </>
  );
});
