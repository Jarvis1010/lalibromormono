const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Vorto de la Eternulo, kiu aperis al Hoŝea, filo de Beeri, en la tempo de Uzija, Jotan, Aĥaz, kaj Ĥizkija, reĝoj de Judujo, kaj en la tempo de Jerobeam, filo de Joaŝ, reĝo de Izrael.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Kiam la Eternulo komencis paroli al Hoŝea, la Eternulo diris al Hoŝea:Iru, prenu al vi edzinon malĉastulinon kaj naskigu infanojn malĉastajn, ĉar la lando malĉastiĝis for de la Eternulo.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Kaj li iris, kaj prenis Gomeron, filinon de Diblaim; kaj ŝi gravediĝis kaj naskis al li filon.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Kaj la Eternulo diris al li:Donu al li la nomon Jizreel; ĉar baldaŭ Mi punos pro la sango de Jizreel la domon de Jehu, kaj Mi metos finon al la regno de la domo de Izrael.',
  },
  '5': {
    verse_nr: 5,
    verse: 'En tiu tempo Mi rompos la pafarkon de Izrael en la valo Jizreel.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Kaj ŝi denove gravediĝis kaj naskis filinon; kaj Li diris al li:Donu al ŝi la nomon Lo-Ruĥama; ĉar Mi ne plu kompatos la domon de Izrael, sed postulos de ili pagon.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Tamen la domon de Jehuda Mi kompatos, kaj Mi helpos al ili per la Eternulo, ilia Dio; Mi ne helpos al ili per pafarko, glavo, kaj batalo, nek per ĉevaloj kaj rajdantoj.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Kiam ŝi demamigis Lo-Ruĥaman, ŝi gravediĝis kaj naskis filon.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Kaj Li diris:Donu al li la nomon Lo-Ami; ĉar vi ne estas Mia popolo, kaj Mi ne estos por vi.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Tamen la nombro de la Izraelidoj estos kiel la sablo ĉe la maro, ne mezurebla kaj ne kalkulebla. Kaj sur la sama loko, kie estis dirite al ili:Vi ne estas Mia popolo, oni diros al ili:Infanoj de la vivanta Dio.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Kolektiĝos kune la idoj de Jehuda kaj la idoj de Izrael, kaj faros al si unu ĉefon, kaj iros el la lando; ĉar granda estos la tago de Jizreel.',
  },
};

export const CxapitroUnu = {
  key: 'Hoŝea 1',
  title: 'Hoŝea',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
