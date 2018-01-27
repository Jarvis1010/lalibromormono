const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Kaj la tuta popolo, kiel unu homo, kolektiĝis sur la placo, kiu estas antaŭ la Pordego de la Akvo, kaj ili diris al Ezra, la skribisto, ke li alportu la libron de instruo de Moseo, kiun la Eternulo ordonis al Izrael.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Kaj la pastro Ezra alportis la instruon antaŭ la komunumon, antaŭ la virojn kaj virinojn, antaŭ ĉiujn, kiuj povis kompreni, en la unua tago de la sepa monato.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Kaj li legis el ĝi sur la placo, kiu estas antaŭ la Pordego de la Akvo,  de la tagiĝo ĝis la tagmezo, antaŭ la viroj kaj virinoj kaj komprenpovantoj; kaj la oreloj de la tuta popolo estis turnitaj al la libro de instruo.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Kaj la skribisto Ezra staris sur ligna ambono, kiun oni faris por tio,  kaj apud li staris Matitja, Ŝema, Anaja, Urija, Ĥilkija, kaj Maaseja,  dekstre de li; kaj maldekstre de li:Pedaja, Miŝael, Malkija, Ĥaŝum,  Ĥaŝbadana, Zeĥarja, kaj Meŝulam.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Kaj Ezra malfermis la libron antaŭ la okuloj de la tuta popolo, ĉar li staris pli alte ol la tuta popolo; kaj kiam li ĝin malfermis, la tuta popolo stariĝis.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Kaj Ezra benis la Eternulon, la grandan Dion; kaj la tuta popolo respondis:Amen, amen, levante supren siajn manojn; kaj ili kliniĝis kaj faris adoron antaŭ la Eternulo vizaĝaltere.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Kaj Jeŝua, Bani, Ŝerebja, Jamin, Akub, Ŝabtaj, Ĥodija, Maaseja,  Kelita, Azarja, Jozabad, Ĥanan, Pelaja, kaj la Levidoj klarigadis al la popolo la instruon; kaj la popolo staris sur sia loko.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Kaj ili legis el la libro, el la instruo de Dio, klare, kun komentarioj,  ke oni komprenu la legataĵon.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Kaj Neĥemja, kiu estis la regionestro, kaj la pastro Ezra, la skribisto,  kaj la Levidoj, kiuj donadis klarigojn al la popolo, diris al la tuta popolo:Ĉi tiu tago estas sankta al la Eternulo, via Dio; ne malĝoju kaj ne ploru. Ĉar la tuta popolo ploris, aŭskultante la vortojn de la instruo.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Kaj li diris al ili:Iru, manĝu grasaĵon kaj trinku dolĉaĵon, kaj sendu porciojn al tiuj, kiuj nenion pretigis por si; ĉar ĉi tiu tago estas sankta al nia Sinjoro; kaj ne malĝoju, ĉar la ĝojo pri la Eternulo estas via forto.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Kaj la Levidoj trankviligadis la tutan popolon, dirante:Ĉesu, ĉar ĉi tiu tago estas sankta; ne malĝoju.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Kaj la tuta popolo iris, por manĝi kaj trinki kaj sendi porciojn kaj fari grandan festenon; ĉar ili komprenis la vortojn, kiujn oni sciigis al ili.',
  },
  '13': {
    verse_nr: 13,
    verse: 'En la dua tago kunvenis la ĉefoj de patrodomoj de la tuta popolo,  ankaŭ la pastroj kaj la Levidoj, al la skribisto Ezra, por ke li plue klarigu al ili la vortojn de la instruo.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Kaj ili trovis, ke en la instruo, kiun la Eternulo ordonis per Moseo,  estas skribite, ke la Izraelidoj sidu en laŭboj en la festo de la sepa monato,',
  },
  '15': {
    verse_nr: 15,
    verse: 'kaj ke ili aŭdigu kaj proklamu en ĉiuj siaj urboj kaj en Jerusalem,  dirante:Iru sur la monton, kaj prenu branĉojn de olivarbo, branĉojn de oleastraj arboj, branĉojn de mirto, branĉojn de palmoj, kaj branĉojn de densfoliaj arboj, por fari laŭbojn, kiel estas skribite.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Kaj la popolo eliris kaj prenis, kaj faris al si laŭbojn, ĉiu sur sia tegmento, aŭ sur sia korto, aŭ sur la kortoj de la domo de Dio, aŭ sur la placo de la Pordego de la Akvo, aŭ sur la placo de la Pordego de Efraim.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Kaj la tuta komunumo de tiuj, kiuj revenis el la kaptiteco, faris laŭbojn kaj loĝis en la laŭboj; ĉar de la tempo de Josuo, filo de Nun,  ĝis tiu tago la Izraelidoj tion ne faris. Kaj estis tre granda ĝojo.',
  },
  '18': {
    verse_nr: 18,
    verse: 'Kaj oni legis el la libro de instruo de Dio ĉiutage, de la unua tago ĝis la lasta tago. Kaj oni festis dum sep tagoj, kaj en la oka tago oni faris ferman feston, laŭ la preskribo.',
  },
};

export const CxapitroOk = {
  key: 'Neĥemja 8',
  chapterNum: 8,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
