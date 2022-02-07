import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import Data from '../models/Data';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private readonly LS_KEY = 'data';

  savedData: BehaviorSubject<Data> = new BehaviorSubject<Data>(JSON.parse(localStorage.getItem(this.LS_KEY) ?? '{"prestataires": [], "biens":[], "typeFrais":[]}'))

  constructor() {
    this.savedData.subscribe(value => localStorage.setItem(this.LS_KEY, JSON.stringify(value)));
  }
}
