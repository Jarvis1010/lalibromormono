const chapter = {"1":{"verse_nr":1,"verse":"Psalmo de David. Bonecon kaj justecon mi prikantos;   Al Vi, ho Eternulo, mi muzikos."},"2":{"verse_nr":2,"verse":"Mi penas iri prudente la vojon de pieco;   Kiam Vi venos al mi?   Mi iras kun pura koro interne de mia domo."},"3":{"verse_nr":3,"verse":"Mi ne metas antaŭ miajn okulojn malbonan aferon;   Mi malamas farojn de malfideleco,   Ili ne aliĝas al mi."},"4":{"verse_nr":4,"verse":"Koro perversa foriĝu de mi;   Malbonon mi ne volas koni."},"5":{"verse_nr":5,"verse":"Kiu sekrete kalumnias sian proksimulon, tiun mi ekstermos;   Kiu havas fieran okulon kaj malhumilan koron, tiun mi ne toleros."},"6":{"verse_nr":6,"verse":"Miaj okuloj restas turnataj al la fideluloj de la tero, ke ili sidu kun mi;   Kiu iras la vojon de pieco, tiu servu al mi."},"7":{"verse_nr":7,"verse":"Ne loĝos interne de mia domo iu, kiu agas hipokrite;   Kiu diras malveron, tiu ne staros antaŭ miaj okuloj."},"8":{"verse_nr":8,"verse":"Fervore mi ekstermos ĉiujn malvirtulojn de la lando,   Por elradikigi el la urbo de la Eternulo ĉiujn krimulojn."}};

    export const CxapitroCentUnu = {
        key: 'Psalmaro 101',
        chapterNum: 101,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    