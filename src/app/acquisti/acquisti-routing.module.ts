import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcquistiPage } from './acquisti.page';

const routes: Routes = [
  {
    path: '',
    component: AcquistiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcquistiPageRoutingModule {}
