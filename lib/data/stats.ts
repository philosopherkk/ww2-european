import type { Bloc, CountryStat, YearStat } from './types';

/**
 * Manpower and loss figures for the Great War, on the borders of 1914.
 *
 * Where a year cannot be sourced, the nearest documented year is carried
 * forward and that year's `note` says so. Nothing here is interpolated.
 *
 * The printed authorities behind the tables are the British War Office's
 * _Statistics of the Military Effort of the British Empire During the Great War
 * 1914–1920_ (1922); the US War Department returns of 25 February 1924; the
 * replies of seventeen governments to the International Labour Office
 * questionnaire of 1923–25; the German _Sanitätsbericht über das deutsche Heer
 * im Weltkriege_ (1934); Michel Huber's _La Population de la France pendant la
 * guerre_ (1931); Gustavo Mortara's _La Salute pubblica in Italia_ (1925); Leon
 * Hersch's _La mortalité causée par la guerre mondiale_ (1927); and, for the
 * eastern and southern wars, Boris Urlanis (1971), Vadim Erlikman (2004) and
 * Edward Erickson (2001). The 1914 population figures are the census returns
 * collected in Haythornthwaite, _The World War One Source Book_ (1994),
 * pp. 382–3.
 *
 * Every `deathsNote` says whether the 1918–19 influenza pandemic is in or out.
 * Almost all of these totals exclude it, so they are not comparable with
 * pandemic counts unless the note says otherwise.
 */
