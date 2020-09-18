import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrelievoPageRoutingModule } from './prelievo-routing.module';

import { PrelievoPage } from './prelievo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrelievoPageRoutingModule
  ],
  declarations: [PrelievoPage]
})
export class PrelievoPageModule {}
