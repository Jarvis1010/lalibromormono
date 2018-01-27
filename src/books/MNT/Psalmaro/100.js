const chapter = {"1":{"verse_nr":1,"verse":"Psalmo de dankado. Ĝoje kriu al la Eternulo la tuta tero!"},"2":{"verse_nr":2,"verse":"Servu al la Eternulo kun ĝojo,   Venu antaŭ Lian vizaĝon kun kanto."},"3":{"verse_nr":3,"verse":"Sciu, ke la Eternulo estas Dio;   Li nin kreis, kaj al Li ni apartenas,   Lia popolo kaj ŝafoj de Lia paŝtejo."},"4":{"verse_nr":4,"verse":"Eniru en Liajn pordegojn kun dankado,   En Liajn kortojn kun laŭdado.   Gloru Lin, benu Lian nomon;"},"5":{"verse_nr":5,"verse":"Ĉar la Eternulo estas bona;   Lia favorkoreco estas eterna,   Kaj de generacio al generacio daŭras Lia fideleco."}};

    export const CxapitroCent = {
        key: 'Psalmaro 100',
        chapterNum: 100,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    