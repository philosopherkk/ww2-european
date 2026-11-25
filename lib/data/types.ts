/**
 * The shape of every piece of content on the site.
 *
 * One place, so that an event card, a biography and a front line are written to
 * the same standard and the map, the timeline and the people page cannot drift
 * apart. The WW2 original had these types spread over three files; here they
 * live together and every data file imports from this one.
 */

/* ------------------------------------------------------------------ *
 * Reading levels
 * ------------------------------------------------------------------ */

/** Three genuine rewrites of the same content, not one text made shorter. */
export type Level = 'primary' | 'secondary' | 'university';

export interface LevelText {
  cause: string;
  what: string;
  consequence: string;
}

/* ------------------------------------------------------------------ *
 * Events
 * ------------------------------------------------------------------ */

/**
 * Theatres of the Great War. A card may carry more than one: the Armenian
 * deportations are `mass_killing` on the `caucasus` and `middle_east` fronts,
 * the blockade of Germany is a `blockade` with a `home` consequence.
 */
export type Front =
  | 'western'
  | 'eastern'
  | 'italian'
  | 'balkans'
  | 'middle_east'
  | 'caucasus'
  | 'africa'
  | 'naval'
  | 'air'
  | 'home'
  | 'politics';

export type Kind =
  | 'battle'
  | 'offensive'
  | 'siege'
  | 'invasion'
  | 'landing'
  | 'raid'
  | 'politics'
  | 'diplomacy'
  | 'conference'
  | 'alliance'
  | 'revolution'
  | 'armistice'
  | 'home_front'
  | 'resistance'
  | 'mass_killing'
  | 'blockade'
  | 'technology';

export interface WW1Event {
  id: string;
  /**
   * ISO date. Where a month is the finest precision the sources allow, set
   * `precision` to 'month' and use the best-documented day.
   */
  date: string;
  precision: 'day' | 'month';
  title: string;
  kind: Kind;
  fronts: Front[];
  /** Country names, spelled exactly as in COUNTRY_STATS and the border data. */
  countries: string[];
  /** Ids of people with a biography on the People page. Never invent one. */
  figures?: string[];
  /** Historians' note: the argument, the disputed number, the source problem. */
  note?: string;
  /** Short note on what the map does and does not show for this event. */
  mapNote?: string;
  levels: Record<Level, LevelText>;
}

/* ------------------------------------------------------------------ *
 * People
 * ------------------------------------------------------------------ */

/**
 * Who a person stood with. `co_belligerent` is for states that joined later or
 * changed sides — Italy, the United States, Romania, Greece, Portugal;
 * `opposition` is for revolutionaries, socialists and pacifists who were
 * against the war their own country was fighting; `occupied` is for people
 * whose name belongs to a country under army rule, like Belgium.
 */
export type Bloc =
  | 'central'
  | 'entente'
  | 'co_belligerent'
  | 'neutral'
  | 'opposition'
  | 'occupied';

export interface FigureBio {
  primary: string;
  secondary: string;
  university: string;
}

export interface HistoricalFigure {
  id: string;
  name: string;
  birthDeath: string;
  /** One line: what office or command they held, and when. */
  role: string;
  country: string;
  bloc: Bloc;
  bio: FigureBio;
  /**
   * Historians’ note: the disputed number, the source problem, who argues what. The level texts
   * are capped, so the evidence behind a claim lives here rather than being cut. Same convention
   * as an event card’s note, and rendered the same way.
   */
  note?: string;
}

/* ------------------------------------------------------------------ *
 * Front lines and operations on the map
 * ------------------------------------------------------------------ */

/**
 * Colours for the lines. Russian lines are their own colour because Russia
 * leaves the war in the middle of the map's span, and a Russian advance drawn
 * in the Entente colour would read as a British or French one in 1918.
 */
export type Side = 'entente' | 'central' | 'russia';

export interface CampaignLine {
  id: string;
  name: string;
  /** Operation code-name where one exists: Michael, Brusilov, Caporetto... */
  operation?: string;
  side: Side;
  /** ISO dates. A line is shown when the selected month overlaps this window. */
  from: string;
  to: string;
  /**
   * 'advance' is an army moving: waypoints lie along the axis of advance, in
   * order, and the map marks how far the advance had got by the selected month.
   * 'front' is a line held: waypoints lie along the front in geographical
   * order and no progress marker is drawn.
   */
  kind?: 'advance' | 'front';
  /**
   * What moved. 'land' is the default and is the only value every line here
   * has had so far, so leaving it out means land and changes nothing. 'sea' is
   * a ship's or convoy's route; 'air' is a raid, bombing run or airborne drop.
   * The dash changes with it, and so does the row the Key shows.
   */
  domain?: 'land' | 'sea' | 'air';
  /** Ordered waypoints as [lat, lng] of real places, each one geocoded. */
  path: [number, number][];
  summary: string;
  /** Strength committed, for the university-level reading. */
  strength?: string;
}

/* ------------------------------------------------------------------ *
 * Statistics
 * ------------------------------------------------------------------ */

export interface YearStat {
  year: number;
  /** Population of the state in that year, in millions, on that year's borders. */
  population: number;
  /** Personnel under arms (all services) during that year, in millions. */
  armedForces: number;
  note?: string;
}

export interface CountryStat {
  id: string;
  name: string;
  bloc: Bloc;
  capital: string;
  /** Years in which the state was a belligerent, inclusive. */
  belligerent: [number, number] | null;
  series: YearStat[];
  /** Highest strength reached during the war, in millions. */
  peakForces: number;
  /** Military deaths (including prisoners who died in captivity), millions. */
  militaryDeaths: number;
  /** Civilian deaths attributable to the war, millions. */
  civilianDeaths: number;
  /** Where the total is argued over, the range and who argues it. */
  deathsNote: string;
  /** One line for a young reader. */
  simple: string;
}
