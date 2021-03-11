import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContabilitaPage } from './contabilita.page';

const routes: Routes = [
  {
    path: '',
    component: ContabilitaPage
  },
  {
    path: 'vendita',
    loadChildren: () => import('./vendita/vendita.module').then( m => m.VenditaPageModule)
  },
  {
    path: 'pagamentieacquisti',
    loadChildren: () => import('./pagamentieacquisti/pagamentieacquisti.module').then( m => m.PagamentieacquistiPageModule)
  },
  {
    path: 'dettaglio-fattura',
    loadChildren: () => import('./dettaglio-fattura/dettaglio-fattura.module').then( m => m.DettaglioFatturaPageModule)
  },
  {
    path: 'dettaglio/:id',
    loadChildren: () => import('./dettaglio/dettaglio.module').then( m => m.DettaglioPageModule)
  },
  {
    path: 'acquisti',
    loadChildren: () => import('./acquisti/acquisti.module').then( m => m.AcquistiPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContabilitaPageRoutingModule {}
