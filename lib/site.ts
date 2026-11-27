import manifest from '@/public/data/borders/manifest.json';
import type { Bloc, CampaignLine, Front, Kind, Level } from '@/lib/data';

/**
 * The whole timeline runs from July 1937 to September 1945, month by month.
 * The first month is July 1937 because the war this atlas maps began there: the
 * Marco Polo Bridge incident of 7 July 1937 is the point from which Japan's war
 * in China was a national war rather than a frontier incident, and the atlas says
 * so in three places, so the range has to show it. The last month is September
 * because the instrument of surrender against Japan was signed on 2 September 1945
 * and southern Korea was occupied on 8 September: both change a colour on the
 * world layer, so both have to be inside the range.
 *
 * The cost of the earlier start is on the European border layer, whose earliest
 * published state is 30 April 1938: July 1937 to March 1938 leave the European
 * border fills off rather than painting post-Anschluss borders onto 1937, while
 * April 1938 carries May 1938 to March 1939 (up to eleven months after it was
 * drawn). nearestSnapshot names the state and the gap, and WORLD_MONTH_NOTES
 * for the opening months says what that means.
 */
export const TIMELINE_START = { year: 1937, month: 7 };
export const TIMELINE_END = { year: 1945, month: 9 };

export interface MonthCell {
  /** e.g. "1939-09" */
  key: string;
  year: number;
  month: number;
  /** e.g. "September 1939" */
  label: string;
  /** Short form for the axis of the timeline: "Sep 39" */
  short: string;
}

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function buildMonths(): MonthCell[] {
  const out: MonthCell[] = [];
  for (let y = TIMELINE_START.year; y <= TIMELINE_END.year; y++) {
    for (let m = 1; m <= 12; m++) {
      if (y === TIMELINE_START.year && m < TIMELINE_START.month) continue;
      if (y === TIMELINE_END.year && m > TIMELINE_END.month) continue;
      out.push({
        key: `${y}-${String(m).padStart(2, '0')}`,
        year: y,
        month: m,
        label: `${MONTH_NAMES[m - 1]} ${y}`,
        short: `${MONTH_NAMES[m - 1].slice(0, 3)} ${String(y).slice(2)}`,
      });
    }
  }
  return out;
}

/** The WW1 sister site's timeline (1914-07 to 1918-11), used only to carry a
 * reader's approximate place in the war across the cross-site switch. */
export const WW1_MONTH_KEYS: string[] = Array.from({ length: 53 }, (_, i) => {
  const n = 1914 * 12 + 6 + i; // July 1914 is month index 6 of 1914
  return `${Math.floor(n / 12)}-${String((n % 12) + 1).padStart(2, '0')}`;
});

export const MONTHS = buildMonths();
export const MONTH_INDEX: Record<string, number> = Object.fromEntries(
  MONTHS.map((m, i) => [m.key, i])
);

export function monthKeyOf(isoDate: string): string {
  return isoDate.slice(0, 7);
}

export function longDate(isoDate: string, precision: 'day' | 'month'): string {
  const [y, m, d] = isoDate.split('-').map(Number);
  if (precision === 'month' || !d) return `${MONTH_NAMES[m - 1]} ${y}`;
  return `${d} ${MONTH_NAMES[m - 1]} ${y}`;
}

/** Last day of the given month key, as an ISO date. */
function endOfMonth(key: string): string {
  const [y, m] = key.split('-').map(Number);
  const last = new Date(Date.UTC(y, m, 0)).getUTCDate();
  return `${key}-${String(last).padStart(2, '0')}`;
}

/* ------------------------------------------------------------------ *
 * Border snapshots
 * ------------------------------------------------------------------ */

export interface Snapshot {
  id: string;
  date: string;
  label: string;
  file: string;
  countries: number;
}

export const SNAPSHOTS = manifest.snapshots as Snapshot[];

/**
 * The last day of a timeline month, as YYYY-MM-DD. The border layers can only be
 * coloured on their own snapshot dates, but the world layer outside Europe is
 * modern outlines with a dated timeline of its own, so it is coloured on the
 * exact month end: 31 August 1945 and 30 September 1945 are not the same map.
 */
