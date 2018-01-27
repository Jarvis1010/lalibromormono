const chapter = {"1":{"verse_nr":1,"verse":"Al la ĥorestro. Por kordaj instrumentoj, por basuloj. Psalmo de David. Ho Eternulo, ne en Via kolero min riproĉu,   Kaj ne en Via furiozo min punu."},"2":{"verse_nr":2,"verse":"Korfavoru min, ho Eternulo, ĉar mi senfortiĝis;   Sanigu min, ho Eternulo, ĉar ektremis miaj ostoj."},"3":{"verse_nr":3,"verse":"Kaj mia animo forte ektremis;   Kaj Vi, ho Eternulo, ĝis kiam?"},"4":{"verse_nr":4,"verse":"Returnu Vin, ho Eternulo, savu mian animon;   Helpu min pro Via favorkoreco."},"5":{"verse_nr":5,"verse":"Ĉar en la morto ne ekzistas memoro pri Vi;   En Ŝeol, kiu gloros Vin?"},"6":{"verse_nr":6,"verse":"Mi laciĝis de mia ĝemado;   Ĉiun nokton mi priverŝas mian liton;   Per miaj larmoj mi malsekigas mian kuŝejon."},"7":{"verse_nr":7,"verse":"Sekiĝis de malĝojo mia vizaĝo,   Maljuniĝis de ĉiuj miaj premantoj."},"8":{"verse_nr":8,"verse":"Foriĝu de mi, ĉiuj, kiuj faras malbonon;   Ĉar aŭdis la Eternulo la voĉon de mia ploro."},"9":{"verse_nr":9,"verse":"Aŭdis la Eternulo mian peton;   La Eternulo akceptos mian preĝon."},"10":{"verse_nr":10,"verse":"Hontigitaj kaj tre teruritaj estos ĉiuj miaj malamikoj;   Ili forturniĝos kaj tuj estos hontigitaj."}};

    export const CxapitroSes = {
        key: 'Psalmaro 6',
        chapterNum: 6,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    