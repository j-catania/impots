import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  data = this.dataService.data.value;

  bienFG = new FormGroup({
    nom: new FormControl(null, Validators.required),
    adresse: new FormControl(null, Validators.required)
  });

  prestaFG = new FormGroup({
    nom: new FormControl(null, Validators.required),
  });

  fraisFG = new FormGroup({
    nom: new FormControl(null, Validators.required),
    prix: new FormControl(null, Validators.required),
  });

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  newBien() {
    this.data.biens.push(this.bienFG.getRawValue());
    this.update();
  }

  newPresta() {
    this.data.prestataires.push(this.prestaFG.getRawValue());
    this.update();
  }
  newFrais() {
    this.data.frais.push(this.fraisFG.getRawValue());
    this.update();
  }
  deletePresta(index: number){
    this.data.prestataires.splice(index, 1);
    this.update();
  }
  deleteBien(index: number){
    this.data.biens.splice(index, 1);
    this.update();
  }
  deleteFrais(index: number){
    this.data.frais.splice(index, 1);
    this.update();
  }

  private update() {
    this.dataService.data.next(this.data);
  }

}
