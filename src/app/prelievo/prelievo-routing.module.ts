import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrelievoPage } from './prelievo.page';

const routes: Routes = [
  {
    path: '',
    component: PrelievoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrelievoPageRoutingModule {}
