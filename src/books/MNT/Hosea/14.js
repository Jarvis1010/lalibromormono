const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Revenu, ho Izrael, al la Eternulo, via Dio; ĉar vi falis pro viaj malbonagoj.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Prenu kun vi vortojn kaj revenu al la Eternulo; diru al Li:Pardonu ĉiun pekon kaj akceptu bonon; anstataŭ bovoj ni alportos ofere niajn lipojn.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Asirio ne savos nin; ni ne rajdos sur ĉevaloj, ni ne plu nomos nia dio la faritaĵon de niaj manoj; nur ĉe Vi la orfo trovas kompaton.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Mi sanigos ilin de la defalo, Mi volonte ilin amos, ĉar pasis Mia kolero koncerne ilin.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Mi estos por Izrael kiel roso; li ekfloros kiel rozo, li profundigos siajn radikojn kiel Lebanon.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Liaj branĉoj disvastiĝos, li estos bela kiel olivarbo, li bonodoros kiel Lebanon.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Revenos tiuj, kiuj sidis en lia ombro; ili reviviĝos kiel greno, ili floros kiel vinberbranĉo; li estos fama, kiel la vino de Lebanon.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Ho Efraim, per kio interesas Min plue la idoloj? Mi aŭskultos lin kaj gvidos lin; Mi estos kiel verda cipreso; ĉe Mi oni trovos viajn fruktojn.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Kiu estas saĝa, tiu komprenu ĉi tion; kiu estas prudenta, tiu sciu ĉi tion; ĉar ĝustaj estas la vojoj de la Eternulo, virtuloj iras sur ili, kaj malpiuloj falas sur ili.',
  },
};

export const CxapitroDekKvar = {
  key: 'Hoŝea 14',
  chapterNum: 14,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
