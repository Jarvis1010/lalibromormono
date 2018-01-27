const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Simon Petro, servisto kaj apostolo de Jesuo Kristo, al tiuj, kiuj ricevis egale altvaloran fidon, kiel ni, en la justeco de nia Dio kaj Savanto Jesuo Kristo:',
  },
  '2': {
    verse_nr: 2,
    verse: 'Graco al vi kaj paco pligrandiĝu en sciado pri Dio, kaj pri Jesuo, nia Sinjoro;',
  },
  '3': {
    verse_nr: 3,
    verse: 'pro tio, ke lia Dia povo donacis al ni ĉion rilatantan al vivo kaj pieco, per la scio de tiu, kiu nin vokis per sia propra gloro kaj virto;',
  },
  '4': {
    verse_nr: 4,
    verse: 'per kiuj li donacis al ni la promesojn karegajn kaj tre grandajn; por ke per ili vi fariĝu partoprenantoj en Dia naturo, forsaviĝinte el la putreco,  kiu estas en la mondo per voluptemo.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Kaj pro tiu sama kaŭzo viaflanke aplikante ĉian diligentecon, en via fido aldonu virton; kaj en virto scion;',
  },
  '6': {
    verse_nr: 6,
    verse: 'kaj en scio sinregadon; kaj en sinregado paciencon; kaj en pacienco piecon;',
  },
  '7': {
    verse_nr: 7,
    verse: 'kaj en pieco fratamikecon, kaj en fratamikeco amon.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Ĉar tiuj ecoj, se ĉe vi ili troviĝas kaj abundas, faras vin nek mallaboremaj nek senfruktaj en la scio de nia Sinjoro Jesuo Kristo.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Ĉar tiu, al kiu mankas tiuj ecoj, estas blinda, miopa, forgesinte la forpurigon el siaj antaŭaj pekoj.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Sekve, fratoj, pli diligente klopodu, por certigi vian vokon kaj elekton; ĉar farante tion, vi neniam falpuŝiĝos;',
  },
  '11': {
    verse_nr: 11,
    verse: 'ĉar tiel al vi estos riĉe provizita la eniro en la eternan regnon de nia Sinjoro kaj Savanto Jesuo Kristo.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Pro tio mi ĉiam estos preta rememorigi vin pri tiuj aferoj, kvankam vi ilin scias kaj estas fortigitaj en la ĉeestanta vero.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Kaj mi opinias konvena, dum mi estas en ĉi tiu tabernaklo, vigligi vin per rememorigo;',
  },
  '14': {
    verse_nr: 14,
    verse: 'sciante, ke baldaŭ estos la demeto de mia tabernaklo, ĝuste kiel nia Sinjoro Jesuo Kristo montris al mi.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Kaj mi diligente penos, ke post mia foriro vi povu konstante rememori tion.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Ĉar ne sekvinte fabelojn sofismajn, ni konigis al vi la potencon kaj alvenon de nia Sinjoro Jesuo Kristo, sed vidinte per propraj okuloj lian majeston.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Ĉar li ricevis de Dio, la Patro, honoron kaj gloron, kiam al li tia voĉo estis alportita el la brilega gloro:Ĉi tiu estas Mia Filo, la amata,  en kiu Mi havas plezuron;',
  },
  '18': {
    verse_nr: 18,
    verse: 'kaj tiun voĉon, alportitan el la ĉielo, ni mem aŭdis, kunestante kun li sur la sankta monto.',
  },
  '19': {
    verse_nr: 19,
    verse: 'Kaj ni havas la profetan vorton konfirmitan; kiun atentante, vi bone faras, kvazaŭ lampon lumantan en malhela loko, ĝis ektagiĝos kaj la matenstelo ekleviĝos en viaj koroj;',
  },
  '20': {
    verse_nr: 20,
    verse: 'antaŭ ĉio sciante, ke neniu profetaĵo de la Skribo enhavas en si sian propran klarigon.',
  },
  '21': {
    verse_nr: 21,
    verse: 'Ĉar neniam profetaĵo estas alportita per homa volo; sed homoj, movataj de la Sankta Spirito, parolis laŭ Dio.',
  },
};

export const CxapitroUnu = {
  key: '2 Petro 1',
  pretitle: 'La Dua Epistolo Ĝenerala de',
  title: 'Petro',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
