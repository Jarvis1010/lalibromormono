const chapter = {"1":{"verse_nr":1,"verse":"Psalmo de Asaf. Ho Dio! venis idolanoj en Vian heredon,   Malpurigis Vian sanktan templon,   Faris el Jerusalem ruinojn."},"2":{"verse_nr":2,"verse":"La kadavrojn de Viaj sklavoj ili donis kiel manĝon al la birdoj de la ĉielo,   La karnon de Viaj fideluloj al la bestoj de la tero;"},"3":{"verse_nr":3,"verse":"Ili verŝis ilian sangon kiel akvon, ĉirkaŭ Jerusalem,   Kaj estis neniu, kiu ilin enterigus."},"4":{"verse_nr":4,"verse":"Ni fariĝis hontindaĵo por niaj najbaroj,   Mokataĵo kaj insultataĵo por niaj ĉirkaŭantoj."},"5":{"verse_nr":5,"verse":"Ĝis kiam, ho Eternulo, Vi koleros senĉese?   Kaj Via indigno brulos, kiel fajro?"},"6":{"verse_nr":6,"verse":"Elverŝu Vian koleron sur tiujn naciojn, kiuj Vin ne konas,   Kaj sur la regnojn, kiuj ne vokas Vian nomon;"},"7":{"verse_nr":7,"verse":"Ĉar ili formanĝis Jakobon  Kaj dezertigis lian loĝejon."},"8":{"verse_nr":8,"verse":"Ne memoru niajn antaŭajn krimojn,   Rapide atingu nin Via favorkoreco;   Ĉar ni tre konsumiĝis."},"9":{"verse_nr":9,"verse":"Helpu nin, ho Dio de nia savo, pro la gloro de Via nomo;   Kaj savu nin kaj pardonu al ni niajn pekojn pro Via nomo."},"10":{"verse_nr":10,"verse":"Kial devas diri la popoloj:Kie estas ilia Dio?   Fariĝu konata inter la popoloj antaŭ niaj okuloj  La venĝo por la verŝita sango de Viaj sklavoj."},"11":{"verse_nr":11,"verse":"Venu al Vi la ĝemoj de la malliberuloj;   Per la grandeco de Via brako liberigu tiujn, kiuj estas kondamnitaj al morto;"},"12":{"verse_nr":12,"verse":"Kaj redonu al niaj najbaroj sepoble en ilian sinon la malhonoron,   Per kiu ili malhonoris Vin, ho mia Sinjoro!"},"13":{"verse_nr":13,"verse":"Kaj ni, Via popolo kaj la ŝafoj de Via paŝtataro,   Eterne Vin dankos,   De generacio al generacio ni rakontos Vian gloron."}};

    export const CxapitroSepDekNau = {
        key: 'Psalmaro 79',
        chapterNum: 79,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    