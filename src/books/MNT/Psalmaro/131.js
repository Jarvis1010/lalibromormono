const chapter = {"1":{"verse_nr":1,"verse":"Kanto de suprenirado. De David. Ho Eternulo, ne tenas sin alte mia koro, kaj ne leviĝas alte miaj okuloj;   Kaj mi ne okupas min per aferoj grandaj kaj neatingeblaj por mi."},"2":{"verse_nr":2,"verse":"Mi trankviligis kaj kvietigis mian animon;   Kiel infano formetita for de la mamo de sia patrino, kiel infano demamigita,   Tiel estas en mi mia animo."},"3":{"verse_nr":3,"verse":"Ho Izrael, fidu la Eternulon,   De nun kaj eterne."}};

    export const CxapitroCentTriDekUnu = {
        key: 'Psalmaro 131',
        chapterNum: 131,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    