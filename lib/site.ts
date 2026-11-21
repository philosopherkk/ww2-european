import manifest from '@/public/data/borders/manifest.json';
import type { CampaignLine, Front, Kind, Level } from '@/lib/data';

/** The whole timeline runs from January 1938 to August 1945, month by month. */
export const TIMELINE_START = { year: 1938, month: 1 };
export const TIMELINE_END = { year: 1945, month: 8 };

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
 * one to show — that is, for January to March 1938, which precede the earliest
 * state in the dataset (30 April 1938). Reading the slider at January 1938
 * must never present the reader with the borders of a later month as though
 * they predated it; when the fallback does apply, the UI still names the
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
  // Exactly the three sides the campaign data uses. A side with no line would
  // render an empty filter button, so none are defined here.
  german: { label: 'German advance', color: '#3F3F46' },
  soviet: { label: 'Soviet advance', color: '#15803D' },
  western: { label: 'Western Allied advance', color: '#1D4E89' },
};

/** Visible when the campaign window touches the selected month at all. */
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
