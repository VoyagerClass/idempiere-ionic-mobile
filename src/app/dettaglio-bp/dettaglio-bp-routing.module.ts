import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettaglioBPPage } from './dettaglio-bp.page';

const routes: Routes = [
  {
    path: '',
    component: DettaglioBPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettaglioBPPageRoutingModule {}
