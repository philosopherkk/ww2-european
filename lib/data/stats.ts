import type { Bloc } from './figures-axis';

export interface YearStat {
  year: number;
  /** Population of the state in that year, in millions, on that year's borders. */
  population: number;
  /** Personnel under arms (all services) during that year, in millions. */
  armedForces: number;
  note?: string;
}

export interface CountryStat {
  id: string;
  name: string;
  bloc: Bloc;
  capital: string;
  /** Years in which the state was at war as a belligerent. */
  belligerent: [number, number] | null;
  series: YearStat[];
  /** Highest strength reached during the war, in millions. */
  peakForces: number;
  /** Military deaths (incl. POWs who died in captivity), millions. */
  militaryDeaths: number;
  /** Civilian deaths attributable to the war, millions. */
  civilianDeaths: number;
  deathsNote: string;
  /** One-line summary used in the sidebar at primary reading level. */
  simple: string;
}

/**
 * Figures are rounded estimates compiled from the sources listed in SOURCES
 * (Rümmler on German personnel, Krivosheev on Soviet strength and losses,
 * Dear and Foot on Axis and co-belligerent manpower, the UK Statistical
 * Abstract, and the US Department of Defense manpower reports). Loss totals for the USSR, Poland,
 * Yugoslavia and Germany remain contested; ranges are given in `deathsNote`.
 */
