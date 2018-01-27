const chapter = {"1":{"verse_nr":1,"verse":"Kanto de suprenirado. Nun benu la Eternulon, ĉiuj sklavoj de la Eternulo,   Kiuj en la noktoj staras en la domo de la Eternulo."},"2":{"verse_nr":2,"verse":"Levu la manojn al la sanktejo,   Kaj benu la Eternulon."},"3":{"verse_nr":3,"verse":"El Cion benu vin la Eternulo,   La Kreinto de la ĉielo kaj la tero."}};

    export const CxapitroCentTriDekKvar = {
        key: 'Psalmaro 134',
        chapterNum: 134,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    