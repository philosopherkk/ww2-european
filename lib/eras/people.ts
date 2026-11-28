import type { EraFigure } from '@/lib/eras/types';

const williamOfNormandy: EraFigure = {
  id: 'william_of_normandy',
  name: 'William, Duke of Normandy',
  role: 'commander',
  country: 'Normandy',
  allegiance: 'Normandy',
  note: 'One account calls him William the Conqueror.',
  bio: {
    primary:
      'On 14 October 1066 William, Duke of Normandy, defeated King Harold’s army at Hastings.',
    secondary:
      'William, Duke of Normandy, brought his army against King Harold at Hastings. On 14 October 1066 he defeated Harold’s English army.',
    university:
      'William is named Duke of Normandy. On 14 October 1066 his army defeated King Harold at Hastings, and the result was his victory. Harold was killed in that defeat.',
  },
  sources: [
    { url: 'https://www.britishbattles.com/norman-conquest/battle-of-hastings/', publisher: 'British Battles' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Hastings', publisher: 'Wikipedia' },
    { url: 'https://www.encyclopedia.com/history/modern-europe/wars-and-battles/battle-hastings', publisher: 'Encyclopedia.com' },
  ],
};

const haroldOfEngland: EraFigure = {
  id: 'harold_of_england',
  name: 'King Harold',
  role: 'ruler',
  country: 'England',
  allegiance: 'England',
  note: 'The accounts do not spell his family name the same way.',
  bio: {
    primary:
      'King Harold was killed at Hastings on 14 October 1066, when William, Duke of Normandy, defeated his army.',
    secondary:
      'King Harold led the English army that met William, Duke of Normandy, at Hastings. On 14 October 1066 that army was defeated, and Harold was killed.',
    university:
      'Harold is named king of the English side at Hastings. On 14 October 1066 the army of William, Duke of Normandy, defeated him there. Harold was killed in the battle.',
  },
  sources: [
    { url: 'https://www.britishbattles.com/norman-conquest/battle-of-hastings/', publisher: 'British Battles' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Hastings', publisher: 'Wikipedia' },
  ],
};

const henryV: EraFigure = {
  id: 'henry_v',
  name: 'Henry V',
  role: 'ruler',
  country: 'England',
  allegiance: 'England',
  bio: {
    primary:
      'On 25 October 1415 King Henry V’s English army defeated the French king’s army at Agincourt.',
    secondary:
      'In the Hundred Years War, King Henry V led the English army at Agincourt. On 25 October 1415 his army defeated the French king’s army.',
    university:
      'Henry V commanded the English army in the Hundred Years War. On 25 October 1415, at Agincourt, that army defeated the French king’s army.',
  },
  sources: [
    { url: 'https://www.britishbattles.com/one-hundred-years-war/battle-of-agincourt/', publisher: 'British Battles' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Agincourt', publisher: 'Wikipedia' },
  ],
};

const philipII: EraFigure = {
  id: 'philip_ii',
  name: 'Philip II',
  role: 'ruler',
  country: 'Spain',
  allegiance: 'Spain',
  bio: {
    primary: 'In 1588 Philip II of Spain sent a fleet to England to overthrow Elizabeth I.',
    secondary:
      'Philip II of Spain assembled a fleet in 1588 and sent it to invade England. He meant to overthrow Elizabeth I. The fleet did not remove her from the throne.',
    university:
      'Philip II of Spain prepared the 1588 fleet as an invasion of England. He meant to overthrow Elizabeth I and to restore Catholicism. The voyage did not take her throne.',
  },
  sources: [
    { url: 'https://www.history.com/articles/spanish-armada', publisher: 'History.com' },
    { url: 'https://en.wikipedia.org/wiki/Spanish_Armada', publisher: 'Wikipedia' },
  ],
};

const elizabethI: EraFigure = {
  id: 'elizabeth_i',
  name: 'Elizabeth I',
  role: 'ruler',
  country: 'England',
  allegiance: 'England',
  bio: {
    primary:
      'In 1588 Philip II sent a fleet to overthrow Queen Elizabeth I of England.',
    secondary:
      'Queen Elizabeth I ruled England when Philip II of Spain sent a fleet against her in 1588. The aim was to overthrow her. The fleet did not remove her from the throne.',
    university:
      'Elizabeth I was queen of England in 1588. Philip II of Spain sent a fleet to invade her kingdom and to overthrow her, and to restore Catholicism. That fleet did not take her throne.',
  },
  sources: [
    { url: 'https://www.history.com/articles/spanish-armada', publisher: 'History.com' },
    { url: 'https://en.wikipedia.org/wiki/Spanish_Armada', publisher: 'Wikipedia' },
  ],
};

const hernanCortes: EraFigure = {
  id: 'hernan_cortes',
  name: 'Hernán Cortés',
  role: 'commander',
  country: 'Spain',
  allegiance: 'Spain',
  bio: {
    primary:
      'On 13 August 1521 Hernán Cortés’s Spanish force captured Tenochtitlán, the capital of the Aztec empire.',
    secondary:
      'Hernán Cortés led the Spanish force at Tenochtitlán. On 13 August 1521 that force captured the city, the capital of the Aztec empire.',
    university:
      'Hernán Cortés commanded the Spanish force that took Tenochtitlán. The capture is dated 13 August 1521. The city was the capital of the Aztec empire.',
  },
  sources: [
    { url: 'https://www.history.com/this-day-in-history/august-13/aztec-capital-falls-to-cortes', publisher: 'History.com' },
    { url: 'https://en.wikipedia.org/wiki/Fall_of_Tenochtitlan', publisher: 'Wikipedia' },
  ],
};

const franciscoPizarro: EraFigure = {
  id: 'francisco_pizarro',
  name: 'Francisco Pizarro',
  role: 'commander',
  country: 'Spain',
  allegiance: 'Spain',
  bio: {
    primary:
      'On 16 November 1532 Francisco Pizarro’s men captured the Inca emperor Atahualpa at Cajamarca.',
    secondary:
      'Francisco Pizarro was the Spanish commander at Cajamarca. On 16 November 1532 his men captured Atahualpa, the Inca emperor.',
    university:
      'Francisco Pizarro commanded the Spanish force at Cajamarca in Peru. On 16 November 1532 his men captured the Inca emperor Atahualpa.',
  },
  sources: [
    { url: 'https://www.history.com/this-day-in-history/november-16/pizarro-traps-incan-emperor-atahualpa', publisher: 'History.com' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Cajamarca', publisher: 'Wikipedia' },
  ],
};

const atahualpa: EraFigure = {
  id: 'atahualpa',
  name: 'Atahualpa',
  role: 'ruler',
  country: 'Inca empire',
  allegiance: 'Inca empire',
  note: 'One account says he was later killed. The other does not.',
  bio: {
    primary: 'On 16 November 1532 Atahualpa was captured at Cajamarca by the men of Francisco Pizarro.',
    secondary:
      'Atahualpa, the Inca emperor, was at Cajamarca on 16 November 1532. Francisco Pizarro’s men captured him there.',
    university:
      'Atahualpa was the Inca emperor taken at Cajamarca. On 16 November 1532 the men of Francisco Pizarro captured him.',
  },
  sources: [
    { url: 'https://www.history.com/this-day-in-history/november-16/pizarro-traps-incan-emperor-atahualpa', publisher: 'History.com' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Cajamarca', publisher: 'Wikipedia' },
  ],
};

const jamesWolfe: EraFigure = {
  id: 'james_wolfe',
  name: 'James Wolfe',
  role: 'commander',
  country: 'Britain',
  allegiance: 'Britain',
  bio: {
    primary:
      'On 13 September 1759 General James Wolfe’s army defeated the French at Quebec, and Wolfe died in the battle.',
    secondary:
      'General James Wolfe commanded the British army at Quebec. On 13 September 1759 his army defeated the French army of the Marquis de Montcalm, and Wolfe was killed.',
    university:
      'James Wolfe commanded the British troops at Quebec. On 13 September 1759 they defeated the French army under the Marquis de Montcalm. Wolfe was mortally wounded and died in the battle.',
  },
  sources: [
    { url: 'https://www.britishbattles.com/french-and-indian-war/battle-of-quebec-1759/', publisher: 'British Battles' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_the_Plains_of_Abraham', publisher: 'Wikipedia' },
  ],
};

const marquisDeMontcalm: EraFigure = {
  id: 'marquis_de_montcalm',
  name: 'Marquis de Montcalm',
  role: 'commander',
  country: 'France',
  allegiance: 'France',
  note: 'One account says he died the morning after the battle.',
  bio: {
    primary:
      'The Marquis de Montcalm commanded the French army at Quebec on 13 September 1759, and he died of his wounds.',
    secondary:
      'The Marquis de Montcalm led the French army against General Wolfe at Quebec. On 13 September 1759 that army was defeated, and Montcalm died of his wounds.',
    university:
      'The Marquis de Montcalm commanded the French at Quebec on 13 September 1759. Wolfe’s British army defeated him. Montcalm was mortally wounded in the battle and died of that wound.',
  },
  sources: [
    { url: 'https://www.britishbattles.com/french-and-indian-war/battle-of-quebec-1759/', publisher: 'British Battles' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_the_Plains_of_Abraham', publisher: 'Wikipedia' },
  ],
};

const johnBurgoyne: EraFigure = {
  id: 'john_burgoyne',
  name: 'John Burgoyne',
  role: 'commander',
  country: 'Britain',
  allegiance: 'Britain',
  note: 'The accounts do not agree which day he surrendered, or whether 19 September was an American victory.',
  bio: {
    primary:
      'General John Burgoyne led the British army at Saratoga in 1777, and the campaign was a turning point.',
    secondary:
      'General John Burgoyne commanded the British army that fought at Saratoga in September 1777. He surrendered after that campaign. The result is called a turning point in the American Revolution.',
    university:
      'John Burgoyne commanded the British army at Saratoga in 1777. Fighting there included 19 September. He surrendered, and the campaign is recorded as a turning point in the American Revolution. The closing day is not the same in every account.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battles_of_Saratoga', publisher: 'Wikipedia' },
    { url: 'https://www.battlefields.org/learn/revolutionary-war/battles/saratoga', publisher: 'American Battlefield Trust' },
  ],
};

const charlesCornwallis: EraFigure = {
  id: 'charles_cornwallis',
  name: 'Charles Cornwallis',
  role: 'commander',
  country: 'Britain',
  allegiance: 'Britain',
  bio: {
    primary:
      'On 19 October 1781 Cornwallis’s army marched out of Yorktown, and the British surrendered.',
    secondary:
      'Cornwallis held a British army at Yorktown. On 19 October 1781 that army marched out, and the British surrendered. The siege ended with that capitulation.',
    university:
      'Cornwallis commanded the British army besieged at Yorktown. On 19 October 1781 his army marched out between the allied lines and the British surrendered. The siege dates in one account run from 28 September to that day.',
  },
  sources: [
    { url: 'https://www.nps.gov/york/learn/historyculture/history-of-the-siege.htm', publisher: 'National Park Service' },
    { url: 'https://www.battlefields.org/learn/revolutionary-war/battles/yorktown', publisher: 'American Battlefield Trust' },
  ],
};

const robertELee: EraFigure = {
  id: 'robert_e_lee',
  name: 'Robert E. Lee',
  role: 'commander',
  country: 'Confederacy',
  allegiance: 'Confederacy',
  note: 'One account calls Gettysburg the turning point of the Civil War. Another says the war did not end there. A loss of over 5,000 in a single hour is printed in only one account.',
  bio: {
    primary:
      'Robert E. Lee’s Confederate army fought at Gettysburg from 1 to 3 July 1863, and the Union won.',
    secondary:
      'Robert E. Lee led the Confederate army at Gettysburg, Pennsylvania. The fighting ran from 1 to 3 July 1863. His attack failed, and the battle ended as a Union victory.',
    university:
      'Robert E. Lee commanded the Confederate army against the Federal army at Gettysburg. Fighting opened on 1 July 1863 and continued through 3 July. The attack on the last day failed, and the result was a Union victory.',
  },
  sources: [
    { url: 'https://www.nps.gov/gett/learn/historyculture/gettysburg-overview.htm', publisher: 'National Park Service' },
    { url: 'https://www.battlefields.org/learn/civil-war/battles/gettysburg', publisher: 'American Battlefield Trust' },
  ],
};

const santaAnna: EraFigure = {
  id: 'antonio_lopez_de_santa_anna',
  name: 'Antonio López de Santa Anna',
  role: 'commander',
  country: 'Mexico',
  allegiance: 'Mexico',
  bio: {
    primary:
      'On 6 March 1836 Antonio López de Santa Anna’s army assaulted the Alamo at San Antonio.',
    secondary:
      'Antonio López de Santa Anna, president of Mexico, led the Mexican troops at the Alamo. On 6 March 1836 his columns assaulted the post, and it was taken.',
    university:
      'Antonio López de Santa Anna was president of Mexico and commanded the Mexican force at the Alamo in San Antonio. On 6 March 1836 his army assaulted the walls. By the end of that assault the Alamo had been taken.',
  },
  sources: [
    { url: 'https://www.tshaonline.org/handbook/entries/alamo-battle-of-the', publisher: 'Texas State Historical Association' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_the_Alamo', publisher: 'Wikipedia' },
  ],
};

const arminius: EraFigure = {
  id: 'arminius',
  name: 'Arminius',
  role: 'leader',
  country: 'Germanic tribes',
  allegiance: 'Germanic tribes',
  note: 'One account calls him a Cheruscian noble. Another calls him a Germanic chieftain who had served with the Roman auxilia. The days 8 to 11 September are printed in only one account.',
  bio: {
    primary:
      'In September of the year 9, Arminius led Germanic tribes who defeated the Roman army of Varus in the Teutoburg Forest.',
    secondary:
      'Arminius led a coalition of Germanic tribes against the Roman army of Varus. In September of the year 9 they defeated that army in the Teutoburg Forest. Varus killed himself after the defeat.',
    university:
      'Arminius led the Germanic force that fought Varus in the Teutoburg Forest. In September of the year 9 that force defeated the Roman army. Both accounts record a Germanic victory, and both say that Varus killed himself.',
  },
  sources: [
    { url: 'https://www.livius.org/articles/battle/teutoburg-forest-9-ce/', publisher: 'Livius' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_the_Teutoburg_Forest', publisher: 'Wikipedia' },
  ],
};

const publiusVarus: EraFigure = {
  id: 'publius_varus',
  name: 'Varus',
  role: 'commander',
  country: 'Roman Empire',
  allegiance: 'Roman Empire',
  note: 'The accounts do not spell his family name the same way. One says he was forced to kill himself.',
  bio: {
    primary:
      'In September of the year 9, Varus’s Roman army was defeated by Arminius in the Teutoburg Forest, and Varus killed himself.',
    secondary:
      'Varus led the Roman army in the Teutoburg Forest. In September of the year 9 a Germanic force led by Arminius defeated that army. Varus killed himself.',
    university:
      'Varus was the Roman commander at the Teutoburg Forest. In September of the year 9 the Germanic force led by Arminius defeated his army. He killed himself after that defeat.',
  },
  sources: [
    { url: 'https://www.livius.org/articles/battle/teutoburg-forest-9-ce/', publisher: 'Livius' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_the_Teutoburg_Forest', publisher: 'Wikipedia' },
  ],
};

const valens: EraFigure = {
  id: 'valens',
  name: 'Valens',
  role: 'ruler',
  country: 'Roman Empire',
  allegiance: 'Roman Empire',
  note: 'One account calls him the East-Roman emperor and the winners Germanic tribes. Another calls him the Roman emperor and the result a Gothic victory.',
  bio: {
    primary:
      'On 9 August 378 the Roman emperor Valens was defeated near Adrianople, and he died in the battle.',
    secondary:
      'Valens, the Roman emperor, met Fritigern’s army near Adrianople. On 9 August 378 the Romans were defeated. Valens died in that battle.',
    university:
      'Valens is named as the Roman emperor who commanded near Adrianople. On 9 August 378 his army met the force led by Fritigern and was defeated. Valens died in the battle.',
  },
  sources: [
    { url: 'https://www.livius.org/articles/battle/adrianople/', publisher: 'Livius' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Adrianople', publisher: 'Wikipedia' },
  ],
};

const fritigern: EraFigure = {
  id: 'fritigern',
  name: 'Fritigern',
  role: 'leader',
  country: 'Germanic tribes',
  allegiance: 'Germanic tribes',
  note: 'One account calls his army Germanic rebels. Another calls the victory Gothic, and names Goths among those he led.',
  bio: {
    primary:
      'On 9 August 378 Fritigern led the army that defeated the Romans of the emperor Valens near Adrianople.',
    secondary:
      'Fritigern led the army that met the Roman emperor Valens near Adrianople. On 9 August 378 that army defeated the Romans. Valens died in the battle.',
    university:
      'Fritigern is named as the leader of the army that fought Valens near Adrianople. On 9 August 378 his army defeated the Romans, and Valens died. The accounts do not give his side the same name.',
  },
  sources: [
    { url: 'https://www.livius.org/articles/battle/adrianople/', publisher: 'Livius' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Adrianople', publisher: 'Wikipedia' },
  ],
};

export const ANTIQUITY_FIGURES: EraFigure[] = [arminius, publiusVarus, valens, fritigern];

const charlesMartel: EraFigure = {
  id: 'charles_martel',
  name: 'Charles Martel',
  role: 'commander',
  country: 'Franks',
  allegiance: 'Franks',
  note: 'One account prints the day as 10 October 732. The other gives October 732 and does not print a day.',
  bio: {
    primary:
      'In October 732 Charles Martel led a Frankish army that defeated Abd al-Rahman’s Umayyad force between Tours and Poitiers.',
    secondary:
      'Charles Martel led Frankish and Aquitanian troops against an Umayyad army. In October 732 they fought between Tours and Poitiers. His side won, and the Umayyad army retreated.',
    university:
      'Charles Martel led the Frankish and Aquitanian army. In October 732 it defeated the Umayyad army of Abd al-Rahman between Tours and Poitiers, and that army retreated. A claim that the battle decided the religion of Europe is printed in only one account.',
  },
  sources: [
    { url: 'https://www.thecollector.com/battle-of-tours/', publisher: 'TheCollector' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Tours', publisher: 'Wikipedia' },
  ],
};

const abdAlRahman: EraFigure = {
  id: 'abd_al_rahman',
  name: 'Abd al-Rahman',
  role: 'commander',
  country: 'Umayyad',
  allegiance: 'Umayyad',
  note: 'Both accounts also call him al-Ghafiqi. One prints the day as 10 October 732. The other gives October 732 and does not print a day.',
  bio: {
    primary:
      'In October 732 Abd al-Rahman led the Umayyad army that Charles Martel defeated between Tours and Poitiers, and he was killed.',
    secondary:
      'Abd al-Rahman commanded the Umayyad army at Tours. In October 732 Charles Martel’s Frankish force defeated him between Tours and Poitiers. He was killed, and his army retreated.',
    university:
      'Abd al-Rahman, also called al-Ghafiqi, led the Umayyad army. In October 732 Charles Martel’s Frankish and Aquitanian force defeated that army between Tours and Poitiers. Abd al-Rahman was killed, and the Umayyad army retreated.',
  },
  sources: [
    { url: 'https://www.thecollector.com/battle-of-tours/', publisher: 'TheCollector' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Tours', publisher: 'Wikipedia' },
  ],
};

export const EARLY_MEDIEVAL_FIGURES: EraFigure[] = [charlesMartel, abdAlRahman];

export const HIGH_MEDIEVAL_FIGURES: EraFigure[] = [williamOfNormandy, haroldOfEngland];

export const LATE_MEDIEVAL_FIGURES: EraFigure[] = [henryV];

export const EARLY_MODERN_FIGURES: EraFigure[] = [
  philipII,
  elizabethI,
  hernanCortes,
  franciscoPizarro,
  atahualpa,
  jamesWolfe,
  marquisDeMontcalm,
  johnBurgoyne,
  charlesCornwallis,
];

export const LONG_NINETEENTH_FIGURES: EraFigure[] = [santaAnna, robertELee];
