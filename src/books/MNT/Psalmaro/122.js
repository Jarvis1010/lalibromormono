const chapter = {"1":{"verse_nr":1,"verse":"Kanto de suprenirado. De David. Mi ekĝojis, kiam oni diris al mi:   Ni iru en la domon de la Eternulo."},"2":{"verse_nr":2,"verse":"Niaj piedoj staris en viaj pordegoj,   Ho Jerusalem,"},"3":{"verse_nr":3,"verse":"Vi Jerusalem, konstruita kiel urbo,   En kiu ĉio kuniĝis."},"4":{"verse_nr":4,"verse":"Tien supreniris la triboj, la triboj de la Eternulo,   Laŭ la moro de Izrael,   Por glori la nomon de la Eternulo."},"5":{"verse_nr":5,"verse":"Ĉar tie staris tronoj de juĝo,   Tronoj de la domo de David."},"6":{"verse_nr":6,"verse":"Deziru pacon al Jerusalem;   Bonan staton havu viaj amantoj."},"7":{"verse_nr":7,"verse":"Paco estu inter viaj muroj,   Bonstato en viaj palacoj."},"8":{"verse_nr":8,"verse":"Pro miaj fratoj kaj amikoj mi do diru:   Paco estu al vi."},"9":{"verse_nr":9,"verse":"Pro la domo de la Eternulo, nia Dio,   Mi deziras al vi bonon."}};

    export const CxapitroCentDuDekDu = {
        key: 'Psalmaro 122',
        chapterNum: 122,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    