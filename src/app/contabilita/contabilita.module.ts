import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContabilitaPageRoutingModule } from './contabilita-routing.module';

import { ContabilitaPage } from './contabilita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContabilitaPageRoutingModule
  ],
  declarations: [ContabilitaPage]
})
export class ContabilitaPageModule {}
