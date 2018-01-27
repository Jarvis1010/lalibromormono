const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Efraim paŝtas venton, postkuras la orientan venton; kun ĉiu tago li faras pli da mensogaĵoj kaj da idolaĵoj; li faras interligon kun Asirio,  kaj portas oleon en Egiptujon.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Sed ankaŭ kun Jehuda la Eternulo havas juĝon, kaj Li punos Jakobon laŭ lia konduto, laŭ liaj agoj Li repagos al li.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Ankoraŭ en la ventro li retenis sian fraton, kaj viriĝinte li luktis kun Dio.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Li luktis kun anĝelo kaj venkis, li tamen petegis lin kun ploro; en Bet-El Li nin trovos, kaj tie Li parolos kun ni.',
  },
  '5': {
    verse_nr: 5,
    verse: 'La Eternulo estas Dio Cebaot, Eternulo estas Lia nomo.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Returnu do vin al via Dio, konservu favorkorecon kaj justecon, kaj fidu ĉiam vian Dion.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Kanaanido havas en sia mano falsan pesilon, li amas trompi;',
  },
  '8': {
    verse_nr: 8,
    verse: 'kaj Efraim diras:Mi riĉiĝis, mi akiris al mi havaĵon, sed en ĉiuj miaj laboroj oni ne trovos ĉe mi malbonagon, per kiu mi estus pekinta.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Mi, la Eternulo, estas via Dio de post la lando Egipta; Mi ankoraŭ denove loĝigos vin en tendoj, kiel en la tagoj de festo.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Mi parolis per la profetoj, Mi donis multe da vizioj, kaj per la profetoj Mi parolis alegorie.',
  },
  '11': {
    verse_nr: 11,
    verse: 'En Gilead estis idoloj, sed ili fariĝis senvaloraĵo; en Gilgal oni oferbuĉis bovojn, sed iliaj altaroj fariĝis kiel ŝtonamasoj sur la sulko de la kampo.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Jakob forkuris sur la kampojn de Sirio, Izrael servis por edzino, kaj por edzino li devis gardi.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Kaj per profeto la Eternulo elkondukis Izraelon el Egiptujo, kaj per profeto Li gardis lin.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Forte kolerigis Lin Efraim, tial lia sango venos sur lin, kaj lia Sinjoro redonos al li pro liaj hontindaĵoj.',
  },
};

export const CxapitroDekDu = {
  key: 'Hoŝea 12',
  chapterNum: 12,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
