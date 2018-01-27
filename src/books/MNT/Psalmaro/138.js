const chapter = {"1":{"verse_nr":1,"verse":"De David. Mi gloras Vin el mia tuta koro;   Antaŭ la dioj mi Vin prikantas."},"2":{"verse_nr":2,"verse":"Mi kliniĝas antaŭ Via sankta templo,   Kaj mi gloras Vian nomon por Via boneco kaj vereco;   Ĉar Vi grandigis pli ol ĉio Vian nomon per Via vorto."},"3":{"verse_nr":3,"verse":"En la tago, kiam mi vokis, Vi aŭskultis min,   Vi donis forton al mia animo."},"4":{"verse_nr":4,"verse":"Gloros Vin, ho Eternulo, ĉiuj reĝoj de la tero,   Ĉar ili aŭdis la vortojn de Via buŝo."},"5":{"verse_nr":5,"verse":"Kaj ili prikantos la vojojn de la Eternulo;   Ĉar granda estas la gloro de la Eternulo."},"6":{"verse_nr":6,"verse":"Ĉar kvankam la Eternulo estas alte, tamen Li rigardas humilulon,   Kaj fierulon Li rimarkas de malproksime."},"7":{"verse_nr":7,"verse":"Kvankam mi iras meze de suferoj, tamen Vi konservas mian vivon;   Kontraŭ la kolero de miaj malamikoj Vi etendas Vian brakon,   Kaj Via dekstra mano min helpas."},"8":{"verse_nr":8,"verse":"La Eternulo plenumos por mi.   Ho Eternulo, Via boneco estas eterna;   La kreitaĵojn de Viaj manoj ne forlasu."}};

    export const CxapitroCentTriDekOk = {
        key: 'Psalmaro 138',
        chapterNum: 138,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    