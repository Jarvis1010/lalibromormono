const chapter = {"1":{"verse_nr":1,"verse":"Kanto de suprenirado. De David. Se la Eternulo ne estus kun ni,   Diru nun Izrael,"},"2":{"verse_nr":2,"verse":"Se la Eternulo ne estus kun ni,   Kiam homoj leviĝis kontraŭ ni:"},"3":{"verse_nr":3,"verse":"Tiam ili englutus nin vivajn,   Kiam ekflamis kontraŭ ni ilia kolero;"},"4":{"verse_nr":4,"verse":"Tiam dronigus nin akvo, torento kovrus nian animon;"},"5":{"verse_nr":5,"verse":"Tiam kovrus nian animon pereiga akvo."},"6":{"verse_nr":6,"verse":"Benata estu la Eternulo,   Kiu ne fordonis nin kiel rabakiron al iliaj dentoj."},"7":{"verse_nr":7,"verse":"Nia animo liberiĝis, kiel birdo el la reto de kaptistoj;   La reto disŝiriĝis, kaj ni liberiĝis."},"8":{"verse_nr":8,"verse":"Nia helpo estas en la nomo de la Eternulo,   Kiu kreis la ĉielon kaj la teron."}};

    export const CxapitroCentDuDekKvar = {
        key: 'Psalmaro 124',
        chapterNum: 124,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    