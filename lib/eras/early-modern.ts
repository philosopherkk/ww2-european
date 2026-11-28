import {
  EARLY_MODERN_AMERICAS,
  EARLY_MODERN_LINES,
  EARLY_MODERN_LINKS,
} from '@/lib/eras/americas';
import { EARLY_MODERN_FIGURES } from '@/lib/eras/people';
import type { EraEpisode, EraEvent, EraPeriod } from '@/lib/eras/types';

const armada: EraEvent = {
  id: 'spanish_armada_1588',
  date: '1588',
  precision: 'year',
  title: 'The Spanish Armada',
  kind: 'invasion',
  fronts: ['british_isles'],
  countries: ['Spain', 'England'],
  figures: ['philip_ii', 'elizabeth_i'],
  note: 'One account prints the fleet as 130 ships. The other account does not print that total.',
  levels: {
    primary: {
      cause: 'Philip II of Spain prepared a fleet to invade the England of Elizabeth I.',
      what: 'In 1588 the Spanish fleet sent by Philip II sailed against England.',
      consequence: 'The Spanish fleet was defeated, and the planned invasion of England failed.',
    },
    secondary: {
      cause: 'After years of hostility, Philip II of Spain assembled a fleet to invade England and to remove Elizabeth I from the throne.',
      what: 'The fleet sailed against England in 1588. It is known as the Spanish Armada.',
      consequence: 'The Armada was defeated. England was not conquered by that voyage, and Elizabeth I was not removed.',
    },
    university: {
      cause: 'Philip II’s aim was to remove Elizabeth I and restore Catholicism in England. The voyage is also called the Enterprise of England. Both accounts call it an invasion fleet of 1588.',
      what: 'The fleet sailed in 1588. One account says it set out in May, and prints the fleet as 130 ships. The other account does not print that total.',
      consequence: 'The voyage failed. The fleet was defeated, battered on the return in one account, and it did not place Philip’s power on the English throne.',
    },
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
  figures: [],
  levels: {
    primary: {
      cause: 'King Charles I’s royalist army and Parliament’s New Model Army were at war in England.',
      what: 'On 14 June 1645 Sir Thomas Fairfax’s New Model Army defeated the king’s army at Naseby.',
      consequence: 'Parliament’s New Model Army won, and King Charles I’s royalist army was beaten.',
    },
    secondary: {
      cause: 'The English Civil War set King Charles I’s royalists against Parliament. Parliament’s New Model Army was led by Sir Thomas Fairfax.',
      what: 'On 14 June 1645 Fairfax’s army defeated the king’s force at Naseby in Northamptonshire. The result was a Parliamentarian victory.',
      consequence: 'The royalist army was beaten and, in one account, destroyed as a fighting force. Parliament’s side held the field.',
    },
    university: {
      cause: 'Naseby is a battle of the English Civil War. Charles I commanded the royalist interest, and Sir Thomas Fairfax led the Parliamentary New Model Army.',
      what: 'The day is 14 June 1645, near Naseby in Northamptonshire. The New Model Army defeated the king’s army.',
      consequence: 'The verdict is a Parliamentarian victory. One account calls it the destruction of the royalist army, not only a lost afternoon.',
    },
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
  figures: [],
  levels: {
    primary: {
      cause: 'Prince Charles Edward Stuart led a Jacobite army against the Duke of Cumberland’s British force.',
      what: 'On 16 April 1746 Cumberland defeated that Jacobite army at Culloden, near Inverness.',
      consequence: 'The Jacobite army was beaten, and the rising of 1745–46 met its defeat there.',
    },
    secondary: {
      cause: 'Charles Edward Stuart was trying to reclaim the throne for his family. The Duke of Cumberland led the British army sent against the Jacobite rising of 1745–46.',
      what: 'On 16 April 1746 the armies met at Culloden, near Inverness in Scotland. Cumberland’s force defeated the Jacobite army.',
      consequence: 'Culloden was the climax of that rising. The Jacobite army lost to Cumberland’s force.',
    },
    university: {
      cause: 'The Jacobite rising of 1745–46 put Prince Charles Edward Stuart’s army in Scotland against a British army under the Duke of Cumberland. One account calls Cumberland the son of George II.',
      what: 'The day is 16 April 1746, at Culloden near Inverness. The Jacobite army was decisively defeated.',
      consequence: 'The rising’s military bid ended with that defeat. One account goes on to the fate of the Highland clans, which is a wider aftermath than the battle itself.',
    },
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
  figures: EARLY_MODERN_FIGURES,
  links: EARLY_MODERN_LINKS,
};

export const EARLY_MODERN: EraPeriod = {
  id: 'early-modern',
  label: 'Early modern',
  episodes: [episode],
};
