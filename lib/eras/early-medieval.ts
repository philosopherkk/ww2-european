import {
  arabSiege717,
  athelstan,
  battleOfAndernach,
  battleOfBachDang,
  battleOfBrunanburh,
  battleOfFontenoy,
  battleOfGuadalete,
  battleOfLechfeld,
  battleOfTalas,
  battleOfYarmouk,
  charlesTheBald,
  gaoXianzhi,
  constantineIi,
  edmund,
  heraclius,
  khalidIbnAlWalid,
  leoIii,
  lothairI,
  louisTheGerman,
  louisTheYounger,
  ngoQuyen,
  olafOfDublin,
  ottoI,
  owainOfStrathclyde,
  roderic,
  tariqIbnZiyad,
  ziyadIbnSalih,
} from '@/lib/eras/fill-early-medieval';
import { EARLY_MEDIEVAL_FIGURES } from '@/lib/eras/people';
import {
  alfredOfWessex,
  charlemagne,
  charlemagneEmperor800,
  edington878,
  guthrum,
  lindisfarne793,
} from '@/lib/eras/sourced-batch';
import type { EraEpisode, EraEvent, EraPeriod } from '@/lib/eras/types';

const tours: EraEvent = {
  id: 'battle_of_tours',
  date: '0732-10',
  precision: 'month',
  title: 'Battle of Tours',
  kind: 'battle',
  fronts: ['france_and_low_countries'],
  countries: ['Franks', 'Umayyad'],
  figures: ['charles_martel', 'abd_al_rahman'],
  levels: {
    primary: {
      cause: 'An Umayyad army under Abd al-Rahman met Charles Martel’s Frankish force near Tours.',
      what: 'In October 732 the armies fought between the towns of Tours and Poitiers.',
      consequence: 'Charles Martel’s Frankish side won the battle, and the Umayyad army retreated.',
    },
    secondary: {
      cause: 'Abd al-Rahman led an Umayyad army that had come into western France. Charles Martel led a Frankish and Aquitanian force against it, with the fight falling between Tours and Poitiers.',
      what: 'The battle was fought in October 732. It is called the Battle of Tours, and it is also tied to Poitiers, the other town named for the ground.',
      consequence: 'The Frankish side under Charles Martel won. The Umayyad army retreated after the defeat.',
    },
    university: {
      cause: 'The Umayyad commander is named Abd al-Rahman, and the Frankish leader Charles Martel. One account also calls the Umayyad leader al-Ghafiqi. The advance that brought the armies together is placed in western Francia, between Tours and Poitiers.',
      what: 'Both accounts place the battle in October 732. The Frankish and Aquitanian force fought the Umayyad army on that ground.',
      consequence: 'The result is given as a Frankish victory and an Umayyad retreat. A further claim, that the battle decided the religion of Europe, is printed in only one of the accounts and is not repeated here as fact.',
    },
  },
  sources: [
    { url: 'https://www.thecollector.com/battle-of-tours/', publisher: 'TheCollector' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Tours', publisher: 'Wikipedia' },
  ],
};

const episode: EraEpisode = {
  id: 'tours-732',
  title: 'Tours to Edington',
  monthLabel: 'October 732 – 878',
  events: [tours, lindisfarne793, charlemagneEmperor800, edington878],
  lines: [],
  figures: [...EARLY_MEDIEVAL_FIGURES, alfredOfWessex, guthrum, charlemagne],
  links: [],
};

const wider: EraEpisode = {
  id: 'constantinople-talas-lechfeld',
  title: 'Constantinople, Talas, and Lechfeld',
  monthLabel: '717 – August 955',
  events: [arabSiege717, battleOfTalas, battleOfLechfeld],
  lines: [],
  figures: [leoIii, gaoXianzhi, ziyadIbnSalih, ottoI],
  links: [],
};

const roundTwo: EraEpisode = {
  id: 'yarmouk-brunanburh-bach-dang',
  title: 'Yarmouk, Brunanburh, and Bạch Đằng',
  monthLabel: '15 August 636 – 938',
  events: [battleOfYarmouk, battleOfBrunanburh, battleOfBachDang],
  lines: [],
  figures: [khalidIbnAlWalid, heraclius, athelstan, edmund, constantineIi, owainOfStrathclyde, olafOfDublin, ngoQuyen],
  links: [],
};

const roundThree: EraEpisode = {
  id: 'guadalete-fontenoy-andernach',
  title: 'Guadalete, Fontenoy, and Andernach',
  monthLabel: 'July 711 – 8 October 876',
  events: [battleOfGuadalete, battleOfFontenoy, battleOfAndernach],
  lines: [],
  figures: [tariqIbnZiyad, roderic, lothairI, charlesTheBald, louisTheGerman, louisTheYounger],
  links: [],
};

export const EARLY_MEDIEVAL: EraPeriod = {
  id: 'early-medieval',
  label: 'Early medieval',
  episodes: [episode, wider, roundTwo, roundThree],
};
