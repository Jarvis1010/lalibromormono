const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Jakobo, servisto de Dio kaj de la Sinjoro Jesuo Kristo, al la dek du triboj, kiuj estas dispelitaj:Saluton!',
  },
  '2': {
    verse_nr: 2,
    verse: 'Rigardu ĉion kiel ĝojigan, miaj fratoj, kiam vi falas en diversajn tentojn,',
  },
  '3': {
    verse_nr: 3,
    verse: 'sciante, ke la provado de via fido faras paciencon.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Kaj la pacienco havu sian perfektan faradon, por ke vi estu perfektaj kaj kompletaj, ne havante mankon.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Sed se al iu el vi mankas saĝeco, li petu Dion, kiu donacas al ĉiuj malavare kaj ne riproĉas, kaj ĝi estos al li donata.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Sed li petu en fido, neniel dubante; ĉar la dubanto similas ondon de la maro, ventopelatan kaj skuatan.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Ĉar tiu homo ne pensu, ke li ricevos ion de la Sinjoro-',
  },
  '8': { verse_nr: 8, verse: 'duoblanima homo, ŝanceliĝa en ĉiuj siaj vojoj.' },
  '9': { verse_nr: 9, verse: 'Sed la malaltranga frato ĝoju pri sia alteco;' },
  '10': {
    verse_nr: 10,
    verse: 'kaj la riĉulo pri sia humiliĝo; ĉar kiel floro de herbo li forpasos.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Ĉar la suno leviĝas kun la brulvento kaj sekigas la herbon, kaj ĝia floro falas, kaj la gracio de ĝia formo pereas; tiel ankaŭ la riĉulo velkos en siaj vojoj.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Feliĉa estas la homo, kiu elportas tenton; ĉar kiam li estos elprovita, li ricevos la kronon de vivo, kiun la Sinjoro promesis al tiuj,  kiuj lin amas.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Neniu diru, kiam li estas tentata:Mi estas tentata de Dio; ĉar Dio ne estas tentebla de malbono, kaj Li mem tentas neniun;',
  },
  '14': {
    verse_nr: 14,
    verse: 'sed ĉiu estas tentata, kiam li estas fortirata de sia dezirado, kaj delogata.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Tiam la dezirado, gravediĝinte, naskas pekon; kaj la peko,  maturiĝinte, naskas morton.',
  },
  '16': { verse_nr: 16, verse: 'Ne trompiĝu, miaj amataj fratoj.' },
  '17': {
    verse_nr: 17,
    verse: 'Ĉiu bona donaĵo kaj ĉiu perfekta donaco estas de supre,  malsuprenvenante de la Patro de lumoj, ĉe kiu ne povas ekzisti ŝanĝo, nek ombro de sinturnado.',
  },
  '18': {
    verse_nr: 18,
    verse: 'Laŭ Sia propra volo Li naskis nin per la vorto de la vero, por ke ni estu kvazaŭ unuaaĵo de Liaj kreitaĵoj.',
  },
  '19': {
    verse_nr: 19,
    verse: 'Tion vi scias, miaj amataj fratoj. Sed ĉiu rapidu aŭdi, malrapidu paroli, malrapidu koleri;',
  },
  '20': {
    verse_nr: 20,
    verse: 'ĉar la kolero de homo ne efektivigas la justecon de Dio.',
  },
  '21': {
    verse_nr: 21,
    verse: 'Tial, formetinte ĉian malpurecon kaj superfluon de malico, akceptu kun humileco la enplantitan vorton, kiu povas savi viajn animojn.',
  },
  '22': {
    verse_nr: 22,
    verse: 'Sed estu plenumantoj de la vorto, kaj ne nur aŭskultantoj, trompantaj vin mem.',
  },
  '23': {
    verse_nr: 23,
    verse: 'Ĉar se iu estas aŭskultanto de la vorto, kaj ne plenumanto, li similas iun, kiu rigardas sian naturan vizaĝon en spegulo;',
  },
  '24': {
    verse_nr: 24,
    verse: 'ĉar li sin rigardas kaj foriras, kaj tuj forgesas, kia li estis.',
  },
  '25': {
    verse_nr: 25,
    verse: 'Sed tiu, kiu fikse rigardas en la perfektan leĝon, la leĝon de libereco, kaj tiel restas, ne estante aŭskultanto, kiu forgesas, sed plenumanto, kiu energias, tiu estos benata en sia faro.',
  },
  '26': {
    verse_nr: 26,
    verse: 'Se iu ŝajnas al si religia, ne bridante sian langon, sed trompante sian koron, ties religio estas vanta.',
  },
  '27': {
    verse_nr: 27,
    verse: 'Religio pura kaj senmakula antaŭ nia Dio kaj Patro estas jena:viziti orfojn kaj vidvinojn en ilia mizero, kaj sin gardi sen malpuriĝo de la mondo.',
  },
};

export const CxapitroUnu = {
  key: 'Jakobo 1',
  pretitle: 'La Epistolo Ĝenerala de',
  title: 'Jakobo',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
