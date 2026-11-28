import type { EraEpisode, EraEvent, EraPeriod } from '@/lib/eras/types';

const bannockburn: EraEvent = {
  id: 'bannockburn_1314',
  date: '1314-06-23',
  precision: 'day',
  title: 'Battle of Bannockburn',
  kind: 'battle',
  fronts: ['british_isles'],
  countries: ['Scotland', 'England'],
  figures: [],
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
  figures: [],
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
  figures: [],
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
  figures: [],
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

const episode: EraEpisode = {
  id: 'late-medieval-battles',
  title: 'Bannockburn, Crécy, Agincourt, and Bosworth',
  monthLabel: 'June 1314 – August 1485',
  events: [bannockburn, crecy, agincourt, bosworth],
  lines: [],
  figures: [],
  links: [],
};

export const LATE_MEDIEVAL: EraPeriod = {
  id: 'late-medieval',
  label: 'Late medieval',
  episodes: [episode],
};
