const chapter = {"1":{"verse_nr":1,"verse":"Kanto-psalmo de la oraĥidoj. Al la ĥorestro. Por maĥalat-leanoto.  Instruo de Heman, la Ezraĥido. Ho Eternulo, Dio de mia savo!   Tage kaj nokte mi krias antaŭ Vi."},"2":{"verse_nr":2,"verse":"Mia preĝo venu antaŭ Vian vizaĝon;   Klinu Vian orelon al mia ploro."},"3":{"verse_nr":3,"verse":"Ĉar mia animo trosatiĝis de malbonoj  Kaj mia vivo atingis Ŝeolon."},"4":{"verse_nr":4,"verse":"Mi similiĝis al la forirantoj en la tombon;   Mi fariĝis kiel viro sen fortoj,"},"5":{"verse_nr":5,"verse":"Etendita inter mortintoj;   Kiel mortigitoj, kuŝantaj en la tombo,   Kiujn Vi jam ne rememoras  Kaj kiuj estas forigitaj for de Via mano."},"6":{"verse_nr":6,"verse":"Vi metis min en la plej profundan foson,   En mallumon, en abismon."},"7":{"verse_nr":7,"verse":"Pezas sur mi Via furiozo,   Kaj per ĉiuj Viaj ondoj Vi min premas.  Sela."},"8":{"verse_nr":8,"verse":"Vi malproksimigis de mi miajn konatojn,   Vi faris min abomenaĵo por ili;   Mi estas enŝlosita, kaj mi ne povas eliri."},"9":{"verse_nr":9,"verse":"Mia okulo mallumiĝis de malĝojo;   Mi vokas Vin, ho Eternulo, ĉiutage,   Mi etendas al Vi miajn manojn."},"10":{"verse_nr":10,"verse":"Ĉu por mortintoj Vi faros miraklojn?   Ĉu malvivuloj leviĝos kaj gloros Vin?  Sela."},"11":{"verse_nr":11,"verse":"Ĉu en la tombo estos rakontata Via boneco,   Kaj fidindeco en la abismo?"},"12":{"verse_nr":12,"verse":"Ĉu en la mallumo estos konataj Viaj mirakloj,   Kaj Via justeco en la lando de forgeso?"},"13":{"verse_nr":13,"verse":"Sed mi vokas al Vi, ho Eternulo,   Kaj matene mia preĝo Vin renkontas."},"14":{"verse_nr":14,"verse":"Kial, ho Eternulo, Vi forpuŝas mian animon?   Kial Vi kaŝas Vian vizaĝon de mi?"},"15":{"verse_nr":15,"verse":"Mi estas mizera kaj senforta detempe de la juneco;   Mi portas Viajn terurojn, mi konsumiĝas."},"16":{"verse_nr":16,"verse":"Venis sur min Via furiozo,   Viaj timigoj min dispremas."},"17":{"verse_nr":17,"verse":"Ili ĉirkaŭas min, kiel akvo, ĉiutage;   Ili tute min ĉirkaŭsieĝas."},"18":{"verse_nr":18,"verse":"Vi malproksimigis de mi amanton kaj amikon;   Miaj konatoj estas en mallumo."}};

    export const CxapitroOkDekOk = {
        key: 'Psalmaro 88',
        chapterNum: 88,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    