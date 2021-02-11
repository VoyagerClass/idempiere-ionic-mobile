import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InserimentoProdottoPageRoutingModule } from './inserimento-prodotto-routing.module';

import { InserimentoProdottoPage } from './inserimento-prodotto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InserimentoProdottoPageRoutingModule
  ],
  declarations: [InserimentoProdottoPage]
})
export class InserimentoProdottoPageModule {}
