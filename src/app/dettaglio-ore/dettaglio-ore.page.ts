import { ApiServiceService } from './../api-service.service';
import { COre } from './../../models/ConteggioOre';
import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-dettaglio-ore',
  templateUrl: './dettaglio-ore.page.html',
  styleUrls: ['./dettaglio-ore.page.scss'],
})
export class DettaglioOrePage implements OnInit {

  Task: COre = history.state.task;
  date: string;

  constructor(private Api: ApiServiceService) { }

  ngOnInit() {
    this.date = moment(this.Task.DateWorkStart).toISOString(true);
  }

  taskCompleted(time: string, desc: string, duration: number){
    this.Task.DateWorkStart = time.slice(0, 19).replace('T', ' ');
    this.Task.task_description = desc;
    this.Task.isConfirmed = 'Y';
    this.Task.Qty = duration;
    this.Api.isCOreComplete(this.Task);
  }

  modifyTask(time: string, desc: string, duration: number){
    this.Task.DateWorkStart = time.slice(0, 19).replace('T', ' ');
    this.Task.task_description = desc;
    this.Task.isConfirmed = 'N';
    this.Task.Qty = duration;
    this.Api.putCOre(this.Task);
  }


}
