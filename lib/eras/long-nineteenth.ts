import {
  LONG_NINETEENTH_AMERICAS,
  LONG_NINETEENTH_LINES,
  LONG_NINETEENTH_LINKS,
} from '@/lib/eras/americas';
import { napoleonIii, portArthur1904, sedan1870, theodoreRoosevelt } from '@/lib/eras/sourced-batch';
import { horatioNelson, trafalgar1805 } from '@/lib/eras/sourced-batch-3';
import { austerlitz1805, isandlwana1879 } from '@/lib/eras/sourced-batch-4';
import { aliwal1846, rorkesDrift1879 } from '@/lib/eras/sourced-batch-5';
import {
  alma1854,
  assaye1803,
  ayubKhan,
  borodino1812,
  botha,
  burrows,
  colenso1899,
  crazyHorse,
  cuthbertCollingwood,
  garnetWolseley,
  georgeCuster,
  gonvilleBromhead,
  harrySmith,
  herbertKitchener,
  ibrahimBey,
  johnChard,
  littleBighorn1876,
  lordRaglan,
  maiwand1880,
  mikhailKutuzov,
  muradBey,
  omdurman1898,
  princeMenshikov,
  pyramids1798,
  ranjodhSingh,
  redversBuller,
  saintArnaud,
  sittingBull,
  telElKebir1882,
  villeneuve,
} from '@/lib/eras/fill-long-nineteenth';
import { LONG_NINETEENTH_FIGURES } from '@/lib/eras/people';
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
  'americas',
  'asia',
  'africa',
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
  events: [...batchFile.items.map(toEvent), ...LONG_NINETEENTH_AMERICAS],
  lines: [...lines, ...LONG_NINETEENTH_LINES],
  figures: [...figuresFile.items.map(toFigure), ...LONG_NINETEENTH_FIGURES],
  links: [...linksFile.links.map(toLink), ...LONG_NINETEENTH_LINKS],
};

const later: EraEpisode = {
  id: 'after-waterloo',
  title: 'Sedan and Port Arthur',
  monthLabel: 'September 1870 – 1905',
  events: [sedan1870, portArthur1904],
  lines: [],
  figures: [napoleonIii, theodoreRoosevelt],
  links: [],
};

const trafalgar: EraEpisode = {
  id: 'trafalgar-1805',
  title: 'Battle of Trafalgar',
  monthLabel: 'October 1805',
  events: [
    {
      ...trafalgar1805,
      figures: [...trafalgar1805.figures, 'villeneuve', 'cuthbert_collingwood'],
    },
  ],
  lines: [],
  figures: [horatioNelson, villeneuve, cuthbertCollingwood],
  links: [],
};

const austerlitz: EraEpisode = {
  id: 'austerlitz-1805',
  title: 'Battle of Austerlitz',
  monthLabel: 'December 1805',
  events: [austerlitz1805],
  lines: [],
  figures: [],
  links: [],
};

const isandlwana: EraEpisode = {
  id: 'isandlwana-1879',
  title: 'Battle of Isandlwana',
  monthLabel: 'January 1879',
  events: [
    isandlwana1879,
    { ...rorkesDrift1879, figures: ['john_chard', 'gonville_bromhead'] },
  ],
  lines: [],
  figures: [johnChard, gonvilleBromhead],
  links: [],
};

const fill: EraEpisode = {
  id: 'long-nineteenth-fill',
  title: 'The Little Bighorn, Maiwand, and Omdurman',
  monthLabel: 'June 1876 – September 1898',
  events: [littleBighorn1876, maiwand1880, omdurman1898],
  lines: [],
  figures: [georgeCuster, sittingBull, crazyHorse, ayubKhan, burrows, herbertKitchener],
  links: [],
};

const aliwal: EraEpisode = {
  id: 'aliwal-1846',
  title: 'Battle of Aliwal',
  monthLabel: 'January 1846',
  events: [
    { ...aliwal1846, figures: ['harry_smith', 'ranjodh_singh'] },
  ],
  lines: [],
  figures: [harrySmith, ranjodhSingh],
  links: [],
};

const round2: EraEpisode = {
  id: 'long-nineteenth-round2',
  title: 'The Pyramids, Assaye, and Borodino',
  monthLabel: 'July 1798 – September 1812',
  events: [pyramids1798, assaye1803, borodino1812],
  lines: [],
  figures: [muradBey, ibrahimBey, mikhailKutuzov],
  links: [],
};

const round3: EraEpisode = {
  id: 'long-nineteenth-round3',
  title: 'The Alma, Tel-el-Kebir, and Colenso',
  monthLabel: 'September 1854 – December 1899',
  events: [alma1854, telElKebir1882, colenso1899],
  lines: [],
  figures: [lordRaglan, saintArnaud, princeMenshikov, garnetWolseley, redversBuller, botha],
  links: [],
};

export const LONG_NINETEENTH: EraPeriod = {
  id: 'long-nineteenth',
  label: 'Long nineteenth century',
  episodes: [waterloo, trafalgar, austerlitz, aliwal, isandlwana, later, fill, round2, round3],
};
