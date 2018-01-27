const chapter = {"1":{"verse_nr":1,"verse":"De la Koraĥidoj. Psalmo-kanto. Lia fundamento estas sur la sanktaj montoj."},"2":{"verse_nr":2,"verse":"La Eternulo amas la pordegojn de Cion  Pli ol ĉiujn loĝejojn de Jakob."},"3":{"verse_nr":3,"verse":"Gloraĵojn Li rakontas pri vi, ho urbo de Dio.  Sela."},"4":{"verse_nr":4,"verse":"Mi parolas al miaj konatoj pri Egiptujo kaj Babel,   Ankaŭ pri Filiŝtujo kaj Tiro kun Etiopujo:   Jen tiu tie naskiĝis."},"5":{"verse_nr":5,"verse":"Sed pri Cion oni diras:Tiu kaj tiu tie naskiĝis,   Kaj Li, la Plejaltulo, ĝin fortikigas."},"6":{"verse_nr":6,"verse":"La Eternulo notos, enskribante la popolojn:   Ĉi tiu tie naskiĝis.  Sela."},"7":{"verse_nr":7,"verse":"Kaj la kantistoj kaj muzikistoj:   Ĉiuj miaj fontoj estas en Vi."}};

    export const CxapitroOkDekSep = {
        key: 'Psalmaro 87',
        chapterNum: 87,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    