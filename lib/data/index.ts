/**
 * One import point for everything the site shows.
 *
 * The content is split by year on purpose: an event file covers a single year of
 * the war, so the dates in a file never run off into the next one, and `EVENTS`
 * below is the sorted union the timeline uses.
 */
import type { WW1Event } from './types';
import { EVENTS_1914 } from './events-1914';
import { EVENTS_1915 } from './events-1915';
import { EVENTS_1916 } from './events-1916';
import { EVENTS_1917 } from './events-1917';
import { EVENTS_1918 } from './events-1918';
import { FIGURES_CENTRAL } from './figures-central';
import { FIGURES_EAST } from './figures-east';
import { FIGURES_WEST } from './figures-west';
import { FIGURES_SOUTH } from './figures-south';

export type {
  Level,
  Front,
  Kind,
  LevelText,
  WW1Event,
  Bloc,
  HistoricalFigure,
  FigureBio,
  Side,
  CampaignLine,
  CountryStat,
  YearStat,
} from './types';
export type { TerritoryStatus, StatusMeta } from './status';

export { BLOCS, COUNTRY_STATS } from './stats';
export { CAMPAIGN_LINES } from './campaigns';
export { MARCH_LINES } from './marches';
export {
  GEOMETRY_NOTE,
  SNAPSHOT_NOTES,
  STATUS_META,
  STATUS_ORDER,
  statusFor,
} from './status';
export { SOURCES, UNCERTAINTIES } from './sources';
export { PORTRAITS } from './portraits';
export type { Portrait } from './portrait-types';

export const EVENTS: WW1Event[] = [
  ...EVENTS_1914,
  ...EVENTS_1915,
  ...EVENTS_1916,
  ...EVENTS_1917,
  ...EVENTS_1918,
].sort((a, b) => a.date.localeCompare(b.date));

export const FIGURES = [...FIGURES_CENTRAL, ...FIGURES_EAST, ...FIGURES_WEST, ...FIGURES_SOUTH].sort(
  (a, b) => a.name.localeCompare(b.name),
);

export const FIGURE_BY_ID: Record<string, (typeof FIGURES)[number]> = Object.fromEntries(
  FIGURES.map((f) => [f.id, f]),
);

export const EVENT_BY_ID: Record<string, WW1Event> = Object.fromEntries(
  EVENTS.map((e) => [e.id, e]),
);

/** Every country name that appears in an event, for the filter dropdowns. */
export const EVENT_COUNTRIES = Array.from(new Set(EVENTS.flatMap((e) => e.countries))).sort();

/** Events with no biographies, reported so the People page can never be silent. */
export const EVENT_COUNT_BY_MONTH: Record<string, number> = EVENTS.reduce<Record<string, number>>(
  (acc, e) => {
    const key = e.date.slice(0, 7);
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  },
  {},
);
