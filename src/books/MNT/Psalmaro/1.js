const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Feliĉa estas la homo, kiu ne iras laŭ konsilo de malpiuloj,   Nek staras sur vojo de pekuloj,   Nek sidas en kunsido de blasfemantoj;',
  },
  '2': {
    verse_nr: 2,
    verse: 'Sed li nur havas deziron por la leĝo de la Eternulo,   Kaj pri Lia leĝo li pensas tage kaj nokte.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Kaj li estos kiel arbo, plantita apud akvaj torentoj,   Donanta sian frukton en sia tempo,   Kaj kies folio ne velkas;   Kaj en ĉio, kion li faras, li sukcesos.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Ne tiel estas la malpiuloj;   Sed ili estas kiel grenventumaĵo, kiun disblovas la vento.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Tial ne staros fortike la malpiuloj ĉe la juĝo,   Nek la pekuloj en societo de piuloj.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Ĉar la Eternulo konas la vojon de piuloj;   Sed la vojo de malpiuloj pereos.',
  },
};

export const CxapitroUnu = {
  key: 'Psalmaro 1',
  title: 'La Libro de Psalmaro',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
