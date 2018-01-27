const chapter = {"1":{"verse_nr":1,"verse":"Kiam Izrael eliris el Egiptujo,   La domo de Jakob el fremda popolo,"},"2":{"verse_nr":2,"verse":"Tiam Jehuda fariĝis Lia sanktaĵo,   Izrael Lia regno."},"3":{"verse_nr":3,"verse":"La maro vidis kaj forkuris,   Jordan turniĝis malantaŭen;"},"4":{"verse_nr":4,"verse":"La montoj saltis kiel ŝafoj,   La montetoj kiel ŝafidoj."},"5":{"verse_nr":5,"verse":"Kio estas al vi, ho maro, ke vi forkuris?   Jordan, kial vi turniĝis malantaŭen?"},"6":{"verse_nr":6,"verse":"Montoj, kial vi saltas kiel ŝafoj,   Montetoj, kiel ŝafidoj?"},"7":{"verse_nr":7,"verse":"Antaŭ la Sinjoro tremu, ho tero,   Antaŭ la Dio de Jakob,"},"8":{"verse_nr":8,"verse":"Kiu ŝanĝas rokon en lagon da akvo,   Graniton en akvodonan fonton."}};

    export const CxapitroCentDekKvar = {
        key: 'Psalmaro 114',
        chapterNum: 114,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    