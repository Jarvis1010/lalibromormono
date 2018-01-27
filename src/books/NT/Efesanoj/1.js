const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Paŭlo, apostolo de Jesuo Kristo per la volo de Dio, al la sanktuloj,  kiuj estas en Efeso, kaj al la fideluloj en Kristo Jesuo:',
  },
  '2': {
    verse_nr: 2,
    verse: 'Graco estu al vi kaj paco de Dio, nia Patro, kaj de la Sinjoro Jesuo Kristo.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Benata estu la Dio kaj Patro de nia Sinjoro Jesuo Kristo, kiu benis nin per ĉia beno spirita en la ĉielejoj en Kristo;',
  },
  '4': {
    verse_nr: 4,
    verse: 'kiel Li elektis nin en li antaŭ la fondo de la mondo, por ke ni estu sanktaj kaj senmakulaj antaŭ Li en amo;',
  },
  '5': {
    verse_nr: 5,
    verse: 'antaŭdestininte nin por filadopto per Jesuo Kristo al Si mem, laŭ la aprobo de Sia volo,',
  },
  '6': {
    verse_nr: 6,
    verse: 'al la laŭdo de la gloro de Lia graco, per kiu Li favoris nin en la Amata;',
  },
  '7': {
    verse_nr: 7,
    verse: 'en kiu ni havas la elaĉeton per lia sango, la pardonon de niaj pekoj,  laŭ la riĉo de lia graco,',
  },
  '8': {
    verse_nr: 8,
    verse: 'kiun li abundigis al ni en ĉia saĝeco kaj prudento,',
  },
  '9': {
    verse_nr: 9,
    verse: 'sciiginte al ni la misteron de Lia volo, laŭ Lia bonvolo, kiun Li antaŭdecidis en li,',
  },
  '10': {
    verse_nr: 10,
    verse: 'por dispono en la pleneco de la tempo, por sumigi en Kristo ĉion, kio estas en la ĉieloj kaj sur la tero;',
  },
  '11': {
    verse_nr: 11,
    verse: 'en li, en kiu ni fariĝis heredaĵo, destinite laŭ la antaŭdecido de Tiu, kiu ĉion faras laŭ la intenco de Sia volo;',
  },
  '12': {
    verse_nr: 12,
    verse: 'por ke ni estu por la laŭdo de Lia gloro, ni, kiuj antaŭe esperis en Kristo;',
  },
  '13': {
    verse_nr: 13,
    verse: 'en kiu vi ankaŭ esperas, aŭdinte la vorton de la vero, la evangelion de via savo; al kiu ankaŭ kredinte, vi estas sigelitaj per la Sankta Spirito de promeso,',
  },
  '14': {
    verse_nr: 14,
    verse: 'kiu estas antaŭgarantiaĵo de nia heredaĵo, por la elaĉeto de la posedaĵo, por laŭdo de Lia gloro.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Pro tio mi ankaŭ, aŭdinte pri via fido al la Sinjoro Jesuo, kaj via amo al ĉiuj sanktuloj,',
  },
  '16': {
    verse_nr: 16,
    verse: 'ne ĉesas danki pro vi, vin nomante en miaj preĝoj;',
  },
  '17': {
    verse_nr: 17,
    verse: 'por ke la Dio de nia Sinjoro Jesuo Kristo, la Patro de gloro, donu al vi spiriton de saĝeco kaj malkaŝo en la konado de Li;',
  },
  '18': {
    verse_nr: 18,
    verse: 'dum la okuloj de via koro estas lumigataj, por ke vi sciu, kia estas la espero de Lia voko, kaj kia la riĉeco de la gloro de Lia heredaĵo en la sanktuloj,',
  },
  '19': {
    verse_nr: 19,
    verse: 'kaj kia la supermezura grandeco de Lia potenco al ni, kiuj kredas, laŭ la energio de la efikeco de Lia forto,',
  },
  '20': {
    verse_nr: 20,
    verse: 'kiun Li faris en Kristo, relevante lin el la mortintoj, kaj sidigante lin dekstre de Li en la ĉieloj,',
  },
  '21': {
    verse_nr: 21,
    verse: 'multe super ĉiu reganto kaj aŭtoritato kaj potenco kaj regeco, kaj ĉiu nomo nomata, ne nur en ĉi tiu mondo, sed ankaŭ en la estonta;',
  },
  '22': {
    verse_nr: 22,
    verse: 'kaj ĉion Li metis sub liajn piedojn, kaj donis lin kiel kapon super ĉio por la eklezio,',
  },
  '23': {
    verse_nr: 23,
    verse: 'kiu estas lia korpo, la pleneco de Tiu, kiu plenigas ĉion en ĉio.',
  },
};

export const CxapitroUnu = {
  key: 'Efesanoj 1',
  pretitle: 'La Epistolo de La Apostolo Paŭlo al La',
  title: 'Efesanoj',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
