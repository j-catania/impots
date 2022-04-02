import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {AppService} from '../services/app.service';

@Component({
  selector: 'app-create-frais',
  templateUrl: './create-frais.component.html',
  styleUrls: ['./create-frais.component.scss']
})
export class CreateFraisComponent implements OnInit {

  form = new FormGroup({
    type: new FormControl(null, [Validators.required]),
    autre: new FormControl(null),
    prix: new FormControl(null, [Validators.required, Validators.min(1)]),
    date: new FormControl(null, Validators.required),
    biens: new FormControl([], [Validators.required])
  })
  formBien = new FormGroup({
    bien: new FormControl(null, Validators.required),
    pourcent: new FormControl(null, [Validators.required, Validators.min(0.1)])
  })
  typesFrais = this.appService.savedData.value.typeFrais;
  biens = this.appService.savedData.value.biens;
  maxDate = new Date()

  constructor(private appService: AppService, public dialogRef: MatDialogRef<CreateFraisComponent>) {
  }

  ngOnInit(): void {
    this.form.get('type')?.valueChanges.subscribe(type => {
      if (type === 'autre') {
        this.form.get('autre')?.setValidators(Validators.required)
      } else {
        this.form.get('autre')?.clearValidators()
        this.form.get('autre')?.updateValueAndValidity()
      }
    })
  }

  addBien(){
    this.form.get('biens')?.value.push(this.formBien.getRawValue())
    this.formBien.reset()
  }

  submit() {
    this.dialogRef.close(this.form.getRawValue())
  }

}