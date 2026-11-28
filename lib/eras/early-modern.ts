import {
  EARLY_MODERN_AMERICAS,
  EARLY_MODERN_LINES,
  EARLY_MODERN_LINKS,
} from '@/lib/eras/americas';
import { EARLY_MODERN_FIGURES } from '@/lib/eras/people';
import {
  abdAlMalik,
  ahmadAlMansur,
  aschaffenburgHanau1743,
  aschaffenburgHanauLinks,
  askiaIshaqIi,
  babur,
  boyne1690,
  charlesXii,
  dettingen1743,
  diu1509,
  dukeOfGramont,
  dukeOfNoailles,
  franciscoDeAlmeida,
  georgeIi,
  greatConde,
  ibrahimLodi,
  ishidaMitsunari,
  jamesIi,
  janSobieski,
  judarPasha,
  karaMustafa,
  louisIiOfHungary,
  medinaSidonia,
  mohacs1526,
  myeongnyang1597,
  nagashino1575,
  odaNobunaga,
  panipat1526,
  peterI,
  poltava1709,
  popePopay,
  princeRupert,
  puebloRevolt1680,
  rocroi1643,
  sebastianOfPortugal,
  sekigahara1600,
  suleimanI,
  takedaKatsuyori,
  threeKings1578,
  tondibi1591,
  tokugawaIeyasu,
  vienna1683,
  williamIii,
  wonKyun,
  yiSunSin,
} from '@/lib/eras/fill-early-modern';
import { plassey1757, robertClive, sirajUdDaulah } from '@/lib/eras/sourced-batch-2';
import { johnOfAustria, lepanto1571 } from '@/lib/eras/sourced-batch-3';
import type { EraEpisode, EraEvent, EraPeriod } from '@/lib/eras/types';

const armada: EraEvent = {
  id: 'spanish_armada_1588',
  date: '1588',
  precision: 'year',
  title: 'The Spanish Armada',
  kind: 'invasion',
  fronts: ['british_isles'],
  countries: ['Spain', 'England'],
  figures: ['philip_ii', 'elizabeth_i', 'medina_sidonia'],
  note: 'One account prints the fleet as 130 ships. The other account does not print that total.',
  levels: {
  'primary': {
    'cause': 'Philip II of Spain prepared a fleet to invade England and to remove Elizabeth I from the throne.',
    'what': 'In May 1588 the Spanish Armada sailed from Lisbon against England, commanded by the Duke of Medina Sidonia.',
    'consequence': 'The invasion failed. Storms damaged the fleet, and England was not conquered.'
  },
  'secondary': {
    'cause': 'Years of hostility lay behind the voyage. Philip II of Spain assembled a fleet to invade England, to take Elizabeth I off the throne, and to restore the Roman Catholic faith. He gave command to the Duke of Medina Sidonia. One account spells that title with a hyphen and prints 130 ships. The other spells Medina Sidonia and adds the personal name Alonso de Guzmán. The cause both support is Philip’s invasion fleet, under that duke, aimed at Elizabeth’s England.',
    'what': 'The fleet sailed from Lisbon in May 1588. It is the Spanish Armada, and one account also calls the voyage the Enterprise of England. Medina Sidonia commanded it. Storms damaged vessels, on the outward voyage in one telling and on the return around Scotland and Ireland in the other. A fireship attack and a fight off Gravelines are told in detail on one side only. The course both record is the May sailing from Lisbon and a fleet that did not land Philip’s army in England.',
    'consequence': 'The Armada was defeated, and the planned invasion of England failed. Elizabeth I was not removed, and the Catholic restoration the voyage was meant to bring did not happen. Storms accounted for lost ships in both accounts, though they do not put the worst of the weather on the same stretch of the route. One account prints a loss of at least a third of the ships. The other does not print that fraction. The result they share is the failure of the 1588 invasion and a fleet beaten and storm-damaged, under Medina Sidonia’s command.'
  },
  'university': {
    'cause': 'The Armada is Philip II’s invasion fleet of 1588, sent against the England of Elizabeth I. Both narratives give him a religious and political aim: to remove the queen and to restore Roman Catholicism. Command of the ships was given to the Duke of Medina Sidonia, an aristocrat in one narrative’s wording, and the officer who sailed from Lisbon in the other. One narrative adds Alonso de Guzmán as his personal name and orders to meet the Duke of Parma. The other hyphenates the title and states a total of 130 ships. The name-form and the total are not common figures. The cause both narratives support is Philip’s decision to invade, the fleet of May 1588, and Medina Sidonia in command.',
    'what': 'Both narratives send the fleet out of Lisbon in May 1588. The battle narrative says late May, and calls the effort the Enterprise of England as well as the Armada. The other says the ships set sail that May under Medina Sidonia. English seamen then prevented the invasion. Weather intervened. One narrative describes storms in the Bay of Biscay that turned galleys back, and later Atlantic storms that sank more ships. The other describes a battering on the return past Scotland and the Irish coast. Fireships at Calais and the fight called Gravelines are set out fully in a single narrative. The voyage they both describe is the May departure from Lisbon, Medina Sidonia’s command, English resistance, and damage from storms.',
    'consequence': 'The invasion failed. Philip did not take Elizabeth’s throne, and the Catholic restoration did not follow that voyage. Both narratives call the outcome a defeat and both charge storms with the loss of ships, without agreeing which coast saw the worst of them. A printed fraction of ships lost, a speech at Tilbury, and a surge of national pride are each in one narrative. They are not required for the result. The consequence both support is the defeat of the Armada of 1588, the failure of the invasion, and a storm-battered fleet that did not deliver Spain’s army onto English soil.'
  }
},
  sources: [
    { url: 'https://www.history.com/articles/spanish-armada', publisher: 'History.com' },
    { url: 'https://en.wikipedia.org/wiki/Spanish_Armada', publisher: 'Wikipedia' },
  ],
};

