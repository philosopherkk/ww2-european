import type { EraEvent, EraLine, EraLink } from '@/lib/eras/types';

/**
 * American campaigns whose dates are in two publisher families.
 * A coordinate is a Nominatim hit for the place those accounts name.
 * One point is a marker, not a march.
 */

const tenochtitlan: EraEvent = {
  id: 'tenochtitlan_1521',
  date: '1521-08-13',
  precision: 'day',
  title: 'Fall of Tenochtitlán',
  kind: 'siege',
  fronts: ['americas'],
  countries: ['Spain', 'Aztec empire'],
  figures: ['hernan_cortes'],
  note: 'One account dates the siege from 22 May 1521, and another from 26 May. Both place the capture on 13 August 1521. One account adds that the emperor was taken and the city levelled.',
  levels: {
    primary: {
      cause: 'Spanish forces led by Hernán Cortés were besieging Tenochtitlán, the capital of the Aztec empire.',
      what: 'On 13 August 1521 those Spanish forces captured Tenochtitlán, and the Aztec capital fell.',
      consequence: 'The Aztec capital was taken, and Spanish forces held Tenochtitlán after that day.',
    },
    secondary: {
      cause: 'Hernán Cortés led Spanish forces against Tenochtitlán, the capital of the Aztec empire, and the city was under siege.',
      what: 'On 13 August 1521 the Spanish captured Tenochtitlán. That day is the fall of the Aztec capital in both accounts.',
      consequence: 'The Aztec capital was taken, and the Spanish held the city after the capture.',
    },
    university: {
      cause: 'Hernán Cortés commanded the Spanish force that besieged Tenochtitlán. The city was the capital of the Aztec empire.',
      what: 'On 13 August 1521 Spanish forces captured Tenochtitlán. The capture, not the morning the siege began, is the date both accounts share.',
      consequence: 'The capture left Tenochtitlán in Spanish hands, and Aztec rule of that capital ended with it.',
    },
  },
  sources: [
    {
      url: 'https://www.history.com/this-day-in-history/august-13/aztec-capital-falls-to-cortes',
      publisher: 'History.com',
    },
    { url: 'https://en.wikipedia.org/wiki/Fall_of_Tenochtitlan', publisher: 'Wikipedia' },
  ],
};

const cajamarca: EraEvent = {
  id: 'cajamarca_1532',
  date: '1532-11-16',
  precision: 'day',
  title: 'Cajamarca',
  kind: 'battle',
  fronts: ['americas'],
  countries: ['Spain', 'Inca empire'],
  figures: ['francisco_pizarro', 'atahualpa'],
  note: 'One account says Pizarro had fewer than 200 men against several thousand, and that Atahualpa was later killed. The other account does not print those figures.',
  levels: {
    primary: {
      cause: 'Francisco Pizarro, a Spanish commander, sought the Inca emperor Atahualpa at Cajamarca.',
      what: 'On 16 November 1532 Pizarro sprang a trap at Cajamarca, and his men captured Atahualpa.',
      consequence: 'Atahualpa was a prisoner after the trap, and Pizarro’s men held the Inca emperor.',
    },
    secondary: {
      cause: 'Francisco Pizarro was at Cajamarca when the Inca emperor Atahualpa came within his reach.',
      what: 'On 16 November 1532 Pizarro sprang a trap on Atahualpa at Cajamarca. His men captured the emperor.',
      consequence: 'The capture put Atahualpa in Spanish hands at Cajamarca, and the Inca emperor was no longer free.',
    },
    university: {
      cause: 'Francisco Pizarro, a Spanish commander, met the Inca emperor Atahualpa at Cajamarca. The town is the place both accounts name.',
      what: 'On 16 November 1532 Pizarro sprang a trap and his men captured Atahualpa. The day and the capture are the shared core.',
      consequence: 'Atahualpa was a prisoner of Pizarro’s men. What was done with him after that day is told more fully in one account than in the other.',
    },
  },
  sources: [
    {
      url: 'https://www.history.com/this-day-in-history/november-16/pizarro-traps-incan-emperor-atahualpa',
      publisher: 'History.com',
    },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Cajamarca', publisher: 'Wikipedia' },
  ],
};

