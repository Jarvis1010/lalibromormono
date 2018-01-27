const chapter = {"1":{"verse_nr":1,"verse":"Al la ĥorestro. Por kordaj instrumentoj. Psalmo de Asaf. Kanto. Dio estas konata en Judujo;   Granda estas Lia nomo en Izrael."},"2":{"verse_nr":2,"verse":"En Salem estas Lia tendo,   Kaj Lia loĝejo sur Cion."},"3":{"verse_nr":3,"verse":"Tie Li rompis la sagojn de pafarko,   Ŝildon, glavon, kaj militon.  Sela."},"4":{"verse_nr":4,"verse":"Vi estas majesta kaj potenca sur la sovaĝbestaj montoj."},"5":{"verse_nr":5,"verse":"Senarmiĝis la fortkoruloj, endormiĝis;   Kaj ĉiuj militistoj restis kvazaŭ sen manoj."},"6":{"verse_nr":6,"verse":"De Via minaco, ho Dio de Jakob,   Paraliziĝis rajdisto kaj ĉevalo."},"7":{"verse_nr":7,"verse":"Vi, Vi estas timinda;   Kaj kiu restos staranta antaŭ Vi, kiam ekflamas Via kolero?"},"8":{"verse_nr":8,"verse":"El la ĉielo Vi aŭdigis juĝon;   La tero ektimis kaj eksilentis,"},"9":{"verse_nr":9,"verse":"Kiam Dio leviĝis, por juĝi,   Por savi ĉiujn humilulojn sur la tero.  Sela."},"10":{"verse_nr":10,"verse":"Ĉar la kolero de homo fariĝas Via gloro,   Kiam Vi zonas Vin per la resto de Via kolero."},"11":{"verse_nr":11,"verse":"Faru kaj plenumu promesojn al la Eternulo, via Dio;   Vi ĉiuj, kiuj Lin ĉirkaŭas, alportu donacojn al la Timindulo."},"12":{"verse_nr":12,"verse":"Li humiligis la spiriton de potenculoj;   Li estas timinda por la reĝoj de la tero."}};

    export const CxapitroSepDekSes = {
        key: 'Psalmaro 76',
        chapterNum: 76,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    