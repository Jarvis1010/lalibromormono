const chapter = {
  '1': { verse_nr: 1, verse: 'Moab defalis de Izrael post la morto de Aĥab.' },
  '2': {
    verse_nr: 2,
    verse: 'Kaj Aĥazja elfalis tra la krado de sia supra ĉambro en Samario, kaj malsaniĝis. Kaj li sendis senditojn, kaj diris al ili:Iru, demandu Baal-  Zebubon, la dion de Ekron, ĉu mi resaniĝos de ĉi tiu malsano.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Sed anĝelo de la Eternulo diris al Elija, la Teŝebano:Leviĝu, iru renkonte al la senditoj de la reĝo de Samario, kaj diru al ili:Ĉu ne ekzistas Dio en Izrael, ke vi iras demandi Baal-Zebubon, la dion de Ekron?',
  },
  '4': {
    verse_nr: 4,
    verse: 'Pro tio tiele diras la Eternulo:De la lito, sur kiu vi kuŝiĝis, vi ne deiros, sed vi mortos. Kaj Elija foriris.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Kiam la senditoj revenis al li, li diris al ili:Kial vi revenis?',
  },
  '6': {
    verse_nr: 6,
    verse: 'Kaj ili respondis al li:Viro venis renkonte al ni, kaj diris al ni:Iru,  revenu al la reĝo, kiu sendis vin, kaj diru al li:Tiele diras la Eternulo:Ĉu ne ekzistas Dio en Izrael, ke vi sendas demandi Baal-Zebubon, la dion de Ekron? pro tio, de la lito, sur kiu vi kuŝiĝis, vi ne deiros, sed vi mortos.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Kaj li diris al ili:Kia estas la aspekto de la viro, kiu venis renkonte al vi kaj diris al vi tiujn vortojn?',
  },
  '8': {
    verse_nr: 8,
    verse: 'Ili respondis al li:Li estas homo kovrita de haroj, kaj ledan zonon li havas ĉirkaŭ siaj lumboj. Tiam li diris:Tio estas Elija, la Teŝebano.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Kaj li sendis al li kvindekestron kun lia kvindeko. Kaj tiu iris al li kaj trovis lin sidanta sur la supro de monto, kaj diris al li:Ho homo de Dio!  la reĝo diris, ke vi malsupreniru.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Kaj Elija respondis kaj diris al la kvindekestro:Se mi estas homo de Dio, tiam venu fajro el la ĉielo kaj ekstermu vin kaj vian kvindekon. Kaj venis fajro el la ĉielo kaj ekstermis lin kaj lian kvindekon.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Kaj li denove sendis al li alian kvindekestron kun lia kvindeko. Kaj tiu ekparolis kaj diris al li:Ho homo de Dio! tiele diras la reĝo:Malsupreniru rapide.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Kaj Elija respondis kaj diris al ili:Se mi estas homo de Dio, tiam venu fajro el la ĉielo kaj ekstermu vin kaj vian kvindekon. Kaj venis fajro de Dio el la ĉielo kaj ekstermis lin kaj lian kvindekon.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Kaj li denove sendis triafoje kvindekestron kun lia kvindeko. Kaj la tria kvindekestro iris, kaj venis kaj fleksis siajn genuojn antaŭ Elija, kaj ekpetegis lin kaj diris al li:Ho homo de Dio! mia animo kaj la animo de ĉi tiuj kvindek viaj servantoj havu do ian valoron antaŭ viaj okuloj.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Jen venis fajro el la ĉielo kaj ekstermis la du antaŭajn kvindekestrojn kaj iliajn kvindekojn; nun mia animo havu ian valoron antaŭ viaj okuloj.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Tiam anĝelo de la Eternulo diris al Elija:Iru kun li, ne timu lin. Kaj li leviĝis, kaj iris kun li al la reĝo.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Kaj li ekparolis al li:Tiele diras la Eternulo:Pro tio, ke vi sendis senditojn, por demandi Baal-Zebubon, la dion de Ekron, kvazaŭ ne ekzistus Dio en Izrael, por demandi Lian vorton, tial de la lito, sur kiu vi kuŝiĝis, vi ne deiros, sed vi mortos.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Kaj li mortis, konforme al la vorto de la Eternulo, kiun eldiris Elija.  Kaj anstataŭ li ekreĝis Jehoram, en la dua jaro de Jehoram, filo de Jehoŝafat, reĝo de Judujo; ĉar li ne havis filon.',
  },
  '18': {
    verse_nr: 18,
    verse: 'La cetera historio de Aĥazja, kion li faris, estas priskribita en la libro de kroniko de la reĝoj de Izrael.',
  },
};

export const CxapitroUnu = {
  key: '2 Reĝoj 1',
  title: 'La Dua Libro de Reĝoj',
  subtitle: 'Komune Nomiĝas Kvara Libro de la Reĝoj',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
