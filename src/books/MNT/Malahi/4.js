const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Ĉar jen venos tago, ardanta kiel forno; tiam ĉiuj malhumiluloj kaj malbonaguloj estos kiel pajlo, kaj la venonta tago bruligos ilin tiel, diras la Eternulo Cebaot, ke ĝi ne restigos al ili radikon nek branĉon.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Sed por vi, kiuj respektas Mian nomon, leviĝos suno de justeco, kaj sanigo estos en ĝiaj radioj, kaj vi eliros kaj saltados, kiel bone nutritaj bovidoj.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Kaj vi piedpremos la malpiulojn, ĉar ili estos polvo sub la plandoj de viaj piedoj en tiu tago, kiun Mi aranĝos, diras la Eternulo Cebaot.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Memoru la instruon de Mia servanto Moseo, kiun Mi donis al li sur Ĥoreb por la tuta Izrael, la leĝojn kaj preskribojn.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Jen Mi sendos al vi la profeton Elija, antaŭ ol venos la granda kaj timinda tago de la Eternulo;',
  },
  '6': {
    verse_nr: 6,
    verse: 'kaj li returnos la koron de la patroj al la infanoj, kaj la koron de la infanoj al iliaj patroj, por ke Mi, veninte, ne frapu la teron per anatemo.',
  },
};

export const CxapitroKvar = {
  key: 'Malaĥi 4',
  chapterNum: 4,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
