const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Izrael estas vasta vinberujo, portas siajn fruktojn; sed ju pli multiĝis liaj fruktoj, des pli li multigis siajn altarojn; ju pli bona estis lia lando, des pli belajn statuojn li starigis.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Ilia koro estas dividita, tial nun ili estas kondamnitaj; Li rompos iliajn altarojn, frakasos iliajn statuojn.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Nun ili diras:Ni ne havas reĝon; ĉar ni ne timas la Eternulon, kion do povas fari por ni reĝo?',
  },
  '4': {
    verse_nr: 4,
    verse: 'Ili parolas vanajn vortojn, ĵuras mensoge, kiam ili faras interligon;  tial juĝo super ili aperos, kiel venena herbo sur la sulkoj de la kampo.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Pri la bovidoj de Bet-Aven ektremos la loĝantoj de Samario; ĉar ĝia popolo ekploros pri ĝi, kaj la pastraĉoj, kiuj ĝojis pri ĝi, ploros pri ĝia gloro, kiu foriĝis de ĝi.',
  },
  '6': {
    verse_nr: 6,
    verse: 'La bovido mem estas forportita en Asirion, kiel donaco al la reĝo-  venĝonto; malhonoron ricevos Efraim, kaj Izrael hontos pro sia entrepreno.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Malaperos Samario kun sia reĝo, kiel ŝaŭmo sur la supraĵo de akvo.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Detruitaj estos la altaĵoj de Aven, la peko de Izrael; kardo kaj dornoj kreskos sur iliaj altaroj; ili diros al la montoj:Kovru nin; kaj al la montetoj:Falu sur nin.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Pli ol en la tempo de Gibea vi pekis, ho Izrael; tiam oni leviĝis, sed nun milito en Gibea ne atingas la malbonagulojn.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Konforme al Mia intenco Mi punos ilin, kaj kolektiĝos kontraŭ ili popoloj, kiam ili estos punataj pro siaj du krimoj.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Efraim estas kiel bovido dresita, amanta draŝi. Mi metos jugon sur lian belan kolon, Mi rajdos sur Efraim, Jehuda plugos, Jakob erpos.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Semu al vi justecon, tiam vi rikoltos amon; plugu al vi plugotaĵon;  estas tempo, por turni sin al la Eternulo, ĝis Li venos kaj verŝos sur vin justecon.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Vi plugas malpiaĵon, vi rikoltas malbonagojn, vi manĝas frukton de mensogo; ĉar vi fidas vian vojon, la multon de viaj herooj.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Sed fariĝos tumulto en via popolo, kaj ĉiuj viaj fortikaĵoj estos detruitaj, kiel Ŝalman detruis Bet-Arbelon dum la milito; mortigita estos la patrino kune kun siaj infanoj.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Tion faros al vi Bet-El pro via granda malpieco. Frue pereos, pereos la reĝo de Izrael.',
  },
};

export const CxapitroDek = {
  key: 'Hoŝea 10',
  chapterNum: 10,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
