import type { HistoricalFigure } from './types';

/**
 * Britain and France: the political and military leadership of the Western
 * Front, plus the two figures whose blocks mark a protest (Jaurès) and an
 * occupied country (Cavell). Dates and figures checked against the Oxford
 * Dictionary of National Biography dates carried in the Wikipedia infoboxes
 * and the articles' cited scholarship, November 2026.
 */
export const FIGURES_WEST: HistoricalFigure[] = [
  {
    id: 'george_v',
    name: 'George V',
    birthDeath: '1865-1936',
    role: 'King of the United Kingdom and the British Dominions, and Emperor of India, 1910-1936',
    country: 'United Kingdom',
    bloc: 'entente',
    bio: {
      primary: 'George V was king of Britain and its empire throughout the First World War. He visited the troops in France, and in 1917 he gave his family a British name, Windsor.',
      secondary: 'A former naval officer, he reigned as constitutional monarch over an empire at war: ministers governed and the generals fought, while the king advised, opened parliament and served as the symbol of national unity. He visited general headquarters, hospitals and the fleet repeatedly, took the name Windsor in 1917 when feeling against anything German ran high, and watched the German and Russian empires of his first cousins fall while the British Empire reached its greatest extent.',
      university: 'The war is often credited with rescuing the British monarchy’s standing, and George’s habit of appearing at headquarters, in hospitals and with the Home Fleet supplied much of that visibility; historians stress that his influence was exemplary rather than political, since he acted on his ministers’ advice, and that his diaries are evidence of court and royal opinion, not of royal power, however much popular writing has dwelt on the family letters between the king and the Kaiser.',
    },
  },
  {
    id: 'grey',
    name: 'Sir Edward Grey',
    birthDeath: '1862-1933',
    role: 'British Foreign Secretary, December 1905 – December 1916',
    country: 'United Kingdom',
    bloc: 'entente',
    bio: {
      primary: 'Sir Edward Grey directed British foreign policy from 1905 to 1916, the longest unbroken spell in the job. He brought Britain into the war against Germany in August 1914.',
      secondary: 'He drew Britain closer to France through the entente of 1904 and settled quarrels with Russia in 1907, but he never told the public, and barely the cabinet, that British and French staffs had discussed how a tiny expeditionary force might fight beside France. In the July Crisis he pressed for a conference of the powers, which Germany refused, and Britain declared war on 4 August 1914; he lost office in December 1916 and turned his energies to what became the League of Nations.',
      university: 'The “missed conference” literature asks whether Grey could have stopped the war by declaring early and plainly that Britain would fight for France, or whether vagueness was the only policy that held his divided Liberal cabinet together; Christopher Clark has argued that in July 1914 Grey failed to grasp the urgency while his ministers worried about Ulster. Even his most quoted line, that “the lamps are going out all over Europe”, is as he wrote it down in his memoirs a decade later, which is a fair warning about how much of Grey’s own case rests on Grey.',
    },
  },
  {
    id: 'asquith',
    name: 'H. H. Asquith',
    birthDeath: '1852-1928',
    role: 'Prime Minister of the United Kingdom, April 1908 – December 1916',
    country: 'United Kingdom',
    bloc: 'entente',
    bio: {
      primary: 'H. H. Asquith was prime minister when Britain entered the war in 1914, and he stayed in the job until December 1916.',
      secondary: 'He took Britain to war with a united cabinet and a united party, but the shell shortage crisis of May 1915 forced him to share power with the Conservatives and Labour in a coalition, and the failure at Gallipoli and the grinding of the Somme destroyed confidence in him. In December 1916 he was outmanoeuvred by David Lloyd George and the Conservative leader Bonar Law and resigned; he never again held office, the last Liberal prime minister to command a majority government.',
      university: 'Historians have moved between the caricature of the indecisive “sphinx”, comfortable with muddling through, and a more sympathetic reading: he governed a party split over free trade, Ireland and suffrage, in which the alternative to coalition looked like a rupture of the Liberal party itself. On that reading the crisis of December 1916 ends the Liberal ascendancy in British politics as much as it ends a premiership — a point of view reinforced by the revival of Asquith’s reputation among First World War historians who liked his cabinet system better than Lloyd George’s interventions.',
    },
  },
  {
    id: 'loyd_george',
    name: 'David Lloyd George',
    birthDeath: '1863-1945',
    role: 'Minister of Munitions 1915-16, Secretary of State for War 1916, Prime Minister from December 1916',
    country: 'United Kingdom',
    bloc: 'entente',
    bio: {
      primary: 'David Lloyd George organised the guns and shells as Minister of Munitions in 1915, became prime minister in December 1916, and led Britain to the end of the war.',
      secondary: 'He ran the war from a small war cabinet rather than the full cabinet, tightened control of industry, copied the French in rationing food, and imposed the convoy system that beat back the U-boat campaign in 1917. He also quarrelled constantly with his soldiers about where to fight: in 1915 he argued for a grand Balkan offensive to help Serbia, larger than the Salonika expedition actually sent, and from 1917 he wanted blows struck away from the Western Front — in Italy, the Balkans or the Middle East — until the American armies were strong enough for the decision in France.',
      university: 'Lloyd George is the great case of the politician as strategist: the Supreme War Council he created in late 1917 and the attempt to take direct command of Haig’s army at Doullens and the Sydney House conference in April 1918 show how far he would push political direction of operations, while his campaigns on the periphery were repeatedly undone by the shipping, geography and allied governments he had not reckoned with. His own War Memoirs set the terms of the argument for a generation, and a great deal of the later literature exists to agree or disagree with a self-defence written by the man himself.',
    },
  },
  {
    id: 'kitchener',
    name: 'Lord Kitchener',
    birthDeath: '1850-1916',
    role: 'Secretary of State for War, August 1914 – 5 June 1916',
    country: 'United Kingdom',
    bloc: 'entente',
    bio: {
      primary: 'Lord Kitchener was the war secretary who raised the great volunteer army, and whose face — “Your Country Wants YOU” — became the war’s most famous poster.',
      secondary: 'The empire’s most popular soldier, he was among the few who predicted the war would last for years, and he built a New Army of volunteers on that view. But he knew little of industrial war: he was blamed for the shell shortage of spring 1915, one of the events that brought down Asquith’s government, and in the coalition he lost munitions and strategy to other ministers while staying in the cabinet as a symbol. On 5 June 1916, on his way to Russia, he drowned when HMS Hampshire struck a mine off the Orkneys.',
      university: 'Kitchener’s standing rests on two things the sources bear out — the long-war forecast and the New Army — and much else is speculation: the postwar literature endlessly debated the strategy he would have pursued, whether his feud with the French had made allied strategy incoherent before he died, and whether the loss of the Hampshire involved anything more than a mine and bad weather, a conspiracy historians have never been given evidence to credit.',
    },
  },
  {
    id: 'french_john',
    name: 'Sir John French',
    birthDeath: '1852-1925',
    role: 'Commander of the British Expeditionary Force, August 1914 – December 1915',
    country: 'United Kingdom',
    bloc: 'entente',
    bio: {
      primary: 'Sir John French commanded the British army in France for the first fifteen months of the war. He was replaced by Haig at the end of 1915.',
      secondary: 'He led the little professional BEF through Mons, the retreat, the Marne and Ypres in 1914, but he wanted to pull the army out of the line to refit after Mons and Le Cateau, and only agreed to stand at the Marne after a private interview with Lord Kitchener, a grudge he never forgot. In May 1915 he leaked the shell shortage to the press to damage Kitchener, and when the attack at Loos failed that September the government removed him; he commanded the home army through 1916-18 and then served as the last lord lieutenant of Ireland through much of its war of independence.',
      university: 'French’s defenders and attackers split on a single question: was his caution sound generalship with a tiny professional army that could not be replaced, or the temper of a man who could not manage politicians or French allies? The modern literature on 1914 tends to treat his decision to keep the BEF in the line at the Marne as pivotal and his subsequent feud with the War Office as the opening act of the shell scandal; his own memoirs, and Kitchener’s, are the contending sources, and neither is disinterested.',
    },
  },
  {
    id: 'haig',
    name: 'Sir Douglas Haig',
    birthDeath: '1861-1928',
    role: 'Commander of the British Expeditionary Force, later the British Armies in France, December 1915 – November 1918',
    country: 'United Kingdom',
    bloc: 'entente',
    bio: {
      primary: 'Douglas Haig commanded the British army on the Western Front from late 1915 until the Armistice. His great battles were the Somme in 1916 and Passchendaele in 1917.',
      secondary: 'He took over the BEF after the old professional army had been largely destroyed in 1914, and spent most of the war commanding a mass conscript army he had to train while using it. The Somme was fought partly to relieve the pressure on the French at Verdun; Passchendaele, in mud, took ground at appalling cost. In 1918 his armies absorbed the blow of the German spring offensive, held while the American forces arrived, and drove the enemy back in the “Hundred Days” campaign that ended the war — a defeat of the German army some historians rank among the greatest victories of a British-led army.',
      university: 'Haig is the most attacked British commander of the war — “Butcher Haig”, for the roughly two ' +
        'million British and Imperial casualties under his command across the war, about 420,000 of them ' +
        'at the Somme and some 245,000 at Third Ypres — and also one of the most defended: from John ' +
        'Terraine’s biography of 1963 onward, and heavily in the revisionist scholarship of the 1980s and ' +
        'after built on his private papers and the army’s records, the argument runs that he was learning ' +
        'an industrial form of war, that the attritional battles of 1916-17 were deliberate and ' +
        'necessary, and that the British army’s part in the triumph of 1918 is the proof. The controversy ' +
        'is less about the facts of the battles than about the price of victory, and about whether a ' +
        'commander answers to the dead or to the war’s end.',
    },
  },
  {
    id: 'robertson',
    name: 'Sir William Robertson',
    birthDeath: '1860-1933',
    role: 'Chief of the Imperial General Staff, 1915-1918',
    country: 'United Kingdom',
    bloc: 'entente',
    bio: {
      primary: 'William Robertson rose from being a private soldier to be the professional head of the British army, and insisted on beating Germany first in France and Flanders.',
      secondary: 'As Chief of the Imperial General Staff — the Calais Conference of December 1915 arranged that all British armies should receive the government’s instructions through him — he backed Haig and resisted every scheme of David Lloyd George’s for campaigns in Italy, the Balkans and elsewhere until enough American troops arrived in France. He supported Haig at Passchendaele against his prime minister’s wishes, and in February 1918 Lloyd George forced him out by trying to take the British representatives on the Supreme War Council out of his control.',
      university: 'Robertson is the professional’s answer to the political direction of strategy, and in the sense that his priority — concentrate against the German army on the Western Front — eventually became the Allies’ policy, his verdict has largely won the historical argument. What historians quarrel over is whether he got there by merit or by managing the machinery: he was accused of burying alternatives he disliked, his exit produced the “Maurice” affair of March 1918, in which a member of his staff publicly misrepresented Haig’s reserves, and the whole quarrel exposed that the real question in London was not which strategy but who decided it.',
    },
  },
  {
    id: 'gough',
    name: 'Hubert Gough',
    birthDeath: '1870-1963',
    role: 'Commander of the Reserve Army and Fifth Army, 1916-1918',
    country: 'United Kingdom',
    bloc: 'entente',
    bio: {
      primary: 'Hubert Gough commanded Britain’s Fifth Army through the Somme, Passchendaele and the great German attack of March 1918.',
      secondary: 'He rose with extraordinary speed — cavalry brigade in August 1914, division by Ypres, corps by Loos — because Haig valued a “thruster”, an aggressive commander. The Reserve Army he was given for the Somme became the Fifth Army, and it did the hardest and bloodiest fighting of 1916 and of Passchendaele in 1917. In March 1918 his army held the longest and weakest British sector in front of the main German blow, Operation Michael; it was driven back in disorder and nearly destroyed, and Gough was blamed and relieved in late March, never fully exonerated.',
      university: 'Gough is the case study in the British army’s debate about the quality of its senior commanders: energetic, trusted by Haig, but careless of defensive organisation and staff work, as comparisons with Plumer’s carefully built Second Army showed. The historiography of Michael argues whether Fifth Army was sacrificed by a command that left it understrength in the expected sector with too little time to dig in, or commanded by a general who was out of his depth — a quarrel the official history and its critics have never entirely settled, and which the scapegoating at the time did little to help.',
    },
  },
  {
    id: 'cavell',
    name: 'Edith Cavell',
    birthDeath: '1865-1915',
    role: 'British nurse in occupied Belgium; executed by firing squad, Brussels, 12 October 1915',
    country: 'United Kingdom',
    bloc: 'occupied',
    bio: {
      primary: 'Edith Cavell was a British nurse in German-occupied Brussels who treated soldiers of both sides alike. She was shot for helping Allied soldiers escape out of Belgium.',
      secondary: 'She ran a training school for nurses and treated German and Allied wounded without discrimination, and she sheltered and helped some 200 Allied soldiers reach the neutral Dutch frontier. Arrested, tried by court-martial under German military law and sentenced to death, she was executed on 12 October 1915 despite appeals for mercy; her killing was condemned worldwide and became one of the war’s greatest propaganda events, and a statue near Trafalgar Square carries her words that patriotism was not enough and she must have no hatred for anyone.',
      university: 'The execution was legally explicable under the occupier’s own military law, which treated the guiding of soldiers to the enemy as capital, and at the same time a catastrophic propaganda error by the German authorities, who shot a nurse after an international appeal for reprieve. Historians now write Cavell’s story in two layers: what she actually did, a dangerous escape network run in occupied Brussels, and the martyr the British press and recruiting offices made of her, whose fame did more than any battle of 1915 to define the war in Britain as a moral crusade.',
    },
  },
  {
    id: 'petain',
    name: 'Philippe Pétain',
    birthDeath: '1856-1951',
    role: 'Commander of the Second Army at Verdun, 1916-17; Commander-in-Chief of the French Armies, May 1917 – November 1918',
    country: 'France',
    bloc: 'entente',
    bio: {
      primary: 'Philippe Pétain was the French general of Verdun in 1916, and after the army mutinied in 1917 he became commander-in-chief and made it willing to fight again.',
      secondary: 'He commanded the Second Army from the start of the German attack on Verdun in February 1916, organising the defence — including the single road down which supplies and reliefs moved — and became a national hero, “the Lion of Verdun”. Nominated to succeed Nivelle on 15 May 1917, he stopped the failed offensives, improved the food, rest and leave of the infantry, and restored discipline; the French army held the defensive while the Americans arrived and the British and Dominion armies took over the work of attacking.',
      university: 'Pétain’s restoration of order in 1917 is documented in the military records: some 3,400 courts-martial, death sentences numbered by different counts between 554 and 629, and — on Guy Pedroncini’s archival study, the most careful — 26 executions carried out, though other accounts put the men shot as examples between 40 and 62; it was severity mixed with clemency, joined to real reforms of the soldiers’ lot. The historiographical argument is the shadow cast forward: the “soldier’s friend” of 1917 became the head of the collaborationist state of Vichy in 1940-44, so that every estimate of his mercy and method in 1917 has been read, fairly or unfairly, through what he did later.',
    },
  },
  {
    id: 'joffre',
    name: 'Joseph Joffre',
    birthDeath: '1852-1931',
    role: 'Commander-in-Chief of the French Armies (Grand Quartier général), August 1914 – December 1916',
    country: 'France',
    bloc: 'entente',
    bio: {
      primary: 'Joseph Joffre was the French commander-in-chief who attacked back on the Marne in September 1914 and stopped the German march on Paris.',
      secondary: 'The Battle of the Frontiers had gone badly and parts of the army were retreating when Joffre ordered the about-face on the Marne that saved Paris and ended Germany’s chance of a quick victory; he was revered as “the victor of the Marne”. But the offensives of 1915 failed at heavy cost, he had underrated Verdun — the forts had been partially disarmed — and Fort Douaumont fell early in 1916, and the joint Somme offensive disappointed. In December 1916 the government removed him from the command, “promoted” him to the first marshal of the Republic’s era and gave him an advisory post he soon resigned.',
      university: 'Joffre’s legend was made by the Marne, and research has complicated it: the German collapse in 1914 owed as much to the failure of the Schlieffen-Moltke plan’s logistics as to French generalship, and Joffre himself owed part of the battle’s conception to Gallieni and Maunoury. The other argument is his fall: was he the obstinate practitioner of the offensive doctrine that bled France in 1915, or the most methodical commander of 1914, whose strategy of attrition was borne out at the Somme? The sources bear out the quarrels — Gallieni’s letters of December 1915 over the Verdun fortifications, the closed parliamentary session that produced Nivelle’s appointment over his head — and historians largely agree only that by late 1916 the man of 1914 could not survive the army’s political democracy.',
    },
  },
  {
    id: 'foch',
    name: 'Ferdinand Foch',
    birthDeath: '1851-1929',
    role: 'Supreme Commander of the Allied Armies on the Western Front (the généralissime), 1918-1920',
    country: 'France',
    bloc: 'entente',
    bio: {
      primary: 'Ferdinand Foch was made supreme commander of the Allied armies in the spring of 1918, when the German offensive threatened to separate the British and French armies. He held the line and launched the counter-offensive that won the war.',
      secondary: 'A corps commander at the Marne in 1914 and the most aggressive of the French generals in the race to the sea, Foch had fallen from influence by the end of 1916. In March 1918, with the British driven back on Amiens, the Allied governments gave him authority — the conferences of Doullens on 26 March and Beauvais on 3 April made him coordinator of the Allied armies, with the title of généralissime — and he flung the mixed Allied reserve into the gaps, stopped the drives on Paris and Hazebrouck, and from July coordinated the counter-strokes that broke the German army’s will by November.',
      university: 'The question the recent literature, led by Elizabeth Greenhalgh’s work, presses is how real Foch’s “supreme command” ever was: at Doullens he received “coordination”, the national commanders reserved their rights for months, and his leverage came from control of the French strategic reserve, the flow of information, and personal force rather than legal authority over British and American troops. He accepted the German armistice on 11 November and dictated its terms; the famous prediction that the 1919 settlement was “not peace but an armistice for twenty years” is universally attributed to him and rests on testimony historians have never been able to document securely.',
    },
  },
  {
    id: 'gallieni',
    name: 'Joseph Gallieni',
    birthDeath: '1849-1916',
    role: 'Military Governor of Paris, 1914-15; Minister of War, October 1915 – March 1916',
    country: 'France',
    bloc: 'entente',
    bio: {
      primary: 'Joseph Gallieni defended Paris in 1914 and pushed the Sixth Army into the German flank at the Battle of the Marne, using commandeered Paris taxis among other transport.',
      secondary: 'Recalled from retirement as military governor of Paris, he refused to treat the capital as an open city, armed its defences and kept the Sixth Army in his hand; when the German right wing swung east of Paris and opened a gap between their armies, he sent Maunoury’s Sixth Army into that gap on 5 September 1914, a day before Joffre’s general counter-offensive, pressing his case against the reluctance of Joffre’s headquarters — one of the decisions that turned the battle. As minister of war from October 1915 he clashed with Joffre over the neglected fortifications of Verdun, and he resigned in March 1916 after criticising Joffre’s handling of the German attack there; he died in May 1916 and was made a marshal posthumously in 1921.',
      university: 'Gallieni stands at the centre of the fight over the credit for the Marne. The taxi story — about 600 requisitioned cabs — is the most inflated episode of the war in France: the cabs and the rail and truck shuttles together moved some 6,000 men of the Sixth Army to the front near Nanteuil-le-Haudouin, a reinforcement far smaller than the legend, and French historians have long argued whether Gallieni conceived the decisive blow or merely shouted loudest. What the records do support is his judgment that the German right was turning away from Paris, his impatience with a headquarters that could not see it, and the authority he claimed to order the attack in the name of the capital’s defence.',
    },
  },
  {
    id: 'nivelle',
    name: 'Robert Nivelle',
    birthDeath: '1856-1924',
    role: 'Commander-in-Chief of the French Armies, December 1916 – May 1917',
    country: 'France',
    bloc: 'entente',
    bio: {
      primary: 'Robert Nivelle promised the French government a breakthrough against the Germans within days in April 1917. When the attack on the Chemin des Dames ridge failed, the French army mutinied and he was dismissed.',
      secondary: 'An artilleryman, he took command of the Verdun counter-offensives in May 1916 and recaptured Fort Douaumont in October, achievements that carried him over Joffre’s head to the supreme command in December 1916 — he owed much of that rise to his fluency in English and to the certainty he telegraphed from the battlefield, which dazzled Briand and the British at the Rome conference in January 1917. “L’heure venue! Confiance!” he promised before the attack of 16 April; partial success gave way to slaughter on the ridge, the offensive was abandoned on 9 May, revolt spread through 21 divisions that month, and on 15 May he was replaced by Pétain and sent to command in North Africa.',
      university: 'Nivelle’s case is the gap between promise and performance: the “manoeuvre by fire”, the rapid methodical attack and his own telegram certainty had worked at Verdun against a pinned enemy, and he promised to repeat it against the deepest field defences on the Western Front, with the surprise lost to delay and weather. Recent historians treat the mutinies that followed not as a collapse of the French army but as its refusal of Nivelle’s doctrine — the soldiers went back to the trenches to defend but would no longer attack — so that his removal on 15 May marks the end of the cult of the decisive breakthrough as French strategy, and the beginning of waiting for steel and America.',
    },
  },
  {
    id: 'briand',
    name: 'Aristide Briand',
    birthDeath: '1862-1932',
    role: 'Prime Minister of France, October 1915 – March 1917',
    country: 'France',
    bloc: 'entente',
    bio: {
      primary: 'Aristide Briand was prime minister of France through the hardest years of total war, from October 1915 to March 1917.',
      secondary: 'An ex-socialist who had been expelled from his party for serving a bourgeois government, he built and held together the wartime concentration of parties, mobilised the economy and manpower of France, and managed — as far as any politician could — the generals. He personally persuaded the socialist-sympathising General Sarrail to take the Salonika command in August 1915, put Gallieni in the War Office to watch Joffre, and in December 1916 finally removed Joffre from the supreme command, replacing him with the persuasive Nivelle. He fell in March 1917 as the Nivelle offensive he had staked his government on began to fail.',
      university: 'Briand is the French civilian strategist in the sources, and the argument is whether he controlled the generals or was seduced by them: his settlement of December 1916, which clipped Joffre’s powers and elevated Nivelle on the strength of a promise read like a sales pitch, is judged either as the high-water mark of political direction of the war or as the act that produced the Aisne disaster and the mutinies. His postwar return as prime minister in 1921-22, and then Locarno and the Kellogg-Briand Pact, read one way as the reconciliation policy foreshadowed by his wartime aims and another as the policy of a man who had misjudged every general he trusted.',
    },
  },
  {
    id: 'poincare',
    name: 'Raymond Poincaré',
    birthDeath: '1860-1934',
    role: 'President of the French Republic, 1913-1920',
    country: 'France',
    bloc: 'entente',
    bio: {
      primary: 'Raymond Poincaré was president of France throughout the war, and took far more interest in policy than French presidents usually did.',
      secondary: 'A conservative lawyer elected in 1913, he shored up the alliance with Russia — his state visit to St Petersburg in July 1914 was the moment Britain’s ambassador warned that the crisis had passed beyond control — and backed the army’s rebuilding before the war. As president he went constantly to the Grand Quartier général, followed strategy, conducted his own conversations with allied ambassadors and statesmen, and watched ministries come and go until Clemenceau’s premiership in November 1917 pushed him politely into the background.',
      university: 'Poincaré’s published diaries, Au service de la France, are the indispensable and dangerous source for the French war: indispensable for the working of the Grand Quartier général and the Quai d’Orsay, dangerous because their author was himself a player in the “oligarchic” diplomacy of the QG — the private channel of president, generals and ambassadors that bypassed the foreign ministry, for which he was later criticised. Historians use him to show how much of the Republic’s war policy ran on personal networks rather than institutions, and are wary of a diary kept by a man who knew history would read it — as they are of the “Poincaré-la-guerre” label German propaganda pinned on him.',
    },
  },
  {
    id: 'clemenceau',
    name: 'Georges Clemenceau',
    birthDeath: '1841-1929',
    role: 'Prime Minister of France, November 1917 – January 1920',
    country: 'France',
    bloc: 'entente',
    bio: {
      primary: 'Georges Clemenceau became prime minister in November 1917 and led France through the last year of the war with the will to fight on to the end.',
      secondary: 'An old radical republican nicknamed “the Tiger”, he came back to power at 76 at the worst moment: Russia was collapsing out of the war, the French army had just mutinied, and the Americans were only just arriving. His policy was neither revolution nor negotiated peace but total victory, enforced by a government that would not flinch; he worked daily with Pétain and Foch, went to the front when the German spring offensive broke over the road to Paris, and in 1919 took Alsace-Lorraine back and pressed for guarantees against a Germany that would, he said, attack again.',
      university: 'Clemenceau’s power was political and rhetorical rather than institutional — he governed without a party, on the fear of what would replace him — and the historiography has spent a century peeling “Père la Victoire” apart: the military strategy of 1917-18 was mostly the generals’, the crisis of 1918 was nearer defeat than the legend admits, and the settlement he won at Paris rested on British and American guarantees that the American senate then refused to ratify, leaving France exactly as exposed as he had predicted. Not elected president in January 1920, he died nine years later having watched his guarantees fail.',
    },
  },
  {
    id: 'sarrail',
    name: 'Maurice Sarrail',
    birthDeath: '1856-1929',
    role: 'Commander of the Armées françaises d’Orient and the Allied Army of the East (Salonika), October 1915 – December 1917',
    country: 'France',
    bloc: 'entente',
    bio: {
      primary: 'Maurice Sarrail commanded the Allied army at Salonika, the stubborn front on the Aegean where the allies spent years quarrelling with the Greeks.',
      secondary: 'He had commanded the Third Army in the Ardennes and at the Marne and Verdun, and been dismissed in July 1915 amid political uproar over failures in Champagne. A professing socialist in an officer corps of conservatives, he was chosen for the East partly because the politicians could trust him: the expedition was meant to help Serbia, which was conquered anyway, and Sarrail spent two years commanding a multinational force against the Bulgarians and Greeks, quarrelling with King Constantine’s government in Athens, until his own dismissal in December 1917. His armies never conquered Bulgaria during his command, and he is remembered also for the French suppression of the Syrian revolt in the 1920s.',
      university: 'Salonika was the front the strategists fought over — Lloyd George’s “Easterners” against Robertson’s Westerners — and Sarrail’s army has been judged ever since by that argument: a sink for men and matériel that the Western Front needed, or the bridgehead that brought Greece in and knocked Bulgaria out in 1918. The archives show that his real trade was diplomacy at the point of a bayonet — controlling a multi-national army inside a country in effect divided against itself — and historians tend now to read his two dismissals, in 1915 and 1917, as much as evidence of the politics around him as of the general himself, though his record in battle is thin.',
    },
  },
  {
    id: 'jaures',
    name: 'Jean Jaurès',
    birthDeath: '1859-1914',
    role: 'Leader of the French Socialists (SFIO) and founder of L’Humanité; assassinated 31 July 1914',
    country: 'France',
    bloc: 'opposition',
    bio: {
      primary: 'Jean Jaurès was the best-known socialist in Europe and the loudest voice against the coming war of 1914. He was shot dead in a Paris café on the evening of 31 July 1914.',
      secondary: 'A deputy for the Tarn and founder of the newspaper L’Humanité, Jaurès led the French Socialists into the unified SFIO of 1905 and argued that workers had nothing to gain from a war between the great powers; he pressed the Socialist International towards joint action, even a general strike, against mobilisation, and worked frantically through the July Crisis for mediation. A nationalist named Raoul Villain shot him at the Café du Croissant, where he was dining with his editorial staff over the peace plans of the morning’s paper, on the evening of 31 July 1914, the day before Germany declared war on Russia and three days before it declared war on France; the socialists voted for war credits within days.',
      university: 'The assassination is usually presented as the hinge of the French left’s conversion, but the chronology argues with the legend: by the last week of July the SFIO and the unions had already accepted the defence of the country against aggression, so historians ask whether Jaurès’s death caused the union sacrée of August 1914 or merely sanctified a conversion already under way — and what a leader of his stature might have made of the war had he lived to conduct the opposition inside it. Villain’s acquittal in 1919, to nationalist cheering, and Jaurès’s translation to the Panthéon, fixed him as the French left’s great martyr of the war it never wanted.',
    },
  },
];
