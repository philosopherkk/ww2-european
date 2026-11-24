/**
 * Sources and Uncertainties — the Great War, 1914–1918.
 *
 * Every printed authority behind the tables in `stats.ts` is listed here with
 * what it counts and where its numbers stop, because the totals on this site
 * are not a single agreed set: they are the figures these sources actually
 * print, with their disagreements stated. The statistical core is the printed
 * interwar accounting — the British War Office returns of 1922, the US War
 * Department return of 25 February 1924, the replies of seventeen governments
 * to the International Labour Office questionnaire of 1923–25, the German
 * _Sanitätsbericht_, Huber, Mortara and Hersch — together with the later
 * revisions of Urlanis, Erlikman and Erickson. The narrative spine and the
 * campaign accounts rest on the official histories and on the standard recent
 * scholarship named below.
 *
 * The `url` field points at a page for the work: a digitised copy, a catalogue
 * record, or the publisher's page. A book with no stable page online is cited
 * by publisher and year, and pointed at the essay or catalogue entry that
 * carries its figures.
 */

export interface Source {
  /** Short-form citation used throughout the site */
  citation: string;
  /** Publisher or institution behind the source */
  publisher: string;
  /** URL where the source (or its record) can be found */
  url: string;
  /** What this site uses it for — one or two sentences of plain prose */
  usedFor: string;
}

