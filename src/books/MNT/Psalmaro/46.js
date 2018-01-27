const chapter = {"1":{"verse_nr":1,"verse":"Al la ĥorestro. De la Koraĥidoj. Por sopranuloj. Kanto. Dio estas por ni rifuĝejo kaj forto,   Helpo en mizeroj, rapide trovata."},"2":{"verse_nr":2,"verse":"Tial ni ne timas, eĉ se pereus la tero  Kaj la montoj falus en la internon de la maroj."},"3":{"verse_nr":3,"verse":"Bruu, bolu Liaj akvoj,   Tremu la montoj de ilia fiera ondado.  Sela."},"4":{"verse_nr":4,"verse":"Estas rivero, kies torentoj ĝojigas la urbon de Dio,   La sanktan loĝejon de la Plejaltulo."},"5":{"verse_nr":5,"verse":"Dio estas en ĝia mezo, ĝi ne ŝanceliĝos;   Dio ĝin helpas en frua mateno."},"6":{"verse_nr":6,"verse":"Ekbruis popoloj, ekŝanceliĝis regnoj;   Li sonigis Sian voĉon, kaj la tero fandiĝis."},"7":{"verse_nr":7,"verse":"La Eternulo Cebaot estas kun ni;   Nia defendo estas la Dio de Jakob.  Sela."},"8":{"verse_nr":8,"verse":"Iru, rigardu la farojn de la Eternulo,   Kiu faris detruojn sur la tero,"},"9":{"verse_nr":9,"verse":"Kiu ĉesigas militojn ĝis la fino de la tero,   Rompas pafarkon, rompas ponardegon,   Forbruligas veturilojn per fajro."},"10":{"verse_nr":10,"verse":"Cedu, kaj sciu, ke Mi estas Dio;   Mi estas glora inter la popoloj, Mi estas glora sur la tero."},"11":{"verse_nr":11,"verse":"La Eternulo Cebaot estas kun ni;   Nia defendo estas la Dio de Jakob.  Sela."}};

    export const CxapitroKvarDekSes = {
        key: 'Psalmaro 46',
        chapterNum: 46,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    