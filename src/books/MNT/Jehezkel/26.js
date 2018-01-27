const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'En la dek-unua jaro, en la unua tago de la monato, aperis al mi vorto de la Eternulo, dirante:',
  },
  '2': {
    verse_nr: 2,
    verse: 'Ho filo de homo! pro tio, ke Tiro diras pri Jerusalem:Ha, ha! ĝi estas frakasita, la pordo de la popoloj, ĝi turnas sin al mi, mi pleniĝos de ĝia dezertiĝo-',
  },
  '3': {
    verse_nr: 3,
    verse: 'pro tio tiele diras la Sinjoro, la Eternulo:Jen Mi iras kontraŭ vin, ho Tiro, kaj Mi levos kontraŭ vin multe da nacioj, kiel maro levas siajn ondojn.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Kaj ili detruos la muregojn de Tiro kaj disrompos ĝiajn turojn; kaj Mi forbalaos de ĝi ĝian polvon, kaj Mi faros ĝin nuda roko.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Loko por sternado de retoj ĝi fariĝos meze de la maro, ĉar Mi tion parolis, diras la Sinjoro, la Eternulo; kaj ĝi fariĝos rabaĵo por la nacioj.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Kaj ĝiaj filinoj, kiuj estas sur la kampo, estos mortigitaj per glavo;  kaj ili ekscios, ke Mi estas la Eternulo.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Ĉar tiele diras la Sinjoro, la Eternulo:Jen Mi venigos kontraŭ Tiron de norde Nebukadnecaron, reĝon de Babel, la reĝon de reĝoj, kun ĉevaloj,  ĉaroj, kaj rajdistoj, kun homamaso kaj multe da popolo.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Viajn filinojn sur la kampo li mortigos per glavo; li faros kontraŭ vi bastionojn, li ŝutaranĝos ĉirkaŭ vi remparojn, kaj starigos kontraŭ vi siajn ŝildojn;',
  },
  '9': {
    verse_nr: 9,
    verse: 'kaj li starigos siajn muregrompilojn kontraŭ viaj muregoj, kaj viajn turojn li detruos per siaj hakiloj.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Pro la multo de siaj ĉevaloj li kovros vin per polvo; de la bruo de la rajdistoj, radoj, kaj ĉaroj ektremos viaj muregoj, kiam li eniros en viajn pordegojn, kiel oni eniras en urbon trarompitan.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Per la hufoj de siaj ĉevaloj li dispremos ĉiujn viajn stratojn; vian popolon li mortigos per glavo, kaj la monumentojn de via forto li ĵetos sur la teron.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Ili disrabos vian havon kaj diskaptos viajn komercaĵojn; ili detruos viajn murojn, ili disrompos viajn belajn domojn; viajn ŝtonojn, vian lignon,  kaj vian teron ili ĵetos en la akvon.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Mi ĉesigos la laŭtan sonadon de viaj kantoj, kaj la voĉo de viaj harpoj ne plu estos aŭdata.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Mi faros vin nuda roko; vi fariĝos loko por sternado de retoj, vi ne plu estos rekonstruata; ĉar Mi, la Eternulo, tion parolis, diras la Sinjoro,  la Eternulo.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Tiele diras la Sinjoro, la Eternulo, pri Tiro:Vere, de la bruo de via falado, de la ĝemado de viaj vunditoj, kiam meze de vi estos farata mortigado, ektremos la insuloj.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Kaj malsupreniros de siaj tronoj ĉiuj princoj de la maro, ili demetos de si sian purpuron kaj siajn broditajn vestojn; timo ilin atakos; ili sidiĝos sur la tero, tremos ĉiuminute, kaj eksentos teruron pro vi.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Kaj ili ekkantos pri vi funebran kanton, kaj diros pri vi:Kiele vi pereis, vi, loĝata de maristoj, glora urbo, kiu estis forta sur la maro, ĝi kaj ĝiaj loĝantoj, kiuj ĵetadis timon sur ĉiujn loĝantojn de la mara regiono!',
  },
  '18': {
    verse_nr: 18,
    verse: 'Nun ektremos la maraj regionoj en la tago de via falo, kaj la insuloj sur la maro konsterniĝos pro via finiĝo.',
  },
  '19': {
    verse_nr: 19,
    verse: 'Ĉar tiele diras la Sinjoro, la Eternulo:Kiam Mi faros vin urbo dezerta simila al la urboj neloĝataj, kiam Mi levos sur vin la abismon kaj granda akvo vin kovros,',
  },
  '20': {
    verse_nr: 20,
    verse: 'tiam Mi mallevos vin al tiuj, kiuj iris en la tombon, al la popolo eterna, kaj Mi puŝos vin en la profundon subteran, en la eternan dezerton,  al tiuj, kiuj iris en la tombon, por ke vi ne plu estu loĝata; tiam Mi restarigos belecon sur la tero de la vivantoj.',
  },
  '21': {
    verse_nr: 21,
    verse: 'Mi neniigos vin, kaj vi ne plu ekzistos; oni serĉos vin, sed ne plu trovos en eterneco, diras la Sinjoro, la Eternulo.',
  },
};

export const CxapitroDuDekSes = {
  key: 'Jeĥezkel 26',
  chapterNum: 26,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
