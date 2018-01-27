const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Paŭlo kaj Silvano kaj Timoteo al la eklezio de la Tesalonikanoj en Dio,  nia Patro, kaj la Sinjoro Jesuo Kristo:',
  },
  '2': {
    verse_nr: 2,
    verse: 'Graco al vi kaj paco de Dio, la Patro, kaj de la Sinjoro Jesuo Kristo.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Ni devas ĉiam danki Dion pro vi, fratoj, kiel estas ja dece, pro tio, ke via fido kreskas treege, kaj abundas via reciproka amo de ĉiu al ĉiu,',
  },
  '4': {
    verse_nr: 4,
    verse: 'tiel, ke ni mem fanfaronas pri vi en la eklezioj de Dio, pro via pacienco kaj fido sub ĉiuj viaj persekutoj kaj afliktoj, kiujn vi elportadas;',
  },
  '5': {
    verse_nr: 5,
    verse: 'tio estas evidenta signo de la justa juĝo de Dio; por ke vi montriĝu indaj je la regno de Dio, por kiu vi ankaŭ suferas;',
  },
  '6': {
    verse_nr: 6,
    verse: 'ĉar estas justaĵo ĉe Dio redoni afliktojn al tiuj, kiuj vin afliktas,',
  },
  '7': {
    verse_nr: 7,
    verse: 'kaj al vi, la afliktataj, ripozon kun ni, ĉe la malkaŝiĝo de la Sinjoro Jesuo el la ĉielo kun la anĝeloj de lia potenco,',
  },
  '8': {
    verse_nr: 8,
    verse: 'en flamanta fajro, por venigi venĝon sur tiujn, kiuj ne konas Dion kaj ne obeas al la evangelio de nia Sinjoro Jesuo;',
  },
  '9': {
    verse_nr: 9,
    verse: 'kiuj suferos punadon, eternan detruon de antaŭ la vizaĝo de la Sinjoro kaj de la gloro de lia potenco,',
  },
  '10': {
    verse_nr: 10,
    verse: 'kiam li venos por esti glorata en siaj sanktuloj, kaj esti admirata ĉe ĉiuj, kiuj ekkredis (ĉar nia atestado ĉe vi estis kredata) en tiu tago.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Por tiu celo ni ankaŭ konstante preĝas por vi, ke nia Dio vin trovu indaj je la voko, kaj kun potenco plenumu ĉiun bonvolon de boneco kaj ĉiun laboron de fido;',
  },
  '12': {
    verse_nr: 12,
    verse: 'por ke la nomo de nia Sinjoro Jesuo estu glorata en vi, kaj vi en li,  laŭ la graco de nia Dio kaj la Sinjoro Jesuo Kristo.',
  },
};

export const CxapitroUnu = {
  key: '2 Tesalonikanoj 1',
  pretitle: 'La Dua Epistolo de La Apostolo Paŭlo al La',
  title: 'Tesalonikanoj',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
