const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'En la deka jaro, en la deka monato, en la dek-dua tago de la monato,  aperis al mi vorto de la Eternulo, dirante:',
  },
  '2': {
    verse_nr: 2,
    verse: 'Ho filo de homo, turnu vian vizaĝon al Faraono, reĝo de Egiptujo, kaj profetu pri li kaj pri la tuta Egiptujo.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Parolu, kaj diru:Tiele diras la Sinjoro, la Eternulo:Jen Mi iras kontraŭ vin, ho Faraono, reĝo de Egiptujo, granda drako, kiu kuŝas meze de siaj riveroj, kaj diras:La rivero estas mia, kaj mi faris ĝin por mi.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Mi metos hokojn en vian buŝon, Mi alkroĉos la fiŝojn de viaj riveroj al via skvamaro, kaj Mi eltiros vin el viaj riveroj kune kun ĉiuj fiŝoj de viaj riveroj, kiuj estas alkroĉitaj al via skvamaro.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Mi ĵetos vin en la dezerton, vin kaj ĉiujn fiŝojn de viaj riveroj;  sur la kampon vi falos, oni vin ne levos kaj ne enkolektos; al la bestoj de la tero kaj al la birdoj de la ĉielo Mi transdonos vin kiel manĝaĵon.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Kaj ekscios ĉiuj loĝantoj de Egiptujo, ke Mi estas la Eternulo; pro tio, ke ili estis kana apogo por la domo de Izrael:',
  },
  '7': {
    verse_nr: 7,
    verse: 'kiam ili kaptis vin per la mano, vi fendiĝis kaj trapikis al ili la tutan flankon; kaj kiam ili apogis sin sur vi, vi rompiĝis kaj traboris al ili la tutajn lumbojn.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Tial tiele diras la Sinjoro, la Eternulo:Jen Mi venigos sur vin glavon kaj ekstermos ĉe vi la homojn kaj la brutojn.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Kaj la lando Egipta fariĝos dezerto kaj ruinoj; kaj oni ekscios, ke Mi estas la Eternulo; pro tio, ke li diris:La rivero estas mia, kaj mi ĝin faris.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Tial jen Mi iras kontraŭ vin kaj kontraŭ viajn riverojn, kaj Mi faros el la lando Egipta ruinojn, absolutajn ruinojn, de Migdol ĝis Sevene, ĝis la limo de Etiopujo.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Ne trairos ĝin piedo de homo, nek piedo de bruto trairos ĝin, kaj ĝi ne estos loĝata dum kvardek jaroj.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Kaj Mi faros la landon Egiptan dezerto inter la aliaj dezertaj landoj,  kaj ĝiaj urboj inter la aliaj ruinigitaj urboj estos dezertaj dum kvardek jaroj; kaj Mi disĵetos la Egiptojn inter la popolojn kaj dispelos ilin en diversajn landojn.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Ĉar tiele diras la Sinjoro, la Eternulo:Post paso de kvardek jaroj Mi kolektos la Egiptojn el inter la popoloj, kien ili estis disĵetitaj;',
  },
  '14': {
    verse_nr: 14,
    verse: 'kaj Mi revenigos la forkaptitajn Egiptojn, kaj revenigos ilin en la landon Patros, en la landon de ilia deveno, kaj ili tie estos humila regno.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Ĝi estos humila inter la aliaj regnoj, kaj ĝi ne plu sin tenos alte super la nacioj; Mi faros ĝin malgranda, por ke ĝi ne regu super la nacioj.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Kaj ĝi ne plu estos por la domo de Izrael fidataĵo, rememoriganta iliajn malbonagojn, kiam ili sin turnadis al ĝi; kaj oni ekscios, ke Mi estas la Sinjoro, la Eternulo.',
  },
  '17': {
    verse_nr: 17,
    verse: 'En la dudek-sepa jaro, en la unua monato, en la unua tago de la monato,  aperis al mi vorto de la Eternulo, dirante:',
  },
  '18': {
    verse_nr: 18,
    verse: 'Ho filo de homo! Nebukadnecar, reĝo de Babel, ŝarĝis sian militistaron per granda laboro kontraŭ Tiro, tiel, ke ĉiuj kapoj senhariĝis kaj ĉiuj ŝultroj defrotiĝis; kaj tamen nek li nek lia militistaro ricevis rekompencon antaŭ Tiro pro la laboro, kiun li faris antaŭ ĝi.',
  },
  '19': {
    verse_nr: 19,
    verse: 'Tial tiele diras la Sinjoro, la Eternulo:Jen Mi donos al Nebukadnecar,  reĝo de Babel, la landon Egiptan, por ke li forportu ĝiajn riĉaĵojn kaj faru en ĝi rabadon kaj diskapton; kaj tio estos rekompenco por lia militistaro.',
  },
  '20': {
    verse_nr: 20,
    verse: 'Rekompence pro la laboro, kiun li faris, Mi donis al li la landon Egiptan; ĉar ili laboris por Mi, diras la Sinjoro, la Eternulo.',
  },
  '21': {
    verse_nr: 21,
    verse: 'En tiu tempo Mi elkreskigos kornon al la domo de Izrael, kaj al vi Mi donos liberecon de parolado inter ili; kaj ili ekscios, ke Mi estas la Eternulo.',
  },
};

export const CxapitroDuDekNau = {
  key: 'Jeĥezkel 29',
  chapterNum: 29,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