const quebec: EraEvent = {
  id: 'quebec_1759',
  date: '1759-09-13',
  precision: 'day',
  title: 'Battle of Quebec',
  kind: 'battle',
  fronts: ['americas'],
  countries: ['Britain', 'France'],
  figures: ['james_wolfe', 'marquis_de_montcalm'],
  note: 'One account says the defeat led to the British capture of Canada. Another names the ground the Plains of Abraham.',
  levels: {
    primary: {
      cause: 'General James Wolfe led a British army against the French army of the Marquis de Montcalm at Quebec.',
      what: 'On 13 September 1759 Wolfe’s army defeated Montcalm’s French army at Quebec.',
      consequence: 'Both generals were killed in the fighting at Quebec on that day.',
    },
    secondary: {
      cause: 'James Wolfe commanded the British army at Quebec. The French army opposite him was led by the Marquis de Montcalm.',
      what: 'On 13 September 1759 the British defeated the French at Quebec. Wolfe’s army broke Montcalm’s attack.',
      consequence: 'Wolfe and Montcalm were both killed, and the British army held the field at Quebec.',
    },
    university: {
      cause: 'General James Wolfe commanded the British at Quebec, and the Marquis de Montcalm commanded the French army facing him.',
      what: 'On 13 September 1759 the British army under Wolfe defeated the French army under Montcalm at Quebec.',
      consequence: 'Both Wolfe and Montcalm were killed in the battle, and the British army held Quebec.',
    },
  },
  sources: [
    {
      url: 'https://www.britishbattles.com/french-and-indian-war/battle-of-quebec-1759/',
      publisher: 'British Battles',
    },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_the_Plains_of_Abraham', publisher: 'Wikipedia' },
  ],
};

const saratoga: EraEvent = {
  id: 'saratoga_1777',
  date: '1777-09',
  precision: 'month',
  title: 'Battles of Saratoga',
  kind: 'battle',
  fronts: ['americas'],
  countries: ['United States', 'Britain'],
  figures: ['john_burgoyne'],
  note: 'One account dates the fighting from 19 September to 7 October 1777 and calls 19 September an American victory. Another calls the 19 September fight at Freeman’s Farm a British victory, and dates Burgoyne’s surrender 17 October.',
  levels: {
    primary: {
      cause: 'General John Burgoyne led a British army in New York against the American forces.',
      what: 'In September 1777 the armies fought at Saratoga, and the campaign was an American victory.',
      consequence: 'Saratoga was a turning point in the American Revolution, and Burgoyne’s army was defeated.',
    },
    secondary: {
      cause: 'John Burgoyne’s British army was campaigning in New York. American forces met that army at Saratoga.',
      what: 'The fighting in September 1777 includes 19 September, the day both accounts print. The American army won at Saratoga.',
      consequence: 'Burgoyne’s campaign failed. Both accounts call Saratoga a turning point in the American Revolution.',
    },
    university: {
      cause: 'General John Burgoyne commanded the British army in New York. The American army fought him at Saratoga in the American Revolution.',
      what: 'Both accounts include 19 September 1777 among the days of fighting. They do not agree how far past that day the battles ran, so the month is the date given here.',
      consequence: 'The American army defeated Burgoyne’s force. The result is recorded as a turning point in the American Revolution.',
    },
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battles_of_Saratoga', publisher: 'Wikipedia' },
    {
      url: 'https://www.battlefields.org/learn/revolutionary-war/battles/saratoga',
      publisher: 'American Battlefield Trust',
    },
  ],
};

