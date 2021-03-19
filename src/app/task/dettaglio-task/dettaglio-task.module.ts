import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettaglioTaskPageRoutingModule } from './dettaglio-task-routing.module';

import { DettaglioTaskPage } from './dettaglio-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettaglioTaskPageRoutingModule
  ],
  declarations: [DettaglioTaskPage]
})
export class DettaglioTaskPageModule {}
