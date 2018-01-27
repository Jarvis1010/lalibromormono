const chapter = {"1":{"verse_nr":1,"verse":"Psalmo de Asaf. Dio stariĝis en Dia anaro;   Inter la dioj Li juĝas."},"2":{"verse_nr":2,"verse":"Ĝis kiam vi juĝos maljuste,   Kaj privilegios la personojn de malvirtuloj?  Sela."},"3":{"verse_nr":3,"verse":"Estu justaj al malriĉulo kaj orfo;   Rilate afliktiton kaj senhavulon estu virtaj."},"4":{"verse_nr":4,"verse":"Liberigu malriĉulon kaj mizerulon;   El la mano de malvirtulo ilin savu."},"5":{"verse_nr":5,"verse":"Ili ne scias kaj ne komprenas,   En mallumo ili marŝas;   Ekŝanceliĝis ĉiuj fundamentoj de la tero."},"6":{"verse_nr":6,"verse":"Mi diris:Vi estas dioj,   Kaj ĉiuj vi estas filoj de la Plejaltulo;"},"7":{"verse_nr":7,"verse":"Sed vi mortos, kiel homoj,   Kaj vi falos, kiel ĉiu el la potenculoj."},"8":{"verse_nr":8,"verse":"Leviĝu, ho Dio, juĝu la teron;   Ĉar Vi heredas ĉiujn popolojn."}};

    export const CxapitroOkDekDu = {
        key: 'Psalmaro 82',
        chapterNum: 82,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    