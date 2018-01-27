const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Profeta vorto de la Eternulo pri la lando Ĥadraĥ kaj pri ĝia ripozejo Damasko (ĉar la Eternulo rigardas ĉiujn homojn, kiel ĉiujn tribojn de Izrael),',
  },
  '2': {
    verse_nr: 2,
    verse: 'kaj pri Ĥamat, kiu havas sian limon apud ĝi, pri Tiro kaj Cidon, kiuj pensas, ke ili estas tre saĝaj.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Tiro konstruis al si fortikaĵon, kaj kolektis arĝenton kiel polvon, kaj oron kiel stratan koton;',
  },
  '4': {
    verse_nr: 4,
    verse: 'sed jen la Sinjoro faros ĝin malriĉa kaj ĵetos en la maron ĝian remparon, kaj ĝi mem estos ekstermita de fajro.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Aŝkelon tion vidos kaj ektimos, Gaza forte ektremos, ankaŭ Ekron, ĉar ĝia fido kovriĝos per honto; pereos la reĝo de Gaza, kaj Aŝkelon ne plu estos loĝata.',
  },
  '6': {
    verse_nr: 6,
    verse: 'En Aŝdod loĝos fremduloj, kaj Mi ekstermos la fierecon de Filiŝtujo.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Mi forigos la sangon el ĝia buŝo kaj la abomenindan manĝaĵon el ĝiaj dentoj, kaj ĝi mem fariĝos apartenaĵo de nia Dio, kaj ĝi estos distrikto de Judujo, kaj Ekron fariĝos kiel la Jebusidoj.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Mi gardos Mian domon kontraŭ la militistoj, por ke neniu trairu tien kaj reen, kaj ne plu venos al ĝi premanto; ĉar Mi rigardas ĝin nun per Miaj okuloj.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Ĝoju forte, ho filino de Cion, triumfu, ho filino de Jerusalem:jen via reĝo iras al vi; justa kaj helpema li estas, humila kaj rajdanta sur azeno,  sur ido de azenino.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Ĉar Mi ekstermos ĉarojn ĉe Efraim kaj ĉevalojn en Jerusalem, kaj ekstermita estos milita pafarko; li proklamos pacon al la nacioj, kaj lia regado estos de maro ĝis maro, de la Rivero ĝis la finoj de la tero.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Kaj pro la sango de via interligo Mi eligos viajn malliberulojn el la senakva kavo.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Reiru al la fortikaĵo, vi, ligitaj de espero! ĉar hodiaŭ Mi sciigas,  ke Mi redonos al vi duoble.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Mi streĉos al Mi Judujon kiel pafarkon, Mi armos Efraimon, Mi levos viajn filojn, ho Cion, kontraŭ viajn filojn, ho Grekujo, kaj Mi faros vin kiel glavo de heroo.',
  },
  '14': {
    verse_nr: 14,
    verse: 'La Eternulo aperos super ili, Lia sago elflugos kiel fulmo, la Sinjoro,  la Eternulo, ekblovos per trumpeto kaj paŝos en suda ventego.',
  },
  '15': {
    verse_nr: 15,
    verse: 'La Eternulo Cebaot defendos ilin, kaj ili ekstermos, kaj ili piedpremos la ŝtonojn de la ŝtonĵetiloj; ili trinkos, kaj bruos kvazaŭ de vino; ili pleniĝos kiel porofera kaliko, kiel la anguloj de la altaro.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Kaj savos ilin la Eternulo, ilia Dio, en tiu tempo, kiel la ŝafojn de Sia popolo; ĉar kiel ŝtonoj de krono ili brilos sur Lia tero.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Ĉar kiel granda estas Lia boneco, kaj kiel granda estas Lia beleco!  Pano vigligos la junulojn, kaj mosto la junulinojn.',
  },
};

export const CxapitroNau = {
  key: 'Zeĥarja 9',
  chapterNum: 9,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
