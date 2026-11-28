import { SINCE_1945_AMERICAS, SINCE_1945_LINES, SINCE_1945_LINKS } from '@/lib/eras/americas';
import {
  afghanistan1979,
  babrakKarmal,
  bayOfPigs1961,
  berlinWall1961,
  davidBenGurion,
  dienBienPhu1954,
  douglasMacarthur,
  dwightDEisenhower,
  fidelCastro,
  gamalAbdelNasser,
  harrySTruman,
  hastingsNdlovu,
  hectorPieterson,
  hoChiMinh,
  ianMckay,
  inchon1950,
  india1947,
  israel1948,
  janosKadar,
  jawaharlalNehru,
  jeremyMoore,
  koreanWar1950,
  kuwait1990,
  leonidBrezhnev,
  leopoldoGaltieri,
  mahatmaGandhi,
  maoZedong,
  margaretThatcher,
  prc1949,
  saddamHussein,
  samNzima,
  soweto1976,
  suez1956,
  tsietsiMashinini,
  vladimirPutin,
  walterUlbricht,
} from '@/lib/eras/fill-since-1945';
import {
  alexanderDubcek,
  cubaQuarantine1962,
  imreNagy,
  johnFKennedy,
  koreanArmistice1953,
  namIl,
  nikitaKhrushchev,
  sharpeville1960,
  williamKHarrison,
} from '@/lib/eras/sourced-batch';
import type { EraEpisode, EraEvent, EraPeriod } from '@/lib/eras/types';

