const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'En la oka monato, en la dua jaro de Dario, aperis vorto de la Eternulo al la profeto Zeĥarja, filo de Bereĥja, filo de Ido, dirante:',
  },
  '2': { verse_nr: 2, verse: 'Forte koleris la Eternulo kontraŭ viaj patroj.' },
  '3': {
    verse_nr: 3,
    verse: 'Diru do al ili:Tiele diras la Eternulo Cebaot:Revenu al Mi, diras la Eternulo Cebaot, kaj tiam Mi returnos Min al vi, diras la Eternulo Cebaot.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Ne estu kiel viaj patroj, al kiuj vokadis la antaŭaj profetoj,  dirante:Tiele diras la Eternulo Cebaot:Deturnu vin de viaj malbonaj vojoj kaj de viaj malbonaj agoj-sed ili ne aŭskultis kaj ne atentis Min, diras la Eternulo.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Kie estas viaj patroj? kaj eĉ la profetoj, ĉu ili povas vivi eterne?',
  },
  '6': {
    verse_nr: 6,
    verse: 'Sed Miaj vortoj kaj decidoj, pri kiuj Mi diris al Miaj servantoj, la profetoj, ĉu ili ne trafis viajn patrojn? Kaj ili pentis, kaj diris:Kiel la Eternulo Cebaot decidis agi kun ni pro niaj vojoj kaj pro niaj agoj, tiel Li agis kun ni.',
  },
  '7': {
    verse_nr: 7,
    verse: 'En la dudek-kvara tago de la dek-unua monato, tio estas de la monato Ŝebat, en la dua jaro de Dario, aperis vorto de la Eternulo al la profeto Zeĥarja, filo de Bereĥja, filo de Ido, dirante:',
  },
  '8': {
    verse_nr: 8,
    verse: 'Mi vidis en la nokto:jen viro sidas sur ruĝa ĉevalo, kaj li troviĝas inter mirtoj en ombrita loko, kaj post li troviĝas ĉevaloj ruĝaj, brunaj,  kaj blankaj.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Mi demandis:Kiuj ili estas, mia sinjoro? Kaj la anĝelo, kiu parolis kun mi, diris al mi:Mi montros al vi, kiuj ili estas.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Kaj la viro, kiu troviĝis inter la mirtoj, ekparolis kaj diris:Ili estas tiuj, kiujn la Eternulo sendis, por trairi la teron.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Kaj ili mem ekparolis al la anĝelo de la Eternulo, kiu troviĝis inter la mirtoj, kaj diris:Ni trairis la teron, kaj ni trovis, ke la tuta tero estas trankvila kaj paca.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Tiam ekparolis la anĝelo de la Eternulo kaj diris:Ho Eternulo Cebaot,  kiel longe Vi ne kompatos Jerusalemon kaj la urbojn de Judujo, kiujn Vi koleras jam dum sepdek jaroj?',
  },
  '13': {
    verse_nr: 13,
    verse: 'Kaj la Eternulo respondis al la anĝelo, kiu parolis kun mi, vortojn bonajn, vortojn konsolajn.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Tiam diris al mi la anĝelo, kiu parolis kun mi:Proklamu kaj diru:Tiele diras la Eternulo Cebaot:Mi ekfervoris pri Jerusalem kaj pri Cion per granda fervoro;',
  },
  '15': {
    verse_nr: 15,
    verse: 'kaj per granda indigno Mi indignas kontraŭ la nacioj memfidaj; ĉar kiam Mi koleris malmulte, ili akcelis la malfeliĉon.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Tial tiele diras la Eternulo:Mi returnas Min al Jerusalem kun kompato;  Mia domo estos konstruita en ĝi, diras la Eternulo Cebaot, kaj ŝnuro de ĉarpentistoj estos tirata en Jerusalem.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Ankoraŭ proklamu jenon:Tiele diras la Eternulo Cebaot:Denove pleniĝos Miaj urboj per bonaĵo, denove la Eternulo konsolos Cionon, kaj denove Li elektos Jerusalemon.',
  },
  '18': {
    verse_nr: 18,
    verse: 'Mi levis miajn okulojn kaj ekvidis:jen estas kvar kornoj.',
  },
  '19': {
    verse_nr: 19,
    verse: 'Kaj mi diris al la anĝelo, kiu parolis kun mi:Kion tio signifas? Kaj li respondis al mi:Tio estas la kornoj, kiuj disĵetis Jehudan, Izraelon, kaj Jerusalemon.',
  },
  '20': {
    verse_nr: 20,
    verse: 'Kaj la Eternulo montris al mi kvar majstrojn.',
  },
  '21': {
    verse_nr: 21,
    verse: 'Mi diris:Kion ili intencas fari? Li respondis jene:Tiuj kornoj disĵetis Jehudan tiel, ke neniu povis levi sian kapon; tial nun venas ĉi tiuj, por fortimigi tiujn, por dehaki la kornojn de la nacioj, kiuj levis sian kornon kontraŭ la loĝantojn de Judujo, por disĵeti ilin.',
  },
};

export const CxapitroUnu = {
  key: 'Zeĥarja 1',
  title: 'Zeĥarja',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