export const COUNTRY_STATS: CountryStat[] = [
  {
    id: 'Germany',
    name: 'Germany',
    bloc: 'central',
    capital: 'Berlin',
    belligerent: [1914, 1918],
    series: [
      {
        year: 1914,
        population: 64.9,
        armedForces: 2.02,
        note: 'Field armies in summer 1914: 2,019,470 men against a peacetime effectif of 760,908. Full mobilisation brought roughly 3.8 million under the colours once depot and Landwehr formations are counted.',
      },
      {
        year: 1915,
        population: 64.9,
        armedForces: 2.02,
        note: 'No annual field-army return is available in the sources used here, so the summer-1914 figure is carried forward rather than estimated.',
      },
      {
        year: 1916,
        population: 64.9,
        armedForces: 2.02,
        note: 'Carried from 1914. The Hindenburg programme and the Auxiliary Service Law of 22 December 1916 pulled more men in, and the Ersatz armies were reorganised, but no annual total is given in the sources used here.',
      },
      {
        year: 1917,
        population: 64.9,
        armedForces: 2.02,
        note: 'Carried from 1914. The Auxiliary Service Law was extended to younger men in 1917; the turnip winter of 1916–17 reduced the food available to the home population, not to the army.',
      },
      {
        year: 1918,
        population: 64.9,
        armedForces: 2.02,
        note: 'Carried from 1914, and therefore a floor, not a peak: the paper strength of the field armies in the summer of 1918 was higher than the figure shown, and it collapsed only in the last weeks, with mass surrender and the sailors’ and soldiers’ councils of early November. Some 13.25 million men had served by the end.',
      },
    ],
    peakForces: 2.02,
    militaryDeaths: 2.037,
    civilianDeaths: 0.763,
    deathsNote:
      'Military deaths 2,037,000, from the Sanitätsbericht of 1934 as read by Boris Urlanis, of whom about 1,796,000 were killed or died of wounds and gas. The range is 1,773,700, the US War Department return of 1924 following the German figure of 1921, to over 2,050,000, which is Rüdiger Overmans’s revision on the register of the graves commission; the two disagree because the 1921 count stops at the frontier of 1914 and misses men who died of wounds or in captivity after December 1918. Civilian deaths are excess mortality, and the range is wider: Alan Kramer puts it at 300,000, while C. Paul Vincent, following the German Board of Public Health report of December 1918, puts it at 763,000, which is the figure used above. Only 720 civilians are recorded as killed by bombing. All of these figures exclude deaths from the 1918–19 influenza pandemic, and the pandemic is part of what the 763,000 is arguing about.',
    simple: 'Germany fought on two fronts at once and lost about two million soldiers, roughly one in five of the men who wore its uniform.',
  },
  {
    id: 'Austria-Hungary',
    name: 'Austria-Hungary',
    bloc: 'central',
    capital: 'Vienna',
    belligerent: [1914, 1918],
    series: [
      {
        year: 1914,
        population: 51.4,
        armedForces: 1.47,
        note: 'War effectives in summer 1914: 1,470,000 men, from a peacetime establishment of 477,859. Hungary’s land was the empire’s granary and its recruit levy was the least reliable.',
      },
      {
        year: 1915,
        population: 51.4,
        armedForces: 1.47,
        note: 'Carried from 1914. The Carpathian winter of 1914–15 and the May 1915 breakthrough at Tarnów both cost heavily; no annual strength return is used here.',
      },
      {
        year: 1916,
        population: 51.4,
        armedForces: 1.47,
        note: 'Carried from 1914. The Brusilov offensive in June broke the army in Galicia, and whole formations surrendered; from this point the empire depended on German divisions and German commanders.',
      },
      {
        year: 1917,
        population: 51.4,
        armedForces: 1.47,
        note: 'Carried from 1914. Bread rationing worsened through the year, and the mutiny at Bocca di Magra and the Czech regiment’s surrender at Riga showed what the armies had become.',
      },
      {
        year: 1918,
        population: 51.4,
        armedForces: 1.47,
        note: 'The armies were disintegrating: units broke and marched home demanding food and peace, the national councils in Prague, Zagreb and Budapest took what authority they could, and the armistice of Villa Giusti on 3 November was signed after the army had already ceased to fight. The population figure is the 1914 total; the successor states are not tabulated separately here.',
      },
    ],
    peakForces: 1.47,
    militaryDeaths: 1.494,
    civilianDeaths: 0.467,
    deathsNote:
      'Military deaths 1,494,200 in the Austrian official history, _Österreich-Ungarns letzter Krieg_, volume 7, Beilage 37: 1,016,200 killed plus 478,000 who died in captivity. A figure of 1.1 to 1.2 million is often repeated with 600,000 POW deaths attached to it; that pairing is not what the official history prints, and the number printed there is 478,000. The lower bound is 1,200,000, the US War Department and British War Office return. The ILO reply from Vienna gives 1,542,817 dead and missing out of 9,000,000 mobilised. Civilian deaths are excess mortality of 467,000 in Leo Grebler’s accounting; Vadim Erlikman counts only 120,000 civilians killed in the fighting on the Eastern Front, mostly in Galicia, and that is the difference between the two figures. Influenza deaths are out of all of them.',
    simple: 'The Dual Monarchy fielded an army of many languages and lost more than a million and a half of its soldiers; it ended the war split into several new countries.',
  },
  {
    id: 'United Kingdom',
    name: 'United Kingdom',
    bloc: 'entente',
    capital: 'London',
    belligerent: [1914, 1918],
    series: [
      {
        year: 1914,
        population: 45.4,
        armedForces: 0.7,
        note: 'Regulars, reserves and the Territorial Force came to nearly 700,000 on paper, of 247,432 regulars and some 246,000 Territorials; only about 150,000 were ready at once as the British Expeditionary Force. Dominion and colonial troops are not in this figure: Canada, Australia, New Zealand, Newfoundland, South Africa and India kept their own returns. The population is the United Kingdom of Great Britain and Ireland; the empire as a whole held about 380 million.',
      },
      {
        year: 1915,
        population: 45.4,
        armedForces: 0.7,
        note: 'Carried from 1914, and too low for the year: some 300,000 men had enlisted by the end of August 1914 and another 450,000 by the end of September, so the army in the field in 1915 was far bigger than the figure shown. No annual return is used here.',
      },
      {
        year: 1916,
        population: 45.4,
        armedForces: 0.7,
        note: 'Carried from 1914. Conscription for single men began in January 1916 and was extended to married men after Easter; the army it raised is not separately tabulated here.',
      },
      {
        year: 1917,
        population: 45.4,
        armedForces: 0.7,
        note: 'Carried from 1914.',
      },
      {
        year: 1918,
        population: 45.4,
        armedForces: 3.82,
        note: 'The British Army reached its maximum strength of 3,820,000 men by the end of 1918, able to field over seventy divisions. This counts the British Army only; Dominion and Indian formations are counted in their own rows and in the imperial total.',
      },
    ],
    peakForces: 3.82,
    militaryDeaths: 0.888,
    civilianDeaths: 0.107,
    deathsNote:
      'Military deaths 887,858 for the United Kingdom in the Commonwealth War Graves Commission’s count, against 744,000 combat deaths and missing in the War Office returns; the Commission is higher because it registers men who died of wounds, of disease, and outside the combat theatres, and it counts labour troops recruited in Africa, the Middle East and China that the 1921 rolls left out. For the whole empire the range is 949,454 to 1,118,264. Civilian deaths are excess mortality: Leon Hersch calculated 107,000, Alan Kramer 400,000; the War Office recorded only 16,829 civilians killed, of whom 908 died in naval attacks. The figure used here is Hersch’s. Influenza deaths are out; the 1918–19 pandemic killed far more people in Britain than 107,000, and any comparison with a pandemic total is a comparison of different things.',
    simple: 'Britain sent a small professional army in 1914 and a much bigger one by 1918, and lost close to a million soldiers counting the whole empire.',
  },
  {
    id: 'France',
    name: 'France',
    bloc: 'entente',
    capital: 'Paris',
    belligerent: [1914, 1918],
    series: [
      {
        year: 1914,
        population: 39.6,
        armedForces: 3.58,
        note: 'The corps de bataille reached 3,580,000 men by the middle of August 1914, from a peacetime effectif of 736,000 on 1 August under the three-year law of 7 August 1913; von Kuhl’s German comparison prints a much lower 2,032,820 because it excludes the territorial formations. Troops raised in the French empire are included in French figures, as the French official history includes them; they are not broken out separately here.',
      },
      {
        year: 1915,
        population: 39.6,
        armedForces: 3.58,
        note: 'Carried from 1914. The Artois and Champagne offensives of 1915 bled the army faster than the 1915 classes could replace them.',
      },
      {
        year: 1916,
        population: 39.6,
        armedForces: 3.58,
        note: 'Carried from 1914. Verdun and the Somme together consumed the manhood of a country whose birth rate had been falling for eighty years; the classe of 1912 was virtually destroyed.',
      },
      {
        year: 1917,
        population: 39.6,
        armedForces: 3.58,
        note: 'Carried from 1914. After the Chemin des Dames in April, units refused to attack in the spring mutinies; Pétain restored order by ending futile attacks and improving leave and food, not only by punishment.',
      },
      {
        year: 1918,
        population: 39.6,
        armedForces: 3.58,
        note: 'Carried from 1914, and it understates the manning crisis rather than the strength: by 1918 France had no classes left to call up in the numbers Germany could still find, which is why it asked for American divisions and took them into line beside French ones.',
      },
    ],
    peakForces: 3.58,
    militaryDeaths: 1.398,
    civilianDeaths: 0.3,
    deathsNote:
      'Military deaths 1,397,800 in Michel Huber’s census-based study, against 1,357,000 in the War Office and US War Department returns; of these about 1,150,000 were killed or missing in action, which is Huber’s own figure for combat deaths. The civilian range runs from 40,000 civilians killed by military action, which is what Clodfelter and Ellis print, to 300,000 excess deaths, which is Leon Hersch and the figure used here, to 600,000, which is Alan Kramer. Samuel Dumas works the same parish registers from the other direction and gets 264,000 to 284,000 deaths from privation plus 100,000 to 120,000 from influenza, and Hersch allows 300,000 privation with 200,000 influenza: the two historians disagree mainly about where privation stops and the pandemic begins. French totals also exclude the men of Alsace-Lorraine who served and died in German uniform, who are counted by Germany instead.',
    simple: 'France lost about one in six of the men it called up, in a country that was already the oldest in Europe.',
  },
  {
    id: 'Russia',
    name: 'Russia',
    bloc: 'entente',
    capital: 'St Petersburg',
    belligerent: [1914, 1918],
    series: [
      {
        year: 1914,
        population: 175.1,
        armedForces: 3.46,
        note: 'War effectives of 3,461,750 on mobilisation, from a summer peacetime strength of 1,581,000; the Great Programme of 1913 was still building the army when war came. Population and strength are the empire of 1914, including Poland, the Baltic provinces, Finland, the Ukraine and the Caucasus.',
      },
      {
        year: 1915,
        population: 175.1,
        armedForces: 3.46,
        note: 'Carried from 1914. The great retreat of 1915 lost Poland and millions of casualties, and the population figure is not reduced for the provinces under German occupation because the sources here give no census of the occupied zone.',
      },
      {
        year: 1916,
        population: 175.1,
        armedForces: 3.46,
        note: 'Carried from 1914. The army of 1916 was better equipped than the army of 1914, and 15.4 million men served over the whole war.',
      },
      {
        year: 1917,
        population: 175.1,
        armedForces: 3.46,
        note: 'The army was dissolving as well as fighting. Order No. 1 of March 1917 put units under the control of soldiers’ committees, the June offensive failed, desertion became mass and unorganised, and the armistice with the Central Powers began on 15 December. The figure shown is paper strength, not obedience.',
      },
      {
        year: 1918,
        population: 175.1,
        armedForces: 0,
        note: 'The imperial army was demobilised by decree in January 1918 and ceased to exist; the Workers’ and Peasants’ Army was created on 28 January 1918 and Russia left the war at Brest-Litovsk on 3 March. Russia is a belligerent in no part of this year. The population figure is still the 1914 total: Finland, the Baltic provinces, Poland and Ukraine were all outside Russian control by the armistice, and no census of the 1918 border is used here.',
      },
    ],
    peakForces: 3.46,
    militaryDeaths: 1.7,
    civilianDeaths: 1.14,
    deathsNote:
      'Military deaths 1,700,000, the figure the Soviet government returned to the International Labour Office in 1924, on 15,070,000 mobilised, and the figure in the US War Department return, against 2,254,369 in the later Russian count by G. F. Krivosheev, who adds 190,000 prisoners who died in captivity and reaches the total from 15,378,000 mobilised; Boris Urlanis puts it at 1,811,000. The lower bound is the Soviet estimate of 1925, 775,400 dead and missing, which every later historian rejects as impossible. The circulating claim that Erlikman totals ten million Russian war dead could not be verified against his published tables and is not used here. Civilian deaths are Erlikman’s 1,140,000 for 1914 to 1917 on the 1914 borders, made of 410,000 civilians killed in the fighting and 730,000 excess deaths; Urlanis puts privation deaths alone at 1,500,000 to the end of 1917. Total deaths on these two accounts run from 2.84 to 3.39 million. Influenza is out of all of them, and so are the far larger deaths of the Civil War, the 1921–22 famine and typhus.',
    simple: 'Russia put more men in uniform than any other country and lost more soldiers than anyone, and its army stopped obeying its officers before the war ended.',
  },
  {
    id: 'Italy',
    name: 'Italy',
    bloc: 'co_belligerent',
    capital: 'Rome',
    belligerent: [1915, 1918],
    series: [
      {
        year: 1914,
        population: 35.6,
        armedForces: 0.3,
        note: 'Italy was neutral in 1914 and its army was not mobilised; the strength shown is the nearest documented figure, the mobilisation of May 1915, and it is not a 1914 peacetime return. Trento, South Tyrol and Trieste were still outside the kingdom.',
      },
      {
        year: 1915,
        population: 35.6,
        armedForces: 0.3,
        note: 'War declared on 23 May 1915. Luigi Cadorna’s army attacked the Isonzo eleven times between June 1915 and 1917; the strength shown is a peacetime-scale figure and understates the army actually in the field.',
      },
      {
        year: 1916,
        population: 35.6,
        armedForces: 0.3,
        note: 'Carried forward. The Austro-Hungarian offensive on the Asiago plateau in May 1916, which its planners called a punitive expedition, was stopped; no annual strength return is used here, and 5,615,000 men were mobilised over the whole war.',
      },
      {
        year: 1917,
        population: 35.6,
        armedForces: 0.3,
        note: 'Carried forward. Caporetto on 24 October 1917 broke the second army and lost a third of Italy’s industrial north; Cadorna was replaced by Armando Diaz, and the army that held the Piave was a different institution.',
      },
      {
        year: 1918,
        population: 35.6,
        armedForces: 0.3,
        note: 'Carried forward. Vittorio Veneto on 24 October to 3 November broke the Austro-Hungarian army; the armistice was signed on 3 November, a week before the German one.',
      },
    ],
    peakForces: 0.3,
    militaryDeaths: 0.65,
    civilianDeaths: 0.332,
    deathsNote:
      'Military deaths 650,000 in the US War Department return of 1924, against 460,000 in the British War Office, which counts only combat deaths and missing, and 709,000 in Gustavo Mortara’s study of 1925, followed by the 1914-1918-online survey of Italian losses; the difference is mostly men who died of disease and in captivity after Caporetto. Civilian deaths are 3,400 civilians killed by military action in Mortara’s own tables, and excess mortality variously 332,000, which is Alan Kramer, or 589,000 privation deaths, which is Leon Hersch, whose Italian total of 1,021,000 adds 432,000 influenza deaths to it. Samuel Dumas gives 324,000 privation deaths with 300,000 from influenza, and Emilio Isnenghi and Giorgio Rochat give 606,407 excess deaths for 1915 to 1918 of which 274,041 were influenza. The figure used here excludes influenza throughout; the Italian case is the clearest on the site for showing why that choice has to be stated, because with the pandemic in, Italy’s civilian deaths exceed its military ones.',
    simple: 'Italy changed sides in 1915 and fought a hard mountain war; after Caporetto it lost ground and then held the Piave.',
  },
  {
    id: 'Ottoman Empire',
    name: 'Ottoman Empire',
    bloc: 'central',
    capital: 'Constantinople',
    belligerent: [1914, 1918],
    series: [
      {
        year: 1914,
        population: 21.3,
        armedForces: 1.0,
        note: 'General mobilisation on 3 August 1914 for ages twenty to forty-five. More than a million men were mobilised, with a combat strength of about 820,000, and a quarter of them had to be sent home again for want of food, clothing and equipment; mobilisation was not complete until early November. The capital is given by its English name of 1914, Constantinople, which the empire itself called İstanbul and Europe still called Constantinople.',
      },
      {
        year: 1915,
        population: 21.3,
        armedForces: 1.0,
        note: 'Carried from 1914. Gallipoli, Sarikamish and the first Armenian deportations fell in this year; the minimum age for service was lowered to eighteen on 29 April 1915.',
      },
      {
        year: 1916,
        population: 21.3,
        armedForces: 1.0,
        note: 'Carried from 1914. The maximum age was raised to fifty on 20 March 1916 and service became indefinite; Kut fell to the British in December after a siege.',
      },
      {
        year: 1917,
        population: 21.3,
        armedForces: 1.0,
        note: 'Carried from 1914. Jerusalem fell in December; desertion was by now on a large scale, and the army’s weakness was manpower and transport rather than will.',
      },
      {
        year: 1918,
        population: 21.3,
        armedForces: 1.0,
        note: 'Carried from 1914. About three million men, plus some 100,000 volunteers, had been drafted over the whole war out of a population of 23 million. Megiddo in September broke the armies in Syria and the armistice of Mudros followed on 30 October; the Arab provinces were lost, and the 1914 population figure covers them.',
      },
    ],
    peakForces: 1.0,
    militaryDeaths: 0.325,
    civilianDeaths: 1.0,
    deathsNote:
      'Military deaths range from 325,000, the Ottoman official statistics published in 1922 and read by Mehmet Beşikçi out of 2,850,000 mobilised, to 771,844 in Edward Erickson’s reconstruction from the same archives: 243,598 killed in action, 61,487 missing and presumed dead, and 466,759 dead of disease. The two figures differ almost entirely over captivity and disease, which is why the range is given as roughly 250,000 to 800,000 in most recent writing; the figure used above is the official one and is the floor. Armenian deaths are deliberately NOT inside the civilian figure above, and are stated here so they cannot be read as a subset of it: the range is 800,000 to 1.5 million, the higher end being the figure in the standard genocide references such as Totten’s dictionary, and the lower the figure consistent with the Armenian Patriarchate’s own 1919 inquiry and with Erickson’s and Finkel’s accounting; Cemil Koç and the Turkish state’s position, that the dead were far fewer and were lost in war and famine on both sides, is set out in the uncertainties list. Vadim Erlikman puts Armenian, Assyrian and Greek deaths together at about 2.2 million and counts a further 1.0 million from famine and disease, the figure used above, which includes the 200,000 or so who starved in Mount Lebanon in 1915 to 1918. Influenza is out of all of them.',
    simple: 'The Ottoman Empire fought on many fronts and lost most of its soldiers to disease and hunger; the Armenians of the empire were deported and killed, and their deaths are counted here separately, not hidden inside a civilian total.',
  },
  {
    id: 'Serbia',
    name: 'Serbia',
    bloc: 'entente',
    capital: 'Belgrade',
    belligerent: [1914, 1918],
    series: [
      {
        year: 1914,
        population: 4.5,
        armedForces: 0.285,
        note: 'War effectives of 285,000 from a peacetime army of 51,000. Serbia had fought two Balkan Wars in 1912 and 1913 and was exhausted when Austria-Hungary attacked in July 1914.',
      },
      {
        year: 1915,
        population: 4.5,
        armedForces: 0.285,
        note: 'Carried from 1914. The army was overwhelmed in October 1915 by a combined German, Austro-Hungarian and Bulgarian attack and retreated through Albania in the winter over the mountains, with the king, the government and tens of thousands of civilians.',
      },
      {
        year: 1916,
        population: 4.5,
        armedForces: 0.285,
        note: 'Carried from 1914, and it overstates the year: the survivors were re-formed on Corfu and fought on the Salonika front, while the whole of Serbia lay under Bulgarian or Austro-Hungarian army rule.',
      },
      {
        year: 1917,
        population: 4.5,
        armedForces: 0.285,
        note: 'Carried from 1914.',
      },
      {
        year: 1918,
        population: 4.5,
        armedForces: 0.285,
        note: 'Carried from 1914. The army broke through the Bulgarian lines in September 1918 and was home in Belgrade by November. The population figure is the principality of 1914; the Kingdom of Serbs, Croats and Slovenes proclaimed in December is not counted here.',
      },
    ],
    peakForces: 0.285,
    militaryDeaths: 0.3,
    civilianDeaths: 0.45,
    deathsNote:
      'Serbia lost a larger share of its people than any other belligerent, and the range matters more here than anywhere else on the site. Military deaths 300,000 in Leon Hersch’s accounting, covering Serbia and Montenegro together, to 450,000 in the account of Frédéric Le Moal, who follows the Serbian official history; civilian deaths 450,000 in Hersch against 800,000 in the same account. Total deaths therefore run from 750,000 to 1,250,000, which is between 17 and 28 per cent of the population of 1914, against about 16 per cent for France and about 3 per cent for Germany. Two cautions: Le Moal’s figures cover 1912 to 1918 and so include the Balkan Wars, which is the main reason the two accounts part company, and the same two figures of 450,000 and 800,000 are printed in some tables as one military and civilian series with no line drawn between them, so the split between the two columns is not firmer than the total. and Boris Urlanis gives a lower combined total for Serbia and Montenegro of 728,000, of which 278,000 military. Erlikman counts 120,000 Serbian civilians killed by military operations and 30,000 shot. The US War Department’s 45,000 Serbian killed is not usable and is not used. Influenza and typhus deaths are out of the figures above, and both were severe among the retreating army and the refugees.',
    simple: 'Serbia was invaded three times and lost between a sixth and more than a quarter of all its people, the highest share of any country in the war.',
  },
  {
    id: 'Belgium',
    name: 'Belgium',
    bloc: 'entente',
    capital: 'Brussels',
    belligerent: [1914, 1918],
    series: [
      {
        year: 1914,
        population: 7.4,
        armedForces: 0.28,
        note: 'War effectives of 280,000 from a peacetime army of 61,282, raised by a short-service system that the army bill of 1913 had only just widened. Liège and Namur fell in August and the government withdrew behind the Yser, where the country was flooded.',
      },
      {
        year: 1915,
        population: 7.4,
        armedForces: 0.28,
        note: 'Carried from 1914. Nearly the whole country was under German army rule; the unoccupied strip behind the Yser held only a fraction of the population, and the figure shown is the national total of 1914, not the population of the unoccupied zone.',
      },
      {
        year: 1916,
        population: 7.4,
        armedForces: 0.28,
        note: 'Carried from 1914.',
      },
      {
        year: 1917,
        population: 7.4,
        armedForces: 0.28,
        note: 'Carried from 1914.',
      },
      {
        year: 1918,
        population: 7.4,
        armedForces: 0.28,
        note: 'Carried from 1914. Belgian divisions took part in the final offensive in Flanders from 28 September 1918 and reached the Rhine.',
      },
    ],
    peakForces: 0.28,
    militaryDeaths: 0.038,
    civilianDeaths: 0.024,
    deathsNote:
      'Military deaths 38,170 in the British War Office returns, against 58,637 in the Belgian statistical yearbook for 1915 to 1919; the yearbook counts deaths in captivity and from disease, which the War Office return treats separately. Civilian deaths of 23,700 come from the same yearbook and cover civilians killed by military action, including the hostages shot in August 1914 at Liège, Dinant and Tamines and the villagers burnt out of Louvain; the same yearbook and Leon Hersch allow an excess-mortality figure of 62,000 once famine and disease in the occupied country are counted, and that is the higher end of the range. Belgian deaths are small in absolute numbers and very large in proportion: the German occupation removed about a sixth of the national product and requisitioned food, and the winter of 1916 to 1917 was hungry throughout the occupied zone. Influenza deaths are out of the figures above.',
    simple: 'Belgium refused to let the German army march through, was overrun in a fortnight, and held a small corner of its own coast for four years.',
  },
  {
    id: 'Montenegro',
    name: 'Montenegro',
    bloc: 'entente',
    capital: 'Cetinje',
    belligerent: [1914, 1918],
    series: [
      {
        year: 1914,
        population: 0.5,
        armedForces: 0.035,
        note: 'A levy army of clans and districts, mobilised with Serbia. The strength shown is the nearest documented figure, the 35,000 or so of the ILO reply’s 50,000 mobilised; no 1914 peacetime return is used here.',
      },
      {
        year: 1915,
        population: 0.5,
        armedForces: 0.035,
        note: 'Carried from 1914. Montenegrin troops held the line at Mojkovac in January 1916 to cover the Serbian retreat, and were overwhelmed.',
      },
      {
        year: 1916,
        population: 0.5,
        armedForces: 0.035,
        note: 'Carried from 1914. Montenegro was occupied from January 1916 to November 1918 and its king went into exile, so this is a government-in-exile figure rather than an army in the field.',
      },
      {
        year: 1917,
        population: 0.5,
        armedForces: 0.035,
        note: 'Carried from 1914.',
      },
      {
        year: 1918,
        population: 0.5,
        armedForces: 0.035,
        note: 'Carried from 1914. Montenegro was liberated in November and united with Serbia in the same month, an arrangement contested by the Greens’ uprising of January 1919, which is outside this site’s dates.',
      },
    ],
    peakForces: 0.035,
    militaryDeaths: 0.003,
    civilianDeaths: 0.0,
    deathsNote:
      'Military deaths 3,000 in the US War Department return against 13,325 dead and missing in the reply the Yugoslav government made to the International Labour Office from Serbian records, on 50,000 mobilised; the range used here is therefore 3,000 to 13,325, and the higher figure is the one that fits 27 per cent of the men mobilised. Montenegrin losses are frequently folded into Serbian totals, as Hersch and Urlanis do, so a separate national total is not reliably published; the much larger figures sometimes printed in Montenegrin accounts could not be traced to a published source and are not used. Civilian deaths are put at zero here because no separate civilian tally for Montenegro exists in the sources used, which is a gap in the record rather than a claim that there were none: the 1916 to 1918 occupation and the famine that went with it certainly killed civilians. Influenza is out.',
    simple: 'Montenegro is the smallest country on this site and one of the hardest hit for its size; its soldiers fought beside Serbia’s and were overrun in 1916.',
  },
  {
    id: 'Bulgaria',
    name: 'Bulgaria',
    bloc: 'central',
    capital: 'Sofia',
    belligerent: [1915, 1918],
    series: [
      {
        year: 1914,
        population: 4.5,
        armedForces: 0.13,
        note: 'Bulgaria was neutral in 1914. The strength shown is the nearest documented figure, the Bulgarian War Office peacetime establishment carried in the British returns, and is not a 1914 mobilisation. The population is the principality within its 1914 borders.',
      },
      {
        year: 1915,
        population: 4.5,
        armedForces: 0.13,
        note: 'Entered the war on 14 October 1915 and helped crush Serbia in a fortnight. Bulgaria mobilised its whole male population for this campaign; the figure shown is the peacetime establishment, so it understates the army actually fielded.',
      },
      {
        year: 1916,
        population: 4.5,
        armedForces: 0.13,
        note: 'Carried from the peacetime establishment. Bulgaria took territory in Macedonia and Western Thrace in this year, which is not added to the population figure.',
      },
      {
        year: 1917,
        population: 4.5,
        armedForces: 0.13,
        note: 'Carried from the peacetime establishment.',
      },
      {
        year: 1918,
        population: 4.5,
        armedForces: 0.13,
        note: 'Carried from the peacetime establishment. The front broke on 15 September 1918, the troops mutinied and marched on Sofia, the tsar abdicated on 3 October and the armistice followed five days later; the territory gained in 1915 was lost again.',
      },
    ],
    peakForces: 0.13,
    militaryDeaths: 0.0875,
    civilianDeaths: 0.1,
    deathsNote:
      'Military deaths 87,500 in the Bulgarian War Office returns as printed by the British War Office, made up of 48,917 killed, 13,198 dead of wounds and 24,497 dead of disease, out of some 1.2 million mobilised according to the US War Department. The lower figure, 32,772 dead and missing on 400,000 mobilised, is the reply Sofia made to the International Labour Office, and the two accounts are irreconcilable: 400,000 is less than a third of the men Bulgaria is known to have called up, so this site uses the War Office figure. Wounded 152,390. Civilian deaths are excess mortality of 100,000 in Boris Urlanis, the only separate civilian estimate for Bulgaria in the sources used; the Greek, Armenian and Muslim populations of the ceded districts are not counted on either side of the frontier. Influenza deaths are out, and the pandemic and the Spanish flu reaching Sofia in the autumn of 1918 hit an army and a population already hungry from four years of mobilisation.',
    simple: 'Bulgaria joined the Central Powers in 1915 to gain land, and its army mutinied and came home before the armistice.',
  },
  {
    id: 'Romania',
    name: 'Romania',
    bloc: 'co_belligerent',
    capital: 'Bucharest',
    belligerent: [1916, 1918],
    series: [
      {
        year: 1914,
        population: 7.5,
        armedForces: 0.65,
        note: 'Romania was neutral in 1914 and 1915. The strength shown is the nearest documented figure, the army of 1916, and is not a 1914 return. About a million ethnic Romanians lived inside Austria-Hungary and served in its armies.',
      },
      {
        year: 1915,
        population: 7.5,
        armedForces: 0.65,
        note: 'Still neutral, and the figure is carried from 1916.',
      },
      {
        year: 1916,
        population: 7.5,
        armedForces: 0.65,
        note: 'War declared on 27 August 1916 and the army advanced into Transylvania, over 650,000 men in twenty-three divisions. By December German, Austro-Hungarian, Bulgarian and Turkish troops had taken Bucharest and two thirds of Wallachia; the government took refuge in Iaşi and the population under its administration fell sharply, though no census of the occupied zone exists.',
      },
      {
        year: 1917,
        population: 7.5,
        armedForces: 0.65,
        note: 'Carried from 1916. The Romanian army held the line at Mărăști, Mărășești and Oituz against repeated attacks, the only Entente success of that year on any front.',
      },
      {
        year: 1918,
        population: 7.5,
        armedForces: 0.65,
        note: 'Carried from 1916. Romania signed a separate peace at Bucharest on 7 May 1918 and renounced it on 10 November 1918, the day before the armistice with Germany, so it is a belligerent again in the last week of the war.',
      },
    ],
    peakForces: 0.65,
    militaryDeaths: 0.25,
    civilianDeaths: 0.33,
    deathsNote:
      'Military deaths 250,000 in the reply Bucharest made to the International Labour Office, on 1,000,000 mobilised, against 335,706 in the British and US War Department returns, on 750,000 mobilised. Civilian deaths 330,000 in Vadim Erlikman, built from 120,000 killed by military operations, 10,000 dead in prisons and camps and 200,000 dead of famine and disease; the table in the same source prints 130,000 for civilians killed alone, and that is the lower end of the range. Leon Hersch allows 430,000 indirect deaths, which is the highest figure in the printed sources. Erlikman’s Romanian total of 748,000 includes the Transylvanian and Bukovinian Romanians who served and died in Austro-Hungarian uniform, which is why Romanian losses look larger on one account than on another; on the 1914 borders used here, they are counted against Austria-Hungary. Proportionally this is the second hardest-hit state after Serbia, at something between 8 and 10 per cent of the population of 1914 on the military side alone. Influenza deaths are out.',
    simple: 'Romania joined the war late, in 1916, and lost most of its country to occupation within four months.',
  },
  {
    id: 'Greece',
    name: 'Greece',
    bloc: 'co_belligerent',
    capital: 'Athens',
    belligerent: [1917, 1918],
    series: [
      {
        year: 1914,
        population: 4.8,
        armedForces: 0.05,
        note: 'Greece was neutral until 1917 and its army was demobilised for most of the war. The strength shown is the nearest documented figure, the 5,000 in the British War Office return, which is the Greek contribution to the Salonika front rather than the army’s full strength.',
      },
      {
        year: 1915,
        population: 4.8,
        armedForces: 0.05,
        note: 'Neutral, and the figure is carried from 1914. Bulgaria’s offer of territory decided King Constantine against Entente help for Serbia.',
      },
      {
        year: 1916,
        population: 4.8,
        armedForces: 0.05,
        note: 'Still formally neutral, and the figure is carried forward. The National Schism split the country in two: a provisional government at Salonika under Eleftherios Venizelos in September, and the king’s government at Athens, which the Entente blockaded in June and forced to hand over its fleet and disarm.',
      },
      {
        year: 1917,
        population: 4.8,
        armedForces: 0.05,
        note: 'Constantine was sent into exile in June 1917, Greece declared war on the Central Powers on 27 June and began to raise a mass army; the figure shown is not that army.',
      },
      {
        year: 1918,
        population: 4.8,
        armedForces: 0.05,
        note: 'Carried from 1914 and much too low for the year: by 1918 nine Greek divisions fought on the Salonika front and took part in the breakthrough of 15 September. Greece’s borders in 1914 are used throughout; Eastern Thrace and Smyrna came later, in 1919 to 1920.',
      },
    ],
    peakForces: 0.05,
    militaryDeaths: 0.005,
    civilianDeaths: 0.15,
    deathsNote:
      'Military deaths 5,000 in the British War Office returns, against 26,000 in Boris Urlanis; the range is 5,000 to 26,000 and the gap is a real one, because the British figure counts only the Greek divisions in action against the Bulgarians while Urlanis counts disease and the dead of the years of mobilisation and the Schism. Civilian deaths are excess mortality of 150,000 in Leon Hersch, which is the only separate estimate in the sources used, and it covers a country that took in some 300,000 refugees from Armenia, Russia and the Slavic north while its own men were under arms, and lost the 1917 fire that destroyed most of Salonika. The 1916 to 1918 shortages and the influenza pandemic are excluded from every figure above, and in the Greek case that exclusion makes the civilian total look small.',
    simple: 'Greece argued itself apart over whether to join the war, and only entered fully in 1917.',
  },
  {
    id: 'Portugal',
    name: 'Portugal',
    bloc: 'co_belligerent',
    capital: 'Lisbon',
    belligerent: [1916, 1918],
    series: [
      {
        year: 1914,
        population: 6.0,
        armedForces: 0.02,
        note: 'Portugal was neutral in 1914 and 1915. The strength shown is the nearest documented figure, taken from the expeditionary forces actually sent, and is not a 1914 peacetime return. The population is metropolitan Portugal; the colonial empire, including Angola and Mozambique, is not added.',
      },
      {
        year: 1915,
        population: 6.0,
        armedForces: 0.02,
        note: 'Still officially neutral, and the figure is carried from 1914. Portuguese troops were already fighting German columns in Mozambique and Angola from August 1914.',
      },
      {
        year: 1916,
        population: 6.0,
        armedForces: 0.02,
        note: 'Germany declared war on 9 March 1916, after Portugal had seized the German ships in its ports. About 100,000 men were mobilised over the war; the strength shown is the nearest documented figure and does not attempt to count the whole levy. Of the deaths in this row’s source, 1,689 fell in Europe and 5,533 in Africa.',
      },
      {
        year: 1917,
        population: 6.0,
        armedForces: 0.02,
        note: 'Carried from 1916. The First Portuguese Division of some 7,000 men arrived in France in February 1917 to train under British command; fighting in Angola and Mozambique went on all year.',
      },
      {
        year: 1918,
        population: 6.0,
        armedForces: 0.02,
        note: 'Carried from 1916. At Richebourg and around Ferry near Neuve-Chapelle on 9 April 1918, the day the German offensive opened in Flanders, the Portuguese division was broken and the British were pushed back on its sector; many of its men were taken prisoner. Fighting in Africa continued until the armistice and took far more Portuguese lives than the Western Front did.',
      },
    ],
    peakForces: 0.02,
    militaryDeaths: 0.0072,
    civilianDeaths: 0.0001,
    deathsNote:
      'Military deaths 7,222 in the British War Office returns, of which 1,689 died in Europe and 5,533 in Africa, so most Portuguese military dead were lost to tropical disease on the African plateaus rather than to rifle fire in Flanders; the International Labour Office reply gives 4,000 dead and missing on 100,000 mobilised, and the US War Department total of 7,222 is used here. Civilian deaths are thirteen: the people killed in Funchal in Madeira when German battlecruisers bombarded the port in December 1916 and again in December 1917, the only war dead on Portuguese soil. That figure is deliberately literal. Leon Hersch puts excess deaths in Portugal at 82,000 from privation and a further 138,000 from influenza, none of which is included above; if the pandemic is counted in, Portugal’s war losses are of the same order as its neighbouring neutrals’.',
    simple: 'Portugal fought a long war in Africa and a short one in Flanders, and most of its soldiers died of disease.',
  },
  {
    id: 'United States',
    name: 'United States',
    bloc: 'co_belligerent',
    capital: 'Washington DC',
    belligerent: [1917, 1918],
    series: [
      {
        year: 1914,
        population: 92.0,
        armedForces: 0.18,
        note: 'Neutral until April 1917. The strength shown is the nearest documented figure, the Regular Army and National Guard of the pre-war expansion debate, and it is not an annual return.',
      },
      {
        year: 1915,
        population: 92.0,
        armedForces: 0.18,
        note: 'Neutral, and the figure is carried from 1914. American credit and grain moved to the Entente side long before the flag did, which is what the preparedness campaign of 1915 to 1916 argued about.',
      },
      {
        year: 1916,
        population: 92.0,
        armedForces: 0.18,
        note: 'Neutral, and the figure is carried from 1914. The National Defense Act of 3 June 1916 and the Naval Act of 1916 began the expansion; the Punitive Expedition into Mexico in 1916 to 1917 put the National Guard on a frontier, not a European front.',
      },
      {
        year: 1917,
        population: 92.0,
        armedForces: 1.75,
        note: 'War declared on 6 April 1917. The Selective Service Act of 18 May registered some 24 million men and the first AEF divisions were in France by June. The strength shown is the nearest documented figure to a 1917 return.',
      },
      {
        year: 1918,
        population: 92.0,
        armedForces: 3.7,
        note: 'Selective Service inducted 2,810,290 men between 18 May 1917 and 11 November 1918, and by the armistice the American Expeditionary Forces had landed over two million men in France, fighting at Cantigny, Belleau Wood, Château-Thierry, Saint-Mihiel and in the Meuse-Argonne from 26 September. The timing mattered as much as the totals: Germany had to decide in the spring of 1918 whether to win before American strength arrived.',
      },
    ],
    peakForces: 3.7,
    militaryDeaths: 0.1165,
    civilianDeaths: 0.0008,
    deathsNote:
      'Military deaths 116,516 in the Department of Defense table reproduced in the Congressional Research Service count of American war dead, of which 53,402 were battle deaths and 63,114 died of other causes; an earlier edition of the same report printed 116,708, and the War Department’s own return of 1924 gave 126,000 killed and died of all causes, while the International Labour Office reply gave 67,813 dead and missing, which counts only deaths overseas. The American figure is unusual on this site in that influenza deaths are inside it, because the Department of Defense counts all deaths while in service, and more American soldiers died of disease than of wounds, most of them in the autumn of 1918. That is why the American ratio of battle deaths to total deaths is the opposite of the European ones, and why the American row should not be compared straight against the French or Russian ones. Civilian deaths of about 757 are the 629 merchant seamen killed by enemy submarine attack together with the 128 Americans lost with the Lusitania in May 1915, before the United States was a belligerent; no civilian deaths occurred on United States soil. Total mobilised 4,355,000 in the War Department return of 1924; the Department of Defense table counts 4,734,991 men in service in the three services together, which is the figure the American ratios above are taken on.',
    simple: 'The United States joined in April 1917 and landed over two million men in France, but too late to fight the whole war.',
  },
  {
    id: 'Japan',
    name: 'Japan',
    bloc: 'co_belligerent',
    capital: 'Tokyo',
    belligerent: [1914, 1918],
    series: [
      {
        year: 1914,
        population: 53.6,
        armedForces: 0.3,
        note: 'Honoured the Anglo-Japanese alliance and declared war on Germany on 23 August 1914. The strength shown is a rounded figure taken from the 800,000 credited to Japan in the International Labour Office reply; the siege of Tsingtao itself took about 50,000 Japanese and British troops and ended on 7 November 1914.',
      },
      {
        year: 1915,
        population: 53.6,
        armedForces: 0.3,
        note: 'Carried from 1914. Japan took Germany’s Pacific islands north of the equator and put the Twenty-One Demands to China in January 1915, which is what turned its war aims into a quarrel with Britain and the United States afterwards.',
      },
      {
        year: 1916,
        population: 53.6,
        armedForces: 0.3,
        note: 'Carried from 1914. Japan’s war was fought at sea and in the shipyards: it shipped munitions and food to the Entente and went from a debtor to a creditor power.',
      },
      {
        year: 1917,
        population: 53.6,
        armedForces: 0.3,
        note: 'Carried from 1914. A Japanese destroyer squadron escorted convoy in the Mediterranean from 1917, the only Japanese service in European waters.',
      },
      {
        year: 1918,
        population: 53.6,
        armedForces: 0.3,
        note: 'Carried from 1914. Japan sent some 70,000 men into Siberia in 1918 as part of the intervention in the Russian Civil War, after the armistice in Europe and outside this site’s map.',
      },
    ],
    peakForces: 0.3,
    militaryDeaths: 0.0003,
    civilianDeaths: 0.0,
    deathsNote:
      'Military deaths 300 in the US War Department return, almost all of them in the assault on Tsingtao in November 1914, against 4,661 dead and missing in the reply Japan made to the International Labour Office on 800,000 mobilised. The range is 300 to 4,661 because the two figures count different things: the first is battle deaths in one siege, the second all deaths in service overseas. Civilian deaths are put at nil because no civilian deaths attributable to the war are recorded in the sources used, and the home islands were untouched. The rice riots of 1918, caused by inflation and food export rather than bombardment, and the influenza pandemic that killed a large number of people in Japan in 1918 and 1919, are both excluded from these figures; the Japanese mortality figures for the pandemic are not reliably broken down by year in the sources used here.',
    simple: 'Japan fought a short war far from Europe, taking Germany’s colony at Tsingtao, and came out of it a bigger power.',
  },
];

