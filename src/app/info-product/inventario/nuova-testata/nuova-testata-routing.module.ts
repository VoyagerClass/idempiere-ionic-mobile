import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuovaTestataPage } from './nuova-testata.page';

const routes: Routes = [
  {
    path: '',
    component: NuovaTestataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuovaTestataPageRoutingModule {}
