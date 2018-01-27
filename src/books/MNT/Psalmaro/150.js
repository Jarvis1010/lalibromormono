const chapter = {"1":{"verse_nr":1,"verse":"Haleluja!   Gloru Dion en Lia sanktejo,   Gloru Lin en la firmaĵo de Lia forto."},"2":{"verse_nr":2,"verse":"Gloru Lin por Liaj potencaj faroj,   Gloru Lin laŭ Lia granda majesto."},"3":{"verse_nr":3,"verse":"Gloru Lin per sonado de trumpeto,   Gloru Lin per psaltero kaj harpo."},"4":{"verse_nr":4,"verse":"Gloru Lin per tamburino kaj danco,   Gloru Lin per kordinstrumentoj kaj fluto."},"5":{"verse_nr":5,"verse":"Gloru Lin per laŭtaj cimbaloj,   Gloru Lin per tintantaj cimbaloj."},"6":{"verse_nr":6,"verse":"Ĉio spiranta gloru la Eternulon.   Haleluja!"}};

    export const CxapitroCentKvinDek = {
        key: 'Psalmaro 150',
        chapterNum: 150,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    