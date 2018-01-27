const chapter = {"1":{"verse_nr":1,"verse":"Jen estas la vorto, kiun la profeto Jeremia diris al Baruĥ, filo de Nerija, kiam ĉi tiu skribis tiujn vortojn en libron sub diktado de Jeremia,  en la kvara jaro de Jehojakim, filo de Joŝija, reĝo de Judujo:"},"2":{"verse_nr":2,"verse":"Tiele diras la Eternulo, Dio de Izrael, pri vi, ho Baruĥ:"},"3":{"verse_nr":3,"verse":"Vi diris:Ve al mi! ĉar la Eternulo aldonis malĝojon al mia suferado;  mi laciĝis de mia ĝemado, kaj mi ne trovas ripozon."},"4":{"verse_nr":4,"verse":"Tiele diru al li:Tiele diras la Eternulo:Jen tion, kion Mi konstruis, Mi detruas, kaj kion Mi plantis, tion Mi elradikigas, ĉi tiun tutan Mian landon;"},"5":{"verse_nr":5,"verse":"kaj vi postulas por vi grandaĵon! Ne postulu; ĉar jen Mi venigos malbonon sur ĉiun karnon, diras la Eternulo, sed al vi Mi donos vian animon kiel akiron sur ĉiuj lokoj, kien vi iros."}};

    export const CxapitroKvarDekKvin = {
        key: 'Jeremia 45',
        chapterNum: 45,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    