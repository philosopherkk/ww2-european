import {
  arabSiege717,
  athelstan,
  battleOfAndernach,
  battleOfBachDang,
  battleOfBrunanburh,
  battleOfFontenoy,
  battleOfGuadalete,
  battleOfHingstonDown,
  battleOfLechfeld,
  battleOfRiade,
  battleOfTalas,
  battleOfTertry,
  battleOfYarmouk,
  charlesTheBald,
  gaoXianzhi,
  constantineIi,
  ecgberht,
  edmund,
  henryTheFowler,
  heraclius,
  khalidIbnAlWalid,
  leoIii,
  lothairI,
  louisTheGerman,
  louisTheYounger,
  ngoQuyen,
  odoTheGreat,
  olafOfDublin,
  ottoI,
  owainOfStrathclyde,
  pepinIi,
  roderic,
  tariqIbnZiyad,
  ziyadIbnSalih,
} from '@/lib/eras/fill-early-medieval';
import { EARLY_MEDIEVAL_FIGURES } from '@/lib/eras/people';
import {
  alfredOfWessex,
  charlemagne,
  charlemagneEmperor800,
  edington878,
  guthrum,
  lindisfarne793,
} from '@/lib/eras/sourced-batch';
import type { EraEpisode, EraEvent, EraPeriod } from '@/lib/eras/types';

