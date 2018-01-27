const chapter = {"1":{"verse_nr":1,"verse":"Kanto de suprenirado. Multe oni afliktis min de post mia juneco,   Diras Izrael,"},"2":{"verse_nr":2,"verse":"Multe oni afliktis min de post mia juneco,   Sed oni min ne pereigis."},"3":{"verse_nr":3,"verse":"Sur mia dorso plugis plugistoj,   Faris siajn sulkojn longaj."},"4":{"verse_nr":4,"verse":"La Eternulo estas justa;   Li dishakis la ŝnurojn de la malvirtuloj."},"5":{"verse_nr":5,"verse":"Hontiĝu kaj turniĝu malantaŭen  Ĉiuj malamantoj de Cion."},"6":{"verse_nr":6,"verse":"Ili estu kiel tegmenta herbo,   Kiu forvelkas, antaŭ ol oni ĝin elŝiris;"},"7":{"verse_nr":7,"verse":"Per kiu ne plenigas rikoltanto sian manon  Nek garbiganto sian baskon."},"8":{"verse_nr":8,"verse":"Kaj la preterirantoj ne diros:   Beno de la Eternulo estu al vi,   Ni benas vin per la nomo de la Eternulo."}};

    export const CxapitroCentDuDekNau = {
        key: 'Psalmaro 129',
        chapterNum: 129,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    