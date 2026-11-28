import { ANTIQUITY_FIGURES } from '@/lib/eras/people';
import type { EraEpisode, EraEvent, EraPeriod } from '@/lib/eras/types';

const teutoburg: EraEvent = {
  id: 'teutoburg_forest',
  date: '0009-09',
  precision: 'month',
  title: 'Battle in the Teutoburg Forest',
  kind: 'battle',
  fronts: ['german_lands'],
  countries: ['Roman Empire', 'Germanic tribes'],
  figures: ['arminius', 'publius_varus'],
  note: 'One account dates the fighting 8–11 September of the year 9, and calls present-day Kalkriese the likely ground. Another says the Seventeenth, Eighteenth, and Nineteenth legions were destroyed, and that Varus was forced to kill himself.',
  levels: {
    primary: {
      cause: 'Arminius, a Germanic noble, led tribal allies against the Roman commander Publius Quintilius Varus.',
      what: 'In September of the year 9 that coalition defeated Varus’s army in the Teutoburg Forest.',
      consequence: 'The fight was a Germanic victory over the Roman force led by Varus.',
    },
    secondary: {
      cause: 'Publius Quintilius Varus commanded Roman troops in Germania. Arminius, a Germanic noble, drew tribal allies together and set them against that Roman force.',
      what: 'In September of the year 9 the coalition defeated Varus’s legions in the Teutoburg Forest. The result is recorded as a Germanic victory.',
      consequence: 'Varus’s army was beaten. The Roman command he had led did not come off that field intact.',
    },
    university: {
      cause: 'The Roman commander was Publius Quintilius Varus. The Germanic noble who led the coalition against him was Arminius. Those two names, and a Roman defeat, are the shared core of the accounts.',
      what: 'One account dates the fighting from 8 to 11 September of the year 9. The other places the defeat in September of that year and does not give a day. Both set it in the Teutoburg Forest.',
      consequence: 'Both record a Germanic victory. One account adds that Varus was forced to kill himself, and that the Seventeenth, Eighteenth, and Nineteenth legions were destroyed.',
    },
  },
  sources: [
    { url: 'https://www.livius.org/articles/battle/teutoburg-forest-9-ce/', publisher: 'Livius' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_the_Teutoburg_Forest', publisher: 'Wikipedia' },
  ],
};

const adrianople: EraEvent = {
  id: 'adrianople_378',
  date: '0378-08-09',
  precision: 'day',
  title: 'Battle of Adrianople',
  kind: 'battle',
  fronts: ['balkans'],
  countries: ['Roman Empire', 'Germanic tribes'],
  figures: ['valens', 'fritigern'],
  note: 'One account calls the winners Germanic tribes. Another calls the result a Gothic victory. The day, and the names Valens and Fritigern, are shared.',
  levels: {
    primary: {
      cause: 'The East-Roman emperor Valens marched his troops against Germanic rebels led by Fritigern.',
      what: 'On 9 August 378 the armies met near Adrianople, and the Roman army was defeated.',
      consequence: 'Fritigern’s Germanic force won, and the Roman army of Valens was defeated.',
    },
    secondary: {
      cause: 'Valens, emperor in the eastern Roman government, took his own troops to meet rebels from the Germanic tribes. Fritigern led those rebels.',
      what: 'On 9 August 378 the two armies met near Adrianople. The Germanic force defeated the Roman army Valens had brought.',
      consequence: 'The Roman defeat stands in both accounts. One names the winners as Germanic tribes, and the other calls the same result a Gothic victory.',
    },
    university: {
      cause: 'Valens is named as the East-Roman emperor in command, and Fritigern as the leader of the Germanic rebels he went to fight. The meeting of those two forces is the shared cause of the battle.',
      what: 'The dated meeting is 9 August 378, near Adrianople. One account describes Germanic tribes defeating a Roman army. The other records a Gothic victory on that day.',
      consequence: 'The Roman army lost. The accounts do not use the same name for the winning side, so the shared conclusion is the defeat of Valens’s force, not a single ethnic label.',
    },
  },
  sources: [
    { url: 'https://www.livius.org/articles/battle/adrianople/', publisher: 'Livius' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Adrianople', publisher: 'Wikipedia' },
  ],
};

const episode: EraEpisode = {
  id: 'antiquity-battles',
  title: 'Teutoburg Forest and Adrianople',
  monthLabel: 'Year 9 – 378',
  events: [teutoburg, adrianople],
  lines: [],
  figures: ANTIQUITY_FIGURES,
  links: [],
};

export const ANTIQUITY: EraPeriod = {
  id: 'antiquity',
  label: 'Antiquity',
  episodes: [episode],
};
