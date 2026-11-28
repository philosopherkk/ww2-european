import {
  ainJalut1260,
  alfonsoViii,
  alpArslan,
  arsuf1191,
  baybars,
  benevento1266,
  charlesOfAnjou,
  davidIScotland,
  evesham1265,
  frederickBarbarossa,
  guyOfLusignan,
  hattin1187,
  henryIEngland,
  henryIii,
  hulagu,
  kitbuqa,
  kublaiKhan,
  lasNavas1212,
  legnano1176,
  lewes1264,
  manfredOfSicily,
  manzikert1071,
  ottoIv,
  philipIiAugustus,
  princeEdward,
  qutuz,
  richardI,
  robertCurthose,
  romanusIv,
  saladin,
  simonDeMontfort,
  standard1138,
  thurstanOfYork,
  tinchebray1106,
  yamen1279,
} from '@/lib/eras/fill-high-medieval';
import { HIGH_MEDIEVAL_FIGURES } from '@/lib/eras/people';
import { bouvines1214, johnOfEngland } from '@/lib/eras/sourced-batch-2';
import type { EraEpisode, EraEvent, EraLine, EraPeriod } from '@/lib/eras/types';

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
      cause: 'Hardrada, King of Norway, brought a Viking army into England to seize the crown, and Tostig came with him.',
      what: 'On 25 September 1066 King Harold defeated Hardrada’s Viking army at Stamford Bridge in the north of England.',
      consequence: 'That defeat ended Hardrada’s bid for the English crown, and the Norwegian attempt failed at Stamford Bridge.',
    },
    secondary: {
      cause: 'A Norwegian ruler, Hardrada, carried a Viking host into the northern counties, and the English king’s brother Tostig rode with those raiders. Their object was the throne itself. This opening belonged with the Viking attacks on England in 1066, and it was pressed in the north before any later meeting farther south.',
      what: 'King Harold came up from the south, caught the invaders, and beat them at Stamford Bridge on 25 September 1066. One telling spells the Norwegian king Harold Hardrada. Another spells him Harald Hardrada. The village, the September day, and the English success are what those tellings print in common.',
      consequence: 'Hardrada’s grasp at the crown collapsed when his host was beaten. The Norwegian enterprise closed on that northern field, and the Viking challenge mounted in 1066 did not outlast Stamford Bridge. Tostig’s part in the same bid ended with that defeat.',
    },
    university: {
      cause: 'Two narratives name the same pair of invaders and the same prize. Hardrada is King of Norway in each, whether spelt Harold Hardrada or Harald Hardrada, and Tostig is the brother of the English king. They brought a Viking army. The prize they sought was the English throne, and the ground on which they opened that claim was the north of England, inside the wider run of Viking attacks during 1066.',
      what: 'The English king, Harold, is the man who met them. Both narratives put the meeting at Stamford Bridge on 25 September 1066, and both record that he defeated the Viking army there. Spelling of the Norwegian personal name is unstable, as just noted, and is not a second battle. No strength in thousands is copied. The course that remains is a dated English victory, at that village, over Hardrada and Tostig.',
      consequence: 'Once the Viking army had been beaten, the Norwegian claim was not carried through. Hardrada’s bid for the crown failed on the field where it was fought, in the north of England. The accounts that describe the Viking attacks of 1066 treat this defeat as the close of that northern attempt, with Tostig’s share in the claim ending on the same ground. The English crown stayed with Harold.',
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
      cause: 'William, Duke of Normandy, invaded England and brought a Norman army against King Harold, who held the English crown.',
      what: 'On 14 October 1066 the armies fought at Hastings, and Harold’s Saxon force was defeated by the Norman army.',
      consequence: 'Harold was killed in the defeat. William’s army held the field, and he ordered an abbey on the ground now called Battle in Sussex.',
    },
    secondary: {
      cause: 'After the English crown had passed to Harold, the duke of Normandy crossed the sea with a Norman host to dispute it. Harold is also called the Anglo-Saxon king Harold II. The two hosts met because William had invaded and Harold had come to face him, and the meeting place was Hastings.',
      what: 'Combat fell on 14 October 1066. Writers locate it at Hastings, on the ground now called Battle in Sussex. The Norman soldiers overcame Harold’s men. Saxon and Anglo-Saxon are both used for his side. The dated defeat of that English army by the invaders is the report the pages share.',
      consequence: 'Harold died in the fighting. Possession of the field passed to William. To mark the win he ordered an abbey built on the spot, at what is now Battle in Sussex. His victory at Hastings left the Norman army in command of the ground where the English king had fallen.',
    },
    university: {
      cause: 'The invader is William, named Duke of Normandy, and the defender is Harold, named king of the English and, in a longer telling, the Anglo-Saxon king Harold II. A Norman army came because William had invaded. Harold’s march to meet that army is the step that brought the hosts together. Nothing here depends on a quarrel inside either camp. The cause these pages will bear is an invasion from Normandy answered by the English king at Hastings.',
      what: 'The day is 14 October 1066. The place is Hastings, which the same pages also identify as the ground now called Battle in Sussex. There the Norman army defeated Harold’s force. One wording prefers Saxon for his soldiers, and another prefers Anglo-Saxon. Those are labels for one side, not two battles. No count of men is used. What stands is a Norman victory on that October day, at Hastings, over the army Harold had brought to the field.',
      consequence: 'Harold’s death and William’s victory are in the accounts together. The Norman army held the field. William ordered an abbey on the spot to commemorate the win, at the place now called Battle in Sussex. Later crowning and later castles are not required to state the result of the day. The consequence the pages support is a slain English king, a Norman army left in possession, and an abbey raised to mark that possession.',
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

const pevenseyToHastings: EraLine = {
  id: 'pevensey_hastings_1066',
  name: 'Norman march from Pevensey to Hastings',
  from: '1066-09-28',
  to: '1066-10-14',
  domain: 'land',
  mover: 'Normandy',
  summary:
    'William seized Pevensey and then marched east to Hastings before the armies fought on 14 October 1066.',
  waypoints: [
    { name: 'Pevensey', lat: 50.8318124, lng: 0.3415459 },
    { name: 'Hastings', lat: 50.8550976, lng: 0.5821779 },
  ],
  sources: [
    { url: 'https://www.history.com/articles/battle-of-hastings', publisher: 'History.com' },
    { url: 'https://www.britishbattles.com/norman-conquest/battle-of-hastings/', publisher: 'British Battles' },
  ],
};

const stamfordToHastings: EraLine = {
  id: 'stamford_hastings_1066',
  name: 'English march from Stamford Bridge to Hastings',
  from: '1066-09-25',
  to: '1066-10-14',
  domain: 'land',
  mover: 'England',
  summary:
    'After his victory at Stamford Bridge on 25 September 1066, King Harold marched south and fought William at Hastings on 14 October.',
  waypoints: [
    { name: 'Stamford Bridge', lat: 53.9891083, lng: -0.8988821 },
    { name: 'Hastings', lat: 50.8550976, lng: 0.5821779 },
  ],
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Stamford_Bridge', publisher: 'Wikipedia' },
    {
      url: 'https://www.britishbattles.com/norman-conquest/battle-of-stamford-bridge/',
      publisher: 'British Battles',
    },
  ],
};