export const COUNTRY_STATS: CountryStat[] = [
  {
    id: 'Germany',
    name: 'Germany',
    bloc: 'axis',
    capital: 'Berlin',
    belligerent: [1939, 1945],
    series: [
      { year: 1938, population: 69.3, armedForces: 0.55, note: 'Frontier of 1937; peacetime strength after the 1935 rearmament law' },
      { year: 1939, population: 79.8, armedForces: 2.3, note: 'Includes Austria and Memel; September mobilisation' },
      { year: 1940, population: 83.0, armedForces: 3.4 },
      { year: 1941, population: 83.5, armedForces: 5.2, note: 'About 3.0 million deployed in the east on 22 June' },
      { year: 1942, population: 84.0, armedForces: 5.7 },
      { year: 1943, population: 85.0, armedForces: 6.3, note: 'Total Wehrmacht and Waffen-SS personnel' },
      { year: 1944, population: 86.0, armedForces: 7.0, note: 'Peak, mid-1944, including replacement and home army' },
      { year: 1945, population: 82.0, armedForces: 6.2, note: 'Fragmenting; large numbers captured in April-May' },
    ],
    peakForces: 7.0,
    militaryDeaths: 5.3,
    civilianDeaths: 0.6,
    deathsNote:
      'Military deaths 5.3-6.0 million, of whom roughly a million died after capture, almost all of them in Soviet custody, out of some 3 million taken prisoner. Civilian deaths 0.4-1.0 million depending on whether the flight and expulsion of Germans and the bombing dead are counted.',
    simple: 'Fought on almost every front and lost about as many soldiers as any other country except the Soviet Union.',
  },
  {
    id: 'Soviet Union',
    name: 'Soviet Union',
    bloc: 'soviet',
    capital: 'Moscow',
    belligerent: [1941, 1945],
    series: [
      { year: 1938, population: 167.0, armedForces: 1.5 },
      { year: 1939, population: 172.0, armedForces: 2.1, note: 'Includes eastern Poland, which was annexed in September' },
      { year: 1940, population: 188.0, armedForces: 4.2, note: 'Includes the Baltic states, Bessarabia and northern Bukovina' },
      { year: 1941, population: 188.0, armedForces: 5.0, note: '5.4 million on paper on 22 June; huge losses in the first months' },
      { year: 1942, population: 180.0, armedForces: 5.5, note: 'Population fell because German occupation removed the most crowded regions' },
      { year: 1943, population: 185.0, armedForces: 9.5 },
      { year: 1944, population: 189.0, armedForces: 10.9 },
      { year: 1945, population: 190.0, armedForces: 11.3, note: 'Peak strength at the end of the war in Europe' },
    ],
    peakForces: 11.3,
    militaryDeaths: 8.7,
    civilianDeaths: 15.0,
    deathsNote:
      'Krivosheev gives 8.7 million Soviet military dead, including soldiers who died in captivity. Total Soviet deaths are usually put at 26-27 million — roughly one person in seven. Of the 5.7 million Soviet soldiers taken prisoner by Germany, about 3.3 million died in custody, most of them deliberately starved: the largest mass death of prisoners in the war. The civilian total includes deliberate killing, starvation in the occupied zones, the starvation of Leningrad, and deaths in forced labour.',
    simple: 'Lost more people than any other country — around one person in seven.',
  },
  {
    id: 'United Kingdom',
    name: 'United Kingdom',
    bloc: 'allies',
    capital: 'London',
    belligerent: [1939, 1945],
    series: [
      { year: 1938, population: 47.3, armedForces: 0.4, note: 'Small professional army; conscription not yet introduced' },
      { year: 1939, population: 47.7, armedForces: 0.9, note: 'Conscription introduced in April 1939; BEF sent to France with 10 divisions' },
      { year: 1940, population: 47.8, armedForces: 2.8 },
      { year: 1941, population: 47.9, armedForces: 3.4 },
      { year: 1942, population: 48.0, armedForces: 4.1 },
      { year: 1943, population: 48.1, armedForces: 4.7, note: 'Peak of the British armed forces; over 40% of man-years spent on the home front and the Middle East' },
      { year: 1944, population: 48.2, armedForces: 4.6 },
      { year: 1945, population: 48.4, armedForces: 4.6 },
    ],
    peakForces: 4.7,
    militaryDeaths: 0.397,
    civilianDeaths: 0.068,
    deathsNote:
      'About 397,000 deaths in the British armed forces, counting the Dominion and colonial forces that fought under British command; counts for the United Kingdom alone run to about 383,600. The Indian army, which served under British command but was a separate army, lost about 87,000 dead. Civilian deaths about 67,000, almost all from air attack.',
    simple: 'Never invaded and never lost as many people as France, but fought from the first day to the last.',
  },
  {
    id: 'France',
    name: 'France',
    bloc: 'allies',
    capital: 'Paris',
    belligerent: [1939, 1945],
    series: [
      { year: 1938, population: 41.7, armedForces: 0.9 },
      { year: 1939, population: 41.8, armedForces: 5.0, note: 'Full mobilisation: about 5 million called up, 98 divisions' },
      { year: 1940, population: 41.8, armedForces: 2.0, note: 'After the armistice the Vichy army was limited to 100,000 in the unoccupied zone' },
      { year: 1941, population: 41.6, armedForces: 0.4, note: 'Vichy armed forces plus the small Free French forces' },
      { year: 1942, population: 41.5, armedForces: 0.5 },
      { year: 1943, population: 41.5, armedForces: 0.7, note: 'Army of Africa returned to the war after Torch' },
      { year: 1944, population: 41.4, armedForces: 1.3, note: 'Free French and FFI, growing rapidly after June' },
      { year: 1945, population: 41.4, armedForces: 1.9, note: 'Fourth-largest Allied army in Europe by spring 1945' },
    ],
    peakForces: 5.0,
    militaryDeaths: 0.21,
    civilianDeaths: 0.35,
    deathsNote:
      'About 210,000 military deaths (55,000 in 1940, the rest 1943-45 and in captivity) and 350,000 civilian deaths, including 75,000 Jews deported from France and deaths in the resistance and reprisals.',
    simple: 'Defeated in six weeks in 1940, but kept fighting from London, Africa and inside France.',
  },
  {
    id: 'Italy',
    name: 'Italy',
    bloc: 'axis',
    capital: 'Rome',
    belligerent: [1940, 1945],
    series: [
      { year: 1938, population: 43.4, armedForces: 0.7 },
      { year: 1939, population: 43.6, armedForces: 0.9, note: 'Declared non-belligerent in September 1939' },
      { year: 1940, population: 43.8, armedForces: 1.4, note: '3.25 million called up on paper; about 1.4 million equipped and usable' },
      { year: 1941, population: 44.0, armedForces: 2.6, note: 'Greece and North Africa force large mobilisation' },
      { year: 1942, population: 44.2, armedForces: 3.6, note: 'ARMIR of 230,000 sent to the Don, destroyed in December' },
      { year: 1943, population: 44.3, armedForces: 3.0, note: 'Army disintegrated after 8 September; 650,000 soldiers captured by Germany' },
      { year: 1944, population: 44.2, armedForces: 0.3, note: 'Italian co-belligerent forces plus the Salò Republic’s armies, and the partisans' },
      { year: 1945, population: 44.3, armedForces: 0.4, note: 'Co-belligerent army grew to about 290,000; partisans about 250,000' },
    ],
    peakForces: 3.6,
    militaryDeaths: 0.32,
    civilianDeaths: 0.14,
    deathsNote:
      'About 320,000 military deaths including 40,000 partisans and 45,000 deportees; civilian deaths about 140,000, largely from air attack and German reprisals. Some 650,000 interned military internees in the Reich, of whom about 40,000 died.',
    simple: 'Changed sides in 1943, so from then on Italians fought on both sides — and also fought each other.',
  },
  {
    id: 'Poland',
    name: 'Poland',
    bloc: 'allies',
    capital: 'Warsaw',
    belligerent: [1939, 1945],
    series: [
      { year: 1938, population: 34.8, armedForces: 0.3 },
      { year: 1939, population: 35.1, armedForces: 1.0, note: 'About 1 million mobilised, poorly equipped, no effective armoured force' },
      { year: 1940, population: 31.5, armedForces: 0.05, note: 'Divided between Germany and the USSR; Home Army forming' },
      { year: 1941, population: 29.0, armedForces: 0.1 },
      { year: 1942, population: 27.0, armedForces: 0.15, note: 'Home Army about 200,000 sworn members by 1942' },
      { year: 1943, population: 25.5, armedForces: 0.2 },
      { year: 1944, population: 24.5, armedForces: 0.4, note: 'Uprising August-October; Polish armies formed in the east and in Italy' },
      { year: 1945, population: 24.0, armedForces: 0.45, note: 'Frontier shifted westwards; millions of transfers planned' },
    ],
    peakForces: 1.0,
    militaryDeaths: 0.18,
    civilianDeaths: 5.4,
    deathsNote:
      'Poland lost about 17% of the population of its prewar state — the highest proportion of any country. About 3 million Polish Jews, roughly 90% of Polish Jewry, were murdered, along with 1.5-2 million non-Jewish Poles. Any percentage for Poland depends on which frontier you measure against — the 1937 state, the 1945 state, or everyone living on that land in 1939 — and military deaths are hard to separate from civilian ones here, because so many prisoners and partisans were killed outside the laws of war.',
    simple: 'Lost about one person in six, more than any other country in proportion to its people.',
  },
  {
    id: 'Yugoslavia',
    name: 'Yugoslavia',
    bloc: 'allies',
    capital: 'Belgrade',
    belligerent: [1941, 1945],
    series: [
      { year: 1938, population: 15.3, armedForces: 0.4 },
      { year: 1939, population: 15.5, armedForces: 0.5 },
      { year: 1940, population: 15.7, armedForces: 0.6 },
      { year: 1941, population: 15.8, armedForces: 1.0, note: 'Mobilised about 1 million in April 1941; defeated in eleven days' },
      { year: 1942, population: 15.0, armedForces: 0.12, note: 'Chetnik and Partisan forces; the Independent State of Croatia carried out its own killing' },
      { year: 1943, population: 15.0, armedForces: 0.15, note: '100,000 (1943)' },
      { year: 1944, population: 15.2, armedForces: 0.3, note: '800,000 (1945)' },
      { year: 1945, population: 15.2, armedForces: 0.8 },
    ],
    peakForces: 1.0,
    militaryDeaths: 0.3,
    civilianDeaths: 0.9,
    deathsNote:
      'Yugoslav losses are given as 1.0-1.7 million depending on method and on whether the killings in the Independent State of Croatia and postwar reprisals are counted. About 80,000-90,000 Yugoslav Jews were murdered.',
    simple: 'Invaded in 1941 and torn apart by a war that was at once occupation, civil war and ethnic cleansing.',
  },
  {
    id: 'Romania',
    name: 'Romania',
    bloc: 'axis',
    capital: 'Bucharest',
    belligerent: [1941, 1944],
    series: [
      { year: 1938, population: 19.4, armedForces: 0.5 },
      { year: 1939, population: 19.5, armedForces: 0.6 },
      { year: 1940, population: 19.0, armedForces: 0.65, note: 'Lost Bessarabia and northern Bukovina to the USSR, northern Transylvania to Hungary' },
      { year: 1941, population: 19.9, armedForces: 0.75, note: 'Joined Barbarossa with the largest Axis army after Germany' },
      { year: 1942, population: 20.2, armedForces: 0.7, note: 'Romanian Third and Fourth Armies encircled at Stalingrad' },
      { year: 1943, population: 20.0, armedForces: 0.5 },
      { year: 1944, population: 20.0, armedForces: 0.5, note: 'Changed sides on 23 August; fought on alongside the USSR to May 1945' },
      { year: 1945, population: 20.2, armedForces: 0.55 },
    ],
    peakForces: 0.75,
    militaryDeaths: 0.3,
    civilianDeaths: 0.28,
    deathsNote:
      'Romanian military deaths 1941-45 are usually put near 370,000-400,000: about 180,000 in the war against the USSR before August 1944, 167,000 killed, wounded or missing, and about 216,000 who died in Soviet captivity — categories that overlap and are counted differently by different historians. Between about 114,000 and 165,000 Jews and some 11,000 Roma were killed by Romanian troops and administration in Bessarabia, Bukovina and Transnistria; the larger range of 265,000-380,000 sometimes quoted includes deaths in occupied territory at German hands.',
    simple: 'Joined Germany to recover lost land, then switched to the Allies in 1944.',
  },
  {
    id: 'Hungary',
    name: 'Hungary',
    bloc: 'axis',
    capital: 'Budapest',
    belligerent: [1941, 1945],
    series: [
      { year: 1938, population: 9.1, armedForces: 0.2 },
      { year: 1939, population: 9.1, armedForces: 0.22, note: 'Recovered Carpathian Ruthenia in March 1939' },
      { year: 1940, population: 12.3, armedForces: 0.25, note: 'Northern Transylvania returned by the Second Vienna Award' },
      { year: 1941, population: 14.7, armedForces: 0.25, note: 'Joined the attack on Yugoslavia and then on the USSR' },
      { year: 1942, population: 14.7, armedForces: 0.35, note: 'Second Army of 200,000 destroyed on the Don in January 1943' },
      { year: 1943, population: 14.6, armedForces: 0.3 },
      { year: 1944, population: 14.5, armedForces: 0.35, note: 'Occupied by Germany in March; 430,000 Hungarian Jews deported May-July' },
      { year: 1945, population: 14.4, armedForces: 0.3, note: 'Siege of Budapest, February 1945' },
    ],
    peakForces: 0.35,
    militaryDeaths: 0.3,
    civilianDeaths: 0.3,
    deathsNote:
      'About 300,000 military deaths. About 560,000 Hungarian Jews were murdered, most of them deported in 1944 after the German occupation, together with about 25,000 Roma.',
    simple: 'Kept trying to leave the war; Germany occupied it in 1944 anyway.',
  },
  {
    id: 'Finland',
    name: 'Finland',
    bloc: 'co_belligerent',
    capital: 'Helsinki',
    belligerent: [1939, 1945],
    series: [
      { year: 1938, population: 3.7, armedForces: 0.03 },
      { year: 1939, population: 3.7, armedForces: 0.33, note: 'Winter War: about 330,000 mobilised against 450,000 Soviet attackers' },
      { year: 1940, population: 3.7, armedForces: 0.35, note: 'Treaty of Moscow, 12 March: 11% of the area ceded' },
      { year: 1941, population: 3.7, armedForces: 0.49, note: 'Continuation War: about 490,000 mobilised, 85% of fit manpower' },
      { year: 1942, population: 3.7, armedForces: 0.46 },
      { year: 1943, population: 3.7, armedForces: 0.42 },
      { year: 1944, population: 3.7, armedForces: 0.4, note: 'Soviet offensive in June; armistice 19 September; Lapland War against Germany begins' },
      { year: 1945, population: 3.8, armedForces: 0.3 },
    ],
    peakForces: 0.49,
    militaryDeaths: 0.094,
    civilianDeaths: 0.002,
    deathsNote:
      '93,000-97,000 Finnish military deaths in 1939-45. Finland was the only country bordering the USSR to keep both its independence and its democratic system.',
    simple: 'A small country that fought the Soviet Union twice and stayed free and democratic.',
  },
  {
    id: 'Greece',
    name: 'Greece',
    bloc: 'allies',
    capital: 'Athens',
    belligerent: [1940, 1945],
    series: [
      { year: 1938, population: 7.2, armedForces: 0.15 },
      { year: 1939, population: 7.3, armedForces: 0.2 },
      { year: 1940, population: 7.3, armedForces: 0.4, note: '15 divisions mobilised; drove the Italians back into Albania' },
      { year: 1941, population: 7.2, armedForces: 0.05, note: 'German intervention in April; the winter of 1941-42 saw mass famine in Athens' },
      { year: 1942, population: 7.0, armedForces: 0.02, note: 'Famine deaths estimated at 50,000-300,000' },
      { year: 1943, population: 6.9, armedForces: 0.02 },
      { year: 1944, population: 6.9, armedForces: 0.05, note: 'ELAS/EAM partisan army about 50,000-80,000' },
      { year: 1945, population: 7.0, armedForces: 0.1, note: 'Civil War began in December 1944 and continued after May 1945' },
    ],
    peakForces: 0.4,
    militaryDeaths: 0.04,
    civilianDeaths: 0.35,
    deathsNote:
      'About 40,000 military deaths, counting the 1940-41 campaign and the partisan armies. Total Greek losses of 300,000-800,000 are variously estimated, with famine deaths in the winter of 1941-42 the largest single component — the winter after the Germans requisitioned the harvest. About 60,000-67,000 Greek Jews were deported, most of them from Salonica, and 87% of Thessaloniki’s Jewish community perished.',
    simple: 'Beat Italy first, then suffered occupation and famine — and a civil war before the war ended.',
  },
  {
    id: 'United States',
    name: 'United States',
    bloc: 'allies',
    capital: 'Washington DC',
    belligerent: [1941, 1945],
    series: [
      { year: 1938, population: 130.4, armedForces: 0.2, note: 'Army of 189,000, ranked about 18th in the world' },
      { year: 1939, population: 131.7, armedForces: 0.2 },
      { year: 1940, population: 132.2, armedForces: 0.45, note: 'First peacetime conscription in September 1940' },
      { year: 1941, population: 132.9, armedForces: 1.8, note: '1.64 million under arms by September; at war from 8 December' },
      { year: 1942, population: 133.9, armedForces: 3.9, note: 'First ground forces in Europe in November (Torch)' },
      { year: 1943, population: 134.6, armedForces: 8.1 },
      { year: 1944, population: 138.4, armedForces: 11.2, note: 'About 1.6 million in the European theatre by the end of 1944' },
      { year: 1945, population: 140.1, armedForces: 12.1 },
    ],
    peakForces: 12.1,
    militaryDeaths: 0.41,
    civilianDeaths: 0.001,
    deathsNote:
      '405,000 American deaths in all theatres, of whom about 186,000 died in the European theatre including the Atlantic. No civilian deaths of the scale suffered by European countries.',
    simple: 'Joined in late 1941 and became the arsenal and the manpower reserve of the Allies.',
  },
];

