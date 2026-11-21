// Turning-point panels shown above the event list for selected months
// (rendered by components/TurningPointPanel.tsx). Each entry covers one
// timeline month and says, at all three reading levels, what changed in that
// month and — equally important — what it did NOT settle. Titles are
// deliberately understated, and the hedging in the university texts is
// deliberate: these are the points historians still argue about.
// Sources are named in the words used by the "Sources & how to read" tab.

import type { Level } from './events-1938-1940';

export interface TurningPoint {
  id: string;
  /** YYYY-MM key of the timeline month this panel belongs to. */
  month: string;
  title: string;
  /** "Why this month matters" — one paragraph per reading level. */
  matters: Record<Level, string>;
  /** "What it did not settle." */
  unsettled: Record<Level, string>;
  /** Caveat about what the map cannot show for this month, where relevant. */
  mapNote?: string;
  /** Event-card ids to point at; clicking a chip opens that card. */
  eventIds: string[];
  /** Where the panel's content comes from, in short label form. */
  sources: string[];
}

export const TURNING_POINTS: TurningPoint[] = [
  {
    id: 'war_begins_1939_09',
    month: '1939-09',
    title: 'The war in Europe begins',
    matters: {
      primary:
        'Germany attacked Poland on 1 September; Britain and France declared war on 3 September.',
      secondary:
        'Germany invaded Poland on 1 September 1939; Britain and France declared war on 3 September; the USSR invaded on 17 September. Poland ceased to exist in five weeks.',
      university:
        'September turned a German-Polish crisis into a European war because the declarations of 3 September engaged both empires; 17 September completed the partition the secret protocol promised.',
    },
    unsettled: {
      primary:
        'The Soviet Union attacked from the east on 17 September; little fighting reached the west.',
      secondary:
        'The Soviet stroke came under the pact’s secret protocol; the two regimes traded until 1941, and the west sat through a phony war.',
      university:
        'Contemporaries did not feel the month as decisive, and it settled none of the questions that later decided the war: the German-Soviet relationship, American intervention, and when Britain and France would fight on land.',
    },
    mapNote:
      'Until the October snapshot the map draws this month with April 1939 borders — Poland still appears whole on the map while it was being partitioned.',
    eventIds: [
      'invasion_poland',
      'declaration_of_war',
      'soviet_invasion_poland',
      'molotov_ribbentrop',
    ],
    sources: ['The Oxford Companion to World War II'],
  },
  {
    id: 'france_defeated_1940_06',
    month: '1940-06',
    title: 'France is defeated; Britain stays in the war',
    matters: {
      primary:
        'Italy joined on 10 June hoping to profit; on 22 June France signed an armistice.',
      secondary:
        'The armistice signed at Compiègne on 22 June took effect on the 25th; Pétain’s Vichy government kept a sovereign state, an unoccupied zone, a fleet and an empire. Britain stayed in the war.',
      university:
        'France’s defeat removed the second front for four years and left Britain alone. The armistice preserved sovereignty, the fleet and the empire, which is why Vichy ran its own policy — as Paxton argued against the shield-of-France apologetics.',
    },
    unsettled: {
      primary:
        'Britain refused to give in, and the French empire was still unsettled.',
      secondary:
        'The Battle of Britain had not begun; the air fighting of July to October decided whether invasion was possible.',
      university:
        'June 1940 settled nothing about the postwar order: the French fleet, the empire and the United States all stayed contested through the following year.',
    },
    mapNote:
      'There is no June 1940 border snapshot; the map still shows the April 1940 state and cannot show the partition of France. Do not read the map lines as the occupation frontier.',
    eventIds: ['italy_enters_war', 'french_armistice'],
    sources: ['Imperial War Museums', 'Paxton, Vichy France: Old Guard and New Order'],
  },
  {
    id: 'barbarossa_1941_06',
    month: '1941-06',
    title: 'Barbarossa opens a war of annihilation in the east',
    matters: {
      primary:
        'On 22 June 1941 Germany attacked the Soviet Union, breaking its pact with Stalin.',
      secondary:
        'Germany invaded on 22 June 1941, breaking the 1939 pact. From the March 1941 guidelines and the Commissar Order it was planned as a war of annihilation.',
      university:
        'Barbarossa fused conventional and ideological war from the planning stage: the economic plans later called the Hunger Plan, the jurisdiction decrees and the Einsatzgruppen made annihilation policy, not by-product — the one point of consensus.',
    },
    unsettled: {
      primary:
        'The army had been ordered to destroy the Soviet state and kill Jews and other civilians.',
      secondary:
        'It did not destroy the Red Army: Moscow held, and the counter-offensive of 5 December ended any quick victory. America was not yet a belligerent.',
      university:
        'The preventive-strike thesis, that Hitler’s blow anticipated a Soviet attack, has never been accepted by operational historians; Glantz and House remain the standard reading.',
    },
    mapNote:
      'The nearest border state is April 1941 — two months before the attack — so the map shows the frontier as it stood before Barbarossa, not the conquests of June 1941; the campaign lines show the direction of the three army groups, not the daily front.',
    eventIds: ['barbarossa'],
    sources: ['Glantz and House, When Titans Clashed', 'Overy, The Dictators'],
  },
  {
    id: 'usa_in_the_war_1941_12',
    month: '1941-12',
    title: 'Germany brings the United States into the European war',
    matters: {
      primary:
        'Japan attacked Pearl Harbor on 7 December, and Germany declared war on the United States four days later.',
      secondary:
        'Hitler declared war on the United States on 11 December 1941, four days after Pearl Harbor; Italy followed, and Congress answered at once. The Tripartite Pact did not require Germany to act.',
      university:
        'The decision was Hitler’s own, forced neither by the pact nor by Japanese requests, and it followed from his reading that war with America was coming anyway.',
    },
    unsettled: {
      primary:
        'Nothing obliged Germany to do that; America answered in kind.',
      secondary:
        'It made the United States a full belligerent in Europe, but put no soldiers there until Torch in November 1942.',
      university:
        'Lend-Lease and the undeclared Atlantic shooting war had ended neutrality in substance; 11 December ended it in law. Whether the declaration was a blunder, rather than merely early, is the live argument.',
    },
    mapNote:
      'The nearest border state is September 1941 — three months earlier — so the map shows nothing of the German advance on Moscow or the winter fighting; read the campaign line for Moscow, not the border fills.',
    eventIds: ['germany_declares_war_on_usa', 'moscow_counteroffensive', 'lend_lease'],
    sources: ['The Oxford Companion to World War II'],
  },
  {
    id: 'initiative_1942_11',
    month: '1942-11',
    title: 'El Alamein, Torch and Uranus: the initiative shifts',
    matters: {
      primary:
        'In one month the Allies won three battles: El Alamein, the North Africa landings, and Stalingrad.',
      secondary:
        'Second El Alamein from 23 October broke the Axis in Egypt; Torch landed in North Africa on 8 November; Uranus encircled Sixth Army at Stalingrad on 19 November.',
      university:
        'The month matters for simultaneity, not for any one battle: after Uranus the German army in the east could not replace its losses, and Torch committed the Western Allies to a continental land war in 1943. Tobruk fell on 13 November, inside that overlap.',
    },
    unsettled: {
      primary:
        'None ended the war: fighting in North Africa went on until May 1943.',
      secondary:
        'None ended the war: Tunisia was not cleared until May 1943, the Stalingrad pocket had to be liquidated, and Germany held Europe.',
      university:
        'November 1942 changed the distribution of the initiative, not the material odds, which still favoured Germany through 1943.',
    },
    mapNote:
      'This month is drawn with the April 1942 border state — seven months earlier, close to the Axis high-water mark — and the map cannot show the encirclement at Stalingrad or the landings in North Africa.',
    eventIds: ['operation_torch', 'operation_uranus', 'second_el_alamein'],
    sources: ['The Oxford Companion to World War II', 'Playfair, The Mediterranean and Middle East IV'],
  },
  {
    id: 'stalingrad_ends_1943_02',
    month: '1943-02',
    title: 'Sixth Army surrenders; the German front recovers at Kharkov',
    matters: {
      primary:
        'The German army trapped at Stalingrad ran out of food and ammunition; its commander surrendered.',
      secondary:
        'Sixth Army capitulated on 2 February 1943, two days after Paulus surrendered; about 91,000 prisoners marched out, of whom only 5,000-6,000 came home.',
      university:
        'Read February 1943 as a pair: capitulation on 2 February, counterstroke from the 19th. The destruction of Sixth Army was the greatest shock to German arms since the war began, and an operational recovery inside three weeks created the Kursk salient.',
    },
    unsettled: {
      primary:
        'Germany attacked again at Kharkov; the eastern war ran two and a half more years.',
      secondary:
        'Manstein’s counterstroke from 19 February retook Kharkov on 14 March, and Goebbels’s total-war speech of 18 February answered the defeat without changing any map.',
      university:
        'What Stalingrad settled — the reliability of Germany’s allies, the credibility of the Wehrmacht in occupied Europe — became visible only over months.',
    },
    mapNote:
      'This month is drawn with the April 1942 border state — ten months earlier — so the map shows neither the Stalingrad pocket nor the territory the front had lost by February 1943; the next state in the dataset is April 1943.',
    eventIds: ['stalingrad_surrender', 'kharkov_1943', 'operation_uranus'],
    sources: ['Beevor, Stalingrad', 'Glantz and House, When Titans Clashed'],
  },
  {
    id: 'kursk_sicily_1943_07',
    month: '1943-07',
    title: 'Kursk and Sicily: the last German offensive, and the landing in Italy',
    matters: {
      primary:
        'The German attack at Kursk was stopped in days, and the Allies landed in Sicily.',
      secondary:
        'Citadel began on 5 July and was abandoned within days; the Allies landed in Sicily on 10 July, Mussolini fell on 25 July, and Orel and Belgorod fell by early August.',
      university:
        'The significance is the pairing: Citadel had no operational reserve, and Husky opened a theatre Germany had not prepared for, so Germany lost the ability to mass in either. The disputed largest-tank-battle label says less than that.',
    },
    unsettled: {
      primary:
        'Italy was still in the war, and the eastern front did not collapse.',
      secondary:
        'Neither operation ended its war: Italy fought on until September, and after Kursk the eastern front retreated in order.',
      university:
        'Kursk produced no 1944-style breakthrough: the counterstrokes were shallow, and the German army withdrew intact to the Panther line. Deep exploitation is a 1944 achievement.',
    },
    mapNote:
      'The nearest border state is June 1943 — one month earlier, one of the closest matches in the dataset — but no border map can show the Kursk salient as a battle front; the campaign lines for Citadel come closest.',
    eventIds: ['kursk', 'husky'],
    sources: ['The Oxford Companion to World War II', 'Glantz and House, When Titans Clashed'],
  },
  {
    id: 'two_fronts_1944_06',
    month: '1944-06',
    title: 'Normandy and Bagration: two offensives in one month',
    matters: {
      primary:
        'Allied landings in Normandy on 6 June; the Red Army attacked in Belarus on 22 June.',
      secondary:
        'Overlord began on 6 June 1944; Bagration, timed to its two-and-a-half-week anniversary, on 22 June. Together they destroyed the German position in Normandy and annihilated Army Group Centre.',
      university:
        'The simultaneity was not coordination: Stalin timed Bagration partly for the anniversary and Overlord had its own weather window. The Luftwaffe’s collapse in the west was a precondition of Overlord and no part of Bagration.',
    },
    unsettled: {
      primary:
        'Both stalled: the Allies in the Normandy fields, the Red Army far from Berlin.',
      secondary:
        'It did not end the war: the breakout came in August, and the front steadied on the Vistula while the Polish uprising was crushed.',
      university:
        'June 1944 did not decide the war: German resistance lasted eleven more months, and the ports, the breakout and Market Garden were unresolved.',
    },
    mapNote:
      'The map still draws this month with the April 1944 border state — two months earlier; the next state in the dataset is April 1945, so the outline of Poland and France on screen reflects neither of June 1944’s operations.',
    eventIds: ['d_day', 'bagration'],
    sources: ['The Oxford Companion to World War II', 'Glantz and House, When Titans Clashed'],
  },
  {
    id: 'vistula_oder_1945_01',
    month: '1945-01',
    title: 'The Vistula-Oder offensive and the liberation of Auschwitz',
    matters: {
      primary:
        'From 12 January the Soviet armies reached the Oder in three weeks.',
      secondary:
        'The Vistula-Oder offensive, launched on 12 January at the Western Allies’ request, though writers disagree whether the Ardennes crisis fixed that date, advanced 450 to 500 km in twenty-two days, taking Warsaw on 17 January and Krakow on the 18th.',
      university:
        'The February pause on the Oder is the real argument: logistical check or political choice over Berlin. And Auschwitz was neither triumph nor simple rescue: most prisoners had already gone west on the death marches.',
    },
    unsettled: {
      primary:
        'The Oder was not Berlin: the attack paused two months, and Auschwitz was freed on 27 January.',
      secondary:
        'It stopped on the Oder in February; Berlin waited for April, and the camps were still being emptied westward.',
      university:
        'January settled the Polish question de facto, with the Lublin government installed as the offensive advanced; nothing else, not even why it began on 12 January.',
    },
    mapNote:
      'The dataset has no winter 1944-45 border state: this month is drawn with the April 1944 borders — nine months earlier — so the map still looks like the spring of 1944 while the Red Army stands on the Oder. The campaign line, not the border fills, is what shows the offensive.',
    eventIds: ['vistula_oder_opens', 'auschwitz'],
    sources: ['Glantz and House, When Titans Clashed', 'Holocaust Encyclopedia'],
  },
  {
    id: 'surrender_1945_05',
    month: '1945-05',
    title: 'Germany surrenders, at two desks, on two dates',
    matters: {
      primary:
        'Germany gave up without conditions on 7 May, and the fighting stopped on 8 May.',
      secondary:
        'Surrender was signed at Reims on 7 May 1945 and ratified at Karlshorst on 8 May; the ceasefire took effect at 23:01 Central European Time, hence Victory Day on 9 May.',
      university:
        'May 1945 closed the European war through two instruments and two calendars, and the difference was the alliance’s last substantive act: Soviet insistence on Karlshorst pre-empted a separate peace that Flensburg was still trying to engineer.',
    },
    unsettled: {
      primary:
        'That is why the western Allies celebrate on 8 May and Russia on 9 May.',
      secondary:
        'It followed Hitler’s death, the fall of Berlin and the Prague rising; it ended neither the Pacific war nor displacement.',
      university:
        'Fighting ended piecemeal — Prague on 5 May, Breslau on the 6th, Army Group Centre on 11 May — and the political arguments were left to Potsdam.',
    },
    mapNote:
      'The last border snapshot in the dataset is the state at the end of April 1945; May 1945 and the last months of the timeline are all drawn with those borders. The changes agreed later at Potsdam are not shown anywhere on this site.',
    eventIds: ['ve_day', 'hitler_death', 'prague'],
    sources: ['The Oxford Companion to World War II', 'Imperial War Museums'],
  },

  {
    id: 'surrender_japan_1945',
    month: '1945-09',
    title: 'The war ends twice: 15 August and 2 September',
    matters: {
      primary:
        'Japan accepted the terms on 15 August, and signed the instrument of surrender on 2 September 1945. The fighting of the Second World War was over.',
      secondary:
        'Hirohito’s recorded broadcast was heard at noon on 15 August; the instrument was signed aboard USS Missouri just after 09:00 Japan time on 2 September and took effect at 09:25. Between those dates the Soviet Union took Manchuria, northern Korea, southern Sakhalin and the Kuril Islands, and American troops landed south of the 38th parallel.',
      university:
        'September 1945 is the end of the war as a document rather than a cease-fire: acceptance communicated through neutral channels, the broadcast of 15 August, a failed coup by officers who refused it, occupation from 28 August, and the instrument effective at 09:25 Japan time on 2 September. Two anniversaries carry the date because the two events differ — one stopped the killing, the other is the paper. The same fortnight settled the frontiers of north-east Asia, and the line drawn through Korea in August 1945 is still the border today. This map shows the fronts of that fortnight rather than the settlement, because the settlement came later.',
    },
    unsettled: {
      primary: 'The peace treaty did not come until 1952, and Korea was already dividing into two halves.',
      secondary:
        'The peace with Japan came only with the Treaty of San Francisco, in force 28 April 1952, and the state of war with the Soviet Union only with the declaration of 1956. Korea had been divided by a surrender instruction, not a treaty.',
      university:
        'The legal end of the war is a different date from its military end, and both are defensible: San Francisco entered into force on 28 April 1952, the Soviet–Japanese declaration ended the state of war between the two countries in 1956, and Germany’s final settlement was signed only on 12 September 1990. All three lie outside the range of these maps.',
    },
    mapNote:
      'Europe keeps the borders of 30 April 1945 from May onwards. The world layer is coloured by month, so September differs from August: Japan and southern Korea are under Allied occupation, Manchukuo is gone, the north is Soviet. Southern Sakhalin and the Kurils, taken in the same fortnight, have no outline in this layer.',
    eventIds: [
      'japan_accepts_1945',
      'surrender_2_september_1945',
      'atomic_bombs_1945',
      'manchuria_1945',
      'korea_divided_1945',
    ],
    sources: [
      'English Wikipedia',
      'Reports of General MacArthur, vol. I',
      'FRUS, The Far East 1945, vol. VI',
    ],
  },

  {
    id: 'april_1938_state',
    month: '1938-04',
    title: 'The first border state: after Anschluss, before Munich',
    matters: {
      primary:
        'Austria is part of Germany here, after the March 1938 annexation. Czechoslovakia still exists, and Europe is at peace.',
      secondary:
        'The earliest border state, dated 30 April 1938: it follows the Anschluss of 12-13 March and precedes Munich. On 24 April Konrad Henlein demanded Sudeten autonomy in the Karlsbad Programme.',
      university:
        'The first state on the map is a snapshot of appeasement before the crisis, not a stable Europe: Germany had already destroyed the 1919 settlement in Austria, and the Karlsbad demands opened the destruction of Czechoslovakia.',
    },
    unsettled: {
      primary: 'It shows none of the fighting still to come.',
      secondary:
        'Munich was five months off, the occupation of Prague almost a year; the “at peace” colour holds only for this date.',
      university:
        'A border state cannot show what the Anschluss did to Czechoslovak strategy — encirclement, the loss of Austrian reserves and oil — so the event cards carry it.',
    },
    mapNote:
      'This is the first of the twelve dated states; January to March 1938 are drawn with these April borders, which is disclosed in the map banner as a state after the month selected.',
    eventIds: ['karlsbad_programme', 'anschluss'],
    sources: ['Overy, The Dictators', 'The Oxford Companion to World War II'],
  },
  {
    id: 'april_1939_state',
    month: '1939-04',
    title: 'The last border state before the war: Prague and Albania',
    matters: {
      primary:
        'Czechoslovakia is broken up: Bohemia and Moravia are under German rule, Slovakia a German ally. Italy has taken Albania.',
      secondary:
        'Munich handed the Sudetenland to Germany in October 1938, German forces occupied Prague on 15 March 1939, Lithuania ceded Memel on 23 March and Italy invaded Albania on 7 April.',
      university:
        'This snapshot records the result of Munich and its aftermath: the destruction of the only eastern European democracy with a functioning army, and a German protectorate on its territory.',
    },
    unsettled: {
      primary: 'Memel had just been taken; Europe was not yet at war.',
      secondary:
        'The Nazi-Soviet Pact was four months away and the invasion of Poland five; these borders came from threats, not battles.',
      university:
        'The guarantee to Poland that followed turned the next crisis into a European war; whether Britain and France could still have deterred Germany in 1939 is debated, and the map cannot say.',
    },
    mapNote:
      'The map shows the state as at 30 April 1939: Czechoslovakia has vanished as a shape, Albania is coloured as Italian territory, though it was kept as a kingdom in personal union with the Italian crown rather than annexed, and Poland still appears intact until the October 1939 state.',
    eventIds: ['italy_albania', 'poland_refuses_germany', 'british_guarantee_poland'],
    sources: ['The Oxford Companion to World War II', 'Overy, The Dictators'],
  },
  {
    id: 'october_1939_state',
    month: '1939-10',
    title: 'The map after five weeks of war: Poland divided',
    matters: {
      primary:
        'Poland no longer appears as a country: Germany and the Soviet Union have divided its land between them.',
      secondary:
        'Germany invaded Poland on 1 September, the Soviet Union on 17 September; Warsaw fell on 28 September. The General Government was set up on 26 October; the north-west went into the Reich.',
      university:
        'The first new border state of the war is a map of partition, not of battle: it records the result of the secret protocol of August 1939, and the occupation administration was ready before the fighting ended.',
    },
    unsettled: {
      primary: 'The war did not stop with Poland; fighting had barely begun.',
      secondary:
        'The west was still quiet, and the map cannot show the secret protocol or the fate of Poland’s Jews.',
      university:
        'Poland’s disappearance is what this map states most plainly; T4, authorised in the same month, belongs to the history of how occupation became extermination.',
    },
    mapNote:
      'October 1939 is the first border state dated after September 1939; it drops the Polish polygon entirely and paints the occupied territory according to which power took it.',
    eventIds: ['general_government', 'aktion_t4', 'invasion_poland'],
    sources: ['The Oxford Companion to World War II', 'USHMM Holocaust Encyclopedia'],
  },
  {
    id: 'april_1940_state',
    month: '1940-04',
    title: 'The state before the western offensive: Denmark and Norway occupied',
    matters: {
      primary:
        'Germany has taken Denmark and Norway; Belgium, the Netherlands and France are still neutral on this map.',
      secondary:
        'Weserübung began on 9 April 1940: Denmark surrendered in hours, Norway fought until June. The map of 30 April still shows the Low Countries neutral, because the attack there began on 10 May.',
      university:
        'The snapshot is a study in bad timing: it sits between the Scandinavian campaign and the western offensive, so June readers see borders that no longer describe the war.',
    },
    unsettled: {
      primary: 'France had not yet fallen, and the western offensive had not begun.',
      secondary:
        'The Battle of France, Dunkirk and the armistice all lie ahead of this date.',
      university:
        'It cannot show the sea war or the Norwegian coast, which mattered more than the inland border: German hold of Norwegian airfields and iron-ore routes shaped the war in the north.',
    },
    mapNote:
      'April 1940 is the border state the map shows from April 1940 to March 1941 — March 1940 is still drawn with the October 1939 state; the Netherlands, Belgium and Luxembourg are still neutral on it even though they were overrun in May.',
    eventIds: ['weserubung'],
    sources: ['The Oxford Companion to World War II'],
  },
  {
    id: 'april_1941_state',
    month: '1941-04',
    title: 'The state after the Balkans campaign',
    matters: {
      primary:
        'Yugoslavia has been broken up into states and occupation zones, and Greece is under attack.',
      secondary:
        'Germany and its allies invaded Yugoslavia and Greece in April 1941; Croatia was proclaimed independent on 10 April, and Serbia was occupied. The map draws Greece as one shape, understating the German, Italian and Bulgarian zones.',
      university:
        'The Balkan campaign is often said to have delayed Barbarossa, and it opened four years of anti-partisan war: the snapshot captures a territorial settlement of a few weeks, not the guerrilla war.',
    },
    unsettled: {
      primary: 'The Soviet Union was still at peace with Germany, and had not been invaded.',
      secondary:
        'Barbarossa began on 22 June 1941, two months later; the Minsk and Smolensk encirclements lay ahead.',
      university:
        'The German, Italian and Bulgarian zones inside Greece were never drawn in the source layer: treat the single Greek shape as understated, not as a description of who held what.',
    },
    mapNote:
      'The April 1941 border state is the one the map shows from April to August 1941, the month of the Balkan campaign and those after it — February and March 1941 are still drawn with the April 1940 state; it records the break-up of Yugoslavia but not the occupation zones inside Greece.',
    eventIds: ['operation_marita', 'siege_of_tobruk'],
    sources: ['The Oxford Companion to World War II', 'Glantz and House, When Titans Clashed'],
  },
  {
    id: 'september_1941_state',
    month: '1941-09',
    title: 'The state at the high-water mark in the east',
    matters: {
      primary:
        'The Baltic states, taken into the Soviet Union in 1940, have been under German occupation since June, and German occupation administrations now cover the occupied east.',
      secondary:
        'The September 1941 state follows the Baltic campaigns and the first months of Barbarossa. It adds the Reichskommissariate Ostland and Ukraine; Leningrad was cut off on 8 September and the mass shooting at Babi Yar followed on 29-30 September.',
      university:
        'This state is as close as the dataset comes to the German high-water mark in the east, and its date is itself a warning: the source layer has the two Reichskommissariat labels on each other’s polygons, which the build script corrects by geography.',
    },
    unsettled: {
      primary: 'Leningrad was surrounded, and Moscow had not fallen.',
      secondary:
        'The counter-offensive before Moscow began on 5 December 1941.',
      university:
        'A border map shows who held land, a different question from what was happening to the people in it.',
    },
    mapNote:
      'September 1941 is the border state the map shows from September 1941 to March 1942; it is drawn with the Reichskommissariate labels corrected by geography, a data fix disclosed in the Sources panel.',
    eventIds: ['siege_leningrad', 'babi_yar', 'barbarossa'],
    sources: ['Glantz and House, When Titans Clashed', 'USHMM Holocaust Encyclopedia'],
  },

  {
    id: 'april_1942_state',
    month: '1942-04',
    title: 'The state before the summer offensive',
    matters: {
      primary:
        'This is the state before the German summer attack in the east: the Reichskommissariate and Transnistria are on the map.',
      secondary:
        'The April 1942 state shows the German-occupied east after the winter fighting, before Case Blue opened on 28 June. Romania administered Transnistria east of the Dniester, and the Baltic states, absorbed by the Soviet Union in 1940, have no polygons of their own.',
      university:
        'The map’s real high-water mark in the east came in November 1942, seven months later, and is not drawn anywhere in the dataset.',
    },
    unsettled: {
      primary: 'The advance to Stalingrad and the Caucasus had not begun.',
      secondary:
        'Operation Blue, North Africa and Stalingrad were still ahead.',
      university:
        'Little changed in the source layer between 1941 and 1943 while the war moved hundreds of kilometres, and the ring on the Blue line for May 1942 is an interpolation along an axis, as every tooltip says.',
    },
    mapNote:
      'April 1942 is the nearest border state for April 1942 to March 1943 — February and March 1942 are still drawn with the September 1941 state; the summer offensive and the November high-water mark are carried by campaign lines and event cards, not by a new border polygon.',
    eventIds: ['malta_siege', 'operation_blue'],
    sources: ['Glantz and House, When Titans Clashed', 'Playfair, The Mediterranean and Middle East IV'],
  },
  {
    id: 'april_1943_state',
    month: '1943-04',
    title: 'The state after Stalingrad, before Kursk',
    matters: {
      primary:
        'Stalingrad is over, but the map still shows the German-Soviet frontier almost where it was in 1941.',
      secondary:
        'The April 1943 state follows the surrender at Stalingrad and Manstein’s counterstroke before Kharkov, yet the source layer gives up almost no German-held territory. The Warsaw Ghetto Uprising began on 19 April.',
      university:
        'This snapshot tests the map’s honesty: it keeps the 1941 frontier where the real front had moved, and the source material never followed the 1942 German advance into the Caucasus and the Volga.',
    },
    unsettled: {
      primary: 'The east was not settled; Germany attacked again at Kursk in July.',
      secondary:
        'Kharkov and the preparation for Citadel show that Stalingrad shifted the initiative without deciding the campaign.',
      university:
        'The border layer cannot carry that: whether Stalingrad was decisive or one of several turning points, alongside El Alamein, Torch and the Atlantic, is a genuine argument.',
    },
    mapNote:
      'April 1943 is the nearest border state for April and May 1943 — March 1943 is still drawn with the April 1942 state, and the next one is June 1943; the map still draws the 1941 frontier in places, and the Stalingrad pocket and the Kharkov counterstroke are not drawn.',
    eventIds: ['warsaw_ghetto_uprising', 'stalingrad_surrender', 'kursk'],
    sources: ['USHMM Holocaust Encyclopedia', 'Glantz and House, When Titans Clashed'],
  },
  {
    id: 'october_1943_state',
    month: '1943-10',
    title: 'The state after Italy changed sides',
    matters: {
      primary:
        'Italy is now two states: a royal government in the south with the Allies, and Mussolini’s republic in the north.',
      secondary:
        'The armistice was announced on 8 September 1943 and Italy declared war on Germany on 13 October. The 31 October map shows the royal government as co-belligerent and the Italian Social Republic in the north.',
      university:
        'The division of Italy is the clearest territorial result of a political event on this map, and a reminder of the data’s coarseness: the southern polygon excludes Naples and Foggia, already in Allied hands.',
    },
    unsettled: {
      primary: 'Germany still held most of Italy; fighting lasted into 1945.',
      secondary:
        'Rome fell only in June 1944, and the German lines in the north prolonged the campaign.',
      university:
        'The map shows a state, not a front: the German, Italian and partisan struggles cannot be drawn, so the event cards carry the resistance and the reprisals.',
    },
    mapNote:
      'The October 1943 border state is the first to show the Italian armistice; its southern polygon is drawn smaller than the territory the Allies actually held, a coarseness of the source geometry rather than a fact about the armistice.',
    eventIds: ['italy_armistice', 'italian_social_republic', 'danish_rescue'],
    sources: ['The Oxford Companion to World War II', 'USHMM Holocaust Encyclopedia'],
  },
  {
    id: 'april_1944_state',
    month: '1944-04',
    title: 'The state before Overlord and Bagration',
    matters: {
      primary:
        'The map shows these borders for D-Day: Romania, Hungary and Bulgaria are still in the Axis camp.',
      secondary:
        'The April 1944 state follows the disappearance of the Reichskommissariat Ukraine and the Soviet advance into Poland and the Balkans; the offensive of 8 April cleared the Crimea by 9 May, and the Tatars were deported in May.',
      university:
        'The snapshot is two months before Overlord and Bagration and a few months before Romania and Bulgaria switched sides: the last state before the collapse of 1944.',
    },
    unsettled: {
      primary: 'The Allies had not landed in Normandy, and Bagration had not begun.',
      secondary:
        'D-Day and Bagration came in June; Romania and Bulgaria changed sides later in 1944.',
      university:
        'The border layer cannot show the German occupation zones or the timing of the Allied and Soviet advances inside one monthly state; campaign lines and event cards supply what the polygons omit.',
    },
    mapNote:
      'April 1944 is the closest border state from April 1944 to March 1945, so it carries May to August 1944, including D-Day and Bagration; the June panel says so explicitly, and no June 1944 polygon is invented.',
    eventIds: ['crimea_1944', 'hungary_occupied', 'd_day'],
    sources: ['Glantz and House, When Titans Clashed', 'The Oxford Companion to World War II'],
  },
  {
    id: 'april_1945_state',
    month: '1945-04',
    title: 'The last border state, and what it cannot show',
    matters: {
      primary:
        'This is the dataset’s final map: Germany’s shape is copied from April 1944, so cities already fallen still appear inside it.',
      secondary:
        'The 30 April 1945 state repeats the German, Hungarian and Bulgarian polygons of April 1944, although Soviet forces had taken Königsberg, Poznań and Vienna. The month’s events were the Seelow Heights, Bergen-Belsen and Hitler’s death.',
      university:
        'The last snapshot is the least reliable in the dataset: it keeps the 1944 outline under attack, and colours the surviving General Government and Ostland shapes for Soviet occupation.',
    },
    unsettled: {
      primary: 'Germany had not surrendered; the fighting ended in May.',
      secondary:
        'The Reims and Karlshorst surrenders and the Prague rising lie in May 1945, after the last state.',
      university:
        'The Potsdam frontier agreed later in 1945 is not on this map, nor is the flight of refugees or the camps being liberated: the final shape is not a picture of postwar Europe.',
    },
    mapNote:
      'This is the last of the twelve border states; May to September 1945 are all drawn with these frozen end-of-April borders. The May panel explains the surrender on the ground in Europe, and the September panel the end of the war against Japan, which is where the colours do move.',
    eventIds: ['seelow_berlin', 'belsen_1945', 'hitler_death'],
    sources: ['The Oxford Companion to World War II', 'USHMM Holocaust Encyclopedia'],
  },

];

/** The turning point for a timeline month, if there is one. */
export function turningPointFor(monthKey: string): TurningPoint | undefined {
  return TURNING_POINTS.find((t) => t.month === monthKey);
}
