import { ApiServiceService } from 'src/app/api-service.service';
import { Component, OnInit } from '@angular/core';
import { COre } from 'src/models/ConteggioOre';

import * as moment from 'moment'
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifica-core',
  templateUrl: './modifica-core.page.html',
  styleUrls: ['./modifica-core.page.scss'],
})
export class ModificaCOrePage implements OnInit {

  Task: COre = history.state.task;

  constructor(private api: ApiServiceService, private router: Router) { }

  ngOnInit() {
  }

  date = moment(this.Task.DateWorkStart).toISOString(true);
  complete = false;

  modifyTask(data: string, time: number, desc: string) {
    let task = new COre;
    task.id = this.Task.id;
    task.AssignDateFrom = data.slice(0, 19).replace('T', ' ');
    task.Description = desc;
    task.Qty = time;
    task.Percent = '0';
    if(this.complete){
      task.Percent = '100';
    }
    console.log(task);
    this.api.putCOre(task, this.Task.id).subscribe((data)=>{
      console.log(data);
      this.router.navigateByUrl('/conteggio-ore');
    });
  }

}
