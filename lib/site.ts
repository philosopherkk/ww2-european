import manifest from '@/public/data/borders/manifest.json';
import type { Bloc, CampaignLine, Front, Kind, Level } from '@/lib/data';

/** The whole timeline runs from July 1914 to November 1918, month by month. */
export const TIMELINE_START = { year: 1914, month: 7 };
export const TIMELINE_END = { year: 1918, month: 11 };

export interface MonthCell {
  /** e.g. "1914-08" */
  key: string;
  year: number;
  month: number;
  /** e.g. "August 1914" */
  label: string;
  /** Short form for the axis of the timeline: "Aug 14" */
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
 */
export function nearestSnapshot(monthKey: string): SnapshotChoice {
  let best = SNAPSHOTS[0];
  let bestGap = Number.POSITIVE_INFINITY;
  for (const s of SNAPSHOTS) {
    const gap = Math.abs(monthsBetween(monthKey, s.date.slice(0, 7)));
    if (gap < bestGap) {
      bestGap = gap;
      best = s;
    }
  }
  return {
    snapshot: best,
    gapMonths: bestGap,
    isEarlier: best.date.slice(0, 7) <= monthKey,
  };
}

/* ------------------------------------------------------------------ *
 * Campaign lines
 * ------------------------------------------------------------------ */

export const SIDE_META: Record<
  CampaignLine['side'],
  { label: string; color: string }
> = {
  // Exactly the three sides the line data uses. A side with no line would render
  // an empty filter button, so none are defined here.
  central: { label: 'Central Powers', color: '#3F3F46' },
  entente: { label: 'Entente and associated', color: '#1D4E89' },
  // Russia has its own colour because it leaves the war inside the map's span:
  // a Russian line in the Entente colour would read as British or French in 1918.
  russia: { label: 'Russian', color: '#15803D' },
};

/** Visible when the campaign window touches the selected month at all. */
export function campaignVisible(line: CampaignLine, monthKey: string): boolean {
  const monthStart = `${monthKey}-01`;
  const monthEnd = endOfMonth(monthKey);
  return line.from <= monthEnd && line.to >= monthStart;
}

/**
 * A held line (`kind: 'front'`) has no direction of march, so no marker is drawn
 * along it: putting a "how far the advance got" dot on the Aisne in October 1917
 * would be a lie about a place where almost nobody advanced.
 */
export function lineShowsProgress(line: CampaignLine): boolean {
  return line.kind !== 'front';
}

export type LineKind = NonNullable<CampaignLine['kind']>;

/**
 * How each kind of line is drawn, and the sentence the popup uses to say what
 * the reader is looking at. A held front is a claim about a place; an advance is
 * a claim about movement, and they must not share an appearance.
 */
export const LINE_KIND_META: Record<
  LineKind,
  { label: string; weight: number; dash?: string; explanation: string }
> = {
  advance: {
    label: 'on the move',
    weight: 3.5,
    dash: '8 6',
    explanation:
      'The dashed line is the whole axis of the operation; the ring marks roughly where it had got to by the month you are reading.',
  },
  front: {
    label: 'holding this line',
    weight: 4,
    explanation:
      'The solid line was held by the side named above for the whole period shown, so there is no ring: almost nobody advanced along this line in these months.',
  },
};

/** The kind a line is drawn as, with 'advance' as the default for older entries. */
export const lineKindOf = (line: CampaignLine): LineKind =>
  line.kind === 'front' ? 'front' : 'advance';

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

/**
 * Who a person or a state stood with. The labels are deliberately plain: a
 * ten-year-old reading "co-belligerent" learns nothing, so the parenthetical
 * says what the word means. Colours are shared with the Numbers panel.
 */
export const BLOC_META: Record<
  Bloc,
  { label: string; color: string; blurb: string }
> = {
  central: {
    label: 'Central Powers',
    color: '#3F3F46',
    blurb:
      'Germany and Austria-Hungary, with the Ottoman Empire and Bulgaria. They fought a war on several fronts at once from 1914 and lost the last of them in the autumn of 1918.',
  },
  entente: {
    label: 'Entente and associated powers',
    color: '#1D4E89',
    blurb:
      'Britain, France and Russia first, then Serbia, Belgium, Montenegro and Italy. Russia left the war after the revolution of 1917; the United States joined in April 1918 and brought the money and the manpower.',
  },
  co_belligerent: {
    label: 'Joined later',
    color: '#6E7F2B',
    blurb:
      'States that came in after 1914, each for its own reasons: Italy in 1915, Portugal and Romania in 1916, the United States and Greece in 1917.',
  },
  neutral: {
    label: 'Neutral',
    color: '#8C979B',
    blurb:
      'The Netherlands, Scandinavia, Switzerland and Spain stayed out of the fighting, and traded and were blockaded all the same.',
  },
  opposition: {
    label: 'Worked against the war',
    color: '#BE123C',
    blurb:
      'People who tried to stop the war from their own side: the socialists who voted against it, the revolutionaries who turned it into civil war in Russia in 1917.',
  },
  occupied: {
    label: 'Under army rule',
    color: '#5B6B73',
    blurb:
      'Belgium, Serbia and parts of France and the Caucasus lived under an occupying army, whose requisitioning, hostage-taking and reprisals are the reason the civilian death tolls there are so high.',
  },
};

/** The order blocs are listed in, everywhere they are listed. */
export const BLOC_ORDER: Bloc[] = [
  'central',
  'entente',
  'co_belligerent',
  'neutral',
  'opposition',
  'occupied',
];

export const FRONT_META: Record<Front, { label: string; color: string }> = {
  western: { label: 'Western Front', color: '#1D4E89' },
  eastern: { label: 'Eastern Front', color: '#15803D' },
  italian: { label: 'Italian Front', color: '#B45309' },
  balkans: { label: 'Balkans', color: '#7C3AED' },
  middle_east: { label: 'Middle East', color: '#BE123C' },
  caucasus: { label: 'Caucasus', color: '#0E7490' },
  africa: { label: 'Africa', color: '#92400E' },
  naval: { label: 'At sea', color: '#0C4A6E' },
  air: { label: 'Air war', color: '#6D28D9' },
  home: { label: 'Home front', color: '#BE123C' },
  politics: { label: 'Diplomacy & politics', color: '#475569' },
};

export const KIND_META: Record<Kind, { label: string; emoji: string }> = {
  battle: { label: 'Battle', emoji: '⚔️' },
  offensive: { label: 'Offensive', emoji: '➡️' },
  siege: { label: 'Siege', emoji: '🛡️' },
  invasion: { label: 'Invasion', emoji: '🪖' },
  landing: { label: 'Landing', emoji: '⛴️' },
  raid: { label: 'Raid', emoji: '💥' },
  politics: { label: 'Politics', emoji: '🏛️' },
  diplomacy: { label: 'Diplomacy', emoji: '📜' },
  conference: { label: 'Conference', emoji: '🤝' },
  alliance: { label: 'Alliance', emoji: '🤝' },
  revolution: { label: 'Revolution', emoji: '✊' },
  armistice: { label: 'Armistice', emoji: '🕊️' },
  home_front: { label: 'Home front', emoji: '🏠' },
  resistance: { label: 'Resistance', emoji: '✊' },
  mass_killing: { label: 'Mass killing', emoji: '🕯️' },
  blockade: { label: 'Blockade', emoji: '🚢' },
  technology: { label: 'New weapons', emoji: '⚙️' },
};

/* ------------------------------------------------------------------ *
 * Numbers
 * ------------------------------------------------------------------ */

/** The war years covered by the statistics series. */
export const STAT_YEARS = [1914, 1915, 1916, 1917, 1918];

export function yearForMonth(monthKey: string): number {
  return Number(monthKey.slice(0, 4));
}

export function formatMillions(value: number): string {
  if (value >= 1) return `${value.toFixed(1).replace(/\.0$/, '')} million`;
  const thousands = Math.round(value * 1000);
  return `${thousands.toLocaleString('en-GB')} thousand`;
}
