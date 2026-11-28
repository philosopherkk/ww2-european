import type { EraEvent, EraFigure } from '@/lib/eras/types';

export const dienBienPhu1954: EraEvent = {
  id: "dien_bien_phu_1954",
  date: "1954-05-07",
  precision: "day",
  title: "Viet Minh defeat the French at Dien Bien Phu",
  kind: "siege",
  fronts: ["asia"],
  countries: ["France", "Vietnam"],
  figures: ["ho_chi_minh"],
  note: "One account times the siege at 57 days and names General Vo Nguyen Giap as the commander who encircled the base. The other times it at four months, calls Ho Chi Minh the leader of the siege, and does not name Giap. The lengths and that second commander are not stated above. Troop totals printed in only one account are omitted.",
  levels: {
    primary: {
      cause: "France held Dien Bien Phu near the border with Laos, and Ho Chi Minh’s Viet Minh had the French there under siege.",
      what: "On 7 May 1954 the Viet Minh defeated the French at Dien Bien Phu, and the siege of that position ended.",
      consequence: "The French then left Indochina, and Vietnam was divided along the 17th parallel at the Geneva conference.",
    },
    secondary: {
      cause: "France was still fighting to remain in Indochina, and a French force held Dien Bien Phu near the border with Laos. The Viet Minh besieged that force. Ho Chi Minh is named with the besieging side in each record. One record says he led the siege. The other says the Viet Minh forces were his. The siege of the French base is the setting of the defeat that followed.",
      what: "On 7 May 1954 the French were defeated at Dien Bien Phu. One record says their positions collapsed at the end of the siege. The other says the garrison fell. Ho Chi Minh stands with the victors in both, as the leader of the siege or as the man whose Viet Minh forces won. The day, the place, and that defeat are what the two records share.",
      consequence: "The defeat ended France’s colonial effort in Indochina, and the French left the region. At Geneva, Vietnam was divided along the 17th parallel. One record says the victory cleared the way for that division. The other says the parties agreed a division along the same line. The parallel and the conference are in both. Who would hold the north is not in both.",
    },
    university: {
      cause: "By 1954 France was still at war in Indochina, and its army was at Dien Bien Phu, close to Laos. The Viet Minh had the French under siege there. The two narratives both put Ho Chi Minh with that side, but they do not describe his part in the same words. The diplomatic narrative calls him a Vietnamese nationalist and says the siege was led by him, giving it a length of four months. The other narrative calls him a communist leader, says the forces were his Viet Minh, counts a siege of 57 days, and names General Vo Nguyen Giap as the commander who encircled the base with troops and heavy artillery. The background both sustain is the siege itself: French soldiers at Dien Bien Phu, near Laos, pressed by the Viet Minh of Ho Chi Minh.",
      what: "The date printed in both narratives is 7 May 1954, and on that day the French at Dien Bien Phu were defeated. One narrative says the positions collapsed after 57 days. The other says the garrison fell after four months. The verbs differ, and so do the lengths, so neither length is treated as agreed. The agreed result is the defeat of the French at that place on that day. Ho Chi Minh is inside the diplomatic sentence that dates the fall, which calls the siege his. In the other narrative the dated sentence speaks of the collapse, while his name is attached to the Viet Minh forces that won. Giap is left out of the result because one narrative never mentions him.",
      consequence: "Once the base had fallen, France’s colonial effort in Indochina was finished and the French left the region. Both narratives then place a division of Vietnam along the 17th parallel at the Geneva conference. One says the victory cleared the way for that division. The other says French and Vietnamese delegates met at Geneva and agreed a cease-fire plus a temporary division along the same parallel, with French forces remaining in the south. Temporary, the cease-fire, and the assignment of north and south are details of that single narrative. What both support is the French departure and a division of Vietnam along the 17th parallel at Geneva. American steps after the conference are not the same in each narrative, so they are not part of this result.",
    },
  },
  sources: [
    {
      url: "https://www.history.com/this-day-in-history/may-7/french-defeated-at-dien-bien-phu",
      publisher: "History.com",
    },
    {
      url: "https://history.state.gov/milestones/1953-1960/dien-bien-phu",
      publisher: "Office of the Historian",
    },
  ],
};

export const hoChiMinh: EraFigure = {
  id: "ho_chi_minh",
  name: "Ho Chi Minh",
  role: "Viet Minh leader",
  country: "Vietnam",
  allegiance: "Viet Minh",
  note: "One account calls him a Vietnamese nationalist and says he led a four-month siege. The other calls him a communist leader, gives his Viet Minh the victory, counts 57 days, and names General Vo Nguyen Giap. The second commander and the length of the siege are not folded into one story.",
  bio: {
    primary: "Ho Chi Minh’s Viet Minh defeated the French at Dien Bien Phu on 7 May 1954, when that besieged position fell.",
    secondary: "Ho Chi Minh is the man both records name when the French were defeated at Dien Bien Phu on 7 May 1954. One calls him a nationalist who led the siege. The other calls him the communist leader whose Viet Minh forces won, and it also names a general in the field. This life keeps the day, the place, and his place on the winning side. It does not take up the second commander, or a length for the siege, because those points are not in both records.",
    university: "The life that can be told from both narratives is short and firm. On 7 May 1954 the French position at Dien Bien Phu fell, and Ho Chi Minh is the figure each narrative attaches to the Viet Minh who beat it. Beyond that, the portraits split. A diplomatic account styles him a Vietnamese nationalist and has him leading a four-month siege. A popular account styles him a communist leader, gives the victory to his Viet Minh, times the siege at 57 days, and puts General Vo Nguyen Giap in command of the encirclement, with artillery. Geneva’s division of Vietnam along the 17th parallel is an aftermath both mention, but this life stops at the man and the May defeat rather than retelling the conference. The second general stays out because one page never prints his name.",
  },
  sources: [
    {
      url: "https://www.history.com/this-day-in-history/may-7/french-defeated-at-dien-bien-phu",
      publisher: "History.com",
    },
    {
      url: "https://history.state.gov/milestones/1953-1960/dien-bien-phu",
      publisher: "Office of the Historian",
    },
  ],
};

export const bayOfPigs1961: EraEvent = {
  id: "bay_of_pigs_1961",
  date: "1961-04-17",
  precision: "day",
  title: "Exiles land at the Bay of Pigs",
  kind: "invasion",
  fronts: ["americas"],
  countries: ["Cuba", "United States"],
  figures: ["fidel_castro", "dwight_d_eisenhower"],
  note: "One account says about 1,200 exiles came ashore, that more than 100 were killed, and that more than 1,100 were captured. The other names Brigade 2506 and says the force was defeated within two days. Those figures are not stated above. President Kennedy approved the landing in both accounts. A life of him is already told for the quarantine of October 1962, so none is added here.",
  levels: {
    primary: {
      cause: "President Kennedy approved a landing of Cuban exiles, planned by the CIA, to overthrow Fidel Castro’s government.",
      what: "On 17 April 1961 those exiles landed at the Bay of Pigs, and Castro’s forces defeated them.",
      consequence: "The landing failed, and the exile attack did not overthrow Fidel Castro’s government.",
    },
    secondary: {
      cause: "Cuban exiles were armed and trained by the CIA for an attack meant to overthrow Fidel Castro. President Kennedy had inherited that plan and gave it his approval, a go-ahead in one record and a consent in the other. The target was Castro’s government in Cuba. The place chosen for the men to land was the Bay of Pigs.",
      what: "On 17 April 1961 the exiles landed at the Bay of Pigs in Cuba. Castro’s armed forces met them, and the attack was defeated. One record says they waded ashore and met rapid counterattacks from his military. The other says the landing force was beaten within two days under his direct command. The day, the beach, and the defeat by his forces are the course both records give.",
      consequence: "The exile landing was a failure. Fidel Castro was not removed, and his government remained in Cuba. One record calls the attack an utter failure and prints a count of men killed and captured. The other calls it a failed invasion and says his administration was strengthened afterwards. No shared total of casualties appears, so none is given. The result both support is his survival and the defeat of the landing.",
    },
    university: {
      cause: "The landing at the Bay of Pigs was not a sudden raid thought up on the day. Cuban exiles had been armed and trained under a CIA plan whose purpose was to overthrow Fidel Castro’s government. President John F. Kennedy inherited the plan and approved the attack. One narrative says he gave the go-ahead even though advisers doubted a lightly armed exile assault could work. The other says that, after talks with his advisers, he gave his consent for the clandestine invasion to proceed, having judged Castro a danger in Latin America. A brigade number, a launching country, and a count of about twelve hundred men are each printed in only one of those narratives. The cause both actually share is simpler: Kennedy approved a CIA exile landing whose aim was to bring down Castro.",
      what: "On 17 April 1961 the exile force landed at the Bay of Pigs and was defeated by forces of Fidel Castro. That sentence is as far as the two narratives walk together. One says around twelve hundred men waded ashore with American weapons and landing craft, hoped the Cuban people would rise, and instead met rapid counterattacks, while the small Cuban air force sank supply ships. The other says a named brigade landed that day and was beaten within two days by Cuban armed forces under Castro’s direct command. Weapons, ships, a popular rising, a two-day span, and the phrase about command are therefore not treated as common property. What remains is the landing on that April day and the defeat dealt by Castro’s men.",
      consequence: "The attack failed, and Fidel Castro’s government was not overthrown. One narrative stops the failure in a hard phrase, an utter failure, and then counts more than a hundred attackers killed and more than eleven hundred captured. The other says the failed invasion strengthened his administration, which then spoke openly of socialism and closer ties with the Soviet Union. Those casualty figures, and that later turn toward socialism, are not in both narratives, so they stay out of the result. Kennedy approved the attack in both narratives and is not given a second life. The consequence the narratives share is the broken landing and Castro still at the head of Cuba.",
    },
  },
  sources: [
    {
      url: "https://www.history.com/this-day-in-history/april-17/the-bay-of-pigs-invasion-begins",
      publisher: "History.com",
    },
    {
      url: "https://history.state.gov/milestones/1961-1968/bay-of-pigs",
      publisher: "Office of the Historian",
    },
  ],
};

export const fidelCastro: EraFigure = {
  id: "fidel_castro",
  name: "Fidel Castro",
  role: "Cuban leader",
  country: "Cuba",
  allegiance: "Cuba",
  note: "One account calls him premier and says the landing force was under his direct command. The other calls him the Cuban leader and describes counterattacks by his military. A count of the exiles, and of the dead and captured, appears in only one account.",
  bio: {
    primary: "On 17 April 1961 Fidel Castro’s forces defeated Cuban exiles who landed at the Bay of Pigs to overthrow him.",
    secondary: "Fidel Castro was the Cuban leader the exile landing of 17 April 1961 was meant to overthrow. The men came ashore at the Bay of Pigs, and his forces defeated them. President Kennedy had approved the attack, but this life is Castro’s, not a second telling of Kennedy. One record styles Castro premier and says the troops who won were under his direct command. The other speaks of counterattacks by his military. The office and the command phrase are not shared, so the life keeps the day, the bay, and the defeat of the exiles.",
    university: "Castro enters both narratives as the man whose government the Bay of Pigs landing, on 17 April 1961, was launched to destroy, and as the man whose forces destroyed that landing instead. One narrative, from the diplomatic record, calls him premier, says he was judged a Soviet client, and states that Cuban armed forces under his direct command beat a named brigade within two days. The other, a day-by-day popular account, calls him the Cuban leader, says about twelve hundred exiles waded ashore to rally the people against him, and reports rapid counterattacks by his military, then an utter failure with prisoners and dead. Premier, the brigade, the two-day span, the headcount, and the casualty list each fail to appear twice. The lasting point is the April day: exiles landed to topple him, and his men stopped them.",
  },
  sources: [
    {
      url: "https://www.history.com/this-day-in-history/april-17/the-bay-of-pigs-invasion-begins",
      publisher: "History.com",
    },
    {
      url: "https://history.state.gov/milestones/1961-1968/bay-of-pigs",
      publisher: "Office of the Historian",
    },
  ],
};

