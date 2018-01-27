const chapter = {"1":{"verse_nr":1,"verse":"Kanto de suprenirado. Feliĉa estas tiu, kiu timas la Eternulon  Kaj iras laŭ Liaj vojoj."},"2":{"verse_nr":2,"verse":"Kiam vi manĝas la laborakiron de viaj manoj,   Feliĉe kaj bone estas al vi."},"3":{"verse_nr":3,"verse":"Via edzino estas kiel fruktoporta vinberbranĉo interne en via domo;   Viaj filoj estas kiel olivaj branĉoj ĉirkaŭ via tablo."},"4":{"verse_nr":4,"verse":"Jen tiel estas benata tiu homo,   Kiu timas la Eternulon."},"5":{"verse_nr":5,"verse":"Benos vin la Eternulo el Cion,   Kaj vi vidos la bonstaton de Jerusalem en la daŭro de via tuta vivo."},"6":{"verse_nr":6,"verse":"Kaj vi vidos la infanojn de viaj infanoj.   Paco al Izrael!"}};

    export const CxapitroCentDuDekOk = {
        key: 'Psalmaro 128',
        chapterNum: 128,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    