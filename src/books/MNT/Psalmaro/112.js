const chapter = {"1":{"verse_nr":1,"verse":"Haleluja!   Bone estas al la homo, kiu timas la Eternulon  Kaj tre amas Liajn ordonojn."},"2":{"verse_nr":2,"verse":"Forta sur la tero estos lia semo;   La gento de virtuloj estos benita."},"3":{"verse_nr":3,"verse":"Bonstato kaj riĉeco estas en lia domo;   Kaj lia justeco restas eterne."},"4":{"verse_nr":4,"verse":"En mallumo leviĝas lumo por la virtulo.   Li estas kompatema, favorkora, kaj justa."},"5":{"verse_nr":5,"verse":"Bone estas al la homo, kiu kompatas kaj pruntedonas,   Kiu pesas siajn farojn per justeco."},"6":{"verse_nr":6,"verse":"Ĉar neniam li falos;   Virtulo estos memorata eterne."},"7":{"verse_nr":7,"verse":"Malbonan famon li ne timos;   Fortika estas lia koro, ĝi fidas la Eternulon."},"8":{"verse_nr":8,"verse":"Senŝanceliĝa estas lia koro;   Li ne timas, ĝis li vidas la pereon de siaj malamikoj."},"9":{"verse_nr":9,"verse":"Li ŝutas kaj donas al la malriĉuloj;   Lia justeco restas eterne,   Lia korno altiĝos en honoro."},"10":{"verse_nr":10,"verse":"La malvirtulo vidas kaj ĉagreniĝas,   Kunfrapas la dentojn kaj konsumiĝas.   La deziro de malvirtuloj pereos."}};

    export const CxapitroCentDekDu = {
        key: 'Psalmaro 112',
        chapterNum: 112,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    