export const soweto1976: EraEvent = {
  id: "soweto_1976",
  date: "1976-06-16",
  precision: "day",
  title: "Police shoot students in Soweto",
  kind: "rising",
  fronts: ["africa"],
  countries: ["South Africa"],
  figures: ["hector_pieterson", "hastings_ndlovu", "sam_nzima", "tsietsi_mashinini"],
  note: "One account estimates the march at 3,000 to 10,000 students. Another gives a span reaching 20,000. Death figures also differ, among them an official toll of 23, a first-day count of 23, a claim above 200, and a claim of 176 pupils. No crowd and no death toll are stated above. Hastings Ndlovu, aged 15, is named in both, but the accounts do not agree who was shot first. One page also spells Petersen on a square and a poster. The spelling used here is Pieterson.",
  levels: {
    primary: {
      cause: "Students in Soweto protested against Afrikaans as a medium of instruction in black schools.",
      what: "On 16 June 1976 those students marched to a rally at Orlando Stadium, and police shot students dead, including Hector Pieterson, aged 12.",
      consequence: "The shootings set off unrest that spread through South Africa beyond Soweto.",
    },
    secondary: {
      cause: "Black students in Soweto were required to use Afrikaans as a medium of instruction in school, and they would not accept it. They set out to protest that rule. The gathering point in both records is a rally at Orlando Stadium. The language order, and the students’ march against it, is why the day turned violent. No shared count of the crowd is printed, and none is used.",
      what: "On 16 June 1976 students went from their schools towards Orlando Stadium for the rally. Police shot students, and some were killed. Hector Pieterson, aged 12, was shot dead that day. One record places him at Orlando West High School and names another boy beside him among the first killed. The other ties his death to the same incident as the first student shot, and spells a square with a different ending on his surname. The day, the stadium, his name as Pieterson, and the age of 12 are common to both.",
      consequence: "The deaths became more than a single clash on the road to the stadium. Unrest spread across Soweto and through South Africa. One record says the trouble ran on and reached the next year. The other says the uprising sparked unrest throughout the country and gives a pupil total for the end of that day which the first record does not match. Because the totals differ, no number of dead is stated. The shared result is the spread of unrest after the police shootings.",
    },
    university: {
      cause: "The protest of 16 June 1976 grew from a rule that Afrikaans be used as a medium of instruction for black students in Soweto. Both narratives give that language rule as the reason the students moved. One speaks of a government directive that put Afrikaans alongside English, and of a department decree on an equal basis in secondary schools. The other says the students marched because they were being made to learn in Afrikaans, a tongue many of them called the language of the oppressor. Crowd estimates also refuse to match: one page offers a span of three thousand to ten thousand, and another a span reaching twenty thousand. The cause worth stating is the one both pages will bear: students in Soweto marched against having to be taught in Afrikaans.",
      what: "On the morning of 16 June 1976 students walked towards a rally at Orlando Stadium, and police shot students there. Students were killed. Both narratives name Hector Pieterson, aged 12, among the dead of that day. One says he and fifteen-year-old Hastings Ndlovu were among the first shot dead, at Orlando West High School, and that a photographer, Sam Nzima, made the picture of Pieterson that became the symbol of the uprising. The other says Ndlovu, aged 15, was the first student shot, and that Pieterson was killed in the same incident, his photograph by Nzima making him an international icon. Who was first, and the school as against the road, are not flattened into one line. The line both support is that police killed the twelve-year-old student Hector Pieterson on the day of the stadium march.",
      consequence: "Police fire on the march set off unrest that left Soweto and spread across South Africa. That spread is the result both narratives describe. They do not describe a common death toll. One gives an official figure of 23 and allows that the wider violence may have killed more than 200. The other says 23 people died in Soweto on the first day and, elsewhere on the same page, that 176 pupils had been killed in Soweto by the end of 16 June, with hundreds more dead by early 1977. Those figures cannot be stacked. Both pages also say 16 June is remembered as Youth Day. No toll is stated. The result given here is the unrest that spread from the shootings.",
    },
  },
  sources: [
    {
      url: "https://sahistory.org.za/article/june-16-soweto-youth-uprising",
      publisher: "South African History Online",
    },
    {
      url: "https://en.wikipedia.org/wiki/Soweto_uprising",
      publisher: "Wikipedia",
    },
  ],
};

export const hectorPieterson: EraFigure = {
  id: "hector_pieterson",
  name: "Hector Pieterson",
  role: "student",
  country: "South Africa",
  allegiance: "Soweto students",
  note: "Both accounts say he was 12 and was shot dead by police on 16 June 1976. One says Hastings Ndlovu was shot first. The other names the two boys together among the first. Sam Nzima’s photograph is in both. One page also writes the surname Petersen.",
  bio: {
    primary: "Hector Pieterson, a student aged 12, was shot dead by police in Soweto on 16 June 1976, the day of the march to Orlando Stadium.",
    secondary: "Hector Pieterson was a student of 12 who was shot dead by police in Soweto on 16 June 1976, during the protest that marched on Orlando Stadium. Both records give that age and that day. A photograph taken by Sam Nzima became the image by which many people knew the uprising. One record calls him an international icon because of the picture. The other calls the picture the symbol of the day. A second boy, Hastings Ndlovu, is named beside him, but the records do not agree who was shot first.",
    university: "Pieterson’s life, as both pages will support it, is the day he was killed, not a childhood told from the start. He was a student, aged 12, and police shot him dead in Soweto on 16 June 1976, when students marched towards a rally at Orlando Stadium to resist Afrikaans in the schools. Sam Nzima’s photograph of him is in each account and is what carried his name far beyond the township, one account saying it made him an international icon and the other that it became the symbol of the uprising. Hastings Ndlovu, aged 15, is also named as shot that day. One page says Ndlovu was the first student hit, and the other lists the two boys together among the first, at Orlando West High School. The order and the school are therefore not asserted.",
  },
  sources: [
    {
      url: "https://sahistory.org.za/article/june-16-soweto-youth-uprising",
      publisher: "South African History Online",
    },
    {
      url: "https://en.wikipedia.org/wiki/Soweto_uprising",
      publisher: "Wikipedia",
    },
  ],
};

export const india1947: EraEvent = {
  id: "india_1947",
  date: "1947-08-15",
  precision: "day",
  title: "India becomes independent",
  kind: "succession",
  fronts: ["asia"],
  countries: ["India", "United Kingdom", "Pakistan"],
  figures: ["jawaharlal_nehru", "mahatma_gandhi"],
  note: "One account dates his death to 27 May 1964, says he sent troops into Kashmir in October 1947, and names Lord Mountbatten. The other gives the death as 1964, a birth day of 14 November 1889, nine years in jail, and a partition toll of several hundred thousand. His election as Congress president is 1928 in one account and 1929 in the other. None of those unmatched points is stated as agreed above.",
  levels: {
    primary: {
      cause: "Jawaharlal Nehru was a leader of India’s campaign against British rule, and he followed Mahatma Gandhi in that movement.",
      what: "On 15 August 1947 India became independent from British rule, and Jawaharlal Nehru became its first prime minister.",
      consequence: "He remained prime minister until he died in 1964. Independence divided the country, and Kashmir was already disputed.",
    },
    secondary: {
      cause: "Jawaharlal Nehru came to the independence of India as a nationalist leader shaped by Mahatma Gandhi. One record calls him Gandhi’s political heir in the campaign against British rule, jailed before the British left. The other calls him Gandhi’s successor, a man who negotiated the leaving of the empire and who opposed a religious division before accepting it. A viceroy’s name, and the year he first headed the Congress, are not the same in both records, so neither is used. The cause both give is his leadership, in Gandhi’s line, as British rule ended.",
      what: "On 15 August 1947 India became independent and Nehru became its first prime minister. Both records state that day and that office. One says the country finally gained its independence and that he took the post amid celebration and turmoil. The other says he became the first prime minister of independent India and held the post until his death. The wording differs. The change of status does not: a free India, with Nehru at its head, on 15 August 1947.",
      consequence: "Nehru stayed prime minister until his death in 1964, one record giving a day in May and the other the year alone. Independence came with a division. One record describes partition into India and Pakistan and deaths in the hundreds of thousands, with a quarrel over Kashmir. The other says he faced conflict with Pakistan over Kashmir, disputed at independence, and sent troops. The toll, the May date, and the troops are not in both. The result both support is his ministry, a divided independence, and a Kashmir dispute.",
    },
    university: {
      cause: "The background both narratives give Nehru is the end of British rule and his place beside Gandhi. He was born in Allahabad, educated at Harrow and at Trinity College, Cambridge, and trained in law at the Inner Temple, and both note his marriage to Kamala and a daughter, Indira. Both also say the British imprisoned him. One narrative dates a birth to 14 November 1889, gives nine years in jail, and recalls Amritsar. The other gives 1889 without the November day, says he joined Congress in 1919, and names Mountbatten as the viceroy who pressed a division. A Congress presidency is dated 1929 in one narrative and 1928 in the other. Those particulars stay unmerged. The cause both will bear is Nehru following Gandhi as India left British rule.",
      what: "On 15 August 1947 the shared event is plain. India became independent, and Jawaharlal Nehru became the first prime minister. One narrative sets the sentence in a section on his years in office and adds the turmoil of partition in the same breath. The other makes the date the opening of his ministry and says he kept the office until he died. No ceremony, no midnight speech, and no statute are described in both, so none is asserted. What the narratives support is the independence of India on that August day and Nehru as its first prime minister.",
      consequence: "His ministry ran from that day until his death in 1964. Both narratives carry the story past the celebration. One stresses displacement after partition into India and Pakistan, a Kashmir dispute, and deaths numbered in the hundreds of thousands, then a war with China in 1962 that broke his health. The other dates his death to 27 May 1964, says that in October 1947 he sent troops into Kashmir, and that a war with China in 1962 weighed on the same decline. The toll, the May day, the troops, and any verdict on that war are single-narrative details. Both agree that he served until 1964, that independence was a division, that Kashmir was disputed, and that the 1962 war with China marked his last years.",
    },
  },
  sources: [
    {
      url: "https://www.history.com/articles/jawaharlal-nehru",
      publisher: "History.com",
    },
    {
      url: "https://www.bbc.com/history/historic_figures/nehru_jawaharlal.shtml",
      publisher: "BBC",
    },
  ],
};

export const jawaharlalNehru: EraFigure = {
  id: "jawaharlal_nehru",
  name: "Jawaharlal Nehru",
  role: "prime minister",
  country: "India",
  allegiance: "India",
  note: "Both accounts make him prime minister on 15 August 1947 and keep him in office until his death in 1964. One dates the death to 27 May and the Congress presidency to 1928. The other gives 14 November 1889, nine years in jail, and a Congress presidency in 1929. The day of death and the Congress year are not folded into one story.",
  bio: {
    primary: "On 15 August 1947 Jawaharlal Nehru became the first prime minister of independent India, and he held that office until his death in 1964.",
    secondary: "Jawaharlal Nehru is the man both records name as the first prime minister of independent India on 15 August 1947. He stayed in office until his death in 1964. One record calls him Gandhi’s political heir and sets the partition beside the day he took office. The other calls him Gandhi’s successor and dates the death to 27 May 1964. The May day is not in both, so this life omits it. It keeps Nehru, the August day, and the office he held until 1964.",
    university: "Nehru’s life, on the terms both narratives share, runs to the ministry that began on 15 August 1947. He was born in Allahabad, schooled at Harrow and Trinity College, Cambridge, trained at the Inner Temple, and married to Kamala, with a daughter named Indira. The British jailed him for opposing their rule. One narrative adds a birth day in November 1889, nine years in prison, and Amritsar. The other starts the birth year at 1889 and puts Mountbatten in the talks. A year as Congress president does not match, 1928 against 1929, so it is dropped. On 15 August 1947 he became prime minister of independent India and remained so until 1964. Partition and a dispute over Kashmir attend that day in both narratives. A war with China in 1962, and the harm it did his health, closes the public life both describe.",
  },
  sources: [
    {
      url: "https://www.history.com/articles/jawaharlal-nehru",
      publisher: "History.com",
    },
    {
      url: "https://www.bbc.com/history/historic_figures/nehru_jawaharlal.shtml",
      publisher: "BBC",
    },
  ],
};

