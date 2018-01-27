const chapter = {
  '1': {
    verse_nr: 1,
    verse: 'En la dek-unua jaro, en la tria monato, en la unua tago de la monato,  aperis al mi vorto de la Eternulo, dirante:',
  },
  '2': {
    verse_nr: 2,
    verse: 'Ho filo de homo, diru al Faraono, reĝo de Egiptujo, kaj al lia tuta popolo:Al kiu vi similigas vin en via grandeco?',
  },
  '3': {
    verse_nr: 3,
    verse: 'Jen Asirio estis kiel cedro sur Lebanon, kun belaj branĉoj, kun densa foliaro, kun alta kresko, kaj ĝia supro estis inter la nuboj.',
  },
  '4': {
    verse_nr: 4,
    verse: 'Akvo elkreskigis ĝin, la profundo altigis ĝin, ĉirkaŭante ĝian junan trunkon per siaj riveroj kaj sendante siajn fluojn al ĉiuj arboj de la kampo.',
  },
  '5': {
    verse_nr: 5,
    verse: 'Tial ĝi fariĝis pli alta ol ĉiuj arboj de la kampo; ĝi ricevis multe da branĉoj, kaj ĝiaj branĉoj longiĝis, ĉar ĝi havis multe da akvo, por disetendiĝi.',
  },
  '6': {
    verse_nr: 6,
    verse: 'Sur ĝiaj branĉoj havis siajn nestojn ĉiaj birdoj de la ĉielo, sub ĝiaj branĉoj naskis idojn ĉiaj bestoj de la kampo, kaj sub ĝia ombro loĝis ĉiaj grandaj popoloj.',
  },
  '7': {
    verse_nr: 7,
    verse: 'Kaj ĝi estis bela per sia grandeco kaj per la longeco de siaj branĉoj,  ĉar ĝiaj radikoj troviĝis apud abunda akvo.',
  },
  '8': {
    verse_nr: 8,
    verse: 'La cedroj en la ĝardeno de Dio ne estis pli altaj ol ĝi, la cipresoj ne estis egalaj al ĝiaj branĉoj, la platanoj ne povis sin kompari kun ĝiaj branĉoj; neniu arbo en la ĝardeno de Dio estis simila al ĝi per sia beleco.',
  },
  '9': {
    verse_nr: 9,
    verse: 'Mi faris ĝin bela per la multo de ĝiaj branĉoj; kaj ĉiuj Edenaj arboj, kiuj estas en la ĝardeno de Dio, enviis ĝin.',
  },
  '10': {
    verse_nr: 10,
    verse: 'Tial tiele diras la Sinjoro, la Eternulo:Pro tio, ke ĝi tro altiĝis kaj levis sian supron inter la nubojn kaj ĝia koro fieriĝis pro ĝia alteco -',
  },
  '11': {
    verse_nr: 11,
    verse: 'pro tio Mi transdonos ĝin en la manon de la plej potenca el la nacioj,  kiu agos kun ĝi konforme al ĝia malboneco kaj elpuŝos ĝin.',
  },
  '12': {
    verse_nr: 12,
    verse: 'Kaj elhakos ĝin fremduloj, la plej teruraj el la nacioj, kaj disĵetos ĝin; sur la montojn kaj sur ĉiujn valojn falos ĝiaj branĉoj, kaj ĝiaj branĉetoj rompiĝos sur ĉiuj torentoj de la lando, kaj ĉiuj popoloj de la tero foriros el sub ĝia ombro kaj forlasos ĝin.',
  },
  '13': {
    verse_nr: 13,
    verse: 'Kaj sur ĝia renversiĝinta trunko sidos ĉiaj birdoj de la ĉielo, kaj sur ĝiaj branĉoj sidos ĉiaj bestoj de la kampo,',
  },
  '14': {
    verse_nr: 14,
    verse: 'por ke neniu el la arboj apudakvaj fieriĝu pri sia alteco, nek levu sian supron inter la nubojn, kaj por ke neniu akvonutrata arbo leviĝu super ilin; ĉar ĉiuj ili estas destinitaj al la morto, en la profundon subteran,  kune kun la homoj, kiuj iris en la tombon.',
  },
  '15': {
    verse_nr: 15,
    verse: 'Tiele diras la Sinjoro, la Eternulo:En la tago, kiam ĝi iros en Ŝeolon, Mi faros funebron, Mi fermos pro ĝi la abismon, Mi haltigos ĝiajn riverojn, ke stariĝu la grandaj akvoj, Mi mallumigos pro ĝi Lebanonon, kaj ĉiuj arboj de la kampo estos afliktitaj.',
  },
  '16': {
    verse_nr: 16,
    verse: 'Per la bruo de ĝia falo Mi ektremigos la naciojn, kiam Mi puŝos ĝin en Ŝeolon al tiuj, kiuj iris en la tombon; kaj konsoliĝos en la profundo subtera ĉiuj arboj de Eden, la plej elektitaj kaj plej bonaj de Lebanon,  ĉiuj akvonutrataj.',
  },
  '17': {
    verse_nr: 17,
    verse: 'Ĉar ankaŭ ili iros en Ŝeolon, al tiuj, kiuj estis mortigitaj de glavo, kaj ĝiaj kunuloj, kiuj sidis sub ĝia ombro inter la nacioj.',
  },
  '18': {
    verse_nr: 18,
    verse: 'Al kiu el la arboj de Eden vi estis simila per majesto kaj grandeco?  tamen kune kun la arboj de Eden vi estos ĵetita en la profundon subteran;  kaj vi kuŝos meze de necirkumciditoj kune kun tiuj, kiuj mortis de glavo.  Tio estas dirita pri Faraono kaj pri lia tuta granda popolo, diras la Sinjoro, la Eternulo.',
  },
};

export const CxapitroTriDekUnu = {
  key: 'Jeĥezkel 31',
  chapterNum: 31,
  verses: [...Object.keys(chapter).map(key => `${key}. ${chapter[key].verse}`)],
};
