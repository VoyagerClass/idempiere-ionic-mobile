import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttivitaPage } from './attivita.page';

const routes: Routes = [
  {
    path: '',
    component: AttivitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttivitaPageRoutingModule {}
