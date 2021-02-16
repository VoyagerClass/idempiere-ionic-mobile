import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletaInventarioPageRoutingModule } from './completa-inventario-routing.module';

import { CompletaInventarioPage } from './completa-inventario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletaInventarioPageRoutingModule
  ],
  declarations: [CompletaInventarioPage]
})
export class CompletaInventarioPageModule {}
