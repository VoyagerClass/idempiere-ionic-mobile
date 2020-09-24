import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettaglioOrePageRoutingModule } from './dettaglio-ore-routing.module';

import { DettaglioOrePage } from './dettaglio-ore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettaglioOrePageRoutingModule
  ],
  declarations: [DettaglioOrePage]
})
export class DettaglioOrePageModule {}
