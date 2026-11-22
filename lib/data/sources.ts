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
    url: 'http://web.archive.org/web/20251208161226id_/https://www.history.navy.mil/research/library/online-reading-room/title-list-alphabetically/a/american-naval-participation-in-the-great-war-with-special-reference-to-the-european-theater-of-operations.html',
    usedFor: 'The American official record of Durazzo on 2 October 1918: that Germany and Austria used the port to send supplies to Bulgaria, that the port, the merchant shipping and the men-of-war at anchor were bombarded by Italian and British cruisers screened against submarine attack by destroyers and American submarine chasers, that two hostile submarines were either badly damaged or destroyed, and the depth-charge attacks by submarine chasers No. 129 and No. 215. The navy’s host does not serve this page any more, so the link is to its Internet Archive capture of 8 December 2025 of the address history.navy.mil/research/library/online-reading-room/title-list-alphabetically/a/american-naval-participation-in-the-great-war-with-special-reference-to-the-european-theater-of-operations.html.',
  },
  {
    citation: '“WWI: Submarine Chasers”, National Museum of the United States Navy',
    publisher: 'Naval History and Heritage Command, US Department of the Navy',
    url: 'http://web.archive.org/web/20251210090721id_/https://www.history.navy.mil/content/history/museums/nmusn/explore/photography/wwi/wwi-submarine-chasers.html',
    usedFor: 'The companion museum account of the same action, which disagrees with the official history of the same institution: it gives the force at Durazzo on 2 October 1918 as a squadron of 11 submarine chasers screening British, French and Italian naval forces, and says that the chasers destroyed the mines which threatened the bombarding ships. Cited together with the official history because the two cannot both be right about the size of the American force or the fate of the submarines. Linked through the Internet Archive capture of 10 December 2025 of the address history.navy.mil/content/history/museums/nmusn/explore/photography/wwi/wwi-submarine-chasers.html.',
  },
  {
    citation: 'Giorgio Anastasiadou, “Albania”, _1914-1918-online: International Encyclopedia of the First World War_',
    publisher: 'Freie Universität Berlin',
    url: 'http://web.archive.org/web/20260905215701id_/https://encyclopedia.1914-1918-online.net/article/albania/',
    usedFor: 'The political history of Albania in 1918 and the second family for the bombardment of the port on 2 October 1918: General Louis Franchet d’Espèrey led troops to Durrës and bombarded it to thwart the evacuation of the Bulgarian and German armies and, presumably, to keep the Serbs and the Italians separated. The same article is the only source for the agreement reached at Paris on 7 October 1918, led by Georges Clemenceau, allowing Italian troops to replace the French at Korçë, and so that agreement is recorded on the card rather than printed in its prose. Linked through the Internet Archive capture of 5 September 2026, because the encyclopedia’s own host returns a page with no article text on it.',
  },
  {
    citation: 'Raymond J. Sontag, “Bulgaria”, _1914-1918-online: International Encyclopedia of the First World War_',
    publisher: 'Freie Universität Berlin',
    url: 'http://web.archive.org/web/20260629080631id_/https://encyclopedia.1914-1918-online.net/article/bulgaria/',
    usedFor: 'The Bulgarian side of the armistice: the government’s decision on 25 September to seek an accommodation with the Entente, the delegation that went to Salonika with the American consul general in Sofia, the signing on 29 September and Bulgaria being the first of the Central Powers to leave the war, the judgement that the terms were not terribly onerous and that most of the country avoided foreign occupation, and Ferdinand’s abdication on 3 October 1918 in favour of his son Boris. Linked through the Internet Archive capture of 29 June 2026, for the same reason as the article on Albania.',
  },
  {
    citation: '“World War I and Its Effects on Albania”, _Albania: A Country Study_, edited by Raymond Zickel and Walter R. Iwaskiw, Government Printing Office for the Library of Congress',
    publisher: 'US Library of Congress, Federal Research Division',
    url: 'http://countrystudies.us/albania/23.htm',
    usedFor: 'Who held Albania when the war ended: the Austro-Hungarian withdrawal beginning within days of the Entente breakthrough north of Thessaloniki in September 1918, and Italy’s army holding most of the country, Serbia much of the northern mountains, Greece a sliver inside the 1913 borders and French forces Korçë and Shkodër, when the armistice took effect on 11 November. This is the basis for drawing Albania at peace rather than occupied, and for the uncertainty entry about its colour in the last months of 1918.',
  },
  {
    citation: '“World War I”, _Bulgaria: A Country Study_, edited by Glenn E. Curtis, Government Printing Office for the Library of Congress',
    publisher: 'US Library of Congress, Federal Research Division',
    url: 'http://countrystudies.us/bulgaria/13.htm',
    usedFor: 'The Bulgarian domestic situation behind the armistice, and a second family for the end of Ferdinand: the parties in power forced him to abdicate at the end of September because they feared full-scale revolution. It gives no day, which is why the card prints no interval between the armistice and the abdication.',
  },
];

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
];
