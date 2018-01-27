const chapter = {"1":{"verse_nr":1,"verse":"Kaj kiam Jesuo estis naskita en Bet-Leĥem de Judujo en la tempo de la reĝo Herodo, jen saĝuloj el la oriento venis al Jerusalem, dirante:"},"2":{"verse_nr":2,"verse":"Kie estas tiu, kiu estas naskita Reĝo de la Judoj? ĉar ni vidis lian stelon en la oriento, kaj venis, por adorkliniĝi al li."},"3":{"verse_nr":3,"verse":"Kaj kiam la reĝo Herodo tion aŭdis, li maltrankviliĝis, kaj la tuta Jerusalem kun li."},"4":{"verse_nr":4,"verse":"Kaj kunveniginte ĉiujn ĉefpastrojn kaj skribistojn de la popolo, li demandis al ili, kie la Kristo devas naskiĝi."},"5":{"verse_nr":5,"verse":"Kaj ili diris al li:En Bet-Leĥem de Judujo, ĉar per la profeto estas skribite jene:"},"6":{"verse_nr":6,"verse":"Kaj vi, ho Bet-Leĥem, lando de Judujo,   Neniel estas plej malgranda inter la regantoj de Judujo;   Ĉar el vi venos reganto,   Kiu paŝtos Mian popolon Izrael."},"7":{"verse_nr":7,"verse":"Tiam Herodo sekrete venigis la saĝulojn, kaj precize sciiĝis de ili pri la tempo, kiam aperis la stelo."},"8":{"verse_nr":8,"verse":"Kaj li sendis ilin al Bet-Leĥem, dirante:Iru kaj elserĉu zorge pri la knabeto; kaj kiam vi lin trovos, sciigu al mi, por ke mi ankaŭ venu kaj adorkliniĝu al li."},"9":{"verse_nr":9,"verse":"Kaj aŭdinte la reĝon, ili ekvojiris; kaj jen la stelo, kiun ili vidis en la oriento, antaŭiris ilin, ĝis ĝi venis kaj staris super la loko, kie estis la juna knabeto."},"10":{"verse_nr":10,"verse":"Kaj vidante la stelon, ili ĝojis kun tre granda ĝojo."},"11":{"verse_nr":11,"verse":"Kaj veninte en la domon, ili vidis la knabeton kun lia patrino Maria,  kaj adorkliniĝis al li; kaj malferminte siajn trezorojn, ili faligis sin kaj prezentis al li donacojn:oron kaj olibanon kaj mirhon."},"12":{"verse_nr":12,"verse":"Kaj avertite de Dio en sonĝo, ke ili ne iru returne al Herodo, ili foriris per alia vojo al sia lando."},"13":{"verse_nr":13,"verse":"Kaj post ilia foriro jen anĝelo de la Eternulo aperis en sonĝo al Jozef, dirante:Leviĝu, kaj prenu la knabeton kaj lian patrinon, kaj forrapidu en Egiptujon, kaj restu tie, ĝis mi parolos al vi; ĉar Herodo serĉos la knabeton, por lin pereigi."},"14":{"verse_nr":14,"verse":"Kaj li leviĝis, kaj prenis la knabeton kaj lian patrinon nokte, kaj migris en Egiptujon,"},"15":{"verse_nr":15,"verse":"kaj restis tie ĝis la morto de Herodo; por ke plenumiĝu tio, kion la Eternulo parolis per la profeto, dirante:El Egiptujo Mi vokis Mian filon."},"16":{"verse_nr":16,"verse":"Tiam Herodo, ekvidinte, ke li estas trompita de la saĝuloj, tre koleris; kaj sendinte, li mortigis ĉiujn knabojn en Bet-Leĥem kaj en ĉiuj ĝiaj ĉirkaŭaĵoj, havantajn du jarojn aŭ malpli, laŭ la tempo, pri kiu li precize sciiĝis de la saĝuloj."},"17":{"verse_nr":17,"verse":"Tiam plenumiĝis tio, kio estis dirita per la profeto Jeremia, nome:"},"18":{"verse_nr":18,"verse":"Voĉo estas aŭdita en Rama,   Ĝemado kaj maldolĉa plorado,   Raĥel priploras siajn infanojn,   Kaj ŝi ne volas konsoliĝi, ĉar ili forestas."},"19":{"verse_nr":19,"verse":"Sed kiam Herodo mortis, jen anĝelo de la Eternulo aperis en sonĝo al Jozef en Egiptujo, dirante:"},"20":{"verse_nr":20,"verse":"Leviĝu, kaj prenu la knabeton kaj lian patrinon, kaj iru en la landon de Izrael; ĉar mortis tiuj, kiuj atencis la vivon de la knabeto."},"21":{"verse_nr":21,"verse":"Kaj li leviĝis, kaj prenis la knabeton kaj lian patrinon, kaj venis en la landon de Izrael."},"22":{"verse_nr":22,"verse":"Sed kiam li aŭdis, ke Arĥelao reĝas en Judujo anstataŭ sia patro Herodo, li timis iri tien; kaj avertite de Dio en sonĝo, li fortiris sin en la regionojn de Galileo,"},"23":{"verse_nr":23,"verse":"kaj venis al kaj loĝis en urbo nomata Nazaret, por ke plenumiĝu tio,  kio estis dirita per la profetoj, ke li estos nomata Nazaretano."}};

    export const CxapitroDu = {
        key: 'Mateo 2',
        
        chapterNum: 2,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    