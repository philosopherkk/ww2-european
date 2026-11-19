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
        'Germany attacked Poland on 1 September. Britain and France kept their promise to Poland and declared war on Germany on 3 September. On 17 September the Soviet Union attacked Poland from the east as well.',
      secondary:
        'Germany invaded Poland on 1 September 1939; Britain and France, bound by their guarantee to Poland, declared war on 3 September; the Soviet Union invaded eastern Poland on 17 September under the secret protocol attached to the German-Soviet pact of 23 August. Poland as an independent state was destroyed within five weeks.',
      university:
        'September 1939 converted a German-Polish crisis into a European war because the declarations of 3 September engaged the British and French empires automatically; the Soviet invasion of 17 September completed the partition agreed in the secret protocol of 23 August. Contemporaries did not experience the month as decisive — no battle had yet been fought in the west, and the belligerents had committed to a war whose shape none of them could describe.',
    },
    unsettled: {
      primary:
        'The United States stayed out of the war, and the Soviet Union and Germany were still partners, not enemies. Almost no fighting happened in western Europe that autumn.',
      secondary:
        'It did not make the war a German-Soviet conflict — the two regimes traded with each other until June 1941 — and it did not bring the United States in. On the western front almost nothing happened in the months that followed, which were later nicknamed the “phony war”.',
      university:
        'September settled none of the questions that later decided the war: whether the German-Soviet relationship would survive (it did not, until June 1941); whether the United States would intervene (not until December 1941); and when Britain and France would fight on land. The campaign lasted five weeks; the naval and economic war that began on 3 September lasted six more years.',
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
        'Italy joined the war on 10 June, hoping to win land in a war that looked finished. On 22 June France signed an armistice, and Germany occupied the north and west of the country. Britain refused to give in.',
      secondary:
        'Italy declared war on 10 June; the Franco-German armistice was signed in the Forest of Compiègne on 22 June and came into force on 25 June. A French government under Marshal Pétain, based at Vichy, remained a sovereign state with an unoccupied zone, a fleet and an empire — not merely a German prefecture. The Low Countries and Norway were already under German occupation, but Britain stayed in the war.',
      university:
        'The defeat of France in six weeks removed the continental second front from the war for four years and left Britain as the only belligerent facing Germany from the Atlantic. The armistice terms — which preserved French sovereignty, the fleet and the empire — are the reason Vichy could function as a regime with its own policy for the next four years, which is exactly what Robert Paxton’s research established against the older “shield of France” apologetics.',
    },
    unsettled: {
      primary:
        'The war did not end. Germany had not invaded Britain, and the future of the French empire was still open.',
      secondary:
        'It did not end the war, conquer Britain, or decide the future of the French empire. The Battle of Britain had not even begun; the air fighting of July to October 1940 would determine whether an invasion was ever possible.',
      university:
        'June 1940 decided nothing about the postwar order and little about the military issue — German victory in 1940 was an operational result without a strategic settlement, as the contested status of the French fleet, the empire and the United States all showed over the following year.',
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
        'On 22 June 1941 Germany attacked the Soviet Union, breaking its pact with Stalin. This was not just a new front: the army was ordered to destroy the Soviet state and to kill Jews and other civilians in the lands it occupied.',
      secondary:
        'Germany invaded the Soviet Union on 22 June 1941, breaking the 1939 pact. This was not only a new front. The campaign had been planned, from the Commissar Order and the guidelines of March 1941 onward, as a war of annihilation against the Soviet state and against Jews and other civilians in the occupied east.',
      university:
        'Barbarossa fused conventional and ideological war from the planning stage: the economic plans later called the Hunger Plan, the jurisdiction decrees and the deployment of the Einsatzgruppen made annihilation policy, not by-product. That is the point of consensus; what remains contested is whether Stalin was himself preparing to strike first in July 1941.',
    },
    unsettled: {
      primary:
        'The attack did not destroy the Red Army that year. Moscow did not fall, and the United States was still not fighting in Europe.',
      secondary:
        'It did not destroy the Red Army in 1941, and Moscow did not fall; the Soviet counter-offensive of 5 December ended the idea of a quick victory. The United States was still not a belligerent in Europe.',
      university:
        'The “preventive strike” thesis — that Stalin was about to attack and so Hitler’s blow of 22 June was anticipatory — has never been accepted by the operational historians: Glantz and House’s reading remains the standard, that the Red Army was massing for a counter-stroke but was nowhere near ready in June 1941. See “Soviet planning in June 1941” under Sources & how to read.',
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
        'Japan attacked the American fleet at Pearl Harbor on 7 December. Four days later Germany declared war on the United States, even though nothing made it do so, and America answered with declarations of war of its own.',
      secondary:
        'Four days after the Japanese attack on Pearl Harbor, Hitler declared war on the United States in the Reichstag on 11 December 1941, and Italy did the same day; the US Congress declared war on Germany and Italy later that day. The Tripartite Pact did not legally require Germany to act, because Japan had struck first. This was a European-war event: it made the United States a full belligerent in the war already being fought in the Atlantic, and soon in North Africa and western Europe.',
      university:
        'The decision was Hitler’s own and was not forced by the pact, by Japanese requests (Tokyo asked Germany to hold back from America while it fought Britain), or by facts on the ground; it followed instead from Hitler’s reading that war with the United States was coming anyway and that a Germany at war could not choose its date. The undeclared Atlantic shooting war since September 1941 and Lend-Lease since 11 March meant American neutrality had already ended in substance; 11 December made it end in law, and “Germany first” had already been agreed in the ABC-1 staff conversations of March 1941.',
    },
    unsettled: {
      primary:
        'American armies were still small in December 1941. The strength the United States would use in Europe came in 1942 to 1945, not at once.',
      secondary:
        'It did not put American soldiers in Europe that winter; the first major US ground operations came with Torch in November 1942. The military weight of the United States in Europe belongs to 1942-45 — strength figures for December 1941 would mislead.',
      university:
        'The card makes the United States a co-belligerent, not a battlefield: US ground forces in the west were negligible until late 1942, and the conversion of industry to war production — the real subject of 1942 — lay ahead. Whether Hitler’s declaration was a strategic blunder or merely the earliest of several unavoidable dates is a genuine argument; that American entry was coming in 1942 is not.',
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
        'In one month the Allies won three big battles. British forces beat the Germans and Italians at El Alamein in Egypt, American and British troops landed in French North Africa, and the Soviets surrounded the whole German Sixth Army at Stalingrad.',
      secondary:
        'November 1942 delivered three blows in quick succession: the Second Battle of El Alamein (begun 23 October) broke the Axis position in Egypt; Operation Torch landed Western Allied forces in French North Africa on 8 November; and Operation Uranus, launched on 19 November, encircled Sixth Army at Stalingrad. The desert war turned, the Allies gained a foothold in the Mediterranean, and Germany lost the strategic initiative on two fronts at once.',
      university:
        'The month matters less for any single battle than for the simultaneity: after Uranus the German field army in the east could not replace its losses, while Torch committed the Western Allies to a continental land war in 1943. Note the ordering in the sources — El Alamein began on 23 October and is filed there, and its result, including the fall of Tobruk in the second week of November, overlapped with Uranus, which is the one genuinely new fact of November.',
    },
    unsettled: {
      primary:
        'None of these battles ended the war. German troops still held most of Europe, and the fighting in North Africa went on until May 1943.',
      secondary:
        'None of the three operations ended the war: the Axis was not expelled from Tunisia until May 1943, the encirclement at Stalingrad had still to be liquidated (February 1943), and German troops still occupied France, the Low Countries, Norway and most of the Soviet west.',
      university:
        'The cluster framing is deliberate: “Stalingrad alone won the war” cannot be squared with the fact that the Wehrmacht recovered at Kharkov within weeks and attacked again at Kursk in July 1943. What November 1942 changed was the distribution of the initiative, not the territorial or material odds, which still favoured Germany through 1943.',
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
        'The German army trapped at Stalingrad ran out of food and ammunition, and its commander surrendered. A few days later the Germans attacked again further north and took back the city of Kharkov.',
      secondary:
        'The last of the Sixth Army capitulated on 2 February 1943, the day after its commander, now Field Marshal Paulus, had surrendered; about 91,000 prisoners marched out, of whom only 5,000-6,000 ever came home. Seventeen days later Manstein’s counterstroke (19 February) struck the overextended Soviet spearheads and began the fighting that retook Kharkov on 14 March.',
      university:
        'The pair of events — capitulation on 2 February, counterstroke from 19 February — is the essential February 1943 reading: the destruction of Sixth Army was the greatest single shock to German arms since the war began, and it was followed within three weeks by an operational recovery that created the Kursk salient. The overextended Soviet winter offensive of January-February 1943 and Manstein’s recovery from 19 February together show a Red Army that had learned to encircle but had not yet learned to consolidate.',
    },
    unsettled: {
      primary:
        'Losing Sixth Army did not end the war in the east. Germany still had millions of soldiers there, and it attacked again the next summer.',
      secondary:
        'It did not end the eastern war, which continued for two and a half more years; Manstein’s counterstroke at Kharkov, the loss of Kharkov again in August, and Kursk in July all lay ahead. Goebbels’s “total war” speech of 18 February answered the defeat politically — it was not a map change.',
      university:
        'Treat the month as a pair, not as “Stalingrad won the war”: the surrender fixed the verdict on Stalingrad itself, while Kharkov showed the German operational art could still impose a costly defeat on the Red Army in open manoeuvre, and the initiative of spring 1943 was genuinely contested. What Stalingrad settled — the reliability of Germany’s allies, the credibility of the Wehrmacht in occupied Europe — took months to become visible.',
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
        'Germany made its last big attack in the east at Kursk, and the Allies landed on the island of Sicily. Both happened this month, and the German attack was stopped after only a few days.',
      secondary:
        'Operation Citadel began on 5 July against the Kursk salient and was abandoned within days against prepared defences; on 10 July the Allies landed in Sicily. Within three weeks Mussolini had fallen (25 July) and the grand alliance was negotiating Italy’s exit, while the Red Army had recovered the initiative at Orel and Belgorod.',
      university:
        'The month’s significance is the pairing of a failed offensive and an Allied landing: Citadel had no operational reserve behind it, and Husky opened a theatre Germany had not prepared for, so Germany lost the ability to mass in either theatre. The popular label “largest tank battle of the war” is disputed — the frontier battles of June 1941 were comparable in armour committed, and the archival literature has revised Prokhorovka down sharply — and it is used on this site nowhere, because it says less than “Germany’s last strategic offensive in the east” does.',
    },
    unsettled: {
      primary:
        'Italy was still in the war this month, and Rome was not taken. The eastern front did not collapse.',
      secondary:
        'Neither operation ended its war: Italy fought on as a co-belligerent only from October, Rome did not fall until June 1944, and the eastern front after Kursk retreated in order rather than collapsed.',
      university:
        'Kursk did not produce a Soviet 1944-style breakthrough in 1943; the counterstrokes at Orel and Belgorod were immediate but shallow, and the German army withdrew largely intact to the Panther line. The Red Army’s ability to follow a defensive victory with deep exploitation is a 1944 achievement (Bagration), not a July 1943 one.',
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
        'In the same month the Allies landed in Normandy, on 6 June, and the Soviet Union launched a huge attack in Belarus, on 22 June. Germany was now in a war it had to fight with everything on all sides.',
      secondary:
        'Overlord began on 6 June 1944; Operation Bagration, timed to its two- and-a-half-week anniversary, began on 22 June. They were separate operations planned separately, but their effect in the same month was to destroy the German position in Normandy and to annihilate Army Group Centre. The war in Europe became a true two-front material contest in June 1944, which is what Germany’s strategic planning had tried to prevent since 1938.',
      university:
        'The simultaneity was not coordination — Stalin timed Bagration partly for its anniversary symbolism, and Overlord had its own weather window — but the effect on German resource allocation was identical, and the Luftwaffe’s collapse in the west was a precondition of Overlord and no part of Bagration. Read the two operations together to see why 1944, not 1943, is the year the material argument closed.',
    },
    unsettled: {
      primary:
        'Neither battle ended the war. The Allies were still stuck in the Normandy fields for weeks, and the Red Army was still more than a thousand kilometres to the east.',
      secondary:
        'It did not end the war: the breakout from Normandy came in August, not in June; Warsaw was not taken until January 1945; and the eastern front stabilised on the Vistula for four months while the Polish uprising was crushed. Fighting in the west continued for another eleven months.',
      university:
        'June 1944 did not make the war “decided” in any simple sense — German resistance lasted another eleven months, and the operational problems of the Allied advance (port capacity, the single-road breakout, the failure at Market Garden in September) were all still unresolved. What the month settled was the destruction of two German field armies’ coherence, which no later German offensive could replace.',
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
        'On 12 January the Soviet armies in Poland attacked and raced across the country towards Germany, reaching the river Oder within three weeks. On 27 January Soviet soldiers reached the camp at Auschwitz and freed the prisoners there.',
      secondary:
        'The Vistula-Oder offensive, launched on 12 January at the Western Allies’ request to ease pressure in the Ardennes, carried the 1st Belorussian and 1st Ukrainian fronts from the Vistula to the Oder — 450 to 500 km in twenty-two days — taking Warsaw on 17 January and Krakow on the 18th. On 27 January, as the 100th Rifle Division approached Oswiecim, the camp complex of Auschwitz was liberated; most prisoners had already been marched west in the days before.',
      university:
        'Two different histories met in this month: the military one, in which the February pause on the Oder is the genuine subject of debate — whether it was an unavoidable logistical check or a political choice about the timing of Berlin — and the camp one, in which the liberation is neither Soviet triumphalism nor simple rescue: the guards had mostly fled, but most of the prisoners had already been driven out on the death marches of 17-21 January. The campaign line on the map shows the offensive; its strength figures are approximations, as all figures on this site are.',
    },
    unsettled: {
      primary:
        'Reaching the Oder did not mean taking Berlin. The attack stopped for two months and the city fell only in May.',
      secondary:
        'The offensive stopped on the Oder in February; Berlin was not taken until the operation of April-May 1945, and eastern Pomerania, East Prussia and Silesia still had to be cleared first. Auschwitz was freed, but the rest of the camp system was still being emptied westward, and Bergen-Belsen was freed in April and Theresienstadt not until May.',
      university:
        'The month settled the Polish question de facto — the Lublin government was installed as the offensive advanced — and settled nothing else: the Oder pause, the Yalta settlement to come, and the continuing death marches mean January 1945 is a hinge, not a conclusion. The operational debate over the pause remains open because the Soviet archival record is contested; so does the reason for the 12 January date, which some writers attribute to the Yalta appeal for help in the Ardennes and others doubt moved Stalin at all.',
    },
    mapNote:
      'The dataset has no winter 1944-45 border state: this month is drawn with the October 1943 borders — fifteen months earlier — so the map still looks like 1943 while the Red Army stands on the Oder. The campaign line, not the border fills, is what shows the offensive.',
    eventIds: ['vistula_oder_opens', 'auschwitz'],
    sources: ['Glantz and House, When Titans Clashed', 'Holocaust Encyclopedia'],
  },
  {
    id: 'surrender_1945_05',
    month: '1945-05',
    title: 'Germany surrenders, at two desks, on two dates',
    matters: {
      primary:
        'Germany gave up without conditions. The papers were signed on 7 May and the fighting stopped on 8 May, which is why Britain, America and France celebrate on 8 May and Russia celebrates on 9 May.',
      secondary:
        'Unconditional surrender was signed at Reims on 7 May 1945 and ratified at Karlshorst near Berlin on 8 May at Soviet insistence; the ceasefire took effect at 23:01 Central European Time on 8 May, which is why the USSR marks Victory Day on 9 May. It came after Hitler’s death on 30 April, the fall of Berlin on 2 May and the Prague rising on 5 May.',
      university:
        'May 1945 closed the European war through two instruments and two calendars, and the difference between them is not a trivia point but the last substantive act of the alliance: Soviet insistence on Karlshorst pre-empted any separate peace with the West that the Flensburg government had still tried to engineer. Fighting and local surrenders did not finish on one morning — Prague fought its own battle from 5 May, Breslau held until 6 May, and the Army Group Centre capitulation came only on 11 May after Prague had already been liberated.',
    },
    unsettled: {
      primary:
        'The end of the fighting did not end the suffering. Many soldiers were still prisoners, millions of people were still away from home, and the borders of Europe were not settled yet.',
      secondary:
        'It did not end the war in the Pacific, and in Europe it did not end displacement, captivity or poverty: millions of prisoners of war, displaced persons and refugees were still in motion in May 1945, and the German borders and occupation zones were not settled until Potsdam later that summer.',
      university:
        'The surrender is the end of military history and the start of the political arguments it left open — the Oder-Neisse line, Poland’s government, the status of Germany — none of which was decided at Reims or Karlshorst. Read the 8 May card first, then the Prague and Flensburg material in its secondary text; the “one clean end date” is a calendar convention, not what happened.',
    },
    mapNote:
      'The last border snapshot in the dataset is the state at the end of April 1945; May 1945 and the last months of the timeline are all drawn with those borders. The changes agreed later at Potsdam are not shown anywhere on this site.',
    eventIds: ['ve_day', 'hitler_death', 'prague'],
    sources: ['The Oxford Companion to World War II', 'Imperial War Museums'],
  },

  {
    id: 'april_1938_state',
    month: '1938-04',
    title: 'The first border state: after Anschluss, before Munich',
    matters: {
      primary:
        'Germany had already taken over Austria in March 1938, so Austria is part of Germany on this map. Czechoslovakia still exists, and no country in Europe is at war on this date.',
      secondary:
        'This is the earliest border state in the dataset, dated 30 April 1938. It follows the Anschluss of 12-13 March but precedes the Munich Agreement of September. The Sudeten German leader Konrad Henlein demanded autonomy for the Sudetenland in the Karlsbad Programme of 24 April.',
      university:
        'The first state on the map is a snapshot of appeasement before the crisis, not a picture of a stable Europe: Germany had already destroyed the 1919 settlement in Austria, and the Karlsbad demands were the opening move in the destruction of Czechoslovakia.',
    },
    unsettled: {
      primary: 'The map does not show the fighting that was still to come, and it cannot show how quickly Czechoslovakia would disappear.',
      secondary:
        'Munich was still five months away, the occupation of Prague almost a year, and war over Poland a year and a half. The “at peace” colour is accurate for this date and misleading as a picture of the following months.',
      university:
        'The border state cannot show the effect of the Anschluss on Czechoslovak strategy — encirclement on three sides, the loss of Austrian reserves and oil — which is why the event cards carry what this map cannot.',
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
        'The map now shows Czechoslovakia broken up: Bohemia and Moravia are under German rule and Slovakia is a separate German ally. Italy has taken Albania, and Germany has taken Memel.',
      secondary:
        'Between the April 1938 and April 1939 states, Munich handed the Sudetenland to Germany in October 1938, German forces occupied Prague on 15 March 1939, Lithuania ceded Memel on 23 March and Italy invaded Albania on 7 April. Britain guaranteed Poland on 6 April after Germany demanded Danzig.',
      university:
        'This snapshot records the colossal change produced by Munich and its aftermath: the destruction of the only remaining eastern European democracy with a functioning army, and the creation of a German protectorate on its territory. The guarantee to Poland that followed turned the next crisis into a European war.',
    },
    unsettled: {
      primary: 'There was still no fighting in Europe on this date, and Italy and the Soviet Union were not yet in the war.',
      secondary:
        'The Nazi-Soviet Pact was still four months away, and the invasion of Poland five. The new borders were the product of threats and treaties rather than battles, and they were not accepted by the states that lost them.',
      university:
        'Whether Britain and France could still have deterred Germany in 1939 is a debated question; the map cannot show the diplomatic exchanges, only the territorial result, so the cards on the guarantee and the Polish refusal carry that argument.',
    },
    mapNote:
      'The map shows the state as at 30 April 1939: Czechoslovakia has vanished as a shape, Albania has been absorbed into Italy, and Poland still appears intact until the October 1939 state.',
    eventIds: ['italy_albania', 'poland_refuses_germany', 'british_guarantee_poland'],
    sources: ['The Oxford Companion to World War II', 'Overy, The Dictators'],
  },
  {
    id: 'october_1939_state',
    month: '1939-10',
    title: 'The map after five weeks of war: Poland divided',
    matters: {
      primary:
        'Poland no longer appears as a country. Germany and the Soviet Union have divided its land between them, and the Germans have set up a government in the part they occupied.',
      secondary:
        'Germany attacked Poland on 1 September, the Soviet Union on 17 September, and Warsaw surrendered on 28 September. The German occupation created the General Government on 26 October for the unannexed centre; the west was annexed to the Reich. In October 1939 Hitler also authorised the killing of disabled people in the programme known as T4.',
      university:
        'The first new border state of the war is a map of partition, not of battle: it shows the result of the secret protocol of August 1939, and the disappearance of Poland is the fact that the map records most plainly. The occupation administration was prepared while the fighting was still going on.',
    },
    unsettled: {
      primary: 'The war did not stop when Poland was beaten; fighting had barely begun in the west.',
      secondary:
        'The western front was still largely quiet, and Italy and the Soviet Union were not yet at war with the Western Allies. The map cannot show the secret protocol or the fate of Polish Jews under both occupiers.',
      university:
        'The General Government on the map is a shape, not a state: it was a colonial administration without international standing. The T4 killing programme, authorised in the same month, belongs to the history of how occupation became extermination, which the border layer cannot carry.',
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
        'Germany has taken Denmark and Norway, but Belgium, the Netherlands and France are still shown as they were before the attack in the west. This is the last border state before the Blitzkrieg through the Low Countries.',
      secondary:
        'Weserübung began on 9 April 1940: Denmark surrendered in hours, while Norway fought until June. The map dated 30 April records those occupations but still shows the Low Countries as neutral, because the German attack there began on 10 May, eleven days later.',
      university:
        'The snapshot is a study in bad timing: it captures the war between the Scandinavian campaign and the western offensive, which is why it is useful for asking what changed in May — and why any reader who stays on this state through June will be shown borders that no longer describe the war.',
    },
    unsettled: {
      primary: 'France had not yet fallen, and Britain was still fighting with France.',
      secondary:
        'The Battle of France, Dunkirk and the armistice of June all lie ahead; Norway was not finally cleared of German forces until the end of June.',
      university:
        'The map cannot show the sea war or the occupation of the Norwegian coast, both of which mattered more than the inland border: Germany’s hold on Norwegian airfields and iron ore routes shaped the rest of the war in the north.',
    },
    mapNote:
      'April 1940 is the closest border state for March, April and May 1940; the Netherlands, Belgium and Luxembourg are still neutral on it even though they were overrun in May.',
    eventIds: ['weserubung'],
    sources: ['The Oxford Companion to World War II'],
  },
  {
    id: 'april_1941_state',
    month: '1941-04',
    title: 'The state after the Balkans campaign',
    matters: {
      primary:
        'Yugoslavia has been broken up into several states and occupied zones, and Greece is under attack. The Soviet Union is still formally at peace with Germany on this map.',
      secondary:
        'Germany and its allies invaded Yugoslavia and Greece in April 1941; the Independent State of Croatia was proclaimed on 10 April, and Montenegro and Serbia were occupied. The map shows that partition but draws Greece as a single undivided shape, understating the German, Italian and Bulgarian zones.',
      university:
        'The Balkan campaign delayed Barbarossa and created four years of anti-partisan war in mountainous country. The snapshot captures the territorial settlement of a few weeks, not the guerrilla war that made the occupation expensive.',
    },
    unsettled: {
      primary: 'The Soviet Union had not yet been invaded, and the war in the east had not begun.',
      secondary:
        'Barbarossa began on 22 June 1941, two months after this state; the siege of Leningrad and the encirclements at Minsk and Smolensk were still ahead.',
      university:
        'The map cannot show the German, Italian and Bulgarian occupation zones inside Greece, which the source layer never drew; a reader should treat the single Greek shape as understated rather than as a correct description of who held what.',
    },
    mapNote:
      'The April 1941 border state is the one the map shows for months before and after the Balkan campaign; it records the break-up of Yugoslavia but not the occupation zones inside Greece.',
    eventIds: ['operation_marita', 'siege_of_tobruk'],
    sources: ['The Oxford Companion to World War II', 'Glantz and House, When Titans Clashed'],
  },
  {
    id: 'september_1941_state',
    month: '1941-09',
    title: 'The state at the high-water mark in the east',
    matters: {
      primary:
        'The Baltic states have been absorbed into the Soviet Union and German occupation administrations have been set up in the east. Leningrad is surrounded, and the Germans are close to Moscow.',
      secondary:
        'The September 1941 border state follows the Baltic campaigns and the first months of Barbarossa. It adds the Reichskommissariate Ostland and Ukraine to the map and removes the Baltic states as separate polygons; Leningrad was cut off on 8 September, and the mass shooting at Babi Yar took place on 29-30 September.',
      university:
        'This state is the closest the dataset gets to the German high-water mark in the east, and its arrival in September is itself a warning: the source layer has the two Reichskommissariate labels on each other’s polygons, which the build script corrects by geography. The events carry the killings that no border map can show.',
    },
    unsettled: {
      primary: 'Moscow had not fallen, and the Soviet army was still fighting.',
      secondary:
        'The Soviet counter-offensive before Moscow began on 5 December 1941, and the United States did not enter the European war until 11 December.',
      university:
        'A border map cannot show a siege or a killing site; the September state shows who held land, which is a different question from what was happening to the people in it.',
    },
    mapNote:
      'September 1941 is the last border state before October; it is drawn with the Reichskommissariate labels corrected by geography, a data fix disclosed in the Sources panel.',
    eventIds: ['siege_leningrad', 'babi_yar', 'barbarossa'],
    sources: ['Glantz and House, When Titans Clashed', 'USHMM Holocaust Encyclopedia'],
  },

  {
    id: 'april_1942_state',
    month: '1942-04',
    title: 'The state before the summer offensive',
    matters: {
      primary:
        'This is the border state before the German summer attack in the east. The Reichskommissariate and the Romanian administration of Transnistria are on the map; the great German advance of the summer is not.',
      secondary:
        'The April 1942 state shows the German-occupied east after the winter fighting, before Case Blue opened on 28 June. Romania administered Transnistria east of the Dniester, and the Baltic states had been absorbed into the Soviet Union in 1940 and have no separate polygons here.',
      university:
        'The map’s high-water mark in the east actually came in November 1942, seven months after this state, and is not drawn anywhere in the dataset. The state is useful precisely because it shows how little the source layer changed between 1941 and 1943, even while the war moved hundreds of kilometres.',
    },
    unsettled: {
      primary: 'The German army had not yet reached Stalingrad or the Caucasus in this state.',
      secondary:
        'Operation Blue, the advance to the Volga and the Caucasus, the landings in North Africa and the encirclement at Stalingrad were all still ahead.',
      university:
        'The campaign lines on the map move by month even when the border fills do not: the ring on the Blue line for May or June 1942 is an interpolation along an axis, not a surveyed front, as every line tooltip says.',
    },
    mapNote:
      'April 1942 is the nearest border state for February to August 1942; the summer offensive and the November high-water mark are carried by campaign lines and event cards, not by a new border polygon.',
    eventIds: ['malta_siege', 'operation_blue'],
    sources: ['Glantz and House, When Titans Clashed', 'Playfair, The Mediterranean and Middle East IV'],
  },
  {
    id: 'april_1943_state',
    month: '1943-04',
    title: 'The state after Stalingrad, before Kursk',
    matters: {
      primary:
        'Stalingrad is over, but the map still shows the German-Soviet frontier almost where it was in 1941. The next great battle, at Kursk, has not yet begun.',
      secondary:
        'The April 1943 state follows the surrender at Stalingrad and Manstein’s counterstroke before Kharkov, yet the source layer gives up almost no German-held territory. The Warsaw Ghetto Uprising began on 19 April, while both sides were preparing for the Kursk battle of July.',
      university:
        'This snapshot is a good test of the map’s honesty: it retains the 1941 frontier in places where the real front had moved, and the source material never followed the 1942 German advance into the Caucasus and the Volga. The events and campaign lines must carry the changes the border layer cannot.',
    },
    unsettled: {
      primary: 'The war in the east was not over; Germany attacked again at Kursk in July.',
      secondary:
        'The German recovery at Kharkov in March and the long preparation for Citadel show that Stalingrad shifted the initiative without deciding the campaign.',
      university:
        'Whether Stalingrad was the decisive turning point or one of several — alongside El Alamein, Torch and the Battle of the Atlantic — is a genuine argument, which is why the November 1942 and February 1943 panels treat those months as a cluster.',
    },
    mapNote:
      'April 1943 is the nearest border state for March to May 1943; the map still draws the 1941 frontier in places, and the Stalingrad pocket and the Kharkov counterstroke are not drawn.',
    eventIds: ['warsaw_ghetto_uprising', 'stalingrad_surrender', 'kursk'],
    sources: ['USHMM Holocaust Encyclopedia', 'Glantz and House, When Titans Clashed'],
  },
  {
    id: 'october_1943_state',
    month: '1943-10',
    title: 'The state after Italy changed sides',
    matters: {
      primary:
        'Italy is now shown as two states: a royal government in the south fighting with the Allies, and Mussolini’s republic in the north supported by Germany. German forces have taken over the Italian occupation zones in the Balkans.',
      secondary:
        'The armistice was announced on 8 September 1943 and Italy declared war on Germany on 13 October. The border state dated 31 October shows the royal government as co-belligerent and the Italian Social Republic in the centre and north; Germany also took over Albania and Montenegro from Italian occupation.',
      university:
        'The Italian division is the clearest territorial result of a political event on this map, and also a reminder of the data’s coarseness: the southern polygon excludes Naples and Foggia, which were already in Allied hands, so the shape understates the area the royal government held.',
    },
    unsettled: {
      primary: 'Germany still held most of Italy, and the fighting there went on until 1945.',
      secondary:
        'Rome was not taken until June 1944, and the German defensive lines in the north prolonged the campaign for another twenty months.',
      university:
        'The map shows a state, not a front: the German, Italian and partisan struggles inside the same polygon cannot be drawn, so the armed resistance and the German reprisals are left to the event cards.',
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
        'This is the border state the map shows for D-Day: the Reichskommissariat Ukraine has disappeared from the outline, but Romania, Hungary and Bulgaria are still in the Axis camp.',
      secondary:
        'The April 1944 state follows the disappearance of the Reichskommissariat Ukraine and the Soviet advance into the Balkans and Poland. The Crimea was cleared by early May and the Crimean Tatars were deported that month; Germany had occupied Hungary in March, but its allies had not yet changed sides.',
      university:
        'The snapshot is two months before Overlord and Bagration and a few months before Romania and Bulgaria switched sides. It is the last state before the rapid collapse of 1944, which is why the June panel has to tell readers that the map still shows these April borders.',
    },
    unsettled: {
      primary: 'The Allies had not yet landed in Normandy, and the Red Army had not destroyed Army Group Centre.',
      secondary:
        'D-Day and Bagration both fell in June 1944; the Warsaw Uprising and the Bulgarian and Romanian changes of side came later in the summer and autumn.',
      university:
        'The border layer cannot show the German occupation zones or the timing of the Allied and Soviet advances inside a single monthly state; campaign lines and event cards supply what the polygons omit.',
    },
    mapNote:
      'April 1944 is the closest border state for May to August 1944, including D-Day and Bagration; the June panel says so explicitly, and no June 1944 polygon is invented.',
    eventIds: ['crimea_1944', 'hungary_occupied', 'd_day'],
    sources: ['Glantz and House, When Titans Clashed', 'The Oxford Companion to World War II'],
  },
  {
    id: 'april_1945_state',
    month: '1945-04',
    title: 'The last border state, and what it cannot show',
    matters: {
      primary:
        'This is the final map in the dataset. Germany’s shape is copied from April 1944, so cities that had already fallen still appear inside it, and the war in Europe is nearly over.',
      secondary:
        'The 30 April 1945 state repeats the German, Hungarian and Bulgarian polygons of April 1944. Soviet forces had taken Königsberg, Poznań and Vienna, but the source layer never redrew those frontiers. The month’s real events were the battle for the Seelow Heights, the liberation of Bergen-Belsen and Hitler’s death on 30 April.',
      university:
        'The last snapshot is the least reliable in the dataset and says as much about how the source was compiled as about April 1945: it keeps the 1944 outline under attack and colours the surviving General Government and Ostland shapes for the Soviet occupation. The Potsdam frontier agreed later in 1945 is not on this map at all.',
    },
    unsettled: {
      primary: 'Germany had not officially surrendered yet; the fighting ended in May.',
      secondary:
        'The Reims and Karlshorst surrenders, the Prague rising and the final local capitulations all lie in May 1945, after the timeline’s last border state.',
      university:
        'The map cannot show the flight of refugees, the camps being liberated or the occupation zones agreed at Yalta; the reader should not mistake the final shape for a picture of postwar Europe.',
    },
    mapNote:
      'This is the last of the twelve border states; May to August 1945 are all drawn with these frozen end-of-April borders, and the May panel explains the surrender on the ground.',
    eventIds: ['seelow_berlin', 'belsen_1945', 'hitler_death'],
    sources: ['The Oxford Companion to World War II', 'USHMM Holocaust Encyclopedia'],
  },

];

/** The turning point for a timeline month, if there is one. */
export function turningPointFor(monthKey: string): TurningPoint | undefined {
  return TURNING_POINTS.find((t) => t.month === monthKey);
}
