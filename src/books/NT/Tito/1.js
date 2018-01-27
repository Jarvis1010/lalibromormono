const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Paŭlo, servisto de Dio kaj apostolo de Jesuo Kristo, laŭ la fido de la elektitoj de Dio, kaj laŭ la scio de la vero, kiu estas laŭ pieco,',
  },
  '2': {
    verse_nr: 2,
    verse: 'kun espero al eterna vivo, kiun la senmensoga Dio promesis antaŭ la tempoj eternaj,',
  },
  '3': {
    verse_nr: 3,
    verse: 'sed ĝustatempe Li elmontris Sian vorton en la anonco, kiu estas al mi konfidita konforme al la ordono de Dio, nia Savanto;',
  },
  '4': {
    verse_nr: 4,
    verse: 'al Tito, mia vera filo laŭ komuna fido:Graco kaj paco de Dio, la Patro,  kaj de Kristo Jesuo, nia Savanto.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Pro tio mi lasis vin en Kreto, ke vi aranĝu la aferojn mankohavajn kaj starigu presbiterojn en ĉiu urbo, kiel mi ordonis al vi;',
  },
  '6': {
    verse_nr: 6,
    verse: 'se iu troviĝas neriproĉebla, edzo de unu edzino, kies infanoj estas kredantoj, kaj ne estas akuzitaj pri diboĉo, nek ribelemaj.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Ĉar episkopo devas esti sen riproĉo, kiel administranto de Dio; ne obstina, ne kolerema, ne drinkema, ne malpacema, ne avidanta malhonoran gajnon;',
  },
  '8': {
    verse_nr: 8,
    verse: 'sed gastama, bonamanta, sobra, justa, sankta, sinreganta,',
  },
  '9': {
    verse_nr: 9,
    verse: 'tenanta la fidelan vorton, kiu estas laŭ la instruado, por ke li povu admoni pri la sana doktrino kaj ankaŭ refuti la kontraŭdirantojn.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Ĉar ekzistas multaj homoj ribelemaj, vantaj parolantoj kaj trompistoj,  precipe tiuj el la cirkumcido,',
  },
  '11': {
    verse_nr: 11,
    verse: 'kies buŝoj devas esti fermitaj; homoj, kiuj renversas tutajn domojn,  instruantaj nekonvenaĵojn por malhonora gajno.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Unu el ili, profeto samnacia, diris:La Kretanoj ĉiam estas mensogantoj,  malbonaj bestoj, mallaboremaj manĝeguloj.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Tiu atesto estas vera. Tial akre riproĉu ilin, por ke ili estu sanaj en la fido,',
  },
  '14': {
    verse_nr: 14,
    verse: 'ne atentante Judajn fabelojn, kaj ordonojn de tiuj homoj, kiuj deturnas sin de la vero.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Ĉe la puraj, ĉio estas pura; sed ĉe la malpuraj kaj nekredantaj,  nenio estas pura; sed ilia menso kaj ilia konscienco estas malpurigitaj.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Ili pretendas koni Dion; sed per siaj agoj ili malkonfesas Lin, estante abomenaj kaj malobeemaj kaj por ĉiu bona faro senvaloraj.',
  },
};

export const CxapitroUnu = {
  key: 'Tito 1',
  pretitle: 'La Epistolo de La Apostolo Paŭlo al',
  title: 'Tito',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
