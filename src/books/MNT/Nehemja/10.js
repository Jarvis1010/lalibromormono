const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'La sigelintoj estas:Neĥemja, la regionestro, filo de Ĥaĥalja, kaj Cidkija,',
  },
  '2': { verse_nr: 2, verse: 'Seraja, Azarja, Jeremia,' },
  '3': { verse_nr: 3, verse: 'Paŝĥur, Amarja, Malkija,' },
  '4': { verse_nr: 4, verse: 'Ĥatuŝ, Ŝebanja, Maluĥ,' },
  '5': { verse_nr: 5, verse: 'Ĥarim, Meremot, Obadja,' },
  '6': { verse_nr: 6, verse: 'Daniel, Ginton, Baruĥ,' },
  '7': { verse_nr: 7, verse: 'Meŝulam, Abija, Mijamin,' },
  '8': { verse_nr: 8, verse: 'Maazja, Bilgaj, Ŝemaja. Tio estas la pastroj.' },
  '9': {
    verse_nr: 9,
    verse: 'La Levidoj:Jeŝua, filo de Azanja, Binuj, el la filoj de Ĥenadad,  Kadmiel;',
  },
  '10': {
    verse_nr: 10,
    verse: 'kaj iliaj fratoj:Ŝebanja, Hodija, Kelita, Pelaja, Ĥanan,',
  },
  '11': { verse_nr: 11, verse: 'Miĥa, Reĥob, Ĥaŝabja,' },
  '12': { verse_nr: 12, verse: 'Zakur, Ŝerebja, Ŝebanja,' },
  '13': { verse_nr: 13, verse: 'Hodija, Bani, Beninu.' },
  '14': {
    verse_nr: 14,
    verse: 'La ĉefoj de la popolo:Paroŝ, Paĥat-Moab, Elam, Zatu, Bani,',
  },
  '15': { verse_nr: 15, verse: 'Buni, Azgad, Bebaj,' },
  '16': { verse_nr: 16, verse: 'Adonija, Bigvaj, Adin,' },
  '17': { verse_nr: 17, verse: 'Ater, Ĥizkija, Azur,' },
  '18': { verse_nr: 18, verse: 'Hodija, Ĥaŝum, Becaj,' },
  '19': { verse_nr: 19, verse: 'Ĥarif, Anatot, Nebaj,' },
  '20': { verse_nr: 20, verse: 'Magpiaŝ, Meŝulam, Ĥezir,' },
  '21': { verse_nr: 21, verse: 'Meŝezabel, Cadok, Jadua,' },
  '22': { verse_nr: 22, verse: 'Pelatja, Ĥanan, Anaja,' },
  '23': { verse_nr: 23, verse: 'Hoŝea, Ĥananja, Ĥaŝub,' },
  '24': { verse_nr: 24, verse: 'Haloĥeŝ, Pilĥa, Ŝobek,' },
  '25': { verse_nr: 25, verse: 'Reĥum, Ĥaŝabna, Maaseja,' },
  '26': { verse_nr: 26, verse: 'Aĥija, Ĥanan, Anan,' },
  '27': { verse_nr: 27, verse: 'Maluĥ, Ĥarim, Baana.' },
  '28': {
    verse_nr: 28,
    verse: 'Kaj la cetera popolo, la pastroj, Levidoj, pordegistoj, kantistoj,  Netinoj, kaj ĉiuj, kiuj apartiĝis de la aligentaj popoloj al la instruo de Dio, iliaj edzinoj, filoj, kaj filinoj, ĉiuj, kiuj povis kompreni,',
  },
  '29': {
    verse_nr: 29,
    verse: 'aliĝis al siaj fratoj, al la eminentuloj, kaj ligis sin per ĵura promeso, ke ili sekvos la instruon de Dio, donitan per Moseo, servanto de Dio, kaj ke ili konservos kaj plenumos ĉiujn ordonojn de la Eternulo, nia Sinjoro, Liajn preskribojn kaj leĝojn;',
  },
  '30': {
    verse_nr: 30,
    verse: 'ke ni ne donos niajn filinojn al la popoloj de la lando, kaj iliajn filinojn ni ne prenos por niaj filoj;',
  },
  '31': {
    verse_nr: 31,
    verse: 'ke kiam la popoloj de la lando venigos la komercaĵojn aŭ ĉiaspecan grenon en sabato, por vendi, ni ne prenos de ili en sabato aŭ en alia sankta tago; ke en ĉiu sepa jaro ni forigos ĉiujn ŝuldojn.',
  },
  '32': {
    verse_nr: 32,
    verse: 'Kaj ni starigis al ni kiel leĝon, ke ni donados de ni po triono de siklo ĉiujare por la servado en la domo de nia Dio:',
  },
  '33': {
    verse_nr: 33,
    verse: 'por la panoj de propono, por la ĉiutaga farunofero, por la ĉiutaga brulofero, por la sabatoj, monatkomencoj, festoj, por la sanktaĵoj, por pekoferoj, por pekliberigi Izraelon, kaj por ĉiuj laboroj en la domo de nia Dio.',
  },
  '34': {
    verse_nr: 34,
    verse: 'Kaj ni lotis inter la pastroj, Levidoj, kaj popolo pri la ofera liverado de ligno en la domo de nia Dio, laŭ niaj patrodomoj, ĉiujare en difinitaj tempoj, por bruligi sur la altaro de la Eternulo, nia Dio, kiel estas skribite en la instruo.',
  },
  '35': {
    verse_nr: 35,
    verse: 'Kaj ni akceptis kiel devon, ke ni alportados la unuaaĵojn de nia tero kaj la unuaaĵojn de ĉiuj fruktoj de ĉiu arbo ĉiujare en la domon de la Eternulo;',
  },
  '36': {
    verse_nr: 36,
    verse: 'ankaŭ la unuenaskitojn el niaj filoj kaj el niaj brutoj, kiel estas skribite en la instruo, kaj la unuenaskitojn de niaj bovoj kaj de niaj ŝafoj ni alportados en la domon de nia Dio, al la pastroj, kiuj servas en la domo de nia Dio.',
  },
  '37': {
    verse_nr: 37,
    verse: 'Kaj la unuaaĵon de nia pasto, niajn oferdonojn, la fruktojn de ĉiuj arboj, moston, kaj oleon ni alportados al la pastroj en la ĉambrojn de la domo de nia Dio; kaj la dekonaĵon de nia tero ni donos al la Levidoj, por ke ili, la Levidoj, havu dekonaĵon en ĉiuj urboj, kie ni prilaboras la teron.',
  },
  '38': {
    verse_nr: 38,
    verse: 'Kaj la pastro, la Aaronido, estos kun la Levidoj, kiam ili prenos la dekonaĵon; kaj la Levidoj venigos dekonaĵon el la dekonaĵo en la domon de nia Dio, en la ĉambrojn de la provizejo.',
  },
  '39': {
    verse_nr: 39,
    verse: 'Ĉar en tiujn ĉambrojn la Izraelidoj kaj la Levidoj devas liveri la oferdonon el la greno, mosto, kaj oleo. Tie troviĝas la vazoj de la sanktejo, la servantaj pastroj, la pordegistoj, kaj la kantistoj. Kaj ni ne forlasos la domon de nia Dio.',
  },
};

export const CxapitroDek = {
  key: 'Neĥemja 10',
  chapterNum: 10,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
