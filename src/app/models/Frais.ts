import Prestataire from './Prestataire';

export default interface Frais {
  nom: string
  prestataire: Prestataire
  prix: number
  date: Date
}
