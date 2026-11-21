import type { CampaignLine } from './types';

/**
 * Front lines and operations for the map.
 *
 * The border files give one geometry only — Europe as it stood on 1 July 1914 —
 * because no licensed dataset redraws the Romanov, Habsburg and Ottoman empires
 * month by month. So these lines carry the movement: `kind: 'front'` is a line
 * held, its waypoints lying along the front in geographical order and drawing no
 * progress marker; `kind: 'advance'` is an army moving, its waypoints lying along
 * the axis in order, with a ring marking how far it had got by the selected month.
 *
 * `from` and `to` are ISO dates and every window sits inside the timeline the map
 * offers, July 1914 to November 1918. A retreat is not drawn as a line: a stroke
 * reading in one direction cannot tell you which way an army was moving, so the
 * withdrawals (the Russian Great Retreat, Serbia’s winter retreat, the evacuation
 * of Gallipoli) are left to the events, and the advance that caused them is drawn
 * instead.
 *
 * Where a held line was stood on by both armies, the colour is the side whose
 * forward line the waypoints follow, and the summary says so.
 *
 * The border data this map draws covers longitude -25 to 45 and latitude 34 to
 * 71.5, so a line running south of the 34th parallel or east of the 45th
 * meridian is drawn over country with no political colour on it. The Palestine,
 * Syria, Mesopotamian, Arab and Volga lines say that in plain words, and no
 * waypoint is placed beyond 50 degrees east, which is the edge of the view.
 * Campaigns with no ground inside that box at all, Tsingtao, the German colonies
 * in Africa and the road from Alexandropol to Baku, are not drawn as lines.
 *
 * Every coordinate is geocoded by scripts/geocode-place.mjs (Wikipedia’s
 * {{Coord}} first, OpenStreetMap Nominatim second) against the place it is named
 * for, and the place is named in the comment beside it.
 */
