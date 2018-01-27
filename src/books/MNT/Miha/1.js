const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Vorto de la Eternulo, kiu aperis al Miĥa, la Moreŝetano, en la tempo de Jotam, Aĥaz, kaj Ĥizkija, reĝoj de Judujo, kaj kiun li viziis pri Samario kaj Jerusalem.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Aŭskultu, ĉiuj popoloj, atentu, ho tero, kaj ĉio, kio estas sur ĝi!  La Sinjoro, la Eternulo, estu atestanto kontraŭ vi, la Sinjoro el Sia sankta templo.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Ĉar jen la Eternulo eliras el Sia loko, iras kaj paŝas sur la altaĵoj de la tero.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Kaj fandiĝas la montoj sub Li, kaj la valoj disfendiĝas, kiel vakso antaŭ fajro, kiel akvo, falanta de krutaĵo.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Ĉio ĉi tio estas pro la krimo de Jakob kaj pro la pekoj de la domo de Izrael. Kiu krimigis Jakobon? ĉu ne Samario? Kiu aranĝis la altaĵojn de Judujo? ĉu ne Jerusalem?',
  },
  '6': {
    verse_nr: 6,
    verse: 'Tial Mi faros Samarion ŝtonamaso sur la kampo, por plantado de vinberoj;  Mi disĵetos ĝiajn ŝtonojn en la valon kaj nudigos ĝiajn fundamentojn.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Ĉiuj ĝiaj idoloj estos disbatitaj, ĉiuj ĝiaj promalĉastaj donacoj estos forbruligitaj per fajro, kaj ĉiujn ĝiajn statuojn Mi ruinigos; ĉar per promalĉastaj donacoj ĝi ilin aranĝis, kaj promalĉastaj donacoj ili fariĝos denove.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Pri tio mi ploras kaj ĝemas, iras senŝue kaj nude; mi krias plende,  kiel la ŝakaloj, kaj estas malgaja, kiel la strutoj.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Ĉar senespera estas ĝia plago, ĝi venis ĝis Judujo, atingis ĝis la pordego de mia popolo, ĝis Jerusalem.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Ne diru tion en Gat, ne ploru laŭte; en Bet-Leafra rulu vin en cindro.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Foriru, ho loĝantino de Ŝafir, en nudeco kaj honto; ne eliros la loĝantino de Caanan; la plorado en Bet-Ecel ne permesos al vi tie halti.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Afliktiĝas pri sia bono la loĝantino de Marot; ĉar malfeliĉo venis de la Eternulo al la pordego de Jerusalem.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Jungu al la ĉaro kurĉevalojn, ho loĝantino de Laĥiŝ; vi estas la komenco de pekoj de la filino de Cion, ĉar ĉe vi oni trovis la krimojn de Izrael.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Tial vi sendos donacojn en Moreŝet-Gaton; sed la domoj de Aĥzib trompos la reĝojn de Izrael.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Mi alkondukos al vi ankoraŭ la posedonton, ho loĝantino de Mareŝa;  ĝis Adulam venos la gloro de Izrael.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Detondu viajn harojn kaj razu vin pro viaj amataj filoj; larĝigu vian kalvon kiel aglo, ĉar ili estos forkaptitaj for de vi.',
  },
};

export const CxapitroUnu = {
  key: 'Miĥa 1',
  title: 'Miĥa',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
