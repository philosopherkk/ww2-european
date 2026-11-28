import type { EraEvent, EraFigure } from '@/lib/eras/types';

/** Cards for 501–1000 whose batch passed era_gate.py. Quotes stay in cursor-pack/out/world. */

export const arabSiege717: EraEvent = {
  id: 'arab_siege_constantinople_717',
  date: '0717',
  precision: 'year',
  title: 'Arab siege of Constantinople',
  kind: 'siege',
  fronts: ['anatolia_and_levant'],
  countries: ['Byzantine Empire', 'Umayyad'],
  figures: ['leo_iii'],
  levels: {
    primary: {
      cause:
        'Leo III, called the Isaurian, held the Byzantine throne, and an Arab force of the Umayyad rulers came against Constantinople.',
      what: 'The siege belongs to 717, the year his reign began. Byzantine crews used Greek fire against the Arab ships.',
      consequence:
        'The Arabs withdrew in August 718. Constantinople remained Byzantine, with Leo III still its emperor.',
    },
    secondary: {
      cause:
        'Leo, the Isaurian, had taken the imperial throne in 717 and then had to meet a full Arab attack on the capital. The attackers were the Umayyads’ soldiers, come by land and by sea. One narrative dates the first assault to 15 August 717. The other uses 15 August for the day the blockade ended in the following year. Those two uses of the same calendar day are not the same event, so neither day is treated as agreed.',
      what: 'Through 717 and into the next year the city stood under siege. Strong walls, named the Theodosian Walls in only one narrative, formed part of the defence, and the weapon both narratives name is Greek fire, turned on the Arab fleet. Hunger and a hard winter appear in the longer narrative beside Bulgar attacks and a commander called Maslama. Those details are not in the shorter imperial life, so the fighting described here stays with the siege, the fire, and Leo’s defence of the capital.',
      consequence:
        'In August 718 the Arab army drew off in disorder, and the capital was not taken. Leo’s reign is given as 717 to 741 in both narratives, so he was still emperor when the fleet and the army left. A claim that the success saved all of eastern Europe from conquest is argued in the shorter life and is not the result stated here. The result they share is the failed siege and the August 718 withdrawal.',
    },
    university: {
      cause:
        'The Arab offensive that reached Constantinople was led under Umayyad rule, and the man who met it had just become Byzantine emperor. Both narratives call him Leo III and the Isaurian, and both set the start of his reign in 717, running on to 741. He had come to the throne amid disorder, a background the longer narrative tells through a revolt against Theodosius and the shorter one through his crowning on 25 March 717. The March day is not in both, so it is not part of the cause. Nor is the calendar day in August. One narrative puts 15 August 717 at the opening of the assault. The other puts 15 August 718 at the raising of the siege. The cause that remains is an Arab siege of the capital begun in 717, against an emperor who already held the throne.',
      what: 'The siege is the long effort to take Constantinople, by land and by sea, while Leo directed the defence. Greek fire, which both narratives treat as a decisive weapon at sea, burned Arab ships and kept the city from being closed off. Fortifications matter in both, though only one narrative gives them the name Theodosian Walls. The longer narrative adds a winter of famine and disease, help from the Bulgars, a second pair of fleets in the spring, and the general Maslama. The shorter narrative praises organisation and the same fire, without those episodes. What both describe is the siege itself, conducted against Leo’s capital, with Greek fire used on the Arab fleet.',
      consequence:
        'The Arabs left in August 718. One narrative says they were forced to lift the siege on the fifteenth day of that month. The other says they withdrew in disarray during August, having begun, on its dating, in the previous August. The shared ending is the August 718 withdrawal, not a single numbered day. Constantinople stayed in Byzantine hands, and Leo, whose reign both run from 717 to 741, was still emperor. Later Arab raids into Asia Minor are mentioned in the shorter narrative and do not cancel the failure of this siege. The consequence is that failure: the capital held, and the besiegers departed in August 718.',
    },
  },
  sources: [
    {
      url: 'https://en.wikipedia.org/wiki/Siege_of_Constantinople_(717%E2%80%93718)',
      publisher: 'Wikipedia',
    },
    {
      url: 'https://www.encyclopedia.com/people/history/ancient-history-late-roman-and-byzantine-biographies/leo-iii',
      publisher: 'Encyclopedia.com',
    },
  ],
  note: 'One account dates the Arab assault from 15 August 717 and the withdrawal to August 718. The other dates the lifting of the siege to 15 August 718, after the army had crossed into Thrace in the early summer of 717. The year 717 and the withdrawal in August 718 are what both state. Greek fire, the Isaurian name, and the reign 717 to 741 are in both. Theodosian Walls, Maslama, and the Bulgars are not.',
};

export const battleOfTalas: EraEvent = {
  id: 'battle_of_talas_751',
  date: '0751-07',
  precision: 'month',
  title: 'Battle of Talas',
  kind: 'battle',
  fronts: ['asia'],
  countries: ['Tang', 'Abbasid'],
  figures: ['gao_xianzhi', 'ziyad_ibn_salih'],
  levels: {
    primary: {
      cause:
        'In July 751 a Tang army and an Abbasid army met at the Talas River, near today’s border of Kyrgyzstan and Kazakhstan.',
      what: 'Gao Xianzhi led the Tang force, and Ziyad ibn Salih led the Abbasid force. Another spelling of the Tang general is Kao Hsien-chih.',
      consequence:
        'The Tang army lost at the river, and the defeat checked further Chinese expansion across Central Asia.',
    },
    secondary: {
      cause:
        'Two great powers had been pressing into the same inland country, China under the Tang and the Arab caliphate under the Abbasids. In July 751 their hosts came to a river called Talas, close to where Kyrgyzstan and Kazakhstan now meet. One narrative, in a single sentence, sets the banks in present-day Kyrgyzstan, and elsewhere names the Kyrgyz and Kazakh frontier. The place they share is that river borderland.',
      what: 'The Tang leader is Gao Xianzhi in one spelling and Kao Hsien-chih in the other. The Abbasid leader is Ziyad ibn Salih in both. The hosts fought for five days. A Turkic contingent, Karluk in one narrative and Qarluq in the other, is tied to the Abbasid success, yet the narratives split on whether those riders changed sides during the fighting or had started as Abbasid allies. That split is left as it stands. The shared course is the July clash and the Tang defeat.',
      consequence:
        'After the loss, Tang power ceased to spread farther west through Central Asia. A tale that Chinese captives carried paper-making toward the Arab lands is stated as fact in one narrative. The other says prisoners are said to have brought papermaking to West Asia, and that several findings dispute it. The craft is therefore not given as an outcome. The outcome they share is the Abbasid victory and the check upon Tang expansion.',
    },
    university: {
      cause:
        'The Tang dynasty and the Abbasid caliphate were the two empires whose soldiers met in July 751. Each had been reaching into Central Asia, and the collision came on the Talas River near the modern frontier of Kyrgyzstan and Kazakhstan. One narrative spends many paragraphs on a quarrel in Ferghana and on the killing of a local king at Chach before the march. The other lists Ferghana among the Tang allies and does not tell that killing, so the killing is not the reason given here. The reason both actually supply is the meeting of the Tang and Abbasid armies at that river in that month. Troop figures, including a Tang thirty thousand and an Arab report of one hundred thousand Chinese, are likewise unstable between the narratives and are not used.',
      what: 'Command on the Tang side is given to a general whose name is printed Gao Xianzhi and also Kao Hsien-chih. Command on the Abbasid side is given to Ziyad ibn Salih, spelled the same way in both. One narrative adds that the Tang general was of Korean origin. The other does not, so his origin is not stated. Fighting lasted five days. Riders called Karluks, or Qarluqs, enter the Abbasid success in both narratives, but one says the sources differ on a defection, and the other sets a Chinese version of a mid-battle change of side against an Arab version in which those riders were allies from the start. The course that survives the difference is the battle at Talas and the defeat of the Tang army.',
      consequence:
        'The defeat ended the westward push of Tang power in Central Asia, which is the sequel both narratives allow. One of them also says the battle halted Arab advances and fixed a religious boundary. The other speaks only of Tang influence and Tang expansion, not of a matching Arab halt, so that wider halt is not claimed. Paper is a separate dispute. One narrative credits the battle with carrying paper-making from China into the Arab world and then toward Europe. The other reports a claim about captives and papermaking, and it marks the claim as disputed. The consequence retained is the Abbasid victory over the Tang force at Talas in July 751, and the stop it put to further Tang expansion westward.',
    },
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Talas', publisher: 'Wikipedia' },
    { url: 'https://www.thoughtco.com/the-battle-of-talas-195186', publisher: 'ThoughtCo' },
  ],
  note: 'One account spells the Tang commander Gao Xianzhi. The other spells him Kao Hsien-chih and adds Go Seong-ji. Both name Ziyad ibn Salih on the Abbasid side, place the battle at the Talas River in July 751, and say the Tang army was defeated. Karluk and Qarluq are the two spellings of the riders whose allegiance the accounts do not tell the same way. Paper-making is stated as a result in one account and marked as disputed in the other.',
};

