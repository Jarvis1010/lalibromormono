const chapter = {"1":{"verse_nr":1,"verse":"Psalmo. Kantu al la Eternulo novan kanton,   Ĉar miraklojn Li faris;   Helpis Lin Lia dekstra mano kaj Lia sankta brako."},"2":{"verse_nr":2,"verse":"La Eternulo aperigis Sian savon;   Antaŭ la okuloj de la popoloj Li malkaŝis Sian justecon."},"3":{"verse_nr":3,"verse":"Li memoras Sian bonecon kaj Sian fidelecon al la domo de Izrael.   Vidis ĉiuj finoj de la tero la helpon de nia Dio."},"4":{"verse_nr":4,"verse":"Ĝoje kriu al la Eternulo la tuta tero;   Kantu, gloru, kaj muziku."},"5":{"verse_nr":5,"verse":"Muziku al la Eternulo per harpo,   Per harpo kaj per sonoj de psalmo."},"6":{"verse_nr":6,"verse":"Per trumpetoj kaj per sono de korno  Ĝoje kriu antaŭ la Reĝo, la Eternulo."},"7":{"verse_nr":7,"verse":"Bruu la maro, kaj ĉio, kio ĝin plenigas,   La mondo kaj ĝiaj loĝantoj."},"8":{"verse_nr":8,"verse":"La riveroj plaŭdu per la manoj,   La montoj kune kantu ĝoje,"},"9":{"verse_nr":9,"verse":"Antaŭ la Eternulo, ĉar Li venas, por juĝi la teron;   Li juĝos la mondon kun justeco kaj la popolojn kun vereco."}};

    export const CxapitroNauDekOk = {
        key: 'Psalmaro 98',
        chapterNum: 98,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    