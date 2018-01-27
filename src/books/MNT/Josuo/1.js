const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Post la morto de Moseo, servanto de la Eternulo, la Eternulo diris al Josuo, filo de Nun, helpanto de Moseo, jene:',
  },
  '2': {
    verse_nr: 2,
    verse: 'Mia servanto Moseo mortis; kaj nun leviĝu, transiru ĉi tiun Jordanon,  vi kaj ĉi tiu tuta popolo, en la landon, kiun Mi donas al ili, al la Izraelidoj.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Ĉiun lokon, sur kiun paŝos la plando de via piedo, Mi donas al vi, kiel Mi diris al Moseo.',
  },
  '4': {
    verse_nr: 4,
    verse: 'De la dezerto kaj de ĉi tiu Lebanon ĝis la granda rivero, la rivero Eŭfrato, la tuta lando de la Ĥetidoj, ĝis la Granda Maro okcidente, estu viaj limoj.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Neniu rezistos al vi dum via tuta vivo; kiel Mi estis kun Moseo, tiel Mi estos kun vi; Mi ne foriros de vi kaj Mi ne forlasos vin.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Estu forta kaj kuraĝa; ĉar vi ekposedigos al ĉi tiu popolo la landon,  pri kiu Mi ĵuris al iliaj patroj, ke Mi donos ĝin al ili.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Nur estu forta kaj tre kuraĝa, penante agi laŭ la tuta instruo, kiun donis al vi Mia servanto Moseo; ne dekliniĝu de ĝi dekstren nek maldekstren, por ke vi sukcesu ĉie, kien vi iros.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Ĉi tiu libro de la instruo ne foriĝu de via buŝo, sed meditu pri ĝi tage kaj nokte, por ke vi zorge plenumu ĉion, kio estas skribita en ĝi;  ĉar tiam vi havos feliĉon sur viaj vojoj, kaj tiam vi havos sukceson.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Jen Mi ordonis al vi:estu forta kaj kuraĝa; ne havu teruron kaj ne timu;  ĉar kun vi estas la Eternulo, via Dio, ĉie, kien vi iros.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Kaj Josuo ordonis al la oficistoj de la popolo, dirante:',
  },
  '11': {
    verse_nr: 11,
    verse: 'Iru tra la tendaro, kaj ordonu al la popolo, dirante:Pretigu por vi manĝaĵon, ĉar post tri tagoj vi transiros ĉi tiun Jordanon, por iri ekposedi la landon, kiun la Eternulo, via Dio, donas al vi kiel posedaĵon.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Kaj al la Rubenidoj kaj al la Gadidoj kaj al la duontribo de Manase,  Josuo diris jene:',
  },
  '13': {
    verse_nr: 13,
    verse: 'Memoru la aferon, kiun ordonis al vi Moseo, servanto de la Eternulo,  dirante:La Eternulo, via Dio, ripozigis vin, kaj donis al vi ĉi tiun teron;',
  },
  '14': {
    verse_nr: 14,
    verse: 'viaj edzinoj, viaj infanoj, kaj viaj brutoj restos sur la tero, kiun donis al vi Moseo transe de Jordan; kaj vi iru armitaj antaŭ viaj fratoj,  ĉiuj, kiuj taŭgas por la milito, kaj helpu ilin,',
  },
  '15': {
    verse_nr: 15,
    verse: 'ĝis la Eternulo ripozigos viajn fratojn, kiel vin, kaj ili ankaŭ ekposedos la teron, kiun la Eternulo, via Dio, donas al ili; tiam vi reiros sur la teron de via posedado, kaj vi posedos ĝin, kiun donis al vi Moseo,  servanto de la Eternulo, transe de Jordan, sur la flanko de sunleviĝo.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Kaj ili respondis al Josuo, dirante:Ĉion, kion vi ordonis, ni faros,  kaj ĉien, kien vi sendos nin, ni iros.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Tute tiel, kiel ni obeis Moseon, ni obeos vin; nur la Eternulo, via Dio,  estu kun vi, kiel Li estis kun Moseo.',
  },
  '18': {
    verse_nr: 18,
    verse: 'Ĉiu, kiu malobeos vian diron kaj ne aŭskultos viajn vortojn en ĉio,  kion vi ordonis al li, estos mortigita. Nur estu forta kaj kuraĝa.',
  },
};

export const CxapitroUnu = {
  key: 'Josuo 1',
  title: 'La Libro de Josuo',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
