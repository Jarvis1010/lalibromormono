const chapter = {"1":{"verse_nr":1,"verse":"Al la ĥorestro. Por la gitito. Psalmo de David. Ho Eternulo, nia Sinjoro,   Kiel majesta estas Via nomo sur la tuta tero!   Vi levis Vian gloron super la ĉielon."},"2":{"verse_nr":2,"verse":"Per la buŝo de junaj infanoj kaj suĉinfanoj  Vi fondis al Vi potencon kontraŭ Viaj malamikoj,   Por kvietigi la malamikon kaj la venĝemulon."},"3":{"verse_nr":3,"verse":"Kiam mi rigardas Vian ĉielon, la faron de Viaj fingroj,   La lunon kaj la stelojn, kiujn Vi estigis:"},"4":{"verse_nr":4,"verse":"Kio estas homo, ke Vi lin memoras?   Kio estas homido, ke Vi pensas pri li?"},"5":{"verse_nr":5,"verse":"Vi malaltigis lin malmulte antaŭ Dio;   Per honoro kaj beleco Vi lin kronis."},"6":{"verse_nr":6,"verse":"Vi faris lin reganto super la faritaĵoj de Viaj manoj;   Ĉion Vi metis sub liajn piedojn:"},"7":{"verse_nr":7,"verse":"Ŝafojn kaj bovojn ĉiujn  Kaj ankaŭ la sovaĝajn bestojn,"},"8":{"verse_nr":8,"verse":"La birdojn de la ĉielo kaj la fiŝojn de la maro,   Ĉion, kio iras la vojojn de la maroj."},"9":{"verse_nr":9,"verse":"Ho Eternulo, nia Sinjoro,   Kiel majesta estas Via nomo sur la tuta tero!"}};

    export const CxapitroOk = {
        key: 'Psalmaro 8',
        chapterNum: 8,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    