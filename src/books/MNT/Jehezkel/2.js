const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Kaj Li diris al mi:Ho filo de homo, stariĝu sur viaj piedoj, kaj Mi parolos al vi.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Kaj kiam Li parolis al mi, venis en min spirito kaj starigis min sur miaj piedoj; kaj mi aŭskultis Tiun, kiu parolis al mi.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Kaj Li diris al mi:Ho filo de homo, Mi sendas vin al la Izraelidoj, al la defalintaj gentoj, kiuj defalis de Mi; ili kaj iliaj patroj perfidis Min ĝis la nuna tago.',
  },
  '4': {
    verse_nr: 4,
    verse: 'La filoj havas malmolan vizaĝon kaj obstinan koron; Mi sendas vin al ili, por ke vi diru al ili:Tiele diras la Sinjoro, la Eternulo.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Ĉu ili aŭskultos, ĉu ili ne aŭskultos (ĉar ili estas domo malobeema), ili almenaŭ sciu, ke profeto estis inter ili.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Kaj vi, ho filo de homo, ne timu ilin, kaj ne timu iliajn parolojn;  kvankam ili estas por vi dornoj kaj pikiloj kaj vi loĝas inter skorpioj,  tamen ne timu iliajn vortojn, kaj ne sentu teruron antaŭ ilia vizaĝo, ĉar ili estas domo malobeema.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Kaj diru al ili Miajn vortojn, ĉu ili aŭskultos aŭ ĉu ili ne aŭskultos, ĉar ili estas malobeemaj.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Kaj vi, ho filo de homo, aŭskultu tion, kion Mi diras al vi; ne estu malobeema, kiel la malobeema domo; malfermu vian buŝon, kaj manĝu tion,  kion Mi donos al vi.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Kaj mi ekvidis, jen mano estas etendita al mi, kaj en ĝi estas skribrulaĵo.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Kaj Li disvolvis ĝin antaŭ mi, kaj ĝi estis skribkovrita interne kaj ekstere, kaj sur ĝi estis skribitaj lamentoj, ĝemoj, kaj veoj.',
  },
};

export const CxapitroDu = {
  key: 'Jeĥezkel 2',
  chapterNum: 2,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
