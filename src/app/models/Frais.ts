import TypeBien from './TypeBien';
import TypeFrais from './TypeFrais';

export default interface Frais extends TypeFrais {
  prix: number
  date: Date
  biens: TypeBien[]
}