/** Aggregate for the "who was fighting whom" panel. */
export const BLOCS: Record<Bloc, { label: string; members: string[]; blurb: string }> = {
  axis: {
    label: 'Axis',
    members: ['Germany', 'Italy', 'Hungary', 'Romania', 'Bulgaria', 'Slovakia'],
    blurb:
      'The Tripartite Pact of 27 September 1940 bound Germany, Italy and Japan; Hungary, Romania, Slovakia and Bulgaria joined later. Japan fought a separate war on the other side of the world, and there was no joint planning machinery between the two — a standard explanation for Axis defeat. Japan is not tabulated here, because this table covers the principal European combatants and the United States.',
  },
  allies: {
    label: 'Western Allies',
    members: ['United Kingdom', 'France', 'United States', 'Poland', 'Yugoslavia', 'Greece'],
    blurb:
      'Britain and France declared war over Poland in 1939; the governments-in-exile of occupied Europe brought their armies and empires with them. The United States joined after December 1941.',
  },
  soviet: {
    label: 'Soviet Union',
    members: ['Soviet Union'],
    blurb:
      'Neutral between August 1939 and June 1941, and meanwhile an occupier of eastern Poland and the Baltic states. From 1941 it bore about three quarters of all German military losses.',
  },
  co_belligerent: {
    label: 'Co-belligerents and neutrals',
    members: ['Finland', 'Italy (after 1943)'],
    blurb:
      'Finland fought the USSR as a co-belligerent of Germany without ever signing the Tripartite Pact; Italy after September 1943 fought alongside the Allies as a co-belligerent, not an ally. States like Sweden, Switzerland, Ireland, Spain and Turkey stayed out, though all of them were affected.',
  },
  collaboration: {
    label: 'Collaboration',
    members: ['France (Vichy)', 'Norway (Quisling)', 'Serbia (Nedić)', 'Italian Social Republic'],
    blurb:
      'Regimes that shared power with the occupier. Vichy France was never an ally of Germany and was itself occupied in November 1942, yet it wrote its own anti-Jewish statutes on 3 October 1940 and 2 June 1941 and handed over Jews from the unoccupied zone when asked. Calling a regime a collaborator is a judgement about who really held power, and the argument about Vichy in particular is still running.',
  },
  occupied: {
    label: 'Occupied',
    members: ['Poland', 'Czechoslovakia', 'Austria', 'Denmark', 'Norway', 'Netherlands', 'Belgium', 'France', 'Yugoslavia', 'Greece', 'Albania'],
    blurb:
      'States whose land was under German or Soviet administration, and whose governments, where they survived, sat in London or Moscow. Annexed territory — Austria, Alsace-Lorraine, western Poland — does not appear on the map as a country at all, which is itself the point of looking.',
  },
  neutral: {
    label: 'Neutral',
    members: ['Sweden', 'Switzerland', 'Ireland', 'Spain', 'Portugal', 'Turkey', 'Argentina'],
    blurb:
      'Neutrality was not the same as staying out of the war: Sweden sold ball bearings and let German troops cross its borders, Switzerland turned away most Jewish refugees, Turkey was neutral until it declared war on Germany in February 1945, and Portugal’s Azores bases were opened to the Allies in October 1943.',
  },
};
