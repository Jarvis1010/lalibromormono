const chapter = {"1":{"verse_nr":1,"verse":"Psalmo de David. Ho Eternulo, kiu povas gasti en Via tendo?   Kiu povas loĝi sur Via sankta monto?"},"2":{"verse_nr":2,"verse":"Tiu, kiu vivas honeste, agas juste,   Kaj parolas veron el sia koro;"},"3":{"verse_nr":3,"verse":"Kiu ne kalumnias per sia lango,   Ne faras malbonon al sia kunulo,   Kaj ne ĵetas malhonoron sur sian proksimulon;"},"4":{"verse_nr":4,"verse":"Kiu abomenas malnoblulon  Kaj estimas la respektantojn de la Eternulo,   Kiu faris ĵuron malprofite por si kaj ĝin ne rompas;"},"5":{"verse_nr":5,"verse":"Kiu sian monon ne donas procentege,   Kaj subaĉetajn donacojn kontraŭ senkulpulo ne akceptas.   Kiu tiel agas, tiu neniam falos."}};

    export const CxapitroDekKvin = {
        key: 'Psalmaro 15',
        chapterNum: 15,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    