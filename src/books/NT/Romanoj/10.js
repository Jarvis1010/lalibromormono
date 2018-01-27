const chapter = {"1":{"verse_nr":1,"verse":"Fratoj, la deziro de mia koro kaj mia preĝo al Dio pri ili estas por ilia savado."},"2":{"verse_nr":2,"verse":"Ĉar mi atestas pri ili, ke ili havas fervoron al Dio, sed ne laŭ scio."},"3":{"verse_nr":3,"verse":"Ĉar nesciante la justecon de Dio, kaj penante starigi sian propran justecon, ili ne subiĝis al la justeco de Dio."},"4":{"verse_nr":4,"verse":"Ĉar Kristo estas la fino de la leĝo por justeco por ĉiu, kiu kredas."},"5":{"verse_nr":5,"verse":"Ĉar Moseo skribis, ke tiu, kiu plenumas la justecon de la leĝo, vivos per ĝi."},"6":{"verse_nr":6,"verse":"Sed la justeco, kiu estas el fido, diras jene:Ne diru en via koro:Kiu suprenirus en la ĉielon? (tio estas, por malsuprenigi Kriston),"},"7":{"verse_nr":7,"verse":"nek:Kiu malsuprenirus en la abismon? (tio estas, por suprenkonduki Kriston el la mortintoj)."},"8":{"verse_nr":8,"verse":"Sed kion ĝi diras? La afero estas proksime de vi, en via buŝo kaj en via koro; tio estas, la vorto de fido, kiun ni predikas;"},"9":{"verse_nr":9,"verse":"ĉar se vi per via buŝo konfesas Jesuon Sinjoro, kaj kredas en via koro, ke Dio lin levis el la mortintoj, vi saviĝos;"},"10":{"verse_nr":10,"verse":"ĉar per la koro la homo kredas ĝis justeco, kaj per la buŝo konfesas ĝis savo."},"11":{"verse_nr":11,"verse":"Ĉar la Skribo diras:Ĉiu, kiu fidas al li, ne estos hontigita."},"12":{"verse_nr":12,"verse":"Ĉar estas nenia diferencigo inter Judo kaj Greko, ĉar unu sama estas Sinjoro de ĉiuj, kaj estas riĉa por ĉiuj, kiuj lin vokas;"},"13":{"verse_nr":13,"verse":"ĉar:Ĉiu, kiu vokos la nomon de la Eternulo, saviĝos."},"14":{"verse_nr":14,"verse":"Kiel do ili vokos Tiun, al kiu ili ne kredis? kaj kiel ili kredos al Tiu, pri kiu ili ne aŭdis? kaj kiel ili aŭdos sen predikanto?"},"15":{"verse_nr":15,"verse":"kaj kiel oni predikos, se ili ne estos senditaj? kiel estas skribite:Kiel ĉarmaj estas la piedoj de la anoncantoj de la evangelio de bono!"},"16":{"verse_nr":16,"verse":"Sed ne ĉiuj aŭskultis la evangelion. Ĉar Jesuo diris:Ho Eternulo!  kiu kredus al tio, kion ni aŭdis?"},"17":{"verse_nr":17,"verse":"La fido venas do per aŭdado, kaj aŭdado per la vorto de Kristo."},"18":{"verse_nr":18,"verse":"Sed mi diras:Ĉu ili ne aŭdis? Certe:      Tra la tuta mondo iris ilia sono,   Kaj ĝis la finoj de la tero iris iliaj vortoj."},"19":{"verse_nr":19,"verse":"Sed mi diras:Ĉu Izrael ne sciis? Unue Moseo diris:      Mi incitos vin per ne-popolo,   Per popolo malnobla Mi vin kolerigos."},"20":{"verse_nr":20,"verse":"Kaj Jesaja estis tre kuraĝa, kaj diris:      Mi estas trovebla por tiuj, kiuj Min ne serĉis;   Mi montris Min al tiuj, kiuj pri Mi ne demandis."},"21":{"verse_nr":21,"verse":"Sed pri Izrael li diris:Ĉiutage Mi etendis Miajn manojn al popolo malobeema kaj obstina."}};

    export const CxapitroDek = {
        key: 'Romanoj 10',
        
        chapterNum: 10,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    