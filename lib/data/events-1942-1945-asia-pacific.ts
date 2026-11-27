// Six Asia-Pacific cards, added because six marching lines on this site had no card at all.
// Each is dated and described from a source this atlas can reach and has read: the US Army’s
// official histories and campaign pamphlets and the Marine Corps history, all served at
// HyperWar, together with the diplomatic record. Every quoted fragment in a note is verbatim
// text on the cited page (audit/build_pacific_cards.py checks them, audit/quotes-pacific.json
// carries them), and the figures that vary between publishers — casualty totals, the two
// November dates in Guangxi, the end of the Burma campaign — are in the uncertainties list
// rather than in the card text. Each card is linked to the one march line whose waypoint is
// the place the event happened at.
import type { WW2Event } from './events-1938-1940';

export const EVENTS_PACIFIC_1942_1945: WW2Event[] = [
  {
    id: 'yangon_falls_1942',
    date: '1942-03-08',
    precision: 'day',
    title: 'Rangoon falls and China’s last port closes',
    kind: 'invasion',
    fronts: ['china_burma_india'],
    countries: ['United Kingdom', 'Burma', 'Japan', 'China', 'India'],
    figures: [],
    mapNote:
      'Yangon (Rangoon) is the southern waypoint of the Burma line and the pin for this card sits on it; the line then runs north through Toungoo and Mandalay towards Myitkyina, following the Japanese axes of advance, so it points away from the Allied retreat into India.',
    note:
      'The day and the object of the campaign both come from the US Army’s own campaign pamphlet Burma 1942: “Less than a week after the bombing of Pearl Harbor, Japanese planes took off from captured bases in Thailand and opened the invasion of Burma by bombing the Tavoy airdrome, a forward British outpost on the Andaman Sea south of Rangoon”, and “over 19,000 tons of lend-lease materiel remained in Rangoon when it fell to the Japanese on 8 March”. The same pamphlet gives the supply route the campaign was aimed at — “transferred to railroad cars for the trip to Lashio in northern Burma and finally carried by truck over the 712-mile-long Burma Road to Kunming” — and the plan of advance: “The Japanese planned to surround and annihilate the Allied forces in central Burma near Mandalay by moving three of their divisions north along separate axes of advance”, one “along the Irrawaddy Valley through Prome and Yenangyanug”, another “up the Rangoon-Mandalay Road in the Sittang Valley through Meiktila”. The same day for the port is printed outside the American official-history family — the BBC’s campaign history gives “The city fell on 8 March 1942” — which matters because every other date on these six cards rests on American official history alone. The twelve-day hold at Toungoo, which is the reason a line waypoint sits there, is the pamphlet’s too: “the Chinese 200th Division held at Toungoo for twelve days against repeated Japanese assaults”. Two dates are recorded rather than smoothed over. The same pamphlet gives its own period as 7 December 1941 to 26 May 1942, while this atlas’s marching line runs to 28 May 1942, the date usually given for the end of organised resistance; the difference between the two is recorded in the uncertainties list rather than smoothed over. The spelling of the Japanese objective on the Irrawaddy is the pamphlet’s, Yenangyanug, for the oil fields usually written Yenangyaung. No casualty or strength figures are printed on this card: the pamphlet’s own totals for the campaign are not reconcilable with the figures in circulation for the retreat into India.',
    levels: {
      primary: {
        cause:
          'Japan had taken the Chinese coast, so the road from Rangoon to Kunming was one of the last ways supplies reached China’s government. American aid came ashore at Rangoon and went north by rail and road.',
        what:
          'Japanese bombing opened the invasion a week after Pearl Harbor, and the port of Rangoon fell on 8 March 1942 with more than 19,000 tons of lend-lease still in its depots.',
        consequence:
          'British and Chinese troops retreated north-west towards India instead of holding Burma, and from then on supplies for China had to be flown in over the mountains rather than driven.',
      },
      secondary: {
        cause:
          'American lend-lease for China was shipped to Rangoon, put on the railway to Lashio in northern Burma, and trucked the 712-mile Burma Road to Kunming. Cutting that road, not taking the capital, was the object of the invasion. Three Japanese divisions were to advance north on separate axes: up the Irrawaddy valley through Prome and Yenangyaung, up the Rangoon–Mandalay road through Meiktila, and east to Taunggyi and then north towards Lashio, so as to surround the Allied armies in central Burma near Mandalay.',
        what:
          'Japanese aircraft opened the campaign by bombing the Tavoy airdrome south of Rangoon, and the Chinese 200th Division held Toungoo for twelve days before it was withdrawn, exposing Burma Corps at Prome. Rangoon was burned and abandoned, and over 19,000 tons of American supplies were left in it. With Lashio in Japanese hands the defence of the country became untenable and the evacuation was ordered; the retreat ran north-west into India and north into Yunnan.',
        consequence:
          'Burma’s loss cut the last overland route to China, as the US Army’s China Defensive pamphlet records, and everything the Chinese government received after May 1942 had to be flown from India over the eastern Himalaya. Japan’s southern perimeter reached its westernmost land frontier, joining the armies that had taken Malaya to those in China. The country Japan now held was also the ground the 1944 offensive on Imphal would have to be fought from, and the ground the 1944–45 counteroffensive had to win back.',
      },
      university: {
        cause:
          'The campaign is legible only as a subsidiary of China’s war. Japan had closed the Chinese coast and the rail route from Haiphong, so what remained to Chiang Kai-shek’s government was one gravel highway from Lashio to Kunming, and the port that fed it. Anglo-American staff work agreed that China should be kept in the war and disagreed about what that was worth in shipping and divisions; the compromise was a British theatre responsibility for Burma with an American commander of the Chinese land forces inside it, which produced a command structure with three masters on the day the invasion began. The Chinese government treated its best divisions as the currency of its alliance, and committed them to Burma piecemeal.',
        what:
          'The invasion ran on two scales at once. Operationally it was a race up the Irrawaddy and the Sittang, with the Japanese aim, stated in their plan as the American official history records it, being to surround and annihilate the Allied field armies near Mandalay and to close the Lashio road before reinforcements from Yunnan arrived. Tactically it was a movement contest on bad roads in the heat, decided by air superiority, by the Japanese use of bicycle and river transport, and by a willingness to bypass rather than invest. Rangoon was destroyed and abandoned before it was invested; Toungoo bought twelve days; and the Allied armies, defeated in detail, retreated in two directions at once as the monsoon approached.',
        consequence:
          'Two consequences outlast the campaign. The first is logistical and it governs the rest of this theatre: after May 1942 the supply of China was an air operation, and tonnage over the Himalaya set the ceiling on every proposal for a return to Burma, which is why China-Burma-India was perpetually the second front of the second front in Allied argument. The second is political. The speed of the collapse made the prestige of British protection in Asia a matter of argument rather than assumption, at the moment when Indian politics and Burmese nationalism were both moving. For this atlas the campaign also carries an unusual cartographic admission: the marching line points north with the invader, because the Allied retreat ran away from the campaign’s own places, into India and Yunnan, where no line is drawn.',
      },
    },
  },
  {
    id: 'corregidor_falls_1942',
    date: '1942-05-06',
    precision: 'day',
    title: 'Corregidor capitulates; the Philippines campaign ends',
    kind: 'battle',
    fronts: ['pacific'],
    countries: ['United States', 'Philippines', 'Japan'],
    figures: [],
    mapNote:
      'Corregidor is the last waypoint of the Philippines line, at the mouth of Manila Bay, and the pin for this card sits on it; the line runs from Lingayen Gulf through Tarlac and Manila and down the Bataan peninsula to this point, with the Japanese 14th Army.',
    note:
      'The decision this card is dated by is in the US Army’s official history of the campaign, Louis Morton’s The Fall of the Philippines, chapter XXXI: “On the basis of this estimate of the situation, General Wainwright at 1000 decided to surrender, to sacrifice one day of freedom in exchange for several thousand lives.” The same chapter puts him in the company of the man he had relieved: “like General King, who had surrendered Bataan four weeks earlier, Wainwright had made his estimate and concluded there was nothing to be gained by further resistance.” Morton’s footnote to the decision is Wainwright’s own radio to the President of 6 May 1942, which is the reason this card takes 6 May. The end of organised resistance is a separate date: the campaign pamphlet records that “On 8 May he sent a message to General Sharp, commander of the Visayan-Mindanao Force, ordering him to surrender”, and this atlas’s marching line is dated to 8 May for that reason. Strength figures are given as the official history gives them and no further: Morton prints “the 78,000 men on Bataan” for King’s command, and the campaign pamphlet prints “Plan O RANGE assumed the 80,000 troops and 26,000 civilians in Bataan would resist for at least six months”, which is a prewar planning assumption and not a surrender total, and is often misprinted as one. The MacArthur question is in the sources rather than in the card’s text: the official history states that “The steady deterioration of the American position forced President Roosevelt to order MacArthur to move to Australia” and that “On 12 March the commander and his USAFFE staff departed Corregidor by submarine”, and the HyperWar transcription of that page carries an editor’s note correcting the manner of departure to a PT boat to Mindanao and then a B-17 to Australia. Total American and Filipino casualties of the campaign, and the numbers who died in captivity, are not printed on this card; the figures in circulation differ too widely between publishers to be asserted here.',
    levels: {
      primary: {
        cause:
          'The American garrison in the Philippines was ordered to hold the fortress positions at Bataan and Corregidor until help arrived, and the help that was promised never came in the numbers the plan assumed.',
        what:
          'Bataan had capitulated four weeks earlier, leaving the island fortress of Corregidor to shellfire and assault. On 6 May 1942 General Wainwright decided to surrender rather than lose more men, and the last American forces in the islands stood down on 8 May.',
        consequence:
          'Organised resistance in the Philippines ended, and the garrison began more than three years of captivity. Japan held the islands until 1945, and retaking them became the object of the central-Pacific advance.',
      },
      secondary: {
        cause:
          'War planning had assumed that Bataan could be held for months: the US Army’s campaign pamphlet states that Plan Orange expected the 80,000 troops and 26,000 civilians on the peninsula to resist for six months. Most of the American air force in the islands was destroyed on the ground in the first days of the war, reinforcements arrived as regiments rather than divisions, and the garrison’s food was rationed from the start. MacArthur, ordered out in March, reached Australia, leaving Wainwright in command of a position with no relief in view.',
        what:
          'The Japanese 14th Army came ashore at Lingayen Gulf on 22 December 1941 and drove across northern Luzon to Manila; the retreat to Bataan followed, and the peninsula was reduced in April. Corregidor was then shelled from the heights of Bataan and attacked by air and sea, and on the night of 5 May the reinforced Japanese 61st Infantry, with tanks, came ashore on the island. Wainwright’s estimate was that further resistance would buy nothing, and at 1000 on 6 May he decided to surrender, “to sacrifice one day of freedom in exchange for several thousand lives”.',
        consequence:
          'The capitulation of the garrison of Manila Bay ended the first phase of the war in the Pacific and left Japan the western Pacific for the better part of three years. It cost the United States its forward garrison and an irreplaceable margin of trained gunners and airmen, and it produced a symbol: the campaign pamphlet itself says the image of the self-proclaimed “Battling Bastards of Bataan” inspired Allied troops to honour such sacrifices by vowing to retake the islands, which mattered to the war effort’s morale more than the delay the defence bought.',
      },
      university: {
        cause:
          'The campaign turns on a collision between strategy and logistics that was visible in 1939 and never resolved. United States planning assumed the Philippines could be held to the last, and that a relief fleet would come; the fleet could not come through a war begun elsewhere, and the garrison was therefore a force whose role in practice was to delay. The official history is blunt that the six-month assumption of Plan Orange belonged to a war nobody had prepared the shipping to fight. What the garrison had instead was coast artillery organised for a naval defence of the bay, deployed as field artillery on the peninsula, and ammunition and food counted out in advance.',
        what:
          'Morton’s account gives the campaign as three operations run together: the amphibious landings and the race across northern Luzon, the reduction of Bataan, and the siege of Corregidor. The first ended in the abandonment of Manila as an open city; the second in the capitulation of 9 April, four weeks before the third, with King’s command of 78,000 men, in Morton’s figure; the third in the assault of 5–6 May, in which a landing by the reinforced 61st Infantry, gunfire from the Bataan heights and air attack were brought together against a fortified island position in the Pacific. Wainwright’s decision at 1000 on 6 May, and his message to Sharp on 8 May ending resistance in the Visayas and Mindanao, closed the campaign as a series of surrenders rather than one act.',
        consequence:
          'The historiographical argument is about command and about who is entitled to surrender. MacArthur’s departure in March, Wainwright’s inheritance of an untenable position and his capture with it, and the President’s instruction that the garrison was “to fight as long as there remains any possibility of resistance” together produced a controversy about capitulation that runs through the official literature and the memoirs. Operationally the campaign had two effects: it committed Japanese shipping and air strength to an operation of a size the southern plan had not provided for, and it settled, in American minds, that the war in the Pacific would be a war of reconquest, which is why the line from Corregidor to Lingayen Gulf in 1945 is one of the few lines on this site that runs back over ground the other direction.',
      },
    },
  },
  {
    id: 'gilberts_invaded_1943',
    date: '1943-11-20',
    precision: 'day',
    title: 'Makin and Tarawa: the central Pacific offensive opens',
    kind: 'invasion',
    fronts: ['pacific'],
    countries: ['United States', 'Japan'],
    figures: [],
    mapNote:
      'Makin, at the north of the Gilberts, is the first waypoint of the central-Pacific line and the pin for this card sits on it; the line steps south to Tarawa and then north-west to Kwajalein and Enewetak, showing the islands the advance jumped to rather than the daily landings.',
    note:
      'The decision and the target list are in the US Army’s official history of the operation, Seizure of the Gilberts and Marshalls: “Spruance was ordered to seize Makin, Tarawa, and Apamama, to cover the amphibious landings on each of these targets with air and naval surface forces, and to deny to the enemy use of land bases in the Marshalls and on Nauru during the operation.” The assignment of the Marine objective is in the same chapter: the 2d Marine Division’s commanding general “had been alerted by Admiral Spruance early in August to the fact that the capture of Tarawa and Apamama (Abemama) Atolls would be assigned to his forces”. The army objective, Makin, is the chapter on the landings: “On 20 November sunrise at Makin came at 0612”, and the same chapter prints Admiral Turner’s judgement on the preliminary bombardment, that “the effect of naval and air bombardment was highly satisfactory; and contributed materially in the reduction of hostile resistance”, followed immediately by “However … there was not enough of it.” The Japanese side of the atolls is in the volume’s chapter on defences: “Early in 1942 Makin was made a seaplane base and, after Carlson’s raid, the Gilberts with Nauru and Ocean were strongly garrisoned by forces under 6th Base Force command.” Carlson’s raid of August 1942 on Makin is why the garrison was there, and it is the reason this atlas’s line begins at an atoll most readers have never heard of rather than at Tarawa. No casualty figures are printed on this card: the American and Japanese totals for Betio and Butaritari vary between the official history, the Marine Corps history and the accounts in general circulation, and are left to the uncertainties list.',
    levels: {
      primary: {
        cause:
          'Japan had fortified atolls in the central Pacific, holding outlying airfields that covered the approaches to its inner defensive ring. The United States decided to take the ring apart from the middle, one atoll at a time, instead of clearing every island.',
        what:
          'On 20 November 1943 American forces landed in the Gilbert Islands, at Makin and at Tarawa. Makin was taken by an army division; Tarawa, held by a strong garrison, was the first assault against a prepared Japanese island defence of the war.',
        consequence:
          'The Gilberts gave the advance its first captured airfields, and the lessons of the assault — gunfire, amphibian tractors, and how much preparation an atoll needs — were applied two months later at Kwajalein.',
      },
      secondary: {
        cause:
          'Two offensives up the Pacific had been agreed at Washington in May 1943, one under MacArthur along the New Guinea coast towards Rabaul and one across the central Pacific under Nimitz, and the central advance needed a start that would not be interdicted from the mandated islands. The atolls of the Gilberts held seaplane bases and airfields garrisoned since 1942, and they lay to seaward of the Japanese inner ring. Skipping them was not possible once the advance moved by sea and air, so the target list named Makin, Tarawa and Apamama.',
        what:
          'V Amphibious Corps, under Holland Smith, put the 27th Division in at Makin and the 2d Marine Division at Tarawa and Apamama on the same day, 20 November 1943, with carrier air and a naval bombardment beforehand. At Makin the army landings went forward on the western beaches of Butaritari against a garrison already reinforced since Carlson’s raid of 1942. Tarawa was a different business: a small atoll, densely fortified, with a reef that stalled the first waves, and the corps had to fight for every part of a very small place.',
        consequence:
          'The operation took the first fortified atolls of the inner approach and, more importantly, it produced the correction. The judgement recorded after Makin, that the bombardment was highly satisfactory and that there had not been enough of it, was taken literally in the Marshalls two months later, where preparatory fire and amphibian armour were applied on a very different scale. The campaign also fixed the pattern the rest of the advance followed: bypass the strong atolls, take the ones that yield airfields, and let the garrisons wither.',
      },
      university: {
        cause:
          'The Gilberts operation is the point at which American amphibious doctrine stopped being a theory and became an industrial procedure with documented lessons. Planning for the atolls had to solve problems no manual contained: coral reefs as surf barriers, tidal tables as an operational constraint, lagoon-side landings, and the question of how many rounds a fortified islet consumes. The atolls next in line, the Marshalls, also carried a legal afterlife: they were former German possessions mandated to Japan under Article 22 of the League Covenant, which bound Japan to prevent the establishment of fortifications there, and the official history notes that the fortification was unilateral and did not relieve her of the obligation — a fact that mattered to the postwar argument about who should hold the islands.',
        what:
          'Bradbury’s official history separates the two assaults deliberately, and the separation is worth keeping. Makin, at Butaritari, was an army division landing against a reinforced garrison on a wide atoll, and it provides the volume’s most useful material on the effect of preliminary bombardment, including Admiral Turner’s finding that the fire was highly satisfactory and contributed materially to the reduction of hostile resistance, and his immediate qualification that there had not been enough of it. Tarawa was the 2d Marine Division against a compact defence-in-depth with armour dug in on the islet, fought at close range for four days. Apamama was occupied by a reconnaissance party. The three together are a controlled experiment in what preparation does and does not buy.',
        consequence:
          'The operational consequence is well known and here it can be stated as a change in procedure rather than morale: the study of coral, surf and tide, the allocation of amphibian tractors to the assault echelons, the increase in preparatory gunfire and the use of observed fire from the air, all of which are visible in the Marshalls plan of January 1944. The strategic consequence is that the central-Pacific drive acquired the credibility it needed with the joint staff at exactly the moment the New Guinea advance was approaching Rabaul, so that from November 1943 the two-pronged offensive described in the official history was running together, which is the condition for the Philippine and Marianas operations of 1944.',
      },
    },
  },
  {
    id: 'guangxi_airfields_fall_1944',
    date: '1944-11-10',
    precision: 'day',
    title: 'Ichi-Go takes the Guangxi airfields',
    kind: 'battle',
    fronts: ['china_burma_india'],
    countries: ['China', 'Japan', 'United States'],
    figures: [],
    mapNote:
      'Guilin, written Kweilin in the source used here, is the second-to-last waypoint of the Ichi-Go line and the pin for this card sits on it; the line runs south from Zhengzhou and Luohe through Hengyang to Guilin and Liuzhou, and it does not mark the day each city fell.',
    note:
      'The date is the US Army’s campaign pamphlet China Defensive: “The I CHIGO offensive captured both Kweilin and Liuchow, a Fourteenth Air Force base, on 10 November, and two weeks later Japanese forces captured Nan-ning in the extreme south, linking up with Japanese Southern Army units advancing north from French Indochina shortly thereafter.” The pamphlet gives Liuzhou the same day as Guilin, 10 November; other accounts put Liuzhou a day later, and the difference is in the uncertainties list, since this atlas dates the card by the pamphlet. The scale and the launch are in the same text: “Fifteen divisions would participate in Operation I CHIGO”, and “Launched on 19 April 1944, Operation I CHIGO eliminated Chinese resistance in Honan Province in central China by late April.” The railway aims are the pamphlet’s too: “Key goals were securing the entire north-south Peiping-Huangshi rail line, as well as the Wuchang-Liuchow rail line in central China.” Why this corner of Guangxi mattered to the American air war is on the same page: “Roosevelt … endorsed Chennault’s optimistic plan, allocating him at least 4,700 tons per month of airlifted supplies for the Fourteenth Air Force, beginning in July 1943”, and the pamphlet notes that the B-29 campaign and Fourteenth Air Force operations consumed most of the airlifted supplies in the first half of 1944. Chinese strength and casualty figures for the offensive are not printed on this card.',
    levels: {
      primary: {
        cause:
          'American heavy bombers were flying from airfields in south China to raid Japanese shipping and the home islands, and Japan decided to close them by land. The offensive that did it came through three provinces in the space of a year.',
        what:
          'Operation Ichi-Go, launched on 19 April 1944, ran south through Henan, Hunan and Guangxi. On 10 November 1944 Japanese forces took Guilin and Liuzhou, one of them a Fourteenth Air Force base, and two weeks later reached Nanning from the north.',
        consequence:
          'The airfields in Guangxi were lost, and the American air effort had to be re-based; the offensive also joined the Japanese armies in China to those in Indochina by rail, the largest single land operation Japan mounted in the war.',
      },
      secondary: {
        cause:
          'By 1944 the airfields in Zhejiang, Jiangxi and Guangxi were within range of the shipping lanes and the home islands, and Japanese planners had argued since 1942 for a land solution: take the airfields, wreck them, and open the continental railway from Peking to Singapore through China. The offensive that resulted was to be the largest Japan mounted, with fifteen divisions. It was also a gamble against the American air power it could not suppress, which is why the plan aimed at railways and airfields rather than at cities.',
        what:
          'Launched on 19 April, the offensive eliminated Chinese resistance in Henan by the end of that month; the summer fighting reached Hengyang, the railway junction guarding the road into Guangxi, and the Fourteenth Air Force unit based there had to move. In the autumn it drove on Guilin and Liuzhou, taken on 10 November 1944 in the account used here, with Nanning two weeks later and the link-up with the armies advancing north from French Indochina shortly after. The Guilin area that fell had also held an American and Chinese infantry training centre.',
        consequence:
          'Militarily the operation did what it was designed to do to the airfields and the railways and did not do to the bombers, which continued to operate from farther west, and the B-29 force moved bases rather than being destroyed. Politically the offensive did more damage to the Nationalist government than to Japan: the loss of province after province in front of American observers discredited the argument that China could be kept in the war on American air power alone, and it sharpened the argument inside the American command about arming the Communists’ forces behind Japanese lines.',
      },
      university: {
        cause:
          'Ichi-Go is the moment the China war stops being a sideshow in the American account of the Pacific war and becomes a problem of competing theories of air power. Chennault’s plan, which Roosevelt endorsed in 1943, held that air power alone could keep China in the war and make a Chinese land offensive unnecessary, at a tonnage the airlift over the Himalaya could carry. The Japanese argument for a land offensive was the mirror image: if the airfields could be taken by ground action, the air effort would have to be re-based out of range and the theory would fail on its own terms. Both positions were being argued by the same men in the same year the offensive began, which is why the American records for 1944 are so dense with disagreement about Chinese divisions, tonnage and targets.',
        what:
          'The operation was Japanese in conception, and the scale is the pamphlet’s own: fifteen divisions, launched 19 April 1944, Honan cleared by the end of that month, then the fighting for the railway line into Hunan and Guangxi through the summer and autumn, and Guilin and Liuzhou taken on 10 November with Nanning two weeks later and the link-up with the Southern Army in Indochina shortly after. Chinese resistance collapsed fastest in the north, where the province’s garrison had been bled and politicised for years, and hardest at Hengyang, where a defence of weeks delayed the timetable into the monsoon and beyond. The American records for the same months are a contest over Y-Force and Z-Force, the American-equipped Chinese formations, and over whether supplies already in China should be moved to the airfields or to the army.',
        consequence:
          'Historians of the theatre generally treat Ichi-Go as a tactical success that arrived too late to change the air war and early enough to change the politics of the alliance. The airfields were denied for a time, and the air effort re-based; the continental rail route was opened but never used at the scale the plan required, and the Japanese armies in the south were beyond effective supply by 1945. What the offensive did settle was the estimate of the Nationalist army in American eyes, and with it the postwar prospects of the two Chinese governments: the year that began with Chongqing defending an air-power theory ended with the Nationalists holding less of central China, and with American officers arguing in writing about arming forces in the Communist base areas.',
      },
    },
  },
  {
    id: 'iwo_jima_landed_1945',
    date: '1945-02-19',
    precision: 'day',
    title: 'The landings on Iwo Jima',
    kind: 'invasion',
    fronts: ['pacific'],
    countries: ['United States', 'Japan'],
    figures: [],
    mapNote:
      'Iwo Jima is the middle waypoint of the line that steps north from Saipan to Okinawa, and the pin for this card sits on it; Saipan is shown on the line as the base the advance jumped from, not as a battle on this line.',
    note:
      'The date and the force are in the Marine Corps history of the operation, Iwo Jima: Amphibious Epic: “During the early morning hours of 19 February 1945, the assault shipping of Admiral Hill’s Attack Force, carrying the 4th and 5th Marine Divisions, arrived off Iwo Jima and combined its huge convoy with Admiral Blandy’s Amphibious Support Force, already lying close off the island’s shores.” The purpose, as the same history states it in the planning chapter, was the bomber escort: “Fighter strips would then be required from which long-range fighters could escort the big bombers in their sorties northward from the Marianas to Japan.” The volume also dates the B-29 campaign against that background — “But by D-Day, 19 February 1945, 17 B-29 attacks against Japan from Marianas bases had been a reality for nearly three months” — which is why the island was worth the cost before any fighter had landed on it. The Japanese scheme is in the chapter on the fighting after D-Day: “General Kuribayashi had foreseen that the American landing force would almost certainly split Iwo early in the operation and had designed his defenses accordingly.” Casualty totals are deliberately not printed on this card. The Marine Corps volume’s own recapitulation gives the casualties it records for evacuation, “a total of 13,737 casualties from Iwo Jima”, a figure of a different kind from the killed-and-wounded totals in general circulation, and the two are not reconcilable without a study of the definitions; they are left in the uncertainties list.',
    levels: {
      primary: {
        cause:
          'Bombers based in the Marianas were raiding Japan without fighter escort, and Iwo Jima was the island where escort fighters could land. It also gave damaged bombers a place to come down short of home.',
        what:
          'On 19 February 1945 two Marine divisions landed on the southern beaches of Iwo Jima after a long bombardment. The island’s defenders had dug into the ground instead of defending the shore, and the fighting went on for five weeks.',
        consequence:
          'The airfields were taken and used by both sides — escort fighters for the raids on Japan, and emergency landings for bombers that could not get home — at a cost that made the island’s name a byword for attritional fighting.',
      },
      secondary: {
        cause:
          'The logic of the advance made Iwo Jima the next object once the Marianas were held: it lay between the B-29 bases and Japan, its airfields would put fighters within range of the raids, and its garrison was in the way of the traffic to Okinawa. D-Day for the island was postponed twice as the priority of other operations moved, and the bombardment allotted to it was longer than any previous operation of the kind, in part because the island’s defenders were known to be dug in rather than massed on the beaches.',
        what:
          'The 4th and 5th Marine Divisions landed abreast on the southern beaches on 19 February 1945, each with two reinforced regiments in the assault, against fire that had been largely held. The advance north was slow, and the volcano at the south end of the island, Suribachi, was isolated rather than stormed. The Japanese commander had expected the landing force to split the island early and had built his defence to fight behind and above that line, in tunnels and caves, so that the fighting on the ground outlasted the landings by weeks.',
        consequence:
          'Iwo Jima supplied what the planners had said it would: fighter escort for the raids on Japan and an airfield for crippled B-29s. The cost and the flag-raising photographs gave the fighting a place in public memory out of all proportion to the island’s size, and out of it grew a claim that the same history makes in its recapitulation: that with command of the surrounding seas and skies the assault forces could take any objective, however strongly gunned or however stubborn the defenders.',
      },
      university: {
        cause:
          'Iwo Jima is where two arguments about how the Pacific war would end met. The air staffs wanted the island for escort and emergency landing, and for the evidence a costed assault would give the question of the home islands. The official history records both the expectation and the hesitancy in plain terms: with three divisions committed into a fortified area of less than eight square miles, high casualties were expected, and D-Day had been twice postponed before 19 February was fixed. On the Japanese side the change from beach defence to defence in depth, of which Kuribayashi’s scheme is the classic case, was itself the fruit of Tarawa, Saipan and Peleliu: the object became attrition and delay rather than denial of the shore.',
        what:
          'Bartley’s account for the Marine Corps treats the operation as the culmination of a learning process in combined amphibious fire, and its chapters are organised by the days after landing rather than by regiments, which is the right shape for a battle in which the first two days were largely a matter of organisation on the beach. The landings met unexpectedly light fire at first because the Japanese plan withheld it; the advance north up the volcanic terraces and then across the narrow necks of the island was fought by small parties against caves and tunnel entrances, with armour, flamethrowers and demolition used at the scale of engineering rather than manoeuvre. Mount Suribachi was cut off on the first day and reduced over the following days.',
        consequence:
          'Three things follow from the operation in the longer account. The first is the operational fact: escort and emergency landing facilities for the bombing campaign against Japan, which the army air forces’ records quantify in aircraft and crews saved. The second is doctrinal: Iwo Jima and Okinawa together set the estimates on which the projected landings on the home islands were costed, and through those estimates they enter the argument about the end of the war by way of the casualty figures that argument turns on. The third is the difficulty of the numbers themselves — the same official history prints a casualty total for evacuation that does not match the killed and wounded totals in circulation, which is a warning against the round figures the battle is usually remembered by.',
      },
    },
  },
  {
    id: 'okinawa_invaded_1945',
    date: '1945-04-01',
    precision: 'day',
    title: 'Okinawa invaded, the last step before home',
    kind: 'invasion',
    fronts: ['pacific'],
    countries: ['United States', 'Japan'],
    figures: [],
    mapNote:
      'The two northern waypoints of the line are Okinawa itself, and the pin for this card sits on the more northerly of them, near the Hagushi beaches where the assault came ashore; the fighting moved south to Shuri and did not return north.',
    note:
      'The scene and the date are the opening sentence of the US Army’s official history, Okinawa: The Last Battle: “Dawn of Easter Sunday, 1 April 1945, disclosed an American fleet of 1,300 ships in the waters adjacent to Okinawa, poised for invasion.” The same chapter records what had already happened before the landing: “The Kerama Islands had been seized; Okinawa had been heavily bombarded for days; and underwater demolition teams had reconnoitered both the Hagushi beaches and the beaches above Minatoga on the southeast coast, indicating that landings were to be expected at either place or both.” It also records the expectation the assault confronted, “the generally held expectations of an all-out defense of the beaches on the first Japanese “home” island to be invaded was one to appall even the dullest imagination”, and the first suicide loss to the shipping two days later: “The Henrico, an assault transport carrying troops and the regimental staff of the 305th Infantry, 77th Division, was crashed by a suicide plane south of the Keramas at 1900 on 2 April.” The Japanese force strength, the American casualty totals, the number of aircraft destroyed in the ten-gō attacks and the civilian dead of the battle are not printed on this card; they are the most contested figures of the Pacific war in any edition, and they belong to the uncertainties list rather than to a card whose purpose is the landing and its place in the advance.',
    levels: {
      primary: {
        cause:
          'Before Japan could be attacked, the advance needed an anchorage and airfields close enough to cover the approach, and Okinawa was the last large island in the chain. It also sat on the sea route between Japan and China.',
        what:
          'On 1 April 1945 an American fleet of 1,300 ships appeared off Okinawa and the assault came ashore at the Hagushi beaches in the west of the island after weeks of bombardment and the capture of the Kerama Islands as an anchorage.',
        consequence:
          'The beachhead was won in days, but the island’s defence was held in the south, and the fighting and the air attacks on the shipping behind it lasted into June, at a cost that shaped every plan for attacking Japan itself.',
      },
      secondary: {
        cause:
          'Okinawa had been the object of two competing plans for months: a bypass-and-bombardment scheme, and a full invasion to provide a staging area and airfields for the closing of the air war and for the landings on the home islands. The decision went the second way, and the operation was mounted from the same bases and the same fleet that had taken Iwo Jima three weeks before, with the Kerama Retto west of the island taken first as an advance base for mine warfare and for seaplane and repair traffic.',
        what:
          'The landings on the Hagushi beaches on 1 April met almost no opposition on the shore, because the Japanese defence had been deliberately withdrawn inland. American forces took the airfields at Yontan and Kadena at once and drove across the narrow neck of the island, then turned south against the Shuri line, where the defence had been built in depth in ridges, caves and reverse slopes. Off the island the Japanese answer was air attack, suicide and conventional, on the shipping that had to stay on station, which is where the campaign’s cost was concentrated.',
        consequence:
          'Okinawa gave the Allies the airfields and the anchorage they had planned for, and cost the fleet its heaviest air-attack losses of the war, which is what enters the argument about the end of the war: the estimates for the home islands were built partly from what Okinawa showed about defenders fighting from the ground and about aircraft flown by men who did not intend to return. The island’s civilian population suffered catastrophically, and its postwar fate — under American administration until 1972 — is a consequence of these ten weeks.',
      },
      university: {
        cause:
          'The operation is best read as the first battle of the planned invasion of Japan rather than as the last of the island campaigns. Two theories of how to neutralise Okinawa were in contention, and the choice for a full invasion was driven by the air staffs’ need for bases within range of Kyushu and the Japanese shipping lanes, and by the navy’s insistence on destroying the air strength that would contest the landing. On the Japanese side the change of plan, from beach defence to a defence in depth designed to inflict maximum attrition on shipping and landing forces alike, is the same change visible at Iwo Jima, and it was made on the assumption that the battle would be scored in aircraft and ships rather than in territory.',
        what:
          'Appleman and his fellow authors organise the campaign around the fact that the landing succeeded so easily and the campaign did not: the Keramas were seized, the bombardment ran for days, the demolition teams read both the Hagushi beaches and the Minatoga beaches, and the assault came ashore on Easter Sunday against minimal opposition, taking the airfields intact. The operational problem then became the southern line, attacked frontally through April and May against a prepared position, and the naval problem became the air attacks from Kyushu and Formosa, in which suicide and conventional attack were combined against the radar pickets and the anchorage. That the fleet stayed on station through the spring is the fact the campaign’s cost is measured by.',
        consequence:
          'The campaign’s historical weight comes from what it made unnecessary and from what it made credible. It denied Japan the airfields and the sea seat it needed to contest the approach to the home islands, and it demonstrated, in the losses to air attack and in the tenacity of a defence-in-depth on ground the defenders had chosen, the estimates the projected landings would have to be costed against. Those estimates, more than any single battle’s casualties, are what historians argue about when they ask whether the summer of 1945 was already decided. The Okinawan civilian death toll, in a battle fought on an island whose people were Japanese citizens without the franchise, is the least documented and most bitterly remembered figure of the campaign.',
      },
    },
  },
  {
    id: 'coral_sea_carriers_1942',
    date: '1942-05-08',
    precision: 'day',
    title: 'The carriers that turned the Coral Sea back',
    kind: 'battle',
    fronts: ['pacific'],
    countries: ['Australia', 'Japan', 'United States'],
    note: 'The independent account for the theatre dates the fighting 3-8 May, while the encyclopaedia and the combat narrative give 4 to 8 May: the difference is whether the occupation of the island landing and the air attack that answered it belong to the battle. The encyclopaedia’s verdict is a tactical victory for the Japanese and a strategic victory for the Allies, and the independent account records that both sides over-reported their successes.',
    mapNote: 'The pin sits in the Coral Sea, east of the barrier reefs of New Guinea.',
    levels: {
      primary: {
        cause: 'Japan meant to invade and occupy Port Moresby and Tulagi, and the American carriers in the Coral Sea went to meet that move.',
        what: 'Carrier aircraft struck the ships supporting the Tulagi landings and the opposing carrier force: an American fleet carrier was sunk, and a Japanese fleet carrier was badly damaged.',
        consequence: 'The invasion was called off, and a major Japanese advance was turned back for the first time in the war.',
      },
      secondary: {
        cause: 'The independent account for the theatre has the Japanese Naval General Staff deciding to continue with Operation MO, the invasion of Port Moresby. The encyclopaedia gives the purpose as strengthening their defensive position in the South Pacific, by taking Port Moresby and Tulagi. The combat narrative for the theatre records what the Allied commanders expected to come out of Rabaul: a sea-borne invasion of Port Moresby, the Lower Solomons, or both.',
        what: 'The landings at Tulagi began on 3 May; the climax came on 8 May, the day the combat narrative for the theatre records an exchange of blows between the air attack groups of both sides. The encyclopaedia’s verdict on the fighting is a tactical victory for the Japanese.',
        consequence: 'The invasion was called off: the encyclopaedia has the invasion fleet recalled for want of carrier air cover, and the independent account has the admiral postpone the invasion and order the fleet back. The same account records that both sides over-reported their successes.',
      },
      university: {
        cause: 'The independent account for the theatre has the Naval General Staff getting their way at first, with plans for an attack on Port Moresby, and the American raid on Tokyo tipping the argument the other way, so that the main attack of the Japanese summer became the thrust east that ended at Midway. The American carriers were already in the same sea, the combat narrative for the theatre having them reach a point about 100 miles south-west of Guadalcanal on 4 May.',
        what: 'The American carriers struck first at Tulagi, where a surprise attack from the air sank or damaged several supporting warships, the encyclopaedia records. The strikes that followed failed to locate any of the Japanese naval forces, which lay just beyond scouting range. The combat narrative for the theatre heads the fighting May 4th to May 8th; the encyclopaedia dates it from 4 to 8 May, and calls it the first naval action in which the opposing fleets neither sighted nor fired upon one another.',
        consequence: 'The battle left one American fleet carrier sunk, and a Japanese carrier set on fire but still able to recover aircraft, her aircraft moving to the fleet carrier alongside her. The invasion fleet turned back. The encyclopaedia has the damage to the one carrier and the air losses of the other keep both of them out of the battle at Midway the following month.',
      },
    },
  },
  {
    id: 'java_sea_sortie_1942',
    date: '1942-02-27',
    precision: 'day',
    title: 'The last sortie of the Allied fleet in Eastern waters',
    kind: 'battle',
    fronts: ['pacific'],
    countries: ['Australia', 'Japan', 'Netherlands', 'United Kingdom', 'United States'],
    note: 'The campaign history for the theatre heads the battle 23 to 27 February, while the encyclopaedia’s account turns on the daylight fighting of 27 February; the campaign history gives three destroyers lost with the two cruisers and hedges what the enemy paid, the encyclopaedia puts the flag officer’s death with the sinking of his own ship and gives a smaller loss list still for the escort.',
    mapNote: 'The pin is in the Java Sea, between Borneo and the north coast of Java.',
    levels: {
      primary: {
        cause: 'A convoy of the Japanese eastern invasion force was coming in from the northeast, and the Allied fleet that put to sea sailed to intercept it.',
        what: 'The two forces fought in the Java Sea, and the Allied fleet was defeated: it was never able to close the convoy it had gone out for.',
        consequence: 'The Allied fleet lost two cruisers, De Ruyter and Java, and its attempt on the convoy failed.',
      },
      secondary: {
        cause: 'The encyclopaedia puts the force that sailed at two heavy cruisers, three light cruisers and nine destroyers under a rear admiral of the Royal Netherlands Navy; the campaign history for the theatre records that it was composed of ships of four nations which had had little opportunity of joint training, that there were no common flag signals or signal books available, and that its destroyers had not had opportunity to take on fuel the afternoon before; the encyclopaedia records the language barrier between the Dutch-speaking flag officer and his English-speaking ships.',
        what: 'The force sailed to intercept a convoy and met its escort on 27 February in the Java Sea; the sortie failed, and two cruisers were lost, one of them with the flag officer.',
        consequence: 'The campaign history for the theatre records that the Japanese succeeded in preventing the striking force from reaching their convoys, and hedges the price they paid at two or three cruisers and at least two or three destroyers; the encyclopaedia records the Japanese occupation of the whole of the Dutch East Indies.',
      },
      university: {
        cause: 'The force that sailed was, in the encyclopaedia’s account, a Combined Striking Force of two heavy cruisers, three light cruisers and nine destroyers led by a rear admiral of the Royal Netherlands Navy. The campaign history for the theatre records that it was composed of ships of four nations which had had little opportunity of joint training or of working out common tactical doctrines, that there were no common flag signals or signal books available, nor tactical plans of more than the most rudimentary nature, and that its destroyers had not had opportunity to take on fuel the preceding afternoon; the encyclopaedia records that the crews had practically no experience in each other’s doctrine, and that there was a language barrier at the flagship.',
        what: 'The encyclopaedia records that the force was spotted by a Japanese floatplane as it left port, and that torpedoes hit the flagship, which sank over several hours with the flag officer; the campaign history for the theatre records that the striking force turned back to the south in the afternoon of the 27th, and that a torpedo attack was thought the most effective means of covering the retirement.',
        consequence: 'The campaign history for the theatre names our losses as the cruisers De Ruyter and Java and the destroyers Kortenaer, Electra and Jupiter, losses it records we could ill afford, and puts the damage done to the enemy at two or three cruisers and at least two or three destroyers severely hit; the encyclopaedia records that these defeats led to the dissolution of the Allied fleet as a whole, the scuttling of the Dutch navy, and the occupation of the entire Dutch East Indies.',
      },
    },
  },
  {
    id: 'philippine_sea_air_battle_1944',
    date: '1944-06-19',
    precision: 'day',
    title: 'The day the Japanese carrier air arm was spent',
    kind: 'battle',
    fronts: ['pacific'],
    countries: ['Japan', 'Philippines', 'United States'],
    note: 'The independent account for the theatre gives the air strength of the retiring force as 430 aircraft, of which 207 were with the first group to be found, and 102 operational aircraft left standing at the end of the first day; the campaign history for the theatre has two thirds of the strength diverted to the Rabaul area lost there. The 16.28 in the independent account is the hour a carrier went down, not a loss ratio.',
    mapNote: 'The pin is in the Philippine Sea, east of the Marianas and the landing beaches.',
    levels: {
      primary: {
        cause: 'American troops landed on Saipan, and the Japanese fleet came out to answer the landings and rescue the defenders of the island.',
        what: 'Carrier aircraft fought over the Marianas, and American submarines found the fleet on its approach.',
        consequence: 'The Japanese carrier air force was largely destroyed within two days, and the day’s air battle is known as the Great Marianas Turkey Shoot.',
      },
      secondary: {
        cause: 'The campaign history for the theatre has American submarines reporting from 15 June that a fleet was massing for the rescue of the defenders of Saipan; the encyclopaedia gives the same day for the first American troops ashore, and the independent account for the theatre for the attack on the island. The encyclopaedia records that the Japanese had expected the next blow further south, in the Carolines or the Palaus.',
        what: 'The air battle of 19 June, which the campaign history for the theatre itself calls the Great Marianas Turkey Shoot, was over by evening with disastrous results to the Japanese. The same history records that two of the largest Japanese fleet carriers were torpedoed and sunk by submarines during the fighting, the encyclopaedia says, one of them sunk in the afternoon after poor damage control, as the independent account for the theatre tells it.',
        consequence: 'The fleet retired to Truk, and most of its carrier air strength was diverted to the Rabaul area and largely lost there, the campaign history for the theatre records. The independent account for the theatre calls this the first major naval battle in the Pacific since 1942 and a crushing American victory; the encyclopaedia has the Japanese navy lose the bulk of its carrier air strength, never to recover.',
      },
      university: {
        cause: 'The Japanese plan had assumed a blow further south: the encyclopaedia records that it was covered by few land-based aircraft, and that the fleet was sent to answer the landings on Saipan, where within weeks, in its words, an opportunity arose to engage the American fleet now detected heading there. The campaign history for the theatre has the submarines reporting the movements from 15 June, and most of the transports off the island retiring to the eastward that night and staying away until the battle was over.',
        what: 'The submarines found the fleet on its approach, and the independent account for the theatre records one carrier torpedoed while her aircraft were still being launched, sinking in the afternoon after poor damage control. The campaign history for the theatre has the air battle finished by evening with disastrous results for the Japanese. The encyclopaedia notes that at the time the day looked like a missed opportunity to destroy the Japanese fleet, and that the American carriers under the admiral in command of them suffered no significant harm.',
        consequence: 'The encyclopaedia’s verdict is blunt: the Japanese navy lost the bulk of its carrier air strength and would never recover, the blow falling on the trained pilots and the reserves of aircraft with them. There was neither time nor material to build aircraft and train replacements, so the surviving carriers were almost useless as an offensive force, a fact the Japanese acknowledged by using them as decoys in the next great battle, four months later, and turning increasingly to suicide attack flown from the land.',
      },
    },
  },
  {
    id: 'myitkyina_airfield_1944',
    date: '1944-08-03',
    precision: 'day',
    title: 'The airfield that opened the road to China',
    kind: 'battle',
    fronts: ['china_burma_india'],
    countries: ['Burma', 'India', 'Japan', 'United States'],
    note: 'The combat narrative for the theatre dates the seizure of the principal airstrip to 17 May 1944; the encyclopaedia gives 26 July to the capture of the northern airfield, and neither day is in the account of the battle. The town had first been lost on 8 May 1942, the encyclopaedia records. The day of the town’s fall, 3 August, is printed by both the encyclopaedia and the campaign history for the theatre. The strength of the garrison and the losses on each side are given variously by the publishers, and are not repeated here.',
    mapNote: 'The pin is at Myitkyina, the town and airfield whose capture the road to China depended on.',
    levels: {
      primary: {
        cause: 'Allied plans wanted a road to China, and the taking of Myitkyina and its airfield was the prerequisite of completing it.',
        what: 'The field outside the town was carried, the garrison was taken by surprise, and the airfield was in Allied hands before the town itself.',
        consequence: 'The town and its airfield were in Allied hands at last, and the road to China could be opened.',
      },
      secondary: {
        cause: 'The campaign history for the theatre makes the Myitkyina-Mogaung area the prerequisite of the Ledo Road and of a ground line of communications to China, an all-weather road and a gasoline pipeline with it; the same history records the race to bring the road forward before the monsoon, and the doubt in the British staffs whether it could be done in time. The town had first been lost in the spring of 1942, the encyclopaedia records.',
        what: 'The combat narrative for the theatre calls the seizure of the principal airstrip a stunning surprise to South East Asia Command; the encyclopaedia gives 26 July to the American battalion that carried the northern airfield. The Japanese were caught by surprise and, not knowing where their enemies were, poured gasoline onto the airfield to disable it and retreated into the town itself, meaning to fight the Chinese and Americans on more favourable terms there. Transport aircraft flew in a Chinese regiment to supplement units already exhausted. The town was given up on 3 August.',
        consequence: 'The taking of the town and its airfield allowed the Ledo Road to be opened, the encyclopaedia records. The campaign history for the theatre has that road nearly complete on 24 October 1944, calls the capture a triumph for the man who had maintained it could be done, and gives the town’s purpose as an intensified air effort from bases in China behind the American operations in the Pacific. The same history has the Chinese divisions taken in hand for rigorous training immediately after the town fell.',
      },
      university: {
        cause: 'The airfield beside the town was the pivot of the northern campaign. The encyclopaedia has Joseph Stilwell intend a rapid march against Myitkyina, wanting the town for the airstrip beside it — strategically vital to the campaign, an invaluable source of supplies and aerial support in the difficult jungle fighting of the theatre. The campaign history for the theatre makes the Myitkyina-Mogaung area the prerequisite of the Ledo Road and of a ground line of communications to China, with an all-weather road and a gasoline pipeline. Until the airstrips were taken the airlift ran the long way about: the same history records that Japanese fighters based at Myitkyina forced American transports far to the north and then south to the terminals at Kunming, and that with the place in Allied possession a much wider and lower route came into use.',
        what: 'The blow fell on a garrison that the campaign history for the theatre calls a stunning surprise to South East Asia Command when the principal airstrip went; the encyclopaedia dates the capture of the northern airfield to 26 July, when the American 3rd Battalion of the Marauders came in, and records that Japanese resistance was noticeably weaker. The defenders, caught by surprise and unsure where their enemies were, poured gasoline onto the airfield to disable it and retreated into Myitkyina proper, intending to fight the Chinese and Americans on more favourable terms there; the field was overrun relatively intact, and transport aircraft brought in a Chinese regiment to supplement units already exhausted. The encyclopaedia has the garrison’s commander order the town abandoned on 3 August and take his own life, in literal compliance with the order to defend the place to the death.',
        consequence: 'The long-awaited taking of the town and its airfield allowed the opening of the Ledo Road, joining the old Burma Road to China, the encyclopaedia records; the campaign history for the theatre has that road nearly complete on 24 October 1944, and gives the town’s capture as the means of an intensified air effort from bases in China behind the American operations in the Pacific. That history’s own verdict is that Myitkyina was taken very late in the day, but taken it was — a triumph for the man who had maintained it could be done. The fighting had been hardest on the Chinese Expeditionary Force, from the hard fighting, the lack of supplies, the difficult terrain and the disease.',
      },
    },
  },
  {
    id: 'hump_ferry_1942',
    date: '1942-04-08',
    precision: 'month',
    title: 'The airlift over the range, begun in the month Burma fell',
    kind: 'alliance',
    fronts: ['china_burma_india'],
    countries: ['Burma', 'China', 'India', 'United States'],
    note: 'The encyclopaedia dates the beginning of the operation to April 1942 and gives its burden as about 650,000 tons over 42 months at great cost in men and aircraft; the campaign history for the theatre dates the operations of the India-China Ferrying Service from 20 May 1942, and the first planes and crews did not reach India until the middle of that month.',
    mapNote: 'The pin is at the eastern end of the Assam valleys, where the route began.',
    levels: {
      primary: {
        cause: 'The Japanese advance cut the flow of supplies to China by land, and air was the only practicable way to supply China.',
        what: 'Transport aircraft began to fly from Assam over the great range into China, and the crews gave the crossing the name the route has kept ever since.',
        consequence: 'The airlift ran on, daily, for the rest of the war, and China was supplied by air alone.',
      },
      secondary: {
        cause: 'The loss of Rangoon and of Myitkyina effectively cut Allied access to the Burma Road, the encyclopaedia records, and left air as the only practicable way to supply China in anything resembling a timely fashion; the campaign history for the theatre puts it more strongly still, holding that no other airway of the war was the sole means by which a combat theatre was nourished.',
        what: 'The route crossed the eastern end of the Himalaya, the encyclopaedia says, over a ridge the campaign history for the theatre identifies as the Samsung Range, often at 15,000 feet; the air force history for the theatre records the twenty-six planes and crews sent out between 19 April and 13 May 1942 as the beginning of the service.',
        consequence: 'In July 1942 a handful of transports delivered 85 tons, the air force history for the theatre records; in all of that year the air force and the transport command flew 3,706 tons to China, and in the year following 61,151 tons.',
      },
      university: {
        cause: 'Burma had been the last way in, and its loss left air as the only practicable way to supply China, the encyclopaedia records; the campaign history for the theatre holds that no other airway of the war was the sole means by which a combat theatre was nourished. The theatre was not ready for the task: it had no units trained or equipped for moving cargo, and no airfields to base the transports in, the encyclopaedia records, and the Assam fields the ferries flew from were laid out on tea plantations and declared operational only in August 1942, with a fourth still building.',
        what: 'The route ran east from Assam over the eastern end of the Himalaya, often at 15,000 feet and between the Salween and the Mekong, the encyclopaedia records. Flying over that range was extremely dangerous, and made worse by a lack of reliable charts, an absence of radio navigation aids and a dearth of information about the weather, in the same account. The campaign history for the theatre gives the load of October 1944 alone: 35,131 tons flown to China in that one month by the air transport organisation, by the Chinese carrier then under government contract, and by other contract carriers.',
        consequence: 'The airlift kept a theatre in the field by air alone, the only such airway of the war in the campaign history’s judgment. That same history records what became of the jam behind the whole effort: the traffic which had hindered all operations in the theatre was by the end of 1944 only a bad memory.',
      },
    },
  },
  {
    id: 'rangoon_monsoon_1945',
    date: '1945-05-02',
    precision: 'month',
    title: 'Rangoon taken, the port lost to the rains',
    kind: 'liberation',
    fronts: ['china_burma_india'],
    countries: ['Burma', 'India', 'Japan', 'United Kingdom'],
    note: 'The encyclopaedia puts patrols in the empty city on the morning of 1 May and the landing on 2 May; the campaign history for the theatre dates the occupation the day after, and had the assault complete by 5 May. What neither account here settles is how long it took before the port could work.',
    mapNote: 'The pin is at Rangoon, on the river delta the campaign had reached.',
    levels: {
      primary: {
        cause: 'The Allies meant to take Rangoon before the monsoon, and the Japanese had already gone.',
        what: 'The city was found abandoned, and the assault went in over the river and by air.',
        consequence: 'The port was in Allied hands, and the city with it, before the monsoon began.',
      },
      secondary: {
        cause: 'The campaign history for the theatre records the argument behind the date: the chiefs had reserved the right to move resources to China if Rangoon did not fall before the monsoon began, and the assault on the city was set for 2 May.',
        what: 'The Japanese were gone: the city had been abandoned, and the division landed on the river on 2 May to find its docks taken without opposition, the encyclopaedia records. The occupation of the city is dated 3 May, the day after, by the campaign history for the theatre.',
        consequence: 'The monsoon broke on the day of the landing, earlier than had been expected, the encyclopaedia records, and the port had been seized to keep the lines of communication of the troops in Burma open; the campaign history for the theatre had the assault complete by 5 May.',
      },
      university: {
        cause: 'The encyclopaedia records that the plan was revived in March 1945 because the city had to be taken before the monsoon, which was expected in the second week of May, and that it was needed to secure the lines of communication of the Allied troops in Burma. The campaign history for the theatre shows why the argument was pressed, in the chiefs’ condition that resources go to China if the port was not taken before the rains.',
        what: 'The plan was to take the city by amphibious and air assault, and the campaign history for the theatre gives the day by which it was to be complete. Units of the Fourteenth Army got to within 40 miles of the city before they were delayed at Pegu until 1 May, the encyclopaedia records; a parachute battalion landed at Elephant Point at the mouth of the river and eliminated the rearguards there, after which minesweepers cleared the river. A reconnaissance aircraft had already flown over the city and seen no sign of the enemy, and a message painted on the roof of the jail by released prisoners of war said the Japanese were gone.',
        consequence: 'The monsoon broke on the day of the landing, earlier than had been expected. With the Japanese and the Burmese government gone, widespread looting had broken out and continued for several days, the encyclopaedia records, and the retreating troops had burned the jail housing Burmese prisoners; the city welcomed the troops who came, asking for order and for food. How long it took before the port could work is not settled by either account here.',
      },
    },
  },];
