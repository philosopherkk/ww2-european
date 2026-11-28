import type { HistoricalFigure } from './types';

/**
 * Southern and south-eastern theaters, and the men who were against the war:
 * Italy, Greece, Serbia, Romania, the Hejaz, the United States, and the German
 * socialist opposition. Written to the same three-level standard as the other
 * figure files; every date and number here was checked against the reference
 * articles listed when the file was delivered, and anything that could not be
 * confirmed was left out rather than guessed.
 */
export const FIGURES_SOUTH: HistoricalFigure[] = [
  {
    id: 'salandra',
    name: 'Antonio Salandra',
    birthDeath: '1853-1931',
    role: 'Prime Minister of Italy, November 1914 to June 1916',
    country: 'Italy',
    bloc: 'co_belligerent',
    bio: {
      primary: 'Salandra was Italy’s prime minister in the First World War. He kept Italy out at first, then joined the war for a promise of land.',
      secondary: 'He declared Italy neutral in August 1914 because its alliance with Germany and Austria-Hungary was defensive, while asking both sides what they would pay for Italian entry. The Treaty of London of 26 April 1915 promised Italy Trentino, Trieste and Istria, and on 23 May 1915 he took the country into war against Austria-Hungary over the heads of a neutralist majority in parliament, relying on the crown and on nationalist crowds. His government fell in June 1916 after five costly attacks on the Isonzo river and an Austrian offensive in the Trentino.',
      university: 'He called Italy’s policy sacro egoismo, sacred self-interest, and R. J. B. Bosworth argues that Italy did not stumble into war but chose it by cold calculation, the only real miscalculation being the belief, shared with Sonnino, that the war would end by 1915. Bosworth’s larger point is domestic, that overturning a neutralist parliamentary majority with the crown and the street in May 1915 discredited the liberal state in the eyes of Italians who had never wanted the war. A second line of argument asks whether intervention helped the common cause, since a third front tied down Austro-Hungarian and then German divisions while the Italian army spent two years attacking ground that favoured the defender.',
    },
  },
  {
    id: 'cadorna',
    name: 'Luigi Cadorna',
    birthDeath: '1850-1928',
    role: 'Chief of Staff of the Italian Army, July 1914 to November 1917',
    country: 'Italy',
    bloc: 'co_belligerent',
    bio: {
      primary: 'Cadorna commanded the Italian army from 1915 to 1917. He attacked the same frontier again and again, and Caporetto ended his command.',
      secondary: 'Recalled from retirement, he had thirty-six infantry divisions, about 875,000 men and only 120 modern heavy guns in May 1915, facing mountain country built for defence. His answer was attrition, repeated attacks to wear the enemy down, which took Gorizia in August 1916 and the Bainsizza plateau in August 1917 at very high cost. On 24 October 1917 German and Austro-Hungarian troops broke through at Caporetto and reached the river Piave by 12 November with 275,000 Italian prisoners, and he lost his command that November to Armando Diaz.',
      university: 'The case against him is in the 1919 official inquiry into Caporetto and in the figures on discipline: about 6 per cent of his soldiers faced a disciplinary charge, 61 per cent of them were convicted, some 750 were executed, one of the highest totals of any army in the war, and he ordered retreating units to shoot their own men. The claim that he revived Roman decimation was pushed by his political enemies and qualified by John Keegan, who found summary execution of stragglers rather than a formalised lottery. The defence, associated with Giorgio Rochat, compares him to Joffre and Haig, notes that his offensives were agreed with the allies as part of a shared strategy of wear-down, and reads David Stevenson’s verdict of callous incompetence as a judgement on an ill-equipped army in impossible terrain.',
    },
  },
  {
    id: 'diaz',
    name: 'Armando Diaz',
    birthDeath: '1861-1928',
    role: 'Chief of Staff of the Italian Army from November 1917; War Minister 1922-1924',
    country: 'Italy',
    bloc: 'co_belligerent',
    bio: {
      primary: 'Diaz took over the Italian army after Caporetto in 1917. He held the river Piave and won the battle that ended the war in Italy.',
      secondary: 'He rebuilt a beaten army along the Piave and on the Monte Grappa massif, where the Austro-Hungarian advance was stopped. When they attacked again in June 1918 they were beaten at the Second Battle of the Piave, and in October 1918 he attacked with about 1.4 million men and won the Battle of Vittorio Veneto, which ended the fighting on the Italian front. Where Cadorna had been remote and punitive, Diaz was associated with better treatment of ordinary soldiers, and the army of 1918 was called the army of the Piave.',
      university: 'Italian writing presents 1917 and 1918 as a recovery, with Diaz the manager who restored morale and used artillery and limited objectives rather than throwing men at prepared positions. The counter-argument is that Vittorio Veneto owed as much to the disintegration of a multi-national army whose subject peoples had already left it as to Italian generalship, since the battle of 24 October to 3 November yielded published prisoner totals anywhere between about 300,000 and 448,000. His politics are the awkward part of the reputation: as War Minister from 1922 he served the Fascist government that was building a dictatorship, which is why the regime celebrated him as Duke of Victory and a marshal of Italy while antifascist historians treated the cult of the army of the Piave as a usable myth.',
    },
  },
  {
    id: 'vittorio_emmanuele_iii',
    name: 'Victor Emmanuel III',
    birthDeath: '1869-1947',
    role: 'King of Italy, July 1900 to May 1946',
    country: 'Italy',
    bloc: 'co_belligerent',
    bio: {
      primary: 'Victor Emmanuel was king of Italy for the whole war. He agreed the decision to join the Allies in 1915.',
      secondary: 'Under the Italian constitution the crown, not parliament, controlled foreign policy, war and the army, so when Salandra offered his resignation in May 1915 the king refused it and Italy went to war against the wishes of most deputies. He stayed close to the front throughout, which made him genuinely popular, and after Caporetto in November 1917 he replaced Cadorna with Diaz. Italy gained Trentino, Trieste and South Tyrol in 1919 but not Fiume or Dalmatia, and in October 1922 he appointed Mussolini prime minister.',
      university: 'His importance is constitutional rather than military: the Statute left the king real residual powers, and he had used them on at least ten occasions between 1900 and 1922 to settle parliamentary crises, so 1915 and 1917 are episodes in the history of the crown as the working partner of the liberal state. He held supreme command as a royal prerogative and resisted any supreme allied command over Italian troops, which is why he objected to Foch’s authority in 1918. Historians of the monarchy read the war as the moment when the popularity of the King of Victory made the crown indispensable, and therefore read 1922 as the point where that prestige was spent, since the same prerogative that carried Italy into war handed it to Mussolini.',
    },
  },
  {
    id: 'sonino',
    name: 'Sidney Sonnino',
    birthDeath: '1847-1922',
    role: 'Italian Foreign Minister, November 1914 to June 1919',
    country: 'Italy',
    bloc: 'co_belligerent',
    bio: {
      primary: 'Sonnino was Italy’s foreign minister during the war. He made the secret Treaty of London in 1915.',
      secondary: 'He first favoured loyalty to Germany and Austria-Hungary, then judged that Britain and France would pay more, and signed the treaty on 26 April 1915, committing Italy to the Entente for Trentino, Trieste, Istria and parts of Dalmatia. He left Fiume, a port with an Italian majority, out of the bargain, a decision he regretted. At the peace conference in 1919, where Wilson insisted that frontiers should follow nationality, he obtained most of the treaty but neither Fiume nor Dalmatia, and on 24 April 1919 he and the prime minister Orlando walked out.',
      university: 'Sonnino described his method as Bismarckian, guided by sacro egoismo, and admitted privately that he would have taken Italy into the war on the Central Powers’ side had their diplomats bid higher, which makes the Treaty of London a price comparison rather than a cause. Two things ruined it as diplomacy: the Bolshevik publication of the imperial Russian treaties in December 1917 turned a secret bargain into a public commitment that nationalists could not be argued down from, and the belief that Italy had been cheated of a promised peace became the language of the mutilated victory. At Paris he claimed self-determination for Fiume and the literal text of the treaty for Slav-majority Dalmatia in the same breath, which gave Wilson the case against him.',
    },
  },
  {
    id: 'venizelos',
    name: 'Eleftherios Venizelos',
    birthDeath: '1864-1936',
    role: 'Prime Minister of Greece, eight terms between 1910 and 1933; leader of the National Defence government 1916-1917',
    country: 'Greece',
    bloc: 'co_belligerent',
    bio: {
      primary: 'Venizelos was Greece’s prime minister during the war. He brought Greece in on the Allies’ side in 1917, and the quarrel over it split the country.',
      secondary: 'He rebuilt the Greek state and army after 1910 and doubled Greek territory in the Balkan Wars, and held that his country’s future lay with the sea powers. In 1915 he wanted to send troops to the Dardanelles and to Serbia; the king refused and dismissed him in December. He then led the rival National Defence government at Thessaloniki, and after the Allies forced Constantine to leave in June 1917 he brought a unified Greece into the war, an army of some 300,000 men becoming the largest single national force on the Macedonian front.',
      university: 'The National Schism is the founding quarrel of modern Greek politics, and the argument is over what it was: a conflict between two readings of the national interest, the king’s armed neutrality against his bet on the Entente, or a struggle over who governed Greece, in which the crown used a constitutional clause to dismiss a government and he answered with a rival state in the north. His defenders point out that the bet paid in 1918, that the Greek army’s weight helped break the Macedonian front in September 1918, and that he was the most successful diplomat at Paris. His critics answer that the split, and the purge of royalist officers after reunification, left an army divided in Asia Minor two years later.',
    },
  },
  {
    id: 'constantine_greece',
    name: 'King Constantine I',
    birthDeath: '1868-1923',
    role: 'King of Greece, 1913 to 1917 and 1920 to 1922',
    country: 'Greece',
    bloc: 'neutral',
    bio: {
      primary: 'Constantine was king of Greece during the war. He wanted Greece to stay neutral, and that quarrel split the country in two.',
      secondary: 'He had commanded the army in the Balkan Wars, became king in 1913, had been educated in Germany and had married a sister of the German kaiser. He held that Greece should keep an armed neutrality, while Eleftherios Venizelos held that Greece’s future lay with the Entente; when the king dismissed the elected government the country divided. He abdicated under Allied pressure on 11 June 1917, Greece entered the war under his second son Alexander, and he returned after a royalist victory in 1920 to abdicate again after the defeat in Asia Minor.',
      university: 'His bloc is a genuine problem, because the answer depends on which Greece is meant: the Athens state was neutral until it declared war in December 1916 and fought as a co-belligerent only after he had gone, so he is the rare wartime monarch who can honestly be classed as neutral. His critics answer that a king who surrendered a frontier fort and its guns to Bulgaria in 1916, and whose staff organised armed gangs against his opponents, was neutral in name only, while he claimed that the crown kept real power over war policy and that armed neutrality saved Greek lives. David Dutton’s study of June 1917 places his deposition in Anglo-French diplomacy rather than in Greek politics, a small kingdom’s constitution settled by a naval blockade.',
    },
  },
  {
    id: 'putnik',
    name: 'Radomir Putnik',
    birthDeath: '1847-1917',
    role: 'Chief of the Serbian General Staff, 1914 to January 1916; Field Marshal',
    country: 'Serbia',
    bloc: 'entente',
    bio: {
      primary: 'Putnik commanded the Serbian army in the first two years of the war. He beat back two invasions in 1914, then led his army to the sea.',
      secondary: 'He had rebuilt the Serbian army as minister of war and was in Budapest being treated for chronic emphysema when Austria-Hungary declared war; the Austrian emperor granted him safe passage home. He led an army that broke the invasions of 1914 at Cer and the Kolubara. In autumn 1915 an Austro-Hungarian, German and Bulgarian offensive under Mackensen overwhelmed his country, and he ordered the army west through Montenegro and Albania to the coast, where Allied ships carried some 155,000 survivors to Corfu and the Salonika front.',
      university: 'The historiography is unusually personal, because Serbia’s two greatest achievements, the victories of 1914 and the survival of the army in 1915 and 1916, are credited to his planning but were executed by others: he was seriously ill throughout, operational command at Cer and the Kolubara lay with Stepanović, Mišić and Bojović, and he insisted that Prince Alexander should not take supreme command. The retreat is the contested episode, since of roughly 250,000 who set out only about 155,000 reached the sea, and the argument is whether any alternative existed once the Bulgarian railway closed the road east. His dismissal in January 1916, learned from a pay clerk who withheld his chief of staff supplement, fed the long quarrel between the government and the high command over the catastrophe of 1915.',
    },
  },
  {
    id: 'alexander_serbia',
    name: 'Prince Alexander of Serbia',
    birthDeath: '1888-1934',
    role: 'Prince Regent of Serbia from 1914; Regent of the Kingdom of Serbs, Croats and Slovenes from December 1918',
    country: 'Serbia',
    bloc: 'entente',
    bio: {
      primary: 'Alexander was the prince regent who governed Serbia during the war. He accepted the union that became Yugoslavia in December 1918.',
      secondary: 'He became regent in June 1914 when his father Peter I gave up his duties through ill health, and remained the nominal supreme commander, with real command passing through successive chiefs of the general staff. A field commander in the Balkan Wars, he kept the army in the field after the Albanian retreat, and Serbian troops took part in the Allied breakthrough on the Macedonian front in autumn 1918. As regent he accepted the union of Serbia with the former Habsburg lands of Croatia-Slavonia, Slovenia, Vojvodina and Bosnia on 1 December 1918.',
      university: 'He is hard to write about because he left no diary and no memoirs, and because his wartime language did not match his later title: he told British audiences he was fighting for Yugoslav unity and told his soldiers he was fighting for the re-establishment of Serbia. The Corfu Declaration of 1917 between the prime minister Nikola Pašić and the Yugoslav Committee’s Ante Trumbić settled the fact of union but not its shape, and his postwar unitary state, followed by the royal dictatorship imposed after the shooting of Stjepan Radić in 1928, leads historians to ask whether the Serb and Yugoslav projects he spoke of were ever the same thing. Serbia’s loss, one person in five alive in 1914 dead by 1918, keeps alive the argument over whether union was a reward for a devastated kingdom or a burden its dominance made inescapable.',
    },
  },
  {
    id: 'bratianu_ion',
    name: 'Ion I. C. Brătianu',
    birthDeath: '1864-1927',
    role: 'Prime Minister of Romania, January 1914 to February 1918, and again from December 1918',
    country: 'Romania',
    bloc: 'co_belligerent',
    bio: {
      primary: 'Brătianu led Romania into the war in August 1916. The campaign was lost, and his government had to flee its capital.',
      secondary: 'Romania was bound to the Dual Alliance by a treaty kept secret from parliament, and he declined to fight in 1914, a policy King Carol I imposed until his death in September. Under the new king Ferdinand he negotiated secretly with the Entente for the Romanian-majority districts of Austria-Hungary, declared war in August 1916 and advanced into Transylvania, but a counter-offensive swept through Wallachia and drove the government to Iaşi. When Russia made peace he signed a dictated peace at Bucharest in May 1918; he resigned in 1919 rather than accept a partition of Banat.',
      university: 'The choice of August 1916 is the argument, and the case for it is the national programme of the National Liberals, the union of the Romanian-speaking majority of Transylvania, Bukovina and Banat, pursued by a politician who had led his party since 1909 and who moved only once the Entente had committed itself to those lands. The case against is an army only partly re-equipped, frontiers that could not all be held and Russian support that proved unreliable, with the loss of the capital, an occupation and a peace that handed the Central Powers grain and oil. Later writing sets both against the achievement of Greater Romania in 1918, and the colder reading notes that Bessarabia came to Romania from Russia’s collapse rather than from the gamble of 1916.',
    },
  },
  {
    id: 'averescu',
    name: 'Alexandru Averescu',
    birthDeath: '1859-1938',
    role: 'Commander of the Romanian Second Army; Prime Minister in 1918 and 1920 to 1921',
    country: 'Romania',
    bloc: 'co_belligerent',
    bio: {
      primary: 'Averescu was the Romanian general most famous from the war. Peasants remembered him as the soldier who gave them land.',
      secondary: 'He had crushed the peasant rising of 1907 and had been war minister and chief of the general staff, making him the senior soldier available in August 1916. He commanded the Second Army at the start, was moved to the Third after its defeat at Turtucaia, and returned to the Second for the attack at Mărăști in August 1917, part of the resistance that kept Moldavia in Romanian hands. In 1918 the king made him prime minister; he refused Mackensen’s terms and left office when the Marghiloman cabinet signed the Treaty of Bucharest in May 1918.',
      university: 'His military reputation is contested in a way his political one is not: his own officers rated ' +
        'the Mărăști breakthrough highly and credited him with the defence of Moldavia, while military ' +
        'historians point out that Romanian armies of some 500,000 men, with perhaps 100,000 Russian ' +
        'reinforcements, were beaten by a Central Powers army of 910,000. The political reading is better ' +
        'documented, since most of the army were peasants who had been promised land and attached that ' +
        'promise to his name, and contemporaries describe a popularity near the mystical, with officers ' +
        'plotting in 1919 to make him dictator in a coup he is said to have refused from loyalty to the ' +
        'crown. He is useful to both arguments, over whether the entry of 1916 was worth its price and ' +
        'over how land reform and the soldiers’ vote created mass politics.',
    },
  },
  {
    id: 'husayn_mecca',
    name: 'Sharif Husayn ibn Ali of Mecca',
    birthDeath: '1853-1931',
    role: 'Sharif and Emir of Mecca from 1908; head of the Hejaz from the revolt of 1916 until 1924',
    country: 'Hejaz',
    bloc: 'entente',
    bio: {
      primary: 'Husayn was the Sharif of Mecca, keeper of Islam’s holiest cities. On 10 June 1916 he proclaimed ' +
        'the Arab revolt against the Ottomans at Mecca.',
      secondary: 'The sultan had appointed him sharif in 1908, and relations with Istanbul broke down as the Committee of Union and Progress brought troops within reach of Mecca. In ten letters with the British high commissioner in Egypt, Sir Henry McMahon, he asked for recognition of an Arab state and McMahon agreed, excepting “portions of Syria lying to the west of the districts of Damascus, Homs, Hama and Aleppo”. The revolt began on 10 June 1916 with an attack on the Ottoman garrison at Mecca, which fell in July; in November he was proclaimed King of the Arabs.',
      university: 'The first argument is what was promised, since McMahon’s excluded phrase never mentions Palestine, which lies far to the south of the four cities named, and so the Arab reading that Palestine was included and the British reading that it was reserved are called irreconcilable. Elie Kedourie argued that the letters were no treaty, though Lloyd George and Balfour described them as one before the Council of Four in 1919, and James Barr suggests McMahon was caught by his own drafting, since the Arabic version lost its qualifying sense. The second argument is whether this was a national rising at all, since his proclamation defended the Hejaz’s historic rights and Islam rather than a nation, the first stage was fought with Hejazi forces only, and Arabs in Syria and Iraq did not rise.',
    },
  },
  {
    id: 'feisal',
    name: 'Emir Faisal',
    birthDeath: '1885-1933',
    role: 'Commander of the Arab northern force in the revolt; head of the Arab state in Syria in 1920, King of Iraq from 1921 to 1933',
    country: 'Hejaz and Iraq',
    bloc: 'entente',
    bio: {
      primary: 'Faisal led the Arab force that marched north from the Hejaz to Damascus. The Syrians made him king in 1920, and the French drove him out.',
      secondary: 'He was a leader of the revolt from June 1916 and, with T. E. Lawrence as his liaison, moved his ' +
        'force north along the railway instead of spending it on the siege of Medina. Aqaba fell in July ' +
        '1917, giving the revolt a seaport, and his troops reached Damascus on 1 October 1918, in an ' +
        'entry whose order is disputed, where he set up an Arab administration. A Syrian congress ' +
        'proclaimed him king in March 1920 and the French ended that state within months; in 1921 the ' +
        'British made him king of Iraq under a mandate.',
      university: 'The debate is over which failure explains him, the loss of Syria or the building of Iraq. The sympathetic reading makes him a man cheated by the settlement, who accepted the Balfour Declaration and the mandates in the hope of British support and was expelled by France in 1920 with Britain unwilling to fight for him, Iraq being the compensation, and it rests on the plain fact that the McMahon correspondence, Sykes–Picot and the Balfour Declaration could not all be honoured at once. The sceptical reading notes that the state at Damascus rested on troops the Hashemites had raised with British arms and gold, that the proclamation of 1920 was not matched by a force able to fight the French army that marched in, and that his following in Iraq was narrower than the map of the mandate.',
    },
  },
  {
    id: 'lawrence',
    name: 'T. E. Lawrence',
    birthDeath: '1888-1935',
    role: 'British liaison officer with Emir Faisal and the Arab Revolt, 1916 to 1918',
    country: 'United Kingdom',
    bloc: 'entente',
    bio: {
      primary: 'From 1916 to 1918 Lawrence was the British liaison with Emir Feisal’s Arab force against the ' +
        'Ottomans. He helped take Aqaba in July 1917 and raid the Hejaz railway, and came home famous as ' +
        'Lawrence of Arabia.',
      secondary: 'He had been an archaeologist and had surveyed the Negev for the army, and in October 1916 he was ' +
        'sent to the Hejaz to judge which of Husayn’s sons was worth supporting. His importance was ' +
        'strategy rather than command, since he persuaded the Arabs not to wear themselves out against ' +
        'the garrison of Medina but to strike north at the railway. He took part in the surprise overland ' +
        'attack that took Aqaba on 6 July 1917, reached Damascus on 1 October 1918 amid a disputed entry, ' +
        'and wrote his account of the revolt, Seven Pillars of Wisdom.',
      university: 'Whether the military effect matched the mythology can be put in figures, since the Hashemite field force is reckoned at about 30,000 men in June 1916 and rather more than 50,000 by October 1918, against an Ottoman strength in the same theatre that grew from some 6,500 in May 1916 to about 25,000 with 340 guns by September 1918. The defence of his worth is that the revolt secured Allenby’s flank, absorbed Ottoman troops who had to guard and repair the railway, and produced in Damascus an Arab government that made France fight for its mandate. The myth was made by Lowell Thomas’s shows from 1919, which promoted him from a supporting role in Allenby’s story to its co-star, and by Seven Pillars of Wisdom itself, whose literary authority means his own account is still much of the evidence.',
    },
  },
  {
    id: 'wilson_us',
    name: 'Woodrow Wilson',
    birthDeath: '1856-1924',
    role: 'President of the United States, 1913 to 1921',
    country: 'United States',
    bloc: 'co_belligerent',
    bio: {
      primary: 'Wilson was the American president during the war. The United States stayed out until April 1917, then fought with the Allies, and his own senators rejected the league of nations he proposed.',
      secondary: 'He was re-elected in 1916, defeating Charles Evans Hughes. German submarine warfare ended his ' +
        'neutrality: the Lusitania went down in May 1915 with 1,198 dead, including 128 Americans, ' +
        'unrestricted sinking resumed in January 1917, and the Zimmermann Telegram proposed a Mexican war ' +
        'against the United States. Congress declared war on 6 April 1917; his aims were the Fourteen ' +
        'Points of 8 January 1918, on which Prince Max of Baden asked for an armistice, and he took the ' +
        'League of Nations into the Treaty of Versailles, but ratification needed two-thirds of the ' +
        'Senate, where Lodge opposed it.',
      university: 'His war aims are the most contested part of his record: his Allied colleagues, Clemenceau, Lloyd George and Orlando, were sceptical of the applicability of the Fourteen Points, each having commitments of his own, while the German request for an armistice on that basis and the French and Italian acceptance of 1 November are the strongest evidence for the case that the peace was built on a promise Paris then broke. Against that, the Points were a statement of aims rather than a negotiated programme, clauses were bargained away at Paris, and the secret treaties of 1915 and 1916 promised territory Wilson had no power to annul. The domestic argument is harsher: Lodge was close to carrying the treaty with ten reservations, and Wilson forced a negative vote on 19 March 1920, so the usual verdict is that he destroyed the settlement himself.',
    },
  },
  {
    id: 'pershing',
    name: 'John J. Pershing',
    birthDeath: '1860-1948',
    role: 'Commander of the American Expeditionary Forces, 1917 to 1920; General of the Armies',
    country: 'United States',
    bloc: 'co_belligerent',
    bio: {
      primary: 'Pershing commanded the American army brought from the United States to France. He insisted that ' +
        'American soldiers should fight in an army of their own rather than as replacements inside ' +
        'British and French units.',
      secondary: 'He was appointed to command the American Expeditionary Forces in May 1917, after the sudden ' +
        'death of Frederick Funston, and the first troops landed in June 1917. When the German Spring ' +
        'Offensive began he offered Pétain and then Foch every available American division, though he ' +
        'kept the AEF a separate army. He took Saint-Mihiel in September 1918 and fought the ' +
        'Meuse–Argonne offensive from 26 September to 11 November, 47 days. 1.2 million American and ' +
        '800,000 French troops attacked prepared positions at a cost of more than 300,000 casualties, ' +
        'including 26,277 American deaths.',
      university: 'The case against him is about casualties and tactics: his own words admit that by late September 1918 the Americans were committed “to a direct frontal attack against strong, hostile positions fully manned by a determined enemy”, and the standard criticism is that he clung to costly frontal assault long after the British and French armies had learned to combine artillery, aircraft and infantry. His defenders answer that the Meuse–Argonne was chosen to relieve the railway line to Metz, that the ground was forest and ridges held by a determined enemy, and that a green army of 1.2 million men had to learn its trade in the only way open to it. His insistence on a separate American army preserved Wilson’s independent position at the peace conference, which many historians judge worth more than the divisions saved by amalgamation.',
    },
  },
  {
    id: 'liebknecht_karl',
    name: 'Karl Liebknecht',
    birthDeath: '1871-1919',
    role: 'Social Democrat member of the Reichstag, 1912 to 1916; co-founder of the Spartacus League and the Communist Party of Germany',
    country: 'Germany',
    bloc: 'opposition',
    bio: {
      primary: 'Liebknecht was a German socialist who opposed the war from the start. He was the only deputy in his party’s group to refuse to approve the fighting, and soldiers serving the socialist government had him murdered in January 1919.',
      secondary: 'The party voted the war credits in August 1914 and he obeyed, but on 2 December 1914 he was the only deputy who did not rise to approve the budget. He founded the Spartacus League on 1 January 1916, his own group expelled him by 60 votes to 25, and he was imprisoned for an anti-war demonstration, from which the minister Scheidemann forced his release. On 9 November 1918 he proclaimed a “Free Socialist Republic” from the Berlin Palace, and in January 1919 he helped lead the Berlin rising that the government crushed with right-wing volunteer units.',
      university: 'His significance runs in two directions: one vote among hundreds changed nothing in 1914, but his refusal gave the German anti-war left a public beginning, and the weight of the act rests on the party that claimed the monopoly on legitimacy, since the Social Democrats who governed after 1918 had expelled him and the far left built its founding myth on the same event. The second argument is about January 1919, whether the rising was a desperate response to a government already arming against the councils or an adventurism that played into their hands. The murder is better documented than most political killings of the revolution: the officer who ordered it, Captain Waldemar Pabst, claimed in later life that he had the tacit approval of Gustav Noske, the minister responsible for the troops, and the trial was conducted by the killers’ own comrades.',
    },
  },
  {
    id: 'luxemburg_rosa',
    name: 'Rosa Luxemburg',
    birthDeath: '1871-1919',
    role: 'Marxist theorist and writer; co-founder of the Spartacus League and the Communist Party of Germany',
    country: 'Germany',
    bloc: 'opposition',
    bio: {
      primary: 'Luxemburg was a Marxist writer and revolutionary, born in Russian Poland, who made her career in the German socialist party. She opposed the war, spent most of it in prison, helped found the Communist Party of Germany and was murdered in Berlin in January 1919.',
      secondary: 'She condemned her party’s vote for the war in 1914, formed the group that became the Spartacus League, and spent most of the fighting in prison, in protective custody without trial from July 1916. From prison she wrote the Junius Pamphlet, which put the choice as socialism or barbarism, and her critique of the Russian Revolution, which condemned the dissolved Constituent Assembly. Released on 9 November 1918, she helped found the Communist Party of Germany, was overruled by its congress about the elections, and thought the Berlin rising of January 1919 a mistake.',
      university: 'Almost everything she wrote was written against someone in her own camp. The manuscript on the Russian Revolution, published by Paul Levi in 1922, grounds the durable claim, that she saw in 1918 what the left argued about for a century: that a revolution suppressing democratic freedoms will need coercion to survive. Her insistence on spontaneity and democracy made her a founding figure of Western Marxism, while in the mid-1920s the Communist Party was remodelled on Russian lines and “Luxemburgism” became a heresy, an attack led by Ruth Fischer and Arkadi Maslow, hardened by Stalin in 1931. The unresolved question is one of judgement: the January 1919 rising, which she thought premature, ended with the murder of its best-known leader, and historians still divide over whether it proved a revolutionary left had no place in Weimar or that her party was doomed anyway.',
    },
  },
  {
    id: 'scheidemann',
    name: 'Philipp Scheidemann',
    birthDeath: '1865-1939',
    role: 'Co-chairman of the Majority Social Democrats from 1917; Reich Minister President, February to June 1919',
    country: 'Germany',
    bloc: 'opposition',
    bio: {
      primary: 'Scheidemann was a leader of the Social Democratic Party, the largest party in Germany. On 9 November 1918 he proclaimed a German republic from a balcony of the Reichstag, and he later headed the republic’s first elected government.',
      secondary: 'A printer by trade, he joined the party’s executive in 1911 and led the Majority Social Democrats with Friedrich Ebert from October 1917. He pressed for the Reichstag Peace Resolution of 19 July 1917, carried by 212 votes to 126, and as a minister without portfolio in Prince Max of Baden’s cabinet of October 1918 he opened an amnesty and forced the release of Karl Liebknecht. He headed the first elected government of the republic and resigned on 20 June 1919 rather than accept the Treaty of Versailles; he died in exile at Copenhagen in 1939.',
      university: 'He is entered here as opposition because his working life from 1914 was a quarrel with the Imperial war government, over submarine warfare, over annexationist aims, and over a constitution that kept the parties out of the cabinet. The label is imperfect and has to be qualified, because his party voted war credits in 1914, entered office in October 1918 and then governed, so from Liebknecht’s standpoint he was the enemy and the German right called him a criminal for much the same reason. His defenders hold that he and Ebert gave Germany a democratic government when a soviet republic on the Russian model was the real alternative; his critics hold that by keeping the officers and the civil service intact and authorising force against the left at Christmas, the republic was handed to men who wished it destroyed.',
    },
  },
];
