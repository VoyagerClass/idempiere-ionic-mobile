import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuovaOppTaskPage } from './nuova-opp-task.page';

const routes: Routes = [
  {
    path: '',
    component: NuovaOppTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuovaOppTaskPageRoutingModule {}
