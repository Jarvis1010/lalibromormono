const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'En la dua jaro de la reĝo Dario, en la sesa monato, en la unua tago de la monato, aperis vorto de la Eternulo per la profeto Ĥagaj al Zerubabel,  filo de Ŝealtiel, regionestro de Judujo, kaj al la ĉefpastro Josuo, filo de Jehocadak, dirante:',
  },
  '2': {
    verse_nr: 2,
    verse: 'Tiele diras la Eternulo Cebaot:Tiu popolo diras, ke ankoraŭ ne venis la tempo, por konstrui la domon de la Eternulo.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Sed aperis vorto de la Eternulo per la profeto Ĥagaj, dirante:',
  },
  '4': {
    verse_nr: 4,
    verse: 'Ĉu por vi mem estas nun la ĝusta tempo, por sidi en viaj tabulitaj domoj, dum tiu domo estas ruinoj?',
  },
  '5': {
    verse_nr: 5,
    verse: 'Nun tiele diras la Eternulo Cebaot:Pripensu bone vian staton:',
  },
  '6': {
    verse_nr: 6,
    verse: 'vi semas multe, sed enportas malmulte; vi manĝas, sed ne ĝissate; vi trinkas, sed ne ĝisebrie; vi vestas vin, sed ne estas al vi varme; kiu laborenspezas monon, tiu laborenspezas por truhava saketo.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Tiele diras la Eternulo Cebaot:Pripensu bone vian staton.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Iru sur la monton, prenu lignon, kaj konstruu la domon; Mi akceptos ĝin favore, kaj Mi montros Mian gloron, diras la Eternulo.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Vi atendis multon, sed montriĝis, ke estas malmulte; kaj kion vi alportis hejmen, tion Mi disblovis. Pro kio tiel estas? diras la Eternulo Cebaot; pro tio, ke Mia domo estas dezerta, dum vi kuras ĉiu al sia domo.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Pro tio la ĉielo ne donas al vi roson kaj la tero ne donas siajn produktaĵojn.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Kaj Mi alvokis sekecon sur la teron, sur la montojn, sur la grenon, sur la moston, sur la oleon, kaj sur ĉion, kion produktas la tero, ankaŭ sur la homon, sur la bruton, kaj sur ĉiun laboron de la manoj.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Zerubabel, file de Ŝealtiel, kaj la ĉefpastro Josuo, filo de Jehocadak, kaj la tuta cetera popolo aŭskultis la voĉon de la Eternulo,  ilia Dio, kaj la vortojn de la profeto Ĥagaj, kun kiuj lin sendis la Eternulo, ilia Dio; kaj la popolo ektimis la Eternulon.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Kaj Ĥagaj, la sendito de la Eternulo, diris al la popolo en la nomo de la Eternulo jene:Mi estas kun vi, diras la Eternulo.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Kaj la Eternulo vigligis la spiriton de Zerubabel, filo de Ŝealtiel,  regionestro de Judujo, kaj la spiriton de la ĉefpastro Josuo, filo de Jehocadak, kaj la spiriton de la tuta cetera popolo; kaj ili venis kaj komencis labori en la domo de la Eternulo Cebaot, ilia Dio,',
  },
  '15': {
    verse_nr: 15,
    verse: 'en la dudek-kvara tago de la sesa monato, en la dua jaro de la reĝo Dario.',
  },
};

export const CxapitroUnu = {
  key: 'Ĥagaj 1',
  title: 'Ĥagaj',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
