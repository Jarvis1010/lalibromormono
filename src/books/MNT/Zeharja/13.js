const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'En tiu tempo malfermiĝos por la domo de David kaj por la loĝantoj de Jerusalem fonto, por purigi sin de pekoj kaj de malpureco.',
  },
  '2': {
    verse_nr: 2,
    verse: 'En tiu tempo, diras la Eternulo Cebaot, Mi ekstermos de la lando la nomojn de la idoloj, kaj ili ne plu estos rememorataj; ankaŭ la profetojn kaj la malpuran spiriton Mi forigos de la lando.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Se iu tiam diros profetaĵon, tiam lia patro kaj lia patrino, kiuj naskis lin, diros al li:Vi ne devas vivi, ĉar vi parolis malveraĵon en la nomo de la Eternulo; kaj lia patro kaj lia patrino, kiuj naskis lin, trapikos lin, kiam li profetos.',
  },
  '4': {
    verse_nr: 4,
    verse: 'En tiu tempo ĉiu el la profetoj hontos pri sia vizio, kiam li volos profeti, kaj oni ne metos sur sin harkovritan mantelon por trompi;',
  },
  '5': {
    verse_nr: 5,
    verse: 'sed ĉiu diros:Mi ne estas profeto, mi estas terkultivisto, ĉar al la tero mi alkutimiĝis de mia infaneco.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Se oni diros al li:Kio estas ĉi tiuj vundoj sur viaj manoj? tiam li respondos:Oni batis min en la domo de miaj amantoj.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Ho glavo, leviĝu kontraŭ Mian paŝtiston kaj kontraŭ Mian plej proksiman amikon, diras la Eternulo Cebaot; frapu la paŝtiston, por ke diskuru la ŝafoj; kaj Mi returnos Mian manon al la malgranduloj.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Kaj sur la tuta tero, diras la Eternulo, du partoj estos ekstermitaj kaj pereos, kaj la tria parto restos sur ĝi.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Kaj tiun trian parton Mi trairigos tra fajro, kaj refandos, kiel oni fandas arĝenton, kaj Mi elprovos ilin, kiel oni elprovas oron. Ili vokos Mian nomon, kaj Mi aŭskultos ilin, kaj Mi diros:Tio estas Mia popolo; kaj ili diros:La Eternulo estas nia Dio.',
  },
};

export const CxapitroDekTri = {
  key: 'Zeĥarja 13',
  chapterNum: 13,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
