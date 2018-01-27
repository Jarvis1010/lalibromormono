const chapter = {"1":{"verse_nr":1,"verse":"Sur la tuta tero estis unu lingvo kaj unu parolmaniero."},"2":{"verse_nr":2,"verse":"Kaj kiam ili ekiris de la oriento, ili trovis valon en la lando Ŝinar kaj tie ekloĝis."},"3":{"verse_nr":3,"verse":"Kaj ili diris unu al alia: Venu, ni faru brikojn kaj ni brulpretigu ilin per fajro. Kaj la brikoj fariĝis por ili ŝtonoj, kaj la bitumo fariĝis por ili kalko."},"4":{"verse_nr":4,"verse":"Kaj ili diris: Venu, ni konstruu al ni urbon, kaj turon, kies supro atingos la ĉielon, kaj ni akiru al ni gloron, antaŭ ol ni disiĝos sur la supraĵo de la tuta tero."},"5":{"verse_nr":5,"verse":"Kaj la Eternulo malleviĝis, por vidi la urbon kaj la turon, kiujn konstruis la homidoj."},"6":{"verse_nr":6,"verse":"Kaj la Eternulo diris: Jen estas unu popolo, kaj unu lingvon ili ĉiuj havas; kaj jen, kion ili komencis fari, kaj ili ne estos malhelpataj en ĉio,  kion ili decidis fari."},"7":{"verse_nr":7,"verse":"Ni malleviĝu do, kaj Ni konfuzu tie ilian lingvon, por ke unu ne komprenu la parolon de alia."},"8":{"verse_nr":8,"verse":"Kaj la Eternulo disigis ilin de tie sur la supraĵon de la tuta tero,  kaj ili ĉesis konstrui la urbon."},"9":{"verse_nr":9,"verse":"Tial oni donis al ĝi la nomon Babel, ĉar tie la Eternulo konfuzis la lingvon de la tuta tero kaj de tie la Eternulo disigis ilin sur la supraĵon de la tuta tero."},"10":{"verse_nr":10,"verse":"Jen estas la generaciaro de Ŝem: Ŝem havis la aĝon de cent jaroj,  kaj naskiĝis al li Arpaĥŝad, du jarojn post la diluvo."},"11":{"verse_nr":11,"verse":"Kaj Ŝem vivis post la naskiĝo de Arpaĥŝad kvincent jarojn, kaj naskiĝis al li filoj kaj filinoj."},"12":{"verse_nr":12,"verse":"Kaj Arpaĥŝad vivis tridek kvin jarojn, kaj naskiĝis al li Ŝelaĥ."},"13":{"verse_nr":13,"verse":"Kaj Arpaĥŝad vivis post la naskiĝo de Ŝelaĥ kvarcent tri jarojn,  kaj naskiĝis al li filoj kaj filinoj."},"14":{"verse_nr":14,"verse":"Kaj Ŝelaĥ vivis tridek jarojn, kaj naskiĝis al li Eber."},"15":{"verse_nr":15,"verse":"Kaj Ŝelaĥ vivis post la naskiĝo de Eber kvarcent tri jarojn, kaj naskiĝis al li filoj kaj filinoj."},"16":{"verse_nr":16,"verse":"Kaj Eber vivis tridek kvar jarojn, kaj naskiĝis al li Peleg."},"17":{"verse_nr":17,"verse":"Kaj Eber vivis post la naskiĝo de Peleg kvarcent tridek jarojn, kaj naskiĝis al li filoj kaj filinoj."},"18":{"verse_nr":18,"verse":"Kaj Peleg vivis tridek jarojn, kaj naskiĝis al li Reu."},"19":{"verse_nr":19,"verse":"Kaj Peleg vivis post la naskiĝo de Reu ducent naŭ jarojn, kaj naskiĝis al li filoj kaj filinoj."},"20":{"verse_nr":20,"verse":"Kaj Reu vivis tridek du jarojn, kaj naskiĝis al li Serug."},"21":{"verse_nr":21,"verse":"Kaj Reu vivis post la naskiĝo de Serug ducent sep jarojn, kaj naskiĝis al li filoj kaj filinoj."},"22":{"verse_nr":22,"verse":"Kaj Serug vivis tridek jarojn, kaj naskiĝis al li Naĥor."},"23":{"verse_nr":23,"verse":"Kaj Serug vivis post la naskiĝo de Naĥor ducent jarojn, kaj naskiĝis al li filoj kaj filinoj."},"24":{"verse_nr":24,"verse":"Kaj Naĥor vivis dudek naŭ jarojn, kaj naskiĝis al li Teraĥ."},"25":{"verse_nr":25,"verse":"Kaj Naĥor vivis post la naskiĝo de Teraĥ cent dek naŭ jarojn, kaj naskiĝis al li filoj kaj filinoj."},"26":{"verse_nr":26,"verse":"Kaj Teraĥ vivis sepdek jarojn, kaj naskiĝis al li Abram, Naĥor, kaj Haran."},"27":{"verse_nr":27,"verse":"Kaj jen estas la generaciaro de Teraĥ: al Teraĥ naskiĝis Abram,  Naĥor, kaj Haran; kaj al Haran naskiĝis Lot."},"28":{"verse_nr":28,"verse":"Kaj Haran mortis antaŭ sia patro Teraĥ en sia lando de naskiĝo, en Ur la Ĥaldea."},"29":{"verse_nr":29,"verse":"Kaj Abram kaj Naĥor prenis al si edzinojn; la nomo de la edzino de Abram estis Saraj, kaj la nomo de la edzino de Naĥor estis Milka, filino de Haran, kiu estis la patro de Milka kaj la patro de Jiska."},"30":{"verse_nr":30,"verse":"Kaj Saraj estis senfrukta kaj ne havis infanon."},"31":{"verse_nr":31,"verse":"Kaj Teraĥ prenis sian filon Abram kaj sian nepon Lot, filo de Haran,  kaj sian bofilinon Saraj, edzino de lia filo Abram; kaj ili eliris kune el Ur la Ĥaldea, por iri en la landon Kanaanan; kaj ili venis ĝis Ĥaran kaj enloĝiĝis tie."},"32":{"verse_nr":32,"verse":"Kaj Teraĥ atingis la aĝon de ducent kvin jaroj, kaj Teraĥ mortis en Ĥaran."}};

    export const CxapitroDekUnu = {
        key: 'Genezo 11',
        chapterNum: 11,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    