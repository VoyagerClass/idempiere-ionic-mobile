import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettaglioTaskPage } from './dettaglio-task.page';

const routes: Routes = [
  {
    path: '',
    component: DettaglioTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettaglioTaskPageRoutingModule {}
