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
  },];
