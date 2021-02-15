import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OreCompletatePageRoutingModule } from './ore-completate-routing.module';

import { OreCompletatePage } from './ore-completate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OreCompletatePageRoutingModule
  ],
  declarations: [OreCompletatePage]
})
export class OreCompletatePageModule {}
