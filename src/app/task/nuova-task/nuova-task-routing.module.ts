import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuovaTaskPage } from './nuova-task.page';

const routes: Routes = [
  {
    path: '',
    component: NuovaTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuovaTaskPageRoutingModule {}
