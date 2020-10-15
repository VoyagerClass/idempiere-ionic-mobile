import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettaglioPage } from './dettaglio.page';

const routes: Routes = [
  {
    path: '',
    component: DettaglioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettaglioPageRoutingModule {}
