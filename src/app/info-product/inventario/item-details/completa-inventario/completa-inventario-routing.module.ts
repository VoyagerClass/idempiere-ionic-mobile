import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletaInventarioPage } from './completa-inventario.page';

const routes: Routes = [
  {
    path: '',
    component: CompletaInventarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletaInventarioPageRoutingModule {}
