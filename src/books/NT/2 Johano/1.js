const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'La presbitero al la elektita sinjorino kaj ŝiaj infanoj, kiujn mi amas en la vero; kaj ne mi sola, sed ankaŭ ĉiuj, kiuj konas la veron;',
  },
  '2': {
    verse_nr: 2,
    verse: 'pro la vero restanta en ni, kaj ĝi estos ĉe ni por ĉiam:',
  },
  '3': {
    verse_nr: 3,
    verse: 'Graco, kompato, paco, estos ĉe ni, de Dio, la Patro, kaj de Jesuo Kristo,  la Filo de la Patro, en vero kaj amo.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Mi treege ĝojas, ke mi trovis iujn el viaj infanoj iradantajn en la vero tiel same, kiel ni ricevis ordonon de la Patro.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Kaj nun mi vin petegas, sinjorino, skribante ne kvazaŭ novan ordonon al vi, sed tiun, kiun ni havis de la komenco, ke ni amu unu la alian.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Kaj jen estas la amo:ke ni iradu laŭ Liaj ordonoj. Tio estas la ordono,  tiu sama, kiun vi aŭdis de la komenco, ke vi iradu en ĝi.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Ĉar multaj delogantoj eliris en la mondon, kiuj ne konfesas Jesuon Kriston venantan en karno. Tio estas la deloganto kaj la antikristo.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Gardu vin, ke vi ne perdu viajn elfaritaĵojn, sed ke vi ricevu plenan rekompencon.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Ĉiu, kiu iras antaŭen kaj ne restas en la instruado de Kristo, ne havas Dion; kiu restas en la instruado, tiu havas kaj la Patron kaj la Filon.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Se iu al vi venas kaj ne kunportas ĉi tiun instruadon, ne ricevu lin en la domon, kaj al li ne donu salutan vorton;',
  },
  '11': {
    verse_nr: 11,
    verse: 'ĉar kiu al li salute parolas, tiu partoprenas en liaj malbonfaroj.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Havante multon por skribi al vi, mi ne volis skribi per papero kaj inko;  sed mi esperas veni al vi kaj paroli vizaĝon kontraŭ vizaĝo, por ke via ĝojo estu plena.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Salutas vin la infanoj de via fratino, la elektita.',
  },
};

export const CxapitroUnu = {
  key: '2 Johano 1',
  pretitle: 'La Dua Epistolo Ĝenerala de',
  title: 'Johano',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
