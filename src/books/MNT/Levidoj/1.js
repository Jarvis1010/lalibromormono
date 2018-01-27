const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'La Eternulo vokis Moseon, kaj ekparolis al li el la tabernaklo de kunveno, dirante:',
  },
  '2': {
    verse_nr: 2,
    verse: 'Parolu al la Izraelidoj, kaj diru al ili:Se iu el vi volas alporti oferon al la Eternulo, el la brutoj, el la bovoj, kaj el la ŝafoj alportu vian oferon.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Se lia ofero estas brulofero el bovoj, li oferu virseksulon sendifektan;  al la pordo de la tabernaklo de kunveno li alkonduku ĝin, por favorigi al si la Eternulon.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Kaj li metu sian manon sur la kapon de la brulofero, kaj li akiros favoron kaj pekpardonon.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Kaj li buĉu la bovidon antaŭ la Eternulo; kaj la filoj de Aaron, la pastroj, alportu la sangon kaj aspergu per la sango ĉirkaŭe la altaron, kiu estas ĉe la pordo de la tabernaklo de kunveno.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Kaj oni senfeligu la bruloferon kaj dishaku ĝin en pecojn.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Kaj la filoj de la pastro Aaron metu fajron sur la altaron kaj metu lignon sur la fajron.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Kaj la filoj de Aaron, la pastroj, metu la pecojn, la kapon, kaj la grason, sur la lignon, kiu estas sur la fajro sur la altaro.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Kaj la internaĵon kaj la krurojn oni lavu per akvo; kaj la pastro forbruligu ĉion sur la altaro kiel bruloferon; ĝi estas fajrofero, agrabla odoraĵo al la Eternulo.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Kaj se lia ofero estas el la malgrandaj brutoj, el la ŝafoj aŭ el la kaproj, brulofero, li alportu ĝin virseksan, sendifektan.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Kaj li buĉu ĝin sur la norda flanko de la altaro antaŭ la Eternulo;  kaj la filoj de Aaron, la pastroj, aspergu per ĝia sango la altaron ĉirkaŭe.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Kaj oni dishaku ĝin en pecojn, apartiginte la kapon kaj la grason, kaj la pastro metu ilin sur la lignon, kiu estas sur la fajro sur la altaro.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Kaj la internaĵon kaj la krurojn oni lavu per akvo; kaj la pastro ĉion alportu kaj forbruligu sur la altaro kiel bruloferon; ĝi estas fajrofero,  agrabla odoraĵo al la Eternulo.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Kaj se el la birdoj estas lia brulofero al la Eternulo, li alportu sian oferon el turtoj aŭ el kolombidoj.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Kaj la pastro alportu ĝin al la altaro kaj fortordu ĝian kapon kaj forbruligu ĝin sur la altaro kaj elfluigu ĝian sangon super la muro de la altaro.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Kaj ĝian kropon kun ĝiaj plumoj li forigu kaj ĵetu ĝin apud la altaron sur la orientan flankon en la cindrejon.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Kaj li disfendu ĝiajn flugilojn, sed ne derompu; kaj la pastro forbruligu ĝin sur la altaro, sur la ligno, kiu estas sur la fajro; ĝi estas brulofero, fajrofero, agrabla odoraĵo al la Eternulo.',
  },
};

export const CxapitroUnu = {
  key: 'Levidoj 1',
  title: 'Levido',
  pretitle: 'La Tria Libro de Moseo Nomiĝas',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
