const chapter = {"1":{"verse_nr":1,"verse":"Al la ĥorestro. Por kordaj instrumentoj. Psalmo de David. Kiam mi vokas, respondu al mi, justa mia Dio!   En premo Vi liberigas min;   Korfavoru min, kaj aŭskultu mian preĝon."},"2":{"verse_nr":2,"verse":"Homidoj, ĝis kiam mia honoro estos malhonorata?   Ĝis kiam vi amos vantaĵon kaj celos malveron? Sela."},"3":{"verse_nr":3,"verse":"Sciu do, ke la Eternulo apartigis la piulon por Si;   La Eternulo aŭdas, kiam mi vokas al Li."},"4":{"verse_nr":4,"verse":"Tremu, kaj ne peku;   Meditu en viaj koroj, sur viaj kuŝejoj, kaj estu fortikanimaj.  Sela."},"5":{"verse_nr":5,"verse":"Oferdonu oferojn piajn,   Kaj fidu la Eternulon."},"6":{"verse_nr":6,"verse":"Multaj diradas:Kiu montros al ni bonon?   Direktu sur nin la lumon de Via vizaĝo, ho Eternulo!"},"7":{"verse_nr":7,"verse":"Vi metis ĝojon en mian koron, pli ol dum ilia greno kaj ilia mosto plimultiĝas."},"8":{"verse_nr":8,"verse":"Pace mi kuŝiĝas kaj tuj endormiĝas;   Ĉar Vi, ho Eternulo, loĝigas min sola en sendanĝereco."}};

    export const CxapitroKvar = {
        key: 'Psalmaro 4',
        chapterNum: 4,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    