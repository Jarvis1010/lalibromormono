const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Apokalipso de Jesuo Kristo, kiun Dio donis al li, por montri al siaj servistoj tion, kio devas baldaŭ okazi; kaj Li sendis kaj montris ĝin per Sia anĝelo al Sia servisto Johano,',
  },
  '2': {
    verse_nr: 2,
    verse: 'kiu atestis la vorton de Dio kaj la ateston de Jesuo Kristo, pri ĉio,  kion li vidis.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Feliĉaj estas la leganto kaj la aŭskultantoj de la vortoj de la profetaĵo kaj la observantoj de la skribitaĵoj en ĝi; ĉar la tempo estas proksima.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Johano al la sep eklezioj en Azio:Graco al vi kaj paco de Tiu, kiu estas kaj estis kaj venos; kaj de la sep spiritoj antaŭ Lia trono;',
  },
  '5': {
    verse_nr: 5,
    verse: 'kaj de Jesuo Kristo, la fidela atestanto, la unuenaskita el la mortintoj,  kaj la reganto de la reĝoj de la tero. Al tiu, kiu nin amas, kaj nin malligis de niaj pekoj per sia sango,',
  },
  '6': {
    verse_nr: 6,
    verse: 'kaj faris nin regno, pastroj al lia Dio kaj Patro; al li la gloro kaj la potenco por ĉiam kaj eterne. Amen.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Jen li venas kun la nuboj; kaj lin vidos ĉiu okulo, kaj tiuj, kiuj lin trapikis; kaj ĉiuj gentoj de la tero ploros pro li. Vere, Amen.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Mi estas la Alfa kaj la Omega, diras la Sinjoro, la Dio, kiu estas kaj estis kaj venos, la Plejpotenca.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Mi, Johano, via frato kaj partoprenanto kun vi en la aflikto kaj regno kaj pacienco de Jesuo, estis sur la insulo nomata Patmos pro la vorto de Dio kaj la atesto de Jesuo.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Mi min trovis en la Spirito en la tago de la Sinjoro, kaj mi aŭdis malantaŭ mi grandan voĉon kvazaŭ de trumpeto,',
  },
  '11': {
    verse_nr: 11,
    verse: 'dirantan:Kion vi vidas, tion skribu en libron kaj sendu al la sep eklezioj:al Efeso kaj al Smirna kaj al Pergamo kaj al Tiatira kaj al Sardes kaj al Filadelfia kaj al Laodikea.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Kaj mi min turnis, por vidi la voĉon, kiu parolis kun mi. Kaj turniĝinte, mi vidis sep orajn lampingojn;',
  },
  '13': {
    verse_nr: 13,
    verse: 'kaj meze de la sep lampingoj iun similan al la Filo de homo, vestitan ĝispiede, kaj zonitan ĉirkaŭ la brusto per ora zono.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Kaj lia kapo kaj liaj haroj estis blankaj kiel blanka lano, kiel neĝo;  kaj liaj okuloj estis kiel fajra flamo;',
  },
  '15': {
    verse_nr: 15,
    verse: 'kaj liaj piedoj estis kiel brilanta latuno, kvazaŭ rafinita en forno;  kaj lia voĉo estis kiel voĉo de multaj akvoj.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Kaj li havis en sia dekstra mano sep stelojn; kaj el lia buŝo eliris akra dutranĉa glavo; kaj lia aspekto estis kiel brilas la suno en sia forteco.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Kaj kiam mi vidis lin, mi falis ĉe liaj piedoj kvazaŭ senviva. Kaj li metis sian dekstran manon sur min, dirante:Ne timu; mi estas la unua kaj la lasta,',
  },
  '18': {
    verse_nr: 18,
    verse: 'kaj la vivanta; kaj mi fariĝis mortinta, kaj jen, mi estas vivanta por ĉiam kaj eterne, kaj mi havas la ŝlosilojn de la morto kaj de Hades.',
  },
  '19': {
    verse_nr: 19,
    verse: 'Skribu do tion, kion vi vidis, kaj kio estas, kaj kio okazos poste;',
  },
  '20': {
    verse_nr: 20,
    verse: 'la misteron de la sep steloj, kiujn vi vidis en mia dekstra mano, kaj la sep orajn lampingojn. La sep steloj estas la anĝeloj de la sep eklezioj; kaj la sep lampingoj estas la sep eklezioj.',
  },
};

export const CxapitroUnu = {
  key: 'Apokalipso 1',
  title: 'Apokalipso',
  subtitle: 'de Sankta Johano',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
