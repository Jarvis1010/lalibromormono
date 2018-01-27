import { UnuNefai } from './1-Nifai/1-Nifai';
import { DuNefai } from './2-Nifai/2-Nifai';
import { Enos } from './Enos/Enos';
import { Mozaja } from './Mozaja/Mozaja';
import { Alma } from './Alma/Alma';
import { Helaman } from './Helaman/Helaman';
import { TriNefai } from './3-Nifai/3-Nifai';
import { KvarNefai } from './4-Nifai/4-Nifai';
import { Mormon } from './Mormon/Mormon';
import { Moroni } from './Moroni/Moroni';

export const BoM = {
  key: 'Libro de Mormono',
  image: require('../../assets/mormono.png'),
  sections: [
    UnuNefai,
    DuNefai,
    Enos,
    Mozaja,
    Alma,
    Helaman,
    TriNefai,
    KvarNefai,
    Mormon,
    Moroni,
  ],
};
