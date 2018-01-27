const chapter = {"1":{"verse_nr":1,"verse":"Haleluja!   Kantu al la Eternulo novan kanton,   Lian gloron en la anaro de fideluloj."},"2":{"verse_nr":2,"verse":"Izrael ĝoju pri sia Kreinto,   La filoj de Cion ĝoju pri sia Reĝo."},"3":{"verse_nr":3,"verse":"Ili gloru Lian nomon en danco,   Per tamburino kaj harpo ili muziku al Li."},"4":{"verse_nr":4,"verse":"Ĉar al la Eternulo plaĉas Lia popolo;   Li ornamas humilulojn per savo."},"5":{"verse_nr":5,"verse":"La fideluloj ĝoju en honoro,   Kantu ĝoje sur siaj kuŝejoj."},"6":{"verse_nr":6,"verse":"Glorado al Dio estas en ilia buŝo,   Kaj dutranĉa glavo en ilia mano,"},"7":{"verse_nr":7,"verse":"Por fari venĝon super la popoloj,   Punkorektadon super la gentoj;"},"8":{"verse_nr":8,"verse":"Por malliberigi iliajn reĝojn per ĉenoj  Kaj iliajn eminentulojn per feraj katenoj;"},"9":{"verse_nr":9,"verse":"Por fari super ili antaŭdestinitan juĝon.   Tio estas honoro por ĉiuj Liaj fideluloj.   Haleluja!"}};

    export const CxapitroCentKvarDekNau = {
        key: 'Psalmaro 149',
        chapterNum: 149,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    