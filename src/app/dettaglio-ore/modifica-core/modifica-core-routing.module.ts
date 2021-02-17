import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificaCOrePage } from './modifica-core.page';

const routes: Routes = [
  {
    path: '',
    component: ModificaCOrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificaCOrePageRoutingModule {}
