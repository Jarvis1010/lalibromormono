const chapter = {"1":{"verse_nr":1,"verse":"Al la ĥorestro. De David. Ĉe la Eternulo mi rifuĝas.   Kial vi diras al mia animo:   Flugu kiel birdo sur vian monton?"},"2":{"verse_nr":2,"verse":"Ĉar jen la malbonuloj streĉis pafarkon,   Almetis sagon sian al la tendeno,   Por pafi kaŝe kontraŭ la honestajn korojn."},"3":{"verse_nr":3,"verse":"Kiam la fundamentoj estas detruitaj,   Kion povas fari la justulo?"},"4":{"verse_nr":4,"verse":"La Eternulo estas en Sia sankta templo;   La trono de la Eternulo estas en la ĉielo;   Liaj okuloj vidas, Liaj palpebroj esploras la homidojn."},"5":{"verse_nr":5,"verse":"La Eternulo elprovas justulon;   Sed malpiulon kaj perfortemulon Lia animo malamas."},"6":{"verse_nr":6,"verse":"Sur la malpiulojn Li pluvigos brulantajn karbojn, fajron kaj sulfuron;   Brula vento estos kaliko, destinita por ili."},"7":{"verse_nr":7,"verse":"Ĉar la Eternulo estas justa, Li amas justecon;   La piulo vidos Lian vizaĝon."}};

    export const CxapitroDekUnu = {
        key: 'Psalmaro 11',
        chapterNum: 11,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    