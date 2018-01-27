const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Tion, kio estis de la komenco, kion ni aŭdis, kion ni vidis per niaj propraj okuloj, kion ni rigardis kaj niaj manoj palpis, koncerne la Vorton de vivo',
  },
  '2': {
    verse_nr: 2,
    verse: '(kaj la vivo elmontriĝis, kaj ni vidis kaj atestas kaj anoncas al vi la vivon, la eternan vivon, kiu estis ĉe la Patro kaj montriĝis al ni);',
  },
  '3': {
    verse_nr: 3,
    verse: 'kion ni vidis kaj aŭdis, tion ni anoncas al vi, por ke vi ankaŭ havu kunulecon kun ni; kaj nia kunuleco estas kun la Patro kaj kun Lia Filo Jesuo Kristo;',
  },
  '4': {
    verse_nr: 4,
    verse: 'kaj ĉi tion ni skribas, por ke nia ĝojo kompletiĝu.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Kaj jen estas la anonco, kiun ni aŭdis de Li kaj anoncas al vi, ke Dio estas lumo, kaj da mallumo estas en Li neniom.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Se ni diras, ke ni havas kunulecon kun Li, kaj iradas en la mallumo, ni mensogas, kaj ne faras la veron;',
  },
  '7': {
    verse_nr: 7,
    verse: 'sed se ni iradas en la lumo, kiel Li estas en la lumo, ni havas kunulecon unu kun la alia, kaj la sango de Jesuo, Lia Filo, nin purigas de ĉia peko.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Se ni diras, ke pekon ni ne havas, ni nin trompas, kaj la vero ne estas en ni.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Se ni konfesas niajn pekojn, Li estas fidela kaj justa por pardoni al ni niajn pekojn kaj nin purigi de ĉia maljusteco.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Se ni diras, ke ni ne pekis, ni faras Lin mensoginto, kaj Lia vorto ne estas en ni.',
  },
};

export const CxapitroUnu = {
  key: '1 Johano 1',
  pretitle: 'La Unua Epistolo Ĝenerala de',
  title: 'Johano',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
