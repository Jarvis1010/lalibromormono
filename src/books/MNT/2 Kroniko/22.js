const chapter = {"1":{"verse_nr":1,"verse":"La loĝantoj de Jerusalem ekreĝigis lian plej junan filon Aĥazja anstataŭ li, ĉar ĉiujn pli aĝajn mortigis la taĉmento, kiu venis kun la Araboj en la tendaron. Kaj ekreĝis Aĥazja, filo de Jehoram, reĝo de Judujo."},"2":{"verse_nr":2,"verse":"La aĝon de kvardek du jaroj havis Aĥazja, kiam li fariĝis reĝo, kaj unu jaron li reĝis en Jerusalem. La nomo de lia patrino estis Atalja, filino de Omri."},"3":{"verse_nr":3,"verse":"Li ankaŭ iradis laŭ la vojoj de la domo de Aĥab, ĉar lia patrino estis lia konsilantino por malbonagi."},"4":{"verse_nr":4,"verse":"Li faradis malbonon antaŭ la Eternulo, kiel la domo de Aĥab, ĉar ili estis liaj konsilantoj post la morto de lia patro, por pereigi lin."},"5":{"verse_nr":5,"verse":"Ankaŭ ilian konsilon li sekvis, kaj iris kun Jehoram, filo de Aĥab,  milite kontraŭ Ĥazaelon, reĝon de Sirio, al Ramot en Gilead. Kaj la Sirianoj vundis Jehoramon."},"6":{"verse_nr":6,"verse":"Kaj li revenis, por kuraci sin en Jizreel de la vundoj, kiujn oni faris al li en Ramot, kiam li batalis kontraŭ Ĥazael, reĝo de Sirio. Kaj Azarja,  filo de Jehoram, reĝo de Judujo, iris por viziti Jehoramon, filon de Aĥab,  en Jizreel, ĉar ĉi tiu estis malsana."},"7":{"verse_nr":7,"verse":"Sed de Dio estis destinita pereo por Aĥazja per tio, ke li venis al Jehoram:post sia veno li eliris kun Jehoram kontraŭ Jehun, filon de Nimŝi,  kiun la Eternulo sanktoleis, por ekstermi la domon de Aĥab."},"8":{"verse_nr":8,"verse":"Kiam Jehu faris juĝon sur la domo de Aĥab, li trovis la eminentulojn de Judujo kaj la filojn de la fratoj de Aĥazja, kiuj servis al Aĥazja, kaj li mortigis ilin."},"9":{"verse_nr":9,"verse":"Kaj li serĉis Aĥazjan, kaj oni kaptis lin, kiam li estis kaŝita en Samario; kaj oni venigis lin al Jehu kaj mortigis lin kaj enterigis lin, ĉar oni diris:Li estas filo de Jehoŝafat, kiu strebis al la Eternulo per sia tuta koro. Kaj el la domo de Aĥazja restis neniu, kiu povus reĝi."},"10":{"verse_nr":10,"verse":"Kiam Atalja, la patrino de Aĥazja, vidis, ke ŝia filo mortis, ŝi leviĝis kaj ekstermis la tutan reĝan idaron de la domo de Jehuda."},"11":{"verse_nr":11,"verse":"Sed Jehoŝabeat, filino de la reĝo, prenis Joaŝon, filon de Aĥazja,  kaj ŝtele elkondukis lin el inter la mortigataj filoj de la reĝo kaj lokis lin kaj lian nutristinon en la ĉambro de litoj; kaj kaŝis lin Jehoŝabeat,  filino de la reĝo Jehoram kaj edzino de la pastro Jehojada (ĉar ŝi estis fratino de Aĥazja), for de Atalja, kaj ĉi tiu lin ne mortigis."},"12":{"verse_nr":12,"verse":"Kaj li restis kaŝita ĉe ili en la domo de Dio dum ses jaroj; kaj Atalja reĝis en la lando."}};

    export const CxapitroDuDekDu = {
        key: '2 Kroniko 22',
        chapterNum: 22,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    