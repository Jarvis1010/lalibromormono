const chapter = {"1":{"verse_nr":1,"verse":"Haleluja!   Gloru, sklavoj de la Eternulo,   Gloru la nomon de la Eternulo."},"2":{"verse_nr":2,"verse":"La nomo de la Eternulo estu benata  De nun kaj eterne."},"3":{"verse_nr":3,"verse":"De la leviĝejo de la suno ĝis ĝia malleviĝejo  Estas glorata la nomo de la Eternulo."},"4":{"verse_nr":4,"verse":"Alte super ĉiuj popoloj estas la Eternulo;   Super la ĉielo estas Lia gloro."},"5":{"verse_nr":5,"verse":"Kiu estas kiel la Eternulo, nia Dio,   Kiu sidas alte,"},"6":{"verse_nr":6,"verse":"Kiu kliniĝas por rigardi  La ĉielon kaj la teron,"},"7":{"verse_nr":7,"verse":"Kiu el la polvo restarigas mizerulon,   El la koto levas malriĉulon,"},"8":{"verse_nr":8,"verse":"Por sidigi lin kun eminentuloj,   Kun la eminentuloj de lia popolo?"},"9":{"verse_nr":9,"verse":"Li donas familion al senfruktulino,   Kaj faras ŝin ĝoja patrino de infanoj.   Haleluja!"}};

    export const CxapitroCentDekTri = {
        key: 'Psalmaro 113',
        chapterNum: 113,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    