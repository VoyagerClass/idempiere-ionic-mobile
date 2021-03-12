import { LogAgente } from './../../models/LogModel';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit, Input } from '@angular/core';

import * as _ from 'underscore';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {

  constructor( private Api: ApiServiceService) { }

  @Input() id: string;

  logs: LogAgente [] = [];
  logs1: LogAgente[] = [];

  ngOnInit() {
    this.Api.getLogs("_"+this.id).subscribe((data) => {
      this.logs = _.sortBy(data, x => -x.StartDate);
      this.logs1 = this.logs;
      console.log(data);
    });
  }

  changeList(ev: any){
    console.log(ev.detail.value);
    this.logs1 = _.where(this.logs, {IsComplete: 'false'});
  }

}
