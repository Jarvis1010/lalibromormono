const chapter = {"1":{"verse_nr":1,"verse":"La Eternulo reĝas, tremas la popoloj;   Li sidas sur keruboj, ŝanceliĝas la tero."},"2":{"verse_nr":2,"verse":"La Eternulo estas granda en Cion,   Kaj Li estas alte super ĉiuj popoloj."},"3":{"verse_nr":3,"verse":"Oni gloru Vian grandan kaj timindan nomon:   Li estas sankta."},"4":{"verse_nr":4,"verse":"Kaj la forton de la reĝo, kiu amas justecon,   Vi fortikigis en praveco;   Juĝon kaj justecon en Jakob Vi aranĝis."},"5":{"verse_nr":5,"verse":"Altigu la Eternulon, nian Dion,   Kaj kliniĝu antaŭ la benketo de Liaj piedoj:   Li estas sankta."},"6":{"verse_nr":6,"verse":"Moseo kaj Aaron estas inter Liaj pastroj,   Kaj Samuel estas inter tiuj, kiuj vokas Lian nomon;   Ili vokis al la Eternulo, kaj Li ilin aŭskultis."},"7":{"verse_nr":7,"verse":"El nuba kolono Li parolis al ili;   Ili observis Liajn regulojn, kaj la leĝon, kiun Li donis al ili."},"8":{"verse_nr":8,"verse":"Ho Eternulo, nia Dio, Vi ilin aŭskultis;   Vi estis por ili Dio pardonanta, kvankam venĝanto por iliaj faroj."},"9":{"verse_nr":9,"verse":"Altigu la Eternulon, nian Dion,   Kaj kliniĝu antaŭ Lia sankta monto;   Ĉar sankta estas la Eternulo, nia Dio."}};

    export const CxapitroNauDekNau = {
        key: 'Psalmaro 99',
        chapterNum: 99,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    