import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VenditaPage } from './vendita.page';

const routes: Routes = [
  {
    path: '',
    component: VenditaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VenditaPageRoutingModule {}
