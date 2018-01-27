const chapter = {"1":{"verse_nr":1,"verse":"Kanto de suprenirado. Kiam la Eternulo revenigis la forkaptitojn al Cion,   Tiam ni estis kiel sonĝantoj."},"2":{"verse_nr":2,"verse":"Tiam nia buŝo estis plena de gajeco,   Kaj nia lango plena de kantado;   Tiam oni diris inter la popoloj:   Ion grandan la Eternulo faris por ĉi tiuj."},"3":{"verse_nr":3,"verse":"Ion grandan la Eternulo faris por ni:   Ni ĝojas."},"4":{"verse_nr":4,"verse":"Revenigu, ho Eternulo, niajn forkaptitojn,   Kiel riveretojn en sudan landon."},"5":{"verse_nr":5,"verse":"Kiuj semas kun larmoj,   Tiuj rikoltos kun kanto."},"6":{"verse_nr":6,"verse":"Iras kaj ploras la portanto de semotaĵo;   Venos kun kanto la portanto de siaj garboj."}};

    export const CxapitroCentDuDekSes = {
        key: 'Psalmaro 126',
        chapterNum: 126,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    