const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Post tiuj okazintaĵoj la reĝo Aĥaŝveroŝ eminentigis Hamanon, filon de Hamedata, la Agagidon, altigis lin kaj starigis lian seĝon super ĉiuj princoj, kiuj estis ĉe li.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Kaj ĉiuj servantoj de la reĝo, kiuj estis ĉe la pordego de la reĝo,  klinadis sin kaj ĵetadis sin vizaĝaltere antaŭ Haman, ĉar tiel ordonis pri li la reĝo. Sed Mordeĥaj sin ne klinadis kaj ne ĵetadis sin vizaĝaltere.',
  },
  '3': {
    verse_nr: 3,
    verse: 'La servantoj de la reĝo, kiuj estis ĉe la pordego de la reĝo, diris al Mordeĥaj:Kial vi malobeas la ordonon de la reĝo?',
  },
  '4': {
    verse_nr: 4,
    verse: 'Ĉar ili diradis tion al li ĉiutage kaj li ne obeis ilin, tial ili raportis tion al Haman, por vidi, ĉu la vortoj de Mordeĥaj konservos sian forton; ĉar li diris al ili, ke li estas Judo.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Kiam Haman vidis, ke Mordeĥaj ne klinas sin kaj ne ĵetas sin vizaĝaltere antaŭ li, tiam Haman pleniĝis de kolero.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Sed li trovis nesufiĉa meti la manon sur Mordeĥajon; ĉar oni diris al li, el kiu popolo Mordeĥaj estas, tial Haman ekintencis ekstermi ĉiujn Judojn, kiuj estis en la tuta regno de Aĥaŝveroŝ, la popolon de Mordeĥaj.',
  },
  '7': {
    verse_nr: 7,
    verse: 'En la unua monato, tio estas en la monato Nisan, en la dek-dua jaro de la reĝado de Aĥaŝveroŝ, oni ĵetadis pur�on, tio estas loton, antaŭ Haman,  de tago al tago kaj de monato al monato, ĝis la dek-dua, tio estas ĝis la monato Adar.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Kaj Haman diris al la reĝo Aĥaŝveroŝ:Ekzistas unu popolo, disĵetita kaj dissemita inter la popoloj en ĉiuj landoj de via regno; iliaj leĝoj estas malsimilaj al la leĝoj de ĉiuj popoloj, kaj la leĝojn de la reĝo ili ne plenumas; ne decas al la reĝo tiel restigi ilin.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Se al la reĝo plaĉas, oni preskribu ekstermi ilin; tiam dek mil kikarojn da arĝento mi pesos en la manojn de la oficistoj, por enporti en la kason de la reĝo.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Tiam la reĝo deprenis sian ringon de sia mano, kaj donis ĝin al Haman,  filo de Hamedata, la Agagido, malamiko de la Judoj.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Kaj la reĝo diris al Haman:La arĝento estas transdonata al vi, kaj ankaŭ la popolo, por fari al ĝi tion, kio plaĉas al vi.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Kaj oni vokis la skribistojn de la reĝo en la unua monato, en ĝia dek-  tria tago, kaj oni skribis konforme al ĉiuj ordonoj de Haman al la satrapoj de la reĝo, kaj al la regionestroj, kiuj estis super ĉiu regiono, kaj al la princoj de ĉiu popolo, en ĉiun landon laŭ ĝia skribmaniero kaj al ĉiu popolo en ĝia lingvo; en la nomo de la reĝo Aĥaŝveroŝ tio estis skribita kaj sigelita per la ringo de la reĝo.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Kaj oni sendis per kurieroj leterojn en ĉiujn landojn de la reĝo, ke oni ekstermu, mortigu, kaj pereigu ĉiujn Judojn, de junulo ĝis maljunulo,  la infanojn kaj la virinojn, en unu tago, en la dek-tria tago de la dek-dua monato, tio estas de la monato Adar, kaj ilian havaĵon oni disrabu.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Kopio de la letero estis transdonota kiel leĝo en ĉiun landon kaj proklamota al ĉiuj popoloj, por ke ili estu pretaj al tiu tago.',
  },
  '15': {
    verse_nr: 15,
    verse: 'La kurieroj eliris rapide kun la ordono de la reĝo. La leĝo estis donita en la kastelurbo Ŝuŝan. La reĝo kaj Haman sidiĝis, por drinki, sed la urbo Ŝuŝan estis konsternita.',
  },
};

export const CxapitroTri = {
  key: 'Ester 3',
  chapterNum: 3,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
