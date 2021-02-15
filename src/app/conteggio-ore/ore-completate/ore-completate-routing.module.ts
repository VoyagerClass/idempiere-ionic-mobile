import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OreCompletatePage } from './ore-completate.page';

const routes: Routes = [
  {
    path: '',
    component: OreCompletatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OreCompletatePageRoutingModule {}
