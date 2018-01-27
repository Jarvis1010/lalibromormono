const chapter = {"1":{"verse_nr":1,"verse":"Ekparolis Bildad, la Ŝuĥano, kaj diris:"},"2":{"verse_nr":2,"verse":"Regado kaj timigo estas ĉe Li,   Kiu faras pacon en Siaj altaj sferoj."},"3":{"verse_nr":3,"verse":"Ĉu oni povas kalkuli Liajn taĉmentojn?   Kaj super kiu ne leviĝas Lia lumo?"},"4":{"verse_nr":4,"verse":"Kiel povas homo esti prava antaŭ Dio?   Kaj kiel naskito de virino povas esti pura?"},"5":{"verse_nr":5,"verse":"Vidu, eĉ la luno ne estas hela  Kaj la steloj ne estas puraj antaŭ Liaj okuloj:"},"6":{"verse_nr":6,"verse":"Des pli homo, la vermo!   Kaj homido, la tineo!"}};

    export const CxapitroDuDekKvin = {
        key: 'Ijob 25',
        chapterNum: 25,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    