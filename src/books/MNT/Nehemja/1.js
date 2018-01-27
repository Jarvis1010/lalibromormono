const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Vortoj de Neĥemja, filo de Ĥaĥalja.  En la monato Kislev, en la dudeka jaro, mi estis en la kastelurbo Ŝuŝan.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Kaj venis Ĥanani, unu el miaj fratoj, li kaj kelkaj viroj el Judujo. Kaj mi demandis lin pri la Judoj, kiuj saviĝis kaj restis el la forkaptitaro,  kaj pri Jerusalem.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Kaj ili diris al mi:La restintoj, kiuj restis el la forkaptitaro,  troviĝas tie en la lando en granda mizero kaj malhonoro; kaj la murego de Jerusalem estas detruita, kaj ĝiaj pordegoj estas forbruligitaj per fajro.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Kiam mi aŭdis tiujn vortojn, mi sidiĝis kaj ekploris, kaj funebris dum kelke da tagoj; kaj mi fastis kaj preĝis antaŭ Dio de la ĉielo.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Kaj mi diris:Mi petas Vin, ho Eternulo, Dio de la ĉielo, Dio granda kaj timinda, kiu konservas la interligon kaj favorkorecon al Liaj amantoj kaj al la plenumantoj de Liaj ordonoj!',
  },
  '6': {
    verse_nr: 6,
    verse: 'Via orelo estu atenta, kaj Viaj okuloj estu malfermitaj, por aŭskulti la preĝon de Via servanto, per kiu mi preĝas antaŭ Vi nun tage kaj nokte pri la Izraelidoj, Viaj servantoj, dum mi faras konfeson pri la pekoj de la Izraelidoj, kiujn ni pekis antaŭ Vi; mi kaj la domo de mia patro, ni pekis.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Ni forte pekis antaŭ Vi, kaj ni ne plenumis la ordonojn kaj la leĝojn kaj la decidojn, kiujn Vi ordonis al Moseo, Via servanto.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Sed volu rememori la vorton, kiun Vi eldiris al Via servanto Moseo,  nome:Se vi pekos, Mi disĵetos vin inter la popolojn;',
  },
  '9': {
    verse_nr: 9,
    verse: 'sed se vi returnos vin al Mi kaj konservos Miajn ordonojn kaj plenumos ilin, tiam se viaj forpelitoj eĉ estus ĉe la rando de la ĉielo, Mi eĉ de tie kolektos ilin, kaj venigos ilin sur la lokon, kiun Mi elektis, por loĝigi tie Mian nomon.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Ili estas ja Viaj servantoj, kaj Via popolo, kiun Vi liberigis per Via granda forto kaj per Via potenca mano.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Mi petas, ho Sinjoro, Via orelo estu atenta al la preĝo de Via servanto, kaj al la preĝo de Viaj servantoj, kiuj deziras timi Vian nomon;  kaj donu sukceson al Via servanto hodiaŭ, kaj akirigu al li favorkorecon antaŭ ĉi tiu homo. (Mi estis vinverŝisto ĉe la reĝo.)',
  },
};

export const CxapitroUnu = {
  key: 'Neĥemja 1',
  title: 'La Libro de Neĥemja',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
