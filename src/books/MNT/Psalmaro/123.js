const chapter = {"1":{"verse_nr":1,"verse":"Kanto de suprenirado. Al Vi mi levas miajn okulojn,   Ho Vi, kiu sidas en la ĉielo!"},"2":{"verse_nr":2,"verse":"Jen kiel la okuloj de sklavoj estas direktitaj al la mano de iliaj sinjoroj,   Kiel la okuloj de sklavino al la mano de ŝia sinjorino,   Tiel niaj okuloj estas direktitaj al la Eternulo, nia Dio,   Ĝis Li korfavoros nin."},"3":{"verse_nr":3,"verse":"Korfavoru nin, ho Eternulo, korfavoru nin;   Ĉar ni suferis sufiĉe da malestimo."},"4":{"verse_nr":4,"verse":"Tute pleniĝis nia animo  De la insultado de arogantuloj,   De la malhonorado de fieruloj."}};

    export const CxapitroCentDuDekTri = {
        key: 'Psalmaro 123',
        chapterNum: 123,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    