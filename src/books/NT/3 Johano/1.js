const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'La presbitero al Gajo, la amata, kiun mi amas en la vero.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Amato, mi preĝas, ke al vi prosperu ĉio, kaj vi bonsanu tiel same, kiel prosperas al via animo.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Ĉar mi treege ĝojis, kiam fratoj venis kaj atestis pri via vereco, kiel vi iradas en la vero.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Pli grandan ĝojon mi ne havas, ol aŭdi pri miaj infanoj iradantaj en la vero.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Amato, vi faras fidele rilate al ĉiuj viaj klopodoj por la fratoj kaj tiuj fremduloj,',
  },
  '6': {
    verse_nr: 6,
    verse: 'kiuj atestis vian amon antaŭ la eklezio; kaj vi faros bone, tiujn antaŭenigante dece je Dio,',
  },
  '7': {
    verse_nr: 7,
    verse: 'ĉar pro la Nomo ili eliris, akceptante nenion de la nacianoj.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Ni devas do akcepti tiajn, por ke ni estu kunlaborantoj kun la vero.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Mi skribis iom al la eklezio; sed Diotrefes, kiu amas la estrecon inter ili, nin ne akceptas.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Tial, se mi venos, mi rememorigos al li la farojn, kiujn li faras, per malbonaj paroloj babilante kontraŭ ni; kaj ne kontenta je tio, li mem ne akceptas la fratojn, nek tion permesas al tiuj, kiuj volas, kaj ilin el la eklezio elpelas.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Amato, imitu ne la malbonon, sed la bonon. Bonfaranto estas el Dio;  malbonfaranto ne vidis Dion.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Pri Demetrio estas atestite de ĉiuj, kaj de la vero mem; kaj ni ja atestas; kaj vi scias, ke nia atesto estas vera.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Mi havis multon por skribi al vi; sed mi ne volas skribi al vi per inko kaj kano;',
  },
  '14': {
    verse_nr: 14,
    verse: 'sed mi esperas vidi vin baldaŭ, kaj ni parolos vizaĝon kontraŭ vizaĝo.  Paco al vi. Salutas vin la amikoj. Salutu laŭ nomo la amikojn.',
  },
};

export const CxapitroUnu = {
  key: '3 Johano 1',
  pretitle: 'La Tria Epistolo Ĝenerala de',
  title: 'Johano',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