export const battleOfLechfeld: EraEvent = {
  id: 'battle_of_lechfeld_955',
  date: '0955-08',
  precision: 'month',
  title: 'Battle of Lechfeld',
  kind: 'battle',
  fronts: ['german_lands'],
  countries: ['Germany', 'Magyars'],
  figures: ['otto_i'],
  levels: {
    primary: {
      cause:
        'In August 955 King Otto I brought a German army onto the Lechfeld plain in Bavaria to face Magyar warriors.',
      what: 'The engagement is the Battle of Lechfeld. Otto, also called Otto the Great, commanded the German side against the Magyars.',
      consequence:
        'The Magyars were defeated on the Lechfeld. In 962 Otto was crowned Holy Roman emperor, after the battle rather than before it.',
    },
    secondary: {
      cause:
        'Riders from the Magyar country had been striking Otto’s realm from the east, and he drew contingents from vassals who often quarrelled. One chronicle pins the clash to a single day, the tenth of August in 955. Another lets the fighting run from that tenth day through the twelfth. The ground they share is an open field called the Lechfeld, in the country now called Bavaria.',
      what: 'Otto, styled the Great as well as by his royal name, led the host that met those Magyar riders. The shorter telling says his men kept their order, the enemy line failed, and many were cut down as they fell away. The longer telling is wary of that first afternoon and does not treat the killing as finished before night. The action both narrate is his battle with the Magyars on that field during August 955.',
      consequence:
        'His enemies lost the field. Each telling dates an imperial crowning to 962 and sets it later than the battle, not before it. A further claim, that Hungarian war-parties then stopped riding west for good, stands in only one telling and is not repeated here as settled fact. Counts of men on each side also disagree, so no strength is stated.',
    },
    university: {
      cause:
        'Before the hosts closed, Magyar raiding had been wearing at the German kingdom from the east, and Otto had to bind men from lordships that did not keep an easy peace. The shorter narrative stresses squabbling vassals and a failed attempt to buy off nomads. The longer narrative opens on the Hungarian way of war and on a march toward Augsburg, a town the shorter narrative never names, so that town stays out of the cause. What both give is a meeting of his host and a Magyar host on the Lechfeld in Bavaria during August 955. The day is not stable. One narrative gives 10 August alone. The other gives the span from 10 August to 12 August. The month is therefore the date used for the event.',
      what: 'The battle carries the name Lechfeld, and Otto, called the Great in both narratives, commands the German host. Manoeuvres are not told in one voice. The shorter narrative has his warriors stand fast, refuse a pretended flight by the enemy, and then strike as the Magyars broke. The longer narrative, following Widukind, is unsure how the main clash was won and even treats the first day as unfinished. Those movements are not offered as the description of the fighting. The description both support is a battle on the Lechfeld plain, Otto’s host against the Magyars, from which the German side emerged victorious.',
      consequence:
        'The Magyar army was beaten. Otto’s later imperial rank belongs to both narratives. In 962 he was crowned Holy Roman emperor. The longer narrative says that crown rested largely on the position he held after Lechfeld, while the shorter one simply places the crowning later, once the victory lay behind him. The result stated here is the defeat, together with the crowning of 962 that both locate afterwards. Rough ranges for the armies are printed differently in the two narratives and are omitted. So is any list of Magyar leaders put to death, which only the shorter narrative supplies.',
    },
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Lechfeld', publisher: 'Wikipedia' },
    { url: 'https://www.history.com/articles/forgotten-military-leaders', publisher: 'History.com' },
  ],
  note: 'One account dates the battle to 10 August 955. The other dates it 10–12 August 955. Both place King Otto I, also called Otto the Great, against the Magyars on the Lechfeld plain in Bavaria, and both set his crowning as Holy Roman emperor in 962 after that victory. Augsburg is named in only one account. Army sizes are not the same in both, and the claim that Hungarian campaigns westwards then ceased is in only one.',
};

export const leoIii: EraFigure = {
  id: 'leo_iii',
  name: 'Leo III',
  role: 'ruler',
  country: 'Byzantine Empire',
  allegiance: 'Byzantine Empire',
  note: 'Both accounts call him the Isaurian and give the reign as 717 to 741. One dates the Arab attack from 15 August 717. The other dates the end of the siege to 15 August 718.',
  bio: {
    primary:
      'Leo III, the Isaurian, was Byzantine emperor from 717, and he held Constantinople when an Arab siege failed in August 718.',
    secondary:
      'Leo III, called the Isaurian, took the Byzantine throne in 717 and met an Arab siege of Constantinople led under Umayyad rule. Greek fire, named in both lives, was used against the attackers’ ships. In August 718 the Arabs withdrew. His reign is counted to 741. One life dates 15 August 717 as the start of the assault, and the other dates 15 August 718 as the day the siege was lifted, so those days stay out of his story.',
    university:
      'Leo III is the Isaurian emperor whose reign both accounts run from 717 to 741, and who faced the Arab siege of Constantinople. He had gained the throne in that opening year, before the city was enclosed. The weapon both credit in the fighting at sea is Greek fire. Walls protected the capital, though only one account calls them Theodosian. In August 718 the besieging army withdrew, and he was still emperor. A numbered day in August is not stable: one account puts 15 August at the beginning in 717, and the other puts 15 August at the end in 718. Bulgar allies, a general named Maslama, and a winter of famine are told in only one account. His life here is the reign, the defence of the capital, and the Arab withdrawal in August 718.',
  },
  sources: [
    {
      url: 'https://en.wikipedia.org/wiki/Siege_of_Constantinople_(717%E2%80%93718)',
      publisher: 'Wikipedia',
    },
    {
      url: 'https://www.encyclopedia.com/people/history/ancient-history-late-roman-and-byzantine-biographies/leo-iii',
      publisher: 'Encyclopedia.com',
    },
  ],
};

export const gaoXianzhi: EraFigure = {
  id: 'gao_xianzhi',
  name: 'Gao Xianzhi',
  role: 'commander',
  country: 'Tang',
  allegiance: 'Tang',
  note: 'One account spells him Gao Xianzhi. The other spells him Kao Hsien-chih and adds Go Seong-ji. Only that second account calls him Korean and tells of a king killed at Chach.',
  bio: {
    primary:
      'Gao Xianzhi, also spelled Kao Hsien-chih, commanded the Tang army that the Abbasids defeated at the Talas River in July 751.',
    secondary:
      'Gao Xianzhi led China’s western army at Talas in July 751. The other spelling of his name is Kao Hsien-chih. Ziyad ibn Salih commanded the Abbasid army that beat him. The fight lay near the modern border of Kyrgyzstan and Kazakhstan. One account calls Gao a man of Korean origin. The other does not, so that origin is not part of this life. The life they share is his command of the Tang force and its defeat.',
    university:
      'The Tang commander at the Talas River in July 751 is named Gao Xianzhi in one account and Kao Hsien-chih in the other, with a further form, Go Seong-ji, added beside the second spelling. He led the Tang army against the Abbasid force of Ziyad ibn Salih and was defeated. One account alone says he was Korean by origin and that he had betrayed a king at Chach on the way to the battle. Those episodes are omitted. Riders called Karluks or Qarluqs figure in the defeat, but the accounts do not agree whether they changed sides or were already with the Abbasids, so his life does not settle that question. What remains is his command of the losing Tang army at Talas in July 751, and the check that loss placed on further Tang expansion in Central Asia.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Talas', publisher: 'Wikipedia' },
    { url: 'https://www.thoughtco.com/the-battle-of-talas-195186', publisher: 'ThoughtCo' },
  ],
};

