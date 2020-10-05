import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagamentieacquistiPageRoutingModule } from './pagamentieacquisti-routing.module';

import { PagamentieacquistiPage } from './pagamentieacquisti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagamentieacquistiPageRoutingModule
  ],
  declarations: [PagamentieacquistiPage]
})
export class PagamentieacquistiPageModule {}
