const chapter = {"1":{"verse_nr":1,"verse":"Al la ĥorestro. Por basuloj. Psalmo de David. Helpu, ho Eternulo,  ĉar malaperis piuloj  Kaj maloftiĝis fideluloj inter la homidoj."},"2":{"verse_nr":2,"verse":"Malveron ili parolas unuj al aliaj,   Vortojn flatajn el koro hipokrita."},"3":{"verse_nr":3,"verse":"La Eternulo ekstermu ĉiun flatan buŝon  Kaj langon fanfaronantan,"},"4":{"verse_nr":4,"verse":"Tiujn, kiuj diras:Per nia lango ni venkos,   Nia buŝo estas kun ni; kiu estas sinjoro super ni?"},"5":{"verse_nr":5,"verse":"Ĉar prematoj estas ruinigataj kaj malfeliĉuloj ĝemas,   Tial nun Mi Min levos, diras la Eternulo;   Mi donos savon al tiuj, kiuj sopiras pri ĝi."},"6":{"verse_nr":6,"verse":"La paroloj de la Eternulo estas paroloj puraj,   Arĝento, purigita en tera fandujo kaj sepfoje refandita."},"7":{"verse_nr":7,"verse":"Vi, ho Eternulo, konservos ilin,   Vi gardos nin kontraŭ ĉi tiu generacio por eterne."},"8":{"verse_nr":8,"verse":"Ĉirkaŭe aperas multe da malpiuloj,   Kiam malnobleco altiĝas inter la homidoj."}};

    export const CxapitroDekDu = {
        key: 'Psalmaro 12',
        chapterNum: 12,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    