export const ziyadIbnSalih: EraFigure = {
  id: 'ziyad_ibn_salih',
  name: 'Ziyad ibn Salih',
  role: 'commander',
  country: 'Abbasid',
  allegiance: 'Abbasid',
  note: 'Both accounts spell his name Ziyad ibn Salih and place him in command of the Abbasid army at Talas in July 751. They do not agree how the Karluk, or Qarluq, riders joined him.',
  bio: {
    primary:
      'Ziyad ibn Salih commanded the Abbasid army that defeated Gao Xianzhi’s Tang force at the Talas River in July 751.',
    secondary:
      'Ziyad ibn Salih led the Abbasid host at Talas in July 751, and that host defeated the Tang army. The Tang general opposite him is Gao Xianzhi, also spelled Kao Hsien-chih. Both accounts place the river near present-day Kyrgyzstan and Kazakhstan. A Turkic contingent is connected with his success, under the spellings Karluk and Qarluq, but the accounts differ on whether those riders defected or began as his allies. His life here is the command and the victory.',
    university:
      'Ziyad ibn Salih is the Abbasid commander named in both accounts at the Battle of Talas. In July 751 his army defeated the Tang force led by Gao Xianzhi, whose name the other account spells Kao Hsien-chih. The ground was the Talas River, near the border of today’s Kyrgyzstan and Kazakhstan. One account calls Ziyad a brilliant tactician and gives him Tibetan and Uighur allies before the battle. The other names him as the Abbasid leader without that praise or that list, so the praise and the list are not required for his life. Karluk or Qarluq riders are part of the victory in both accounts, with an open disagreement about the moment they joined him. The life they share is his command of the Abbasid army and its defeat of the Tang army at Talas.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Talas', publisher: 'Wikipedia' },
    { url: 'https://www.thoughtco.com/the-battle-of-talas-195186', publisher: 'ThoughtCo' },
  ],
};

export const ottoI: EraFigure = {
  id: 'otto_i',
  name: 'Otto I',
  role: 'king',
  country: 'Germany',
  allegiance: 'Germany',
  note: 'Both accounts call him Otto the Great as well as Otto I. One dates Lechfeld to 10 August 955. The other dates it 10–12 August 955. Both place the imperial crowning in 962 after the battle.',
  bio: {
    primary:
      'King Otto I, also called Otto the Great, defeated the Magyars on the Lechfeld in August 955 and was crowned Holy Roman emperor in 962.',
    secondary:
      'Otto ruled the German kingdom when Magyar horsemen struck his lands. At the Battle of Lechfeld, in August 955, his host beat them on a Bavarian plain. One chronicle limits the fighting to 10 August, and another extends it to 12 August. In 962 he received the imperial crown, and each account sets that honour after the victory. He is the king both name as the victor.',
    university:
      'Otto I is the king, called the Great in both accounts, who commanded at Lechfeld in Bavaria during August 955 and defeated the Magyar army there. The day of the fighting is given as 10 August in one account and as 10 to 12 August in the other, so his life is tied to the month, not to one morning. Army strengths are printed, but they do not match, and are omitted. In 962 he was crowned Holy Roman emperor. The longer account says the crown followed from the authority the victory gave him. The shorter account places the crowning later in his story, once Lechfeld was behind him. A report that Hungarian campaigns toward the west then ceased is not in both accounts. The life they share is the kingship, the victory over the Magyars, and the imperial crowning of 962.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Lechfeld', publisher: 'Wikipedia' },
    { url: 'https://www.history.com/articles/forgotten-military-leaders', publisher: 'History.com' },
  ],
};

export const battleOfYarmouk: EraEvent = {
  id: 'battle_of_yarmouk_636',
  date: '0636-08-15',
  precision: 'day',
  title: 'Battle of Yarmouk',
  kind: 'battle',
  fronts: ['anatolia_and_levant'],
  countries: ['Byzantine Empire', 'Arabs'],
  figures: ['khalid_ibn_al_walid', 'heraclius'],
  levels: {
    primary: {
      cause:
        'On 15 August 636 a Byzantine army sent by Emperor Heraclius met an Arab army beside the Yarmouk River, where Syria and Jordan now meet.',
      what:
        'The fighting lasted six days. Khalid ibn al-Walid led the Arabs, and they defeated the larger Byzantine force.',
      consequence:
        'The Arabs were victorious, and Syria passed from Byzantine rule. One telling names the defeated empire Roman and counts Syria among the eastern lands it lost.',
    },
    secondary: {
      cause:
        'Arab soldiers were already in Syria when the imperial court gathered a new host. Heraclius was the emperor behind that muster, and both reports place him at Antioch rather than in the line. Both set the collision on the Yarmouk, along the present frontier of Syria and Jordan, and both open the action on 15 August in the year 636.',
      what:
        'Khalid ibn al-Walid is the Arab commander named in each report. Imperial numbers were greater than his. An early push by that greater host is drawn in only one report, so the push is not treated as the story of the fight. The story they share is a contest of six days that closed with the Arab side holding the ground and the imperial side broken.',
      consequence:
        'Syria did not stay an imperial possession. The compact statement says Byzantine government there ended with the victory. The longer statement speaks of a Roman withdrawal from eastern provinces, naming Syria and also Egypt across later years. Egypt appears only once, and is omitted. The result retained is Arab success and the loss of Syria.',
    },
    university: {
      cause:
        'The engagement called Yarmouk, and also Yarmuk, falls in August 636 and opened on the fifteenth day of that month. Arab fighters stood on one side. Opposite them stood troops of the empire styled Byzantine in one report and Roman in the other, the army of Emperor Heraclius. Both reports place him at Antioch, supervising or staying clear of the field, so he is not described as a man in the ranks. Counts of the armies do not match, and none is repeated. The cause is the meeting of his soldiers and the Arabs beside the river that now forms part of the frontier between Syria and Jordan.',
      what:
        'Wherever the fight is told, Khalid ibn al-Walid commands the Arabs. His opponents were more numerous, and the contest ran for six days instead of ending at the first onset. One report sketches an early imperial breakthrough, a pause, and a later mounted attack that sealed the ways off the plain. The other report splits the same span into successive days without that mounted story. Those movements are not told twice, so they are not offered as the description. What both describe is Khalid’s command, a six-day battle at the river, and the ruin of the imperial army.',
      consequence:
        'Victory lay with the Arabs. Imperial authority in Syria did not outlast the battle. One report says the clash effectively finished that authority. The other folds the loss of Syria into a broader retirement from the east, and it adds Egypt, which is missing from the first report and is therefore dropped. No claim is made about a religious redrawing of the continent, a theme only the longer report pursues. The consequence the pair allow is the beating of the imperial army at the Yarmouk in August 636, and Syria no longer counted as its province.',
    },
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Yarmouk', publisher: 'Wikipedia' },
    { url: 'https://www.thecollector.com/why-is-the-battle-of-yarmouk-so-important/', publisher: 'TheCollector' },
  ],
  note: 'Both accounts open the battle on 15 August 636 and say it lasted six days. One also prints the span 15–20 August. Both place Emperor Heraclius at Antioch, not in the ranks, and both name Khalid ibn al-Walid on the Arab side. One calls the empire Roman and the other Byzantine. Troop figures are not the same in both. Egypt is named among later losses in only one.',
};

