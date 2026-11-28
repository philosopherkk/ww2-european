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

const haroldHardrada: EraFigure = {
  id: 'harold_hardrada',
  name: 'Harold Hardrada',
  role: 'ruler',
  country: 'Norway',
  allegiance: 'Norway',
  note: 'One account spells him Harold Hardrada. The other spells him Harald Hardrada.',
  bio: {
    primary:
      'On 25 September 1066 King Harold defeated Hardrada, King of Norway, at Stamford Bridge, and Hardrada was killed.',
    secondary:
      'Hardrada, King of Norway, came to take the English throne, with Tostig beside him. On 25 September 1066 King Harold defeated that army at Stamford Bridge. Hardrada was killed.',
    university:
      'One account spells him Harold Hardrada, and the other Harald Hardrada. He was King of Norway, and he came for the English throne with Tostig. On 25 September 1066 he was defeated at Stamford Bridge and killed.',
  },
  sources: [
    { url: 'https://www.britishbattles.com/norman-conquest/battle-of-stamford-bridge/', publisher: 'British Battles' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Stamford_Bridge', publisher: 'Wikipedia' },
  ],
};

const tostig: EraFigure = {
  id: 'tostig',
  name: 'Tostig',
  role: 'commander',
  country: 'England',
  allegiance: 'Norway',
  note: 'One account gives him the family name Godwinson. Another calls him an earl.',
  bio: {
    primary:
      'On 25 September 1066 Tostig, brother of King Harold, was killed at Stamford Bridge beside Hardrada of Norway.',
    secondary:
      'Tostig, King Harold’s brother, joined Hardrada of Norway in the attempt on the English throne. On 25 September 1066 they were defeated at Stamford Bridge. Tostig was killed.',
    university:
      'Tostig was the brother of the English king, and he fought with Hardrada of Norway. On 25 September 1066 King Harold defeated them at Stamford Bridge, and Tostig was killed.',
  },
  sources: [
    { url: 'https://www.britishbattles.com/norman-conquest/battle-of-stamford-bridge/', publisher: 'British Battles' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Stamford_Bridge', publisher: 'Wikipedia' },
  ],
};

export const HIGH_MEDIEVAL_FIGURES: EraFigure[] = [
  williamOfNormandy,
  haroldOfEngland,
  haroldHardrada,
  tostig,
];

const robertTheBruce: EraFigure = {
  id: 'robert_the_bruce',
  name: 'Robert the Bruce',
  role: 'ruler',
  country: 'Scotland',
  allegiance: 'Scotland',
  note: 'One account also calls him Robert de Bruce. The other also calls him King Robert I.',
  bio: {
    primary:
      'On 23 and 24 June 1314 Robert the Bruce, King of Scots, led the army that defeated the English at Bannockburn.',
    secondary:
      'Robert the Bruce was King of Scots. On 23 and 24 June 1314 the Scottish army he led fought the English at Bannockburn and defeated them.',
    university:
      'Robert the Bruce, King of Scots, commanded the Scottish army at Bannockburn against the English army of Edward II. The fighting ran across 23 and 24 June 1314. The result was a Scottish victory.',
  },
  sources: [
    {
      url: 'https://www.britishbattles.com/scottish-war-of-independence/battle-of-bannockburn/',
      publisher: 'British Battles',
    },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Bannockburn', publisher: 'Wikipedia' },
  ],
};

const edwardIII: EraFigure = {
  id: 'edward_iii',
  name: 'Edward III',
  role: 'ruler',
  country: 'England',
  allegiance: 'England',
  note: 'One account spells the battlefield Creçy. The others spell it Crécy.',
  bio: {
    primary:
      'On 26 August 1346 King Edward III’s English army defeated the French at Crécy in the Hundred Years War.',
    secondary:
      'Edward III led an English army into France in the Hundred Years War. On 26 August 1346 that army defeated the French at Crécy.',
    university:
      'Edward III commanded the English army at Crécy. On 26 August 1346 it defeated the French army of Philip VI in the Hundred Years War. The result was an English victory.',
  },
  sources: [
    { url: 'https://www.britishbattles.com/one-hundred-years-war/battle-of-crecy/', publisher: 'British Battles' },
    { url: 'https://www.encyclopedia.com/history/modern-europe/wars-and-battles/battle-crecy', publisher: 'Encyclopedia.com' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Cr%C3%A9cy', publisher: 'Wikipedia' },
  ],
};

const henryTudor: EraFigure = {
  id: 'henry_tudor',
  name: 'Henry Tudor',
  role: 'commander',
  country: 'England',
  allegiance: 'England',
  note: 'One account also calls him Earl of Richmond.',
  bio: {
    primary:
      'On 22 August 1485 Henry Tudor defeated King Richard III at Bosworth Field in the Wars of the Roses, and Richard died.',
    secondary:
      'Henry Tudor met King Richard III in the Wars of the Roses. On 22 August 1485 Tudor’s army defeated Richard at Bosworth Field. Richard died, and the Tudor dynasty was established.',
    university:
      'Henry Tudor led the army that fought King Richard III at Bosworth Field in the Wars of the Roses. On 22 August 1485 he defeated Richard, who died in the battle. That victory established the Tudor dynasty.',
  },
  sources: [
    { url: 'https://www.britishbattles.com/wars-of-the-roses/battle-of-bosworth-field/', publisher: 'British Battles' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Bosworth_Field', publisher: 'Wikipedia' },
  ],
};

const richardIII: EraFigure = {
  id: 'richard_iii',
  name: 'Richard III',
  role: 'ruler',
  country: 'England',
  allegiance: 'England',
  note: 'One account calls him the last English monarch to fall in battle.',
  bio: {
    primary:
      'On 22 August 1485 King Richard III was defeated by Henry Tudor at Bosworth Field in the Wars of the Roses, and he died.',
    secondary:
      'King Richard III fought Henry Tudor at Bosworth Field in the Wars of the Roses. On 22 August 1485 Richard’s army was defeated, and Richard died.',
    university:
      'Richard III was the English king who fought Henry Tudor at Bosworth Field. On 22 August 1485, in the Wars of the Roses, Tudor’s army defeated him. Richard died in the battle.',
  },
  sources: [
    { url: 'https://www.britishbattles.com/wars-of-the-roses/battle-of-bosworth-field/', publisher: 'British Battles' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Bosworth_Field', publisher: 'Wikipedia' },
  ],
};

export const LATE_MEDIEVAL_FIGURES: EraFigure[] = [
  robertTheBruce,
  edwardIII,
  henryV,
  henryTudor,
  richardIII,
];

const dukeOfMarlborough: EraFigure = {
  id: 'duke_of_marlborough',
  name: 'Duke of Marlborough',
  role: 'commander',
  country: 'England',
  allegiance: 'England',
  note: 'One account calls him captain-general of the English and Dutch forces, and gives his name as John Churchill. The day is printed as 13 August 1704 and as 2 August 1704. One page prints both and marks 2 August as old style.',
  bio: {
    primary:
      'In August 1704 the Duke of Marlborough led the allied army that defeated the French force at Blenheim in the War of the Spanish Succession.',
    secondary:
      'The Duke of Marlborough led the allied army in the War of the Spanish Succession. In August 1704 that army defeated the French force at Blenheim.',
    university:
      'John Churchill, Duke of Marlborough, commanded the allied army at Blenheim in the War of the Spanish Succession. In August 1704 that army defeated the French force.',
  },
  sources: [
    { url: 'https://www.nam.ac.uk/explore/battle-blenheim', publisher: 'National Army Museum' },
    { url: 'https://www.britishbattles.com/war-of-the-spanish-succession/battle-of-blenheim/', publisher: 'British Battles' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Blenheim', publisher: 'Wikipedia' },
  ],
};

const louisXIV: EraFigure = {
  id: 'louis_xiv',
  name: 'Louis XIV',
  role: 'ruler',
  country: 'France',
  allegiance: 'France',
  note: 'The day of the defeat is printed as 13 August 1704 and as 2 August 1704. He is not named as the commander on the field.',
  bio: {
    primary:
      'Louis XIV was King of France. In August 1704 the French force at Blenheim was defeated in the War of the Spanish Succession.',
    secondary:
      'Louis XIV was King of France in the War of the Spanish Succession. In August 1704 the French force at Blenheim was defeated by the allied army.',
    university:
      'Louis XIV was King of France during the War of the Spanish Succession. In August 1704 the French force at Blenheim, with its Bavarian ally, was defeated by the allied army.',
  },
  sources: [
    { url: 'https://www.nam.ac.uk/explore/battle-blenheim', publisher: 'National Army Museum' },
    { url: 'https://www.britishbattles.com/war-of-the-spanish-succession/battle-of-blenheim/', publisher: 'British Battles' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Blenheim', publisher: 'Wikipedia' },
  ],
};

const charlesEdwardStuart: EraFigure = {
  id: 'charles_edward_stuart',
  name: 'Charles Edward Stuart',
  role: 'commander',
  country: 'Jacobites',
  allegiance: 'Jacobites',
  note: 'One account calls the battle the climax of the rising of 1745–46. Another says the defeat ended the rising of 1745.',
  bio: {
    primary:
      'On 16 April 1746 Prince Charles Edward Stuart’s Jacobite army was defeated by the Duke of Cumberland at Culloden, near Inverness.',
    secondary:
      'Prince Charles Edward Stuart led a Jacobite army that sought the throne. On 16 April 1746 the Duke of Cumberland’s British army defeated that force at Culloden, near Inverness.',
    university:
      'Prince Charles Edward Stuart led the Jacobite army against the Duke of Cumberland. On 16 April 1746 that army was defeated at Culloden, near Inverness. The fight belongs to the Jacobite rising of 1745.',
  },
  sources: [
    { url: 'https://www.nam.ac.uk/explore/battle-culloden', publisher: 'National Army Museum' },
    { url: 'https://www.britishbattles.com/jacobite-rebellion/battle-of-culloden/', publisher: 'British Battles' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Culloden', publisher: 'Wikipedia' },
  ],
};

const dukeOfCumberland: EraFigure = {
  id: 'duke_of_cumberland',
  name: 'Duke of Cumberland',
  role: 'commander',
  country: 'Britain',
  allegiance: 'Britain',
  note: 'One account calls him the son of George II.',
  bio: {
    primary:
      'On 16 April 1746 the Duke of Cumberland’s British army defeated Prince Charles Edward Stuart’s Jacobite force at Culloden, near Inverness.',
    secondary:
      'The Duke of Cumberland commanded the British army sent against the Jacobite rising. On 16 April 1746 he defeated Prince Charles Edward Stuart at Culloden, near Inverness.',
    university:
      'The Duke of Cumberland led the British force at Culloden. On 16 April 1746 he defeated the Jacobite army of Prince Charles Edward Stuart near Inverness.',
  },
  sources: [
    { url: 'https://www.nam.ac.uk/explore/battle-culloden', publisher: 'National Army Museum' },
    { url: 'https://www.britishbattles.com/jacobite-rebellion/battle-of-culloden/', publisher: 'British Battles' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Culloden', publisher: 'Wikipedia' },
  ],
};

const thomasFairfax: EraFigure = {
  id: 'thomas_fairfax',
  name: 'Sir Thomas Fairfax',
  role: 'commander',
  country: 'England',
  allegiance: 'Parliament',
  note: 'Both accounts also say the royalist army was destroyed.',
  bio: {
    primary:
      'On 14 June 1645 Sir Thomas Fairfax’s New Model Army defeated King Charles I’s royalist army at Naseby in Northamptonshire.',
    secondary:
      'Sir Thomas Fairfax led Parliament’s New Model Army in the English Civil War. On 14 June 1645 that army defeated King Charles I’s royalist force at Naseby in Northamptonshire.',
    university:
      'Sir Thomas Fairfax commanded the Parliamentary New Model Army. On 14 June 1645, in the English Civil War, he defeated the royalist army of King Charles I at Naseby in Northamptonshire.',
  },
  sources: [
    { url: 'https://www.britishbattles.com/english-civil-war/battle-of-naseby/', publisher: 'British Battles' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Naseby', publisher: 'Wikipedia' },
  ],
};

const charlesI: EraFigure = {
  id: 'charles_i',
  name: 'Charles I',
  role: 'ruler',
  country: 'England',
  allegiance: 'Royalists',
  note: 'Both accounts also say his royalist army was destroyed.',
  bio: {
    primary:
      'On 14 June 1645 King Charles I’s royalist army was defeated by Sir Thomas Fairfax’s New Model Army at Naseby in Northamptonshire.',
    secondary:
      'King Charles I’s royalist army fought in the English Civil War. On 14 June 1645 Sir Thomas Fairfax’s New Model Army defeated that force at Naseby in Northamptonshire.',
    university:
      'Charles I was the king whose royalist army met Sir Thomas Fairfax at Naseby. On 14 June 1645, in the English Civil War, the New Model Army defeated that royalist force in Northamptonshire.',
  },
  sources: [
    { url: 'https://www.britishbattles.com/english-civil-war/battle-of-naseby/', publisher: 'British Battles' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Naseby', publisher: 'Wikipedia' },
  ],
};

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
  dukeOfMarlborough,
  louisXIV,
  charlesEdwardStuart,
  dukeOfCumberland,
  thomasFairfax,
  charlesI,
];

export const LONG_NINETEENTH_FIGURES: EraFigure[] = [santaAnna, robertELee];
