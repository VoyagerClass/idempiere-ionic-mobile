import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoProdListPage } from './info-prod-list.page';

const routes: Routes = [
  {
    path: '',
    component: InfoProdListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoProdListPageRoutingModule {}
