import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettaglioOpportunitaPageRoutingModule } from './dettaglio-opportunita-routing.module';

import { DettaglioOpportunitaPage } from './dettaglio-opportunita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettaglioOpportunitaPageRoutingModule
  ],
  declarations: [DettaglioOpportunitaPage]
})
export class DettaglioOpportunitaPageModule {}
