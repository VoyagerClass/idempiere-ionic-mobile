import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrasferimentoPageRoutingModule } from './trasferimento-routing.module';

import { TrasferimentoPage } from './trasferimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrasferimentoPageRoutingModule
  ],
  declarations: [TrasferimentoPage]
})
export class TrasferimentoPageModule {}
