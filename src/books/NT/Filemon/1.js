const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Paŭlo, malliberulo por Kristo Jesuo, kaj Timoteo, la frato, al Filemon,  nia amato kaj kunlaboranto,',
  },
  '2': {
    verse_nr: 2,
    verse: 'kaj al Apfia, la fratino, kaj al Arĥipo, nia kunbatalanto, kaj al la eklezio en via domo:',
  },
  '3': {
    verse_nr: 3,
    verse: 'Graco al vi kaj paco de Dio, nia Patro, kaj de la Sinjoro Jesuo Kristo.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Mi ĉiam dankas mian Dion, memorigante pri vi en miaj preĝoj,',
  },
  '5': {
    verse_nr: 5,
    verse: 'aŭdinte pri via amo kaj pri la fido, kiun vi havas al la Sinjoro Jesuo kaj al ĉiuj sanktuloj;',
  },
  '6': {
    verse_nr: 6,
    verse: 'por ke la partoprenado en via fido fariĝu energia per la sciigo de ĉiu bonaĵo, kiu estas en vi, por Kristo.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Ĉar mi tre ĝojis kaj havis multon da konsolo pro via amo, ĉar la koroj de la sanktuloj refreŝiĝis per vi, frato mia.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Kvankam do mi havas plenan kuraĝon en Kristo, por ordoni al vi tion, kio estas konvena,',
  },
  '9': {
    verse_nr: 9,
    verse: 'tamen pro la amo mi preferas petegi tia, kia mi estas, Paŭlo, maljunulo kaj nun ankaŭ malliberulo pro Kristo Jesuo;',
  },
  '10': {
    verse_nr: 10,
    verse: 'mi petegas vin koncerne mian filon, kiun mi naskis en miaj katenoj; tio estis Onesimo,',
  },
  '11': {
    verse_nr: 11,
    verse: 'kiu estis iam senutila por vi, sed nun estas utila por vi kaj por mi;',
  },
  '12': {
    verse_nr: 12,
    verse: 'mi ĵus resendis al vi lin mem, alivorte, mian propran koron;',
  },
  '13': {
    verse_nr: 13,
    verse: 'lin mi volonte ja tenus apud mi, por ke anstataŭ vi li estu al mi helpanto en la ligiloj de la evangelio;',
  },
  '14': {
    verse_nr: 14,
    verse: 'sed mi nenion volis fari sen via konsento; por ke via boneco estu ne kvazaŭ deviga, sed laŭvola.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Ĉar eble li pro tio estas apartigita for de vi por kelka tempo, por ke vi havu lin por ĉiam;',
  },
  '16': {
    verse_nr: 16,
    verse: 'jam ne kiel sklavon, sed kiel pli bonan ol sklavo, kiel fraton amatan,  precipe por mi, sed des pli por vi, kaj en la karno kaj en la Sinjoro.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Se vi do rigardas min kiel kunulon, akceptu lin tiel same, kiel min mem.',
  },
  '18': {
    verse_nr: 18,
    verse: 'Se tamen li faris ian malhonestaĵon, aŭ ŝuldas ion al vi, tion enkalkulu en mian konton;',
  },
  '19': {
    verse_nr: 19,
    verse: 'mi, Paŭlo, skribas per mia propra mano, mi ĝin repagos; mi tamen ne diras al vi, ke vi viaparte ŝuldas al mi eĉ vin mem.',
  },
  '20': {
    verse_nr: 20,
    verse: 'Jes, frato mia, lasu min havi plezuron de vi en la Sinjoro; refreŝigu mian koron en Kristo.',
  },
  '21': {
    verse_nr: 21,
    verse: 'Fidante pri via obeo, mi skribas al vi, sciante, ke vi faros eĉ pli multe, ol kiom mi diras.',
  },
  '22': {
    verse_nr: 22,
    verse: 'Sed krom tio pretigu por mi gastoĉambron; ĉar mi esperas, ke mi, laŭ viaj preĝoj, estos donita al vi.',
  },
  '23': {
    verse_nr: 23,
    verse: 'Salutas vin Epafras, mia kunmalliberulo en Kristo Jesuo,',
  },
  '24': {
    verse_nr: 24,
    verse: 'Marko, Aristarĥo, Demas, Luko, miaj kunlaborantoj.',
  },
  '25': {
    verse_nr: 25,
    verse: 'La graco de nia Sinjoro Jesuo Kristo estu kun via spirito. Amen.',
  },
};

export const CxapitroUnu = {
  key: 'Filemon 1',
  pretitle: 'La Epistolo de La Apostolo Paŭlo al',
  title: 'Filemon',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
