import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuovaOppTaskPageRoutingModule } from './nuova-opp-task-routing.module';

import { NuovaOppTaskPage } from './nuova-opp-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuovaOppTaskPageRoutingModule
  ],
  declarations: [NuovaOppTaskPage]
})
export class NuovaOppTaskPageModule {}
