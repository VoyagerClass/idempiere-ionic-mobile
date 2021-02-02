import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AreaUtentePageRoutingModule } from './area-utente-routing.module';

import { AreaUtentePage } from './area-utente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AreaUtentePageRoutingModule
  ],
  declarations: [AreaUtentePage]
})
export class AreaUtentePageModule {}
