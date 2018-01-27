const chapter = {"1":{"verse_nr":1,"verse":"Kanto de suprenirado. Kiuj fidas la Eternulon,   Tiuj estas kiel la monto Cion,   Kiu ne ŝanceliĝas, sed restas eterne."},"2":{"verse_nr":2,"verse":"Montoj estas ĉirkaŭ Jerusalem,   Kaj la Eternulo ĉirkaŭas Sian popolon,   De nun kaj eterne."},"3":{"verse_nr":3,"verse":"Ĉar ne kuŝos la sceptro de malvirteco sur la sorto de la virtuloj;   Por ke la virtuloj ne etendu siajn manojn al maljustaĵo."},"4":{"verse_nr":4,"verse":"Bonfaru, ho Eternulo, al tiuj,   Kiuj estas bonaj kaj piaj per sia koro;"},"5":{"verse_nr":5,"verse":"Sed tiujn, kiuj dekliniĝas al siaj malrektaj vojoj,   La Eternulo pereigos kune kun la malbonaguloj.   Paco al Izrael!"}};

    export const CxapitroCentDuDekKvin = {
        key: 'Psalmaro 125',
        chapterNum: 125,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    