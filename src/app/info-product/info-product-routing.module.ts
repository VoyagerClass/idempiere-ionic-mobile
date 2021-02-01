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
    path: 'consumo',
    loadChildren: () => import('./consumo/consumo.module').then( m => m.ConsumoPageModule)
  },
  {
    path: 'trasferimento',
    loadChildren: () => import('./trasferimento/trasferimento.module').then( m => m.TrasferimentoPageModule)
  },
  {
    path: 'info-prod-list',
    loadChildren: () => import('./info-prod-list/info-prod-list.module').then( m => m.InfoProdListPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoProductPageRoutingModule {}
