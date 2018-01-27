const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Kaj aperis al mi vorto de la Eternulo, dirante:',
  },
  '2': {
    verse_nr: 2,
    verse: 'Ho filo de homo! por kio taŭgas la ligno de vinberbranĉo inter ĉiuj branĉoriĉaj arboj, kiuj estas inter la arboj de arbaro?',
  },
  '3': {
    verse_nr: 3,
    verse: 'Ĉu oni prenas de ĝi pecon, por ion fari el ĝi? ĉu oni faras el ĝi almenaŭ hokon, por pendigi sur ĝi ian objekton?',
  },
  '4': {
    verse_nr: 4,
    verse: 'Jen ĝi estas transdonata al la fajro por forbruligo; ambaŭ finojn formanĝas la fajro, forbrulas ankaŭ la mezo; ĉu ĝi taŭgas por laboro?',
  },
  '5': {
    verse_nr: 5,
    verse: 'Jen, kiam ĝi estis ankoraŭ nedifektita, oni ne povis ion fari el ĝi;  des pli kiam la fajro ĝin difektis kaj bruligis, ĉu oni povas ion fari el ĝi?',
  },
  '6': {
    verse_nr: 6,
    verse: 'Tial tiele diras la Sinjoro, la Eternulo:Kiel la vinberarbon inter la arboj de la arbaro Mi transdonis al la fajro, ke ĝi ĝin forbruligu, tiel Mi agos kun la loĝantoj de Jerusalem.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Mi direktos Mian vizaĝon kontraŭ ilin; el fajro ili eliris, kaj fajro ilin ekstermos; kaj vi ekscios, ke Mi estas la Eternulo, kiam Mi direktos Mian vizaĝon kontraŭ ilin.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Kaj Mi faros la landon dezerto pro tio, ke ili forte kulpiĝis, diras la Sinjoro, la Eternulo.',
  },
};

export const CxapitroDekKvin = {
  key: 'Jeĥezkel 15',
  chapterNum: 15,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
