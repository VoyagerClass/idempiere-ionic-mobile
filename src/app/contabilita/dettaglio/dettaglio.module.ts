import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettaglioPageRoutingModule } from './dettaglio-routing.module';

import { DettaglioPage } from './dettaglio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettaglioPageRoutingModule
  ],
  declarations: [DettaglioPage]
})
export class DettaglioPageModule {}
