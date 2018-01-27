const chapter = {"1":{"verse_nr":1,"verse":"Kaj la tuta Juda popolo prenis Uzijan, kiu havis la aĝon de dek ses jaroj, kaj faris lin reĝo anstataŭ lia patro Amacja."},"2":{"verse_nr":2,"verse":"Li prikonstruis Elaton kaj revenigis ĝin al Judujo, post kiam la reĝo ekdormis kun siaj patroj."},"3":{"verse_nr":3,"verse":"La aĝon de dek ses jaroj havis Uzija, kiam li fariĝis reĝo, kaj kvindek du jarojn li reĝis en Jerusalem. La nomo de lia patrino estis Jeĥolja, el Jerusalem."},"4":{"verse_nr":4,"verse":"Li agadis bone antaŭ la Eternulo, tiel same, kiel agadis lia patro Amacja."},"5":{"verse_nr":5,"verse":"Li turnadis sin al Dio en la tempo de Zeĥarja, la kompetentulo en Diaj vizioj; kaj en tiu tempo, kiam li turnadis sin al la Eternulo, Dio donadis al li sukceson."},"6":{"verse_nr":6,"verse":"Li eliris kaj militis kontraŭ la Filiŝtoj; li detruis la muregon de Gat, la muregon de Jabne, kaj la muregon de Aŝdod; kaj li konstruis urbojn en la regiono de Aŝdod kaj en Filiŝtujo."},"7":{"verse_nr":7,"verse":"Kaj Dio helpis al li kontraŭ la Filiŝtoj, kaj kontraŭ la Araboj, kiuj loĝis en Gur-Baal, kaj kontraŭ la Meunoj."},"8":{"verse_nr":8,"verse":"Kaj la Amonidoj donis al Uzija donacojn, kaj lia nomo fariĝis fama ĝis la limo de Egiptujo, ĉar li estis tre forta."},"9":{"verse_nr":9,"verse":"Uzija konstruis turojn en Jerusalem super la Pordego Angula, super la Pordego de la Valo, kaj super la angulo, kaj fortikigis ilin."},"10":{"verse_nr":10,"verse":"Li konstruis ankaŭ turojn en la dezerto kaj elhakis multe da putoj,  ĉar li havis multe da brutoj sur la malaltaĵo kaj sur la ebenaĵo; li havis ankaŭ terkultivistojn kaj vinberistojn sur la montoj kaj kreskotaŭgaj lokoj, ĉar li estis amanto de la tero."},"11":{"verse_nr":11,"verse":"Uzija havis militistaron, kapablan por bataloj, elirantan en militon per taĉmentoj, laŭ la nombro, kalkulita de la skribisto Jeiel kaj de la inspektisto Maaseja, sub kontrolo de Ĥananja, el la altranguloj de la reĝo."},"12":{"verse_nr":12,"verse":"La tuta nombro de la ĉefoj de patrodomoj, el la bravaj militistoj,  estis du mil sescent;"},"13":{"verse_nr":13,"verse":"kaj sub ilia regado estis militistaro el tricent sep mil kvincent povantaj fari militon kun batalkapableco, por helpi al la reĝo kontraŭ la malamiko."},"14":{"verse_nr":14,"verse":"Kaj Uzija pretigis por ili, por la tuta militistaro, ŝildojn, lancojn,  kaskojn, kirasojn, pafarkojn, kaj ŝtonojn por ŝtonĵetiloj."},"15":{"verse_nr":15,"verse":"Kaj li faris en Jerusalem maŝinojn, elpensitajn de specialistoj, por ke ili troviĝu sur la turoj kaj sur la anguloj, por ĵetadi sagojn kaj grandajn ŝtonojn. Kaj lia nomo fariĝis fama malproksime, ĉar li mirinde aranĝis al si helpon, ĝis li fariĝis potenca."},"16":{"verse_nr":16,"verse":"Sed kiam li fariĝis potenca, lia koro fieriĝis tiel, ke li malboniĝis. Li krimis kontraŭ la Eternulo, lia Dio, kaj li eniris en la templon de la Eternulo, por incensi sur la altaro de incensado."},"17":{"verse_nr":17,"verse":"Kaj eniris post li la pastro Azarja, kaj kun li okdek pastroj de la Eternulo, kuraĝuloj;"},"18":{"verse_nr":18,"verse":"kaj ili stariĝis kontraŭ la reĝo Uzija, kaj diris al li:Ne vi,  Uzija, devas incensi al la Eternulo, sed incensi devas la pastroj, idoj de Aaron, sanktigitaj; eliru el la sanktejo, ĉar vi faris krimon, kaj tio ne estos por vi honora antaŭ Dio, la Eternulo."},"19":{"verse_nr":19,"verse":"Tiam Uzija ekkoleris, kaj en la mano li tenis incensilon, por incensi.  Sed kiam li ekkoleris kontraŭ la pastroj, lepro aperis sur lia frunto,  antaŭ la pastroj en la domo de la Eternulo, apud la altaro de incensado."},"20":{"verse_nr":20,"verse":"Kiam sin turnis al li la ĉefpastro Azarja kaj ĉiuj pastroj, ili ekvidis, ke li havas lepron sur la frunto. Kaj ili rapide elkondukis lin de tie, kaj ankaŭ li mem rapidis eliri, ĉar la Eternulo lin frapis."},"21":{"verse_nr":21,"verse":"Kaj la reĝo Uzija restis lepra ĝis la tago de sia morto, kaj li loĝis en izolita domo de leprulo; ĉar li estis forigita for de la domo de la Eternulo. Kaj lia filo Jotam estis ĉefo de la reĝa domo kaj regis la popolon de la lando."},"22":{"verse_nr":22,"verse":"La ceteran historion de Uzija, la unuan kaj la lastan, priskribis la profeto Jesaja, filo de Amoc."},"23":{"verse_nr":23,"verse":"Kaj Uzija ekdormis kun siaj patroj, kaj oni enterigis lin kun liaj patroj sur la kampo de la tomboj de la reĝoj; ĉar oni diris:Li estas leprulo. Kaj anstataŭ li ekreĝis lia filo Jotam."}};

    export const CxapitroDuDekSes = {
        key: '2 Kroniko 26',
        chapterNum: 26,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    