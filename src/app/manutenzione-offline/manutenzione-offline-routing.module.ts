import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManutenzioneOfflinePage } from './manutenzione-offline.page';

const routes: Routes = [
  {
    path: '',
    component: ManutenzioneOfflinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManutenzioneOfflinePageRoutingModule {}
