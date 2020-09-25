import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VenditePageRoutingModule } from './vendite-routing.module';

import { VenditePage } from './vendite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VenditePageRoutingModule
  ],
  declarations: [VenditePage]
})
export class VenditePageModule {}
