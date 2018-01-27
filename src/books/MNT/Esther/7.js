const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'La reĝo kaj Haman venis, por festeni ĉe la reĝino Ester.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Kaj ankaŭ en la dua tago, dum la trinkado de vino, la reĝo diris al Ester:Kion vi petas, ho reĝino Ester? tio estos donita al vi; kaj kia estas via deziro? ĝis duono de la regno ĝi estos plenumita.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Tiam la reĝino Ester respondis kaj diris:Se mi trovis favoron en viaj okuloj, ho reĝo, kaj se al la reĝo plaĉas, tiam mia vivo estu donacita al mi laŭ mia peto, kaj mia popolo laŭ mia deziro;',
  },
  '4': {
    verse_nr: 4,
    verse: 'ĉar ni estas venditaj, mi kaj mia popolo, por ekstermo, mortigo, kaj pereigo. Se ni almenaŭ estus venditaj nur por esti sklavoj kaj sklavinoj, mi silentus, kvankam la malamiko ne kompensus la malprofiton de la reĝo.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Tiam la reĝo Aĥaŝveroŝ diris al la reĝino Ester:Kiu li estas kaj kie li estas, tiu, kiu prenis en sian koron la kuraĝon agi tiel?',
  },
  '6': {
    verse_nr: 6,
    verse: 'Kaj Ester respondis:La malamanto kaj malamiko estas ĉi tiu malbona Haman. Kaj Haman ektremis antaŭ la reĝo kaj la reĝino.',
  },
  '7': {
    verse_nr: 7,
    verse: 'La reĝo leviĝis kolere de la vintrinkado, kaj iris en la ĝardenon de la palaco; sed Haman restis, por peti pri sia vivo la reĝinon Ester, ĉar li vidis, ke la reĝo destinis por li malbonan sorton.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Kiam la reĝo revenis el la palaca ĝardeno en la ĉambron de la festeno,  Haman estis falinta sur la litbenkon, sur kiu sidis Ester. Tiam la reĝo diris:Eĉ perforti la reĝinon li volas ĉe mi en la domo! La vorto eliris el la buŝo de la reĝo, kaj oni kovris al Haman la vizaĝon.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Ĥarbona, unu el la eŭnukoj antaŭ la reĝo, diris:Jen eĉ la arbo, kiun Haman pretigis por Mordeĥaj, kiu parolis bonon por la reĝo, staras en la domo de Haman; ĝi havas la alton de kvindek ulnoj. Tiam la reĝo diris:Pendigu lin sur ĝi.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Kaj oni pendigis Hamanon sur la arbo, kiun li pretigis por Mordeĥaj.  Kaj la kolero de la reĝo kvietiĝis.',
  },
};

export const CxapitroSep = {
  key: 'Ester 7',
  chapterNum: 7,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