export const suez1956: EraEvent = {
  id: "suez_1956",
  date: "1956-07-26",
  precision: "day",
  title: "Nasser nationalises the Suez Canal",
  kind: "diplomacy",
  fronts: ["africa"],
  countries: ["Egypt", "United Kingdom", "France", "Israel"],
  figures: ["gamal_abdel_nasser"],
  note: "One account dates the Israeli attack to 29 October 1956, gives a distance of 10 miles, and a United Nations ceasefire on 6 November, and says compensation was offered. The other speaks of late October, landings in early November, a withdrawal in December, and an Israeli departure in March 1957, and it adds a dam on the Nile. Those dates and the dam are not stated as agreed facts above. The nationalisation itself is 26 July 1956 in both.",
  levels: {
    primary: {
      cause: "Britain and France still controlled the Suez Canal in Egypt, through a company that had held the waterway since it was built.",
      what: "On 26 July 1956 Egyptian President Gamal Abdel Nasser nationalised that canal and took it out of British and French hands.",
      consequence: "Israel then invaded, Britain and France landed troops in Egypt, and the United States and the United Nations pressed those governments to stop.",
    },
    secondary: {
      cause: "The Suez Canal in Egypt was still a British and French holding. One record calls it a joint enterprise that had owned and operated the waterway since construction in 1869, after months of tension among Egypt, Britain, and France. The other says French engineers finished it in 1869 and that London and Paris kept control for 87 years, while Egypt pressed British troops to leave the canal zone. A dam on the Nile, funded by tolls, is a motive in only that second record. Both describe a canal still in British and French hands.",
      what: "On 26 July 1956 Gamal Abdel Nasser, president of Egypt, nationalised the canal. One record says he announced the nationalisation of the company that owned and operated it. The other says the crisis opened when he nationalised the British and French-owned canal, and the page dates that opening to 26 July 1956. An offer of full compensation to the company sits in the first record only. The day, his office, and the transfer of the canal are what the two records share.",
      consequence: "Israel attacked Egypt after the nationalisation, and Britain and France sent troops. One record dates the Israeli advance to 29 October 1956, to within 10 miles of the canal, with British and French soldiers landing a few days later, and a United Nations ceasefire pressed on 6 November. The other says Israel invaded in late October, that the allies landed in early November, and that they withdrew in December, with Israeli forces leaving in March 1957. The mileage, 6 November, December, and March are not printed twice. Both show American and United Nations pressure.",
    },
    university: {
      cause: "By the summer of 1956 a waterway in Egypt was still run for Britain and France. The diplomatic narrative names a joint company, owner and operator since the works of 1869, and months of rising ill will among Egypt, Britain, and France. It adds that the Egyptian president offered shareholders full payment, and that London and Paris, long suspicious of his challenge to their influence, were outraged. The popular narrative instead recalls French engineers, an 87-year span of foreign control, Europe’s use of the route for oil, and a hope that dues would finance a huge dam on the Nile. Shareholder payment, the dam, and the oil are each told once. The setting both sustain is a British and French canal in Egypt.",
      what: "The date both narratives print is 26 July 1956, and the actor is Egyptian president Gamal Abdel Nasser. On that day the canal was nationalised. The diplomatic narrative has him announcing the step in public, taking the operating company into Egyptian hands, and offering to pay its owners. The popular narrative, headed as the entry for that same July day, says the crisis begins with his nationalisation of a British and French canal, and then repeats the act as a July 1956 decision. Verbs differ, announcement against a beginning, and so does the object, a company against the canal itself. Neither difference changes the agreed act: Nasser, president, ended British and French control of the Suez Canal on that day.",
      consequence: "What followed is told with calendars that refuse to match. Both narratives move from the nationalisation to an Israeli attack and then to British and French troops in Egypt. One dates the Israeli thrust at 29 October, to within ten miles of the waterway, and says the allies came ashore a few days later, after talks aimed at overthrowing the president. It then has Washington forcing a United Nations ceasefire on 6 November. The other puts Israel in late October and the landing in early November, then credits Soviet as well as American and United Nations pressure for a December withdrawal, with Israeli soldiers gone in March 1957. Miles, a resignation, December, and March cannot be stacked. The result both will bear is the attack, the landings, and American pressure joined to the United Nations.",
    },
  },
  sources: [
    {
      url: "https://www.history.com/this-day-in-history/july-26/egypt-nationalizes-the-suez-canal",
      publisher: "History.com",
    },
    {
      url: "https://history.state.gov/milestones/1953-1960/suez",
      publisher: "Office of the Historian",
    },
  ],
};

export const gamalAbdelNasser: EraFigure = {
  id: "gamal_abdel_nasser",
  name: "Gamal Abdel Nasser",
  role: "Egyptian president",
  country: "Egypt",
  allegiance: "Egypt",
  note: "One account calls the act an announcement that the canal company was nationalised, and says compensation was offered. The other says the crisis began with the nationalisation and gives a dam on the Nile as the motive. The dam, the compensation, and the later withdrawal dates are not folded into one story.",
  bio: {
    primary: "Gamal Abdel Nasser, president of Egypt, nationalised the Suez Canal on 26 July 1956 and took it from British and French control.",
    secondary: "Gamal Abdel Nasser is the Egyptian president both records name when the Suez Canal left British and French hands on 26 July 1956. One record has him announcing the takeover of the company that owned and operated the waterway, and offering the owners compensation. The other has him nationalising the canal itself and thereby opening the crisis. A Nile dam he hoped to finance, and that offer of compensation, are each printed once, so this life leaves them out. It keeps the man, the July day, and the canal taken into Egyptian hands.",
    university: "Nasser’s life, as both narratives will support it, is the day he took the canal. He was president of Egypt. On 26 July 1956 he nationalised the Suez Canal, until then held by Britain and France. A diplomatic narrative says he announced the nationalisation of the operating company, promised compensation, and so angered London and Paris that they later planned, with Israel, to overthrow him. A popular narrative says the crisis began when he nationalised the canal, hoping tolls would pay for a dam on the Nile, after which Israel invaded in late October and allied troops landed in early November. The company, the compensation, the dam, and a plot to remove him each fail to appear twice. The lasting point is the July day: the president ended British and French control of the canal.",
  },
  sources: [
    {
      url: "https://www.history.com/this-day-in-history/july-26/egypt-nationalizes-the-suez-canal",
      publisher: "History.com",
    },
    {
      url: "https://history.state.gov/milestones/1953-1960/suez",
      publisher: "Office of the Historian",
    },
  ],
};

export const berlinWall1961: EraEvent = {
  id: "berlin_wall_1961",
  date: "1961-08-13",
  precision: "day",
  title: "Barbed wire divides Berlin",
  kind: "diplomacy",
  fronts: ["german_lands"],
  countries: ["East Germany", "Soviet Union"],
  figures: ["walter_ulbricht"],
  note: "One account says the fence was found on the morning of 13 August 1961, raised on Ulbricht’s orders, and dates the opening of the wall to 9 November 1989. The other times the troops at 1 a.m. on 13 August, calls the plan Operation Rose, and gives refugee totals and a death toll that the first account does not match. Nikita Khrushchev and John F. Kennedy are named in both, and lives of them are already told, so none is added here.",
  levels: {
    primary: {
      cause: "East Germans were leaving through West Berlin, and the East German leadership wanted that open route shut.",
      what: "On 13 August 1961 East German leader Walter Ulbricht had barbed wire put up, dividing East Berlin from West Berlin.",
      consequence: "The wire stopped movement between the two halves of the city, and it was later made into a wall that stood until 1989.",
    },
    secondary: {
      cause: "Berlin was the gap through which people left communist East Germany for the West. One record calls it a mass departure from the eastern side, a flow the East German government and Moscow both wanted ended. The other calls Berlin the crossing used by refugees, and it says the open city angered East Germany’s leader. A yearly total of departures, and a figure in the millions, are printed in only one record, so no number of people is used. The cause both describe is the flight through Berlin, which the East German leadership meant to stop.",
      what: "On 13 August 1961 barbed wire went up across Berlin, and Walter Ulbricht is the East German leader both records attach to that day. One record says Berliners awoke to a fence raised overnight on his orders, separating West from East. The other says the open door shut overnight on that date, when East German soldiers and police ringed West Berlin with wire, and that he had chosen the night. The hour, a code name, and the phrase about orders are not in both. The day, the wire, and Ulbricht are.",
      consequence: "The barrier split Berlin and stopped people crossing from one side to the other. One record says the wire was soon built out with cement walls and guard towers, and that it stayed until 9 November 1989, when the border reopened. The other says the fences became a concrete wall with watchtowers, torn down in 1989. A count of panels, escapes, and deaths sits in that second record only. No toll is stated. The shared result is a divided city, a later solid wall, and an ending in 1989.",
    },
    university: {
      cause: "The closing of Berlin answered a flight from east to west through a city that was still open. One narrative traces a mass exodus from the communist sector and a Soviet demand, from 1958, that Western powers leave West Berlin. The popular narrative describes an unsealed city inside East Germany, used as the way out, and a communist leader furious at the loss of people. It prints a yearly range of 200,000 to 300,000 departures and also speaks of millions of refugees. Those counts are absent from the other narrative, so none is treated as agreed. Lives of Khrushchev and of Kennedy are already told for other days. What both narratives give is the exodus through Berlin and an East German will to end it.",
      what: "Both narratives place the barbed wire on 13 August 1961 and name Walter Ulbricht, the East German leader, with that barrier. The diplomatic narrative says that on the morning of that day Berliners found a fence which had gone up overnight on his orders, splitting West from East. The popular narrative says the door shut overnight on 13 August, when East German soldiers and police encircled West Berlin, and that Ulbricht had picked the date for an operation he called Rose, starting at one in the morning. Morning against one o’clock, orders against a chosen launch, and a code name are not flattened into one line. The line both support is that Ulbricht’s East Germany cut Berlin with barbed wire on 13 August 1961.",
      consequence: "Once the wire was up, ordinary crossing stopped, and the fence became a wall that lasted until 1989. The diplomatic narrative adds cement, guard towers, an American condemnation, a tank confrontation that ended when Kennedy and Khrushchev pulled forces back, and an opening on 9 November 1989. The popular narrative replaces the wire with tens of thousands of concrete panels and hundreds of towers, records deaths, and dates the demolition only to 1989. Panel totals, a death toll, the November day, and the tank scene are not common property. Kennedy and Khrushchev are not given another life here. The shared consequence is a city divided by a barrier that hardened into a wall and came down in 1989.",
    },
  },
  sources: [
    {
      url: "https://www.history.com/articles/berlin-wall-construction",
      publisher: "History.com",
    },
    {
      url: "https://history.state.gov/milestones/1953-1960/berlin-crises",
      publisher: "Office of the Historian",
    },
  ],
};

