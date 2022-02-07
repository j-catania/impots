import Bien from './Bien';
import Prestataire from './Prestataire';
import TypeFrais from './TypeFrais';

export default interface Data {
  prestataires: Prestataire[];
  biens: Bien[];
  typeFrais: TypeFrais[];
}
