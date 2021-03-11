import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcquistiPageRoutingModule } from './acquisti-routing.module';

import { AcquistiPage } from './acquisti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcquistiPageRoutingModule
  ],
  declarations: [AcquistiPage]
})
export class AcquistiPageModule {}
