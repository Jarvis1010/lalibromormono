const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'La genealogia registro de Jesuo Kristo, filo de David, filo de Abraham.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Al Abraham naskiĝis Isaak, kaj al Isaak naskiĝis Jakob, kaj al Jakob naskiĝis Jehuda kaj liaj fratoj,',
  },
  '3': {
    verse_nr: 3,
    verse: 'kaj al Jehuda naskiĝis Perec kaj Zeraĥ el Tamar, kaj al Perec naskiĝis Ĥecron, kaj al Ĥecron naskiĝis Ram,',
  },
  '4': {
    verse_nr: 4,
    verse: 'kaj al Ram naskiĝis Aminadab, kaj al Aminadab naskiĝis Naĥŝon, kaj al Naĥŝon naskiĝis Salma,',
  },
  '5': {
    verse_nr: 5,
    verse: 'kaj al Salma naskiĝis Boaz el Raĥab, kaj al Boaz naskiĝis Obed el Rut,  kaj al Obed naskiĝis Jiŝaj,',
  },
  '6': {
    verse_nr: 6,
    verse: 'kaj al Jiŝaj naskiĝis David, la reĝo.  Kaj al David naskiĝis Salomono el la edzino de Urija,',
  },
  '7': {
    verse_nr: 7,
    verse: 'kaj al Salomono naskiĝis Reĥabeam, kaj al Reĥabeam naskiĝis Abija,  kaj al Abija naskiĝis Asa,',
  },
  '8': {
    verse_nr: 8,
    verse: 'kaj al Asa naskiĝis Jehoŝafat, kaj al Jehoŝafat naskiĝis Joram, kaj al Joram naskiĝis Uzija,',
  },
  '9': {
    verse_nr: 9,
    verse: 'kaj al Uzija naskiĝis Jotam, kaj al Jotam naskiĝis Aĥaz, kaj al Aĥaz naskiĝis Ĥizkija,',
  },
  '10': {
    verse_nr: 10,
    verse: 'kaj al Ĥizkija naskiĝis Manase, kaj al Manase naskiĝis Amon, kaj al Amon naskiĝis Joŝija,',
  },
  '11': {
    verse_nr: 11,
    verse: 'kaj al Joŝija naskiĝis Jeĥonja kaj liaj fratoj, je la tempo de la transloĝiĝo en Babelon.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Kaj post la transloĝiĝo en Babelon, al Jeĥonja naskiĝis Ŝealtiel,  kaj al Ŝealtiel naskiĝis Zerubabel,',
  },
  '13': {
    verse_nr: 13,
    verse: 'kaj al Zerubabel naskiĝis Abiud, kaj al Abiud naskiĝis Eljakim, kaj al Eljakim naskiĝis Azor,',
  },
  '14': {
    verse_nr: 14,
    verse: 'kaj al Azor naskiĝis Cadok, kaj al Cadok naskiĝis Aĥim, kaj al Aĥim naskiĝis Eliud,',
  },
  '15': {
    verse_nr: 15,
    verse: 'kaj al Eliud naskiĝis Eleazar, kaj al Eleazar naskiĝis Mattan, kaj al Mattan naskiĝis Jakob,',
  },
  '16': {
    verse_nr: 16,
    verse: 'kaj al Jakob naskiĝis Jozef, edzo de Maria, el kiu estis naskita Jesuo,  kiu estas nomata Kristo.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Tial ĉiuj generacioj de Abraham ĝis David estas dek kvar generacioj,  kaj de David ĝis la transloĝiĝo en Babelon dek kvar generacioj, kaj de la transloĝiĝo en Babelon ĝis la Kristo dek kvar generacioj.',
  },
  '18': {
    verse_nr: 18,
    verse: 'Kaj la naskiĝo de Jesuo Kristo estis tiamaniere:kiam lia patrino Maria estis fianĉinigita al Jozef, antaŭ ol ili kunvenis, ŝi troviĝis graveda per la Sankta Spirito.',
  },
  '19': {
    verse_nr: 19,
    verse: 'Kaj ŝia edzo Jozef, estante justulo, kaj ne volante meti ŝin al publika malhonoro, volis ŝin sekrete forsendi.',
  },
  '20': {
    verse_nr: 20,
    verse: 'Sed kiam li pripensis tion, jen anĝelo de la Eternulo aperis al li en sonĝo, dirante:Jozef, filo de David, ne timu preni al vi vian edzinon Maria;  ĉar tio, kio naskiĝos de ŝi, estas per la Sankta Spirito.',
  },
  '21': {
    verse_nr: 21,
    verse: 'Kaj ŝi naskos filon; kaj vi nomos lin JESUO; ĉar li savos sian popolon de ĝiaj pekoj.',
  },
  '22': {
    verse_nr: 22,
    verse: 'Kaj ĉio tio okazis, por ke plenumiĝu tio, kion la Eternulo parolis per la profeto, dirante:',
  },
  '23': {
    verse_nr: 23,
    verse: 'Jen virgulino gravediĝos kaj naskos filon,   Kaj oni donos al li la nomon Emanuel;  tio estas, Dio kun ni.',
  },
  '24': {
    verse_nr: 24,
    verse: 'Kaj Jozef, leviĝinte el sia dormo, faris, kiel ordonis al li la anĝelo de la Eternulo, kaj prenis al si sian edzinon;',
  },
  '25': {
    verse_nr: 25,
    verse: 'kaj li ne ekkonis ŝin, ĝis ŝi naskis filon; kaj li donis al li la nomon JESUO.',
  },
};

export const CxapitroUnu = {
  key: 'Mateo 1',
  pretitle: 'La Evangelio laŭ',
  title: 'Sankta Mateo',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
