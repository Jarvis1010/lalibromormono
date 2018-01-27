const chapter = {"1":{"verse_nr":1,"verse":"La Eternulo reĝas; Li estas vestita de majesto;   La Eternulo estas vestita kaj zonita de potenco;   Kaj fortikigita estas la mondo, ke ĝi ne ŝanceliĝu."},"2":{"verse_nr":2,"verse":"De antikve estas fortika Via trono;   Vi estas de eterne."},"3":{"verse_nr":3,"verse":"Levas la riveroj, ho Eternulo, levas la riveroj sian voĉon,   Levas la riveroj sian bruon;"},"4":{"verse_nr":4,"verse":"Pli ol la bruo de multego da akvo,   Ol la potencaj ondoj de la maro,   Potenca estas la Eternulo en la altaĵo."},"5":{"verse_nr":5,"verse":"Viaj leĝoj estas tre fidindaj;   Via domo estas ornamita de sankteco,   Ho Eternulo, por eterne."}};

    export const CxapitroNauDekTri = {
        key: 'Psalmaro 93',
        chapterNum: 93,
        verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
      };
    