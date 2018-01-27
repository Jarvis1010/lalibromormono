const chapter = {"1":{"verse_nr":1,"verse":"Kanto de suprenirado. De David. Jen, kiel bone kaj ĉarme estas,   Se fratoj vivas kune!"},"2":{"verse_nr":2,"verse":"Kiel la bona oleo,   Kiu de la kapo defluas sur la barbon, la barbon de Aaron,   Kaj defluas sur la randon de lia vesto;"},"3":{"verse_nr":3,"verse":"Kiel la roso,   Kiu de Ĥermon malleviĝas sur la montojn de Cion;   Ĉar tie la Eternulo donas la benon,   Vivon por eterne."}};

    export const CxapitroCentTriDekTri = {
        key: 'Psalmaro 133',
        chapterNum: 133,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    