export function monthEndDate(monthKey: string): string {
  const [year, month] = monthKey.split('-').map(Number);
  const leap = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  const days = [31, leap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
  return `${monthKey}-${String(days).padStart(2, '0')}`;
}

export interface SnapshotChoice {
  snapshot: Snapshot;
  /** Months between the selected month and the snapshot date; 0 = exact. */
  gapMonths: number;
  /** True when the snapshot is older than the selected month. */
  isEarlier: boolean;
}

const monthsBetween = (a: string, b: string) => {
  const [ay, am] = a.split('-').map(Number);
  const [by, bm] = b.split('-').map(Number);
  return (by - ay) * 12 + (bm - am);
};

/**
 * The border dataset is a handful of dated states, not a continuous series, so
 * we show the state closest in time to the month the reader has picked and say
 * so plainly in the UI rather than pretending to a precision we do not have.
 *
 * Among snapshots dated on or before the selected month the nearest one wins,
 * and a snapshot dated *after* it is only ever used when there is no earlier
 * one to show — that is, for July 1937 to March 1938, which precede the earliest
 * state in the dataset (30 April 1938). Reading the slider at July 1937 must
 * never present the reader with the borders of a later month as though they
 * predated it; when the fallback does apply, the UI still names the
 * snapshot and says how many months after the chosen month it falls.
 */
export function nearestSnapshot(monthKey: string): SnapshotChoice {
  let best: Snapshot | null = null;
  let bestGap = Number.POSITIVE_INFINITY;

  // First choice: the nearest snapshot on or before the selected month.
  for (const s of SNAPSHOTS) {
    const delta = monthsBetween(monthKey, s.date.slice(0, 7)); // snapshot - month
    if (delta <= 0 && -delta < bestGap) {
      bestGap = -delta;
      best = s;
      if (bestGap === 0) break; // an exact month needs nothing better
    }
  }

  // Fallback: months earlier than the first snapshot, so the nearest state
  // postdates them. Documented in components/SourcesPanel.tsx.
  if (!best) {
    for (const s of SNAPSHOTS) {
      const delta = monthsBetween(monthKey, s.date.slice(0, 7));
      if (delta > 0 && delta < bestGap) {
        bestGap = delta;
        best = s;
      }
    }
  }

  return {
    snapshot: best ?? SNAPSHOTS[0],
    gapMonths: bestGap,
    isEarlier: (best?.date.slice(0, 7) ?? '') <= monthKey,
  };
}

/* ------------------------------------------------------------------ *
 * Campaign lines
 * ------------------------------------------------------------------ */

export const SIDE_META: Record<
  CampaignLine['side'],
  { label: string; color: string }
> = {
  // Exactly the four sides the campaign data uses. A side with no line would
  // render an empty filter button, so none are defined here. The Japanese line
  // colour is the stroke of the Japanese-occupied fill, so a line and the
  // territory an army had taken read as one family on the map.
  german: { label: 'German advance', color: '#3F3F46' },
  japanese: { label: 'Japanese advance', color: '#5F4260' },
  soviet: { label: 'Soviet advance', color: '#15803D' },
  western: { label: 'Western Allied advance', color: '#1D4E89' },
};

/** Visible when the campaign window touches the selected month at all. */
export type LineDomain = NonNullable<CampaignLine['domain']>;

/**
 * How a line drawn for each element looks and is described. The colour keeps
 * coming from `side`, so a route at sea is still in the colour of the navy that
 * sailed it; the domain changes the dash, the row the Key prints and the
 * sentence the popup uses.
 *
 * The dashes were chosen by measuring them on screen, not by eye. At the World
 * extent a whole line is a handful of pixels: a line of the Channel Dash’s
 * geometry is 184 px in Europe at 1440x900 and 16 px at the World extent on a
 * 390x844 phone, and Crete is 15 px even in Europe. So the pattern has to start
 * with a mark that lands inside the first few pixels — a 1 px dash followed by a
 * 11 px gap paints nothing at all on a 15 px line — and every gap has to stay
 * wider than its dash, or a route at sea reads as one unbroken line under the
 * coast. The measured figures are in audit/lines-domain/DONE.md.
 */
export const LINE_DOMAIN_META: Record<
  LineDomain,
  { label: string; keyLabel: string; dash: string; tooltip: string; caveat: string }
> = {
  land: {
    label: 'line',
    keyLabel: 'Axis of advance or movement',
    dash: '8 6',
    tooltip: 'Schematic axis through named places; the ring is an interpolated position by date.',
    caveat:
      'This is a schematic axis of advance through named places, not a surveyed daily front ' +
      'line. The ring marks an interpolated position along that axis by date, not a documented ' +
      'map reference for that morning. Event pins sit on the named place nearest the event, not ' +
      'on a surveyed grid reference.',
  },
  sea: {
    label: 'route at sea',
    keyLabel: 'Route at sea',
    dash: '2 7',
    tooltip: 'Schematic route at sea through named ports; no ring is drawn on a ship’s route.',
    caveat:
      'This is a ship’s or convoy’s route between the named ports it used, not a surveyed track, a ' +
      'patrol area or a swept lane. No ring is drawn along it: a ship was either at its port or on ' +
      'its way, and no source gives its position for a given morning. Event pins sit on the named ' +
      'place nearest the event, not on a surveyed grid reference.',
  },
  air: {
    label: 'track in the air',
    keyLabel: 'Air operation',
    dash: '2 4 8 4',
    tooltip: 'Schematic track in the air through named places; no ring is drawn on a route flown.',
    caveat:
      'This is the route flown, through the places the aircraft crossed — not an area it bombed and not ' +
      'a surveyed track. No ring is drawn along it: this marks ground a raid crossed or ' +
      'paratroopers were dropped on, not ground anybody held on that morning. Event pins sit on ' +
      'the named place nearest the event, not on a surveyed grid reference.',
  },
};

/** The element a line crosses, with 'land' as the default for every older entry. */
export const lineDomainOf = (line: CampaignLine): LineDomain => line.domain ?? 'land';

/** The dash a line is drawn with, from its domain. */
export const lineDashOf = (line: CampaignLine): string =>
  LINE_DOMAIN_META[lineDomainOf(line)].dash;

/** The domains actually on screen, in the order the Key prints them. */
export const DOMAIN_ORDER: LineDomain[] = ['land', 'sea', 'air'];

export function campaignVisible(line: CampaignLine, monthKey: string): boolean {
  const monthStart = `${monthKey}-01`;
  const monthEnd = endOfMonth(monthKey);
  return line.from <= monthEnd && line.to >= monthStart;
}

/* ------------------------------------------------------------------ *
 * Reading levels, fronts and event kinds
 * ------------------------------------------------------------------ */

export const LEVELS: { id: Level; label: string; short: string; hint: string }[] = [
  {
    id: 'primary',
    label: 'Primary school',
    short: 'Primary',
    hint: 'Ages 7-11 · short sentences, no jargon',
  },
  {
    id: 'secondary',
    label: 'Secondary school',
    short: 'Secondary',
    hint: 'Ages 12-16 · names, dates and cause and effect',
  },
  {
    id: 'university',
    label: 'University',
    short: 'University',
    hint: 'Historiography, arguments over numbers, and sources',
  },
];

export const FRONT_META: Record<Front, { label: string; color: string }> = {
  western: { label: 'Western front', color: '#1D4E89' },
  eastern: { label: 'Eastern front', color: '#15803D' },
  balkans: { label: 'Balkans', color: '#7C3AED' },
  mediterranean: { label: 'Mediterranean', color: '#B45309' },
  home: { label: 'Home front', color: '#BE123C' },
  arctic: { label: 'Arctic & Atlantic', color: '#0E7490' },
  politics: { label: 'Diplomacy & politics', color: '#475569' },
  atlantic: { label: 'Atlantic', color: '#0C4A6E' },
  air_war: { label: 'Air war', color: '#6D28D9' },
  pacific: { label: 'Pacific & Asia', color: '#0F766E' },
  china: { label: 'China', color: '#A16207' },
  china_burma_india: { label: 'China, Burma & India', color: '#A16207' },
  americas: { label: 'The Americas', color: '#0369A1' },
};

export const KIND_META: Record<Kind, { label: string; emoji: string }> = {
  battle: { label: 'Battle', emoji: '⚔️' },
  invasion: { label: 'Invasion', emoji: '🪖' },
  politics: { label: 'Politics', emoji: '🏛️' },
  conference: { label: 'Conference', emoji: '🤝' },
  liberation: { label: 'Liberation', emoji: '🕊️' },
  resistance: { label: 'Resistance', emoji: '✊' },
  war_crime: { label: 'War crime / genocide', emoji: '🕯️' },
  home_front: { label: 'Home front', emoji: '🏠' },
  evacuation: { label: 'Evacuation', emoji: '⛴️' },
  alliance: { label: 'Alliance', emoji: '🤝' },
};

/* ------------------------------------------------------------------ *
 * Numbers
 * ------------------------------------------------------------------ */

/** The war years covered by the statistics series. */
export const STAT_YEARS = [1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945];

export function yearForMonth(monthKey: string): number {
  return Number(monthKey.slice(0, 4));
}

export function formatMillions(value: number): string {
  if (value >= 1) return `${value.toFixed(1).replace(/\.0$/, '')} million`;
  const thousands = Math.round(value * 1000);
  return `${thousands.toLocaleString('en-GB')} thousand`;
}

export const BLOC_META: Record<
  Bloc,
  { label: string; color: string }
> = {
  axis: { label: 'Axis', color: '#A93226' },
  allies: { label: 'Western Allies', color: '#2E6F9E' },
  soviet: { label: 'Soviet Union', color: '#C8791A' },
  co_belligerent: { label: 'Co-belligerent / neutral', color: '#6E7F2B' },
  collaboration: { label: 'Collaboration', color: '#8B5E3C' },
  occupied: { label: 'Occupied', color: '#5B6B73' },
  neutral: { label: 'Neutral', color: '#8C979B' },
};