export const CAMPAIGN_LINES: CampaignLine[] = [
  /* ------------------------------------------------------------------ *
   * The Western Front, drawn three times so that it visibly moves
   * ------------------------------------------------------------------ */
  {
    id: 'western_front_1914',
    name: 'The Western Front from the Yser to the Swiss frontier',
    side: 'central',
    from: '1914-11-23',
    to: '1917-03-19',
    kind: 'front',
    path: [
      [51.13, 2.75], // Nieuwpoort, the Belgian-held coast behind the Yser
      [50.85, 2.88], // Ypres, in the British salient
      [50.53, 2.8], // La Bassée, where the line reached the old coalfield canal
      [50.37, 2.81], // Vimy, the ridge the Germans held above Arras
      [50.29, 2.78], // Arras, behind the British line
      [49.44, 3.79], // Craonne, on the Chemin des Dames
      [49.19, 4.75], // Massiges, the right of the French Champagne positions
      [49.16, 5.39], // Verdun, the anchor of the French system
      [48.95, 5.87], // Thiaucourt-Regniéville, on the west side of the Woëvre
      [48.5, 6.89], // Badonviller, on the ground taken in August 1914 and held since
      [48.17, 7.11], // Le Bonhomme, in the Vosges above Thann
      [47.5, 7.17], // Pfetterhouse, where the line met the Swiss frontier
    ],
    summary:
      'The Race to the Sea ended on the Belgian coast about 19 October 1914, when the last open ground between Diksmuide and the sea was filled by the Belgians who had retreated from Antwerp; within a month both armies were in trenches from the Yser to Switzerland. The line drawn here is the forward line held from the end of the First Battle of Ypres until the German retirement behind the Hindenburg Line in March 1917, and in those two and a half years it moved only in its local details: the ground won and lost at Verdun and on the Somme in 1916 is drawn as the advances of that year, because this line itself barely moved. It is drawn in Central Powers colours because the waypoints follow the German line; the French and British held the opposite side of the same wire, and this is the same ground as the two later Western Front lines, so that the movement of 1917 and 1918 can be seen against it.',
  },
  {
    id: 'hindenburg_line_1917',
    name: 'The Hindenburg Line, from Arras to the Aisne',
    operation: 'Siegfriedstellung / Alberich',
    side: 'central',
    from: '1917-03-20',
    to: '1918-03-20',
    kind: 'front',
    path: [
      [51.13, 2.75], // Nieuwpoort, the unchanged northern end
      [50.85, 2.88], // Ypres, unchanged
      [50.53, 2.76], // Givenchy-lès-la-Bassée, unchanged
      [50.29, 2.78], // Arras, still frontwards of the new line
      [50.18, 2.98], // Quéant, in the new positions east of Cambrai
      [50.11, 3.09], // Havrincourt, on the line before Cambrai
      [50.12, 3.17], // Marcoing, where the Canal de l’Escaut formed the front
      [50.01, 3.13], // Épehy, on the strong point between the canals
      [49.85, 3.29], // Saint-Quentin, the town the line was built to protect
      [49.66, 3.37], // La Fère, the southern hinge of the new positions
      [49.44, 3.79], // Craonne, still held forward on the Chemin des Dames
      [49.19, 4.75], // Massiges, unchanged
      [49.16, 5.39], // Verdun, back on the pre-1916 line after the autumn battles
      [48.95, 5.87], // Thiaucourt-Regniéville, unchanged
      [47.5, 7.17], // Pfetterhouse, the Swiss frontier
    ],
    summary:
      'The Siegfriedstellung was built through the winter of 1916-17 behind the Noyon salient, and ran from Arras to Laffaux near Soissons; in February and March 1917 the armies retired behind it, destroying the ground in front (the retirement is known as Alberich). The new line was shorter, so it could be held with fewer divisions, and it was attacked at Arras, Bullecourt, the Aisne and Cambrai in 1917 without being broken. The northern end from the sea to Arras and everything south of the Aisne were unchanged from the 1914 line; only the great bulge between Arras and the Aisne was cut away. The first full breach came at the St Quentin Canal on 29 September 1918.',
    strength:
      '133 German divisions on the Western Front on 25 January 1917; 38 divisions on the Aisne front by early April 1917 after the withdrawals',
  },

  /* ------------------------------------------------------------------ *
   * The Eastern Front
   * ------------------------------------------------------------------ */
  {
    id: 'eastern_front_1915_16',
    name: 'The Eastern Front after the Great Retreat',
    side: 'russia',
    from: '1915-09-30',
    to: '1916-06-03',
    kind: 'front',
    path: [
      [56.95, 24.11], // Riga, still Russian, the head of the Gulf of the same name
      [56.5, 25.88], // Jēkabpils, the Jakobstadt of the period sources
      [55.88, 26.54], // Daugavpils, the Dünaburg fortress, held throughout
      [53.13, 26.02], // Baranovichi, where the Russian Stavka sat
      [52.11, 26.1], // Pinsk, on the edge of the marshes
      [50.42, 25.75], // Dubno, in the Volhynian grain country
      [49.57, 25.6], // Ternopil, the Tarnopol of the period sources
    ],
    summary:
      'The Central Powers summer offensive of 1915 pushed the Russian army out of the Polish salient and out of Galicia, and at the end of that year the advance was stopped on the line Riga - Jakobstadt - Dünaburg - Baranovichi - Pinsk - Dubno - Tarnopol. The outline of that line did not change until the Russian collapse of 1917, which is why it is drawn here in Russian colours: the waypoints follow the side that held the towns named. Russia lost its whole western fortress line and more than 4,000 guns in the retreat that produced it, and the withdrawal was well conducted but a severe blow to morale.',
  },
  {
    id: 'eastern_front_1916',
    name: 'The Eastern Front after Brusilov',
    side: 'russia',
    from: '1916-09-20',
    to: '1917-08-31',
    kind: 'front',
    path: [
      [55.88, 26.54], // Daugavpils, unchanged from the 1915 line
      [53.13, 26.02], // Baranovichi, the Stavka, unchanged
      [52.11, 26.1], // Pinsk, unchanged
      [51.67, 24.52], // Ratne, on the Stochir, the furthest Russian success in Volhynia
      [50.08, 25.14], // Brody, taken in the summer of 1916
      [48.29, 25.94], // Chernivtsi, the Czernowitz of the period sources, taken 18 June
      [47.85, 25.92], // Rădăuți, over the Carpathians in Bukovina
    ],
    summary:
      'The offensive launched on 4 June 1916 broke the Austro-Hungarian front in Volhynia and Bukovina, and by the time it stalled in late September the Russians held Lutsk, Brody, Kolomyia and Czernowitz and stood in the eastern Carpathian foothills. North of the marshes the line was the same as in 1915; from Pinsk south it was pushed west, and Bukovina was crossed, so the map shows the front biting into what had been Austro-Hungarian ground. The offensive was the Entente’s greatest victory of the war and the worst crisis of the war for Austria-Hungary, at a Russian cost that contemporary and later accounts put at over a million casualties.',
    strength: 'Austria-Hungary lost over 1 million men in the offensive; four Austro-Hungarian armies were broken and German divisions were moved from the west to hold the front',
  },
  {
    id: 'brest_litovsk_1918',
    name: 'The line of the Treaty of Brest-Litovsk',
    operation: 'Faustschlag',
    side: 'central',
    from: '1918-03-03',
    to: '1918-11-10',
    kind: 'front',
    path: [
      [59.38, 28.2], // Narva, on the Gulf of Finland, secured 28 February
      [57.82, 28.33], // Pskov, taken in the same advance
      [55.88, 26.54], // Daugavpils, captured on the first day of the advance
      [53.13, 26.02], // Baranovichi, the taken Stavka
      [52.11, 26.1], // Pinsk
      [50.45, 30.52], // Kyiv, taken within a fortnight of 18 February
    ],
    summary:
      'This is conquest, not a battle line. The armistice of December 1917 was ended by a three-pronged advance from 18 February which met almost no resistance, because the Russian army was dissolving: Daugavpils fell on the first day, Pskov and Narva by 28 February, and Kyiv inside a fortnight. The treaty signed at Brest-Litovsk on 3 March 1918 gave up Ukraine, Poland, Belarus, Lithuania, Latvia and Estonia - 34 per cent of the old empire’s population and 89 per cent of its coalfields - and Kars and Batum to the Ottoman Empire; there was no front to hold, only an occupied line, and the treaty was annulled by the armistice of 11 November 1918.',
    strength: '53 Central Powers divisions in the February 1918 advance',
  },

  /* ------------------------------------------------------------------ *
   * Italy and the Balkans
   * ------------------------------------------------------------------ */
  {
    id: 'italian_front_1916',
    name: 'The Italian front on the Soča, Adriatic to the Stelvio',
    side: 'entente',
    from: '1916-08-09',
    to: '1917-10-23',
    kind: 'front',
    path: [
      [45.8, 13.53], // Monfalcone, the only point where the line touched the sea
      [45.93, 13.62], // Gorizia, taken in the Sixth Battle of the Isonzo
      [46.14, 13.79], // Tolmin, where the front left the river for the mountains
      [46.16, 10.5], // Monte Adamello, the high ground of the western sector
      [46.26, 10.58], // Passo del Tonale, on the 1915 frontier
      [46.53, 10.45], // Passo dello Stelvio, where the front met Switzerland
    ],
    summary:
      'Italy fought the war on a front that ran from the sea at Monfalcone up the Soča - the Isonzo of the Italian accounts - and then west across the Adamello and the Stelvio to the Swiss frontier. Gorizia was carried in the Sixth Battle of the Isonzo in August 1916, and after that the line barely moved for over a year, in fighting that cost both armies heavily for ground measured in hundreds of metres. The front is drawn as the Italians held it from the fall of Gorizia until the morning of the Twelfth Battle of the Isonzo, better known as Caporetto, on 24 October 1917.',
  },
  {
    id: 'piave_1917',
    name: 'The Piave line, after Caporetto',
    side: 'entente',
    from: '1917-11-10',
    to: '1918-10-23',
    kind: 'front',
    path: [
      [45.53, 12.65], // Jesolo, the coast behind the river mouth
      [45.63, 12.6], // San Donà di Piave, won back on the last day of October 1918
      [45.82, 12.2], // Nervesa della Battaglia, on the river below the Grappa
      [45.87, 11.8], // Monte Grappa, the mass the line turned on
      [45.91, 11.5], // Asiago, the plateau held above the Brenta valley
      [46.16, 10.5], // Monte Adamello, the unchanged western sector
      [46.26, 10.58], // Passo del Tonale
      [46.53, 10.45], // Passo dello Stelvio
    ],
    summary:
      'After the break at Caporetto the Italian army fell back about 150 kilometres to the Piave and stood there, its effective strength down from 1,800,000 to 1,000,000 men and the Boselli government gone. The line held from the middle of November 1917, through the Austro-Hungarian attack of 15-23 June 1918 - the battle of the Solstice, after which Ludendorff is said to have had the sensation of defeat for the first time - until the offensive opened at Vittorio Veneto on 24 October 1918. The western end, from the Asiago plateau to the Stelvio, was the same ground as the 1916 line.',
  },
  {
    id: 'salonika_front_1916',
    name: 'The Macedonian front, the Struma to Korçë',
    side: 'entente',
    from: '1916-11-21',
    to: '1918-09-13',
    kind: 'front',
    path: [
      [41.21, 22.75], // Lake Doiran, the Bulgarian positions above the Aegean end
      [41.53, 22.12], // Krivolak, on the Vardar, held since the autumn of 1915
      [41.04, 21.88], // Dobro Pole, the Bulgarian outpost above the Monastir plain
      [40.89, 21.04], // Lake Prespa, where the front turned west into Albania
      [40.62, 20.77], // Korçë, the French sector’s anchor town
    ],
    summary:
      'The expedition sent to help Serbia in 1915 arrived too late to save it and dug in round Salonika, and by the autumn of 1916 a stable front ran from the Albanian Adriatic coast to the Struma river, held by a multinational Allied army against the Bulgarians. The line drawn here follows the ground held from the capture of Monastir (Bitola) in November 1916 until the offensive of 14 September 1918, which broke through at Dobro Pole and near Lake Doiran and led to the Bulgarian request for an armistice. It was the most unhealthy front of the war for the armies that sat on it, and its existence tied up troops neither side could spare.',
  },

  /* ------------------------------------------------------------------ *
   * Held lines, continued
   * ------------------------------------------------------------------ */
  {
    id: 'western_front_1918',
    name: 'The line the armies held on 11 November 1918',
    side: 'entente',
    from: '1918-11-06',
    to: '1918-11-11',
    kind: 'front',
    path: [
      [51.13, 2.75], // Nieuwpoort, the northern end on the Belgian coast
      [50.85, 2.88], // Ypres, retaken in the autumn offensive
      [50.79, 3.17], // Menen, east of Ypres, on the old 1914 line
      [50.63, 3.06], // Lille, recovered in October
      [50.13, 3.69], // Landrecies, on the Sambre
      [50.11, 3.54], // Le Cateau-Cambrésis, on the ground cleared in November
      [50.27, 4.92], // Dinant, on the Meuse
      [49.77, 4.72], // Charleville-Mézières, on the Meuse below the Ardenne
      [49.7, 4.94], // Sedan, the Meuse crossing
      [49.49, 5.19], // Stenay, on the Meuse below Sedan
      [49.45, 5.6], // Longuyon, where the front reached the frontier of 1871
      [47.81, 7.1], // Thann, in the Vosges above the Rhine plain
      [47.5, 7.17], // Pfetterhouse, the Swiss frontier, unchanged since 1914
    ],
    summary:
      'The Hundred Days Offensive ran from 8 August to 11 November 1918 and ended the war with the armies of the Entente standing on the ground drawn here. Once the Hindenburg Line was broken all along its front, beginning at the St Quentin Canal on 29 September, the pursuit carried the armies across the Sambre and the Meuse, while in the south the front came back onto the frontier of 1871 and onto the crest of the Vosges. This is not the frontier of 1914 and not the frontier the peace treaties drew; it is only where the two armies faced each other when the armistice came into force on the morning of 11 November 1918.',
  },
  {
    id: 'eastern_front_winter_1914',
    name: 'The Eastern Front in the winter of 1914-15',
    side: 'russia',
    from: '1914-12-01',
    to: '1915-04-30',
    kind: 'front',
    path: [
      [55.71, 21.14], // Memel (Klaipėda), the Baltic end, a German port throughout
      [54.63, 21.81], // Insterburg (Chernyakhovsk), behind the German screen in East Prussia
      [53.18, 22.07], // Łomża, on the Narew, the Russian line in the north
      [52.71, 21.08], // Pułtusk, on the lower Narew
      [52.23, 21.01], // Warsaw, the head of the great Russian salient
      [52.23, 20.24], // Sochaczew, at the bend of the Vistula
      [52.08, 20.16], // Bolimów, on the Rawka, where the front dug in
      [50.87, 20.63], // Kielce, in the southern part of the salient
      [50.36, 20.03], // Miechów, on the ground before Kraków, which was Austro-Hungarian
      [49.71, 20.42], // Limanowa, taken by the Austro-Hungarians in December 1914
      [49.62, 20.69], // Nowy Sącz, close behind the 1914 frontier, where the line went into the Carpathians
    ],
    summary:
      'By the winter of 1914-15 both Russian invasions had been broken: East Prussia was cleared of the Russian armies, whose advance into the Carpathians had also stalled. The front ran from the Baltic at Memel, which stayed German, south through the lake country of East Prussia, along the Narew and the Vistula above Warsaw, along the Rawka and the Bzura where the trenches had settled by December, and then into the Western Carpathians, with Kraków in Austro-Hungarian hands and Przemyśl under siege. It is drawn in Russian colours because the waypoints follow the Russian forward line, though Memel, Insterburg, Limanowa and Nowy Sącz lay on the far side of it; the line stood until the Gorlice-Tarnów breakthrough, which began in early May 1915.',
  },
  {
    id: 'serbian_front_1914',
    name: 'The Serbian frontier on the Sava and the Drina',
    side: 'entente',
    from: '1914-08-12',
    to: '1915-10-06',
    kind: 'front',
    path: [
      [44.97, 19.61], // Sremska Mitrovica, on the Sava frontier in Syrmia
      [44.75, 19.7], // Šabac, the crossing point on the Sava below the Cer ridge
      [44.53, 19.22], // Loznica, on the Drina, used for the Cer ridge, which has no coordinate of its own
      [43.86, 19.84], // Užice, in the Morava valley road, the southern hinge of the frontier
    ],
    strength:
      'The fighting on the Cer, 15-24 August 1914, cost Austria-Hungary 6,000-10,000 killed, 30,000 wounded and 4,500 prisoners; Serbian losses were much smaller',
    summary:
      'Serbia’s frontier with Austria-Hungary ran along the Sava and the Drina, and the war in the Balkans was fought on that water line. The first Austro-Hungarian invasion began on 12 August, and the fighting on the Cer ridge above the Drina, which opened on the night of 15 August, threw it back with heavy loss; the third invasion of 1914 took Valjevo, and the Serbian counterattack recaptured Valjevo and Užice on 8 December, clearing the invaders out in the second half of that month. The frontier stayed where it is drawn until the three-way invasion of October 1915, when a Bulgarian army came in from the east and the Serbian army began its retreat across Albania to the sea; that retreat is not drawn here, only the frontier it gave up.',
  },
  {
    id: 'caucasus_1916',
    name: 'The Caucasus front after Erzurum fell',
    side: 'russia',
    from: '1916-03-01',
    to: '1916-09-30',
    kind: 'front',
    path: [
      [40.65, 38.52], // Giresun, on the Black Sea coast, the northern end of the ground reached
      [41.01, 39.72], // Trebizond (Trabzon), the port the campaign took
      [39.91, 41.28], // Erzurum, the main Ottoman fortress in the theatre
      [39.36, 41.7], // Hınıs, taken on 7 February 1916 on the road to Erzurum
      [38.97, 41.96], // Mush (Muş), south of the Erzurum plain
      [38.5, 42.17], // Bitlis, the southern end of the ground the Russians reached
    ],
    summary:
      'The Russian offensive was launched in the dead of winter over ground where moving artillery was the whole difficulty: Hasan Kale fell on 18-19 January 1916, Hınıs on 7 February, and Erzurum, the fortress that covered the road into eastern Anatolia, fell on 16 February. The campaign then reached as far as Trebizond on the coast and Mush, Bitlis and Van to the south, and for the rest of the year the front lay on the western approaches to Erzurum while the Ottoman army held the line running south through Mush and Bitlis. On this map the July 1914 frontier runs far to the west of every one of these places, so the line has to carry all of the movement itself.',
  },
  {
    id: 'caucasus_1918',
    name: 'The frontier imposed by the Treaty of Batum',
    operation: 'Brest-Litovsk and Batum',
    side: 'central',
    from: '1918-06-04',
    to: '1918-10-30',
    kind: 'front',
    path: [
      [41.65, 41.64], // Batumi, the port the treaty left in Ottoman hands, on the Black Sea
      [41.04, 42.75], // Ardahan, on the ground ceded in the same settlement
      [40.61, 43.1], // Kars, the fortress, given up by Russia at Brest-Litovsk
      [40.79, 43.84], // Alexandropol (Gyumri), the last place on this line inside the border data
    ],
    summary:
      'This is a frontier imposed by conquest, not a line anyone was holding by fighting. Russia gave up Kars and Batum at Brest-Litovsk in March 1918, and when the Transcaucasian states made their own peace at Batum on 4 June 1918, Ardahan and Alexandropol went with them; the Ottoman army held all of it, which is why the line is drawn in Central Powers colours. It stops at Alexandropol because the border data this map draws ends at 45 degrees east: the war in the same months ran on beyond that, north towards Tiflis and east to Baku, where a small British force, Dunsterforce, held out until the place was abandoned in mid-September 1918.',
  },

  /* ------------------------------------------------------------------ *
   * 1914: the movement that made the fronts
   * ------------------------------------------------------------------ */
  {
    id: 'german_advance_1914',
    name: 'The German advance through Belgium to the Marne',
    side: 'central',
    from: '1914-08-04',
    to: '1914-09-12',
    kind: 'advance',
    path: [
      [50.78, 6.08], // Aachen, the railhead the armies entrained for
      [50.65, 5.57], // Liège, the fortified barrier on the Meuse, forced 4-16 August
      [50.47, 4.87], // Namur, the next fortress on the Meuse
      [50.41, 4.44], // Charleroi, where the French 5th Army was met on the Sambre
      [50.45, 3.95], // Mons, where the British army held the canal on 23 August
      [50.11, 3.54], // Le Cateau-Cambrésis, the British stand on the retreat
      [50.28, 3.97], // Maubeuge, the fortress bypassed and invested
      [49.9, 3.63], // Guise, on the Oise
      [49.04, 3.4], // Château-Thierry, on the Marne
      [49.07, 3.64], // Dormans, on the Marne below Château-Thierry
      [49.26, 4.03], // Reims, the eastern end of the advance, on the Champagne line
    ],
    strength:
      'The plan was to defeat France in forty days; the retreating armies were followed for more than 250 km before they turned to fight',
    summary:
      'The march west went through Belgium because the plan required it, and it took the fortified line on the Meuse as it went, Liège first and then Namur, before turning south-west past the fortress of Maubeuge, which was left invested rather than stormed. The retreat that followed the battles on the Sambre and at Mons ended on the Marne, where the battle of 5-12 September 1914 broke the German attempt to defeat France quickly; the German armies then withdrew about 65 km and dug in on the heights of the Aisne. Reims stands here as the eastern limit of the march: from 9 September the armies were either moving backwards or trying to turn one another’s northern flank, which is the next line on this map.',
  },
  {
    id: 'race_to_the_sea',
    name: 'The Race to the Sea, the Somme to the Yser',
    side: 'central',
    from: '1914-09-17',
    to: '1914-10-31',
    kind: 'advance',
    path: [
      [49.93, 2.93], // Péronne, on the Somme, where the movement began
      [50.18, 3.24], // Cambrai, passed on the way north
      [50.63, 3.06], // Lille, occupied as the sweep went by
      [50.53, 2.8], // La Bassée, the canal the British held before Ypres
      [50.69, 2.88], // Armentières, on the Lys
      [50.74, 2.73], // Bailleul, on the road into Flanders
      [50.76, 2.9], // Messines, on the ridge south of Ypres
      [50.85, 2.88], // Ypres, the salient both armies wanted
      [51.03, 2.86], // Dixmude, on the Yser, held by the Belgian marines
      [51.13, 2.75], // Nieuwpoort, the sluices and the sea, the end of the line
    ],
    summary:
      'After the Marne each side tried to reach the sea first, so the fighting moved north by forced marches from the Somme across Picardy into Flanders, and this line follows the axis of that movement from Péronne to the coast. The sweep took Lille and reached Ypres and the Yser, and the last open ground between Dixmude and the sea was filled by the Belgian army, which came back from Antwerp and held the Yser line from about 18 October, when the sluices at Nieuwpoort let the sea in over the low country in front of the advancing Germans. The race ended with no flank left to turn, and within a month the trenches that this line foreshadows ran unbroken from the sea to Switzerland.',
  },
  {
    id: 'east_prussia_1914',
    name: 'The Russian advance into East Prussia',
    operation: 'Tannenberg',
    side: 'russia',
    from: '1914-08-17',
    to: '1914-08-29',
    kind: 'advance',
    path: [
      [53.11, 20.38], // Mława, on the frontier, the crossing point of the southern army
      [53.23, 20.18], // Soldau (Działdowo), taken in the first days of the advance
      [53.36, 20.43], // Neidenburg (Nidzica), on the road north to Allenstein
      [53.49, 20.09], // Hohenstein, on the ground of the battle around the Tannenberg monument
      [53.78, 20.48], // Allenstein (Olsztyn), the objective of the northward swing
    ],
    strength:
      'Two Russian armies invaded; the southern one was surrounded and destroyed and the northern one was driven out of the province',
    summary:
      'The Russian plan sent two armies over the East Prussian frontier in the second half of August 1914, one from the east and one from the south, and this line follows the southern army as it came north through Mława and Neidenburg towards Allenstein, with its left flank towards Hohenstein. The invasion was completely defeated: the two armies were too far apart to help one another, the German army turned on the southern one and destroyed it around Allenstein and Hohenstein, and the first army was forced back over the frontier. It is drawn as an advance because that is how it began; what it ended in was the loss of a Russian army and the frontier line drawn in the winter front of 1914-15.',
  },
  {
    id: 'galicia_1914',
    name: 'The Russian advance into Galicia to Lemberg',
    side: 'russia',
    from: '1914-08-18',
    to: '1914-09-30',
    kind: 'advance',
    path: [
      [50.92, 22.22], // Kraśnik, on the 1914 Russian frontier, where the fighting opened
      [49.84, 24.03], // Lemberg (Lviv), the capital of Galicia, taken in early September
      [49.78, 22.79], // Przemyśl, the Austro-Hungarian fortress on the San, left behind the advance
    ],
    summary:
      'Two Russian armies pushed into Galicia from the frontier in the middle of August 1914, and the Austro-Hungarian armies were beaten in a series of engagements and driven out of the country, leaving Lemberg, its capital, to be occupied in early September. The fortress of Przemyśl, on the San below the Russian line of advance, was cut off and besieged. The Russians held eastern Galicia for about nine months, until the Gorlice-Tarnów breakthrough of May 1915 reversed everything along the axis drawn as the 1915 line on this map.',
  },
  {
    id: 'serbia_1914',
    name: 'The Austro-Hungarian invasions of Serbia',
    side: 'central',
    from: '1914-08-12',
    to: '1914-12-15',
    kind: 'advance',
    path: [
      [44.84, 20.41], // Zemun, on the right bank of the Danube opposite Belgrade
      [44.82, 20.46], // Belgrade, taken at the cost of shelling the town from the river
      [44.36, 20.14], // Kolubara, the river line the third invasion reached
      [44.27, 19.89], // Valjevo, in the Jadar valley, taken in November and lost on 8 December
      [43.86, 19.84], // Užice, the furthest ground reached, retaken by the Serbs on 8 December
    ],
    summary:
      'Serbia was invaded three times in 1914 across the Sava and the Drina, the first attack crossing the Drina on 12 August and being thrown back from the Cer ridge, where the fighting opened on the night of 15 August, with heavy loss. The third invasion came over the Danube and the Sava onto Belgrade and then south-west along the Kolubara into the Jadar valley as far as Valjevo and Užice; the Serbian army, retreating in front of it short of ammunition and worn out, counterattacked all along the front early in December and retook Valjevo and Užice on 8 December. The invaders were out of Serbia again by the middle of that month, which is why the advance drawn here stops on the ground it had reached and not on the frontier it had to give back.',
  },

  /* ------------------------------------------------------------------ *
   * 1915-16: the breakthroughs and the failures
   * ------------------------------------------------------------------ */
  {
    id: 'gorlice_tarnow_1915',
    name: 'The Gorlice-Tarnów breakthrough and the Great Retreat',
    side: 'central',
    from: '1915-05-02',
    to: '1915-09-30',
    kind: 'advance',
    path: [
      [49.67, 21.16], // Gorlice, the point of attack in the Carpathian foothills
      [49.78, 22.79], // Przemyśl, the San fortress, recovered in its turn
      [49.84, 24.03], // Lemberg (Lviv), re-entered on 22 June
      [51.25, 22.57], // Lublin, abandoned by the retreating Russians
      [52.23, 21.01], // Warsaw, evacuated without a battle for the city
    ],
    summary:
      'The attack begun on 2 May 1915 at Gorlice and Tarnów had been planned as a minor blow to relieve the pressure on the Austro-Hungarian army, and it became the Central Powers chief offensive of the year: the Russian front collapsed and the armies retreated far into Russia in what period accounts call the Great Retreat of 1915. The pursuit took the fortresses on the San in turn and re-entered Lemberg on 22 June, and by August the whole Polish salient had been given up, Warsaw evacuated without a pitched battle for the city. The line stops at Warsaw because the retreat ended on the front drawn in the 1915 Eastern Front entry, which did not change again until the Russian collapse of 1917.',
  },
  {
    id: 'gallipoli_1915',
    name: 'Gallipoli, the ground the landings reached',
    side: 'entente',
    from: '1915-04-25',
    to: '1916-01-08',
    kind: 'advance',
    path: [
      [40.04, 26.18], // Cape Helles, the foot of the peninsula, where the British landed
      [40.09, 26.23], // Krithia, the objective on the first day, never taken
      [40.21, 26.27], // Gaba Tepe, above the ANZAC beaches
      [40.24, 26.28], // Anzac Cove, the inlet the Australian and New Zealand troops came up
      [40.25, 26.31], // Chunuk Bair, the crest held for two days in August
      [40.26, 26.31], // Sari Bair, the highest ground on the peninsula
      [40.30, 26.23], // Suvla, the fresh landing of August 1915, the furthest north held
    ],
    summary:
      'The landings were made at five beaches on the morning of 25 April 1915, two at Cape Helles at the foot of the peninsula and three round Gaba Tepe and Anzac Cove further up the west coast. Neither lodgement got beyond the first ridge: Krithia, the objective of the first day, was never taken, and the August offensive, which put troops on Chunuk Bair and the Sari Bair crest and landed a fresh army at Suvla, failed to break out as well. The peninsula was given up in the reverse order of the landing, the last troops from Anzac Cove going before dawn on 20 December 1915 and those from Helles in the night of 7-8 January 1916, with the guns left loaded and time fuzes set so that the positions appeared to still be held.',
  },
  {
    id: 'serbia_1915',
    name: 'The conquest of Serbia, 1915',
    side: 'central',
    from: '1915-10-06',
    to: '1915-12-05',
    kind: 'advance',
    path: [
      [44.82, 20.46], // Belgrade, crossed from the river on the first day of the attack
      [44.01, 20.92], // Kragujevac, in the Great Morava valley
      [43.32, 21.90], // Niš, where the German and Bulgarian armies linked up
      [42.88, 20.87], // Kosovska Mitrovica, on the edge of the Kosovo field
    ],
    summary:
      'The attack on Serbia began on 6 October 1915, when the German Eleventh Army and the Danube and Sava flotillas crossed the rivers below Belgrade in the largest offensive of the war against that country, and two Bulgarian armies followed on 15 October, so that the Serbian army, worn down by sickness after two years of fighting, was attacked from three sides at once. The Bulgarian advance took Vranje, Kumanovo, Štip and Skopje and shut the road to the Allied expedition coming up from Salonika, while Mackensen pushed south down the Morava valley until the two forces met in the Kosovo field. What followed was the retreat of the Serbian army westward across Montenegro and Albania to the sea; that is not drawn here, only the axis of the advance which forced it.',
  },
  {
    id: 'salonika_lodgement_1915',
    name: 'The Salonika lodgement and the advance to the Vardar',
    side: 'entente',
    from: '1915-10-05',
    to: '1915-12-15',
    kind: 'advance',
    path: [
      [40.64, 22.94], // Salonika (Thessaloniki), the port the expedition landed at
      [40.99, 22.87], // Kilkis, on the road and rail north out of the port
      [41.14, 22.5], // Gevgelija, at the foot of the Kalamajcha passes
      [41.53, 22.12], // Krivolak, on the Vardar, the furthest ground reached
    ],
    summary:
      'The first troops of the Allied expedition landed at Salonika on 5 October 1915, too late to be of any use to Serbia, and marched north as the Army of the Orient under the French commander Sarrail. The advance reached the Vardar at Krivolak in the fighting of October and November 1915 and had to fall back by the end of November, because the Serbian army was no longer in the field and the Bulgarians held the high ground on both flanks. Salonika itself was never taken: the lodgement hardened into the Macedonian front drawn in the entry below, and sat there for two more years.',
  },
  {
    id: 'transylvania_1916',
    name: 'The Romanian advance into Transylvania',
    side: 'entente',
    from: '1916-08-27',
    to: '1916-10-20',
    kind: 'advance',
    path: [
      [45.84, 24.97], // Făgăraș, in the Olt valley below the pass
      [45.67, 25.62], // Brașov (Kronstadt), the busiest of the three passes
      [46.36, 25.8], // Miercurea Ciuc, the eastern arm, in the Ciuc basin
    ],
    summary:
      'Romania joined the Entente on 27 August 1916 and at once crossed the Carpathians into Transylvania, where much of the population was Romanian. The armies took Brașov, Făgăraș and Miercurea Ciuc and reached the outskirts of Sibiu, which was not taken, and for a few weeks the campaign looked as though it would be decided in the mountains. On 17 October the Romanian Second Army attacked at Brașov, the attack was repulsed, and the counterattack which followed drove the armies back over the passes and turned the war into a fight for Wallachia instead.',
  },
  {
    id: 'wallachia_1916',
    name: 'The conquest of Wallachia and the fall of Bucharest',
    side: 'central',
    from: '1916-09-06',
    to: '1916-12-15',
    kind: 'advance',
    path: [
      [44.05, 26.62], // Turtucaia, the Romanian fortress on the Danube, stormed in September
      [44.33, 23.82], // Craiova, taken as the army crossed from Bulgaria into Oltenia
      [44.43, 26.1], // Bucharest, entered on 6 December
      [44.94, 26.02], // Ploiești, the oil country, the last ground reached
    ],
    strength:
      'Two thirds of Romania was occupied, together with the oil fields at Ploiești, by the middle of December 1916',
    summary:
      'The campaign turned on the Central Powers counterattack. In the east a German-Bulgarian detachment surrounded the fortress of Turtucaia on the Danube, which surrendered on 6 September after its garrison was destroyed, and the fighting in the Dobrudja went on until 23 September; in the west the armies pushed the Romanians back over the Carpathian passes onto the Wallachian plain. Bucharest was captured on 6 December by Falkenhayn cavalry, two thirds of the country and the oil at Ploiești were in Central Powers hands, and the government withdrew to Iași, from where the remnant of the Romanian army held on until the armistice of December 1917.',
  },

  /* ------------------------------------------------------------------ *
   * 1916: the year of the set battles
   * ------------------------------------------------------------------ */
  {
    id: 'brusilov_1916',
    name: 'The Brusilov offensive',
    operation: 'Brusilov',
    side: 'russia',
    from: '1916-06-04',
    to: '1916-09-30',
    kind: 'advance',
    path: [
      [50.75, 25.32], // Lutsk, taken on the first day of the attack
      [50.08, 25.14], // Brody, in the gap the offensive opened
      [48.53, 25.04], // Kolomyia, below the Carpathian foothills
      [48.29, 25.94], // Czernowitz (Chernivtsi), the Bukovinian capital
      [47.85, 25.92], // Rădăuți, over the Carpathians, the furthest south reached
    ],
    summary:
      'The offensive was launched on 4 June 1916 against the Austro-Hungarian front in eastern Galicia and Bukovina, and it lasted until late September. It broke four Austro-Hungarian armies: the Russians took Lutsk, Brody, Kolomyia and Czernowitz and came out in the eastern Carpathian foothills, which is the furthest ground this line shows. This was the greatest victory any Entente army won in the war and the worst crisis Austria-Hungary went through, but the northern armies were stopped short of Kovel, and the Russian losses were so heavy that the army never recovered; the ground taken is drawn on the 1916 Eastern Front line.',
  },
  {
    id: 'verdun_1916',
    name: 'Verdun, the ground the German attack reached',
    side: 'central',
    from: '1916-02-21',
    to: '1916-06-23',
    kind: 'advance',
    path: [
      [49.25, 5.34], // Samogneux, on the Meuse, in the zone attacked on the first morning
      [49.22, 5.44], // Fort de Douaumont, the first of the great forts lost
      [49.20, 5.47], // Fort de Vaux, on the south-east of the salient
      [49.2, 5.43], // Fleury-devant-Douaumont, a village wiped out and never rebuilt
      [49.19, 5.44], // Fort de Souville, the last geographical objective, reached and failed
    ],
    strength:
      'The bombardment which opened the battle on 21 February 1916 lasted ten hours and was fired by 808 guns',
    summary:
      'The battle began on 21 February 1916 with a ten-hour bombardment by 808 guns and went on until 18 December, which makes it the longest battle of the war. The objective was the heights on the right bank of the Meuse above Verdun and the forts standing on them: Douaumont was lost early, Vaux in June, and the advance was stopped at Fort de Souville, while Fleury-devant-Douaumont changed hands sixteen times between 23 June and 17 August. The line is drawn in Central Powers colours because it follows the furthest ground the attack reached; the French recaptured Douaumont and Vaux in the counterattacks of the autumn, and the front came back to something close to where it had been.',
  },
  {
    id: 'somme_1916',
    name: 'The Somme, the ground the offensive reached',
    side: 'entente',
    from: '1916-07-01',
    to: '1916-11-18',
    kind: 'advance',
    path: [
      [50.0, 2.65], // Albert, the town behind the British start line
      [50.03, 2.77], // Bazentin le Petit, in the success of 14 July
      [50.05, 2.69], // Thiepval, on the north bank of the Ancre, taken in September
      [50.08, 2.71], // Grandcourt, the furthest ground reached before winter
    ],
    strength:
      'The British Army suffered 57,470 casualties on 1 July 1916, of whom 19,240 were killed',
    summary:
      'The battle was fought between 1 July and 18 November 1916 on both sides of the upper Somme, and the first day cost the British Army 57,470 casualties, of whom 19,240 were killed, most of them on the front between the Albert-Bapaume road and Gommecourt. The offensive took Bazentin in the success of 14 July and Thiepval in September, and by 18 November it had run out at Grandcourt on the north bank of the Ancre. Its object was to break through and get into the open, and it did not: Péronne and Bapaume, the two places the advance was making for, stayed in German hands until the deliberate withdrawal to the Hindenburg Line in March 1917.',
  },
  {
    id: 'tigris_kut_1916',
    name: 'Mesopotamia, Basra to Kut and Ctesiphon',
    side: 'entente',
    from: '1915-11-01',
    to: '1916-04-29',
    kind: 'advance',
    path: [
      [30.52, 47.81], // Basra, the base of the campaign, taken at the start of the war
      [30.98, 47.42], // Qurna, where the Tigris and the Euphrates meet
      [31.85, 47.15], // Amarah, on the middle Tigris, the supply point for the advance
      [32.5, 45.83], // Kut, the river bend where the army was shut up
      [33.09, 44.58], // Ctesiphon, the furthest point reached, fought for in November 1915
    ],
    strength:
      'The first relief expedition was about 19,000 men; all the attempts failed at a cost of around 30,000 Allied casualties',
    summary:
      'This campaign was fought up a river, because the Tigris was the road, the supply line and the hospital ward at once, and the place names on the map matter more than the battles. The advance went north from Basra through Qurna and Amarah to Kut and fought at Ctesiphon in November 1915; the attack there failed, the army fell back on Kut, and the garrison surrendered on 29 April 1916 after a siege. Every attempt to relieve Kut failed, the last of them at Sannaiyat on 22 April 1916, a week before the surrender. The whole of this campaign lies south of the 34th parallel, and all of it except Ctesiphon lies east of the 45th meridian, and this map has no border data on either count, so the line is drawn against the coastline and the rivers only.',
  },
  {
    id: 'arab_revolt_1916_18',
    name: 'The Arab Revolt, the Red Sea to Damascus',
    side: 'entente',
    from: '1916-06-10',
    to: '1918-10-30',
    kind: 'advance',
    path: [
      [29.53, 35.01], // Aqaba, the last Ottoman port on the Red Sea, taken in July 1917
      [30.34, 35.44], // Wadi Musa, in the hills above the Hejaz Railway
      [31.95, 35.93], // Amman, on the railway, taken on 25 September 1918
      [32.62, 36.11], // Daraa, the rail junction where the line from Damascus forks
      [33.51, 36.31], // Damascus, reached in the pursuit which ended the campaign
    ],
    summary:
      'The Revolt was declared at Mecca on 10 June 1916 and its fighting strength came from tribes of the Hejaz and Transjordan, working along the Hejaz Railway which ran from Damascus through Amman and Ma’an to Medina. This line begins at Aqaba, taken in July 1917, because Mecca, Jeddah, Medina, Yanbu and Al Wajh all lie below the southern edge of this map: the country south of the 34th parallel has no border data here, so the campaign is drawn against the coast and the desert only. The Ottomans held Ma’an and Medina throughout; Amman was carried on 25 September 1918 by Australian and New Zealand mounted troops, and Damascus was taken in the pursuit which followed the battle of Megiddo, before the Armistice of Mudros on 30 October 1918.',
  },

  /* ------------------------------------------------------------------ *
   * 1917: the year the fronts broke open, except on the Western Front
   * ------------------------------------------------------------------ */
  {
    id: 'caporetto_1917',
    name: 'Caporetto and the retreat to the Piave',
    operation: 'Karfreit / Twelfth Battle of the Isonzo',
    side: 'central',
    from: '1917-10-24',
    to: '1917-11-10',
    kind: 'advance',
    path: [
      [46.25, 13.58], // Caporetto (Kobarid), where the attack was made on the morning of 24 October
      [46.07, 13.44], // Cividale del Friuli, cleared on the first day
      [46.07, 13.23], // Udine, the Italian army headquarters, abandoned
      [45.95, 13], // Codroipo, over the Tagliamento, the line the pursuit was made for
      [45.82, 12.2], // Nervesa, on the Piave, where the retreat stopped
    ],
    strength:
      'The retreat gave up about 150 kilometres of Italian territory, and the army’s effective strength fell from 1,800,000 to 1,000,000 men',
    summary:
      'The Twelfth Battle of the Isonzo, better known as Caporetto, opened on the morning of 24 October 1917 with a short, heavy bombardment and an infiltration attack down the valley at Caporetto, and the Italian front fell apart. Udine, taken without a fight, had been the army’s headquarters, and the retreat ran back over the Tagliamento to the Piave, about 150 kilometres of Italian ground given up, the effective strength of the army falling from 1,800,000 to 1,000,000 men. The line stops on the Piave because that is where the army stood, with British and French divisions moved from the west; the new front is drawn in the entry above, and the Boselli government fell with the news.',
  },
  {
    id: 'third_ypres_1917',
    name: 'Third Ypres, Pilckem to Passchendaele',
    operation: 'Third Ypres / Passchendaele',
    side: 'entente',
    from: '1917-07-31',
    to: '1917-11-10',
    kind: 'advance',
    path: [
      [50.91, 2.92], // Langemark, on the ground taken after the attack on the Pilckem Ridge
      [50.87, 2.98], // Zonnebeke, in the summer successes of September
      [50.9, 3.02], // Passendale, on the last ridge, five miles from Roulers, the furthest ground held
    ],
    summary:
      'The battle of Third Ypres was fought from July to November 1917, beginning on 31 July on the Pilckem Ridge, and its object was the Belgian coast and the submarine bases, which meant pushing east from Ypres over the ridges to Roulers. The advance took Langemark, Zonnebeke and at the end Passendale, on the last ridge five miles short of Roulers, and no further; the ground is remembered for the rain and the mud of the autumn, which turned the battlefield into a wreck in which attacks had to be made on handfuls of men. The offensive ended on 10 November 1917, and the ground it took was lost again in the German spring of 1918 before being retaken in the autumn.',
  },
  {
    id: 'riga_albion_1917',
    name: 'Operation Albion, the Baltic islands',
    operation: 'Albion',
    side: 'central',
    from: '1917-10-12',
    to: '1917-10-30',
    kind: 'advance',
    path: [
      [58.25, 22.48], // Kuressaare, on Saaremaa (Ösel), where the landings were made
      [58.6, 23.22], // Muhu (Moon), joined to the mainland by a causeway
      [58.91, 23.44], // Rohuküla, on the mainland, won from Muhu
      [58.88, 22.64], // Hiiumaa (Dagö), the second island, occupied at the end of the month
    ],
    summary:
      'Operation Albion was a combined air, land and naval operation in October 1917 to take the West Estonian archipelago: Saaremaa, Muhu and Hiiumaa, which dominated the Gulf of Riga and had been Russian since the eighteenth century. The landings were made on Saaremaa, the causeway to Muhu was forced, and from Muhu the troops stepped onto the mainland at Rohuküla; Hiiumaa was occupied at the end of the month. Riga had already fallen in the autumn of 1917 and the Russian navy had withdrawn out of the gulf, so the islands gave the German army the whole Baltic coast from the Gulf of Finland to the Curonian coast, and helped persuade the Russian government that it had to make peace.',
  },
  {
    id: 'palestine_1917',
    name: 'Palestine 1917, Gaza to Jerusalem',
    side: 'entente',
    from: '1917-03-26',
    to: '1917-12-30',
    kind: 'advance',
    path: [
      [31.51, 34.46], // Gaza, the town which blocked the coastal advance twice in 1917
      [31.25, 34.79], // Beersheba, carried on 31 October, which turned the Gaza line
      [31.78, 35.23], // Jerusalem, reached in the battle of 17 November to 30 December
    ],
    summary:
      'The Ottoman frontier defence of Palestine stood on Gaza, and two attacks on it in March and April 1917 failed, so the front sat from April to October while the water pipe and the railway were built forward across the desert. The line was turned rather than broken: Beersheba, on the eastern end of the Ottoman position, was carried on 31 October 1917 and Gaza fell a week later, and the Battle of Jerusalem, fought from 17 November to 30 December, took the city. The whole of this campaign lies south of the 34th parallel, where this map has no border data, so the line is drawn against the Mediterranean coastline and nothing else.',
  },

  /* ------------------------------------------------------------------ *
   * 1918: the year of movement, first the German offensives, then the
   * Allied ones which ended the war
   * ------------------------------------------------------------------ */
  {
    id: 'michael_1918',
    name: 'The spring offensive of 1918, Operation Michael',
    operation: 'Michael',
    side: 'central',
    from: '1918-03-21',
    to: '1918-04-05',
    kind: 'advance',
    path: [
      [49.85, 3.29], // Saint-Quentin, where the offensive left the Hindenburg Line
      [49.75, 3.07], // Ham, on the Oise, in the Eighteenth Army zone
      [49.76, 2.91], // Nesle, on the Canal de Crozat, given up in the first week
      [49.7, 2.79], // Roye, on the road north-west to Amiens
      [49.81, 2.7], // Rosières-en-Santerre, on the way to the last objectives
      [49.87, 2.52], // Villers-Bretonneux, east of Amiens, where the offensive ended
    ],
    strength:
      'The German army had 192 divisions and three brigades on the Western Front by 21 March 1918, out of 241 divisions in the whole army',
    summary:
      'Operation Michael began on 21 March 1918, launched from the Hindenburg Line in the neighbourhood of Saint-Quentin against the boundary where the British line had been extended and was held thin. Its object was to break the Allied front and sweep north-west to the Channel ports and drive the British army into the sea; two days later Ludendorff changed the plan to an advance due west along the whole front towards Amiens instead. The advance took Ham, Nesle and Roye, and the last eight days of it were fought about Villers-Bretonneux on the road into Amiens, where the First Battle of Villers-Bretonneux, 30 March to 5 April, stopped it and the fighting on the Ancre on 5 April ended the offensive. The Allied railhead at Amiens was never reached, so the line stops on ground the German army actually held; the Hindenburg Line drawn above is the front it was launched from.',
  },
  {
    id: 'georgette_1918',
    name: 'Operation Georgette, the Battle of the Lys',
    operation: 'Georgette / Fourth Ypres',
    side: 'central',
    from: '1918-04-07',
    to: '1918-04-29',
    kind: 'advance',
    path: [
      [50.53, 2.8], // La Bassée, on the old 1915 battlefield, the southern end of the attack front
      [50.64, 2.72], // Estaires, on the Lys, where the southern attack was halted, 9-11 April
      [50.76, 2.9], // Messines, on the ridge south-east of Ypres, carried 10-11 April
      [50.74, 2.73], // Bailleul, taken in the centre, 13-15 April
      [50.78, 2.83], // Kemmel, the Kemmelberg, carried 25-26 April
    ],
    strength:
      'The attack front ran from about 10 kilometres east of Ypres to about 10 kilometres east of Béthune',
    summary:
      'The German offensive in Flanders in April 1918 was planned as Operation George and reduced to Operation Georgette, with the object of taking Ypres and forcing the British forces back to the Channel ports; it was fought from 7 to 29 April 1918 and is also called the Fourth Battle of Ypres. The southern attack reached Estaires on the Lys on 9 April and there was finally halted by British reserve divisions, but the centre took Messines, then Bailleul, and the Kemmelberg, the height which commands all the ground between Armentières and Ypres, was carried on 25 and 26 April. Hazebrouck, the railway junction the offensive most wanted, was never reached: the arm making for it took Merville and was stopped there on 13 April by the First Australian Division. This is the reason the line ends at Kemmel and not on the coast.',
  },
  {
    id: 'blucher_1918',
    name: 'The Third Battle of the Aisne, Blücher-Yorck',
    operation: 'Blücher-Yorck',
    side: 'central',
    from: '1918-05-27',
    to: '1918-06-04',
    kind: 'advance',
    path: [
      [49.44, 3.79], // Craonne, on the Chemin des Dames ridge, the object of the attack
      [49.38, 3.32], // Soissons, on the Aisne, in the ground cleared in the first days
      [49.26, 3.09], // Villers-Cotterêts, in the forest of that name
      [49.04, 3.4], // Château-Thierry, on the Marne, the furthest ground reached
    ],
    strength:
      'Eight Allied divisions were broken through between Reims and Soissons, and by 30 May the attackers had taken just over 50,000 prisoners and more than 800 guns',
    summary:
      'The Third Battle of the Aisne, the Blücher-Yorck offensive, opened on 27 May 1918 with a short heavy bombardment on the Chemin des Dames ridge, which was its object: the ridge was to be taken before the American forces arrived in France in full. Eight Allied divisions between Reims and Soissons were broken through and the advance ran forward to the river Vesle and then on to the Marne, so that by 30 May over 50,000 prisoners and more than 800 guns had been taken and Ludendorff widened the operational objective on the spot. Reims, the place the advance pointed at, was never reached, and the Germans, having lost 130,000 casualties, were halted on the Marne on 6 June. The salient drawn here, with its tip at Château-Thierry, is the salient the Allied counterattack of July 1918 closed up.',
  },
  {
    id: 'amiens_1918',
    name: 'Amiens and the advance to the Hindenburg Line outposts',
    operation: 'Amiens / Third Battle of Picardy',
    side: 'entente',
    from: '1918-08-08',
    to: '1918-09-03',
    kind: 'advance',
    path: [
      [49.77, 2.49], // Moreuil, on the Avre, on the southern flank of the start line
      [49.87, 2.52], // Villers-Bretonneux, the village the line of departure was in front of
      [49.81, 2.7], // Rosières-en-Santerre, cleared on the first day
      [49.82, 2.8], // Chaulnes, on the 1916 battlefield, in front of the Hindenburg Line outposts
    ],
    strength:
      'The Allies advanced over 11 kilometres on the first day, one of the greatest advances of the war, and took over 15,000 prisoners for 12,000 casualties',
    summary:
      'The battle of Amiens, also known as the Third Battle of Picardy, began in dense fog at 04:20 on 8 August 1918 and was the opening phase of the Allied offensive known as the Hundred Days. Rawlinson’s Fourth Army advanced over 11 kilometres on the first day with nine of its nineteen divisions in the assault, took over 15,000 prisoners at a cost of 12,000 casualties, and induced Ludendorff to call the first day the black day of the German Army. The advance was not pushed to a decision: the fighting in this country went on as the Second Battle of the Somme, 21 August to 3 September 1918, and ended on the outpost line of the Hindenburg Line east of Péronne and Chaulnes. What it did achieve was that the German army had to give up the Amiens ground it had taken in the spring instead of using it to attack again.',
  },
  {
    id: 'meuse_argonne_1918',
    name: 'The Meuse-Argonne offensive, to Sedan',
    operation: 'Meuse-Argonne',
    side: 'entente',
    from: '1918-09-26',
    to: '1918-11-11',
    kind: 'advance',
    path: [
      [49.27, 5.13], // Montfaucon d’Argonne, the objective of the first day, taken on the second
      [49.34, 5.18], // Brieulles-sur-Meuse, on the river, in the second phase
      [49.39, 5.18], // Dun-sur-Meuse, on the left bank of the Meuse
      [49.49, 5.19], // Stenay, taken in the final drive north
      [49.7, 4.94], // Sedan, the railroad hub the offensive was making for
    ],
    strength:
      'The offensive lasted 47 days, from 26 September to 11 November 1918, and was the largest operation in United States military history',
    summary:
      'The Meuse-Argonne offensive began on 26 September 1918 and went on until the Armistice of 11 November, 47 days, the largest operation the United States Army carried out in the war. The First Army struck north towards Sedan, and the 79th Division took Montfaucon, the objective of the first day, only in the fighting of the next days; the offensive had to be reorganised twice before the Meuse was forced and the final drive north took Stenay and Sedan, the critical railroad hub. Only the eastern half of the general attack is drawn, along the Meuse: the wing which fought through the Argonne forest towards Grandpré and Vouziers runs a few kilometres west of this line and is left to the events. The Hindenburg Line positions between Dun and Stenay were the strongest ground the American troops had to break.',
  },
  {
    id: 'ypres_lys_1918',
    name: 'The Allied offensive in Flanders, Fifth Ypres',
    operation: 'Fifth Ypres / Lausnitz',
    side: 'entente',
    from: '1918-09-28',
    to: '1918-10-19',
    kind: 'advance',
    path: [
      [50.9, 3.02], // Passendale, on the ridge retaken in the spring, the German start line
      [50.79, 3.17], // Menen, behind the German right, on the Lys
      [50.77, 3.01], // Comines, on the left bank of the Lys, the furthest ground reached
    ],
    summary:
      'Fifth Ypres, also called Lausnitz, was the Allied Army Group of Flanders’ attack at 05:30 on 28 September 1918, on ground east of Ypres which the German army had retaken from the British in the spring. By 1 October the German line had been pushed off the left bank of the Lys as far as Comines. The Battle of Courtrai, 14 to 19 October, drove the German army back across the Lys and lost Kortrijk, and British and Belgian divisions then pushed towards Ghent, so the ground drawn here was given up inside three weeks of being taken.',
  },
  {
    id: 'vittorio_veneto_1918',
    name: 'Vittorio Veneto and the collapse of Austria-Hungary',
    operation: 'Vittorio Veneto',
    side: 'entente',
    from: '1918-10-24',
    to: '1918-11-04',
    kind: 'advance',
    path: [
      [45.98, 12.3], // Vittorio Veneto, between the Piave and the hills, where the attack was made
      [45.95, 13], // Codroipo, over the Tagliamento, the line the pursuit on the plain made for
      [45.65, 13.77], // Trieste, taken by an amphibious expedition on 3 November
      [46.07, 11.12], // Trento, entered by the Italian army on 3 November
    ],
    strength:
      'Austria-Hungary lost about 30,000 killed and wounded and 300,000 prisoners; the Italians took 448,000 soldiers, about a third of the imperial and royal army, with 5,600 guns and mortars',
    summary:
      'The battle of Vittorio Veneto was fought from 24 October to 4 November 1918, beginning on the first anniversary of Caporetto, and it ended the war on the Italian front and dissolved the Austro-Hungarian army. The armies on the plain pushed forward to the Tagliamento, Trieste was taken by an amphibious expedition on 3 November, and the Italian army entered Trento the same day; the Armistice of Villa Giusti was signed at 15:20 on 3 November and took effect 24 hours later, at 15:00 on 4 November, and the Italian advance continued until that hour. The pursuit went further than this line: the occupation of the whole of Tyrol, including Innsbruck, was not completed until the end of November, and that country, like the Albanian and Balkan occupations, is beyond what this map draws.',
  },
  {
    id: 'megiddo_damascus_1918',
    name: 'Megiddo and the pursuit to Damascus',
    operation: 'Megiddo / Sharon and Nablus',
    side: 'entente',
    from: '1918-09-19',
    to: '1918-10-01',
    kind: 'advance',
    path: [
      [32.31, 35.02], // Tulkarm, headquarters of the Ottoman Eighth Army, overrun on the first day
      [32.5, 35.5], // Beit She’an (Beisan), on the Jordan, one of the two communication centres
      [32.61, 35.29], // Afula, the other communication centre, taken with the bulk of two divisions
      [32.7, 35.3], // Nazareth, headquarters of the Yildirim Army Group
      [32.82, 35], // Haifa, the port, carried by the 5th Mounted Division on 23 September
      [33.51, 36.31], // Damascus, reached on 1 October
    ],
    strength:
      'The battle was fought from 19 to 25 September 1918 by the Egyptian Expeditionary Force, three corps, one of them mounted',
    summary:
      'The battle of Megiddo was fought between 19 and 25 September 1918 on the Plain of Sharon and on the Esdraelon Plain, and the name was chosen by Allenby for its biblical and symbolic resonance, since very little fighting took place near Tel Megiddo itself. The infantry broke the Ottoman front in front of Tulkarm while the mounted corps rode on to Afula and Beisan and to Nazareth, where the army group headquarters was, and Haifa was taken on 23 September; Daraa fell on 27 September and Damascus on 1 October, and fighting was still going on at Haritan, just north of Aleppo, when the Armistice of Mudros was signed on 30 October, which is why this line stops at Damascus. Every place on it lies south of the 34th parallel and east of the country this map colours with borders, so the line is drawn against the Mediterranean coastline and the desert and nothing else.',
  },
  {
    id: 'czech_legion_1918',
    name: 'The Czechoslovak Legion on the Volga',
    operation: 'Czechoslovak Legion',
    side: 'entente',
    from: '1918-06-01',
    to: '1918-09-10',
    kind: 'advance',
    path: [
      [53.19, 45.01], // Penza, the western end of the Legion’s line on the railway
      [53.16, 48.47], // Syzran, on the Volga, in the zone of fighting
      [54.32, 48.4], // Ulyanovsk (Simbirsk), on the Volga between Samara and Kazan
      [55.8, 49.11], // Kazan, taken on 6-7 August 1918 with the Imperial gold reserve
    ],
    strength:
      'The Legion was a corps of Czech and Slovak volunteers, strung out along the Trans-Siberian railway from Penza to Vladivostok',
    summary:
      'The Czechoslovak Legion was Czech and Slovak volunteers fighting on the Entente side to win Allied support for an independent Bohemian state and for Slovakia. After Russia withdrew from the war it was marching east, strung out along the Trans-Siberian railway from Penza to Vladivostok, and in the spring of 1918 it was fighting the Bolshevik government: by June along the railway east of Penza, by mid-July from Samara to Irkutsk, and on 6 and 7 August it took Kazan and the Imperial gold reserve there. The Red Army retook Kazan on 10 September and Samara about a month later, which is where this line stops. Only the western end of the Legion’s road is shown, and even that is uncoloured ground: this map has no border data east of the 45th meridian, and the railway runs on through Yekaterinburg to Vladivostok.',
  },
];