function battlePoint(
  id: string,
  name: string,
  eventId: string,
  date: string,
  mover: string,
  summary: string,
  lat: number,
  lng: number,
  domain: EraLine['domain'],
  sources: EraLine['sources'],
): { line: EraLine; links: EraEpisode['links'] } {
  return {
    line: {
      id,
      name,
      from: date,
      to: date,
      domain,
      mover,
      summary,
      waypoints: [{ name, lat, lng }],
      sources,
    },
    links: [{ lineId: id, eventId, at: 0 }],
  };
}

const hattinPoint = battlePoint(
  'hattin_1187_place',
  'Hattin',
  'hattin_1187',
  '1187-07-04',
  'Ayyubid Sultanate',
  'On 4 July 1187 Saladin defeated Guy’s Christian army at Hattin.',
  32.7982445,
  35.4595528,
  'land',
  hattin1187.sources,
);

const lewesPoint = battlePoint(
  'lewes_1264_place',
  'Lewes',
  'lewes_1264',
  '1264-05-14',
  'England',
  'On 14 May 1264 Montfort’s smaller army defeated the king’s forces at Lewes.',
  50.8741265,
  0.0121129,
  'land',
  lewes1264.sources,
);

const eveshamPoint = battlePoint(
  'evesham_1265_place',
  'Evesham',
  'evesham_1265',
  '1265-08-04',
  'England',
  'On 4 August 1265 the royal army caught Montfort at Evesham, and the earl was killed.',
  52.0940158,
  -1.9483083,
  'land',
  evesham1265.sources,
);

const beneventoPoint = battlePoint(
  'benevento_1266_place',
  'Benevento',
  'benevento_1266',
  '1266-02-26',
  'Anjou',
  'On 26 February 1266 Charles’s army defeated Manfred at Benevento, and Manfred was killed on the field.',
  41.1295587,
  14.7824639,
  'land',
  benevento1266.sources,
);

const episode: EraEpisode = {
  id: 'england-1066',
  title: 'Stamford Bridge and Hastings',
  monthLabel: 'September – October 1066',
  events: [stamford, hastings],
  lines: [pevenseyToHastings, stamfordToHastings],
  figures: HIGH_MEDIEVAL_FIGURES,
  links: [
    { lineId: 'pevensey_hastings_1066', eventId: 'hastings_1066', at: 0 },
    { lineId: 'pevensey_hastings_1066', eventId: 'hastings_1066', at: 1 },
    { lineId: 'stamford_hastings_1066', eventId: 'stamford_bridge_1066', at: 0 },
    { lineId: 'stamford_hastings_1066', eventId: 'hastings_1066', at: 1 },
  ],
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
      id: 'tinchebray-1106',
      title: 'Battle of Tinchebray',
      monthLabel: 'September 1106',
      events: [tinchebray1106],
      lines: [],
      figures: [henryIEngland, robertCurthose],
      links: [],
    },
    {
      id: 'standard-1138',
      title: 'Battle of the Standard',
      monthLabel: 'August 1138',
      events: [standard1138],
      lines: [],
      figures: [davidIScotland, thurstanOfYork],
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
      lines: [hattinPoint.line],
      figures: [saladin, guyOfLusignan],
      links: hattinPoint.links,
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
      lines: [lewesPoint.line],
      figures: [simonDeMontfort, henryIii],
      links: lewesPoint.links,
    },
    {
      id: 'evesham-1265',
      title: 'Battle of Evesham',
      monthLabel: 'August 1265',
      events: [evesham1265],
      lines: [eveshamPoint.line],
      figures: [princeEdward],
      links: eveshamPoint.links,
    },
    {
      id: 'benevento-1266',
      title: 'Battle of Benevento',
      monthLabel: 'February 1266',
      events: [benevento1266],
      lines: [beneventoPoint.line],
      figures: [charlesOfAnjou, manfredOfSicily],
      links: beneventoPoint.links,
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
