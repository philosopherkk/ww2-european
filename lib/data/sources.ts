/**
 * Sources for the text, figures and map data on this site.
 * Everything here is a real, published, checkable source; the links point at
 * the publisher or at a stable reference page rather than at search results.
 */

export interface Source {
  citation: string;
  publisher: string;
  url: string;
  usedFor: string;
}

export const SOURCES: Source[] = [
  {
    citation:
      'European Borders During World War II, monthly vector snapshots 1938-1945, Harvard CGIS / ArcGIS FeatureServer',
    publisher: 'Stanford Spatial History Project dataset mirrored as an ArcGIS service',
    url: 'https://services6.arcgis.com/HvbabY0grzgZwGW1/ArcGIS/rest/services',
    usedFor:
      'The country outlines. Twelve month-end states between April 1938 and April 1945 were downloaded as GeoJSON and simplified; see scripts/build-border-data.mjs.',
  },
  {
    citation:
      'aourednik / historical-basemaps — world_countries_1938 and world_countries_1945 (GeoJSON)',
    publisher: 'GitHub; basemaps compiled by the repository author from published historical atlases',
    url: 'https://github.com/aourednik/historical-basemaps',
    usedFor:
      'Cross-checking the April 1938 and April 1945 outlines only. Where the two datasets disagree, this site draws the Stanford layer, because that is the one dated by month.',
  },
  {
    citation:
      'Foreign Relations of the United States, 1937, vol. IV: The Far East (US Government Printing Office, 1954)',
    publisher: 'US Department of State, Office of the Historian — official documentary series',
    url: 'https://history.state.gov/historicaldocuments/frus1937v04',
    usedFor:
      'The 7 July 1937 date for the outbreak of the war in China, from the ambassador in Japan’s report of 28 July 1937; and the American consular and naval reports from Shanghai and from Nanking in August and December 1937, which carry the bombing of the delta and the attacks on the USS Panay.',
  },
  {
    citation:
      'Louis Morton, Stilwell’s Mission to China (United States Army in World War II: China-Burma-India Theater, 1972)',
    publisher: 'US Army Center of Military History — official history',
    url: 'https://www.ibiblio.org/hyperwar/USA/USA-CBI-Mission/index.html',
    usedFor:
      'The 8 July 1937 variant date for the outbreak of the war in China, and the halt of Japanese offensive operations after the capture of Canton and Hankow in October 1938.',
  },
  {
    citation:
      'International Military Tribunal for the Far East, Judgment, Part B Chapter VIII: Conventional War Crimes (Atrocities), November 1948',
    publisher: 'Transcription at the HyperWar archive, ibiblio.org',
    url: 'https://www.ibiblio.org/hyperwar/PTO/IMTFE/IMTFE-8.html',
    usedFor:
      'The 13 December 1937 entry into Nanjing and the assault on the South Gate the previous night; and the tribunal’s own findings on the scale of the killings there, in the card’s note and in the uncertainties list.',
  },
  {
    citation: 'Holocaust Encyclopedia',
    publisher: 'United States Holocaust Memorial Museum',
    url: 'https://www.ushmm.org/',
    usedFor:
      'Babi Yar, Wannsee, Auschwitz, the deportations from the Warsaw Ghetto, and the two Warsaw uprisings of 1943 and 1944.',
  },
  {
    citation: 'Imperial War Museums, Second World War stories in the History section',
    publisher: 'Imperial War Museums; the address is an Internet Archive copy of the section’s Second World War ' +
      'page, kept because iwm.org.uk answers every request this machine makes with a bot check, in a ' +
      'browser included, so the live page could not be read here at all; the copy carries the D-Day, ' +
      'Dambusters and rationing articles',
    url: 'https://web.archive.org/web/20241217201023/https://www.iwm.org.uk/history/second-world-war',
    usedFor: 'General reading on the British side of the war, on the accounts the address carries: D-Day, the ' +
      'Dambusters raid and rationing. The use in Dunkirk, Battle of Britain, Blitz and El Alamein ' +
      'material that this row recorded when it was written could not be re-verified at any address, so it ' +
      'is no longer claimed here',
  },
  {
    citation: 'World War Two history resources for schools',
    publisher: 'The National Archives (UK)',
    url: 'https://www.nationalarchives.gov.uk/',
    usedFor: 'Primary-source material behind the cause sections and the wartime conferences.',
  },
  {
    citation: 'Glantz, David M. and House, Jonathan M., When Titans Clashed: How the Red Army Stopped Hitler (revised edition)',
    publisher: 'University Press of Kansas',
    url: 'https://search.worldcat.org/search?q=When+Titans+Clashed+Glantz+House',
    usedFor:
      'Soviet operational planning, Barbarossa and Bagration strength figures, the argument about whether Stavka planned an offensive in July 1941.',
  },
  {
    citation: 'Krivosheev, G. F. (ed.), Soviet Casualties and Combat Losses in the Twentieth Century',
    publisher: 'Greenhill Books',
    url: 'https://search.worldcat.org/search?q=Soviet+Casualties+and+Combat+Losses+Krivosheev',
    usedFor: 'Soviet personnel and irrecoverable-loss figures used in the statistics tables.',
  },
  {
    citation: 'Overmans, Rüdiger, Deutsche militärische Verluste im Zweiten Weltkrieg',
    publisher: 'Oldenbourg',
    url: 'https://search.worldcat.org/search?q=Deutsche+milit%C3%A4rische+Verluste+im+Zweiten+Weltkrieg+Overmans',
    usedFor:
      'German military deaths of about 5.3 million including prisoners who died in captivity, in place of the older Rümmler figures.',
  },
  {
    citation: 'Dear, I. C. B. and Foot, M. R. D. (eds), The Oxford Companion to World War II',
    publisher: 'Oxford University Press',
    url: 'https://search.worldcat.org/search?q=Oxford+Companion+to+World+War+II+Dear+Foot',
    usedFor:
      'Reference standard for campaign narratives, strength figures and the political history of the Grand Alliance.',
  },
  {
    citation: 'Overy, Richard, The Dictators: Hitler’s Germany, 1933-1945 and Stalin in Power',
    publisher: 'Allen Lane / Penguin',
    url: 'https://search.worldcat.org/search?q=The+Dictators+Hitler%27s+Germany+Overy',
    usedFor:
      'Economic and armaments comparison between the dictators, and the 1930s political background.',
  },
  {
    citation: 'Paxton, Robert O., Vichy France: Old Guard and New Order, 1940-1944; and Marrus, Michael R. and Paxton, Robert O., Vichy France and the Jews',
    publisher: 'Knopf; later Stanford University Press editions',
    url: 'https://search.worldcat.org/search?q=Paxton+Vichy+France+Old+Guard+and+New+Order',
    usedFor: 'The Vichy regime, French collaboration and the responsibility for deportation.',
  },
  {
    citation: 'Beevor, Antony, Stalingrad, The Fall of Berlin, and The Second World War',
    publisher: 'Weidenfeld & Nicolson',
    url: 'https://search.worldcat.org/search?q=The+Fall+of+Berlin+Beevor',
    usedFor: 'Stalingrad, Berlin and the civilian experience of the eastern front.',
  },
  {
    citation: 'Historikerkommission der Landeshauptstadt Dresden, Die Luftangriffe auf Dresden vom 13. bis 15. Februar 1945',
    publisher: 'Landeshauptstadt Dresden',
    url: 'https://www.dresden.de/',
    usedFor:
      'The revised Dresden death toll of about 24,000-25,000, replacing the 200,000 figure propagated by Nazi propaganda.',
  },
  {
    citation: 'Report on the Conditions of Jewish Property and the Holocaust in Romania (the “Wiener / Ioanid Report”)',
    publisher: 'Commission on the Assessment of the Contribution and Activity of Romania',
    url: 'https://www.ushmm.org/',
    usedFor: 'Romanian responsibility for the killings in Bessarabia, Bukovina and Transnistria.',
  },
  {
    citation: 'Statistical Abstract of the United Kingdom and Historical Statistics',
    publisher: 'UK Data Service / Central Statistical Office',
    url: 'https://ukdataservice.ac.uk/',
    usedFor: 'British population, armed-forces strength and civilian death figures.',
  },
  {
    citation: 'Department of Defense, Number of Army Personnel in Conflicts, and U.S. Census Historical Statistics of the United States',
    publisher: 'US National Archives',
    url: 'https://www.archives.gov/research/military/ww2',
    usedFor: 'American population and armed-forces strength series.',
  },
  {
    citation: 'Playfair, I. S., The Mediterranean and Middle East, Volume IV: The Destruction of the Axis Forces in Africa (History of the Second World War, United Kingdom Military Series)',
    publisher: 'HMSO, London, 1966 (digitised copy via the Internet Archive)',
    url: 'https://archive.org/details/med-middle-east-vol-4',
    usedFor:
      'El Alamein, the Tunisia campaign, Tobruk’s recapture on 13 November 1942 and the Axis shipping sunk in the Mediterranean in October 1942; the British official history is still the reference for the North African strength figures.',
  },
  {
    citation: 'van Creveld, Martin, Supplying War: Logistics from Wallenstein to Patton',
    publisher: 'Cambridge University Press, Cambridge and New York, 1977',
    url: 'https://archive.org/details/supplyingwarlogi0000vanc',
    usedFor:
      'The pursuit-and-supply arguments in the campaign-line notes: why the desert advance stalled, why the Normandy breakout outran its ports, and why the 1944 Soviet advances halted on the Vistula.',
  },
  {
    citation: 'Zuckerman, Yitzhak (Antek), A Surplus of Memory: Chronicle of the Warsaw Ghetto Uprising',
    publisher: 'Indiana University Press',
    url: 'https://search.worldcat.org/search?q=Surplus+of+Memory+Zuckerman',
    usedFor:
      "The 1943 Warsaw Ghetto Uprising: the January action, the ZOB’s arms and numbers, and the sewers route out of the ghetto.",
  },
  {
    citation: 'Kassow, Samuel D., Who Will Write Our History?: Emanuel Ringelblum, the Warsaw Ghetto, and the Oyneg Shabes Archive',
    publisher: 'Indiana University Press',
    url: 'https://search.worldcat.org/search?q=Who+Will+Write+Our+History+Kassow',
    usedFor:
      'The 1942 deportations from the Warsaw Ghetto as they were recorded while they were happening, and the fate of the buried archive.',
  },
  {
    citation: 'Goldberger, Leo (ed.), The Rescue of the Danish Jews: Moral Courage Under Stress',
    publisher: 'New York University Press, New York, 1987',
    url: 'https://archive.org/details/rescueofdanishje0000ugol',
    usedFor:
      'The October 1943 evacuation to Sweden, the leak of the deportation date, and how many were saved and how many were caught.',
  },
  {
    citation: 'POLIN Museum of the History of Polish Jews, Warsaw, “The Warsaw Ghetto Uprising. Historical ' +
      'Information”',
    publisher: 'POLIN Museum of the History of Polish Jews; the address is an Internet Archive copy of the ' +
      'museum’s page, kept because polin.pl answers this machine with a bot check, in a browser included',
    url: 'https://web.archive.org/web/20210415000219/https://polin.pl/en/warsaw-ghetto-uprising-historical-information',
    usedFor: 'Warsaw Ghetto figures as the museum gives them: over 400,000 Jews walled in, nearly 300,000 ' +
      'deported to Treblinka in the two months from 22 July 1942, and some 60,000 left by that autumn; ' +
      'the rising of 19 April to 16 May 1943, Stroop’s count of over 56,000 captured or killed, which the ' +
      'museum calls most likely exaggerated; and that some survivors later fought in the city’s Warsaw ' +
      'Uprising.',
  },
  {
    citation:
      'English Wikipedia: Surrender of Japan · Japanese Instrument of Surrender · Atomic bombings of Hiroshima and Nagasaki · Soviet invasion of Manchuria · Manchukuo · Puyi · Division of Korea · United States Army Military Government in Korea · Soviet invasion of South Sakhalin · Invasion of the Kuril Islands',
    publisher: 'Wikimedia Foundation — tertiary source, cited by article',
    url: 'https://en.wikipedia.org/wiki/Surrender_of_Japan',
    usedFor:
      'The five end-of-war cards, the September 1945 turning point, and every colour change on the world layer from 20 August to 8 September 1945. Each date is quoted from the article named in the card’s own note. The entries below are the publishers outside Wikipedia that have been checked against these cards; each note names which of its dates one of them carries and which still rest on this article alone.',
  },
  {
    citation:
      'Radiation Effects Research Foundation, “Frequently asked questions about the atomic bombings”',
    publisher:
      'RERF — a joint Japan–United States research foundation in Hiroshima, funded by both governments',
    url: 'https://www.rerf.or.jp/en/faq/',
    usedFor:
      'The two casualty ranges on the 6 August card, 90,000-166,000 deaths at Hiroshima and 60,000-80,000 at Nagasaki within two to four months of the bombings, and the foundation’s own caution that the total is not known precisely.',
  },
  {
    citation:
      'Atomic Heritage Foundation, “The 509th Composite Group”',
    publisher:
      'Atomic Heritage Foundation, the education arm of the National Museum of Nuclear Science & History',
    url: 'https://www.atomicheritage.org/history/509th-composite-group',
    usedFor:
      'The 509th Composite Group as “the weapon delivery arm of the Manhattan Project”.',
  },
  {
    citation:
      'Atomic Heritage Foundation, “Hiroshima and Nagasaki Bombing Timeline”',
    publisher:
      'Atomic Heritage Foundation, the education arm of the National Museum of Nuclear Science & History',
    url: 'https://www.atomicheritage.org/history/hiroshima-and-nagasaki-bombing-timeline',
    usedFor:
      'The dates of the two raids, 6 and 9 August 1945.',
  },
  {
    citation:
      'Atomic Bomb: Decision, introduction',
    publisher:
      'Documentary source archive assembled by Gene Dannen',
    url: 'https://www.dannen.com/decision/index.html',
    usedFor:
      'A third publisher for the dates 6 and 9 August 1945.',
  },
  {
    citation:
      'Foreign Relations of the United States: Diplomatic Papers, The Conferences at Malta, 1945, document 503, Agreement Regarding Entry of the Soviet Union Into the War Against Japan',
    publisher:
      'Office of the Historian, Department of State — US Government Printing Office, 1955',
    url: 'https://history.state.gov/historicaldocuments/frus1945Malta/d503',
    usedFor:
      'The Yalta pledge, which this document prints as entry into the war against Japan “in two or three months after Germany has surrendered”, a wider range than the “three months” on the 9 August card.',
  },
  {
    citation:
      'Foreign Relations of the United States: Diplomatic Papers, The Conference of Berlin (The Potsdam Conference), 1945, volume I, document 594, United States Delegation Working Paper',
    publisher:
      'Office of the Historian, Department of State — US Government Printing Office, 1960',
    url: 'https://history.state.gov/historicaldocuments/frus1945Berlinv01/d594',
    usedFor:
      'The Potsdam terms of 26 July 1945 and the phrase “prompt and utter destruction” quoted on the 15 August card.',
  },
  {
    citation:
      'Foreign Relations of the United States: Diplomatic Papers, The British Commonwealth, The Far East, volume VI, document 440',
    publisher:
      'Office of the Historian, Department of State',
    url: 'https://history.state.gov/historicaldocuments/frus1945v06/d440',
    usedFor:
      'The Japanese message of 14 August 1945 announcing the Imperial rescript, whose editors’ footnote dates the broadcast itself to “noon, August 15 (Japan time)”.',
  },
  {
    citation:
      'Foreign Relations of the United States: Diplomatic Papers, The British Commonwealth, The Far East, volume VI, document 487',
    publisher:
      'Office of the Historian, Department of State',
    url: 'https://history.state.gov/historicaldocuments/frus1945v06/d487',
    usedFor:
      'That “the instrument of surrender was signed aboard the U.S.S. Missouri, Tokyo Bay, September 2, 1945”.',
  },
  {
    citation:
      'Milestones: 1945-1952, the Korean War essay, section “The 38th Parallel” (archived 2009)',
    publisher:
      'Office of the Historian, Department of State, read through the Internet Archive because the live site no longer carries this passage',
    url: 'https://web.archive.org/web/20090212045647/http://history.state.gov/milestones/1945-1952/KoreanWar2',
    usedFor:
      'The “two U.S. army colonels (one of whom, Dean Rusk, would later become Secretary of State)” who proposed the 38th parallel as the line where the Soviet and American acceptance of Japanese surrender should meet. The passage is in the archived copy only: the rewritten live page does not carry it.',
  },
  {
    citation:
      'The Canadian Encyclopedia, “Korean War”',
    publisher:
      'Historica Canada',
    url: 'https://www.thecanadianencyclopedia.ca/en/article/korean-war',
    usedFor:
      'Soviet troops occupying “the country north of the 38th parallel, with the Americans to the south”.',
  },
  {
    citation:
      'Reports of General MacArthur, vol. I: The Approach to Ryuchiu and Japan (Centre of Military History, U.S. Army)',
    publisher:
      'HyperWar mirror, ibiblio',
    url: 'https://www.ibiblio.org/hyperwar/USA/RptsMacA/I/RptsI-14.html',
    usedFor:
      'The surrender ceremony: “The Instrument of Surrender was completely signed within twenty minutes”, the signature times 0904, 0910 and 0920, “the decks of the Missouri that morning”, and the Soviet declaration of war on 8 August.',
  },
  {
    citation:
      'Milestones in the History of U.S. Foreign Relations, “Korean War and Japan’s Recovery”',
    publisher:
      'Office of the Historian, U.S. Department of State',
    url: 'https://history.state.gov/milestones/1945-1952/korean-war',
    usedFor:
      'The Treaty of San Francisco “ended the state of war between Japan and 47 of the Allies (most nations allied with the Soviet Union refused to sign)”.',
  },
  {
    citation:
      'Burma 1942, US Army campaign pamphlet (Steven J. Bellavia)',
    publisher: 'US Army Center of Military History, Campaigns of World War II, via the HyperWar archive',
    url: 'https://www.ibiblio.org/hyperwar/USA/USA-C-Burma/index.html',
    usedFor:
      'Rangoon on 8 March 1942 with over 19,000 tons of lend-lease in it, the Tavoy airdrome opening the invasion, the twelve-day Chinese hold at Toungoo, the Japanese plan to encircle the Allied armies near Mandalay on three axes, and the 712-mile Burma Road to Kunming.',
  },
  {
    citation:
      'Philippine Islands, US Army campaign pamphlet',
    publisher: 'US Army Center of Military History, Campaigns of World War II, via the HyperWar archive',
    url: 'https://www.ibiblio.org/hyperwar/USA/USA-C-Philippines/index.html',
    usedFor:
      'The end of organised resistance on 8 May 1942, the Plan Orange assumption of six months’ resistance by 80,000 troops and 26,000 civilians on Bataan, Roosevelt’s order that MacArthur move to Australia, and Wainwright’s instruction to fight as long as any possibility of resistance remained.',
  },
  {
    citation:
      'Louis Morton, The Fall of the Philippines (1953), ch. XXVI and ch. XXXI',
    publisher: 'US Army in World War II, Office of the Chief of Military History, via the HyperWar archive',
    url: 'https://www.ibiblio.org/hyperwar/USA/USA-P-PI/USA-P-PI-31.html',
    usedFor:
      'Wainwright’s decision at 1000 on 6 May 1942 to surrender, his comparison with King on Bataan four weeks earlier, the landing of the reinforced Japanese 61st Infantry on the night of 5 May, and the 78,000 men on Bataan.',
  },
  {
    citation:
      'Rolace N. Bradbury, Seizure of the Gilberts and Marshalls (1953), ch. II, V and XIII',
    publisher: 'US Army in World War II, Office of the Chief of Military History, via the HyperWar archive',
    url: 'https://www.ibiblio.org/hyperwar/USA/USA-P-Gilberts/USA-P-Gilberts-2.html',
    usedFor:
      'Spruance’s task to seize Makin, Tarawa and Apamama, the 27th Division at Makin and the 2d Marine Division at Tarawa on 20 November 1943, Admiral Turner’s finding on the preliminary bombardment, and the garrisoning of the Gilberts by the 6th Base Force after Carlson’s raid.',
  },
  {
    citation:
      'China Defensive, US Army campaign pamphlet',
    publisher: 'US Army Center of Military History, Campaigns of World War II, via the HyperWar archive',
    url: 'https://www.ibiblio.org/hyperwar/USA/USA-C-ChinaD/index.html',
    usedFor:
      'Operation Ichi-Go launched 19 April 1944 with fifteen divisions, its railway objectives, the capture of Kweilin and Liuchow on 10 November 1944 and Nan-ning two weeks later, the Fourteenth Air Force tonnage, and the loss of the one remaining overland route to China.',
  },
  {
    citation:
      'Lt. Col. Whitman S. Bartley, Iwo Jima: Amphibious Epic (1954), ch. II–IV and the recapitulation',
    publisher: 'History and Museums Division, Headquarters US Marine Corps, via the HyperWar archive',
    url: 'https://www.ibiblio.org/hyperwar/USMC/USMC-M-IwoJima/USMC-M-IwoJima-3.html',
    usedFor:
      'The 4th and 5th Marine Divisions arriving off the island in the early hours of 19 February 1945, the fighter-escort purpose of the operation, Kuribayashi’s design to let the landing force split the island, the expectation of high casualties in under eight square miles, and the volume’s own casualty recapitulation.',
  },
  {
    citation:
      'Appleman, Burns, Gugeler and Stevens, Okinawa: The Last Battle (1948), ch. III',
    publisher: 'US Army in World War II, Office of the Chief of Military History, via the HyperWar archive',
    url: 'https://www.ibiblio.org/hyperwar/USA/USA-P-Okinawa/USA-P-Okinawa-3.html',
    usedFor:
      'The fleet of 1,300 ships off Okinawa on 1 April 1945, the seizure of the Kerama Islands and the bombardment before the landing, the reconnaissance of the Hagushi and Minatoga beaches, and the first suicide crash on the shipping on 2 April.',
  },
  {
    citation:
      'BBC History, “Burma Campaign” (Bruce Robinson)',
    publisher: 'BBC',
    url: 'https://www.bbc.co.uk/history/worldwars/wwtwo/ff4_burmacampaign.shtml',
    usedFor:
      'Rangoon “fell on 8 March 1942” — the one date on the six Asia-Pacific cards confirmed by a publisher outside the American official-history family — and that “the Burma Road was almost the only route for supplies to Chiang Kai-Shek’s Nationalist Chinese Army” after Japan took the Chinese coast.',
  },
  {
    citation:
      'Coulthard-Clark, Chris, “Remembering 1942: The Fall of Singapore”',
    publisher:
      'Canberra: Australian War Memorial, Military History Section; a lecture of 15 February 2002, ' +
      'published on the Memorial’s site',
    url:
      'https://www.awm.gov.au/articles/blog/1942-fall-of-singapore',
    usedFor:
      'The fall of Singapore card’s prisoner total: 130,000 personnel becoming prisoners of the Japanese, ' +
      'of whom 15,000 were Australians, and the Memorial’s own words that Singapore is a focus of major ' +
      'historical contention.',
  },
  {
    citation:
      'Frieser, Karl-Heinz (editor), Germany and the Second World War, Volume VIII: The Eastern Front ' +
      '1943–1944 — The War in the East and on the Neighbouring Fronts',
    publisher:
      'Oxford: Clarendon Press, Oxford University Press, 2017, for the Militärgeschichtliches ' +
      'Forschungsamt, Potsdam (ISBN 978-0-19-872346-2); read in the full-text copy of the volume held by ' +
      'the Internet Archive, where the sentence quoted below is in the section opening the ' +
      'Dnieper–Carpathian offensive',
    url:
      'https://archive.org/details/germany-and-the-second-world-war.-vol.-1-9-1990-2017',
    usedFor:
      'The second of the three sets of Soviet losses on the Dnieper card, the one the card attributes to ' +
      'the German official history: by 23 December the Red Army had lost 1,687,164 men in the Battle of ' +
      'the Dnieper, of whom 417,323 dead or missing. The card used to say “the German volumes edited by ' +
      'Frieser”; the figures are in this volume, not in the English Volume IX, and the note now names it.',
  },
  {
    citation:
      'Forczyk, Robert, Dnepr 1943: Hitler’s Eastern Rampart Crumbles (Osprey Campaign Series)',
    publisher: 'Osprey Publishing (Bloomsbury), 2016, 96 pages (ISBN 9781472812391); the address is the Google ' +
      'Books record for the volume, which gives the author, the year and 96 pages and names the publisher ' +
      'as Bloomsbury Publishing; the losses are not on that page and no free copy of the text is online',
    url: 'https://books.google.com/books?vid=ISBN9781472812391',
    usedFor:
      'The third set of Soviet losses on the Dnieper card, about 290,000 killed and over a million in all, ' +
      'is given to this book. UNVERIFIED: no page of the volume could be read. The card presents all three ' +
      'sets as disputed rather than choosing between them.',
  },
  {
    citation:
      'Hall, Richard C. (editor), War in the Balkans: An Encyclopedic History from the Fall of the Ottoman ' +
      'Empire to the Breakup of Yugoslavia',
    publisher: 'Bloomsbury Academic, 2014, 411 pages (ISBN 9781610690300, given at the address as 1610690303 and ' +
      '9781610690300); the address is the Google Books record for the volume, which gives author, ' +
      'imprint, year and 411 pages; the volume is not freely readable',
    url: 'https://books.google.com/books?vid=ISBN9781610690300',
    usedFor:
      'The April 1944 card dates a first Jassy–Kishinev offensive to 5 April on this book’s account. ' +
      'UNVERIFIED: the page was not read; the account that weighs Hall’s dating against Glantz’s cites ' +
      'Hall at p. 239 and records that he gives no end date, and that sentence is in the uncertainties.',
  },  {
    citation:
      'Rickard, J. L., “Liberation of the Channel Ports — Le Havre, Boulogne, Calais, 5–30 September 1944”',
    publisher:
      'History of War — battlefield article',
    url:
      'https://www.historyofwar.org/articles/battles_channel_ports.html',
    usedFor:
      'What the Le Havre card owes to this account: Bomber Command’s 4,000 tons on the port, the ' +
      'commandant’s surrender at 11.45 on 12 September, some 12,000 prisoners including non-combatants, an ' +
      'Allied cost of 634, Dieppe taken unopposed on 1 September, and Boulogne opened on 12 October.',
  },
  {
    citation:
      'Rickard, J. L., “Siege of Tobruk, April–December 1941”',
    publisher:
      'History of War — battlefield article',
    url:
      'https://www.historyofwar.org/articles/siege_tobruk_1941.html',
    usedFor:
      'The Tobruk card’s dating of the end of the siege: the investment renewed on 1 December 1941 after ' +
      'the German attack which drove the New Zealanders back from Sidi Rezegh, and the siege finally ' +
      'lifted after 242 days on 7 December; and the Polish Carpathian Brigade which came in to replace the ' +
      'Australian divisions.',
  },
  {
    citation:
      '“The fall of Vienna (13 April 1945)”',
    publisher:
      'TheSecondWar.pl — article',
    url:
      'https://thesecondwar.pl/en/fall-of-vienna',
    usedFor:
      'The Vienna card’s last days of the city: the decision on 11 April to take the Reichsbrücke from the ' +
      'water, fifteen armoured boats of the Danube Flotilla forcing the crossing, and the wires to the ' +
      'demolition charges cut before the bridge could be blown; the gallows at the Floridsdorfer Spitz; ' +
      'and the nine Jews shot by SS men in a Förstergasse tenement on 12 April.',
  },
  {
    citation:
      '“The end of the siege of Budapest (13 February 1945)”',
    publisher:
      'TheSecondWar.pl — article',
    url:
      'https://thesecondwar.pl/en/end-of-the-siege-of-budapest',
    usedFor:
      'What the Budapest card owes to this account: the Hungarian historian Krisztián Ungváry’s name on ' +
      'the 600 to 700 men who reached the German lines, and his view that the Soviet prisoner figure was ' +
      'inflated with detained civilians; the city encircled seven weeks before it fell; the artillery ' +
      'salute and communiqué in Moscow; and the road to Vienna lying open.',
  },
  {
    citation:
      '“Belgrade operation”',
    publisher:
      'Balkan War History — article',
    url:
      'https://www.balkanwarhistory.com/2017/10/belgrade-operation.html',
    usedFor:
      'What the Belgrade card owes to this account: the operation dated 21 September to 22 October 1944; a ' +
      'German battle group of over 20,000 men, 35 tanks and about 150 guns and mortars; the Serbian ' +
      'government dissolved and its men moved to Kraljevo to form the Serbian Strike Corps under ' +
      'Mihailović; the Sava bridge saved by a retired teacher with mining experience; and 2,953 Partisans ' +
      'buried in the Liberation Cemetery.',
  },  {
    citation:
      'Rubicon, The Review of Hungarian History, “Ethnic Revision, Great Power Games, and National ' +
      'Expansion: The First Vienna Award and the Return of Upper Hungary”',
    publisher:
      'Rubicon History (rubicon.hu), the journal of the Veritas Institute',
    url:
      'https://rubicon.hu/en/cikkek/ethnic-revision-great-power-games-and-national-expansion-the-first-vienna-award-and-the-return-of-upper-hungary',
    usedFor:
      'What the First Vienna Award card takes from this account: the territory returned to Hungary as ' +
      '11,927 km² with 896 thousand inhabitants, of whom roughly 750 thousand were Hungarians. The World ' +
      'War II Database gives the same area, and it is the figure this atlas prints; the population is set ' +
      'out among the site’s uncertainties.',
  },
  {
    citation:
      'World War II Database, “The First Vienna Arbitration, 1938”',
    publisher:
      'World War II Database; the address is a copy of the page of 28 October 2012 held by the Internet ' +
      'Archive, used because ww2db.com could not be reached from the machine that assembled this ' +
      'bibliography',
    url:
      'https://web.archive.org/web/20121028214852/http://ww2db.com/battle_spec.php?battle_id=255',
    usedFor:
      'The World War II Database account of the arbitration of 2 November 1938, used for the area ceded to ' +
      'Hungary, 11,927 square kilometres, which is the figure the First Vienna Award card prints, and for ' +
      'its own population of the territory, about 1,060,000 people.',
  },
  {
    citation:
      'W. Gordon East, “The New Frontiers of the Soviet Union”, Foreign Affairs, July 1951',
    publisher:
      'Council on Foreign Relations',
    url:
      'https://www.foreignaffairs.com/articles/russian-federation/1951-07-01/new-frontiers-soviet-union',
    usedFor:
      'The Soviet frontiers as they stood after the Moscow Peace Treaty, and the article’s statement that ' +
      'about 400,000 Finns migrated from the ceded areas to resettle in Finland, which is one of the three ' +
      'accounts of the evacuation that this atlas sets out for the treaty of March 1940. A survey of 1951, ' +
      'so a contemporary account of the new frontier as well as a secondary one.',
  },
  {
    citation:
      'Library of Congress Federal Research Division, “Finland: The Winter War”, Country Studies',
    publisher:
      'Library of Congress Country Studies (the United States Army Area Handbook for Finland)',
    url:
      'https://countrystudies.us/finland/19.htm',
    usedFor:
      'That the territories Finland ceded at Moscow held about one-eighth of its population, and that ' +
      'virtually all of the inhabitants moved over to Finnish territory, which is why the Moscow Peace ' +
      'Treaty card speaks of the evacuation without giving a number. Also the reasons the Finnish ' +
      'government gave for accepting the terms.',
  },
  {
    citation:
      '“This Day in History: Fighting Ends in the Russo-Finnish War, 1940”, The Guardian',
    publisher:
      'The Guardian and The Observer',
    url:
      'https://www.theguardian.com/world/2025/mar/12/fighting-ends-in-the-russo-finnish-war-1940',
    usedFor:
      'The figure this atlas prints for the land Finland ceded at Moscow, 9% of its territory. The page ' +
      'dates the treaty to 12 November 1940, which is wrong: the treaty was signed on 12 March 1940. So ' +
      'this atlas takes from it only the figure for the land ceded, and the wrong date is recorded among ' +
      'the site’s uncertainties.',
  },
  {
    citation:
      '“The Soviet-Finnish War (1939-40)”, a pamphlet of the Communist League, 1990',
    publisher:
      'the Alliance ML Review site (ml-review.ca), which holds the text of the Communist League’s 1990 ' +
      'pamphlet on the war',
    url:
      'https://ml-review.ca/aml/CommunistLeague/CL-FINLANDWAR90.html',
    usedFor:
      'A party pamphlet, not a scholarly account: it argues the Soviet case against Finland and cites ' +
      'Soviet commanders, and it contradicts itself on the distance, giving the Finnish frontier as 32 km ' +
      'from Leningrad in the Soviet demand it quotes and as 40 kilometres in its own narrative. This atlas ' +
      'uses it only for that 32 km.',
  },
  {
    citation:
      'John Simkin, “Finland and the Second World War”, Spartacus Educational',
    publisher:
      'Spartacus Educational',
    url:
      'https://spartacus-educational.com/2WWfinland.htm',
    usedFor:
      'The account of the frontier after the Moscow Peace Treaty that the Soviet border was moved 150 km ' +
      'from Leningrad to Vyborg. This atlas does not print that distance as fact; it is one account, set ' +
      'against the 120 km of Russia Beyond, and both are given among the site’s uncertainties.',
  },
  {
    citation:
      '“78 Years Ago: Soviet-Finnish War Began”, Russia Beyond',
    publisher:
      'Russia Beyond (Rossiya Segodnya)',
    url:
      'https://www.rbth.com/history/326856-soviet-finnish-war',
    usedFor:
      'The other account of the same frontier: that after the Moscow Peace Treaty the border was moved ' +
      'from Leningrad, 120 km into the territory of the Karelian Isthmus. Russia Beyond is backed by the ' +
      'Russian state, which is worth knowing while its figure stands against the 150 km of Spartacus ' +
      'Educational.',
  },
  {
    citation:
      'Ubootwaffe, “U-boat Losses in May 1943: Fates of the U-boats”, German U-boats of WWII',
    publisher:
      'uboat.net',
    url:
      'https://www.uboat.net/fates/may43.htm',
    usedFor:
      'The losses of the U-boat arm in May 1943, given twice on the same page and differently: 40 U-boats ' +
      'lost in the month, 25% of the operational strength, at the head of the page, and 42 U-boats with ' +
      '1,832 men dead in its own list of losses at the foot. Both are quoted; this atlas prints no single ' +
      'figure for May 1943.',
  },
  {
    citation:
      '“Operation Paukenschlag (Drumbeat)”, Codenames: Operations and Codenames of WWII',
    publisher:
      'Codenames.info; the address is the Internet Archive copy of 9 October 2024, used because ' +
      'codenames.info refused the machine that assembled this bibliography',
    url:
      'https://web.archive.org/web/20241009044852/https://codenames.info/operation/paukenschlag/',
    usedFor:
      'The first U-boat to reach the east coast of the USA on 13 January, and the toll of the Second Happy ' +
      'Time: 609 ships of 3.1 million tons for the loss of only 22 U-boats, which is the sentence the ' +
      'Battle of the Atlantic card prints. The page’s own table dates the operation from 11 January 1942.',
  },
  {
    citation:
      'United States Holocaust Memorial Museum, “Treblinka: Chronology”',
    publisher:
      'United States Holocaust Memorial Museum; the address is a copy of the museum’s chronology of 5 June ' +
      '2011 held by the Internet Archive, used because encyclopedia.ushmm.org could not be reached from ' +
      'the machine that assembled this bibliography',
    url:
      'https://web.archive.org/web/20110605134236/http://www.ushmm.org/wlc/en/article.php?ModuleId=10007257',
    usedFor:
      'The chronology this atlas follows for the deportations from the Warsaw ghetto: about 265,000 Jews ' +
      'sent to Treblinka II from July until 5 September 1942, the killing centres built at Belzec, Sobibor ' +
      'and Treblinka II, Treblinka II beginning work on 23 July 1942, and the labour camp near Malkinia, ' +
      'about 50 miles from Warsaw — a village, not the camp, so it is not used as the distance to ' +
      'Treblinka.',
  },
  {
    citation:
      'Encyclopædia Britannica, “Warsaw Ghetto Uprising”',
    publisher:
      'Encyclopædia Britannica; the address is a copy of 1 February 2016 held by the Internet Archive, ' +
      'used because britannica.com answers this machine with a bot check, a browser included',
    url:
      'https://web.archive.org/web/20160201140933/http://www.britannica.com/event/Warsaw-Ghetto-Uprising',
    usedFor:
      'The deportations from the Warsaw ghetto from 22 July 1942 at more than 5,000 Jews a day, the ' +
      '265,000 shipped to Treblinka between July and September, the some 55,000 who remained, and the ' +
      'nearly 500,000 people living within its 840 acres (340 hectares) by the summer of 1942. The 265,000 ' +
      'is the figure this atlas prints.',
  },  {
    citation:
      '“Marco Polo Bridge incident”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Marco_Polo_Bridge_incident',
    usedFor:
      'The article behind this atlas’s opening day: Japanese troops exercising at Fengtai on the night of ' +
      '7 July 1937, the demand to enter Wanping to search for a missing soldier, the 219th Regiment, 37th ' +
      'Division, 29th Army refusing it — a sentence the page marks as needing a reference — reinforcements ' +
      'on both sides, and the three-point agreement and ceasefire the article says failed to de-escalate. ' +
      'Its infobox dates the fighting 7–9 July 1937.',
  },
  {
    citation:
      '“Second Sino-Japanese War”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Second_Sino-Japanese_War',
    usedFor:
      'The article that frames the war this atlas opens on: its own dates run from the Marco Polo Bridge ' +
      'incident on 7 July 1937 to the surrender on 2 September 1945, the span this atlas covers in China, ' +
      'and it carries the wider course of the war — the Nationalist government’s retreat to Chongqing and ' +
      'the Soviet declaration of war in August 1945 — around the entries dated to single months.',
  },
  {
    citation:
      '“Battle of Shanghai”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Battle_of_Shanghai',
    usedFor:
      'The days and the scale of the fighting for Shanghai, which no other publisher in this atlas’s reach ' +
      'gives: the article’s infobox runs the battle from 13 August to 26 November 1937, its first phase ' +
      'heading reads “First phase (August 13–22)”, and its text puts over 700,000 Chinese against nearly ' +
      '200,000 Japanese troops in early October. Its own strength and casualty figures stand in the ' +
      'uncertainties list.',
  },
  {
    citation:
      '“Battle of Nanking”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Battle_of_Nanking',
    usedFor:
      'Dates the article carries alone: the order of 12 November 1937 that the Japanese forces at Shanghai ' +
      'pursue the retreating Chinese, the fighting for the outer line of defence headed 5–9 December, and ' +
      'the city fallen by 13 December. Its infobox range of 100,000–300,000 killed and Askew’s study of ' +
      'the burial-society records are entered in the uncertainties list; the court’s figure is from ' +
      'another publisher.',
  },
  {
    citation:
      '“Battle of Wuhan”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Battle_of_Wuhan',
    usedFor:
      'The article this atlas follows for the campaign’s span, 11 June to 27 October 1938, and for its ' +
      'end: the town fell on 26 October and Hanyang the next day, which concluded the campaign. It also ' +
      'treats the fighting in Guangzhou within the same campaign, and puts the opening of the Yellow River ' +
      'dikes at Huayuankou on 9 June, with civilian deaths of 500,000 to 900,000 — figures held in the ' +
      'uncertainties list.',
  },
  {
    citation:
      '“1938 Yellow River flood”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/1938_Yellow_River_flood',
    usedFor:
      'The flood the map draws nowhere, because a breached dike is not a border. The article dates the ' +
      'breach of the levees at Huayuankou, Zhongmu County, to 13 June 1938 and attributes it to the ' +
      'National Revolutionary Army, and gives tolls from 30,000 to 89,000, from 400,000 to 500,000, and a ' +
      'discredited 893,303; those widths are why the flood stands in the uncertainties list.',
  },
  {
    citation:
      '“Canton Operation”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Canton_Operation',
    usedFor:
      'The landing at Guangzhou whose companion halt the atlas prints, and the article the atlas’s date ' +
      'for the city rests on: its infobox dates the operation from 12 October to 29 October 1938 and its ' +
      'purpose was to close the Canton–Hankow railway and blockade the city. The article carries a banner ' +
      'asking for more references, which is why no day from it is printed on the map.',
  },
  {
    citation:
      '“First Vienna Award”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/First_Vienna_Award',
    usedFor:
      'Figures kept off the map because the publishers do not agree: the article puts the territory at ' +
      '14,106 km², of which 12,124 km² in Slovakia and 1,982 km² in Carpathian Ruthenia, Slovakia’s loss ' +
      'alone at 10,390 km² with 854,277 inhabitants, and the people in the territory at 1,346,000, with ' +
      '935,000 as its own estimate grown from the 1930 census.',
  },
  {
    citation:
      '“Treaty of Trianon”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Treaty_of_Trianon',
    usedFor:
      'The human cost behind the frontier this atlas draws in 1938: the article puts the Hungarians who ' +
      'became minorities in the successor states at 3.3 million. No second publisher consulted here prints ' +
      'the figure, so the atlas says only millions where it has to refer to the people the treaty divided.',
  },
  {
    citation:
      '“Moscow Peace Treaty”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Moscow_Peace_Treaty',
    usedFor:
      'The terms of the peace signed on 12 March 1940: the article puts the land ceded at 9% of Finnish ' +
      'territory, the evacuation at 422,000 Finns, and the lease of the Hanko Peninsula as a naval base at ' +
      'an annual rent of 8 million marks. Neither the evacuation figure nor the rent is printed on the ' +
      'map; the first is disputed between three publishers and entered in the uncertainties list.',
  },
  {
    citation:
      '“Winter War”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Winter_War',
    usedFor:
      'The distance this atlas prints, and the Soviet demands behind the frontier it draws: the article ' +
      'puts the pre-war Finnish frontier 32 km (20 mi) from Leningrad, dates the invitation to a Finnish ' +
      'delegation to Moscow to 5 October 1939, and records the demand that the border on the Karelian ' +
      'Isthmus move to a point 30 km (19 mi) east of Viipuri with its fortifications destroyed.',
  },
  {
    citation:
      '“Siege of Tobruk”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Siege_of_Tobruk',
    usedFor:
      'The relief this atlas dates to late November 1941: the breakout on 21 November, the attack on the ' +
      'Ed Duda ridge ordered by Major General Ronald Scobie on 26 November, and the lead’s 231 days, the ' +
      'infobox running 10 April to 27 November 1941. Two other publishers give other ends, so the day ' +
      'stays out of the map; the shipping totals are entered in the uncertainties list.',
  },
  {
    citation:
      '“Battle of the Atlantic”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Battle_of_the_Atlantic',
    usedFor:
      'The day this entry is dated to: the article puts the first U-boats in United States waters on 13 ' +
      'January 1942. It also gives the May 1943 loss as 43 U-boats, 34 in the Atlantic, and 25% of the ' +
      'U-boat arm’s operational strength — a number its own Black May article repeats, so it is one ' +
      'encyclopedia speaking twice, and it stands in the uncertainties list against the other counts.',
  },
  {
    citation:
      '“Second Happy Time”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Second_Happy_Time',
    usedFor:
      'The tonnage figure on this entry and what it covers: 609 ships of 3.1 million tons for the loss of ' +
      '22 U-boats is the article’s total for the Second Happy Time on the American coast, which it brings ' +
      'to an end about August of that year, and not a figure for the whole battle. An earlier version of ' +
      'this atlas gave a monthly tonnage no publisher prints; that figure has been removed.',
  },
  {
    citation:
      '“Black May (World War II)”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Black_May_(World_War_II)',
    usedFor:
      'The end of the North Atlantic wolfpacks. The article dates the fighting to 29 April – 24 May 1943 ' +
      'and has Admiral Dönitz order a temporary halt of U-boat operations in the North Atlantic on 24 May ' +
      '1943; it also gives the May losses as 43 U-boats and 25 per cent of the operational force. No other ' +
      'account of that day was reached, so 24 May is printed as an attributed date.',
  },
  {
    citation:
      '“Fall of Singapore”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Fall_of_Singapore',
    usedFor:
      'The prisoner totals the atlas reports alongside another publisher’s: about 80,000 captured on the ' +
      'island and 50,000 in Malaya. The infobox gives 31,000 to 57,000 civilians killed in the battle and ' +
      'the Sook Ching massacre, while the text puts about 7,000 civilians dead in the fighting, not ' +
      'counting earlier bombing. Of roughly 40,000 Indian personnel it makes about 30,000 Indian National ' +
      'Army recruits.',
  },
  {
    citation:
      '“Grossaktion Warsaw”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Grossaktion_Warsaw',
    usedFor:
      'The deportations from the Warsaw ghetto: the article gives 254,000 to 265,000 sent to Treblinka, ' +
      'dates the action 23 July to 21 September 1942 and Himmler’s order to 19 July 1942, gives the daily ' +
      'quota as 5,000 to 6,000 for eight weeks at 100 people to a cattle truck, and has Adam Czerniaków ' +
      'take his life on 23 July. These figures are measured against other publishers in the uncertainties ' +
      'list.',
  },
  {
    citation:
      '“Warsaw Ghetto”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Warsaw_Ghetto',
    usedFor:
      'The population of the ghetto before the deportations, printed in none of the entries: the article ' +
      'gives an initial 450,000 people confined to 307 hectares (760 acres) and between 375,000 and ' +
      '400,000 before the mass killings began, figures the uncertainties list sets against POLIN and ' +
      'Encyclopædia Britannica. It also carries the Jewish Council, the Judenrat, through which the German ' +
      'orders were passed on.',
  },
  {
    citation:
      '“Treblinka extermination camp”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Treblinka_extermination_camp',
    usedFor:
      'The place the transports from the Warsaw ghetto went to. The article puts the two camps of ' +
      'Treblinka 80 km (50 mi) north-east of Warsaw, the distance this atlas prints; the 50 miles in the ' +
      'museum’s chronology is for the rail junction of Malkinia, not the camp. The article’s 11,000 is ' +
      'Jews deported from Thrace and Macedonia, and its 20,000 is the labour camp’s inmate total — neither ' +
      'is people shot in Warsaw.',
  },
  {
    citation:
      '“Operation Astonia”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Operation_Astonia',
    usedFor:
      'The taking of Le Havre, printed in none of the entries: the preparatory bombardment killing over ' +
      '2,000 civilians and 19 German troops, the municipality’s February 1945 assessment of 1,536 dead and ' +
      '517 missing, a second bombing wave of 1,880 long tons, HMS Warspite and Erebus firing more than ' +
      '4,000 long tons, 50,000 civilians left of about 160,000, 11,300 prisoners, the harbour reopened on ' +
      '9 October.',
  },
  {
    citation:
      '“Belgrade offensive”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Belgrade_offensive',
    usedFor:
      'Figures this atlas does not print for this entry: German strength of 150,000 against 580,000 in the ' +
      'article’s infobox, Soviet losses of 4,350 killed and missing, the Bulgarian 1st, 2nd and 4th ' +
      'Armies, and a Soviet brigade reaching the Great Morava valley on 8 October. The article’s infobox ' +
      'dates the fighting 15 September to 24 November 1944; its text puts the breakthrough south of the ' +
      'city on 14 October.',
  },
  {
    citation:
      '“Siege of Budapest”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Siege_of_Budapest',
    usedFor:
      'Details this atlas does not print: the fortress was to be defended to the last man; the Soviet ' +
      'claim to have trapped 180,000 and captured 110,000, followed by thousands of Hungarian civilians ' +
      'rounded up and added to the prisoner-of-war count; the garrison’s Hungarian half as General Iván ' +
      'Hindy’s I Corps, gendarmerie and police and Arrow Cross volunteers; and the ultimatum of 29 ' +
      'December 1944.',
  },
  {
    citation:
      '“Vienna offensive”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Vienna_offensive',
    usedFor:
      'Two things the atlas takes from this article alone: the 139,815 casualties of the 3rd Ukrainian ' +
      'Front from 16 March to 15 April 1945, every other loss figure for the fighting being another ' +
      'publisher’s; and the capture of the Reichsbrücke from the water by the Danube Flotilla with two ' +
      'Guards divisions, the demolition charges the article calls cables cut before the bridge could be ' +
      'blown.',
  },
  {
    citation:
      '“Atomic bombings of Hiroshima and Nagasaki”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Atomic_bombings_of_Hiroshima_and_Nagasaki',
    usedFor:
      'The two raids, the unit that flew them and the width of the toll: the article’s casualty table ' +
      'gives Hiroshima 90,000-166,000 killed and Nagasaki 60,000-80,000 and totals them as 150,000-246,000 ' +
      'killed by the end of 1945, and names the 509th Composite Group as the delivery unit. The ' +
      'Japanese–American Radiation Effects Research Foundation carries the same two city ranges, so the ' +
      'widths printed are not Wikipedia’s alone.',
  },
  {
    citation:
      '“Soviet invasion of Manchuria”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Soviet_invasion_of_Manchuria',
    usedFor:
      'The opening of the campaign in Manchuria, which the article puts just after midnight on 9 August ' +
      '1945, delivered simultaneously on three fronts, and connects to the Yalta promise by saying the ' +
      'Union entered the war in the Pacific within three months of the end in Europe. The declaration of ' +
      'war was made on 8 August, an hour before midnight, which three other publishers print.',
  },
  {
    citation:
      '“Manchukuo”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Manchukuo',
    usedFor:
      'The state whose colour changes in August 1945: the article’s infobox runs from its establishment on ' +
      '1 March 1932, with Puyi as its head, through the Soviet invasion of 9 August 1945 to its ' +
      'dissolution on 20 August 1945, succeeded by the Soviet occupation of Manchuria. No page outside ' +
      'this atlas’s reach has been found for the 20 August date, so the dissolution stays one source.',
  },
  {
    citation:
      '“Surrender of Japan”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Surrender_of_Japan',
    usedFor:
      'The days around the broadcast of 15 August, for which no second publisher was reached: the Allied ' +
      'reply of 12 August, the Imperial conference of the night of 9–10 August, the recording smuggled out ' +
      'of the palace when the coup was foiled on 15 August, and the occupation beginning on 28 August. It ' +
      'also dates the end of the state of war to 28 April 1952; no other account here gives that day.',
  },
  {
    citation:
      '“Japanese Instrument of Surrender”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Japanese_Instrument_of_Surrender',
    usedFor:
      'The signing on 2 September 1945 and the states that signed it. The article puts the effect of the ' +
      'instrument at 09:25 Japan standard time that day, a moment no other account in this atlas’s reach ' +
      'gives, and lists the signatory states; the ceremony itself, aboard the Missouri with Wainwright and ' +
      'Percival among the signatories, is published by the State Department.',
  },
  {
    citation:
      '“Division of Korea”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Division_of_Korea',
    usedFor:
      'The line this atlas draws in Korea and the days it was drawn: the article dates the proposal to ' +
      'divide the peninsula to 10 August 1945, General Order No. 1 to 17 August, the Soviet landing at ' +
      'Wonsan to 16 August, Soviet troops occupying the north by 24 August and taking Pyongyang that day. ' +
      'The line itself is published outside this article by the State Department.',
  },
  {
    citation:
      '“United States Army Military Government in Korea”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/United_States_Army_Military_Government_in_Korea',
    usedFor:
      'The south of the peninsula on this atlas’s map: the article runs the military government from 9 ' +
      'September 1945, the day after the landings of 8 September on which the entry is dated, under ' +
      'Lieutenant General John R. Hodge. Those two days come from this one article; the division behind ' +
      'them is published by the State Department and The Canadian Encyclopedia.',
  },
  {
    citation:
      '“Soviet invasion of South Sakhalin”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Soviet_invasion_of_South_Sakhalin',
    usedFor:
      'The date Karafuto changes colour in the world layer: the article’s infobox runs the offensive from ' +
      '11 to 25 August 1945 in Karafuto Prefecture, which is the span this atlas uses for the island. It ' +
      'has no outline in the European layer and is drawn outside Europe only; the article is the only ' +
      'account in this atlas’s reach for those days.',
  },
  {
    citation:
      '“Soviet invasion of the Kuril Islands”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Soviet_invasion_of_the_Kuril_Islands',
    usedFor:
      'The date the Kuril Islands change colour in the world layer: the article’s infobox runs the ' +
      'invasion from 18 August to 2 September 1945, beginning at Shumshu, and this atlas uses that span ' +
      'for the chain. Like Sakhalin it is drawn outside Europe only; the article is the only account in ' +
      'this atlas’s reach for those days.',
  },  {
    citation:
      'The French Yellow Book, No. 69: Count von Welczeck, German Ambassador in Paris, to M. Georges ' +
      'Bonnet, French Minister for Foreign Affairs, Paris, 15 March 1939 — published in the Avalon Project ' +
      'at the Yale Law School.',
    publisher:
      'Avalon Project, Lillian Goldman Law Library, Yale Law School',
    url:
      'https://avalon.law.yale.edu/wwii/ylbk069.asp',
    usedFor:
      'The French documentary record of the meeting in Berlin, sent on by the ambassador in Paris the same ' +
      'day it was signed, and the only source read here that gives an hour for the entry into Bohemia and ' +
      'Moravia — the frontier crossed at six o’clock in the morning of 15 March. A diplomatic document ' +
      'written while the events were happening, not a later history.',
  },
  {
    citation:
      'Decree of the Fuehrer and Reich Chancellor concerning the Protectorate of Bohemia and Moravia, 16 ' +
      'March 1939 — Document 2119-PS in Nazi Conspiracy and Aggression, Volume IV, published by the Avalon ' +
      'Project at the Yale Law School.',
    publisher:
      'The Avalon Project, Lillian Goldman Law Library, Yale Law School',
    url:
      'https://avalon.law.yale.edu/imt/2119-ps.asp',
    usedFor:
      'The decree itself, in the English translation prepared for the postwar judgement: the text behind ' +
      'the proclamation of the Protectorate of Bohemia and Moravia on 16 March 1939, incorporating the ' +
      'occupied territories into the Greater German Reich, making residents of German origin German ' +
      'nationals, and declaring the country autonomous while the Reich kept its defence.',
  },
  {
    citation:
      'Speech by the Secretary of State for Foreign Affairs in the House of Lords on 20 March 1939, No. 10 ' +
      'of the British War Blue Book (Cmd 6106, HMSO 1939), published by the Avalon Project at the Yale Law ' +
      'School.',
    publisher:
      'British War Blue Book (Cmd 6106, HMSO 1939) via The Avalon Project, Yale Law School',
    url:
      'https://avalon.law.yale.edu/wwii/blbk10.asp',
    usedFor:
      'The British government’s own account of that week, stated to the Lords five days afterwards, and ' +
      'the page where the two days for Prague meet each other on the record: the military occupation of ' +
      'Bohemia and Moravia began on the morning of 15 March, while Mährisch-Ostrau and Vitkovice were ' +
      'occupied by SS detachments on the evening of the 14th, with the Czech president still on his way to ' +
      'Berlin.',
  },
  {
    citation:
      'Nazi Conspiracy and Aggression, Volume I, Chapter IX, The Plotting of Aggressive War — the American ' +
      'edition of the postwar judgement, published in the Avalon Project at the Yale Law School.',
    publisher:
      'Office of the United States Chief of Counsel for the Prosecution of Axis Criminality, Nazi ' +
      'Conspiracy and Aggression vol. I (US Government Printing Office, 1946), hosted by the Avalon ' +
      'Project, Yale Law School',
    url:
      'https://avalon.law.yale.edu/imt/chap_09.asp',
    usedFor:
      'The postwar judgement on these two days, which states that the agreement of Munich was violated and ' +
      'that Czechoslovakia was invaded on 15 March 1939, and prints the proclamation of the protectorate ' +
      'as a decree signed in Prague on 16 March 1939. A document of the trial rather than a website, and ' +
      'the second publisher for both days.',
  },
  {
    citation:
      '“Occupation of Czechoslovakia (1938–1945)”, _Wikipedia_.',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/German_occupation_of_Czechoslovakia',
    usedFor:
      'The occupation as an encyclopaedia gives it, and the source of the industrial claims this atlas ' +
      'therefore does not print: the Škoda works at Plzeň, and the inventory a Reichstag speech attributed ' +
      'to the occupation — 2,175 field cannons, 469 tanks and 43,000 machine guns, enough to arm about ' +
      'half the Wehrmacht. No second publisher reached here prints those figures.',
  },
  {
    citation:
      'Second World War timeline, NZ History, the New Zealand government’s war record — archived capture ' +
      'of 25 April 2026.',
    publisher:
      'NZ History, Manatū Taonga — Ministry for Culture and Heritage, Internet Archive copy of 25 April ' +
      '2026',
    url:
      'https://web.archive.org/web/20260425155416/https://nzhistory.govt.nz/war/second-world-war/timeline',
    usedFor:
      'New Zealand’s own timeline, read through the Internet Archive because the live site refuses this ' +
      'machine. The only source found that puts the German entry into Prague a day earlier, printing 14 ' +
      'March for the occupation of Prague; it also dates the Anglo-French guarantee to Poland to 31 March ' +
      'and Canada’s entry to 10 September.',
  },
  {
    citation:
      'Nazi-Soviet Relations 1939-1941: the Secret Additional Protocol to the German-Soviet Non-Aggression ' +
      'Pact, 23 August 1939 — published in the Avalon Project at the Yale Law School.',
    publisher:
      'The Avalon Project, Yale Law School (Nazi-Soviet Relations 1939-1941)',
    url:
      'https://avalon.law.yale.edu/20th_century/addsepro.asp',
    usedFor:
      'The secret protocol of 23 August 1939 in its own words: the two governments discussed the boundary ' +
      'of their respective spheres of influence in eastern Europe in strictly confidential conversations, ' +
      'and the document is dated Moscow, August 23, 1939. Read because the frontier settlements of 1939 ' +
      'and 1941 rest on it, and because its existence was denied for two years after it was signed.',
  },
  {
    citation:
      'What’s the context? 31 March 1939: the British guarantee to Poland, History of government — the ' +
      'blog of The National Archives and the Prime Minister’s Office, 10 Downing Street.',
    publisher:
      'History of government blog, The National Archives and 10 Downing Street',
    url:
      'https://history.blog.gov.uk/2019-03-28/whats-the-context-31-march-1939-the-british-guarantee-to-poland/',
    usedFor:
      'The British government’s own historians on the guarantee that followed the Prague entry, dating it ' +
      'to 31 March 1939 with the words Chamberlain told the House of Commons that day, and setting it in ' +
      'the parliamentary and intelligence background, including the Foreign Office record of the French ' +
      'reaction. One of the three publishers that print the same day for the guarantee.',
  },
  {
    citation:
      'The British guarantee to Poland (31 March 1939), TheSecondWar.pl.',
    publisher:
      'TheSecondWar.pl',
    url:
      'https://thesecondwar.pl/en/british-guarantee-to-poland',
    usedFor:
      'The guarantee as a second publisher dates it, 31 March 1939. The same page puts the German entry ' +
      'into Bohemia and Moravia on 15 March, records that Hitler slept that night at Prague Castle, and ' +
      'treats the breaking of the Munich agreement as the end of appeasement — the end this atlas adopts ' +
      'in its own words.',
  },
  {
    citation:
      '“1939 German ultimatum to Lithuania”, _Wikipedia_.',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/1939_German_ultimatum_to_Lithuania',
    usedFor:
      'The ultimatum of 20 March 1939 and what followed: oral, never set down in writing, and with no ' +
      'formal deadline; the treaty signed at one in the morning on 23 March and dated the 22nd; the ' +
      'convention of 1924; the port’s share of Lithuanian trade; and the judgement that this was Germany’s ' +
      'last territorial acquisition before the war, which the atlas does not make because Danzig was still ' +
      'a Free City.',
  },
  {
    citation:
      '“Klaipėda Region”, _Wikipedia_.',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Klaip%C4%97da_Region',
    usedFor:
      'The territory’s administrative history on both sides of the seizure: the convention of May 1924, ' +
      'which gave the region its own parliament and official languages under Lithuanian sovereignty; the ' +
      'diet election of 1938, whose table gives the unified German list 87.2 per cent and 25 of the 29 ' +
      'seats; and the cession treaty of 1939 with the Lithuanian free zone in the port for ninety-nine ' +
      'years.',
  },
  {
    citation:
      'Germany takes Klaipėda (23 March 1939), TheSecondWar.pl.',
    publisher:
      'TheSecondWar.pl',
    url:
      'https://thesecondwar.pl/en/germany-takes-klaipeda',
    usedFor:
      'The settlement from the German and the Lithuanian side: Wehrmacht units and the fleet entering the ' +
      'port, Hitler arriving aboard the pocket battleship Deutschland and speaking from the municipal ' +
      'theatre’s balcony; the people who fled and those who had to leave; the port as Lithuania’s only ' +
      'large port and a third of its industry; the free zone promised in return; and the four guarantors ' +
      'of the 1924 convention, none of which protested.',
  },
  {
    citation:
      'The German ultimatum to Lithuania (20 March 1939), TheSecondWar.pl.',
    publisher:
      'TheSecondWar.pl',
    url:
      'https://thesecondwar.pl/en/german-ultimatum-to-lithuania',
    usedFor:
      'A second account from the same publisher: the demand of 20 March put orally, with no deadline and ' +
      'the warning that the army would have its say if German blood were shed; the diet election of 11 ' +
      'December 1938 that made the region’s resentment legislative; and Poland’s reading of the seizure, ' +
      'with the question of whether Danzig would be next asked in Warsaw, London and Paris.',
  },
  {
    citation:
      'Address by Neville Chamberlain to the House of Commons on the German reply to the British ' +
      'ultimatum, 3 September 1939 — published in the Avalon Project at the Yale Law School.',
    publisher:
      'Avalon Project, Lillian Goldman Law Library, Yale Law School',
    url:
      'https://avalon.law.yale.edu/wwii/gb2.asp',
    usedFor:
      'The Prime Minister’s own statement to the Commons, which prints the ultimatum sent that morning and ' +
      'the limit it set — eleven in the morning, British Summer Time, on 3 September — and records that no ' +
      'such undertaking was received. The hour Britain set is therefore the expiry of the ultimatum, not ' +
      'the hour of the broadcast. The French ambassador’s similar démarche with a time limit of his own is ' +
      'here, without an hour.',
  },
  {
    citation:
      'Radio address by Neville Chamberlain, Prime Minister, to the nation, 3 September 1939 — published ' +
      'in the Avalon Project at the Yale Law School.',
    publisher:
      'Avalon Project, Lillian Goldman Law Library, Yale Law School',
    url:
      'https://avalon.law.yale.edu/wwii/gb3.asp',
    usedFor:
      'The broadcast itself, made from the Cabinet Room at 10 Downing Street, in which the Prime Minister ' +
      'reads back the ultimatum’s eleven o’clock limit and tells the nation that consequently this country ' +
      'is at war with Germany. Read to keep the two hours apart: the hour named in the broadcast is the ' +
      'expiry of the ultimatum, not the time the speech began.',
  },
  {
    citation:
      'Diplomatic countdown to war, Historians of the Cabinet Office, History of government — the blog of ' +
      'The National Archives and the Prime Minister’s Office, 3 September 2019.',
    publisher:
      'History of government blog, The National Archives and 10 Downing Street',
    url:
      'https://history.blog.gov.uk/2019-09-03/diplomatic-countdown-to-war',
    usedFor:
      'The British government’s own historians on the weekend of 1 to 3 September 1939, and the second ' +
      'publisher for a quarter past eleven as the hour of the broadcast; the French ambassador calling at ' +
      'midday to hand over his government’s text and being kept waiting while the new Soviet ambassador ' +
      'was presented; and the Polish appeals for air support, which Britain refused for fear of German ' +
      'reprisals against London.',
  },
  {
    citation:
      'Britain and France declare war on Germany (3 September 1939), TheSecondWar.pl.',
    publisher:
      'TheSecondWar.pl',
    url:
      'https://thesecondwar.pl/en/britain-and-france-declare-war-on-germany',
    usedFor:
      'The day on both western sides: the German answer rejected by telephone, the broadcast at a quarter ' +
      'past eleven after the ultimatum expired at eleven, the French note with its own deadline, and the ' +
      'dominions — India, Australia and New Zealand the same day, South Africa and Canada in the following ' +
      'days. This is the only publisher read here that gives the French deadline as five in the afternoon.',
  },
  {
    citation:
      'New Zealand declares war on Germany, NZ History, Manatū Taonga — Ministry for Culture and Heritage ' +
      '— archived capture of 22 November 2025.',
    publisher:
      'NZ History, Manatū Taonga — Ministry for Culture and Heritage, Internet Archive copy of 22 November ' +
      '2025',
    url:
      'https://web.archive.org/web/20251122191412/https://nzhistory.govt.nz/new-zealand-declares-war-on-germany',
    usedFor:
      'New Zealand’s declaration read in New Zealand, from the government’s own archive capture: ' +
      'simultaneous with Britain’s at the expiry of the ultimatum, which this record prints as eleven in ' +
      'the morning British Summer Time; the Wellington broadcast that evening; and the offer of an ' +
      'expeditionary force made before Britain had made one. Read for the dominions’ days, and for the ' +
      'fact that New Zealand’s own record prints only the British hour.',
  },
  {
    citation:
      'Canada and the War, Democracy at War: Canadian Newspapers and the Second World War, The Canadian ' +
      'War Museum.',
    publisher:
      'The Canadian War Museum',
    url:
      'https://www.warmuseum.ca/cwm/exhibitions/newspapers/canadawar/parliament_e.html',
    usedFor:
      'The Canadian War Museum’s account of the week: Parliament called into special session on September ' +
      '7, and after the debate the King declared war in the name of Canada on September 10, exactly a week ' +
      'after Britain — the week this atlas gives for the dominions whose days it does not name one by one.',
  },
  {
    citation:
      'Government of Canada Commemorates the 75th Anniversary of Canada’s Engagement in the Second World ' +
      'War, backgrounder, Government of Canada.',
    publisher:
      'Government of Canada',
    url:
      'https://www.canada.ca/en/news/archive/2014/10/government-canada-commemorates-75th-anniversary-canada-engagement-second-world-war.html',
    usedFor:
      'The Canadian day from the government’s own commemorative record, to stand beside the War Museum’s: ' +
      '3 September for Britain and France, and Canada’s own declaration when the King made the ' +
      'announcement on 10 September, which that record calls the first time Canada declared war of its own ' +
      'accord. Both Canadian publishers used here are official ones, and neither prints a day for South ' +
      'Africa.',
  },
  {
    citation:
      'Saar Offensive (Sep. 7–16, 1939) Summary & Facts, Totally History.',
    publisher:
      'Totally History',
    url:
      'https://totallyhistory.com/saar-offensive/',
    usedFor:
      'A second publisher for the dates of the French advance into Germany’s borderland: the fighting ' +
      'given as 7 to 16 September 1939, the front line about five miles inside German territory by 12 ' +
      'September, and the withdrawal reaching 17 October on this page while the same site’s own summary ' +
      'puts the end of the fighting in mid-September.',
  },
  {
    citation:
      'The Saar Offensive begins (7 September 1939), TheSecondWar.pl.',
    publisher:
      'TheSecondWar.pl',
    url:
      'https://thesecondwar.pl/en/saar-offensive-begins',
    usedFor:
      'The French offensive in detail: the advance of some eight kilometres to the outposts of the ' +
      'Siegfried Line against an enemy ordered to evacuate, and the return behind the Maginot Line in ' +
      'early October. This is also the only source read here for the Franco-Polish military protocol of 19 ' +
      'May 1939, signed by Gamelin and the Polish minister of military affairs.',
  },
  {
    citation:
      'The German Declaration of War with the United States, 11 December 1941 — published in the Avalon ' +
      'Project at the Yale Law School.',
    publisher:
      'Avalon Project, Lillian Goldman Law Library, Yale Law School',
    url:
      'https://avalon.law.yale.edu/wwii/gerdec41.asp',
    usedFor:
      'The proclamation of 11 December 1941 by which the German government declared that it too considered ' +
      'itself in a state of war with the United States, two years and three months after the day recorded ' +
      'here, and its stated reason, that the American government had abandoned the rules of neutrality. ' +
      'Read for the bearing of 1939 on the wider war.',
  },
  {
    citation:
      '“British declaration of war on Germany (1939)”, _Wikipedia_.',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/British_declaration_of_war_on_Germany_(1939)',
    usedFor:
      'The declaration’s own history, and the source of the guarantee’s dates: the assurance presented to ' +
      'the Commons on 31 March 1939, formalised by the British on 6 April, and not ratified by the French ' +
      'until 4 September, the day after the war began. A second publisher for 31 March, and the reason no ' +
      'French ratification date is given.',
  },
  {
    citation:
      'Churchill and the Norway Debate: two days in the Commons Chamber in May 1940, The Hansard Society, ' +
      '7 May 2020.',
    publisher:
      'The Hansard Society',
    url:
      'https://www.hansardsociety.org.uk/blog/two-days-in-the-commons-chamber-that-took-churchill-to-no-10-the-norway',
    usedFor:
      'The society that exists to study parliamentary record and procedure, on the debate that ended ' +
      'Chamberlain’s government: two days in the Commons Chamber, 7 and 8 May 1940; Labour’s decision on ' +
      'the morning of Wednesday 8 May to call a division, making it a vote of confidence; the division at ' +
      'eleven at night; and the judgement that 281 to 200 was a clear political defeat.',
  },
  {
    citation:
      '“Norway Debate”, _Wikipedia_.',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Norway_Debate',
    usedFor:
      'The debate as an encyclopaedia gives it, from 7 to 9 May 1940, with its own section headings ' +
      'putting the division on 8 May and the conclusion on 9 May. It prints 281 to 200 and a majority ' +
      'reduced to 81, and counts 41 government members voting with the Opposition with an estimated 60 ' +
      'abstaining, a different count from the other publisher’s thirty-nine.',
  },
  {
    citation:
      'The Cabinet Crisis, May 1940, Museum of the Prime Minister.',
    publisher:
      'Museum of the Prime Minister',
    url:
      'https://www.museumofpm.org/articles/the-cabinet-crisis-may-1940',
    usedFor:
      'The museum of the Prime Minister on the fortnight: two days from 7 to 9 May, a government that won ' +
      'by 81 votes after a vote on 8 May, the choice between Halifax and Churchill, and the change on 10 ' +
      'May 1940. It is the only page here that states Halifax’s reason, and it dates the guarantee to ' +
      'Poland 30 March, a day before every other publisher that gives the guarantee at all.',
  },
  {
    citation:
      'Blood, toil, tears and sweat (13 May 1940), TheSecondWar.pl.',
    publisher:
      'TheSecondWar.pl',
    url:
      'https://thesecondwar.pl/en/blood-toil-tears-and-sweat',
    usedFor:
      'The first sitting of the new government’s Commons, which dates the old one: members had last sat on ' +
      '8 May, when the division that closed the Norway Debate left Chamberlain’s majority at 81. It gives ' +
      'the debate as 7 and 8 May, the result as 281 to 200, and the division on the new government’s ' +
      'address on 13 May, carried by 381 votes — a different division from the one that fell Chamberlain.',
  },
  {
    citation:
      '“1940 British war cabinet crisis”, _Wikipedia_.',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/War_cabinet_crisis,_May_1940',
    usedFor:
      'The succession in detail, and the hours in it: Labour agreed to serve only under Churchill after ' +
      'talks at 10 Downing Street on the evening of 9 May, and the war cabinet that followed was ' +
      'restricted to five members at the outset, with Attlee as Lord Privy Seal until February 1942. It ' +
      'gives the debate as 7 and 8 May; read for the make-up of the new government rather than its days.',
  },
  {
    citation:
      'War Situation, House of Commons Debates, 4 June 1940: HC Deb 04 June 1940 vol 361 cc787-98, UK ' +
      'Parliament.',
    publisher:
      'House of Commons Debates (Hansard), UK Parliament',
    url:
      'https://api.parliament.uk/historic-hansard/commons/1940/jun/04/war-situation',
    usedFor:
      'The official report of the day named for the speech about the beaches, entered under WAR SITUATION ' +
      'with the reference HC Deb 04 June 1940 vol 361 cc787-98. Read to fix the day of the speech and the ' +
      'parliamentary reference behind it, and for nothing else.',
  },
  {
    citation:
      'Three-Power Pact between Germany, Italy and Japan, signed at Berlin, 27 September 1940 — published ' +
      'in the Avalon Project at the Yale Law School.',
    publisher:
      'Avalon Project, Lillian Goldman Law Library, Yale Law School',
    url:
      'https://avalon.law.yale.edu/wwii/triparti.asp',
    usedFor:
      'The pact in its own six articles: the three governments agreeing to co-operate in establishing a ' +
      'new order of things, the third article undertaking mutual political, economic and military ' +
      'assistance if one of them were attacked by a power not then involved in the European or the ' +
      'Chinese-Japanese war, the article preserving each party’s relations with Soviet Russia, the ' +
      'ten-year term, and the signature at Berlin on 27 September 1940.',
  },
  {
    citation:
      'Announcement and text of the German-Italian-Japanese Three Power Pact, IMT document PS-2643, page ' +
      '1219 of the trial — in the Nuremberg Trials Document Viewer of the Harvard Law School Library.',
    publisher:
      'Harvard Law School Library, Nuremberg Trials Project',
    url:
      'https://nuremberg.law.harvard.edu/documents/1159-announcement-and-text-of-the-german-italian-japanese?mode=text',
    usedFor:
      'The same pact as an exhibit of the postwar trial, in a second translation and from a second ' +
      'archive, so neither the day nor the articles rest on a single reprint. The archive’s own note ' +
      'supplies three dates where one is printed here — signed 27 September, announced by Ribbentrop 25 ' +
      'November, published 28 November 1940 — and records that the Japanese representative who signed it ' +
      'is not named on the document.',
  },
  {
    citation:
      '“Tripartite Pact”, _Wikipedia_.',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Tripartite_Pact',
    usedFor:
      'The pact as an encyclopaedia reads it, and the page that carries the accessions with their days: ' +
      'Hungary on 20 November 1940, Romania on the 23rd, Slovakia on the 24th, Bulgaria on 1 March 1941 ' +
      'and Yugoslavia on 25 March, with the coup in Belgrade two days after the Yugoslav signing, the ' +
      'Croatian accession in June 1941, the protocol of 11 December 1941, and the Sofia ratification by ' +
      '140 votes to 20.',
  },
  {
    citation:
      'Hungary, Romania and Slovakia join the Tripartite Pact (20 November 1940), TheSecondWar.pl.',
    publisher:
      'TheSecondWar.pl',
    url:
      'https://thesecondwar.pl/en/hungary-romania-and-slovakia-join-the-tripartite-pact',
    usedFor:
      'The three accessions of November 1940: Hungary signed in the Belvedere in Vienna on 20 November, ' +
      'Romania in Berlin on the 23rd and Slovakia on the 24th, dates the site says are confirmed by the ' +
      'protocols and by German diplomatic documents. It lists what Hungary regained, southern Slovakia ' +
      'from the First Vienna Award of November 1938 among it, which is where this atlas takes that award’s ' +
      'month.',
  },
  {
    citation:
      'Bulgaria joins the Tripartite Pact (1 March 1941), TheSecondWar.pl.',
    publisher:
      'TheSecondWar.pl',
    url:
      'https://thesecondwar.pl/en/bulgaria-joins-the-tripartite-pact',
    usedFor:
      'The Bulgarian accession: 1 March 1941 in the Belvedere in Vienna, where the Prime Minister signed ' +
      'the protocol with Ribbentrop, Ciano and the Japanese ambassador, making Bulgaria the seventh ' +
      'member; the hour of a quarter past one, given on the authority of the Regional History Museum in ' +
      'Sofia, the only such authority reached here; and the ratification on 2 March by 140 votes to 20, ' +
      'after the government prevented a debate.',
  },
  {
    citation:
      'Pact between the Axis powers barring a separate peace with the United States or Great Britain, 11 ' +
      'December 1941, with the protocol to the Tripartite Pact — published in the Avalon Project at the ' +
      'Yale Law School.',
    publisher:
      'Avalon Project, Lillian Goldman Law Library, Yale Law School',
    url:
      'https://avalon.law.yale.edu/wwii/tripart.asp',
    usedFor:
      'The protocol of 11 December 1941 which turned the defensive alliance of 1940 into a joint war ' +
      'against America: the three powers agreed to conduct jointly a war imposed on them by the United ' +
      'States and England until the end of hostilities, and forbade either to conclude an armistice or ' +
      'peace without complete and reciprocal agreement. The fourth article keeps it in force for the ' +
      'duration of the pact of 27 September 1940.',
  },
  {
    citation:
      'Agreement between the United Kingdom and the Union of Soviet Socialist Republics, 12 July 1941 — ' +
      'published in the Avalon Project at the Yale Law School.',
    publisher:
      'Avalon Project, Lillian Goldman Law Library, Yale Law School',
    url:
      'https://avalon.law.yale.edu/wwii/brsov41.asp',
    usedFor:
      'The agreement of 12 July 1941 itself, two clauses and no more: mutual assistance and support of all ' +
      'kinds in the present war against Hitlerite Germany, and no armistice or peace except by mutual ' +
      'agreement. Signed by Cripps for Britain and Molotov for the Soviet Union, and dated on its face ' +
      'Moscow, the twelfth of July 1941. There is no secret protocol in this copy.',
  },
  {
    citation:
      '“Anglo-Soviet Agreement”, _Wikipedia_.',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Anglo-Soviet_Agreement',
    usedFor:
      'The agreement’s shape and one consequence: signed on 12 July 1941 by Cripps and Molotov, it did not ' +
      'require ratification and was to be valid until the end of the war against Nazi Germany; three weeks ' +
      'of difficult negotiations preceded it. The two clauses appear here in the same words as in the ' +
      'document itself. It records the Arctic convoys beginning the following month, and the invasion of ' +
      'Iran in the same month.',
  },
  {
    citation:
      'Lend-Lease for the USSR (30 October 1941), TheSecondWar.pl.',
    publisher:
      'TheSecondWar.pl',
    url:
      'https://thesecondwar.pl/en/lend-lease-for-the-ussr',
    usedFor:
      'The supply story on the other side of the alliance, and a second publisher for the day of the ' +
      'agreement: Cripps and Molotov signing in the Kremlin on 12 July 1941, mutual help, no separate ' +
      'peace. It has the Moscow conference, the delegations arriving on 28 September 1941, and the ' +
      'protocol signed on 1 October by Beaverbrook, Harriman and Molotov — the first Moscow protocol, ' +
      'covering October 1941 to June 1942.',
  },
  {
    citation:
      '“Moscow Conference (1941)”, _Wikipedia_.',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Moscow_Conference_(1941)',
    usedFor:
      'The conference that turned the July agreement into a supply programme: the delegates flew in on 28 ' +
      'September 1941 and the first protocol was signed on 1 October, running to June 1942 and promising ' +
      '400 aircraft, 500 tanks and 10,000 trucks a month. It dates the conference 29 September to 1 ' +
      'October, a day later at the start than the publishers of the delegations’ arrival give.',
  },
  {
    citation:
      'Foreign Relations of the United States, 1941, Volume I, Document 798: the President’s Special ' +
      'Representative (Harriman) to President Roosevelt, London, 29 October 1941 — Office of the ' +
      'Historian, US Department of State.',
    publisher:
      'Office of the Historian, US Department of State',
    url:
      'https://history.state.gov/historicaldocuments/frus1941v01/d798',
    usedFor:
      'The American official record, from the man who signed for the United States: the American and ' +
      'British missions arrived in Moscow on September 28th, and the attached protocol was signed as of ' +
      'October 1, 1941. The protocol’s own text, the page notes, is printed in the State Department’s ' +
      'volume Soviet Supply Protocols. A despatch rather than a history, and a second publisher for both ' +
      'the arrival and the signature.',
  },
  {
    citation:
      'Strategic Planning for Coalition Warfare, 1941-1942, chapter 3, by Louis A. Morton, United States ' +
      'Army in World War II — published by the HyperWar Foundation.',
    publisher:
      'Louis Morton, Strategic Planning for Coalition Warfare 1941–1942, US Army in World War II (HyperWar)',
    url:
      'https://www.ibiblio.org/hyperwar/USA/USA-WD-Strategic1/USA-WD-Strategic1-3.html',
    usedFor:
      'The US Army’s official history of the same conference, and a third publisher for the day of the ' +
      'protocol: the munitions agreement reached at Moscow was incorporated in the first Moscow protocol, ' +
      'signed by Harriman, Beaverbrook and Molotov on 1 October 1941, and endorsed by Roosevelt and Stalin ' +
      'a month later. It carries the American planning judgment of summer 1941 on how long the Soviet ' +
      'Union would last.',
  },
  {
    citation:
      'Twenty-Year Mutual Assistance Agreement between the United Kingdom and the Union of Soviet ' +
      'Socialist Republics, 26 May 1942 — published in the Avalon Project at the Yale Law School.',
    publisher:
      'Avalon Project, Lillian Goldman Law Library, Yale Law School',
    url:
      'https://avalon.law.yale.edu/wwii/brsov42.asp',
    usedFor:
      'The treaty that replaced the July agreement, signed at London and printed with its full powers — ' +
      'Eden for Britain, Molotov for the Soviet Union. It binds the two governments to military and other ' +
      'aid in the common war, forbids a separate peace, and provides that if no postwar settlement is ' +
      'adopted the treaty shall remain in force for twenty years. The day of signature, 26 May 1942, is ' +
      'printed on the document twice over.',
  },
  {
    citation:
      'Agreement of Mutual Assistance between the United Kingdom and Poland, London, 25 August 1939, No. ' +
      '19 of the British War Blue Book (Cmd 6106, HMSO 1939), published by the Avalon Project at the Yale ' +
      'Law School.',
    publisher:
      'British War Blue Book (Cmd 6106, HMSO 1939) via The Avalon Project, Yale Law School',
    url:
      'https://avalon.law.yale.edu/wwii/blbk19.asp',
    usedFor:
      'The British-Polish treaty of mutual assistance of 25 August 1939, printed in full with its exchange ' +
      'of notes under its own heading, signed for Britain by Halifax and for Poland by Count Edward ' +
      'Raczynski. A second publisher for that day, written in American order, August 25, where other ' +
      'publishers write 25 August: the same day, differently ordered.',
  },
  {
    citation:
      '“La drôle de guerre 39-40”, Chemins de memoire, the site of the Ministry of the Armed Forces and of ' +
      'the National Memory Secretary of State (Government of France), read at its Internet Archive capture ' +
      'of 12 August 2026.',
    publisher:
      'Chemins de memoire, Ministere des Armees (Government of France), via the Internet Archive Wayback ' +
      'Machine',
    url:
      'https://web.archive.org/web/20260812081113/https://www.cheminsdememoire.gouv.fr/fr/la-drole-de-guerre-39-40',
    usedFor:
      'The French ministry’s own account of the campaign its troops had just fought, in French, and a ' +
      'second publisher for the day the withdrawal was ordered: the units brought back behind the Maginot ' +
      'Line on 4 October. The same page puts the cost of the Sarre operation at about 2,000 French ' +
      'soldiers killed, wounded or sick, a figure this atlas does not print because no other publisher ' +
      'reached here gives it.',
  },
  {
    citation:
      '“Twenty-Year Mutual Assistance Agreement (May 26, 1942)”, Seventeen Moments in Soviet History, ' +
      'Michigan State University.',
    publisher:
      'Seventeen Moments in Soviet History, Michigan State University',
    url:
      'https://soviethistory.msu.edu/1943/strange-alliance/strange-alliance-texts/twenty-year-mutual-assistance-agreement',
    usedFor:
      'A university collection of the period’s documents which heads the treaty of 26 May 1942 with its ' +
      'day and carries the clause it is quoted for: the agreement shall remain in force for twenty years ' +
      'and thereafter until terminated as provided in article VIII. A second publisher for that day and ' +
      'that clause, written in American order, May 26, where this atlas writes 26 May.',
  },
  {
    citation:
      'International Military Tribunal, Judgement: The Defendants — Schacht, Avalon Project at Yale Law School.',
    publisher:
      'Avalon Project, Lillian Goldman Law Library, Yale Law School',
    url:
      'https://avalon.law.yale.edu/imt/judschac.asp',
    usedFor:
      'The Nuremberg judgement record of Hjalmar Schacht’s appointments: leave from the Ministry of Economics on 5 September 1937, resignation as Economics Minister on 16 November 1937, and dismissal as President of the Reichsbank on 20 January 1939.',
  },
  {
    citation:
      'Foreign Relations of the United States, Diplomatic Papers, 1939, General, The British Commonwealth and Europe, Volume II, Document 52.',
    publisher:
      'Office of the Historian, United States Department of State',
    url:
      'https://history.state.gov/historicaldocuments/frus1939v02/d52',
    usedFor:
      'Contemporary US Embassy telegram of 20–21 January 1939 from Berlin recording the message from the Reichsbank that Schacht could no longer continue the discussions.',
  },
  {
    citation:
      '“Hjalmar Schacht”, _Wikipedia_.',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Hjalmar_Schacht',
    usedFor:
      'Second account confirming Schacht’s dismissal from the Reichsbank presidency on 20 January 1939, and printing 26 November 1937 for his resignation from the Economics Ministry.',
  },
  {
    citation:
      'Ellis, L. F., The War in France and Flanders 1939–1940 (History of the Second World War, United Kingdom Military Series), Chapter XVI: Dunkirk, 1st June to 4th June, 1940.',
    publisher:
      'HMSO, London, 1953, hosted by ibiblio HyperWar',
    url:
      'https://www.ibiblio.org/hyperwar/UN/UK/UK-NWE-Flanders/UK-NWE-Flanders-16.html',
    usedFor:
      'The British official history’s record of the cross-Channel evacuation from Dunkirk to Dover and England during Operation Dynamo.',
  },
  {
    citation: 'US Army in World War II & US Navy Combat Narratives (Riviera, Marianas, Coral Sea, Java Sea, CBI), hosted by ibiblio HyperWar.',
    publisher: 'US Army Center of Military History / Office of Naval Intelligence, via ibiblio HyperWar',
    url: 'https://www.ibiblio.org/hyperwar/USA/USA-E-Riviera/USA-E-Riviera-5.html',
    usedFor:
      'Convoy lift figures for Dragoon (151,000 troops and 21,400 vehicles), the Mobile Fleet at Tawi Tawi and San Bernardino Strait, the Coral Sea Jomard Passage approach, the Java Sea anchorages at Soerabaja and Tandjong Priok, and the Burma/Hump route operations (USA-P-Marianas, USN-CN-Coral, USN-CN-Java, USA-CBI-Command, USA-CBI-Time).',
  },  {
    citation:
      '“Battle of the Coral Sea”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Battle_of_the_Coral_Sea',
    usedFor:
      'The two objectives the battle was fought over, the port of Port Moresby and the seaplane base at ' +
      'Tulagi, and the fact that the action on 8 May left the Japanese with the better of the exchange in ' +
      'tonnage while the invasion fleet turned back; the judgement printed about the result: a tactical ' +
      'victory for Japan in ships sunk, and a strategic one for the Allies. Only this publisher gives that ' +
      'reading, so it stands under For the record rather than in the account of the battle; that the ' +
      'invasion fleet for Port Moresby was recalled once the carriers had lost their air group, which is ' +
      'the reason the atlas treats the battle as turning on carrier air cover rather than on the ships ' +
      'lost; the four days the battle ran, 4 to 8 May 1942, as the article’s own first sentence keeps ' +
      'them; the day given for the battle, in the encyclopaedia’s caption for its photograph of the ' +
      'American carrier Lexington blowing up: 8 May 1942 — the day the combat narrative for the theatre ' +
      'also gives, in its own prose; what the exchange on 8 May cost: the Japanese carrier Shokaku ' +
      'damaged, the American carrier Yorktown damaged, and the Lexington so badly that she was scuttled. ' +
      'Under For the record, since only this publisher gives that tally; the opening of the campaign: the ' +
      'landings on Tulagi on 3 and 4 May and the American carrier strike that damaged and sank the ' +
      'warships supporting them; why the two fleets never closed: the American strikes through the day ' +
      'found nothing, because the Japanese fleet lay just outside the distance the scouts could reach; ' +
      'the distinction the encyclopaedia draws for the battle, in its own opening words: no ship sighted ' +
      'another, and none fired on another; what the battle did to the Japanese carrier force a month ' +
      'later: the damage to one carrier and the air losses of the other kept both out of the next battle.',
  },
  {
    citation:
      '_The Battle of the Coral Sea_ (US Navy Combat Narrative, transcribed at the HyperWar archive), ' +
      'heading: “The Battle of the Coral Sea May 4th to May 8th”',
    publisher:
      'US Army in World War II / US Navy Combat Narratives, via the HyperWar archive',
    url:
      'https://www.ibiblio.org/hyperwar/USN/USN-CN-Coral/USN-CN-Coral-1.html',
    usedFor:
      'The first day of the campaign as the American narrative keeps it: intelligence at 1900 on 3 May ' +
      'that Japanese troops were going ashore at Tulagi from transports in the harbour; the Allied ' +
      'expectation of what Japan was about to do: that a major movement out of Rabaul would take the form ' +
      'of a sea-borne invasion of Port Moresby, or the Lower Solomons, or both. A second publisher for the ' +
      'object of the movement; the combat narrative’s own heading for the engagement, running it from 4 ' +
      'to 8 May — a second publisher for the four days the battle is kept to.',
  },
  {
    citation:
      '_The Battle of the Coral Sea_ (US Navy Combat Narrative, transcribed at the HyperWar archive), ' +
      'heading: “The Action at Tulagi May 4”',
    publisher:
      'US Army in World War II / US Navy Combat Narratives, via the HyperWar archive',
    url:
      'https://www.ibiblio.org/hyperwar/USN/USN-CN-Coral/USN-CN-Coral-2.html',
    usedFor:
      'The American carrier attack on Tulagi on 4 May, the force’s position that morning off Guadalcanal, ' +
      'and the ships found fleeing from the harbour; what the 4 May strike found when it reached the ' +
      'anchorage: gunboats, a cargo ship standing out of Tulagi Harbour, a seaplane tender and a destroyer ' +
      'between Tulagi and Savo Island.',
  },
  {
    citation:
      '_The Battle of the Coral Sea_ (US Navy Combat Narrative, transcribed at the HyperWar archive), ' +
      'heading: “The Action of May 8th”',
    publisher:
      'US Army in World War II / US Navy Combat Narratives, via the HyperWar archive',
    url:
      'https://www.ibiblio.org/hyperwar/USN/USN-CN-Coral/USN-CN-Coral-4.html',
    usedFor:
      'The day given for the battle: the combat narrative for the theatre calls 8 May the climax, the day ' +
      'the two air attack groups struck each other, so the day is printed twice over.',
  },
  {
    citation:
      'Rickard, J, “Battle of the Coral Sea, 3-8 May 1942”, _historyofwar.org_',
    publisher:
      'historyofwar.org — independent military history site',
    url:
      'https://www.historyofwar.org/articles/battles_coral_sea.html',
    usedFor:
      'The end of the American carrier Lexington on 8 May: sunk by torpedoes from one of her own ' +
      'destroyers after she had to be abandoned. A second publisher for what the day cost; the turn in ' +
      'Japanese planning that gave Operation MO its urgency, in the independent account: the naval staff ' +
      'had their way first, and the raid on Tokyo ended the argument; why the loss tallies are not added ' +
      'up: the independent account for the theatre records that each side claimed more than it had sunk; ' +
      'the independent account of the bomb hits on the Japanese carrier — a second publisher for the ' +
      'damage given in the account of the day; that the convoy for Port Moresby was ordered back while ' +
      'the battle was still being fought, which the encyclopaedia records and the independent account for ' +
      'the theatre dates to the night of 7 May; the objective of Operation MO as an independent account ' +
      'keeps it — the invasion of Port Moresby — the third publisher for the aim the battle was fought ' +
      'over; the place the battle came to have: the first major Japanese setback of the war. A publisher ' +
      'independent of the other two, and a second for the days the fighting is kept to.',
  },
  {
    citation:
      '“Battle of the Java Sea”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Battle_of_the_Java_Sea',
    usedFor:
      'The day of the action and the scale of the loss: a decisive defeat for the Allied fleet on 27 ' +
      'February 1942, and the destruction of the ABDA fleet which followed over the next days; the ' +
      'flagship lost: that a torpedo from the heavy cruiser Haguro struck the Dutch light cruiser De ' +
      'Ruyter, which sank as the flooding grew, killing the commanding admiral; what the defeat cost the ' +
      'Allies beyond the ships: the Allied fleet dissolved as a fighting force, the Dutch navy was ' +
      'scuttled at home, and Japan took the whole of the Dutch East Indies; the composition of the ' +
      'Combined Striking Force the sortie was made with — two heavy cruisers, three light cruisers and ' +
      'nine destroyers — and the object of the sortie, the Japanese troop convoy. That order of battle ' +
      'stands under For the record, since only this publisher gives it; the second Allied cruiser lost ' +
      'that night, struck by a torpedo and sunk with almost all her crew — the second of the two cruisers ' +
      'named as lost by the American narrative; what the sortie was for, and the day it was made: the ' +
      'encyclopaedia has the main Allied naval force sailing northeast from Surabaya on 27 February to ' +
      'intercept a convoy of the Japanese eastern invasion force, which is the second publisher for the ' +
      'account’s statement of the object; the same weakness from the second publisher: crews of several ' +
      'navies with no experience of each other’s doctrine, and a language barrier at the flagship; that ' +
      'the force was found by a Japanese floatplane as it left port, before the two fleets met; the ' +
      'encyclopaedia’s own loss table for the action, on both sides: the Allied cruisers and destroyers ' +
      'sunk, and the much smaller list it gives for the Japanese escort.',
  },
  {
    citation:
      '_The Java Sea Campaign_ (US Navy Combat Narrative, transcribed at the HyperWar archive), heading: ' +
      'THE BATTLE OF THE JAVA SEA, 23 FEBRUARY 27',
    publisher:
      'US Army in World War II / US Navy Combat Narratives, via the HyperWar archive',
    url:
      'https://www.ibiblio.org/hyperwar/USN/USN-CN-Java/USN-CN-JavaSea-15.html',
    usedFor:
      'Why the Allied fleet put to sea: the American narrative states plainly that the attempt to stop the ' +
      'expedition coming in from the north-east is what brought on the battle; the combat narrative for ' +
      'the theatre keeps the action to 27 February, day by day and hour by hour — a second publisher for ' +
      'the day given for the battle; the span the combat narrative for the theatre itself gives the ' +
      'battle — five days, 23 to 27 February. It stands under For the record, since the day given for the ' +
      'battle is the day of the daylight action; why the fleet could not manoeuvre as one: that it was ' +
      'made of ships of four nations with little chance to train together or to work out a common ' +
      'doctrine; the signal book: that there were no flag signals or signal books the squadrons shared, ' +
      'and no tactical plans beyond the most rudimentary; the state of the destroyers when they sailed: ' +
      'that they had not been able to fuel the afternoon before and their supply was low, and that the ' +
      'fuel lines at Soerabaja had been cut by bombing; that the striking force gave up the action and ' +
      'turned back to the south on the afternoon of the 27th, and that a torpedo attack covered that ' +
      'retirement; that the destroyers were sent in to cover the break-off, the American officer ' +
      'concerned judging a torpedo attack the best way to cover the retirement, and the loss list the ' +
      'campaign history gives: the two cruisers and three destroyers.',
  },
  {
    citation:
      '_The Java Sea Campaign_ (US Navy Combat Narrative, transcribed at the HyperWar archive), heading: ' +
      'AFTERMATH OF BATTLE',
    publisher:
      'US Army in World War II / US Navy Combat Narratives, via the HyperWar archive',
    url:
      'https://www.ibiblio.org/hyperwar/USN/USN-CN-Java/USN-CN-JavaSea-16.html',
    usedFor:
      'The result as the American narrative records it: the Japanese kept the Allied striking force from ' +
      'the convoys; the ships the Allies lost: the cruisers De Ruyter and Java and three destroyers, with ' +
      'the judgement that the losses were unendurable. A second publisher for the loss of those five ' +
      'ships; the campaign history’s own loss list for the fighting of 27 February: the two named ' +
      'cruisers and the three named destroyers, and its verdict on what the loss amounted to; the same ' +
      'passage’s estimate of what the enemy paid, given as a hedge rather than a total: two or three ' +
      'cruisers and at least two or three destroyers badly hit, some of them probably sunk.',
  },
  {
    citation:
      '“Battle of the Philippine Sea”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Battle_of_the_Philippine_Sea',
    usedFor:
      'The part the submarines played before the air battle: two of the largest Japanese fleet carriers ' +
      'were torpedoed and sunk by American submarines during the battle; the name the air fighting took ' +
      'among the American aviators, and the reason for it — the disproportion of the loss ratio. Under For ' +
      'the record, since no second publisher prints the day’s loss figures; what the battle did to ' +
      'Japanese carrier aviation: a year spent rebuilding the carrier air groups, destroyed in two days. ' +
      'The ground on which the outcome of the battle is described; the two days the battle lasted, 19 and ' +
      '20 June 1944, in the article’s own first sentence; why the Japanese fleet came out at all: the ' +
      'American fleet was heading for Saipan, and the Japanese saw a chance to fight it. Read with the ' +
      'Marine history, which has the same trigger from the submarine reports of 15 June; the day the ' +
      'American landings on Saipan began, 15 June 1944, printed here and by the independent account for ' +
      'the theatre; where the Japanese expected the next blow, and how thinly the island group they came ' +
      'to fight for was held; the battle as it looked to the Americans that week, and what the same page ' +
      'says it cost the Japanese carrier air arm for good; what was destroyed with the aircraft: the ' +
      'trained pilots and the reserves with them; how few pilots were left afterwards, in the ' +
      'encyclopaedia’s own measure; what the crippled carriers were good for afterwards, and where that ' +
      'was shown: the decisions the Japanese made in the next great battle, and the turn to suicide attack ' +
      'from the land; how the American carrier force itself came through the day, in the encyclopaedia’s ' +
      'comparison with the next battle.',
  },
  {
    citation:
      '_Campaign in the Marianas_ (HyperWar: US Army in World War II), chapter VII: Supporting Arms and ' +
      'Operations — Battle of the Philippine Sea',
    publisher:
      'US Army in World War II / US Navy Combat Narratives, via the HyperWar archive',
    url:
      'https://www.ibiblio.org/hyperwar/USA/USA-P-Marianas/USA-P-Marianas-7.html',
    usedFor:
      'How the battle was brought on: submarines east of the Philippine Islands reporting from 15 June ' +
      'that a Japanese fleet was massing to relieve Saipan. A second publisher for the link between the ' +
      'landings and the fleet’s sortie; that the battle decided the fate of the landings as much as of ' +
      'the fleet: the troop transports stood well east of Saipan until the battle was over; the ' +
      'retirement of the Mobile Fleet to Truk and the diversion of most of its carrier air strength to ' +
      'Rabaul, where two thirds of it was lost. A second publisher for the collapse of Japan’s carrier air ' +
      'power; the name the day kept among American aviators, and how the day ended for the Japanese air ' +
      'crews — a second publisher for the nickname.',
  },
  {
    citation:
      '_Campaign in the Marianas_ (HyperWar: US Army in World War II), Part Four: Guam, chapter XV: Plans ' +
      'and Preparations',
    publisher:
      'US Army in World War II / US Navy Combat Narratives, via the HyperWar archive',
    url:
      'https://www.ibiblio.org/hyperwar/USA/USA-P-Marianas/USA-P-Marianas-15.html',
    usedFor:
      'The day the air battle was fought, 19 June, and the name it took, both printed in the combat ' +
      'narrative’s account of the fighting over Guam that morning — a second publisher for the day given ' +
      'for the battle.',
  },
  {
    citation:
      'Rickard, J, “Battle of the Philippine Sea, 19-20 June 1944”, _historyofwar.org_',
    publisher:
      'historyofwar.org — independent military history site',
    url:
      'https://www.historyofwar.org/articles/battles_philippine_sea.html',
    usedFor:
      'The day of the Saipan landings in the independent account, and what the operation was meant to ' +
      'take; the Japanese carrier air strength at the start of the battle, as the independent account for ' +
      'the theatre reckons it. Under For the record, since no second publisher prints the same total; ' +
      'what was left flyable at the end of the first day, in the same reckoning, and why the loss is ' +
      'described as the destruction of an air force rather than of ships; the independent account of the ' +
      'submarine attack on the Japanese fleet while its aircraft were still taking off, the second ' +
      'publisher for the underwater part of the battle; that the fleet carrier hit by the submarine was ' +
      'lost later the same day, which is what makes a single submarine hit a battle-deciding fact rather ' +
      'than a nuisance; the nickname, the two days and the scale of the result, from a publisher ' +
      'independent of both the encyclopaedia and the Marine history — a third for the name the day kept, ' +
      'and and a second for the battle being a crushing American victory.',
  },
  {
    citation:
      '“Siege of Myitkyina”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Siege_of_Myitkyina',
    usedFor:
      'The end of the siege: that on 3 August the garrison’s commander ordered the town abandoned and ' +
      'killed himself, obeying in the letter an order to defend the place to the death, while Chinese and ' +
      'American troops cleared the ground. A second publisher for the day given for the town’s fall; ' +
      'whose plan the rapid march on the town was, and why the airstrip beside it mattered to it: an ' +
      'invaluable source of supplies and air cover in the jungle fighting of the theatre. Under For the ' +
      'record, since only the encyclopaedia names him here; why the place mattered: the capture of the ' +
      'town and its airfield is what allowed the Ledo Road to be opened, joining the old Burma Road to ' +
      'China; the surprise with which the airfield was taken: the garrison, not knowing where the ' +
      'attacking troops were, poured gasoline over the airfield and fell back into the town itself; the ' +
      'object of the whole advance, which was the airstrip beside the town rather than the town, because ' +
      'it could carry supplies and air cover into the jungle theatre; the day the encyclopaedia gives for ' +
      'the capture of the northern airfield, and the easing of Japanese resistance in the week after it; ' +
      'how the troops to hold the field were brought in — by transport aircraft — and how spent the units ' +
      'already on the ground were; what the fighting for the town did to the Chinese units engaged in it, ' +
      'in the encyclopaedia’s own words.',
  },
  {
    citation:
      'Charles F. Romanus and Riley Sunderland, _Stilwell’s Command Problems_ (US Army in World War II: ' +
      'China-Burma-India Theater, transcribed at the HyperWar archive), chapter VI: The Drive for Myitkyina',
    publisher:
      'US Army in World War II / US Navy Combat Narratives, via the HyperWar archive',
    url:
      'https://www.ibiblio.org/hyperwar/USA/USA-CBI-Command/USA-CBI-Command-6.html',
    usedFor:
      'The day the principal airstrip at Myitkyina was seized, 17 May, and the effect on South East Asia ' +
      'Command. Only this publisher gives that day, so it stands under For the record and not in the ' +
      'account of the battle; the campaign history’s own verdict on the long argument over whether the ' +
      'place could be taken at all; the purpose the campaign history for the theatre gives for taking the ' +
      'town, in its own words: an air effort from bases in China behind the operations in the Pacific.',
  },
  {
    citation:
      'Charles F. Romanus and Riley Sunderland, _Stilwell’s Command Problems_ (US Army in World War II: ' +
      'China-Burma-India Theater, transcribed at the HyperWar archive), chapter XI: The China Crisis of ' +
      '1944',
    publisher:
      'US Army in World War II / US Navy Combat Narratives, via the HyperWar archive',
    url:
      'https://www.ibiblio.org/hyperwar/USA/USA-CBI-Command/USA-CBI-Command-11.html',
    usedFor:
      'The campaign history for the theatre refers to Myitkyina as a place the Chinese had held since 3 ' +
      'August, so the day of the town’s fall is printed twice over.',
  },
  {
    citation:
      'Charles F. Romanus and Riley Sunderland, _Stilwell’s Command Problems_ (US Army in World War II: ' +
      'China-Burma-India Theater, transcribed at the HyperWar archive), chapter I: The Last Preparations',
    publisher:
      'US Army in World War II / US Navy Combat Narratives, via the HyperWar archive',
    url:
      'https://www.ibiblio.org/hyperwar/USA/USA-CBI-Command/USA-CBI-Command-1.html',
    usedFor:
      'Why the town was fought for: the campaign history for the theatre makes holding the ' +
      'Myitkyina-Mogaung area the precondition of the Ledo Road and the pipeline to China, as the ' +
      'encyclopaedia also states; why the airfield mattered to the airlift before it was taken: the ' +
      'enemy’s fighters pushed the transports on to a longer route, flown higher, at the price of fuel and ' +
      'cargo; what the planners expected the field to do for the airlift once it was in Allied hands: a ' +
      'wider and lower way over the range.',
  },
  {
    citation:
      'Charles F. Romanus and Riley Sunderland, _Stilwell’s Command Problems_ (US Army in World War II: ' +
      'China-Burma-India Theater, transcribed at the HyperWar archive), chapter V: The Burma Campaign in ' +
      'the Balance',
    publisher:
      'US Army in World War II / US Navy Combat Narratives, via the HyperWar archive',
    url:
      'https://www.ibiblio.org/hyperwar/USA/USA-CBI-Command/USA-CBI-Command-5.html',
    usedFor:
      'The monsoon as the limit on the campaign in north Burma, and the doubt in the British staffs ' +
      'whether the road could be brought forward in time. That doubt is one account’s reading, so it ' +
      'stands under For the record.',
  },
  {
    citation:
      'Charles F. Romanus and Riley Sunderland, _Stilwell’s Command Problems_ (US Army in World War II: ' +
      'China-Burma-India Theater, transcribed at the HyperWar archive), chapter XII: The End of CBI Theater',
    publisher:
      'US Army in World War II / US Navy Combat Narratives, via the HyperWar archive',
    url:
      'https://www.ibiblio.org/hyperwar/USA/USA-CBI-Command/USA-CBI-Command-12.html',
    usedFor:
      'How soon the road the town had been taken for was finished. The date is the campaign history’s for ' +
      'the theatre, and stands under For the record; the tonnage the campaign history for the theatre ' +
      'prints for the airlift — 3,706 long tons for the whole of 1942 and 61,151 tons for 1943 — figures ' +
      'that can be attributed only to that publisher, since the publishers do not count in the same way; ' +
      'the best single month of the airlift, in the American campaign history, and which organisations ' +
      'flew it — the air transport command, the Chinese airline under government contract and other ' +
      'contract carriers; how the road and the airlift ended up side by side: what the campaign history ' +
      'says happened to the jam in the Assam line of communications by the end of 1944.',
  },
  {
    citation:
      'Louis Morton, _Time Runs Out in CBI_ (US Army in World War II: China-Burma-India Theater, ' +
      'transcribed at the HyperWar archive), chapter III: Beginning the Fall Campaign in North Burma',
    publisher:
      'US Army in World War II / US Navy Combat Narratives, via the HyperWar archive',
    url:
      'https://www.ibiblio.org/hyperwar/USA/USA-CBI-Time/USA-CBI-Time-3.html',
    usedFor:
      'Another volume of the same campaign history for the theatre, the one that covers the fall campaign ' +
      'in north Burma: the day it puts the town’s fall, and the training the Chinese divisions took in ' +
      'hand after it.',
  },
  {
    citation:
      '“The Hump”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/The_Hump',
    usedFor:
      'The two losses that made the airlift necessary: the fall of Rangoon and the Japanese seizure of ' +
      'Myitkyina on 8 May 1942, which between them cut the Allied access to the Burma Road; when the ' +
      'airlift started and why: the operation opened in April 1942 after Japanese forces closed the Burma ' +
      'Road, and flew daily until it was scaled down from August 1945; the consequence of that day: the ' +
      'loss of the town, coming with the loss of Rangoon, is what cut the Allied access to the Burma Road ' +
      'and made the airlift necessary; the total carried over the whole lift: about 650,000 tons in 42 ' +
      'months, at a cost in aircraft and crews. Under For the record and under What is still argued over, ' +
      'since no second publisher prints a comparable total; where the airlift got its name, the ' +
      'encyclopaedia’s account of the pilots’ word for the range they crossed, which the official air ' +
      'force history also gives; the encyclopaedia’s own statement that air was the only practicable way ' +
      'to keep China supplied, which makes the point the official air force history makes about the route ' +
      'being a theatre’s sole means of supply a fact two publishers reach separately; the route the ' +
      'airlift replaced: the encyclopaedia records the Burma Road as the only land route left after the ' +
      'Japanese cut it — a second publisher for air being the only way in; the height the crossings were ' +
      'made at: the encyclopaedia prints often 15,000 feet, and the air force history for the route gives ' +
      'no figure for height, so the number stands under For the record and out of the account of the ' +
      'lifting; where the ferries actually flew from: the fields the British laid out in Assam, and when ' +
      'they were ready; what made the crossing dangerous, as the encyclopaedia lists it: the charts, the ' +
      'navigation aids and the weather reports the crews did not have.',
  },
  {
    citation:
      '_Services Around the World_ (The Army Air Forces in World War II, Volume VII, transcribed at the ' +
      'HyperWar archive), chapter V: Airline to China',
    publisher:
      'US Army in World War II / US Navy Combat Narratives, via the HyperWar archive',
    url:
      'https://www.ibiblio.org/hyperwar/AAF/VII/AAF-VII-5.html',
    usedFor:
      'What the route carried: that for nearly three years every vehicle, gallon of fuel, weapon, round of ' +
      'ammunition, typewriter and ream of paper that reached Free China came in by air from India; the ' +
      'Air Transport Command’s own standing for this route among all its lines: no other airway was the ' +
      'sole means by which a combat theatre was fed; the opening of the lift: twenty-six aircraft and ' +
      'crews sent forward from Morrison Field in Florida to India between 19 April and 13 May 1942. A ' +
      'second publisher for the April 1942 opening; how small the lift was at first: 85 tons carried to ' +
      'China in July 1942 by a handful of C-47s, with about 221 tons flown the same month by the China ' +
      'National Aviation Corporation. Under For the record and under What is still argued over, since no ' +
      'second publisher gives these figures; what gave the route its name: the main range the pilots ' +
      'crossed, the path between Assam and the Chinese side of the frontier, often at fifteen thousand ' +
      'feet; the Air Forces’ own dated reference for the start of the ferry service’s operations, 20 May ' +
      '1942, which is why the month stands and not a first day of the airlift; why the airlift began, in ' +
      'the words of the air force history for the theatre: the fall of Rangoon in March 1942 cut off the ' +
      'flow of supplies by land over the Burma Road, and there remained only the air.',
  },
  {
    citation:
      'Louis Morton, _Time Runs Out in CBI_ (US Army in World War II: China-Burma-India Theater, ' +
      'transcribed at the HyperWar archive), chapter X: Role of the India-Burma Base',
    publisher:
      'US Army in World War II / US Navy Combat Narratives, via the HyperWar archive',
    url:
      'https://www.ibiblio.org/hyperwar/USA/USA-CBI-Time/USA-CBI-Time-10.html',
    usedFor:
      'The American end of the deadline for Rangoon: the Joint Chiefs reserved the right to transfer ' +
      'resources to China if the city did not fall before the monsoon began. A second publisher for the ' +
      'weather the campaign was fought against; why the port mattered to the reopening of the overland ' +
      'route to China, which Stilwell had pressed for from 1942 on as the prewar line of communications ' +
      'from Rangoon to Kunming; the race as the campaign history for the theatre describes it: the land ' +
      'advance was meant to reach Rangoon before the amphibious attack then set for 2 May. A second ' +
      'publisher for a May date, and the reason no single day is printed for the capture; the day the ' +
      'campaign history for the theatre gives for the occupation of the city, 3 May, one day after the ' +
      'amphibious assault it says was set for 2 May — the reason the spread of days is left under What is ' +
      'still argued over rather than settled on the map; that the garrison had already left when the town ' +
      'was taken — the official history’s own words are that the Japanese were gone — which is the second ' +
      'publisher’s account of an empty town, the first being the encyclopaedia’s; the decision to take ' +
      'the capital by assault from the sea and the air, and the day the assault was set for, which is what ' +
      'the account of the plan rests on.',
  },
  {
    citation:
      '“Operation Dracula”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Operation_Dracula',
    usedFor:
      'The deadline the campaign ran against: the plan was revived in March 1945 because Rangoon had to be ' +
      'taken before the monsoon, which was expected in the second week of May, to keep the lines of ' +
      'communication of the armies in Burma open; the day the city was found empty: patrols on the ' +
      'morning of 1 May reported that the Japanese had withdrawn. That is the day given for the ' +
      'occupation; the spread of days is under What is still argued over; the landings on 2 May, the day ' +
      'the assault division came ashore on both banks of the Rangoon river, which the official history ' +
      'also gives as the date the amphibious attack was set for; that the monsoon broke on the same day ' +
      'it was reached, earlier than the planners had allowed for — the fact that makes the capture a race ' +
      'won by days rather than weeks; that the garrison had left several days before the assault and the ' +
      'division occupied the city and its docks without opposition; how far the landward column had to ' +
      'come, and what slowed it: the fight at Pegu between the coastal road and the seaborne plan; what ' +
      'the troops who came in by air and sea actually did at the mouth of the river, in the ' +
      'encyclopaedia’s own words, including the casualties they took from their own bombing; how the ' +
      'empty city was confirmed before the assault: the aircraft that saw nobody, and the message on the ' +
      'roof of the jail; what the withdrawing garrison left behind, which the account of the battle has ' +
      'to answer for: the looting after the government went, and the jail the Japanese fired; how the ' +
      'city met the troops who arrived, and the order they were asked to restore.',
  },
  {
    citation:
      '“Anglo-Iraqi War”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Anglo-Iraqi_War',
    usedFor:
      'The opening of the air attack on 2 May 1941; the Iraqi investment of RAF Habbaniya; the first ' +
      'British reinforcements landed at Basra in April 1941. German air support based on Mosul; the ' +
      'armistice that ended the fighting; the day Wikipedia gives, and the four officers.',
  },
  {
    citation:
      '“The Middle East Series, Volume II: The Middle East Eastwards, May to September 1941, chapter 9: ' +
      'Iraq, May 1941”, _Military History Series — HyperWar Foundation_',
    publisher:
      'HyperWar / Military History Series',
    url:
      'https://www.ibiblio.org/hyperwar/UN/UK/UK-Med-II/UK-Med-2-9.html',
    usedFor:
      'The treaty base rights at Basra and Habbaniya; the Luftwaffe detachment at Mosul. Rashid Ali fled ' +
      'Iraq on 30 May 1941; why Iraq mattered as a route to Egypt; the day the official history gives for ' +
      'the coup.',
  },
  {
    citation:
      '“Syria–Lebanon campaign”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Syria-Lebanon_campaign',
    usedFor:
      'The strategic reason for the invasion. Beirut was within reach when the French asked for an ' +
      'armistice. Damascus as an objective of the invasion; the men of the Vichy force who went over to ' +
      'the Free French; who was sent home under the convention.',
  },
  {
    citation:
      '“The Middle East Series, Volume II: The Middle East Eastwards, May to September 1941, chapter 10: ' +
      'Syria and Lebanon, June–July 1941”, _Military History Series — HyperWar Foundation_',
    publisher:
      'HyperWar / Military History Series',
    url:
      'https://www.ibiblio.org/hyperwar/UN/UK/UK-Med-II/UK-Med-2-10.html',
    usedFor:
      'The campaign opened on 8 June 1941; the three airfields the campaign was to take; the convention at ' +
      'Acre of 14 July 1941. Vichy France held the Mandate after 1940.',
  },
  {
    citation:
      '“The Middle East Series, Volume II: The Middle East Eastwards, May to September 1941, chapter 13: ' +
      'Persia, August–September 1941”, _Military History Series — HyperWar Foundation_',
    publisher:
      'HyperWar / Military History Series',
    url:
      'https://www.ibiblio.org/hyperwar/UN/UK/UK-Med-II/UK-Med-2-13.html',
    usedFor:
      'Why the route mattered, in the official history; the objective of the attack from Iraq; the day the ' +
      'operation began; how the official history dates the collapse; why the port at the head of the Gulf ' +
      'mattered; how large the base at Basra was being made; the same route as the invasion was planned, ' +
      'in the official history; the day the invasion began; the oilfields as a first objective; why the ' +
      'province was worth invading for; the route as the Allies planned it in 1941.',
  },
  {
    citation:
      '“Anglo-Soviet invasion of Iran”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Anglo-Soviet_invasion_of_Iran',
    usedFor:
      'The division’s line of advance from Basra; how soon Ahvaz was reached; the one place where the ' +
      'advance was stopped; how the attack was described by those who made it; the naval part of the day ' +
      'at Khorramshahr; what was intended after Ahvaz; a different date for the abdication; who prepared ' +
      'the defence at Ahvaz; how the fighting at Ahvaz stopped; where the two advances met, and in which ' +
      'order; the pressure on Iran before the invasion; the formations that crossed from Basra; the fight ' +
      'on the Karun on the first day; the plan north from Ahvaz, stated as a plan. The waypoints of “The ' +
      'invasion of Iran: from Basra into Khuzestan” are Basra, Khorramshahr and Ahvaz.',
  },
  {
    citation:
      '“The Middle East Series, Volume I: The War in the Middle East 1939–1942, chapter 21: East Africa ' +
      'and the Somalilands”, _Military History Series — HyperWar Foundation_',
    publisher:
      'HyperWar / Military History Series',
    url:
      'https://www.ibiblio.org/hyperwar/UN/UK/UK-Med-I/UK-Med-I-21.html',
    usedFor:
      'Why Keren had to be taken to reach Asmara; the day the battle of Agordat was decided; what the ' +
      'victory made possible; the pursuit that reached the capital; the judgement about whether the ' +
      'capital was worth attacking; the Emperor’s return to the capital; what the capture made possible ' +
      'for the rest of the war; the official history’s judgement on the campaign; the road arc the capital ' +
      'sat at the end of. Agordat carried on 1 February 1941, where the two routes from Kassala joined; ' +
      'the ground the axis starts from; the two routes to Agordat; why the axis had to go through Keren; ' +
      'the last two places on the axis; the pursuit from Somaliland to the Ethiopian capital. The ' +
      'waypoints of “The Sudan axis: from Gallabat and Kassala to Massawa” are Gallabat, Kassala, Agordat, ' +
      'Keren and Massawa. The waypoint of “The Kenya axis: Kismayu, Mogadishu and the pursuit to Addis ' +
      'Ababa” is Addis Ababa.',
  },
  {
    citation:
      '“East African campaign (World War II)”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/East_African_campaign_(World_War_II)',
    usedFor:
      'The retreat from Agordat on the night of 31 January/1 February, in Wikipedia; what was at stake in ' +
      'the theatre, in Wikipedia; the quality of the troops holding Eritrea, in Wikipedia; the ground, in ' +
      'Wikipedia; the fall of Keren, and the length of the fighting, in Wikipedia; the same date in ' +
      'Wikipedia; the armed return, in photographs of the capital; both in one note of Wikipedia’s own: ' +
      'the day the Emperor left the capital, and the day Ethiopia keeps now; the fall of Keren in ' +
      'Wikipedia. Mogadishu taken without a fight. Addis Ababa, 6 April 1941; the ships at Kismayu. The ' +
      'waypoint of “The Kenya axis: Kismayu, Mogadishu and the pursuit to Addis Ababa” is Mogadishu.',
  },
  {
    citation:
      '“The Middle East Series, Volume I: The War in the Middle East 1939–1942, chapter 23: The Battle of ' +
      'Keren”, _Military History Series — HyperWar Foundation_',
    publisher:
      'HyperWar / Military History Series',
    url:
      'https://www.ibiblio.org/hyperwar/UN/UK/UK-Med-I/UK-Med-I-23.html',
    usedFor:
      'What the Italians judged after the attack on Gallabat in November 1940; why the attack had to be ' +
      'delivered here; the Italian forces in Eritrea; the alternative to a frontal attack, and why it was ' +
      'rejected; what the weeks before the final assault were spent on; the bombardment that opened the ' +
      'final assault on 15 March 1941; the cost of the battle; the Italian troops in Eritrea, in the ' +
      'account that alone gives them. The waypoint of “The Sudan axis: from Gallabat and Kassala to ' +
      'Massawa” is Asmara.',
  },
  {
    citation:
      '“Persian Corridor”, _Wikipedia_',
    publisher:
      'Wikimedia Foundation',
    url:
      'https://en.wikipedia.org/wiki/Persian_Corridor',
    usedFor:
      'How the stores moved through Iran; the Caspian stage of the route; the Caspian port the supplies ' +
      'left from; the water crossing to the Soviet Union; how the route came into Allied hands; the ' +
      'command that ran the traffic; the equipment sent to work the railway; the rolling stock supplied ' +
      'for the line; why the traffic grew in 1943; the tonnage share, in the article’s own words; the ' +
      'crossing this line draws; the stages this line does not draw. The waypoints of “The Persian ' +
      'Corridor: the Caspian crossing to Baku and Makhachkala” are Nowshahr, Baku and Makhachkala.',
  },
  {
    citation:
      '“The Middle East Series, Volume I: The War in the Middle East 1939–1942, chapter 22: The Middle ' +
      'East, June 1940 to June 1941 (the southern and eastern flanks)”, _Military History Series — ' +
      'HyperWar Foundation_',
    publisher:
      'HyperWar / Military History Series',
    url:
      'https://www.ibiblio.org/hyperwar/UN/UK/UK-Med-I/UK-Med-I-22.html',
    usedFor:
      'How near the city the advance was at the end of March; the day the capital fell, in the official ' +
      'history; the garrisons cut off by the fall of the city; the air war that followed the capture. ' +
      'Kismayu taken on 14 February 1941. The waypoint of “The Kenya axis: Kismayu, Mogadishu and the ' +
      'pursuit to Addis Ababa” is Kismayu.',
  },];

