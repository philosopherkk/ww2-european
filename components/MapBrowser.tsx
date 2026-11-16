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
} from 'react-leaflet';
import { Info } from 'lucide-react';
import type { CampaignLine, Side, TerritoryStatus } from '@/lib/data';
import { CAMPAIGN_LINES, GEOMETRY_NOTE, STATUS_META, STATUS_ORDER, SNAPSHOT_NOTES, statusFor } from '@/lib/data';
import {
  campaignVisible,
  LINE_KIND_META,
  lineKindOf,
  lineShowsProgress,
  nearestSnapshot,
  type LineKind,
  SIDE_META,
} from '@/lib/site';

/* The border files are GeoJSON: coordinates are [lng, lat], Leaflet wants [lat, lng]. */
type Ring = number[][];
type LatLng = [number, number];
interface FeatureProps {
  name: string;
  iso3: string;
  snapshot: string;
  source: string;
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

const DAY = 86_400_000;

/** How far through an operation the end of the selected month is, 0 to 1. */
function progressThrough(line: CampaignLine, monthKey: string) {
  const [y, m] = monthKey.split('-').map(Number);
  const monthEnd = Date.UTC(y, m, 0, 23, 59, 59); // day 0 of next month = last day of this one
  const from = Date.parse(line.from);
  const to = Date.parse(line.to);
  if (!Number.isFinite(from) || !Number.isFinite(to) || to <= from) return 1;
  return Math.min(1, Math.max(0, (monthEnd - from) / (to - from)));
}

const SIDE_ORDER: Side[] = ['central', 'entente', 'russia'];

interface Props {
  monthKey: string;
  showCampaigns: boolean;
  showBorders: boolean;
}

export default function MapBrowser({ monthKey, showCampaigns, showBorders }: Props) {
  const { snapshot } = useMemo(() => nearestSnapshot(monthKey), [monthKey]);
  const [data, setData] = useState<FeatureCollection | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showNote, setShowNote] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setError(null);
    fetch(snapshot.file)
      .then((r) => {
        if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
        return r.json();
      })
      .then((json: FeatureCollection) => {
        if (!cancelled) setData(json);
      })
      .catch((e: unknown) => {
        if (!cancelled) setError(e instanceof Error ? e.message : String(e));
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

  /* One legend entry per side and per kind of line actually on the map this
     * month: a side that both holds a front and attacks somewhere needs both
     * keys, or the reader cannot tell the solid line from the dashed one. */
  const legendLines = useMemo(() => {
    const present = new Set<string>();
    for (const l of lines) present.add(`${l.side}|${lineKindOf(l)}`);
    const kinds: LineKind[] = ['front', 'advance'];
    return SIDE_ORDER.flatMap((side) =>
      kinds.filter((kind) => present.has(`${side}|${kind}`)).map((kind) => ({ side, kind }))
    );
  }, [lines]);

  // The shapes never move in this dataset, so the geometry caveat is stated for
  // every month; the month's own note is appended when there is one.
  const monthNote = SNAPSHOT_NOTES[snapshot.date];
  const note = monthNote ? `${GEOMETRY_NOTE} ${monthNote}` : GEOMETRY_NOTE;

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm shadow-sm">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <p className="font-semibold text-stone-800">
            Europe at the end of {snapshot.label}
            <span className="ml-2 font-normal text-stone-500">
              (as at the last day of the month, so the colours and the events for
              {` ${snapshot.label}`} describe the same moment)
            </span>
          </p>
          {note && (
            <button
              type="button"
              onClick={() => setShowNote((v) => !v)}
              className="inline-flex items-center gap-1 rounded border border-stone-300 px-2 py-0.5 text-xs font-medium text-stone-700 hover:bg-stone-100"
              aria-expanded={showNote}
            >
              <Info size={13} /> What this map does and does not show
            </button>
          )}
        </div>
        {showNote && note && (
          <p className="mt-2 border-t border-stone-200 pt-2 text-xs leading-relaxed text-stone-600">
            {note}
          </p>
        )}
      </div>

      <div className="relative min-h-[420px] flex-1 overflow-hidden rounded-lg border border-stone-300 bg-stone-100 shadow-sm">
        <MapContainer
          center={[50.5, 14]}
          zoom={4}
          minZoom={3}
          maxZoom={8}
          scrollWheelZoom={false}
          maxBounds={[
            [28, -16],
            [70, 50],
          ]}
          maxBoundsViscosity={0.8}
          className="h-full w-full"
        >
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
            className="basemap-tiles"
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
                    fillOpacity: 0.66,
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
                      <p className="pt-1 text-xs text-stone-500">
                        Frontier of July 1914, status as recorded for {snapshot.label}. Land with
                        no colour is outside this border dataset, not empty.
                      </p>
                    </div>
                  </Popup>
                </Polygon>
              ));
            })}

          {lines.map((line) => {
            const side = SIDE_META[line.side];
            const kind = LINE_KIND_META[lineKindOf(line)];
            const showsProgress = lineShowsProgress(line);
            const tip = pointAlong(line.path, progressThrough(line, monthKey));
            return (
              <div key={line.id}>
                <Polyline
                  positions={line.path}
                  pathOptions={{
                    color: side.color,
                    weight: kind.weight,
                    opacity: 0.9,
                    dashArray: kind.dash,
                  }}
                >
                  <Tooltip sticky>
                    <span className="text-xs font-semibold">{line.name}</span>
                  </Tooltip>
                  <Popup>
                    <div className="space-y-1 text-sm">
                      <p className="text-base font-semibold">{line.name}</p>
                      <p
                        className="text-xs font-medium uppercase tracking-wide"
                        style={{ color: side.color }}
                      >
                        {side.label} · {kind.label}
                        {line.operation ? ` · ${line.operation}` : ''}
                      </p>
                      <p className="text-xs text-stone-500">
                        {line.from} to {line.to}
                      </p>
                      <p className="pt-1">{line.summary}</p>
                      {line.strength && (
                        <p className="pt-1 text-xs">
                          <span className="font-medium">Committed: </span>
                          {line.strength}
                        </p>
                      )}
                      <p className="pt-1 text-xs text-stone-500">{kind.explanation}</p>
                    </div>
                  </Popup>
                </Polyline>
                {showsProgress && (
                  <CircleMarker
                    center={tip}
                    radius={5}
                    pathOptions={{
                      color: side.color,
                      fillColor: '#fff',
                      fillOpacity: 1,
                      weight: 2.5,
                    }}
                  >
                    <Tooltip direction="top" opacity={1}>
                      <span className="text-[11px]">
                        {line.name}: approximate position by the end of this month
                      </span>
                    </Tooltip>
                  </CircleMarker>
                )}
              </div>
            );
          })}
        </MapContainer>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[400]">
          <div className="m-2 rounded-md border border-stone-300 bg-white/95 p-2 text-xs shadow">
            <p className="mb-1 font-semibold text-stone-700">
              {showBorders ? 'Who was at war, and where the lines were' : 'Fronts and movements'}
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {presentStatuses.map((s) => (
                <li key={s} className="flex items-center gap-1.5">
                  <span
                    className="inline-block h-3 w-3 rounded-sm border"
                    style={{ background: STATUS_META[s].color, borderColor: STATUS_META[s].stroke }}
                  />
                  {STATUS_META[s].label}
                </li>
              ))}
              {legendLines.map(({ side, kind }) => (
                <li key={`${side}-${kind}`} className="flex items-center gap-1.5">
                  <svg width="22" height="6" aria-hidden>
                    <line
                      x1="0"
                      y1="3"
                      x2="22"
                      y2="3"
                      stroke={SIDE_META[side].color}
                      strokeWidth="3"
                      strokeDasharray={LINE_KIND_META[kind].dash}
                    />
                  </svg>
                  {SIDE_META[side].label} · {LINE_KIND_META[kind].label}
                </li>
              ))}
              {lines.length === 0 && (
                <li className="text-stone-500">
                  No front or offensive is drawn for this month — read the events for what was
                  happening instead.
                </li>
              )}
            </ul>
          </div>
        </div>

        {!data && !error && (
          <div className="absolute inset-0 z-[500] flex items-center justify-center bg-stone-100/80 text-sm text-stone-600">
            Loading {snapshot.label} borders…
          </div>
        )}
        {error && (
          <div className="absolute inset-0 z-[500] flex items-center justify-center p-6 text-center text-sm text-red-700">
            The border data for {snapshot.label} could not be loaded ({error}).
          </div>
        )}
      </div>
    </div>
  );
}
