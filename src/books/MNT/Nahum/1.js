const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Profetaĵo pri Nineve, libro de vizio de Naĥum, la Elkoŝano.',
  },
  '2': {
    verse_nr: 2,
    verse: 'La Eternulo estas Dio severa kaj venĝanta; la Eternulo estas venĝanto kaj koleranto; la Eternulo venĝas al Siaj malamikoj kaj ne forgesas pri Siaj kontraŭuloj.',
  },
  '3': {
    verse_nr: 3,
    verse: 'La Eternulo estas longepacienca, kaj potenca per Sia forto, kaj neniu estas senkulpa antaŭ Li; la vojo de la Eternulo estas en fulmotondro kaj ventego, kaj nubo estas la polvo sub Liaj piedoj.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Kiam Li ekparolas kolere al la maro, Li elsekigas ĝin, kaj ĉiujn riverojn Li senakvigas; malgajiĝas Baŝan kaj Karmel, kaj velkas ĉio, kio floras sur Lebanon.',
  },
  '5': {
    verse_nr: 5,
    verse: 'La montoj tremas antaŭ Li, la montetoj disfandiĝas; skuiĝas antaŭ Li la tero, la mondo kaj ĉiuj ĝiaj loĝantoj.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Kiu povas kontraŭstari al Lia indigno? kaj kiu povas elteni la flamon de Lia kolero? Lia indigno disverŝiĝas kiel fajro; la rokoj disfalas antaŭ Li.',
  },
  '7': {
    verse_nr: 7,
    verse: 'La Eternulo estas bona, forta apogo en tago de malfeliĉo; kaj Li konas tiujn, kiuj fidas Lin.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Dronigante per inundo, Li faras finon al loko, kaj Liajn malamikojn persekutas mallumo.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Kion vi pensas pri la Eternulo? Li faros la ekstermon, la malfeliĉo ne bezonas veni duafoje.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Ĉar, interplektiĝinte kiel dornoj kaj ebriaj de drinkado, ili estos ekstermitaj, kiel tute seka pajlo.',
  },
  '11': {
    verse_nr: 11,
    verse: 'El vi eliris tiu, kiu havis malbonan intencon kontraŭ la Eternulo kaj kiu estas malica konsilanto.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Tiele diras la Eternulo:Kvankam ili estas unuanimaj kaj multaj, ili tamen estos dishakitaj kaj malaperos; sed vin, kiun Mi humiligis, Mi ne plu humiligos.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Nun Mi rompos lian jugon, kiu estas sur vi, kaj Mi disŝiros viajn ligilojn.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Sed pri vi la Eternulo decidis:Ne plu restos semo portanta vian nomon;  el la domo de viaj dioj Mi ekstermos la idolojn kaj statuojn; Mi signos sur via tombo, ke vi fariĝis senvalora.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Jen sur la montoj estas la piedoj de sciiganto, kiu proklamas pacon!  Festu, ho Judujo, viajn festojn, plenumu viajn sanktajn promesojn; ĉar ne plu iros tra vi la sentaŭgulo; li estas tute ekstermita.',
  },
};

export const CxapitroUnu = {
  key: 'Naĥum 1',
  title: 'Naĥum',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
