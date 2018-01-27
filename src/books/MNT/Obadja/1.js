const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Vizio de Obadja.  Tiele diras la Sinjoro, la Eternulo, pri Edom: Diron ni aŭdis de la Eternulo, kaj kuriero estas sendita al la nacioj: Leviĝu, ni iru milite kontraŭ lin.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Vidu, Mi faris vin malgranda inter la nacioj; vi estas tre malestimata.',
  },
  '3': {
    verse_nr: 3,
    verse: 'La fiereco de via koro delogis vin; loĝante en la fendegoj de rokoj, sur via alta sidejo, vi diras en via koro: Kiu depuŝos min sur la teron?',
  },
  '4': {
    verse_nr: 4,
    verse: 'Sed se vi eĉ leviĝus tiel alte, kiel aglo, aŭ se vi aranĝus vian neston inter la steloj, eĉ de tie Mi ĵetos vin malsupren, diras la Eternulo.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Ĉu ŝtelistoj venis al vi, aŭ noktaj rabistoj? kiamaniere vi estas tiel ruinigita? ili ŝtelus nur tiom, kiom sufiĉus por ili. Se vinberkolektantoj venus al vi, ili restigus ja forgesitajn berojn.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Kiel forte Esav estas priserĉita kaj liaj kaŝejoj estas traesploritaj!',
  },
  '7': {
    verse_nr: 7,
    verse: 'Al la limo vin puŝis ĉiuj viaj interliganoj, trompis kaj perfortis vin viaj amikoj; la manĝantoj de via pano metis sub vin kaptilon, kiun vi eĉ ne rimarkis.',
  },
  '8': {
    verse_nr: 8,
    verse: 'En tiu tempo, diras la Eternulo, Mi pereigos ja la saĝulojn ĉe Edom kaj la prudenton sur la monto de Esav.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Ektimos viaj kuraĝuloj, ho Teman, por ke ĉiuj sur la monto de Esav estu ekstermitaj per mortigo.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Pro tio, ke vi premis vian fraton Jakob, kovros vin honto, kaj vi estos ekstermita por ĉiam.',
  },
  '11': {
    verse_nr: 11,
    verse: 'En la tempo, kiam vi staris apude, kiam fremduloj kondukis lian militistaron en kaptitecon kaj aligentuloj eniris en liajn pordegojn kaj lotis pri Jerusalem, vi ankaŭ estis kiel unu el ili.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Vi devus ne rigardi la malfeliĉan tagon de via frato, la tagon de lia forpuŝiteco, kaj vi devus ne ĝoji pri la idoj de Jehuda en la tago de ilia pereo, nek fanfaroni en la tago de ilia mizero.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Vi devus ne eniri en la pordegon de Mia popolo en la tago de ilia malfeliĉo, vi devus ne rigardi ilian suferadon en la tago de ilia malfeliĉo, nek tuŝi ilian havaĵon en la tago de ilia malfeliĉo.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Vi devus ne stari ĉe la vojdisiĝo, por ekstermi iliajn forsaviĝintojn,  nek transdoni iliajn restintojn en la tago de malfeliĉo.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Ĉar proksima estas la tago de la Eternulo kontraŭ ĉiuj nacioj. Kiel vi agis, tiel oni agos kun vi; kion vi meritas, tio venos sur vian kapon.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Ĉar kiel vi trinkis sur Mia sankta monto, tiel trinkos ĉiam ĉiuj nacioj; ili trinkos, trinkos ĝisfunde, ĝis ili fariĝos kiel tute ne ekzistintaj.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Sed sur la monto Cion estos saviĝo, kaj ĝi estos sankta; kaj la domo de Jakob ekposedos tiujn, kiuj ilin posedis.',
  },
  '18': {
    verse_nr: 18,
    verse: 'La domo de Jakob estos fajro, la domo de Jozef estos flamo; sed la domo de Esav estos pajlo, oni ekbruligos ĝin kaj ekstermos ĝin, kaj neniu restos el la domo de Esav; ĉar la Eternulo tion diris.',
  },
  '19': {
    verse_nr: 19,
    verse: 'Kaj la sudanoj ekposedos la monton de Esav, kaj la loĝantoj de la malaltaĵo la Filiŝtojn; ili ekposedos la kampojn de Efraim kaj la kampojn de Samario; kaj Benjamen posedos Gileadon.',
  },
  '20': {
    verse_nr: 20,
    verse: 'Kaj tiu multo da forkondukitaj Izraelidoj en la lando Kanaana ĝis Carfat kaj la forkondukitaj el Jerusalem en Sefarad ekposedos la urbojn sudajn.',
  },
  '21': {
    verse_nr: 21,
    verse: 'Kaj venos savantoj sur la monton Cion, por juĝi la monton de Esav. Kaj la regado apartenos al la Eternulo.',
  },
};

export const CxapitroUnu = {
  key: 'Obadja 1',
  title: 'Obadja',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
