import { Router } from '@angular/router';
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

  constructor(private Api: ApiServiceService, private router: Router) { }

  ngOnInit() {
    this.date = moment(this.Task.DateWorkStart).toISOString(true);
  }

  taskCompleted() {
    let task = new COre;
    task.id = this.Task.id;
    task.IsConfirmed = 'Y';
    task.Qty = this.Task.Qty;
    console.log(task);
    this.Api.isCOreComplete(task, this.Task.id).subscribe((data)=>{
      console.log(data);
      this.router.navigateByUrl('/conteggio-ore');
    });
  }

  modifyTask(){
    this.router.navigate(['/modifica-core'], {state:{task:this.Task}});
  }


}
