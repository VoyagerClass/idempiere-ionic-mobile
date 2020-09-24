import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettaglioOrePage } from './dettaglio-ore.page';

const routes: Routes = [
  {
    path: '',
    component: DettaglioOrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettaglioOrePageRoutingModule {}
