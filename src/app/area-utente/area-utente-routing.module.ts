import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreaUtentePage } from './area-utente.page';

const routes: Routes = [
  {
    path: '',
    component: AreaUtentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreaUtentePageRoutingModule {}
