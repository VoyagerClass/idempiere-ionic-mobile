import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettaglioFatturaPage } from './dettaglio-fattura.page';

const routes: Routes = [
  {
    path: '',
    component: DettaglioFatturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettaglioFatturaPageRoutingModule {}
