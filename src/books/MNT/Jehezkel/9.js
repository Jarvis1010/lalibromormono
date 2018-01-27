const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'Kaj Li vokis al miaj oreloj per laŭta voĉo, dirante:Alproksimiĝu la punantoj de la urbo, kaj ĉiu havu en sia mano sian pereigilon.',
  },
  '2': {
    verse_nr: 2,
    verse: 'Kaj jen ses homoj venis per la vojo de la supra pordego, kiu estas turnita norden, kaj ĉiu havis en la mano sian detruilon, kaj inter ili estis unu vestita per tolo, kaj li havis skribilon ĉe siaj lumboj. Ili venis, kaj stariĝis apud la kupra altaro.',
  },
  '3': {
    verse_nr: 3,
    verse: 'Kaj la majesto de Dio de Izrael leviĝis de la kerubo, sur kiu ĝi estis,  al la sojlo de la domo. Kaj Li alvokis la homon, kiu estis vestita per tolo kaj havis skribilon ĉe siaj lumboj.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Kaj la Eternulo diris al li:Trairu la urbon Jerusalem, kaj marku per litero Tav la fruntojn de tiuj homoj, kiuj ĝemas kaj malĝojas pri ĉiuj abomenindaĵoj, kiuj estas farataj en la urbo.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Kaj al la aliaj Li diris tiel, ke mi povis aŭdi:Iru tra la urbo post li,  kaj frapu; via okulo ne indulgu, kaj vi ne kompatu.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Maljunulon, junulon, junulinon, infanojn, kaj virinojn eksterme mortigu;  sed ĉiun homon, sur kiu estas la litero Tav, ne tuŝu; kaj komencu de Mia sanktejo. Kaj ili komencis de la maljunaj homoj, kiuj estis antaŭ la domo.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Kaj Li diris al ili:Malpurigu la domon, kaj plenigu la kortojn per mortigitoj; eliru! Kaj ili eliris, kaj komencis frapadi en la urbo.',
  },
  '8': {
    verse_nr: 8,
    verse: 'Kiam ili finis la mortigadon kaj mi restis, tiam mi ĵetis min vizaĝaltere, ekkriis, kaj diris:Ho Sinjoro, ho Eternulo! ĉu Vi ekstermos la tutan restaĵon de Izrael, elverŝante Vian koleron sur Jerusalemon?',
  },
  '9': {
    verse_nr: 9,
    verse: 'Kaj Li diris al mi:La malpieco de la domo de Izrael kaj de Jehuda estas tre, tre granda, kaj la lando estas plena de sango, kaj la urbo estas plena de maljusteco; ĉar ili diras:La Eternulo forlasis la landon, kaj la Eternulo ne vidas.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Tial ankaŭ Miaflanke Mia okulo ne indulgos, kaj Mi ne kompatos; ilian agadon Mi metos sur ilian kapon.',
  },
  '11': {
    verse_nr: 11,
    verse: 'Kaj jen la viro, kiu estis vestita per tolo kaj havis skribilon ĉe siaj lumboj, alportis respondon, dirante:Mi faris tion, kion Vi ordonis al mi.',
  },
};

export const CxapitroNau = {
  key: 'Jeĥezkel 9',
  chapterNum: 9,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
