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

  modifyTask(data: string, time: number, descname, desc: string, check: boolean ) {
    let task = new COre;
    task.id = this.Task.id;
    task.DateWorkStart = data.slice(0, 19).replace('T', ' ');
    task.Description = desc;
    task.Qty = time;
    if(check){
      task.IsConfirmed = 'Y';
    }
    console.log(task);
    this.api.putCOre(task, this.Task.id).subscribe((data)=>{
      console.log(data);
      this.router.navigateByUrl('/conteggio-ore');
    });
  }

}
