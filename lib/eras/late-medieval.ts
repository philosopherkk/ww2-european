import {
  LATE_MEDIEVAL_FILL_EVENTS,
  LATE_MEDIEVAL_FILL_FIGURES,
  LATE_MEDIEVAL_ROUND2_EVENTS,
  LATE_MEDIEVAL_ROUND2_FIGURES,
  LATE_MEDIEVAL_ROUND3_EVENTS,
  LATE_MEDIEVAL_ROUND3_FIGURES,
  LATE_MEDIEVAL_ROUND3_LINES,
  LATE_MEDIEVAL_ROUND3_LINKS,
} from '@/lib/eras/fill-late-medieval';
import { LATE_MEDIEVAL_FIGURES } from '@/lib/eras/people';
import { constantineXi, constantinople1453, mehmedIi } from '@/lib/eras/sourced-batch-2';
import type { EraEpisode, EraEvent, EraFigure, EraPeriod } from '@/lib/eras/types';

const bannockburn: EraEvent = {
  id: 'bannockburn_1314',
  date: '1314-06-23',
  precision: 'day',
  title: 'Battle of Bannockburn',
  kind: 'battle',
  fronts: ['british_isles'],
  countries: ['Scotland', 'England'],
  figures: ['robert_the_bruce', 'edward_ii'],
  levels: {
    primary: {
      cause: 'Robert the Bruce led a Scottish army against an English army in the fight for Scotland.',
      what: 'The armies fought on 23 and 24 June 1314, and the Scots defeated the English.',
      consequence: 'The English army was beaten, and Robert the Bruce’s Scots held their ground.',
    },
    secondary: {
      cause: 'Robert the Bruce commanded the Scots in the war against England. An English army came against him at Bannockburn.',
      what: 'The fighting ran across 23 and 24 June 1314. The Scots defeated the English over those two days.',
      consequence: 'It was a Scottish victory. The English army lost, and Bruce’s force remained in the field.',
    },
    university: {
      cause: 'Robert the Bruce, king of Scots in the accounts, led the Scottish army. The English army he fought is placed at Bannockburn in the war of Scottish independence.',
      what: 'Both accounts give two days, 23 and 24 June 1314, not a single morning. The Scottish victory falls across that pair of days.',
      consequence: 'The English were defeated. The battle is the Scots’ landmark win of that war, as both accounts present it.',
    },
  },
  sources: [
    {
      url: 'https://www.britishbattles.com/scottish-war-of-independence/battle-of-bannockburn/',
      publisher: 'British Battles',
    },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Bannockburn', publisher: 'Wikipedia' },
  ],
};

