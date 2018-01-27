const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Paroloj de Jeremia, filo de Ĥilkija, el la pastroj, kiuj estis en Anatot, en la lando de Benjamen;',
  },
  '2': {
    verse_nr: 2,
    verse: 'al kiu aperis la vorto de la Eternulo en la tempo de Joŝija, filo de Amon, reĝo de Judujo, en la dek-tria jaro de lia reĝado,',
  },
  '3': {
    verse_nr: 3,
    verse: 'kaj poste en la tempo de Jehojakim, filo de Joŝija, reĝo de Judujo,  ĝis la fino de la dek-unua jaro de Cidkija, filo de Joŝija, reĝo de Judujo, ĝis la forkonduko de la Jerusalemanoj en la kvina monato.',
  },
  '4': { verse_nr: 4, verse: 'Aperis al mi la vorto de la Eternulo, dirante:' },
  '5': {
    verse_nr: 5,
    verse: 'Antaŭ ol Mi formis vin en la utero, Mi vin konis, kaj antaŭ ol vi eliris el la ventro, Mi vin sanktigis, Mi faris vin profeto por la popoloj.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Mi diris:Ho ve, Sinjoro, ho Eternulo! mi ne povoscias paroli, ĉar mi estas juna.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Sed la Eternulo diris al mi:Ne diru, ke vi estas juna; sed ĉien, kien Mi sendos vin, iru, kaj ĉion, kion Mi ordonos al vi, parolu.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Ne timu ilin; ĉar Mi estas kun vi, por savi vin, diras la Eternulo.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Kaj la Eternulo etendis Sian manon kaj ektuŝis mian buŝon, kaj la Eternulo diris al mi:Jen Mi enmetis Miajn vortojn en vian buŝon.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Vidu, Mi starigas vin hodiaŭ super la popoloj kaj super la regnoj, por elŝiri, rompi, pereigi, kaj detrui, por konstrui kaj planti.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Kaj aperis al mi la vorto de la Eternulo, dirante:Kion vi vidas,  Jeremia? Kaj mi diris:Mi vidas bastonon maldormantan.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Kaj la Eternulo diris al mi:Vi vidis bone; ĉar Mi maldormos pri Mia vorto, por plenumi ĝin.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Kaj duafoje aperis al mi la vorto de la Eternulo, dirante:Kion vi vidas?  Kaj mi diris:Mi vidas flame bolantan poton, kaj ĝi rigardas de norde.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Kaj la Eternulo diris al mi:De norde venos la malfeliĉo sur ĉiujn loĝantojn de la lando.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Ĉar jen Mi alvokos ĉiujn gentojn de la nordaj regnoj, diras la Eternulo, kaj ili venos kaj starigos ĉiu sian tronon antaŭ la pordegoj de Jerusalem kaj ĉirkaŭ ĝiaj muregoj kaj antaŭ ĉiuj urboj de Judujo.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Kaj Mi eldiros Mian verdikton pri ili pro ĉiuj iliaj malbonagoj, pro tio, ke ili forlasis Min kaj incensis al aliaj dioj kaj adorkliniĝis antaŭ la faritaĵo de siaj manoj.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Kaj vi zonu viajn lumbojn, leviĝu, kaj diru al ili ĉion, kion Mi ordonas al vi; ne tremu antaŭ ili, por ke Mi ne tremigu vin antaŭ ili.',
  },
  '18': {
    verse_nr: 18,
    verse: 'Jen Mi faras vin hodiaŭ fortikigita urbo, fera kolono, kaj kupraj muroj en la tuta lando, kontraŭ la reĝoj de Judujo, kontraŭ ĝiaj princoj,  kontraŭ ĝiaj pastroj, kaj kontraŭ la popolo de la lando.',
  },
  '19': {
    verse_nr: 19,
    verse: 'Ili batalos kontraŭ vi, sed ne venkos vin; ĉar Mi estas kun vi, diras la Eternulo, por savi vin.',
  },
};

export const CxapitroUnu = {
  key: 'Jeremia 1',
  title: 'La Libro de La Profeto Jeremia',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
