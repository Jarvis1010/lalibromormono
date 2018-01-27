const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Jen de la Eternulo venos tago, kiam oni dividos vian havaĵon meze de vi.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Mi kolektos ĉiujn naciojn milite kontraŭ Jerusalemon, kaj la urbo estos venkoprenita, la domoj estos detruitaj, la virinoj estos senhonorigitaj, duono de la urbo iros en kaptitecon, sed la cetera popolo ne estos ekstermita el la urbo.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Sed la Eternulo eliros kaj militos kontraŭ tiuj nacioj, kiel iam Li militis en tago de batalo.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Liaj piedoj en tiu tempo stariĝos sur la Monto de Olivoj, kiu estas antaŭ Jerusalem oriente; kaj la Monto de Olivoj disfendiĝos en la mezo en du partojn, de oriento ĝis okcidento, tiel, ke fariĝos tre granda valo, unu duono de la monto forŝoviĝos norden kaj la dua duono suden.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Kaj vi kuros en la valo inter Miaj montoj, ĉar la intermonta valo atingos ĝis Acel; vi kuros, kiel vi kuris de la tertremo en la tempo de Uzija, reĝo de Judujo; tiam venos la Eternulo, mia Dio, kune kun ĉiuj sanktuloj.',
  },
  '6': {
    verse_nr: 6,
    verse: 'En tiu tago ne estos lumo, sed estos malvarmo kaj densa nebulo.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Kaj tio estos tago sola, konata nur de la Eternulo, nek tago nek nokto;  nur vespere montriĝos lumo.',
  },
  '8': {
    verse_nr: 8,
    verse: 'En tiu tago ekfluos viviga akvo el Jerusalem, duono de ĝi al la maro orienta kaj duono al la maro okcidenta; ĝi fluados en somero kaj en vintro.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Kaj la Eternulo estos Reĝo super la tuta tero; en tiu tempo la Eternulo estos sola, kaj Lia nomo estos sola.',
  },
  '10': {
    verse_nr: 10,
    verse: 'La tuta lando fariĝos ebenaĵo, de Geba ĝis Rimon, sude de Jerusalem;  ĉi tiu altiĝos kaj staros sur sia loko, de la Pordego de Benjamen ĝis la loko de la unua pordego, ĝis la Pordego Angula, kaj de la turo de Ĥananel ĝis la reĝaj vinpremejoj.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Kaj oni loĝos en ĝi, kaj anatemo ne plu ekzistos; kaj Jerusalem estos ekster ĉia danĝero.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Kaj tia estos la plago, per kiu la Eternulo frapos ĉiujn popolojn,  kiuj batalis kontraŭ Jerusalem:ilia karno putros, kiam ili staros ankoraŭ sur siaj piedoj, iliaj okuloj putros en siaj kavoj, kaj ilia lango putros en ilia buŝo.',
  },
  '13': {
    verse_nr: 13,
    verse: 'En tiu tempo estos inter ili granda tumulto, venanta de la Eternulo,  kaj ĉiu kaptos la manon de sia proksimulo, kaj leviĝos lia mano kontraŭ lian proksimulon.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Eĉ Judujo militos kontraŭ Jerusalem, kaj oni kolektos la havaĵon de ĉiuj nacioj ĉirkaŭe, tre multe da oro, arĝento, kaj vestoj.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Tia sama plago estos sur la ĉevaloj, muloj, kameloj, azenoj, kaj sur ĉiuj brutoj, kiuj estos en tiuj tendaroj.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Ĉiuj restintoj el ĉiuj nacioj, kiuj venis kontraŭ Jerusalemon,  venados ĉiujare, por adorkliniĝi antaŭ la Reĝo, la Eternulo Cebaot, kaj por festi la feston de laŭboj.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Se iu el la gentoj de la tero ne iros en Jerusalemon, por adorkliniĝi antaŭ la Reĝo, la Eternulo Cebaot, tiam ili ne havos pluvon super si.',
  },
  '18': {
    verse_nr: 18,
    verse: 'Se la gento Egipta, kiu ne havas pluvon, ne iros kaj ne venos, trafos ilin la plago, per kiu la Eternulo frapos tiujn naciojn, kiuj ne venos, por festi la feston de laŭboj.',
  },
  '19': {
    verse_nr: 19,
    verse: 'Tio estos puno de Egiptujo, kaj puno de ĉiuj nacioj, se ili ne iros,  por festi la feston de laŭboj.',
  },
  '20': {
    verse_nr: 20,
    verse: 'En tiu tempo sur la tintiloj de la ĉevaloj estos skribite:SANKTA AL LA ETERNULO; kaj la kaldronoj en la domo de la Eternulo estos kiel la kalikoj antaŭ la altaro.',
  },
  '21': {
    verse_nr: 21,
    verse: 'Kaj ĉiuj kaldronoj en Jerusalem kaj en Judujo estos sanktaj al la Eternulo Cebaot; kaj ĉiuj oferontoj venos kaj prenos el ili kaj kuiros en ili; kaj ne plu estos komercisto en la domo de la Eternulo Cebaot en tiu tempo.',
  },
};

export const CxapitroDekKvar = {
  key: 'Zeĥarja 14',
  chapterNum: 14,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
