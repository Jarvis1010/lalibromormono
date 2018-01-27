const chapter = {"1":{"verse_nr":1,"verse":"Haleluja!   Mi gloras la Eternulon per mia tuta koro,   En rondo de piuloj kaj en kunveno."},"2":{"verse_nr":2,"verse":"Grandaj estas la faroj de la Eternulo,   Serĉataj de ĉiuj, kiuj ilin amas."},"3":{"verse_nr":3,"verse":"Bela kaj majesta estas Lia verko,   Kaj Lia justeco restas eterne."},"4":{"verse_nr":4,"verse":"Memorindaj Li faris Siajn miraklojn;   Kompatema kaj favorkora estas la Eternulo."},"5":{"verse_nr":5,"verse":"Li donas manĝon al tiuj, kiuj Lin timas;   Li memoras eterne Sian interligon."},"6":{"verse_nr":6,"verse":"La potencon de Siaj fortoj Li aperigis al Sia popolo,   Doninte al ili la heredon de gentoj."},"7":{"verse_nr":7,"verse":"La faroj de Liaj manoj estas vero kaj justeco;   Perfektaj estas ĉiuj Liaj ordonoj;"},"8":{"verse_nr":8,"verse":"Ili estas fortikaj por eterne,   Faritaj per vero kaj honesto."},"9":{"verse_nr":9,"verse":"Liberigon Li sendis al Sia popolo;   Li aranĝis por ĉiam Sian interligon.   Sankta kaj respektinda estas Lia nomo."},"10":{"verse_nr":10,"verse":"Komenco de saĝeco estas timo antaŭ la Eternulo;   Bonan prudenton havas ĉiuj plenumantoj.   Lia gloro restas eterne."}};

    export const CxapitroCentDekUnu = {
        key: 'Psalmaro 111',
        chapterNum: 111,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    