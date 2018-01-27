const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'En la tria tago Ester vestis sin reĝe, kaj stariĝis sur la interna korto de la reĝa domo, kontraŭ la domo de la reĝo. La reĝo sidis sur sia reĝa trono en la reĝa domo, kontraŭ la enirejo de la domo.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Kiam la reĝo ekvidis la reĝinon Ester, starantan sur la korto, ŝi trovis favoron en liaj okuloj, kaj la reĝo etendis al Ester la oran sceptron, kiu estis en lia mano; tiam Ester aliris, kaj ektuŝis la pinton de la sceptro.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Kaj la reĝo diris al ŝi:Kio estas al vi, ho reĝino Ester, kaj kia estas via peto? se tio estas eĉ duono de la regno, ĝi estos donita al vi.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Kaj Ester respondis:Se al la reĝo plaĉas, la reĝo kune kun Haman venu hodiaŭ al la festeno, kiun mi faris por li.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Tiam la reĝo diris:Venigu plej rapide Hamanon, por plenumi tion, kion diris Ester. Kaj la reĝo kaj Haman venis al la festeno, kiun faris Ester.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Kaj la reĝo diris al Ester dum la trinkado de vino:Kion vi petas? tio estos donita al vi; kaj kia estas via deziro? ĝis duono de la regno ĝi estos plenumita.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Ester respondis kaj diris:Jen estas mia peto kaj deziro:',
  },
  '8': {
    verse_nr: 8,
    verse: 'se mi akiris favoron en la okuloj de la reĝo, kaj se al la reĝo plaĉas plenumi mian peton kaj fari mian deziron, la reĝo kun Haman venu al la festeno, kiun mi faros por ili; kaj morgaŭ mi faros, kion la reĝo diris.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Haman eliris en tiu tago, gaja kaj bonhumora. Sed kiam Haman ekvidis Mordeĥajon ĉe la reĝa pordego, kaj tiu ne leviĝis kaj ne moviĝis antaŭ li, tiam Haman pleniĝis de kolero kontraŭ Mordeĥaj.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Tamen Haman detenis sin, kaj iris hejmen. Kaj li sendis, kaj venigis al si siajn amikojn kaj sian edzinon Zereŝ.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Kaj Haman rakontis al ili pri sia granda riĉeco, pri la multo de siaj filoj, kaj pri ĉio, per kio la reĝo lin altigis kaj starigis lin super la princoj kaj servantoj de la reĝo.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Kaj Haman diris:Eĉ la reĝino Ester invitis kun la reĝo al la festeno,  kiun ŝi faris, neniun krom mi; ankaŭ por morgaŭ mi estas invitita al ŝi kun la reĝo.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Sed ĉio ĉi tio ne kontentigas min tiel longe, kiel mi vidas, ke la Judo Mordeĥaj sidas ĉe la pordego de la reĝo.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Tiam diris al li lia edzino Zereŝ kaj ĉiuj liaj amikoj:Oni pretigu arbon, havantan la alton de kvindek ulnoj, kaj matene diru al la reĝo, ke oni pendigu sur ĝi Mordeĥajon; kaj poste iru gaje kun la reĝo al la festeno. Tio plaĉis al Haman, kaj li pretigis la arbon.',
  },
};

export const CxapitroKvin = {
  key: 'Ester 5',
  chapterNum: 5,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
