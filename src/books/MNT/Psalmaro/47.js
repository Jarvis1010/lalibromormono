const chapter = {"1":{"verse_nr":1,"verse":"Al la ĥorestro. De la Koraĥidoj. Psalmo. Ĉiuj popoloj, plaŭdu per la manoj,   Kriu al Dio per voĉo de kanto."},"2":{"verse_nr":2,"verse":"Ĉar la Eternulo Plejalta estas timinda;   Li estas granda Reĝo super la tuta tero."},"3":{"verse_nr":3,"verse":"Li subigas al ni popolojn  Kaj metas gentojn sub niajn piedojn."},"4":{"verse_nr":4,"verse":"Li elektas por ni nian heredon,   La majeston de Jakob, kiun Li amas.  Sela."},"5":{"verse_nr":5,"verse":"Dio supreniras ĉe sonoj de ĝojo,   La Eternulo ĉe trumpetado."},"6":{"verse_nr":6,"verse":"Kantu al Dio, kantu!   Kantu al nia Reĝo, kantu!"},"7":{"verse_nr":7,"verse":"Ĉar Dio estas la Reĝo de la tuta tero:   Kantu edifan kanton!"},"8":{"verse_nr":8,"verse":"Dio reĝas super la popoloj;   Dio sidas sur Sia sankta trono."},"9":{"verse_nr":9,"verse":"La princoj de la popoloj kolektiĝis,   La popolo de la Dio de Abraham;   Ĉar al Dio apartenas la ŝildoj de la tero;   Li estas tre alta."}};

    export const CxapitroKvarDekSep = {
        key: 'Psalmaro 47',
        chapterNum: 47,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    