const yorktown: EraEvent = {
  id: 'yorktown_1781',
  date: '1781-10-19',
  precision: 'day',
  title: 'Siege of Yorktown',
  kind: 'siege',
  fronts: ['americas'],
  countries: ['United States', 'France', 'Britain'],
  figures: ['charles_cornwallis'],
  note: 'One account dates the siege from 28 September 1781 and calls it the decisive engagement of the American Revolution. Another says that in March 1782 Parliament resolved not to continue the war.',
  levels: {
    primary: {
      cause: 'Lord Cornwallis’s British army was at Yorktown, and American and French forces closed the siege.',
      what: 'On 19 October 1781 Cornwallis’s army marched out of Yorktown and surrendered.',
      consequence: 'The British army under Cornwallis surrendered, and the siege of Yorktown was over.',
    },
    secondary: {
      cause: 'Cornwallis held a British army at Yorktown in Virginia. American forces and their French allies besieged it.',
      what: 'On 19 October 1781 that army marched out and surrendered. The capitulation took place outside Yorktown.',
      consequence: 'The siege ended with the surrender of Cornwallis’s army. Yorktown was no longer a British hold.',
    },
    university: {
      cause: 'Lord Cornwallis commanded the British army at Yorktown. American and French forces conducted the siege against him in 1781.',
      what: 'On 19 October 1781 Cornwallis’s army marched out between the allied lines and surrendered. That day is the capitulation.',
      consequence: 'The surrender ended the siege. Cornwallis’s army left the field as prisoners of the allied forces.',
    },
  },
  sources: [
    {
      url: 'https://www.nps.gov/york/learn/historyculture/history-of-the-siege.htm',
      publisher: 'National Park Service',
    },
    {
      url: 'https://www.battlefields.org/learn/revolutionary-war/battles/yorktown',
      publisher: 'American Battlefield Trust',
    },
    { url: 'https://en.wikipedia.org/wiki/Siege_of_Yorktown', publisher: 'Wikipedia' },
  ],
};

const alamo: EraEvent = {
  id: 'alamo_1836',
  date: '1836-03-06',
  precision: 'day',
  title: 'Battle of the Alamo',
  kind: 'battle',
  fronts: ['americas'],
  countries: ['Mexico', 'Texas'],
  figures: ['antonio_lopez_de_santa_anna'],
  note: 'One account times the assault at about 5:00 a.m. and prints about 1,800 assault troops. The other dates the siege from 23 February to 6 March 1836.',
  levels: {
    primary: {
      cause: 'Antonio López de Santa Anna led Mexican troops against the Alamo at San Antonio.',
      what: 'On 6 March 1836 his columns assaulted the Alamo, and the defence was overcome.',
      consequence: 'Santa Anna’s army took the Alamo, and the place was no longer held against him.',
    },
    secondary: {
      cause: 'Mexican troops under Antonio López de Santa Anna attacked the Alamo at San Antonio during the fighting of 1836.',
      what: 'On 6 March 1836 Santa Anna’s columns assaulted the walls. By the end of the assault the Alamo had been taken.',
      consequence: 'The Alamo was in Mexican hands. The defenders had not held it against Santa Anna’s army.',
    },
    university: {
      cause: 'Antonio López de Santa Anna commanded the Mexican force at the Alamo, the post at San Antonio. The assault belongs to the Texas fighting of 1836.',
      what: 'On 6 March 1836 his columns attacked the Alamo from several directions, and the defence failed. The day is 6 March in both accounts.',
      consequence: 'Santa Anna’s army occupied the Alamo after the assault. The mission was no longer a post held against Mexico.',
    },
  },
  sources: [
    {
      url: 'https://www.tshaonline.org/handbook/entries/alamo-battle-of-the',
      publisher: 'Texas State Historical Association',
    },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_the_Alamo', publisher: 'Wikipedia' },
  ],
};

