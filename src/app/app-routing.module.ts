import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from './components/accueil/accueil.component';
import {CalculComponent} from './components/calcul/calcul.component';
import {RecapComponent} from './components/recap/recap.component';

const routes: Routes = [
  {
    path: '',
    component: AccueilComponent
  },
  {
    path: 'calcul',
    component: CalculComponent
  },
  {
    path: 'recap',
    component: RecapComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
