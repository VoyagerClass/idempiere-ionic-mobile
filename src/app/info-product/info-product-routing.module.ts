import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoProductPage } from './info-product.page';

const routes: Routes = [
  {
    path: '',
    component: InfoProductPage
  },
  {
    path: 'materialreceipt',
    loadChildren: () => import('./materialreceipt/materialreceipt.module').then( m => m.MaterialreceiptPageModule)
  },
  {
    path: 'inventario',
    loadChildren: () => import('./inventario/inventario.module').then( m => m.InventarioPageModule)
  },
  {
    path: 'trasferimento',
    loadChildren: () => import('./trasferimento/trasferimento.module').then( m => m.TrasferimentoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoProductPageRoutingModule {}
