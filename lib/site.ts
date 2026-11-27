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
  /* A ring puts the line at a place on a date. That is a claim the sources print
   * for an army advancing on ground; for a route at sea or a track in the air the
   * sources print the day of the action, not a position half-way between ports, so
   * those domains get no ring. */
  return line.kind !== 'front' && lineDomainOf(line) === 'land';
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
      'The dashed line is the whole schematic axis of the operation through named places; the ring marks an interpolated position by date, not a documented map reference for that morning.',
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

export type LineDomain = NonNullable<CampaignLine['domain']>;

/**
 * How each element is drawn. A line's colour still comes from `side` and its
 * meaning still comes from `kind`; the domain changes only the dash and the row
 * the Key prints, so a route at sea is still an advance or a held line in every
 * other respect.
 *
 * The dashes were chosen by measuring them on screen, not by eye. At the World
 * extent a whole line is a handful of pixels: Albion’s four points are 27 px in
 * the Europe view at 1440x900 and 4 px at the World extent there, and 27 px and
 * 2 px on a 390x844 phone. So the pattern has to start with a mark that lands
 * inside the first few pixels — a 1 px dash followed by an 11 px gap paints
 * nothing at all on a short line — and every gap has to stay wider than its dash,
 * or a route at sea reads as one continuous line under the coast. The measured
 * figures are in audit/lines-domain/DONE.md; the sea and air dashes are the same
 * strings on the sister site so a reader who follows the month link from one war
 * to the other sees the same marks.
 */
export const LINE_DOMAIN_META: Record<
  LineDomain,
  { label: string; dash?: string; tooltip: string; caveat: string }
> = {
  land: {
    label: 'on land',
    // No dash of its own: a land line keeps the dash of its kind, so the
    // advance/front distinction carries on working.
    tooltip: 'Schematic axis through named places; the ring is an interpolated position by date.',
    caveat:
      'This is a schematic axis of advance through named places, not a surveyed daily front ' +
      'line. The ring marks an interpolated position along that axis by date, not a documented ' +
      'map reference for that morning. Event pins sit on the named place nearest the event, not ' +
      'on a surveyed grid reference.',
  },
  sea: {
    // Used as the noun in two places: the popup header
    // ("Central Powers · route at sea") and the Key row.
    label: 'route at sea',
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
    dash: '2 4 8 4',
    tooltip: 'Schematic track in the air through named places; no ring is drawn on a route flown.',
    caveat:
      'This is the route flown, through the places the aircraft crossed — not an area it bombed and not ' +
      'a surveyed track. No ring is drawn along it: this marks ground a raid crossed or ' +
      'paratroopers were dropped on, not ground anybody held on that morning. Event pins sit on ' +
      'the named place nearest the event, not on a surveyed grid reference.',
  },
};

/** The element a line crosses, with 'land' as the default for older entries. */
export const lineDomainOf = (line: CampaignLine): LineDomain => line.domain ?? 'land';

/**
 * The dash a line is drawn with: a sea or air line takes the domain dash, and a
 * land line keeps the dash of its kind.
 */
export function lineDashOf(line: CampaignLine): string | undefined {
  const domain = LINE_DOMAIN_META[lineDomainOf(line)];
  return domain.dash ?? LINE_KIND_META[lineKindOf(line)].dash;
}

/**
 * The class a line belongs to in the Key. A land line is classed by its kind, so
 * the advance/front rows are unchanged; sea and air are classes of their own,
 * because a route to sea is neither an axis of advance nor a line held.
 */
export type LineClass = LineKind | LineDomain;

export const LINE_CLASS_ORDER: LineClass[] = ['advance', 'front', 'sea', 'air'];

export function lineClassOf(line: CampaignLine): LineClass {
  const domain = lineDomainOf(line);
  return domain === 'land' ? lineKindOf(line) : domain;
}

/** Label and dash for a Key row, whichever way the class was decided. */
export function lineClassMeta(cls: LineClass): { label: string; dash?: string } {
  return cls === 'sea' || cls === 'air' ? LINE_DOMAIN_META[cls] : LINE_KIND_META[cls as LineKind];
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

/**
 * Who a person or a state stood with. The labels are deliberately plain: a
 * ten-year-old reading "co-belligerent" learns nothing, so the parenthetical
 * says what the word means. Colours are shared with the Numbers panel.
 */
export const BLOC_META: Record<
  Bloc,
  { label: string; color: string; textColor?: string; blurb: string }
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
      'Britain, France and Russia first, with Serbia, Belgium and Montenegro at war in 1914 and Italy from ' +
      '1915. Russia left the war after the revolution of 1917. The United States declared war on Germany on ' +
      '6 April 1917, as an associated power rather than an ally; the mass army and much of the material ' +
      'weight arrived in 1918.',
  },
  co_belligerent: {
    label: 'Joined later',
    color: '#6E7F2B',
    textColor: '#4F5B1F',
    blurb:
      'States that came in after 1914, each for its own reasons: Italy in 1915, Portugal and Romania in 1916, the United States and Greece in 1917.',
  },
  neutral: {
    label: 'Neutral',
    color: '#8C979B',
    textColor: '#656D70',
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
