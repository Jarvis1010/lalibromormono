const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Estis iu homo en la lando Uc, lia nomo estis Ijob. Tiu homo estis honesta, justa, diotima, kaj li evitadis malbonon.',
  },
  '2': { verse_nr: 2, verse: 'Al li naskiĝis sep filoj kaj tri filinoj.' },
  '3': {
    verse_nr: 3,
    verse: 'Lia brutaro konsistis el sep mil ŝafoj, tri mil kameloj, kvincent paroj da bovoj, kvincent azeninoj, kaj li havis tre multe da servistoj; kaj tiu homo estis pli eminenta, ol ĉiuj filoj de la oriento.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Liaj filoj havis la kutimon faradi festenon en la domo de ĉiu el ili,  ĉiu en sia tago; kaj ili invitadis siajn tri fratinojn, por manĝi kaj trinki kun ili.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Kaj ĉiufoje, kiam la rondo de la festenaj tagoj estis finita, Ijob sendis, por sanktigi ilin, kaj li leviĝis frue matene kaj alportis bruloferojn laŭ la nombro de ili ĉiuj; ĉar, diris Ijob:Eble miaj filoj pekis kaj blasfemis Dion en sia koro. Tiel agadis Ijob ĉiam.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Unu tagon, kiam la filoj de Dio venis, por stariĝi antaŭ la Eternulo,  venis inter ili ankaŭ Satano.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Kaj la Eternulo diris al Satano:De kie vi venas? Kaj Satano respondis al la Eternulo, kaj diris:Mi vagadis sur la tero kaj rondiradis sur ĝi.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Kaj la Eternulo diris al Satano:Ĉu vi atentis Mian servanton Ijob? ne ekzistas ja sur la tero homo simila al li, tiel honesta, justa, diotima, kaj evitanta malbonon.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Kaj Satano respondis al la Eternulo, kaj diris:Ĉu vane Ijob timas Dion?',
  },
  '10': {
    verse_nr: 10,
    verse: 'Vi ŝirmis ja ĉiuflanke lin kaj lian domon, kaj ĉion, kio apartenas al li; la farojn de liaj manoj Vi benis, kaj liaj brutaroj disvastiĝis sur la tero.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Sed etendu nur Vian manon, kaj ektuŝu ĉion, kion li havas; Vi vidos,  ĉu li ne blasfemos Vin antaŭ Via vizaĝo.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Tiam la Eternulo diris al Satano:Jen ĉio, kion li havas, estas transdonata en vian manon; nur sur lin mem ne etendu vian manon. Kaj Satano foriris de antaŭ la Eternulo.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Unu tagon, kiam liaj filoj kaj liaj filinoj estis manĝantaj kaj trinkantaj vinon en la domo de ilia unuenaskita frato,',
  },
  '14': {
    verse_nr: 14,
    verse: 'venis sendito al Ijob, kaj diris:Dum la bovoj estis plugantaj kaj la azeninoj estis paŝtiĝantaj apud ili,',
  },
  '15': {
    verse_nr: 15,
    verse: 'superfalis ilin la Ŝebaanoj, kaj forprenis ilin; kaj la servistojn ili mortigis per glavo; saviĝis nur mi sola, por raporti al vi.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Kiam ankoraŭ tiu parolis, venis alia, kaj diris:Fajro de Dio falis el la ĉielo, bruligis la ŝafojn kaj la servistojn, kaj ekstermis ilin;  saviĝis nur mi sola, por raporti al vi.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Kiam tiu ankoraŭ parolis, venis alia, kaj diris:La Ĥaldeoj aranĝis tri taĉmentojn, atakis la kamelojn kaj forprenis ilin, kaj la servistojn ili mortigis per glavo; saviĝis nur mi sola, por raporti al vi.',
  },
  '18': {
    verse_nr: 18,
    verse: 'Dum tiu ankoraŭ parolis, venis alia, kaj diris:Viaj filoj kaj viaj filinoj estis manĝantaj kaj trinkantaj vinon en la domo de ilia unuenaskita frato;',
  },
  '19': {
    verse_nr: 19,
    verse: 'kaj jen granda vento leviĝis de la flanko de la dezerto, puŝis la kvar angulojn de la domo, kaj ĉi tiu falis sur la junulojn, kaj ili mortis;  saviĝis nur mi sola, por raporti al vi.',
  },
  '20': {
    verse_nr: 20,
    verse: 'Tiam Ijob leviĝis, disŝiris sian veston, pritondis sian kapon, ĵetis sin sur la teron, kaj adorkliniĝis;',
  },
  '21': {
    verse_nr: 21,
    verse: 'kaj li diris:Nuda mi eliris el la ventro de mia patrino, kaj nuda mi revenos tien; la Eternulo donis, kaj la Eternulo prenis; la nomo de la Eternulo estu benata.',
  },
  '22': {
    verse_nr: 22,
    verse: 'Malgraŭ ĉio ĉi tio Ijob ne pekis, kaj ne eldiris blasfemon kontraŭ Dio.',
  },
};

export const CxapitroUnu = {
  key: 'Ijob 1',
  title: 'La Libro de Ijob',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
