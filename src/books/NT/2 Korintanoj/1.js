const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Paŭlo, apostolo de Kristo Jesuo per la volo de Dio, kaj la frato Timoteo, al la eklezio de Dio, kiu estas en Korinto, kune kun ĉiuj sanktuloj, kiuj estas en la tuta Aĥaja lando:',
  },
  '2': {
    verse_nr: 2,
    verse: 'Graco al vi kaj paco de Dio, nia Patro, kaj de la Sinjoro Jesuo Kristo.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Benata estu la Dio kaj Patro de nia Sinjoro Jesuo Kristo, la Patro de kompatoj kaj Dio de ĉia konsolo;',
  },
  '4': {
    verse_nr: 4,
    verse: 'kiu konsoladas nin en nia tuta aflikto, por ke ni povu konsoli tiujn,  kiuj iel afliktiĝas, per la konsolo, per kiu ni mem estas konsolataj de Dio.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Ĉar kiel la suferoj de Kristo abundas ĉe ni, tiel same abundas ankaŭ per Kristo nia konsolo.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Sed se ni afliktiĝas, tio estas por via konsolo kaj saviĝo; aŭ se ni konsoliĝas, tio estas por via konsolo, kiu energias, per la pacienca elportado de la samaj suferoj, kiujn ni ankaŭ suferadas;',
  },
  '7': {
    verse_nr: 7,
    verse: 'kaj nia espero pri vi estas firma, ĉar ni scias, ke kiel vi estas partoprenantoj en la suferoj, tiel ankaŭ vi estas partoprenantoj en la konsolo.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Ĉar ni ne volas, ke vi nesciu, fratoj, pri la aflikto, kiu okazis al ni en Azio, ke ni ekstreme super la forto estis depremitaj, tiel, ke ni forte malesperis, eĉ pri la vivo;',
  },
  '9': {
    verse_nr: 9,
    verse: 'ni ja ricevis la aljuĝon al morto en ni mem, por ke ni fidu ne nin mem,  sed Dion, kiu levas la mortintojn,',
  },
  '10': {
    verse_nr: 10,
    verse: 'kaj kiu nin forsavis el tia granda morto kaj forsavos; al kiu ni esperis, ke Li ankoraŭ plu nin forsavos;',
  },
  '11': {
    verse_nr: 11,
    verse: 'dum vi ankaŭ nin kunhelpas per via petegado, por ke, pro la donaco donita al ni per multaj personoj, danko estu donata de multaj pro ni.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Ĉar jen estas nia singratulado, nome la atesto de nia konscienco, ke en sankteco kaj sincereco antaŭ Dio, ne laŭ homa saĝeco, sed laŭ la graco de Dio, ni kondutadis en la mondo, kaj precipe ĉe vi.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Ĉar ni skribas al vi nenion alian krom tio, kion vi legas kaj prikonsentas, kaj mi esperas, ke vi prikonsentos ĝis la fino;',
  },
  '14': {
    verse_nr: 14,
    verse: 'kiel ankaŭ vi ja parte prikonsentis pri ni, ke ni estas via singratulado, tiel same, kiel vi ankaŭ estas la nia en la tago de nia Sinjoro Jesuo.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Kaj en ĉi tiu fidado mi intencis veni unue al vi, por ke vi havu duoblan gracon,',
  },
  '16': {
    verse_nr: 16,
    verse: 'kaj vizitinte vin survoje, trairi en Makedonujon, kaj denove el Makedonujo veni al vi, kaj de vi esti antaŭen irigita al Judujo.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Kiam mi do tiel intencis, ĉu mi elmontris kapricemon? aŭ kion mi celas, ĉu mi tion celas laŭkarne, tiel ke estu ĉe mi la Jes, Jes, kaj la Ne, Ne?',
  },
  '18': {
    verse_nr: 18,
    verse: 'Sed, kiel Dio estas fidela, nia parolo al vi ne estas Jes kaj Ne.',
  },
  '19': {
    verse_nr: 19,
    verse: 'Ĉar la Filo de Dio, Jesuo Kristo, kiu de ni estas predikita inter vi,  de mi kaj Silvano kaj Timoteo, ne estis Jes kaj Ne, sed en li la Jes estiĝis.',
  },
  '20': {
    verse_nr: 20,
    verse: 'Ĉar kiel ajn multaj estas la promesoj de Dio, en li estas la Jes; tial ankaŭ per li estas la Amen, por la gloro al Dio per ni.',
  },
  '21': {
    verse_nr: 21,
    verse: 'Kaj tiu, kiu fortikigas nin kune kun vi en Kristo kaj sanktoleis nin,  estas Dio,',
  },
  '22': {
    verse_nr: 22,
    verse: 'kiu ankaŭ nin sigelis kaj donis al ni la antaŭgarantiaĵon de la Spirito en niaj koroj.',
  },
  '23': {
    verse_nr: 23,
    verse: 'Sed mi vokas Dion kiel atestanton sur mian animon, ke por indulgi vin mi ankoraŭ ne venis al Korinto.',
  },
  '24': {
    verse_nr: 24,
    verse: 'Ne kvazaŭ ni estrus super via fido, sed ni estas kunhelpantoj de via ĝojo; ĉar per via fido vi staras.',
  },
};

export const CxapitroUnu = {
  key: '2 Korintanoj 1',
  pretitle: 'La Dua Epistolo de La Apostolo Paŭlo al La',
  title: 'Korintanoj',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
