import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConteggioOrePageRoutingModule } from './conteggio-ore-routing.module';

import { ConteggioOrePage } from './conteggio-ore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConteggioOrePageRoutingModule
  ],
  declarations: [ConteggioOrePage]
})
export class ConteggioOrePageModule {}