const tours: EraEvent = {
  id: 'battle_of_tours',
  date: '0732-10',
  precision: 'month',
  title: 'Battle of Tours',
  kind: 'battle',
  fronts: ['france_and_low_countries'],
  countries: ['Franks', 'Umayyad'],
  figures: ['charles_martel', 'abd_al_rahman', 'odo_the_great'],
  levels: {
    primary: {
      cause:
        'In October 732 an Umayyad army under its governor, Abd al-Rahman al-Ghafiqi, met Charles Martel’s Frankish and Aquitanian force between Tours and Poitiers.',
      what:
        'The battle was fought that October in western France. Odo the Great is named with the Aquitanian side, and Charles Martel led the Frankish side.',
      consequence:
        'The Frankish side won. The Umayyad commander was killed, and the Umayyad army retreated.',
    },
    secondary: {
      cause:
        'Two records place the meeting in October 732, between the towns of Tours and Poitiers, in western France. Abd al-Rahman al-Ghafiqi commanded the Umayyad army. A Frankish and Aquitanian coalition faced him. Charles Martel is the Frankish leader both records give. Odo the Great is the Aquitanian name both attach to the fight: one calls him duke of Aquitaine, and the other says that duchy stood under him. A numbered day inside October is printed once, so only the month and the year are used.',
      what:
        'The fighting is the Battle of Tours, tied also to Poitiers. Charles Martel’s side defeated the Umayyad host. The Umayyad commander was killed. His army then retreated. One record sends that retreat into the Islamic Iberian lands. The other says the army withdrew south over the Pyrenees. Those destinations are not the same sentence, so the retreat itself is the movement kept. Odo remains the Aquitanian figure named beside Charles, without a separate fate both records share.',
      consequence:
        'The Frankish and Aquitanian side had the victory. Abd al-Rahman was dead, and the Umayyad army left the field. A claim that the day decided the religion of Europe is pressed in the shorter record. The longer record says historians have argued over how far the victory checked Islam, and it does not treat that argument as settled. The claim is therefore not a result. What remains is a Frankish victory in October 732, the death of the Umayyad commander, and the retreat of his army.',
    },
    university: {
      cause:
        'The October meeting of 732 set an Umayyad army against a Frankish and Aquitanian force in western France, on ground both narratives place between Tours and Poitiers. Command of the Umayyad army is given to its governor, Abd al-Rahman al-Ghafiqi. Command of the Frankish contingent is given to Charles Martel. Odo the Great is named with Aquitaine in both narratives, as a duke in one and as the man under whom the duchy stood in the other. Kinship for Charles, a longer patronymic, and a calendar day are each fuller than the overlap and are left out. The cause retained is that October collision between those leaders on that ground.',
      what:
        'Wherever the fight is told, Charles Martel’s Frankish and Aquitanian force beat the Umayyad army, and the Umayyad commander was killed. The defeated army retreated. One narrative carries the survivors into the Islamic Iberian lands. The other carries them south over the Pyrenees and says they withdrew. Because those paths are not printed in both, no single road is required. Strengths of the hosts are unstable and are omitted. The course both narratives describe is the October battle, Charles’s victory, the killing of Abd al-Rahman, and the retreat.',
      consequence:
        'The result both narratives allow is a Frankish victory, the death of the Umayyad commander, and the departure of his army. One narrative goes on to say that Christian Europe was saved from an Islamic future. The other records a long argument among historians about whether the victory checked the spread of Islam, and it leaves that argument open. The religious future of the continent is therefore not stated as fact. No troop total is shared. What remains after those sequels fall away is the October 732 victory of Charles Martel’s force over Abd al-Rahman al-Ghafiqi, and the retreat that followed his death.',
    },
  },
  note: 'Both accounts place the battle in October 732 between Tours and Poitiers. Charles Martel’s Frankish and Aquitanian force defeated the Umayyad governor Abd al-Rahman al-Ghafiqi, who was killed, and the army retreated. One dates the day to 10 October and sends the retreat over the Pyrenees. The other sends it into Islamic Iberia.',
  sources: [
    { url: 'https://www.thecollector.com/battle-of-tours/', publisher: 'TheCollector' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Tours', publisher: 'Wikipedia' },
  ],
};

const episode: EraEpisode = {
  id: 'tours-732',
  title: 'Tours to Edington',
  monthLabel: 'October 732 – 878',
  events: [tours, lindisfarne793, charlemagneEmperor800, edington878],
  lines: [],
  figures: [...EARLY_MEDIEVAL_FIGURES, alfredOfWessex, guthrum, charlemagne, odoTheGreat],
  links: [],
};

const wider: EraEpisode = {
  id: 'constantinople-talas-lechfeld',
  title: 'Constantinople, Talas, and Lechfeld',
  monthLabel: '717 – August 955',
  events: [arabSiege717, battleOfTalas, battleOfLechfeld],
  lines: [],
  figures: [leoIii, gaoXianzhi, ziyadIbnSalih, ottoI],
  links: [],
};

const roundTwo: EraEpisode = {
  id: 'yarmouk-brunanburh-bach-dang',
  title: 'Yarmouk, Brunanburh, and Bạch Đằng',
  monthLabel: '15 August 636 – 938',
  events: [battleOfYarmouk, battleOfBrunanburh, battleOfBachDang],
  lines: [],
  figures: [khalidIbnAlWalid, heraclius, athelstan, edmund, constantineIi, owainOfStrathclyde, olafOfDublin, ngoQuyen],
  links: [],
};

const roundThree: EraEpisode = {
  id: 'guadalete-fontenoy-andernach',
  title: 'Guadalete, Fontenoy, and Andernach',
  monthLabel: 'July 711 – 8 October 876',
  events: [battleOfGuadalete, battleOfFontenoy, battleOfAndernach],
  lines: [],
  figures: [tariqIbnZiyad, roderic, lothairI, charlesTheBald, louisTheGerman, louisTheYounger],
  links: [],
};

const roundFour: EraEpisode = {
  id: 'tertry-hingston-riade',
  title: 'Tertry, Hingston Down, and Riade',
  monthLabel: '687 – 933',
  events: [battleOfTertry, battleOfHingstonDown, battleOfRiade],
  lines: [],
  figures: [pepinIi, ecgberht, henryTheFowler],
  links: [],
};

export const EARLY_MEDIEVAL: EraPeriod = {
  id: 'early-medieval',
  label: 'Early medieval',
  episodes: [episode, wider, roundTwo, roundThree, roundFour],
};
