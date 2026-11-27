import type { CampaignLine } from './types';
import { CAMPAIGN_LINES } from './campaigns';
import { PLACES } from './places';

/**
 * Army marches drawn on the same layer as the campaign lines.
 *
 * A march is an advance: waypoints in order, dashed, with the progress ring
 * the map already draws for `kind: 'advance'`. Nothing here is a second map.
 *
 * Every vertex is a coordinate already stored on a place or a campaign line.
 * `place` reads PLACES. `copied` repeats a campaign waypoint and refuses to
 * load if that pair is no longer on the named line. Dates and army names come
 * from the event or the campaign line cited on each entry. No strength is
 * set: the events do not carry one as a field.
 *
 * Vertices named in those accounts and left out, because this worktree has no
 * coordinate for them: Minsk, Smolensk, Petrograd, Helsinki and Odessa
 * (Faustschlag); Hasankale (the road to Erzurum); Baghdad, the Khadairi Bend,
 * the Hai, the Dahra Bend and the Diyala (Maude); Belleau Wood and the Vesle
 * (the Second Marne); Es Salt (Chaytor, before Amman); Sibiu (named on the
 * Transylvanian advance, never taken). Not drawn at all, for the same reason:
 * Kornilov’s march (Mogilev, Petrograd), the Serbian retreat to the Adriatic
 * (Scutari, Durazzo, Corfu), the Sinai march (Romani, Magdhaba, Rafa), the
 * Vardar march on Sofia (Skopje, Sofia), the 1916 entry into Monastir (Bitola),
 * the Belgian move from Antwerp to the Yser, the June 1918 attack towards
 * Padua and Venice, Enver’s plan to retake Kars and push towards Tiflis
 * (Sarikamish and Tiflis), the Ottoman advance of spring 1918 through Van
 * towards Baku (Van, Tiflis, Baku), and Chaytor’s advance on Amman (the
 * Jordan crossing and Es Salt).
 */

function place(name: string): [number, number] {
  const found = PLACES.find((p) => p.name === name);
  if (!found) {
    throw new Error(`marches: ${name} is not in PLACES`);
  }
  return [found.lat, found.lng];
}

function copied(lineId: string, lat: number, lng: number): [number, number] {
  const line = CAMPAIGN_LINES.find((l) => l.id === lineId);
  const hit = line?.path.some((p) => p[0] === lat && p[1] === lng);
  if (!line || !hit) {
    throw new Error(`marches: ${lat},${lng} is not on ${lineId}`);
  }
  return [lat, lng];
}

