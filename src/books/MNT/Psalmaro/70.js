const chapter = {"1":{"verse_nr":1,"verse":"Al la ĥorestro. De David. Pro memoro. Volu, ho Dio, savi min;   Ho Eternulo, rapidu helpi min."},"2":{"verse_nr":2,"verse":"Hontiĝu kaj konfuziĝu tiuj, kiuj serĉas mian animon;   Retiriĝu kaj estu mokataj tiuj, kiuj deziras al mi malbonon."},"3":{"verse_nr":3,"verse":"Kun honto iru returne tiuj,   Kiuj diras al mi:Ha, ha!"},"4":{"verse_nr":4,"verse":"Gaju kaj ĝoju pro Vi ĉiuj Viaj serĉantoj;   Kaj la amantoj de Via savo diru ĉiam:   Granda estas Dio."},"5":{"verse_nr":5,"verse":"Kaj mi estas mizera kaj malriĉa;   Ho Dio, rapidu al mi.   Vi estas mia helpo kaj mia savanto;   Ho Eternulo, ne malrapidu."}};

    export const CxapitroSepDek = {
        key: 'Psalmaro 70',
        chapterNum: 70,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    