const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Paŭlo, apostolo (ne de homoj, nek per homo, sed per Jesuo Kristo, kaj Dio, la Patro, kiu levis lin el la mortintoj),',
  },
  '2': {
    verse_nr: 2,
    verse: 'kaj ĉiuj fratoj, kiuj estas kun mi, al la eklezioj de Galatujo:',
  },
  '3': {
    verse_nr: 3,
    verse: 'Graco al vi kaj paco de Dio, la Patro, kaj de nia Sinjoro Jesuo Kristo,',
  },
  '4': {
    verse_nr: 4,
    verse: 'kiu sin donis pro niaj pekoj, por liberigi nin el la nuna malbona mondo,  laŭ la volo de nia Dio kaj Patro;',
  },
  '5': {
    verse_nr: 5,
    verse: 'al kiu estu la gloro por ĉiam kaj eterne. Amen.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Mi miras, ke tiel rapide vi foriĝas for de Tiu, kiu vokis vin en la gracon de Kristo, al malsama evangelio;',
  },
  '7': {
    verse_nr: 7,
    verse: 'kiu ja ne estas alia, sed troviĝas iuj, kiuj vin maltrankviligas kaj deziras renversi la evangelion de Kristo.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Tamen se eĉ ni, aŭ anĝelo el la ĉielo, al vi instruus ian evangelion krom tiu, kiun ni jam al vi instruis, tiu estu anatemita.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Kiel ni antaŭe diris, tiel nun mi denove diras:Se iu al vi instruas ian evangelion krom tiu, kiun vi ricevis, tiu estu anatemita.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Ĉar ĉu mi nun influas homojn, aŭ Dion? aŭ ĉu mi celas plaĉi al homoj? se mi ankoraŭ nun plaĉus al homoj, mi ne estus servisto de Kristo.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Ĉar mi sciigas vin, fratoj, rilate al la evangelio predikita de mi, ke ĝi ne estas laŭ homo.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Ĉar mi ne ricevis ĝin de homo, kaj ĝi ne estas instruita al mi krom per malkaŝo de Jesuo Kristo.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Ĉar vi iam aŭdis pri mia estinta vivmaniero en Judismo, ke mi forte persekutis la eklezion de Dio kaj ĝin atakis;',
  },
  '14': {
    verse_nr: 14,
    verse: 'kaj mi plimulte progresis en Judismo, ol multaj miaj samaĝuloj en mia nacio, estante multe pli fervoranima pri la tradicioj de miaj prapatroj.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Sed kiam bonvole plaĉis al Dio, kiu el la ventro de mia patrino apartigis min kaj per Sia graco min vokis,',
  },
  '16': {
    verse_nr: 16,
    verse: 'por malkaŝi en mi Sian Filon, por ke mi prediku lin inter la nacianoj:mi ne konsiliĝis kun karno kaj sango,',
  },
  '17': {
    verse_nr: 17,
    verse: 'kaj mi ne supreniris al Jerusalem, al la antaŭ mi apostoloj, sed mi tuj foriris en Arabujon, kaj poste mi revenis al Damasko.',
  },
  '18': {
    verse_nr: 18,
    verse: 'Tiam, post tri jaroj, mi supreniris al Jerusalem, por viziti Kefason,  kaj mi restis kun li dek kvin tagojn.',
  },
  '19': {
    verse_nr: 19,
    verse: 'Sed neniun alian el la apostoloj mi vidis, krom Jakobo, la frato de la Sinjoro.',
  },
  '20': {
    verse_nr: 20,
    verse: 'Pri tio, kion mi skribas al vi, jen, antaŭ Dio, mi ne mensogas.',
  },
  '21': {
    verse_nr: 21,
    verse: 'Poste mi venis en la regionojn de Sirio kaj Kilikio.',
  },
  '22': {
    verse_nr: 22,
    verse: 'Kaj mi ankoraŭ estis vizaĝe nekonata de la eklezioj de Judujo, kiuj estis en Kristo;',
  },
  '23': {
    verse_nr: 23,
    verse: 'sed ili nur aŭdis la jenon:Kiu nin iam persekutis, tiu nun predikas la fidon, kiun iam li atakis;',
  },
  '24': { verse_nr: 24, verse: 'kaj ili gloris Dion en mi.' },
};

export const CxapitroUnu = {
  key: 'Galatoj 1',
  pretitle: 'La Epistolo de La Apostolo Paŭlo al La',
  title: 'Galatoj',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
