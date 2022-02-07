import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import Data from '../models/Data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly LS_KEY = 'data';

  data: BehaviorSubject<Data> = new BehaviorSubject<Data>(JSON.parse(localStorage.getItem(this.LS_KEY) ?? '{"prestataires": [], "biens":[], "frais":[]}'))

  constructor() {
    this.data.subscribe(value => localStorage.setItem(this.LS_KEY, JSON.stringify(value)));
  }
}
