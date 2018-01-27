const chapter = {"1":{"verse_nr":1,"verse":"Al la ĥorestro. Por ŝoŝanoj. Instrua ama kanto de la Koraĥidoj.  Mia koro pleniĝis per bona temo;   Mi kantos pri reĝo;   Mia lango estas kiel plumo de lerta skribisto."},"2":{"verse_nr":2,"verse":"Vi estas la plej bela el la homidoj;   Ĉarmo estas sur viaj lipoj;   Tial Dio benis vin por ĉiam."},"3":{"verse_nr":3,"verse":"Zonu vian lumbon per glavo,   Vi, forta per via majesteco kaj beleco."},"4":{"verse_nr":4,"verse":"Kaj en via beleco prosperu, forrajdu por la vero,   Por justeco al la humiluloj;   Kaj via dekstra mano montros miraklojn."},"5":{"verse_nr":5,"verse":"Viaj sagoj estas akraj;   Kaj, faligante antaŭ vi la popolojn,   Ili penetros en la koron de la malamikoj de la reĝo."},"6":{"verse_nr":6,"verse":"Via trono estas Dia trono por ĉiam kaj eterne;   La sceptro de via regno estas sceptro de justeco."},"7":{"verse_nr":7,"verse":"Vi amas virton kaj malamas malvirton;   Tial Dio, via Dio, oleis vin per oleo de ĝojo pli ol viajn kamaradojn."},"8":{"verse_nr":8,"verse":"De mirho, aloo, kaj kasio odoras ĉiuj viaj vestoj;   En palacoj eburaj ĝojigas vin muziko."},"9":{"verse_nr":9,"verse":"Reĝidinoj estas inter viaj karulinoj;   Ĉe via dekstra flanko staras edzino en Ofira oro."},"10":{"verse_nr":10,"verse":"Aŭdu, filino, rigardu, kaj klinu vian orelon,   Kaj forgesu vian popolon kaj la domon de via patro;"},"11":{"verse_nr":11,"verse":"Kaj kiam la reĝo deziros vian belecon,   Ĉar li estas via sinjoro, tiam vi kliniĝu antaŭ li."},"12":{"verse_nr":12,"verse":"Kaj la filino de Tiro venos al vi kun donacoj;   Petegos antaŭ vi la riĉuloj de la popolo."},"13":{"verse_nr":13,"verse":"En sia plena ornamo estas interne la reĝidino;   El ora teksaĵo estas ŝia vesto."},"14":{"verse_nr":14,"verse":"En broditaj vestoj ŝi estas kondukata al la reĝo;   Post ŝi estas kondukataj al vi knabinoj, ŝiaj koleginoj."},"15":{"verse_nr":15,"verse":"Ili estas kondukataj kun ĝojo kaj kantoj;   Ili eniras en la palacon de la reĝo."},"16":{"verse_nr":16,"verse":"Anstataŭ viaj patroj estos viaj filoj;   Vi faros ilin princoj sur la tuta tero."},"17":{"verse_nr":17,"verse":"Mi memorigos vian nomon de generacio al generacio;   Tial gloros vin popoloj ĉiam kaj eterne."}};

    export const CxapitroKvarDekKvin = {
        key: 'Psalmaro 45',
        chapterNum: 45,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    