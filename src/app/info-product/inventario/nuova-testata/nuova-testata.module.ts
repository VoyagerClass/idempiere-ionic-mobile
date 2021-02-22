import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuovaTestataPageRoutingModule } from './nuova-testata-routing.module';

import { NuovaTestataPage } from './nuova-testata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuovaTestataPageRoutingModule
  ],
  declarations: [NuovaTestataPage]
})
export class NuovaTestataPageModule {}
