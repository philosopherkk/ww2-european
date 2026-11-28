'use client';

import { Fragment, useEffect, useMemo } from 'react';
import { CircleMarker, MapContainer, Polyline, Popup, TileLayer, useMap } from 'react-leaflet';
import { REGION_BY_ID } from '@/lib/regions';
import type { EraLine, EraLink } from '@/lib/eras/types';

const LINE_COLOR = '#1e3a5f';
const AMERICA_BOUNDS = REGION_BY_ID.america.bounds;
const EUROPE_DEFAULT: [number, number] = [50, 10];

export type EraMapExtent = 'auto' | 'america' | 'world';

interface Placed {
  name: string;
  at: number;
  lat: number;
  lng: number;
  eventId?: string;
}

function placedOn(line: EraLine, links: EraLink[]): Placed[] {
  const out: Placed[] = [];
  line.waypoints.forEach((waypoint, at) => {
    if (typeof waypoint.lat !== 'number' || typeof waypoint.lng !== 'number') return;
    const link = links.find((item) => item.lineId === line.id && item.at === at);
    out.push({
      name: waypoint.name,
      at,
      lat: waypoint.lat,
      lng: waypoint.lng,
      eventId: link?.eventId,
    });
  });
  return out;
}

function Frame({
  extent,
  yearPoints,
  activePoints,
  allPoints,
}: {
  extent: EraMapExtent;
  yearPoints: [number, number][];
  activePoints: [number, number][];
  allPoints: [number, number][];
}) {
  const map = useMap();
  useEffect(() => {
    const frame = () => {
      map.invalidateSize();
      if (extent === 'america') {
        map.fitBounds(AMERICA_BOUNDS, { padding: [12, 12] });
        return;
      }
      if (extent === 'world') {
        if (allPoints.length > 0) map.fitBounds(allPoints, { padding: [28, 28], maxZoom: 4 });
        else map.setView([20, 10], 2);
        return;
      }
      const pts = activePoints.length > 0 ? activePoints : yearPoints;
      if (pts.length === 0) {
        map.setView(EUROPE_DEFAULT, 4);
        return;
      }
      map.fitBounds(pts, { padding: [28, 28], maxZoom: pts.length === 1 ? 6 : 8 });
    };
    frame();
    window.addEventListener('resize', frame);
    return () => window.removeEventListener('resize', frame);
  }, [map, extent, yearPoints, activePoints, allPoints]);
  return null;
}

export default function EraMap({
  lines,
  links,
  activeEventId,
  yearEventIds,
  extent,
  onPickEvent,
}: {
  lines: EraLine[];
  links: EraLink[];
  activeEventId: string | null;
  yearEventIds: string[];
  extent: EraMapExtent;
  onPickEvent: (id: string) => void;
}) {
  const drawn = useMemo(
    () => lines.map((line) => ({ line, points: placedOn(line, links) })),
    [lines, links]
  );
  const allPoints = useMemo<[number, number][]>(
    () => drawn.flatMap((item) => item.points.map((point) => [point.lat, point.lng] as [number, number])),
    [drawn]
  );
  const yearIds = useMemo(() => new Set(yearEventIds), [yearEventIds]);
  const yearPoints = useMemo<[number, number][]>(
    () =>
      drawn.flatMap((item) =>
        item.points
          .filter((point) => point.eventId != null && yearIds.has(point.eventId))
          .map((point) => [point.lat, point.lng] as [number, number])
      ),
    [drawn, yearIds]
  );
  const activePoints = useMemo<[number, number][]>(
    () =>
      activeEventId == null
        ? []
        : drawn.flatMap((item) =>
            item.points
              .filter((point) => point.eventId === activeEventId)
              .map((point) => [point.lat, point.lng] as [number, number])
          ),
    [drawn, activeEventId]
  );
  const center: [number, number] = yearPoints[0] ?? EUROPE_DEFAULT;
  const zoom = yearPoints.length > 0 ? 6 : 4;

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
      className="h-full w-full rounded-xl"
      aria-label="Map of the campaign"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Frame extent={extent} yearPoints={yearPoints} activePoints={activePoints} allPoints={allPoints} />
      {drawn.map(({ line, points }) => {
        const path = points.map((point) => [point.lat, point.lng] as [number, number]);
        return (
          <Fragment key={line.id}>
            {path.length > 1 && (
              <Polyline positions={path} pathOptions={{ color: LINE_COLOR, weight: 4, dashArray: '8 6' }}>
                <Popup>
                  <strong>{line.name}</strong>
                  <p className="mt-1">{line.summary}</p>
                </Popup>
              </Polyline>
            )}
            {points.map((point) => {
              const active = point.eventId != null && point.eventId === activeEventId;
              return (
                <CircleMarker
                  key={`${line.id}-${point.at}`}
                  center={[point.lat, point.lng]}
                  radius={active ? 9 : 6}
                  pathOptions={{
                    color: LINE_COLOR,
                    weight: 2,
                    fillColor: active ? '#fbbf24' : '#ffffff',
                    fillOpacity: 1,
                  }}
                  eventHandlers={{
                    click: () => {
                      if (point.eventId) onPickEvent(point.eventId);
                    },
                  }}
                >
                  <Popup>
                    <strong>{point.name}</strong>
                  </Popup>
                </CircleMarker>
              );
            })}
          </Fragment>
        );
      })}
    </MapContainer>
  );
}
