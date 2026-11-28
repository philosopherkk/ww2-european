import batchFile from '@/lib/eras/pilot-1815/batch-01.json';
import figuresFile from '@/lib/eras/pilot-1815/figures.json';
import linesFile from '@/lib/eras/pilot-1815/lines.json';
import linksFile from '@/lib/eras/pilot-1815/links.json';
import { eraSpanMonthLabel } from '@/lib/eras/format';
import type {
  EraDomain,
  EraEpisode,
  EraEvent,
  EraFigure,
  EraFront,
  EraKind,
  EraLine,
  EraLink,
  EraPeriod,
  EraPrecision,
  EraSource,
  EraWaypoint,
} from '@/lib/eras/types';

const FRONTS: readonly EraFront[] = [
  'british_isles',
  'iberia',
  'france_and_low_countries',
  'italy',
  'german_lands',
  'danube',
  'balkans',
  'greece_and_aegean',
  'scandinavia',
  'baltic',
  'eastern_europe',
  'pontic_steppe',
  'mediterranean',
  'north_sea',
  'black_sea',
  'anatolia_and_levant',
  'maghreb',
  'politics',
];

function asKind(id: string, kind: string): EraKind {
  switch (kind) {
    case 'battle':
    case 'siege':
    case 'treaty':
    case 'rising':
    case 'succession':
    case 'invasion':
    case 'diplomacy':
      return kind;
    default:
      throw new Error(`${id} has an unknown kind`);
  }
}

function asPrecision(id: string, precision: string): EraPrecision {
  switch (precision) {
    case 'day':
    case 'month':
    case 'year':
      return precision;
    default:
      throw new Error(`${id} has an unknown date precision`);
  }
}

function asFront(id: string, front: string): EraFront {
  if ((FRONTS as readonly string[]).includes(front)) return front as EraFront;
  throw new Error(`${id} has an unknown front`);
}

function asDomain(id: string, domain: string): EraDomain {
  switch (domain) {
    case 'land':
    case 'sea':
      return domain;
    default:
      throw new Error(`${id} has an unknown domain`);
  }
}

function present(text: string | undefined): string | undefined {
  if (!text || text.trim() === '') return undefined;
  return text;
}

function uniqueSources(sources: { url: string; publisher: string }[]): EraSource[] {
  const seen = new Set<string>();
  const out: EraSource[] = [];
  for (const source of sources) {
    if (seen.has(source.url)) continue;
    seen.add(source.url);
    out.push({ url: source.url, publisher: source.publisher });
  }
  return out;
}

function toEvent(item: (typeof batchFile.items)[number]): EraEvent {
  return {
    id: item.id,
    date: item.date,
    precision: asPrecision(item.id, item.precision),
    title: item.title,
    kind: asKind(item.id, item.kind),
    fronts: item.fronts.map((front) => asFront(item.id, front)),
    countries: item.countries,
    figures: item.figures,
    note: present(item.note),
    mapNote: present(item.mapNote),
    levels: item.levels,
    sources: uniqueSources(item.sources),
  };
}

function toWaypoint(
  name: string,
  pair: readonly number[] | undefined
): EraWaypoint {
  if (!pair || pair.length !== 2 || !Number.isFinite(pair[0]) || !Number.isFinite(pair[1])) {
    return { name };
  }
  return { name, lat: pair[0], lng: pair[1] };
}

function toLine(line: (typeof linesFile.lines)[number]): EraLine {
  return {
    id: line.id,
    name: line.name,
    from: line.from,
    to: line.to,
    domain: asDomain(line.id, line.domain),
    mover: line.mover,
    summary: line.summary,
    waypoints: line.waypoints.map((waypoint, index) => toWaypoint(waypoint.name, line.path[index])),
    sources: uniqueSources(line.sources),
  };
}

function toFigure(item: (typeof figuresFile.items)[number]): EraFigure {
  return {
    id: item.id,
    name: item.name,
    role: item.role,
    country: item.country,
    allegiance: item.allegiance,
    note: present(item.note),
    bio: item.bio,
    sources: uniqueSources(item.sources),
  };
}

function toLink(link: (typeof linksFile.links)[number]): EraLink {
  return { lineId: link.line, eventId: link.event, at: link.at };
}

const lines = linesFile.lines.map(toLine);
const fromDates = lines.map((line) => line.from).sort();
const toDates = lines.map((line) => line.to).sort();
const from = fromDates[0] ?? batchFile.items[0].date;
const to = toDates[toDates.length - 1] ?? batchFile.items[0].date;

const waterloo: EraEpisode = {
  id: 'waterloo-1815',
  title: 'Waterloo, 1815',
  monthLabel: eraSpanMonthLabel(from, to),
  events: batchFile.items.map(toEvent),
  lines,
  figures: figuresFile.items.map(toFigure),
  links: linksFile.links.map(toLink),
};

export const LONG_NINETEENTH: EraPeriod = {
  id: 'long-nineteenth',
  label: 'Long nineteenth century',
  episodes: [waterloo],
};
