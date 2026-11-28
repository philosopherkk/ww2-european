import {
  LATE_MEDIEVAL_FILL_EVENTS,
  LATE_MEDIEVAL_FILL_FIGURES,
  LATE_MEDIEVAL_ROUND2_EVENTS,
  LATE_MEDIEVAL_ROUND2_FIGURES,
  LATE_MEDIEVAL_ROUND3_EVENTS,
  LATE_MEDIEVAL_ROUND3_FIGURES,
  LATE_MEDIEVAL_ROUND3_LINES,
  LATE_MEDIEVAL_ROUND3_LINKS,
  LATE_MEDIEVAL_ROUND4_EVENTS,
  LATE_MEDIEVAL_ROUND4_FIGURES,
  LATE_MEDIEVAL_ROUND4_LINES,
  LATE_MEDIEVAL_ROUND4_LINKS,
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
      cause: "Robert the Bruce led a Scottish army against the English army of King Edward II in the fight for Scotland.",
      what: "The armies fought on 23 and 24 June 1314 at Bannockburn, and the Scots defeated the English.",
      consequence: "The English army was beaten over those two days, and Robert the Bruce’s Scots held the field.",
    },
    secondary: {
      cause: "Robert the Bruce commanded the Scots in the war with England, and King Edward II brought an English army against him. The ground was Bannockburn. One page calls the struggle the First War of Scottish Independence. The other describes a summons to recover Scotland and does not use First. No strength is repeated, because the figures are not the same. The cause they share is Edward’s army coming against Bruce at Bannockburn.",
      what: "The fighting ran across 23 and 24 June 1314, not a single morning. Both pages treat those two days as the battle. The Scots under Bruce defeated the English under Edward II. One page follows the king away from the field once the day was lost. The other is content with the Scottish victory. Stirling is named in the sources and is not told as the same march in both, so it is not the action stated here. The action is the two-day defeat of the English at Bannockburn.",
      consequence: "It was a Scottish victory, and it is the landmark win of that war as both pages present it. Edward II’s army lost. Bruce’s force remained in the field. A flight towards a castle, and the death of a knight who turned back, are vivid in one page and not the shared result. What remains is the beaten English army and the Scots still holding their ground after 24 June 1314.",
    },
    university: {
      cause: "Robert the Bruce is the Scottish commander both narratives set at Bannockburn, and Edward II is the English king whose army came against him. One narrative names a first war of independence. The other speaks of a feudal summons and does not number the war, so the numeral is not the cause given here. Nor is any count of spears. A castle to be relieved appears in a single telling and is not copied into the cause. The cause the narratives allow is the armed meeting: Bruce’s Scots against the English host of Edward II, on ground both call Bannockburn.",
      what: "The calendars agree on a pair of days, 23 and 24 June 1314, and both refuse to collapse the battle into one dawn. Scottish victory is the result printed for that pair. One narrative then takes Edward from the field with a retainer at his bridle and sends another knight back to his death. The other does not tell that exit. Because the exit is single, the action stated is shorter. It is the two days of fighting and the defeat of the English army by the Scots under Bruce. Place-names along a road to the field that occur in only one narrative are left beside the road.",
      consequence: "Defeat lay with Edward II’s army, and the win with Bruce. Both narratives present Bannockburn as the Scots’ great success in that war, without requiring the same subtitle for the war. One narrative’s pursuit, a castle that would not take the king in, and the knight who returned and died are not in the other, so they do not close this result. The close they share is enough. After 24 June 1314 the English had lost, and the Scottish army under Robert the Bruce had not been driven off the field.",
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
      cause: "Edward III had led an English army into France in the Hundred Years’ War, and the French army came to meet him.",
      what: "On 26 August 1346 Edward III’s English army defeated the French of Philip VI at Crécy in Ponthieu.",
      consequence: "The French army lost at Crécy, and the English victory of that day stood.",
    },
    secondary: {
      cause: "The campaign was the Hundred Years’ War. Edward III landed in Normandy, and his army sacked Caen before it marched on. Philip VI’s French army moved to meet him. One page spells the field Creçy. The others spell Crécy, in Ponthieu. The day of the landing is not the same in every page, so it is not given here. The cause they share is Edward’s army in France, after that landing and the sack of Caen, and the French decision to fight.",
      what: "On 26 August 1346 Edward drew the English up at Crécy in Ponthieu and defeated Philip VI’s army. The Black Prince is named in the fighting by more than one page. Archers on the English side are in the accounts, though a claim that the longbow was then the dominant weapon is not told in the same words everywhere. Rain, Genoese crossbows, and a blind king of Bohemia are fuller than the shared sentence. The action both the battle narratives support is Edward’s victory over the French that day at Crécy.",
      consequence: "The battle was an English victory. One page calls it the first great land win of that war and then carries the army on to a siege of Calais. Another stops at the beaten French army. The siege is therefore not the result stated here. Philip VI’s host was defeated, and Edward III’s victory of 26 August 1346 stood.",
    },
    university: {
      cause: "Three narratives place Edward III in France during the Hundred Years’ War and bring Philip VI’s army against him. They agree he had come through Normandy and that Caen was sacked on the way. They do not agree the calendar day of the landing, one printing 11 July and another 12 July, so no landing day is used. The spelling Creçy on one page and Crécy on the others is the same field, which those pages also set in Ponthieu. A march almost to Paris, a bridge repaired, and a crossing of the Somme appear with more detail than every page shares, so they are not the cause. The cause is the campaign that carried Edward’s army from the Norman landing, by the sack of Caen, to a battle with Philip.",
      what: "The day of the battle is 26 August 1346 in each narrative. The ground is Crécy in Ponthieu. Edward commanded the English. Philip commanded the French. The Black Prince is named in the front of the fighting on pages that also name his father. Dismounted men-at-arms and archers are described, yet the order of the line is not one diagram, and no diagram is repeated. A windmill used as Edward’s post, rain on crossbow cords, and cannon are each vivid in a single telling or not phrased alike. They stay out. The course stated is the day’s battle and the English defeat of the French.",
      consequence: "Victory was Edward’s, and the French army of Philip VI was beaten. One narrative calls that success the first great English land victory of the war and follows it with the siege of Calais, surrendered the next year. Another names Calais as a later remnant of English rule and does not make the siege the result of this afternoon. The siege, the year 1347, and the boast of a first great win are therefore not copied into the result. What the narratives support together is narrower and firm. On 26 August 1346 the English won at Crécy, and the French army lost.",
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
      cause: "Henry V had brought an English army into France in the Hundred Years’ War, and after Harfleur he marched towards Calais.",
      what: "On 25 October 1415 the English defeated the French king’s army at Agincourt, which one page also calls Azincourt.",
      consequence: "The French army was beaten, and Henry V’s outnumbered English force had the victory.",
    },
    secondary: {
      cause: "Henry V’s English army was campaigning in France in the Hundred Years’ War. It had taken Harfleur, where disease thinned the ranks, and it then marched towards Calais. The French king’s army stood in the way. One page calls the field Azincourt, in what is now Pas-de-Calais. The other says Agincourt, in northern France. The cause they share is that march from Harfleur and the French decision to block the road to Calais.",
      what: "On 25 October 1415 the English defeated the French army. One page adds the feast name Saint Crispin’s Day and the spelling Azincourt. The other uses Agincourt and dates the march out of Harfleur without that feast. The English were short of food and fewer than the French host, though the totals are not one figure. The action both describe is Henry’s victory over the army that barred him, on that October day.",
      consequence: "The French were beaten. The English victory is the set piece of Henry V’s 1415 campaign, after the hard march from Harfleur. One page dwells on prisoners and on the ditch of the field. The other is content that the smaller English army had won. Those particulars are not the result stated here. The result is the French defeat and Henry’s victory of 25 October 1415.",
    },
    university: {
      cause: "Henry V commanded the English army in France during the Hundred Years’ War. Both narratives start the campaign’s crisis at Harfleur, where a siege and sickness reduced the force, and both then send him towards Calais with the French gathering to stop him. One narrative has him leave Harfleur on 8 October. The other describes the march north and the French along the Somme without using that day of departure, so the day is not stated. Azincourt and Agincourt are the two spellings of the field. The cause they allow is the march from the captured port and the French army placed across the road.",
      what: "The date is 25 October 1415. One narrative adds Saint Crispin’s Day and sets the fight near Azincourt. The other says Agincourt in northern France and does not print the feast. Hunger, dysentery, and a march of many miles are stressed in one narrative. The other stresses how many men had already died at Harfleur and how small the army was that remained. No shared total of either host is printed alike, so none is given. The course stated is the day’s battle on the road towards Calais, and the English defeat of the French king’s army.",
      consequence: "The English won, and the French army lost. Both narratives treat that win as the memorable success of the 1415 campaign, unexpected because the English were the smaller and the more worn of the two hosts. One narrative then lingers over captives and the killing of prisoners. The other does not make that killing the close of the day. The killing, any count of the dead, and the later conquest of Normandy are left out. The result they share is Henry V’s victory at Agincourt on 25 October 1415, and the defeat of the army that had blocked him.",
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
    {
      id: 'neville-barnet-tewkesbury',
      title: 'Neville’s Cross, Barnet, and Tewkesbury',
      monthLabel: 'October 1346 – May 1471',
      events: LATE_MEDIEVAL_ROUND4_EVENTS,
      lines: LATE_MEDIEVAL_ROUND4_LINES,
      figures: LATE_MEDIEVAL_ROUND4_FIGURES,
      links: LATE_MEDIEVAL_ROUND4_LINKS,
    },
  ],
};
