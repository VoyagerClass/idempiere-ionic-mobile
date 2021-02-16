import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttivitaPageRoutingModule } from './attivita-routing.module';

import { AttivitaPage } from './attivita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttivitaPageRoutingModule
  ],
  declarations: [AttivitaPage]
})
export class AttivitaPageModule {}
