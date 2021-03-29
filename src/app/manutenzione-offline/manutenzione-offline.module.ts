import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManutenzioneOfflinePageRoutingModule } from './manutenzione-offline-routing.module';

import { ManutenzioneOfflinePage } from './manutenzione-offline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManutenzioneOfflinePageRoutingModule
  ],
  declarations: [ManutenzioneOfflinePage]
})
export class ManutenzioneOfflinePageModule {}
