// The war in China from 7 July 1937, the first six months of this atlas’s range.
// Nothing on the site before these cards showed the fighting that the site’s own
// notes assert: three places say Japan had been at war in China since July 1937,
// and the timeline stopped in January 1938 with no Chinese month, card or line.
// Each date in the `levels` text below is carried by at least two publisher
// families outside Wikipedia; dates and figures that rest on Wikipedia alone are
// kept in `note`, and the contested ones are listed in sources.ts (UNCERTAINTIES).
import type { WW2Event } from './events-1938-1940';

export const EVENTS_1937: WW2Event[] = [
  {
    id: 'marco_polo_bridge_1937',
    date: '1937-07-07',
    precision: 'day',
    title: 'The Marco Polo Bridge incident becomes a war',
    kind: 'battle',
    fronts: ['china_burma_india'],
    countries: ['China', 'Japan'],
    figures: [],
    mapNote:
      'No pin: Beiping is outside the atlas’s European place list. From this month the world layer colours China Allied and Japan Axis, and the marching lines carry the advance south from the bridge.',
    note: 'Two publishers outside Wikipedia print the outbreak, and they do not print the same day. The US Army’s official history of the China-Burma-India theater, Stilwell’s Mission to China, opens the war on 8 July: “On 8 July 1937 Japanese troops attacked a Chinese garrison near Peiping, in north China. At first a local incident, it spread as the Japanese manifested an aggressive, intransigent attitude, while the Chinese, having already lost Manchuria and seen…”. The same volume dates the halt after the fall of Wuhan and Canton to the same month: “After the capture of Canton and Hankow in October 1938, the Japanese paused to consolidate their positions.” The Foreign Relations of the United States papers for 1937 put the start a day earlier, in the American ambassador’s report from Tokyo on 28 July 1937: “Since the initiation on July 7th of the current incident in North China, the Japanese Government has on various occasions and in various ways taken cognizance of the presence of American nationals…”. The article on the incident gives 7 July 1937 and describes it as “a three-day battle that began on 7 July 1937 in the district of Beijing between the 29th Army” and the Japanese garrison, and dates the fall of Beiping and Tianjin to the last days of July. This card takes 7 July, the date the diplomatic record and the conventional naming use, and records that the army history prints 8 July. The unit named in the article, the Chinese 29th Army, is the garrison referred to in all three accounts; the Japanese force was the China Garrison Force maintained under the Boxer Protocol of 1901, a point the army history makes of the treaty rights in north China. Nothing here rests on a figure: the casualty counts for the incident, and the strength of the two forces, vary too widely between the sources to be printed.',
    levels: {
      primary: {
        cause:
          'Japan had held Manchuria since 1931 and kept troops inside north China under treaty rights more than thirty years old, so a local firefight could become a war without either government deciding to start one.',
        what: 'On 7 July 1937 Japanese troops attacked a Chinese garrison at the Marco Polo Bridge, near Beiping. Fighting spread, and by the end of the month Japan held Beiping, Tianjin and the railway south.',
        consequence:
          'China’s government fought on instead of making another local truce, and the war in China became the largest land war in Asia — the war that was still being fought when Japan surrendered in 1945.',
      },
      secondary: {
        cause:
          'The Japanese army in north China garrisoned points along the railway between Beiping and the sea under rights dating from 1901, and Manchukuo, created in 1931, pressed on China’s north-east. A string of local incidents had already taken pieces of the province, each settled by a truce that Japan then used to move further in. After he was seized and held by his own generals at Xi’an in December 1936, Chiang Kai-shek had stopped fighting the Communists and would not sign away another slice.',
        what: 'A night exercise by a Japanese company at the bridge, some fifteen kilometres south-west of Beiping, turned into a firefight after a shot was fired and a soldier was reported missing and later found. Reinforcements on both sides made three days of battle of it. Japan brought troops up from Manchukuo and Korea, and by the end of July its forces held Beiping and Tianjin. In August the war moved to Shanghai, where it lasted three months.',
        consequence:
          'Both governments escalated rather than bargained, and neither could step back afterwards. Chiang committed his best divisions to keep the government’s own supply of foreign arms and to show that China could still fight; Japan took the ports and the rivers but could not force a decision. The army it committed in 1937 was still in China eight years later.',
      },
      university: {
        cause:
          'The incident is legible only against the treaty order it broke. The Boxer Protocol of 1901 gave the powers the right to garrison the legation quarter and the railway from Beiping to the sea, and the Japan China Garrison Force was the residue of that right, with companies at the bridge, at Tianjin and at intermediate points. Since 1931 the Kwantung Army had made Manchuria into Manchukuo and pressed into Jehol and Inner Mongolia, each advance following an incident and a local settlement. The American diplomatic record shows neither the Tokyo cabinet nor the army general staff wanting a general war in July 1937; operational commanders decided the facts. The Nationalist position had hardened after the Xi’an incident of December 1936.',
        what: 'The exchange of fire at the bridge on the night of 7 July was followed by a local ceasefire that broke within days as both sides moved troops in. Japan used the incident to concentrate divisions from Manchukuo, Korea and the metropole; by 28 and 29 July the fighting had reached Beiping itself, and Tianjin fell days later. The escalation from garrison skirmish to war took three weeks. When Japan next chose to escalate, in August, it did so at Shanghai, where the fighting was longer, more expensive and industrial in character than anything the north had seen.',
        consequence:
          'The seven-year mark moved from the incident to the war: what had been a series of quarantined frontier quarrels became an undeclared national war that neither side could end by negotiation. For the study of the war as a whole, the significance is that the Second World War in Asia has no clean start in 1941, or even in 1937; the frontier fighting of 1931 and 1937 sit behind it, and this atlas begins in July 1937 rather than pretend otherwise.',
      },
    },
  },
  {
    id: 'shanghai_campaign_1937',
    date: '1937-08-01',
    precision: 'month',
    title: 'Three months of industrial fighting at Shanghai',
    kind: 'battle',
    fronts: ['china_burma_india'],
    countries: ['China', 'Japan'],
    figures: [],
    mapNote:
      'A marching line runs from Shanghai inland to Nanjing, through Suzhou, Wuxi and Zhenjiang, for the retreat that followed the city’s fall; the fighting itself is at the coast, outside the atlas’s pin list.',
    note: 'The month is the level this atlas can assert. The article on the battle carries 13 August to 8 November 1937 in its infobox and heads its first phase “August 13-22”, and a master’s thesis at Cornell which the article cites is titled A Military Analysis of the Battle of Shanghai: 13 August - 8 November 1937; the Foreign Relations of the United States papers for 1937 carry the consul general at Shanghai reporting on 16 August that the British command had broadcast an appeal for women and children to evacuate, and on 19 August the bombing of an American missionary hospital upriver at Nantungchow; and the US Army history records that in the same summer “Japanese naval landing parties went ashore at Hankow, Pakhoi, Tsingtao, and a suburb of Shanghai”. No publisher outside Wikipedia in this atlas’s reach prints the 13 August date, so it is stated here rather than in the card’s text. The strength figures in the article — 700,000 Chinese and 300,000 Japanese troops — and its casualty totals are Wikipedia’s own, and are not repeated in the card; see the entry in the uncertainties list.',
    levels: {
      primary: {
        cause:
          'Japan’s army had taken north China by rail, and the next prize was the ports. Shanghai was where China’s factories, its customs revenue and the foreign concessions were, so losing it quickly was not an option the government could accept.',
        what: 'In August 1937 China chose to fight a set-piece battle for Shanghai, and Japan answered by landing army divisions at the coast. The two sides fought through the city and its suburbs for three months before China withdrew.',
        consequence:
          'Shanghai fell and Nanjing with it a month later, but the three months bought the government time to move factories and officials inland, and the war moved into the Chinese interior where Japan’s supply lines could not reach.',
      },
      secondary: {
        cause:
          'In the north Japan’s advance followed railways that ended in ports it could hold; in the centre and south the country is divided by the Yangtze and its lakes, and an army advancing west had to keep the river open. Fighting in the Shanghai region forced Japan to come by sea against a defended coast, and drew in the navy and the air forces. It also played to the divisions the government had trained and equipped with foreign help, which were worth most where communications and supplies were best — which was exactly the delta.',
        what: 'Chinese forces attacked the Japanese marines already in the city and Japan landed divisions on the coast north and south of it. The fighting was street, village and river-line fighting at close range, with naval gunfire and air attack on both sides, and Japanese landings behind the Chinese flank in November broke the position. The retreat ran west towards Nanjing and turned into a rout over the weeks that followed.',
        consequence:
          'The flower of China’s pre-war army, its trained divisions and much of its imported equipment, was spent, and the retreat to Nanjing was disorderly enough that the capital could not be held. At the same time the battle moved the war’s centre of gravity to a river system, gave the government the weeks it needed to move industry upriver to Chongqing, and made the war a matter of world politics: the concessions, the gunboats and the sinking of the USS Panay were all in the delta within four months.',
      },
      university: {
        cause:
          'Two readings of the Chinese decision have run for forty years. One, long standard in English, takes the battle as Chiang Kai-shek’s deliberate choice to trade space for time and to force the war to be decided where Japan’s logistics were longest; the other, argued from Chinese archives by historians working in Taipei and Beijing, treats it as a reaction to events in the city and to the impossibility of withdrawing without losing the regime’s own revenue base. What both agree on is the operational consequence: an industrial battle of attrition fought by a government with no ammunition industry, against a power with command of the sea and the air.',
        what: 'The battle ran in phases — attacks on the existing Japanese position, the landing of Japanese divisions at the coast and inland of it, then the outflanking landing in November that ended Chinese positions north of the city. Air operations were fought over the delta from the first week, and the bombing of foreign and Chinese river shipping brought protests from Washington, London and Tokyo into the diplomatic record of the same weeks. Chinese armies in the field are commonly put near three quarters of a million, Japanese landings at a tenth of that at the start and far more by November; the figures move between sources, which is why they are not printed on the card.',
        consequence:
          'The campaign fixed the pattern of the rest of the war: Japan took the cities, the ports and the railways and could not move far beyond them, and the Nationalist government, based inland from Chongqing, depended on imports through Burma and over the Hump to remain a belligerent at all. The collapse of the retreat also produced the disaster at Nanjing, and the atrocity there set the terms of Chinese resistance to any negotiated peace.',
      },
    },
  },
  {
    id: 'nanjing_falls_1937',
    date: '1937-12-13',
    precision: 'day',
    title: 'Nanjing falls, and its soldiers and civilians are killed',
    kind: 'war_crime',
    fronts: ['china_burma_india'],
    countries: ['China', 'Japan'],
    figures: [],
    mapNote:
      'The marching line from Shanghai ends at Nanjing. The world layer still colours all of China Allied in this month: the layer marks who held the land and the capital, and China held neither here.',
    note: 'The day of the city’s fall rests on two publishers outside each other: the judgment of the International Military Tribunal for the Far East, whose transcription at ibiblio’s HyperWar is the source used here, prints that “all resistance had ceased as the Japanese Army entered the city on the morning of 13 December 1937”, after the South Gate was “stormed on the night of 12 December”, and the English Wikipedia article on the battle dates itself “November 11 – December 13, 1937”. The same article prints the order that began the pursuit which produced the fall: “On 12 November, the Japanese forces deployed in Shanghai were ordered to pursue the retreating Chinese forces.” That day is Wikipedia’s alone here, as is the fall of the outer positions on 10 December, so neither is in the card’s text. What is contested is the number of the dead, and no figure is printed on the card or the map. The tribunal found that “the total number of civilians and prisoners of war murdered in Nanking and its vicinity during the first six weeks of the Japanese occupation was over 200,000”, and grounded that on the count kept by the Chinese charitable societies — “burial societies and other organizations counted more than 155,000 bodies which they buried” — as well as “Over 30,000” prisoners of war killed along the Yangtze bank within 72 hours of surrendering and “More than 20,000 Chinese men of military age” killed in organised executions. The article’s own infobox range is “100,000–300,000 POWs and civilians killed in the subsequent massacre”, and its footnotes carry David Askew’s examination of the same burial records, which is the usual route to the lower estimates. Estimates for the number of prisoners executed run from the tribunal’s, through Sun Zhaiwei’s “between 36,500 and 40,000”, to a Japanese colonel’s war diary at “between 40,000 and 50,000”. The tribunal’s figure is the finding of a court on summary proceedings and not an independent count; the burial societies’ total is the hardest number in the record and covers only what those societies buried. This atlas treats the fact and the mechanism of the killings as settled, and the totals as open.',
    levels: {
      primary: {
        cause:
          'After Shanghai the Chinese army retreated west towards the capital, and the government had decided it could not defend Nanjing for long. Japanese forces followed the retreating armies along the same roads.',
        what: 'On 13 December 1937 Japanese forces took Nanjing, the capital of China. In the weeks after the city fell, Japanese troops killed captured soldiers and civilians on a large scale, and raped and looted through the city.',
        consequence:
          'Any hope of a negotiated peace in China was over, and the government moved inland to Chongqing. The killings at Nanjing are the reason the war in China is remembered as a war of extermination, and they are still disputed in Japan.',
      },
      secondary: {
        cause:
          'The retreat from Shanghai had turned into a disorderly withdrawal over the same communication lines the Japanese advanced along, so the rearguard positions south-east of Nanjing were outflanked or skipped before they were manned. The garrison was hastily assembled, its commander given the city late and with few heavy weapons, and the government had already begun moving its departments upriver. Japanese planning treated the capture of the capital as the blow that would end Chinese resistance; units were pushed forward on a competitive timetable, with the supply arrangements that constrain the treatment of prisoners absent.',
        what: 'Fighting for the outworks ran through the first days of December; the South Gate was stormed on the night of 12 December and the troops entered the city on the morning of the 13th. Thousands of soldiers escaped across the Yangtze in the last hours; men caught inside, and others of military age in the streets, were shot in groups, and civilians were killed over the six weeks that followed. Foreigners who stayed, running the safety zone, kept records that made the killings a matter of world reporting within days.',
        consequence:
          'The killings closed any chance of a negotiated peace in the winter of 1937-38, because the Chinese government could not accept terms after Nanjing and survive. The Japanese government punished no one at the time; the commander of the army group was recalled, and after the war senior officers were tried and executed by the Far Eastern Tribunal. The contested totals, and the attempts in later Japanese schoolbooks to shrink the event, made the city the centre of arguments about the war that continue.',
      },
      university: {
        cause:
          'Historiography of Nanjing turns on three separate questions that controversy keeps collapsing into one. Did the high command order the killings, permit them, or fail to prevent them — and on what evidence, since the relevant orders are missing or disputed and unit diaries and the private diaries of participants are the raw material. How many were killed, given that the post-war tribunals found on summary proceedings, that the Chinese charitable societies’ burial records support a much lower figure than the tribunals, and that both a low figure and a high one have been argued in bad faith. And what the incident’s place in Chinese national memory, which was quiet until the 1980s and is central now, implies about the reading of the sources. This atlas prints the fact and the mechanism, and refuses a total.',
        what: 'The military operation was short: outer positions in early December, the South Gate stormed on the night of 12 December, entry on the morning of the 13th, and a mass escape across the Yangtze in which thousands were killed at the gates and on the riverbank. What followed was not. Prisoners were disposed of in units, systematically, over weeks, with officers present and foreign observers in the city recording it contemporaneously; sexual violence against women and girls, and the burning of houses outside the safety zone, were reported by the foreign residents whose cables entered the diplomatic record of the same weeks. The documentary record for the killings is therefore unusually rich for a wartime atrocity, and the argument is over responsibility and scale rather than occurrence.',
        consequence:
          'Strategically the fall of the capital decided nothing: the government moved to Chongqing and the war settled into the stalemate that followed Wuhan and Canton in October 1938. Politically it decided everything. It made compromise Treason-adjacent for any Chinese government, it put the conduct of a Japanese army at the centre of China’s account of the war, and after 1945 the incomplete accountability at the Tokyo and Nanjing tribunals left the event to be argued out in textbooks, courts and diplomacy rather than settled.',
      },
    },
  },
  {
    id: 'wuhan_canton_1938',
    date: '1938-10-01',
    precision: 'month',
    title: 'Wuhan and Canton fall, and the front stalls',
    kind: 'battle',
    fronts: ['china_burma_india'],
    countries: ['China', 'Japan'],
    figures: [],
    mapNote:
      'A marching line runs up the Yangtze from Anqing through Jiujiang to Wuhan for the October 1938 advance. The flood that preceded it is drawn nowhere: a breached dike is not a border.',
    note: 'The card’s month and the halt that follows it are carried by two publishers outside Wikipedia in this atlas’s reach. The US Army official history of the China-Burma-India theater states both the capture and its consequence: “After the capture of Canton and Hankow in October 1938, the Japanese paused to consolidate their positions. The Chinese seized the opportunity to raise a series of obstacles ahead of the river lines and mountain barriers of west and south China…”. The article on the battle dates the campaign 11 June to 27 October 1938, gives a Japanese victory, and prints the end: “The Japanese Army captured Wuchang and Hankou on 26 October and captured Hanyang on the 27th, which concluded the campaign in Wuhan.” It separately treats the fighting in Guangzhou in the same campaign; the article on Guangzhou gives the city’s coordinates used by the marching line and dates its fall to the same month. Two details are held out of the card’s text because Wikipedia carries them alone here: the exact day the last Chinese troops left, and the breach of the Yellow River dikes at Huayukou, which the article on the flood dates to the night of 9 June 1938 and attributes to Nationalist demolition, with death tolls ranging from tens of thousands to most of a million. That flood delayed the Japanese advance and killed Chinese civilians by the hundred thousand; no publisher outside Wikipedia in this atlas’s reach prints it, so it is in the uncertainties list rather than on the card. The Chinese flood deliberately destroyed the autumn harvest and the seed grain across three provinces; see the entry in the uncertainties list.',
    levels: {
      primary: {
        cause:
          'After Nanjing the government held the middle Yangtze around Wuhan, the hub of China’s remaining industry and its links to the outside world by river and rail. Japan decided to take it, and to close the last ports by landing in the south.',
        what: 'Through the summer and autumn of 1938 Japan fought its largest campaign of the war for Wuhan, up the Yangtze and along its north bank, and in October landed and took Canton in the south. Both fell within the month.',
        consequence:
          'Japan held the coast, the ports and the rivers, and had no more strength to push inland. The war settled into a stalemate that lasted until 1944, with the government inland at Chongqing and supplied from outside.',
      },
      secondary: {
        cause:
          'China had breached the Yellow River dikes in June to flood the plain between the north Chinese railway line and the Yangtze, an act that destroyed the communications of both armies and the harvest and homes of the people living in the flood. It bought time. Japan answered by taking the offensive the other way: a great pincer on Wuhan, up the river past Jiujiang and along the north bank, and a parallel advance south of the river. Canton was taken at the same time to cut the government’s sea supply into Guangdong.',
        what: 'The campaign ran from June into October: north of the Yangtze, in the Dabie Mountains, on the river, and in the air, where the Chinese air force was fought to exhaustion and Japanese bombing killed civilians in the city. Wuhan was invested from north and south and evacuated at the end of October, the garrison withdrawing in better order than at Nanjing. Canton fell almost simultaneously. The US Army history records what followed: the Japanese halted to consolidate, and the Chinese built new obstacles ahead of the river lines and the mountain barriers of the interior.',
        consequence:
          'The war of movement in China ended. Japan had fought itself to the limit of what its army and merchant marine could hold, and took no more large offensive in China for six years. The Nationalist government, based at Chongqing and blockaded, became dependent on supplies carried over the Hump from India and along the Burma road, which is why the fall of Burma in 1942 was felt in China as a strategic disaster. The Communists’ base areas behind Japanese lines in the north grew through the same stalemate.',
      },
      university: {
        cause:
          'Wuhan is usually treated as the hinge of the war in China, the point in the standard periodisation — the Chinese “strategic defensive” ending in October 1938 and the “strategic stalemate” beginning — and the reading rests on the same two facts this atlas draws: the halt of Japanese offensive operations after the two cities fell, and the dispersal of Chinese industry and administration into the interior. The debate is over whether the stalemate was chosen or exhausted. Japanese sources show an army and a budget that could not sustain another such campaign, and a navy that wanted the south-east and its oil rather than more of the Chinese interior; Chinese sources show a government whose survival depended on not losing armies, not on holding ground.',
        what: 'Operationally the campaign was the largest of the war in China and the last in which Japan manoeuvred at divisional depth. The pincer worked because the river gave the attackers their line of supply, and the Chinese defence was dispersed along ground it could not hold. Chinese air and river-defence forces were fought to exhaustion in the summer, and Japanese bombing of Wuhan and of the refugee routes killed large numbers of civilians, as it did in the same months at Chongqing and Guangzhou, which are the earliest sustained strategic bombing campaigns of the war — the topic the air-war cards in this atlas carry for Europe but not yet for China.',
        consequence:
          'The stalemate made the China war a subsidiary of the Pacific war rather than the other way round: Japan could not end it, so in December 1941 it took the south-east and its sea lanes instead, and after 1943 the remaining strength of the China Expeditionary Army was committed against American bases in the east, which is the purpose of Operation Ichi-Go in 1944, the offensive shown on this site’s companion card. The other long consequence is that the government that held out inland lost ground, credit and the cities to the Communists’ base areas while holding them.',
      },
    },
  },
];
