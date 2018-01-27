const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Vortoj de la Predikanto, filo de David, reĝo en Jerusalem.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Vantaĵo de vantaĵoj, diris la Predikanto; vantaĵo de vantaĵoj, ĉio estas vantaĵo.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Kian profiton havas la homo de ĉiuj siaj laboroj, kiujn li laboras sub la suno?',
  },
  '4': {
    verse_nr: 4,
    verse: 'Generacio foriras kaj generacio venas, kaj la tero restas eterne.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Leviĝas la suno kaj subiras la suno, kaj al sia loko ĝi rapidas, kaj tie ĝi leviĝas.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Iras al sudo kaj reiras al nordo, turniĝas, turniĝas en sia irado la vento, kaj al siaj rondoj revenas la vento.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Ĉiuj riveroj iras al la maro, sed la maro ne pleniĝas; al la loko, al kiu la riveroj alfluas, ili alfluas ĉiam denove.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Ĉiuj aferoj estas lacigaj, ne povas homo tion eldiri; ne satiĝas la okulo de vidado, kaj ne pleniĝas la orelo de aŭdado.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Kio estis, tio estos; kaj kio estis farata, tio estos farata; kaj ekzistas nenio nova sub la suno.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Ekzistas io, pri kio oni diras:Vidu, ĉi tio estas nova; sed ĝi estis jam en la eterna tempo, kiu estis antaŭ ni.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Ne restis memoro pri la antaŭuloj; kaj ankaŭ pri la posteuloj, kiuj estos, ne restos memoro ĉe tiuj, kiuj estos poste.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Mi, Predikanto, estis reĝo super Izrael en Jerusalem.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Kaj mi decidis en mia koro esplori kaj ekzameni per la saĝo ĉion, kio fariĝas sub la ĉielo:ĉi tiun malfacilan okupon Dio donis al la homidoj,  por ke ili turmentiĝu per ĝi.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Mi vidis ĉiujn aferojn, kiuj fariĝas sub la suno; kaj jen, ĉio estas vantaĵo kaj entreprenoj ventaj.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Kurbigitan oni ne povas rerektigi, kaj mankantan oni ne povas kalkuli.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Mi meditis kun mia koro tiele:Jen mi kreskigis kaj multigis en mi sciencon pli ol ĉiuj, kiuj estis antaŭ mi en Jerusalem; kaj mia koro penetris multon da saĝo kaj scio.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Sed kiam mi dediĉis mian koron, por ekkoni la saĝecon kaj ekkoni la malsaĝecon kaj sensencecon, mi eksciis, ke ankaŭ ĉi tio estas ventaĵo.',
  },
  '18': {
    verse_nr: 18,
    verse: 'Ĉar ĉe multe da saĝeco estas multe da zorgemeco; kaj, kiu plimultigas siajn sciojn, tiu plimultigas siajn dolorojn.',
  },
};

export const CxapitroUnu = {
  key: 'Predikanto 1',
  title: 'La Predikanto',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