export const walterUlbricht: EraFigure = {
  id: "walter_ulbricht",
  name: "Walter Ulbricht",
  role: "East German leader",
  country: "East Germany",
  allegiance: "East Germany",
  note: "One account says the fence went up on his orders and was found that morning. The other says he chose the night, and it names Operation Rose and 1 a.m. Khrushchev is named beside him in both accounts, and a life of Khrushchev is already told.",
  bio: {
    primary: "Walter Ulbricht, the East German leader, had Berlin closed with barbed wire on 13 August 1961, dividing the east of the city from the west.",
    secondary: "Walter Ulbricht is the East German leader both records name when barbed wire divided Berlin on 13 August 1961. One record says the fence went up overnight on his orders and was there when the city woke. The other calls him the communist leader who chose that night, and whose soldiers and police ringed West Berlin. A code name and an hour of one in the morning are not shared, so they stay out of this life. The life keeps Ulbricht, the August day, and the wire across Berlin.",
    university: "Ulbricht enters both narratives as the East German leader responsible for the barrier of 13 August 1961. In the diplomatic narrative, Berliners awoke that morning to a barbed-wire fence raised overnight on his orders, separating West and East, a fence soon enlarged with cement and towers. In the popular narrative he is the communist chief angered by the flight through the open city, who received leave to close it and sent soldiers and police to encircle West Berlin at one in the morning. Orders, a stored tonnage of wire, and the hour are each in one narrative. Nikita Khrushchev is named beside him in both, but a life of Khrushchev is already told, so this one does not absorb it. What remains is Ulbricht on 13 August 1961, the leader whose barrier cut Berlin.",
  },
  sources: [
    {
      url: "https://www.history.com/articles/berlin-wall-construction",
      publisher: "History.com",
    },
    {
      url: "https://history.state.gov/milestones/1953-1960/berlin-crises",
      publisher: "Office of the Historian",
    },
  ],
};

export const hastingsNdlovu: EraFigure = {
  id: "hastings_ndlovu",
  name: "Hastings Ndlovu",
  role: "student",
  country: "South Africa",
  allegiance: "Soweto students",
  note: "One page says he was the first student shot. The other names him with Hector Pieterson among the first, at Orlando West High School. The order is not stated as agreed.",
  bio: {
    primary: "Hastings Ndlovu, a pupil aged 15, was shot dead by police in Soweto on 16 June 1976, the day students marched against Afrikaans in the schools.",
    secondary: "Hastings Ndlovu was a 15-year-old student killed by police fire in Soweto on 16 June 1976. Pupils that day marched against Afrikaans as a medium of instruction, and both pages set their rally at Orlando Stadium. One page calls him the first student shot, with Hector Pieterson, aged 12, killed in the same incident. The other lists Ndlovu and Pieterson together among the first to die. The order is not the same, so this life keeps the age, the township, and the police killing.",
    university: "What can be said of Ndlovu from the two Soweto pages is the morning of his death, not a childhood. He was a pupil of fifteen. On 16 June 1976 students walked toward a rally at Orlando Stadium because they would not be taught in Afrikaans, and police shot students dead. A South African history page says the first student hit was Hastings Ndlovu, with twelve-year-old Hector Pieterson killed in that same incident. An encyclopaedia page instead says Ndlovu and Pieterson were among the earliest shot, and it places them at Orlando West High School. Neither the sequence nor the schoolyard is printed twice. The shared life is the fifteen-year-old, the June day, and death by police fire in Soweto.",
  },
  sources: [
    {
      url: "https://sahistory.org.za/article/june-16-soweto-youth-uprising",
      publisher: "South African History Online",
    },
    {
      url: "https://en.wikipedia.org/wiki/Soweto_uprising",
      publisher: "Wikipedia",
    },
  ],
};

export const samNzima: EraFigure = {
  id: "sam_nzima",
  name: "Sam Nzima",
  role: "photographer",
  country: "South Africa",
  allegiance: "South Africa",
  note: "One page calls the photograph an international icon. The other calls it an icon and the symbol of the uprising. No birth year for Nzima is printed in both.",
  bio: {
    primary: "Sam Nzima photographed Hector Pieterson, aged 12, after police shot the student dead in Soweto on 16 June 1976, and the picture became the image of the uprising.",
    secondary: "Sam Nzima is the photographer both pages name for the picture of Hector Pieterson, the 12-year-old student police killed in Soweto on 16 June 1976, during the march against Afrikaans. One page says publication of that photograph made the boy an international icon of the rising. The other says the photograph became an icon of the Soweto uprising, and it also calls the picture the symbol of the day. Hastings Ndlovu is named beside Pieterson, but the pages do not agree who was shot first. This life keeps Nzima and the fame of the picture.",
    university: "Nzima enters the two accounts as the person who made the photograph by which many people later knew the Soweto shootings. On 16 June 1976 police fired on students who had marched against Afrikaans, and Hector Pieterson, a pupil of twelve, was among the dead. One narrative says Nzima’s published picture turned Pieterson into an international icon and a rallying point against apartheid. The other narrative says Nzima photographed Pieterson as he was carried away, and that the result became both an icon and the symbol of the uprising. No studio, no later exhibition, and no birth year for the photographer appear in both narratives. Ndlovu is also named as shot that day, with the pages split on who fell first. The life that remains is Nzima’s photograph of the twelve-year-old.",
  },
  sources: [
    {
      url: "https://sahistory.org.za/article/june-16-soweto-youth-uprising",
      publisher: "South African History Online",
    },
    {
      url: "https://en.wikipedia.org/wiki/Soweto_uprising",
      publisher: "Wikipedia",
    },
  ],
};

export const tsietsiMashinini: EraFigure = {
  id: "tsietsi_mashinini",
  name: "Tsietsi Mashinini",
  role: "student leader",
  country: "South Africa",
  allegiance: "Soweto students",
  note: "One page says he addressed Morris Isaacson students as one of the leaders of an action committee. The other says he led them from Morris Isaacson High School. A birth date and a meeting on 13 June are in only one page.",
  bio: {
    primary: "Tsietsi Mashinini was a student leader at Morris Isaacson whose school joined the Soweto march against Afrikaans on 16 June 1976.",
    secondary: "Tsietsi Mashinini is named by both pages as a student leader at Morris Isaacson on 16 June 1976, when pupils marched against Afrikaans and aimed at a rally at Orlando Stadium. One page says he addressed students there, as one of the leaders of an action committee, and that they then set out. The other says he led students from Morris Isaacson High School to join pupils walking from Naledi High School. A birth date and a meeting on 13 June appear in only one page. The life keeps his name, the school, and the march.",
    university: "Mashinini’s part in the rising, as far as both narratives go, is the school he brought into the march. He was a student leader at Morris Isaacson in Soweto. On 16 June 1976 pupils left their classrooms to resist Afrikaans in black schools and to gather for a rally at Orlando Stadium. The South African history narrative has him address the Morris Isaacson students, calling him one of the leaders of the action committee, after which they set out and picked up others along the road. The encyclopaedia narrative has him lead students from Morris Isaacson High School to meet those who had walked from Naledi. An hour of eight in the morning, a given name Teboho, and a birth date are each printed once. What both support is the leader, the school, and the June march.",
  },
  sources: [
    {
      url: "https://sahistory.org.za/article/june-16-soweto-youth-uprising",
      publisher: "South African History Online",
    },
    {
      url: "https://en.wikipedia.org/wiki/Soweto_uprising",
      publisher: "Wikipedia",
    },
  ],
};

export const mahatmaGandhi: EraFigure = {
  id: "mahatma_gandhi",
  name: "Mahatma Gandhi",
  role: "independence leader",
  country: "India",
  allegiance: "Indian National Congress",
  note: "One page says Mahatma Gandhi. The other says Mohandas Gandhi. A viceroy, and any date of his birth or death, is not in both.",
  bio: {
    primary: "Gandhi was the leader Jawaharlal Nehru followed against British rule, and on 15 August 1947 Nehru became prime minister of independent India.",
    secondary: "Gandhi is the leader both pages set above Jawaharlal Nehru in the campaign that ended British rule in India. One page calls him Mahatma Gandhi, says Nehru was his political heir, and recalls a non-cooperation campaign he led. The other calls him Mohandas Gandhi, leader of the Indian National Congress, and says that by the end of the war Nehru was recognised as his successor. On 15 August 1947 that successor became the first prime minister of independent India. A viceroy and any date of Gandhi’s birth or death are not in both pages.",
    university: "The public life these two narratives will support for Gandhi is the leadership Nehru inherited, not a separate biography of courts and prisons. One narrative styles him Mahatma Gandhi, calls Nehru the political heir of that leader, and places Gandhi at the head of the non-cooperation movement in the early 1920s. The other narrative styles him Mohandas Gandhi, the Congress leader who shaped the young Nehru, and says Nehru was recognised as Gandhi’s successor and then took a central part in the talks on independence. A last viceroy appears in that second narrative only. On 15 August 1947 India left British rule and Nehru became its first prime minister, the dated change both pages attach to the succession. Gandhi’s birth, his death, and any later shrine are not asserted, because the pages do not share them.",
  },
  sources: [
    {
      url: "https://www.history.com/articles/jawaharlal-nehru",
      publisher: "History.com",
    },
    {
      url: "https://www.bbc.com/history/historic_figures/nehru_jawaharlal.shtml",
      publisher: "BBC",
    },
  ],
};

export const janosKadar: EraFigure = {
  id: "janos_kadar",
  name: "János Kádár",
  role: "party leader",
  country: "Hungary",
  allegiance: "Hungary",
  note: "One page says he was flown from Moscow to Szolnok and prepared to take power. The other says he proclaimed a worker-peasant government there early on 4 November. The flight and the title are not folded into one story.",
  bio: {
    primary: "On 4 November 1956 János Kádár was at Szolnok, where he took the lead of a new Hungarian government as Soviet power struck Budapest.",
    secondary: "János Kádár is the man both pages place at Szolnok on 4 November 1956, the morning Soviet forces attacked Budapest. One page calls him Nagy’s imminent replacement, flown in secret from Moscow, and says he prepared to take power with Moscow’s backing. The other says that at Szolnok he proclaimed a new workers’ and peasants’ government, and it prints an early hour. The flight, the mileage, the hour, and the formal title are not all in both pages. The life keeps Kádár, Szolnok, and a new government under him.",
    university: "Kádár’s part on the morning of the Soviet attack is told in two registers that meet at a town and a date. On 4 November 1956, while tanks entered Budapest and Imre Nagy’s ministry was overwhelmed, Kádár was at Szolnok. The popular narrative says he had been flown secretly from Moscow, about sixty miles south-east of the capital, and was ready to take power with Moscow behind him. The longer narrative says that early that morning he proclaimed a revolutionary worker-peasant government and called for an end to what he termed counter-revolution. Secret flight, a distance, a clock time, and that title are each from one narrative. Nagy’s radio announcement is already a separate life. These pages add Kádár at Szolnok, heading a replacement government.",
  },
  sources: [
    {
      url: "https://www.history.com/this-day-in-history/november-4/soviets-put-brutal-end-to-hungarian-revolution",
      publisher: "History.com",
    },
    {
      url: "https://en.wikipedia.org/wiki/Hungarian_Revolution_of_1956",
      publisher: "Wikipedia",
    },
  ],
};

export const leonidBrezhnev: EraFigure = {
  id: "leonid_brezhnev",
  name: "Leonid Brezhnev",
  role: "Soviet leader",
  country: "Soviet Union",
  allegiance: "Soviet Union",
  note: "One page says he warned Dubček to halt the reforms. The other says that on 18 August he announced the intervention for the night of 20 August, and it calls him general secretary. Those acts are not treated as one.",
  bio: {
    primary: "Leonid Brezhnev was the Soviet leader when Warsaw Pact armies invaded Czechoslovakia on the night of 20 August 1968.",
    secondary: "Leonid Brezhnev is the Soviet leader both pages name when Warsaw Pact armies invaded Czechoslovakia on the night of 20 August 1968, against Alexander Dubček’s liberal reforms. One page says Brezhnev warned Dubček to stop those reforms, and that the warning was brushed aside. The other says that at a pact meeting on 18 August he announced the intervention would go ahead that night, and it styles him general secretary. The warning and the announcement are not one agreed act. The life keeps the man, the Soviet leadership, and the August invasion.",
    university: "Brezhnev stands in both narratives as the Soviet figure attached to the crushing of the Czechoslovak reform. The popular narrative calls him Soviet leader Leonid Brezhnev, says he warned Alexander Dubček to halt the liberal course, and then moves to the night invasion. The longer narrative lists him among the commanders, calls him general secretary elsewhere, and says that on 18 August he told a pact meeting the intervention would proceed on the night of 20 August. It also says he wanted the operation to look multilateral, unlike the Soviet move in Hungary in 1956. A warning, the meeting of the 18th, and the comparison with Hungary are not copied into one line. Dubček’s own life is already told. Brezhnev’s life here is the Soviet leadership of that August invasion.",
  },
  sources: [
    {
      url: "https://www.history.com/this-day-in-history/august-20/soviets-invade-czechoslovakia",
      publisher: "History.com",
    },
    {
      url: "https://en.wikipedia.org/wiki/Warsaw_Pact_invasion_of_Czechoslovakia",
      publisher: "Wikipedia",
    },
  ],
};

export const dwightDEisenhower: EraFigure = {
  id: "dwight_d_eisenhower",
  name: "Dwight D. Eisenhower",
  role: "president",
  country: "United States",
  allegiance: "United States",
  note: "One page says he ordered the CIA to train and arm exiles, and that Kennedy inherited the program. The other says he directed a plan to invade and to overthrow Castro. The verbs are not merged.",
  bio: {
    primary: "In March 1960 President Dwight D. Eisenhower had the CIA prepare Cuban exiles for an attack on Cuba, the plan carried out at the Bay of Pigs.",
    secondary: "Dwight D. Eisenhower was president when, in March 1960, he set the CIA to work on an exile attack against Cuba. Both pages place that decision at the origin of the Bay of Pigs landing. One says he ordered the agency to train and arm Cuban exiles, and that John F. Kennedy inherited the program. The other says he directed a plan to invade and overthrow Fidel Castro. Kennedy’s later approval is already a life of Kennedy. This life keeps Eisenhower, March 1960, and the CIA plan.",
    university: "Eisenhower’s link with the Bay of Pigs is the decision of March 1960, not the beach of the following year. He was president of the United States. Both narratives say that in that month he put the Central Intelligence Agency onto a Cuban exile operation. The popular narrative uses the verb ordered, speaks of training and arms, and says Kennedy inherited the program on taking office. The diplomatic narrative uses the verb directed, speaks of a plan to invade and to overthrow Castro, and says the agency funded a counter-revolutionary force. Those verbs, and the word overthrow, are not flattened into one formula. A brigade number is not in this pair of sentences. Kennedy is not given a second life. What remains is Eisenhower’s March 1960 instruction that the agency prepare the exile attack.",
  },
  sources: [
    {
      url: "https://www.history.com/this-day-in-history/april-17/the-bay-of-pigs-invasion-begins",
      publisher: "History.com",
    },
    {
      url: "https://history.state.gov/milestones/1961-1968/bay-of-pigs",
      publisher: "Office of the Historian",
    },
  ],
};

export const vladimirPutin: EraFigure = {
  id: "vladimir_putin",
  name: "Vladimir Putin",
  role: "Russian leader",
  country: "Russia",
  allegiance: "Russia",
  note: "One page calls him Russian president and says the announcement supported Donetsk and Luhansk. The other says he announced a full-scale land, sea, and air invasion, and it states a motive the first page does not share.",
  bio: {
    primary: "On 24 February 2022 the Russian leader Vladimir Putin announced Russia’s invasion of Ukraine.",
    secondary: "Vladimir Putin is the Russian leader both pages name as announcing the invasion of Ukraine on 24 February 2022. One page calls him the Russian president and says he announced an operation in support of the breakaway republics of Donetsk and Luhansk. The other says he announced a full-scale invasion by land, sea, and air, aimed at military targets and cities, and it adds a motive about demilitarising Ukraine. The name of the operation and that motive are not in both pages. The life keeps Putin and the announcement of the invasion on that day.",
    university: "Putin’s act, on the terms these two narratives share, is the announcement that opened the invasion. One narrative calls him Russian president Vladimir Putin and says that on 24 February 2022 he announced an operation to support the Russian-backed republics of Donetsk and Luhansk, after a period in which an attack had been denied. The other says that on the same February day he announced a full-scale land, sea, and air invasion, and that he claimed aims of demilitarisation and an end to an alleged genocide. A presidential title in the first narrative, a three-service formula in the second, and the claimed aims are not merged. The shared point is the announcement, on 24 February 2022, that Russia was invading Ukraine.",
  },
  sources: [
    {
      url: "https://en.wikipedia.org/wiki/Russian_invasion_of_Ukraine",
      publisher: "Wikipedia",
    },
    {
      url: "https://www.cfr.org/global-conflict-tracker/conflict/conflict-ukraine",
      publisher: "Council on Foreign Relations",
    },
  ],
};

export const margaretThatcher: EraFigure = {
  id: "margaret_thatcher",
  name: "Margaret Thatcher",
  role: "British political leader",
  country: "United Kingdom",
  allegiance: "United Kingdom",
  note: "One page calls her prime minister at a crisis meeting. The other does not use that office, and instead ties the victory to the 1983 election. The office is not stated as agreed.",
  bio: {
    primary: "Margaret Thatcher is the British figure both accounts name with the Falklands War, opened by Argentina’s invasion of the islands on 2 April 1982.",
    secondary: "Margaret Thatcher is named on the British side of the Falklands War, which began on 2 April 1982 when Argentine forces invaded the islands. One page calls her prime minister and says she headed a crisis meeting at which an admiral advised that a task force could be sent. The other quotes her on the victory and says that success helped a Conservative win in the 1983 election. The meeting and the election are not in both pages. The life keeps her name and the war.",
    university: "Thatcher is the British political name both narratives attach to the Falklands War, and they do not describe the same moment. The encyclopaedia says Prime Minister Margaret Thatcher headed a crisis meeting after a junta in Buenos Aires had decided to go ahead, and that Admiral Sir Henry Leach advised her a task force could and should sail if the islands were invaded. The army museum prints a line of hers, that victory ended a long retreat in foreign policy, and says the victory helped a Conservative win in the general election of 1983. Office, the sea lord, and that poll are not treated as agreed. Argentina’s invasion on 2 April 1982 is the opening both narratives give. Her life here is a place on the British side of the war.",
  },
  sources: [
    {
      url: "https://www.nam.ac.uk/explore/british-army-and-falklands-war",
      publisher: "National Army Museum",
    },
    {
      url: "https://en.wikipedia.org/wiki/Falklands_War",
      publisher: "Wikipedia",
    },
  ],
};

export const leopoldoGaltieri: EraFigure = {
  id: "leopoldo_galtieri",
  name: "Leopoldo Galtieri",
  role: "general",
  country: "Argentina",
  allegiance: "Argentina",
  note: "One page calls him dictator and says he resigned three days after the surrender. The other calls him head of a junta and acting president. Those titles are not folded into one.",
  bio: {
    primary: "General Leopoldo Galtieri led Argentina’s military government in the Falklands War, which began with the invasion of the islands on 2 April 1982.",
    secondary: "General Leopoldo Galtieri is the Argentine leader both pages name for the Falklands War, which opened on 2 April 1982 when Argentine forces invaded the islands. One page calls him the country’s dictator and says he resigned three days after his forces surrendered. The other says a junta headed by him, styled acting president, came to office before the war. Dictator, acting president, and the resignation are not shared titles. The life keeps the general and his leadership of the military government that fought the war.",
    university: "The two narratives agree on a name and a war, then they part. He is General Leopoldo Galtieri, at the head of the Argentine military government during the Falklands fighting. A museum account uses the word dictator and dates a resignation three days after the surrender, with civilian government back in 1983. A reference account speaks of a fresh junta, the parenthetical acting president, and two colleagues, an airman and a sailor, one of whom wanted a military answer to the claim on the islands. Those extras stay aside. The seizure dated 2 April 1982 is the start both give. His place here is that command.",
  },
  sources: [
    {
      url: "https://www.nam.ac.uk/explore/british-army-and-falklands-war",
      publisher: "National Army Museum",
    },
    {
      url: "https://en.wikipedia.org/wiki/Falklands_War",
      publisher: "Wikipedia",
    },
  ],
};

export const jeremyMoore: EraFigure = {
  id: "jeremy_moore",
  name: "Jeremy Moore",
  role: "general",
  country: "United Kingdom",
  allegiance: "United Kingdom",
  note: "One page has him reach San Carlos on 30 May and take the land campaign. The other calls him divisional commander and has him plan an offensive against Stanley. The date and the beach are not in both.",
  bio: {
    primary: "Major General Jeremy Moore commanded the British land forces in the Falklands campaign to retake the islands after the invasion of 2 April 1982.",
    secondary: "Major General Jeremy Moore is the British land commander both pages name in the Falklands War, after Argentine forces invaded the islands on 2 April 1982. One page says he took command of the land campaign when a second brigade arrived, reaching San Carlos on 30 May. The other calls him the divisional commander who could then plan an offensive against Stanley. The May date and the beachhead are not in both pages. The life keeps his rank and the land command.",
    university: "Once the landing force was ashore, command of the soldiers passed to a Royal Marine general whom both narratives name. The museum has him waiting on a second brigade, then arriving at the beachhead on the last day of May and pointing battalions toward the capital. The reference narrative waits until those reinforcements exist and then has him design an attack on the town. Neither a clock nor a beach name is repeated. Britain was recovering islands seized on 2 April 1982. The office he held was land command of that recovery.",
  },
  sources: [
    {
      url: "https://www.nam.ac.uk/explore/british-army-and-falklands-war",
      publisher: "National Army Museum",
    },
    {
      url: "https://en.wikipedia.org/wiki/Falklands_War",
      publisher: "Wikipedia",
    },
  ],
};

export const ianMckay: EraFigure = {
  id: "ian_mckay",
  name: "Ian McKay",
  role: "sergeant",
  country: "United Kingdom",
  allegiance: "United Kingdom",
  note: "One page sets the act on Mount Longdon against a machine-gun post. The other says a grenade attack on a bunker, in the Parachute Regiment. The manner of death is not agreed.",
  bio: {
    primary: "Sergeant Ian McKay was killed in the Falklands fighting and received a posthumous Victoria Cross.",
    secondary: "Sergeant Ian McKay is the British soldier both pages name as killed in the Falklands War and honoured with a posthumous Victoria Cross. Argentina had invaded the islands on 2 April 1982. One page sets his death on Mount Longdon and says he charged a machine-gun post. The other says he died in a grenade attack on a bunker while serving with the Parachute Regiment. The mountain and the weapon are not shared. The life keeps the sergeant, his death, and the cross.",
    university: "McKay’s life, as these two pages will support it, is a death in the island battles and a cross awarded afterwards, not one agreed picture of his last minutes. Both call him Sergeant Ian McKay. The museum places the act on Mount Longdon, after a mine gave the advance away, and says the decoration marked a charge on a machine-gun post. The encyclopaedia assigns him to a platoon of 3 PARA and says he died in a grenade attack on an Argentine bunker, the Victoria Cross following his death. Mine, mountain, machine-gun, grenade, and the platoon are each told once. The war opened on 2 April 1982 when Argentine forces seized the islands. What remains is the sergeant, killed in that war, and the cross that came after.",
  },
  sources: [
    {
      url: "https://www.nam.ac.uk/explore/british-army-and-falklands-war",
      publisher: "National Army Museum",
    },
    {
      url: "https://en.wikipedia.org/wiki/Falklands_War",
      publisher: "Wikipedia",
    },
  ],
};
export const prc1949: EraEvent = {
  id: "prc_1949",
  date: "1949-10-01",
  precision: "day",
  title: "Mao Zedong proclaims the People’s Republic of China",
  kind: "succession",
  fronts: ["asia"],
  countries: ["China"],
  figures: ["mao_zedong"],
  note: "One account says he named himself head of state and that Zhou Enlai was named premier. The other calls him the Chinese Communist leader, adds the initials PRC, and does not name Zhou or that office. Chiang Kai-shek is named in both, but one ties his regime to the proclamation and the other places him in earlier talks and in the fighting that followed. He is not given a life. An abduction in 1937 is outside this era and is not retold.",
  levels: {
    primary: {
      cause: "Mao Zedong’s Communist forces were fighting the Chinese Nationalists in a civil war that had not been settled.",
      what: "On 1 October 1949 Mao Zedong proclaimed the People’s Republic of China and declared that state into being.",
      consequence: "The proclamation closed the civil war with the Nationalists, and the People’s Republic was the government he announced.",
    },
    secondary: {
      cause: "Behind the announcement lay an unfinished war. Armies of the Communist Party were still engaged with Nationalist opponents. A popular history treats the long battle as the road that climbed toward the day of the announcement. A diplomatic history says full-scale fighting between those two parties, which had flared once an earlier world war ended, was the conflict the announcement brought to a stop. The open war is the setting both pages share.",
      what: "Both pages date the act to 1 October 1949. Mao Zedong then made the People’s Republic of China public. One calls him a revolutionary and says he officially proclaimed the existence of the republic. The other calls him leader of the Chinese Communists and says he declared its creation, adding the initials PRC beside the name. Revolutionary, officially, and those initials are each printed once. The common act is his public declaration of the republic on that October day.",
      consequence: "After the republic had been declared, the war against the Nationalists was over in each telling. One names the proclamation as the climax of years of battle with their regime. The other says the announcement ended that costly war. A climax and a formal end are different verbs, so neither finer verb is kept as the result. What remains is a finished war and a republic under the name he had given.",
    },
    university: {
      cause: "Two narratives reach the same morning from different shelves. The popular narrative speaks of years of battle between communist forces and a Nationalist regime that had received American money and arms, and it treats the coming announcement as the high point of that struggle. The diplomatic narrative speaks of a full-scale civil war between the Communist Party and the Nationalist Party, also called the Kuomintang, breaking out once the world war was over and running, with older quarrels behind it, until the announcement. American aid, the party’s alternate name, and the claim that fighting resumed immediately after the world war are each told once. What both sustain is simpler: Communist armies and Nationalist armies were still in a civil war when the new state was declared.",
      what: "The calendar day is 1 October 1949 in both narratives, and the man is Mao Zedong. On that day he brought the People’s Republic of China into being. The popular narrative says a communist revolutionary officially proclaimed the existence of the republic, and in the same breath it has him name himself head of state while Zhou Enlai is named premier. The diplomatic narrative says the Chinese Communist leader declared the creation of the People’s Republic, and it places the letters PRC in parentheses. Head of state, the premier, and the parenthetical initials fail to appear twice. Stripped of those extras, the act is his declaration of the republic on the first day of October 1949.",
      consequence: "The war with the Nationalists does not continue past the declaration in either narrative. One calls the proclamation the climax of the battle with the Nationalist regime. The other says the announcement ended the civil war with the Nationalist Party. Chiang Kai-shek is named in both narratives, but not for the same moment: one ties his regime to the proclamation, and the other sets him in earlier talks and in the fighting that followed those talks. Because that part is not the same, he is not given a separate life. The result both narratives support is the close of the civil war and the republic Mao Zedong had declared.",
    },
  },
  sources: [
    {
      url: "https://www.history.com/this-day-in-history/october-1/mao-zedong-proclaims-peoples-republic-of-china",
      publisher: "History.com",
    },
    {
      url: "https://history.state.gov/milestones/1945-1952/chinese-rev",
      publisher: "Office of the Historian",
    },
  ],
};

export const maoZedong: EraFigure = {
  id: "mao_zedong",
  name: "Mao Zedong",
  role: "Communist leader",
  country: "China",
  allegiance: "Chinese Communists",
  note: "One page calls him a communist revolutionary who named himself head of state, and it names Zhou Enlai as premier. The other calls him the Chinese Communist leader and does not name Zhou or that office. Chiang Kai-shek is not given a life, because the pages do not assign him the same part on 1 October 1949.",
  bio: {
    primary: "On 1 October 1949 Mao Zedong proclaimed the People’s Republic of China, and that declaration closed the civil war his Communist forces had fought against the Nationalists.",
    secondary: "Mao Zedong is the Communist leader both pages name when the People’s Republic of China was declared on 1 October 1949. A popular page calls him a revolutionary who officially proclaimed the state’s existence, and it says he named himself head of state. A diplomatic page calls him the Chinese Communist leader who declared the creation of the republic, and it says the announcement ended the civil war with the Nationalist Party. Head of state, a premier named beside him, and a second party title are not in both pages.",
    university: "The life that survives the two narratives is the speaker of 1 October 1949. He is Mao Zedong. Each narrative has him bring the People’s Republic of China into public being, and each sets that act at the end of the Communists’ war with the Nationalists. Beyond the name and the day the portraits split. One styles him a revolutionary, has him claim the office of head of state, and places Zhou Enlai beside him as premier. The other styles him leader of the Chinese Communists, uses the initials PRC, and does not print the premier or that personal office. Chiang Kai-shek appears in both, yet not in the same role on the proclamation day, so he stays out of this life. What remains is Mao, the October declaration, and the republic.",
  },
  sources: [
    {
      url: "https://www.history.com/this-day-in-history/october-1/mao-zedong-proclaims-peoples-republic-of-china",
      publisher: "History.com",
    },
    {
      url: "https://history.state.gov/milestones/1945-1952/chinese-rev",
      publisher: "Office of the Historian",
    },
  ],
};

export const koreanWar1950: EraEvent = {
  id: "korean_war_1950",
  date: "1950-06-25",
  precision: "day",
  title: "North Korea invades South Korea",
  kind: "invasion",
  fronts: ["asia"],
  countries: ["North Korea", "South Korea", "United States"],
  figures: ["harry_s_truman"],
  note: "One page says the invaders headed toward Seoul and that President Truman dispatched land, air, and sea forces in what he called a police action. The other says Seoul fell on 28 June and that on 27 June he ordered air and sea forces only. Kim Il-sung and Syngman Rhee are named in only one page, so neither receives a life. Douglas MacArthur is named for this June decision on only one page, so that June decision is not a life of his. A ceasefire day of 27 July 1953, troop shares, and casualty totals are not stated above.",
  levels: {
    primary: {
      cause: "After the Second World War, Korea was divided into a Soviet occupation zone in the north and an American zone in the south.",
      what: "On 25 June 1950 North Korean forces invaded South Korea, and that attack opened the Korean War.",
      consequence: "The United States, acting with the United Nations, moved to help South Korea against the invasion.",
    },
    secondary: {
      cause: "Korea had come out of the Second World War as a former Japanese possession, split into occupation zones. Soviet forces held the north. American forces held the south. Both pages name the 38th parallel as the line between the two Koreas. One page calls the split temporary and then permanent, like Germany. The other says separate governments followed in 1948. The year of those governments, and the comparison with Germany, are not in both pages. The shared background is the Soviet north and the American south.",
      what: "On 25 June 1950 forces from North Korea invaded South Korea and the Korean War began. One page says they surprised the southern army and a small American unit, and quickly made for the capital, Seoul. The other says the attack was launched that day and that the capital was the prize, later dating its fall to 28 June. Surprise, the American unit, and that later date are not shared. The day, the invader, the country attacked, and the opening of the war are what both pages give.",
      consequence: "The United Nations, with the United States in the lead, took up South Korea’s defence. One page says Washington acted under United Nations auspices and pushed a Security Council resolution while Russia was absent. The other says the Council denounced the invasion and called on members to help, the Soviet representative being away. Russia as against the Soviet title, a veto, and the wording of the call are not folded into one. The shared result is American help to the south under the United Nations. A ceasefire in 1953 is as far as the ending is agreed.",
    },
    university: {
      cause: "The invasion sits on a division both narratives date to the aftermath of the world war. Korea had been a Japanese possession. When that war ended, the Soviet Union held the northern occupation zone and the United States held the southern one. Both narratives name the 38th parallel as the line between the Koreas. A popular narrative stresses that the division had been meant as temporary and then hardened, and that Moscow fostered a communist regime while Washington became the south’s mainstay. A reference narrative adds the year 1948 for the two governments, and the names Kim Il-sung in Pyongyang and Syngman Rhee in Seoul. Those extras appear once. The cause the narratives share is the split itself: a Soviet zone in the north and an American zone in the south.",
      what: "Both narratives date the opening blow to 25 June 1950. North Korean forces invaded South Korea, and the Korean War started. The popular narrative says the blow surprised the southern army and a small American force, and that the columns headed toward Seoul. The reference narrative says North Korea launched the invasion that day, names the peninsula as the field, and only later records the capital’s capture, on 28 June. An hour before dawn, an operation name, and the claim that war was not declared are each printed in the reference narrative alone. None of those details is treated as common property. The agreed course is the June invasion of the south and the start of the war.",
      consequence: "Help for the south was organised through the United Nations, and the United States carried it. The popular narrative has the United States, under United Nations auspices, carry a Security Council resolution while Russia sat out the meeting and could not cast a veto, after which Truman sent land, air, and sea forces and called the effort a police action. The reference narrative has the Council denounce the invasion in the Soviet representative’s absence and ask members to repel it, and it dates an American order for air and sea forces to 27 June. The empty seat is the point both actually share. Services, the police-action phrase, and 27 June are not. Further on, both narratives allow a ceasefire in 1953, while a day in July, a list of Chinese intervention, and counts of the dead stay with a single narrative.",
    },
  },
  sources: [
    {
      url: "https://www.history.com/this-day-in-history/june-25/korean-war-begins",
      publisher: "History.com",
    },
    {
      url: "https://en.wikipedia.org/wiki/Korean_War",
      publisher: "Wikipedia",
    },
  ],
};

export const harrySTruman: EraFigure = {
  id: "harry_s_truman",
  name: "Harry S. Truman",
  role: "president",
  country: "United States",
  allegiance: "United States",
  note: "One page says he rapidly dispatched land, air, and sea forces and called the effort a police action, without dating the order. The other dates an order for air and sea forces to 27 June 1950. The day and the services are not stated as agreed.",
  bio: {
    primary: "Harry S. Truman, president of the United States, sent American forces to help South Korea after North Korea invaded on 25 June 1950.",
    secondary: "Harry S. Truman is the American president both pages name after North Korea invaded the south on 25 June 1950. He sent United States forces to assist South Korea. One page says he rapidly dispatched land, air, and sea forces and termed the effort a police action, and it gives no date for the order. The other says that on 27 June he ordered air and sea forces to aid the south. The date, the police-action phrase, and whether land forces were in that first order are not shared. The life keeps that decision.",
    university: "Truman enters both narratives as the president who committed American forces once North Korea had invaded South Korea on 25 June 1950. That is the whole of the agreement. A popular narrative has him act after a Security Council resolution, sending land, air, and sea forces into what he called a police action, and it never prints a day for the order. A reference narrative prints 27 June 1950 and limits that order to air and sea forces sent to aid the south. Land forces, the police-action label, and the June date of the order therefore cannot be stated together. Kim Il-sung, named on one page as the northern leader, and Douglas MacArthur, named there among later commanders, are absent from the other page, so neither is folded into Truman’s story. His place is the presidency and the decision to send help.",
  },
  sources: [
    {
      url: "https://www.history.com/this-day-in-history/june-25/korean-war-begins",
      publisher: "History.com",
    },
    {
      url: "https://en.wikipedia.org/wiki/Korean_War",
      publisher: "Wikipedia",
    },
  ],
};