export const battleOfBrunanburh: EraEvent = {
  id: 'battle_of_brunanburh_937',
  date: '0937',
  precision: 'year',
  title: 'Battle of Brunanburh',
  kind: 'battle',
  fronts: ['british_isles'],
  countries: ['England', 'Scotland', 'Strathclyde', 'Dublin'],
  figures: ['athelstan', 'edmund', 'constantine_ii', 'owain_of_strathclyde', 'olaf_of_dublin'],
  levels: {
    primary: {
      cause:
        'In 937 King Æthelstan, also called Athelstan, faced Constantine II of Scotland, Owain of Strathclyde, and Olaf of Dublin.',
      what:
        'The armies met at Brunanburh. Æthelstan and his brother Edmund led the English, and the coalition was defeated.',
      consequence:
        'The victory was Æthelstan’s. The coalition he faced at Brunanburh did not overthrow his rule in England.',
    },
    secondary: {
      cause:
        'Enemies combined to check Æthelstan after his power had reached towards the north. Constantine II stood for the Scots, Owain for Strathclyde, and Olaf for Dublin. One spelling of Olaf’s name is Guthfrithson, and the other is Guthfrithsson. A month of August is attached, in a single record, to a sailing from Dublin, so no month is used. The cause both records give is that alliance, drawn up against the English king in 937.',
      what:
        'Brunanburh is the name of the fight in both records. Edmund, brother of the king, is set beside him in the host that won. One record calls that host West Saxon and Mercian, and the other speaks of the king and the prince together. The labels differ, so the host is simply theirs. One record calls the fighting savage, and the other calls a fierce struggle lasting through the day. The shared event is their defeat of the coalition.',
      consequence:
        'Æthelstan prevailed, and the allied attack failed. A tale of five young kings slain, among them a son of Constantine, is marked in one record as what people said, not as a fixed total, so no death count is given. Neither record supplies a matching number of soldiers. The result kept is the English success of 937, and the failure of Olaf, Constantine, and Owain.',
    },
    university: {
      cause:
        'The battle of 937 brought the English king, written Æthelstan and also Athelstan, against a joint enemy. Scotland’s Constantine II, Strathclyde’s Owain, and Dublin’s Olaf entered that alliance, the Dublin leader’s name taking an extra s in one printing. Why they combined is told with different emphasis. One side stresses a bid to hold the king at bay after advances into the north. The other side stresses a pact formed once it seemed he could be beaten only by several foes at once. Those motives are not the same sentence, so the cause stays with the pact itself and with the year.',
      what:
        'On the field called Brunanburh the king and his brother Edmund commanded the side that won. Finer names for their followers, West Saxons and Mercians in one telling, are absent from the other, and are not insisted on. The struggle is described as savage, or as fierce and day-long, but the blows are not itemised in both places. A modern town is likewise unstable. One telling prints Bromborough on the Wirral, and the other says the site remains uncertain, so no town is stated. The action both support is the defeat of the allied kings by Æthelstan and Edmund.',
      consequence:
        'The coalition lost, and the English king’s victory stood. Claims that the day forged a national identity, or that it was the greatest Saxon triumph ever won, appear in single tellings and are not repeated as fact. Casualty talk of several kings and earls is hedged or poetic, and is omitted, as are any figures for the armies. What remains after those extras fall away is a completed battle in 937, won by Æthelstan, in which Constantine, Owain, and Olaf did not gain the overthrow they had sought.',
    },
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Brunanburh', publisher: 'Wikipedia' },
    { url: 'https://www.encyclopedia.com/history/modern-europe/british-and-irish-history/battle-brunanburh', publisher: 'Encyclopedia.com' },
  ],
  note: 'Both accounts date the battle to 937 and name Æthelstan, also spelled Athelstan, with his brother Edmund, against Constantine II of Scotland, Owain of Strathclyde, and Olaf of Dublin. One spells that Dublin king Guthfrithson and the other Guthfrithsson. One places the field at Bromborough on the Wirral. The other says the site remains uncertain. A claim that five kings were killed is marked as something said, in only one account.',
};

export const battleOfBachDang: EraEvent = {
  id: 'battle_of_bach_dang_938',
  date: '0938',
  precision: 'year',
  title: 'Battle of Bạch Đằng',
  kind: 'battle',
  fronts: ['asia'],
  countries: ['Vietnam', 'China'],
  figures: ['ngo_quyen'],
  levels: {
    primary: {
      cause:
        'In 938 Ngô Quyền, also spelled Ngo Quyen, faced a Chinese force at the Bạch Đằng River in Vietnam.',
      what:
        'He commanded the defenders and defeated the Chinese on that river. One record calls the losers the Southern Han.',
      consequence:
        'Chinese rule in that part of Vietnam ended with his victory. One record says he then proclaimed an independent Vietnam.',
    },
    secondary: {
      cause:
        'A Chinese force stood against the Vietnamese leader whose name is also written Ngo Quyen. The water named for the meeting is the Bach Dang, printed Bạch Đằng in the longer record, and that record places it in the north of Vietnam. It dates the clash to late 938, and its dated line says December, while the shorter record gives the year alone. The year 938 is the date used. A bay called Hạ Long is named only once, and stays out.',
      what:
        'Ngô Quyền led his own men, and he beat the Chinese beside the river. The shorter record calls this the Battle of Bach Dang River and stops at the defeat. The longer record adds a naval character, and it names the Southern Han as the Chinese state involved. Those extras are not in both, so they are not the description. The description they share is his victory over the Chinese force at the river in 938.',
      consequence:
        'Government of the country by the Chinese did not survive the success. The shorter record has him proclaim an independent Vietnam. The longer record says he closed an era of Chinese domination, and it calls the success a turning point, a judgement the shorter record does not make. What they share is the Chinese defeat and the end of Chinese rule there.',
    },
    university: {
      cause:
        'The river battle of 938 set Ngô Quyền, the form Ngo Quyen beside it, against soldiers described in both places as Chinese. He is a Vietnamese leader in the shorter place and a Viet lord of a local domain in the longer one, so the local title is not required for the cause. Nor is the month. Late in the year, and December on a dated line, occur in a single place, while the other place prints 938 and nothing finer. A northern bay is likewise single. The cause retained is the meeting with a Chinese force at the Bach Dang, or Bạch Đằng, River during that year.',
      what:
        'Command of the defenders rested with Ngô Quyền, and the Chinese were defeated. One place identifies their polity as the Southern Han and treats the action as a fight on the water. The other place does not name that polity or that element, and it does not need them. Strengths and losses are printed in one place only, and are omitted. The course both places describe is simple: his force won at the river against the Chinese who had come against him.',
      consequence:
        'The Chinese hold on the country ended. Independence is the word of the shorter place, which says he proclaimed an independent Vietnam. The longer place says the victory put an end to a long spell of Chinese domination and treats the day as a turning point in Vietnamese history. The proclamation, the named era, and the turning point are not all in both, so they are not all asserted. The consequence asserted is the one they both allow: after Bạch Đằng, Chinese rule in that land was finished.',
    },
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_B%E1%BA%A1ch_%C4%90%E1%BA%B1ng_(938)', publisher: 'Wikipedia' },
    { url: 'https://www.encyclopedia.com/history/news-wires-white-papers-and-books/chapter-one-world-events-selected-occurrences-outside-imperial-china', publisher: 'Encyclopedia.com' },
  ],
  note: 'Both accounts date the battle to 938 and say Ngô Quyền, also spelled Ngo Quyen, defeated a Chinese force at the Bạch Đằng River, also written Bach Dang, and that Chinese rule there ended. One account says late 938, and December on its dated line, calls the enemy the Southern Han, and describes a naval battle. The other says he proclaimed an independent Vietnam.',
};

export const khalidIbnAlWalid: EraFigure = {
  id: 'khalid_ibn_al_walid',
  name: 'Khalid ibn al-Walid',
  role: 'commander',
  country: 'Arabs',
  allegiance: 'Arabs',
  note: 'Both accounts name him as the Arab commander at the Yarmouk in August 636 and say the fight lasted six days. Both place Heraclius at Antioch. One calls the defeated army Roman and the other Byzantine.',
  bio: {
    primary:
      'Khalid ibn al-Walid led the Arab army that defeated Emperor Heraclius’s larger Byzantine force at the Yarmouk River in August 636, after six days of fighting.',
    secondary:
      'Khalid ibn al-Walid is the Arab commander named for the Yarmouk, where Syria and Jordan now meet. In August 636 his host beat the imperial soldiers of Emperor Heraclius, a host one report calls Roman and the other Byzantine. Heraclius himself was at Antioch, not in the line. The life they share is Khalid’s command and the six-day victory.',
    university:
      'The Arab leader at the river battle of August 636 is Khalid ibn al-Walid, and both reports give him command against the larger army of Emperor Heraclius. That army is Byzantine in one report and Roman in the other, two styles for the same empire. Heraclius remained at Antioch, so Khalid’s opponent on the ground was the imperial host rather than the emperor in person. Army totals do not agree and are omitted. What the two reports give him is command of the Arabs, a fight of six days from 15 August, and the defeat that cost the empire Syria.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Yarmouk', publisher: 'Wikipedia' },
    { url: 'https://www.thecollector.com/why-is-the-battle-of-yarmouk-so-important/', publisher: 'TheCollector' },
  ],
};

export const athelstan: EraFigure = {
  id: 'athelstan',
  name: 'Æthelstan',
  role: 'king',
  country: 'England',
  allegiance: 'England',
  note: 'One account spells him Æthelstan and the other Athelstan. Both place his victory at Brunanburh in 937, with his brother Edmund, over Constantine II, Owain, and Olaf. The site is Bromborough in one account and uncertain in the other.',
  bio: {
    primary:
      'Æthelstan, also called Athelstan, was the English king who in 937, with his brother Edmund, defeated the coalition of Constantine, Owain, and Olaf at Brunanburh.',
    secondary:
      'Æthelstan ruled in England when Constantine II of Scotland, Owain of Strathclyde, and Olaf of Dublin combined against him. At Brunanburh in 937 he and Edmund won. One record spells the Dublin king Guthfrithson, and another Guthfrithsson. The field’s modern town is not stable, one record offering Bromborough and the other leaving the site uncertain, so his life is tied to the battle’s name and the year, not to a map point.',
    university:
      'The king written Æthelstan, and Athelstan in the other printing, met a triple alliance at Brunanburh in 937 and defeated it. Constantine II, Owain, and Olaf are the allied leaders both printings name, with Olaf’s byname varying by a letter. Edmund, his brother, stood with him in the host that won. Praise that makes the day the summit of the reign, or that makes it the birth of an English nation, is each confined to one printing and is not part of the life. Nor is a burial place or a count of the dead. The life they share is the kingship, the brother beside him, and the victory over that alliance.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Brunanburh', publisher: 'Wikipedia' },
    { url: 'https://www.encyclopedia.com/history/modern-europe/british-and-irish-history/battle-brunanburh', publisher: 'Encyclopedia.com' },
  ],
};

