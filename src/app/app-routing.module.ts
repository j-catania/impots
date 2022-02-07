import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {CalculComponent} from './calcul/calcul.component';

const routes: Routes = [
  {
    path: '',
    component: AccueilComponent
  },
  {
    path: 'calcul',
    component: CalculComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
