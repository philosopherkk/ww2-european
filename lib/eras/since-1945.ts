import { SINCE_1945_AMERICAS, SINCE_1945_LINES, SINCE_1945_LINKS } from '@/lib/eras/americas';
import type { EraEpisode, EraEvent, EraPeriod } from '@/lib/eras/types';

const hungary: EraEvent = {
  id: 'budapest_1956',
  date: '1956-11-04',
  precision: 'day',
  title: 'Soviet tanks enter Budapest',
  kind: 'invasion',
  fronts: ['eastern_europe'],
  countries: ['Soviet Union', 'Hungary'],
  figures: [],
  levels: {
    primary: {
      cause: 'A Hungarian uprising in 1956 had taken to the streets of Budapest against Soviet power.',
      what: 'On 4 November 1956 Soviet tanks entered Budapest and attacked the uprising.',
      consequence: 'Soviet tanks were in the city, and the Hungarian uprising was put down.',
    },
    secondary: {
      cause: 'The Hungarian uprising of 1956, also called a revolution, ran in Budapest against the Soviet hold on the country. It is dated from 23 October in one account.',
      what: 'On 4 November 1956 Soviet tanks rolled into Budapest and penetrated the city, to crush the uprising.',
      consequence: 'The Soviet force took the fight in the streets. The uprising was defeated, and a government dependent on that intervention followed.',
    },
    university: {
      cause: 'The uprising is dated 23 October to 4 November 1956 in one account, and is described as a national rising against Soviet control. Budapest is the city both accounts name.',
      what: 'On 4 November 1956 Soviet tanks entered Budapest. One account says they rolled in to crush the rising. The other says they penetrated the city along the Pest bank of the Danube.',
      consequence: 'The intervention broke the uprising in Budapest.',
    },
  },
  sources: [
    {
      url: 'https://www.history.com/this-day-in-history/november-4/soviets-put-brutal-end-to-hungarian-revolution',
      publisher: 'History.com',
    },
    { url: 'https://en.wikipedia.org/wiki/Hungarian_Revolution_of_1956', publisher: 'Wikipedia' },
  ],
};

const czechoslovakia: EraEvent = {
  id: 'czechoslovakia_1968',
  date: '1968-08-20',
  precision: 'day',
  title: 'Warsaw Pact invades Czechoslovakia',
  kind: 'invasion',
  fronts: ['eastern_europe'],
  countries: ['Warsaw Pact', 'Czechoslovakia'],
  figures: [],
  note: 'One account dates the invasion to the night of 20 August 1968 and prints approximately 200,000 troops and 5,000 tanks. Another dates it 20–21 August 1968 and places the crossing at about 11 pm on the 20th. The troop figures are not the same, so none is given above.',
  levels: {
    primary: {
      cause: 'The Prague Spring had opened a period of liberalisation in communist Czechoslovakia.',
      what: 'On the night of 20 August 1968 Warsaw Pact armies invaded Czechoslovakia.',
      consequence: 'The invasion was aimed at the Prague Spring, and the Warsaw Pact armies entered the country.',
    },
    secondary: {
      cause: 'Czechoslovakia’s communist government had loosened its rule in the Prague Spring, a brief liberal turn. The Warsaw Pact states moved to end it.',
      what: 'On the night of 20 August 1968 Warsaw Pact armies invaded. One account names the hour as about 11 pm, and another dates the operation across 20 and 21 August.',
      consequence: 'Warsaw Pact armies entered Czechoslovakia, the Soviet Union among them, against the Prague Spring.',
    },
    university: {
      cause: 'The Prague Spring was a short liberalisation inside communist Czechoslovakia. The invasion was the Warsaw Pact’s answer to it, led in the accounts by the Soviet Union and joined by other pact armies.',
      what: 'The shared timing is the night of 20 August 1968. One account stops at that night and prints a troop and tank total. The other dates the invasion 20–21 August and gives the hour as about 11 pm, with a different troop total.',
      consequence: 'The liberal turn was closed by the invasion. The accounts do not print the same number of men or tanks.',
    },
  },
  sources: [
    {
      url: 'https://www.history.com/this-day-in-history/august-20/soviets-invade-czechoslovakia',
      publisher: 'History.com',
    },
    { url: 'https://en.wikipedia.org/wiki/Warsaw_Pact_invasion_of_Czechoslovakia', publisher: 'Wikipedia' },
  ],
};

const ukraine: EraEvent = {
  id: 'ukraine_2022',
  date: '2022-02-24',
  precision: 'day',
  title: 'Russia invades Ukraine',
  kind: 'invasion',
  fronts: ['eastern_europe'],
  countries: ['Russia', 'Ukraine'],
  figures: [],
  note: 'One account prints a casualty total and a share of territory occupied. Those figures are not repeated here.',
  levels: {
    primary: {
      cause: 'Russia began a full-scale invasion and sent its ground forces into Ukraine.',
      what: 'On 24 February 2022 Russia invaded Ukraine, and its troops moved into the country.',
      consequence: 'Russian forces were inside Ukraine, and the war did not end on the opening day.',
    },
    secondary: {
      cause: 'Russia opened a full-scale invasion of Ukraine in February 2022 and sent its forces into the country.',
      what: 'On 24 February 2022 Russia invaded Ukraine. One account adds that the day began before dawn with missile strikes, and that ground troops then moved in.',
      consequence: 'Russian forces were inside Ukraine after that day. The war was still being fought long after the opening morning.',
    },
    university: {
      cause: 'The February 2022 attack is described as a full-scale invasion, widening a conflict that one account traces to 2014. The opening day itself is 24 February 2022.',
      what: 'One account says the invasion began before dawn with missile strikes on cities, and that ground troops moved in the same day. The other states that on 24 February 2022 Russia invaded Ukraine.',
      consequence: 'The war continued past that day. One later account prints a casualty total and a share of territory, and the other does not match those figures.',
    },
  },
  sources: [
    { url: 'https://www.bbc.com/news/world-europe-60506682', publisher: 'BBC' },
    { url: 'https://en.wikipedia.org/wiki/Russian_invasion_of_Ukraine', publisher: 'Wikipedia' },
    { url: 'https://www.cfr.org/global-conflict-tracker/conflict/conflict-ukraine', publisher: 'Council on Foreign Relations' },
  ],
};

const episode: EraEpisode = {
  id: 'since-1945-wars',
  title: 'Hungary, Czechoslovakia, and Ukraine',
  monthLabel: 'November 1956 – February 2022',
  events: [hungary, czechoslovakia, ukraine, ...SINCE_1945_AMERICAS],
  lines: SINCE_1945_LINES,
  figures: [],
  links: SINCE_1945_LINKS,
};

export const SINCE_1945: EraPeriod = {
  id: 'since-1945',
  label: 'Since 1945',
  episodes: [episode],
};
