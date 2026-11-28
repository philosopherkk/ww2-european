import {
  ainJalut1260,
  alfonsoViii,
  alpArslan,
  arsuf1191,
  baybars,
  evesham1265,
  frederickBarbarossa,
  guyOfLusignan,
  hattin1187,
  henryIii,
  hulagu,
  kitbuqa,
  kublaiKhan,
  lasNavas1212,
  legnano1176,
  lewes1264,
  manzikert1071,
  ottoIv,
  philipIiAugustus,
  princeEdward,
  qutuz,
  richardI,
  romanusIv,
  saladin,
  simonDeMontfort,
  yamen1279,
} from '@/lib/eras/fill-high-medieval';
import { HIGH_MEDIEVAL_FIGURES } from '@/lib/eras/people';
import { bouvines1214, johnOfEngland } from '@/lib/eras/sourced-batch-2';
import type { EraEpisode, EraEvent, EraPeriod } from '@/lib/eras/types';

const stamford: EraEvent = {
  id: 'stamford_bridge_1066',
  date: '1066-09-25',
  precision: 'day',
  title: 'Battle of Stamford Bridge',
  kind: 'battle',
  fronts: ['british_isles'],
  countries: ['England', 'Norway'],
  figures: ['harold_hardrada', 'tostig'],
  levels: {
    primary: {
      cause: 'Hardrada, King of Norway, brought a Viking army into England to take the crown, with Tostig beside him.',
      what: 'On 25 September 1066 King Harold defeated Hardrada’s Viking army at Stamford Bridge.',
      consequence: 'Hardrada was defeated, and his bid for the English crown failed at Stamford Bridge.',
    },
    secondary: {
      cause: 'Hardrada, King of Norway, came into the north of England with a Viking army and with Harold’s brother Tostig, aiming at the English throne.',
      what: 'On 25 September 1066 King Harold caught that army at Stamford Bridge and defeated it. The battle belongs to the Viking attacks on England in 1066.',
      consequence: 'Hardrada’s attempt on the crown was crushed. The Norwegian bid ended on that field in the north of England.',
    },
    university: {
      cause: 'The invaders were Hardrada, King of Norway, and Tostig, brother of the English king, with a Viking army. Their aim, as the accounts give it, was the English throne.',
      what: 'King Harold defeated them at Stamford Bridge on 25 September 1066. One account spells the Norwegian king Harold Hardrada, and another Harald Hardrada. The place, the day, and the defeat are shared.',
      consequence: 'The Viking army was beaten, and the Norwegian claim was not carried through.',
    },
  },
  sources: [
    { url: 'https://www.britishbattles.com/norman-conquest/battle-of-stamford-bridge/', publisher: 'British Battles' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Stamford_Bridge', publisher: 'Wikipedia' },
  ],
};

const hastings: EraEvent = {
  id: 'hastings_1066',
  date: '1066-10-14',
  precision: 'day',
  title: 'Battle of Hastings',
  kind: 'battle',
  fronts: ['british_isles'],
  countries: ['Normandy', 'England'],
  figures: ['william_of_normandy', 'harold_of_england'],
  levels: {
    primary: {
      cause: 'William, Duke of Normandy, invaded England and brought a Norman army against King Harold.',
      what: 'On 14 October 1066 the armies fought at Hastings, and Harold’s force was defeated.',
      consequence: 'Harold was killed in the defeat, and William’s army held the field at Hastings.',
    },
    secondary: {
      cause: 'William, Duke of Normandy, crossed to England with a Norman army after the English crown had fallen to Harold. The two armies met at Hastings.',
      what: 'On 14 October 1066 they fought at Hastings. Harold’s Saxon, or Anglo-Saxon, army was defeated by the Norman force.',
      consequence: 'Harold was killed. William’s victory at Hastings left his army in possession of the field.',
    },
    university: {
      cause: 'William is named Duke of Normandy, and Harold king of the English, or the Anglo-Saxon king Harold II. The battle follows William’s invasion and Harold’s march to meet him.',
      what: 'The day is 14 October 1066 at Hastings, on the ground now called Battle in Sussex. The Norman army defeated Harold’s force.',
      consequence: 'Harold’s death and William’s victory are in the accounts. One of them adds that William ordered an abbey on the spot to mark the win.',
    },
  },
  sources: [
    { url: 'https://www.britishbattles.com/norman-conquest/battle-of-hastings/', publisher: 'British Battles' },
    { url: 'https://www.encyclopedia.com/history/modern-europe/wars-and-battles/battle-hastings', publisher: 'Encyclopedia.com' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Hastings', publisher: 'Wikipedia' },
  ],
};

const bouvines: EraEvent = {
  ...bouvines1214,
  figures: [...bouvines1214.figures, 'philip_ii_augustus', 'otto_iv'],
};

const episode: EraEpisode = {
  id: 'england-1066',
  title: 'Stamford Bridge and Hastings',
  monthLabel: 'September – October 1066',
  events: [stamford, hastings],
  lines: [],
  figures: HIGH_MEDIEVAL_FIGURES,
  links: [],
};

export const HIGH_MEDIEVAL: EraPeriod = {
  id: 'high-medieval',
  label: 'High medieval',
  episodes: [
    episode,
    {
      id: 'manzikert-1071',
      title: 'Battle of Manzikert',
      monthLabel: 'August 1071',
      events: [manzikert1071],
      lines: [],
      figures: [alpArslan, romanusIv],
      links: [],
    },
    {
      id: 'legnano-1176',
      title: 'Battle of Legnano',
      monthLabel: 'May 1176',
      events: [legnano1176],
      lines: [],
      figures: [frederickBarbarossa],
      links: [],
    },
    {
      id: 'hattin-1187',
      title: 'Battle of Hattin',
      monthLabel: 'July 1187',
      events: [hattin1187],
      lines: [],
      figures: [saladin, guyOfLusignan],
      links: [],
    },
    {
      id: 'arsuf-1191',
      title: 'Battle of Arsuf',
      monthLabel: 'September 1191',
      events: [arsuf1191],
      lines: [],
      figures: [richardI],
      links: [],
    },
    {
      id: 'las-navas-1212',
      title: 'Battle of Las Navas de Tolosa',
      monthLabel: 'July 1212',
      events: [lasNavas1212],
      lines: [],
      figures: [alfonsoViii],
      links: [],
    },
    {
      id: 'bouvines-1214',
      title: 'Battle of Bouvines',
      monthLabel: '1214',
      events: [bouvines],
      lines: [],
      figures: [johnOfEngland, philipIiAugustus, ottoIv],
      links: [],
    },
    {
      id: 'ain-jalut-1260',
      title: 'Battle of Ain Jalut',
      monthLabel: 'September 1260',
      events: [ainJalut1260],
      lines: [],
      figures: [baybars, qutuz, kitbuqa, hulagu],
      links: [],
    },
    {
      id: 'lewes-1264',
      title: 'Battle of Lewes',
      monthLabel: 'May 1264',
      events: [lewes1264],
      lines: [],
      figures: [simonDeMontfort, henryIii],
      links: [],
    },
    {
      id: 'evesham-1265',
      title: 'Battle of Evesham',
      monthLabel: 'August 1265',
      events: [evesham1265],
      lines: [],
      figures: [princeEdward],
      links: [],
    },
    {
      id: 'yamen-1279',
      title: 'Battle of Yamen',
      monthLabel: 'March 1279',
      events: [yamen1279],
      lines: [],
      figures: [kublaiKhan],
      links: [],
    },
  ],
};
