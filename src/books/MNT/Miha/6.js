const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Aŭskultu, kion diras la Eternulo:Leviĝu, havu juĝan disputon kun la montoj, kaj la montetoj aŭdu vian voĉon.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Aŭskultu, ho montoj, la juĝan disputon de la Eternulo, kaj ankaŭ vi,  ho potencaj fundamentoj de la tero; ĉar la Eternulo havas juĝan disputon kun Sia popolo, kaj al Izrael Li volas doni moralinstruon.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Ho Mia popolo! kion Mi faris al vi, kaj per kio Mi faris al vi maljustaĵon? respondu al Mi.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Mi elkondukis ja vin el la lando Egipta, kaj el la domo de sklaveco Mi vin elaĉetis, kaj Mi sendis antaŭ vin Moseon, Aaronon, kaj Mirjamon.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Ho Mia popolo! rememoru, kion intencis Balak, reĝo de Moab, kaj kion respondis al li Bileam, filo de Beor; de Ŝitim ĝis Gilgal, por ke vi sciu la bonfarojn de la Eternulo.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Kun kio mi povas stariĝi antaŭ la Eternulo, kliniĝi antaŭ Dio en la alto? ĉu mi stariĝu antaŭ Li kun bruloferoj, kun jaraĝaj bovidoj?',
  },
  '7': {
    verse_nr: 7,
    verse: 'Ĉu al la Eternulo faros plezuron miloj da ŝafoj aŭ sennombraj torentoj da oleo? ĉu mi donu mian unuenaskiton pro mia krimo, la frukton de mia ventro pro la peko de mia animo?',
  },
  '8': {
    verse_nr: 8,
    verse: 'Estas dirite al vi, ho homo, kio estas bona kaj kion la Eternulo postulas de vi:nur agi juste, ami bonfarojn, kaj esti modesta antaŭ via Dio.',
  },
  '9': {
    verse_nr: 9,
    verse: 'La voĉo de la Eternulo vokas al la urbo, kaj saĝuloj timas Vian nomon.  Humiliĝu antaŭ la puno, kaj antaŭ Tiu, kiu ĝin destinis.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Ankoraŭ restas en la domo de malpiulo trezoroj de malpieco, kaj malbeninda malĝusta mezurilo.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Ĉu Mi povas aprobi falsan pesilon kaj trompajn pezilojn en la saketo?',
  },
  '12': {
    verse_nr: 12,
    verse: 'Ĉar la riĉuloj de la urbo estas plenaj de rabemo, kaj ĝiaj loĝantoj parolas mensogon, kaj la lingvo de ilia buŝo estas falsaĵo,',
  },
  '13': {
    verse_nr: 13,
    verse: 'tial Mi dolorige vin frapos per dezertigo pro viaj pekoj.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Vi manĝos, sed ne fariĝos sata; doloron pro malsato vi havos en via interno; vi kaŝos, sed ne povos konservi; kaj kion vi konservos, tion Mi transdonos al la glavo.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Vi semos, sed vi ne rikoltos; vi premos olivojn, sed vi ne ŝmiros vin per oleo; vi premos vinberojn, sed vi ne trinkos vinon.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Konserviĝis ĉe vi la moroj de Omri kaj ĉiuj faroj de la domo de Aĥab, kaj vi sekvas iliajn konsilojn, por ke Mi faru vin dezerto, viajn loĝantojn mokataĵo, kaj por ke vi portu sur vi la malhonoron de Mia popolo.',
  },
};

export const CxapitroSes = {
  key: 'Miĥa 6',
  chapterNum: 6,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
