import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettaglioFatturaPageRoutingModule } from './dettaglio-fattura-routing.module';

import { DettaglioFatturaPage } from './dettaglio-fattura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettaglioFatturaPageRoutingModule
  ],
  declarations: [DettaglioFatturaPage]
})
export class DettaglioFatturaPageModule {}