export const SOURCES: Source[] = [  {
    citation:
      'Jack Kavanagh, “Map of Europe, c. 1914”, University College Dublin, 2026',
    publisher: 'University College Dublin, deposited in Zenodo, DOI 10.5281/zenodo.20119653',
    url: 'https://zenodo.org/records/20119653',
    usedFor:
      'The base map. One boundary state for July 1914, published as CC BY 4.0; every month on the map is drawn from it, clipped and simplified by scripts/build-ww1-border-data.mjs.',
  },
  {
    citation: 'Natural Earth, 1:50m Admin 0 – Countries',
    publisher: 'Natural Earth, public domain',
    url: 'https://www.naturalearthdata.com/',
    usedFor:
      'The coast of the island of Ireland only: the base map draws it with straight chords across the eastern bays, so its outline is unioned with this one by scripts/build-ww1-border-data.mjs.',
  },
  {
    citation:
      'Great Britain, War Office, _Statistics of the Military Effort of the British Empire during the Great War, 1914–1920_ (London: His Majesty’s Stationery Office, 1922)',
    publisher: 'His Majesty’s Stationery Office, London',
    url: 'https://archive.org/details/statisticsofmili00grea',
    usedFor:
      'British and imperial mobilised strength and deaths; the returns for the dominions and India; the German, Austro-Hungarian, Turkish, Bulgarian and Belgian figures this site quotes for the other side, including the Bulgarian War Office breakdown of killed, dead of wounds and dead of disease.',
  },
  {
    citation:
      'Statistics Branch, General Staff, United States War Department, “Military Casualties — World War — Estimated”, 25 February 1924',
    publisher:
      'Statistics Branch, General Staff, War Department, Washington, 1924; the return is a printed table of two pages and no digital copy of it is online, so the address is the Library of Congress catalogue search that holds the record',
    url: 'https://www.usma.edu/library/',
    usedFor:
      'The comparative table of deaths by country behind most of the military columns: Germany 1,773,700, France 1,357,000, Italy 650,000, Russia 1,700,000, the United States 126,000, Japan 300. It counts battle deaths and deaths in captivity on the frontiers of 1914, which is where its German total falls short.',
  },
  {
    citation:
      'Leonard P. Ayres, _The War with Germany: A Statistical Summary_, second edition, General Staff, War Department (Washington: Government Printing Office, 1919)',
    publisher: 'Government Printing Office, Washington',
    url: 'https://archive.org/details/warwithgermanyst01unit',
    usedFor:
      'The American counting of the war as it stood at the armistice: mobilisation and movements overseas, casualties by cause and by month, and the sickness and influenza returns of the camps and the ports. It is the companion document to the 1924 return above, and the base of the United States columns.',
  },
  {
    citation:
      'International Labour Office, _Enquête sur la production. Rapport général_, volume IV, “Les tués et les disparus” (Paris: Berger-Levrault, 1923–25)',
    publisher:
      'Geneva: International Labour Office, 1923–25 (OCLC 6445561); no digital copy of the report is online, so the address is that of the issuing institution',
    url: 'https://www.ilo.org/',
    usedFor:
      'The replies of seventeen governments giving dead and missing against mobilised: Austria 1,542,817 on 9,000,000; Yugoslavia 13,325; Bulgaria 32,772; Rumania 250,000; Portugal 4,000; Japan 4,661; the Petrograd reply of 1918 behind the Russian 1,700,000. Used for mobilised strength where no other published return exists, for Montenegro and for neutral strength.',
  },
  {
    citation:
      'Heeres-Sanitätsinspektion des Reichswehrministeriums (ed.), _Sanitätsbericht über das deutsche Heer (Deutsches Feld- und Besatzungsheer) im Weltkriege 1914/18_, 3 volumes (Berlin: Reichswehrministerium, 1934–1938)',
    publisher: 'Heeres-Sanitätsinspektion des Reichswehrministeriums, Berlin',
    url: 'https://www.awm.gov.au/collection/LIB8823',
    usedFor:
      'The German medical department’s accounting for the war, printed 1934–38, which is the origin of the German military total of 2,037,000 as Urlanis reads it, of whom about 1,796,000 were killed or died of wounds and gas. It also gives the German wounded by cause and the prisoners who died in captivity. Rüdiger Overmans, James McRandle, James Quirk and Antoine Prost revised these registers upwards to the 2,037,000 this site prints; the volumes do not print that total themselves, so the series is quoted here through Urlanis and through the German war-losses survey named below. A set is held in the library of the Australian War Memorial at https://www.awm.gov.au/collection/LIB8823',
  },
  {
    citation: 'Boris Urlanis, _Wars and Population_ (Moscow, 1971)',
    publisher: 'Moscow, 1971',
    url: 'https://archive.org/details/warspopulationurlanis',
    usedFor:
      'The Eastern Front totals: the reading of the German Sanitätsbericht behind 2,037,000 German military deaths; Russian military deaths of 1,811,000 and 1,500,000 privation deaths to the end of 1917; Greek military deaths of 26,000; Bulgarian excess mortality of 100,000; and the Serbian and Montenegrin combined total of 728,000. The catalogue record of the copy above shows no imprint, so the year is taken from the literature that quotes it.',
  },
  {
    citation:
      'Giorgio Mortara, _La Salute pubblica in Italia durante e dopo la guerra_ (Bari: Laterza, 1925)',
    publisher: 'Gius. Laterza & Figli, Bari, 1925; the English edition in Yale University Press, New Haven, 1926',
    url: 'https://archive.org/details/lasalutepubblica00mort',
    usedFor:
      'Italian military deaths of 709,000 including disease and captivity after Caporetto, and 3,400 civilians killed by military action in his own tables. The 1914-1918-online survey of Italian losses follows the same figure.',
  },
  {
    citation:
      'Liebmann (Léon) Hersch, “La mortalité causée par la guerre mondiale”, _Metron_, vol. VII, no. 1 (Perugia, 1927)',
    publisher: 'Metron — The International Review of Statistics',
    url: 'https://encyclopedia.1914-1918-online.net/article/war-losses/',
    usedFor:
      'Excess civilian mortality by country, and the only published Italian and Serbian military totals that cover Serbians and Montenegrins together: 300,000. French civilians 300,000, British 107,000, Italian privation 589,000 with 432,000 influenza, Portuguese 82,000 with 138,000 influenza, Belgian 62,000, Greek 150,000, Rumanian indirect 430,000. The article is not online; the author, title and volume are as printed in the bibliography of the encyclopedia survey of health, disease and demographic effects, to which the address points.',
  },
  {
    citation:
      'Leo Grebler and Wilhelm Winkler, _The Cost of the World War to Germany and to Austria-Hungary_ (New Haven: Yale University Press for the Carnegie Endowment for International Peace, 1940)',
    publisher: 'Yale University Press, New Haven, for the Carnegie Endowment for International Peace',
    url: 'https://archive.org/details/costofworldwarto0000leog',
    usedFor:
      'The German and Austro-Hungarian economic and human accounts, and the 1940 Carnegie revision of the blockade death toll, which put the German civilian dead of hunger and disease above 600,000 against the 424,000 of the 1928 study and the German Board of Public Health’s 762,796.',
  },
  {
    citation:
      'Samuel Dumas with K. O. Vedel-Petersen, _Losses of Life Caused by War_ (Oxford: The Clarendon Press, H. Milford, 1923)',
    publisher: 'Clarendon Press, Oxford, for the Carnegie Endowment for International Peace',
    url: 'https://archive.org/details/lossesoflifecaus00samu',
    usedFor:
      'The first attempt to total the war’s human losses across all the belligerents at once, working from the national statistical returns: French, Belgian, Serbian and Rumanian civilian tables, the deaths of the blockade, the Armenian deportations and the influenza year. These are the civilian tables the later writers argue with.',
  },
  {
    citation:
      'Philip J. Haythornthwaite (ed.), _The World War One Source Book_ (London: Arms and Armour Press, 1994)',
    publisher: 'Arms and Armour Press, London',
    url: 'https://archive.org/details/worldwaronesourc0000hayt',
    usedFor:
      'The 1914 census populations of the belligerent states, pages 382 and 383, which are the population figures in the tables. The strength figures for Austria-Hungary, Turkey, Montenegro, Japan and neutral Europe are the same returns. The copy above is the 1996 impression; the site follows the 1994 first edition of the same text.',
  },
  {
    citation:
      'Edward J. Erickson, _Ordered to Die: A History of the Ottoman Army in the First World War_ (Westport, Connecticut: Greenwood Press, 2001)',
    publisher: 'Greenwood Press, Westport, Connecticut',
    url: 'https://archive.org/details/orderedtodiehist0000eric',
    usedFor:
      'The Ottoman Army: 2,850,000 mobilised, 3,020,000 effective strength on the mobilisation registers, and the reconstruction of 771,844 military dead from the same archives as the official Turkish total of 325,000. Also the order of battle and strength returns for Sarikamish, Gallipoli, Palestine and the Caucasus.',
  },
  {
    citation:
      'Michel Huber, _La Population de la France pendant la guerre_ (Paris: Publications de La Population française, for the Carnegie Endowment for International Peace, 1931)',
    publisher: 'Publications de La Population française, Paris, for the Carnegie Endowment for International Peace',
    url: 'https://encyclopedia.1914-1918-online.net/article/war-losses-france/',
    usedFor:
      'French military deaths of 1,397,800, of which 1,150,000 killed or missing in action, worked from the civil registers of the 1911 and 1921 censuses rather than from the ministry returns, which is why the total sits above the War Office figure of 1,357,000. The address above is Alexandre Lafon’s survey of French losses, in which this accounting is discussed; the printed volume has no online copy.',
  },
  {
    citation:
      'V. V. Erlikman, _Poteri narodonaseleniia v XX veke: spravochnik_ [Population Losses in the Twentieth Century: A Handbook] (Moscow: Russkaia panorama, 2004)',
    publisher: 'Russkaia panorama, Moscow',
    url: 'https://www.labirint.ru/books/385091/',
    usedFor:
      'The eastern and southern civilian tables: Russian civilian deaths of 1,140,000 for 1914 to 1917 on the 1914 borders, made of 410,000 killed in the fighting and 730,000 excess deaths; 120,000 civilians killed on the Eastern Front for Austria-Hungary; Rumanian civilian deaths of 330,000; Serbian civilians; and the Ottoman minority total of about 2.2 million with a further 1.0 million from famine and disease. The address is the bookseller’s record for the edition, which shows the author as Vadim V. Erlikman, the publisher as Russkaia panorama, 2004, ISBN 5-93165-107-1.',
  },
  {
    citation:
      'Bundesministerium für Heereswesen and the Kriegsarchiv, _Österreich-Ungarns letzter Krieg 1914–1918: Kriegstagebuch_, edited by Edmund Glaise-Horstenau (Vienna: Verlag der Militärwissenschaftlichen Mitteilungen, 1930–38)',
    publisher: 'Verlag der Militärwissenschaftlichen Mitteilungen, Vienna',
    url: 'https://archive.org/details/sterreichungar04austuoft',
    usedFor:
      'Austro-Hungarian military deaths of 1,494,200 — 1,016,200 killed and 478,000 who died in captivity — from volume VII, appendix 37, which is the printed origin of the figure often repeated as 1.1 to 1.2 million with 600,000 prison-of-war deaths attached to it. The diary volumes carry the Austro-Hungarian account of the invasions of Serbia in 1914, the Carpathians, the Gorlice–Tarnów breakthrough and Caporetto.',
  },
  {
    citation:
      'James E. Edmonds, _History of the Great War based on Official Documents: Military Operations France and Belgium, 1916, volume II_ (London: Macmillan and Co., 1938)',
    publisher: 'Macmillan and Co., London',
    url: 'https://archive.org/details/in.ernet.dli.2015.210680',
    usedFor:
      'The Somme from the documents the Historical Section held: the bombardment and the attack of 1 July 1916, the divisional returns behind 57,470 British Empire casualties of whom 19,240 were killed, and the fighting that carried the battle into the autumn.',
  },
  {
    citation:
      'James E. Edmonds, _History of the Great War based on Official Documents: Military Operations France and Belgium, 1918, volume I: The German March Offensive and its Preliminaries_ (London: His Majesty’s Stationery Office, 1935)',
    publisher: 'His Majesty’s Stationery Office, London',
    url: 'https://archive.org/details/historyofgreatwa0000unse_r2f1',
    usedFor:
      'The German spring offensives of 1918 from the British and German documents: the preliminary bombardment, the attack on the Fifth Army positions in March, the returns of prisoners and guns taken, and the instructions under which the assault divisions were trained.',
  },
  {
    citation:
      'Brigadier-General Sir James E. Edmonds and Lieutenant-Colonel R. Maxwell-Hyslop, _Military Operations France and Belgium, 1918, volume V: 26th September – 11th November. The Advance to Victory_ (London: His Majesty’s Stationery Office, 1947)',
    publisher: 'His Majesty’s Stationery Office, London',
    url: 'https://archive.org/details/mil-op-fb-1918-v5',
    usedFor:
      'The Hundred Days from the Hindenburg Line to the Armistice, the relief and refit of German divisions behind each army front, and the Armistice terms as the Armistice Commission recorded them day by day.',
  },
  {
    citation:
      'Cyril Falls, _History of the Great War based on Official Documents: Military Operations Macedonia, from the Outbreak of War to the Spring of 1917_ (London: His Majesty’s Stationery Office, 1933)',
    publisher: 'His Majesty’s Stationery Office, London',
    url: 'https://archive.org/details/military-operations-macedonia-vol-1',
    usedFor:
      'The Salonika expedition and the Serbian campaign from the Allied documents: the landings, Kosturino and the Doiran fighting, the Serbian retreat of 1915 and the reconstitution of the Serbian army in Corfu. It is the Allied companion to the Serbian official history.',
  },
  {
    citation:
      '_Les Armées françaises dans la Grande Guerre_, Historical Section of the General Staff, first and second series with the documentary annexes (Paris: Imprimerie Nationale, 1922–1939)',
    publisher: 'Imprimerie Nationale, Paris',
    url: 'https://archive.org/details/lesarmeesfrancaisesdanslagrandeguerrep38',
    usedFor:
      'The French official narrative of the western and Balkan fronts, built from the daily reports and divisional diaries held by the Ministry of War: Verdun including Fort Douaumont and Fort Vaux, the Somme, the Second Battle of Champagne and the planning behind the Chemin des Dames assault, and the volumes on the Armée d’Orient behind the Salonika account.',
  },
  {
    citation:
      '1914-1918-online: International Encyclopedia of the First World War (Berlin: Freie Universität Berlin, 2014– ). ' +
      'Six entries in this list link here, because the loss tables of the International Labour Office questionnaire, ' +
      'of Hersch in _Metron_ and of Huber’s French census study are set out in this encyclopaedia’s war-losses ' +
      'articles while the printed volumes are not online. The site answers scripts and bots with a “making sure ' +
      'you’re not a bot” page; the article links were checked through the Internet Archive and every one is live.',
    publisher: 'Freie Universität Berlin',
    url: 'https://encyclopedia.1914-1918-online.net/',
    usedFor:
      'Peer-reviewed national surveys used to check the tables and to locate the disputes: the essays on war losses in general and in Germany, France, Italy, the Russian Empire and the Ottoman Empire, on the naval blockade of Germany, on the influenza pandemic, on food and nutrition, on prisoners of war, Ottoman losses by Mehmet Fatih Baş, Italian losses by Pierluigi Scolè, Serbia by Mile Bjelajac, the Armenian genocide by Ronald Grigor Suny, prisoners of war by Heather Jones, and health, disease and demographic effects by Doina Anca Cretu, whose bibliography prints the Metron reference above. Every essay ends with a bibliography of the printed sources, which is how several of the works above were traced.',
  },
  {
    citation:
      'Antoine Prost, “War Losses”, _1914-1918-online: International Encyclopedia of the First World War_, version 1.0 of 8 October 2014',
    publisher: 'Freie Universität Berlin',
    url: 'https://encyclopedia.1914-1918-online.net/article/war-losses/',
    usedFor:
      'How the military returns were put together and where they stop: the categories of killed, dead of wounds, missing and dead of sickness between which the same army’s total can double, the 38,000 American soldiers who died of illness on American soil, and Mortara’s case that the Italian figure of 578,000 was an underestimate.',
  },
  {
    citation:
      'Robert Weldon Whalen, “War Losses (Germany)”, _1914-1918-online: International Encyclopedia of the First World War_, version 1.0 of 8 October 2014',
    publisher: 'Freie Universität Berlin',
    url: 'https://encyclopedia.1914-1918-online.net/article/war-losses-germany/',
    usedFor:
      'The German totals and their revisions: the Sanitätsbericht as the base, Urlanis’s German dead year by year, the upward revision by Overmans, McRandle, Quirk and Prost to 2,037,000, and the 763,000 blockade deaths and 150,000 influenza deaths the German government put forward after the armistice.',
  },
  {
    citation:
      'Alexandre Sumpf, “War Losses (Russian Empire)”, _1914-1918-online: International Encyclopedia of the First World War_, version 1.0 of 5 July 2018',
    publisher: 'Freie Universität Berlin',
    url: 'https://encyclopedia.1914-1918-online.net/article/war-losses-russian-empire/',
    usedFor:
      'Why the Russian column is a range rather than a figure: about 5.5 million of 16 million soldiers killed and wounded, 500,000 missing, 3 million prisoners, 1.1 million disabled and 6 million refugees, and the civil war which delayed the accounting and changed what it counted.',
  },
  {
    citation:
      'Alan Kramer, “Naval Blockade (of Germany)”, _1914-1918-online: International Encyclopedia of the First World War_, version 1.0 of 22 January 2020',
    publisher: 'Freie Universität Berlin',
    url: 'https://encyclopedia.1914-1918-online.net/article/naval-blockade-of-germany/',
    usedFor:
      'The blockade as a disputed cause of death: German imports down to a fifth of their pre-war volume by 1918, the case that neutral trade and neutral restraint explain as much of that fall as the blockade itself, and German excess mortality of about one per cent of the population against 1.3 per cent in Britain.',
  },
  {
    citation:
      'Howard Phillips, “Influenza Pandemic”, _1914-1918-online: International Encyclopedia of the First World War_, version 1.0 of 8 October 2014',
    publisher: 'Freie Universität Berlin',
    url: 'https://encyclopedia.1914-1918-online.net/article/influenza-pandemic/',
    usedFor:
      'The pandemic of 1918 to 1919: why the name is wrong, the order of 50 million deaths in eighteen months, and the barracks, troopships, troop trains and prisoner-of-war camps in which the virus travelled. It is the reason the influenza line is kept separate from the battle dead in the tables.',
  },
  {
    citation:
      'Australian War Memorial, collection records, encyclopedia and unit war diaries (Canberra: Australian War Memorial)',
    publisher: 'Australian War Memorial, Canberra',
    url: 'https://www.awm.gov.au/',
    usedFor:
      'Gallipoli, the Western Front and the Australian Imperial Force from the Australian side: the unit war diaries and collection records behind the figures for the landing of April 1915 and for Villers-Bretonneux and Amiens, and the library copy of the German Sanitätsbericht noted above.',
  },
  {
    citation:
      'The National Archives, War Office and Committee of Imperial Defence records, including the working files of the Historical Section (Kew: The National Archives)',
    publisher: 'The National Archives, Kew',
    url: 'https://www.nationalarchives.gov.uk/',
    usedFor:
      'The file series the British official histories were compiled from, the War Office returns behind the 1922 statistics, and the War Diary and despatch material behind the Western Front, Italian and Macedonian accounts on this site.',
  },
  {
    citation:
      'United States National Archives and Records Administration, Records of the American Expeditionary Forces (College Park, Maryland: National Archives)',
    publisher: 'United States National Archives and Records Administration',
    url: 'https://www.archives.gov/',
    usedFor:
      'Records of the American Expeditionary Force behind the Saint-Mihiel and Meuse-Argonne accounts, and the influenza cases in the camps and in the First Army in September and October 1918.',
  },
  {
    citation: 'Christopher Clark, _The Sleepwalkers: How Europe Went to War in 1914_ (London: Allen Lane, 2012)',
    publisher: 'Allen Lane, London',
    url: 'https://www.penguin.co.uk/books/55884/the-sleepwalkers-by-clark-christopher/9780141027821',
    usedFor:
      'The July crisis of 1914 and the question of how far each government chose war: the serial failures of the Austro-Serbian exchange, the German backing for Vienna, the Russian partial then general mobilisation, and the decision-making in Paris, London and Berlin. It is the main support for the site’s treatment of who was responsible, against the Fischer thesis and its critics.',
  },
  {
    citation:
      'Holger H. Herwig, _The First World War: Germany and Austria-Hungary, 1914–1918_ (London: Arnold, 1997)',
    publisher: 'Arnold, London',
    url: 'https://archive.org/details/firstworldwarger0000herw',
    usedFor:
      'The Central Powers as the narrative spine: the failure of German resources and management, Austria-Hungary’s dependence on Germany, the campaigns of 1914 including Tannenberg and the Marne, the blockade and the home fronts, the offensives of 1918 and the revolutions that ended the war.',
  },
  {
    citation: 'Hew Strachan, _The First World War, volume I: To Arms_ (Oxford: Oxford University Press, 2001)',
    publisher: 'Oxford University Press, Oxford',
    url: 'https://archive.org/details/the-first-world-war-vol.-i-to-arms-hew-strachan',
    usedFor:
      'The war’s first years and what kind of war the staffs had prepared for: the mobilisation figures, the economics of the coming conflict, the campaigns of 1914 in the east and the Balkans, the colonial theatres, and the Ottoman entry down to Sarikamish.',
  },
  {
    citation:
      'David Stevenson, _Cataclysm: The First World War as Political Tragedy_ (New York: Basic Books, 2004)',
    publisher: 'Basic Books, New York',
    url: 'https://archive.org/details/cataclysmfirstwo0000stev',
    usedFor:
      'The political history of the whole war, used for the escalation of aims and of violence: the blockade and its consequences, the arithmetic of attrition on the Western Front, the peace feelers, the collapses of 1917 and 1918, and the settlement.',
  },
  {
    citation: 'Lawrence Sondhaus, _World War I: The Global Revolution_ (Cambridge: Cambridge University Press, 2011)',
    publisher: 'Cambridge University Press, Cambridge',
    url: 'https://archive.org/details/worldwariglobalr0000sond',
    usedFor:
      'The maritime, global and political dimensions of the war: the blockade and the naval campaign, the entry of Italy, the United States and Japan, the revolutions in Russia, and the national settlements that followed the armistice.',
  },
  {
    citation:
      'David Fromkin, _A Peace to End All Peace: The Fall of the Ottoman Empire and the Creation of the Modern Middle East_ (New York: Avon Books, 1990)',
    publisher: 'Avon Books, New York',
    url: 'https://archive.org/details/peacetoendallpea0000from_v3t9',
    usedFor:
      'The Ottoman war and the partition that followed: the passage of Goeben and Breslau to Constantinople, the Armenian deportations as contemporaries reported them, the Arab Revolt, Palestine and Mesopotamia, and the argument over Syria and Mosul.',
  },
  {
    citation:
      'Sean McMeekin, _The Russian Origins of the First World War_ (New Haven: Yale University Press, 2011)',
    publisher: 'Yale University Press, New Haven',
    url: 'https://yalebooks.yale.edu/book/9780300168779/the-russian-origins-of-the-first-world-war/',
    usedFor:
      'The case that Saint Petersburg chose war for Constantinople and the straits, which is the site’s counterweight to the Fischer thesis and to Clark’s reading of 1914, and the source of the argument about Russian mobilisation and war aims in July 1914.',
  },
  {
    citation:
      'Sean McMeekin, _The Ottoman Endgame: War, and the Making of the Modern Middle East, 1908–1923_ (New Haven: Yale University Press, 2015)',
    publisher: 'Yale University Press, New Haven',
    url: 'https://yalebooks.yale.edu/book/9780300217680/the-ottoman-endgame/',
    usedFor:
      'Anatolia, the Caucasus, the Arab provinces and the losses of the Ottoman peoples: the campaign at Sarikamish, the deportations and the massacres that followed them, the famine in Mount Lebanon, and the postwar settlement in Anatolia and Thrace.',
  },
  {
    citation:
      'Ronald Grigor Suny, _“They Can Live in the Desert but Nowhere Else”: A History of the Armenian Genocide_ (Princeton: Princeton University Press, 2015)',
    publisher: 'Princeton University Press, Princeton',
    url: 'https://archive.org/details/theycanliveindes0000suny',
    usedFor:
      'The Armenian case: how the Committee of Union and Progress came to deport the Armenian population of the eastern vilayets, the part played by the Special Organisation, the death marches into the Syrian desert, and the conversion and massacre that accompanied them. The standard recent account behind the figures on the 1915 cards.',
  },
  {
    citation:
      '_The Cambridge History of the First World War_, 3 volumes (Cambridge: Cambridge University Press, 2014)',
    publisher: 'Cambridge University Press, Cambridge',
    url: 'https://archive.org/details/cambridgehistory0000unse_c9t0',
    usedFor:
      'Current scholarly treatment of the military, economic, cultural and imperial history of the war, used to frame the monthly introductions and to check the campaign accounts and the home-front material against recent work.',
  },
  {
    citation: 'Schlachten des Weltkrieges, amtliche Werke des Grossen Generalstabes',
    publisher: 'Gerhard Stalling, Oldenburg, from 1921; digitised by the Internet Archive',
    url: 'https://archive.org/details/schlachtendeswel02olde',
    usedFor:
      'The German official campaign series, volume by volume and battle by battle, including the volume on the Dardanelles campaign of 1915. These are the volumes behind the German division numbers, the German casualty figures for individual battles, and the order in which the German commands responded to the offensives described on the cards. The series was compiled from the Potsdam archives, of which much was destroyed in April 1945; that is why the German record is full at army level, where the 1934 loss table survives, and thin at unit level.',
  },
  {
    citation:
      'Bean, C. E. W., The Story of ANZAC from the Outbreak of War to the End of the First Phase of the Gallipoli Campaign, 4 August 1914 – 4 May 1915, being Volume II of the Official History of Australia in the War of 1914–1918',
    publisher: 'Angus and Robertson, Sydney, 1921; digitised by the Internet Archive',
    url: 'https://archive.org/details/storyanzacvol1',
    usedFor:
      'The Australian official history of the landing at Gallipoli, the May and August offensives and the evacuation: the British and Anzac division strengths, the order of battle on the beachhead, and the casualty figures in the Anzac cards. Bean wrote as an eyewitness, and his account of the fighting on 25 April 1915 and of the August battles is the one this site follows.',
  },
  {
    citation:
      'McMeekin, Sean, The Berlin-Baghdad Express: The Ottoman Empire and Germany’s Bid for World Power',
    publisher: 'Belknap Press of Harvard University Press, Cambridge, Massachusetts, 2010; lending copy at the Internet Archive',
    url: 'https://archive.org/details/berlinbaghdadexp00sean',
    usedFor:
      'The Ottoman-German alliance, the expedition to Egypt, the Caucasus campaign and Enver Pasha’s strategic choices, and the pan-Islamic and pan-Turkish projects behind them. McMeekin’s account of Sarikamish and of the 1916 Turkish reaction in the Caucasus is the one the eastern cards use.',
  },
  {
    citation:
      'T. J. Mitchell (Major, R.A.M.C.) and G. M. Smith, _Medical Services: Casualties and Medical Statistics of the Great War_, History of the Great War Based on Official Documents',
    publisher: 'London: His Majesty’s Stationery Office, 1931; scanned by the Internet Archive',
    url: 'https://archive.org/details/casualties-medical-statistics-gw',
    usedFor:
      'The British deaths from wounds against deaths from sickness, the admission and return-to-duty rates behind the medical cards, and the tables comparing war casualties with non-war disease in the armies of the belligerents, which is where the site’s remark that sickness killed more men than shells did in some armies comes from. The link is to a scan of the bound volume rather than to a table, so the figures have to be read off the page images.',
  },
  {
    citation: 'Vincent, C. Paul, _The Politics of Hunger: The Allied Blockade of Germany, 1915–1919_',
    publisher: 'Athens, Ohio: Ohio University Press, 1985; lending copy at the Internet Archive',
    url: 'https://archive.org/details/politicsofhunger00cpau_0',
    usedFor:
      'The blockade behind the turnip winter and rationing cards: how the blockade was operated, the estimates of excess civilian death attributed to it, and the later argument over whether Germany was starved or merely underfed.',
  },
  {
    citation:
      'Clodfelter, Michael, Warfare and Armed Conflicts: A Statistical Encyclopedia of Casualty and Other Figures, 1492–2000',
    publisher: '3rd edition, McFarland, 2008; lending copy at the Internet Archive',
    url: 'https://archive.org/details/warfarearmedconf0000clod',
    usedFor:
      'The compendium the tables borrow from where a belligerent has no official table of its own, and the source of the widely quoted totals of about 9,875,000 battle deaths and some 20 million dead in all. A compilation rather than an authority: it is where a figure can be traced from, not where it originates.',
  },
  {
    citation:
      '«Население России к концу войны — 110 млн вместо 195 ожидаемых» [The population of Russia at the end of the war: 110 million instead of the 195 million expected], in the theme «Потери населения России в Первой мировой войне» [Russia’s population losses in the First World War]',
    publisher:
      'Демоскоп Weekly [Demoscope Weekly] 623–624, 15–31 December 2014; Institute of Demography, National Research University Higher School of Economics, Moscow',
    url: 'https://web.archive.org/web/20260308084710/https://www.demoscope.ru/weekly/2014/0623/tema03.php',
    usedFor:
      'A Russian-language accounting of the demographic cost of the war to Russia, with a table of total population losses 1914 to 1918 by category, and an argument that the population of the unoccupied part of Russia was about 110 million at the end of 1918 against the 195 million the pre-war projection expected. It is the nearest thing to a published reconciliation of the eastern figures, and one reason the eastern numbers on this site are stated as a spread rather than as a single figure. The link is the Internet Archive’s copy of 8 March 2026, because the publisher’s own host at www.demoscope.ru/weekly/2014/0623/tema03.php has been returning errors; the archived page carries the same title, the same figures and the same tables.',
  },
  {
    citation:
      'Ronald Grigor Suny, “The Armenian Genocide”, _1914-1918-online: International Encyclopedia of the First World War_, version 1.0 of 26 May 2015',
    publisher: 'Freie Universität Berlin',
    url: 'https://encyclopedia.1914-1918-online.net/article/armenian-genocide/',
    usedFor:
      'The deportations and killings of 1915: the orders from the Committee of Union and Progress, the role of the Special Organisation, the fate of the convoys on the road to Deir ez-Zor, and the conversion and abduction of Armenian women and children. The essay sets out the range of estimates of the dead and the reasons for it, which is how the card and the note on the Armenian toll are worded.',
  },
  {
    citation:
      'Heather Jones, “Prisoners of War”, _1914-1918-online: International Encyclopedia of the First World War_, version 1.0 of 8 October 2014',
    publisher: 'Freie Universität Berlin',
    url: 'https://encyclopedia.1914-1918-online.net/article/prisoners-of-war/',
    usedFor:
      'Captivity as part of the loss tables: the numbers held by each side, the death rates in the camps, the labour battalions, and the repatriations that ran on into 1920 and 1921. Jones is the reason the site counts prisoners who died after the armistice inside the war rather than after it, and says so.',
  },
  {
    citation:
      '“Austria-Hungary declared war against Montenegro 9th instant”, The Ambassador in ' +
      'Austria-Hungary (Penfield) to the Secretary of State, Vienna, 10 August 1914, _Foreign ' +
      'Relations of the United States, 1914, Supplement_, document 120',
    publisher:
      'US Government, Office of the Historian',
    url: 'https://history.state.gov/historicaldocuments/frus1914Supp/d120',
    usedFor:
      'The Habsburg side of Montenegro’s entry into the war, and the reason this site dates ' +
      'Austria-Hungary’s declaration to 9 August while dating Montenegro’s proclamation to the ' +
      '6th.',
  },
  {
    citation:
      'Austro-Hungarian Red Book, No. 32, Count Berchtold to von Mérey, Vienna, 4 August 1914, ' +
      'in James Brown Scott (ed.), _Diplomatic Documents Relating to the Outbreak of the ' +
      'European War_, Carnegie Endowment for International Peace, 1916',
    publisher:
      'Oxford University Press (American Branch) for the Carnegie Endowment for International ' +
      'Peace, scanned at the Internet Archive',
    url: 'https://archive.org/details/diplomaticdocume00scotuoft',
    usedFor:
      'Vienna’s attempt to keep Montenegro out of the war, quoted on the card for 6 August ' +
      '1914: the telegram promising that Austria-Hungary had no intention of waging war against ' +
      'Montenegro so long as it refrained from hostile acts.',
  },
  {
    citation:
      'Slavko Burzanović, “The Issue of Mt. Lovćen” in World War I and Italy, in _Discourses on ' +
      'Mountains of Montenegro and Slovenia_, Springer, 2026',
    publisher:
      'Springer Nature, open access',
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-99017-5_20',
    usedFor:
      'The Lovćen stakes behind the Austro-Hungarian diplomacy, Montenegro’s declaration of war ' +
      'on 6 August 1914, and the dated end of the Montenegrin war: the offensive of 5 January ' +
      '1916, Mojkovac, Lovćen, Cetinje on 13 January, and the Order of Surrender of 25 January.',
  },
  {
    citation:
      'Filip Kuzman, “Montenegro and the First World War”, _The World Remembers_',
    publisher:
      'The World Remembers (theworldremembers.org), written by the director of the National ' +
      'Museum of Montenegro',
    url: 'https://theworldremembers.org/montenegro/',
    usedFor:
      'The 6 August 1914 date for Montenegro’s entry and King Nikola’s proclamation in English, ' +
      'and the state of the Montenegrin army in August 1914.',
  },
  {
    citation:
      '“Conditions of the Armistice”, 11 November 1918, and the Luxembourg telegrams of 11 and ' +
      '15 November 1918, _Foreign Relations of the United States: The Paris Peace Conference, ' +
      '1919_, vol. II, documents 1, 378 and 380',
    publisher:
      'US Government, Office of the Historian',
    url: 'https://history.state.gov/historicaldocuments/frus1919Parisv02/d1',
    usedFor:
      'Clause II, which required the evacuation of Belgium, France and Luxemburg within fifteen ' +
      'days, and the two Washington telegrams in which Luxembourg asked the Allies to speed the ' +
      'German departure. Documents 378 and 380 sit at the same URL with the number changed.',
  },
  {
    citation:
      '“How the Grand Duchy survived the end of World War I intact”, _RTL Luxembourg_, ' +
      'Luxembourg Insider',
    publisher:
      'RTL Luxembourg (today.rtl.lu)',
    url: 'https://today.rtl.lu/luxembourg-insider/history/how-the-grand-duchy-survived-the-end-of-world-war-i-intact-1596196',
    usedFor:
      'The days of the German evacuation and the Allied arrival in November 1918: German troops ' +
      'until the 19th, American troops of the Third Army on the 21st, French troops from the ' +
      '22nd. It is the only source here that gives days rather than terms, so the card that ' +
      'uses it says so.',
  },
  {
    citation: '“The Bulgarian Armistice Convention, Signed September 29, 1918”, _Foreign Relations of the United States: The Paris Peace Conference, 1919_, vol. II, document 162',
    publisher: 'US Government, Office of the Historian',
    url: 'https://history.state.gov/historicaldocuments/frus1919Parisv02/d162',
    usedFor: 'The printed text of the convention with Bulgaria: seven numbered clauses and four secret articles — evacuation of the territory still held in Greece and Serbia, demobilisation to a fighting force of three divisions of sixteen battalions and four cavalry regiments, surrender of the arms, munitions and military vehicles of the demobilised units to be stored by the Bulgarian authorities under Allied control, restitution of the matériel of the Fourth Greek Army Corps, the troops west of the meridian of Uskub to be held as prisoners of war, four weeks for German and Austrian troops and nationals to withdraw, and orders to cease firing at the time of signature — with the passage rights, the provisional occupation of strategical points and the assurance about Sofia carried in the secret articles. The clause covering the troops west of Uskub prints no number, which is why the figure of 150,000 hostages is not printed on the card.',
  },
  {
    citation: '“American Naval Participation in the Great War (With Special Reference to the European Theater of Operations)”',
    publisher: 'Naval History and Heritage Command, US Department of the Navy',
    url: 'https://web.archive.org/web/20251208161226/https://www.history.navy.mil/research/library/online-reading-room/title-list-alphabetically/a/american-naval-participation-in-the-great-war-with-special-reference-to-the-european-theater-of-operations.html',
    usedFor: 'The American official record of Durazzo on 2 October 1918: that Germany and Austria used the port to send supplies to Bulgaria, that the port, the merchant shipping and the men-of-war at anchor were bombarded by Italian and British cruisers screened against submarine attack by destroyers and American submarine chasers, that two hostile submarines were either badly damaged or destroyed, and the depth-charge attacks by submarine chasers No. 129 and No. 215. The navy’s host does not serve this page any more, so the link is to its Internet Archive capture of 8 December 2025 of the address history.navy.mil/research/library/online-reading-room/title-list-alphabetically/a/american-naval-participation-in-the-great-war-with-special-reference-to-the-european-theater-of-operations.html.',
  },
  {
    citation: '“WWI: Submarine Chasers”, National Museum of the United States Navy',
    publisher: 'Naval History and Heritage Command, US Department of the Navy',
    url: 'https://web.archive.org/web/20251210090721/https://www.history.navy.mil/content/history/museums/nmusn/explore/photography/wwi/wwi-submarine-chasers.html',
    usedFor: 'The companion museum account of the same action, which disagrees with the official history of the same institution: it gives the force at Durazzo on 2 October 1918 as a squadron of 11 submarine chasers screening British, French and Italian naval forces, and says that the chasers destroyed the mines which threatened the bombarding ships. Cited together with the official history because the two cannot both be right about the size of the American force or the fate of the submarines. Linked through the Internet Archive capture of 10 December 2025 of the address history.navy.mil/content/history/museums/nmusn/explore/photography/wwi/wwi-submarine-chasers.html.',
  },
  {
    citation: 'Giorgio Anastasiadou, “Albania”, _1914-1918-online: International Encyclopedia of the First World War_',
    publisher: 'Freie Universität Berlin',
    url: 'https://web.archive.org/web/20260905215701/https://encyclopedia.1914-1918-online.net/article/albania/',
    usedFor: 'The political history of Albania in 1918 and the second family for the bombardment of the port on 2 October 1918: General Louis Franchet d’Espèrey led troops to Durrës and bombarded it to thwart the evacuation of the Bulgarian and German armies and, presumably, to keep the Serbs and the Italians separated. The same article is the only source for the agreement reached at Paris on 7 October 1918, led by Georges Clemenceau, allowing Italian troops to replace the French at Korçë, and so that agreement is recorded on the card rather than printed in its prose. Linked through the Internet Archive capture of 5 September 2026, because the encyclopedia’s own host returns a page with no article text on it.',
  },
  {
    citation: 'Raymond J. Sontag, “Bulgaria”, _1914-1918-online: International Encyclopedia of the First World War_',
    publisher: 'Freie Universität Berlin',
    url: 'https://web.archive.org/web/20260629080631/https://encyclopedia.1914-1918-online.net/article/bulgaria/',
    usedFor: 'The Bulgarian side of the armistice: the government’s decision on 25 September to seek an accommodation with the Entente, the delegation that went to Salonika with the American consul general in Sofia, the signing on 29 September and Bulgaria being the first of the Central Powers to leave the war, the judgement that the terms were not terribly onerous and that most of the country avoided foreign occupation, and Ferdinand’s abdication on 3 October 1918 in favour of his son Boris. Linked through the Internet Archive capture of 29 June 2026, for the same reason as the article on Albania.',
  },
  {
    citation: '“World War I and Its Effects on Albania”, _Albania: A Country Study_, edited by Raymond Zickel and Walter R. Iwaskiw, Government Printing Office for the Library of Congress',
    publisher: 'US Library of Congress, Federal Research Division',
    url: 'https://countrystudies.us/albania/23.htm',
    usedFor: 'Who held Albania when the war ended: the Austro-Hungarian withdrawal beginning within days of the Entente breakthrough north of Thessaloniki in September 1918, and Italy’s army holding most of the country, Serbia much of the northern mountains, Greece a sliver inside the 1913 borders and French forces Korçë and Shkodër, when the armistice took effect on 11 November. This is the basis for drawing Albania at peace rather than occupied, and for the uncertainty entry about its colour in the last months of 1918.',
  },
  {
    citation: '“World War I”, _Bulgaria: A Country Study_, edited by Glenn E. Curtis, Government Printing Office for the Library of Congress',
    publisher: 'US Library of Congress, Federal Research Division',
    url: 'https://countrystudies.us/bulgaria/13.htm',
    usedFor: 'The Bulgarian domestic situation behind the armistice, and a second family for the end of Ferdinand: the parties in power forced him to abdicate at the end of September because they feared full-scale revolution. It gives no day, which is why the card prints no interval between the armistice and the abdication.',
  },
  {
    citation: '“Belgrade”, _Wikipedia_',
    publisher: 'Wikimedia Foundation',
    url: 'https://en.wikipedia.org/wiki/Belgrade',
    usedFor: 'The second family for the day the capital of Serbia fell: the article dates the bombardment as starting on 6 October 1915 and the fall to German and Austro-Hungarian troops under Field Marshal August von Mackensen on 9 October of the same year, and gives the liberation by Serbian and French troops on 1 November 1918 under Marshal Louis Franchet d’Espèrey and Crown Prince Alexander, which is the date the site’s last months of 1918 turn on. The article carries no strength figures that match the armies named in its own text, so no figures are taken from it.',
  },
  {
    citation: '“Serbian campaign”, _Wikipedia_',
    publisher: 'Wikimedia Foundation',
    url: 'https://en.wikipedia.org/wiki/Serbian_campaign',
    usedFor: 'The frame of the two invasions: that Austria-Hungary declared war on 28 July 1914 and was repelled three times, that the Central Powers launched a successful invasion in 1915 and occupied Serbia, and that Serbia and its allies liberated the country in 1918 after the breakthrough in Macedonia. It is the second family for the campaign opening on 6 October 1915, and it is where the site takes the wording that Serbia was occupied and divided between the Austro-Hungarian Empire and Bulgaria.',
  },
  {
    citation: '“Battle of the Lys (1918)”, _Wikipedia_',
    publisher: 'Wikimedia Foundation',
    url: 'https://en.wikipedia.org/wiki/Battle_of_the_Lys_(1918)',
    usedFor: 'Operation Georgette on the Lys in April 1918: the objective of Ypres and the Channel ports of Calais, Dunkirk and Boulogne; the bombardment opening on the evening of 7 April and the Sixth Army attacking at dawn on the 9th with eight divisions; the Portuguese 2nd Division overrun on a front of about eleven kilometres and withdrawing towards Estaires, the British 40th Division to its north collapsing and falling back to the north, and the British 55th (West Lancashire) Division pulling back its northern brigade and holding the rest of its ground; the Fourth Army’s attack north of Armentières on 10 April against the British 19th Division and the taking of Messines; and the list of engagements with their dates, from Estaires on 9–11 April to the Scherpenberg on 29 April. It also prints the judgement that the offensive failed in its main objective to capture Hazebrouck. Its dates are the article’s own and are set against the Australian War Memorial table in the uncertainty entry for these battles.',
  },
  {
    citation: '“Armistice of 11 November 1918”, _Wikipedia_',
    publisher: 'Wikimedia Foundation',
    url: 'https://en.wikipedia.org/wiki/Armistice_of_11_November_1918',
    usedFor: 'The last deaths of the war and the way the day is remembered: George Edwin Ellison of the 5th Royal Irish Lancers killed scouting on the outskirts of Mons at around 9:30 a.m., and Private George Lawrence Price, the final Canadian and Commonwealth soldier to die, shot by a sniper at Ville-sur-Haine two minutes before the armistice went into effect. Ellison’s sentence carries a citation-needed flag in the article and Price’s is footnoted to a source this site has not followed, so both are recorded on the card as what the article reports. It is also the only family reached for the place of the signature, the railway carriage in the Forest of Compiègne, and for the description of the occasion as the eleventh hour of the eleventh day of the eleventh month.',
  },
  {
    citation: '“Hundred Days Offensive”, _Wikipedia_',
    publisher: 'Wikimedia Foundation',
    url: 'https://en.wikipedia.org/wiki/Hundred_Days_Offensive',
    usedFor: 'A second family for the town but not for the hour: the infobox gives the campaign as running from 8 August to 11 November 1918 and its location as from Amiens, France to Mons, Belgium, which is the only non-official-history statement this site reached that the offensive ended at Mons, and it prints no day on which the town was taken. Every hour on the card for the last morning at Mons therefore rests on Edmonds and Maxwell-Hyslop alone.',
  },
  {
    citation: 'Cyril Falls, _Military Operations Macedonia_, volume I (London: HMSO, 1933)',
    publisher: 'Imperial War Museums collection, scan deposited at archive.org',
    url: 'https://archive.org/details/military-operations-macedonia-vol-1',
    usedFor:
      'The second family for the fall of Belgrade in October 1915, and the source of the crossing: the British official history of the Macedonian campaign prints “The bombardment began on the 6th October and the passage of the rivers next day” and the capture “Austrians on the 9th”. It also corrects two points an earlier draft had wrong — that the German Eleventh Army was to cross the Danube between Smederevo and Ram, not at Zemun, and that the passage opened the day after the bombardment. The scan’s page furniture intrudes on the sentence about 9 October, so the quotation is given in two runs.',
  },
  {
    citation:
      'J. E. Edmonds and R. Maxwell-Hyslop, _Military Operations France and Belgium 1918_, volume V (London: HMSO, 1947)',
    publisher: 'Imperial War Museums collection, scan deposited at archive.org',
    url: 'https://archive.org/details/mil-op-fb-1918-v5',
    usedFor:
      'The hours of the last morning at Mons and the retaking of Messines village: the patrols across the canal at about 2.30 a.m., two companies in the outskirts at 4.30 a.m., “By dawn Mons was clear of the enemy”, the Advanced G.H.Q. message of 6.50 a.m., and the ridge “regained at the end of April 1918, when it was lost again by the Second Army”. This is the only source reached for those hours, so they are single-family and recorded as such; the scan is OCR, and the heading “Tue 11TH NoveMBER, 1918” and the signature sentence “The Armistice was signed at 5.5 a.m.’on the 11th Novem- ber” are quoted as printed, with page furniture inside the ridge sentence.',
  },
  {
    citation: '“First World War battles”, _Australian War Memorial encyclopedia_',
    publisher: 'Australian War Memorial',
    url: 'https://www.awm.gov.au/articles/encyclopedia/battles_first_world_war',
    usedFor:
      'The second family for the dates of the Flanders fighting of April 1918, and the reason this site discloses the numbering rather than printing it: the table gives the Lys as 9 April and Hazebrouck as 13–17 April where the battle article gives 7 April and 12–15 April, and it has no row at all for Messines in 1918. Its stated source is the Battles Nomenclature Committee’s official list of the names of battles and other engagements, which is also why the last week of the war has no official name here: the table ends at Landrecies on 4 November, with no entry for the Sambre and none for Mons. It also prints Damascus on 1 October 1918.',
  },
  {
    citation: '“Battle of the Kolubara”, _Wikipedia_',
    publisher: 'Wikimedia Foundation',
    url: 'https://en.wikipedia.org/wiki/Battle_of_Kolubara',
    usedFor: 'The December 1914 Serbian counter-offensive in detail: the counter-attack of 2 December, the recovery of Valjevo and Užice on 8 December, the Austro-Hungarian departure from Belgrade on 14 and 15 December covered by the river monitors on the Sava and the Danube, the Serbian re-entry on 15 December, and the aftermath of 22 December. The article cites Živko Pavlović’s interwar Belgrade monograph. Two of its days are contradicted by another family: it has the Austro-Hungarians enter Belgrade on 1 December in one place and their commander dedicate the town and fortress to the Emperor on 2 December in another, where two other families print the 2nd, and it dates the counter-attack to 2 December where that family prints 3 December, with the orders on the 2nd. Its 22 December relief of Potiorek and von Frank and its merged Fifth Army of 95,000 men are shared by that family, but the military parade through Belgrade at the moment of the Serbian attack, and the strengths of 400,000 Serbs and 450,000 Austro-Hungarians, are printed by this article alone.',
  },
  {
    citation: 'Richard C. Hall, “War in the Balkans”, _1914-1918-online: International Encyclopedia of the First World War_',
    publisher: 'Freie Universität Berlin',
    url: 'https://web.archive.org/web/20170127204107/http://encyclopedia.1914-1918-online.net/article/war_in_the_balkans',
    usedFor: 'The second family for Serbia in 1914: the three invasions, the Austro-Hungarian occupation of Belgrade on 2 December 1914, and the Serbian counter-attack which ejected the invader from Serbian territory by 15 December. The live article is served to scripts as a JavaScript shell with no text to match, so the Internet Archive capture of the server-rendered page is the copy read and cited, and it is refetchable at that address.',
  },
  {
    citation: '“Capture of Damascus (1918)”, _Wikipedia_',
    publisher: 'Wikimedia Foundation',
    url: 'https://en.wikipedia.org/wiki/Capture_of_Damascus_(1918)',
    usedFor: 'The pursuit to Damascus: the capture of the city on 1 October 1918, the 3rd Light Horse Brigade entering at 05:00 that morning with orders to cut the Homs road, the rearguard fighting at Kaukab and Kiswe on 30 September, and the order from general headquarters to let Prince Faisal’s force into the city first although the Egyptian Expeditionary Force had won the battle and reached Damascus before the Arabs. The order of entry is on this site only in a note, because a second account differs by a day.',
  },
  {
    citation: '“Battle of Megiddo (1918)”, _Wikipedia_',
    publisher: 'Wikimedia Foundation',
    url: 'https://en.wikipedia.org/wiki/Battle_of_Megiddo_(1918)',
    usedFor: 'The battle that made the pursuit possible, and the pairing of Daraa on 27 September with Damascus on 1 October. The site’s Megiddo card carries the fighting of 19 to 21 September; this row is reached for the two towns at the end of the pursuit, and its day for Daraa is the one the Tigris-to-Damascus march line uses.',
  },
  {
    citation: '“The Battle of Megiddo, 19–21 September 1918”, _History of War_',
    publisher: 'History of War (Richard W. Brown)',
    url: 'https://www.historyofwar.org/articles/battles_megiddo1918.html',
    usedFor: 'An account of the Palestine pursuit independent of Wikipedia: the Turks losing control of Damascus on 30 September, the first troops of the Arab Revolt entering on 1 October and the first of Allenby’s men on the following day, and the fall of Beirut, Tripoli and Aleppo before the Ottoman request for an armistice. Its order of entry into Damascus differs from the capture article’s by a day, which is why no ranking of the troops is printed.',
  },
  {
    citation: '_The Times History of the War in Africa, Europe and Asia_, volume XVIII (London: The Times Office)',
    publisher: 'The Times Office, London',
    url: 'https://archive.org/details/timeshistoryofwa18londuoft',
    usedFor: 'A third family for the day Damascus fell, giving the entry of British and Arab troops as 30 September to 1 October, and for the fall of the rest of Syria. The scan is optical character recognition and is quoted as printed. The earlier volumes were searched for the Serbian counter-offensive of December 1914: the volume carrying 1915 prints no fighting on the Kolubara and no December 1914 date in its Serbian text, and that negative is recorded in the uncertainties list.',
  },
  {
    citation: 'Brigadier-General F. J. Moberly, _History of the Great War based on Official Documents: The Campaign in Mesopotamia 1914–1918, volume III_ (London: His Majesty’s Stationery Office, 1925)',
    publisher: 'His Majesty’s Stationery Office, London',
    url: 'https://archive.org/details/in.ernet.dli.2015.210668',
    usedFor: 'The last days of the recapture of Kut al-Amara from the British official history and from General Maude’s own progress telegraph: the chapter head dating the opening of the offensive to 14 December 1916, the passage of the Tigris on 23 February 1917, the report telegraphed on the evening of the 24th that the whole of the enemy’s positions from Sannaiyat to Kut were in British hands and that Kut itself passed automatically into them, the Turkish rear guard withdrawn during the night of the 24th and 25th, and the town found deserted and in ruins the next morning with the Union Jack hoisted by a party from the gunboat Mantis. The title page of the digitised copy names Moberly and HMSO and the year 1925; the scan is optical character recognition and is quoted as printed.',
  },
  {
    citation: 'Brigadier-General F. J. Moberly, _History of the Great War based on Official Documents: The Campaign in Mesopotamia 1914–1918, volume II_ (London: His Majesty’s Stationery Office, 1924)',
    publisher: 'His Majesty’s Stationery Office, London',
    url: 'https://archive.org/details/in.ernet.dli.2015.210667',
    usedFor: 'The fall of the Kut garrison from the same official history: the surrender on 29 April 1916, and the strength of the garrison on that day as 13,309, of whom 3,248 were Indian non-combatant followers. That is a return rather than an estimate, and it is the only Mesopotamian figure quoted on this site from these volumes; no comparable return is printed for the Ottoman losses of February 1917. The front matter of this digitised copy is not in the text read, so the year is the one the archive record gives for it.',
  },
  {
    citation: '“Battle of Baghdad (1917)”, _Wikipedia_',
    publisher: 'Wikimedia Foundation',
    url: 'https://en.wikipedia.org/wiki/Battle_of_Baghdad_(1917)',
    usedFor: 'The second family for the Mesopotamian year: the launch of the new campaign on 13 December 1916, the fighting on the Hai line from 25 January to 4 February 1917, the position called the Dahra Bend on 16 February, the re-capture of Kut on 24 February 1917, and the local Ottoman commander Karabekir Bey withdrawing his army rather than letting it be trapped in Kut as Townshend’s had been. The 13 December date is the one this site’s march line uses and it differs by a day from the official history’s chapter head, which is recorded in the uncertainties list.',
  },
  {
    citation: '“Siege of Kut”, _Wikipedia_',
    publisher: 'Wikimedia Foundation',
    url: 'https://en.wikipedia.org/wiki/Siege_of_Kut',
    usedFor: 'The ten months between the surrender and the recapture, which is the reason the recovery of the same town is a separate event rather than a repeat of one. Its own see-also dates the Second Battle of Kut to 23 February 1917, a day before the date this site prints for the recovery, and that difference is recorded in the uncertainties list.',
  },
  {
    citation: '“Macedonian front”, _Wikipedia_',
    publisher: 'Wikimedia Foundation',
    url: 'https://en.wikipedia.org/wiki/Macedonian_front',
    usedFor: 'The origin and result of the expedition: the repeated Allied promises to Serbia and the year of nothing, the small force of two divisions from Gallipoli, the landing in the port of Salonika on 5 October and the Army of the Orient under Sarrail, the Greek political position and Venizelos’s invitation, Mackensen’s offensive of 6 October 1915, the Bulgarian attack of 15 October and the occupation of Kumanovo, Štip and Skopje closing the road to the Greek border, and the naming of the Macedonian or Salonika front.',
  },
  {
    citation: '“Fifth Battle of Ypres”, _Wikipedia_',
    publisher: 'Wikimedia Foundation',
    url: 'https://en.wikipedia.org/wiki/Fifth_Battle_of_Ypres',
    usedFor: 'The attack of 28 September 1918 itself: the hour and the three-hour artillery preparation, the composition and strength of the Army Group of Flanders, the British frontage up to the Ypres–Zonnebeke road, the first day’s penetration and depth of advance, the ground west of Passchendaele recaptured, the evening’s town list, the mud on the captured ground, and the left bank of the Lys taken up to Comines by 1 October.',
  },
  {
    citation: '_The Times History of the War in Letters, Illustrations and Maps_, volume II (London: The Times Office)',
    publisher: 'Imperial War Museums collection, scan deposited at archive.org',
    url: 'https://archive.org/details/india.history.resource.106330',
    usedFor: 'The opening of the war in the Balkans, 1914: the 340-mile water frontier formed by the Danube, the Save and the Drina and how easily it could be crossed, the Serbian central concentration behind it, the first penetration signalled from Loznitza on the morning of 12 August with the pontoon bridge carrying the 13th Army Corps and two divisions of the 8th, the Save crossing north of Shabatz the same day and its occupation by the advance guard of the 4th Army, the Austrian plan for the Jadar valley and the heights of Tzer and Iverak, the fighting of 16 August, the shortage of rifles in the Serbian regiments, and the battle as the first great victory registered by the Allies. This is the binding in Letters, Illustrations and Maps and is numbered within itself: the panel already lists the same work in another binding at volume XVIII, whose copy covers the last year of the war, so this row is offered as a different volume of a work already present, not as a new work.',
  },
  {
    citation: '“Battle of Cer”, _Wikipedia_',
    publisher: 'Wikimedia Foundation',
    url: 'https://en.wikipedia.org/wiki/Battle_of_Cer',
    usedFor: 'The Battle of Cer: the bombardments of 29 July – 11 August and the pontoon bridge system across the Save and Drina, the impossibility of lining the 340-mile border and Putnik’s retreat to a traditional line of defence with detachments at Valjevo and Užice, Potiorek as the invading commander, the entry into Serbia through Loznica on 12 August, the 4th Army Corps across the Save north of Šabac on the same day and the town’s capture, Putnik’s counterattack order of 15 August, the Serbian re-entry into Šabac on 24 August, and the casualty figures for the battle.',
  },
  {
    citation: '_The Times History of the War_, volume XX (London: The Times Office)',
    publisher: 'Imperial War Museums collection, scan deposited at archive.org',
    url: 'https://archive.org/details/timeshistoryofwa20londuoft',
    usedFor: 'The Czechoslovak Legion in Russia in 1918: the Berlin press warning and Trotsky’s order for the Legion’s disarmament, the revolt that followed, the capture of Kazan and the Russian State Treasury of £65,000,000 held there by the Bolsheviks, the driving of the enemy out of Chelyabinsk, and the whole length of the railway from the Volga far into Siberia passing into Legion hands. The panel already lists this work at volume XVIII from the same archive.org collection; this is the volume carrying the 1918 text, offered as an added volume of a work already present.',
  },
  {
    citation: '_Current History: A Monthly Magazine of the New York Times_, volume IX, no. 2 (November 1918)',
    publisher: 'The New York Times, scan deposited at archive.org',
    url: 'https://archive.org/details/sim_current-history-forum_1918-11_9_2',
    usedFor: 'The autumn reports on the Volga and Siberia: the Soviet occupation of Volsk, Simbirsk and Kazan in the middle of September and the recapture of Kazan reported in a Petrograd despatch of 30 September, the Bolshevik explanation of the fall of the city, and General Maurice’s summary that between Lake Baikal and the Urals the Czechoslovaks were supreme and held the trans-Siberian railway as far as Kazan and Samara.',
  },
  {
    citation: '“Czechoslovak Legion”, _Wikipedia_',
    publisher: 'Wikimedia Foundation',
    url: 'https://en.wikipedia.org/wiki/Czechoslovak_Legion',
    usedFor: 'The Legion’s march and its fight with the Soviet government: the strung-out evacuation along the trans-Siberian railway from Penza to Vladivostok and its obstacles, the Chelyabinsk dispute and Trotsky’s order for complete disarmament and arrest, the refusal to disarm and the ultimatums, the capture of Kazan and an Imperial state gold reserve on 6–7 August 1918 with Czechoslovak help, the Red recovery of Kazan on 10 September and of Samara a month later, the extent of the Legion’s control of the railway and the Siberian cities, and the fate of the Kazan bullion on Kolchak’s trains near Nizhneudinsk.',
  },
  {
    citation: '“Komuch”, _Wikipedia_',
    publisher: 'Wikimedia Foundation',
    url: 'https://en.wikipedia.org/wiki/Komuch',
    usedFor: 'The anti-Bolshevik government at Samara: the expeditions sent into the rural areas to protect land and harvest and to mobilise its People’s Army, the spread of its authority from Samara into the provinces of Simbirsk, Kazan, Ufa and Saratov between June and August 1918, its defeats in September and withdrawal from much of that territory, and the loss of control of Kazan on 10 September and of Simbirsk two days later.',
  },
  {
    citation: '“Battle of Kolubara”, _The Great War (thegreatwar.pl)_',
    publisher: 'The Great War (thegreatwar.pl), Łukasz Skowroń',
    url: 'https://thegreatwar.pl/en/battles/battle-of-kolubara',
    usedFor:
      'The second family for the December 1914 fighting on the Kolubara, and a witness to where the ' +
      'English Wikipedia differs: it dates the counter-offensive to 3 December, with the orders issued on ' +
      'the 2nd, puts the Austro-Hungarian entry into an abandoned Belgrade on 2 December, has General von ' +
      'Frank report on 13 December that he could guarantee neither holding the city nor a safe retreat, ' +
      'recovers Valjevo on 7 to 8 December with Užice soon afterwards, has the last Austro-Hungarian ' +
      'units cross the Sava during the night of 14 and 15 December under cover of the river monitors with ' +
      'the Serbs entering the capital on the 15th, and leaves the relief of Potiorek and Frank at the end ' +
      'of December rather than on a named day. It prints the Serbian losses as the most often cited ' +
      'figures, about 22,000 killed, 91,000 to 92,000 wounded and about 19,000 taken prisoner and ' +
      'missing, which is the second family for the breakdown this site prints, and warns that the figures ' +
      'given vary according to whether they cover the battle alone or the whole third invasion.',
  },
  {
    citation: '“The Serbian counter-offensive on the Kolubara (3 December 1914)”, _The Great War (thegreatwar.pl)_',
    publisher: 'The Great War (thegreatwar.pl), Łukasz Skowroń',
    url: 'https://thegreatwar.pl/en/serbian-counter-offensive-on-the-kolubara',
    usedFor:
      'The counter-offensive of the Battle of the Kolubara in detail, and the reason its opening is ' +
      'printed here as disputed: the page dates the attack to 3 December 1914 and says outright that some ' +
      'studies, including the English Wikipedia, date the start to 2 December, when on its reading the ' +
      'orders were issued on that day and the attack itself began the following morning. Mišić ordered ' +
      'the enemy’s resistance broken by powerful fire from the first moment of the attack; the First Army ' +
      'struck the main blow, three divisions on a front of about 10 kilometres on both sides of the roads ' +
      'to the Suvobor ridge against the Prostruga range, with the Danube Division of the second call ' +
      'behind them, going in at 7 a.m. according to Serbian sources after a frost and fog that ended ' +
      'weeks of rain and thaw.',
  },
  {
    citation: '“The Serbian campaign of 1914”, _The Great War (thegreatwar.pl)_',
    publisher: 'The Great War (thegreatwar.pl), Łukasz Skowroń',
    url: 'https://thegreatwar.pl/en/battles/serbian-campaign-of-1914',
    usedFor:
      'The campaign that contains the Kolubara, and the chronology of it outside Wikipedia: the battle ' +
      'beginning on 16 November when the Austro-Hungarian troops reached the Kolubara; Valjevo taken on ' +
      '15 November; the units defending Belgrade leaving the city on 30 November and Potiorek reporting ' +
      'the capture to the Emperor on 2 December, the 66th anniversary of the accession of Franz Joseph I; ' +
      'the recall of Potiorek on 22 December and the combination of all forces in the Balkans into a ' +
      'single Fifth Army under the Archduke Eugen; Mišić’s promotion to vojvoda for the Kolubara; the ' +
      'division of the 1914 operations into three Austro-Hungarian invasions, in August, in September and ' +
      'in November to December, by Polish, Serbian and German historiography, against the British ' +
      'chronology of the war which counted only two because the September fighting on the Drina merged ' +
      'into the subsequent operations for it; Austro-Hungarian losses of about 274,000 compiled at the ' +
      'beginning of 1915 with almost 47,000 of them sick, and Serbian-based tables of about 163,000 lost ' +
      'in 1914 including more than 22,000 killed.',
  },
  {
    citation: '“The Serbs retake Belgrade (1914)”, _The Great War (thegreatwar.pl)_',
    publisher: 'The Great War (thegreatwar.pl), Łukasz Skowroń',
    url: 'https://thegreatwar.pl/en/serbs-retake-belgrade',
    usedFor:
      'The length of the Austro-Hungarian occupation of the Serbian capital in one line: the city taken ' +
      'on 2 December 1914 and held for less than two weeks.',
  },
  {
    citation: '“Bitka na Kolubari”, _Ministry of Defence, Republic of Serbia_',
    publisher: 'Ministry of Defence, Republic of Serbia',
    url: 'https://www.mod.gov.rs/eng/10371/bitka-na-kolubari-10371',
    usedFor:
      'A Serbian official account of the battle, and a third family for its frame: the fighting from 16 ' +
      'November until 15 December 1914 in a defensive and an offensive phase; the Serbian Army forced ' +
      'behind the Kolubara and the Ljig and then, at the end of November, to the line of the Varovnica, ' +
      'Kosmaj and Rudnik; the counter-offensive decided on the suggestion of General Mišić, commander of ' +
      'the First Army; the enemy’s resistance on the Suvobor and along the front line broken by 5 ' +
      'December and the chase of the Sixth Army then undertaken; and on 15 December no enemy soldiers ' +
      'left on Serbian territory besides the captured. It prints no opening day for the ' +
      'counter-offensive, which is why this site says 2 or 3 December rather than choose.',
  },
  {
    citation: '“Balkanstreitkräfte”, _Wikipedia_',
    publisher: 'Wikimedia Foundation',
    url: 'https://en.wikipedia.org/wiki/Balkanstreitkr%C3%A4fte',
    usedFor:
      'Cited here as the same family’s contradiction rather than as support: this article on the ' +
      'Austro-Hungarian Balkan command gives Potiorek relieved on 17 December 1914 and formally resigned ' +
      'a few days later, where the Kolubara article has 22 December, and gives the losses of the ' +
      'Balkanstreitkräfte to the end of December 1914 as 274,000, of nearly 30,000 killed, over 122,000 ' +
      'wounded and 75,000 missing or captured, a total for the whole front rather than for the Kolubara ' +
      'and one whose components do not add up to it.',
  },
  {
    citation:
      'Encyclopaedia Britannica, “World War I”',
    publisher:
      'Chicago: Encyclopaedia Britannica, Inc., online edition',
    url:
      'https://web.archive.org/web/20261101221347/https://www.britannica.com/event/World-War-I',
    usedFor:
      'The date Japan declared war on Germany, 23 August 1914, which the article lists among the ' +
      'declarations of war of that August. The other Britannica entries this site uses are in the rows ' +
      'below, each at its own address.',
  },
  {
    citation:
      'Encyclopaedia Britannica, “Qingdao”',
    publisher:
      'Chicago: Encyclopaedia Britannica, Inc., online edition',
    url:
      'https://web.archive.org/web/20261106103534/https://www.britannica.com/place/Qingdao',
    usedFor:
      'That Japan’s prime purpose in declaring war on Germany was the capture of Qingdao, and that the ' +
      'port capitulated after a blockade in November 1914.',
  },
  {
    citation:
      'Encyclopaedia Britannica, “Blockade”',
    publisher:
      'Chicago: Encyclopaedia Britannica, Inc., online edition',
    url:
      'https://web.archive.org/web/20250115221630/https://www.britannica.com/topic/blockade-warfare',
    usedFor:
      'The Allied announcement of 1 March 1915 in answer to the German submarine blockade, and the ' +
      'encyclopedia’s own judgement that neither the announcement nor the retaliation was legally a ' +
      'blockade.',
  },
  {
    citation:
      'Encyclopaedia Britannica, “Twenty-One Demands”',
    publisher:
      'Chicago: Encyclopaedia Britannica, Inc., online edition',
    url:
      'https://web.archive.org/web/20260130081742/https://www.britannica.com/event/Twenty-one-Demands',
    usedFor:
      'The memorandum of 18 January 1915, the ultimatum of 7 May, Yuan Shikai’s forced acceptance of all ' +
      'but the final group, and the Sino-Japanese agreements signed on 25 May 1915.',
  },
  {
    citation:
      'Encyclopaedia Britannica, “Balfour Declaration”',
    publisher:
      'Chicago: Encyclopaedia Britannica, Inc., online edition',
    url:
      'https://web.archive.org/web/20261112185802/https://www.britannica.com/event/Balfour-Declaration',
    usedFor:
      'That the declaration was made in a letter of 2 November 1917, that the meaning of the phrase about ' +
      'a national home has been disputed, and that the undertaking contradicted both the Sykes-Picot ' +
      'Agreement and the Hussein-McMahon correspondence.',
  },
  {
    citation:
      'Encyclopaedia Britannica, “Armistice of Mudros”',
    publisher:
      'Chicago: Encyclopaedia Britannica, Inc., online edition',
    url:
      'https://web.archive.org/web/20260525192034/https://www.britannica.com/event/Armistice-of-Mudros',
    usedFor:
      'The terms of 30 October 1918: the surrender of the remaining Ottoman garrisons in the Hejaz, Allied ' +
      'occupation of the Straits, and the demobilization of the Ottoman army.',
  },
  {
    citation:
      'Encyclopaedia Britannica, “China in World War I”',
    publisher:
      'Chicago: Encyclopaedia Britannica, Inc., online edition',
    url:
      'https://web.archive.org/web/20241212100346/https://www.britannica.com/place/China/China-in-World-War-I',
    usedFor:
      'The Chinese declaration of war on Germany, announced on 14 August 1917. The article is about the ' +
      'declaration on Germany and says nothing about Austria-Hungary, so it is not offered as evidence for ' +
      'the other half of that card’s title.',
  },
  {
    citation:
      'Encyclopaedia Britannica, “Togo”',
    publisher:
      'Chicago: Encyclopaedia Britannica, Inc., online edition',
    url:
      'https://web.archive.org/web/20261107180921/https://www.britannica.com/place/Togo',
    usedFor:
      'Read for the Togoland card and recorded here because of what it does not say: the article dates ' +
      'nothing in August 1914, giving only that the country was occupied by British and French forces in ' +
      '1914. The days the card prints come from Moberly and from the account first used for the card, as ' +
      'its note says.',
  },
  {
    citation:
      'Encyclopaedia Britannica, twelfth edition (1922)',
    publisher: 'London: The Encyclopaedia Britannica Company, 1922; the account of Mahiwa quoted in this card’s ' +
      'note is the article East Africa, Military Operations in volume 30, page 884, of the digitised copy ' +
      'at the address, and the edition’s index volume points Mahiwa-Nyango, battle of (1917) to that page',
    url: 'https://archive.org/details/in.ernet.dli.2015.83471',
    usedFor: 'The course of the Battle of Mahiwa in the card’s note, quoted from the volume: the Nigerians in ' +
      'action early on 15 October 1917, the beginning of a four days’ battle, counter-attacks on the 17th ' +
      'and 18th, an attack ordered for the 19th and cancelled by Van Deventer, the Germans retiring that ' +
      'day to the positions of the 16th. Its figures — 2,700 British casualties of 4,900 infantry ' +
      'engaged, 528 in the Nigerian Brigade, some 1,500 Germans with 519 losses — are this house’s alone ' +
      'in this atlas’s reach, so they are in the note and in the uncertainties and not on the card.',
  },
  {
    citation:
      'Avalon Project, “Balfour Declaration”, 2 November 1917',
    publisher:
      'New Haven: Lillian Goldman Law Library, Yale Law School',
    url:
      'https://avalon.law.yale.edu/20th_century/balfour.asp',
    usedFor:
      'The text of the letter to Lord Rothschild: the national-home sentence and the reservation that ' +
      'nothing shall be done which may prejudice the civil and religious rights of the existing non-Jewish ' +
      'communities in Palestine.',
  },
  {
    citation:
      'Beckett, Ian F. W., The Great War, 1914–1918, second edition (Modern Wars in Perspective)',
    publisher: 'Harlow and New York: Pearson/Longman, 2007, xxix + 813 pages (ISBN 9781405812528); the address is ' +
      'the Google Books record for the volume, which prints title, author, publisher, year and extent; no ' +
      'free copy of the text was readable, so this row says which book the card’s note means, not what ' +
      'was read in it',
    url: 'https://books.google.com/books?vid=ISBN9781405812528',
    usedFor:
      'The Romania enters the war card credits this book with the view that Bulgaria declared war only ' +
      'after attacking on 31 August 1916. UNVERIFIED: the volume’s text was not read, so the row records ' +
      'which book the note means, not the passage. The rival days are in the note and in the uncertainties.',
  },];

