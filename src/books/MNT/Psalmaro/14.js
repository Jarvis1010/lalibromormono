const chapter = {"1":{"verse_nr":1,"verse":"Al la ĥorestro. De David. La sensaĝulo diris en sia koro:Dio ne ekzistas.   Ili sentaŭgiĝis, ili abomeniĝis pro siaj faroj;   Ekzistas neniu, kiu faras bonon."},"2":{"verse_nr":2,"verse":"La Eternulo el la ĉielo ekrigardis la homidojn,   Por vidi, ĉu ekzistas prudentulo, kiu serĉas Dion."},"3":{"verse_nr":3,"verse":"Ĉiuj devojiĝis, ĉiuj malvirtiĝis;   Ekzistas neniu, faranta bonon, ne ekzistas eĉ unu."},"4":{"verse_nr":4,"verse":"Ĉu ne prudentiĝos ĉiuj, kiuj faras malbonon,   Kiuj manĝas mian popolon, kiel oni manĝas panon,   Kaj kiuj ne vokas al la Eternulo?"},"5":{"verse_nr":5,"verse":"Tie ili forte ektimis,   Ĉar Dio estas en la generacio de la justuloj."},"6":{"verse_nr":6,"verse":"Vi malhonoris la konsilon de malriĉulo,   Sed la Eternulo estas lia rifuĝejo."},"7":{"verse_nr":7,"verse":"Ho, ke venu el Cion savo al Izrael!   Kiam la Eternulo revenigos Sian forkaptitan popolon,   Tiam triumfos Jakob kaj ĝojos Izrael."}};

    export const CxapitroDekKvar = {
        key: 'Psalmaro 14',
        chapterNum: 14,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    