/** Figures that are genuinely disputed, shown so readers know the range. */
export const UNCERTAINTIES = [
  {
    topic: 'End of the Burma campaign, 1942',
    range:
      'The US Army’s own campaign pamphlet gives its period as 7 December 1941 to 26 May 1942, while this atlas’s marching line runs to 28 May 1942, the date usually printed for the end of organised resistance. Both appear on the site, in the card note and on the line.',
  },
  {
    topic: 'Liuzhou, 9 or 10 November 1944',
    range:
      'The US Army’s China Defensive pamphlet gives the same day, 10 November 1944, for the capture of both Kweilin and Liuchow; accounts that separate the two put Liuzhou on the 9th or the 11th. This atlas follows the pamphlet and dates the card 10 November.',
  },
  {
    topic: 'Casualty totals for the Asia-Pacific operations added in 2026-11',
    range:
      'No figure of this kind is printed on the cards for Rangoon, Corregidor, Makin and Tarawa, Iwo Jima or Okinawa. The official histories print totals that differ from the figures in general circulation and do not define them the same way — the Marine Corps history of Iwo Jima, for example, prints 13,737 casualties there “either by death or by medical evacuation”, which is not the same quantity as the killed-and-wounded totals usually quoted — and no second publisher family was reachable here to adjudicate between them.',
  },
  {
    topic: 'Total Soviet deaths',
    range: '26-27 million is the usual estimate; military irrecoverable losses 8.7 million (Krivosheev) with a long-standing dispute over how many prisoners of war died.',
  },
  {
    topic: 'Polish losses',
    range:
      'About 17% of the prewar population; the split between Jewish and non-Jewish victims and between citizens by ethnicity and by language is contested.',
  },
  {
    topic: 'Yugoslav losses',
    range: '1.0-1.7 million depending on whether killings in the Independent State of Croatia and postwar reprisals are included.',
  },
  {
    topic: 'German civilian deaths',
    range:
      '0.4-1.0 million depending on whether the flight and expulsion of Germans and the bombing dead are counted, and on how 1945 deaths are attributed.',
  },
  {
    topic: 'Greek losses',
    range: '300,000-800,000; the size of the 1941-42 famine death toll is the largest single source of disagreement.',
  },
  {
    topic: 'Division strengths and tank numbers',
    range:
      'Every strength figure on this site is an order-of-battle estimate. “Paper” and “serviceable” are different numbers, and the difference for armour on a single morning can be a third; where a line gives ~, that is what it means.',
  },
  {
    topic: 'Deaths at Hiroshima and Nagasaki',
    range:
      'About 90,000-166,000 at Hiroshima and 60,000-80,000 at Nagasaki, so roughly 150,000-246,000 in the two cities by the end of 1945. The width of the range is the source’s own rather than this atlas’s: the two cities are given separately, civilian and military dead are counted in both, and deaths from radiation injuries in the months after the bombings fall inside or outside a figure depending on where the count stops.',
  },
  {
    topic: 'The date the war ended',
    range:
      'This atlas ends on 2 September 1945, the day the instrument of surrender against Japan was signed and took effect. Other dates are defensible: 8 May 1945 for Europe, 15 August 1945 for the broadcast Japan’s listeners actually heard, 11 November 1918 for the First World War, and 15 September 1947, 28 April 1952, 1956 or 15 March 1991 for the settlements that ended the legal states of war.',
  },
  {
    topic: 'Soviet planning in June 1941',
    range:
      'Whether Stavka intended a preventive strike in July 1941 remains unresolved. The argument rests on the “Considerations” document of 15 May 1941, whose very existence and status as an approved plan are themselves disputed, and on the “Reiter memorandum” of questionable authenticity. Glantz and House, When Titans Clashed, give the standard operational counter-reading: the forward deployments the thesis points to were a massing for an unready counter-stroke, not an attack posture in June 1941. Viktor Suvorov’s “Icebreaker” thesis is argued from those documents and from material this site has not been able to read in print, so it is named here as a thesis and not as evidence. The Soviet ambassador in London in 1941 was Ivan Maisky, whose diaries edited by Gabriel Gorodetsky (Yale, 2015) are the published diplomatic record of these weeks.',
  },
  {
    topic: 'The day the war in China began',
    range:
      'The American diplomatic record and the usual naming give 7 July 1937; the US Army’s official history of the China-Burma-India theater gives 8 July. The card is dated 7 July and its note prints both.',
  },
  {
    topic: 'The days the Battle of Shanghai began and ended',
    range:
      '13 August to 8 November 1937 is what the English Wikipedia article gives, and no publisher this atlas can reach prints those days; the card is dated to the month for that reason. The strengths it gives — about 700,000 Chinese against 300,000 Japanese, rising — and its casualty totals are the article’s own and are not printed on the site.',
  },
  {
    topic: 'How many were killed at Nanjing',
    range:
      'The judgment of the International Military Tribunal for the Far East found “over 200,000” civilians and prisoners of war murdered in Nanjing and its vicinity in the first six weeks, and grounded that on the “more than 155,000 bodies” counted and buried by Chinese societies there; the English Wikipedia article’s infobox range is “100,000–300,000”; and estimates of the prisoners executed run from the tribunal’s 30,000, through Sun Zhaiwei’s 36,500-40,000, to a Japanese colonel’s diary at 40,000-50,000. A court’s finding on summary proceedings is not an independent count, and the burial total covers only what the societies buried; denial that the killings happened at all is a political position, not a finding. This atlas prints the fact of the killings and the mechanism, and no total.',
  },
  {
    topic: 'The Yellow River breach of June 1938',
    range:
      'The date of the dike breach, the extent of the flood and the death toll — put anywhere from tens of thousands to most of a million — rest in this atlas on the English Wikipedia article alone. The event has no card, the flood is drawn nowhere, and the US Army history’s account of the 1938 halt does not mention it.',
  },
  {
    topic: 'The first nine months of this atlas show the borders of 30 April 1938',
    range:
      'The range opens in July 1937; the earliest state in the border dataset is dated 30 April 1938. For July 1937 to March 1938 the map therefore draws those outlines between one and nine months early, and because that state postdates the Anschluss, it shows Austria inside the German Reich while Austria was still an independent state. The month readout names the snapshot and the gap for every one of those months.',
  },
  {
    topic:
      'Le Havre, prisoners, tonnage and the opening of the harbour, 1944',
    range:
      'Prisoners are 11,300 in the British official history and 11,302 in the Canadian, both quoted by ' +
      'Wikipedia, and some 12,000 including non-combatants in History of War; the Allied cost is 388 to ' +
      '500 killed in one account and 634 in the other. Civilian dead are over 2,000 from the preparatory ' +
      'bombardment in one account, the municipality’s count of February 1945 being 1,536 dead and 517 ' +
      'missing. History of War gives Bomber Command 4,000 tons on the port, Wikipedia more than 4,000 long ' +
      'tons as the fire of Warspite and Erebus — the same size of bomb, a different arm. Wikipedia reopens ' +
      'the harbour on 9 October, History of War has Boulogne opened on 12 October. No figure is printed on ' +
      'the card.',
  },
  {
    topic:
      'Belgrade, the span of the operation and its totals, 1944',
    range:
      'Balkan War History dates the Belgrade operation to 21 September to 22 October 1944 in one paragraph ' +
      'and the fighting to 14 to 20 October in another; Wikipedia gives 14 to 20 October only. Strength is ' +
      '150,000 German troops, mostly second-line and non-German, against 580,000 in the Wikipedia infobox, ' +
      'while Balkan War History counts one battle group at over 20,000 men, 35 tanks and about 150 guns ' +
      'and mortars, and the Partisan force before the city at 32,000 on 5 October rising to about 40,000 ' +
      'by the 14th. German losses are about 15,000 dead with 9,000 prisoners there; the Wikipedia article ' +
      'gives 4,350 Soviet killed and missing. The card is dated 20 October, the day both pages give for ' +
      'the fall of the city.',
  },
  {
    topic:
      'Vienna, the loss figures, 1945',
    range:
      'No loss figure is printed on the card, because no two accounts on file agree on any of them: some ' +
      '20,000 killed in the city and 5,000 in the Vienna Woods, about a fifth of them civilians; some ' +
      '37,000 German dead; about 5,000 soldiers’ graves counted by the city council in August 1945; some ' +
      '18,000 Soviet dead; and the 139,815 casualties of the 3rd Ukrainian Front between 16 March and 15 ' +
      'April 1945. All are in the note, each named to the account which prints it, as is the estimate of ' +
      '70,000 to 100,000 women raped, which its own source calls highly uncertain.',
  },
  {
    topic:
      'Budapest, the breakout and the prisoner total, 1945',
    range:
      'The Soviet announcement of 110,000 prisoners and the 600 to 700 men who reached the German lines ' +
      'are both printed by the two accounts on file. What TheSecondWar.pl has alone is the Hungarian ' +
      'historian Krisztián Ungváry’s name on the 600 to 700, and his name on the view that the prisoner ' +
      'figure was inflated; Wikipedia says in its own words that thousands of Hungarians were rounded up ' +
      'and added to the count. The card prints the announced figure with the words that it was announced, ' +
      'and the note gives Ungváry’s count and his name.',
  },
  {
    topic:
      'Tobruk, the day the siege ended, 1941',
    range:
      'The sequence is agreed; its end is not. Wikipedia dates the siege 10 April to 27 November 1941 and ' +
      'relieves the garrison after 231 days; History of War re-establishes the investment on 1 December ' +
      'and lifts the siege after 242 days on 7 December; the Australian War Memorial has 2/13 Battalion ' +
      'still in the port when the siege was lifted on 10 December, the only unit to see the entire siege. ' +
      'This atlas dates the card 26 November, the day of contact in the account which gives it first, and ' +
      'prints neither day count; the note gives the three dates and both counts.',
  },  {
    topic:
      'The area handed to Hungary by the First Vienna Award, 1938',
    range:
      'Rubicon History and the World War II Database both give 11,927 km², which is what this atlas ' +
      'prints. The Wikipedia article on the award puts the territory at 14,106 km², of which 12,124 km² in ' +
      'Slovakia and 1,982 km² in Carpathian Ruthenia, and puts Slovakia’s share of the loss at 10,390 km². ' +
      'The published accounts cannot be reconciled with one another, so this atlas gives one of the two ' +
      'figures and records the others here.',
  },
  {
    topic:
      'The people in the territory awarded to Hungary in November 1938',
    range:
      'Five figures are in print for the people in the territory awarded to Hungary: 896 thousand from ' +
      'Rubicon History, about 1,060,000 from the World War II Database, 1,346,000 citizens from the ' +
      'Wikipedia article on the award, 935,000 in that article’s own estimate grown from the 1930 census, ' +
      'and 854,277 for the Slovak part of the loss in the same article. No two publishers agree, so this ' +
      'atlas prints no population figure for the award.',
  },
  {
    topic:
      'The Hungarian minorities left by the Treaty of Trianon',
    range:
      'The Wikipedia article on the Treaty of Trianon puts the Hungarians who became minorities in the ' +
      'successor states at 3.3 million, and marks that sentence as needing a citation. No other publisher ' +
      'consulted here gives the figure, so the First Vienna Award card says only millions.',
  },
  {
    topic:
      'The land Finland ceded at the Moscow Peace Treaty',
    range:
      'The Wikipedia article on the treaty and The Guardian both put the land ceded at about 9% of Finnish ' +
      'territory, which is what this atlas prints, while Foreign Affairs in 1951 says the Soviet Union ' +
      'took about a tenth. An earlier version of the Moscow Peace Treaty card said 11%, a figure none of ' +
      'the sources consulted supports.',
  },
  {
    topic:
      'The people who left the ceded Finnish areas in 1940',
    range:
      'The Wikipedia article on the Moscow Peace Treaty puts the evacuation at 422,000 Finns, 12% of ' +
      'Finland’s population; Foreign Affairs in 1951 puts it at 400,000 who migrated from the ceded areas; ' +
      'the Library of Congress Country Studies says those territories held about one-eighth of Finland’s ' +
      'population and that virtually all of them moved to Finnish territory. An earlier version of the ' +
      'card said 420,000 people leaving 450,000 inhabitants; no source consulted gives either figure, so ' +
      'this atlas prints none.',
  },
  {
    topic:
      'The distance from Leningrad to the Finnish frontier',
    range:
      'The pre-war Finnish frontier stood 32 km (20 mi) from Leningrad: the Wikipedia article on the ' +
      'winter war gives that distance, and the Communist League pamphlet of 1990 gives it in the Soviet ' +
      'demand it quotes, though that pamphlet’s own narrative says 40 kilometres. That is the only ' +
      'distance this atlas prints. For the new frontier, Spartacus Educational says the border moved 150 ' +
      'km from Leningrad to Vyborg and Russia Beyond says 120 km into the Karelian Isthmus; no source ' +
      'consulted gives both, and an earlier version of the card printed a range no single source gives.',
  },
  {
    topic:
      'U-boat losses in May 1943',
    range:
      'Wikipedia gives 43 U-boats destroyed in May 1943, 34 of them in the Atlantic, and says that was 25% ' +
      'of the U-boat arm’s operational strength; the same number appears in its Black May article, so ' +
      'those two are one encyclopedia speaking twice. uboat.net gives 40 U-boats in the twenty-one days ' +
      'from 1 May, also 25% of the operational strength, and its own list of losses records 42 U-boats ' +
      'with 1,832 men dead. The scholarly account that gives forty-one could not be reached, so this atlas ' +
      'prints no figure for May 1943 and states the disagreement.',
  },
  {
    topic:
      'The day the North Atlantic wolfpacks were lifted',
    range:
      'Wikipedia’s Black May article has Admiral Dönitz order a temporary halt on 24 May 1943, which is ' +
      'the date usually given, and it is the only account of that day consulted here; no other publisher ' +
      'was reached for it, so this atlas treats 24 May 1943 as an attributed date rather than a settled ' +
      'one.',
  },
  {
    topic:
      'The opening night of Operation Paukenschlag',
    range:
      'The Wikipedia article on the Battle of the Atlantic puts the first U-boats in United States waters ' +
      'on 13 January 1942, and the Codenames.info page on Operation Paukenschlag says in its text that the ' +
      'first boat reached the east coast of the USA on 13 January; the table of that same operation gives ' +
      'its start date as 11 January 1942. This atlas dates the card to 13 January, the first of the ' +
      'arrivals, and records the other date here.',
  },
  {
    topic:
      'The tonnage sunk off the American coast in the summer of 1942',
    range:
      'An earlier version of the Battle of the Atlantic card gave about 640,000 tons a month for July to ' +
      'September 1942. None of the sources consulted gives a monthly tonnage for those months, so the ' +
      'figure has been removed rather than corrected. The 609 ships of 3.1 million tons for the loss of 22 ' +
      'U-boats that this atlas prints is the toll of the Second Happy Time of January to August 1942, ' +
      'given by the Wikipedia article on that period and by Codenames.info; it is not a figure for the ' +
      'whole battle.',
  },
  {
    topic:
      'How many Jews were deported from the Warsaw Ghetto in the summer of 1942',
    range:
      'The chronology of the United States Holocaust Memorial Museum gives around 265,000 Jews deported ' +
      'from the Warsaw ghetto to Treblinka II from July until 5 September 1942; Encyclopædia Britannica ' +
      'about 265,000 between July and September; POLIN nearly 300,000 within two months of 22 July; and ' +
      'the Wikipedia article on the Grossaktion 254,000 to 265,000, or at least 300,000 by different ' +
      'accounts. This atlas prints about 265,000, the figure three publishers give, and puts no number in ' +
      'the title of the card.',
  },
  {
    topic:
      'When the deportations from the Warsaw Ghetto ended',
    range:
      'The Wikipedia article on the Grossaktion dates the action 23 July to 21 September 1942, and says ' +
      'the extermination camp received most of the victims between 23 July and 21 September; the ' +
      'chronology of the United States Holocaust Memorial Museum has the deportations running from July ' +
      'until 5 September 1942; POLIN speaks of nearly 300,000 people within two months of 22 July. The ' +
      'accounts do not agree on an ending, so this atlas gives a beginning and no end date.',
  },
  {
    topic:
      'The population of the Warsaw Ghetto before the deportations',
    range:
      'The Wikipedia article on the ghetto gives an initial 450,000 people confined to 307 hectares (760 ' +
      'acres), and between 375,000 and 400,000 before the mass killings began; POLIN says the Germans ' +
      'squeezed over 400,000 Jews into the walled area; Encyclopædia Britannica says nearly 500,000 were ' +
      'living within its 840 acres (340 hectares) by the summer of 1942. This atlas prints none of these ' +
      'figures.',
  },
  {
    topic:
      'How many people were left in the Warsaw Ghetto in the autumn of 1942',
    range:
      'Encyclopædia Britannica has only some 55,000 people remaining in the ghetto; POLIN a mere 60,000 in ' +
      'the so-called Restgetto in the autumn of 1942. An earlier version of the Warsaw ghetto card said ' +
      'roughly 50,000 to 60,000 workers. This atlas now describes those kept alive for work without a ' +
      'figure.',
  },
  {
    topic:
      'The daily quota of the Warsaw deportations',
    range:
      'The Wikipedia article on the Grossaktion gives 5,000 to 6,000 people a day, with the shipments ' +
      'going on without stopping for eight weeks at 100 people to a cattle truck; Encyclopædia Britannica ' +
      'gives more than 5,000 Jews a day. An earlier version of the Warsaw ghetto card said 6,000 a day for ' +
      'nine weeks. This atlas now says thousands each day, for weeks.',
  },
  {
    topic:
      'The distance of Treblinka from Warsaw',
    range:
      'The Wikipedia article on the camp puts the two camps of Treblinka 80 km (50 mi) north-east of ' +
      'Warsaw. The United States Holocaust Memorial Museum gives about 50 miles for Malkinia, the village ' +
      'near the labour camp, which is not the camp itself. An earlier version of the Warsaw ghetto card ' +
      'said 100 km, a figure none of the sources consulted gives; this atlas says only that Treblinka lies ' +
      'north-east of Warsaw.',
  },
  {
    topic:
      'The date of Himmler’s order for the resettlement of the Warsaw Jews',
    range:
      'The Wikipedia article on the Grossaktion and the chronology of the United States Holocaust Memorial ' +
      'Museum both date Himmler’s order to the SS and police leader of the General Government to resettle ' +
      'the Jews of the district to 19 July 1942. An earlier version of the Warsaw ghetto card said 16 ' +
      'July, a date none of the sources consulted gives.',
  },
  {
    topic:
      'The death of Adam Czerniaków',
    range:
      'The timeline in the Wikipedia article on the Grossaktion has Adam Czerniaków, chairman of the ' +
      'Jewish Council, taking his own life on 23 July 1942, the day after he was told to prepare a ' +
      'transport of 6,000 people a day, and that timeline is itself marked as needing sources. The further ' +
      'claim that he did so because the resettlement would take the hospital and the children is not ' +
      'corroborated in the sources consulted, and this atlas does not repeat it.',
  },
  {
    topic:
      'How many people were shot in the Warsaw Ghetto during the deportations',
    range:
      'An earlier version of the Warsaw ghetto card said some 11,000 to 20,000 people were shot in the ' +
      'ghetto itself. None of the sources consulted prints that. The figures of 11,000 and 20,000 that a ' +
      'keyword search finds in the material gathered here count Jews from other countries, and from Thrace ' +
      'and Macedonia, deported to Treblinka, not shootings in Warsaw. The claim has been removed.',
  },  {
    topic:
      'The day Prague fell',
    range:
      'The German ambassador’s despatch of 15 March 1939 has the troops crossing the Czech frontier at six ' +
      'o’clock that morning, the postwar judgement gives 15 March for the invasion and 16 March for the ' +
      'proclamation of the protectorate, and the encyclopaedia has the occupation of the rest of the ' +
      'country on 15 March. The New Zealand government’s second World War timeline prints “14 March: ' +
      'German troops occupy Prague and the rest of Czechoslovakia”, and the meeting in Berlin at which ' +
      'President Hacha was pressed began on the evening of 14 March. One publisher gives 14 March, so the ' +
      'atlas says 15 March and records the other day here.',
  },
  {
    topic:
      'What the occupation gave the Wehrmacht',
    range:
      'One publisher describes inter-war Czechoslovakia as “a major manufacturer of machine guns, tanks, ' +
      'and artillery, most of them assembled in the Škoda factory in Plzeň”, and prints the inventory a ' +
      'Reichstag speech attributed to the occupation — 2,175 field cannons, 469 tanks, 500 anti-aircraft ' +
      'artillery pieces and 43,000 machine guns among them — which that publisher says “would be ' +
      'sufficient to arm about half of the then Wehrmacht”. No second publisher reached here prints any of ' +
      'those figures, so none is given. No publisher says the works supplied a third of German ' +
      'machine-tool capacity either, which is why that claim is not printed.',
  },
  {
    topic:
      'The day of the guarantee to Poland',
    range:
      'The guarantee is dated 31 March 1939 by the National Archives and the Prime Minister’s Office ' +
      'together, by TheSecondWar.pl, and by the encyclopaedia, which adds that it was “formalized by the ' +
      'British on 6 April 1939” and “not ratified until 4 September 1939 by the French”; the New Zealand ' +
      'timeline has “31 March: United Kingdom and France guarantee Polish independence”, and the list of ' +
      'documents in the postwar judgement entries the Prime Minister’s statement of that same day. One ' +
      'museum page dates the guarantee 30 March 1939 and extends it to Greece and Romania. The atlas names ' +
      '31 March and records here that one publisher has it a day earlier.',
  },
  {
    topic:
      'Which date the Memel treaty carries',
    range:
      'The German ultimatum bears the date 20 March 1939; Lithuania “accepted the ultimatum on 23 March ' +
      '1939”, and “At 1:00 a.m. on 23 March 1939” the foreign ministers signed, another record having it ' +
      '“around 1 a.m. on 23 March, although it was dated 22 March”; the document is signed “Berlin, March ' +
      '22, 1939” and recorded as “effective 22 March 1939”. The same settlement is dated 20, 22 or 23 ' +
      'March according to which act is counted. Two publishers print the hour of the signing; none prints ' +
      'the hour the ultimatum itself was presented, and both say it was oral and carried no written ' +
      'deadline, so no deadline is given. This atlas keeps 23 March, the day of signing.',
  },
  {
    topic:
      'Whether the seizure was Germany’s last acquisition before the war',
    range:
      'Two publishers print that the Klaipėda region was Germany’s last territorial acquisition before the ' +
      'war, one of them adding that it was “the last to be gained without a single shot”. The atlas does ' +
      'not make that claim. Danzig was still a Free City in March 1939 and was annexed when the war began, ' +
      'and no source read here settles whether it counts, so the word last is left out.',
  },
  {
    topic:
      'The French deadline of 3 September 1939',
    range:
      'The Prime Minister’s statement to the Commons on 3 September 1939 says the French ambassador in ' +
      'Berlin was making a similar démarche “accompanied also by a definite time limit” but gives no hour, ' +
      'and the Cabinet Office historians have the French ambassador calling at midday and being kept ' +
      'waiting while the new Soviet ambassador was presented. One publisher gives the French note a ' +
      'deadline of 5 p.m., and no other source read here prints that hour, so the atlas keeps the French ' +
      'démarche and drops the hour.',
  },
  {
    topic:
      'The hour of the British broadcast',
    range:
      'The ultimatum as read to the Commons required assurances “not later than 11 A.M., British Summer ' +
      'Time” on 3 September 1939, and the broadcast that morning speaks of the undertaking expected “by 11 ' +
      '0’clock”, so the hour named in the broadcast is the expiry of the ultimatum, not the time the ' +
      'speech began. The Cabinet Office historians write that Chamberlain addressed the nation at 11.15 ' +
      'a.m. UK time, a second publisher gives 11.15 a.m. as well, and the New Zealand government’s page ' +
      'prints “11 a.m. British Summer Time” for the news itself. The atlas gives a quarter past eleven for ' +
      'the broadcast and explains here why that is not the same hour as the one in the document.',
  },
  {
    topic:
      'The days the dominions declared war',
    range:
      'Australia, New Zealand and British India declared war on 3 September 1939, which two publishers ' +
      'print, and Canada did so seven days later, which a Canadian and a New Zealand account both print. ' +
      'South Africa is listed by one timeline under a heading with no day, and the publisher that gives ' +
      'the dominions as a group says only that South Africa and Canada followed “in the next few days”. No ' +
      'source read here gives a day for every dominion, so the atlas names the days it can corroborate and ' +
      'says within the following week for the rest.',
  },
  {
    topic:
      'The dates of the Saar offensive',
    range:
      'One publisher gives the offensive in the Saar as “Sept. 7-16, 1939”, with the advance stopping ' +
      'after some five miles and the forces taken back over the Rhine. A second gives 7 September as the ' +
      'start, an advance of some eight kilometres to the outposts of the Siegfried Line, a retreat “behind ' +
      'the Maginot Line” in October, and French troops in German territory again later that month. The ' +
      'atlas keeps 7 September, which both print, and says the French withdrew in October, which only one ' +
      'of them dates.',
  },
  {
    topic:
      'France’s share in the guarantees of 1939',
    range:
      'One account dates the Franco-Polish military protocol “On 19 May 1939 in Paris”, when Gamelin and ' +
      'the Polish minister of military affairs signed the protocol that promised a French offensive, and ' +
      'that is where the claim that France followed the British guarantee of Poland on 19 May comes from, ' +
      'in one publisher’s words alone. The encyclopaedia account of the British declaration gives the ' +
      'French ratification of the guarantee as 4 September 1939, the day after the war had begun. The two ' +
      'accounts describe different documents, so the atlas names no French date for 1939.',
  },
  {
    topic:
      'The day of the division that ended Chamberlain’s government',
    range:
      'The debate is given as running “from 7 to 9 May 1940”, and as “For two days, from 7-9 May”, while ' +
      'three accounts put it on 7 and 8 May — one printing that “The division took place at 11.00pm” on ' +
      'the second of them, one carrying its own heading “8 May: second day, and division” with a third day ' +
      'on 9 May, and one saying the Commons debated the Norwegian campaign “On 7–8 May”. Four publishers ' +
      'put the division or the last sitting of the debate on 8 May. The result, 281 to 200, is printed by ' +
      'three publishers, so the atlas gives the result and neither the day of the division nor the hour of ' +
      'eleven at night.',
  },
  {
    topic:
      'How many of the government’s own members voted against it',
    range:
      'One account counts “Thirty-nine government MPs” who voted against the government and “between 30 ' +
      'and 40 more” who attended the debate but abstained. Another counts “41 members who normally ' +
      'supported the government” voting with the Opposition, with “an estimated 60 other Conservatives” ' +
      'abstaining deliberately. The two are counting different things, so the atlas gives no number for ' +
      'either and keeps only the majority of 81, which three publishers print.',
  },
  {
    topic:
      'Why Halifax declined the premiership',
    range:
      'The reason usually given — that “it was not possible to lead a government from the House of Lords, ' +
      'instead of the Commons” — is printed by one publisher only, and no page reached here states the ' +
      'rival explanation that Halifax withdrew because Chamberlain would not accept a war cabinet ' +
      'excluding Lloyd George. What is corroborated is that the choice lay between Halifax and Churchill, ' +
      'that Halifax ruled himself out, and that Chamberlain resigned on 10 May 1940 with Churchill ' +
      'appointed in his place.',
  },
  {
    topic:
      'The Bulgarian days, and Yugoslavia’s',
    range:
      'Bulgaria’s accession is dated 1 March 1941 by two accounts, and one of them gives the hour of ' +
      'signing as 1.35 in the afternoon, and the ratification by the National Assembly on 2 March as “140 ' +
      'votes to 20” in one account and “by a vote of 140 to 20” in the other; the hour is printed by one ' +
      'only. Yugoslavia’s signing on 25 March 1941 and the coup in Belgrade on 27 March are printed by one ' +
      'account only. The atlas gives 1 March for Bulgaria, where two publishers agree, and no day at all ' +
      'for Yugoslavia, and carries the single-sourced hour and the Yugoslav days here instead.',
  },
  {
    topic:
      'What the agreement of July 1941 said about frontiers',
    range:
      'The agreement of 12 July 1941 is two clauses on mutual assistance and no separate peace, and the ' +
      'copy published by the Avalon Project carries no protocol of any kind. The recognition of the Soviet ' +
      'frontiers of 1939-40 that is usually attached to this agreement is in a secret protocol, and no ' +
      'copy of that protocol was reached here, so the atlas says nothing about the Baltic frontier beyond ' +
      'that the question was left unresolved. What the frontier argument was about is visible in the other ' +
      'direction in the treaty of 26 May 1942, which was signed instead.',
  },
  {
    topic:
      'The dates given in the account',
    range:
      'The First Protocol was signed on 1 October 1941, and four publishers print that day; the conference ' +
      'opened with the delegations’ arrival on 28 September 1941, which three of them print, while the ' +
      'encyclopaedia dates the conference 29 September to 1 October. The figures the protocol promised — ' +
      '400 aircraft and 500 tanks a month — are printed by two publishers, 10,000 trucks by one, so the ' +
      'atlas gives no figures. The treaty that replaced the agreement is dated 26 May 1942 on the document ' +
      'itself and by a university collection, both writing the day in the American order. The later ' +
      'conferences and the postwar frontier of Poland are the atlas’s own summary, and no source read here ' +
      'gives their dates.',
  },
  {
    topic:
      'The minute the instrument of surrender took effect, 2 September 1945',
    range:
      '09:25 Japan standard time comes from English Wikipedia, and the bibliography row for that article ' +
      'already notes that no other account in this atlas’s reach gives it; the US Naval History and ' +
      'Heritage Command prints 0925 as the close of the signing ceremony, which is not the same claim.',
  },
  {
    topic:
      'The dissolution of Manchukuo, August 1945',
    range:
      '20 August comes from one Wikipedia infobox; that article’s prose puts the dissolution after the ' +
      'September surrender and the abdication on 17 August, and 18 August also circulates.',
  },
  {
    topic:
      'The date of the directive carrying General Order No. 1',
    range:
      'The State Department’s edition of the 1945 papers dates it “Washington, August 15, 1945”; the ' +
      '17 August approval date follows English Wikipedia, and the 10 August origin of the 38th ' +
      'parallel line rests on a participant’s memoir.',
  },
  {
    topic:
      'Schacht’s resignation from the Economics Ministry, November 1937',
    range:
      'The Nuremberg judgement records that Hjalmar Schacht went on leave from the Ministry of Economics on ' +
      '5 September 1937 and resigned as Economics Minister on 16 November 1937, whereas other reference ' +
      'accounts print 26 November 1937 (when the resignation was publicly announced). Both the judgement, ' +
      'the contemporary FRUS record and Wikipedia agree on 20 January 1939 for his dismissal as ' +
      'President of the Reichsbank, so the card is dated 20 January 1939 and leaves the November 1937 ' +
      'day in the note.',
  },
  {
    topic:
      'Orders of battle and losses on the Coral Sea, Java Sea, Philippine Sea and Hump lines',
    range:
      'Wikipedia lists 650,000 tons over 42 months for the Hump airlift, 2,300 Allied killed and 5 warships sunk at the Java Sea, 7 fleet and 8 light carriers at the Philippine Sea, and 2 fleet carriers with 128 aircraft at the Coral Sea; the HyperWar official volumes reached here confirm the anchorages, passages, and operational dates without repeating those totals, so the figures sit here rather than on the map lines.',
  },  {
    topic:
      'The day of the Tulagi landings, 3 to 4 May 1942',
    range:
      'The encyclopaedia gives 3–4 May and dates the landings themselves to 3 May; the combat narrative ' +
      'for the neighbouring theatre has the ships in Tulagi Harbor gone on 4 May, the day the American ' +
      'carriers struck. The card prints the attack, not the landing day.',
  },
  {
    topic:
      'Whether the Coral Sea was a Japanese tactical victory',
    range:
      'The encyclopaedia says the battle was a tactical victory for Japan in terms of ships sunk and a ' +
      'strategic check overall; the independent account calls it the first major Japanese setback of the ' +
      'war. The card prints the check, not the verdict.',
  },
  {
    topic:
      'The end of the Java Sea action and the destroyers lost',
    range:
      'The combat narrative for the theatre puts the action ended by 5 p. m. local time on 27 February and ' +
      'names the destroyers Kortenaer, Electra and Jupiter among the losses; no other account reachable ' +
      'from here gives either.',
  },
  {
    topic:
      'Flag Officer Doorman’s death',
    range:
      'The encyclopaedia kills him with his own ship, which went down to progressive flooding over several ' +
      'hours; the campaign history for the theatre lists the ship among the lost without the officer, and ' +
      'no account here fixes the hour or the position.',
  },
  {
    topic:
      'What the Japanese escort lost, 27 February 1942',
    range:
      'The campaign history for the theatre hedges it at two or three cruisers and at least two or three ' +
      'destroyers severely hit, some of them probably sunk; the encyclopaedia’s loss table for the same ' +
      'action gives 36 killed and three destroyers and one transport damaged. Neither total is printed in ' +
      'the account of the battle.',
  },
  {
    topic:
      'The Japanese carrier losses on 19 June 1944',
    range:
      'The combat narrative for the theatre prints 90 per cent of the air groups destroyed in two days; ' +
      'the independent account prints 430 aircraft available and 102 left in one carrier division, and a ' +
      'fleet carrier sunk by a submarine at 16.28. No two of these figures are the same measure, so the ' +
      'card prints none of them.',
  },
  {
    topic:
      'Where the 1st Mobile Fleet retired after the Philippine Sea',
    range:
      'The combat narrative for the theatre has the fleet’s commander retiring to Truk after most of his ' +
      'carrier air strength had been diverted to Rabaul and two thirds of it lost there; no other account ' +
      'here covers the retirement.',
  },
  {
    topic:
      'The Myitkyina airfield’s first assault, 17 May 1944',
    range:
      'The combat narrative for the theatre dates the seizure of the principal airstrip to 17 May and ' +
      'calls it a stunning surprise to South East Asia Command; the campaign history for the theatre does ' +
      'not give the day, so the card’s account of the fighting does not either.',
  },
  {
    topic:
      'The death of the Japanese commander at Myitkyina',
    range:
      'The encyclopaedia alone has General Genzo Mizukami ordering the town abandoned on 3 August and ' +
      'taking his own life.',
  },
  {
    topic:
      'When the Hump airlift began',
    range:
      'The encyclopaedia begins the operation in April 1942, after the Burma Road was blocked; the air ' +
      'force history for the route dates the India-China Ferrying Service to 20 May 1942 and the first ' +
      'drafts of aircraft to 19 April to 13 May 1942; the campaign history for the theatre has 85 tons ' +
      'delivered in July 1942. This site’s line begins on 8 April 1942.',
  },
  {
    topic:
      'The tonnage flown over the Hump',
    range:
      'The encyclopaedia gives about 650,000 tons over 42 months; the campaign history for the theatre ' +
      'gives 3,706 long tons for all of 1942, 61,151 tons for 1943 and 35,131 tons in October 1944 alone; ' +
      'the air force history has 85 tons in July 1942. These are not the same totals and none is printed ' +
      'in the account of the route.',
  },
  {
    topic:
      'The day Rangoon was occupied, 1 to 3 May 1945',
    range:
      'The campaign history for the theatre has the troops landing on the morning of 1 May and Rangoon ' +
      'occupied the day after, 3 May; the encyclopaedia has patrols finding the town empty on the morning ' +
      'of 1 May and the assault divisions landing on 2 May. The card is dated to the month.',
  },
  {
    topic:
      'The day Rashid Ali seized power',
    range:
      'The official history puts the seizure of power on 3 April 1941; Wikipedia puts it on 1 April, the ' +
      'day after the Regent fled Baghdad for RAF Habbaniya. Both accounts give April, and the card is ' +
      'dated 2 May 1941, the day the air attack began, so no other day in the campaign turns on the ' +
      'difference.',
  },
  {
    topic:
      'The day Reza Shah abdicated',
    range:
      'The line begins on 25 August 1941, the day the invasion began. The official history dates the fall ' +
      'of the government and the Shah’s abdication to 28 August; Wikipedia dates the abdication to 16 ' +
      'September. Neither day is given as a date, because the month is the same either way, and this list ' +
      'is where the disagreement is kept.',
  },
  {
    topic:
      'Casualties of the invasion',
    range:
      'No casualties are given for this operation, because neither account gives any. The operation is ' +
      'described as moving against little opposition except at Ahvaz, where an attack was repelled by ' +
      'tanks and infantry before the news of the government’s fall reached the defenders.',
  },
  {
    topic:
      'The end of the East African campaign',
    range:
      'The two lines end at 8 April and 6 April 1941, which is where they stop, and the campaign is not ' +
      'dated on the map. Wikipedia dates the campaign from 10 June 1940 to 27 November 1941, with ' +
      'guerrilla warfare after that, and the last fighting was in Ethiopia and not on either of these axes.',
  },
  {
    topic:
      'Casualties and strength in East Africa',
    range:
      'No figures are given beside the lines. The only account that gives any gives campaign-wide totals ' +
      'in an infobox, including 1,154 killed and 74,550 wounded or sick among the British and Imperial ' +
      'forces and 16,966 Italians killed, and states that the figures for Italian East Africa exclude two ' +
      'fronts; those numbers cover more than the offensive drawn here, and no comparable figure is given ' +
      'for the offensive drawn here.',
  },
  {
    topic:
      'Italian losses at Keren',
    range:
      'Only one figure for the Italian dead is given anywhere here, and it is the Eritrean commander’s own ' +
      'reckoning of 3,000 killed, from the same account as the British figures. No other account here ' +
      'gives Italian losses for this battle, and prisoners are counted differently by the two accounts, so ' +
      'no Italian total appears on the map.',
  },
  {
    topic:
      'When the battle of Keren began',
    range:
      'The date given is 15 March 1941, the day the bombardment and the final assault were delivered. The ' +
      'official history describes fighting from 3 February, and Wikipedia calls the whole thing a battle ' +
      'of 53 days, which counts from the first clashes in that month. Both are said in the text above.',
  },
  {
    topic:
      'How much of the aid the corridor carried',
    range:
      'No percentage is given beside the route. The only account that states one gives 7.9 million long ' +
      'tons of the 17.5 million shipped, about 45 per cent, and the totals kept by the Soviet, British and ' +
      'American records differ, so it is kept in this list rather than in the text, as that account’s own.',
  },
  {
    topic:
      'Which ports the corridor used',
    range:
      'The line draws one Caspian crossing only, from Nowshahr, because that is the port named as the main ' +
      'one for supplies shipped across the Caspian. The same account lists Bushehr and Bandar Shahpur, and ' +
      'Basra and Umm Qasr in Iraq, as the main inbound Gulf ports, and Bandar Anzali, Bandar Abbas, ' +
      'Chabahar, Amir Abad and others as corridor ports besides, so one crossing shown is a ' +
      'simplification, and is stated here.',
  },
  {
    topic:
      'The harbour, road and railway works on the route',
    range:
      'No mileage of new road, rail or harbour work is given. The account followed here lists the ' +
      'locomotives and about 3,000 items of rolling stock and states that American and British crews ' +
      'worked the trains and trucks, and gives no construction totals, so none is given.',
  },
  {
    topic:
      'Whether the capital was worth attacking',
    range:
      'The date given is the day of the capture, not the argument about it. The official history records ' +
      'that the commander-in-chief doubted the capture would achieve any great strategical purpose and ' +
      'allowed the advance to continue when his subordinate asked to press on; no second account records ' +
      'that exchange, so it is told here as one account’s version of a decision.',
  },
  {
    topic:
      'How complete a liberation this was',
    range:
      'The capital fell in April 1941, and the same account dates the campaign to 27 November 1941 with ' +
      'guerrilla warfare in Ethiopia after that. Western Ethiopia, where the garrisons on the Gojjam road ' +
      'stood, was not cleared when the city was entered, and the last fighting in the country was months ' +
      'later and hundreds of miles to the north.',
  },
  {
    topic:
      'How far north the column from Iraq got before resistance stopped',
    range:
      'The line stops at Ahvaz, which is the furthest place on this axis that either account gives as an ' +
      'objective reached. Both record that the plan was to drive on through the Zagros passes to Qazvin, ' +
      'there to meet the Soviets coming south; ground held beyond Ahvaz before the fighting ceased is not ' +
      'stated by either, so it is not drawn.',
  },
  {
    topic:
      'Which Caspian port carried the corridor’s traffic',
    range:
      'The crossing is drawn from Nowshahr because that is the port named as the main one for supplies ' +
      'shipped out across the Caspian. The same account also lists Bandar Anzali, Bandar Abbas, Chabahar, ' +
      'Amir Abad and Bandar Torkoman among the corridor’s ports, and other accounts give the greater share ' +
      'to Bandar Pahlavi, so the single Caspian crossing drawn here leaves those others out. On the Soviet ' +
      'shore the same account names two destinations, and both are drawn.',
  },
  {
    topic:
      'The dates the corridor line is drawn for',
    range:
      'The line is drawn from October 1941, after the invasion and the first through traffic, to the end ' +
      'of the war in Europe, because that is the period for which the route was worked as a supply line. ' +
      'The account followed here gives no month for the opening or the closing of the route, so the two ' +
      'ends of the line are chosen from the events that bound it and are not given as dates taken from a ' +
      'page.',
  },
  {
    topic:
      'The Italian order of battle in Eritrea',
    range:
      'No order of battle is given beside the line. The official history gives the dispositions at the end ' +
      'of December 1940 as three colonial divisions and three colonial brigades in Eritrea under General ' +
      'Frusci, and three colonial brigades at Gallabat and Metemma. Those are the troops available when ' +
      'the attack was planned, not a count in the field in January 1941, and no other account gives them.',
  },
  {
    topic:
      'Where the Sudan axis begins on the map',
    range:
      'The line begins at Gallabat, on the frontier, because the fighting that led up to this offensive ' +
      'began with the frontier posts, and the official history names Gallabat among the ground lost in ' +
      '1940 and proposed for attack in November. The advance of January 1941 itself started from Kassala, ' +
      'which is the second place on the line.',
  },
  {
    topic:
      'The date Mogadishu was entered',
    range:
      'The line prints no date for Mogadishu. The official history puts the capture of Kismayu and ' +
      'Mogadishu together in the same February advance and gives the pursuit that followed as over 1,000 ' +
      'miles; only Wikipedia dates the entry to 25 February 1941, and no other account here gives the day, ' +
      'so the text says later in the month instead of a date.',
  },];
