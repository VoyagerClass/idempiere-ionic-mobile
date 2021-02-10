import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventarioPage } from './inventario.page';

const routes: Routes = [
  {
    path: '',
    component: InventarioPage
  },
  {
    path: 'item-details/:id',
    loadChildren: () => import('./item-details/item-details.module').then( m => m.ItemDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioPageRoutingModule {}
