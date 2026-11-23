/**
 * Which events happened on which front or advance line.
 *
 * Events carry no coordinates of their own, and none are invented here: each
 * link pins an event to a waypoint already named in that line's `path` (`at` is
 * the index into it), so the pin always sits on a real place the line runs
 * through. Only incidents of that line are linked; conferences, treaties signed
 * elsewhere and fighting on other fronts that happen to share the dates are not.
 * Lines whose obvious event has no place on the path (the Armistice at Compiègne,
 * Brest-Litovsk) are left without that pin rather than given a wrong one. The
 * data check in the audit folder confirms every id, every waypoint index and
 * that each event falls within a few days of the line's window.
 */
export interface CampaignEventLink {
  line: string;
  event: string;
  at: number;
}

export const CAMPAIGN_EVENT_LINKS: CampaignEventLink[] = [
  { line: 'western_front_1914', event: 'second_battle_of_ypres', at: 1 },
  { line: 'western_front_1914', event: 'battle_of_loos', at: 2 },
  { line: 'western_front_1914', event: 'verdun_opens', at: 7 },
  { line: 'western_front_1914', event: 'douaumont_recaptured', at: 7 },
  { line: 'hindenburg_line_1917', event: 'nivelle_offensive_chemin_des_dames', at: 10 },
  { line: 'hindenburg_line_1917', event: 'third_ypres_begins', at: 1 },
  { line: 'hindenburg_line_1917', event: 'passchendaele_taken', at: 1 },
  { line: 'hindenburg_line_1917', event: 'cambrai', at: 5 },
  { line: 'hindenburg_line_1917', event: 'operation_michael', at: 8 },
  { line: 'eastern_front_1915_16', event: 'brusilov_offensive', at: 5 },
  { line: 'eastern_front_1916', event: 'kerensky_offensive', at: 4 },
  { line: 'italian_front_1916', event: 'caporetto', at: 2 },
  { line: 'piave_1917', event: 'second_battle_of_the_piave', at: 2 },
  { line: 'piave_1917', event: 'battle_of_vittorio_veneto', at: 2 },
  { line: 'salonika_front_1916', event: 'vardar_offensive_bulgaria_collapse', at: 2 },
  { line: 'eastern_front_winter_1914', event: 'second_masurian_lakes', at: 1 },
  { line: 'german_advance_1914', event: 'invasion_of_belgium_britain_enters', at: 1 },
  { line: 'german_advance_1914', event: 'battle_of_the_frontiers_mons', at: 4 },
  { line: 'german_advance_1914', event: 'first_battle_of_the_marne', at: 8 },
  { line: 'race_to_the_sea', event: 'yser_and_first_ypres', at: 7 },
  { line: 'east_prussia_1914', event: 'tannenberg', at: 3 },
  { line: 'galicia_1914', event: 'galicia_lemberg_przemysl', at: 1 },
  { line: 'serbia_1914', event: 'battle_of_kolubara', at: 2 },
  { line: 'gorlice_tarnow_1915', event: 'gorlice_tarnow', at: 0 },
  { line: 'gorlice_tarnow_1915', event: 'great_retreat_poland', at: 4 },
  { line: 'gallipoli_1915', event: 'gallipoli_landings', at: 0 },
  { line: 'gallipoli_1915', event: 'gallipoli_evacuation', at: 3 },
  { line: 'serbia_1915', event: 'bulgaria_enters_war_serbia_invaded', at: 0 },
  { line: 'serbia_1915', event: 'serbian_retreat_through_albania', at: 3 },
  { line: 'transylvania_1916', event: 'romania_enters_war', at: 1 },
  { line: 'wallachia_1916', event: 'bucharest_falls', at: 2 },
  { line: 'brusilov_1916', event: 'brusilov_offensive', at: 0 },
  { line: 'verdun_1916', event: 'verdun_opens', at: 0 },
  { line: 'somme_1916', event: 'somme_opens', at: 0 },
  { line: 'somme_1916', event: 'flers_courcelette_tanks', at: 1 },
  { line: 'tigris_kut_1916', event: 'siege_of_kut', at: 3 },
  { line: 'caporetto_1917', event: 'caporetto', at: 0 },
  { line: 'third_ypres_1917', event: 'third_ypres_begins', at: 0 },
  { line: 'third_ypres_1917', event: 'passchendaele_taken', at: 2 },
  { line: 'riga_albion_1917', event: 'operation_albion', at: 0 },
  { line: 'palestine_1917', event: 'first_battle_of_gaza', at: 0 },
  { line: 'palestine_1917', event: 'beersheba_jerusalem', at: 1 },
  { line: 'michael_1918', event: 'operation_michael', at: 0 },
  { line: 'blucher_1918', event: 'third_battle_of_the_aisne', at: 0 },
  { line: 'amiens_1918', event: 'battle_of_amiens', at: 1 },
  { line: 'meuse_argonne_1918', event: 'meuse_argonne_offensive', at: 0 },
  { line: 'vittorio_veneto_1918', event: 'battle_of_vittorio_veneto', at: 0 },
  { line: 'megiddo_damascus_1918', event: 'battle_of_megiddo', at: 0 },
  { line: 'march_caucasus_erzurum', event: 'erzurum_falls', at: 1 },
  { line: 'march_allenby_jerusalem', event: 'beersheba_jerusalem', at: 0 },
  { line: 'march_falkenhayn_bucharest', event: 'bucharest_falls', at: 1 },
  { line: 'march_mackensen_bucharest', event: 'bucharest_falls', at: 1 },
  { line: 'march_faustschlag_kiev', event: 'operation_faustschlag', at: 0 },
  { line: 'caucasus_1916', event: 'trabzon_occupied', at: 1 },
  { line: 'caucasus_1918', event: 'treaties_of_batum', at: 0 },
  { line: 'arab_revolt_1916_18', event: 'aqaba_taken', at: 0 },
  { line: 'march_tenth_army_soissons', event: 'second_battle_of_the_marne', at: 1 },
  { line: 'march_eleventh_army_belgrade', event: 'fall_of_belgrade_1915', at: 1 },
  { line: 'georgette_1918', event: 'third_battle_of_messines', at: 2 },
  { line: 'march_faustschlag_narva', event: 'operation_faustschlag', at: 0 },
  { line: 'march_serbian_belgrade', event: 'belgrade_retaken_1914', at: 1 },
  { line: 'march_serbian_uzice', event: 'uzice_valjevo_retaken_1914', at: 2 },
  { line: 'march_maude_tigris', event: 'kut_el_amara_taken_1917', at: 1 },
  { line: 'march_feisal_damascus', event: 'damascus_taken_1918', at: 1 },
  { line: 'salonika_lodgement_1915', event: 'salonika_landing_1915', at: 0 },
  { line: 'ypres_lys_1918', event: 'ypres_opening_1918', at: 0 },
  { line: 'serbian_front_1914', event: 'serbia_drina_crossing_1914', at: 2 },
  { line: 'czech_legion_1918', event: 'kazan_taken_1918', at: 3 },
];

export const LINKS_BY_LINE: Record<string, CampaignEventLink[]> = {};
export const LINKS_BY_EVENT: Record<string, CampaignEventLink[]> = {};
for (const l of CAMPAIGN_EVENT_LINKS) {
  (LINKS_BY_LINE[l.line] ??= []).push(l);
  (LINKS_BY_EVENT[l.event] ??= []).push(l);
}