const gettysburg: EraEvent = {
  id: 'gettysburg_1863',
  date: '1863-07-01',
  precision: 'day',
  title: 'Battle of Gettysburg',
  kind: 'battle',
  fronts: ['americas'],
  countries: ['United States', 'Confederacy'],
  figures: ['robert_e_lee'],
  note: 'One account calls Gettysburg the turning point of the Civil War and prints a single-hour loss of over 5,000 for Lee. The other says the war did not end there, and it does not print that total. The fighting ran from 1 to 3 July 1863.',
  levels: {
    primary: {
      cause: 'Robert E. Lee’s Confederate army and the Federal army met at Gettysburg in Pennsylvania.',
      what: 'From 1 to 3 July 1863 the armies fought at Gettysburg, and a Confederate attack on the last day failed.',
      consequence: 'The Confederate attack failed, and the battle at Gettysburg ended in a Union victory.',
    },
    secondary: {
      cause: 'Lee led the Confederate army into Pennsylvania. The Federal army met him at Gettysburg.',
      what: 'The battle ran from 1 to 3 July 1863. On the third day a Confederate attack against the Federal line failed.',
      consequence: 'Gettysburg ended as a Union victory. Lee’s army had not taken the field.',
    },
    university: {
      cause: 'Robert E. Lee commanded the Confederate army at Gettysburg, Pennsylvania, against the Federal Army of the Potomac.',
      what: 'Fighting opened on 1 July 1863 and continued through 3 July. On the last day Lee’s attack on the Federal line failed.',
      consequence: 'The failed attack ended the battle in a Union victory. Lee’s army did not remain in possession of the field.',
    },
  },
  sources: [
    {
      url: 'https://www.nps.gov/gett/learn/historyculture/gettysburg-overview.htm',
      publisher: 'National Park Service',
    },
    {
      url: 'https://www.battlefields.org/learn/civil-war/battles/gettysburg',
      publisher: 'American Battlefield Trust',
    },
  ],
};

const falklands: EraEvent = {
  id: 'falklands_1982',
  date: '1982-04-02',
  precision: 'day',
  title: 'Falklands War',
  kind: 'invasion',
  fronts: ['americas'],
  countries: ['Argentina', 'Britain'],
  figures: [],
  note: 'One account dates the war from 2 April to 14 June 1982 and calls the result a British victory. The other describes the British effort to retake the islands and does not print that closing day.',
  levels: {
    primary: {
      cause: 'The Falkland Islands were a British territory in the South Atlantic, and Argentina moved to take them.',
      what: 'On 2 April 1982 Argentine forces invaded the islands, and Britain sent a task force to retake them.',
      consequence: 'British soldiers and ships were sent to recover the Falkland Islands from Argentina.',
    },
    secondary: {
      cause: 'Argentina seized the Falkland Islands, a British overseas territory, by a surprise invasion in the South Atlantic.',
      what: 'On 2 April 1982 Argentine forces invaded. Britain dispatched a naval task force to retake the islands.',
      consequence: 'British troops joined that force. The campaign was the recovery of the Falkland Islands.',
    },
    university: {
      cause: 'The Falkland Islands were British territory. On 2 April 1982 Argentina invaded them, which both accounts treat as the start of the war.',
      what: 'Britain sent a naval task force, and British soldiers sailed to retake the islands from the Argentine forces.',
      consequence: 'The invasion committed both countries to a war in the South Atlantic. The closing day of that war is printed in only one account.',
    },
  },
  sources: [
    { url: 'https://www.nam.ac.uk/explore/british-army-and-falklands-war', publisher: 'National Army Museum' },
    { url: 'https://en.wikipedia.org/wiki/Falklands_War', publisher: 'Wikipedia' },
  ],
};

function place(
  id: string,
  name: string,
  eventId: string,
  from: string,
  mover: string,
  summary: string,
  lat: number,
  lng: number,
  sources: EraLine['sources']
): { line: EraLine; link: EraLink } {
  const line: EraLine = {
    id,
    name,
    from,
    to: from,
    domain: 'land',
    mover,
    summary,
    waypoints: [{ name, lat, lng }],
    sources,
  };
  return { line, link: { lineId: id, eventId, at: 0 } };
}

