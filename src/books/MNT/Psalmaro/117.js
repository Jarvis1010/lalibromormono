const chapter = {"1":{"verse_nr":1,"verse":"Haleluja!   Gloru la Eternulon ĉiuj popoloj,   Laŭdu Lin ĉiuj gentoj;"},"2":{"verse_nr":2,"verse":"Ĉar granda estas Lia boneco al ni,   Kaj la vero de la Eternulo restas eterne."}};

    export const CxapitroCentDekSep = {
        key: 'Psalmaro 117',
        chapterNum: 117,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    