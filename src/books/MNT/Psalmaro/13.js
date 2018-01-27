const chapter = {"1":{"verse_nr":1,"verse":"Al la ĥorestro. Psalmo de David. Ĝis kiam, ho Eternulo, Vi tute forgesos pri mi?   Ĝis kiam Vi kaŝos Vian vizaĝon antaŭ mi?"},"2":{"verse_nr":2,"verse":"Ĝis kiam mi havos zorgojn en mia animo  Kaj sopirojn en mia koro ĉiutage?   Ĝis kiam mia malamiko estos supre super mi?"},"3":{"verse_nr":3,"verse":"Rigardu kaj aŭdu min, ho Eternulo, mia Dio;   Lumigu miajn okulojn, ke mi ne ekdormu per morto;"},"4":{"verse_nr":4,"verse":"Ke ne diru mia malamiko:Mi lin venkis;   Ke ne ĝoju miaj premantoj, se mi falos."},"5":{"verse_nr":5,"verse":"Sed mi esperas al Via favorkoreco;   Mia koro ĝojas pro Via savo."},"6":{"verse_nr":6,"verse":"Mi kantos al la Eternulo,   Ĉar Li faris al mi bonon."}};

    export const CxapitroDekTri = {
        key: 'Psalmaro 13',
        chapterNum: 13,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    