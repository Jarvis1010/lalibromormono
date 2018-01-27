const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'En tiu tago la reĝo Aĥaŝveroŝ transdonis al la reĝino Ester la domon de Haman, la malamiko de la Judoj; kaj Mordeĥaj venis antaŭ la reĝon, ĉar Ester diris, kio li estas por ŝi.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Kaj la reĝo deprenis sian ringon, kiun li forprenis de Haman, kaj donis ĝin al Mordeĥaj; kaj Ester starigis Mordeĥajon super la domo de Haman.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Kaj Ester plue parolis antaŭ la reĝo, kaj ĵetis sin antaŭ liajn piedojn, kaj ploris kaj petegis lin, ke li neniigu la malbonaĵon de Haman,  la Agagido, kaj lian planon, kiun li entreprenis kontraŭ la Judoj.',
  },
  '4': {
    verse_nr: 4,
    verse: 'La reĝo etendis al Ester sian oran sceptron, kaj Ester leviĝis kaj stariĝis antaŭ la reĝo.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Kaj ŝi diris:Se al la reĝo plaĉas, kaj se mi trovis favoron antaŭ li,  se la afero ŝajnas al li ĝusta, kaj se li havas simpation por mi:tiam estu skribate, ke oni revoku la leterojn, kiujn elpensis Haman, filo de Hamedata,  la Agagido, kaj kiujn li skribis, por ekstermi la Judojn, kiuj troviĝas en ĉiuj landoj de la reĝo;',
  },
  '6': {
    verse_nr: 6,
    verse: 'ĉar kiel mi povus vidi la malfeliĉon, kiu trafas mian popolon? kaj kiel mi povus vidi la pereon de miaj samgentanoj?',
  },
  '7': {
    verse_nr: 7,
    verse: 'Tiam la reĝo Aĥaŝveroŝ diris al la reĝino Ester kaj al la Judo Mordeĥaj:Jen la domon de Haman mi transdonis al Ester, kaj lin mem oni pendigis sur arbo, pro tio, ke li metis sian manon sur la Judojn;',
  },
  '8': {
    verse_nr: 8,
    verse: 'skribu do pri la Judoj en la nomo de la reĝo tion, kio plaĉas al vi,  kaj sigelu per la reĝa ringo; ĉar leteron, skribitan en la nomo de la reĝo kaj sigelitan per la reĝa ringo, oni ne povas revoki.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Kaj oni vokis la skribistojn de la reĝo en tiu tempo, en la tria monato,  tio estas en la monato Sivan, en ĝia dudek-tria tago; kaj oni skribis ĉion tiel, kiel ordonis Mordeĥaj, al la Judoj, al la satrapoj, al la regionestroj, kaj al la princoj de la landoj, kiuj estis de Hindujo ĝis Etiopujo, cent dudek sep landoj, al ĉiu lando laŭ ĝia skribmaniero kaj al ĉiu popolo en ĝia lingvo, ankaŭ al la Judoj laŭ ilia skribmaniero kaj en ilia lingvo.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Li skribigis en la nomo de la reĝo Aĥaŝveroŝ, kaj sigelis per la reĝa ringo, kaj sendis per rajdantaj kurieroj sur bone kurantaj bonrasaj ĉevaloj leterojn pri tio,',
  },
  '11': {
    verse_nr: 11,
    verse: 'ke la reĝo permesas al la Judoj en ĉiuj urboj kolektiĝi kaj stariĝi,  por defendi sian vivon, ekstermi, mortigi, kaj pereigi ĉiujn fortulojn de la popolo kaj de la lando, kiuj atakos ilin, la infanojn, kaj la virinojn, kaj disrabi ilian havaĵon,',
  },
  '12': {
    verse_nr: 12,
    verse: 'en la daŭro de unu tago en ĉiuj landoj de la reĝo Aĥaŝveroŝ, en la dek-tria tago de la dek-dua monato, tio estas de la monato Adar;',
  },
  '13': {
    verse_nr: 13,
    verse: 'ke oni donu kopion de ĉi tiu ordonletero kiel leĝon, proklamotan al ĉiuj popoloj, kaj ke la Judoj estu pretaj por tiu tago, por venĝi al siaj malamikoj.',
  },
  '14': {
    verse_nr: 14,
    verse: 'La kurieroj, rajdantaj sur bonrasaj ĉevaloj, elrajdis tuj kaj rapide kun la ordono de la reĝo. La leĝo estis donita en la kastelurbo Ŝuŝan.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Mordeĥaj eliris de la reĝo en reĝa vesto el blua kaj blanka ŝtofo,  kun granda ora krono, kaj en mantelo bisina kaj purpura. Kaj la urbo Ŝuŝan ĝojkriis kaj estis gaja.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Ĉe la Judoj estis lumo kaj ĝojo, gajeco kaj triumfo.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Kaj en ĉiu lando kaj en ĉiu urbo, sur ĉiu loko, kien atingis la ordono kaj dekreto de la reĝo, estis ĉe la Judoj ĝojo kaj gajeco, festeno kaj festo. Kaj multaj homoj el la popoloj de la lando fariĝis Judoj, ĉar falis sur ilin timo antaŭ la Judoj.',
  },
};

export const CxapitroOk = {
  key: 'Ester 8',
  chapterNum: 8,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
