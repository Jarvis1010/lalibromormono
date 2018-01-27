const chapter = {"1":{"verse_nr":1,"verse":"Kanto de suprenirado. Al la Eternulo mi vokis en mia sufero,   Kaj Li aŭskultis min."},"2":{"verse_nr":2,"verse":"Ho Eternulo, savu mian animon de mensoga parolo,   De falsa lango."},"3":{"verse_nr":3,"verse":"Kion Li donos al vi,   Kaj kion Li alportos al vi, ho falsa lango?"},"4":{"verse_nr":4,"verse":"Akrajn sagojn de fortulo  Kun karboj genistaj."},"5":{"verse_nr":5,"verse":"Ve al mi, ke mi gastas en Meŝeĥ,   Ke mi loĝas inter la tendoj de Kedar!"},"6":{"verse_nr":6,"verse":"Tro longe loĝis mia animo  Inter malamantoj de paco."},"7":{"verse_nr":7,"verse":"Mi estas pacema;   Sed kiam mi ekparolas, ili komencas militon."}};

    export const CxapitroCentDuDek = {
        key: 'Psalmaro 120',
        chapterNum: 120,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    