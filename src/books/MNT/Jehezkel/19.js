const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Kaj vi eksonigu funebran kanton pri la princoj de Izrael;',
  },
  '2': {
    verse_nr: 2,
    verse: 'kaj diru:Kial via patrino kiel leonino kuŝis inter leonoj, inter leonidoj edukis siajn idojn?',
  },
  '3': {
    verse_nr: 3,
    verse: 'Ŝi edukis unu el siaj idoj, ĝi fariĝis leonido, kaj ĝi lernis disŝiri kaptaĵon, ĝi manĝis homojn.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Kaj aŭdis pri ĝi popoloj; ĝi estas kaptita en ilian kavon, kaj ili forkondukis ĝin en ĉenoj en la landon Egiptan.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Kiam ŝi vidis, ke ŝia espero malaperis, ŝi prenis alian el siaj idoj kaj faris ĝin leonido.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Irante meze de leonoj, ĝi fariĝis leonido, lernis disŝiri kaptaĵon,  manĝis homojn.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Ĝi difektis iliajn loĝejojn, dezertigis iliajn urbojn; kaj la lando,  kun ĉio, kio estis en ĝi, eksentis teruron antaŭ la voĉo de ĝia blekegado.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Tiam kolektiĝis kontraŭ ĝi la popoloj el la ĉirkaŭaj landoj kaj ĵetis sur ĝin sian reton, kaj ĝi kaptiĝis en ilian kavon.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Kaj oni metis ĝin en ĉenoj en kaĝegon kaj forportis ĝin al la reĝo de Babel; kaj oni metis ĝin en fortikigitan lokon, por ke oni ne plu aŭdu ĝian voĉon sur la montoj de Izrael.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Via patrino estis, simile al vi, kiel vinberkreskaĵo, plantita apud akvo, fruktoriĉa kaj branĉoriĉa pro la abundo de akvo.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Kaj elkreskis al ĝi branĉoj tiel fortikaj, ke ili taŭgis kiel sceptroj de regantoj, kaj alte leviĝis ĝia trunko inter la branĉaro; kaj ĝi estis bone videbla pro sia alteco kaj pro la multo de siaj branĉoj.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Sed en kolero oni ĝin elŝiris kaj ĵetis sur la teron, kaj la orienta vento elsekigis ĝiajn fruktojn; derompiĝis kaj velksekiĝis la fortikaj branĉoj, fajro ilin konsumis.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Kaj nun ĝi estas transplantita en la dezerton, en landon sekan kaj senakvan.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Kaj eliris fajro el unu el ĝiaj branĉoj kaj forkonsumis ĝiajn fruktojn; kaj jam ne restis sur ĝi fortika branĉo por sceptro de regado.  Funebra kanto tio estas, kaj ĝi restos funebra kanto.',
  },
};

export const CxapitroDekNau = {
  key: 'Jeĥezkel 19',
  chapterNum: 19,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
