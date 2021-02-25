import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'lead-details/:id',
    loadChildren: () => import('./lead-details/lead-details.module').then( m => m.LeadDetailsPageModule)
  },
  {
    path: 'lead-form/:id',
    loadChildren: () => import('./lead-form/lead-form.module').then( m => m.LeadFormPageModule)
  },
  {
    path: 'crm',
    loadChildren: () => import('./crm-page/crm-page.module').then( m => m.CrmPagePageModule)
  },
  {
    path: 'interventi',
    loadChildren: () => import('./interventi-page/interventi-page.module').then( m => m.InterventiPagePageModule)
  },
  {
    path: 'descrizione/:id',
    loadChildren: () => import('./descrizione-offerta/descrizione-offerta.module').then( m => m.DescrizioneOffertaPageModule)
  },
  {
    path: 'task',
    loadChildren: () => import('./task/task.module').then( m => m.TaskPageModule)
  },
  {
    path: 'fornitori',
    loadChildren: () => import('./fornitori/fornitori.module').then( m => m.FornitoriPageModule)
  },
  {
    path: 'opportunita',
    loadChildren: () => import('./opportunita/opportunita.module').then( m => m.OpportunitaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'produzione',
    loadChildren: () => import('./produzione/produzione.module').then( m => m.ProduzionePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./landing-page/landing-page.module').then( m => m.LandingPagePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'prelievo/:id',
    loadChildren: () => import('./prelievo/prelievo.module').then( m => m.PrelievoPageModule)
  },
  {
    path: 'info-product',
    loadChildren: () => import('./info-product/info-product.module').then( m => m.InfoProductPageModule)
  },
  {
    path: 'dettaglio-bp',
    loadChildren: () => import('./dettaglio-bp/dettaglio-bp.module').then( m => m.DettaglioBPPageModule)
  },
  {
    path: 'bp-details/:id',
    loadChildren: () => import('./bp-details/bp-details.module').then( m => m.BpDetailsPageModule)
  },
  {
    path: 'conteggio-ore',
    loadChildren: () => import('./conteggio-ore/conteggio-ore.module').then( m => m.ConteggioOrePageModule)
  },
  {
    path: 'dettaglio-ore',
    loadChildren: () => import('./dettaglio-ore/dettaglio-ore.module').then( m => m.DettaglioOrePageModule)
  },
  {
    path: 'ordini',
    loadChildren: () => import('./ordini/ordini.module').then( m => m.OrdiniPageModule)
  },
  {
    path: 'contabilita',
    loadChildren: () => import('./contabilita/contabilita.module').then( m => m.ContabilitaPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'service',
    loadChildren: () => import('./service/service.module').then( m => m.ServicePageModule)
  },
  {
    path: 'area-utente',
    loadChildren: () => import('./area-utente/area-utente.module').then( m => m.AreaUtentePageModule)
  },
  {
    path: 'completa-inventario',
    loadChildren: () => import('./info-product/inventario/item-details/completa-inventario/completa-inventario.module').then( m => m.CompletaInventarioPageModule)
  },
  {
    path: 'inserimento-prodotto/:id',
    loadChildren: () => import('./info-product/inventario/item-details/inserimento-prodotto/inserimento-prodotto.module').then( m => m.InserimentoProdottoPageModule)
  },
  {
    path: 'ore-completate',
    loadChildren: () => import('./conteggio-ore/ore-completate/ore-completate.module').then( m => m.OreCompletatePageModule)
  },
  {
    path: 'attivita',
    loadChildren: () => import('./conteggio-ore/attivita/attivita.module').then( m => m.AttivitaPageModule)
  },
  {
    path: 'modifica-core',
    loadChildren: () => import('./dettaglio-ore/modifica-core/modifica-core.module').then( m => m.ModificaCOrePageModule)
  },
  {
    path: 'nuova-testata',
    loadChildren: () => import('./info-product/inventario/nuova-testata/nuova-testata.module').then( m => m.NuovaTestataPageModule)
  },
  {
    path: 'dettaglio-opportunita/:id',
    loadChildren: () => import('./opportunita/dettaglio-opportunita/dettaglio-opportunita.module').then( m => m.DettaglioOpportunitaPageModule)
  },
  {
    path: 'nuova-opp-task/:id',
    loadChildren: () => import('./opportunita/nuova-opp-task/nuova-opp-task.module').then( m => m.NuovaOppTaskPageModule)
  }



















];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
