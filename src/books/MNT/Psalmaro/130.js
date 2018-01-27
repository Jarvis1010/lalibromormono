const chapter = {"1":{"verse_nr":1,"verse":"Kanto de suprenirado. El profundo mi vokas Vin, ho Eternulo."},"2":{"verse_nr":2,"verse":"Mia Sinjoro, aŭskultu mian voĉon;   Viaj oreloj atentu la voĉon de mia petego."},"3":{"verse_nr":3,"verse":"Se vi, ho Eternulo, kalkulus la pekojn,   Kiu povus stari, ho mia Sinjoro?"},"4":{"verse_nr":4,"verse":"Sed Vi estas pardonema,   Por ke Vi estu respektata."},"5":{"verse_nr":5,"verse":"Mi esperis al la Eternulo, esperis mia animo,   Kaj Lian vorton mi fidis."},"6":{"verse_nr":6,"verse":"Mia animo atendas mian Sinjoron pli,   Ol la gardantoj atendas la matenon,   La gardantoj la matenon."},"7":{"verse_nr":7,"verse":"Izrael fidu la Eternulon;   Ĉar ĉe la Eternulo estas favorkoreco  Kaj ĉe Li estas granda liberigo."},"8":{"verse_nr":8,"verse":"Kaj Li liberigos Izraelon  De ĉiuj liaj pekoj."}};

    export const CxapitroCentTriDek = {
        key: 'Psalmaro 130',
        chapterNum: 130,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    