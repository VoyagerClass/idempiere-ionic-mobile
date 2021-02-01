import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrasferimentoPage } from './trasferimento.page';

const routes: Routes = [
  {
    path: '',
    component: TrasferimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrasferimentoPageRoutingModule {}
