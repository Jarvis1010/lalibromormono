const chapter = {"1":{"verse_nr":1,"verse":"Psalmo de David. Ho Eternulo, aŭskultu mian preĝon,   Atentu mian petegon laŭ Via vereco,   Respondu al mi laŭ Via justeco."},"2":{"verse_nr":2,"verse":"Kaj ne eniru en juĝon kun Via sklavo,   Ĉar neniu vivanta povos praviĝi antaŭ Vi."},"3":{"verse_nr":3,"verse":"Ĉar malamiko persekutis mian animon,   Premis al la tero mian vivon;   Li metis min en mallumon, kiel delonge mortintojn."},"4":{"verse_nr":4,"verse":"Senfortiĝas en mi mia animo,   Konsumiĝas en mi mia koro."},"5":{"verse_nr":5,"verse":"Mi rememoras la tagojn antikvajn,   Mi meditas pri ĉiuj Viaj faroj,   Mi pensas pri la faritaĵoj de Viaj manoj."},"6":{"verse_nr":6,"verse":"Mi etendas al Vi miajn manojn;   Mia animo soifas Vin kiel seka tero.  Sela."},"7":{"verse_nr":7,"verse":"Rapidu, aŭskultu min, ho Eternulo, mia spirito konsumiĝas;   Ne kaŝu antaŭ mi Vian vizaĝon,   Ĉar mi similiĝus al la forirantaj en la tombon."},"8":{"verse_nr":8,"verse":"Aŭdigu al mi matene Vian bonecon,   Ĉar Vin mi fidas;   Montru al mi la vojon, kiun mi devas iri,   Ĉar al Vi mi levas mian animon."},"9":{"verse_nr":9,"verse":"Savu min de miaj malamikoj, ho Eternulo;   Al Vi mi rifuĝas."},"10":{"verse_nr":10,"verse":"Instruu al mi plenumi Vian volon, ĉar Vi estas mia Dio;   Via bona spirito gvidu min sur ebena tero."},"11":{"verse_nr":11,"verse":"Pro Via nomo, ho Eternulo, lasu min vivi;   Pro Via justeco eligu mian animon el mizero."},"12":{"verse_nr":12,"verse":"Kaj pro Via favorkoreco ekstermu miajn malamikojn  Kaj pereigu ĉiujn premantojn de mia animo,   Ĉar mi estas Via sklavo."}};

    export const CxapitroCentKvarDekTri = {
        key: 'Psalmaro 143',
        chapterNum: 143,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    