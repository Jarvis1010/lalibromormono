const chapter = {"1":{"verse_nr":1,"verse":"Kanto de suprenirado. De Salomono. Se la Eternulo ne konstruas la domon,   Tiam vane laboras super ĝi ĝiaj konstruantoj;   Se la Eternulo ne gardas urbon,   Tiam vane maldormas la gardanto."},"2":{"verse_nr":2,"verse":"Vane vi frue leviĝas, malfrue sidas,   Manĝas panon kun klopodoj:   Al Sia amato Li donas en dormo."},"3":{"verse_nr":3,"verse":"Jen, heredo de la Eternulo estas infanoj;   Rekompenco estas la frukto de ventro."},"4":{"verse_nr":4,"verse":"Kiel sagoj en la mano de fortulo,   Tiel estas junaj filoj."},"5":{"verse_nr":5,"verse":"Bone estas al la homo, kiu plenigis per ili sian sagujon;   Ili ne estos hontigitaj,   Kiam ili parolos kun la malamikoj ĉe la pordego."}};

    export const CxapitroCentDuDekSep = {
        key: 'Psalmaro 127',
        chapterNum: 127,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    