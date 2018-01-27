const chapter = {"1":{"verse_nr":1,"verse":"En tiu tago ekkaptos sep virinoj unu viron, kaj diros:Ni manĝados nian panon, kaj ni portados niajn vestojn; nur permesu al ni porti vian nomon,  forigu de ni nian malhonoron."},"2":{"verse_nr":2,"verse":"En tiu tago la markoto de la Eternulo estos belo kaj honoro, kaj la frukto de la tero estos majesto kaj ornamo por la savitaĵo de Izrael."},"3":{"verse_nr":3,"verse":"Kaj la restintoj en Cion kaj la reteniĝintoj en Jerusalem estos nomataj sanktuloj, ĉiuj, al kiuj la sorto lasis vivon en Jerusalem,"},"4":{"verse_nr":4,"verse":"se la Sinjoro forlavos la malpuraĵon de la filinoj de Cion, kaj forigos el Jerusalem la sangon, kiu estas interne de ĝi, per la spirito de juĝo kaj per la spirito de fajro."},"5":{"verse_nr":5,"verse":"Kaj super ĉiu loko de la monto Cion kaj super ĉiuj ĝiaj kunvenejoj la Eternulo kreos nubon kaj fumon por la tago kaj flamon de brulanta fajro por la nokto; super ĉio honora estos ŝirmo."},"6":{"verse_nr":6,"verse":"Kaj estos tendo, por ombri kontraŭ la varmegeco de la tago, kaj por rifuĝigi kaj ŝirmi kontraŭ malbona vetero kaj pluvo."}};

    export const CxapitroKvar = {
        key: 'Jesaja 4',
        chapterNum: 4,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    