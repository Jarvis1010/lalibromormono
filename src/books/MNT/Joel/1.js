const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Vorto de la Eternulo, kiu aperis al Joel, filo de Petuel.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Aŭskultu ĉi tion, ho maljunuloj, kaj atentu, ho ĉiuj loĝantoj de la lando! Ĉu estis ĉi tio en via tempo, aŭ en la tempo de viaj patroj?',
  },
  '3': {
    verse_nr: 3,
    verse: 'Rakontu pri tio al viaj infanoj, kaj viaj infanoj al siaj infanoj, kaj iliaj infanoj al la sekvanta generacio.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Kio restis de la raŭpoj, tion manĝis la akridoj; kio restis de la akridoj, tion manĝis la skaraboj; kaj kio restis de la skaraboj, tion manĝis la vermoj.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Vekiĝu, ho ebriuloj, kaj ploru, ĝemu vi, ĉiuj drinkantoj, pri la suko vinbera, kiu estas prenita for de via buŝo.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Ĉar venis sur mian landon nacio forta kaj nekalkulebla; ĝiaj dentoj estas dentoj de leono, kaj makzelojn de leonino ĝi havas.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Ĝi dezertigis mian vinberujon, ĉirkaŭŝiris mian figarbon, tute senŝeligis ĝin kaj forĵetis; blankiĝis ĝiaj branĉoj.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Ĝemu, kiel junulino, kiu metis sur sin sakaĵon pro sia fianĉo.',
  },
  '9': {
    verse_nr: 9,
    verse: 'For estas la farunoferoj kaj verŝoferoj el la domo de la Eternulo;  funebras la pastroj, servistoj de la Eternulo.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Dezertigita estas la kampo, funebras la tero; ĉar ekstermita estas la greno, elsekiĝis la mosto, velkis la olivoj.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Konsternitaj estas la plugistoj, plorĝemas la vinberkultivistoj, pro la tritiko kaj hordeo, pro la pereo de la rikolto sur la kampo.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Elsekiĝis la vinberbranĉo, velkis la figarbo; la granatarbo, la palmo,  kaj la pomarbo, ĉiuj arboj de la kampo elsekiĝis; malaperis gajeco ĉe la homoj.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Zonu vin kaj ploru, ho pastroj; ĝemegu, ho servistoj de la altaro; iru kaj kuŝu en sakaĵoj, ho servistoj de mia Dio; ĉar malaperis el la domo de via Dio la farunoferoj kaj verŝoferoj.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Sanktigu faston, proklamu solenan kunvenon, kunvoku la maljunulojn kaj ĉiujn loĝantojn de la lando en la domon de la Eternulo, via Dio, kaj kriu al la Eternulo:',
  },
  '15': {
    verse_nr: 15,
    verse: 'Ho ve, kia tago! Ĉar proksima estas la tago de la Eternulo; kiel katastrofo ĝi venos de la Plejpotenculo.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Antaŭ niaj okuloj ja malaperis la manĝaĵo, el la domo de nia Dio la ĝojo kaj gajeco.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Forputris la grajnoj sub siaj terbuloj, malpleniĝis la grenejoj,  detruitaj estas la garbejoj, ĉar la greno difektiĝis.',
  },
  '18': {
    verse_nr: 18,
    verse: 'Ho, kiel ĝemas la brutoj, kiel suferas la bovaroj! ĉar ili ne havas paŝtaĵon; ankaŭ la ŝafaroj turmentiĝas.',
  },
  '19': {
    verse_nr: 19,
    verse: 'Al Vi, ho Eternulo, mi vokas; ĉar fajro ekstermis la herbejojn de la stepo, kaj flamo bruldifektis ĉiujn arbojn de la kampo.',
  },
  '20': {
    verse_nr: 20,
    verse: 'Eĉ la bestoj de la kampo sopiras al Vi; ĉar elsekiĝis la torentoj da akvo, kaj fajro ekstermis la herbejojn de la stepo.',
  },
};

export const CxapitroUnu = {
  key: 'Joel 1',
  title: 'Joel',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
