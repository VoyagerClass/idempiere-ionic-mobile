import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConteggioOrePage } from './conteggio-ore.page';

const routes: Routes = [
  {
    path: '',
    component: ConteggioOrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConteggioOrePageRoutingModule {}
