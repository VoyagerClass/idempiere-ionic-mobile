import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuovaTaskPageRoutingModule } from './nuova-task-routing.module';

import { NuovaTaskPage } from './nuova-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuovaTaskPageRoutingModule
  ],
  declarations: [NuovaTaskPage]
})
export class NuovaTaskPageModule {}
