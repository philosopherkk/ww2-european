/**
 * European conflict before 28 July 1914, one period id per slice.
 * A later era is another id here plus an episode on that period.
 * It is not a new page, and it is not a month on either war timeline.
 */
export type EraPeriodId =
  | 'antiquity'
  | 'early-medieval'
  | 'high-medieval'
  | 'late-medieval'
  | 'early-modern'
  | 'long-nineteenth'
  | 'since-1945';

export type EraLevel = 'primary' | 'secondary' | 'university';

export type EraPrecision = 'day' | 'month' | 'year';

export type EraKind =
  | 'battle'
  | 'siege'
  | 'treaty'
  | 'rising'
  | 'succession'
  | 'invasion'
  | 'diplomacy';

export type EraFront =
  | 'british_isles'
  | 'iberia'
  | 'france_and_low_countries'
  | 'italy'
  | 'german_lands'
  | 'danube'
  | 'balkans'
  | 'greece_and_aegean'
  | 'scandinavia'
  | 'baltic'
  | 'eastern_europe'
  | 'pontic_steppe'
  | 'mediterranean'
  | 'north_sea'
  | 'black_sea'
  | 'anatolia_and_levant'
  | 'maghreb'
  | 'politics';

export type EraDomain = 'land' | 'sea';

export interface EraLevelText {
  cause: string;
  what: string;
  consequence: string;
}

export interface EraSource {
  url: string;
  publisher: string;
}

export interface EraEvent {
  id: string;
  date: string;
  precision: EraPrecision;
  title: string;
  kind: EraKind;
  fronts: EraFront[];
  countries: string[];
  figures: string[];
  note?: string;
  mapNote?: string;
  levels: Record<EraLevel, EraLevelText>;
  sources: EraSource[];
}

/** A named place. Latitude and longitude are set only when the line file already has them. */
export interface EraWaypoint {
  name: string;
  lat?: number;
  lng?: number;
}

export interface EraLine {
  id: string;
  name: string;
  from: string;
  to: string;
  domain: EraDomain;
  mover: string;
  summary: string;
  waypoints: EraWaypoint[];
  sources: EraSource[];
}

export interface EraFigure {
  id: string;
  name: string;
  role: string;
  country: string;
  allegiance: string;
  note?: string;
  bio: Record<EraLevel, string>;
  sources: EraSource[];
}

export interface EraLink {
  lineId: string;
  eventId: string;
  at: number;
}

export interface EraEpisode {
  id: string;
  title: string;
  /** Month label taken from the episode’s own dates, for example "June 1815". */
  monthLabel: string;
  events: EraEvent[];
  lines: EraLine[];
  figures: EraFigure[];
  links: EraLink[];
}

export interface EraPeriod {
  id: EraPeriodId;
  label: string;
  episodes: EraEpisode[];
}

/** Folder bounds for each period id. Not a claim that a realm ended on the boundary morning. */
export interface EraPeriodBound {
  id: EraPeriodId;
  label: string;
  start: string;
  end: string;
}
