const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Petro, apostolo de Jesuo Kristo, al la elektitoj, kiuj estas el la dispelitaro, pasloĝantaj en Ponto, Galatujo, Kapadokio, Azio, kaj Bitinio,',
  },
  '2': {
    verse_nr: 2,
    verse: 'laŭ la antaŭscio de Dio, la Patro, en sanktigo de la Spirito, por obeo kaj aspergo de la sango de Jesuo Kristo:Graco al vi kaj paco pligrandiĝu.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Benata estu la Dio kaj Patro de nia Sinjoro Jesuo Kristo, kiu laŭ Sia granda kompato nin renaskis en esperon vivan per la releviĝo de Jesuo Kristo el la mortintoj,',
  },
  '4': {
    verse_nr: 4,
    verse: 'en heredaĵon ne pereontan, ne makulotan, ne velkontan, rezervitan en la ĉielo por vi,',
  },
  '5': {
    verse_nr: 5,
    verse: 'kiuj estas gardataj de la potenco de Dio per fido al savo preta malkaŝiĝi en la lasta tempo.',
  },
  '6': {
    verse_nr: 6,
    verse: 'En tio vi ĝojegas, kvankam por kelka tempo, se estas necese,  malĝojigite en diversaj tentoj,',
  },
  '7': {
    verse_nr: 7,
    verse: 'por ke la provado de via fido, pli multevalora ol oro, kiu pereas,  kvankam per fajro provite, troviĝu efika por laŭdo kaj gloro kaj honoro en la malkaŝo de Jesuo Kristo;',
  },
  '8': {
    verse_nr: 8,
    verse: 'kiun, ne vidinte, vi amas; kiun kvankam nun vi ne vidas, tamen, al li kredante, vi ĝojegas per ĝojo nedirebla kaj gloroplena;',
  },
  '9': {
    verse_nr: 9,
    verse: 'ricevante la celon de via fido, savon de animoj.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Koncerne tiun savon esploris kaj serĉis la profetoj, kiuj profetis pri la graco venonta al vi;',
  },
  '11': {
    verse_nr: 11,
    verse: 'serĉante, kiun kaj kian tempon montris la enestanta en ili Spirito de Kristo, kiu atestis antaŭe la suferojn por Kristo kaj la sekvontajn glorojn.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Kaj al ili malkaŝiĝis, ke ne al si mem, sed al vi, ili liveris tion,  kio nun estas proklamita al vi de tiuj, kiuj predikis al vi la evangelion per la Spirito Sankta, elsendita el la ĉielo; en kiujn aferojn anĝeloj deziras enrigardi.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Tial, ĉirkaŭzoninte la lumbojn de via menso, estu sobraj kaj esperadu perfekte la gracon alportotan al vi en la malkaŝo de Jesuo Kristo;',
  },
  '14': {
    verse_nr: 14,
    verse: 'kiel infanoj de obeo, ne formiĝante laŭ la voluptoj, kiujn vi antaŭe havis en via nescio;',
  },
  '15': {
    verse_nr: 15,
    verse: 'sed kiel via Vokinto estas sankta, tiel vi ankaŭ fariĝu sanktaj en ĉia konduto;',
  },
  '16': {
    verse_nr: 16,
    verse: 'pro tio, ke estas skribite:Vi estu sanktaj, ĉar Mi estas sankta.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Kaj se vi vokas la Patron, kiu sen personfavorado juĝas laŭ la faro de ĉiu, vi pasigu en timo la tempon de via ĉi tiea loĝado;',
  },
  '18': {
    verse_nr: 18,
    verse: 'sciante, ke ne per pereemaj objektoj, oro aŭ arĝento, vi elaĉetiĝis el via vanta vivmaniero, kiun vi ricevis de viaj patroj;',
  },
  '19': {
    verse_nr: 19,
    verse: 'sed per multekosta sango, kiel de ŝafido senmakula kaj sendifekta, la sango de Kristo;',
  },
  '20': {
    verse_nr: 20,
    verse: 'kiu estis antaŭdifinita antaŭ la fondo de la mondo, sed elmontrita en la fino de la tempoj pro vi,',
  },
  '21': {
    verse_nr: 21,
    verse: 'kiuj per li fidas Dion, kiu relevis lin el la mortintoj kaj donis al li gloron; por ke via fido kaj espero estu al Dio.',
  },
  '22': {
    verse_nr: 22,
    verse: 'Ĉastiginte viajn animojn, en la obeo al la vero, por sincera amo al la frataro, amu unu la alian el la koro fervore;',
  },
  '23': {
    verse_nr: 23,
    verse: 'renaskite, ne el pereema semo, sed el nepereema, per la vorto de Dio,  vivanta kaj restanta.',
  },
  '24': {
    verse_nr: 24,
    verse: 'Ĉar:   Ĉiu karno estas herbo,   Kaj ĉiu ĝia ĉarmo estas kiel kampa floreto.   Sekiĝas herbo, velkas floreto;',
  },
  '25': {
    verse_nr: 25,
    verse: 'Sed la vorto de la Eternulo restas eterne.  Kaj ĉi tiu estas la parolo, kiu estas predikita al vi.',
  },
};

export const CxapitroUnu = {
  key: '1 Petro 1',
  pretitle: 'La Unua Epistolo Ĝenerala de',
  title: 'Petro',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
