const chapter = {"1":{"verse_nr":1,"verse":"En la jaro, kiam Tartan venis Aŝdodon, kien lin sendis Sargon, reĝo de Asirio, kaj li militis kontraŭ Aŝdod kaj prenis ĝin,"},"2":{"verse_nr":2,"verse":"en tiu tempo la Eternulo parolis per Jesaja, filo de Amoc, dirante:Iru,  kaj demetu la sakaĵon de via lumbo, kaj demetu la ŝuojn de viaj piedoj. Kaj li faris tiel; li iris nuda kaj nudpieda."},"3":{"verse_nr":3,"verse":"Kaj la Eternulo diris:Kiel Mia servanto Jesaja iris nuda kaj nudpieda por trijara montrado kaj antaŭdirado pri Egiptujo kaj Etiopujo,"},"4":{"verse_nr":4,"verse":"tiel la reĝo de Asirio kondukos la kaptitajn Egiptojn kaj la ekzilitajn Etiopojn, junulojn kaj maljunulojn, nudajn kaj nudpiedajn kaj kun nudaj hontaj partoj, malhonore por la Egiptoj."},"5":{"verse_nr":5,"verse":"Kaj ili havos teruron kaj honton pro Etiopujo, kiun ili fidis, kaj pro Egiptujo, pri kiu ili fanfaronis."},"6":{"verse_nr":6,"verse":"Kaj en tiu tempo diros la loĝantoj de tiu apudmara lando:Jen kia estas nia fidita lando, kien ni kuris, por serĉi helpon, por savi nin kontraŭ la reĝo de Asirio; kiamaniere ni nun savos nin?"}};

    export const CxapitroDuDek = {
        key: 'Jesaja 20',
        chapterNum: 20,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    