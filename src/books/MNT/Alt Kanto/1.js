const chapter = {
  '1': { verse_nr: 1, verse: 'Alta kanto de Salomono.' },
  '2': {
    verse_nr: 2,
    verse: 'Ho, li kisu min per kisoj de sia buŝo!   Ĉar via amo estas pli bona, ol vino.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Ho, kiel bonodoras viaj aromaĵoj!   Via nomo similas al elverŝita oleo;   Tial la fraŭlinoj amas vin.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Altiru min; ni postkuros vin.   La reĝo envenigu min en siajn ĉambrojn;   Ho, ni ĝojos kaj gajiĝos kun vi;   Ni memoros vian amon pli, ol vinon;   Sincere oni amas vin.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Mi estas nigra, tamen beleta,   Ho filinoj de Jerusalem,   Kiel la tendoj de Kedar,   Kiel la tapetoj de Salomono.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Ne rigardu min, ke mi estas nigreta:   La suno min brulkolorigis.   La filoj de mia patrino koleris kontraŭ mi;   Ili faris min gardistino de la vinberĝardenoj;   Mian propran vinberĝardenon mi ne gardis.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Diru al mi, ho vi, kiun mia animo amas,   Kie vi paŝtas, kie vi ripozigas vian brutaron tagmeze:   Kial mi similu al vagistino  Ĉe la brutaroj de viaj kamaradoj?',
  },
  '8': {
    verse_nr: 8,
    verse: 'Se vi ne scias tion, ho belulino inter virinoj,   Sekvu la paŝojn de la ŝafaro,   Kaj paŝtu viajn kapridojn ĉe la tendoj de la paŝtistoj.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Al la ĉevalino en la ĉaroj de Faraono  Mi komparas vin, ho mia amatino.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Belaj estas viaj vangoj sub la orelringoj,   Via kolo sub la laĉoj de perloj.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Orajn orelringojn ni faros al vi,   Kun arĝentaj enkrustaĵoj.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Dum la reĝo sidas ĉe la festotablo,   Mia nardo bonodoras.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Kiel fasko de mirho, restanta inter miaj mamoj,   Estas al mi mia amato.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Kiel floraro de kofero estas por mi mia amato,   En la vinberĝardenoj de En-Gedi.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Ho, vi estas bela, mia amatino; ho, vi estas ja bela;   Viaj okuloj estas kiel ĉe kolomboj.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Ho, vi estas bela, mia amato, kaj ĉarma;   Nia lito estas kiel freŝaj herboj;',
  },
  '17': {
    verse_nr: 17,
    verse: 'La traboj de nia domo estas cedraj,   Niaj ĉevronoj estas abiaj.',
  },
};

export const CxapitroUnu = {
  key: 'Alt Kanto 1',
  title: 'La Alt Kanto',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
