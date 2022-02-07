import Bien from './Bien';
import Frais from './Frais';
import Prestataire from './Prestataire';

export default interface Data {
  prestataires: Prestataire[];
  biens: Bien[];
  frais: Frais[];
}