const hungary: EraEvent = {
  id: 'budapest_1956',
  date: '1956-11-04',
  precision: 'day',
  title: 'Soviet tanks enter Budapest',
  kind: 'invasion',
  fronts: ['eastern_europe'],
  countries: ['Soviet Union', 'Hungary'],
  figures: ['imre_nagy', 'janos_kadar'],
  note: 'Imre Nagy, the Hungarian prime minister, announced the Soviet attack and said that Hungarian troops were fighting. An execution two years later is printed in one account of that morning and is not stated above.',
  levels: {
    primary: {
      cause: 'A Hungarian uprising in 1956 had taken to the streets of Budapest against Soviet power.',
      what: 'On 4 November 1956 Soviet tanks entered Budapest and attacked the uprising.',
      consequence: 'Soviet tanks were in the city, and the Hungarian uprising was put down.',
    },
    secondary: {
      cause: 'Budapest was already in turmoil when the armour arrived. One record calls the trouble a national uprising and does not fix an opening day. Another calls it a revolution and sets the main unrest from 23 October through 3 November. Those earlier dates appear in a single record, so the cause leaves them aside. What both records share is a Hungarian challenge to Soviet power in the capital, still unfinished when the November blow was launched.',
      what: 'The morning both records mark is 4 November 1956. Soviet tanks then came into Budapest and the rising was struck in the streets. A popular record says they rolled in to crush the national uprising, and that street fighting followed. A reference record says that at 03:00 the tanks penetrated the capital along the Pest side of the Danube. The hour and the river bank are printed once. The course both records give is tanks in Budapest that November morning, turned against the rising.',
      consequence: 'The rising did not survive the armoured entry. One record says the Soviets’ strength ensured victory after vicious street fighting. The other says the revolution was repressed that day and that Soviet victory followed, carrying the fight beyond the morning. A broadcast by the prime minister, and an execution years later, sit in a single record. The result both support is the defeat of the Hungarian rising in Budapest.',
    },
    university: {
      cause: 'Each narrative reaches the armoured morning from a capital that was already defying Moscow, and the preludes are not copies of one another. The popular narrative speaks of a national uprising against Soviet power and does not pin the first day. The reference narrative speaks of a revolution, marks a main phase from 23 October to 3 November, and treats 4 November as the start of suppression. October, the third, and that phase-split are single-narrative details, so they stay out of the cause. The prelude both will bear is a Hungarian defiance of Soviet power in Budapest, still open when the blow fell.',
      what: 'The calendar point printed in both narratives is 4 November 1956, and the instrument is Soviet tanks inside Budapest. Beyond that sentence the verbs diverge. One narrative says the tanks rolled in to crush the uprising once and for all, then describes vicious fighting in the streets and a short broadcast by Imre Nagy. The other says the tanks penetrated along the Pest side of the Danube in two thrusts before a shot, splitting the city. Nagy’s broadcast, the hour of three, the named roads, and the river bank fail to appear twice. Stripped of those extras, the action is the entry of Soviet tanks into Budapest on that November morning.',
      consequence: 'Neither narrative leaves the rising standing after the tanks had entered. The popular narrative closes on Soviet victory, secured by overwhelming strength. The reference narrative says the rising was repressed on 4 November and that victory was complete days later, with a toll it alone prints. A later execution, and the prime minister’s dawn broadcast, belong to one narrative only. Casualty counts and the extra days of fighting are not treated as agreed. What remains is the defeat of the Hungarian rising in Budapest.',
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
  figures: ['alexander_dubcek', 'leonid_brezhnev'],
  note: 'One account dates the invasion to the night of 20 August 1968 and prints approximately 200,000 troops and 5,000 tanks. Another dates it 20–21 August 1968 and places the crossing at about 11 pm on the 20th. The troop figures are not the same, so none is given above. Alexander Dubček, the first secretary, was taken to Moscow after the invasion.',
  levels: {
    primary: {
      cause: 'The Prague Spring had opened a period of liberalisation in communist Czechoslovakia.',
      what: 'On the night of 20 August 1968 Warsaw Pact armies invaded Czechoslovakia.',
      consequence: 'The invasion was aimed at the Prague Spring, and the Warsaw Pact armies entered the country.',
    },
    secondary: {
      cause: 'Czechoslovakia’s communist government had loosened its grip in a short liberal turn known as the Prague Spring. The Warsaw Pact states moved to close that opening. One record calls the turn a brief period of liberalisation in the communist country. The other says the invasion stopped Alexander Dubček’s liberalisation reforms. Dubček’s later removal to Moscow is not the cause. The cause both records share is the Prague Spring, a liberal turn inside communist Czechoslovakia, which the pact armies came to end.',
      what: 'The shared timing is the night of 20 August 1968, when Warsaw Pact armies invaded Czechoslovakia. One record stops at that night and prints a troop total near 200,000 with 5,000 tanks. The other dates the operation 20–21 August and gives the hour as about 11 pm, with a different troop total. The counts do not match, so none is adopted. The course both records give is the pact invasion of Czechoslovakia, opening on the night of 20 August.',
      consequence: 'The liberal turn was closed by the invasion. Pact armies, the Soviet Union among them, were inside Czechoslovakia. One record describes public demonstrations that could not match the tanks, and deaths among protesters that it alone numbers. The other calls the result a Warsaw Pact victory over the Prague Spring. Demonstration totals and a victory label are not both printed. The result both support is that the Prague Spring was ended by the pact invasion.',
    },
    university: {
      cause: 'Two narratives frame the August night as an answer to a liberal experiment inside a communist state. The popular narrative names the Prague Spring a brief liberalisation, credits Alexander Dubček with offering socialism with a human face, and treats public joy at the reforms as the background the armies came to crush. The reference narrative says four fellow pact countries jointly invaded and thereby stopped Dubček’s liberalisation reforms. A human face, the joy, and the count of four armies are each told once. Dubček was taken to Moscow afterwards, which is an aftermath, not the cause. What both sustain is the Prague Spring, a liberalisation in communist Czechoslovakia, as the reason the pact moved.',
      what: 'The night both narratives name is 20 August 1968. Warsaw Pact armies then entered Czechoslovakia. The popular narrative confines the opening to that night and prints approximately 200,000 troops and 5,000 tanks, calling it the largest such deployment in Europe since the last world war. The reference narrative dates the whole operation 20–21 August, sets the crossing at approximately 11 pm on the 20th, and prints a different strength. Troop totals, tank totals, and the claim about the largest deployment fail to appear in matching figures. The hour and the second calendar day are likewise single-narrative. The action both will carry is the pact invasion, begun on the night of 20 August 1968.',
      consequence: 'The experiment does not outlast the armies in either narrative. One says demonstrators answered with non-violent tactics and were no match for the tanks, and it alone numbers the protesters shot. The other says the invasion stopped the liberalisation and records a pact victory. Deaths, the non-violent methods, and the victory word are not shared, so they stay out of the result. The Soviet Union is among the armies in both. What remains is the end of the Prague Spring under the Warsaw Pact invasion.',
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
  figures: ['vladimir_putin'],
  note: 'One account prints a casualty total and a share of territory occupied. Those figures are not repeated here. Volodymyr Zelenskyy is not given a life. The pages used here do not both name him for 24 February 2022.',
  levels: {
    primary: {
      cause: 'Russia began a full-scale invasion and sent its ground forces into Ukraine.',
      what: 'On 24 February 2022 Russia invaded Ukraine, and its troops moved into the country.',
      consequence: 'Russian forces were inside Ukraine, and the war did not end on the opening day.',
    },
    secondary: {
      cause: 'The attack of February 2022 is described as a full-scale invasion, widening a fight that one record traces back to 2014. Another record calls the day a major escalation of a war already under way since that year. The 2014 beginning is not worded the same way twice, so it is not the cause adopted here. The cause both records share is Russia’s decision to open a full-scale invasion of Ukraine.',
      what: 'On 24 February 2022 Russia invaded Ukraine. One record says the day began before dawn with missile strikes on cities, and that ground troops then moved in. Another says the invasion started that day and calls it the largest war in Europe since the last world war. A third says a full-scale land, sea, and air invasion was announced, aimed at military assets and cities. Missiles, the three services, and the comparison with the last world war are not in every record. The course they share is the invasion of Ukraine on that February day.',
      consequence: 'Russian forces were inside Ukraine after the opening day, and the war went on. One record follows the troops towards Kyiv and names other cities in the weeks after. Another prints a casualty total and a share of territory taken. Those later figures do not match across the records, so none is given. The result both support is that the war did not finish on the morning it began.',
    },
    university: {
      cause: 'The February morning sits inside a longer quarrel, and the narratives do not draw that quarrel with the same pencil. One traces a full-scale invasion back to fighting that began in 2014. Another calls 24 February 2022 a major escalation of a war already open since the same year. A third starts from a mobilisation and an announcement. The 2014 origin, the word escalation, and the announcement are not a single shared sentence. What the narratives sustain together is Russia’s move to a full-scale invasion of Ukraine.',
      what: 'The date printed across the narratives is 24 February 2022. On that day Russia invaded Ukraine. A news narrative says dozens of missile strikes hit cities before dawn and that ground troops moved in quickly. An encyclopedic narrative says the invasion began that day, the largest and deadliest European war since the last world war, escalating a conflict open since 2014. A policy narrative says the announcement was a full-scale land, sea, and air invasion against military assets and cities. Dawn missiles, the deadliest-war comparison, and the list of services each fail to appear in all three. The action they share is the invasion itself, on that February day.',
      consequence: 'No narrative ends the war on the opening morning. One follows Russian troops into large areas within weeks, towards the edge of Kyiv and into other named cities. Another keeps the fighting going and withholds a matching casualty total. A third turns to later withdrawals and condemnations. City lists, casualty arithmetic, and those later withdrawals are not the same statement twice. Volodymyr Zelenskyy is not named by each of these pages for the opening day, so he is not added. What remains is a war still being fought after 24 February 2022.',
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
  events: [
    hungary,
    czechoslovakia,
    ukraine,
    ...SINCE_1945_AMERICAS.map((event) =>
      event.id === 'falklands_1982'
        ? {
            ...event,
            figures: [
              ...event.figures,
              'margaret_thatcher',
              'leopoldo_galtieri',
              'jeremy_moore',
              'ian_mckay',
            ],
          }
        : event,
    ),
  ],
  lines: SINCE_1945_LINES,
  figures: [
    imreNagy,
    alexanderDubcek,
    janosKadar,
    leonidBrezhnev,
    vladimirPutin,
    margaretThatcher,
    leopoldoGaltieri,
    jeremyMoore,
    ianMckay,
  ],
  links: SINCE_1945_LINKS,
};

const wider: EraEpisode = {
  id: 'since-1945-wider',
  title: 'Korea, Sharpeville, and Cuba',
  monthLabel: 'July 1953 – October 1962',
  events: [koreanArmistice1953, sharpeville1960, cubaQuarantine1962],
  lines: [],
  figures: [williamKHarrison, namIl, johnFKennedy, nikitaKhrushchev],
  links: [],
};

const widerWorld: EraEpisode = {
  id: 'since-1945-asia-africa-americas',
  title: 'Dien Bien Phu, the Bay of Pigs, and Soweto',
  monthLabel: 'May 1954 – June 1976',
  events: [dienBienPhu1954, bayOfPigs1961, soweto1976],
  lines: [],
  figures: [
    hoChiMinh,
    fidelCastro,
    dwightDEisenhower,
    hectorPieterson,
    hastingsNdlovu,
    samNzima,
    tsietsiMashinini,
  ],
  links: [],
};

const chinaKoreaKuwait: EraEpisode = {
  id: 'since-1945-china-korea-kuwait',
  title: 'China, Korea, and Kuwait',
  monthLabel: 'October 1949 – August 1990',
  events: [prc1949, koreanWar1950, kuwait1990],
  lines: [],
  figures: [maoZedong, harrySTruman, saddamHussein],
  links: [],
};

const suezBerlinIndia: EraEpisode = {
  id: 'since-1945-suez-berlin-india',
  title: 'India, Suez, and the Berlin Wall',
  monthLabel: 'August 1947 – August 1961',
  events: [india1947, suez1956, berlinWall1961],
  lines: [],
  figures: [jawaharlalNehru, mahatmaGandhi, gamalAbdelNasser, walterUlbricht],
  links: [],
};

const israelInchonAfghanistan: EraEpisode = {
  id: 'since-1945-israel-inchon-afghanistan',
  title: 'Israel, Inchon, and Afghanistan',
  monthLabel: 'May 1948 – December 1979',
  events: [israel1948, inchon1950, afghanistan1979],
  lines: [],
  figures: [davidBenGurion, douglasMacarthur, babrakKarmal],
  links: [],
};

export const SINCE_1945: EraPeriod = {
  id: 'since-1945',
  label: 'Since 1945',
  episodes: [episode, wider, widerWorld, suezBerlinIndia, chinaKoreaKuwait, israelInchonAfghanistan],
};
