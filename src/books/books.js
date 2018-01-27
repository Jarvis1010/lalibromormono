import { BoM } from './BoM/BoM';
import { MVP } from './MVP/MVP';
import { MNT } from './MNT/MNT';
import { NT } from './NT/NT';

export const books = [
  MNT,
  NT,
  BoM,
  {
    key: 'Doktrino kaj Interligoj',
    image: require('../assets/DkI.png'),
    sections: [],
  },
  MVP,
];
