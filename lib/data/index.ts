import type { WW2Event } from './events-1938-1940';
import { EVENTS as EVENTS_1938_1940 } from './events-1938-1940';
import { EVENTS_1941_1942 } from './events-1941-1942';
import { EVENTS_1943_1945 } from './events-1943-1945';
import { EVENTS_END_OF_WAR } from './events-end-of-war';
import { EVENTS_1937 } from './events-1937';
import { EVENTS_PACIFIC_1942_1945 } from './events-1942-1945-asia-pacific';
import { EVENTS_CITIES_1941_1945 } from './events-1941-1945-cities';
import { FIGURES_AXIS } from './figures-axis';
import { FIGURES_ALLIES } from './figures-allies';

export type { Level, Front, Kind, LevelText, WW2Event } from './events-1938-1940';
export type { Bloc, HistoricalFigure, FigureBio } from './figures-axis';
export type { CountryStat, YearStat } from './stats';
export type { CampaignLine, Side } from './campaigns';
export type { TerritoryStatus, StatusMeta } from './status';

export { BLOCS, COUNTRY_STATS } from './stats';
export { CAMPAIGN_LINES } from './campaigns';
export { STATUS_META, STATUS_ORDER, statusFor, SNAPSHOT_NOTES } from './status';
export {
  WORLD_KEY_NOTES,
  WORLD_NOTES,
  worldNameFor,
  worldNoteFor,
  worldStatusFor,
} from './world-status';
export { SOURCES, UNCERTAINTIES } from './sources';

export const EVENTS: WW2Event[] = [
  ...EVENTS_1937,
  ...EVENTS_1938_1940,
  ...EVENTS_1941_1942,
  ...EVENTS_1943_1945,
  ...EVENTS_END_OF_WAR,
  ...EVENTS_PACIFIC_1942_1945,
  ...EVENTS_CITIES_1941_1945,
].sort((a, b) => a.date.localeCompare(b.date));

export const FIGURES = [...FIGURES_AXIS, ...FIGURES_ALLIES].sort((a, b) =>
  a.name.localeCompare(b.name)
);

export const FIGURE_BY_ID: Record<string, (typeof FIGURES)[number]> = Object.fromEntries(
  FIGURES.map((f) => [f.id, f])
);

export const EVENT_BY_ID: Record<string, WW2Event> = Object.fromEntries(
  EVENTS.map((e) => [e.id, e])
);

/** Every country name that appears in an event, for the filter dropdowns. */
export const EVENT_COUNTRIES = Array.from(new Set(EVENTS.flatMap((e) => e.countries))).sort();
