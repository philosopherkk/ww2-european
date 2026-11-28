import { EARLY_MEDIEVAL_FIGURES } from '@/lib/eras/people';
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
  title: 'Battle of Tours',
  monthLabel: 'October 732',
  events: [tours],
  lines: [],
  figures: EARLY_MEDIEVAL_FIGURES,
  links: [],
};

export const EARLY_MEDIEVAL: EraPeriod = {
  id: 'early-medieval',
  label: 'Early medieval',
  episodes: [episode],
};
