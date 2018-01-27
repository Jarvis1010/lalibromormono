const chapter = {"1":{"verse_nr":1,"verse":"Kanto de suprenirado. Mi levas miajn okulojn al la montoj:   De kie venas al mi helpo?"},"2":{"verse_nr":2,"verse":"Mia helpo venas de la Eternulo,   Kiu kreis la ĉielon kaj la teron."},"3":{"verse_nr":3,"verse":"Li ne lasos vian piedon falpuŝiĝi;   Via gardanto ne dormetas."},"4":{"verse_nr":4,"verse":"Jen ne dormetas kaj ne dormas  La gardanto de Izrael."},"5":{"verse_nr":5,"verse":"La Eternulo estas via gardanto;   La Eternulo estas via ombro ĉe via dekstra mano."},"6":{"verse_nr":6,"verse":"En la tago la suno vin ne frapos,   Nek la luno en la nokto."},"7":{"verse_nr":7,"verse":"La Eternulo vin gardos de ĉia malbono,   Li gardos vian animon."},"8":{"verse_nr":8,"verse":"La Eternulo gardos vian eliron kaj eniron,   De nun kaj eterne."}};

    export const CxapitroCentDuDekUnu = {
        key: 'Psalmaro 121',
        chapterNum: 121,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    