export interface Uncertainty {
  /** Topic of the disputed figure */
  topic: string;
  /** Explanation of the range and why the figures differ */
  range: string;
}

export const UNCERTAINTIES: Uncertainty[] = [
  {
    topic: 'Armenian deaths, 1915–16',
    range:
      'The range is 800,000 to 1.5 million. The higher figure is the one carried by most genocide references; the lower is what the Armenian Patriarchate’s own inquiry of 1919 could document, and what the archive-based reconstruction of Edward Erickson comes closest to. Ronald Grigor Suny’s history of the genocide puts the toll near one million and treats the discrepancy between the estimates as a question of what the Ottoman records can bear rather than of good faith. The position of the Turkish state, that far fewer died and that the dead of both sides were lost to war, famine and disease, is set out on the card for 1915, and it is not the same claim as the denial that the deportations were ordered.',
  },
  {
    topic: 'Whether the blockade starved German civilians',
    range:
      'Two positions are on the site and neither is presented as settled. The first rests on the German Board of Public Health, which reported 762,796 deaths above normal for the war years at the end of 1918 and which has long been quoted as proof that the blockade starved Germany. The second rests on the revisions: the 1928 Carnegie study cut the number to about 424,000, the 1940 Carnegie study of the German and Austro-Hungarian accounts put it above 600,000, Jay Winter reckons roughly 300,000 once influenza mortality is subtracted, and N. P. Howard gives 474,085 with influenza included and about 100,000 of those falling after the armistice, when food imports resumed. Alan Kramer finds German excess mortality of about one per cent of the population against 1.3 per cent in Britain, and reads the Board’s figure as a wartime document rather than a census. C. Paul Vincent’s study of the blockade as an instrument of policy defends the higher reading: the machinery of rationing and permits was deliberate, and the deaths of the winter of 1917 to 1918 belonged to it.',
  },
  {
    topic: 'How many people the war killed in all',
    range:
      'The military dead are usually put between 9 and 11 million, and the older figure of 8,866,634 still printed in many places is the sum of one particular set of interwar returns rather than a count. Civilian deaths are given anywhere between 7 and 10 million for the war years alone, and the totals rise again if the influenza year, the revolutions and the settlement of 1919 to 1921 are treated as part of the war rather than as its aftermath. The largest disagreement is not arithmetic but dating: whether the deaths of 1919 to 1921, including those of prisoners held after the armistice, belong to this war.',
  },
  {
    topic: 'Russia’s war dead',
    range:
      'The reply the Petrograd government sent to President Wilson in 1918 gave 1,850,000 Russian deaths, and that is the figure the Allies used at the time. B. Ts. Urlanis put military deaths at 1,811,000; later Soviet and Russian calculations run from 962,700 to 3,080,000, with 2,254,369 the figure most often printed now, while Russian accounts of population loss put the dead of 1914 to 1922 near 11 million once famine, typhus and civil war are included. The Russian statistical service was broken up during the revolutions and the archival returns were reconstructed in the 1920s from incomplete regimental records, which is why the eastern half of this site’s ranges is wider than the western half.',
  },
  {
    topic: 'The Ottoman Empire’s losses',
    range:
      'The figure usually printed for Ottoman military dead is about 325,000, taken from wartime returns that covered only some fronts. Edward Erickson, working from the same General Staff material, puts 771,844 killed of 2,850,000 mobilised and adds about 1,125,000 prisoners who died, giving some 2,997,000 permanent losses; the history of the medical service gives 803,637 total losses for 1914 to 1917 alone. Total population loss, including the Armenians, the killings of Assyrians and Greeks, the 1918 famine in Lebanon and Syria, typhus and influenza, is estimated at 2.5 to 3 million against a population the 1914 estimate put near 20 million. Any Ottoman figure on this site is an estimate resting on an incomplete record.',
  },
  {
    topic: 'Austria-Hungary: whether the men who died in captivity are inside or outside the total',
    range:
      'The official history prints 1,494,200 military dead, and the same table gives 1,016,200 killed in action or dead of wounds with 478,000 dead in captivity, so the captives are inside the 1,494,200 rather than additional to it. Accounts that print 1,016,200 as the Habsburg dead and then add the prisoners produce a total nearly half as large again, which is how the two figures circulate as rival estimates rather than as parts of one sum. The breakdown of the dead by nationality is derived from the 1910 census and the regimental establishment rather than from registration, so the Italian and South Slav losses expressed as ratios of their mobilised men are sounder than their absolute numbers.',
  },
  {
    topic: 'Serbia’s losses as a proportion of its people',
    range:
      'Serbia’s military dead are put between 450,000 and 800,000, and its total population loss between a quarter and a third of the country, figures that include the typhus epidemic of 1915, the famine of 1917 and the deaths of the retreat across Albania. One interwar calculation gives 45 per cent of all men mobilised and 25 per cent of the whole population dead; Urlanis gives 728,000 dead for the war against 812,000 for the two Balkan wars and the world war together; the Serbian returns show 16 of every 20 men of the first reserve class killed, a rate no other belligerent approached. The range is wide partly because the pre-war census covered only the territory of 1912, so the denominator is itself disputed.',
  },
  {
    topic: 'Germany’s total, and the men who died as prisoners',
    range:
      'The 1934 loss table gives 2,050,835 dead, of which 474,000 died in captivity. The figure of 2,370,000, also widely printed, includes men who died after 11 November 1918 and, in some versions, the dead of the fighting in the Baltic, Silesia and the Ruhr in 1919 to 1921; German accounts of those years give more than 400,000 deaths from political violence between 1918 and 1923, which some historians count into the war and most do not. Alsace-Lorraine adds a further complication: the men of the two provinces who died in German uniform are counted in Berlin and not in Paris.',
  },
  {
    topic: 'Belgium’s army and Belgium’s country',
    range:
      'The Belgian army’s dead are given as 13,716 in the interwar statistical yearbook and as 17,850 elsewhere, the difference lying in men who died in captivity and in veterans who died of wounds after 1918. The army lost 4,017 men in August 1914 alone, more than in the whole of the static warfare that followed, and the garrisons of Liège, Namur and Antwerp left rolls that were never fully reconstructed. Civilian deaths are put between 56,000 and 68,000 in the interwar reckoning, executions and deaths in captivity included, and the figures for the killings of August 1914 at Dinant, Tamines and Louvain are still argued between German court-martial records and the Belgian commissions of enquiry.',
  },
  {
    topic: 'India, the labour corps and the empire’s dead',
    range:
      'The Indian dead are usually given as about 25,289 killed and 5,014 missing, with roughly 64,100 dead in all once disease is counted, from about 1.3 million men who served. The labour corps are the harder case: some 140,000 Chinese and as many as 1,400,000 Indian, Egyptian, African and Caribbean labourers worked in France, Egypt and Mesopotamia under contract, and their deaths were registered by contracting agencies rather than by armies, so the totals for the non-combatant empire are incomplete on the face of the record. Influenza killed far more of these units than fighting did, and in India the deaths of 1917 to 1921 are put between 12.9 and 21.3 million, several times the subcontinent’s war dead.',
  },
  {
    topic: 'Verdun: what the German object was',
    range:
      'The battle’s purpose rests on the so-called Christmas Memorandum, in which Erich von Falkenhayn told the Kaiser in December 1915 that attrition rather than breakthrough was the object. No copy is traceable before the 1940s: Wolfgang Afflerbach argued in 1994 that the memorandum was written after the war, though on Falkenhayn’s thinking, and Gerd Krumeich holds that the attrition thesis was put together once the offensive had failed and that the real aim was the Meuse heights. Whether Verdun achieved its object depends on whose numbers are used: the German official series’ 1,149,800 losses for both sides, the French post-war count of 542,000 French against 433,000 German, the German claim of 808,000 Allied against 337,000 German, and the 1916 official totals, which are higher again. That Verdun mattered is not disputed; that it was designed as a calculation in attrition is.',
  },
  {
    topic: 'The Somme: whose casualties',
    range:
      'British Empire casualties of 57,470 on 1 July 1916, of which 19,240 were killed, are not in dispute; the totals of the battle are. The British official account gives some 420,000 British Empire losses over the battle; the figures laid before the Chantilly conference in November 1916 claimed 630,000 German losses on the British sector alone; the German official record gives 237,159 in that sector, with a range of 465,000 to 500,000 for the whole battle depending on whether sickness is counted. The 1916 western-front totals of 797,000 Allied against 465,000 German are therefore a comparison between two differently compiled series, not a verdict on which side bled more heavily.',
  },
  {
    topic: 'Why the same battle has two sets of figures',
    range:
      'Headquarters reported enemy losses from the claims of their own corps, discounted by a rule of thumb, and their own losses from returns, so both sides’ communiques overstate the enemy and the two overstatements do not agree. The extreme case in this war is the eastern one: German communiques of 1914 to 1918 put Russian prisoners taken at 2,000,000, while the record of captivity in the camps of the Central Powers shows 91,380 rank and file and 2,417 officers taken in the same periods. This site prints the figure of the side whose record is fuller for the battle in question, and says which side that is.',
  },
  {
    topic: 'What counts as a mutiny, 1917',
    range:
      'The French courts-martial of 1917 passed about 3,400 convictions and 554 death sentences, of which between 26 and 49 were carried out according to which list of confirmed sentences is used, and between 15,000 and 40,000 men are reckoned to have taken part in some form of collective refusal. One school reads these episodes as the near-collapse of the army’s will to resist; another reads them as disciplined units refusing a particular attack while holding their trenches and sending delegations, which is nearer to what the companies recorded as doing. The same difficulty of definition runs through Italy after Caporetto, where 270,000 men straggled back from the Tagliamento, through the British courts-martial for men striking in the lines of communication, and through Russia, where desertion, mass desertion and soldiers’ committees shade into one another.',
  },
  {
    topic: 'The collapse of the Russian army in 1917',
    range:
      'By the end of 1917 the staff counted 2,309,000 men absent without leave and some 2,950,000 deserters since February out of roughly 7 million under arms, and the same records show front after front voting for peace, units arresting officers, and soldiers killed by their own comrades over land and command. How much of this was the collapse of an army and how much was its end is disputed: the command’s returns entered desertion as a crime, while the committees counted the same men as soldiers going home, and the 1,500,000 to 2,000,000 Russian dead of 1917 cannot be divided between fighting, desertion, summary violence and disease.',
  },
  {
    topic: 'Whether Brest-Litovsk was the template for 1918',
    range:
      'One reading holds that the settlement imposed in March 1918 was the Central Powers’ settled war aim, carried out in the east because they could, and that the western programme failed only because they could not: the January 1918 peace programme, the separation of Poland, the Ukraine treaty with its grain and its frontier, and the November 1918 claim to Alsace-Lorraine, Belgium and a Central African sphere are the evidence. The other reading holds that the east was an improvised separate peace, that the German commands disagreed over it among themselves, and that nothing at Brest-Litovsk was ever a plan for France. The frontiers of 1918 did not survive, so the argument proceeds from the documents’ intentions rather than from outcomes.',
  },
  {
    topic: 'Who was responsible for the war',
    range:
      'Fischer’s argument of 1961, that Germany and Austria-Hungary chose war in 1914 to secure their aims, and the defence against it — that Russian mobilisation, French planning and Serbian terrorism each closed the other options — remain the two positions. The most recent major account shifts the question from responsibility to the decisions of July and treats the ministers of all five powers as acting on their own fears; its critics keep the weight on the ultimatum of 23 July and the guarantees of August. This site dates the war to 28 July and to the declarations that follow, and does not use the order of its cards to argue the case either way.',
  },
  {
    topic: 'The 1918 influenza: the name and the toll',
    range:
      'It was never Spanish. Neutral Spain reported the disease openly in May 1918 because its press was uncensored, and the belligerents, who suppressed the news, gave it the name of the one country that printed it, which is a fact about censorship rather than about origin. Estimates for the world run from 20 million to 50 to 100 million deaths; 8.7 per cent of the United States Army fell ill and 43,000 Navy men died in September and October 1918; the deaths in India in 1917 to 1921 are put between 12.9 and 21.3 million, several times the subcontinent’s war dead. Whether the movement of troops made the pandemic or the war merely recorded it is unsettled, and European excess mortality for 1918 and 1919 is inferred from civil registers rather than diagnosed.',
  },
  {
    topic:
      'When Montenegro entered the war, August 1914',
    range:
      'The month is not argued; the day is, and so is who declared it. King Nikola’s ' +
      'proclamation is dated at Cetinje 25 July old style and 6 August new style, and the ' +
      'accounts of the Montenegrin campaign — the 2026 Springer chapter on Lovćen, the essay ' +
      'for The World Remembers by the director of the National Museum of Montenegro, and the ' +
      'Montenegrin press — all date Montenegro’s declaration of war on Austria-Hungary to 6 ' +
      'August. The American embassy in Vienna cabled on 10 August that Austria-Hungary had ' +
      'declared war against Montenegro “9th instant”, so the Habsburg declaration belongs to 9 ' +
      'August, and the usual lists of declarations give 5 or 8 August for a Montenegrin note, ' +
      'which is a different act from the proclamation. This site dates the card to 6 August, ' +
      'because the colour on the map records Montenegro being at war rather than Vienna’s ' +
      'reply, and it prints the 9 August declaration in the note. The map changes by month, so ' +
      'none of these days moves a polygon.',
  },
  {
    topic:
      'Albania’s colour in the last months of 1918',
    range:
      'The map shows Albania in the at-peace colour from September 1918, on the ground that ' +
      'whoever held the ground, Albania had no government at war with anyone. Whether the last ' +
      'Central Powers troops were gone by late September is not settled. The US Library of ' +
      'Congress study has the Austro-Hungarian withdrawal beginning within days of the Entente ' +
      'breakthrough north of Thessaloniki in September 1918, and says Italy’s army had occupied ' +
      'most of the country when the war ended on 11 November; Raymond J. Sontag’s political ' +
      'history of Albania puts practically all of the country in Italian hands by the middle of ' +
      'October. So the withdrawal certainly began in September and was not necessarily finished ' +
      'in it, and the colour is a statement about sovereignty rather than a report of who was ' +
      'standing where. The Foreign Relations documents for November and December 1918, which ' +
      'find Albanian notables meeting at Durrës and voting a provisional government, are why ' +
      'the site keeps a colour of its own for Albania instead of treating it as territory of ' +
      'one of the armies in it.',
  },
  {
    topic: 'The armistice with Bulgaria and the bombardment of Durazzo: the cease-fire hour, the men surrendered, the day of the request, and the size of the raid',
    range: 'Both of these events rest on better documents than most of the autumn of 1918, and both have details those documents do not carry. The convention with Bulgaria is printed in Foreign Relations of the United States, and the signature at Thessaloniki on 29 September 1918 appears in the printed text, in the encyclopedia account and in Wikipedia; that date is not in dispute. The hours are: Wikipedia puts the signature at 10:50 p.m. and the cease-fire in force at noon on 30 September, while the printed clause says only that the orders for the cessation of hostilities are to be given at the time of signature, so no hour is printed on the card. The about 150,000 soldiers west of the Skopje meridian to be delivered as hostages are likewise from Wikipedia alone — the printed clause covering those troops prints no number — and the tally of some 77,000 men and 500 guns belongs to the battle rather than to the convention. The day the Bulgarian government decided to ask is 24 September in Wikipedia and 25 September in the encyclopedia article, and the encyclopedia dates Ferdinand’s abdication to 3 October where the Library of Congress study says only that he was forced out at the end of September, so no interval between the two is printed. At Durazzo the same navy’s records disagree about its own operation: eleven submarine chasers against twelve, the force screened British, French and Italian against Italian and British bombarding cruisers, and the two attacking submarines destroyed or badly damaged on the one hand and damaged and safely away on the other, with the American force’s claim to have sunk them recorded as an error in the battle article’s own account. The damage to the town and its civilians, including the destruction of most of the Old City and of the royal palace, rests on a single account, and no account gives the Albanian dead.',
  },
  {
    topic: 'The day Belgrade fell in 1915, the day the rivers were crossed, and the day Bulgaria entered the war',
    range: 'The fall of the city on 9 October 1915 is carried by two families: the article on Belgrade prints the bombardment starting on 6 October and the city falling on 9 October of the same year, and Cyril Falls, the British official history of the Macedonian campaign, prints the bombardment beginning on the 6th October and the passage of the rivers next day, with the city taken by the Austrians on the 9th. The crossing is the only point on which they differ, and the card follows the official history in putting it on the 7th. The Bulgarian declaration of war is single-family: the official history prints 13 October with the army marching the next day, and no second family was reached for that day, so it appears in the card’s note rather than in its prose. Three claims this site might have printed are not printed at all, because neither family carries them: that the crossings of the Danube and Sava were the largest amphibious operation of the war, that Belgrade had been declared an open city, and that motor gunboats supported the banks.',
  },
  {
    topic: 'The Flanders battles of April 1918: which day the offensive opened, what its battles were numbered, and which of them have a second family',
    range: 'The article on the Battle of the Lys dates the battle as fought from 7 to 29 April 1918 and puts the bombardment on the evening of 7 April, while the Australian War Memorial’s table of engagements, whose stated source is the Battles Nomenclature Committee’s official list of 1922, gives the Lys as 9 April. The two therefore disagree by two days about the opening, and the card prints the bombardment and the assault as separate events so that neither date has to be chosen. Hazebrouck is 12–15 April in the article and 13–17 April in the table. The table has no row for Messines in 1918 at all, so the village fighting of 10–11 April, and with it the taking of Messines and of Bailleul and the Kemmelberg, is single-family. The numbering is disputed in a way this site does not settle: accounts that treat the whole of the April fighting as the Fourth Battle of Ypres number its battles differently, which is why the card’s title avoids the number while its identifier keeps the conventional one. The retaking of the village on 29 September 1918, a patrol of the 30th Division entering it on the evening of the 28th and the 90th Brigade in it by the morning, rests on Edmonds and Maxwell-Hyslop alone.',
  },
  {
    topic: 'The last morning at Mons: the hours, the signature, and the last two soldiers',
    range: 'The hours of the last attack on Mons are all from one volume of the British official history, which prints parties of machine-gunners firing on all attempts to cross the canal through the early part of the night, patrols crossing at about 2.30 a.m., two companies in the outskirts at 4.30 a.m., the town clear of the enemy by dawn and the advanced guard of the 3rd Canadian Division marching through. The Australian War Memorial table, which is the official nomenclature, has no row for the Sambre and none for Mons, so the fighting of the last week has no official name and no second account of its hours. The same volume prints the signature at 5.5 a.m. and the message to Armies at 6.50 a.m., while Wikipedia says the signatures were made, depending on the source, between 5:00 a.m. and 5:45 a.m. Paris time, and that no reachable source outside Wikipedia prints the place of the signing at all. The two soldiers the card names as the last deaths are from Wikipedia: Ellison’s sentence carries a citation-needed flag in the article, Price’s is footnoted but the note was not followed to a second family, and no source reached gives any figure for the German rearguard on the canal.',
  },
  {
    topic: 'The Serbian winter of 1914: the days Belgrade, Valjevo and Užice changed hands',
    range: 'Four families back the shape of the month and three of them print the days inside it. Richard C. Hall in the encyclopedia of the war has the Austro-Hungarians occupying Belgrade on 2 December 1914 and a determined Serbian counter-attack ejecting them from Serbian territory by 15 December. Wikipedia’s article on the battle has the Serbs withdrawing from Belgrade on 29 and 30 November, the counter-attack opening on 2 December, Valjevo and Užice retaken on 8 December, the Austro-Hungarians leaving Belgrade on 14 and 15 December under cover of the river monitors, and the Serbian army re-entering on 15 December, with full control only by the end of the following day; the same article elsewhere gives the Austro-Hungarian entry into the city as 1 December. The Serbian withdrawal from Belgrade is therefore 29 and 30 November on two families, the Austro-Hungarian entry on 2 December on two families and 1 December on one, and the Serbian re-entry on 15 December on three, though two of those three date the clearance of the country rather than the entry into the city; the site prints those, and the 1 December is recorded here as what one account prints. That Wikipedia account, which cites Živko Pavlović’s Belgrade monograph of 1928 and 1930, is now joined by two others which print days it was alone for: the war-history site The Great War, which has the defending units leaving Belgrade during the night of 29 and 30 November and on the 30th, Potiorek occupying an abandoned city on 2 December and reporting it to the Emperor on the 66th anniversary of his accession, Valjevo recovered on 7 to 8 December with Užice soon afterwards, Frank reporting on 13 December that neither the city nor a safe retreat could be guaranteed, the last units crossing the Sava on the night of 14 and 15 December under cover of the river monitors, and Serbian cavalry in the capital on the 15th; and the Serbian Ministry of Defence, which gives the same 16 November to 15 December span and the same clearance of the country by the 15th but no opening day for the counter-attack. The attempt to find a printed family is recorded because it failed: _The Times History of the War_, whose 1915 volume carries the Serbian campaign, prints no fighting on the Kolubara and no December 1914 date anywhere in its Serbian text; the war-history site was first looked for in the wrong place and reported here as carrying no Serbian front, which was wrong: its Serbian pages were reached on 23 November 2026 and are the second family above; the British official histories of Macedonia carry no 1914 Serbian narrative; and full-text search of two printed accounts by men with the Serbian army returned nothing for any term, which is an absent index rather than an absent fact. What this site prints in prose is limited to what two families support: the evacuation of 29 and 30 November, the entry on 2 December, the recovery of Valjevo and Užice within the week, the departure on 14 and 15 December and the re-entry on the 15th. The two days still split are the day the counter-attack was delivered and the day the two Austro-Hungarian commanders were relieved, and each has a row of its own below; the difference between 8 December and 7 to 8 December for the two towns is settled in prose only as far as within the week. The relief of Potiorek and von Frank and the merging of the two invading armies are in a note, not because a single account stands behind them but because four different dates are printed for them. No figure of any kind is given for the fighting at Valjevo or Užice, because no account reached gives one.',
  },
  {
    topic: 'Maude’s offensive in Mesopotamia: when it opened, and when Kut was taken',
    range: 'The recapture of Kut al-Amara is dated 24 February 1917 on two families and the site prints that day, but the two accounts of the day do not describe the same act. The British official history prints General Maude’s progress report telegraphed on the evening of the 24th, that the whole of the enemy’s positions from Sannaiyat to Kut were in British hands and that Kut itself, to which no interest but a sentimental one attached, passed automatically into them; the same volume reports the Turkish rear guard withdrawn during the night of the 24th and 25th, the gunboats anchored off the town that evening, and the town found deserted and in ruins the next morning, with a party from the gunboat Mantis hoisting the Union Jack. So the position was won and claimed on the 24th and entered on the 25th, and the encyclopedia article on the siege dates the second battle of Kut to 23 February. This site keeps 24 February, the day the line of positions fell and the day its march line ends. The opening of the advance is a separate one-day problem: the campaign account prints 13 December 1916, which is the date the march line and the Baghdad card use, while the chapter head of the official history dates the commencement of the offensive to 14 December 1916 and its text puts the advance to the Hai on the 14th. Both are printed sources of standing, neither is a modern argument, and a map that resolves by month cannot show the difference, so the line stays where it is and the difference is recorded here.',
  },
  {
    topic: 'Damascus in October 1918: which day, and who was there first',
    range: 'The city’s fall on 1 October 1918 has three families: the capture article, the campaign account which pairs Daraa on 27 September with Damascus on 1 October, and _The Times History of the War_, which writes of troops entering on 30 September to 1 October; the Australian War Memorial’s table of battles, whose stated source is the official committee’s list of engagements, prints Damascus on 1 October 1918. What is disputed is the order of entry. The capture article puts the 3rd Light Horse Brigade in the city at 05:00 on 1 October and quotes Hew Strachan’s and Hewick Hughes’s editing of Allenby’s papers for an instruction from general headquarters to let Prince Faisal’s force in first, even though the Egyptian Expeditionary Force had won the battle and reached Damascus before the Arabs; the independent war-history account has the Turks losing control on 30 September, the first troops of the Arab Revolt entering on 1 October and the first of Allenby’s men on 2 October. This site dates the event and does not rank the troops, because the dispute is about orders and hours rather than about the capture.',
  },
  {
    topic: 'Daraa: 27 or 28 September 1918',
    range: 'The march line this site draws from Daraa to Damascus starts on 27 September, following the campaign account which pairs the capture of Daraa on 27 September with Damascus on 1 October. The article on the capture of the city itself heads its section on the place 28 September, and its text puts the Arab Northern Army and the 4th Cavalry Division at Daraa on 27 September with fighting in the town running into the night. The difference is a day at the start of a pursuit, the two statements are not contradictory about the fighting, and the map resolves by month, so the line is not moved and the alternative day is recorded here.',
  },
  {
    topic: 'Salonika, 5 October 1915: which troops were ashore on the first day',
    range: 'Two families agree that French and British troops landed at Salonika on 5 October 1915, and that the force was a small one drawn from the Dardanelles. They are not two accounts of that first day, and they do not agree on the order of battle. Wikipedia names the two divisions sent from Gallipoli as the French 156th and the British 10th (Irish). The British official history alone prints the detail of the day — that the French division from the Dardanelles, Bailloud’s, now numbered the 156th, began its landing on 5 October with all its fighting troops ashore within 48 hours, and that on the same day the headquarters and two battalions of the British 29th Brigade disembarked and moved to a camp on the Seres road — and it shows the British division of that pair being stopped: the War Office cable of 6 October 1915 states that the whole question of landing troops at Salonika was very doubtful until the political position was cleared up, cancels the move of the 10th Division, and directs that its commander, Sir Bryan Mahon, should return to Mudros if he had already started, with no other British troops arriving until 5 November. The card’s prose therefore says French and British troops, and names divisions nowhere; it prints the 5 November only at university level and attributed there to the official history, because no other account in this set gives it. The name of the force is two-family but not the same name: _The Times history of the war_ writes of “the army of the Orient (the Salonika force)”, the British official history of “the French Army of the East”, and the prose uses the name the Times prints.',
  },
  {
    topic: 'Salonika: how far up the Vardar, and on what days',
    range: 'The advance up the Vardar and the ground it reached is the British official history alone: that the troops which landed in the first days of October had advanced up the Vardar as far as Krivolak in the latter part of the month; that Sarrail sent the leading brigade of the 57th Division to Krivolak, 20 miles south-east of Veles; that the whole division had gone up by 27 October and had to cover 15 miles of front between Gradec and Krivolak; that a mixed brigade of the 57th came ashore between 12 and 16 October and the remainder between 20 and 23 October, and the 122nd Division between 1 and 8 November; that Veles and Kumanovo had fallen and by 24 October the Bulgarian Second Army had completely cut the main Serbian forces off from the French; and that the final retirement was carried out on the nights of 11 and 12 December through a second line organised entirely in Greek territory. Wikipedia independently gives the Bulgarian occupation of Kumanovo, Štip and Skopje and the closing of the road to the Greek border, so the place names Kumanovo and Skopje appear in the prose; the days, the distances, the division numbers and Krivolak itself are single-family, and this atlas’s line for the lodgement says the advance reached the Vardar at Krivolak, which the atlas plots at Negotino.',
  },
  {
    topic: 'Salonika: whether the expedition saved anything',
    range: 'The two families disagree in conclusion, not in fact. Wikipedia states that the first troops, landing on 5 October, arrived in the Greek port of Thessaloniki too late to contribute to the operations to help Serbia, and that the expedition came too late and with insufficient force to prevent the fall of Serbia. The British official historian writes in his preface, of the Austrian official history then in the press, that its text and maps point to the conclusion that the intervention in Macedonia, tardy as it was, contributed even more to saving the remnant of the Serbian Armies than has been suggested; the same preface supports that with a counterfactual about the Bulgarian Second Army: had it been free to take part in the encirclement of the Serbians in the Kosovo Polje, instead of 150,000 men escaping to the Adriatic shore there would not have been 20,000 survivors. Both families support the card’s sentence that the landing came too late to save Serbia; the 150,000 and 20,000 are one historian’s estimate and appear nowhere in the prose.',
  },
  {
    topic: 'The 1915 attack on Serbia: the order of the days in October',
    range: 'This card is dated 5 October because both families date the landing to that day. The attack it was meant to prevent is dated three ways in the record: the British official history prints the bombardment of the Belgrade fronts on 6 October 1915 and the passage of the Danube and Sava next day; Wikipedia has Mackensen’s offensive — the largest against Serbia — beginning on 6 October 1915 and two Bulgarian armies attacking on 15 October; and this site’s own card on Bulgaria’s entry into the war puts it on 14 October, which is the declaration rather than the attack; the British official history antedates even that, printing that Bulgaria “declared war on the 13th October and marched next day”, so the Bulgarian entry is variously the 13th, the 14th and the 15th across the three accounts. The two families also do not name the same attacking armies: Wikipedia’s order of battle is the Austro-Hungarian Balkan Army, the German 11th Army and river flotillas on the Danube and the Sava under Mackensen, while the official history names no Balkan Army and describes the German Eleventh Army crossing the Danube between Smederevo and Ram, the Bulgarian First Army marching on Niš under Mackensen’s orders and the independent Bulgarian Second Army entering the Vardar valley. The card therefore names no Austro-Hungarian formation, prints no day for the Bulgarian entry, and says only that the Bulgarian army came from the east and south — the two axes the official history gives it, the First Army on Niš and the Second through Macedonia into the Vardar valley, which is also the direction in which Bulgaria lay. The map resolves by month, so nothing here asks for a polygon decision; the days are recorded so that the ordering of the Salonika cards and of the line starting on 5 October is not read as a settled chronology of the Serbian front.',
  },
  {
    topic: 'Fifth Ypres, 28 September 1918: whose attack took Passchendaele, and what the bombardment cost',
    range: 'The outline is agreed: an army group under the King of the Belgians, holding the Belgian army, the British Second Army and French corps, attacked near Ypres at 5.30 a.m. on 28 September 1918 and took ground east of the city that the German army had retaken in the spring. The first morning is not. Both families give the assault hour, Wikipedia with a three-hour artillery preparation and the official history with the preliminary bombardment of high-explosive and gas opening at 2.30 a.m.; that 2.30, the barrage fired by six hundred 75’s, four of the six German lines of defence captured between 10 and 11 a.m., and the general advance of about five miles in which the right took Passchendaele, established itself alongside the Second Army east of Broodseinde and was just short of Westroosebeke — all of this comes from one appendix of the British official history, credited in its footnote to an account received from the Belgian Ministry of War and to the French official history. That is the Belgian narrative, in which the right is the Belgian right, so the card credits Passchendaele to no formation at all, and the hour the two families share is printed in the prose while the 2.30 and the six hundred 75’s appear only at university level and attributed to Edmonds by name. Wikipedia gives an order of battle of twelve Belgian, ten British and six French divisions where the official history has the Second Army, the Belgian army and two French corps, an advance of 6 miles where the official history has about five, and its own list of towns taken by each army by the evening; the prose says five or six miles. The 4.5-mile British frontage, the town lists and the parachute-dropped rations are single-family and are not printed in the prose, and neither is the fourth of the official history’s totals, its 4 cavalry divisions behind the 28 infantry divisions, which Wikipedia does not count. The corps the group holds differ by name as well as number — the official history assigns the British Second Army, the Belgian Army and two French corps to the group, Wikipedia puts the French Sixth Army in it with 6 French divisions — so the prose says French divisions and names no French army below university level, where both versions are given. The renewal of the battle is the official history’s alone: it puts the attack renewed on 14 October after more than a week’s delay owing to the state of the roads and the disorganisation of the supply services, and describes the crossing of the Lys below Comines, while Wikipedia carries the battle only to 2 October and then to mud; the prose therefore gives no day for the renewal outside university level, where the volume is named, and the atlas has no place-name for the ground of 14 to 17 October.',
  },
  {
    topic: 'Serbia 1914: what the invasion was meant to achieve, and the state of the army it met',
    range: 'Everything about the design of the attack, and the sharper figures for the Serbian shortage, come from one family. The Times history of the war alone counts the feints — “During a period dating from July 29 to August 11 the Austrians made eighteen attempts to cross the frontier, their object doubtless being to divert the attention of tho Serbians from those points where the serious invasion was to be effected” — alone makes the Drina the chosen axis (“caused the Austrian Staff to centre their attention upon an invasion across the Drina river”), alone gives the intended end of the advance as “in the capture of Valievo and Kragujevatz, and the dispersion of the Serbian army”, and alone explains why the attackers knew the ground: “Serbia had not only been explored time and again by the Austrian surveyors who were responsible for the production of most of the existing maps, but, during that epoch of Serbian history when a King’s treaty had reduced her to military dependence upon Austria, the country had been _ overrun by agents of the Habsburg Govern- ment. A highly organised spy-system had doubtless kept the records up to date”. The regiments’ state on the Cer ridge is that history’s too — “During the battle on the Tzer mountains many of the regiments, at an effective strength of over 4,000 men, possessed but 2,600 rifles” — while Wikipedia, which is the other family here, prints a different order of the same shortage: “Rifles were also in critically short supply. It was estimated that full mobilization would see some 50,000 Serbian soldiers with no equipment at all”, and “The Balkan Wars had only just concluded and Serbia was still recovering. Over 36,000 Serbian soldiers had been killed and 55,000 seriously wounded” for the Balkan Wars behind it. The prose therefore says only that the army had fought two wars recently and was short of rifles, which both families support; the single-family items appear at university level attributed to the Times history by name, and no figure of either side’s losses is printed at any level.',
  },
  {
    topic: 'Serbia 1914: the day the counterattack on the Cer ridge opened',
    range: 'The crossings are settled — both families give 12 August 1914 for the Drina crossing at Loznica, the 13th Army Corps put across it over a pontoon bridge, and the Save crossing north of Šabac on the same day, the town being taken. Inside the fortnight that follows, the two accounts part company. Wikipedia gives Putnik’s order to counterattack on 15 August, the first clash with the outposts on the slopes of Cer Mountain that night, and the Serbian re-entry into Šabac on 24 August as the end of the battle; and it alone gives the fighting as opening at Ljubovija and Šabac before Loznica is treated as significant. The Times history, which narrates the same battle under the name of the Jadar, puts the first real shock of the battle on the morning of 16 August, when a strong Austrian column was found marching across the foothills of the Tzer towards Šabac, and calls the troops that took the town the advance guard of the Austrian 4th Army where Wikipedia has the 4th Army Corps. The card therefore says the second half of August and names no day for the counterattack. The Austro-Hungarian loss figures printed in this atlas’s own strength row for the Serbian frontier line — 6,000 to 10,000 killed, 30,000 wounded and 4,500 prisoners against much smaller Serbian losses — are Wikipedia’s alone, as are the Serbian casualty totals of 3,000 to 5,000 killed and 15,000 wounded; neither appears in the card. Potiorek as the invading commander is likewise the Wikipedia account alone in this set, though the Times history indexes him by name.',
  },
  {
    topic: 'Kazan 1918: the day of the capture, the sum in the treasury, and the day the city was lost',
    range: 'The card is dated August 1918 and not to a day, because the day is single-family. Wikipedia’s Czechoslovak Legion article prints the capture of Kazan and an Imperial state gold reserve on 6–7 August 1918 with substantial Czechoslovak help, and it is the only account in this set that gives a day; The Times history records that the Legion captured Kazan and there seized the Russian State Treasury held by the Bolshevists without a date, and the New York Times monthly gives no date for the capture either. The sum is the same problem in another form: only the Times history prints £65,000,000, while Wikipedia says only that an Imperial state gold reserve was taken, so the prose says state treasure. The recovery of the city is a mirror image: the Legion article and the Samara government’s article both give 10 September, with Simbirsk two days later and Samara about a month after, but those are one family; the non-Wikipedia account, a translated Petrograd despatch, says the Soviet forces occupied Volsk, Simbirsk and Kazan in the middle of September and that the latter city was recaptured by the Czechoslovaks according to a despatch of 30 September. The prose says September. This atlas’s own line summary for the Legion on the Volga already prints both the 6–7 August and the 10 September days that this card keeps to the note. What became of the treasure afterwards is two-family in substance and single-family in its detail: the Times history records that the Siberian Government, created in May 1918 with the aid of the Czechoslovaks, was in possession of the Russian State treasure of £65,000,000 captured at Kazan, so the prose says only that the treasure was in its hands, and gives no day and no sum beyond calling it state treasure; that the bullion was still on Kolchak’s trains when they were stranded along the railway near Nizhneudinsk is the Wikipedia account alone, so the secondary level does not mention the trains and the university level attributes them to Wikipedia by name, and no source in this set says the treasure travelled anywhere.',
  },
  {
    topic: 'Where the pins were put, and what was refused',
    range: 'Each of the four lines gets one pin, at a waypoint of its existing path, with no waypoint moved and no coordinate invented. Salonika is at the port, waypoint 0, because the landing has no ambiguity there, and the atlas carries that place-name at those exact coordinates; the line’s northernmost waypoint geocodes to Negotino, 31 km from the Krivolak its own summary names, so the card’s map note discloses the gap instead of drawing a false equality, and no Krivolak card was built because the fighting there is dated in this set by the official history alone. For the Serbian frontier line the pin is at Loznica, waypoint 2, because both families call the Drina crossing there the first penetration; Šabac (waypoint 1) is proven in both families on the same day and is offered in findings.json as the alternate if a second pin is wanted. For Fifth Ypres the pin is on the Passendale ridge, waypoint 0, where the ground taken on the first day and the line’s own start date agree; Rekkem and Lauwe, proven only in the official history for 17 October, were refused. For the Legion line the pin is at Kazan, waypoint 3; Simbirsk (waypoint 2) was refused because its September dates rest on the same single family as the days the card declines to print.',
  },
  {
    topic: 'The day the Serbian counter-offensive on the Kolubara was delivered',
    range:
      'Three dates are in print for one act and the site prints the split rather than choosing. Wikipedia ' +
      'has the Serbian army launching a surprise counter-attack all along the front on 2 December 1914, ' +
      'the day the card and the march line used before 23 November 2026. The Great War dates it to 3 ' +
      'December and prints the disagreement by name, that some studies including the English Wikipedia ' +
      'date the start to 2 December when on that day the orders were issued and the attack itself began ' +
      'the following morning; its account of the day has Mišić’s First Army going in at 7 a.m., three ' +
      'divisions on a front of about 10 kilometres against the Suvobor ridge. The Serbian Ministry of ' +
      'Defence gives no opening day at all, only that the enemy’s resistance on the Suvobor and along the ' +
      'front line was broken by 5 December and the chase of the Sixth Army then begun. So the prose says ' +
      'the counter-offensive opened on 2 or 3 December, the hours stay in the card note, and the map, ' +
      'which resolves by month, is not asked to settle a thing it cannot see.',
  },
  {
    topic: 'The day Potiorek and von Frank lost their Balkan commands',
    range:
      'Four dates are printed for the same dismissal. Wikipedia’s Kolubara article has 22 December 1914, ' +
      'and repeats that day for Potiorek alone, adding that the Fifth and Sixth Armies were merged into a ' +
      'single Fifth Army of 95,000 men and that he was replaced by the Archduke Eugen. The Great War ' +
      'prints 22 December for the recall and for the combination of all forces in the Balkans into one ' +
      'Fifth Army under Eugen. Wikipedia’s own article on the Austro-Hungarian Balkan command has ' +
      'Potiorek relieved on 17 December and formally resigned a few days later. The Great War’s battle ' +
      'page leaves it at the end of December. The Austrian Biographical Lexicon is reported by a search ' +
      'to date his removal from command to 23 December 1914, and that date is recorded in a card note and ' +
      'cited nowhere, because the only copy of that entry reachable from this machine is a PDF with no ' +
      'text layer to quote. This site prints the loss of command as happening in the second half of ' +
      'December; the merge of the two armies and Eugen’s succession, which two families print, are in the ' +
      'note, and the figure of 95,000 men for the merged army is Wikipedia’s alone.',
  },
  {
    topic: 'The Austro-Hungarian losses at the Kolubara: 273,000, about 225,000 or 274,000, and for which front',
    range:
      'One encyclopaedia prints three Austro-Hungarian totals for this fighting, and a second family ' +
      'prints a fourth. The infobox of the Kolubara article gives 273,000, broken down as 30,000 killed, ' +
      '173,000 wounded and 70,000 captured; that article’s own text gives about 225,000 casualties under ' +
      'the same three components, which add up to 273,000 and not to 225,000; and the same ' +
      'encyclopaedia’s article on the Austro-Hungarian Balkan command gives 274,000 for the whole front ' +
      'to the end of December 1914, of nearly 30,000 killed, over 122,000 wounded and 75,000 missing or ' +
      'captured, which does not add up from its own components either. The Great War prints 274,000 as ' +
      'the losses compiled at the beginning of 1915 and gives the components that do sum: more than ' +
      '28,000 killed, about 122,000 wounded, almost 47,000 sick and nearly 77,000 missing and taken ' +
      'prisoner; it also gives Serbian-based tables of about 163,000 lost in 1914 including more than ' +
      '22,000 killed, and warns that these figures vary according to whether they cover the battle alone ' +
      'or the whole third invasion. The Serbian breakdown is the one figure two families give in the same ' +
      'terms, about 22,000 killed, 91,000 wounded and 19,000 missing or captured, and that is what this ' +
      'site prints; on the Austro-Hungarian side it prints 273,000 in one place and about 225,000 in ' +
      'another, states the disagreement, and prints no breakdown and no settled total.',
  },
  {
    topic:
      'Togoland, 1914: the day of the invasion, the day of the surrender, and the day of Kamina',
    range:
      'The card is dated 26 August 1914 and says the entry into Kamina is also dated the 27th. F. J. ' +
      'Moberly’s official history, which this site has in the series row, prints a letter of surrender ' +
      'received on the morning of 26 August and a ceremony arranged for the following day, so 26 August is ' +
      'documented. The invasion on 7 August, and the 27 August given for the Allied capture in the account ' +
      'first used for the card, could not be checked against any page reached: Encyclopaedia Britannica’s ' +
      'article on Togo dates nothing in August 1914, and there is no chronology page of that encyclopedia. ' +
      'Both days are therefore printed on the strength of a single, unverifiable account.',
  },
  {
    topic:
      'Mahiwa: the day-by-day account taken from the twelfth edition of Encyclopaedia Britannica',
    range: 'The card’s note gives a four days’ battle beginning early on 15 October 1917, counter-attacks on ' +
      'the 17th and 18th, an attack ordered for the 19th and cancelled, and losses of 2,700 British ' +
      'casualties of 4,900 infantry engaged, 528 of them in the Nigerian Brigade, against von Lettow’s ' +
      'own figure of some 1,500 men with 519 losses. All of it is from one house: the twelfth edition of ' +
      '1922, volume 30, page 884, read in a digitised copy, with the 1926 supplement cited beside it from ' +
      'the same publisher. No other publisher in this atlas’s reach gives the day-by-day sequence or any ' +
      'of those figures, so the account is single-source and stays out of the card’s text. The opening ' +
      'day, 15 October, is what the houses share and is the date the card prints.',
  },
  {
    topic:
      'Aqaba: the sources for 6 July 1917, and for the description of the place',
    range:
      'The day rests on the National Army Museum and on a note at the Shapell Manuscript Foundation on a ' +
      'Lawrence letter, both of which give 6 July 1917. Earlier work on this card also credited ' +
      'Encyclopaedia Britannica with the day and with the phrase of a fortified post; re-reading the ' +
      'encyclopedia for this batch, the passage in its World War I material was not on the page, and the ' +
      'treatment that remains gives no day and no fortification. The credit has been removed from the ' +
      'note. Whether Aqaba was a fortified post at all is a separate question the card declines to answer.',
  },
  {
    topic:
      'The Bulgarian and Ottoman declarations of war on Romania, 1916: 29 August, 30 August, 31 August or ' +
      '1 September',
    range:
      'The card’s note lists the rival days rather than choosing. Ian Beckett’s The Great War, 1914–1918 ' +
      'holds that Bulgaria declared war only after attacking on 31 August 1916; other published ' +
      'chronologies put the Bulgarian declaration on 30 August or 1 September, and one printed chronology ' +
      'seen in a catalogue extract puts the Bulgarian attack itself on 1 September, which is not the day ' +
      'the note gives. The Ottoman declaration is placed on 29 August, 30 August or 1 September. Beckett’s ' +
      'text could not be read (see the bibliography row), so no day is preferred here, and the attack of 1 ' +
      'September in the second family is recorded so that the disagreement is visible.',
  },];
