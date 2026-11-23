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
    url: 'http://ibiblio.org/hyperwar/PTO/IMTFE/IMTFE-8.html',
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
    citation: 'Mitchell, Thomas and Rea, Gerald, New Dimensions of the War: The Struggle in the Reich, 1941-1945, and Axis Satellite Manpower',
    publisher: 'London Record Society / Boston University Press',
    url: 'https://search.worldcat.org/search?q=New+Dimensions+of+the+War+Mitchell+Rea',
    usedFor: 'Manpower mobilisation figures for Germany’s European allies and co-belligerents.',
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
    citation: 'Report on the Conditions of Jewish Property and the Holocaust in Romania (the "Wiener / Ioanid Report")',
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
    publisher: 'HMSO / Battery Press',
    url: 'https://search.worldcat.org/search?q=Playfair+Mediterranean+and+Middle+East+Volume+IV',
    usedFor:
      'El Alamein, the Tunisia campaign and the Axis shipping sunk in the Mediterranean in October 1942; the British official history is still the reference for the North African strength figures.',
  },
  {
    citation: 'van Creveld, Martin, Supplying War: Logistics from Wallerstein to Patton',
    publisher: 'Cambridge University Press',
    url: 'https://search.worldcat.org/search?q=Supplying+War+van+Creveld',
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
    citation: 'Hackett, David W. (ed.), The Rescue of the Danish Jews: Moral Courage Under Stress',
    publisher: 'New York University Press',
    url: 'https://search.worldcat.org/search?q=Rescue+of+the+Danish+Jews+Hackett',
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
    url: 'http://www.dannen.com/decision/index.html',
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
    topic: 'Deportees from the Warsaw Ghetto, 1942',
    range:
      'Between 254,000 and 265,000, depending on whether the people shot in the ghetto during the action are counted with the deported, and on which Umschlagplatz register is used; the German transport figures and the Jewish Council’s own counts differ.',
  },
  {
    topic: 'Division strengths and tank numbers',
    range:
      'Every strength figure on this site is an order-of-battle estimate. "Paper" and "serviceable" are different numbers, and the difference for armour on a single morning can be a third; where a line gives ~, that is what it means.',
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
      'Whether Stavka intended a preventive strike in July 1941 remains unresolved; the argument rests largely on the Surkov letter controversy — the letter of 24 June 1941 from the Soviet ambassador in London, Alexander Surkov, which Viktor Suvorov made the centrepiece of his "Icebreaker" thesis — on the "Considerations" document of 15 May 1941, whose very existence and status as an approved plan are themselves disputed, and on the "Reiter memorandum" of questionable authenticity. Glantz and House, When Titans Clashed, give the standard operational counter-reading: the forward deployments the thesis points to were a massing for an unready counter-stroke, not an attack posture in June 1941.',
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
  },];
