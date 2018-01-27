const chapter = {"1":{"verse_nr":1,"verse":"Kaj ĉiuj impostistoj kaj pekuloj alproksimiĝis al li, por aŭskulti lin."},"2":{"verse_nr":2,"verse":"Kaj murmuris la Fariseoj kaj la skribistoj, dirante:Ĉi tiu akceptas pekulojn kaj manĝas kun ili."},"3":{"verse_nr":3,"verse":"Kaj li parolis al ili la jenan parabolon, dirante:"},"4":{"verse_nr":4,"verse":"Kiu el vi, havante cent ŝafojn kaj perdinte unu el ili, ne forlasas la naŭdek naŭ sur la stepo, kaj iras, por serĉi tiun, kiun li perdis, ĝis li ĝin trovos?"},"5":{"verse_nr":5,"verse":"Kaj trovinte, li ĝin metas sur siajn ŝultrojn, ĝojante."},"6":{"verse_nr":6,"verse":"Kaj reveninte domen, li kunvokas siajn amikojn kaj siajn najbarojn,  dirante al ili:Ĝoju kun mi, ĉar mi trovis mian ŝafon, la perditan."},"7":{"verse_nr":7,"verse":"Mi diras al vi, ke tiel same estos ĝojo en la ĉielo pro unu pekulo,  kiu pentas, pli ol pro naŭdek naŭ justuloj, kiuj ne bezonas penton."},"8":{"verse_nr":8,"verse":"Kiu virino, havante dek draĥmojn, se ŝi perdis unu draĥmon, ne ekbruligas lampon kaj balaas la domon kaj serĉas diligente, ĝis ŝi ĝin trovos?"},"9":{"verse_nr":9,"verse":"Kaj trovinte, ŝi kunvokas siajn amikinojn kaj siajn najbarinojn,  dirante:Ĝoju kun mi, ĉar mi trovis la draĥmon, kiun mi perdis."},"10":{"verse_nr":10,"verse":"Tiel same, mi diras al vi, estas ĝojo antaŭ la anĝeloj de Dio pro unu pekulo, kiu pentas."},"11":{"verse_nr":11,"verse":"Kaj li diris:Unu viro havis du filojn;"},"12":{"verse_nr":12,"verse":"kaj la pli juna diris al sia patro:Patro, donu al mi la heredotan parton de la havo. Kaj li dividis inter ili siajn vivrimedojn."},"13":{"verse_nr":13,"verse":"Kaj post ne multaj tagoj la pli juna, kolektinte ĉion, forvojaĝis al malproksima lando; kaj tie li disperdis sian havon per diboĉa vivado."},"14":{"verse_nr":14,"verse":"Kaj kiam li jam elspezis ĉion, forta malsato okazis en tiu lando, kaj li komencis havi mankon."},"15":{"verse_nr":15,"verse":"Kaj li iris, kaj aliĝis al unu el la loĝantoj de tiu lando; kaj ĉi tiu lin sendis sur siajn kampojn, por paŝti porkojn."},"16":{"verse_nr":16,"verse":"Kaj li deziris plenigi sian ventron per la karoboj, kiujn la porkoj manĝis; kaj neniu donis al li."},"17":{"verse_nr":17,"verse":"Sed reveninte al si, li diris:Kiom da dungitoj de mia patro havas panon abunde, sed mi ĉi tie pereas de malsato!"},"18":{"verse_nr":18,"verse":"Mi leviĝos, kaj iros al mia patro, kaj mi diros al li:Patro, mi pekis kontraŭ la ĉielo kaj antaŭ vi;"},"19":{"verse_nr":19,"verse":"mi jam ne meritas esti nomata via filo; faru min kiel unu el viaj dungitoj."},"20":{"verse_nr":20,"verse":"Kaj li leviĝis, kaj iris al sia patro. Sed kiam li estis ankoraŭ malproksime, lia patro lin vidis kaj kortuŝiĝis, kaj kurinte, falis sur lian kolon kaj lin kisadis."},"21":{"verse_nr":21,"verse":"Kaj la filo diris al li:Patro, mi pekis kontraŭ la ĉielo kaj antaŭ vi, kaj mi jam ne meritas esti nomata via filo."},"22":{"verse_nr":22,"verse":"Kaj diris la patro al siaj servistoj:Alportu rapide la ĉefan robon,  kaj lin vestu, kaj metu ringon sur lian manon kaj ŝuojn sur liajn piedojn;"},"23":{"verse_nr":23,"verse":"kaj alportu la grasigitan bovidon kaj buĉu ĝin, kaj ni manĝu kaj estu gajaj;"},"24":{"verse_nr":24,"verse":"ĉar ĉi tiu mia filo estis mortinta, kaj denove vivas; li estis perdita, kaj estas trovita. Kaj ili komencis esti gajaj."},"25":{"verse_nr":25,"verse":"Sed la pli maljuna filo estis sur la kampo; kaj kiam li venis kaj alproksimiĝis al la domo, li aŭdis muzikon kaj dancadon."},"26":{"verse_nr":26,"verse":"Kaj li alvokis unu el la knaboj, kaj demandis lin, kio estas tio."},"27":{"verse_nr":27,"verse":"Kaj li diris al li:Via frato venis, kaj via patro buĉis la grasigitan bovidon, ĉar li ricevis lin sana."},"28":{"verse_nr":28,"verse":"Sed li koleris, kaj ne volis eniri; kaj lia patro elvenis, kaj lin petegis."},"29":{"verse_nr":29,"verse":"Sed li responde diris al sia patro:Jen tiom da jaroj mi servas al vi,  kaj neniam mi malobeis vian ordonon, tamen vi neniam donis al mi kapridon,  por ke mi estu gaja kun miaj amikoj;"},"30":{"verse_nr":30,"verse":"sed kiam venis ĉi tiu via filo, kiu formanĝis vian havon kun malĉastistinoj, vi buĉis por li la grasigitan bovidon."},"31":{"verse_nr":31,"verse":"Kaj li diris al li:Filo, vi estas ĉiam kun mi, kaj ĉio mia estas via."},"32":{"verse_nr":32,"verse":"Sed konvenis esti gajaj kaj ĝoji; ĉar ĉi tiu via frato estis mortinta, kaj denove vivas; li estis perdita, kaj estas trovita."}};

    export const CxapitroDekKvin = {
        key: 'Luko 15',
        
        chapterNum: 15,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    