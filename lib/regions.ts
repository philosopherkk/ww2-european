/** Map extents shared by the WW2 and WW1 browsers. Coordinates are [lat, lng]. */
export type Region = 'europe' | 'asia' | 'america' | 'africa' | 'world';

export interface RegionView {
  id: Region;
  label: string;
  short: string;
  center: [number, number];
  zoom: number;
  minZoom: number;
  bounds: [[number, number], [number, number]];
  /** Fit the whole box (small screens need it) instead of flying to a fixed zoom. */
  fit: boolean;
}

export const REGIONS: RegionView[] = [
  {
    id: 'europe',
    label: 'Europe',
    short: 'EU',
    center: [50.5, 14],
    zoom: 4,
    minZoom: 3,
    bounds: [
      [30, -34],
      [74, 68],
    ],
    fit: false,
  },
  {
    id: 'asia',
    label: 'Asia',
    short: 'AS',
    center: [32, 105],
    zoom: 3,
    minZoom: 2,
    bounds: [
      [-12, 35],
      [62, 180],
    ],
    fit: true,
  },
  {
    id: 'america',
    label: 'America',
    short: 'AM',
    center: [8, -80],
    zoom: 2,
    minZoom: 2,
    bounds: [
      [-58, -170],
      [75, -30],
    ],
    fit: true,
  },
  {
    id: 'africa',
    label: 'Africa',
    short: 'AF',
    center: [2, 20],
    zoom: 3,
    minZoom: 2,
    bounds: [
      [-38, -25],
      [42, 58],
    ],
    fit: true,
  },
  {
    id: 'world',
    label: 'World',
    short: 'WLD',
    center: [20, 10],
    zoom: 1,
    minZoom: 1,
    bounds: [
      [-62, -180],
      [84, 180],
    ],
    fit: true,
  },
];

export const REGION_BY_ID = Object.fromEntries(REGIONS.map((r) => [r.id, r])) as Record<
  Region,
  RegionView
>;