export const ngoQuyen: EraFigure = {
  id: 'ngo_quyen',
  name: 'Ngô Quyền',
  role: 'ruler',
  country: 'Vietnam',
  allegiance: 'Vietnam',
  note: 'One account spells him Ngô Quyền and the other Ngo Quyen. Both say he defeated the Chinese at the Bach Dang, or Bạch Đằng, River in 938 and that Chinese rule ended. Southern Han, a naval fight, and December are in only one.',
  bio: {
    primary:
      'Ngô Quyền, also spelled Ngo Quyen, defeated a Chinese force at the Bạch Đằng River in 938, and Chinese rule in that part of Vietnam ended.',
    secondary:
      'Ngô Quyền is the Vietnamese leader who beat the Chinese at the Bach Dang River in 938. The longer spelling of the water is Bạch Đằng, and the shorter form of his name is Ngo Quyen. One record alone calls the defeated state the Southern Han and dates the fight to late 938, so the life uses the year and the Chinese defeat. It also records that Chinese domination of the country finished with him.',
    university:
      'The victor at the river in 938 is named Ngô Quyền and also Ngo Quyen. Both accounts make him the leader who defeated a Chinese force there, and both tie that defeat to the end of Chinese rule, whether by a proclamation of an independent Vietnam or by the close of a long domination. A naval setting, the Southern Han, a December date, and a northern bay appear in one account and are omitted. No army totals are shared. The life retained is his command in 938, the victory at Bạch Đằng, and the finish of Chinese government in that land.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_B%E1%BA%A1ch_%C4%90%E1%BA%B1ng_(938)', publisher: 'Wikipedia' },
    { url: 'https://www.encyclopedia.com/history/news-wires-white-papers-and-books/chapter-one-world-events-selected-occurrences-outside-imperial-china', publisher: 'Encyclopedia.com' },
  ],
};

export const heraclius: EraFigure = {
  id: 'heraclius',
  name: 'Heraclius',
  role: 'emperor',
  country: 'Byzantine Empire',
  allegiance: 'Byzantine Empire',
  note: 'Both accounts place him at Antioch during the Yarmouk, not in the ranks, and both date the battle to August 636 with six days of fighting. One calls the defeated army Roman and the other Byzantine. One says he was unable to fight and names Theodore and Vahan. The other says he supervised the expedition from Antioch.',
  bio: {
    primary:
      'Emperor Heraclius stayed at Antioch while Khalid ibn al-Walid’s Arabs defeated his army at the Yarmouk in August 636, after six days of fighting.',
    secondary:
      'Heraclius was the emperor behind the host that met the Arabs beside the river now lying on the frontier of Syria and Jordan. Both reports leave him in Antioch and keep him off the field itself. Command of the Arabs rested with Khalid ibn al-Walid. The struggle ran for six days from the middle of August 636 and ended in an Arab success, and Syria ceased to be an imperial possession. One report calls that empire Roman. The other calls it Byzantine.',
    university:
      'The imperial ruler named for the river battle of 636 is Heraclius, and both reports place him at Antioch while the fighting went on, so he is not described as a man standing in the line. Khalid ibn al-Walid commanded the Arabs opposite the larger imperial host. The opening day is the fifteenth of August, and the contest lasted six days. One report says Heraclius was unable to fight and names two generals, Theodore and Vahan, as the men who held the command on the ground. The other says he supervised the expedition from Antioch and does not name those generals, so the life does not assign the field command to them. Troop totals disagree and are omitted. What both reports give him is the imperial rank, a station at Antioch, and the defeat that cost his government Syria.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Yarmouk', publisher: 'Wikipedia' },
    { url: 'https://www.thecollector.com/why-is-the-battle-of-yarmouk-so-important/', publisher: 'TheCollector' },
  ],
};

export const edmund: EraFigure = {
  id: 'edmund',
  name: 'Edmund',
  role: 'commander',
  country: 'England',
  allegiance: 'England',
  note: 'Both accounts name him with Æthelstan, also spelled Athelstan, at Brunanburh in 937, on the side that won. One calls him the king’s brother. The other names his army beside Æthelstan and does not use that kinship word.',
  bio: {
    primary:
      'Edmund is named with King Æthelstan, also called Athelstan, in the English host that defeated Constantine, Owain, and Olaf at Brunanburh in 937.',
    secondary:
      'At Brunanburh in 937 Edmund appears beside Æthelstan, the English king whose name is also printed Athelstan. The enemies were Constantine II of Scotland, Owain of Strathclyde, and Olaf of Dublin. One printing of Olaf’s byname is Guthfrithson and the other is Guthfrithsson. The English host won. One account alone calls Edmund the king’s brother, so that kinship is not treated as settled here. The life they share is his place in the winning host and the year of the battle.',
    university:
      'Edmund is the man both accounts set with the English king at Brunanburh in 937, written Æthelstan in one and Athelstan in the other. The coalition they faced was Constantine II, Owain, and Olaf, the Dublin leader’s byname differing by a letter. The English side prevailed. A kinship word, brother, is printed in only one account, and a verse there calls the pair king and prince, so neither title for Edmund is required. West Saxons and Mercians are named for their followers in only one account. A count of slain kings is marked as something said, and the modern town of the field is Bromborough in one account and uncertain in the other. Those extras fall away. What remains is Edmund’s presence with the king in the host that won.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Brunanburh', publisher: 'Wikipedia' },
    { url: 'https://www.encyclopedia.com/history/modern-europe/british-and-irish-history/battle-brunanburh', publisher: 'Encyclopedia.com' },
  ],
};

export const constantineIi: EraFigure = {
  id: 'constantine_ii',
  name: 'Constantine II',
  role: 'king',
  country: 'Scotland',
  allegiance: 'Scotland',
  note: 'Both accounts name him king of Scotland in the coalition with Owain of Strathclyde and Olaf of Dublin that Æthelstan, also spelled Athelstan, defeated at Brunanburh in 937. A report that his son was killed is marked as something said, in only one account.',
  bio: {
    primary:
      'Constantine II, king of Scotland, joined Owain of Strathclyde and Olaf of Dublin against Æthelstan at Brunanburh in 937, and the coalition was defeated.',
    secondary:
      'Constantine II ruled in Scotland when he entered an alliance with Owain of Strathclyde and with Olaf, the king from Dublin, against the English king Æthelstan, also called Athelstan. The fight was Brunanburh, in 937. Olaf’s byname is Guthfrithson in one account and Guthfrithsson in the other. The alliance lost. A tale that a son of Constantine was killed is marked as what people said, not as a fixed fact, so no death is stated. His life here is the Scottish kingship, the alliance, and the defeat.',
    university:
      'The Scottish king at Brunanburh in 937 is Constantine II. Both accounts place him in the coalition with Owain of Strathclyde and with Olaf of Dublin, whose byname gains a letter in one printing, and both record that Æthelstan, also written Athelstan, defeated that coalition. Edmund is named on the English side beside the king. Motives for the alliance are not told in the same words, one stressing a check upon northern advances and the other a pact formed because several foes were needed, so the cause stays with the pact and the year. A report that five young kings died, among them a son of Constantine, is hedged as something said and is omitted. The field’s modern town is likewise unstable. The life retained is his kingship in Scotland, his part in the alliance, and the loss at Brunanburh.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Brunanburh', publisher: 'Wikipedia' },
    { url: 'https://www.encyclopedia.com/history/modern-europe/british-and-irish-history/battle-brunanburh', publisher: 'Encyclopedia.com' },
  ],
};