export const kuwait1990: EraEvent = {
  id: "kuwait_1990",
  date: "1990-08-02",
  precision: "day",
  title: "Iraq invades Kuwait",
  kind: "invasion",
  fronts: ["asia"],
  countries: ["Iraq", "Kuwait", "United States"],
  figures: ["saddam_hussein"],
  note: "One page says the troops were under Saddam Hussein’s command, that Kuwait City fell within hours, and that the emir fled to Saudi Arabia. The other speaks of one hundred thousand Iraqi troops, names debt, islands, and oil grievances, and says the royal family escaped to Saudi Arabia while troops moved on Kuwait City. Those figures and grievances are not stated above. A coalition count, an oil share, and General Norman Schwarzkopf appear in only one page.",
  levels: {
    primary: {
      cause: "Saddam Hussein was president of Iraq, and Iraqi forces were turned against Kuwait, a weaker neighbour.",
      what: "On 2 August 1990 those forces invaded Kuwait and overran the country within hours.",
      consequence: "The United Nations Security Council demanded Iraq’s immediate withdrawal, and a later war led by the United States drove the invaders out.",
    },
    secondary: {
      cause: "Saddam Hussein, president of Iraq, is the man both pages set over the crisis with Kuwait. One says Iraqi forces invaded under his command, and it calls Kuwait a small, oil-rich neighbour. The other calls him Iraqi president, records threats and accusations he had aimed at Kuwait, and calls that neighbour rich but militarily weak. Debt, islands, and a charge of stolen oil are in only one page. Command, as a word on the invasion itself, is in only the other. The cause they share is his presidency and an Iraqi move against the weaker neighbour.",
      what: "On 2 August 1990 Iraqi forces invaded Kuwait and overran it within hours. One page says the capital, Kuwait City, was taken in those hours, that the emir fled to Saudi Arabia, and that a provincial government was set up. The other says a large force overran the country in a matter of hours, that Republican Guard units moved on Kuwait City, and that the royal family escaped to Saudi Arabia. The size of the force, the provincial government, and whether the city had already fallen are not agreed.",
      consequence: "The Security Council demanded Iraq’s immediate withdrawal from Kuwait. Iraq did not leave, and a coalition led by the United States went to war. Both pages date the start of that war to 16 January 1991 and a ground campaign to 24 February, and both place the Iraqi defeat and the recovery of Kuwait at 28 February 1991. One page names Desert Storm, a January deadline, and a cease-fire declared by President Bush. The other names resolutions and a land campaign of four days. The operation name, the deadline, and Bush’s declaration are not in both.",
    },
    university: {
      cause: "The invasion was not a raid without a named leader. Saddam Hussein was president of Iraq, and both narratives put him over the quarrel with Kuwait. A popular narrative opens on the morning itself and says the troops who crossed were under his command, describing Kuwait as small and oil-rich. A diplomatic narrative spends its opening on unpaid war debts, a dispute over two islands, and accusations about oil, then says those pressures fed his threats against a rich but weak neighbour, and only after that dates the military incursion. Debts, islands, and the oil charge belong to that second narrative alone. The word command belongs to the first. What remains, before a single soldier is counted, is the president and the decision to strike Kuwait.",
      what: "The date printed twice is 2 August 1990. Iraqi forces invaded Kuwait and overran the country within hours. The popular narrative has the defenders overwhelmed, the emir and his government gone to Saudi Arabia, and Kuwait City captured inside those hours, with a provincial administration put in place. The diplomatic narrative has a force it numbers at one hundred thousand overrunning the country in a matter of hours, Guard units moving toward Kuwait City, and the royal family escaping to Saudi Arabia. Headcount, the provincial government, and a completed capture of the capital are therefore not common property. Nor is a coastline or a share of oil reserves, each of which appears once. The agreed event is the August invasion and the swift overrun.",
      consequence: "Condemnation at the United Nations followed, and both narratives say the Security Council demanded Iraq’s immediate withdrawal. Withdrawal did not come. A war led by the United States began on 16 January 1991. Ground operations began on 24 February, and by 28 February 1991 Iraqi forces had been driven from Kuwait. The popular narrative adds Desert Storm, allied numbers, a 15 January deadline, missile fire at Israel, and a cease-fire spoken by President George Bush. The diplomatic narrative adds numbered resolutions, a grace period, a four-day land campaign, and later inspections. None of those extras is repeated. General Norman Schwarzkopf is named in only one narrative, so he is not given a life. The result the narratives share is the Council’s demand and Iraq’s defeat in Kuwait by 28 February 1991.",
    },
  },
  sources: [
    {
      url: "https://www.history.com/this-day-in-history/august-2/iraq-invades-kuwait",
      publisher: "History.com",
    },
    {
      url: "https://history.state.gov/milestones/1989-1992/gulf-war",
      publisher: "Office of the Historian",
    },
  ],
};

export const saddamHussein: EraFigure = {
  id: "saddam_hussein",
  name: "Saddam Hussein",
  role: "president",
  country: "Iraq",
  allegiance: "Iraq",
  note: "One page says the invading forces were under his command. The other calls him Iraqi president, sets his threats before the invasion, and does not repeat the word command in the sentence that dates 2 August 1990. President George Bush and General Norman Schwarzkopf are not given lives.",
  bio: {
    primary: "Saddam Hussein was president of Iraq when Iraqi forces invaded Kuwait on 2 August 1990 and overran the country within hours.",
    secondary: "Saddam Hussein is the Iraqi president both pages name for the invasion of Kuwait on 2 August 1990. Iraqi forces overran the country within hours. One page says those forces were under his command, and it calls him president in that sentence. The other calls him Iraqi president while he pressed Kuwait, then dates the invasion without putting the word command on that sentence, and later ties his threats to the incursion. Command, as a shared verb, is not claimed. This life keeps the president and the August invasion.",
    university: "Hussein’s part, as far as both narratives will walk together, is the presidency of Iraq at the moment Kuwait was invaded. On 2 August 1990 Iraqi forces crossed and overran the country within hours. A popular narrative writes him into the invasion sentence itself, as the president whose command the troops were under. A diplomatic narrative introduces him as Iraqi president in the quarrel over debt and oil, carries his threats up to the border, and then records the incursion as Iraq’s, later noting that Washington had heard those threats and still had not expected the military step. The debt figures, the islands, and the verb command are each told once. President Bush appears in both narratives, but not for the same act, and a coalition general appears in only one, so neither is added beside Hussein.",
  },
  sources: [
    {
      url: "https://www.history.com/this-day-in-history/august-2/iraq-invades-kuwait",
      publisher: "History.com",
    },
    {
      url: "https://history.state.gov/milestones/1989-1992/gulf-war",
      publisher: "Office of the Historian",
    },
  ],
};



export const israel1948: EraEvent = {
  id: "israel_1948",
  date: "1948-05-14",
  precision: "day",
  title: "David Ben-Gurion proclaims the State of Israel",
  kind: "succession",
  fronts: ["anatolia_and_levant"],
  countries: ["Israel"],
  figures: ["david_ben_gurion"],
  note: "One account calls him chairman of the Jewish Agency, places the proclamation in Tel Aviv, and says he became Israel’s first premier. The other calls him the head of the Jewish Agency and says President Harry S. Truman recognised the new nation the same day. Premier, Tel Aviv, and Truman’s recognition are not stated above. Truman already has a life, so none is added here.",
  levels: {
    primary: {
      cause: "Britain’s mandate in Palestine was about to end, and the Jewish Agency was ready to proclaim a state.",
      what: "On 14 May 1948 David Ben-Gurion proclaimed the State of Israel and brought that state into being.",
      consequence: "The State of Israel had been proclaimed, and David Ben-Gurion was the man who declared it.",
    },
    secondary: {
      cause: "A British mandate over Palestine was reaching its last hours. The body that spoke for the new country is the Jewish Agency in both records, though one calls its speaker a chairman and the other its head. Guns after the British withdrawal, and a claim that he became premier, are each printed in a single record. The cause both records share is the expiring mandate and an Agency prepared to announce a state.",
      what: "Both records date the act to 14 May 1948. David Ben-Gurion then made the State of Israel public. A popular record places him in Tel Aviv and says he proclaims the state. A diplomatic record says he proclaimed its establishment and does not name the city. Tel Aviv is therefore not treated as agreed. The act both print is his proclamation of the State of Israel on that May day.",
      consequence: "Once the proclamation had been made, the State of Israel was the state he had announced. One record says he became the first premier, and that the United States recognised the new nation. The other names President Truman for a recognition the same day and does not give Ben-Gurion that office. Truman already has a life, so none is added. Premier and the American recognition stay outside the result, which is the state he proclaimed.",
    },
    university: {
      cause: "Two narratives reach the same May morning from different shelves. The popular narrative lingers on a mandate’s final hours, a chairman, and a city where guns could be heard after British soldiers left. The diplomatic narrative introduces the head of the Jewish Agency and a Washington argument over trusteeship that did not stop the announcement. Chairman, the guns, the soldiers’ departure, and that trusteeship argument are each told once. What both sustain is narrower: Britain’s mandate in Palestine was ending, and the Jewish Agency was about to declare a state.",
      what: "The calendar day in both narratives is 14 May 1948, and the speaker is David Ben-Gurion. On that day he brought the State of Israel into public existence. One narrative has him do it in Tel Aviv and adds a phrase about two thousand years. The other has him proclaim the establishment and never mentions the city or that span of centuries. Those extras fail to appear twice. Stripped of them, the act is his declaration of the State of Israel on 14 May 1948.",
      consequence: "The new state does not stay hypothetical past the declaration in either narrative. One then makes him premier and reports recognition by the United States. The other names President Harry S. Truman for a recognition delivered the same day and is silent on any premiership. Truman’s part is already told elsewhere, so he is not given a second life. The result both narratives support is the State of Israel, proclaimed by David Ben-Gurion on 14 May 1948.",
    },
  },
  sources: [
    {
      url: "https://www.history.com/this-day-in-history/may-14/state-of-israel-proclaimed",
      publisher: "History.com",
    },
    {
      url: "https://history.state.gov/milestones/1945-1952/creation-israel",
      publisher: "Office of the Historian",
    },
  ],
};

export const davidBenGurion: EraFigure = {
  id: "david_ben_gurion",
  name: "David Ben-Gurion",
  role: "Jewish Agency leader",
  country: "Israel",
  allegiance: "Israel",
  note: "One page calls him chairman and Israel’s first premier, and it places him in Tel Aviv. The other calls him the head of the Jewish Agency and does not give him the premiership. President Truman’s recognition that day is in only one page, and Truman already has a life.",
  bio: {
    primary: "On 14 May 1948 David Ben-Gurion proclaimed the State of Israel for the Jewish Agency, and that proclamation brought the state into being.",
    secondary: "David Ben-Gurion is the man both records name when the State of Israel was proclaimed on 14 May 1948. He spoke for the Jewish Agency. One record calls him its chairman, sets the scene in Tel Aviv, and says he became the first premier. The other calls him the head of the Agency and does not mention the city or that office. Chairman, Tel Aviv, and the premiership are not in both records. This life keeps the May day, the Agency, and his proclamation of the state.",
    university: "The life that survives the two narratives is the speaker of 14 May 1948. He is David Ben-Gurion. Each narrative has him bring the State of Israel into public being, and each attaches him to the Jewish Agency, one as chairman and one as its head. Beyond the name and the day the portraits split. One adds Tel Aviv, a phrase about two thousand years, and the premiership. The other is silent on that city and that office, and it names President Truman for a recognition the same day. Truman already has a life, so he is not retold here. What remains is Ben-Gurion, the Agency, and the proclamation of the state.",
  },
  sources: [
    {
      url: "https://www.history.com/this-day-in-history/may-14/state-of-israel-proclaimed",
      publisher: "History.com",
    },
    {
      url: "https://history.state.gov/milestones/1945-1952/creation-israel",
      publisher: "Office of the Historian",
    },
  ],
};

