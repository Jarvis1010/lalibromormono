const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Vorto de la Eternulo, kiu aperis al Cefanja, filo de Kuŝi, filo de Gedalja, filo de Amarja, filo de Ĥizkija, en la tempo de Joŝija, filo de Amon, reĝo de Judujo.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Mi forprenos ĉion de sur la tero, diras la Eternulo.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Mi forprenos la homojn kaj la brutojn, Mi forprenos la birdojn de la ĉielo kaj la fiŝojn de la maro, la delogilojn kune kun la malpiuloj; Mi ekstermos la homojn de sur la tero, diras la Eternulo.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Mi etendos Mian manon sur Judujon kaj sur ĉiujn loĝantojn de Jerusalem;  Mi ekstermos de ĉi tiu loko la restaĵon de Baal, la nomon de la idolpastroj kaj ankaŭ de la pastroj;',
  },
  '5': {
    verse_nr: 5,
    verse: 'tiujn, kiuj sur la tegmentoj adorkliniĝas antaŭ la armeo de la ĉielo,  kaj tiujn, kiuj, adorkliniĝante, ĵuras per la Eternulo kaj ĵuras ankaŭ per Malkam;',
  },
  '6': {
    verse_nr: 6,
    verse: 'kaj tiujn, kiuj defalis de la Eternulo, kiuj ne serĉis la Eternulon kaj ne turnis sin al Li.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Silentu antaŭ la Sinjoro, la Eternulo, ĉar proksima estas la tago de la Eternulo; ĉar la Eternulo pretigis buĉoferon kaj destinis la invitotojn.',
  },
  '8': {
    verse_nr: 8,
    verse: 'En la tago de la buĉofero de la Eternulo Mi punos la altrangulojn kaj la reĝidojn, kaj ĉiujn, kiuj vestas sin per vestoj de aligentuloj;',
  },
  '9': {
    verse_nr: 9,
    verse: 'Mi punos en tiu tago ĉiujn, kiuj transsaltas la sojlon kaj plenigas la domon de sia sinjoro per perforteco kaj trompoj.',
  },
  '10': {
    verse_nr: 10,
    verse: 'En tiu tago, diras la Eternulo, estos laŭta kriado ĉe la Pordego de Fiŝoj, ĝemegado ĉe la dua kvartalo de la urbo, kaj granda plorkriado sur la montetoj.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Ĝemegu, loĝantoj de la malalta parto de la urbo; ĉar malaperos la tuta popolo de la butikistoj, kaj ekstermitaj estos ĉiuj ŝarĝitaj per arĝento.',
  },
  '12': {
    verse_nr: 12,
    verse: 'En tiu tempo Mi traesploros Jerusalemon kun lumiloj, kaj Mi punos tiujn,  kiuj ripozas sur sia feĉo, kaj diras en sia koro:La Eternulo ne faras bonon,  nek malbonon.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Ilia havaĵo fariĝos rabaĵo, kaj iliaj domoj fariĝos ruinoj; ili konstruos domojn, sed ne loĝos en ili, ili plantos vinberĝardenojn, sed ne trinkos ilian vinon.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Proksima estas la granda tago de la Eternulo, ĝi estas proksima kaj venos tre baldaŭ; oni aŭdas jam la tagon de la Eternulo; maldolĉe tiam plorkrios eĉ kuraĝulo.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Tago de kolero estos tiu tago, tago de malĝojo kaj de angoro, tago de teruro kaj de dezertigo, tago de mallumo kaj de senlumeco, tago de nuboj kaj de nebulego,',
  },
  '16': {
    verse_nr: 16,
    verse: 'tago de korno kaj de trumpetado kontraŭ la fortikigitaj urboj kaj kontraŭ la altaj turoj.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Mi premos la homojn, kaj ili irados kiel blinduloj pro tio, ke ili pekis antaŭ la Eternulo; ilia sango estos disŝprucigita kiel polvo, kaj ilia karno kiel sterko.',
  },
  '18': {
    verse_nr: 18,
    verse: 'Nek ilia arĝento nek ilia oro povos ilin savi en la tago de la kolero de la Eternulo, sed per la fajro de Lia indigno estos forbruligita la tuta lando; ĉar rapidan ekstermon Li faros al ĉiuj loĝantoj de la lando.',
  },
};

export const CxapitroUnu = {
  key: 'Cefanja 1',
  title: 'Cefanja',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
