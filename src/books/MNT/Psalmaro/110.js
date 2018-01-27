const chapter = {"1":{"verse_nr":1,"verse":"Psalmo de David. La Eternulo diris al mia sinjoro:Sidu dekstre de Mi,   Ĝis Mi faros viajn malamikojn benketo por viaj piedoj."},"2":{"verse_nr":2,"verse":"La sceptron de via potenco la Eternulo sendos el Cion:   Regu inter viaj malamikoj."},"3":{"verse_nr":3,"verse":"En la tago de via potenco via popolo volonte sin donas al vi en sankta ornamo.   De la komenco de matenruĝo aliĝas al vi la roso de via junularo."},"4":{"verse_nr":4,"verse":"La Eternulo ĵuris, kaj ne pentos;   Vi estas pastro por ĉiam,   Laŭ la maniero de Melkicedek."},"5":{"verse_nr":5,"verse":"La Sinjoro ĉe via dekstra flanko  Frapas reĝojn en la tago de Sia kolero."},"6":{"verse_nr":6,"verse":"Li juĝos inter la popoloj, inter plene da kadavroj;   Li frakasos la ĉefon de granda lando."},"7":{"verse_nr":7,"verse":"Li trinkos el rivero sur la vojo;   Tial li levos la kapon."}};

    export const CxapitroCentDek = {
        key: 'Psalmaro 110',
        chapterNum: 110,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    