const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Metu trumpeton al via buŝo! Li flugas kiel aglo al la domo de la Eternulo, pro tio, ke ili agis kontraŭ Mia interligo kaj defalis de Mia instruo.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Al Mi ili vokos:Ho mia Dio, ni, Izraelidoj, ekkonis Vin.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Izrael forpuŝis la bonon; malamiko lin persekutos.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Ili starigis reĝojn, sed ne de Mi; ili starigis princojn, sed sen Mia scio; el sia arĝento kaj oro ili faris al si idolojn, por pereigi sin.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Forpuŝita estas via bovido, ho Samario; ekflamis kontraŭ ili Mia kolero; kiel longe ankoraŭ ili ne povos puriĝi?',
  },
  '6': {
    verse_nr: 6,
    verse: 'Ĉar ĝi estas faritaĵo de Izrael; artisto ĝin faris, kaj ĝi ne estas dio; dispecetiĝos la bovido de Samario.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Ĉar ili semas venton, ili rikoltos ventegon; grenon li ne havos; la kreskantaĵo ne donos farunon; se ĝi eĉ donos, fremduloj ĝin formanĝos.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Izrael estas formanĝata; nun ili fariĝis inter la popoloj kiel senvalora vazo.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Ĉar ili iris en Asirion, kiel sovaĝa azeno solece vaganta; la Efraimidoj donis amajn donacojn.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Kvankam ili donis donacojn al la nacioj, Mi nun kolektus ilin, por ke ili iom ripozu de la ŝarĝo de la reĝo de la princoj.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Sed multe da altaroj konstruis Efraim, por peki; ili fariĝis por li altaroj pekigaj.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Mi skribis por li la multon de Miaj leĝoj; sed li rigardas ilin kiel fremdaĵon.',
  },
  '13': {
    verse_nr: 13,
    verse: 'La oferojn, donacatajn al Mi, ili buĉas nur pro viando, por ĝin manĝi; la Eternulo ne deziras ilin; nun Li rememoros iliajn malbonagojn kaj punos iliajn pekojn; ili revenos en Egiptujon.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Izrael forgesis sian Kreinton, kaj konstruas palacojn; Jehuda konstruis multe da fortikigitaj urboj; sed Mi sendos fajron sur liajn urbojn, kaj ĝi ekstermos liajn palacojn.',
  },
};

export const CxapitroOk = {
  key: 'Hoŝea 8',
  chapterNum: 8,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