const crecy: EraEvent = {
  id: 'crecy_1346',
  date: '1346-08-26',
  precision: 'day',
  title: 'Battle of Crécy',
  kind: 'battle',
  fronts: ['france_and_low_countries'],
  countries: ['England', 'France'],
  figures: ['edward_iii', 'philip_vi_of_france'],
  levels: {
    primary: {
      cause: 'Edward III had led an English army into France in the Hundred Years War.',
      what: 'On 26 August 1346 Edward III’s English army defeated the French at Crécy.',
      consequence: 'The French army lost at Crécy, and the English victory of that day stood.',
    },
    secondary: {
      cause: 'Edward III led an English army in France during the Hundred Years War, and the French army moved to meet him.',
      what: 'On 26 August 1346 he drew the English up at Crécy and defeated the French. The ground is Crécy, in Ponthieu.',
      consequence: 'The battle was an English victory, the first great land win of that war in one account, and the French army was beaten.',
    },
    university: {
      cause: 'The campaign is the Hundred Years War. Edward III’s English army was in France, and the French came to fight it. One account traces the march from a landing in Normandy toward Crécy.',
      what: 'The day is 26 August 1346. Edward’s force, with dismounted men-at-arms and archers in one account, defeated the French at Crécy in Ponthieu.',
      consequence: 'The English victory is shared. One account then carries the same campaign on to the siege of Calais.',
    },
  },
  sources: [
    { url: 'https://www.britishbattles.com/one-hundred-years-war/battle-of-crecy/', publisher: 'British Battles' },
    { url: 'https://www.encyclopedia.com/history/modern-europe/wars-and-battles/battle-crecy', publisher: 'Encyclopedia.com' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Cr%C3%A9cy', publisher: 'Wikipedia' },
  ],
};

const agincourt: EraEvent = {
  id: 'agincourt_1415',
  date: '1415-10-25',
  precision: 'day',
  title: 'Battle of Agincourt',
  kind: 'battle',
  fronts: ['france_and_low_countries'],
  countries: ['England', 'France'],
  figures: ['henry_v'],
  levels: {
    primary: {
      cause: 'Henry V had brought an English army into France during the Hundred Years War.',
      what: 'On 25 October 1415 the English defeated the French king’s army at Agincourt.',
      consequence: 'The French army was beaten, and Henry V’s English force had the victory.',
    },
    secondary: {
      cause: 'Henry V’s English army was campaigning in France in the Hundred Years War. The French king’s army stood against it at Agincourt.',
      what: 'On 25 October 1415 the English defeated that French army. The day is also Saint Crispin’s Day in one account.',
      consequence: 'The French were beaten. The English victory at Agincourt is the set piece of Henry V’s 1415 campaign.',
    },
    university: {
      cause: 'Henry V commanded the English army in France. The opposing force is the army of the French king, in the Hundred Years War.',
      what: 'The date is 25 October 1415. One account adds the feast name Saint Crispin’s Day. The place is Agincourt, also given as Azincourt.',
      consequence: 'The English won and the French army lost.',
    },
  },
  sources: [
    { url: 'https://www.britishbattles.com/one-hundred-years-war/battle-of-agincourt/', publisher: 'British Battles' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Agincourt', publisher: 'Wikipedia' },
  ],
};

const bosworth: EraEvent = {
  id: 'bosworth_1485',
  date: '1485-08-22',
  precision: 'day',
  title: 'Battle of Bosworth Field',
  kind: 'battle',
  fronts: ['british_isles'],
  countries: ['England'],
  figures: ['henry_tudor', 'richard_iii'],
  levels: {
    primary: {
      cause: 'Henry Tudor met King Richard III in battle during the Wars of the Roses.',
      what: 'On 22 August 1485 Henry Tudor defeated King Richard III at Bosworth Field.',
      consequence: 'Richard III was killed on the field, and Henry Tudor’s victory ended his reign.',
    },
    secondary: {
      cause: 'Henry Tudor and King Richard III fought in the Wars of the Roses, each at the head of an English army in that civil war.',
      what: 'On 22 August 1485 Tudor’s army defeated Richard at Bosworth Field. Richard was killed in the battle.',
      consequence: 'Richard’s death ended his reign. The victory put the Tudor line on the English throne.',
    },
    university: {
      cause: 'The battle sits in the Wars of the Roses. Henry Tudor is the challenger named against King Richard III.',
      what: 'The day is 22 August 1485, at Bosworth Field near Ambion Hill in one account, south of Market Bosworth. Richard was killed as his army lost.',
      consequence: 'One account calls the result the start of the Tudor dynasty as kings and queens of England. Richard’s death and Tudor’s victory are the shared outcome.',
    },
  },
  sources: [
    { url: 'https://www.britishbattles.com/wars-of-the-roses/battle-of-bosworth-field/', publisher: 'British Battles' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Bosworth_Field', publisher: 'Wikipedia' },
  ],
};

const edwardIi: EraFigure = {
  id: 'edward_ii',
  name: 'Edward II',
  role: 'ruler',
  country: 'England',
  allegiance: 'England',
  note: 'One account calls the struggle the First War of Scottish Independence. The other describes a feudal summons and does not use that name for the war.',
  bio: {
    primary:
      'On 23 and 24 June 1314 King Edward II led the English army that Robert the Bruce defeated at Bannockburn.',
    secondary:
      'Edward II was king of England and the commander of the English army at Bannockburn. On 23 and 24 June 1314 his host met the Scots under Robert the Bruce and was beaten. One account lists him as King of England opposite the King of Scots. The other places the same two days in the First War of Scottish Independence and names his army as the English side. His life here is that command and that defeat.',
    university:
      'Edward II is the English king both narratives set against Robert the Bruce at Bannockburn. The fighting they both date runs across 23 and 24 June 1314, and both treat the end of those days as a Scottish victory. A feudal summons to recover Scotland, and a march to relieve a castle, appear in single narratives, so neither errand is repeated as the cause of his presence. Nor is any count of his men, which the pages do not share. What remains is narrower and firmer: he was king of England, he led the army that came against Bruce, and that army lost.',
  },
  sources: [
    {
      url: 'https://www.britishbattles.com/scottish-war-of-independence/battle-of-bannockburn/',
      publisher: 'British Battles',
    },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Bannockburn', publisher: 'Wikipedia' },
  ],
};

const philipVi: EraFigure = {
  id: 'philip_vi_of_france',
  name: 'Philip VI',
  role: 'ruler',
  country: 'France',
  allegiance: 'France',
  note: 'One account spells the field Creçy. The battle narrative used with it spells Crécy. Both name Philip VI as the French king who was defeated.',
  bio: {
    primary:
      'On 26 August 1346 Philip VI, king of France, was defeated at Crécy by Edward III’s English army.',
    secondary:
      'Philip VI wore the French crown when Edward III’s army met his own at Crécy. The day was 26 August 1346, during the Hundred Years War. One account names him in the line of commanders, opposite Edward III and the Black Prince. Another says those English leaders defeated the French of Philip VI. A landing in Normandy and a later siege are each told with more detail than both pages share, so they are not part of this life. The life is the French king who lost at Crécy.',
    university:
      'The French king at Crécy is Philip VI. Both accounts give Edward III the victory over Philip’s army on 26 August 1346, in the Hundred Years War, and one of them adds the Black Prince beside his father in the fighting. Command of the French host is Philip’s in each telling, whether the sentence is a list of captains or a report of whose men were beaten. Routes toward the field, a river crossed on the way, and the port invested afterwards belong to fuller campaign stories and are left out, because they are not the same in both. His part is the crown of France and the defeat of 26 August 1346.',
  },
  sources: [
    { url: 'https://www.britishbattles.com/one-hundred-years-war/battle-of-crecy/', publisher: 'British Battles' },
    {
      url: 'https://www.encyclopedia.com/history/modern-europe/wars-and-battles/battle-crecy',
      publisher: 'Encyclopedia.com',
    },
  ],
};

const episode: EraEpisode = {
  id: 'late-medieval-battles',
  title: 'Bannockburn, Crécy, Agincourt, and Bosworth',
  monthLabel: 'June 1314 – August 1485',
  events: [bannockburn, crecy, agincourt, bosworth],
  lines: [],
  figures: [...LATE_MEDIEVAL_FIGURES, edwardIi, philipVi],
  links: [],
};

export const LATE_MEDIEVAL: EraPeriod = {
  id: 'late-medieval',
  label: 'Late medieval',
  episodes: [
    episode,
    {
      id: 'constantinople-1453',
      title: 'Fall of Constantinople',
      monthLabel: 'May 1453',
      events: [constantinople1453],
      lines: [],
      figures: [mehmedIi, constantineXi],
      links: [],
    },
    {
      id: 'ankara-grunwald-granada',
      title: 'Ankara, Grunwald, and Granada',
      monthLabel: 'July 1402 – January 1492',
      events: LATE_MEDIEVAL_FILL_EVENTS,
      lines: [],
      figures: LATE_MEDIEVAL_FILL_FIGURES,
      links: [],
    },
    {
      id: 'poitiers-aljubarrota-castillon',
      title: 'Poitiers, Aljubarrota, and Castillon',
      monthLabel: 'September 1356 – July 1453',
      events: LATE_MEDIEVAL_ROUND2_EVENTS,
      lines: [],
      figures: LATE_MEDIEVAL_ROUND2_FIGURES,
      links: [],
    },
    {
      id: 'halidon-formigny-towton',
      title: 'Halidon Hill, Formigny, and Towton',
      monthLabel: 'July 1333 – March 1461',
      events: LATE_MEDIEVAL_ROUND3_EVENTS,
      lines: LATE_MEDIEVAL_ROUND3_LINES,
      figures: LATE_MEDIEVAL_ROUND3_FIGURES,
      links: LATE_MEDIEVAL_ROUND3_LINKS,
    },
  ],
};
