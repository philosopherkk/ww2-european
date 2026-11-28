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
  /**
   * Stays in the data but is not offered as a button, because this extent has nothing
   * for THIS site to paint. Measured on the live site by sampling a grid over the map
   * box at both test widths: the Americas box painted 0 of 74,868 samples and the
   * World box 0 of 167,518, because the geometry file is clipped to 12.5-82 N and
   * -25-70 E and there is no world-status layer here. The three remaining buttons each
   * paint real ground: Europe 59% and Africa 17%. Africa’s box reaches 58 E, which is
   * where the Levant and Arabia sit, so it shows the eastern end of the theatre rather
   * than colonies the source lacks. Asia frames the Ottoman theatre — Anatolia, the
   * Levant, Mesopotamia, Sinai and the Hejaz, with Gallipoli inside the frame — rather
   * than the whole continent.
   */
  hidden?: boolean;
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
    // Ottoman theatre: Gallipoli and Anatolia through Mesopotamia, Sinai and the Hejaz.
    center: [31, 37],
    zoom: 5,
    minZoom: 3,
    bounds: [
      [18, 22],
      [44, 52],
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
    hidden: true,
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
    hidden: true,
  },
];

export const REGION_BY_ID = Object.fromEntries(REGIONS.map((r) => [r.id, r])) as Record<
  Region,
  RegionView
>;
