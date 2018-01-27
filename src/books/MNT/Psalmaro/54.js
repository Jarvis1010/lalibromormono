const chapter = {"1":{"verse_nr":1,"verse":"Al la ĥorestro. Por kordaj instrumentoj. Instruo de David, kiam venis la Zifanoj, kaj diris al Saul:Jen David kaŝiĝas ĉe ni. Ho Dio, per Via nomo helpu min,   Kaj per Via forto donu al mi justecon."},"2":{"verse_nr":2,"verse":"Ho Dio, aŭskultu mian preĝon,   Atentu la vortojn de mia buŝo."},"3":{"verse_nr":3,"verse":"Ĉar fremduloj leviĝis kontraŭ mi,   Kaj fortuloj serĉas mian animon;   Ili ne havas Dion antaŭ si.  Sela."},"4":{"verse_nr":4,"verse":"Jen Dio estas mia helpanto,   Mia Sinjoro estas subtenanto de mia animo."},"5":{"verse_nr":5,"verse":"Li returnos la malbonon al miaj malamikoj:   Laŭ Via vereco ekstermu ilin."},"6":{"verse_nr":6,"verse":"Kun volonteco mi faros al Vi oferdonon,   Mi gloros Vian nomon, ho Eternulo, ĉar ĝi estas bona;"},"7":{"verse_nr":7,"verse":"Ĉar de ĉiuj suferoj Li savis min,   Kaj venĝon sur miaj malamikoj vidas mia okulo."}};

    export const CxapitroKvinDekKvar = {
        key: 'Psalmaro 54',
        chapterNum: 54,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    