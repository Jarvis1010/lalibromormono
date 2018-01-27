const chapter = {"1":{"verse_nr":1,"verse":"Tiam Moseo kaj la Izraelidoj kantis ĉi tiun kanton al la Eternulo, kaj parolis jene:  Mi kantos al la Eternulo, ĉar Li alte leviĝis;  Ĉevalon kaj ĝian rajdanton Li ĵetis en la maron."},"2":{"verse_nr":2,"verse":"Mia forto kaj glorkanto estas la Eternulo,  Kaj Li estis por mi savo.  Li estas mia Dio, kaj mi Lin gloros,  La Dio de mia patro, kaj mi Lin altigos."},"3":{"verse_nr":3,"verse":"La Eternulo estas viro de milito,  Eternulo estas Lia nomo."},"4":{"verse_nr":4,"verse":"La ĉarojn de Faraono kaj lian militistaron Li ĵetis en la maron;  Kaj liaj elektitaj militestroj dronis en la Ruĝa Maro."},"5":{"verse_nr":5,"verse":"Abismoj ilin kovris;  Ili falis en la profundojn kiel ŝtono."},"6":{"verse_nr":6,"verse":"Via dekstra mano, ho Eternulo, estas glora per forto,  Via dekstra mano, ho Eternulo, disbatas malamikon."},"7":{"verse_nr":7,"verse":"Per Via granda majesto Vi frakasas Viajn kontraŭulojn;  Vi sendas Vian koleron, kaj ĝi forbruligas ilin kiel pajlon."},"8":{"verse_nr":8,"verse":"De Via kolera blovo montiĝis akvo,  Amasigite stariĝis fluaĵo,  Densiĝis abismoj en la mezo de la maro."},"9":{"verse_nr":9,"verse":"La malamiko diris:Mi persekutos,  Mi atingos, mi dividos militakiron;  Satiĝos de ili mia animo;  Mi eltiros mian glavon, ekstermos ilin mia mano."},"10":{"verse_nr":10,"verse":"Vi blovis per Via spirito, kaj ilin kovris la maro;  Kiel plumbo ili iris al fundo en la akvo potenca."},"11":{"verse_nr":11,"verse":"Kiu estas kiel Vi inter la dioj, ho Eternulo?  Kiu estas kiel Vi, majesta en sankteco,  Timinda kaj laŭdinda, faranta miraklojn?"},"12":{"verse_nr":12,"verse":"Vi etendis Vian dekstran manon,  Kaj ilin englutis la tero."},"13":{"verse_nr":13,"verse":"Vi kondukis kun Via favorkoreco tiun popolon, kiun Vi liberigis;  Vi kondukis ĝin per Via forto al Via sankta loĝejo."},"14":{"verse_nr":14,"verse":"Aŭdis popoloj kaj ektremis;  Teruro atakis la loĝantojn de Filiŝtujo."},"15":{"verse_nr":15,"verse":"Tiam ektimis la ĉefoj de Edom;  La potenculojn de Moab atakis tremo;  Perdis la kuraĝon ĉiuj loĝantoj de Kanaan."},"16":{"verse_nr":16,"verse":"Falas sur ilin timo kaj teruro pro la grandeco de Via brako;  Ili mutiĝas kiel ŝtono, ĝis pasas Via popolo, ho Eternulo,  Ĝis pasas la popolo, kiun Vi akiris."},"17":{"verse_nr":17,"verse":"Vi venigos ilin, kaj plantos ilin Sur la monto de Via heredo,  Sur la loko, ho Eternulo, kiun Vi faris Via sidejo,  En la sanktejo, ho Sinjoro, kiun pretigis Viaj manoj."},"18":{"verse_nr":18,"verse":"La Eternulo reĝos ĉiam kaj eterne."},"19":{"verse_nr":19,"verse":"Ĉar la ĉevaloj de Faraono kun liaj ĉaroj kaj rajdantoj eniĝis en la maron, kaj la Eternulo turnis sur ilin la akvon de la maro; sed la Izraelidoj iris sur seka tero tra la mezo de la maro."},"20":{"verse_nr":20,"verse":"Mirjam, la profetino, fratino de Aaron, prenis tamburinon en sian manon, kaj ĉiuj virinoj eliris post ŝi kun tamburinoj kaj dancante."},"21":{"verse_nr":21,"verse":"Kaj Mirjam antaŭkantis al ili:  Kantu al la Eternulo, ĉar Li alte leviĝis;  Ĉevalon kaj ĝian rajdanton Li ĵetis en la maron."},"22":{"verse_nr":22,"verse":"Moseo ekkondukis la Izraelidojn for de la Ruĝa Maro, kaj ili eliris al la dezerto Ŝur; ili iris dum tri tagoj tra la dezerto kaj ne trovis akvon."},"23":{"verse_nr":23,"verse":"Ili venis al Mara, sed ili ne povis trinki la akvon en Mara, ĉar ĝi estis maldolĉa; tial oni donis al la loko la nomon Mara."},"24":{"verse_nr":24,"verse":"Kaj la popolo ekmurmuris kontraŭ Moseo, dirante:Kiam ni trinkos?"},"25":{"verse_nr":25,"verse":"Tiam li kriis al la Eternulo, kaj la Eternulo montris al li arbon, kaj li ĵetis ĝin en la akvon, kaj la akvo fariĝis dolĉa. Tie Li donis al ili leĝon kaj juĝon, kaj tie Li ilin elprovis."},"26":{"verse_nr":26,"verse":"Kaj Li diris:Se vi aŭskultados la voĉon de la Eternulo, via Dio, kaj farados tion, kio plaĉas al Li, kaj vi atentados Liajn ordonojn kaj observados ĉiujn Liajn leĝojn, tiam Mi venigos sur vin neniun el tiuj malsanoj, kiujn Mi venigis sur la Egiptojn; ĉar Mi estas la Eternulo, via saniganto."},"27":{"verse_nr":27,"verse":"Kaj ili venis al Elim; tie estis dek du fontoj de akvo, kaj sepdek daktilpalmoj. Kaj ili starigis tie sian tendaron ĉe la akvo."}};

    export const CxapitroDekKvin = {
        key: 'Eliro 15',
        chapterNum: 15,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    