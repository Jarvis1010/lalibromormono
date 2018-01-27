const chapter = {
  '1': { verse_nr: 1, verse: 'Adam, Set, Enoŝ,' },
  '2': { verse_nr: 2, verse: 'Kenan, Mahalalel, Jared,' },
  '3': { verse_nr: 3, verse: 'Ĥanoĥ, Metuŝelaĥ, Lemeĥ,' },
  '4': { verse_nr: 4, verse: 'Noa, Ŝem, Ĥam, kaj Jafet.' },
  '5': {
    verse_nr: 5,
    verse: 'La filoj de Jafet:Gomer, Magog, Madaj, Javan, Tubal, Meŝeĥ, kaj Tiras.',
  },
  '6': { verse_nr: 6, verse: 'La filoj de Gomer:Aŝkenaz, Rifat, kaj Togarma.' },
  '7': {
    verse_nr: 7,
    verse: 'La filoj de Javan:Eliŝa, Tarŝiŝ, Kitim, kaj Dodanim.',
  },
  '8': { verse_nr: 8, verse: 'La filoj de Ĥam:Kuŝ, Micraim, Put, kaj Kanaan.' },
  '9': {
    verse_nr: 9,
    verse: 'La filoj de Kuŝ:Seba, Ĥavila, Sabta, Raama, kaj Sabteĥa. La filoj de Raama:Ŝeba kaj Dedan.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Kuŝ naskigis ankaŭ Nimrodon; ĉi tiu komencis esti potenculo sur la tero.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Micraim naskigis la Ludidojn, la Anamidojn, la Lehabidojn, la Naftuĥidojn,',
  },
  '12': {
    verse_nr: 12,
    verse: 'la Patrusidojn, la Kasluĥidojn (de kiuj devenis la Filiŝtoj), kaj la Kaftoridojn.',
  },
  '13': {
    verse_nr: 13,
    verse: 'De Kanaan naskiĝis Cidon, lia unuenaskito, kaj Ĥet,',
  },
  '14': { verse_nr: 14, verse: 'la Jebusidoj, la Amoridoj, la Girgaŝidoj,' },
  '15': { verse_nr: 15, verse: 'la Ĥividoj, la Arkidoj, la Sinidoj,' },
  '16': { verse_nr: 16, verse: 'la Arvadidoj, la Cemaridoj, la Ĥamatidoj.' },
  '17': {
    verse_nr: 17,
    verse: 'La filoj de Ŝem:Elam, Aŝur, Arpaĥŝad, Lud, Aram, Uc, Ĥul, Geter,  kaj Meŝeĥ.',
  },
  '18': {
    verse_nr: 18,
    verse: 'De Arpaĥŝad naskiĝis Ŝelaĥ, de Ŝelaĥ naskiĝis Eber.',
  },
  '19': {
    verse_nr: 19,
    verse: 'Al Eber naskiĝis du filoj:la nomo de unu estis Peleg, ĉar en lia tempo estis dividita la tero; la nomo de lia frato estis Joktan.',
  },
  '20': {
    verse_nr: 20,
    verse: 'De Joktan naskiĝis Almodad, Ŝelef, Ĥacarmavet, Jeraĥ,',
  },
  '21': { verse_nr: 21, verse: 'Hadoram, Uzal, Dikla,' },
  '22': { verse_nr: 22, verse: 'Ebal, Abimael, Ŝeba,' },
  '23': {
    verse_nr: 23,
    verse: 'Ofir, Ĥavila, kaj Jobab. Ĉiuj ĉi tiuj estis la filoj de Joktan.',
  },
  '24': { verse_nr: 24, verse: 'Ŝem, Arpaĥŝad, Ŝelaĥ,' },
  '25': { verse_nr: 25, verse: 'Eber, Peleg, Reu,' },
  '26': { verse_nr: 26, verse: 'Serug, Naĥor, Teraĥ,' },
  '27': { verse_nr: 27, verse: 'Abram (tio estas Abraham).' },
  '28': { verse_nr: 28, verse: 'La filoj de Abraham:Isaak kaj Iŝmael.' },
  '29': {
    verse_nr: 29,
    verse: 'Jen estas ilia genealogio:de Iŝmael, la unuenaskito Nebajot, poste Kedar, Adbeel, Mibsam,',
  },
  '30': { verse_nr: 30, verse: 'Miŝma, Duma, Masa, Ĥadad, Tema,' },
  '31': {
    verse_nr: 31,
    verse: 'Jetur, Nafiŝ, kaj Kedma. Tio estas la filoj de Iŝmael.',
  },
  '32': {
    verse_nr: 32,
    verse: 'La filoj de Ketura, kromvirino de Abraham, kiujn ŝi naskis:Zimran,  Jokŝan, Medan, Midjan, Jiŝbak, kaj Ŝuaĥ. Kaj la filoj de Jokŝan estis Ŝeba kaj Dedan.',
  },
  '33': {
    verse_nr: 33,
    verse: 'La filoj de Midjan:Efa, Efer, Ĥanoĥ, Abida, kaj Eldaa. Ĉiuj ĉi tiuj estis la filoj de Ketura.',
  },
  '34': {
    verse_nr: 34,
    verse: 'Abraham naskigis Isaakon. La filoj de Isaak:Esav kaj Izrael.',
  },
  '35': {
    verse_nr: 35,
    verse: 'La filoj de Esav:Elifaz, Reuel, Jeuŝ, Jalam, kaj Koraĥ.',
  },
  '36': {
    verse_nr: 36,
    verse: 'La filoj de Elifaz:Teman, Omar, Cefi, Gatam, Kenaz, Timna, kaj Amalek.',
  },
  '37': {
    verse_nr: 37,
    verse: 'La filoj de Reuel:Naĥat, Zeraĥ, Ŝama, kaj Miza.',
  },
  '38': {
    verse_nr: 38,
    verse: 'La filoj de Seir:Lotan, Ŝobal, Cibeon, Ana, Diŝon, Ecer, kaj Diŝan.',
  },
  '39': {
    verse_nr: 39,
    verse: 'La filoj de Lotan:Ĥori kaj Homam; la fratino de Lotan estis Timna.',
  },
  '40': {
    verse_nr: 40,
    verse: 'La filoj de Ŝobal:Aljan, Manaĥat, Ebal, Ŝefi, kaj Onam. La filoj de Cibeon:Aja kaj Ana.',
  },
  '41': {
    verse_nr: 41,
    verse: 'La filoj de Ana:Diŝon. La filoj de Diŝon:Ĥamran, Eŝban, Jitran, kaj Keran.',
  },
  '42': {
    verse_nr: 42,
    verse: 'La filoj de Ecer:Bilhan, Zaavan, kaj Jaakan. La filoj de Diŝan:Uc kaj Aran.',
  },
  '43': {
    verse_nr: 43,
    verse: 'Jen estas la reĝoj, kiuj reĝis en la lando de Edom, antaŭ ol aperis reĝo ĉe la Izraelidoj:Bela, filo de Beor; la nomo de lia urbo estis Dinhaba.',
  },
  '44': {
    verse_nr: 44,
    verse: 'Kaj Bela mortis, kaj anstataŭ li ekreĝis Jobab, filo de Zeraĥ, el Bocra.',
  },
  '45': {
    verse_nr: 45,
    verse: 'Kaj Joab mortis, kaj anstataŭ li ekreĝis Ĥuŝam, el la lando de la Temanidoj.',
  },
  '46': {
    verse_nr: 46,
    verse: 'Kaj Ĥuŝam mortis, kaj anstataŭ li ekreĝis Hadad, filo de Bedad, kiu venkobatis la Midjanidojn sur la kampo de Moab; la nomo de lia urbo estis Avit.',
  },
  '47': {
    verse_nr: 47,
    verse: 'Kaj Hadad mortis, kaj anstataŭ li ekreĝis Samla el Masreka.',
  },
  '48': {
    verse_nr: 48,
    verse: 'Kaj Samla mortis, kaj anstataŭ li ekreĝis Ŝaul el Reĥobot ĉe la Rivero.',
  },
  '49': {
    verse_nr: 49,
    verse: 'Kaj Ŝaul mortis, kaj anstataŭ li ekreĝis Baal-Ĥanan, filo de Aĥbor.',
  },
  '50': {
    verse_nr: 50,
    verse: 'Kaj Baal-Ĥanan mortis, kaj anstataŭ li ekreĝis Hadad; la nomo de lia urbo estis Pai; la nomo de lia edzino estis Mehetabel, filino de Matred,  filino de Me-Zahab.',
  },
  '51': {
    verse_nr: 51,
    verse: 'Kaj Hadad mortis. Tiam la ĉefoj de Edom estis:ĉefo Timna, ĉefo Alva,  ĉefo Jetet,',
  },
  '52': { verse_nr: 52, verse: 'ĉefo Oholibama, ĉefo Ela, ĉefo Pinon,' },
  '53': { verse_nr: 53, verse: 'ĉefo Kenaz, ĉefo Teman, ĉefo Mibcar,' },
  '54': {
    verse_nr: 54,
    verse: 'ĉefo Magdiel, ĉefo Iram. Tio estas la ĉefoj de Edom.',
  },
};

export const CxapitroUnu = {
  key: '1 Kroniko 1',
  title: 'La Unua Libro de Kronikoj',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
