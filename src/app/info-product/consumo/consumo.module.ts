import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumoPageRoutingModule } from './consumo-routing.module';

import { ConsumoPage } from './consumo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumoPageRoutingModule
  ],
  declarations: [ConsumoPage]
})
export class ConsumoPageModule {}
