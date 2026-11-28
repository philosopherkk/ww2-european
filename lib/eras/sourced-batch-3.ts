import type { EraEvent, EraFigure } from '@/lib/eras/types';

export const trafalgar1805: EraEvent = {
  id: 'trafalgar_1805',
  date: '1805-10-21',
  precision: 'day',
  title: 'Battle of Trafalgar',
  kind: 'battle',
  fronts: ['iberia'],
  countries: ['Britain', 'France', 'Spain'],
  figures: ['horatio_nelson'],
  levels: {
    primary: {
      cause: 'Napoleon had a Franco-Spanish fleet under Villeneuve, and Britain sent Admiral Nelson to meet it.',
      what: 'On 21 October 1805 the fleets met off Cape Trafalgar, and the British ships broke the enemy line.',
      consequence: 'The British fleet won the battle, and Nelson was mortally wounded before the fighting ended.',
    },
    secondary: {
      cause: 'The strategic stake was an invasion of Britain, which could not sail while the Royal Navy held the sea. Villeneuve commanded the French and Spanish ships gathered for Napoleon. Nelson was sent to bring that force to action. The fleets therefore met off the Spanish coast, at Cape Trafalgar, because London would not leave an enemy battle fleet free to cover a landing.',
      what: 'Fighting began on 21 October 1805. The enemy ships formed one line. Nelson’s fleet came at that line in separate groups rather than copying its course. One group was led by Collingwood. Nelson directed the other from Victory. French and Spanish vessels filled the line Villeneuve had drawn up.',
      consequence: 'The British attack succeeded, and the invasion plan that needed this fleet was finished. Nelson did not survive the victory. He was mortally wounded aboard Victory and died while the battle was ending. The sea stayed under British control once the combined fleet had been beaten.',
    },
    university: {
      cause: 'Bonaparte’s hope of putting an army ashore in England required a friendly fleet in control of the water around the island. The instrument of that hope was the combined French and Spanish force under Pierre de Villeneuve. The officer sent against him was Horatio Nelson, whose standing in the Royal Navy already rested on earlier victories at sea. Their collision off Cape Trafalgar decided whether the crossing could be escorted.',
      what: 'On 21 October 1805 the fleets engaged west of Cape Trafalgar. Villeneuve’s French and Spanish ships were formed in a line. Nelson’s British ships attacked that line in more than one body, with Victory among the leading hulls and Collingwood also engaged. The fighting was close, ship against ship, and it continued until the combined fleet was no longer a fighting line. A famous signal about duty is printed in one narrative only, so it is not given as the opening of the day.',
      consequence: 'France and Spain lost the action, and with it the naval cover for a descent on Britain. The admiral who had ordered the attack was among the fallen: a mortal wound struck Nelson, and he was dead before the guns had fully ceased. Printed losses differ, one page giving about 1,500 British killed or wounded and the other some 1,700, so no total is adopted. The enduring result is the defeat of the combined fleet and the death of its conqueror.',
    },
  },
  note: 'One account times Nelson’s death shortly before 4.30pm and says nineteen enemy ships were taken. The other says he was mortally wounded and that Villeneuve was captured. The hour, the prize count, and the capture are not in both, so they stay here.',
  sources: [
    {
      url: 'https://www.britannica.com/event/Battle-of-Trafalgar-European-history',
      publisher: 'Britannica',
    },
    {
      url: 'https://www.bbc.co.uk/history/british/empire_seapower/trafalgar_01.shtml',
      publisher: 'BBC',
    },
  ],
};

export const horatioNelson: EraFigure = {
  id: 'horatio_nelson',
  name: 'Horatio Nelson',
  role: 'admiral',
  country: 'Britain',
  allegiance: 'Britain',
  bio: {
    primary:
      'Horatio Nelson commanded the British fleet at Trafalgar on 21 October 1805, and he was mortally wounded in that battle.',
    secondary:
      'Nelson was the Royal Navy admiral sent against Villeneuve’s French and Spanish fleet. On 21 October 1805 he fought that fleet off Cape Trafalgar. The British won the action. Nelson was mortally wounded on Victory and died before the battle had fully ended. His death belongs with the victory, not as a separate story.',
    university:
      'Horatio Nelson was the British admiral whose fleet destroyed the combined French and Spanish line off Cape Trafalgar on 21 October 1805. He had been sent because an invasion of Britain required that enemy fleet to be beaten or blocked. In the action he directed more than one body of ships into Villeneuve’s line, with Victory in the attack. A mortal wound ended his life while the firing was still dying away. One narrative gives the hour as shortly before 4.30pm. The other says only that the wound was mortal and that about 1,500 British seamen were killed or wounded. The hour and that total stay out of the life. What both records share is his command, the victory, and his death from the wound received that day.',
  },
  note: 'One account says he died shortly before 4.30pm. The other says he was mortally wounded, and it does not print the hour.',
  sources: [
    {
      url: 'https://www.britannica.com/event/Battle-of-Trafalgar-European-history',
      publisher: 'Britannica',
    },
    {
      url: 'https://www.bbc.co.uk/history/british/empire_seapower/trafalgar_01.shtml',
      publisher: 'BBC',
    },
  ],
};

