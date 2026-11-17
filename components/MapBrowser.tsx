'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  CircleMarker,
  MapContainer,
  Polygon,
  Polyline,
  Popup,
  TileLayer,
  Tooltip,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import { ChevronDown, Info, ListTree, Maximize2, Minimize2 } from 'lucide-react';
import type { CampaignLine, Side } from '@/lib/data';
import { CAMPAIGN_LINES, STATUS_META, STATUS_ORDER, SNAPSHOT_NOTES, statusFor } from '@/lib/data';
import { PLACES } from '@/lib/data/places';
import { campaignVisible, nearestSnapshot, SIDE_META, SNAPSHOTS } from '@/lib/site';

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

const SIDE_ORDER: Side[] = ['german', 'soviet', 'western'];

interface Props {
  monthKey: string;
  showCampaigns: boolean;
  showBorders: boolean;
  /** Keep the modern place names legible under the territory fills. */
  detailed: boolean;
  /** Dots for the named places the campaign lines run through. */
  showPlaces: boolean;
  /** Phones: the pinned map is taller when true. */
  tall?: boolean;
  onToggleTall?: () => void;
}

export default function MapBrowser({
  monthKey,
  showCampaigns,
  showBorders,
  detailed,
  showPlaces,
  tall = false,
  onToggleTall,
}: Props) {
  const { snapshot, gapMonths, isEarlier } = useMemo(
    () => nearestSnapshot(monthKey),
    [monthKey]
  );
  const [data, setData] = useState<FeatureCollection | null>(null);
  const [errorInfo, setErrorInfo] = useState<{ file: string; message: string } | null>(null);
  const [showNote, setShowNote] = useState(false);
  const [zoom, setZoom] = useState(4);
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

  /* Converting ~19,000 vertices is the expensive part of a render, so it is
   * done once per snapshot and reused while the reader toggles layers. */
  const territories = useMemo(() => {
    if (!data) return [];
    return data.features.map((f) => ({
      name: f.properties.name,
      status: statusFor(snapshot.date, f.properties.name),
      headOfState: f.properties.headOfState,
      govtInExile: f.properties.govtInExile,
      polys: toLatLngPolys(f.geometry),
    }));
  }, [data, snapshot.date]);

  const lines: CampaignLine[] = useMemo(
    () => (showCampaigns ? CAMPAIGN_LINES.filter((l) => campaignVisible(l, monthKey)) : []),
    [showCampaigns, monthKey]
  );

  const presentStatuses = useMemo(
    () => STATUS_ORDER.filter((s) => territories.some((t) => t.status === s)),
    [territories]
  );

  const presentSides = useMemo(
    () => SIDE_ORDER.filter((s) => lines.some((l) => l.side === s)),
    [lines]
  );

  const note = SNAPSHOT_NOTES[snapshot.date];
  const error = errorInfo?.file === snapshot.file ? errorInfo.message : null;
  const showMarkers = showPlaces && zoom >= 7;

  return (
    <div className="contents lg:flex lg:h-full lg:flex-col lg:gap-2">
      <div className="text-[13px]">
        <div className="flex items-center justify-between gap-2">
          <p className="min-w-0 leading-snug text-stone-800">
            <span className="font-semibold">Borders as of {snapshot.label}</span>
            {gapMonths > 0 && (
              <span className="text-stone-600">
                {' '}
                · {gapMonths} {gapMonths === 1 ? 'month' : 'months'} {isEarlier ? 'before' : 'after'}
                <span className="sr-only"> the month you picked — the dataset records{' '}
                {SNAPSHOTS.length} dated states, and the map always shows the nearest one dated
                on or before your month, or, only for the first three months of 1938, the state
                that follows them. The months in between are described in the events</span>
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
        {showNote && note && (
          <p className="mt-2 rounded-lg border border-stone-200 bg-white p-2.5 text-xs leading-relaxed text-stone-700">
            {note}
          </p>
        )}
      </div>

      <div className="sticky top-[var(--bar-h,5.2rem)] isolate z-30 h-[var(--map-h,50vh)] overflow-hidden rounded-xl border border-stone-300 bg-stone-100 shadow-sm lg:relative lg:top-auto lg:z-auto lg:h-auto lg:min-h-0 lg:flex-1">
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
          <MapResizer />
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
            key={detailed ? 'detailed-basemap' : 'faded-basemap'}
            className={detailed ? 'basemap-tiles basemap-detailed' : 'basemap-tiles'}
          />

          {showBorders &&
            territories.map((t) => {
              const meta = STATUS_META[t.status];
              return t.polys.map((rings, i) => (
                <Polygon
                  key={`${snapshot.date}-${t.name}-${i}`}
                  positions={rings}
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
                  <Popup>
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
                        Status as recorded for {snapshot.label}. Land with no colour is outside
                        this border dataset, not empty.
                      </p>
                    </div>
                  </Popup>
                </Polygon>
              ));
            })}

          {lines.map((line) => {
            const side = SIDE_META[line.side];
            const progress = progressThrough(line, monthKey);
            const tip = pointAlong(line.path, progress);
            return (
              <div key={line.id}>
                <Polyline
                  positions={line.path}
                  pathOptions={{
                    color: side.color,
                    weight: 3.5,
                    opacity: 0.9,
                    dashArray: '8 6',
                  }}
                >
                  <Tooltip sticky>
                    <span className="text-xs font-semibold">{line.name}</span>
                    <span className="mt-0.5 block text-[10px] font-normal text-stone-700">
                      Schematic axis through named places; the ring is an interpolated position by date.
                    </span>
                  </Tooltip>
                  <Popup>
                    <div className="space-y-1 text-sm">
                      <p className="text-base font-semibold">{line.name}</p>
                      <p
                        className="text-xs font-medium uppercase tracking-wide"
                        style={{ color: side.color }}
                      >
                        {side.label}
                        {line.operation ? ` · ${line.operation}` : ''}
                      </p>
                      <p className="text-xs text-stone-600">
                        {line.from} to {line.to}
                      </p>
                      <p className="pt-1">{line.summary}</p>
                      {line.strength && (
                        <p className="pt-1 text-xs">
                          <span className="font-medium">Committed: </span>
                          {line.strength}
                        </p>
                      )}
                      <p className="pt-1 text-xs text-stone-600">
                        This is a schematic axis of advance through named places, not a surveyed daily
                        front line. The ring marks an interpolated position along that axis by date,
                        not a documented map reference for that morning.
                      </p>
                    </div>
                  </Popup>
                </Polyline>
                <CircleMarker
                  center={tip}
                  radius={5}
                  pathOptions={{ color: side.color, fillColor: '#fff', fillOpacity: 1, weight: 2.5 }}
                >
                  <Tooltip direction="top" opacity={1}>
                    <span className="text-[11px]">
                      {line.name}: approximate position by the end of this month
                    </span>
                  </Tooltip>
                </CircleMarker>
              </div>
            );
          })}

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
            Borders as of {snapshot.label}
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

        {!data && !error && (
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
                        strokeDasharray="5 3"
                      />
                    </svg>
                    {SIDE_META[side].label}
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
        The colours are one dated state ({snapshot.label}), not the month&rsquo;s daily front.
        Frontiers changed on particular days, sometimes several times in a month; the event cards
        name the changes in between. Select a country or a line for details.
      </p>
    </div>
  );
}

/** The map box changes height (pinned, taller, rotated phone); tell Leaflet. */
function MapResizer() {
  const map = useMap();
  useEffect(() => {
    const el = map.getContainer();
    const ro = new ResizeObserver(() => map.invalidateSize());
    ro.observe(el);
    return () => ro.disconnect();
  }, [map]);
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
