const chapter = {"1":{"verse_nr":1,"verse":"En tiu tago vi diros:Mi dankas Vin, ho Eternulo; ĉar kvankam Vi koleris min, Via kolero jam foriĝis, kaj Vi konsolas min."},"2":{"verse_nr":2,"verse":"Jen Dio estas mia savo:mi fidas, kaj mi ne timas; ĉar Dio, la Eternulo,  estas mia forto kaj mia kanto, kaj Li fariĝis mia savo."},"3":{"verse_nr":3,"verse":"Kaj vi ĉerpos kun ĝojo akvon el la fontoj de la savo."},"4":{"verse_nr":4,"verse":"Kaj vi diros en tiu tago:Danku la Eternulon, voku Lian nomon, sciigu Liajn farojn inter la popoloj, memorigu, ke Lia nomo estas alta."},"5":{"verse_nr":5,"verse":"Kantu al la Eternulo, ĉar majestaĵon Li faris; tio estu sciata sur la tuta tero."},"6":{"verse_nr":6,"verse":"Ĝojkriu kaj kantu, loĝantino de Cion; ĉar granda estas inter vi la Sanktulo de Izrael."}};

    export const CxapitroDekDu = {
        key: 'Jesaja 12',
        chapterNum: 12,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    