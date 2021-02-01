import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoProdListPageRoutingModule } from './info-prod-list-routing.module';

import { InfoProdListPage } from './info-prod-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoProdListPageRoutingModule
  ],
  declarations: [InfoProdListPage]
})
export class InfoProdListPageModule {}