export const inchon1950: EraEvent = {
  id: "inchon_1950",
  date: "1950-09-15",
  precision: "day",
  title: "Forces under MacArthur land at Inchon",
  kind: "battle",
  fronts: ["asia"],
  countries: ["United States", "North Korea"],
  figures: ["douglas_macarthur"],
  note: "One account spells the port Incheon, dates the battle from 15 to 19 September 1950, and calls MacArthur general of the army. The other spells it Inchon, says the Marines had secured it by early evening on 15 September, and calls him U.N. supreme commander. The closing day, the evening, and the two titles are not stated above. A later removal from command is printed in one account and is not part of this landing.",
  levels: {
    primary: {
      cause: "Douglas MacArthur pressed for a landing at Inchon that would get behind the North Korean army.",
      what: "On 15 September 1950 forces under Douglas MacArthur landed at Inchon, on the west coast of Korea.",
      consequence: "The landing at Inchon was carried out, and MacArthur was the commander both accounts name for it.",
    },
    secondary: {
      cause: "The Korean War was under way, and a landing behind the North Korean line was the stroke Douglas MacArthur insisted on. One record says the place had been criticised as too risky and that he, as U.N. supreme commander, insisted anyway. The other says he was the driving force and overcame the misgivings of more cautious generals. The risky ground is in both. His insistence on Inchon is the cause they share.",
      what: "On 15 September 1950 the landing at Inchon began. One record says U.S. Marines landed on the west coast, overcame moderate resistance, and had secured the port by early evening. The other says the battle began that day and ended on 19 September, and it spells the city Incheon. The evening success and the later closing day are not the same, so neither is adopted. The course both records give is the landing, opened on 15 September under MacArthur.",
      consequence: "The landing had put forces ashore at Inchon and cut into the North Korean position. One record says the stroke cut the North Korean forces in two and opened a push towards Seoul. The other says the city was secured after bombardment and that the northern army then collapsed. Seoul, the prisoner totals, and the speed of that collapse are not matched. The result both support is the landing at Inchon, commanded by Douglas MacArthur.",
    },
    university: {
      cause: "Two narratives present the landing as a gamble that one commander forced through. The popular narrative says advisers thought Inchon too risky, and that Douglas MacArthur, styled U.N. supreme commander, insisted on carrying it out. The reference narrative calls him general of the army, commander of the United Nations and South Korean forces, and the driving force who overcame cautious generals and unfavourable terrain. Supreme commander, general of the army, and the terrain phrase are not a single shared title. What both sustain is his pressure for a landing at Inchon in the face of doubt.",
      what: "The opening day both narratives name is 15 September 1950. Forces then landed at Inchon. The popular narrative, which uses that spelling, says U.S. Marines came ashore on the west coast of Korea and had overcome moderate resistance by early evening. The reference narrative says the battle began on 15 September and ended on the 19th, and it also spells the port Incheon. Evening security and a four-day span fail to appear twice. Beaches, ships, and a corps name are likewise single-narrative. The action both will carry is the landing opened on 15 September 1950 under Douglas MacArthur.",
      consequence: "The assault does not stall on the beaches in either narrative. One says it cut the North Korean forces in two and that a United Nations force then pushed inland towards Seoul. The other says Incheon was secured and that the northern army collapsed within a month, with a prisoner figure it alone prints. Seoul, the month, and that figure are not shared, so they stay out of the result. A later dismissal of MacArthur is printed in one narrative and is not this landing. What remains is the Inchon landing he had driven.",
    },
  },
  sources: [
    {
      url: "https://www.history.com/this-day-in-history/september-15/u-s-forces-land-at-inchon",
      publisher: "History.com",
    },
    {
      url: "https://en.wikipedia.org/wiki/Battle_of_Inchon",
      publisher: "Wikipedia",
    },
  ],
};

export const douglasMacarthur: EraFigure = {
  id: "douglas_macarthur",
  name: "Douglas MacArthur",
  role: "commander",
  country: "United States",
  allegiance: "United Nations",
  note: "One page calls him U.N. supreme commander and says he insisted on Inchon. The other calls him general of the army and the driving force of the operation. The titles are not folded into one office. He is named for the 25 June invasion on only one of those earlier pages, so that June decision is not this life. A later removal from command is printed once and is left out.",
  bio: {
    primary: "On 15 September 1950 Douglas MacArthur’s forces landed at Inchon, the landing he had insisted on carrying out.",
    secondary: "Douglas MacArthur is the commander both records name for the landing at Inchon on 15 September 1950. One calls him U.N. supreme commander and says he insisted on the landing though it was judged too risky. The other calls him general of the army and the driving force who overcame more cautious generals. The two titles are not the same wording, so this life does not pick one office. It keeps the September day, Inchon, and his command of the landing.",
    university: "MacArthur enters both narratives as the officer who drove the Inchon landing, not as a name on a list alone. On 15 September 1950 the landing opened, and he is the commander each narrative attaches to it. One styles him U.N. supreme commander and has him insist after the site was criticised. The other styles him general of the army, in command of United Nations and South Korean forces, and calls him the driving force over unfavourable ground. Those titles and the ground phrase are not printed the same way twice. A dismissal the following year appears in a single narrative and is not retold. His part is the landing he forced on 15 September 1950.",
  },
  sources: [
    {
      url: "https://www.history.com/this-day-in-history/september-15/u-s-forces-land-at-inchon",
      publisher: "History.com",
    },
    {
      url: "https://en.wikipedia.org/wiki/Battle_of_Inchon",
      publisher: "Wikipedia",
    },
  ],
};

export const afghanistan1979: EraEvent = {
  id: "afghanistan_1979",
  date: "1979-12-24",
  precision: "day",
  title: "The Soviet Union invades Afghanistan",
  kind: "invasion",
  fronts: ["asia"],
  countries: ["Soviet Union", "Afghanistan"],
  figures: ["babrak_karmal"],
  note: "One account dates the start to 24 December 1979, prints aircraft and division totals, and dates Babrak Karmal’s installation to 27 December. The other says the invasion began on Christmas Eve, at the end of December 1979, that Soviet troops killed Hafizullah Amin, and that Karmal was installed as a puppet head. Christmas Eve in that December is 24 December. The 27th, the killing, the puppet wording, and the totals are not stated above.",
  levels: {
    primary: {
      cause: "The Soviet Union moved to take control in Afghanistan and to place its own man over the government in Kabul.",
      what: "On 24 December 1979 the Soviet Union invaded Afghanistan and sent its troops into the country.",
      consequence: "Soviet forces took hold in Afghanistan, and Babrak Karmal was installed as head of government.",
    },
    secondary: {
      cause: "Moscow moved troops into Afghanistan in order to hold Kabul and to install a government it could rely on. One record says the pretext was a friendship treaty of 1978. The other sets the move at the end of a year of plots inside the Afghan capital. The treaty and those plots are each told once. The cause both records share is a Soviet decision to invade and to put a new head over the government.",
      what: "The invasion began on 24 December 1979. One record prints that date and describes an airlift into Kabul. The other says the invasion began on Christmas Eve and that Soviet troops then held Kabul and large parts of the country. Christmas Eve, in that December, is the same day. Aircraft totals, a palace assault, and the word immediately are not in both records. The course they share is the Soviet invasion of Afghanistan, opened on that December day, with Kabul among the places taken.",
      consequence: "Soviet forces were in Afghanistan, and Babrak Karmal was installed as head of government. One record dates that installation to a later day in December and calls him the exiled leader of a party faction. The other says he was installed when the invasion began and calls him a puppet. The later day, the faction, and the puppet label are not both printed, so none is adopted. The result both support is his installation as head of government in the invasion.",
    },
    university: {
      cause: "Two narratives reach the December entry from a capital Moscow no longer trusted, and they do not tell the distrust in the same words. The popular narrative offers a friendship treaty as the stated pretext and then describes a night airlift. The diplomatic narrative spends its length on rival factions, on Hafizullah Amin’s rise, and on a decision in Moscow to replace the men in Kabul, before saying the invasion began on Christmas Eve. The treaty, Amin’s earlier purges, and the faction names are each told once. What both sustain is a Soviet choice to invade Afghanistan and to change the government.",
      what: "One narrative dates the opening to 24 December 1979 and has transport aircraft lift troops into Kabul, which it says was secured within a few days. The other says that at the end of December the Soviet Union sent thousands of troops and immediately assumed control of Kabul, and that the invasion began on Christmas Eve. The few days and the word immediately do not match, so the timing of the city’s fall is not agreed. Aircraft counts and a named palace are single-narrative. Christmas Eve in that account is 24 December. The action both will carry is the Soviet invasion, begun that day, taking in Kabul.",
      consequence: "Karmal’s installation is the political end both narratives attach to the entry, and they do not date it alike. The popular narrative waits until 27 December, calls him an exiled faction leader, and says ground forces also came from the north. The diplomatic narrative says Soviet troops killed Amin and installed Karmal as a puppet head, in the sentences that follow Christmas Eve. The 27th, the killing, the puppet word, and the northern columns are not shared statements. Amin is named in both, but not for the same act, so he is not given a life. What remains is Karmal installed as head of government in the invasion.",
    },
  },
  sources: [
    {
      url: "https://www.history.com/this-day-in-history/december-24/soviet-tanks-roll-into-afghanistan",
      publisher: "History.com",
    },
    {
      url: "https://history.state.gov/milestones/1977-1980/soviet-invasion-afghanistan",
      publisher: "Office of the Historian",
    },
  ],
};

export const babrakKarmal: EraFigure = {
  id: "babrak_karmal",
  name: "Babrak Karmal",
  role: "head of government",
  country: "Afghanistan",
  allegiance: "Afghanistan",
  note: "One page dates his installation to 27 December 1979 and calls him the exiled leader of the Parcham faction. The other says he was installed as a puppet head when the invasion began on Christmas Eve, and that Hafizullah Amin was killed. The 27th, the faction title, and the killing are not one story.",
  bio: {
    primary: "Babrak Karmal was installed as Afghanistan’s head of government when the Soviet Union invaded in December 1979.",
    secondary: "Babrak Karmal is the man both records name as the head of government installed in the Soviet invasion of Afghanistan. The invasion began on 24 December 1979, which one record prints as that date and the other as Christmas Eve. One record dates his installation to a later day and calls him an exiled party leader. The other places the installation with the invasion and calls him a puppet. Those extras are not in both records. This life keeps his installation as head of government in that invasion.",
    university: "Karmal’s life, as far as the two narratives walk together, is the installation, not the command of the Soviet columns. The invasion began on 24 December 1979. One narrative then waits until 27 December to seat him, styling him the exiled leader of a faction, and it sends ground forces in from the north on that later day. The other seats him in the sentences that follow Christmas Eve, after Amin is killed, and calls the new head a puppet. The later day, the killing, and the puppet word are each told once. Amin is not given a life, because the narratives do not assign him the same act. What remains is Karmal, installed as Afghanistan’s head of government in the invasion.",
  },
  sources: [
    {
      url: "https://www.history.com/this-day-in-history/december-24/soviet-tanks-roll-into-afghanistan",
      publisher: "History.com",
    },
    {
      url: "https://history.state.gov/milestones/1977-1980/soviet-invasion-afghanistan",
      publisher: "Office of the Historian",
    },
  ],
};

export const SINCE_1945_FILL_EVENTS: EraEvent[] = [dienBienPhu1954, bayOfPigs1961, soweto1976, india1947, suez1956, berlinWall1961, prc1949, koreanWar1950, kuwait1990, israel1948, inchon1950, afghanistan1979];
export const SINCE_1945_FILL_FIGURES: EraFigure[] = [hoChiMinh, fidelCastro, dwightDEisenhower, hectorPieterson, hastingsNdlovu, samNzima, tsietsiMashinini, jawaharlalNehru, mahatmaGandhi, gamalAbdelNasser, walterUlbricht, janosKadar, leonidBrezhnev, vladimirPutin, margaretThatcher, leopoldoGaltieri, jeremyMoore, ianMckay, maoZedong, harrySTruman, saddamHussein, davidBenGurion, douglasMacarthur, babrakKarmal];
