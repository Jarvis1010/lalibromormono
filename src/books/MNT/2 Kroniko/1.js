const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Salomono, filo de David, fortikiĝis en sia regno; kaj la Eternulo, lia Dio, estis kun li kaj levis lin alte.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Kaj Salomono kunvokis la tutan Izraelon, la milestrojn kaj centestrojn,  la juĝistojn, kaj ĉiujn estrojn en la tuta Izrael, la ĉefojn de la patrodomoj.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Kaj Salomono kune kun la tuta komunumo iris al la altaĵo en Gibeon, ĉar tie estis la tabernaklo de kunveno de Dio, tiu, kiun faris Moseo, servanto de la Eternulo, en la dezerto.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Sed la keston de Dio David estis transportinta el Kirjat-Jearim sur tiun lokon, kiun David pretigis por ĝi; ĉar li aranĝis por ĝi tendon en Jerusalem.',
  },
  '5': {
    verse_nr: 5,
    verse: 'La kupra altaro, kiun faris Becalel, filo de Uri, filo de Ĥur, estis tie, antaŭ la tabernaklo de la Eternulo; kaj Salomono kaj la komunumo ĝin serĉis.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Kaj Salomono supreniris tie antaŭ la Eternulo sur la kupran altaron, kiu estis antaŭ la tabernaklo de kunveno, kaj alportis sur ĝi mil bruloferojn.',
  },
  '7': {
    verse_nr: 7,
    verse: 'En tiu nokto Dio aperis al Salomono, kaj diris al li:Petu, kion Mi donu al vi.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Kaj Salomono diris al Dio:Vi estis tre favorkora al mia patro David, kaj Vi faris min reĝo anstataŭ li;',
  },
  '9': {
    verse_nr: 9,
    verse: 'nun, ho Dio Eternulo, plenumiĝu do Via vorto al mia patro David. Ĉar Vi faris min reĝo super popolo grandnombra kiel la polvo de la tero,',
  },
  '10': {
    verse_nr: 10,
    verse: 'tial donu al mi nun saĝecon kaj sciadon, por ke mi povosciu eliradi kaj eniradi antaŭ tiu popolo; ĉar kiu povas regi tiun Vian grandan popolon?',
  },
  '11': {
    verse_nr: 11,
    verse: 'Tiam Dio diris al Salomono:Pro tio, ke ĉi tio estis en via koro, kaj vi ne petis riĉecon, nek havaĵojn, nek gloron, nek la animon de viaj malamikoj, kaj eĉ longan vivon vi ne petis, sed vi petis por vi saĝecon kaj sciadon, por regi Mian popolon, super kiu Mi faris vin reĝo:',
  },
  '12': {
    verse_nr: 12,
    verse: 'pro tio saĝeco kaj sciado estas donataj al vi; sed ankaŭ riĉecon,  havaĵojn, kaj gloron Mi donos al vi en tia grado, kiun ne havis la reĝoj antaŭ vi, kaj ankaŭ post vi oni tion ne havos.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Kaj Salomono revenis de la altaĵo en Gibeon, de la tabernaklo de kunveno, en Jerusalemon. Kaj li reĝis super Izrael.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Kaj Salomono kolektis al si ĉarojn kaj rajdistojn. Li havis mil kvarcent ĉarojn kaj dek du mil rajdistojn; kaj li lokis ilin en la urboj de ĉaroj kaj ĉe la reĝo en Jerusalem.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Kaj la reĝo atingis tion, ke la arĝento kaj oro estis en Jerusalem kiel ŝtonoj, kaj la cedroj estis en tiel granda kvanto, kiel la sikomoroj sur la malaltaj lokoj.',
  },
  '16': {
    verse_nr: 16,
    verse: 'La ĉevalojn al Salomono oni venigadis el Egiptujo; kaj societo de komercistoj de la reĝo aĉetadis ilin amase laŭ difinita prezo.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Ili liveradis el Egiptujo ĉiun ĉaron pro sescent sikloj da arĝento,  kaj ĉiun ĉevalon pro cent kvindek; tiel same ili estis liverataj per iliaj manoj al ĉiuj reĝoj de la Ĥetidoj kaj al la reĝoj de Sirio.',
  },
};

export const CxapitroUnu = {
  key: '2 Kroniko 1',
  title: 'La Dua Libro de Kronikoj',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
