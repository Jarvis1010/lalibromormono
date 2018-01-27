const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Jen estas la nomoj de la filoj de Izrael, kiuj venis Egiptujon kun Jakob; ĉiu venis kun siaj domanoj:',
  },
  '2': { verse_nr: 2, verse: 'Ruben, Simeon, Levi, kaj Jehuda;' },
  '3': { verse_nr: 3, verse: 'Isaĥar, Zebulun, kaj Benjamen;' },
  '4': { verse_nr: 4, verse: 'Dan kaj Naftali, Gad kaj Aŝer.' },
  '5': {
    verse_nr: 5,
    verse: 'Kaj la nombro de ĉiuj animoj, kiuj eliris el la lumbo de Jakob, estis sepdek; kaj Jozef estis jam en Egiptujo.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Kaj mortis Jozef kaj ĉiuj liaj fratoj kaj tiu tuta generacio.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Kaj la Izraelidoj fruktis kaj diskreskis kaj multiĝis kaj treege fortiĝis, kaj la lando pleniĝis de ili.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Aperis en Egiptujo nova reĝo, kiu ne konis Jozefon.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Kaj li diris al sia popolo:Jen la popolo de la Izraelidoj estas pli multenombra kaj pli forta ol ni;',
  },
  '10': {
    verse_nr: 10,
    verse: 'ni uzu do ruzon kontraŭ ĝi, por ke ĝi ne multiĝu, ĉar se okazos milito, tiam ankaŭ tiu popolo aliĝos al niaj malamikoj kaj militos kontraŭ ni kaj foriros el la lando.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Kaj oni metis super ilin laborestrojn, por premi ilin per malfacilaj laboroj. Kaj ili konstruis por Faraono provizejajn urbojn Pitom kaj Rameses.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Sed ju pli oni premis ilin, des pli ili multiĝis kaj kreskis; kaj la Izraelidoj fariĝis teruraĵo.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Kaj la Egiptoj laborigis la Izraelidojn kruele.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Kaj ili maldolĉigis al ili la vivon per malfacila laboro super argilo kaj brikoj, kaj per ĉia laboro sur la kampo, per ĉiaj laboroj, kiujn ili kruele metis sur ilin.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Kaj la reĝo de Egiptujo parolis al la Hebreaj akuŝistinoj, el kiuj unu estis nomata Ŝifra kaj la dua estis nomata Pua.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Li diris:Kiam vi akuŝigos la Hebreinojn, rigardu la kuŝejon; se estas filo, mortigu lin, kaj se estas filino, lasu ŝin vivi.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Sed la akuŝistinoj timis Dion, kaj ili ne faris, kiel diris al ili la reĝo de Egiptujo; kaj ili lasis la vivon al la virseksaj infanoj.',
  },
  '18': {
    verse_nr: 18,
    verse: 'Kaj la reĝo de Egiptujo alvokis la akuŝistinojn, kaj diris al ili:  Kial vi tion faras kaj lasas la vivon al la virseksaj infanoj?',
  },
  '19': {
    verse_nr: 19,
    verse: 'Tiam la akuŝistinoj diris al Faraono:Ne kiel la Egiptaj virinoj estas la Hebreinoj; ili estas viglaj:antaŭ ol venas al ili la akuŝistino, ili jam estas naskintaj.',
  },
  '20': {
    verse_nr: 20,
    verse: 'Kaj Dio faris bonon al la akuŝistinoj, kaj la popolo multiĝis kaj tre fortiĝis.',
  },
  '21': {
    verse_nr: 21,
    verse: 'Kaj ĉar la akuŝistinoj timis Dion, Li konstruis al ili domojn.',
  },
  '22': {
    verse_nr: 22,
    verse: 'Kaj Faraono ordonis al sia tuta popolo, dirante:Ĉiun filon, kiu naskiĝis, ĵetu en la Riveron, kaj ĉiun filinon lasu viva.',
  },
};

export const CxapitroUnu = {
  key: 'Eliro 1',
  title: 'Eliro',
  pretitle: 'La Dua Libro de Moseo Nomiĝas',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
