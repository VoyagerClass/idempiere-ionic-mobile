import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VenditePage } from './vendite.page';

const routes: Routes = [
  {
    path: '',
    component: VenditePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VenditePageRoutingModule {}
