const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Paŭlo kaj Silvano kaj Timoteo al la eklezio de la Tesalonikanoj en Dio,  la Patro, kaj la Sinjoro Jesuo Kristo:Graco al vi kaj paco.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Ni ĉiam dankas Dion pri vi ĉiuj, memorigante pri vi en niaj preĝoj;',
  },
  '3': {
    verse_nr: 3,
    verse: 'memorante senĉese vian laboron de fido kaj penadon de amo kaj paciencon de espero al nia Sinjoro Jesuo Kristo, antaŭ nia Dio kaj Patro;',
  },
  '4': { verse_nr: 4, verse: 'sciante, fratoj, amataj de Dio, vian elekton,' },
  '5': {
    verse_nr: 5,
    verse: 'ĉar nia evangelio venis al vi ne nur parole, sed ankaŭ kun potenco kaj kun la Sankta Spirito kaj plena certigo; vi scias, kiaj homoj ni ĉe vi montriĝis pro vi.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Kaj vi fariĝis imitantoj de ni kaj de la Sinjoro, ricevinte la vorton en multe da aflikto, kun ĝojo de la Sankta Spirito;',
  },
  '7': {
    verse_nr: 7,
    verse: 'tiel, ke vi fariĝis modelo por ĉiuj kredantoj en Makedonujo kaj en la Aĥaja lando.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Ĉar de vi la vorto de la Sinjoro estas diseĥita ne nur en Makedonujo kaj la Aĥaja lando, sed en ĉiu loko via fido al Dio disvastiĝis, tiel, ke ni ne bezonas diri ion.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Ĉar ili mem pri ni rakontas, kian alvenon ni havis ĉe vi; kaj kiel vi vin turnis al Dio for de idoloj, por servi vivantan kaj veran Dion,',
  },
  '10': {
    verse_nr: 10,
    verse: 'kaj atendi Lian Filon el la ĉielo, la Filon, kiun Li levis el la mortintoj, Jesuon, kiu nin savas de la estonta kolerego.',
  },
};

export const CxapitroUnu = {
  key: '1 Tesalonikanoj 1',
  pretitle: 'La Unua Epistolo de La Apostolo Paŭlo al La',
  title: 'Tesalonikanoj',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