/**
 * The six categories the site uses. Only central, entente and co_belligerent
 * carry members, because every state in COUNTRY_STATS is filed under the bloc it
 * fought for. The other three exist so that a person, an event or a map label can
 * be placed without inventing a seventh kind of alliance, and each says what it is
 * for.
 */
export const BLOCS: Record<Bloc, { label: string; members: string[]; blurb: string }> = {
  central: {
    label: 'Central Powers',
    members: ['Germany', 'Austria-Hungary', 'Ottoman Empire', 'Bulgaria'],
    blurb:
      'The alliance that took shape between the Dual Alliance of 1879 and the Ottoman-German naval agreement of August 1914, with Bulgaria joining in October 1915. It was never a single command: the General Staff in Berlin set strategy for three of the four partners, the Ottomans ran their own campaigns, and the four never agreed a common war aim. Its collapse in 1918 ran in order — Bulgaria first, then the Ottoman Empire, then Austria-Hungary, with Germany signing last.',
  },
  entente: {
    label: 'Entente and associated powers',
    members: ['United Kingdom', 'France', 'Russia', 'Serbia', 'Belgium', 'Montenegro'],
    blurb:
      'The Franco-Russian alliance of 1894, the Entente Cordiale of 1904 and the Anglo-Russian convention of 1907 made a counter-coalition that had no common war plan until 1914. Belgium and Montenegro are listed here as powers at war from 1914 rather than as members of the Entente: Belgium was invaded because it refused a demand, and Montenegro moved with Serbia. Russia leaves the list at Brest-Litovsk in March 1918; the other five were still at war in November 1918.',
  },
  co_belligerent: {
    label: 'Co-belligerents',
    members: ['Italy', 'Romania', 'Greece', 'Portugal', 'United States', 'Japan'],
    blurb:
      'States that joined later, on terms, mostly for their own reasons: Italy by the secret Treaty of London of April 1915, Romania in August 1916, Portugal in 1916 through a quarrel over shipping and Angola, Greece in June 1917 after a civil split, the United States in April 1917 as an associated power rather than an ally, and Japan in 1914 under the Anglo-Japanese alliance. Each kept its own command, its own fronts and, in most cases, its own post-war aims, which is what made the peace conference so hard to run.',
  },
  occupied: {
    label: 'Under army rule',
    members: [],
    blurb:
      'Territory under an enemy administration: nearly all of Belgium and Serbia, Montenegro from 1916, two thirds of Wallachia from 1916, north-eastern France, and Poland, Lithuania, Latvia and Estonia under German rule from 1915 to 1918. The states concerned are tabulated above under the bloc they fought for, so their armies and governments-in-exile still count; this category exists because requisitioning, forced labour, hostage-taking and famine are a different story from the army’s, and no CountryStat carries the label.',
  },
  neutral: {
    label: 'Neutral',
    members: [],
    blurb:
      'The Netherlands, Denmark, Norway, Sweden, Switzerland, Spain and Luxembourg, all drawn on the map but not at war. Neutrality was a legal position, not immunity: Dutch trade was regulated by the British blockade, Belgian neutrality was guaranteed by treaty and violated anyway, Swedish iron ore went to Germany while Swedish volunteers went north, and the influenza pandemic of 1918 crossed every frontier without asking. No CountryStat carries this label, because this site tabulates the belligerents.',
  },
  opposition: {
    label: 'Opposition to the war',
    members: [],
    blurb:
      'People rather than states: the socialist parties that voted their war credits in August 1914 and then split over them, the conscientious objectors of every belligerent, the Irish, Czech, South Slav and Arab nationalists who counted on the enemy’s defeat as the route to their own independence, the mutineers of 1917 in the French, Russian and German armies and the German fleet, and the delegates at Zimmerwald and Kienthal. This site files such people here so that a Frenchman who refused to attack, or a Russian soldier who shot his officer, is not read as speaking for the army he was in. No CountryStat carries the label.',
  },
};
