const chapter = {"1":{"verse_nr":1,"verse":"Al la ĥorestro. Por korda instrumento. De David. Aŭskultu, ho Dio,  mian krion;   Atentu mian preĝon."},"2":{"verse_nr":2,"verse":"De la fino de la tero mi vokas al Vi en la malĝojo de mia koro:   Sur rokon tro altan por mi suprenkonduku min."},"3":{"verse_nr":3,"verse":"Ĉar Vi estis mia rifuĝejo,   Fortika turo kontraŭ malamiko."},"4":{"verse_nr":4,"verse":"Lasu min loĝi eterne en Via tendo,   Havi rifuĝon sub la kovro de Viaj flugiloj.  Sela."},"5":{"verse_nr":5,"verse":"Ĉar Vi, ho Dio, aŭdis miajn promesojn;   Vi donis al mi la heredon de tiuj, kiuj timas Vian nomon."},"6":{"verse_nr":6,"verse":"Aldonu tagojn al la tagoj de la reĝo,   Ke liaj jaroj daŭru multajn generaciojn."},"7":{"verse_nr":7,"verse":"Li restu eterne antaŭ Dio;   Boneco kaj vero laŭ Via volo lin gardu."},"8":{"verse_nr":8,"verse":"Tiel mi prikantos Vian nomon eterne,   Plenumante miajn promesojn ĉiutage."}};

    export const CxapitroSesDekUnu = {
        key: 'Psalmaro 61',
        chapterNum: 61,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    