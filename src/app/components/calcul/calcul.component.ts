import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {v4} from 'uuid';
import Frais from '../../models/Frais';
import {AppService} from '../../services/app.service';
import {CreateFraisComponent} from '../create-frais/create-frais.component';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.scss']
})
export class CalculComponent implements OnInit {

  displayedColumns = ['nom', 'prestataire'].concat(this.appService.savedData.value.biens.map(value => value.nom)).concat('total', 'actions')
  dataSource = new MatTableDataSource()
  biens = this.appService.savedData.value.biens

  constructor(private appService: AppService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    setTimeout(() => this.ajouterFrais(), 1000)
  }

  ajouterFrais() {
    const dialogRef = this.dialog.open(CreateFraisComponent, {height: '70vh', width: '80vw'});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const fraisBien: any = {};
        for (const element of result.biens) {
          fraisBien[element.bien.id] = {pourcent: element.pourcent, ...element.bien};
        }
        const frais: Frais = {
          id: v4(),
          nom: result.type === 'autre' ? result.autre : result.type.nom,
          prix: result.prix,
          date: result.date,
          prestataire: result.type === 'autre' ? {nom: 'Autre'} : result.type.prestataire,
          biens: fraisBien
        }
        this.dataSource.data.push(frais)
        this.dataSource.data = this.dataSource.data;
      }
    });
  }

  delete(id: string) {
    this.dataSource.data = this.dataSource.data.filter((item: any) => item.id !== id);
  }

  done() {
    console.log(this.dataSource.data)
  }
}
