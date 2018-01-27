const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Aŭskultu tion, ho pastroj, atentu, ho domo de Izrael, kaj prenu en viajn orelojn, ho reĝa domo; ĉar vin trafos juĝo pro tio, ke vi estis kaptilo en Micpa kaj etendita reto sur Tabor.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Per premado ili profundigis la pekojn; Mi punos ĉiujn.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Mi konas Efraimon, kaj Izrael ne estas kaŝita antaŭ Mi:vi nun malĉastas, ho Efraim, kaj Izrael malpuriĝis.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Iliaj agoj ne permesas al ili reveni al ilia Dio, ĉar spirito de malĉasteco estas en ili kaj la Eternulon ili ne konas.',
  },
  '5': {
    verse_nr: 5,
    verse: 'La malmodesteco de Izrael parolas kontraŭ li antaŭ lia vizaĝo; tial Izrael kaj Efraim falos pro siaj malbonagoj; ankaŭ Jehuda falos kun ili.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Kun siaj ŝafoj kaj bovoj ili iros serĉi la Eternulon, sed ne trovos; Li foriĝis de ili.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Ili perfidis al la Eternulo, kaj naskis fremdajn infanojn; tial ekstermos ilin la monato kune kun ilia havaĵo.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Blovu per korno en Gibea, per trumpeto en Rama; bruu en Bet-Aven, post vi, ho Benjamen!',
  },
  '9': {
    verse_nr: 9,
    verse: 'Efraim fariĝos dezerto en la tago de la puno; inter la triboj de Izrael Mi avertis fidele.',
  },
  '10': {
    verse_nr: 10,
    verse: 'La princoj de Jehuda fariĝis similaj al forŝovantoj de limo; Mi elverŝos sur ilin Mian koleron kiel akvon.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Efraim estas premata, frapita de la juĝo; ĉar li memvole sekvis homan ordonon.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Mi estos por Efraim kiel tineo, kiel putro por la domo de Jehuda.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Efraim vidis sian malsanon, kaj Jehuda sian vundon; tiam Efraim iris al Asirio, kaj sendis al reĝo, kiu venĝus pro li; sed li ne povas sanigi vin,  ne forigos de vi la vundon.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Ĉar Mi estas kiel leono por Efraim, kiel leonido por la domo de Jehuda;  Mi, Mi disŝiros kaj foriros; Mi forportos, kaj neniu povos savi.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Mi iros returne sur Mian lokon, ĝis ili konfesos sian kulpon kaj serĉos Mian vizaĝon; kiam ili suferos, ili Min serĉos, kaj diros:',
  },
};

export const CxapitroKvin = {
  key: 'Hoŝea 5',
  chapterNum: 5,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
