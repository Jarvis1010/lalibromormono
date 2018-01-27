const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Petu de la Eternulo pluvon printempan; la Eternulo faros fulmojn, kaj donos abundan pluvon por ĉiuj kreskaĵoj sur la kampo.',
  },
  '2': {
    verse_nr: 2,
    verse: 'La domaj dioj parolas sensencaĵon, la antaŭdiristoj havas malverajn viziojn, rakontas mensogajn sonĝojn, kaj konsolas per vantaĵo; tial ili diskuras kiel ŝafoj, suferas pro tio, ke ili ne havas paŝtiston.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Kontraŭ la paŝtistoj ekflamis Mia kolero, kaj la antaŭirantajn virkaprojn Mi punos; sed la Eternulo Cebaot vizitos Sian ŝafaron, la domon de Jehuda, kaj faros ĝin kiel ornamita ĉevalo en batalo.',
  },
  '4': {
    verse_nr: 4,
    verse: 'El ĝi eliros la angula ŝtono, el ĝi la ĉefa stango, el ĝi la batala pafarko, el ĝi eliros ĉiuj regantoj.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Ili estos kiel forteguloj, kiuj piedpremas en batalo kvazaŭ koton sur la strato; kaj ili batalos, ĉar la Eternulo estos kun ili, kaj ili hontigos tiujn, kiuj sidas sur ĉevaloj.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Mi fortigos la domon de Jehuda, Mi savos la domon de Jozef, kaj Mi enloĝigos ilin, ĉar Mi kompatas ilin. Kaj ili estos en tia stato, kvazaŭ Mi neniam ilin forlasis; ĉar Mi, la Eternulo, estas ilia Dio, kaj Mi aŭskultos ilin.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Efraim estos kiel fortegulo; kaj ilia koro estos gaja, kiel de vino;  iliaj filoj vidos kaj ĝojos; ilia koro triumfos per la Eternulo.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Mi fajfos al ili kaj kunvenigos ilin, ĉar Mi elaĉetis ilin; kaj ili multiĝos, kiel ili multiĝis antaŭe.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Mi semos ilin inter la popoloj, kaj en malproksimaj landoj ili memoros Min, kaj ili vivos kun siaj infanoj kaj revenos.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Mi revenigos ilin el la lando Egipta, Mi kolektos ilin el Asirio, Mi revenigos ilin en la landon Gileadan kaj sur Lebanonon, kaj ne troviĝos sufiĉe da loko por ili.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Malfeliĉo trairos la maron, batos la ondojn de la maro, kaj sekiĝos ĉiuj profundaj lokoj de Nilo; malaltiĝos la fiereco de Asirio, kaj malaperos la sceptro de Egiptujo.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Mi faros ilin forteguloj per la Eternulo, kaj en Lia nomo ili irados,  diras la Eternulo.',
  },
};

export const CxapitroDek = {
  key: 'Zeĥarja 10',
  chapterNum: 10,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
