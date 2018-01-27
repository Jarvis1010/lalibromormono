const chapter = {
  '1': { verse_nr: 1, verse: 'Kaj aperis vorto de la Eternulo, dirante:' },
  '2': {
    verse_nr: 2,
    verse: 'Tiele diras la Eternulo Cebaot:Mi ekfervoris pri Cion per granda fervoro,  kaj kun granda kolero Mi ekfervoris pri ĝi.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Tiele diras la Eternulo:Mi revenos al Cion, Mi ekloĝos meze de Jerusalem, kaj Jerusalem estos nomata urbo de la vero, kaj la monto de la Eternulo Cebaot, monto sankta.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Tiele diras la Eternulo Cebaot:Denove sidos maljunuloj kaj maljunulinoj sur la placoj de Jerusalem, ĉiu kun bastono en la mano, pro profundeco de la aĝo.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Kaj la stratoj de la urbo pleniĝos de infanoj kaj infaninoj, ludantaj sur ĝiaj stratoj.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Tiele diras la Eternulo Cebaot:Se en la okuloj de la restintoj de la popolo en ĉi tiu tempo tio ŝajnas ne ebla, ĉu tio estas ne ebla ankaŭ en Miaj okuloj? diras la Eternulo Cebaot.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Tiele diras la Eternulo Cebaot:Jen Mi savos Mian popolon el la lando orienta kaj el la lando okcidenta;',
  },
  '8': {
    verse_nr: 8,
    verse: 'Mi venigos ilin, kaj ili ekloĝos interne de Jerusalem; kaj ili estos Mia popolo, kaj Mi estos ilia Dio, en vero kaj justo.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Tiele diras la Eternulo Cebaot:Fortigu viajn manojn, vi, kiuj aŭdas en ĉi tiuj tagoj ĉi tiujn vortojn el la buŝo de la profetoj, en la tago, kiam estas farata fondo por la konstruado de la domo de la Eternulo Cebaot, la templo.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Ĉar antaŭ ĉi tiuj tagoj ne ekzistis rekompenco por la laboro de homo,  nek por la laboro de bruto; nek la eliranto nek la eniranto povis esti trankvila antaŭ la malamiko; kaj Mi permesis al ĉiuj homoj ataki unu la alian.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Sed nun Mi estas por la restintoj de tiu popolo ne tia, kia Mi estis antaŭe, diras la Eternulo Cebaot;',
  },
  '12': {
    verse_nr: 12,
    verse: 'ĉar estos semo de paco:la vinberbranĉo donos siajn fruktojn, la tero donos siajn produktaĵojn, la ĉielo donos sian roson, kaj ĉion ĉi tion Mi posedigos al la restintoj de ĉi tiu popolo.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Kaj kiel vi, ho domo de Jehuda kaj domo de Izrael, estis malbeno inter la nacioj, tiel Mi savos vin, kaj vi fariĝos beno; ne timu do, kaj viaj manoj fortiĝu.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Ĉar tiele diras la Eternulo Cebaot:Tiel same, kiel Mi intencis plagi vin, kiam viaj patroj Min kolerigis, diras la Eternulo Cebaot, kaj Mi ne fordecidis tion,',
  },
  '15': {
    verse_nr: 15,
    verse: 'tiel Mi returnis Min kaj intencas nun fari bonon al Jerusalem kaj al la domo de Jehuda:ne timu.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Jen estas la aferoj, kiujn vi devas fari:parolu veron unu al la alia,  veran kaj pacan juĝon faru en viaj pordegoj;',
  },
  '17': {
    verse_nr: 17,
    verse: 'ne intencu en via koro malbonon unu kontraŭ la alia, kaj ne amu mensogan ĵuron; ĉar ĉion ĉi tion Mi malamas, diras la Eternulo.',
  },
  '18': {
    verse_nr: 18,
    verse: 'Kaj aperis al mi vorto de la Eternulo Cebaot, dirante:',
  },
  '19': {
    verse_nr: 19,
    verse: 'Tiele diras la Eternulo Cebaot:La fastotago de la kvara monato kaj la fastotago de la kvina kaj la fastotago de la sepa kaj la fastotago de la deka estos por la domo de Jehuda ĝojo kaj gajeco kaj agrablaj festoj; tial amu la veron kaj la pacon.',
  },
  '20': {
    verse_nr: 20,
    verse: 'Tiele diras la Eternulo Cebaot:Venados ankoraŭ popoloj kaj loĝantoj de multaj urboj;',
  },
  '21': {
    verse_nr: 21,
    verse: 'kaj la loĝantoj de unu urbo venos al la loĝantoj de alia urbo, kaj diros:Ni iru rapide, por preĝi antaŭ la Eternulo kaj por turni nin al la Eternulo Cebaot; mi ankaŭ iros.',
  },
  '22': {
    verse_nr: 22,
    verse: 'Kaj venos multaj popoloj kaj potencaj nacioj, por serĉi la Eternulon Cebaot en Jerusalem kaj por preĝi antaŭ la Eternulo.',
  },
  '23': {
    verse_nr: 23,
    verse: 'Tiele diras la Eternulo Cebaot:En tiu tempo forte kaptos dek homoj el ĉialingvaj nacioj la baskon de Judo, kaj diros:Ni iros kun vi, ĉar ni aŭdis, ke Dio estas kun vi.',
  },
};

export const CxapitroOk = {
  key: 'Zeĥarja 8',
  chapterNum: 8,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
