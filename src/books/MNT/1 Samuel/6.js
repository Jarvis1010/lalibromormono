const chapter = {"1":{"verse_nr":1,"verse":"La kesto de la Eternulo estis en la lando de la Filiŝtoj dum sep monatoj."},"2":{"verse_nr":2,"verse":"Kaj la Filiŝtoj vokis la pastrojn kaj la aŭguristojn, kaj diris:Kion ni faru kun la kesto de la Eternulo? sciigu al ni, kiamaniere ni resendu ĝin sur ĝian lokon."},"3":{"verse_nr":3,"verse":"Kaj tiuj diris:Se vi volas resendi la keston de la Dio de Izrael, ne resendu ĝin sen donacoj, sed repagu al Li prokulpan oferon; tiam vi resaniĝos, kaj ekscios, kial ne foriĝas de vi Lia mano."},"4":{"verse_nr":4,"verse":"Kaj ili diris:Kian prokulpan oferon ni repagu al Li? Kaj tiuj diris:Laŭ la nombro de la estroj de la Filiŝtoj kvin orajn tuberojn kaj kvin orajn musojn; ĉar la sama frapo trafis vin ĉiujn kaj viajn estrojn."},"5":{"verse_nr":5,"verse":"Faru bildojn de viaj tuberoj kaj bildojn de viaj musoj, kiuj ruinigis la landon, kaj faru honoron al la Dio de Izrael; tiam Li eble malplipezigos Sian manon sur vi kaj sur viaj dioj kaj sur via lando."},"6":{"verse_nr":6,"verse":"Kial vi obstinigus vian koron, kiel obstinigis sian koron Faraono kaj la Egiptoj? kiam Li montris sur ili Sian forton, ili ja forliberigis ilin, ke ili iru."},"7":{"verse_nr":7,"verse":"Nun faru novan ĉaron, kaj prenu du suĉigantajn bovinojn, kiuj ankoraŭ ne havis sur si jugon, kaj jungu la bovinojn al la ĉaro, kaj iliajn idojn forkonduku de ili hejmen."},"8":{"verse_nr":8,"verse":"Kaj prenu la keston de la Eternulo, kaj metu ĝin sur la ĉaron; kaj la orajn objektojn, kiujn vi donos al Li kiel prokulpan oferon, metu en kesteton apud ĝin, kaj forsendu ĝin, ke ĝi iru."},"9":{"verse_nr":9,"verse":"Kaj rigardu:se ĝi iros laŭ la vojo al sia regiono, al Bet-Ŝemeŝ, tiam Li faris al ni tiun grandan malbonon; se ne, tiam ni scios, ke ne Lia mano frapis nin, sed ke tio trafis nin blindokaze."},"10":{"verse_nr":10,"verse":"Kaj la homoj faris tiel, kaj ili prenis du suĉigantajn bovinojn kaj aljungis ilin al ĉaro, kaj iliajn idojn ili enŝlosis hejme;"},"11":{"verse_nr":11,"verse":"kaj ili metis la keston de la Eternulo sur la ĉaron, kaj ankaŭ la kesteton kun la oraj musoj kaj kun la bildoj de siaj tuberoj."},"12":{"verse_nr":12,"verse":"Kaj la bovinoj direktis sian iradon al la vojo, kiu kondukas al Bet-  Ŝemeŝ; ili iris nur sur unu vojeto, iris kaj blekis, sed ne forflankiĝis dekstren nek maldekstren; kaj la estroj de la Filiŝtoj iris post ili ĝis la limo de Bet-Ŝemeŝ."},"13":{"verse_nr":13,"verse":"Kaj la loĝantoj de Bet-Ŝemeŝ estis rikoltantaj tritikon en la valo;  kiam ili levis la okulojn kaj ekvidis la keston, ili ekĝojis pro tio, kion ili vidis."},"14":{"verse_nr":14,"verse":"La ĉaro venis sur la kampon de Josuo, Bet-Ŝemeŝano, kaj haltis tie;  tie estis granda ŝtono. Kaj oni dishakis la lignon de la ĉaro, kaj la bovinojn oni oferis brulofere al la Eternulo."},"15":{"verse_nr":15,"verse":"La Levidoj malsuprenprenis la keston de la Eternulo, kaj la kesteton,  kiu estis apud ĝi kaj enhavis la orajn objektojn, kaj ili metis tion sur la grandan ŝtonon; kaj la loĝantoj de Bet-Ŝemeŝ faris bruloferojn kaj buĉis buĉoferojn al la Eternulo en tiu tago."},"16":{"verse_nr":16,"verse":"Kaj la kvin estroj de la Filiŝtoj vidis, kaj reiris en Ekronon en la sama tago."},"17":{"verse_nr":17,"verse":"Kaj jen estas la oraj tuberoj, kiujn la Filiŝtoj donis kiel prokulpan oferon al la Eternulo:unu pro Aŝdod, unu pro Gaza, unu pro Aŝkelon, unu pro Gat, unu pro Ekron."},"18":{"verse_nr":18,"verse":"La oraj musoj, laŭ la nombro de ĉiuj urboj Filiŝtaj en la kvin provincoj, kiel de la urboj fortikigitaj, tiel ankaŭ de la neŝirmitaj vilaĝoj, kaj ankaŭ la granda ŝtono, sur kiun oni metis la keston de la Eternulo, estas kaŝitaj ĝis nun sur la kampo de Josuo, la Bet-Ŝemeŝano."},"19":{"verse_nr":19,"verse":"Kaj Li frapis la loĝantojn de Bet-Ŝemeŝ pro tio, ke ili enrigardis en la keston de la Eternulo; Li mortigis el la popolo kvindek mil sepdek homojn; kaj ekfunebris la popolo pro tio, ke la Eternulo frapis la popolon per granda frapo."},"20":{"verse_nr":20,"verse":"Kaj la loĝantoj de Bet-Ŝemeŝ diris:Kiu povas stari antaŭ la Eternulo, tiu sankta Dio? kaj al kiu Li iros de ni?"},"21":{"verse_nr":21,"verse":"Kaj ili sendis senditojn al la loĝantoj de Kirjat-Jearim, por diri:La Filiŝtoj redonis la keston de la Eternulo; venu, prenu ĝin al vi."}};

    export const CxapitroSes = {
        key: '1 Samuel 6',
        chapterNum: 6,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    