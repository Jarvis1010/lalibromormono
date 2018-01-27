const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'La reĝo Aĥaŝveroŝ metis sub tributon la teron kaj la insulojn de la maro.',
  },
  '2': {
    verse_nr: 2,
    verse: 'La tuta historio pri lia forto kaj lia potenco, kaj la detaloj pri la grandeco de Mordeĥaj, kiun la reĝo grandigis, estas priskribitaj en la libro de kroniko de la reĝoj de Medujo kaj Persujo.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Ĉar la Judo Mordeĥaj estis la dua post la reĝo Aĥaŝveroŝ, granda inter la Judoj kaj amata inter la multo de siaj fratoj, zorganta pri la bono de sia popolo kaj donanta pacon al sia tuta idaro.',
  },
};

export const CxapitroDek = {
  key: 'Ester 10',
  chapterNum: 10,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
