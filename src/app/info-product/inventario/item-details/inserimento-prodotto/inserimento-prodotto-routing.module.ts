import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InserimentoProdottoPage } from './inserimento-prodotto.page';

const routes: Routes = [
  {
    path: '',
    component: InserimentoProdottoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InserimentoProdottoPageRoutingModule {}
