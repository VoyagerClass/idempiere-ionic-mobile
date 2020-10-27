import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaterialreceiptPageRoutingModule } from './materialreceipt-routing.module';

import { MaterialreceiptPage } from './materialreceipt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialreceiptPageRoutingModule
  ],
  declarations: [MaterialreceiptPage]
})
export class MaterialreceiptPageModule {}
