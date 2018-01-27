const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Ve al la urbo sangavida, kiu estas plena de trompoj kaj raboj, kaj ne volas ĉesigi la rabadon!',
  },
  '2': {
    verse_nr: 2,
    verse: 'Oni aŭdas la sonadon de vipoj, la sonadon de bruantaj radoj; blekas ĉevalo, saltas ĉaro;',
  },
  '3': {
    verse_nr: 3,
    verse: 'moviĝas rajdantoj, brilas glavoj, fulmas lancoj; estas multe da mortigitoj kaj amasoj da kadavroj; sennombraj estas la kadavroj, oni falpuŝiĝas sur ili.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Tio estas pro la granda malĉastado de la malĉastistino, kiu ĉarmas per sia beleco, estas lerta sorĉistino, kaj vendas naciojn per sia malĉastado kaj gentojn per sia sorĉado.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Jen Mi iras kontraŭ vin, diras la Eternulo Cebaot, kaj Mi levos ĝis via vizaĝo la randojn de via vesto, kaj Mi montros al la nacioj vian nudecon kaj al la regnoj vian malhonoron.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Mi ĵetos sur vin abomenindaĵojn, Mi malhonoros vin kaj faros vin mokataĵo.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Ĉiu, kiu vidos vin, forkuros de vi, kaj diros:Ruinigita estas Nineve;  kiu bedaŭros ĝin? kie mi povas serĉi por vi konsolantojn?',
  },
  '8': {
    verse_nr: 8,
    verse: 'Ĉu vi estas pli bona ol No-Amon, kiu troviĝas inter riveroj, estas ĉirkaŭata de akvo, kaj kies forto kaj murego estis la maro?',
  },
  '9': {
    verse_nr: 9,
    verse: 'Etiopujo kaj la senfina Egiptujo estis ĝia forto, la Putidoj kaj Luboj donadis al vi helpon;',
  },
  '10': {
    verse_nr: 10,
    verse: 'tamen ĝi ankaŭ estas elpatrujigita kaj forkaptita; eĉ ĝiaj malgrandaj infanoj estas frakasitaj en la komenco de ĉiuj stratoj; pri ĝiaj eminentuloj oni lotis, kaj ĉiujn ĝiajn altrangulojn oni katenis.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Tiel ankaŭ vi ebriiĝos kaj kaŝos vin kaj serĉos defendon kontraŭ la malamikoj.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Ĉiuj viaj fortikaĵoj estas kiel figarboj kun maturaj fruktoj; se oni ekskuas ilin, ili falas en la buŝon de manĝonto.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Jen via popolo estas ĉe vi kiel virinoj; al viaj malamikoj larĝe malfermiĝos la pordegoj de via lando; fajro ekstermos viajn riglilojn.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Provizu al vi akvon por la tempo de sieĝo; fortigu viajn fortikaĵojn;  iru en kalkon, knedu argilon, faru fortajn brikojn.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Tamen tie la fajro vin konsumos, glavo vin ekstermos, formanĝos vin kiel skarabo, se vi eĉ estus grandnombra kiel skaraboj, grandnombra kiel akridoj.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Vi havas pli da komercistoj, ol la steloj de la ĉielo; sed ili diskuros kiel akridoj kaj forflugos.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Viaj taĉmentoj estas kiel akridoj, kaj viaj taĉmentestroj estas kiel lokustoj, kiuj dum la malvarmo kaŝas sin en fendoj, kaj kiam la suno ekbrilas, ili disflugas tiel, ke oni ne scias, kie ili estas.',
  },
  '18': {
    verse_nr: 18,
    verse: 'Dormas viaj paŝtistoj, ho reĝo de Asirio, kuŝas viaj fortuloj; via popolo estas disĵetita sur la montoj, kaj troviĝas neniu, kiu ĝin kolektus.',
  },
  '19': {
    verse_nr: 19,
    verse: 'Ne resaniĝas via vundo, doloriga estas via ulcero; ĉiu, kiu aŭdas la sciigon pri vi, aplaŭdas pri vi; ĉar kiun ne trafis senĉese via malboneco?',
  },
};

export const CxapitroTri = {
  key: 'Naĥum 3',
  chapterNum: 3,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