const placed = [
  place(
    'tenochtitlan_1521_place',
    'Tenochtitlán',
    tenochtitlan.id,
    '1521-08-13',
    'Spain',
    'On 13 August 1521 Spanish forces under Hernán Cortés captured Tenochtitlán, the Aztec capital.',
    19.4326296,
    -99.1331785,
    tenochtitlan.sources
  ),
  place(
    'cajamarca_1532_place',
    'Cajamarca',
    cajamarca.id,
    '1532-11-16',
    'Spain',
    'On 16 November 1532 Francisco Pizarro captured the Inca emperor Atahualpa at Cajamarca.',
    -7.1566682,
    -78.517306,
    cajamarca.sources
  ),
  place(
    'quebec_1759_place',
    'Quebec',
    quebec.id,
    '1759-09-13',
    'Britain',
    'On 13 September 1759 Wolfe’s British army defeated Montcalm’s French army at Quebec.',
    46.8137431,
    -71.2084061,
    quebec.sources
  ),
  place(
    'saratoga_1777_place',
    'Saratoga',
    saratoga.id,
    '1777-09-19',
    'United States',
    'In September 1777 the American army defeated Burgoyne’s British force at Saratoga, New York.',
    43.0833231,
    -73.8712155,
    saratoga.sources
  ),
  place(
    'yorktown_1781_place',
    'Yorktown',
    yorktown.id,
    '1781-10-19',
    'United States',
    'On 19 October 1781 Cornwallis’s British army surrendered at Yorktown.',
    37.2356655,
    -76.5136495,
    yorktown.sources
  ),
  place(
    'alamo_1836_place',
    'The Alamo',
    alamo.id,
    '1836-03-06',
    'Mexico',
    'On 6 March 1836 Santa Anna’s army took the Alamo at San Antonio.',
    29.4260191,
    -98.4858875,
    alamo.sources
  ),
  place(
    'gettysburg_1863_place',
    'Gettysburg',
    gettysburg.id,
    '1863-07-01',
    'United States',
    'From 1 to 3 July 1863 the Union army defeated Lee’s Confederate army at Gettysburg.',
    39.8308973,
    -77.231012,
    gettysburg.sources
  ),
  place(
    'falklands_1982_place',
    'Falkland Islands',
    falklands.id,
    '1982-04-02',
    'Argentina',
    'On 2 April 1982 Argentina invaded the Falkland Islands, and Britain sent a task force to retake them.',
    -51.9492937,
    -59.5383657,
    falklands.sources
  ),
];

export const EARLY_MODERN_AMERICAS: EraEvent[] = [tenochtitlan, cajamarca, quebec, saratoga, yorktown];
export const LONG_NINETEENTH_AMERICAS: EraEvent[] = [alamo, gettysburg];
export const SINCE_1945_AMERICAS: EraEvent[] = [falklands];

const earlyIds = new Set(EARLY_MODERN_AMERICAS.map((event) => event.id));
const nineteenthIds = new Set(LONG_NINETEENTH_AMERICAS.map((event) => event.id));

export const EARLY_MODERN_LINES: EraLine[] = placed
  .filter((item) => earlyIds.has(item.link.eventId))
  .map((item) => item.line);
export const EARLY_MODERN_LINKS: EraLink[] = placed
  .filter((item) => earlyIds.has(item.link.eventId))
  .map((item) => item.link);
export const LONG_NINETEENTH_LINES: EraLine[] = placed
  .filter((item) => nineteenthIds.has(item.link.eventId))
  .map((item) => item.line);
export const LONG_NINETEENTH_LINKS: EraLink[] = placed
  .filter((item) => nineteenthIds.has(item.link.eventId))
  .map((item) => item.link);
export const SINCE_1945_LINES: EraLine[] = placed
  .filter((item) => item.link.eventId === falklands.id)
  .map((item) => item.line);
export const SINCE_1945_LINKS: EraLink[] = placed
  .filter((item) => item.link.eventId === falklands.id)
  .map((item) => item.link);
