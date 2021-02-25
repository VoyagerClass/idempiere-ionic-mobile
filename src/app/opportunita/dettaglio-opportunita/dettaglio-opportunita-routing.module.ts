import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettaglioOpportunitaPage } from './dettaglio-opportunita.page';

const routes: Routes = [
  {
    path: '',
    component: DettaglioOpportunitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettaglioOpportunitaPageRoutingModule {}
