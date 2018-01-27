const chapter = {"1":{"verse_nr":1,"verse":"Juĝu min, ho Dio, kaj defendu mian aferon kontraŭ popolo nepia;   De homo malverema kaj maljusta savu min."},"2":{"verse_nr":2,"verse":"Ĉar Vi estas la Dio de mia forto; kial Vi forpuŝis min?   Kial mi iradas malĝoja pro la premado de la malamiko?"},"3":{"verse_nr":3,"verse":"Sendu Vian lumon kaj Vian veron, ke ili min gvidu,   Ke ili alvenigu min al Via sankta monto kaj al Via loĝejo."},"4":{"verse_nr":4,"verse":"Kaj mi venos al la altaro de Dio,   Al la Dio de mia ĝojo kaj ĝuo;   Kaj mi gloros Vin per harpo, ho Dio, mia Dio."},"5":{"verse_nr":5,"verse":"Kial vi malĝojas, ho mia animo?   Kaj kial vi konsterniĝas en mi?   Esperu al Dio;   Ĉar ankoraŭ mi dankos Lin,   La savanton de mia vizaĝo kaj mian Dion."}};

    export const CxapitroKvarDekTri = {
        key: 'Psalmaro 43',
        chapterNum: 43,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    