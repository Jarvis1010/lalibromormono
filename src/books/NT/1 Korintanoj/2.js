const chapter = {"1":{"verse_nr":1,"verse":"Kaj mi, fratoj, venante al vi, venis ne kun supereco de parolo aŭ de saĝeco, proklamante al vi la misteron de Dio."},"2":{"verse_nr":2,"verse":"Ĉar mi decidis scii ĉe vi nenion, krom Jesuo Kristo kaj tiu krucumita."},"3":{"verse_nr":3,"verse":"Kaj mi estis ĉe vi en malforteco kaj en timo kaj en multa tremado."},"4":{"verse_nr":4,"verse":"Kaj mia parolo kaj mia prediko estis ne en allogaj paroloj de saĝeco,  sed en elmontro de la Spirito kaj potenco,"},"5":{"verse_nr":5,"verse":"por ke via fido estu ne laŭ la saĝeco de homoj, sed laŭ la potenco de Dio."},"6":{"verse_nr":6,"verse":"Tamen ni parolas saĝecon inter plenaĝuloj, sed saĝecon ne de ĉi tiu mondo, nek de la regantoj de ĉi tiu mondo, kiuj neniiĝas;"},"7":{"verse_nr":7,"verse":"sed ni parolas la saĝecon de Dio en mistero, la saĝecon kaŝitan, kiun Dio antaŭdestinis antaŭ la mondaĝoj por nia glorado;"},"8":{"verse_nr":8,"verse":"kaj kiun scias neniu el la regantoj de ĉi tiu mondo; ĉar se ili ĝin scius, ili ne krucumus la Sinjoron de gloro;"},"9":{"verse_nr":9,"verse":"sed kiel estas skribite:      Tion, kion okulo ne vidis kaj orelo ne aŭdis,   Kaj kio en la koron de homo ne eniris,   Dio preparis por tiuj, kiuj Lin amas."},"10":{"verse_nr":10,"verse":"Sed al ni Dio malkaŝis ilin per la Spirito; ĉar la Spirito esploras ĉion, eĉ la profundaĵojn de Dio."},"11":{"verse_nr":11,"verse":"Ĉar kiu inter homoj scias la aferojn de iu homo, krom la spirito de la homo, kiu estas en li? tiel same la aferojn de Dio scias neniu, krom la Spirito de Dio."},"12":{"verse_nr":12,"verse":"Sed ni ricevis ne la spiriton de la mondo, sed la spiriton, kiu estas de Dio; por ke ni sciu tion, al ni donacitan de Dio."},"13":{"verse_nr":13,"verse":"Pri kio ankaŭ ni parolas per vortoj, ne kiujn instruas homa saĝeco,  sed kiujn instruas la Spirito; komparante spiritajn kun spiritaj."},"14":{"verse_nr":14,"verse":"Sed la natura homo ne akceptas la aferojn de la Spirito de Dio; ĉar ili estas por li malsaĝeco; kaj li ne povas ilin scii, pro tio, ke ili estas juĝataj spirite."},"15":{"verse_nr":15,"verse":"Sed la spirita homo juĝas ĉion, kaj li mem estas juĝata de neniu."},"16":{"verse_nr":16,"verse":"Ĉar kiu sciis la menson de la Eternulo, ke li instruu Lin? Sed ni havas la menson de Kristo."}};

    export const CxapitroDu = {
        key: '1 Korintanoj 2',
        
        chapterNum: 2,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    