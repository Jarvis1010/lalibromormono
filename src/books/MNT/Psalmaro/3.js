const chapter = {"1":{"verse_nr":1,"verse":"Psalmo de David, kiam li forkuris de sia filo Abŝalom. Ho Eternulo,   kiel multaj estas miaj premantoj,   Multaj leviĝis kontraŭ mi!"},"2":{"verse_nr":2,"verse":"Multaj diradas pri mia animo:   Ne ekzistas por li savo de Dio.  Sela."},"3":{"verse_nr":3,"verse":"Sed Vi, ho Eternulo, estas ŝildo por mi,   Mia honoro kaj levanto de mia kapo."},"4":{"verse_nr":4,"verse":"Per mia voĉo mi vokas al la Eternulo,   Kaj Li respondas al mi de Sia sankta monto.  Sela."},"5":{"verse_nr":5,"verse":"Mi kuŝiĝas kaj endormiĝas,   Kaj mi vekiĝas, ĉar la Eternulo min subtenas."},"6":{"verse_nr":6,"verse":"Mi ne timas miriadojn da kontraŭuloj,   Kiuj estas ĉirkaŭ mi."},"7":{"verse_nr":7,"verse":"Leviĝu, ho Eternulo, savu min, mia Dio;   Ĉar Vi frapis al ĉiuj miaj malamikoj la vangojn,   La dentojn de la malpiuloj Vi frakasis."},"8":{"verse_nr":8,"verse":"Ĉe la Eternulo estas la savo;   Super Via popolo estu Via beno.  Sela."}};

    export const CxapitroTri = {
        key: 'Psalmaro 3',
        chapterNum: 3,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    