export const lepanto1571: EraEvent = {
  id: 'lepanto_1571',
  date: '1571-10-07',
  precision: 'day',
  title: 'Battle of Lepanto',
  kind: 'battle',
  fronts: ['greece_and_aegean'],
  countries: ['Holy League', 'Ottoman Empire'],
  figures: ['john_of_austria'],
  levels: {
    primary: {
      cause: 'An Ottoman fleet was at sea, and a Christian alliance under John of Austria sailed to fight it.',
      what: 'On 7 October 1571 the fleets met at Lepanto in a battle of oared warships.',
      consequence: 'The Christian alliance won a great victory over the Ottoman fleet that day.',
    },
    secondary: {
      cause: 'The Ottoman navy had come west across the Mediterranean. Christian states answered with a joint fleet. Command of that fleet was given to John of Austria. The purpose of the voyage was to stop the Ottoman ships before they could finish the campaign at sea. One narrative names the alliance the Holy League. The other speaks of the Christian allies without using that title in the same sentence.',
      what: 'The meeting was on 7 October 1571 at Lepanto. Both sides fought in oared warships, the galleys of that age, rather than in later sailing ships. John of Austria directed the Christian line. The Ottoman flagship lay in the centre of the opposing line. Once the hulls closed, crews fought at short range until the Ottoman centre gave way.',
      consequence: 'The Christian alliance carried the day, and the Ottoman fleet was broken as a fighting force. It was the first great victory of a Christian fleet over a Turkish one, and the last great battle of oared warships. The wider contest did not have to end that evening for the naval result to stand. What the day decided was the battle itself.',
    },
    university: {
      cause: 'Ottoman power at sea had placed a battle fleet in Greek waters. The Christian reply was a joint armament, not the navy of one kingdom, and the prince set over it was Don Juan de Austria, whom English accounts call John of Austria. His orders were to find the Ottoman ships and fight. One narrative calls his coalition the Holy League and names Venice and Spain among its members. The other calls the same side the Christian allies and names Venice among the participants. The shared cause is that joint fleet, under his command, sent against the Ottoman navy.',
      what: 'On 7 October 1571 the fleets met at Lepanto. The ships were galleys, brought into contact by oars, so the struggle was fought at the range of boarding as well as of cannon. Juan’s flagship and the Ottoman flagship met in the centre. Hours of fighting ended with the Ottoman centre collapsing. A portion of the Ottoman line got away, which one narrative describes in detail, so the victory is not told here as the capture of every remaining hull.',
      consequence: 'The alliance defeated the Ottoman fleet. The day was remembered as a great Christian victory at sea and as the last major action of oared warships. One narrative adds that the Ottomans later rebuilt hulls, and that quarrels among the victors ended with Venice yielding Cyprus. Those sequels are not both in the second narrative, so they are not the result stated here. The result both support is the defeat of the Ottoman fleet at Lepanto on 7 October 1571.',
    },
  },
  note: 'One account calls the Christian coalition the Holy League and gives ship totals. The other prints different galley counts, names the escaped Ottoman wing, and says Venice later surrendered Cyprus. Those figures and that sequel are not shared, so the card keeps the date, the commanders’ sides, and the victory.',
  sources: [
    {
      url: 'https://www.britannica.com/event/Battle-of-Lepanto',
      publisher: 'Britannica',
    },
    {
      url: 'https://en.wikipedia.org/wiki/Battle_of_Lepanto',
      publisher: 'Wikipedia',
    },
  ],
};

export const johnOfAustria: EraFigure = {
  id: 'john_of_austria',
  name: 'John of Austria',
  role: 'commander',
  country: 'Spain',
  allegiance: 'Holy League',
  bio: {
    primary:
      'John of Austria commanded the Christian fleet at Lepanto on 7 October 1571, and that fleet defeated the Ottomans.',
    secondary:
      'John of Austria, also called Don Juan de Austria, led the Christian alliance at the Battle of Lepanto. On 7 October 1571 his fleet met the Ottoman fleet and won. He is the commander both accounts place over the Christian ships. The Ottoman admiral opposite him is not given the same prominence in both, so this life stays with John and the victory.',
    university:
      'John of Austria was the commander of the joint Christian fleet that fought the Ottoman navy at Lepanto on 7 October 1571. English pages use that name. The other page calls him Don Juan de Austria. Under his direction the Christian ships, galleys rowed into battle, broke the Ottoman centre and won the action. One page calls his coalition the Holy League and lists Venice and Spain inside it. The other lists Venice among the participants and describes the allies without resting the whole life on that title. Ship numbers and the later fate of Cyprus are told unevenly and are omitted. The life they share is his command of the Christian fleet and its victory on that day.',
  },
  note: 'The Spanish form of his name, Don Juan de Austria, is the one in the encyclopaedia. The other page says John of Austria.',
  sources: [
    {
      url: 'https://www.britannica.com/event/Battle-of-Lepanto',
      publisher: 'Britannica',
    },
    {
      url: 'https://en.wikipedia.org/wiki/Battle_of_Lepanto',
      publisher: 'Wikipedia',
    },
  ],
};
