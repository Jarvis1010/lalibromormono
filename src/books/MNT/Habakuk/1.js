const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Profetaĵo, kiun laŭvizie eldiris la profeto Ĥabakuk.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Ĝis kiam, ho Eternulo, mi krios, kaj Vi ne aŭskultos, mi krios al Vi pri perfortaĵo, kaj Vi ne helpos?',
  },
  '3': {
    verse_nr: 3,
    verse: 'Kial Vi devigas min vidi maljustaĵon, rigardi mizeraĵon? Rabado kaj perfortado estas antaŭ mi, leviĝas disputoj kaj malpaco.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Tial la instruo perdis sian forton, la justeco neniam venkas; ĉar la malvirtulo superfortas la virtulon, tial la rezultoj de juĝo estas malĝustaj.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Rigardu la naciojn, rigardu, kaj vi forte miros; ĉar en via tempo Mi faros ion, kion vi ne kredus, se oni rakontus al vi.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Ĉar jen Mi levos la Ĥaldeojn, nacion kruelan kaj lertan, kiu trairos la tutan larĝon de la tero, por ekposedi loĝejojn, kiuj ne apartenas al ĝi.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Terura kaj timinda ĝi estas; ĝia juĝado kaj regado dependas de ĝi mem.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Pli rapidaj ol leopardoj estas ĝiaj ĉevaloj, kaj pli lertaj ol lupoj vespere; en grandaj amasoj venas ĝiaj rajdantoj de malproksime, flugas kiel aglo, kiu rapidas al manĝaĵo.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Ĉiuj ili venas por rabi; kiel vento orienta ili direktas sin, kien ili volas; kaj ili kolektas kaptitojn kiel sablon.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Reĝojn ili mokas, regantoj estas ridataĵo por ili; ĉiun fortikaĵon ili mokas; ili ŝutas teron, kaj venkoprenas.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Tiam ŝanĝiĝas ilia spirito, transiras kaj fariĝas peka, kaj ilia forto fariĝas ilia dio.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Sed Vi estas ja de ĉiam, ho Eternulo, mia sankta Dio! ne lasu nin morti. Vi, ho Eternulo, aperigis ilin por juĝo; Vi, ho nia Roko, destinis ilin por puni.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Viaj okuloj estas tro puraj, por vidi malbonon, kaj rigardi maljustaĵon Vi ne povas; kiel do Vi rigardas malhonestulojn, kaj silentas, kiam malpiulo englutas tiun, kiu estas pli virta ol li?',
  },
  '14': {
    verse_nr: 14,
    verse: 'Kial Vi faras la homojn kiel fiŝoj en la maro, kiel rampaĵoj, kiuj ne havas reganton?',
  },
  '15': {
    verse_nr: 15,
    verse: 'Ĉiujn ili tiras per fiŝhoko, kaptas per sia reto, amasigas per sia fiŝreto; kaj tial ili ĝojas kaj triumfas.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Tial ili alportas oferojn al sia reto, incensas al sia fiŝreto; ĉar per ĉi tiuj grasiĝis ilia parto kaj boniĝis ilia manĝaĵo.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Ĉu por tio ili devas ĵetadi sian reton kaj senĉese mortigadi naciojn senindulge?',
  },
};

export const CxapitroUnu = {
  key: 'Ĥabakuk 1',
  title: 'Ĥabakuk',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
