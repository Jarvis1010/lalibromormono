const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Nomu viajn fratojn Mia popolo, kaj viajn fratinojn Kompatataj.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Havu juĝon kontraŭ via patrino, havu juĝon, ĉar ŝi ne estas Mia edzino, kaj Mi ne estas ŝia edzo; ŝi forigu la malĉastecon de sia vizaĝo kaj la adultemecon de siaj mamoj,',
  },
  '3': {
    verse_nr: 3,
    verse: 'por ke Mi ne senvestigu ŝin ĝis nudeco, kaj ne prezentu ŝin tia, kia ŝi estis en la tago de sia naskiĝo, ke Mi ne faru ŝin kiel dezerto, ne faru ŝin kiel tero senakva, kaj ne mortigu ŝin per soifo.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Ankaŭ ŝiajn infanojn Mi ne kompatus, ĉar ili estas infanoj de malĉasto;',
  },
  '5': {
    verse_nr: 5,
    verse: 'ĉar ilia patrino malĉastis, ilia naskintino malhonoris sin; ĉar ŝi diris:Mi sekvos miajn amistojn, kiuj donas al mi mian panon kaj mian akvon,  miajn lanaĵojn kaj miajn linaĵojn, mian oleon kaj miajn drinkaĵojn.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Pro tio Mi baros vian vojon per dornoj, Mi ĉirkaŭbaros ŝin, ke ŝi ne trovos siajn vojojn.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Ŝi postkuros siajn amistojn, sed ŝi ne kuratingos ilin; ŝi serĉos ilin, sed ne trovos; kaj ŝi diros:Mi iros returne al mia unua edzo, ĉar pli bone estis al mi tiam, ol nun.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Kaj ŝi ne sciis, ke Mi estis tiu, kiu donadis al ŝi panon kaj moston kaj oleon, Mi donis al ŝi multe da arĝento kaj oro, kiun ili uzis por Baal.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Tial Mi prenos returne Mian panon kaj Mian moston iliatempe, Mi forprenos Mian lanaĵon kaj Mian linaĵon, per kiu ŝi kovris sian nudecon.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Kaj nun Mi malkaŝos ŝian hontindaĵon antaŭ la okuloj de ŝiaj amistoj, kaj neniu savos ŝin el Mia mano.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Mi ĉesigos ĉian ŝian gajecon, ŝiajn festojn, monatkomencojn, kaj sabatojn, kaj ĉiujn ŝiajn solenajn kunvenojn.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Mi dezertigos ŝiajn vinbertrunkojn kaj ŝiajn figarbojn, pri kiuj ŝi diras:Tio estas donaco, kiun donis al mi miaj amistoj; Mi faros ilin arbaro,  kaj la bestoj de la kampo ilin manĝos.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Mi punos ŝin pro la tagoj de la Baaloj, al kiuj ŝi incensis, ornaminte sin per siaj ringoj kaj siaj ĉirkaŭkoloj, kaj sekvante siajn amistojn, dum Min ŝi forgesis, diras la Eternulo.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Tial jen Mi allogos ŝin, kondukos ŝin en dezerton, kaj parolos al ŝi agrablajn vortojn;',
  },
  '15': {
    verse_nr: 15,
    verse: 'kaj Mi donos al ŝi ŝiajn vinberĝardenojn el tie, kaj la valon de malĝojo Mi faros pordo de espero; kaj tie ŝi kantos, kiel en la tagoj de sia juneco kaj kiel en la tempo de sia elirado el la lando Egipta.',
  },
  '16': {
    verse_nr: 16,
    verse: 'En tiu tempo, diras la Eternulo, ŝi nomos Min:Mia edzo; ŝi ne plu nomos Min:Mia mastro.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Mi forigos de ŝia buŝo la nomojn de la Baaloj, kaj oni ne plu rememoros ilin laŭ ilia nomo.',
  },
  '18': {
    verse_nr: 18,
    verse: 'Kaj Mi faros por ili en tiu tempo interligon kun la bestoj de la kampo,  kun la birdoj de la ĉielo, kaj kun la rampaĵoj de la tero; pafarkon,  glavon, kaj militon Mi ekstermos el la lando, kaj Mi donos al ili la eblon dormi eksterdanĝere.',
  },
  '19': {
    verse_nr: 19,
    verse: 'Mi fianĉiĝos kun vi por ĉiam, Mi fianĉiĝos kun vi en vero kaj justo, en favorkoreco kaj kompatemeco.',
  },
  '20': {
    verse_nr: 20,
    verse: 'Mi fianĉiĝos kun vi en fideleco, kaj vi ekkonos la Eternulon.',
  },
  '21': {
    verse_nr: 21,
    verse: 'En tiu tempo Mi favoros, diras la Eternulo, Mi favoros la ĉielon, kaj ĝi favoros la teron;',
  },
  '22': {
    verse_nr: 22,
    verse: 'kaj la tero favoros la grenon, moston, kaj oleon, kaj ĉi tiuj favoros Jizreelon.',
  },
  '23': {
    verse_nr: 23,
    verse: 'Mi faros ŝin al Mi fruktoporta sur la tero, kaj Mi kompatos la nekompatitinon; kaj al tiu, kiu estis ne Mia popolo, Mi diros:Vi estas Mia popolo; kaj ĝi diros:Vi estas mia Dio.',
  },
};

export const CxapitroDu = {
  key: 'Hoŝea 2',
  chapterNum: 2,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
