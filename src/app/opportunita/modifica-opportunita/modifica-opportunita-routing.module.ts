import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificaOpportunitaPage } from './modifica-opportunita.page';

const routes: Routes = [
  {
    path: '',
    component: ModificaOpportunitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificaOpportunitaPageRoutingModule {}
