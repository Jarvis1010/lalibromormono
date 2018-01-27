const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Ni iru, ni revenu al la Eternulo; ĉar Li disŝiris, sed Li ankaŭ resanigos nin, Li frapis, kaj Li ankaŭ bandaĝos niajn vundojn.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Li revivigos nin post du tagoj; en la tria tago Li restarigos nin, kaj ni vivos antaŭ Li.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Kaj ni havos scion, kaj ni penos koni la Eternulon. Li eliros, kiel bela matenruĝo; Li venos al ni, kiel pluvo, kiel printempa pluvo, kiu malsekigas la teron.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Kion Mi faru al vi, ho Efraim? Kion Mi faru al vi, ho Jehuda? Via pieco estas kiel matena nebulo, kaj kiel roso, kiu frue malaperas.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Tial Mi hakas per la profetoj, Mi mortigas ilin per la vortoj el Mia buŝo; kaj justeco koncerne vin eliros kiel lumo.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Ĉar Mi deziras bonfaradon, sed ne oferon, kaj konadon de Dio Mi preferas ol bruloferojn.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Sed ili rompis la interligon, kiel Adam, kaj ili defalis de Mi.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Gilead estas urbo de malbonaguloj, makulita de sango.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Kiel bando da embuskantoj la anaro de la pastroj pereigas tiujn, kiuj iras al Ŝeĥem; abomenindaĵon ili faras.',
  },
  '10': {
    verse_nr: 10,
    verse: 'En la domo de Izrael Mi vidas teruraĵon:tie malĉastas Efraim,  malpuriĝas Izrael.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Sed ankaŭ Jehuda havos rikolton, kiam Mi revenigos la forkaptitojn de Mia popolo.',
  },
};

export const CxapitroSes = {
  key: 'Hoŝea 6',
  chapterNum: 6,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