export const MARCH_LINES: CampaignLine[] = [
  {
    id: 'march_faustschlag_narva',
    name: 'German armies from Pskov towards Narva',
    operation: 'Faustschlag',
    side: 'central',
    from: '1918-02-18',
    to: '1918-03-03',
    kind: 'advance',
    path: [place('Pskov'), place('Narva')],
    summary:
      'Operation Faustschlag, in the event dated 18 February to 3 March 1918, records one German force moving from Pskov towards Narva. Both towns are already marked. The same account says the advance came within 160 kilometres of Petrograd; Petrograd has no coordinate in this atlas, so the line stops at Narva.',
  },
  {
    id: 'march_faustschlag_kiev',
    name: 'German armies from Daugavpils towards Kyiv',
    operation: 'Faustschlag',
    side: 'central',
    from: '1918-02-18',
    to: '1918-03-03',
    kind: 'advance',
    path: [place('Daugavpils'), place('Kyiv')],
    summary:
      'The same event records Daugavpils falling on the first day, Minsk three days later, and Kiev on 2 March 1918. Daugavpils and Kyiv are already marked. Minsk and Smolensk are named in the account and are not drawn, because neither has a coordinate here, so the stroke is the straight axis between the two marked towns.',
  },
  {
    id: 'march_caucasus_erzurum',
    name: 'The Russian Caucasus Army to Erzurum',
    side: 'russia',
    from: '1916-01-10',
    to: '1916-02-16',
    kind: 'advance',
    path: [
      copied('caucasus_1916', 39.36, 41.7), // Hınıs, on that front's path
      copied('caucasus_1916', 39.91, 41.28), // Erzurum, on that front's path
    ],
    summary:
      'The event dates the Russian Caucasus Army’s attack from 10 January to 16 February 1916, when Erzurum surrendered. The line runs from Hınıs to Erzurum, both already waypoints on the Caucasus front. Hasankale, where the event places the rearguard fight of 18 and 19 January, has no coordinate here and is left out.',
  },
  {
    id: 'march_maude_tigris',
    name: 'Maude’s British and Indian army from Basra to Kut',
    side: 'entente',
    from: '1916-12-13',
    to: '1917-02-24',
    kind: 'advance',
    path: [place('Basra'), place('Kut')],
    summary:
      'The Baghdad event describes Maude’s army, British and Indian soldiers, moving up the Tigris from Basra. It says the campaign opened on 13 December 1916 and that Kut was taken on 24 February 1917. Both towns are already marked. Baghdad, entered on 11 March, and the river bends named in the account have no coordinates here, so the line ends at Kut.',
  },
  {
    id: 'march_tenth_army_soissons',
    name: 'Mangin’s Tenth Army from Villers-Cotterêts to Soissons',
    side: 'entente',
    from: '1918-07-15',
    to: '1918-08-06',
    kind: 'advance',
    path: [
      copied('blucher_1918', 49.26, 3.09), // Villers-Cotterêts, on the Blücher path
      place('Soissons'),
    ],
    summary:
      'The Second Marne event says that on 18 July 1918 Mangin’s Tenth Army, with Franco-American divisions, struck the west side of the salient, and it names the counter-stroke at Soissons. The line runs from Villers-Cotterêts, already a waypoint on the Blücher advance, to Soissons, already a place marker. Belleau Wood and the Vesle, named in the same battle, have no coordinates here. The dates below run from 15 July, the day the battle opened on the Reims side, although this stroke itself began on 18 July.',
  },
  {
    id: 'march_serbian_belgrade',
    name: 'The Serbian army from the Kolubara towards Belgrade',
    side: 'entente',
    from: '1914-12-02',
    to: '1914-12-15',
    kind: 'advance',
    path: [
      copied('serbia_1914', 44.36, 20.14), // Kolubara, on the 1914 invasion
      place('Belgrade'),
    ],
    summary:
      'The Kolubara event says the Serbian army counterattacked on 2 December 1914, and that the Austro-Hungarians abandoned Belgrade on 14–15 December. The line runs from the Kolubara, already a waypoint on the 1914 invasion, to Belgrade, already a place marker. It is the northern wing of that counterattack. The invasion line itself runs from Zemun to Užice, so this stroke is not that path.',
  },
  {
    id: 'march_serbian_uzice',
    name: 'The Serbian army from the Kolubara towards Užice',
    side: 'entente',
    from: '1914-12-02',
    to: '1914-12-08',
    kind: 'advance',
    path: [
      copied('serbia_1914', 44.36, 20.14), // Kolubara
      copied('serbia_1914', 44.27, 19.89), // Valjevo, retaken the same day
      copied('serbia_1914', 43.86, 19.84), // Užice
    ],
    summary:
      'The same event says Valjevo and Užice were retaken on 8 December 1914. All three points are already waypoints on the Austro-Hungarian invasion. This stroke is the Serbian counterattack in the other direction, from the Kolubara towards Užice, and its ends are not the invasion’s ends at Zemun and Užice.',
  },
  {
    id: 'march_eleventh_army_belgrade',
    name: 'The German Eleventh and Austro-Hungarian Third Armies from Zemun towards Belgrade',
    side: 'central',
    from: '1915-10-06',
    to: '1915-10-09',
    kind: 'advance',
    path: [
      place('Šabac'), // on the Sava, the 6-9 October crossing axis towards Belgrade
      place('Belgrade'),
    ],
    summary:
      'The invasion-of-Serbia event says the German Eleventh and Austro-Hungarian Third Armies crossed the Sava and the Drina on 6 October 1915 and took Belgrade on the 9th. Zemun is already the waypoint on the opposite bank. The 1915 conquest line starts at Belgrade and runs south to Kosovska Mitrovica, so this stroke is only the crossing. Skopje, named in the Bulgarian wing of the same campaign, has no coordinate here.',
  },
  {
    id: 'march_falkenhayn_bucharest',
    name: 'Falkenhayn’s army from Brașov towards Bucharest',
    side: 'central',
    from: '1916-10-17',
    to: '1916-12-06',
    kind: 'advance',
    path: [place('Brașov'), place('Bucharest')],
    summary:
      'The Transylvania campaign says that on 17 October 1916 the Romanian Second Army attacked at Brașov, the attack was repulsed, and the counterattack which followed turned the war into a fight for Wallachia. The Bucharest event dates the occupation to 6 December 1916, and the Wallachia campaign says Falkenhayn’s cavalry entered the city that day. Both towns are already marked. The Wallachia line itself runs from Turtucaia to Ploiești, not from Brașov. Sibiu, named as the town the Romanian advance did not take, has no coordinate here.',
  },
  {
    id: 'march_mackensen_bucharest',
    name: 'Mackensen’s Danube Army from Turtucaia towards Bucharest',
    side: 'central',
    from: '1916-09-06',
    to: '1916-12-06',
    kind: 'advance',
    path: [place('Turtucaia'), place('Bucharest')],
    summary:
      'The Romania event says Mackensen struck north from Dobruja. The Wallachia campaign dates the surrender of Turtucaia to 6 September 1916. The Bucharest event says his Danube Army won the battle of the Argeș on 4 December and that the city was occupied on 6 December. Both towns are already marked. The campaign line of that conquest goes on through Craiova to Ploiești, so this stroke is only the Danube Army’s axis between the two marked towns. Ploiești, which fell the same day, stays on that longer line.',
  },
  {
    id: 'march_allenby_jerusalem',
    name: 'Allenby’s Egyptian Expeditionary Force from Beersheba towards Jerusalem',
    side: 'entente',
    from: '1917-10-31',
    to: '1917-12-09',
    kind: 'advance',
    path: [place('Beersheba'), place('Jerusalem')],
    summary:
      'The Beersheba event says the force took Beersheba on 31 October 1917 and that Jerusalem fell on 9 December, when the Ottoman garrison withdrew; Allenby entered the city on 11 December. The note names the Egyptian Expeditionary Force. Both towns are already marked. The Palestine campaign line runs from Gaza to Jerusalem, so this stroke is the inland march after Beersheba and not that line.',
  },
  {
    id: 'march_feisal_damascus',
    name: 'Feisal’s Northern Army from Daraa towards Damascus',
    side: 'entente',
    from: '1918-09-27',
    to: '1918-10-01',
    kind: 'advance',
    path: [
      copied('arab_revolt_1916_18', 32.62, 36.11), // Daraa, on the Arab Revolt path
      place('Damascus'),
    ],
    summary:
      'The Megiddo campaign dates the fall of Daraa to 27 September 1918 and Damascus to 1 October, and the Megiddo event names Feisal’s Northern Army in the fall of Damascus. The line runs from Daraa, already a waypoint on the Arab Revolt path, to Damascus, already a place marker. The revolt line itself runs from Aqaba to Damascus, so this stroke is only that last bound. Es Salt, which the Megiddo event gives to Chaytor’s force before Amman, has no coordinate here, and the crossing of the Jordan is not a marked point, so Chaytor’s advance on Amman is not drawn.',
  },
];
