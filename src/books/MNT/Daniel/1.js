const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'En la tria jaro de la reĝado de Jehojakim, reĝo de Judujo, venis Nebukadnecar, reĝo de Babel, al Jerusalem, kaj eksieĝis ĝin.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Kaj la Sinjoro transdonis en lian manon Jehojakimon, reĝon de Judujo,  kaj parton de la vazoj de la domo de Dio; kaj li venigis ilin en la landon Ŝinar, en la domon de sia dio, kaj la vazojn li metis en la trezorejon de sia dio.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Kaj la reĝo diris al Aŝpenaz, la estro de liaj korteganoj, ke el la Izraelidoj, el la reĝa idaro kaj el la nobelaro, li venigu',
  },
  '4': {
    verse_nr: 4,
    verse: 'knabojn sendifektajn, belaspektajn, komprenemajn por ĉiu saĝaĵo,  klerajn, scienckomprenantajn, kaj kapablajn servi en la palaco de la reĝo,  kaj ke oni lernigu al ili la skribadon kaj la lingvon Ĥaldean.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Kaj la reĝo destinis por ili por ĉiu tago manĝaĵojn de la reĝa tablo, kaj vinon el tiu, kiun li mem trinkadis, kaj li ordonis eduki ilin dum tri jaroj, post kies finiĝo ili estis komencontaj la servadon antaŭ la reĝo.',
  },
  '6': {
    verse_nr: 6,
    verse: 'El la idoj de Jehuda estis inter ili Daniel, Ĥananja, Miŝael, kaj Azarja.',
  },
  '7': {
    verse_nr: 7,
    verse: 'La estro de la korteganoj donis al ili aliajn nomojn; kaj li donis al Daniel la nomon Beltŝacar; al Ĥananja, Ŝadraĥ; al Miŝael, Meŝaĥ; kaj al Azarja, Abed-Nego.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Daniel metis en sian koron, ke li ne malpurigos sin per la manĝaĵoj de la reĝo, nek per la vino, kiun ĉi tiu trinkas; tial li petis la korteganestron, ke al li estu permesite ne malpurigi sin.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Dio donis al Daniel favoron kaj simpation ĉe la korteganestro.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Kaj la korteganestro diris al Daniel:Mi timas mian sinjoron, la reĝon,  kiu mem destinis por vi, kion vi devas manĝi kaj trinki; se li vidos, ke viaj vizaĝoj estas malpli grasaj, ol ĉe aliaj knaboj, viaj samaĝuloj, tiam vi farus mian kapon kulpa antaŭ la reĝo.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Tiam Daniel diris al la inspektisto, al kiu la korteganestro komisiis Danielon, Ĥananjan, Miŝaelon, kaj Azarjan:',
  },
  '12': {
    verse_nr: 12,
    verse: 'Faru, mi petas, provon kun viaj servantoj dum dek tagoj; oni donadu al ni por manĝi legomojn, kaj por trinki akvon;',
  },
  '13': {
    verse_nr: 13,
    verse: 'poste montriĝu al vi nia aspekto, kaj la aspekto de la knaboj, kiuj manĝas la manĝaĵon de la reĝo; kaj poste agu kun viaj servantoj laŭ tio,  kion vi vidos.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Li obeis ilin en tio kaj faris kun ili provon dum dek tagoj.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Post paso de la dek tagoj montriĝis, ke ili estas pli bonaspektaj kaj pli bonkorpaj, ol ĉiuj knaboj, kiuj manĝis la manĝaĵon de la reĝo.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Tial la inspektisto forportadis ilian manĝaĵon, kaj la vinon, kiu estis destinita al ili por trinki, kaj donadis al ili legomojn.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Kaj al tiuj kvar knaboj Dio donis kapablojn kaj komprenemecon pri ĉiuj libroj kaj saĝaĵo, kaj Daniel estis ankaŭ kompetenta pri ĉiaj vizioj kaj sonĝoj.',
  },
  '18': {
    verse_nr: 18,
    verse: 'Kiam pasis la tempo, kiun la reĝo difinis por ilia venigo, la korteganestro prezentis ilin al Nebukadnecar.',
  },
  '19': {
    verse_nr: 19,
    verse: 'La reĝo parolis kun ili, kaj el ili ĉiuj troviĝis neniu egala al Daniel, Ĥananja, Miŝael, kaj Azarja. Kaj ili komencis servadi antaŭ la reĝo.',
  },
  '20': {
    verse_nr: 20,
    verse: 'Kaj koncerne ĉiujn aferojn de saĝo kaj scio, pri kiuj la reĝo ilin demandis, li trovis ilin dekoble pli saĝaj, ol ĉiuj astrologoj kaj magiistoj, kiuj estis en lia tuta regno.',
  },
  '21': {
    verse_nr: 21,
    verse: 'Daniel estis tie ĝis la unua jaro de la reĝo Ciro.',
  },
};

export const CxapitroUnu = {
  key: 'Daniel 1',
  title: 'La Libro de Daniel',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
