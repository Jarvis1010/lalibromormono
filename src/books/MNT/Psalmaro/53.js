const chapter = {"1":{"verse_nr":1,"verse":"Al la ĥorestro. Por maĥalato. Instruo de David. La sensaĝulo diris en sia koro:Dio ne ekzistas.   Ili sentaŭgiĝis, kaj abomeniĝis en la malvirto;   Ekzistas neniu, kiu faras bonon."},"2":{"verse_nr":2,"verse":"Dio el la ĉielo ekrigardis la homidojn,   Por vidi, ĉu ekzistas prudentulo, kiu serĉas Dion."},"3":{"verse_nr":3,"verse":"Ĉiu devojiĝis, ĉiuj malvirtiĝis;   Ekzistas neniu, faranta bonon, ne ekzistas eĉ unu."},"4":{"verse_nr":4,"verse":"Ĉu ne prudentiĝos tiuj, kiuj faras malbonon,   Kiuj manĝas mian popolon, kiel oni manĝas panon,   Kaj kiuj ne vokas al Dio?"},"5":{"verse_nr":5,"verse":"Tie ili forte ektimis, kie timindaĵo ne ekzistis;   Ĉar Dio disĵetis la ostojn de tiuj, kiuj vin sieĝas;   Vi hontigis ilin, ĉar Dio ilin forpuŝis."},"6":{"verse_nr":6,"verse":"Ho, ke venu el Cion savo al Izrael!   Kiam Dio revenigos Sian forkaptitan popolon,   Tiam triumfos Jakob kaj ĝojos Izrael."}};

    export const CxapitroKvinDekTri = {
        key: 'Psalmaro 53',
        chapterNum: 53,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    