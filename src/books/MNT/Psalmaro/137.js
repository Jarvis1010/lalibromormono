const chapter = {"1":{"verse_nr":1,"verse":"Apud la riveroj de Babel  Ni sidis kaj ploris,   Rememorante Cionon."},"2":{"verse_nr":2,"verse":"Sur la salikoj tie  Ni pendigis niajn harpojn."},"3":{"verse_nr":3,"verse":"Ĉar tie niaj kaptintoj postulis de ni kantojn,   Kaj niaj mokantoj ĝojon, dirante:   Kantu al ni el la kantoj de Cion."},"4":{"verse_nr":4,"verse":"Kiel ni kantos sur fremda tero  La kanton de la Eternulo?"},"5":{"verse_nr":5,"verse":"Se mi forgesos vin, ho Jerusalem,   Tiam forgesiĝu mia dekstra mano;"},"6":{"verse_nr":6,"verse":"Algluiĝu mia lango al mia palato,   Se mi vin ne memoros,   Se mi ne levos Jerusalemon en la supron de miaj ĝojoj."},"7":{"verse_nr":7,"verse":"Rememorigu, ho Eternulo, al la filoj de Edom  La tagon de Jerusalem, kiam ili diris:   Detruu, detruu ĝis ĝia fundamento."},"8":{"verse_nr":8,"verse":"Ho ruinigema filino de Babel!   Bone estos al tiu,   Kiu repagos al vi por la faro, kiun vi faris al ni."},"9":{"verse_nr":9,"verse":"Bone estos al tiu,   Kiu prenos kaj frakasos viajn infanetojn sur ŝtono."}};

    export const CxapitroCentTriDekSep = {
        key: 'Psalmaro 137',
        chapterNum: 137,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    