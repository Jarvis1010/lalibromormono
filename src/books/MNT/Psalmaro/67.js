const chapter = {"1":{"verse_nr":1,"verse":"Al la ĥorestro. Por kordaj instrumentoj. Psalmo-kanto. Dio nin korfavoru kaj benu;   Li aperigu al ni Sian luman vizaĝon.  Sela."},"2":{"verse_nr":2,"verse":"Oni ekkonu sur la tero Vian vojon,   En ĉiuj popoloj Vian savon."},"3":{"verse_nr":3,"verse":"Danku Vin popoloj, ho Dio,   Danku Vin ĉiuj popoloj."},"4":{"verse_nr":4,"verse":"Ĝoju kaj kantu gentoj,   Ĉar Vi juĝas popolojn juste,   Kaj gentojn sur la tero Vi regas.  Sela."},"5":{"verse_nr":5,"verse":"Danku Vin popoloj, ho Dio,   Danku Vin ĉiuj popoloj."},"6":{"verse_nr":6,"verse":"La tero donis sian frukton;   Benos nin Dio, nia Dio."},"7":{"verse_nr":7,"verse":"Benos nin Dio;   Kaj respektu Lin ĉiuj limoj de la tero."}};

    export const CxapitroSesDekSep = {
        key: 'Psalmaro 67',
        chapterNum: 67,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    