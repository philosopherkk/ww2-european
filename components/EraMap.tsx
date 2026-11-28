'use client';

import { Fragment, useEffect, useMemo } from 'react';
import { CircleMarker, MapContainer, Polyline, Popup, TileLayer, useMap } from 'react-leaflet';
import type { EraLine, EraLink } from '@/lib/eras/types';

const LINE_COLOR = '#1e3a5f';

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

function FitToPoints({ points }: { points: [number, number][] }) {
  const map = useMap();
  useEffect(() => {
    if (points.length === 0) return;
    const fit = () => {
      map.invalidateSize();
      map.fitBounds(points, { padding: [28, 28] });
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [map, points]);
  return null;
}

export default function EraMap({
  lines,
  links,
  activeEventId,
  onPickEvent,
}: {
  lines: EraLine[];
  links: EraLink[];
  activeEventId: string | null;
  onPickEvent: (id: string) => void;
}) {
  const drawn = useMemo(
    () => lines.map((line) => ({ line, points: placedOn(line, links) })),
    [lines, links]
  );
  const positions = useMemo<[number, number][]>(
    () => drawn.flatMap((item) => item.points.map((point) => [point.lat, point.lng] as [number, number])),
    [drawn]
  );
  const center: [number, number] = positions[0] ?? [50, 10];
  const zoom = positions.length > 0 ? 8 : 4;

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
      <FitToPoints points={positions} />
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
