const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'En la tempo, kiam regis la juĝistoj, iam malsato okazis en la lando; kaj foriris viro el Bet-Leĥem en Judujo, por pasloĝi en la lando de Moab; li kaj lia edzino kaj liaj du filoj.',
  },
  '2': {
    verse_nr: 2,
    verse: 'La nomo de la viro estis Elimeleĥ, kaj la nomo de lia edzino estis Naomi, kaj la nomoj de liaj du filoj estis Maĥlon kaj Kiljon, Efratanoj el Bet-Leĥem en Judujo. Kaj ili venis sur la kampojn de Moab kaj restis tie.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Elimeleĥ, la edzo de Naomi, mortis; kaj restis ŝi kun siaj du filoj.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Ambaŭ edziĝis kun Moabidinoj; la nomo de unu estis Orpa, kaj la nomo de la dua estis Rut; kaj ili loĝis tie ĉirkaŭ dek jaroj.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Sed mortis ankaŭ ambaŭ, Maĥlon kaj Kiljon; kaj restis nur la virino sola, senigita je sia edzo kaj siaj du filoj.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Ŝi leviĝis kun siaj bofilinoj, por iri returne el la lando de Moab;  ĉar ŝi aŭdis en la lando de Moab, ke la Eternulo rememoris Sian popolon,  donante al ĝi panon.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Ŝi eliris el la loko, kie ŝi loĝis, kun siaj du bofilinoj; kaj ili iris sur la vojo, por ke ili revenu al la lando de Jehuda.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Naomi diris al siaj du bofilinoj:Iru, kaj revenu ĉiu el vi al la domo de sia patrino; la Eternulo favoru vin tiel same, kiel vi estis favorkoraj al la mortintoj kaj al mi;',
  },
  '9': {
    verse_nr: 9,
    verse: 'la Eternulo favoru vin, ke vi trovu ripozon, ĉiu el vi en domo de sia edzo. Ŝi kisis ilin, kaj ili levis sian voĉon kaj ploris.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Kaj ili diris al ŝi:Ni volas iri kun vi al via popolo.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Naomi respondis:Iru returne, miaj filinoj; kial do vi irus kun mi? Ĉu ankoraŭ ekzistas filoj en mia utero, ke vi edziniĝu kun ili?',
  },
  '12': {
    verse_nr: 12,
    verse: 'Revenu, miaj filinoj, foriru; ĉar mi jam estas tro maljuna por edziniĝi kun viro. Eĉ se mi dirus, ke mi havas ankoraŭ esperon, eĉ se mi jam havus edzon hodiaŭ nokte, kaj eĉ se mi naskus filojn:',
  },
  '13': {
    verse_nr: 13,
    verse: 'ĉu pri ili vi esperu, ĝis ili plenaĝiĝos? ĉu por ili vi atendu, ne edziniĝante kun viro? Ne, miaj filinoj; estas tre maldolĉe al mi pro vi,  ĉar la mano de la Eternulo afliktis min.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Sed ili levis sian voĉon kaj ploris plue. Kaj Orpa kisis sian bopatrinon, sed Rut aliĝis al ŝi.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Kaj ĉi tiu diris:Jen via bofratino reiris al sia gento kaj al siaj dioj; iru vi ankaŭ returne post via bofratino.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Sed Rut diris:Ne petegu min, ke mi vin forlasu, aŭ ke mi returnu min kaj ĉesu sekvi vin; ĉar kien vi iros, mi ankaŭ iros, kaj kie vi noktos, mi ankaŭ noktos; via popolo ankaŭ estos mia popolo, kaj via Dio estos mia Dio.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Sur la loko, kie vi mortos, mi ankaŭ mortos, kaj tie oni min enterigos.  La Eternulo faru al mi tion kaj pli, se io krom la morto disigos min de vi.',
  },
  '18': {
    verse_nr: 18,
    verse: 'Kiam Naomi vidis, ke ŝi firme decidis iri kun ŝi, tiam ŝi ĉesis disputi kun ŝi.',
  },
  '19': {
    verse_nr: 19,
    verse: 'Kaj ili ambaŭ iradis, ĝis ili alvenis en Bet-Leĥemon. Kaj kiam ili eniris en Bet-Leĥemon, la tuta loĝantaro de la urbo ekbruis pri ili,  dirante:Ĉu tio estas Naomi?',
  },
  '20': {
    verse_nr: 20,
    verse: 'Kaj ŝi respondis al ili:Ne nomu min Naomi, nomu min Mara; ĉar la Plejpotenculo faris al mi maldolĉegon;',
  },
  '21': {
    verse_nr: 21,
    verse: 'kun pleneco mi foriris, sed la Eternulo revenigis min malplena; kial do vi nomus min Naomi, konsiderante, ke la Eternulo atestis kontraŭ mi kaj la Plejpotenculo afliktis min?',
  },
  '22': {
    verse_nr: 22,
    verse: 'Tiel Naomi revenis, kaj kun ŝi ankaŭ Rut, la Moabidino, ŝia bofilino,  kiu revenis el la lando de Moab; kaj ili venis en Bet-Leĥemon je la komenco de la rikolto de hordeo.',
  },
};

export const CxapitroUnu = {
  key: 'Rut 1',
  title: 'La Libro de Rut',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
