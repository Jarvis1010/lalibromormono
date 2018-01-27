const chapter = {"1":{"verse_nr":1,"verse":"Al la ĥorestro. Psalmo de David. La Eternulo aŭskultu vin en tago de mizero;   Defendu vin la nomo de Dio de Jakob."},"2":{"verse_nr":2,"verse":"Li sendu al vi helpon el la sanktejo,   Kaj el Cion Li vin fortigu."},"3":{"verse_nr":3,"verse":"Li rememoru ĉiujn viajn oferdonojn,   Kaj via brulofero aperu grasa antaŭ Li. Sela."},"4":{"verse_nr":4,"verse":"Li donu al vi tion, kion deziras via koro;   Kaj ĉiujn viajn intencojn Li plenumu."},"5":{"verse_nr":5,"verse":"Ni estos gajaj pro Via venko,   Kaj pro la nomo de nia Dio ni levos standardon.   La Eternulo plenumu ĉiujn viajn petojn."},"6":{"verse_nr":6,"verse":"Nun mi ekscias, ke la Eternulo savas Sian sanktoleiton;   Li aŭskultas lin el Sia sankta ĉielo,   Forte savas lin per Sia dekstra mano."},"7":{"verse_nr":7,"verse":"Unuj fidas veturilojn, aliaj ĉevalojn;   Sed ni alvokas la nomon de la Eternulo, nia Dio."},"8":{"verse_nr":8,"verse":"Ili ŝanceliĝas kaj falas,   Kaj ni staras kaj tenas nin forte."},"9":{"verse_nr":9,"verse":"Ho Eternulo, savu;   La Reĝo respondu al ni, kiam ni vokas al Li."}};

    export const CxapitroDuDek = {
        key: 'Psalmaro 20',
        chapterNum: 20,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    