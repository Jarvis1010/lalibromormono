const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Sentencoj de Salomono, filo de David, reĝo de Izrael:',
  },
  '2': {
    verse_nr: 2,
    verse: 'Por scii saĝon kaj moralinstruon;   Por kompreni parolojn de prudento;',
  },
  '3': {
    verse_nr: 3,
    verse: 'Por ricevi instruon pri saĝo,   Vero, justo, kaj honesto;',
  },
  '4': {
    verse_nr: 4,
    verse: 'Por doni al la malkleruloj spriton,   Al la junulo scion kaj singardemon.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Saĝulo aŭdu kaj plimultigu sian scion,   Kaj prudentulo akiros gvidajn kapablojn,',
  },
  '6': {
    verse_nr: 6,
    verse: 'Por kompreni sentencon kaj retoraĵon,   La vortojn de saĝuloj kaj iliajn enigmojn.',
  },
  '7': {
    verse_nr: 7,
    verse: 'La timo antaŭ la Eternulo estas la komenco de sciado.   Saĝon kaj instruon malpiuloj malestimas.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Aŭskultu, mia filo, la instruon de via patro,   Kaj ne forĵetu la ordonon de via patrino;',
  },
  '9': {
    verse_nr: 9,
    verse: 'Ĉar ili estas bela krono por via kapo,   Kaj ornamo por via kolo.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Mia filo, se pekuloj vin logos,   Ne sekvu ilin.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Se ili diros:Iru kun ni,   Ni embuskos por mortigi,   Ni senkaŭze insidos senkulpulojn;',
  },
  '12': {
    verse_nr: 12,
    verse: 'Kiel Ŝeol ni englutos ilin vivajn,   Kaj la piulojn kiel irantajn en la tombon;',
  },
  '13': {
    verse_nr: 13,
    verse: 'Ni trovos diversajn grandvaloraĵojn,   Ni plenigos niajn domojn per rabaĵo;',
  },
  '14': {
    verse_nr: 14,
    verse: 'Vi lotos meze inter ni,   Unu monujo estos por ni ĉiuj:',
  },
  '15': {
    verse_nr: 15,
    verse: 'Mia filo, ne iru la vojon kune kun ili;   Gardu vian piedon de ilia vojstreko,',
  },
  '16': {
    verse_nr: 16,
    verse: 'Ĉar iliaj piedoj kuras al malbono,   Kaj rapidas, por verŝi sangon.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Ĉar vane estas metata reto  Antaŭ la okuloj de ĉiu birdo.',
  },
  '18': {
    verse_nr: 18,
    verse: 'Kaj ili embuskas sian propran sangon,   Ili insidas siajn proprajn animojn.',
  },
  '19': {
    verse_nr: 19,
    verse: 'Tiaj estas la vojoj de ĉiu, kiu avidas rabakiron;   Ĝi forprenas la vivon de sia posedanto.',
  },
  '20': {
    verse_nr: 20,
    verse: 'La saĝo krias sur la strato;   Ĝi aŭdigas sian voĉon sur la placoj;',
  },
  '21': {
    verse_nr: 21,
    verse: 'Ĝi vokas en la ĉefaj kunvenejoj, ĉe la pordegaj enirejoj;   En la urbo ĝi diras siajn parolojn.',
  },
  '22': {
    verse_nr: 22,
    verse: 'Ĝis kiam, ho malkleruloj, vi amos nescion?   Kaj al blasfemantoj plaĉos blasfemado,   Kaj senprudentuloj malamos scion?',
  },
  '23': {
    verse_nr: 23,
    verse: 'Returnu vin al mia predikado;   Jen mi eligos al vi mian spiriton,   Mi sciigos al vi miajn vortojn.',
  },
  '24': {
    verse_nr: 24,
    verse: 'Ĉar mi vokis, kaj vi rifuzis;   Mi etendis mian manon, kaj neniu atentis;',
  },
  '25': {
    verse_nr: 25,
    verse: 'Kaj vi forĵetis ĉiujn miajn konsilojn,   Kaj miajn predikojn vi ne deziris:',
  },
  '26': {
    verse_nr: 26,
    verse: 'Tial ankaŭ mi ridos ĉe via malfeliĉo;   Mi mokos, kiam timo vin atakos.',
  },
  '27': {
    verse_nr: 27,
    verse: 'Kiam la timo atakos vin kiel uragano,   Kaj via malfeliĉo venos kiel ventego,   Kiam venos al vi mizero kaj sufero:',
  },
  '28': {
    verse_nr: 28,
    verse: 'Tiam ili min vokos, sed mi ne respondos;   Ili min serĉos, sed min ne trovos.',
  },
  '29': {
    verse_nr: 29,
    verse: 'Tial ke ili malamis scion,   Kaj timon antaŭ la Eternulo ili ne deziris havi,',
  },
  '30': {
    verse_nr: 30,
    verse: 'Ili ne deziris miajn konsilojn,   Ili malestimis ĉiujn miajn predikojn:',
  },
  '31': {
    verse_nr: 31,
    verse: 'Ili manĝu la fruktojn de sia agado,   Kaj ili satiĝu de siaj pripensoj.',
  },
  '32': {
    verse_nr: 32,
    verse: 'Ĉar la kapricoj de la malsaĝuloj ilin mortigas,   Kaj la senzorgeco de la senorduloj ilin pereigas.',
  },
  '33': {
    verse_nr: 33,
    verse: 'Sed kiu min aŭskultas, tiu loĝos sendanĝere,   Kaj estos trankvila, kaj ne timos malbonon.',
  },
};

export const CxapitroUnu = {
  key: 'Sentencoj 1',
  title: 'La Sentencoj',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
