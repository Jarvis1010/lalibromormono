const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Paŭlo, apostolo de Kristo Jesuo, laŭ la ordono de Dio, nia Savanto, kaj Kristo Jesuo, nia espero,',
  },
  '2': {
    verse_nr: 2,
    verse: 'al Timoteo, mia vera filo en fido:Graco, kompato, kaj paco de Dio, la Patro, kaj de Kristo Jesuo, nia Sinjoro.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Kiel mi, ekironte en Makedonujon, petis vin resti en Efeso, por ke vi admonu kelkajn homojn, ke ili ne instruu alian doktrinon,',
  },
  '4': {
    verse_nr: 4,
    verse: 'nek atentu fabelojn kaj senfinajn genealogiojn, kiuj naskas diskutojn,  pli ol tiun administradon de Dio, kiu estas laŭ la fido-tiel faru.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Sed la celo de la admono estas amo el pura koro kaj bona konscienco kaj sincera fido;',
  },
  '6': {
    verse_nr: 6,
    verse: 'kion maltrafinte, kelkaj homoj sin deturnis al vanta babilado,',
  },
  '7': {
    verse_nr: 7,
    verse: 'dezirante esti instruistoj de la leĝo, kvankam ili ne komprenas tion,  kion ili diras, nek tion, pri kio ili faras aserton.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Sed ni scias, ke la leĝo estas bona, se oni ĝin laŭleĝe uzas,',
  },
  '9': {
    verse_nr: 9,
    verse: 'sciante, ke la leĝo ekzistas ne por justulo, sed por homoj senleĝaj kaj malobeemaj, malpiaj kaj pekemaj, malsanktaj kaj profanaj, por patromortigantoj kaj patrinomortigantoj, hommortigantoj,',
  },
  '10': {
    verse_nr: 10,
    verse: 'malĉastuloj kaj viruzaĉantoj, homŝtelistoj, mensogantoj,  falseĵurantoj, kaj ĉio ajn alia kontraŭa al la sana doktrino;',
  },
  '11': {
    verse_nr: 11,
    verse: 'laŭ la konfidita al mi evangelio de la gloro de la benata Dio.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Mi dankas Kriston Jesuon, nian Sinjoron, kiu min kapabligas, tial, ke li trovis min fidela, destinante min al sia servado;',
  },
  '13': {
    verse_nr: 13,
    verse: 'kvankam mi antaŭe estis blasfemanto kaj persekutanto kaj insultanto;  tamen mi ricevis kompaton, ĉar mi tion faris nesciante kaj nekredante;',
  },
  '14': {
    verse_nr: 14,
    verse: 'kaj la graco de nia Sinjoro abunde sufiĉegis kun fido kaj amo, kiuj estas en Kristo Jesuo.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Fidinda estas la diro, kaj inda je plena akcepto, ke Kristo Jesuo envenis en la mondon, por savi pekantojn, el kiuj mi estas la ĉefa;',
  },
  '16': {
    verse_nr: 16,
    verse: 'tamen pro tiu kaŭzo mi ricevis kompaton, por ke en mi, kiel la ĉefa,  Jesuo Kristo elmontru sian tutan paciencegon, kiel ekzemplo por tiuj, kiuj poste kredos al li por eterna vivo.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Nun al la Reĝo eterna, senmorta, nevidebla, la sola Dio, estu honoro kaj gloro por ĉiam kaj eterne. Amen.',
  },
  '18': {
    verse_nr: 18,
    verse: 'Ĉi tiun zorgadon mi komisias al vi, mia filo Timoteo, laŭ la profetaĵoj, kiuj antaŭiris sur vin, ke per ili vi militadu la bonan militon,',
  },
  '19': {
    verse_nr: 19,
    verse: 'tenante la fidon kaj bonan konsciencon, kiun forpuŝinte de si, kelkaj homoj ŝippereis rilate la fidon;',
  },
  '20': {
    verse_nr: 20,
    verse: 'el kiuj estas Himeneo kaj Aleksandro, kiujn mi transdonis al Satano, por ke ili lernu ne blasfemi.',
  },
};

export const CxapitroUnu = {
  key: '2 Timoteo 1',
  pretitle: 'La Dua Epistolo de La Apostolo Paŭlo al',
  title: 'Timoteo',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
