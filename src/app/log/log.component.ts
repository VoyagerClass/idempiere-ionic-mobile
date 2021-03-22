import { Router } from '@angular/router';
import { LogAgente, LogList } from './../../models/LogModel';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit, Input } from '@angular/core';

import * as _ from 'underscore';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {

  constructor( private Api: ApiServiceService, private router: Router) { }

  @Input() id: string;

  logs: LogList [] = [];
  logs1: LogList[] = [];

  ngOnInit() {
    this.Api.getLogs("_"+this.id).subscribe((data) => {
      this.logs = _.sortBy(data, x => -x.StartDate);
      this.logs1 = _.where(this.logs, {IsComplete: false});
      console.log(data);
    });
  }

  changeList(ev: any){
    console.log(ev.detail.value);
    this.logs1 = _.where(this.logs, {IsComplete: ev.detail.value ==='true'});
  }

  taskDetail(ev: string, id: string){
    if(ev == 'false'){
      this.router.navigateByUrl('/dettaglio-task/'+id);
    }
  }

}
