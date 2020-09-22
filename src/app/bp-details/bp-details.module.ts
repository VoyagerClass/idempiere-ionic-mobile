import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BpDetailsPageRoutingModule } from './bp-details-routing.module';

import { BpDetailsPage } from './bp-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BpDetailsPageRoutingModule
  ],
  declarations: [BpDetailsPage]
})
export class BpDetailsPageModule {}
