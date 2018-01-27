const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Kaj la Eternulo diris al mi plue:Iru, kaj komencu amaĵon kun virino,  kiun amas ŝia edzo, sed kiu adultas, simile al tio, kiel la Eternulo amas la Izraelidojn, sed ili turnas sin al aliaj dioj kaj amas iliajn vinberkukojn.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Kaj mi akiris ŝin al mi per dek kvin arĝentaj moneroj kaj ĥomero kaj duono da hordeo.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Kaj mi diris al ŝi:Longan tempon restu ĉe mi; ne malĉastu, kaj fordonu vin al neniu viro; tiel same mi agos kun vi.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Ĉar dum longa tempo la Izraelidoj restos sen reĝo, sen estro, sen oferoj, sen statuo, sen efodo, kaj sen domaj dioj;',
  },
  '5': {
    verse_nr: 5,
    verse: 'poste la Izraelidoj returnos sin, kaj serĉos la Eternulon, sian Dion,  kaj Davidon, sian reĝon, kaj ili respektegos la Eternulon kaj Lian bonon en la fina tempo.',
  },
};

export const CxapitroTri = {
  key: 'Hoŝea 3',
  chapterNum: 3,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