const naseby: EraEvent = {
  id: 'naseby_1645',
  date: '1645-06-14',
  precision: 'day',
  title: 'Battle of Naseby',
  kind: 'battle',
  fronts: ['british_isles'],
  countries: ['England'],
  figures: ['thomas_fairfax', 'charles_i', 'prince_rupert'],
  levels: {
  'primary': {
    'cause': 'In the English Civil War, King Charles I’s royalists faced Parliament’s New Model Army under Sir Thomas Fairfax.',
    'what': 'On 14 June 1645 Fairfax’s army destroyed the royalist army at Naseby in Northamptonshire.',
    'consequence': 'The royalist army was destroyed, and Parliament’s New Model Army held the field.'
  },
  'secondary': {
    'cause': 'The English Civil War set Charles I’s royalists against Parliament. Sir Thomas Fairfax commanded the New Model Army. Prince Rupert commanded on the royalist side, the king being present in one account and named with Rupert over the army in the other. In the same campaign Fairfax had been sent to Oxford, the royalist capital, and on 5 June he marched north from that siege to seek battle. One account spells the date 5th June. The cause both support is that march from Oxford and the meeting of Fairfax’s army with the king’s.',
    'what': 'The battle was fought at Naseby in Northamptonshire on 14 June 1645. Fairfax’s New Model Army destroyed the royalist army. Rupert was among the royalist commanders, and Charles I’s cause was the one defeated. One account says the fight lasted several hours and that thousands of royalist infantry were captured. The other says the main body of royalist foot was destroyed on the field and is cautious about casualty figures. The hours and the counts are not shared. The course both record is the destruction of the royalist army at Naseby that day.',
    'consequence': 'Parliament’s army won, and the royalist field army was destroyed. One account says the defeat ended any real hope of a royalist victory, though the king did not surrender at once. The other calls the battle the decisive defeat and destruction of Charles I’s army. A later surrender, and a parade of prisoners in London, are told in a single account. The result they share is the destruction of the royalist army at Naseby on 14 June 1645 and the victory of Fairfax’s New Model Army.'
  },
  'university': {
    'cause': 'Naseby is a battle of the English Civil War. Charles I stood for the royalist interest. Sir Thomas Fairfax led Parliament’s New Model Army, and Prince Rupert is named with the royalist command. Before the battle Fairfax had laid siege to Oxford. On 5 June he left that siege and marched north to fight. One narrative says Parliament ordered him to abandon the siege after the royalists stormed Leicester. The other says the threat to Oxford had already pulled the king’s attention, and that Fairfax then marched north on 5 June. Leicester and the council of war are not in both. The cause they share is Fairfax’s northward march from Oxford on 5 June 1645, against the royalist army of Charles and Rupert.',
    'what': 'Both narratives date the battle 14 June 1645 and place it at Naseby in Northamptonshire. The New Model Army destroyed the royalist army. Fairfax commanded the Parliamentary side. Rupert commanded royalists, whether as the general in the king’s presence or as the prince under whom, with Charles, that army stood. One narrative adds Cromwell as joint commander and a large capture of infantry. The other calls Cromwell Fairfax’s deputy and declines a firm casualty total. Those differences stay outside the account of the day. The action both describe is the destruction of the royalist army at Naseby.',
    'consequence': 'The royalist army ceased to be a field force, and Parliament’s New Model Army won the battle. One narrative reads the defeat as the end of realistic royalist hope, short of the king’s final surrender. The other calls it decisive destruction. Prisoners marched through London, and the day the king at last gave himself up, appear in one narrative only. They are not the result required here. The consequence both narratives support is the victory of Fairfax’s army and the destruction of Charles I’s royalist army at Naseby on 14 June 1645.'
  }
},
  sources: [
    { url: 'https://www.britishbattles.com/english-civil-war/battle-of-naseby/', publisher: 'British Battles' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Naseby', publisher: 'Wikipedia' },
  ],
};

const blenheim: EraEvent = {
  id: 'blenheim_1704',
  date: '1704-08',
  precision: 'month',
  title: 'Battle of Blenheim',
  kind: 'battle',
  fronts: ['german_lands'],
  countries: ['England', 'France'],
  figures: ['duke_of_marlborough', 'louis_xiv'],
  note: 'One account dates the battle 13 August 1704. Another dates it 2 August 1704. A third prints 13 August and, beside it, O.S. 2 August 1704.',
  levels: {
    primary: {
      cause: 'The Duke of Marlborough led an allied army against a French army of Louis XIV.',
      what: 'In August 1704 the Duke of Marlborough’s army defeated the French at Blenheim.',
      consequence: 'The French army lost the battle, and Marlborough’s force held the field.',
    },
    secondary: {
      cause: 'During the War of the Spanish Succession, the Duke of Marlborough marched an allied army against the French army of Louis XIV.',
      what: 'In August 1704 that allied army defeated the French at Blenheim. The day is printed as 13 August and as 2 August, so the month is the date given here.',
      consequence: 'The French defeat broke the run of French success in that war, in the words of the accounts, and Marlborough’s army won the field.',
    },
    university: {
      cause: 'Marlborough commanded the allies. The enemy army is French, and in one account Franco-Bavarian, under the wider war of Louis XIV, the War of the Spanish Succession.',
      what: 'The year and month are August 1704. One account says 13 August 1704. Another says 2 August 1704. A third prints both and marks 2 August as O.S., the old-style day.',
      consequence: 'The military result does not depend on which day-name is used. The French army was defeated at Blenheim, and the allied force under Marlborough won.',
    },
  },
  sources: [
    { url: 'https://www.nam.ac.uk/explore/battle-blenheim', publisher: 'National Army Museum' },
    { url: 'https://www.britishbattles.com/war-of-the-spanish-succession/battle-of-blenheim/', publisher: 'British Battles' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Blenheim', publisher: 'Wikipedia' },
  ],
};

const culloden: EraEvent = {
  id: 'culloden_1746',
  date: '1746-04-16',
  precision: 'day',
  title: 'Battle of Culloden',
  kind: 'battle',
  fronts: ['british_isles'],
  countries: ['Britain', 'Jacobites'],
  figures: ['charles_edward_stuart', 'duke_of_cumberland'],
  levels: {
  'primary': {
    'cause': 'Prince Charles Edward Stuart led a Jacobite army against the Duke of Cumberland’s British force in the rising of 1745.',
    'what': 'On 16 April 1746 Cumberland defeated that Jacobite army at Culloden, near Inverness.',
    'consequence': 'The Jacobite army was beaten, and the rising met its defeat at Culloden.'
  },
  'secondary': {
    'cause': 'Charles Edward Stuart was trying to recover the throne for his family. His Jacobite army won ground in Scotland, invaded England, and marched as far south as Derby before it turned back. The Duke of Cumberland then led the British army against that rising. One account says the highland army failed to gather English support at Derby. The other says the invasion was forced to turn back there. The cause both support is the Jacobite advance to Derby and Cumberland’s pursuit of the rising that followed.',
    'what': 'On 16 April 1746 the armies met at Culloden, five miles east of Inverness. The fighting lasted less than an hour. Cumberland’s force defeated the Jacobite army of Charles Edward Stuart. One account adds that the highland army was poorly supplied. The other calls the defeat overwhelming and bloody. Supply and that wording are not in both. The course both record is Cumberland’s brief defeat of the Jacobites at Culloden that day.',
    'consequence': 'Culloden ended the military bid of the Jacobite rising. Cumberland’s army beat Charles Edward Stuart’s men near Inverness. One account calls the field the last battle fought on British soil and the beginning of the end for the clan system. The other does not carry those later judgements. The result they share is the Jacobite defeat at Culloden on 16 April 1746.'
  },
  'university': {
    'cause': 'The Jacobite rising put Prince Charles Edward Stuart’s army against a British army under the Duke of Cumberland. The rising carried the Jacobites through Scotland and into England. Both narratives say that invasion reached Derby, and that it then turned back. One says English support failed to appear. The other says the army was forced to retire from that southern point. Cumberland afterwards took the royal command in Scotland. A November entry into England, and a government defeat at Prestonpans, are not required for the cause. The cause they share is the Jacobite march to Derby, the retreat, and Cumberland’s army sent to finish the rising.',
    'what': 'April the sixteenth, 1746, is the date both pages give for the clash. They set the ground five miles east of a Highland town, and they keep the combat under an hour. The royal duke’s soldiers beat the prince’s followers. One page calls that loss overwhelming and bloody. The museum page adds low spirits and thin rations on the moor. Spirits and rations are not repeated beside them. Head-counts disagree and are dropped. What remains is a brief beating of the Jacobite host on Culloden Moor.',
    'consequence': 'The rising’s military effort ended in defeat at Culloden. Cumberland’s army held the field, and the attempt to restore the Stuart claim failed there. One narrative goes on to call the moor the last battle on British soil and a turning point for the clans. The other stops at the defeat. Those sequels are not common property. The consequence both support is the Jacobite defeat at Culloden, near Inverness, on 16 April 1746.'
  }
},
  sources: [
    { url: 'https://www.nam.ac.uk/explore/battle-culloden', publisher: 'National Army Museum' },
    { url: 'https://www.britishbattles.com/jacobite-rebellion/battle-of-culloden/', publisher: 'British Battles' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Culloden', publisher: 'Wikipedia' },
  ],
};

const episode: EraEpisode = {
  id: 'early-modern-battles',
  title: 'Armada, Naseby, Blenheim, and Culloden',
  monthLabel: '1588 – April 1746',
  events: [armada, naseby, blenheim, culloden, ...EARLY_MODERN_AMERICAS],
  lines: EARLY_MODERN_LINES,
  figures: [...EARLY_MODERN_FIGURES, medinaSidonia, princeRupert],
  links: EARLY_MODERN_LINKS,
};

export const EARLY_MODERN: EraPeriod = {
  id: 'early-modern',
  label: 'Early modern',
  episodes: [
    episode,
    {
      id: 'plassey-1757',
      title: 'Battle of Plassey',
      monthLabel: 'June 1757',
      events: [plassey1757],
      lines: [],
      figures: [robertClive, sirajUdDaulah],
      links: [],
    },
    {
      id: 'lepanto-1571',
      title: 'Battle of Lepanto',
      monthLabel: 'October 1571',
      events: [lepanto1571],
      lines: [],
      figures: [johnOfAustria],
      links: [],
    },
    {
      id: 'early-modern-fill',
      title: 'Panipat, Tondibi, Sekigahara, and Vienna',
      monthLabel: 'April 1526 – September 1683',
      events: [panipat1526, tondibi1591, sekigahara1600, vienna1683],
      lines: [],
      figures: [
        babur,
        ibrahimLodi,
        judarPasha,
        askiaIshaqIi,
        ahmadAlMansur,
        tokugawaIeyasu,
        ishidaMitsunari,
        janSobieski,
        karaMustafa,
      ],
      links: [],
    },
    {
      id: 'early-modern-fill-2',
      title: 'Diu, the Three Kings, Myeongnyang, and the Pueblo Revolt',
      monthLabel: 'February 1509 – August 1680',
      events: [diu1509, threeKings1578, myeongnyang1597, puebloRevolt1680],
      lines: [],
      figures: [franciscoDeAlmeida, sebastianOfPortugal, abdAlMalik, yiSunSin, wonKyun, popePopay],
      links: [],
    },
    {
      id: 'early-modern-fill-3',
      title: 'Mohács, Nagashino, and the Boyne',
      monthLabel: 'August 1526 – July 1690',
      events: [mohacs1526, nagashino1575, boyne1690],
      lines: [],
      figures: [suleimanI, louisIiOfHungary, odaNobunaga, takedaKatsuyori, williamIii, jamesIi],
      links: [],
    },
    {
      id: 'early-modern-fill-4',
      title: 'Rocroi, Poltava, and Dettingen',
      monthLabel: '1643 – June 1743',
      events: [rocroi1643, poltava1709, dettingen1743],
      lines: [aschaffenburgHanau1743],
      figures: [greatConde, peterI, charlesXii, georgeIi, dukeOfNoailles, dukeOfGramont],
      links: aschaffenburgHanauLinks,
    },
  ],
};
