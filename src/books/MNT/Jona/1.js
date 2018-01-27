const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Aperis vorto de la Eternulo al Jona, filo de Amitaj, dirante:',
  },
  '2': {
    verse_nr: 2,
    verse: 'Leviĝu, iru en la grandan urbon Nineve, kaj prediku kontraŭ ĝi; ĉar iliaj malbonagoj leviĝis antaŭ Min.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Sed Jona leviĝis, por forkuri de antaŭ la Eternulo en Tarŝiŝon; li iris en Jafon, trovis ŝipon, forirontan al Tarŝiŝ, pagis pro la vojaĝo,  kaj eniris en ĝin, por veturi kun ili al Tarŝiŝ, for de la Eternulo.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Sed la Eternulo sendis grandan venton sur la maron, kaj sur la maro fariĝis granda ventego, kaj oni pensis, ke la ŝipo pereos.',
  },
  '5': {
    verse_nr: 5,
    verse: 'La ŝipanoj ektimis kaj komencis voki ĉiu al sia dio; kaj la objektojn,  kiuj troviĝis en la ŝipo, oni ĵetis en la maron, por malpligrandigi la pezon. Sed Jona iris malsupren, en la internon de la ŝipo, kuŝiĝis, kaj endormiĝis.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Kaj aliris al li la ŝipestro, kaj diris al li:Kial vi dormas? leviĝu,  kaj voku al via Dio; eble Dio rememoros pri ni, kaj ni ne pereos.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Kaj oni diris unu al alia:Ni lotu, por ke ni eksciu, pro kiu trafis nin ĉi tiu malfeliĉo. Ili lotis, kaj la loto trafis Jonan.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Tiam ili diris al li:Vi, pro kiu nin trafis ĉi tiu malfeliĉo, diru al ni, per kio vi vin okupas? de kie vi venis? kie estas via lando? kaj el kiu popolo vi estas?',
  },
  '9': {
    verse_nr: 9,
    verse: 'Kaj li respondis al ili:Mi estas Hebreo:mi respektas la Eternulon, Dion de la ĉielo, kiu kreis la maron kaj la sekteron.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Tiam tiuj homoj ektimis per granda timo, kaj diris al li:Kion vi faris?  Ĉar tiuj homoj eksciis, ke li forkuris de antaŭ la Eternulo, kiel li mem diris al ili.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Kaj ili diris al li:Kion ni faru kun vi, por ke la maro kvietiĝu por ni? ĉar la maro fariĝis ĉiam pli kaj pli malkvieta.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Li respondis al ili:Prenu min, kaj ĵetu min en la maron; tiam la maro kvietiĝos por vi; ĉar mi scias, ke pro mi trafis vin ĉi tiu granda ventego.',
  },
  '13': {
    verse_nr: 13,
    verse: 'La homoj forte ekremis, por reveni sur la sekteron; sed ili nenion povis fari, ĉar la maro fariĝadis ĉiam pli kaj pli malkvieta kontraŭ ili.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Tiam ili ekvokis al la Eternulo, kaj diris:Ni petas Vin, ho Eternulo, ne do lasu nin perei pro la animo de ĉi tiu homo, kaj ne metu sur nin la sangon de senkulpulo; ĉar Vi, ho Eternulo, povas fari ĉion, kion Vi volas.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Kaj ili prenis Jonan kaj ĵetis lin en la maron; tiam la maro ĉesis koleri.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Tiam tiuj homoj eksentis grandan timon antaŭ la Eternulo; kaj ili buĉis oferon al la Eternulo kaj faris sanktajn promesojn.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Kaj la Eternulo pretigis grandan fiŝon, ke ĝi englutu Jonan; kaj Jona restis en la interno de la fiŝo dum tri tagoj kaj tri noktoj.',
  },
};

export const CxapitroUnu = {
  key: 'Jona 1',
  title: 'Jona',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
