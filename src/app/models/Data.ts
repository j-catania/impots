import Bien from './Bien';
import Prestataire from './Prestataire';

export default interface Data {
  prestataires: Prestataire[];
  biens: Bien[];
}
