const chapter = {"1":{"verse_nr":1,"verse":"Post unu jaro, en la tempo, kiam la reĝoj eliras milite, David sendis Joabon kune kun siaj servantoj kaj kun ĉiuj Izraelidoj; kaj ili faris ruinigadon inter la Amonidoj, kaj sieĝis Raban. Sed David restis en Jerusalem."},"2":{"verse_nr":2,"verse":"Okazis, ke vespere David leviĝis de sia kuŝejo kaj ekpromenis sur la tegmento de la reĝa domo; kaj li ekvidis de la tegmento virinon, kiu sin lavis; kaj la virino estis tre belaspekta."},"3":{"verse_nr":3,"verse":"Kaj David sendis, por demandi pri la virino; kaj oni diris al li, ke ŝi estas Bat-Ŝeba, filino de Eliam, kaj edzino de Urija, la Ĥetido."},"4":{"verse_nr":4,"verse":"Tiam David sendis senditojn, por preni ŝin; kaj ŝi venis al li, kaj li kuŝis kun ŝi; kiam ŝi repuriĝis de sia malpureco, ŝi revenis en sian domon."},"5":{"verse_nr":5,"verse":"Kaj la virino gravediĝis, kaj ŝi sendis, por sciigi Davidon,  dirante:Mi gravediĝis."},"6":{"verse_nr":6,"verse":"Tiam David sendis al Joab, por diri:Sendu al mi Urijan, la Ĥetidon. Kaj Joab sendis Urijan al David."},"7":{"verse_nr":7,"verse":"Kiam Urija venis al li, David demandis pri la farto de Joab kaj pri la farto de la popolo kaj pri la sukceso de la milito."},"8":{"verse_nr":8,"verse":"Kaj David diris al Urija:Iru en vian domon, kaj lavu viajn piedojn. Kaj Urija eliris el la domo de la reĝo, kaj lin sekvis donacoj de la reĝo."},"9":{"verse_nr":9,"verse":"Sed Urija dormis ĉe la enirejo de la domo de la reĝo, kune kun ĉiuj servantoj de lia sinjoro, kaj li ne iris en sian domon."},"10":{"verse_nr":10,"verse":"Kaj oni raportis al David, dirante:Urija ne iris en sian domon. Tiam David diris al Urija:Vi venis ja de la vojo; kial do vi ne iris en vian domon?"},"11":{"verse_nr":11,"verse":"Kaj Urija respondis al David:La kesto kaj Izrael kaj Jehuda troviĝas en tendoj, kaj mia sinjoro Joab kaj la servantoj de mia sinjoro bivakas sur la kampo; kaj ĉu mi irus en mian domon, por manĝi kaj trinki, kaj kuŝi kun mia edzino? mi ĵuras per via vivo kaj per la vivo de via animo, ke mi ne faros tion."},"12":{"verse_nr":12,"verse":"Tiam David diris al Urija:Restu ĉi tie ankoraŭ hodiaŭ, kaj morgaŭ mi forliberigos vin. Kaj Urija restis en Jerusalem tiun tagon kaj la sekvantan."},"13":{"verse_nr":13,"verse":"Kaj David invitis lin, ke li manĝu kaj trinku ĉe li, kaj ebriigis lin. Vespere li eliris, por dormi sur sia kuŝejo kun la servantoj de sia sinjoro, sed en sian domon li ne iris."},"14":{"verse_nr":14,"verse":"Matene David skribis leteron al Joab, kaj sendis ĝin per Urija."},"15":{"verse_nr":15,"verse":"Kaj en la letero li skribis jenon:Metu Urijan en la fronton de la plej forta batalo, kaj deturniĝu de li, ke li estu frapita kaj mortu."},"16":{"verse_nr":16,"verse":"Tial, kiam Joab sieĝis la urbon, li metis Urijan sur la lokon, pri kiu li sciis, ke tie estas la plej fortaj viroj."},"17":{"verse_nr":17,"verse":"Kiam la loĝantoj de la urbo eliris kaj ekbatalis kontraŭ Joab, falis kelka nombro el la servantoj de David; kaj mortis ankaŭ Urija, la Ĥetido."},"18":{"verse_nr":18,"verse":"Joab sendis kaj raportigis al David ĉiujn cirkonstancojn de la batalo."},"19":{"verse_nr":19,"verse":"Kaj al la sendito li donis jenan ordonon:Kiam vi finos raporti al la reĝo ĉiujn cirkonstancojn de la batalo,"},"20":{"verse_nr":20,"verse":"kaj la reĝo ekkoleros, kaj diros:Kial vi alproksimiĝis al la urbo,  por batali? ĉu vi ne sciis, ke oni pafos de la muro?"},"21":{"verse_nr":21,"verse":"kiu mortigis Abimeleĥon, filon de Jerubeŝet? ĉu ne virino ĵetis sur lin de la muro muelŝtonon, ke li mortis en Tebec? kial vi alproksimiĝis al la muro? tiam diru:Ankaŭ via servanto Urija, la Ĥetido, mortis."},"22":{"verse_nr":22,"verse":"La sendito iris, kaj venis kaj raportis al David ĉion, por kio sendis lin Joab."},"23":{"verse_nr":23,"verse":"Kaj la sendito diris al David:Kiam tiuj homoj montriĝis pli fortaj ol ni kaj eliris kontraŭ nin sur la kampon, ni komencis premi ilin al la enirejo en la pordegon;"},"24":{"verse_nr":24,"verse":"tiam la pafistoj pafis sur viajn servantojn de sur la muro, kaj pereis kelkaj el la servantoj de la reĝo, kaj ankaŭ via servanto Urija, la Ĥetido, mortis."},"25":{"verse_nr":25,"verse":"Tiam David diris al la sendito:Tiel diru al Joab:Ne afliktiĝu pro tio,  ke la glavo formanĝas jen tiun, jen alian; plifortigu vian militon kontraŭ la urbo kaj detruu ĝin, kaj estu kuraĝa."},"26":{"verse_nr":26,"verse":"Kiam la edzino de Urija aŭdis, ke mortis ŝia edzo Urija, ŝi funebris pro sia edzo."},"27":{"verse_nr":27,"verse":"Kiam pasis la funebro, David sendis, kaj prenis ŝin en sian domon; kaj ŝi fariĝis lia edzino, kaj ŝi naskis al li filon. Sed la faro, kiun faris David, malplaĉis al la Eternulo."}};

    export const CxapitroDekUnu = {
        key: '2 Samuel 11',
        chapterNum: 11,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    