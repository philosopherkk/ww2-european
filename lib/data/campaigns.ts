/**
 * Army movement / campaign lines for the map.
 *
 * Coordinates are [lat, lng] of real places along the axis of advance, checked
 * against the places they are named for. `from`/`to` are ISO dates: a line is
 * shown when the selected month overlaps the campaign window, and a ring marks
 * the point along the axis the advance had reached by the end of that month.
 *
 * Lines show advance, not retreat — a dashed line reading in one direction
 * cannot tell you which way an army was moving, so withdrawals (Dunkirk's
 * beaches excepted, since that was an embarkation) are left to the events.
 */
export type Side = 'german' | 'soviet' | 'western';

export interface CampaignLine {
  id: string;
  name: string;
  /** Operation code-name where one exists. */
  operation?: string;
  side: Side;
  from: string;
  to: string;
  /** Ordered waypoints of the axis of advance. */
  path: [number, number][];
  summary: string;
  /** Strength committed, for the university-level reading. */
  strength?: string;
}

export const CAMPAIGN_LINES: CampaignLine[] = [
  {
    id: 'poland_1939',
    name: 'Invasion of Poland: the northern arm',
    operation: 'Fall Weiss',
    side: 'german',
    from: '1939-09-01',
    to: '1939-10-06',
    path: [
      [53.77, 16.10], // Bad Polzin / Połczyn-Zdrój, Army Group North HQ at the opening of the campaign
      [53.12, 18.01], // Bydgoszcz (Bromberg), the Polish Corridor
      [52.44, 20.68], // Modlin, northern approach to Warsaw
      [52.23, 21.01], // Warsaw, invested from the north in the first days
    ],
    summary:
      'Army Group North attacked from Pomerania (4th Army) and East Prussia (3rd Army) through the Polish Corridor and towards Warsaw from the north; its headquarters opened at Bad Polzin, now Połczyn-Zdrój. Polish field armies were by-passed rather than destroyed in the opening week, and Warsaw was invested in the first days. This is a schematic axis of advance through named places, not a surveyed daily front line. The ring marks an interpolated position along that axis by date, not a documented map reference for that morning.',
    strength: '~1.5 million German men, some 2,100 aircraft; ~1 million Polish soldiers engaged',
  },
  {
    id: 'poland_1939_south',
    name: 'Invasion of Poland: the southern arm on Kraków and Lwów',
    operation: 'Fall Weiss',
    side: 'german',
    from: '1939-09-01',
    to: '1939-09-28',
    path: [
      [49.94, 17.9], // Opava, Army Group South's headquarters in Silesian Ostrava region
      [50.06, 19.95], // Kraków, taken 6 September
      [49.84, 24.03], // Lwów, besieged 12-22 September
    ],
    summary:
      'Army Group South drove from Silesia and Slovakia towards Kraków and Lwów, taking Kraków on 6 September. The Bzura counter-offensive of 9-22 September belongs west of Warsaw, not on this southern axis, and is described in the invasion of Poland event. This is a schematic axis of advance through named places, not a surveyed daily front line. The ring marks an interpolated position along that axis by date, not a documented map reference for that morning.',
    strength: '~55 divisions, including four panzer and four light divisions',
  },
  {
    id: 'soviet_poland_1939',
    name: 'Soviet invasion of eastern Poland',
    side: 'soviet',
    from: '1939-09-17',
    to: '1939-10-06',
    path: [
      [53.9, 27.57], // Minsk, assembly
      [52.1, 23.7], // Brest-Litovsk, taken 22 September after a joint German-Soviet parade
      [49.84, 24.03], // Lwów, the southern front's objective
    ],
    summary:
      'The Red Army crossed on 17 September to the line agreed in the German-Soviet Frontier Treaty of 28 September. Some 12-13 million people, of whom barely half were ethnic Poles, passed under Soviet rule; some 320,000 Polish soldiers were taken prisoner, and in April and May 1940 about 22,000 Polish officers and prisoners were shot in the Katyn forest and elsewhere.',
    strength: 'Seven Soviet field armies: 600,000-800,000 men, 4,736 tanks and 3,300 aircraft, against far weaker Polish border and reserve units',
  },
  {
    id: 'winter_war',
    name: 'Soviet attack on Finland',
    side: 'soviet',
    from: '1939-11-30',
    to: '1940-03-12',
    path: [
      [59.93, 30.34], // Leningrad, the start line
      [60.57, 28.44], // Summa, the strongest point of the Mannerheim Line
      [60.7, 28.73], // Vyborg, taken 13 March, days before the peace
    ],
    summary:
      'The 7th Army attacked across the 70 km-wide Karelian isthmus into a forest and lake landscape with one road per division. The Mannerheim Line held until a huge artillery preparation let a new Soviet commander concentrate a breakthrough at Summa on 1 February. In the far north the Red Army took Salla but was stopped at Kemijärvi; Finland kept its independence but lost 11% of its population’s land, and 400,000 Karelians were evacuated rather than live under Soviet rule.',
    strength: '~450,000 Soviet men and ~2,500 tanks against ~280,000 Finns with almost no tanks; Soviet dead 123,000-167,000, Finnish about 25,000',
  },
  {
    id: 'weserubung',
    name: 'Invasion of Denmark and Norway',
    operation: 'Weserübung',
    side: 'german',
    from: '1940-04-09',
    to: '1940-06-10',
    path: [
      [54.52, 18.54], // Gdynia, the embarkation port for Oslo
      [55.68, 12.57], // Copenhagen, taken in hours
      [59.91, 10.75], // Oslo, where the Blücher was sunk in the Oslofjord
      [63.43, 10.39], // Trondheim
      [68.44, 17.43], // Narvik, the iron-ore port, retaken by Allied troops on 28 May
    ],
    summary:
      'Germany struck to keep iron ore from Sweden and to pre-empt a British mine, and took six ports in one night. It was the first combined seaborne, airborne and amphibious operation of the war — and the biggest German naval loss of it: the heavy cruiser Blücher, the light cruisers Karlsruhe and Königsberg, and ten destroyers, which left the Kriegsmarine too weak to resist the later invasions it had just secured.',
    strength:
      'About 100,000 men in seven divisions for Norway; for Denmark the 170th and 198th Infantry Divisions and the 11th Schützen Brigade, with 527 aircraft',
  },
  {
    id: 'fall_gelb',
    name: 'Attack in the west: the Ardennes thrust to the Channel',
    operation: 'Fall Gelb',
    side: 'german',
    from: '1940-05-10',
    to: '1940-05-21',
    path: [
      [50.94, 6.96], // Cologne, assembly behind the Rhine
      [50.56, 4.69], // Gembloux gap, where the Allies went forward to meet the feint
      [49.7, 4.94], // Sedan, the Meuse crossed on 13 May
      [49.56, 3.62], // Laon, the French reserve counter-attack broken on 16 May
      [49.89, 2.3], // Amiens, taken 20 May
      [50.11, 1.83], // Abbeville on the Channel, reached the same day
    ],
    summary:
      'The best-known operational gamble of the war: Kleist’s panzer group crossed the Meuse at Sedan against a French army of reservists, then turned west across open country instead of helping to crush the Allied armies in Belgium. Reaching the Channel at Abbeville on 20 May cut those armies off from France. The armoured crews had been running on bread and jam for four days when the halt order of 23-27 May stopped them within sight of Dunkirk.',
    strength: '10 panzer and 4 motorised divisions in the corridor; ~136 German divisions against ~135 Allied, of which France fielded about 100',
  },
  {
    id: 'dunkirk_evac',
    name: 'Evacuation of the British and French armies',
    operation: 'Dynamo',
    side: 'western',
    from: '1940-05-26',
    to: '1940-06-04',
    path: [
      [51.03, 2.38], // Dunkirk, the only port left, already wrecked by bombing
      [51.12, 1.31], // Dover, the crossing took under two hours in daylight
    ],
    summary:
      '338,226 men were taken off in nine days, about a third of them French, mostly by naval vessels and the 700 small ships whose owners answered the Admiralty’s call. The army escaped but left 2,400 guns, 64,000 vehicles and its reserves of ammunition behind; the RAF flew over 3,500 sorties in the nine days and lost 145 aircraft; the Luftwaffe lost 156.',
  },
  {
    id: 'fall_rot',
    name: 'The drive south: Paris falls and France asks for terms',
    operation: 'Fall Rot',
    side: 'german',
    from: '1940-06-05',
    to: '1940-06-25',
    path: [
      [49.7, 4.94], // the Aisne and Somme line, where the offensive began on 5 June
      [48.86, 2.35], // Paris, declared an open city and occupied on 14 June
      [47.32, 5.04], // Dijon
      [45.76, 4.83], // Lyon, taken on 25 June, the last day of fighting
    ],
    summary:
      'The second German offensive broke what remained of the French field armies in three weeks. Paris was occupied on 14 June without a fight, the government fled to Bordeaux, Mussolini declared war on 10 June to claim a seat at the peace table and was stopped by a much weaker Alpine French army, and the armistice signed in the same railway carriage at Compiègne as in 1918 came into force on 25 June. France kept its fleet, its empire and an unoccupied zone — the terms that made Vichy possible.',
    strength: '~3 million German men engaged; the French armies had lost some 800,000 men killed, wounded or captured',
  },
  {
    id: 'marita',
    name: 'Invasion of Yugoslavia and Greece',
    operation: 'Marita',
    side: 'german',
    from: '1941-04-06',
    to: '1941-04-30',
    path: [
      [42.7, 23.32], // Sofia, where the Twelfth Army had been assembling since March
      [42.28, 22.8], // Kyustendil, into the Struma valley
      [40.64, 22.94], // Thessaloniki, taken on 9 April by the 2nd Panzer Division, before the British reached the city
      [39.64, 22.42], // Larissa, the British expeditionary force's last depot
      [38.81, 22.56], // Thermopylae, held for two days in April as in 480 BC
      [37.98, 23.73], // Athens, entered on 27 April
    ],
    summary:
      'A coup in Belgrade on 27 March brought Yugoslavia into the war against Germany; Belgrade was bombed on 6 April (perhaps 1,500-2,200 killed; older accounts said far more) and the country was cut in two in eleven days, partly by German attack, partly by the internal divisions Hitler then exploited by letting Croatia secede. Greece was attacked from Bulgaria, and the British expeditionary force of ~58,000 was evacuated as at Dunkirk. This campaign is the reason Barbarossa started weeks late, though how much it really cost is still argued.',
    strength: '~700,000 Axis troops; British expeditionary force ~58,000',
  },
  {
    id: 'barbarossa_north',
    name: 'Barbarossa: Army Group North to the gates of Leningrad',
    side: 'german',
    from: '1941-06-22',
    to: '1941-09-08',
    path: [
      [54.69, 25.28], // Vilnius, start line of the 4th Panzer Group
      [55.88, 26.63], // Dvinsk, taken 26 June over an intact bridge
      [57.82, 28.35], // Pskov, reached 10 July; the Leningrad-Moscow railway was cut here
      [58.52, 31.28], // Novgorod, taken 19 August
      [59.93, 30.34], // Leningrad: the ring closed on 8 September
    ],
    summary:
      'Army Group North drove 700 km through the Baltic states in three weeks, meeting less resistance than expected because the Red Army’s formations there were green and its best units had been sent to the west. It took Luga and Novgorod and reached the Gulf of Finland; when Hitler pulled its panzers away to help encircle Kiev, the city was invested rather than stormed — the beginning of an 872-day siege in which about a million people died, most of them of hunger.',
    strength: '~460,000 men and ~500 tanks; Leningrad’s civilian population had been close to 3 million',
  },
  {
    id: 'barbarossa_centre',
    name: 'Barbarossa: Army Group Centre on Moscow',
    side: 'german',
    from: '1941-06-22',
    to: '1941-12-04',
    path: [
      [53.13, 23.17], // Białystok, start line
      [53.9, 27.57], // Minsk, 29 June: 300,000 Soviet prisoners in the first pocket
      [54.78, 32.05], // Smolensk, taken 17 July after a second encirclement
      [55.75, 37.62], // Moscow: the last reconnaissance patrols reached the Moscow Canal, within sight of the city, on 2 December
    ],
    summary:
      'Two enormous encirclements at Białystok-Minsk and Smolensk broke the Western Front, but they also cost five weeks — the pause at Smolensk that let Stalin move Siberian divisions west. The final offensive, Typhoon, began 2 October, took Bryansk and Vyazma, and was stopped 20 km short of the capital by cold, distance, and reserves brought from the east on intelligence from Richard Sorge in Tokyo that Japan had decided to strike south, not north.',
    strength: 'Army Group Centre: 50 divisions and ~950 tanks, the largest of the three army groups',
  },
  {
    id: 'barbarossa_south',
    name: 'Barbarossa: Army Group South to Kiev',
    side: 'german',
    from: '1941-06-22',
    to: '1941-09-26',
    path: [
      [50.75, 25.32], // Lutsk, where the first day’s tank battle was fought
      [49.84, 24.03], // Lwów, taken 30 June
      [48.75, 30.22], // Uman, 20 August: ~100,000 Soviet prisoners
      [50.45, 30.52], // Kiev, encircled 16 September
    ],
    summary:
      'The fighting here was harder than in the north because the Soviet South-West Front was stronger and better led, and because Stalin forbade withdrawal from Kiev until four armies were already in the trap. The Kiev pocket was the largest encirclement of the war: the German count was 665,000 prisoners. One week later the same panzer groups were turned north for Moscow.',
    strength: '~1 million men and some 800 tanks; Soviet losses in the pocket disputed but enormous',
  },
  {
    id: 'moscow_1941',
    name: 'The Battle of Moscow: the Soviet counter-offensive',
    side: 'soviet',
    from: '1941-12-05',
    to: '1942-04-20',
    path: [
      [55.75, 37.62], // Moscow, from whose suburbs the counter-stroke was launched
      [56.33, 36.65], // Klin, retaken 15 December
      [56.04, 36.01], // Volokolamsk, retaken 26 December
      [56.25, 34.32], // Rzhev, the line to which Army Group Centre was pushed and where the front settled
    ],
    summary:
      'The first strategic counter-offensive of the war drove Army Group Centre back 100-250 km and destroyed the myth of German invincibility; it is reckoned to have cost the Wehrmacht more casualties in a month than the whole 1940 campaign in the west. It did not liberate Smolensk or reach Vyazma: the Soviet winter counter-offensives of 1942 failed, and the Rzhev salient bled both sides until 1943, which is why Russian historians argue about whether Zhukov should have struck north towards Leningrad instead.',
    strength: '~1.1 million Soviet men and ~1,000 tanks; Army Group Centre at 40-50% of strength',
  },
  {
    id: 'blue_1942',
    name: 'The 1942 offensive to the Don and the Volga',
    operation: 'Fall Blau',
    side: 'german',
    from: '1942-06-28',
    to: '1942-11-18',
    path: [
      [49.99, 36.23], // Kharkov, the jumping-off point after the failed Soviet spring offensive
      [51.67, 39.21], // Voronezh, by-passed on 5 July, which Hitler counted as a mistake
      [51.37, 40.54], // Borisoglebsk, on the Don
      [48.71, 44.51], // Stalingrad: the Volga reached north and south of the city on 23 August
    ],
    summary:
      'The 1942 offensive went for the oil and the grain rather than the capital. It was split on 23 July into two directions — Army Group A into the Caucasus, Sixth Army to Stalingrad — which left each too weak for its task, and it left 400 km of Don flank to Romanian, Italian and Hungarian armies that were poorly anti-tank equipped and poorly informed that they were the flank. The city became the object itself, and the Sixth Army was ground up taking 90% of it.',
    strength: '~1.5 million Axis men in Army Groups A and B, a third of them allied rather than German',
  },
  {
    id: 'caucasus_1942',
    name: 'The drive on the Caucasus oilfields',
    operation: 'Edelweiß',
    side: 'german',
    from: '1942-07-23',
    to: '1942-12-11',
    path: [
      [47.24, 39.72], // Rostov, taken on the 23rd
      [44.61, 40.09], // Maikop, taken 9 August; its wells had already been wrecked
      [43.32, 45.7], // Grozny, the next objective, never reached
      [40.41, 49.87], // Baku, the ultimate objective, 480 km beyond the supply limit
    ],
    summary:
      'Seventeenth Army advanced over the Caucasus range — the German mountain troops raised the flag on Mount Elbrus — and reached the oil fields of Maikop, which the Soviets had demolished on withdrawal. The advance ran out of fuel and road space before Grozny. Germany’s fundamental problem was that it needed the oil and the only fields it could reach intact were already destroyed or too far away; synthetic fuel and Hungarian and Romanian deliveries had to carry the war.',
    strength: 'Army Group A ~700,000 men at the start; mountain troops of the 1st Mountain Division to the high passes',
  },
  {
    id: 'uranus',
    name: 'Operation Uranus: the encirclement at Stalingrad',
    side: 'soviet',
    from: '1942-11-19',
    to: '1942-11-23',
    path: [
      [49.58, 42.73], // Serafimovich, the Don bridgehead held since September, from which the northern pincer struck
      [48.69, 43.52], // Kalach, where the pincers met on 23 November
      [48.71, 44.51], // Stalingrad, inside the ring
    ],
    summary:
      'The Soviet winter counter-offensive struck the Romanian Third and Fourth Armies on the flanks rather than the Germans in the city, and closed at Kalach on 23 November, trapping about 265,000 Axis troops: the Sixth Army, the headquarters of Fourth Panzer Army and Romanian Fourth Army. Zhukov and Vasilevsky had built the deception and the timing on four months of German belief that the next blow would fall in the south again. The pocket was not broken up for another ten weeks.',
    strength: '~1 million Soviet men and ~1,000 tanks; ~250,000 Axis troops on the attacked flanks',
  },
  {
    id: 'wintergewitter',
    name: 'The failed attempt to relieve Stalingrad',
    operation: 'Wintergewitter',
    side: 'german',
    from: '1942-12-12',
    to: '1942-12-23',
    path: [
      [47.63, 43.14], // Kotelnikovo, the assembly area
      [47.75, 43.68], // Verkhne-Kumskiy on the Myshkova, the high point of the advance
    ],
    summary:
      'Hoth’s Fourth Panzer Army attacked with one corps, the LVII Panzer Corps, and by 19 December had crossed the Aksay and reached the Myshkova within 48 km of the pocket’s southern edge - close, but never close enough to open a corridor. The attack was stopped on 23 December, partly because the Sixth Army’s breakout towards it was never ordered and the garrison had fuel for only about 30 km of movement, and because the Soviet Operation Little Saturn of 16 December, aimed at the same flank armies, smashed the Italian Eighth Army and put a second relief attempt out of the question.',
    strength: 'LVII Panzer Corps ~47,000 men and under 200 serviceable tanks',
  },
  {
    id: 'koltso_1943',
    name: 'Operation Koltso: the destruction of the Sixth Army',
    side: 'soviet',
    from: '1943-01-10',
    to: '1943-02-02',
    path: [
      [48.9, 44.3], // the Soviet start line in the steppe north-west of the pocket
      [48.78, 44.35], // Gumrak airfield, cut on 16 January, the last way out
      [48.71, 44.51], // central Stalingrad, split in two on 26 January
    ],
    summary:
      'Rokossovsky’s Don Front, some 212,000 men, attacked a pocket whose 250,000 survivors were starving and short of everything, methodically cutting it in two from west to east. Paulus surrendered in a department store in the central trading floors on 31 January; the last organised resistance ended on 2 February. Of some 91,000 taken, only about 5,000-6,000 ever went home. Stalingrad is remembered for the fighting in the city; the killing of its garrison came afterwards.',
    strength: 'Don Front 467,000 men, 1,500 tanks, 14,000 guns; Sixth Army ~250,000, no fuel, resupply by air averaging under 100 tons a day against a need of 700',
  },
  {
    id: 'el_alamein_1942',
    name: 'Second El Alamein and the pursuit across North Africa',
    side: 'western',
    from: '1942-10-23',
    to: '1943-05-13',
    path: [
      [30.85, 28.95], // El Alamein, the 60 km of desert between the escarpment and the sea
      [31.2, 29.92], // Alexandria, reached on the second day of pursuit
      [32.09, 23.91], // Tobruk, its fortress taken on 11 November
      [32.12, 20.07], // Benghazi, 1,000 km from the start line
      [32.9, 13.19], // Tripoli, taken 23 January, and its vital port intact
      [33.72, 10.22], // Mareth, the French-built line Rommel then held in southern Tunisia
      [36.81, 10.18], // Tunis, taken 7 May 1943
    ],
    summary:
      'Montgomery broke the Axis position on 2 November after ten days of deliberate "crumbling", and pursued 2,300 km to Tunisia. It was won by material: air superiority, mine-breaching flails, and guns and tanks outnumbering the Axis roughly two to one — a fact British propaganda later smoothed over. The pursuit was repeatedly nearly defeated by weather and supply rather than by the enemy, and some 20,000-30,000 Axis troops were flown or shipped out of Tunisia to fight again in Italy. The campaign ended on 13 May 1943 with some 250,000 Axis prisoners.',
    strength: 'Eighth Army ~195,000 men and ~1,000 tanks; Panzerarmee Afrika ~104,000 men, a third of them German, and ~400 serviceable tanks',
  },
  {
    id: 'torch',
    name: 'Operation Torch: landings in French North Africa',
    side: 'western',
    from: '1942-11-08',
    to: '1943-05-13',
    path: [
      [33.57, -7.59], // Casablanca, the Western Task Force under Patton
      [35.7, -0.63], // Oran, the Centre Task Force under Ryder
      [36.75, 3.06], // Algiers, the Eastern Task Force under Eisenhower’s deputy
      [36.37, 6.61], // Constantine, on the axis of the race for Tunis
      [36.81, 10.18], // Tunis, which the Germans reached first
    ],
    summary:
      'The first American ground operation of the war, chosen partly because a cross-Channel attack in 1942 was impossible and partly because Stalin was promised a second front. Vichy French forces defended for three days (about 1,350 Frenchmen killed) before Darlan’s ceasefire on 10 November, an arrangement that brought the French fleet and army round but that made de Gaulle furious and cost Roosevelt political capital. The race for Tunis failed in December for lack of ports and airfields; the bridgehead was not cleared until 13 May, and the fighting there taught the US Army more than it had wanted to learn.',
    strength: '~107,000 assault troops on 8 November; 250,000 Axis prisoners at the end',
  },
  {
    id: 'husky',
    name: 'The invasion of Sicily',
    operation: 'Husky',
    side: 'western',
    from: '1943-07-10',
    to: '1943-08-17',
    path: [
      [36.69, 15.07], // Pachino, the Eighth Army’s landing beaches in the south-east
      [37.24, 15.22], // Augusta, its port taken intact on the first day
      [37.5, 15.09], // Catania, which held the Germans up for eight days
      [38.19, 15.55], // Messina, reached on 17 August, a day too late
    ],
    summary:
      'The largest amphibious assault of the war up to that date. Landings were made in the south-east, opposite the least-defended coast and the shortest crossing from North Africa, after a successful deception (Operation Mincemeat, which put a dead man with false papers off the Spanish coast) that persuaded the Germans the blow would fall on Greece and Sardinia. Patton’s Seventh Army swept west to Palermo and then north. The campaign’s real lesson was a defeat: some 100,000 Axis troops, most of them German, were evacuated across the Strait of Messina under air attack and fought again.',
    strength: '~180,000 assault troops and some 2,600 ships; ~220,000 Axis defenders, ~70,000 German',
  },
  {
    id: 'italy_1943',
    name: 'Salerno and Naples: the first lodgement on the continent',
    side: 'western',
    from: '1943-09-09',
    to: '1943-10-01',
    path: [
      [38.1, 15.65], // Reggio Calabria, crossed on 3 September by the Eighth Army
      [40.63, 14.77], // Salerno, landed 9 September; nearly driven into the sea by 12-14 September
      [40.85, 14.27], // Naples, entered on 1 October, its minesweepers having failed to wreck the port
    ],
    summary:
      'The armistice announced on 8 September caught the Italian army with no orders: Rome fell to German units within two days, and some 650,000 Italian soldiers were disarmed and sent to the Reich as "military internees" rather than given prisoner-of-war status. At Salerno the Fifth Army was almost thrown back into the sea by three panzer divisions, and was saved by naval gunfire and air power. Kesselring then fought a delaying campaign on ground of his own choosing, which is why Italy was still not over in April 1945.',
    strength: 'Fifth Army ~150,000 men at Salerno; the German Tenth Army counterattacked with three panzer divisions',
  },
  {
    id: 'cassino_1944',
    name: 'Monte Cassino and the road to Rome',
    operation: 'Diadem',
    side: 'western',
    from: '1944-01-17',
    to: '1944-06-04',
    path: [
      [41.49, 13.81], // Monte Cassino, the monastery on the hill above the Liri valley
      [41.64, 13.35], // Frosinone, reached on 23 May when the Gustav Line was finally broken
      [41.83, 13.04], // Valmontone, where the breakout force met the Anzio bridgehead on 25 May
      [41.9, 12.5], // Rome, declared an open city and entered on 4 June
    ],
    summary:
      'Four assaults on the Gustav Line between January and May 1944, the monastery of Monte Cassino destroyed by bombing on 15 February on the assumption that the Germans were in it (they were not — they held the slopes below, and the rubble made a better defence). The troops used were Indian, New Zealander, Polish, French colonial and American; the Poles took the ruins on 18 May at 4,000 casualties. The Anzio landing of 22 January failed to turn the line because its commander stayed afloat instead of striking inland. Rome fell on 4 June, two days before the invasion of France, and was the first Axis capital to be taken.',
    strength: '15th Army Group ~250,000 engaged in the final battle; the German Fourteenth and Tenth Armies ~220,000',
  },
  {
    id: 'bagration',
    name: 'Operation Bagration: the destruction of Army Group Centre',
    side: 'soviet',
    from: '1944-06-22',
    to: '1944-08-29',
    path: [
      [55.19, 30.2], // Vitebsk, reduced 24 June, the northern shoulder
      [53.15, 29.22], // Bobruisk, the southern pincer’s first encirclement
      [53.9, 27.57], // Minsk, taken 3 July; prisoners taken here were marched through Moscow on 17 July
      [52.1, 23.7], // Brest-Litovsk, reached on 28 July — the old 1939 frontier line
      [51.93, 22.38], // Luków, on the Warsaw railway, reached on 30 July by the 4th Tank Corps
      [52.42, 21.18], // Radzymin, the limit of the armoured spearhead in early August, thrown back by GMXVI Panzer Corps
      [52.26, 21.05], // Praga, the Warsaw suburb on the east bank, where the front stood until January 1945
    ],
    summary:
      'The largest German defeat of the war, and almost the largest battle: four successive encirclements destroyed Army Group Centre in ten days, at the same moment as the Normandy break-out and on the anniversary of Barbarossa. The Red Army used deception and a combined-arms "deep battle" method it had taken two years to learn, and advanced 600 km. Partisans cut the railways behind the front on the night of 19 June. Its end is where the postwar map of Europe was decided: the 4th Tank Corps was counterattacked at Luków and Radzymin in the first days of August, the spearhead was spent, and the front stood on the Vistula until January 1945, with Praga taken only on 14 September. Whether Stalin halted because he could not advance or because he chose not to is still argued; the fact both sides accept is that the Red Army stood 30 km from the Warsaw Uprising, which began on 1 August, and did not reach it. The Germans crushed the Uprising street by street, which destroyed Poland’s non-communist resistance before the communist government took power in 1944-45.',
    strength:
      'Soviet: 1,670,300 men, 3,841 tanks and 1,977 assault guns at the start. Army Group Centre: 486,493 combat troops, about 849,000 in all, with 118 tanks; it lost 25-28 divisions and was destroyed as a fighting force',
  },
  {
    id: 'lvov_sandomierz_1944',
    name: 'Lvov-Sandomierz: the drive to the Vistula',
    side: 'soviet',
    from: '1944-07-13',
    to: '1944-08-02',
    path: [
      [51.21, 24.71], // Kovel, the start line in the Pripet marshes’ edge
      [49.84, 24.03], // Lviv, taken 27 July
      [50.05, 21.41], // Dębica, and the oil refineries there
      [50.68, 21.75], // Sandomierz, a bridgehead over the Vistula won on 1 August
    ],
    summary:
      'Konev’s 1st Ukrainian Front swept west across Galicia in the southern half of the Bagration strategic offensive, taking Lviv and pushing out bridgeheads over the Vistula. It then halted, and the tank corps sent north-west towards Warsaw’s Praga suburb were fought to a standstill at Radzymin. Whether that halt was forced by logistics or chosen to let the Germans destroy the Home Army is the single most argued question about 1944, and the Soviet archives have not settled it.',
    strength: '1st Ukrainian Front ~880,000 men, ~1,900 tanks',
  },
  {
    id: 'jassy_kishinev_1944',
    name: 'Jassy-Kishinev: Romania leaves the war',
    side: 'soviet',
    from: '1944-08-20',
    to: '1944-08-29',
    path: [
      [47.05, 29.63], // Tiraspol, the Dniester bridgehead
      [47.01, 28.86], // Chișinău, taken 24 August
      [45.7, 27.18], // Focșani, the Carpathian gateway reached by the 29th
    ],
    summary:
      'A double encirclement trapped and destroyed most of German Sixth Army — for the second time in two years — and carried the Red Army into Romania in nine days. On 23 August King Michael’s coup arrested Antonescu and Romania switched sides, which took away the Ploiești oil fields that supplied roughly a third of Germany’s prewar crude and its remaining Romanian troops, and opened the road to Bulgaria and Hungary. Bulgaria asked for an armistice on 2 September without firing on the Soviets; Finland followed into armistice on 4 September.',
    strength: '3rd and 2nd Ukrainian Fronts ~1.3 million men; 16 German divisions lost, ~200,000 prisoners claimed',
  },
  {
    id: 'dday_breakout',
    name: 'Normandy: the landings and the break-out',
    operation: 'Overlord / Cobra',
    side: 'western',
    from: '1944-06-06',
    to: '1944-08-21',
    path: [
      [50.78, -1.2], // the Solent, where the convoy assembly areas were
      [49.4, -1.2], // Utah and Omaha beaches, 6 June
      [49.64, -1.62], // Cherbourg, its harbour demolished but repaired by 31 July
      [49.11, -1.09], // Saint-Lô, taken 18 July, the hinge of the break-out
      [48.9, -0.19], // Falaise, where the pocket closed on 21 August
    ],
    summary:
      'Five beachheads in Normandy chosen because the Germans did not expect an invasion in bad weather and poor surf; 156,000 men ashore on the first day, of whom some 4,400 were killed, and 2 million men in France by early August. The bocage — 2,000-year-old hedgerows with sunken lanes — favoured the defender and made the advance a series of set-piece attacks at appalling cost in small units. Operation Cobra on 25 July, whose heavy bombers fell short on 25 July and killed some 100 of their own infantry, among them Lieutenant General McNair, finally cracked the German front; the break-out ran round the Germans in Brittany and closed the Falaise pocket on 21 August.',
    strength: '~156,000 assault troops on 6 June; ~3 million Allied men in France by the end of August',
  },
  {
    id: 'dragoon_1944',
    name: 'Operation Dragoon: the landings in southern France',
    side: 'western',
    from: '1944-08-15',
    to: '1944-09-14',
    path: [
      [43.3, 5.37], // Marseille, its port captured intact on 28 August and carrying a third of Allied supply by October
      [43.12, 5.93], // Toulon, taken after two days of street fighting
      [44.94, 4.82], // Valence, up the Rhône valley
      [45.76, 4.83], // Lyon, liberated on 3 September by the FFI and French regulars
      [47.32, 5.04], // Dijon
      [47.56, 6.86], // the Belfort gap, where 1st French Army turned east towards the Rhine
    ],
    summary:
      'The landings in Provence — "Anvil" cut down and delayed by Churchill, who wanted the effort in the Balkans instead — put 94,000 men ashore on the first day and 500,000 by mid-September, with the port of Marseille working from October, which is why the Allied advance across France could be supplied at all. The Germans withdrew from western France in orderly fashion rather than fight, so the campaign’s real prize was logistical. Much of the infantry was French — many of them North African and West African troops of the French First Army — and their contribution to the liberation of France was played down in French memory for decades.',
    strength: '~94,000 assault troops and ~1,800 aircraft; ~90,000 German defenders in the south of France',
  },
  {
    id: 'market_garden',
    name: 'Operation Market Garden',
    side: 'western',
    from: '1944-09-17',
    to: '1944-09-25',
    path: [
      [51.44, 5.47], // Eindhoven, dropped on and relieved the same day
      [51.81, 5.86], // Nijmegen, the bridge taken on the fourth day
      [51.98, 5.91], // Arnhem, where the British 1st Airborne was destroyed
    ],
    summary:
      'A single-road corridor 100 km deep, seized by parachute and glider troops and raced up by XXX Corps, to outflank the Siegfried Line and end the war in 1944. The plan’s failure is a case study in optimistic intelligence: the divisions opposite Arnhem were SS panzer units sent there to refit, the weather grounded most of the resupply, the one bridge at Arnhem was at the far end of a 12 km walk, and the intelligence that said the Germans were finished came from aerial photographs of the wrong columns. Some 35,000 airborne troops were dropped, including the Polish 1st Independent Parachute Brigade; of the 10,000 British 1st Airborne, about 2,200 were taken off across the lower Rhine on the night of 25-26 September.',
    strength: '~35,000 airborne troops, 15,000 in the first lift; ~17,000 Allied casualties, most of them at Arnhem',
  },
  {
    id: 'bulge',
    name: 'The Ardennes Offensive',
    operation: 'Herbstnebel',
    side: 'german',
    from: '1944-12-16',
    to: '1945-01-25',
    path: [
      [50.25, 6.3], // the Eifel assembly areas, concealed under cloud cover
      [50.0, 5.72], // Bastogne, by-passed by the armour and relieved on 26 December
      [50.16, 5.12], // Foy-Notre-Dame, the western high point; the Meuse was never reached
    ],
    summary:
      'The last German strategic offensive in the west, launched with the army’s last operational reserves against the weakest sector of the Allied front, in weather that grounded aircraft. It achieved complete surprise and opened a salient 80 km deep in eleven days, and failed for the reasons all its predecessors had: no fuel for the armoured spearheads, no air cover once the cloud lifted on 23 December, and American units in the hedgehog defence of Bastogne and St Vith that held long enough to wreck the timetable. The bulge was restored by 25 January, at a cost of some 19,000 American dead; the Wehrmacht’s western armour was spent, four months before the Rhine.',
    strength: '~410,000 men, ~1,500 tanks and assault guns; US losses ~81,000 casualties, German 60,000-85,000',
  },
  {
    id: 'vistula_oder',
    name: 'Vistula-Oder: twenty-two days to the gates of Berlin',
    side: 'soviet',
    from: '1945-01-12',
    to: '1945-02-03',
    path: [
      [51.35, 21.95], // the Magnuszew-Puławy bridgehead on the Vistula, the start line
      [52.23, 21.01], // Warsaw, taken on 17 January by the Poles with Soviet artillery
      [52.41, 16.93], // Poznań, by-passed and reduced later
      [52.55, 14.63], // Küstrin, where the lead corps reached the Oder on 31 January
    ],
    summary:
      'The offensive was launched some days earlier than planned, after Churchill’s personal appeal of 6 January that a Soviet blow might relieve pressure in the Ardennes — and in a way that meant the Red Army, not the Western Allies, took Warsaw, Kraków and Berlin. 1st Belorussian Front advanced 500 km in twenty-two days, losing the initiative in February when it halted on the Oder and had to be pushed off the bridgeheads again by a German counter-attack at Stargard. Konev’s 1st Ukrainian Front took Kraków on 25 January and reached the upper Oder, so Silesia’s industry and Upper Silesia’s coal fell into Soviet hands rather than American. On 17 January, the day Warsaw fell, the Soviets handed the city over to Polish communist units.',
    strength: '1st Belorussian and 1st Ukrainian Fronts ~2.2 million men and over 4,000 tanks and guns',
  },
  {
    id: 'east_prussia_1945',
    name: 'The East Prussian Offensive: Königsberg falls',
    side: 'soviet',
    from: '1945-01-13',
    to: '1945-04-09',
    path: [
      [54.65, 22.01], // Gumbinnen, the breakthrough in the east
      [54.6, 21.8], // Insterburg, cut off the coastal road
      [54.71, 20.51], // Königsberg, invested on 27 January, taken by assault on 9 April
    ],
    summary:
      'The operation cut Army Group North off by land in East Prussia and Pomerania. Königsberg, a fortress city and the old capital of Prussia, was reduced by four days of assault with the heaviest artillery of the war and Stalin’s own air armadas; General Lasch surrendered the city on 9 April, against Schörner’s standing order that no fortress be given up. Over the same weeks a million German civilians fled west across the frozen Vistula lagoon under Soviet air attack, and the evacuating transport Wilhelm Gustloff was torpedoed with a loss of some 9,400 people — the largest loss of life in a single shipwreck in history. East Prussia was divided between the Soviet Union and Poland after the war and its German population expelled; the region is Russian Kaliningrad today.',
    strength: '3rd and 2nd Belorussian Fronts ~1.3 million men; ~500,000 German troops in the pocket',
  },
  {
    id: 'remagen_ruhr',
    name: 'The Rhine crossings and the collapse of the Ruhr',
    side: 'western',
    from: '1945-03-07',
    to: '1945-04-18',
    path: [
      [50.58, 7.24], // Remagen, the Ludendorff Bridge captured intact on 7 March
      [50.87, 8.0], // Siegen, where the encirclement of the Ruhr closed on 1 April
      [51.31, 9.49], // Kassel, taken on 3 April
      [51.78, 9.39], // the Weser at Höxter, crossed on 6 April
    ],
    summary:
      'The Rhine, the last great natural barrier, was crossed in the place where the Allies least expected it and where the Germans least defended it — at Remagen, where a bridge was found standing and defended by two officers who had no right to give the order. A second, enormous set-piece crossing at Wesel followed on 23-24 March. The pincers closed round Army Group B in the Ruhr on 1 April; 325,000 prisoners were taken there. The Allies then had to decide what to occupy, which is why the line of contact with the Soviets was agreed on the Elbe at Torgau rather than at Berlin.',
    strength: '21st Army Group and 12th Army Group; ~325,000 German prisoners in the Ruhr pocket',
  },
  {
    id: 'berlin_1945',
    name: 'The Berlin Strategic Offensive',
    side: 'soviet',
    from: '1945-04-16',
    to: '1945-05-02',
    path: [
      [52.55, 14.63], // Küstrin on the Oder, the jump-off point
      [52.54, 14.55], // the Seelow Heights, the last German defensive line, broken after two days
      [52.49, 13.9], // the eastern suburbs, reached on 21 April
      [52.52, 13.4], // Berlin centre: the Reichstag fell on 2 May after street fighting
    ],
    summary:
      'Two Soviet fronts crushed the Seelow Heights position north and south of the Warthe bend and met west of the city on 25 April, the same day American and Soviet soldiers met on the Elbe at Torgau. Zhukov took the centre while Konev thrust from the south-west; the fighting in the city was fought unit by unit, house by house, with sappers and flamethrowers in the tube railway tunnels. Hitler married Eva Braun on 29 April and both were dead by 30 April; the garrison surrendered on 2 May. Soviet losses in the battle were some 80,000 dead, and between 100,000 and 125,000 Berlin civilians were killed, most of them in the last two weeks — followed by weeks of mass rape of the city’s surviving women.',
    strength: '~2.5 million Soviet men and ~6,250 tanks; ~760,000 German troops, many of them Volkssturm and Hitler Youth',
  },
  {
    id: 'vienna_1945',
    name: 'The Vienna Offensive',
    side: 'soviet',
    from: '1945-03-16',
    to: '1945-04-15',
    path: [
      [47.19, 18.4], // Székesfehérvár, in the Hungarian plain south of Lake Balaton
      [47.69, 16.6], // Sopron, crossing into Burgenland
      [47.81, 16.25], // Wiener Neustadt, taken on 2 April
      [48.21, 16.37], // Vienna, declared an open city and taken on 13 April
    ],
    summary:
      'The 3rd Ukrainian Front, with Bulgarian armies on its left, broke the German counter-offensive south of Lake Balaton — the last German strategic attack of the war — and ran into Austria in fourteen days. Vienna fell on 13 April, and Tito’s partisans arrived before most of the German army had left, which is why Styria and Carinthia were briefly in Yugoslav hands and why the postwar Soviet-zone/Austrian settlement had to be negotiated. Austria was treated as a liberated country rather than a defeated one at Moscow in 1943, a decision that shaped its postwar neutrality.',
    strength: '3rd Ukrainian Front ~370,000 men plus Bulgarian armies; German defenders of the 6th SS Panzer Army, out of fuel',
  },
  {
    id: 'budapest_1944',
    name: 'The siege of Budapest',
    side: 'soviet',
    from: '1944-12-26',
    to: '1945-02-13',
    path: [
      [46.26, 20.14], // Szeged, in the plain south-east of the city
      [47.22, 19.04], // Budapest itself, encircled on 26 December
      [47.48, 18.98], // the Buda heights west of the Danube, the last German-Hungarian position
    ],
    summary:
      'The city was encircled on 26 December and the relief attempts failed: two panzer attacks from the west ran out of fuel and infantry inside three weeks. The Hungarian and German garrison refused to surrender and the siege lasted fifty days of street fighting that destroyed most of what remained of the city and killed some 38,000 civilians. About 25,000 Jews who had been shut into the "international ghettos" of central Budapest were freed when Soviet troops arrived; in the ten weeks before that the Arrow Cross regime had shot some 10,000-15,000 Budapest Jews, many of them on the ice of the Danube bank.',
    strength: '2nd and 3rd Ukrainian Fronts; a garrison of about 79,000 German and Hungarian troops, of whom roughly 40,000 were taken prisoner',
  },

  /* ---- 1943-1945: the campaigns that had no line before ---- */
  {
    id: 'iskra_1943',
    name: 'Operation Iskra: a corridor to Leningrad',
    side: 'soviet',
    from: '1943-01-18',
    to: '1943-01-24',
    path: [
      [59.91, 29.76], // Lomonosov-Oranienbaum, the pocket behind German lines
      [59.85, 31.13], // Siniavino, where the two fronts met on 23 January
      [59.95, 31.04], // Shlisselburg-Petrokrepost, on the only railway into the city
    ],
    summary:
      'The first successful relief attempt of the siege: Leningrad’s and Volkhov’s fronts attacked 12 km towards each other across the Neva and met west of Siniavino on 23 January, opening a corridor 8-11 km wide. A railway was laid across it in seventeen days and the first train reached the city on 7 February, though people were still dying of hunger at 300 a day and the city was not free until January 1944. Iskra shows what the Red Army had learned: an artillery preparation, a limited objective, and no attempt at the grand encirclement that had failed in 1942.',
    strength: 'The two Soviet fronts committed 26 divisions with about 700 guns and 50 tanks; the German 18th Army held the corridor and its sector with 20 divisions and 15 brigades',
  },
  {
    id: 'third_kharkov_1943',
    name: 'Manstein’s counter-stroke: the third battle of Kharkov',
    side: 'german',
    from: '1943-02-20',
    to: '1943-03-15',
    path: [
      [50.6, 36.59], // Belgorod, lost in February and recovered in the days after Kharkov fell
      [49.82, 36.06], // Merefa, on the railway south-west of Kharkov
      [49.99, 36.23], // Kharkov, taken after four days of street fighting
    ],
    summary:
      'The operational masterpiece of the German war, and the reason the front in the east was restored after Stalingrad. Manstein refused Hitler’s order to stand fast, gave ground deliberately to stretch the Soviet advance — whose tank corps had run out of fuel and infantry — and then struck the exposed flank of the Soviet South-Western Front with two panzer corps. Kharkov was retaken on 15 March and Belgorod recovered in the days that followed, leaving the Kursk salient that would be fought over in July. The human cost of the same months went the other way: some 500,000 Soviet casualties in the winter battles, and a German retreat punctuated by the demolition of everything left behind.',
    strength:
      'Manstein’s ~125,000 men with about 350 serviceable tanks, including the II SS Panzer Corps, whose Totenkopf division came from the Leningrad sector while Das Reich refitted in the west; the Voronezh and Southwestern Fronts had ~210,000 men in the engaged armies, low on fuel. Losses: 86,469 Soviet, about 11,500 German',
  },
  {
    id: 'kursk_north_1943',
    name: 'Operation Citadel: the northern face at Ponyri',
    operation: 'Citadel',
    side: 'german',
    from: '1943-07-05',
    to: '1943-07-13',
    path: [
      [52.96, 36.07], // Orel, the start line on the salient's northern shoulder
      [52.32, 36.31], // Ponyri station, a railway junction fought over twelve times in two days
      [52.26, 36.13], // Olkhovatka, where 9 July's attack on the second defensive belt was broken
    ],
    summary:
      'The Germans attacked to cut the Kursk salient off, on ground they had chosen, weeks later than planned because they waited for new tanks. The Soviets knew the plan — from intelligence and from German radio traffic — and had built six defensive belts 130-150 km deep, with the Steppe Front’s reserve belts behind them bringing the total depth to nearly 300 km; they laid 503,993 anti-tank and 439,348 anti-personnel mines, and the two fronts holding the salient had nearly 10,000 guns and mortars. Model’s Ninth Army advanced 10 km and was stopped at Olkhovatka and Ponyri by anti-tank fronts and mines, not by air power, which never gained the superiority the plan assumed. Citadel had failed in the north before Prokhorovka was fought.',
    strength: '9th Army ~335,000 men and ~600 tanks, against ~1.9 million Soviet men in the salient and its reserves',
  },
  {
    id: 'kursk_south_1943',
    name: 'Operation Citadel: the southern face at Prokhorovka',
    operation: 'Citadel',
    side: 'german',
    from: '1943-07-05',
    to: '1943-07-16',
    path: [
      [50.6, 36.59], // Belgorod, start line of the II SS Panzer Corps
      [50.68, 36.23], // Tomarovka, broken through on the first day by the engineering groups
      [51.02, 36.74], // Prokhorovka, reached on 12 July and no further
    ],
    summary:
      'Manstein’s blow on the southern face went further than the north — 35 km in six days — and on 12 July the II SS Panzer Corps met Fifth Guards Tank Army near Prokhorovka in the largest tank engagement of the battle. Soviet losses were far heavier, several hundred tanks to some 80 German, and the SS corps was stopped not by being beaten but by mines, anti-tank guns, air attack and exhaustion. Citadel was called off on 13 July, partly because the Allies had landed in Sicily two days earlier. The strategic initiative in the east never passed back to Germany.',
    strength: '4th Panzer Army and Kempf ~220,000 men and ~1,100 tanks; Voronezh and Steppe Fronts ~880,000 men',
  },
  {
    id: 'belgorod_kharkov_1943',
    name: 'Rumyantsev: Belgorod and Kharkov retaken',
    side: 'soviet',
    from: '1943-08-03',
    to: '1943-08-23',
    path: [
      [50.6, 36.59], // Belgorod, entered on 5 August by the Steppe Front
      [49.82, 36.06], // Merefa, the railway junction south-west of Kharkov
      [49.99, 36.23], // Kharkov, taken for the last time on 23 August
    ],
    summary:
      'The Soviet summer counter-offensive, codenamed Rumyantsev, began three days before the German one ended, which is one measure of how the balance had changed. Belgorod and Orel fell on 5 August — the first salute fired in Moscow since the war began, 120 guns. Kharkov, the fourth-largest city of the USSR and the city that changed hands four times, was taken on 23 August; the Germans blew up the industrial district and the railway as they withdrew. The Red Army advanced 150 km and was at the Dnieper within five weeks.',
    strength: 'Steppe and Voronezh Fronts ~950,000 men and ~2,700 tanks at the start',
  },
  {
    id: 'dnieper_1943',
    name: 'The Battle of the Dnieper: the river crossings',
    side: 'soviet',
    from: '1943-08-26',
    to: '1943-12-23',
    path: [
      [50.91, 34.8], // Sumy, swept through in the pursuit after Kharkov
      [49.59, 34.55], // Poltava, and its air bases, taken 23 September
      [49.07, 33.42], // Kremenchug, the river crossed in improvised boats from 29 September
      [48.46, 35.05], // Dnipropetrovsk, taken 25 October
      [47.83, 35.14], // Zaporizhzhia, the last German bridgehead on the river, cleared on 29 October
    ],
    summary:
      'The largest river-crossing operation of the war, on a front 750 km wide, against a river 1-2 km broad with the Germans holding the far bank. Troops crossed at night in boats, barrels and anything that floated, and held bridgeheads of a few hundred metres under counter-attack until the heavy equipment could be ferried over; casualty rates in the crossing companies often ran above fifty per cent. Germany’s "Eastern Wall" on the west bank was turned at Kremenchug and broken at Zaporizhzhia, and Kiev fell on 6 December. The Ukrainian grain, coal and manganese came back into Soviet hands, which is the economic reason 1943 matters as much as Stalingrad.',
    strength: 'Four Soviet fronts ~2.65 million men; ~1.25 million German troops on a front they could not hold everywhere',
  },
  {
    id: 'korsun_1944',
    name: 'The Korsun pocket: the first cauldron of 1944',
    side: 'soviet',
    from: '1944-01-24',
    to: '1944-02-17',
    path: [
      [50.08, 29.93], // Fastiv, where 6th Tank Corps swung south
      [49.72, 29.67], // Skvyra, its railway junction taken on 27 January
      [49.07, 30.98], // Zvenigorodka, where the pincers closed on 28 January
    ],
    summary:
      'Two Ukrainian fronts met at Zvenigorodka and shut some 60,000 Germans in a pocket 80 km across — the first "cauldron" in the term Soviet staff work used, and the model for the larger ones that followed. Manstein again attacked outwards to relieve it and again failed; the garrison broke out on the night of 16-17 February towards German lines, abandoning its wounded and its heavy guns, and several thousand were killed crossing the frozen Lysyanka in the snow. Stalin ordered 25,000 German prisoners to march in chains through Moscow, an insult the German army could not answer.',
    strength: '2nd and 6th Ukrainian Fronts ~500,000 men and ~1,700 tanks',
  },
  {
    id: 'leningrad_novgorod_1944',
    name: 'The Leningrad-Novgorod Offensive: the siege is lifted',
    side: 'soviet',
    from: '1944-01-14',
    to: '1944-03-01',
    path: [
      [59.91, 29.76], // Lomonosov-Oranienbaum, whose coastal guns covered the attack
      [59.77, 30.07], // Krasnoye Selo-Pushkin, taken on the second day
      [59.38, 30.13], // Gatchina, 45 km south of the city, taken 26 January
      [58.52, 31.28], // Novgorod, entered on 20 January, its cathedral a ruin
      [57.99, 31.27], // Staraya Russa, past which the front moved on to the Panther Line
    ],
    summary:
      'The offensive that ended the 872-day siege, driving 220-280 km west and clearing the Leningrad and Novgorod regions. This time there was no stopping to consolidate: the fronts followed the withdrawal straight on, though the Germans got most of their artillery and wounded away to the Panther Line. The destruction left behind was enormous — Novgorod, one of the oldest cities of Russia, was more than 90% built up before the war and its population of 54,000 was down to a few hundred. Six Soviet citizens were executed for the collaboration that had made the occupation of the region possible.',
    strength: 'Leningrad, Volkhov and 2nd Baltic Fronts ~900,000 men and ~12,000 guns',
  },
  {
    id: 'gothic_line_1944',
    name: 'The Gothic Line: the summer the Italian offensive stalled',
    side: 'western',
    from: '1944-08-25',
    to: '1944-09-22',
    path: [
      [43.91, 12.9], // Pesaro, taken 30 August, the first break in the Adriatic sector
      [44.02, 12.63], // Coriano ridge, holding Rimini, taken 12-15 September
      [43.94, 12.46], // San Marino, on the crest, occupied 19-20 September
      [44.06, 12.57], // Rimini, entered on 21 September
    ],
    summary:
      'Germany’s last strong defensive line in Italy, across the Apennine ridges north of Florence. The Eighth Army attacked on the Adriatic flank because the flat river valleys there suited armour, took the coastal plain and Rimini, and was then stopped on the Marecchia; the US Fifth Army’s push through the mountains gained 20 km and lost its strength. Kesselring held with fewer divisions than Alexander had, many of them depleted, and the front then sat through the autumn and the winter. This is where the ordinary account of the Italian campaign most needs correcting: the line was not broken in 1944, and the war in Italy lasted eight months longer.',
    strength: 'Eighth and Fifth Armies ~22 divisions; Fourteenth and Tenth Armies ~16 divisions',
  },
  {
    id: 'debrecen_1944',
    name: 'Debrecen: the Red Army enters Hungary',
    side: 'soviet',
    from: '1944-10-06',
    to: '1944-10-28',
    path: [
      [47.05, 21.92], // Oradea, in northern Transylvania, the start line
      [47.53, 21.62], // Debrecen, taken on 20 October, Hungary's second city
      [48.1, 20.78], // Miskolc, and the gateway to Slovakia
    ],
    summary:
      'The 2nd Ukrainian Front drove out of Transylvania through the Carpathian passes onto the Great Hungarian Plain, taking Debrecen in fourteen days. The armoured corps sent racing ahead for the Theiss bridges at Szolnok were fought to a halt, and the German defence then held on the Theiss through October and November — which is why Budapest was not encircled until 26 December. Regent Horthy tried to make a separate armistice on 11 October; the Germans deposed him and installed the Arrow Cross, and the killing of Budapest’s Jews accelerated in the weeks that followed.',
    strength: '2nd Ukrainian Front and Romanian armies ~370,000 men; 8th Army and III Panzer Corps, short of armour',
  },
  {
    id: 'belgrade_1944',
    name: 'Belgrade: the partisans take their capital',
    side: 'soviet',
    from: '1944-10-14',
    to: '1944-10-20',
    path: [
      [43.99, 22.92], // Vidin, on the Danube, where the Bulgarian armies crossed
      [43.32, 21.9], // Niš, reached on 14 October, and Tito's headquarters by the 16th
      [44.82, 20.46], // Belgrade, entered on 20 October
    ],
    summary:
      'The 3rd Ukrainian Front, with four Bulgarian armies after Bulgaria changed sides in September, drove through Serbia to meet Tito’s partisans, who had already taken most of the country’s towns. Belgrade fell on 20 October after four days of street fighting, fought largely by Soviet tanks and Serbian infantry — one of the few Axis capitals taken with the help of a local army that then refused to leave. Army Group E retreated 400 km from Greece through Serbia under air attack and lost its heavy equipment. Tito’s control of Belgrade, rather than the elections of November 1945, is what decided postwar Yugoslavia.',
    strength: '3rd Ukrainian Front and Bulgarian armies ~500,000 men; partisans ~350,000; Army Groups F and E, retreating',
  },
  {
    id: 'baltic_memel_1944',
    name: 'The Baltic Offensive: the front reaches the sea',
    side: 'soviet',
    from: '1944-09-22',
    to: '1944-10-22',
    path: [
      [55.93, 23.31], // Šiauliai, taken in July and held through two counter-attacks
      [55.89, 21.23], // the Lithuanian coast near Kretinga, reached on 10 October
      [55.69, 21.15], // Memel-Klaipėda, cut off from the Reich by the 20th
    ],
    summary:
      'Stavka’s aim in the Baltic was not Berlin but the isolation of Army Group North, and on 10 October its spearheads reached the Baltic Sea north of Memel, cutting the land link to East Prussia. Three Soviet fronts and two Baltic armies drove 220 km in ten days; a German counter-attack at Memel reopened a corridor only some 50 km wide. Some 200,000 German troops were sealed in the Courland pocket, where they surrendered in May 1945 still holding the Lithuanian coast, and the sea evacuation of around half a million soldiers and civilians from the Baltics became the largest maritime rescue of the war and one of its bloodiest. Estonia, Latvia and Lithuania were occupied a second time, and their prewar governments did not return until 1991.',
    strength: '1st and 2nd Baltic and Leningrad Fronts ~900,000 men; ~450,000 German troops in the pocket and the corridor',
  },
  {
    id: 'east_pomerania_1945',
    name: 'East Pomerania: the flank cleared for Berlin',
    side: 'soviet',
    from: '1945-02-10',
    to: '1945-04-04',
    path: [
      [53.15, 16.77], // Schneidemühl-Piła, on the Noteć, in the jump-off area
      [53.35, 15.05], // Stargard, taken on 1 March, on the road to Stettin
      [54.18, 15.58], // Kolberg-Kołobrzeg, on the Baltic, taken 4 March
      [54.35, 18.65], // Danzig-Gdańsk, taken on 28 March after street fighting
    ],
    summary:
      'Before Berlin, the 2nd Belorussian Front had to clear the Pomeranian bridgeheads from which a German counter-stroke could hit the Oder flank, while the 1st Belorussian Front took the fortress of Poznań, which fell on 23 February after five days of assault. The offensive reached the Baltic and took Danzig, the port through which millions of East Prussian civilians and prisoners had been evacuated west. Pomerania and Silesia are Polish on every postwar map because the Polish population moved in behind this line of contact. Soviet losses in these two months ran past 100,000, more than in the fighting for the Polish uprising in Warsaw.',
    strength: '2nd and 1st Belorussian Fronts ~1.6 million men; Army Group Vistula, understrength and politically commanded',
  },
  {
    id: 'prague_1945',
    name: 'The Prague Offensive: the last operation of the war in Europe',
    side: 'soviet',
    from: '1945-05-06',
    to: '1945-05-11',
    path: [
      [50.63, 13.83], // the Teplice pass in the Bohemian mountains, 1st Ukrainian Front
      [50.35, 14.35], // the Elbe approaches north of the city
      [50.08, 14.44], // Prague, entered on 9 May
    ],
    summary:
      'An uprising began in Prague on 5 May, and the Czech National Council asked the Western Allies for help; Patton’s Third Army was 40 km away and Eisenhower refused to go on, having agreed the line of contact with the Soviets. Three Soviet fronts then cleared Bohemia in five days. Army Group Centre, which had refused to surrender in the west and continued to attack the uprising, was broken up and its remnants captured trying to get to the American lines. Units of the Russian Liberation Army — Vlasov’s Russians, who had switched sides and helped the Prague insurgents — did reach American lines and were handed back, which meant almost certain death.',
    strength: '1st, 2nd and 4th Ukrainian Fronts ~1.6 million men; Army Group Centre ~900,000, largely demoralised',
  },

  // ---------------------------------------------------------------------
  // The desert, the Levant and the Aegean. North Africa and the Levant have
  // no border polygons on this map (see Sources), so these lines run over
  // unclassified land; the place names and dates are what carry the meaning.
  // ---------------------------------------------------------------------
  {
    id: 'compass_1940',
    name: 'Operation Compass: the Italian army in Cyrenaica destroyed',
    operation: 'Compass',
    side: 'western',
    from: '1940-12-09',
    to: '1941-02-09',
    path: [
      [31.61, 25.93], // Sidi Barrani, where the Italian forward positions were overrun on 9 December
      [31.55, 25.15], // Sollum, the frontier post, occupied 15-16 December
      [31.76, 25.08], // Bardia, assaulted on 3 January, and its 40,000 defenders captured
      [32.08, 23.96], // Tobruk, taken on 22 January with the harbour intact
      [32.12, 20.07], // Benghazi, entered on 7 February as the Italian retreat went past it
      [31.24, 20.31], // Beda Fomm, where the coast road south of Benghazi was blocked on 7 February
      [30.26, 19.20], // El Agheila, where the pursuit halted on 9 February for lack of transport
    ],
    summary:
      'A five-day raid by O’Connor’s Western Desert Force turned into a 500-mile pursuit, because each position taken left the next one in the open and the Italian army withdrew in disorder rather than fight. Ten weeks of fighting destroyed an army: 133,000 prisoners, 420 tanks and 845 guns, for about 1,900 British casualties. That is why the desert became a German problem. Hitler sent the Deutsches Afrikakorps to Tripoli in March 1941 to bail out Italy, and the port of Tobruk — taken here, besieged by Rommel four months later, and then held for 241 days — became the hinge of the desert war for the next two years.',
    strength:
      'Western Desert Force ~36,000 men and 275 mostly light tanks; the Italian Tenth Army ~150,000 men with 400 guns, of which about 130,000 were captured',
  },
  {
    id: 'afrikakorps_1941',
    name: 'Rommel’s first offensive: Cyrenaica retaken and Tobruk invested',
    side: 'german',
    from: '1941-03-31',
    to: '1941-05-27',
    path: [
      [30.26, 19.20], // El Agheila, where Rommel attacked on 31 March against his orders to hold
      [32.12, 20.07], // Benghazi, retaken on 4 April
      [31.58, 21.01], // Msus, crux of the British attempt to slow the panzers, 8 April
      [32.76, 22.64], // Derna and Mechili, where the 3rd Indian Motor Brigade was overrun
      [32.08, 23.96], // Tobruk, reached on 10 April and besieged from land and sea for 241 days
      [31.50, 25.19], // Halfaya Pass and Sollum, the Egyptian frontier, held by the end of May
    ],
    summary:
      'Rommel was sent to hold the line at El Agheila and instead attacked, reading correctly that the British were rotating troops out and had no armour to spare. He drove 700 km in eighteen days, took all of Cyrenaica except the Tobruk garrison, and pushed the frontier fighting back to the wire at Sollum. Two consequences: the eight-month siege of Tobruk, which tied down divisions the Axis could not spare; and the removal of the British commander and staff, since the collapse was blamed on them. The Germans also had to divert aircraft from Crete and Iraq to hold what they had taken.',
    strength:
      'The Deutsches Afrikakorps ~30,000 men and ~120 tanks at the start, with three weak Italian divisions; Middle East Command committed ~70,000 men, of whom ~15,000 — the 9th Australian Division and the 18th Brigade — were shut up in Tobruk',
  },
  {
    id: 'crusader_1941',
    name: 'Operation Crusader: Tobruk relieved and the pivot back to El Agheila',
    operation: 'Crusader',
    side: 'western',
    from: '1941-11-18',
    to: '1941-12-16',
    path: [
      [31.50, 25.19], // the start line east of the Halfaya-Sollum wire, 18 November
      [31.54, 24.03], // Bir el Gubi, where the Italian Ariete division held the western flank on 19 November
      [32.08, 23.96], // Tobruk, relieved on 26 November after 241 days
      [31.58, 21.01], // Msus, on the pursuit towards Benghazi, entered on 24 November
      [32.12, 20.07], // Benghazi, abandoned by Rommel on 24 November
      [30.26, 19.20], // El Agheila, where the Axis fell back in mid-December and the pursuit stopped
    ],
    summary:
      'The first set-piece battle of the desert, fought as an attempt to relieve Tobruk before Rommel could take it. The British lost heavily in armour at Sidi Rezegh — Rommel’s counterstroke to the frontier almost won the battle by cutting Eighth Army’s lines — but the garrison broke out on 26 November and Rommel, out of fuel and without air cover, retreated to Egypt’s old frontier and then to El Agheila. For four months the desert war was a race between reinforcements arriving by sea on both sides; the Axis lost aircraft and ships faster than Germany could replace them, which is why Rommel’s next offensive in January 1942 was so short.',
    strength:
      'Eighth Army ~118,000 men and 738 tanks; Panzergruppe Afrika ~119,000 men, only about 65,000 of them German, and 414 serviceable tanks',
  },
  {
    id: 'gazala_alamein_1942',
    name: 'Gazala to El Alamein: Tobruk lost and the retreat of 1942',
    side: 'german',
    from: '1942-05-26',
    to: '1942-06-30',
    path: [
      [32.14, 23.36], // Gazala, the minefields, attacked on 26 May
      [31.61, 23.50], // Bir Hakeim, which the Free French held for two weeks before withdrawing
      [32.08, 23.96], // Tobruk, surrendered on 21 June with ~33,000 prisoners
      [31.35, 27.24], // Mersa Matruh, the next prepared position, overrun 27-29 June
      [30.83, 28.95], // El Alamein, 60 km of desert between sea and Qattara Depression, reached 30 June
    ],
    summary:
      'Rommel’s masterwork: he drove a corridor through the mineface south of Gazala, and the British armoured response was destroyed piecemeal in what the Germans called the Cauldron. Tobruk, stocked for six months of siege, fell in a day, and the Eighth Army gave up 400 km of coast in eight days — the worst defeat in British military history, and the moment when India and the Middle East oilfields looked reachable from the west. Auchinleck took personal command and stopped the advance at El Alamein in July. Nothing after that could be moved forward without a port, so both sides built up from Egypt and Tunisia, and the desert war was decided at the same 60-metre-wide gap between the Qattara Depression and the sea.',
    strength:
      'Panzerarmee Afrika ~90,000 men, only 30,000 of them German, and 560 tanks; Eighth Army ~110,000 men and 843 tanks, of whom about 50,000 became casualties at Gazala and Tobruk',
  },
  {
    id: 'kasserine_1943',
    name: 'Kasserine Pass: the American introduction to German armoured warfare',
    side: 'german',
    from: '1943-02-19',
    to: '1943-03-03',
    path: [
      [35.83, 10.64], // Sousse and the German jump-off line inside Tunisia
      [35.24, 9.12], // Sbeitla and Faïd Pass, forcing the mountain gates on 19 February
      [35.17, 8.84], // Kasserine, entered on 21 February after II Corps fell back through the pass
      [35.58, 8.66], // Thala, the last objective, and the farthest point of the advance
    ],
    summary:
      'The Wehrmacht’s last offensive of the war in North Africa, aimed at the raw American II Corps before the two Allied armies in Tunisia could be joined. US units, badly deployed and without concentrated artillery, were pushed back more than 100 km and lost hundreds of vehicles and guns, many captured intact. The American response mattered more than the defeat: Eisenhower removed the corps commander, training and combined-arms doctrine were rewritten, armour was concentrated instead of parceled out, and the British held the passes until the line was restored in early March. Rommel had no fuel or air cover for a follow-up, so the offensive bought the Axis three weeks instead of the campaign.',
    strength:
      '10th and 21st Panzer Divisions with Italian XXI Corps; US II Corps, which lost about 6,300 men, some 3,000 of them captured, and much of its artillery',
  },
  {
    id: 'crete_1941',
    name: 'The battle for Crete: the first great airborne assault',
    operation: 'Merkur',
    side: 'german',
    from: '1941-05-20',
    to: '1941-06-01',
    path: [
      [35.52, 23.85], // Maleme airfield, the objective: taken on 21 May almost by accident
      [35.51, 24.02], // Chania and Suda Bay, the naval base, stormed by Fallschirmjäger
      [35.37, 24.47], // Rethymno and Retimo, whose defenders held until 26 May
      [35.34, 25.13], // Heraklion, where the first wave was cut to pieces on the ground
    ],
    summary:
      'Crete was taken from the air because there were no ships available for an amphibious landing and the island’s airfields would otherwise stay in British hands, threatening the Romanian oilfields. The Germans dropped about 22,000 paratroopers and glider troops in the open against prepared positions and lost heavily — Maleme was won only because a company crossed the river bed and the British commander, out of reserves, withdrew at night. It cost the Luftwaffe hundreds of transport aircraft lost or damaged, a loss no later campaign could replace, and Hitler told his generals that the days of the paratrooper were over, so nothing of the kind was attempted again. The 16,500 men evacuated from the south coast, mostly through Sfakia, were the last British troops to leave the European mainland in 1941.',
    strength:
      '~22,000 German paratroopers and mountain troops with about 1,000 aircraft; ~30,000 British, Dominion and Greek defenders with no tanks and no air cover; about 5,900 German casualties, most of them in the airborne force, and 17,700 Allied killed, wounded or captured',
  },
  {
    id: 'dodecanese_1943',
    name: 'The Dodecanese: the last campaign in the Aegean',
    side: 'german',
    from: '1943-10-06',
    to: '1943-11-22',
    path: [
      [36.79, 27.08], // Kos, garrisoned by 1,800 British troops, stormed on 6-8 October
      [37.01, 26.47], // Leros, the naval base, which fell on 16 November
      [37.72, 26.82], // Samos and the other islands, evacuated on 17 November
    ],
    summary:
      'When Italy surrendered, 30,000 Italian soldiers in the Aegean changed sides, and the British rushed small garrisons to Samos, Kos and Leros to keep the Dodecanese and their ports. The Germans moved faster, with air superiority from the Balkans and the Greek mainland: Kos was taken in three days, and Leros — an Italian fortress holding 2,600 British and Dominion troops — after a week of fighting that included the largest German airborne operation since Crete. Churchill wanted the Aegean as a route towards the Balkans and the Greek port that would pre-empt the Red Army; its loss settled that the Red Army would get there first. The garrisons were destroyed or evacuated: some 4,800 British and Dominion troops became casualties or prisoners, and the Germans took about 44,000 Italian soldiers. It is one of the few Allied operations of 1943 that failed outright.',
    strength:
      'About 5,300 British and Dominion troops, with the Italian garrisons nominally on the Allied side; the German XLIV Panzer Corps and the Luftwaffe, with command of the air throughout',
  },
  {
    id: 'iraq_1941',
    name: 'The Anglo-Iraqi war: the coup in Baghdad crushed in five weeks',
    side: 'western',
    from: '1941-05-02',
    to: '1941-05-31',
    path: [
      [30.5, 47.81], // Basra and the al-Faw peninsula, landed 29 April, the bridgehead for the relief
      [31.04, 46.24], // Nasiriyah and the Euphrates line
      [32.5, 45.83], // Kut, on the Tigris, reached by the Tigris Column on 19 May
      [32.48, 44.43], // Hilla, cutting the road north from Baghdad
      [33.32, 44.37], // Baghdad, entered on 31 May; Rashid al-Kilani fled the same night
    ],
    summary:
      'A nationalist coup led by Rashid Ali al-Kaylani — “the Golden Square”, four colonels with army backing — closed Iraq’s oil to Britain and massed troops opposite the RAF base at Habbaniya, which was attacked on 30 May by a force of 1,200 men and old biplanes. Hitler and Mussolini sent aircraft in through Vichy Syria, and 200 German and Italian machines operated from Mosul, which is why this forgotten campaign mattered: it put Axis air power within reach of the Iraqi oil that ran the Mediterranean war. Britain attacked from Basra and from Transjordan, took Baghdad on 31 May, and then had to fight Vichy forces in Syria next door. The settlement left a British-backed government in Baghdad and Iraqi troops re-equipped for the common cause against Germany.',
    strength:
      'Basra Force, Habforce and the 10th Indian Division, with about 100 aircraft; four Iraqi divisions with some 30,000 men, plus about 100 German and Italian aircraft flown in through Syria',
  },
  {
    id: 'syria_1941',
    name: 'Syria and Lebanon: Vichy forces cleared from the Levant',
    side: 'western',
    from: '1941-06-08',
    to: '1941-07-14',
    path: [
      [33.09, 35.1], // the Lebanon frontier at an-Naqura, crossed by the 7th Australian Division, 8 June
      [33.27, 35.2], // Tyre, on the coast road north
      [33.56, 35.38], // Sidon, and the Litani river line, contested 6-9 July
      [33.89, 35.5], // Beirut, entered on 12 July, the Vichy base and its airport
      [33.85, 36.02], // Rayak airfield, 10 July, with 35 Vichy bombers and fighters destroyed
      [33.51, 36.31], // Damascus, taken on 21 June by the column from Transjordan and Free France
    ],
    summary:
      'The campaign the Allies were least prepared for and least wanted to fight, against Frenchmen who were officially neutral and who defended the mandate for a week at considerable cost, including the Battle of the Litani and the resistance at Damour. Vichy airfields had been used by the Luftwaffe during the Iraqi rising, which made Syria a military target; de Gaulle insisted Free French troops led the attack so the postwar claim over the mandate would stand. The Allies lost about 4,650 men and Vichy between 6,300 and 8,900 killed, wounded and captured, with Syrian and Lebanese losses on top of that. When the British and Free French marched in, the mandate was recognised as independent in principle in June 1941 — a promise deferred until 1946 and still felt in Syrian and Lebanese politics.',
    strength:
      'Australian 7th Division, 6th Division, 1st Free French Brigade and Chasseurs: ~36,000 men; Vichy’s Armée du Levant ~35,000, with 289 aircraft, 90 tanks and the naval batteries at Beirut',
  },

  // ---------------------------------------------------------------------
  // Norway 1940: the weserübung line above shows the ports that were seized
  // in one night. These show the land fighting in the north and the corridor
  // that joined the two German columns, which is where the campaign was
  // actually decided.
  // ---------------------------------------------------------------------
  {
    id: 'norway_central_1940',
    name: 'Central Norway: the two German columns meet at Dombås',
    side: 'german',
    from: '1940-04-09',
    to: '1940-05-05',
    path: [
      [59.91, 10.75], // Oslo, and the Gudbrandsdal railway axis north
      [61.13, 10.43], // Lillehammer, taken on 14 April after fighting at Vinstra
      [62.08, 9.13], // Dombås, where the column from Oslo joined the column from Trondheim the same day
      [64.05, 11.48], // Steinkjer, the farthest point of the Anglo-French advance from Namsos, bombed out on 21 April
      [64.47, 11.33], // Namsos, landed at on 14-19 April and evacuated on 2-3 May; the burnt town fell to the Germans days later
    ],
    summary:
      'The invasion of Norway was decided on the roads, not at the ports. Trondheim was taken on 9 April, and within five days a column from Oslo had come up the Gudbrandsdal to Dombås and met the men from Trondheim, cutting the country in two and making the Norwegian armies in the south impossible to supply. The British answered by landing the 146th Brigade and French mountain troops at Namsos on 14-15 April and advancing south on Steinkjer to cut the Trondheim–Narvik railway; they halted, were pushed back under heavy bombing, and were evacuated. The same happened at Åndalsnes, where the 148th Brigade’s advance on Dombås ended in evacuation on 1-2 May. Central Norway was therefore cleared before the fighting at Narvik began, and the Luftwaffe’s freedom to operate there is what made the Nordland and Narvik evacuations necessary.',
    strength:
      '~6,000 German troops advancing from Trondheim and Oslo against 3,500 British, 2,500 French and 500 Norwegian troops at Namsos, with no air defence and little artillery',
  },
  {
    id: 'norway_nordland_1940',
    name: 'Nordland: the German relief of Narvik along the coast road',
    side: 'german',
    from: '1940-05-08',
    to: '1940-06-01',
    path: [
      [65.84, 13.19], // Mosjøen, on the coast road north of the Namdalen
      [66.31, 14.14], // Mo i Rana, and the Saltdal axis towards the Swedish frontier
      [67.28, 14.38], // Bodø, the Allied base, reached by the German mountain troops on 9-10 June
    ],
    summary:
      'Once central Norway was cleared, the Germans pushed north through Nordland to reach the garrison isolated at Narvik. Colin Gubbins’ columns and the 15th (Scottish) Division, about 2,500 men, tried to hold the Saltdal and the coast road; 4,000 German mountain troops forced them back to within a few miles of Bodø. The Allies had already decided to leave Norway, so the withdrawal from Bodø was completed by 1 June without a fight — the reverse of what happened at Narvik, and a reminder that the campaign in the north was won by air power and by the collapse of France rather than by the troops on the ground.',
    strength: 'German mountain troops ~4,000; British, Norwegian and Polish troops ~2,500, without artillery or air cover',
  },
  {
    id: 'norway_narvik_1940',
    name: 'The recapture of Narvik: the first Allied town taken from Germany',
    side: 'western',
    from: '1940-05-12',
    to: '1940-05-28',
    path: [
      [68.8, 16.54], // Harstad, the Allied base in the north, secured from 13 April
      [68.55, 17.56], // Bjerkvik, landed from the sea on 13 May, turning the German position in the Vaagsfjord
      [68.44, 17.43], // Narvik, entered on 27-28 May; the ore railway and the winter harbour
    ],
    summary:
      'Narvik was the objective that mattered: the ice-free port through which Swedish iron ore reached the German navy all year. Ten German destroyers were sunk in the Ofotfjord on 10 and 13 April, and the 2,600 mountain troops and sailors who survived were cut off inland. In May the Allies — the 24th (Guards) Brigade, Polish and French units and Norwegian battalions — attacked from Harstad, landed at Bjerkvik on 13 May and took the town on 28 May, the first time in the war that a German-held town had been cleared by a set assault. It made no difference to the campaign: France was falling, the Allies decided to leave, and the last troops were evacuated on 4-8 June, while the King and government went to Britain on 7 June.',
    strength:
      'Allied force ~18,000 British, French, Polish and Norwegian troops; ~4,800 German mountain troops and shipwrecked sailors, who destroyed their own positions and blew up the ore jetty as they withdrew',
  },
  {
    id: 'norway_juniper_1940',
    name: 'Operation Juniper: Narvik taken back on 9 June',
    operation: 'Juniper',
    side: 'german',
    from: '1940-06-08',
    to: '1940-06-10',
    path: [
      [68.43, 18.07], // Bjørnfjell station on the plateau above Narvik, the highest railway in Scandinavia
      [68.44, 17.43], // Narvik, re-entered on 9 June, the day after the last Allied ships left
    ],
    summary:
      'The German offensive to relieve Narvik was the largest mountain battle of the war: two divisions, reequipped with captured Norwegian transport and supported by the Luftwaffe, fought their way down the plateau above the town against Poles and French Chasseurs Alpins dug in on the ridges. The Allies, already ordered to evacuate, were gone by 8 June, so the town changed hands without a fight for it — a fact usually left out of the story of Narvik, which is told as an Allied victory. Norway was the first campaign lost largely for want of air power, and it taught both sides the same lesson about operating in daylight without command of the air.',
    strength: '~23,000 German troops of the two mountain divisions; ~12,000 Allied troops already committed to evacuation',
  },
  {
    id: 'channel_dash_1942',
    name: 'The Channel Dash: Brest to Germany in nine hours under the RAF',
    operation: 'Cerberus',
    side: 'german',
    from: '1942-02-11',
    to: '1942-02-13',
    path: [
      [48.39, -4.49], // Brest, where the ships had sat under bombing since March 1941
      [50.87, 1.58], // Gris-Nez and the Dover Strait, the mine-filled gap crossed at 27 knots
      [53.53, 8.11], // Wilhelmshaven, reached by the Gneisenau
      [53.9, 9.14], // Brunsbüttel, on the Elbe, where Scharnhorst and Prinz Eugen ran aground or were mined
    ],
    summary:
      'Hitler ordered the battlecruisers out of Brest, where air attack had made repair impossible, rather than let them be destroyed in place. They sailed at night, crossed the Dover Strait in daylight under a fighter umbrella of 252 aircraft, and were at the Elbe within about nine hours of being discovered. The British had 6 destroyers and 32 motor torpedo boats available and about 450 aircraft, but the Army’s guns were manned by crews who had not been warned, the RAF’s torpedo squadron attacked without escort and lost most of its aircraft, and both battleships were damaged by mines, not by ships or aircraft. The operation ended British hopes of finishing off the German surface fleet in the Channel and pushed the capital ships into Norwegian fjords, where the RAF and the Royal Navy then had to hunt them; it also convinced Hitler that surface ships were useless, which is why the heavy units contributed so little to Normandy.',
    strength:
      'Scharnhorst, Gneisenau and Prinz Eugen with 6 destroyers, 14 torpedo boats and 26 E-boats, and ~250 fighter sorties; the British had 6 destroyers, 3 destroyer escorts, 32 motor torpedo boats and ~450 aircraft, most of them too late',
  },

  // ---------------------------------------------------------------------
  // The Crimea, the Black Sea steppe and the far north. Romania, Finland and
  // Hungary fought as Axis powers; the map has three line colours, so their
  // advances are drawn in the German one. This is stated in Sources.
  // ---------------------------------------------------------------------
  {
    id: 'odessa_1941',
    name: 'Odessa: the Romanian siege of the Black Sea port',
    side: 'german',
    from: '1941-08-08',
    to: '1941-10-16',
    path: [
      [46.86, 29.61], // Tiraspol, on the Dniester, the jump-off line of the Romanian Fourth Army
      [46.98, 31.99], // Mykolaiv, taken 13 August by the German Eleventh Army on the left flank
      [46.54, 33.41], // Kherson, taken 30 August, cutting the port and the marshes behind it
      [46.48, 30.73], // Odessa, invested from land on 8 August and held until 16 October
    ],
    summary:
      'Romania joined the attack on the Soviet Union in order to recover Bessarabia and Bukovina, which the USSR had taken in 1940; by August the Romanian Fourth Army had reached the Southern Bug and was investing Odessa, the Black Sea Fleet’s base. The attackers expected a short siege and got two months of street fighting, at a cost of about 92,500 Romanian casualties. The city was evacuated by sea on 16 October — an operation the Soviets repeated on a larger scale at Sevastopol — and the defenders were withdrawn to the Crimea and Moscow. The consequence was strategic: Romania had committed 340,000 men to take a city it could not hold, the Axis right flank was stretched to the Sea of Azov, and the Crimea, taken the following month, became the place where German and Romanian armies were destroyed twice.',
    strength:
      'Romanian Fourth Army, ~160,000 men at the start and ~340,000 committed in all, with the German Eleventh Army on its left; the Odessa Defensive District ~34,500 men at the start and ~86,000 in total',
  },
  {
    id: 'crimea_1941',
    name: 'The Crimea taken, 1941: the isthmuses forced in three weeks',
    side: 'german',
    from: '1941-09-26',
    to: '1941-11-16',
    path: [
      [46.16, 33.69], // Perekop, the dry isthmus between the Syvash marshes, stormed on 26 September
      [45.71, 34.39], // Dzhankoy, the railway junction, taken 3 October, which split the defenders
      [44.95, 34.1], // Simferopol, the capital, entered on 1 November; the siege of Sevastopol is drawn separately
    ],
    summary:
      'The Crimea was worth taking because its airfields could raid the Romanian oilfields and the Black Sea Fleet’s bases, and it was attackable only across two narrow isthmuses — which is why a small German force with Romanian support forced Perekop and Ishun in nine days and then drove down the peninsula. The Soviet 51st Separate Army was cut in two at Dzhankoy and lost the peninsula in three weeks, except for Sevastopol, which held out for another eight months. Kerch was taken on 16 November, so the whole peninsula was in Axis hands except the fortress. That over-confidence cost the Axis dear: the amphibious landing at Feodosia a month later showed the Crimea could be entered from the sea, and in 1942 and 1944 the peninsula produced two of the largest Axis defeats of the war.',
    strength:
      'Manstein’s Eleventh Army, understrength, with two Romanian armies on its flanks; the 51st Separate Army and the Crimean Front, whose losses in the following eight months ran to hundreds of thousands',
  },
  {
    id: 'kerch_1942',
    name: 'Kerch destroyed: the landing of 1941 and the trap of 1942',
    side: 'german',
    from: '1941-12-26',
    to: '1942-05-20',
    path: [
      [45.03, 35.38], // Feodosia, landed on 29 December, the first big Soviet amphibious operation of the war
      [45.36, 36.47], // Kerch, retaken by the Soviets in late December and lost again on 19 May 1942
      [45.25, 36.5], // the Kerch Strait, the only escape route, across which the 51st Army fled to the Kuban
    ],
    summary:
      'The Soviet landing at Feodosia in December 1941 was meant to retake the whole Crimea while Sevastopol was still holding. It took Kerch and Feodosia but could not be supplied or reinforced in winter, and a German counterattack in January drove the survivors back onto the peninsula. In May 1942 Manstein crushed the Crimean Front in eleven days — the Germans called it Trappenjagd, the fox hunt — capturing about 170,000 prisoners and the whole Soviet tank strength in the south, and then had a free hand for the assault on Sevastopol and the drive towards Stalingrad. The lesson the Soviet high command took from this disaster was to stop making scattered amphibious landings and to concentrate on the land front, which is why the Black Sea Fleet spent 1942-43 doing small raids rather than landings.',
    strength:
      'Less than 90,000 Germans with about 200 tanks; the Crimean Front ~250,000 men with 238 tanks and 404 aircraft on 8 May 1942, of whom 570,601 were lost over the campaign',
  },
  {
    id: 'sevastopol_1942',
    name: 'Sevastopol falls: the longest siege of the war in the east',
    side: 'german',
    from: '1941-10-30',
    to: '1942-07-04',
    path: [
      [44.68, 33.7], // the Belbek river, the first position the defenders fell back on in October 1941
      [44.58, 33.59], // the Sapun ridge south-east of the city, stormed on 7 June after a five-day barrage
      [44.6, 33.52], // Sevastopol itself, whose inner harbour and Chersonese evacuations ended on 1 and 4 July
    ],
    summary:
      'Sevastopol was a fortified naval base with minefields, concrete belts and 30.5 cm coast-defence guns, and it was supplied only by sea, so taking it needed everything the Germans had: some 1,300 guns and howitzers, including the 80 cm railway gun Schwerer Gustav, and 803 aircraft. The assault of 7 June, preceded by a five-day artillery and air preparation, broke the Separate Coastal Army in a week and cost the defenders about 70,000 men, 25,000 of them killed, though some 30,000 were evacuated across the strait. The fall of the fortress on 4 July came three days after the start of the 1942 offensive to the Don and the Volga, and Hitler sent Manstein straight north with his army — so the Crimea was never used as a base for the drive on the Caucasus oil, which is one reason that offensive stopped short of its objective.',
    strength:
      'Eleventh Army, 203,800 men with 1,300 guns and howitzers and 803 aircraft on 6 June 1942; the Separate Coastal Army, 118,000 men, supplied by the Black Sea Fleet',
  },
  {
    id: 'rostov_1941',
    name: 'Rostov: the first German city taken back, November 1941',
    side: 'soviet',
    from: '1941-11-17',
    to: '1941-12-02',
    path: [
      [47.22, 39.71], // Rostov-on-Don, lost on 21 November and retaken on 29 November
      [47.22, 38.93], // Taganrog, cleared in early December, and the front then settled on the Mius
    ],
    summary:
      'Rostov was the gate to the Caucasus oil and grain, and the farthest point reached by the 1st Panzer Army in 1941. Kleist’s troops took it on 21 November, exhausted and short of fuel, and on 17 November the Southern Front attacked from bridgeheads north of the city; Rostov changed hands again on 29 November and the Germans were pushed back over the Mius. It was the first time in the war that a German army had been forced out of a place it had captured, and it happened five days before the counter-offensive before Moscow, so the two together ended any hope of a decision in 1941. Hitler drew the conclusion that his generals were obstructing him: he dismissed the commander-in-chief von Brauchitsch on 19 December and took direct command of the army, which from then on meant that operational decisions in the east were political as well as military.',
    strength:
      'Southern Front’s armies, thrown in piecemeal; the 1st Panzer Army and Seventeenth Army, at the end of a 1,200 km advance with no winter clothing and no fuel reserve',
  },
  {
    id: 'orel_1943',
    name: 'Orel and Bryansk: the counter-stroke after Kursk',
    side: 'soviet',
    from: '1943-07-12',
    to: '1943-09-28',
    path: [
      [53.28, 36.58], // Mtsensk, where the attempt to pinch out the Orel salient failed in late July
      [52.97, 36.06], // Orel, abandoned on 5 August, the rail hub of the central front
      [53.24, 34.37], // Bryansk, taken on 17 September, and the Desna crossings
      [52.16, 34.49], // Sevsk, on the way to the Sozh, as the front moved west for good
    ],
    summary:
      'The Soviet counter-offensive at Orel began on 12 July, before the German attack at Kursk had been called off, and it was meant to encircle the Orel salient. That failed — Mtsensk cost the Bryansk Front 17,000 men — but once Citadel was abandoned the salient became indefensible. Model conducted a series of fighting withdrawals to shorter lines, giving up Orel on 5 August and Bryansk on 17 September without allowing an encirclement, so the German centre survived to fight another year. The strategic result was the rail network: Orel and Bryansk were the junctions that fed Army Group Centre, and their loss put the front on the Desna and Sozh, 300 km closer to the Dnieper, which the Red Army crossed in the following two months.',
    strength:
      'Western and Bryansk Fronts, over 1 million men in the two operations; Ninth and Second Panzer Armies, already bled by Citadel, in organised withdrawal to prepared lines behind',
  },
  {
    id: 'smolensk_1943',
    name: 'Smolensk retaken: the gateway to Moscow closes',
    side: 'soviet',
    from: '1943-09-15',
    to: '1943-10-02',
    path: [
      [53.95, 32.86], // Roslavl, taken 25 September, covering the southern flank
      [54.78, 32.05], // Smolensk, taken on 25 September after two years of occupation
      [54.51, 30.43], // Orsha, the line the front then held until June 1944
    ],
    summary:
      'Smolensk had been the objective of every invasion route to Moscow, and its recapture on 25 September 1943 was as much symbolic as military: it closed the western highway to the Soviet capital for good. The offensive ground forward against prepared positions rather than encircling anything, and by early October it was spent at Orsha, where the front stayed for nine months. Two consequences mattered more than the city. The first was that Army Group Centre’s line was now straighter and shorter, which is why it could be held with fewer divisions — until those divisions were destroyed there in 1944. The second was the partisan zone around Smolensk, which by then controlled wide areas of the German rear and made the railways unreliable, a fact the Germans met with burning villages and mass executions.',
    strength:
      'Western and Kalinin Fronts, ~1 million men and 2,600 tanks; Fourth Panzer Army, holding in depth with the Vitebsk-Orsha railway behind it',
  },
  {
    id: 'caucasus_1943',
    name: 'The Caucasus cleared: the oilfields recovered, January-February 1943',
    side: 'soviet',
    from: '1943-01-10',
    to: '1943-02-18',
    path: [
      [44.6, 40.08], // Maykop and its oilfields, recovered 29 January
      [45.03, 38.97], // Krasnodar, taken 12 February, and the Kuban crossings
      [47.22, 39.71], // Rostov, taken 14 February, closing Army Group A’s only rail exit
    ],
    summary:
      'The 1942 drive on the oil had stopped before the big fields mattered, and after Stalingrad Army Group A had to get out of the Caucasus before Rostov was closed behind it. The Soviet pursuit took Maykop on 29 January and Krasnodar on 12 February, and Rostov fell on 14 February — but the 17th Army escaped across the Strait of Kerch into the Kuban bridgehead, the largest withdrawal of German forces in the east after the Sixth Army’s surrender. The consequences were industrial and strategic: the Maykop and Grozny fields, wrecked by German demolition parties, were being repaired within months and supplied a large share of Soviet fuel from 1944 onwards; and the Kuban bridgehead tied down Soviet armies until September 1943 and gave the Luftwaffe airfields from which it contested the Black Sea for another year.',
    strength:
      'Transcaucasian and Southern Fronts in pursuit; Army Group A, whose 17th Army evacuated westwards across the Kerch Strait rather than being trapped',
  },
  {
    id: 'novorossiysk_1943',
    name: 'Novorossiysk and the Kuban bridgehead, September 1943',
    side: 'soviet',
    from: '1943-09-10',
    to: '1943-10-16',
    path: [
      [44.72, 37.77], // Novorossiysk, taken 16 September after the landings of the Black Sea Group
      [44.89, 37.32], // Anapa, cleared 22 September, along the coast road north-west
      [45.22, 36.72], // the Taman peninsula, the last Axis ground on the mainland, cleared 9 October
    ],
    summary:
      'The Kuban bridgehead was the bridgehead from which the Luftwaffe still contested the Black Sea and from which the Germans hoped to retake the oilfields; it was cleared in five weeks by a combination of frontal attack and a series of small amphibious landings, of which the one behind the lines at Novorossiysk — the landing force later celebrated as “Little Land” — decided the port. Novorossiysk fell on 16 September, the coast road to Anapa was cut, and the Taman peninsula was evacuated on 9 October. Losing the port and its airfields ended the German air threat to the Black Sea coast, freed armies and air armies for the Crimea, and gave the Soviets the bases from which they supported the partisans and then invaded the peninsula in April 1944.',
    strength:
      'Black Sea Group of Forces — 18th Army, the 4th Air Army and the Black Sea Fleet’s landing brigades; the Seventeenth Army, fighting a deliberate withdrawal to the Crimea',
  },
  {
    id: 'crimea_1944',
    name: 'The Crimea recovered, April-May 1944: the 17th Army destroyed',
    side: 'soviet',
    from: '1944-04-08',
    to: '1944-05-12',
    path: [
      [46.17, 34.81], // Henichesk and the Syvash causeways, stormed on 8 April
      [45.71, 34.39], // Dzhankoy, taken 9 April, the junction the Germans had held since 1941
      [44.95, 34.1], // Simferopol, entered 13 April
      [44.6, 33.52], // Sevastopol, assaulted on 5 May and taken on 9 May
    ],
    summary:
      'The Crimea was attacked from the north across the Syvash causeways and from the east out of the Kerch bridgehead, with a naval blockade closing escape by sea — a blockade Hitler broke with evacuation shipping, which saved about 21,000 troops out of an army of over 200,000. Simferopol fell on 13 April and Sevastopol’s fortifications on 9 May, in thirty-five days. Axis losses were about 100,000. The operation gave the Red Army the Black Sea ports and airfields, and freed the 4th Ukrainian Front for the Jassy-Kishinev offensive that took Romania out of the war in August. It also began a deportation: on 18-20 May 1944 the entire Crimean Tatar population, about 190,000 people, was sent to Central Asia on suspicion of collaboration; they were not allowed to return until 1989, and their dispossession is still felt in Crimea today.',
    strength:
      '4th Ukrainian Front and the Separate Coastal Army, 462,400 men with 560 tanks and assault guns and 1,200 aircraft; the Axis Seventeenth Army, 230,000-256,000 men, cut off from supply by land',
  },
  {
    id: 'vyborg_sortavala_1944',
    name: 'The Karelian Isthmus: the Mannerheim Line broken in ten days',
    side: 'soviet',
    from: '1944-06-10',
    to: '1944-07-10',
    path: [
      [60.71, 28.74], // Vyborg-Viipuri, taken 20 June, the city lost by Finland in 1940
      [61.7, 30.69], // Sortavala, on the Ladoga shore, on 2 July, as the line fell back to 1940 borders
    ],
    summary:
      'Finland had gone to war alongside Germany in 1941 to recover the territory lost in 1939-40, and by the summer of 1944 Stalin wanted the old frontier restored and Finland out of the war. The offensive of 10 June smashed the VT line and then the main line in ten days, took Vyborg on 20 June and forced the Finnish army to stand on the 1940 frontier. Finland asked for an armistice on 22 June, refused German terms, and by September had signed one — which meant German troops in Finland became enemies, and the Wehrmacht burned Lapland on its way out. This is the least-noticed front of 1944: it removed Germany’s northern ally, its nickel supplies and its U-boat bases, and it decided that Finland, unlike the Baltic states, kept its independence.',
    strength:
      'Leningrad Front’s assault armies, with overwhelming artillery and air support, against the Finnish III Army on the isthmus; Finnish casualties in the summer fighting were about 10,000',
  },
  {
    id: 'svir_petrozavodsk_1944',
    name: 'Svir and Petrozavodsk: eastern Karelia cleared, 1944',
    side: 'soviet',
    from: '1944-04-21',
    to: '1944-08-09',
    path: [
      [60.73, 33.55], // Lodeynoye Pole on the Svir, cleared in April, reopening the Ladoga line
      [61.79, 34.37], // Petrozavodsk, taken on 28 June, the capital of Karelia
    ],
    summary:
      'While the fighting on the isthmus made the news, the Karelian Front cleared eastern Karelia in a series of river crossings, taking Petrozavodsk on 28 June, three days before Mannerheim resigned. The two operations together made Finland’s position hopeless: on 4 September it signed an armistice, declared war on Germany and agreed to pay reparations and cede the territory it had taken. For the Red Army this was the most technical of the 1944 offensives — advance in roadless forest and swamp, with lake-flanking columns and Ladoga flotillas — and the least costly in political terms, because it was fought against a small army that was already looking for a way out. It also reopened the Murmansk-Leningrad line of communications, without which the northern convoys and the Arctic supply route could not have worked.',
    strength:
      'Karelian Front’s armies, with the Ladoga flotillas and Long Range Aviation; the Finnish II Army, short of men and of anti-tank weapons after three years of siege economy',
  },
  {
    id: 'petsamo_kirkenes_1944',
    name: 'Petsamo-Kirkenes: the Arctic front and the nickel mines',
    side: 'soviet',
    from: '1944-10-07',
    to: '1944-11-01',
    path: [
      [69.55, 31.21], // Pechenga-Petsamo, the German fortified zone north of the Arctic Circle
      [69.41, 30.21], // the Nikel nickel mines, captured intact enough to restart within a year
      [69.73, 30.05], // Kirkenes in Norway, taken on 25 October with Norwegian assistance
    ],
    summary:
      'The Arctic front had been static since 1941, fought in tundra and darkness, but in October 1944 the 14th Army broke the German positions west of the Litsa in a week, taking the nickel mines of Petsamo — 27 per cent of Germany’s nickel supply — and the Norwegian town of Kirkenes on 25 October. The 20th Mountain Army withdrew through Finnmark to Norway, and as it went it burnt the region: Kirkenes and most buildings in Finnmark were destroyed, and the population evacuated, which is why the north of Norway was rebuilt after the war. For Norway this was the first part of the country liberated by ground forces, and for the USSR it fixed the postwar border at Petsamo, which Finland ceded in the armistice and the 1947 treaty.',
    strength:
      '14th Army with naval infantry and the Northern Flotilla, ~100,000 men, against the Mountain Corps Norway, which withdrew in good order to Norway',
  },
  {
    id: 'upper_silesia_1945',
    name: 'Upper Silesia: the industrial triangle taken, March 1945',
    side: 'soviet',
    from: '1945-03-10',
    to: '1945-03-31',
    path: [
      [50.26, 19.02], // Katowice, taken on 11 March, the capital of the industrial region
      [50.29, 18.67], // Gliwice-Gleiwitz, with its radio station, taken 15 March
      [50.67, 17.92], // Opole-Opeln, on the Oder, taken 18-21 March
      [50.09, 18.22], // Racibórz-Ratibor, taken 24 March, at the head of the advance to the Olza
    ],
    summary:
      'After the Vistula-Oder run, the 1st Belorussian and 1st Ukrainian Fronts had to straighten their flank: the German hold on Upper Silesia threatened the 1st Ukrainian Front’s northern rear and kept the last big German industrial area — coal, aluminium, chemicals — out of Soviet hands. The offensive of 17-31 March took Katowice, Gliwice and Opole and pushed to the Olza, and in the fighting the German garrison of Breslau, encircled since 15 February, was left to starve. The human consequence was the flight of the German population of Silesia and Pomerania across the Oder in winter, in the largest movement of people in the war: hundreds of thousands died from cold, exhaustion and air attack. The postwar border followed this line of contact, and the emptied towns were settled by Poles expelled from lands the USSR took.',
    strength:
      '1st Belorussian and 1st Ukrainian Fronts, ~1.9 million men; Army Group Centre’s remnants, with the Breslau fortress of ~40,000 men encircled behind the front',
  },
  {
    id: 'morava_ostrava_1945',
    name: 'Moravian-Ostrava: the last battle for the Czech lands',
    side: 'soviet',
    from: '1945-04-10',
    to: '1945-05-06',
    path: [
      [49.94, 17.9], // Opava-Troppau, taken 22 April, on the edge of the Ostrava basin
      [49.84, 18.29], // Ostrava-Mährisch Ostrau, the coal and steel basin, taken 30 April
      [49.59, 17.25], // Olomouc-Olmutz, reached in the first days of May, on the road to Prague
    ],
    summary:
      'The 4th Ukrainian Front’s attack on the Ostrava industrial basin, on 10 April, was the least-known of the 1945 offensives and the one that decided who took the Czech lands. The Germans hoped to hold Moravia to keep the oil of the Vienna basin and the factories of the protectorate working; the Soviets needed the Ostrava coal and a direct route to Prague and Dresden. Ostrava fell on 30 April as the Red Army reached the Elbe, and the front then wheeled north for the Prague offensive of 6 May, the last operation of the war. The political consequence was decisive: Czechoslovakia’s postwar government was installed on Soviet arms rather than in a western liberation, which is one reason the country fell into the Soviet bloc within four years — the same fact that made the Prague Uprising of May 1945, and its Soviet relief, a contested memory.',
    strength:
      '4th Ukrainian Front with the 1st Ukrainian Front’s 4th Tank Army, ~370,000 men; Army Group Centre, ~600,000, trying to hold the oilfields and keep a road open to the west',
  },
  {
    id: 'balaton_1945',
    name: 'Lake Balaton: Germany’s last offensive, March 1945',
    operation: 'Frühlingserwachen',
    side: 'german',
    from: '1945-03-06',
    to: '1945-03-15',
    path: [
      [47.19, 18.4], // Székesfehérvár-Stuhlweißenburg, the jump-off line, and the rail junction
      [47.09, 17.91], // Veszprém, the ground gained; the Danube objective was never reached
    ],
    summary:
      'Germany’s last offensive of the war was fought for oil. Dietrich’s 6th Panzer Army, with the best formations left in the east including the II SS Panzer Corps, attacked south of Lake Balaton on 6 March towards the Danube, to retake the Hungarian fields and to close the Soviet bridgehead. Thaw turned the steppe to mud, the 3rd Ukrainian Front had prepared three defensive belts, and the attack was stopped within two days; the Soviet counter-offensive began on 16 March and reached Vienna in five weeks. The offensive had been delayed by Hitler’s insistence on a subsidiary attack from the Székesfehérvár area, and it cost the panzer divisions their last fuel and most of their tanks. Consequence: Hungary, Germany’s last source of petroleum, was lost within a month, and the armoured formations that might have defended Austria or Berlin were destroyed on the march.',
    strength:
      'Army Group South, ~300,000 men and ~600 tanks and assault guns, with Hungarian units; Tolbukhin’s 3rd Ukrainian Front, ~465,000 men in prepared positions, with ~12,400 German and ~8,500 Soviet casualties in the ten days',
  },

  // ---------------------------------------------------------------------
  // Italy and north-west Europe, 1943-45: the axes the armies actually
  // walked. Where a port was bypassed rather than taken — Lorient, Dunkirk,
  // the Atlantic fortresses — the line stops short of it and the comment
  // says so, because bypassing them was itself the decision.
  // ---------------------------------------------------------------------
  {
    id: 'adriatic_1943',
    name: 'The Adriatic coast: Termoli and the battle for Ortona',
    side: 'western',
    from: '1943-10-03',
    to: '1943-12-28',
    path: [
      [42.0, 14.99], // Termoli, landed on 3 October by No. 3 and No. 40 (Royal Marine) Commando and the Special Raiding Squadron
      [42.35, 14.4], // Ortona, the “little Stalingrad”, fought for 20-28 December
      [42.46, 14.21], // Pescara and the Adriatic valleys, held by the Germans through the winter
    ],
    summary:
      'While the main Allied advance crawled up the west coast towards Cassino, the Eighth Army swung down the Adriatic, hoping to turn the German flank and take the ports behind it. A seaborne landing at Termoli on 3 October got a brigade ashore and held it against German counterattacks, and the advance then took Pescara; but the mountain rivers, the autumn rain and one prepared town stopped the army at Ortona. There the 1st Canadian Division fought house by house in December in what the Canadians called “a little Stalingrad”, and invented the tactics — the Bangalore torpedo and the “mouseholing” through party walls — that the Allies then used in Italy and north-west Europe. The campaign shows why the Italian campaign became what Churchill’s opponents feared: a place to absorb German divisions, but not the route to the Balkans he had promised.',
    strength:
      'Termoli was stormed by two brigades of 2nd Special Service Brigade - commandos and marines - and then reinforced by brigades of the 78th Division; the 1st Canadian Division fought at Ortona. The German defence was Kampfgruppe Rau of the 1st Parachute Division, 16th Panzer Division and LXXVI Panzer Corps, fighting a deliberate delaying action',
  },
  {
    id: 'anzio_1944',
    name: 'Anzio: the landing that should have cut the Gustav line',
    operation: 'Shingle',
    side: 'western',
    from: '1944-01-22',
    to: '1944-06-04',
    path: [
      [41.45, 12.63], // the Anzio-Nettuno beaches, landed on 22 January, 40 km behind the Gustav line
      [41.59, 12.83], // Cisterna, where the 504th Parachute Regiment was destroyed on 30 January
      [41.69, 12.78], // Velletri, held on the Albano hills through February and May
      [41.89, 12.48], // Rome, entered on 4 June, four months after the landing
    ],
    summary:
      'The plan was to land behind the Gustav line, seize the Alban Hills and the roads into Rome, and force the Tenth Army to evacuate central Italy or be cut off. It failed because the assault corps did not move: two days were lost consolidating the beachhead, and Kesselring reacted faster than the Allies expected, containing the lodgement and then trying to destroy it in the counterattack of 16-29 February. The four months that followed were the most controversial of the Italian war — a stalemate in which the Allied armies were pinned down within sight of Rome while Cassino had to be taken first. When the breakout came on 23 May it worked, and Rome fell on 4 June, two days before Normandy. The lesson both sides took was about amphibious operations: Kesselring’s fast reaction at Anzio and Salerno is why the Germans expected the Normandy lodgement to be thrown into the sea, and why the failure to do so was the turning point of the war.',
    strength:
      'VI Corps, ~36,000 men and 2,300 vehicles on 22 January, without armour; the German Fourteenth Army, formed for the purpose, ~100,000 men, with the forces to close the gap',
  },
  {
    id: 'po_valley_eighth_1945',
    name: 'The Po Valley: the Eighth Army’s last offensive, April 1945',
    operation: 'Buckland',
    side: 'western',
    from: '1945-04-06',
    to: '1945-05-02',
    path: [
      [44.22, 12.04], // Forlì and the Senio, the winter line on the Adriatic flank
      [44.35, 11.71], // Imola, cracked on 9 April after the largest artillery preparation in Italy
      [44.49, 11.34], // Bologna, entered 21 April by the Poles, Canadians and the Italian corps
      [44.84, 11.62], // Ferrara and the Po, reached on 24 April, with the Adige next
    ],
    summary:
      'The last battle in Italy began on 6 April with a thousand guns and the Bomber Command heavy-bomber force used as artillery, and broke the Senio and Santerno lines in three days. Polish, Canadian, Indian, New Zealand, Jewish Brigade and Italian corps formations — the Italian partisans and a reconstituted Italian army had joined the Allied side in 1944 — took Bologna on 21 April with the help of an internal uprising. Army Group C had no reserves and no air cover, so the Po crossings on 24-25 April turned into a pursuit along the Adige and the Piave; 150,000 Germans surrendered on 2 May, three days before the general surrender in north-west Europe. The consequence beyond the military one is political: the northern Italian cities were largely freed by their own partisans before the Allies arrived, which gave the resistance a claim to legitimacy that shaped Italy’s postwar constitution and its refusal to return to the monarchy.',
    strength:
      'Eighth Army, ~250,000 men of eleven nationalities, with ~1,500 guns and close air support; Army Group C, ~200,000 effectives, short of fuel and without air cover',
  },
  {
    id: 'liguria_po_1945',
    name: 'The Ligurian plain and Genoa: the Fifth Army’s break to the Po',
    side: 'western',
    from: '1945-04-05',
    to: '1945-05-02',
    path: [
      [44.54, 7.66], // Fossano and the Cuneo plain, cleared in early April by the 1st Special Service Force
      [44.83, 8.75], // Alessandria, taken 5 April, at the junction of the Piedmont roads
      [44.85, 9.67], // Piacenza, where the army crossed the Po on 24-26 April
      [45.78, 10.43], // Brescia and the Adige, met by the Eighth Army coming from the east
    ],
    summary:
      'Mark Clark’s Fifth Army attacked on 5 April through the Ligurian Apennines, and unlike the previous two years there was no line to break: the German positions were thin, the partisans held the passes, and the army’s armour could deploy on the Piedmont plain. Alessandria fell on 5 April, Genoa on 26 April — taken largely by Italian partisans, with the Brazilian division, the only Latin American formation to fight in Europe, arriving in the city — and the Po was crossed on 24-26 April. Turin and Milan rose on 25 April and the German plenipotentiary negotiated a surrender with the Western Allies on 29 April at Caserta, partly to prevent the partisans from taking the cities alone and being massacred afterwards. This is the least-known front of the European war and the one that decided Italy’s postwar politics: a large part of industrial Italy liberated itself, and the United States and Britain were the first to reach it.',
    strength:
      'Fifth Army, ~200,000 men including the Brazilian division and four reconstituted Italian combat groups, with mobile armour; the German Fourteenth Army, hollow, holding a front it could not cover',
  },
  {
    id: 'brittany_brest_1944',
    name: 'Brittany: the race to Brest and the ports left to rot',
    side: 'western',
    from: '1944-07-30',
    to: '1944-09-19',
    path: [
      [48.69, -1.36], // Avranches, the gap in the German front, forced on 30 July
      [48.35, -1.2], // Fougères, taken 31 July, and the German positions in Normandy outflanked
      [48.11, -1.68], // Rennes, entered on 1-2 August, its garrison too weak to defend the town
      [48.39, -4.49], // Brest, taken on 19 September after its outer forts had been stormed
    ],
    summary:
      'Brittany was the great prize of the break-out: its ports, above all Brest, were needed to supply armies moving faster than their lorries could. Patton’s Third Army drove 240 km in eleven days and cut the peninsula at Rennes and Brest, but the ports had been declared fortresses and would not fall to a rush. Brest was taken only on 19 September, after weeks of assault on concrete positions and 45,000 German and large American casualties; Lorient and Saint-Nazaire were simply bypassed and stayed in German hands until 9 May 1945. The decision to besiege or bypass them is one of the most consequential of the campaign: the Atlantic ports had to be reduced or ignored, the overland logistics from Normandy carried the armies to the Rhine, and the delay in opening Antwerp — see the Scheldt line — was what stopped the advance in 1944 rather than the lack of fuel for a single day.',
    strength:
      'US Third and Ninth Armies in pursuit, with the VIII Corps against Brest; the German fortress garrisons, ~50,000 men in positions built to withstand siege',
  },
  {
    id: 'falaise_1944',
    name: 'Falaise: the pocket that destroyed the German army in Normandy',
    side: 'western',
    from: '1944-08-07',
    to: '1944-08-22',
    path: [
      [49.18, -0.36], // Caen, taken 8-18 August, which fixed the German armour in the east
      [48.9, -0.2], // Falaise, taken by the Polish 1st Armoured Division on 17 August
      [48.84, 0.03], // Trun, reached by the Canadians on 17 August, the corridor narrowing
      [48.81, 0.1], // Chambois, where the Poles and the Americans closed the pocket on 20 August
    ],
    summary:
      'The German counterattack at Mortain on 7 August, meant to cut the American peninsula, instead put German armour in a pocket: Bradley had already switched forces east, and Montgomery’s plan was to pin the Germans in front of Caen while the Americans and Poles closed the gap behind them. Falaise, Trun and Chambois were taken by 20 August, and though about 20,000-40,000 Germans escaped through a gap a few kilometres wide under heavy fire, the German Seventh Army lost the whole of its heavy equipment and most of its divisions. The fighting at Chambois by the Polish 1st Armoured Division, holding the southern lip against four SS divisions trying to cut their way out, was the most costly Polish action of the war outside their own country. The consequence: Normandy was decided not by the landing beaches but by this encirclement, and from 21 August the retreat to the Seine became a rout — and the race for Antwerp began.',
    strength:
      'First Canadian and First Polish Armoured, and the US XV Corps; the German Seventh and Fifth Panzer Armies, ~100,000 men in the pocket, with 60,000 captured and almost all armour lost',
  },
  {
    id: 'scheldt_1944',
    name: 'The Scheldt: opening Antwerp, October-November 1944',
    side: 'western',
    from: '1944-10-02',
    to: '1944-11-08',
    path: [
      [51.41, 4.33], // Woensdrecht, cut on 6-8 October, the neck of the Beveland peninsula
      [51.49, 4.29], // Bergen op Zoom, taken 13-18 October by the 4th Canadian Division
      [51.5, 3.88], // South Beveland and Goes, cleared 24-26 October, frontally and by amphibious flanking
      [51.49, 3.42], // Vlissingen and Middelburg, on Walcheren, taken 6-8 November after the bombers breached the dikes
    ],
    summary:
      'Antwerp was captured intact on 4 September with its port facilities undamaged, but it was useless while German guns controlled the Scheldt estuary and the South Beveland and Walcheren islands. The clearing was delayed for five critical weeks while Market Garden was mounted, and it then had to be done the hard way: flooded country, causeways, minefields, and the Royal Air Force and RAF Bomber Command breaching the Walcheren dikes to flood the German positions. The 2nd and 3rd Canadian Divisions, with Polish, Belgian and British support and the Royal Navy’s landing craft, took the estuary in five weeks at about 6,400 Canadian casualties of some 21,000 Allied; the first convoy reached Antwerp on 28 November. The consequence was strategic: Antwerp’s port handled more tonnage than any other Allied port in 1945, and the delay in opening it is the strongest single explanation for why the advance of 1944 stopped short of the Rhine and why the Battle of the Bulge was possible.',
    strength:
      'First Canadian Army, the 4th Canadian (Armoured) and 2nd and 3rd Canadian Divisions, with the Royal Navy and RAF Bomber Command; the German Fifteenth Army’s fortress garrisons, ~60,000 men, of whom 40,000 were captured',
  },
  {
    id: 'channel_ports_1944',
    name: 'The Channel ports: Le Havre, Boulogne, Calais — and Dunkirk left',
    side: 'western',
    from: '1944-09-01',
    to: '1944-10-05',
    path: [
      [49.49, 0.1], // Le Havre, taken on 12 September after a Bomber Command opening attack
      [50.73, 1.61], // Boulogne, stormed 17-22 September by the Canadians with heavy artillery
      [50.95, 1.85], // Calais, taken 25-30 September by the 3rd Canadian Infantry Division
      [51.03, 2.38], // Dunkirk, besieged and left to surrender only on 9 May 1945
    ],
    summary:
      'The Channel ports had been fortified as U-boat bases, and Hitler ordered them held to the last man because their loss would shorten the U-boat war and delay the Allied supply system. The Canadians reduced Boulogne and Calais in set-piece sieges with heavy artillery and aerial bombing, at a cost of under 900 Canadian casualties, and Le Havre fell on 12 September after Bomber Command fired 600 tons of bombs into the town — which killed some 2,000 French civilians and left the city in ruins. The fortresses delayed the opening of the ports by five to seven weeks, and the harbour facilities had been so thoroughly demolished that they were not working at full rate for months. That is why the Allied armies were supplied across the Channel beaches and over the Seine and Scheldt, and why the front in the west stalled on the German frontier until November 1944. Dunkirk, garrisoned by 12,000 Germans, was simply ignored, and its surrender on 9 May 1945 was the last German capitulation of the war in the west.',
    strength:
      'First Canadian Army with Polish and Czech brigades and the RAF Heavy Bomber offensive; garrisons of 10,000-20,000 men in concrete fortresses built to U-boat standards',
  },
  {
    id: 'rhineland_1945',
    name: 'The Rhineland: the Reichswald and the west bank of the Rhine',
    operation: 'Veritable and Grenade',
    side: 'western',
    from: '1945-02-08',
    to: '1945-03-10',
    path: [
      [51.68, 6.16], // Goch, cleared 8-10 February, the first objective of the Reichswald attack
      [51.79, 6.14], // Kleve-Cleve, taken 10 February, with the Roer and Reichswald forest behind it
      [51.33, 6.56], // Krefeld, entered 3 March, as the western bank was cleared
      [50.94, 6.95], // Cologne, occupied on 7 March after heavy bombing
    ],
    summary:
      'The battle to clear the west bank of the Rhine north of the Moselle was the largest British offensive of the war: three armies, after the largest artillery concentration of the campaign, attacked south-east through the Reichswald forest while Montgomery waited for the Roer river to fall. The advance took Goch and Cleve in three days, but the weather, flooded country and German resistance slowed it, and the American attack across the Rur dam — delayed while the Germans held the dams upstream and flooded the ground — came two weeks late. By 10 March the west bank was clear and 280,000 prisoners had been taken; on 7 March the Americans had already crossed the Ludendorff bridge at Remagen, an opportunity Montgomery did not exploit. The Rhineland battle is the least-remembered great British battle of the war and the one that destroyed the last German industrial region west of the Rhine, including the Ruhr’s outlying factories, before the Ruhr itself was encircled.',
    strength:
      '21st Army Group — First Canadian and Second British Armies, ~500,000 men, 3,300 guns and 1,500 tanks, with Ninth US Army on the right; First Parachute Army and Fifteenth Army, about half the Allied strength',
  },
  {
    id: 'north_germany_1945',
    name: 'North Germany: the race to the Baltic, April-May 1945',
    side: 'western',
    from: '1945-04-02',
    to: '1945-05-03',
    path: [
      [52.27, 8.05], // Osnabrück, taken 4 April, the gateway out of the Ruhr
      [53.08, 8.81], // Bremen, taken 26 April, the last industrial city in the British zone
      [53.55, 10.0], // Hamburg, surrendered on 2 May, its population 800,000 strong
      [53.9, 11.47], // Wismar on the Baltic, reached 2 May, ahead of the Red Army
    ],
    summary:
      'After the Ruhr was encircled, Montgomery’s 21st Army Group drove north-east across the North German plain, and the campaign became a race — not to Berlin, which was assigned to the Soviets at the Ems-Danube line agreed at Yalta and confirmed by contacts on the Elbe, but to the Baltic ports and to Denmark. Montgomery refused a planned airborne drop on Wismar in favour of an armoured rush, and the 18th Hussars reached the Baltic on 2 May, three days ahead of the Red Army. That line — Mecklenburg and Schleswig-Holstein in western hands — became the frontier of the postwar West: the western zones included the whole of the North German plain and the Kiel canal, and the Soviet advance stopped at the Elbe. Hamburg surrendered on 2 May to avoid destruction; the largest rescue operation of the war, the evacuation of 2 million refugees and prisoners by sea from the east, ended off these coasts on 3 May.',
    strength:
      'Second British Army with Eighth Armoured, I Canadian and the airborne corps, mobile across open country; Army Group North’s remnants, withdrawing towards Denmark and the Baltic ports',
  },
];
