import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VenditaPageRoutingModule } from './vendita-routing.module';

import { VenditaPage } from './vendita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VenditaPageRoutingModule
  ],
  declarations: [VenditaPage]
})
export class VenditaPageModule {}
