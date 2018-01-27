const chapter = {"1":{"verse_nr":1,"verse":"Al la ĥorestro. Psalmo de David. Aŭdu, ho Dio, mian krion en mia malĝojo;   De la teruro pri malamiko gardu mian vivon."},"2":{"verse_nr":2,"verse":"Ŝirmu min kontraŭ la konspiro de maliculoj,   Kontraŭ la amaso de krimuloj,"},"3":{"verse_nr":3,"verse":"Kiuj akrigis sian langon kiel glavon,   Direktis vortojn maldolĉajn, kvazaŭ siajn sagojn,"},"4":{"verse_nr":4,"verse":"Por pafi kaŝe kontraŭ senkulpulon;   Subite ili pafas kontraŭ lin kaj ne timas."},"5":{"verse_nr":5,"verse":"Ili fortikigas sin en malbona intenco,   Ili konsiliĝas, por meti sekrete retojn;   Ili diras:Kiu ilin vidos?"},"6":{"verse_nr":6,"verse":"Ili elpensas krimojn, kaŝas ilin tre zorge interne en si,   En la profundeco de la koro."},"7":{"verse_nr":7,"verse":"Sed Dio pafos kontraŭ ilin;   Per sago subita ili estos frapitaj."},"8":{"verse_nr":8,"verse":"Kaj ili falos per sia propra lango;   Ĉiuj, kiuj ilin vidos, balancos la kapon."},"9":{"verse_nr":9,"verse":"Kaj ektimos ĉiuj homoj,   Kaj ili rakontos la agon de Dio  Kaj komprenos Liajn farojn."},"10":{"verse_nr":10,"verse":"La virtulo ĝojos per la Eternulo, kaj fidos Lin;   Kaj triumfos ĉiuj, kiuj havas pian koron."}};

    export const CxapitroSesDekKvar = {
        key: 'Psalmaro 64',
        chapterNum: 64,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    