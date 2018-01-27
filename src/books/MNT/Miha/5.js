const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Nun armu vin, ho batalistino! oni sieĝos nin; per vergo oni frapos la vangon de la juĝisto de Izrael.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Kaj vi, ho Bet-Leĥem Efrata, kiu estas malgranda inter la milejoj de Judujo, el vi eliros al Mi tiu, kiu devas esti reganto en Izrael kaj kies deveno estas de tempo tre antikva.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Li lasos ilin ĝis la tempo, kiam la naskontino estos naskinta; tiam liaj ceteraj fratoj revenos al la idoj de Izrael.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Li stariĝos kaj paŝtos kun la forto de la Eternulo, kun la majesto de la nomo de la Eternulo, lia Dio, kaj tiuj konvertiĝos; ĉar tiam li fariĝos granda ĝis la randoj de la tero.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Kaj li estos paco. Kiam la Asiriano venos en nian landon kaj enpaŝos en niajn palacojn, ni starigos kontraŭ li sep paŝtistojn kaj ok eminentulojn.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Ili paŝtos la landon Asirian per glavo kaj la landon de Nimrod per iliaj lancoj; kaj li savos nin kontraŭ la Asiriano, kiam ĉi tiu venos en nian landon kaj enpaŝos en niajn limojn.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Kaj la restaĵo de Jakob estos inter multe da popoloj kiel roso de la Eternulo, kiel pluvaj gutoj sur herbo; kaj li ne esperos je homo kaj ne fidos homidojn.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Kaj la restaĵo de Jakob estos inter la nacioj, meze de multaj popoloj,  kiel leono inter la bestoj de la arbaro, kiel leonido meze de ŝafaroj, kiu dispremas pasante, disŝiras, kaj neniu povas savi.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Leviĝos via mano super viaj kontraŭuloj, kaj ĉiuj viaj malamikoj ekstermiĝos.',
  },
  '10': {
    verse_nr: 10,
    verse: 'En tiu tago, diras la Eternulo, Mi ekstermos viajn ĉevalojn ĉe vi kaj pereigos viajn ĉarojn;',
  },
  '11': {
    verse_nr: 11,
    verse: 'Mi ekstermos la urbojn de via lando kaj detruos ĉiujn viajn fortikaĵojn;',
  },
  '12': {
    verse_nr: 12,
    verse: 'Mi ekstermos ĉe vi la sorĉistojn, kaj vi ne plu havos aŭguristojn;',
  },
  '13': {
    verse_nr: 13,
    verse: 'Mi ekstermos el via mezo viajn idolojn kaj viajn statuojn, kaj vi ne plu adorkliniĝos antaŭ la faritaĵo de viaj manoj;',
  },
  '14': {
    verse_nr: 14,
    verse: 'Mi elŝiros el via mezo viajn sanktajn stangojn kaj ekstermos viajn urbojn.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Kaj en kolero kaj indigno Mi faros venĝon super la nacioj, kiuj ne volos obei.',
  },
};

export const CxapitroKvin = {
  key: 'Miĥa 5',
  chapterNum: 5,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
