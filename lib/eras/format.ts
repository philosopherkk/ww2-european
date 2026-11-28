import type { EraKind, EraPrecision } from '@/lib/eras/types';

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

export function eraKindLabel(kind: EraKind): string {
  switch (kind) {
    case 'battle':
      return 'Battle';
    case 'siege':
      return 'Siege';
    case 'treaty':
      return 'Treaty';
    case 'rising':
      return 'Rising';
    case 'succession':
      return 'Succession';
    case 'invasion':
      return 'Invasion';
    case 'diplomacy':
      return 'Diplomacy';
    default: {
      const exhaustive: never = kind;
      return exhaustive;
    }
  }
}

/** Same marks the war maps use where the kind already exists there. */
export function eraKindEmoji(kind: EraKind): string {
  switch (kind) {
    case 'battle':
      return '⚔️';
    case 'siege':
      return '🛡️';
    case 'treaty':
      return '📜';
    case 'rising':
      return '✊';
    case 'succession':
      return '👑';
    case 'invasion':
      return '🪖';
    case 'diplomacy':
      return '🤝';
    default: {
      const exhaustive: never = kind;
      return exhaustive;
    }
  }
}

export function eraLongDate(iso: string, precision: EraPrecision): string {
  if (precision === 'year') {
    const year = Number(iso.slice(0, 4));
    return Number.isFinite(year) ? String(year) : iso;
  }
  const [yearText, monthText, dayText] = iso.split('-');
  const month = MONTH_NAMES[Number(monthText) - 1];
  if (!month || !yearText) return iso;
  const year = Number(yearText);
  if (precision === 'month' || !dayText) return `${month} ${year}`;
  return `${Number(dayText)} ${month} ${year}`;
}

/** One month when the span sits inside it, otherwise the two month names from the dates. */
export function eraSpanMonthLabel(from: string, to: string): string {
  if (from.slice(0, 7) === to.slice(0, 7)) return eraLongDate(from, 'month');
  return `${eraLongDate(from, 'month')} – ${eraLongDate(to, 'month')}`;
}
