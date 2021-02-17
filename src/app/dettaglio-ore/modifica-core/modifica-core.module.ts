import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificaCOrePageRoutingModule } from './modifica-core-routing.module';

import { ModificaCOrePage } from './modifica-core.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificaCOrePageRoutingModule
  ],
  declarations: [ModificaCOrePage]
})
export class ModificaCOrePageModule {}
