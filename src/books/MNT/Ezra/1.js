const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'En la unua jaro de Ciro, reĝo de Persujo, por ke plenumiĝu la vorto de la Eternulo, dirita per Jeremia, la Eternulo ekscitis la spiriton de Ciro,  reĝo de Persujo, kaj ĉi tiu ordonis proklami en sia tuta regno voĉe kaj skribe jenon:',
  },
  '2': {
    verse_nr: 2,
    verse: 'Tiele diras Ciro, reĝo de Persujo:Ĉiujn regnojn de la tero donis al mi la Eternulo, Dio de la ĉielo, kaj Li komisiis al mi konstrui al Li domon en Jerusalem, kiu estas en Judujo.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Kiu inter vi estas el Lia tuta popolo, kun tiu estu lia Dio; kaj li iru en Jerusalemon, kiu estas en Judujo, kaj konstruu la domon de la Eternulo,  Dio de Izrael, de tiu Dio, kiu estas en Jerusalem.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Kaj al ĉiu, kiu restis, en kiu ajn loko li loĝas, la loĝantoj de lia loko helpu al li per arĝento, per oro, per alia havo, kaj per brutoj, kun memvola donaco por la domo de Dio, kiu estas en Jerusalem.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Kaj leviĝis la ĉefoj de la patrodomoj de Jehuda kaj de Benjamen, kaj la pastroj kaj la Levidoj, ĉiu, en kiu Dio vekis lian spiriton, por iri konstrui la domon de la Eternulo en Jerusalem.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Kaj ĉiuj iliaj ĉirkaŭantoj helpis al ili per arĝentaj objektoj, per oro, per alia havo, per brutoj, kaj per multekostaĵoj, krom ĉiuj memvolaj donacoj.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Kaj la reĝo Ciro elportigis la vazojn de la domo de la Eternulo, kiujn Nebukadnecar estis elportinta el Jerusalem kaj metinta en la domon de liaj dioj;',
  },
  '8': {
    verse_nr: 8,
    verse: 'Ciro, reĝo de Persujo, elportigis ilin per la trezoristo Mitredat, kiu laŭkalkule transdonis ilin al Ŝeŝbacar, princo de la Judoj.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Kaj jen estas ilia nombro:da oraj pelvoj tridek, da arĝentaj pelvoj mil,  da tranĉiloj dudek naŭ,',
  },
  '10': {
    verse_nr: 10,
    verse: 'da oraj kalikoj tridek, da arĝentaj duoblaj kalikoj kvarcent dek, da aliaj vazoj mil.',
  },
  '11': {
    verse_nr: 11,
    verse: 'La nombro de ĉiuj vazoj oraj kaj arĝentaj estis kvin mil kvarcent.  Ĉion ĉi tion kunportis Ŝeŝbacar ĉe la foriro de la forkaptitoj el Babel en Jerusalemon.',
  },
};

export const CxapitroUnu = {
  key: 'Ezra 1',
  title: 'Ezra',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
