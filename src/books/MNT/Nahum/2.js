const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Disĵetanto iras kontraŭ vin; fortikigu viajn fortikaĵojn, gardu la vojon, armu viajn lumbojn, fortigu vin kiel eble plej potence.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Ĉar la Eternulo restarigos la majeston de Jakob, kiel ankaŭ la majeston de Izrael; ĉar la ruinigantoj ilin ruinigis kaj ekstermis iliajn vinberbranĉojn.',
  },
  '3': {
    verse_nr: 3,
    verse: 'La ŝildo de liaj herooj estas ruĝigita; liaj militistoj estas kiel en purpuro; kiel fajro brilas la ĉaroj en la tago de lia armiĝo; la lancoj ŝanceliĝas.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Sur la stratoj rapide ruliĝas la ĉaroj, bruas sur la placoj; ili aspektas kiel torĉoj, brilas kiel fulmoj.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Li vokas siajn fortulojn, sed ili falpuŝiĝos dum sia irado; ili rapidas al la murego kaj preparas defendon.',
  },
  '6': {
    verse_nr: 6,
    verse: 'La pordegoj ĉe la akvo malfermiĝos, kaj la palaco cedos.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Decidita estas ĝia kapto kaj forkonduko, kaj ĝiaj sklavinoj ĝemos kiel kolomboj kaj batos sian bruston.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Nineve estas de ĉiam kiel baseno da akvo; sed nun ĝi forkuras:Haltu,  haltu! sed neniu revenas.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Disrabu arĝenton, disrabu oron; senfinaj estas la trezoroj, estas multege da diversaj valoraĵoj.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Prirabita kaj plene ruinigita ĝi estos; la koro svenas, la genuoj tremas; ĉies lumboj senfortiĝis, kaj ĉies vizaĝoj nigriĝis.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Kie nun estas la loĝejo de la leonoj, kaj tiu paŝtejo de leonidoj, kie iradis leono, leonino, kaj leonidoj, kaj neniu ilin timigis?',
  },
  '12': {
    verse_nr: 12,
    verse: 'La leono disŝiradis sufiĉon por siaj idoj, sufokadis por siaj leoninoj, plenigadis siajn kavernojn per kaptaĵo kaj siajn nestegojn per disŝiritaĵo.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Jen Mi iras kontraŭ vin, diras la Eternulo Cebaot, kaj Mi forbruligos en fumo viajn ĉarojn, kaj glavo ekstermos viajn leonidojn; Mi ĉesigos sur la tero vian disŝiradon, kaj oni ne plu aŭdos la voĉon de viaj sendatoj.',
  },
};

export const CxapitroDu = {
  key: 'Naĥum 2',
  chapterNum: 2,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
