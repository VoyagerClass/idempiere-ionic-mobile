import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumoPage } from './consumo.page';

const routes: Routes = [
  {
    path: '',
    component: ConsumoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumoPageRoutingModule {}