export const owainOfStrathclyde: EraFigure = {
  id: 'owain_of_strathclyde',
  name: 'Owain',
  role: 'king',
  country: 'Strathclyde',
  allegiance: 'Strathclyde',
  note: 'Both accounts call him Owain of Strathclyde and place him with Constantine II and Olaf of Dublin in the alliance Æthelstan defeated at Brunanburh in 937. One account also writes Owen.',
  bio: {
    primary:
      'Owain, king of Strathclyde, joined Constantine II of Scotland and Olaf of Dublin against Æthelstan at Brunanburh in 937, and the allied attack failed.',
    secondary:
      'Owain led Strathclyde in the coalition that faced the English king at Brunanburh in 937. Constantine II stood for Scotland, and Olaf, also called by a patronymic that ends in one s or two, stood for Dublin. The English king is Æthelstan in one spelling and Athelstan in the other. Their attack did not overthrow him. One later sentence in a single account writes the Strathclyde king as Owen, so this life keeps the form Owain, which both accounts use for him. No separate fate after the defeat is given in both.',
    university:
      'The Strathclyde king named for the battle of 937 is Owain. Both accounts set him with Constantine II of Scotland and with Olaf of Dublin in the alliance that Æthelstan, also printed Athelstan, defeated at Brunanburh. A second spelling, Owen, appears in one account beside Owain, and is not required. Edmund is named with the English king in the host that won. Nothing stable is said about where the field lay: one account offers Bromborough on the Wirral, and the other says the site remains uncertain, so no town is stated. Casualty lists and army strengths are likewise single or poetic. What both accounts allow is his kingship in Strathclyde, his place in the losing alliance, and the English victory of that year.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Brunanburh', publisher: 'Wikipedia' },
    { url: 'https://www.encyclopedia.com/history/modern-europe/british-and-irish-history/battle-brunanburh', publisher: 'Encyclopedia.com' },
  ],
};

export const olafOfDublin: EraFigure = {
  id: 'olaf_of_dublin',
  name: 'Olaf',
  role: 'king',
  country: 'Dublin',
  allegiance: 'Dublin',
  note: 'One account spells his byname Guthfrithson and the other Guthfrithsson. Both place him, with Constantine II and Owain, in the alliance defeated at Brunanburh in 937. A sailing from Dublin in August is in only one account.',
  bio: {
    primary:
      'Olaf of Dublin joined Constantine II of Scotland and Owain of Strathclyde against Æthelstan at Brunanburh in 937, and the coalition he entered was defeated.',
    secondary:
      'Olaf came from Dublin into the alliance that fought Æthelstan, also called Athelstan, at Brunanburh in 937. Constantine II of Scotland and Owain of Strathclyde were the other allied kings both accounts name. One account spells the Dublin king’s byname Guthfrithson. The other spells it Guthfrithsson. The alliance failed. A voyage from Dublin in a stated month, and a landing on the Humber, are not affirmed in both accounts, so his life is tied to Dublin, the year, and the defeat rather than to a route.',
    university:
      'The Dublin king at Brunanburh in 937 is Olaf, and both accounts place him with Constantine II and Owain against the English king written Æthelstan and also Athelstan. The patronymic is Guthfrithson in one printing and Guthfrithsson in the other. Edmund stood with the English king in the host that won, and the coalition did not gain the overthrow it sought. One account says Olaf sailed from Dublin in August. The other mentions a Dublin fleet on the Humber only as a possibility, and it says the site of the battle remains uncertain, so no sailing and no river mouth enter this life. Praise of the victory as a national beginning is confined to single tellings. The life they share is the Dublin kingship, the alliance, and the defeat in 937.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Brunanburh', publisher: 'Wikipedia' },
    { url: 'https://www.encyclopedia.com/history/modern-europe/british-and-irish-history/battle-brunanburh', publisher: 'Encyclopedia.com' },
  ],
};


export const battleOfGuadalete: EraEvent = {
  id: 'battle_of_guadalete_711',
  date: '0711-07',
  precision: 'month',
  title: 'Battle of Guadalete',
  kind: 'battle',
  fronts: ['iberia'],
  countries: ['Visigoths', 'Berbers'],
  figures: ['tariq_ibn_ziyad', 'roderic'],
  levels: {
    primary: {
      cause:
        'In July 711 Tariq ibn Ziyad led Berber invaders from North Africa into Spain against Roderic, also written Roderick, and the Visigoths.',
      what:
        'The Battle of Guadalete was fought in Spain that July. Tariq’s force defeated Roderic and the Visigoths.',
      consequence:
        'The Visigoths were defeated. One account ends their kingdom with the battle, and the other looks onward to a capital taken later, so only the defeat is kept.',
    },
    secondary: {
      cause:
        'A call for help from North Africa brought Tariq ibn Ziyad into Spain in July 711. He is a Berber general in the shorter record and the commander of a mainly Berber force in the longer one. Opposite him stood Roderic, spelled Roderick in the shorter record, with the Visigoths. A numbered day inside July is printed once, so the month and the year are the date. The cause both records give is that invasion and that meeting.',
      what:
        'Guadalete is the name of the fight in both records, and Spain is the country. Tariq’s invaders defeated Roderic and the Visigothic host. The shorter record calls the water a river and stops at the defeat. The longer record says the spot in the south is unidentified, and it adds Arabs beside the Berbers. The river, the unnamed spot, and the Arabs are not in both, so they are not the description. The description they share is Tariq’s victory over the Visigoths.',
      consequence:
        'Roderic and the Visigoths lost. The shorter record says their kingdom collapsed and that Muslim power afterwards reached the mountains. The longer record says the king was killed and that the capital could then be taken, and it treats the day as the start of a new realm in the peninsula. Those sequels are each single. The result kept is the Visigothic defeat at Guadalete in July 711.',
    },
    university: {
      cause:
        'The Iberian battle of July 711 set Tariq ibn Ziyad against the Visigoths gathered with Roderic, whose name is also printed Roderick. Tariq’s people are Berbers in both narratives, and the shorter one gives him the rank of general. The longer one says the host was mainly Berber and adds some Arabs, a mixture the shorter narrative does not state. North Africa is the quarter from which the shorter narrative has him invade, and from which the longer narrative has earlier raids come. A day of the month is confined to the shorter narrative. A ducal title dated to the previous year is likewise single. The cause retained is the July meeting in Spain between Tariq’s Berber invasion and Roderic’s Visigoths.',
      what:
        'Wherever the fight is told, Tariq commands the invaders and they beat Roderic’s Visigoths at the battle named Guadalete. The shorter narrative identifies a river in the name and does not locate a town. The longer narrative refuses a precise spot and says only that the ground lay in the south of Spain. Those geographies are not the same sentence, so no town and no river are required. Strengths of the armies are printed in the longer narrative alone and are omitted. The course both narratives describe is his victory over that Visigothic host in July 711.',
      consequence:
        'The Visigothic side was beaten, and that is the result both narratives allow. Collapse of the kingdom, a march onward to the mountains, the death of Roderic, the fall of a capital, and the opening of a successor realm are each told once. They are not asserted together. No troop totals are shared, and none is repeated. What remains after those sequels fall away is a finished battle in July 711, won by Tariq ibn Ziyad, in which Roderic and the Visigoths did not hold Spain against him.',
    },
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Guadalete', publisher: 'Wikipedia' },
    { url: 'https://www.encyclopedia.com/history/news-wires-white-papers-and-books/chapter-one-world-events-selected-occurrences-outside-muslim-world', publisher: 'Encyclopedia.com' },
  ],
  note: 'Both accounts place the battle in July 711 and say Tariq ibn Ziyad defeated Roderic, also spelled Roderick, and the Visigoths in Spain. One gives 19 July, calls Tariq a Berber general, and says the Visigothic kingdom collapsed. The other calls Roderic king, says he was killed, and places the field at an unidentified spot in southern Spain. The chronology calls him Duke of Baetica in 710.',
};

export const battleOfFontenoy: EraEvent = {
  id: 'battle_of_fontenoy_841',
  date: '0841',
  precision: 'year',
  title: 'Battle of Fontenoy',
  kind: 'battle',
  fronts: ['france_and_low_countries'],
  countries: ['Franks'],
  figures: ['lothair_i', 'charles_the_bald', 'louis_the_german'],
  levels: {
    primary: {
      cause:
        'In 841 Lothair, also written Lothar, fought Charles the Bald and Louis the German, his brothers, at Fontenoy.',
      what:
        'The brothers defeated Lothair. One account numbers them Louis II and Charles II, and the other uses the bynames the German and the Bald.',
      consequence:
        'Lothair’s defeat left their war unfinished. The Treaty of Verdun followed, later than the year of Fontenoy.',
    },
    secondary: {
      cause:
        'Fontenoy, in 841, was a battle among sons of the Frankish house. The eldest is Lothair in one record and Lothar in the other. Charles stands against him, called the Bald or numbered II. Louis stands with Charles, called the German or given that numeral. A calendar day is printed in a single record and is not the date used. The cause the records share is the brothers’ meeting at that place in that year.',
      what:
        'Charles and Louis won, and Lothair lost. The shorter record says the brothers defeated him and names Fontenoy. The longer record calls the same outcome a victory for Charles and Louis, and it adds that the fighting did not end with the day. A companion, Pepin of Aquitaine, is placed beside Lothair in the longer record only. The action both records describe is the defeat of Lothair by those two.',
      consequence:
        'The battle did not take the place of a settlement. Both records carry the quarrel on to the Treaty of Verdun. One says hostility continued after the fighting. The other dates a treaty of that name to a later year and divides lands among the three. The later year and the division are single, so they are not the result. What remains is Lothair beaten in 841, with Verdun still ahead.',
    },
    university: {
      cause:
        'The collision called Fontenoy falls in 841 and set the senior sibling against the other two. His name is printed Lothair and also Lothar. Charles is marked by the epithet Bald or by the numeral II. Louis is marked by the epithet German or by that same numeral. Motives are not told twice in one form. The shorter narrative states the defeat and the year. The longer narrative spends its opening on marches, a camp, and a refused partition, none of which the shorter narrative contains, so those preliminaries are not the cause. A numbered day is likewise confined to the longer narrative. An ally named beside Lothair there is missing from the shorter narrative and is omitted. The cause retained is the siblings’ battle at Fontenoy in 841.',
      what:
        'Command of the winning side rests, in both narratives, with Charles and with Louis, and the beaten leader is Lothair. The longer narrative calls their success incomplete, because the war went on, while the shorter narrative stops at the defeat itself. Neither difference changes who prevailed. A district beside the place-name, and an older spelling of Fontenoy, occur in the longer narrative alone and are not stated. Troop numbers are absent from both. The course they share is a completed fight in 841 in which those two defeated Lothair.',
      consequence:
        'Beating Lothair did not finish the quarrel among the siblings. The settlement named afterwards, in both narratives, is the Treaty of Verdun. One narrative measures a gap after the fighting and does not print a year for the treaty. The other attaches a year to that treaty and parcels the Frankish lands among the three sons. The gap, the treaty’s year, and the parcels are not all present twice, so none of them is asserted. No claim is offered that Fontenoy fixed a language frontier or a national border. The consequence allowed is Lothair’s defeat in 841, and a treaty of Verdun that still lay ahead.',
    },
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Fontenoy_(841)', publisher: 'Wikipedia' },
    { url: 'https://www.encyclopedia.com/history/news-wires-white-papers-and-books/chapter-one-world-events-selected-occurrences-outside-muslim-world', publisher: 'Encyclopedia.com' },
  ],
  note: 'Both accounts date the battle to 841 and say Lothair, also spelled Lothar, was defeated by Charles the Bald, also Charles II, and Louis the German, also Louis II. One gives 25 June, names Pepin II of Aquitaine beside Lothair, places the field in the Yonne, and says the victory was not decisive. The other dates the Treaty of Verdun to 843.',
};

export const battleOfAndernach: EraEvent = {
  id: 'battle_of_andernach_876',
  date: '0876-10-08',
  precision: 'day',
  title: 'Battle of Andernach',
  kind: 'battle',
  fronts: ['german_lands'],
  countries: ['Franks'],
  figures: ['louis_the_younger', 'charles_the_bald'],
  levels: {
    primary: {
      cause:
        'On 8 October 876 Louis the Younger, also called Louis III, met his uncle Charles the Bald, also called Charles II, at Andernach.',
      what:
        'Louis defeated Charles at Andernach. The day and the nephew’s victory over his uncle are in both accounts.',
      consequence:
        'Charles lost. Louis the German, father of the victor, was already dead. The month of that death is given in only one account.',
    },
    secondary: {
      cause:
        'After Louis the German died, his son Louis, called the Younger and also Louis III, faced Charles, called the Bald and also Charles II. The meeting both records date is 8 October 876, and the place both name is Andernach. Charles was the uncle, and Louis the nephew. A village southeast of the town is named in a single record, so no village is used. The cause they share is that October meeting of uncle and nephew.',
      what:
        'Louis won and Charles was beaten. The shorter record says the son defeated his uncle and gives the day. The longer record calls Louis the East Frankish king and Charles the West Frankish king, and it sets the ground near a village. Those royal styles and that village are not in both, so the host is simply theirs and the place is Andernach. The shared event is the nephew’s defeat of his uncle on that day.',
      consequence:
        'Charles’s attempt on the lands of the dead Louis the German failed at Andernach. One record dates the father’s death more finely than the year and does not call the fight decisive. The other omits that finer date and calls the success decisive, then sends Charles away after the day. The finer date, the praise, and the departure are single. The result kept is Charles beaten by his nephew on 8 October 876.',
    },
    university: {
      cause:
        'The engagement of 8 October 876 brought Louis, printed the Younger and also as Louis III, against his uncle Charles, printed the Bald and also as Charles II. Both narratives place it at Andernach, and both set it after the death of Louis the German, the father of the younger Louis. The month of that death is named in the shorter narrative and unnamed in the longer one, so no month is stated for it. A nearby hamlet appears in the longer narrative only. Why Charles had come is told with different emphasis, one stressing a failed grab at the dead father’s territory and the other an eastward push. Those motives are not the same sentence. The cause retained is the uncle and the nephew at Andernach on that October day.',
      what:
        'On the field called Andernach the nephew commanded the side that won, and the uncle was defeated. Finer names for their kingdoms, East Frankish and West Frankish, are in the longer narrative and absent from the shorter, and are not insisted on. The struggle is not given blow by blow in both places. A modern village is likewise unstable, present once, so no hamlet is stated. Army strengths are not supplied in matching figures. The action both narratives support is the defeat of Charles by Louis the Younger on 8 October 876.',
      consequence:
        'The uncle lost, and the nephew’s victory stood. A claim that the day was decisive, a departure after the fighting, and a count of the fallen appear in the longer narrative and are omitted. The shorter narrative’s finer date for Louis the German’s death is likewise single and is dropped. Nothing stable is said about a hamlet. What remains is a completed battle on 8 October 876, won by Louis the Younger, in which Charles the Bald did not take the eastern lands he had come against.',
    },
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Andernach_(876)', publisher: 'Wikipedia' },
    { url: 'https://www.encyclopedia.com/history/news-wires-white-papers-and-books/chapter-one-world-events-selected-occurrences-outside-muslim-world', publisher: 'Encyclopedia.com' },
  ],
  note: 'Both accounts date the battle to 8 October 876 and say Louis the Younger, also Louis III, defeated his uncle Charles the Bald, also Charles II, at Andernach, after Louis the German had died. One account says that death fell in August and does not name a village. The other places the field near Kettig, southeast of Andernach, and calls the victory decisive.',
};

export const tariqIbnZiyad: EraFigure = {
  id: 'tariq_ibn_ziyad',
  name: 'Tariq ibn Ziyad',
  role: 'commander',
  country: 'Berbers',
  allegiance: 'Berbers',
  note: 'Both accounts say he defeated Roderic, also spelled Roderick, and the Visigoths at Guadalete in Spain in July 711. One calls him a Berber general and gives 19 July. The other says his force was mainly Berber, with some Arabs, and that Roderic was killed.',
  bio: {
    primary:
      'Tariq ibn Ziyad led the Berber force that defeated Roderic, also written Roderick, and the Visigoths at Guadalete in Spain in July 711.',
    secondary:
      'Tariq ibn Ziyad is the commander who beat the Visigoths at Guadalete in July 711. Roderic, spelled Roderick in one record, led the side that lost. One record calls Tariq a Berber general and dates a day inside July. The other says the host was mainly Berber and adds Arabs, and it leaves the southern spot unnamed. His life here is the command, the month, and the victory in Spain.',
    university:
      'The invader who won at Guadalete in July 711 is Tariq ibn Ziyad. Both narratives make him the leader against Roderic, also printed Roderick, and against the Visigoths, and both place that victory in Spain. Berber is the word they share for his people. The shorter narrative adds the rank of general, a river in the battle’s name, and a day of the month. The longer narrative adds a mixed host, an unnamed southern field, and the death of the Visigothic leader. Those extras are omitted. North Africa is the direction of the invasion in the shorter narrative. The life retained is his command of the Berber invasion, the July victory, and the defeat of Roderic’s Visigoths.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Guadalete', publisher: 'Wikipedia' },
    { url: 'https://www.encyclopedia.com/history/news-wires-white-papers-and-books/chapter-one-world-events-selected-occurrences-outside-muslim-world', publisher: 'Encyclopedia.com' },
  ],
};

export const roderic: EraFigure = {
  id: 'roderic',
  name: 'Roderic',
  role: 'commander',
  country: 'Visigoths',
  allegiance: 'Visigoths',
  note: 'One account spells him Roderic and calls him king. The other spells him Roderick, calls him Duke of Baetica when he claimed the throne in 710, and says Tariq ibn Ziyad defeated him and the Visigoths at Guadalete on 19 July 711. His death is in only one account.',
  bio: {
    primary:
      'Roderic, also written Roderick, led the Visigoths whom Tariq ibn Ziyad defeated at the Battle of Guadalete in Spain in July 711.',
    secondary:
      'Roderic is the Visigothic leader beaten at Guadalete in July 711. Tariq ibn Ziyad commanded the invaders who defeated him. One record spells the Visigoth Roderick and calls him a duke who had claimed the throne the year before. The other spells him Roderic and calls him king, and it says he was killed. The royal title, the ducal title, and the death are not all in both. The life they share is his place with the Visigoths and the defeat.',
    university:
      'The Visigothic leader at Guadalete in July 711 is named Roderic and also Roderick. Both narratives set him against Tariq ibn Ziyad and record that Tariq’s force won. One narrative, under the previous year, calls him Duke of Baetica and says he claimed the throne. The other calls him king on the day and says he died there. A collapsed kingdom and an unnamed southern field are likewise single. No army total is shared. The life retained is his command of the Visigoths in Spain, the July battle, and the loss to Tariq.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Guadalete', publisher: 'Wikipedia' },
    { url: 'https://www.encyclopedia.com/history/news-wires-white-papers-and-books/chapter-one-world-events-selected-occurrences-outside-muslim-world', publisher: 'Encyclopedia.com' },
  ],
};

export const lothairI: EraFigure = {
  id: 'lothair_i',
  name: 'Lothair',
  role: 'commander',
  country: 'Franks',
  allegiance: 'Franks',
  note: 'One account spells him Lothair and the other Lothar. Both say his brothers Charles the Bald and Louis the German defeated him at Fontenoy in 841, and that the Treaty of Verdun followed. A day in June, Pepin of Aquitaine, and the title king of Italy are in only one account.',
  bio: {
    primary:
      'Lothair, also written Lothar, was defeated by his brothers Charles the Bald and Louis the German at Fontenoy in 841. The Treaty of Verdun followed.',
    secondary:
      'Lothair is the brother who lost at Fontenoy in 841. One record spells him Lothar and numbers the victors Louis II and Charles II. The other spells him Lothair and uses the bynames the German and the Bald. A calendar day, and a companion named Pepin, occur in a single record. His life here is the defeat by those brothers, the year, and the later Treaty of Verdun.',
    university:
      'The senior brother beaten at Fontenoy in 841 is the man printed Lothair and also Lothar. Both narratives give the victory to Charles, called the Bald or Charles II, and to Louis, called the German or Louis II, and both carry the quarrel forward to the Treaty of Verdun. A numbered day, an Aquitanian ally, and an Italian title are confined to the longer narrative, so none of them enters this life. Nor does a later year for the treaty, which the shorter narrative prints and the longer one only implies by a gap after the battle. The life they share is his place at the head of the losing side, the brothers who beat him, and the treaty that still lay ahead.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Fontenoy_(841)', publisher: 'Wikipedia' },
    { url: 'https://www.encyclopedia.com/history/news-wires-white-papers-and-books/chapter-one-world-events-selected-occurrences-outside-muslim-world', publisher: 'Encyclopedia.com' },
  ],
};

export const charlesTheBald: EraFigure = {
  id: 'charles_the_bald',
  name: 'Charles the Bald',
  role: 'commander',
  country: 'Franks',
  allegiance: 'Franks',
  note: 'One account calls him Charles the Bald and the other Charles II. Both say he and his brother Louis the German defeated Lothair, also spelled Lothar, at Fontenoy in 841. The same chronology later has his nephew Louis the Younger defeat him at Andernach on 8 October 876.',
  bio: {
    primary:
      'Charles the Bald, also called Charles II, and his brother Louis the German defeated Lothair at Fontenoy in 841. The Treaty of Verdun followed that victory.',
    secondary:
      'Charles is one of the two brothers who beat Lothair, also spelled Lothar, at Fontenoy in 841. Louis the German, or Louis II, stood with him. One record numbers Charles as Charles II. The other uses the byname the Bald. A day in the longer record, and Pepin beside Lothair, are not in both. The life they share is Charles’s part in that victory and the Treaty of Verdun that came afterwards.',
    university:
      'The brother who shares the Fontenoy victory of 841 with Louis is Charles, printed the Bald and also Charles II. Lothair, printed also as Lothar, was the brother they defeated. Both narratives leave the war unfinished and name the Treaty of Verdun as what followed. A calendar day, an ally of Lothair, and a district for the field are each in one narrative only and are omitted. No troop total is shared, and none is repeated. What both Fontenoy narratives give him is the victory with Louis, over Lothair, in 841.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Fontenoy_(841)', publisher: 'Wikipedia' },
    { url: 'https://www.encyclopedia.com/history/news-wires-white-papers-and-books/chapter-one-world-events-selected-occurrences-outside-muslim-world', publisher: 'Encyclopedia.com' },
  ],
};

export const louisTheGerman: EraFigure = {
  id: 'louis_the_german',
  name: 'Louis the German',
  role: 'commander',
  country: 'Franks',
  allegiance: 'Franks',
  note: 'One account calls him Louis the German and the other Louis II. Both say he and Charles the Bald, also Charles II, defeated their brother Lothair, also Lothar, at Fontenoy in 841. His death before Andernach is in the Andernach accounts, not required for this life.',
  bio: {
    primary:
      'Louis the German, also called Louis II, and his brother Charles the Bald defeated Lothair at Fontenoy in 841. The Treaty of Verdun followed.',
    secondary:
      'Louis the German is the brother who, with Charles the Bald, beat Lothair at Fontenoy in 841. One record numbers him Louis II and numbers Charles as Charles II. The other uses the bynames the German and the Bald, and it spells the loser Lothair rather than Lothar. A single record adds a day and a companion of Lothair. The life they share is Louis’s part in the victory and the Treaty of Verdun afterwards.',
    university:
      'The brother paired with Charles at Fontenoy in 841 is Louis, printed the German and also Louis II. The man they defeated is Lothair, also printed Lothar. Both narratives treat the success as theirs together, and both name the Treaty of Verdun as the settlement that followed a war the battle had not closed. Marches before the day, a numbered date, and an Aquitanian ally of the loser are in the longer narrative only. No total of the fallen is shared. What the Fontenoy pair give him is joint victory with Charles over Lothair in 841.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Fontenoy_(841)', publisher: 'Wikipedia' },
    { url: 'https://www.encyclopedia.com/history/news-wires-white-papers-and-books/chapter-one-world-events-selected-occurrences-outside-muslim-world', publisher: 'Encyclopedia.com' },
  ],
};

export const louisTheYounger: EraFigure = {
  id: 'louis_the_younger',
  name: 'Louis the Younger',
  role: 'commander',
  country: 'Franks',
  allegiance: 'Franks',
  note: 'One account calls him Louis the Younger and the other Louis III. Both say he defeated his uncle Charles the Bald, also Charles II, at Andernach on 8 October 876, after the death of his father Louis the German. August, Kettig, and a decisive victory are each in only one account.',
  bio: {
    primary:
      'Louis the Younger, also called Louis III, defeated his uncle Charles the Bald at Andernach on 8 October 876, after the death of Louis the German.',
    secondary:
      'Louis the Younger is the son of Louis the German who beat his uncle Charles, called the Bald and also Charles II, at Andernach on 8 October 876. One record numbers the victor Louis III and dates the father’s death to August. The other calls the success decisive and names a village near the town. The month, the village, and that praise are single. The life they share is the nephew’s victory over Charles on that day.',
    university:
      'Louis, byname the Younger and numeral III, won at Andernach on 8 October 876. Both tellings make him the child of Louis the German and set Charles, the Bald, numbered II, against him as the father’s brother. The father was already dead when the hosts met. A summer month for that death, a nearby hamlet, a ride away from the field, and praise of the success as decisive each occur once and drop out. East and West as kingdom labels occur once. No separate fate after the day is given twice. What the pair allow is his command on that October date and Charles beaten at Andernach.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Andernach_(876)', publisher: 'Wikipedia' },
    { url: 'https://www.encyclopedia.com/history/news-wires-white-papers-and-books/chapter-one-world-events-selected-occurrences-outside-muslim-world', publisher: 'Encyclopedia.com' },
  ],
};
