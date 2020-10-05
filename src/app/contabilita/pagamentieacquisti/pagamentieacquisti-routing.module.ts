import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagamentieacquistiPage } from './pagamentieacquisti.page';

const routes: Routes = [
  {
    path: '',
    component: PagamentieacquistiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagamentieacquistiPageRoutingModule {}
