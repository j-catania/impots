import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../services/app.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  data = this.appService.savedData.value;

  bienFG = new FormGroup({
    nom: new FormControl(null, Validators.required),
    adresse: new FormControl(null, Validators.required)
  });

  prestaFG = new FormGroup({
    nom: new FormControl(null, Validators.required),
  });

  typeFraisFG = new FormGroup({
    nom: new FormControl(null, Validators.required),
    prestataire: new FormControl(null, Validators.required),
  });

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  newBien() {
    this.data.biens.push({id: v4(), ...this.bienFG.getRawValue()});
    this.bienFG.reset();
    this.update();
  }

  newPresta() {
    this.data.prestataires.push({id: v4(), ...this.prestaFG.getRawValue()});
    this.prestaFG.reset();
    this.update();
  }
  newFrais() {
    this.data.typeFrais.push({id: v4(), ...this.typeFraisFG.getRawValue()});
    this.typeFraisFG.reset();
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
    this.data.typeFrais.splice(index, 1);
    this.update();
  }

  private update() {
    this.appService.savedData.next(this.data);
  }

}
