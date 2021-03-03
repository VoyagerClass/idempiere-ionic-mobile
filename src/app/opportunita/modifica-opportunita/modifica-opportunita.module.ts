import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificaOpportunitaPageRoutingModule } from './modifica-opportunita-routing.module';

import { ModificaOpportunitaPage } from './modifica-opportunita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificaOpportunitaPageRoutingModule
  ],
  declarations: [ModificaOpportunitaPage]
})
export class ModificaOpportunitaPageModule {}
