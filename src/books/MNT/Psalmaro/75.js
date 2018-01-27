const chapter = {"1":{"verse_nr":1,"verse":"Al la ĥorestro. Por Al-taŝĥet. Psalmo de Asaf. Kanto. Ni gloras Vin, ho Dio, ni gloras Vin;   Proksima estas Via nomo;   Oni rakontas Viajn miraklojn."},"2":{"verse_nr":2,"verse":"Kiam Mi elektos tempon,   Mi faros justan juĝon."},"3":{"verse_nr":3,"verse":"Tremas la tero kaj ĉiuj ĝiaj loĝantoj;   Mi fortikigis ĝiajn kolonojn.  Sela."},"4":{"verse_nr":4,"verse":"Mi diras al la fanfaronuloj:Ne fanfaronu;   Kaj al la malvirtuloj:Ne levu kornon;"},"5":{"verse_nr":5,"verse":"Ne levu supren vian kornon,   Ne parolu kun nefleksebla kolo;"},"6":{"verse_nr":6,"verse":"Ĉar ne de oriento kaj ne de okcidento  Kaj ne de la dezerto venas alteco."},"7":{"verse_nr":7,"verse":"Nur Dio estas juĝanto;   Unu homon Li malaltigas, kaj alian Li altigas."},"8":{"verse_nr":8,"verse":"Ĉar la pokalo estas en la mano de la Eternulo,   Kaj la vino ŝaŭmas, plena de aromaĵo, kaj Li verŝas el ĝi;   Sed nur ĝian feĉon elsuĉos kaj trinkos ĉiuj malvirtuloj de la tero."},"9":{"verse_nr":9,"verse":"Kaj mi eterne predikos,   Mi kantos al la Dio de Jakob."},"10":{"verse_nr":10,"verse":"Kaj ĉiujn kornojn de la malvirtuloj mi rompos;   Altiĝos la kornoj de virtulo."}};

    export const CxapitroSepDekKvin = {
        key: 'Psalmaro 75',
        chapterNum: 75,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    