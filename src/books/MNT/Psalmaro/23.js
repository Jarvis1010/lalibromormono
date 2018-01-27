const chapter = {"1":{"verse_nr":1,"verse":"Psalmo de David. La Eternulo estas mia paŝtisto; mi mankon ne havos."},"2":{"verse_nr":2,"verse":"Sur verdaj herbejoj Li ripozigas min,   Apud trankvilaj akvoj Li kondukas min."},"3":{"verse_nr":3,"verse":"Li kvietigas mian animon;   Li kondukas min laŭ vojo de la vero, pro Sia nomo."},"4":{"verse_nr":4,"verse":"Eĉ kiam mi iros tra valo de densa mallumo,   Mi ne timos malbonon, ĉar Vi estas kun mi;   Via bastono kaj apogiĝilo trankviligos min."},"5":{"verse_nr":5,"verse":"Vi kovras por mi tablon antaŭ miaj malamikoj;   Vi ŝmiris per oleo mian kapon, mia pokalo estas plenigita."},"6":{"verse_nr":6,"verse":"Nur bono kaj favoro sekvos min en la daŭro de mia tuta vivo;   Kaj mi restos en la domo de la Eternulo eterne."}};

    export const CxapitroDuDekTri = {
        key: 'Psalmaro 23',
        chapterNum: 23,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    