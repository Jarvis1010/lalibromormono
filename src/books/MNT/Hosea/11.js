const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Kiam Izrael estis junulo, Mi lin ekamis, kaj el Egiptujo Mi vokis Mian filon.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Sed nun oni vokas ilin, kaj ili sin deturnas; al la Baaloj ili oferas,  kaj al idoloj ili incensas.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Mi instruis al Efraim la iradon; Mi prenis ilin je la brako, kaj ili ne rimarkis, ke Mi ilin kuracas.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Per ŝnuroj de homoj Mi tiris ilin, per ligiloj de amo; Mi estis por ili kiel levanto de la jugo, kaj Mi metis antaŭ ili la manĝaĵon.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Ili ne revenos en la landon Egiptan, sed Asirio estos ilia reĝo, ĉar ili ne volis penti.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Glavo falos sur liajn urbojn kaj ekstermos liajn idojn kaj formanĝos ilin pro iliaj entreprenoj.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Mia popolo rigidiĝis en la defalo de Mi; kaj kvankam oni ĝin vokas al la Plejaltulo, ĝi ne levas sin.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Kiel Mi agu kun vi, ho Efraim? kiel Mi protektu vin, ho Izrael? Ĉu Mi faru al vi, kiel al Adma? ĉu Mi egaligu vin al Ceboim? Renversiĝis en Mi Mia koro, varmegiĝis Mia tuta kompato.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Mi ne agos laŭ Mia flama kolero, Mi ne plu ekstermos Efraimon; ĉar Mi estas Dio, ne homo, Mi estas Sanktulo inter vi; Mi ne venos en furiozo.',
  },
  '10': {
    verse_nr: 10,
    verse: 'La Eternulon ili sekvos, kiel kriantan leonon; kiam Li krios, tiam timigite venos la filoj de okcidente.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Timigite kiel birdo ili venos el Egiptujo, kaj kiel kolombo el la lando Asiria; kaj Mi enloĝigos ilin en iliaj domoj, diras la Eternulo.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Kun mensogoj ĉirkaŭis Min Efraim, kaj kun falsaĵo la domo de Izrael;  sed Jehuda ankoraŭ tenis sin je Dio kaj estis fidela al la Sanktulo.',
  },
};

export const CxapitroDekUnu = {
  key: 'Hoŝea 11',
  chapterNum: 11,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
