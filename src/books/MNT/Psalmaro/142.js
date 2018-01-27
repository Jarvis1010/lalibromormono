const chapter = {"1":{"verse_nr":1,"verse":"Instruo de David, kiam li estis en la kaverno. Preĝo. Per mia voĉo mi krias al la Eternulo,   Per mia voĉo mi preĝas al la Eternulo."},"2":{"verse_nr":2,"verse":"Mi elverŝas antaŭ Li mian peton,   Mian suferon mi al Li rakontas."},"3":{"verse_nr":3,"verse":"Kiam senfortiĝis en mi mia spirito, tiam Vi sciis mian vojon:   Sur la vojo, kiun mi iras, ili kaŝis reton por mi."},"4":{"verse_nr":4,"verse":"Rigardu dekstren kaj vidu:neniu volas min koni;   Malaperis rifuĝejo por mi, neniu zorgas pri mia animo."},"5":{"verse_nr":5,"verse":"Mi krias al Vi, ho Eternulo;   Mi diras:Vi estas mia rifuĝejo,   Mia parto en la lando de la vivantoj."},"6":{"verse_nr":6,"verse":"Atentu mian ploron, ĉar mi tre senfortiĝis;   Savu min de miaj persekutantoj, ĉar ili estas pli fortaj ol mi."},"7":{"verse_nr":7,"verse":"Eligu mian animon el malliberejo, por ke mi gloru Vian nomon.   Min ĉirkaŭos la virtuloj, kiam Vi bonfaros al mi."}};

    export const CxapitroCentKvarDekDu = {
        key: 'Psalmaro 142',
        chapterNum: 142,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    