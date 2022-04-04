import Prestataire from './Prestataire';
import TypeBien from './TypeBien';
import TypeFrais from './TypeFrais';

export default interface Data {
  prestataires: Prestataire[];
  biens: TypeBien[];
  typeFrais: TypeFrais[];
}
