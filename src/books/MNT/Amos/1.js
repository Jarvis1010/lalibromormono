const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Vortoj de Amos, paŝtisto el Tekoa, kiujn li laŭvizie eldiris pri Izrael en la tempo de Uzija, reĝo de Judujo, kaj en la tempo de Jerobeam, filo de Joaŝ, reĝo de Izrael, du jarojn antaŭ la tertremo.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Li diris:La Eternulo ektondros el Cion kaj aŭdigos Sian voĉon el Jerusalem; kaj ekfunebros la paŝtejoj de la paŝtistoj, kaj sekiĝos la supro de Karmel.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Tiele diras la Eternulo:Pro tri krimoj de Damasko kaj pro kvar Mi ne indulgos ĝin, pro tio, ke ili draŝis Gileadon per fera draŝilo.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Mi sendos fajron sur la domon de Ĥazael, kaj ĝi ekstermos la palacojn de Ben-Hadad.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Mi disrompos la riglilojn de Damasko, Mi ekstermos la loĝantojn de la valo Aven kaj la tenanton de sceptro el la domo Edena, kaj la popolo Siria estos forkondukita en Kiron, diras la Eternulo.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Tiele diras la Eternulo:Pro tri krimoj de Gaza kaj pro kvar Mi ne indulgos ĝin, pro tio, ke ili tute forkondukis la kaptitojn, por transdoni ilin al Edom.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Mi sendos fajron sur la muregon de Gaza, kaj ĝi ekstermos ĝiajn palacojn.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Mi ekstermos la loĝantojn de Aŝdod kaj la tenanton de sceptro el Aŝkelon, Mi direktos Mian manon kontraŭ Ekronon, kaj pereos la restintoj de la Filiŝtoj, diras la Sinjoro, la Eternulo.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Tiele diras la Eternulo:Pro tri krimoj de Tiro kaj pro kvar Mi ne indulgos ĝin, pro tio, ke ili transdonis en plenan malliberecon al Edom kaj ne memoris la fratan interligon.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Mi sendos fajron sur la muregon de Tiro, kaj ĝi ekstermos ĝiajn palacojn.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Tiele diras la Eternulo:Pro tri krimoj de Edom kaj pro kvar Mi ne indulgos lin, pro tio, ke li persekutis kun glavo sian fraton, ke li sufokis en si la kompaton, ke li senĉese furiozas en sia kolero kaj konservas sian furiozon por ĉiam.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Mi sendos fajron sur Temanon, kaj ĝi ekstermos la palacojn de Bocra.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Tiele diras la Eternulo:Pro tri krimoj de la Amonidoj kaj pro kvar Mi ne indulgos ilin, pro tio, ke ili dishakis gravedulinojn en Gilead, por plivastigi siajn limojn.',
  },
  '14': {
    verse_nr: 14,
    verse: 'Mi ekbruligos fajron sur la murego de Raba, kaj ĝi ekstermos ĝiajn palacojn, kun bruo en la tago de batalo, kun ventego en la tago de malkvieteco.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Kaj ilia reĝo iros en forkaptitecon, li, kaj kune ankaŭ liaj eminentuloj, diras la Eternulo.',
  },
};

export const CxapitroUnu = {
  key: 'Amos 1',
  title: 'Amos',
  chapterNum: 1,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
