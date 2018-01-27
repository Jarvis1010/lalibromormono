const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Dio, kiu multafoje kaj multamaniere parolis en la tempo antikva al niaj patroj en la profetoj,',
  },
  '2': {
    verse_nr: 2,
    verse: 'en tiuj lastaj tagoj parolis al ni en Filo, kiun Li nomis heredanto de ĉio, per kiu ankaŭ Li faris la mondaĝojn,',
  },
  '3': {
    verse_nr: 3,
    verse: 'kiu, estante la elbrilo de Lia gloro kaj plena bildo de Lia substanco,  kaj subtenante ĉion per la vorto de sia potenco, kaj farinte la elpurigon de niaj pekoj, sidiĝis dekstre de la Majesto en altaĵoj;',
  },
  '4': {
    verse_nr: 4,
    verse: 'fariĝinte tiom pli granda ol la anĝeloj, kiom pli bonegan nomon ol ili li heredis.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Ĉar al kiu el la anĝeloj Li iam diris:      Vi estas Mia Filo,   Hodiaŭ Mi vin naskis?  kaj denove:      Mi estos al li Patro,   Kaj li estos al Mi Filo?',
  },
  '6': {
    verse_nr: 6,
    verse: 'Kaj ankoraŭ, kiam Li enkondukas la unuenaskiton en la mondon, Li diras:Kaj kliniĝu antaŭ li ĉiuj anĝeloj de Dio.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Kaj pri la anĝeloj Li diras:      Kiu faras la ventojn Liaj senditoj,   Flamantan fajron Liaj servantoj;',
  },
  '8': {
    verse_nr: 8,
    verse: 'sed pri la Filo:   Via trono estas Dia trono por ĉiam kaj eterne;   La sceptro de via regno estas sceptro de justeco.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Vi amas virton kaj malamas malvirton;   Tial Dio, via Dio, oleis vin per oleo de ĝojo pli ol viajn kamaradojn.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Kaj:   En antikveco Vi, ho Eternulo, fondis la teron,   Kaj la ĉielo estas la faro de Viaj manoj.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Ili pereos, sed Vi restos;   Kaj ĉiuj ili eluziĝos kiel vesto,',
  },
  '12': {
    verse_nr: 12,
    verse: 'Kiel veston Vi ilin ŝanĝos, kaj ili ŝanĝiĝos.   Sed Vi restas la sama,   Kaj Viaj jaroj ne finiĝos.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Sed al kiu el la anĝeloj Li iam diris:      Sidu dekstre de Mi,   Ĝis Mi faros viajn malamikojn benketo por viaj piedoj?',
  },
  '14': {
    verse_nr: 14,
    verse: 'Ĉu ne estas ili ĉiuj spiritoj servantaj, elsendataj, por servi al tiuj, kiuj estas heredontoj de la savo?',
  },
};

export const CxapitroUnu = {
  key: 'Hebroj 1',
  pretitle: 'La Epistolo de La Apostolo Paŭlo al La',
  title: 'Hebroj',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
