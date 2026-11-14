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
      [53.35, 13.08], // Neustrelitz, Army Group North's headquarters
      [52.41, 16.93], // Poznań, by-passed and encircled
      [51.75, 19.47], // Łódź, taken 8 September
      [52.23, 21.01], // Warsaw, invested in the first days
    ],
    summary:
      'Two army groups attacked into the Polish corridor from Pomerania and East Prussia. Armoured spearheads by-passed the Polish armies instead of meeting them, and met east of the Vistula; the Polish army was destroyed in five weeks, while the Luftwaffe destroyed most of the Polish air force on the ground.',
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
      'Army Group South drove from Silesia and Slovakia towards Kraków and Lwów, and had to fight hard at the Bzura, where the Poles counter-attacked on 9 September and came within a day of succeeding.',
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
      'The Red Army crossed on 17 September to the line agreed in the German-Soviet Frontier Treaty of 28 September. Some 12-13 million people, of whom barely half were ethnic Poles, passed under Soviet rule; 230,000 Polish soldiers were taken prisoner, and in March-April 1940 about 22,000 Polish officers and prisoners were shot in the Katyn forest and elsewhere.',
    strength: '~466,000 committed troops, ~2,300 tanks',
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
      'The 7th Army attacked across the 70 km-wide Karelian isthmus into a forest and lake landscape with one road per division. The Mannerheim Line held until a huge artillery preparation let a new Soviet commander concentrate a breakthrough at Summa on 1 February. In the far north the Red Army took Salla but was stopped at Kemijärvi; Finland kept its independence but lost 11% of its population\'s land, and 400,000 Karelians were evacuated rather than live under Soviet rule.',
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
      [54.35, 18.65], // Gdynia, the embarkation port for Oslo
      [55.68, 12.57], // Copenhagen, taken in hours
      [59.91, 10.75], // Oslo, where the Blücher was sunk in the Oslofjord
      [63.43, 10.39], // Trondheim
      [68.44, 17.43], // Narvik, the iron-ore port, retaken by Allied troops on 28 May
    ],
    summary:
      'Germany struck to keep iron ore from Sweden and to pre-empt a British mine, and took six ports in one night. It was the first combined seaborne, airborne and amphibious operation of the war — and the biggest German naval loss of it: the heavy cruiser Blücher, the light cruisers Karlsruhe and Königsberg, and ten destroyers, which left the Kriegsmarine too weak to resist the later invasions it had just secured.',
    strength: '~100,000 men in seven divisions for Norway; two brigades for Denmark',
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
      [50.25, 5.7], // Gembloux gap, where the Allies went forward to meet the feint
      [49.7, 4.94], // Sedan, the Meuse crossed on 13 May
      [49.56, 3.62], // Laon, the French reserve counter-attack broken on 16 May
      [49.89, 2.3], // Amiens, taken 20 May
      [50.11, 1.83], // Abbeville on the Channel, reached the same day
    ],
    summary:
      'The best-known operational gamble of the war: Kleist\'s panzer group crossed the Meuse at Sedan against a French army of reservists, then turned west across open country instead of helping to crush the Allied armies in Belgium. Reaching the Channel at Abbeville on 20 May cut those armies off from France. The armoured crews had been running on bread and jam for four days when the halt order of 23-27 May stopped them within sight of Dunkirk.',
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
      '338,226 men were taken off in nine days, about a third of them French, mostly by naval vessels and the 700 small ships whose owners answered the Admiralty\'s call. The army escaped but left 2,400 guns, 64,000 vehicles and its reserves of ammunition behind; the RAF flew 3,500 sorties in five days claiming 240 aircraft destroyed, at a cost of 106 of its own.',
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
      [40.64, 22.94], // Thessaloniki, taken on the second day, before the British arrived
      [39.64, 22.42], // Larissa, the British expeditionary force's last depot
      [38.8, 22.05], // Thermopylae, held for two days in April as in 480 BC
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
      'Army Group North drove 700 km through the Baltic states in three weeks, meeting less resistance than expected because the Red Army\'s formations there were green and its best units had been sent to the west. It took Luga and Novgorod and reached the Gulf of Finland; when Hitler pulled its panzers away to help encircle Kiev, the city was invested rather than stormed — the beginning of an 872-day siege in which about a million people died, most of them of hunger.',
    strength: '~460,000 men and ~500 tanks; Leningrad\'s civilian population had been close to 3 million',
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
      [50.75, 25.32], // Lutsk, where the first day\'s tank battle was fought
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
      [49.99, 36.23], // Kharkov, taken 28 July after the Soviet offensive there failed
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
      'Seventeenth Army advanced over the Caucasus range — the German mountain troops raised the flag on Mount Elbrus — and reached the oil fields of Maikop, which the Soviets had demolished on withdrawal. The advance ran out of fuel and road space before Grozny. Germany\'s fundamental problem was that it needed the oil and the only fields it could reach intact were already destroyed or too far away; synthetic fuel and Hungarian and Romanian deliveries had to carry the war.',
    strength: 'Army Group A ~700,000 men at the start; mountain troops of the 1st Mountain Division to the high passes',
  },
  {
    id: 'uranus',
    name: 'Operation Uranus: the encirclement at Stalingrad',
    side: 'soviet',
    from: '1942-11-19',
    to: '1942-11-23',
    path: [
      [49.87, 42.73], // Serafimovich, the Don bridgehead held since September, from which the northern pincer struck
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
      'Hoth\'s Fourth Panzer Army attacked with one corps and opened a corridor to within reach of the pocket, advancing some 48 km in three days. It was stopped on the Myshkova on 23 December, partly because Manstein refused to order the Sixth Army to break out towards it, and because the Soviet Operation Little Saturn of 16 December, aimed at the same flank armies, smashed the Italian Eighth Army and put a second relief attempt out of the question.',
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
      'Rokossovsky\'s Don Front attacked 250,000 starving men with 467,000, methodically cutting the pocket in two from west to east. Paulus surrendered in a department store in the central trading floors on 31 January; the last organised resistance ended on 2 February. Of some 91,000 taken, only about 5,000-6,000 ever went home. Stalingrad is remembered for the fighting in the city; the killing of its garrison came afterwards.',
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
      [36.75, 3.06], // Algiers, the Eastern Task Force under Eisenhower\'s deputy
      [36.37, 6.61], // Constantine, on the axis of the race for Tunis
      [36.81, 10.18], // Tunis, which the Germans reached first
    ],
    summary:
      'The first American ground operation of the war, chosen partly because a cross-Channel attack in 1942 was impossible and partly because Stalin was promised a second front. Vichy French forces defended for three days (about 1,350 Frenchmen killed) before Darlan\'s ceasefire on 10 November, an arrangement that brought the French fleet and army round but that made de Gaulle furious and cost Roosevelt political capital. The race for Tunis failed in December for lack of ports and airfields; the bridgehead was not cleared until 13 May, and the fighting there taught the US Army more than it had wanted to learn.',
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
      [36.69, 15.07], // Pachino, the Eighth Army\'s landing beaches in the south-east
      [37.24, 15.22], // Augusta, its port taken intact on the first day
      [37.5, 15.09], // Catania, which held the Germans up for eight days
      [38.19, 15.55], // Messina, reached on 17 August, a day too late
    ],
    summary:
      'The largest amphibious assault of the war up to that date. Landings were made in the south-east, opposite the least-defended coast and the shortest crossing from North Africa, after a successful deception (Operation Mincemeat, which put a dead man with false papers off the Spanish coast) that persuaded the Germans the blow would fall on Greece and Sardinia. Patton\'s Seventh Army swept west to Palermo and then north. The campaign\'s real lesson was a defeat: some 100,000 Axis troops, most of them German, were evacuated across the Strait of Messina under air attack and fought again.',
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
      [53.15, 29.22], // Bobruisk, the southern pincer\'s first encirclement
      [53.9, 27.57], // Minsk, taken 3 July; 100,000 German prisoners marched through Moscow on 17 July
      [52.1, 23.7], // Brest-Litovsk, reached on 28 July — the old 1939 frontier line
      [52.25, 21.03], // Warsaw-Praga, on the east bank of the Vistula, where the advance was stopped
    ],
    summary:
      'The largest German defeat of the war, and almost the largest battle: four successive encirclements destroyed Army Group Centre in ten days, at the same moment as the Normandy break-out and on the anniversary of Barbarossa. The Red Army used deception and a combined-arms "deep battle" method it had taken two years to learn, and advanced 600 km. Partisans cut the railways behind the front on the night of 19 June. Its end is where the postwar map of Europe was decided — and where Soviet help to the Warsaw Uprising, which began on 1 August, stopped.',
    strength: '~1.2 million Soviet men and ~4,000 tanks; Army Group Centre ~340,000 men, losing 25-28 divisions',
  },
  {
    id: 'lvov_sandomierz_1944',
    name: 'Lvov-Sandomierz: the drive to the Vistula',
    side: 'soviet',
    from: '1944-07-13',
    to: '1944-08-02',
    path: [
      [51.21, 24.71], // Kovel, the start line in the Pripet marshes\' edge
      [49.84, 24.03], // Lviv, taken 27 July
      [50.05, 21.41], // Dębica, and the oil refineries there
      [50.68, 21.75], // Sandomierz, a bridgehead over the Vistula won on 1 August
    ],
    summary:
      'Konev\'s 1st Ukrainian Front swept west across Galicia in the southern half of the Bagration strategic offensive, taking Lviv and pushing out bridgeheads over the Vistula. It then halted, and the tank corps sent north-west towards Warsaw\'s Praga suburb were fought to a standstill at Radzymin. Whether that halt was forced by logistics or chosen to let the Germans destroy the Home Army is the single most argued question about 1944, and the Soviet archives have not settled it.',
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
      'A double encirclement trapped and destroyed most of German Sixth Army — for the second time in two years — and carried the Red Army into Romania in nine days. On 23 August King Michael\'s coup arrested Antonescu and Romania switched sides, which took away the Ploiești oil fields that supplied roughly a third of Germany\'s prewar crude and its remaining Romanian troops, and opened the road to Bulgaria and Hungary. Bulgaria asked for an armistice on 2 September without firing on the Soviets; Finland followed into armistice on 4 September.',
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
      'The landings in Provence — "Anvil" cut down and delayed by Churchill, who wanted the effort in the Balkans instead — put 94,000 men ashore on the first day and 500,000 by mid-September, with the port of Marseille working from October, which is why the Allied advance across France could be supplied at all. The Germans withdrew from western France in orderly fashion rather than fight, so the campaign\'s real prize was logistical. Much of the infantry was French — many of them North African and West African troops of the French First Army — and their contribution to the liberation of France was played down in French memory for decades.',
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
      'A single-road corridor 100 km deep, seized by parachute and glider troops and raced up by XXX Corps, to outflank the Siegfried Line and end the war in 1944. The plan\'s failure is a case study in optimistic intelligence: the divisions opposite Arnhem were SS panzer units sent there to refit, the weather grounded most of the resupply, the one bridge at Arnhem was at the far end of a 12 km walk, and the intelligence that said the Germans were finished came from aerial photographs of the wrong columns. Some 35,000 airborne troops were dropped, including the Polish 1st Independent Parachute Brigade; of the 10,000 British 1st Airborne, about 2,200 were taken off across the lower Rhine on the night of 25-26 September.',
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
      'The last German strategic offensive in the west, launched with the army\'s last operational reserves against the weakest sector of the Allied front, in weather that grounded aircraft. It achieved complete surprise and opened a salient 80 km deep in eleven days, and failed for the reasons all its predecessors had: no fuel for the armoured spearheads, no air cover once the cloud lifted on 23 December, and American units in the hedgehog defence of Bastogne and St Vith that held long enough to wreck the timetable. The bulge was restored by 25 January, at a cost of some 19,000 American dead; the Wehrmacht\'s western armour was spent, four months before the Rhine.',
    strength: '~410,000 men, ~1,500 tanks and assault guns; US losses ~81,000 casualties, German 60,000-85,000',
  },
  {
    id: 'vistula_odera',
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
      'The offensive was launched some days earlier than planned, after Churchill\'s personal appeal of 6 January that a Soviet blow might relieve pressure in the Ardennes — and in a way that meant the Red Army, not the Western Allies, took Warsaw, Kraków and Berlin. 1st Belorussian Front advanced 500 km in twenty-two days, losing the initiative in February when it halted on the Oder and had to be pushed off the bridgeheads again by a German counter-attack at Stargard. Konev\'s 1st Ukrainian Front took Kraków on 25 January and reached the upper Oder, so Silesia\'s industry and Upper Silesia\'s coal fell into Soviet hands rather than American. On 17 January, the day Warsaw fell, the Soviets handed the city over to Polish communist units.',
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
      'The operation cut Army Group North off by land in East Prussia and Pomerania. Königsberg, a fortress city and the old capital of Prussia, was reduced by four days of assault with the heaviest artillery of the war and Stalin\'s own air armadas; General Lasch surrendered the city on 9 April, against Schörner\'s standing order that no fortress be given up. Over the same weeks a million German civilians fled west across the frozen Vistula lagoon under Soviet air attack, and the evacuating transport Wilhelm Gustloff was torpedoed with a loss of some 9,400 people — the largest loss of life in a single shipwreck in history. East Prussia was divided between the Soviet Union and Poland after the war and its German population expelled; the region is Russian Kaliningrad today.',
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
      'Two Soviet fronts crushed the Seelow Heights position north and south of the Warthe bend and met west of the city on 25 April, the same day American and Soviet soldiers met on the Elbe at Torgau. Zhukov took the centre while Konev thrust from the south-west; the fighting in the city was fought unit by unit, house by house, with sappers and flamethrowers in the tube railway tunnels. Hitler married Eva Braun on 29 April and both were dead by 30 April; the garrison surrendered on 2 May. Soviet losses in the battle were some 80,000 dead, and between 100,000 and 125,000 Berlin civilians were killed, most of them in the last two weeks — followed by weeks of mass rape of the city\'s surviving women.',
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
      'The 3rd Ukrainian Front, with Bulgarian armies on its left, broke the German counter-offensive south of Lake Balaton — the last German strategic attack of the war — and ran into Austria in fourteen days. Vienna fell on 13 April, and Tito\'s partisans arrived before most of the German army had left, which is why Styria and Carinthia were briefly in Yugoslav hands and why the postwar Soviet-zone/Austrian settlement had to be negotiated. Austria was treated as a liberated country rather than a defeated one at Moscow in 1943, a decision that shaped its postwar neutrality.',
    strength: '3rd Ukrainian Front ~370,000 men plus Bulgarian armies; German defenders of the 6th SS Panzer Army, out of fuel',
  },
  {
    id: 'budapest_1944',
    name: 'The siege of Budapest',
    side: 'soviet',
    from: '1944-12-26',
    to: '1945-02-13',
    path: [
      [46.77, 20.15], // Szeged, in the plain south-east of the city
      [47.22, 19.04], // Budapest itself, encircled on 26 December
      [47.48, 18.98], // the Buda heights west of the Danube, the last German-Hungarian position
    ],
    summary:
      'The city was encircled on 26 December and the relief attempts failed: two panzer attacks from the west ran out of fuel and infantry inside three weeks. The Hungarian and German garrison refused to surrender and the siege lasted fifty days of street fighting that destroyed most of what remained of the city and killed some 38,000 civilians. About 25,000 Jews who had been shut into the "international ghettos" of central Budapest were freed when Soviet troops arrived; in the ten weeks before that the Arrow Cross regime had shot some 10,000-15,000 Budapest Jews, many of them on the ice of the Danube bank.',
    strength: '2nd and 3rd Ukrainian Fronts; ~80,000 German and Hungarian defenders, ~76,000 taken prisoner',
  },

  /* ---- 1943-1945: the campaigns that had no line before ---- */
  {
    id: 'iskra_1943',
    name: 'Operation Iskra: a corridor to Leningrad',
    side: 'soviet',
    from: '1943-01-18',
    to: '1943-01-24',
    path: [
      [59.91, 28.97], // Lomonosov-Oranienbaum, the pocket behind German lines
      [59.85, 31.13], // Siniavino, where the two fronts met on 23 January
      [59.95, 31.04], // Shlisselburg-Petrokrepost, on the only railway into the city
    ],
    summary:
      'The first successful relief attempt of the siege: Leningrad\'s and Volkhov\'s fronts attacked 12 km towards each other across the Neva and met west of Siniavino on 23 January, opening a corridor 8-11 km wide. A railway was laid across it in seventeen days and the first train reached the city on 7 February, though people were still dying of hunger at 300 a day and the city was not free until January 1944. Iskra shows what the Red Army had learned: an artillery preparation, a limited objective, and no attempt at the grand encirclement that had failed in 1942.',
    strength: '~320,000 Soviet men; up to 1,700 guns and mortars per kilometre on the breakthrough front',
  },
  {
    id: 'third_kharkov_1943',
    name: 'Manstein\'s counter-stroke: the third battle of Kharkov',
    side: 'german',
    from: '1943-02-20',
    to: '1943-03-15',
    path: [
      [50.6, 36.59], // Belgorod, given up on 8 February and retaken on 15 March
      [49.74, 35.57], // Merefa, cutting the railway north of Kharkov
      [49.99, 36.23], // Kharkov, taken after four days of street fighting
    ],
    summary:
      'The operational masterpiece of the German war, and the reason the front in the east was restored after Stalingrad. Manstein refused Hitler\'s order to stand fast, gave ground deliberately to stretch the Soviet advance — whose tank corps had run out of fuel and infantry — and then struck the exposed flank of the Soviet South-Western Front with two panzer corps. Kharkov was retaken on 15 March and Belgorod on the 16th, leaving the Kursk salient that would be fought over in July. The human cost of the same months went the other way: some 500,000 Soviet casualties in the winter battles, and a German retreat punctuated by the demolition of everything left behind.',
    strength: 'II SS Panzer Corps and XLVIII Panzer Corps, under 200 serviceable tanks between them',
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
      [51.62, 36.63], // Olkhovatka, the ridge that broke 9 July's tank attack
      [51.56, 36.68], // Ponyri station, a railway junction fought over twelve times in two days
    ],
    summary:
      'The Germans attacked to cut the Kursk salient off, on ground they had chosen, weeks later than planned because they waited for new tanks. The Soviets knew the plan — from intelligence and from German radio traffic — and had built eight defensive belts 300 km deep, laid some 400,000 mines and massed 20,000 guns. Model\'s Ninth Army advanced 10 km and was stopped at Olkhovatka and Ponyri by anti-tank fronts and mines, not by air power, which never gained the superiority the plan assumed. Citadel had failed in the north before Prokhorovka was fought.',
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
      [50.84, 36.57], // Tomarovka, broken through on the first day by the engineering groups
      [51.02, 36.74], // Prokhorovka, reached on 12 July and no further
    ],
    summary:
      'Manstein\'s blow on the southern face went further than the north — 35 km in six days — and on 12 July the II SS Panzer Corps met Fifth Guards Tank Army near Prokhorovka in the largest tank engagement of the battle. Soviet losses were far heavier, several hundred tanks to some 80 German, and the SS corps was stopped not by being beaten but by mines, anti-tank guns, air attack and exhaustion. Citadel was called off on 13 July, partly because the Allies had landed in Sicily two days earlier. The strategic initiative in the east never passed back to Germany.',
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
      [49.74, 35.57], // Merefa, the railway junction south-west of Kharkov
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
      'The largest river-crossing operation of the war, on a front 750 km wide, against a river 1-2 km broad with the Germans holding the far bank. Troops crossed at night in boats, barrels and anything that floated, and held bridgeheads of a few hundred metres under counter-attack until the heavy equipment could be ferried over; casualty rates in the crossing companies often ran above fifty per cent. Germany\'s "Eastern Wall" on the west bank was turned at Kremenchug and broken at Zaporizhzhia, and Kiev fell on 6 December. The Ukrainian grain, coal and manganese came back into Soviet hands, which is the economic reason 1943 matters as much as Stalingrad.',
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
      [49.72, 30.27], // Skvyra, its railway junction taken on 27 January
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
      [59.91, 28.97], // Lomonosov-Oranienbaum, whose coastal guns covered the attack
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
      'Germany\'s last strong defensive line in Italy, across the Apennine ridges north of Florence. The Eighth Army attacked on the Adriatic flank because the flat river valleys there suited armour, took the coastal plain and Rimini, and was then stopped on the Marecchia; the US Fifth Army\'s push through the mountains gained 20 km and lost its strength. Kesselring held with fewer divisions than Alexander had, many of them depleted, and the front then sat through the autumn and the winter. This is where the ordinary account of the Italian campaign most needs correcting: the line was not broken in 1944, and the war in Italy lasted eight months longer.',
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
      'The 2nd Ukrainian Front drove out of Transylvania through the Carpathian passes onto the Great Hungarian Plain, taking Debrecen in fourteen days. The armoured corps sent racing ahead for the Theiss bridges at Szolnok were fought to a halt, and the German defence then held on the Theiss through October and November — which is why Budapest was not encircled until 26 December. Regent Horthy tried to make a separate armistice on 11 October; the Germans deposed him and installed the Arrow Cross, and the killing of Budapest\'s Jews accelerated in the weeks that followed.',
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
      'The 3rd Ukrainian Front, with four Bulgarian armies after Bulgaria changed sides in September, drove through Serbia to meet Tito\'s partisans, who had already taken most of the country\'s towns. Belgrade fell on 20 October after four days of street fighting, fought largely by Soviet tanks and Serbian infantry — one of the few Axis capitals taken with the help of a local army that then refused to leave. Army Group E retreated 400 km from Greece through Serbia under air attack and lost its heavy equipment. Tito\'s control of Belgrade, rather than the elections of November 1945, is what decided postwar Yugoslavia.',
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
      'Stavka\'s aim in the Baltic was not Berlin but the isolation of Army Group North, and on 10 October its spearheads reached the Baltic Sea north of Memel, cutting the land link to East Prussia. Three Soviet fronts and two Baltic armies drove 220 km in ten days; a German counter-attack at Memel reopened a corridor only some 50 km wide. Some 200,000 German troops were sealed in the Courland pocket, where they surrendered in May 1945 still holding the Lithuanian coast, and the sea evacuation of around half a million soldiers and civilians from the Baltics became the largest maritime rescue of the war and one of its bloodiest. Estonia, Latvia and Lithuania were occupied a second time, and their prewar governments did not return until 1991.',
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
      'An uprising began in Prague on 5 May, and the Czech National Council asked the Western Allies for help; Patton\'s Third Army was 40 km away and Eisenhower refused to go on, having agreed the line of contact with the Soviets. Three Soviet fronts then cleared Bohemia in five days. Army Group Centre, which had refused to surrender in the west and continued to attack the uprising, was broken up and its remnants captured trying to get to the American lines. Units of the Russian Liberation Army — Vlasov\'s Russians, who had switched sides and helped the Prague insurgents — did reach American lines and were handed back, which meant almost certain death.',
    strength: '1st, 2nd and 4th Ukrainian Fronts ~1.6 million men; Army Group Centre ~900,000, largely demoralised',
  },
];
