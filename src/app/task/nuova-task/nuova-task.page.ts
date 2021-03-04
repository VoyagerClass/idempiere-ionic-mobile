import { Router } from '@angular/router';
import { SalesRep } from './../../../models/ConteggioOre';
import { ApiServiceService } from 'src/app/api-service.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/models/TaskLog';

import * as moment from 'moment'

@Component({
  selector: 'app-nuova-task',
  templateUrl: './nuova-task.page.html',
  styleUrls: ['./nuova-task.page.scss'],
})
export class NuovaTaskPage implements OnInit {

  constructor(private api: ApiServiceService, private router: Router) { }

  salesrep: SalesRep[];

  ngOnInit() {
    this.getSalesRep();
  }

  getSalesRep() {
    this.api.getSalesRepList().subscribe((data) => {
      console.log(data);
      this.salesrep = data;
    })
  }

  createTask(name:string, bp:number, srep:number, desc:string, com:string){
    let task = new Task;
    task.Name = name;
    task.AD_User_ID = 1000271;
    task.SalesRep_ID = srep;
    task.Description = desc;
    task.Comments = com;
    task.StartDate = moment().toISOString(true).slice(0,19).replace('T', ' ');
    task.IsInTransit = 'Y';
    task.IsMobileEnabled = 'Y';
    task.ContactActivityType = 'TA';
    task.LIT_AD_UserFrom_ID = parseInt(localStorage.getItem('ADuser'));
    task.IsComplete = 'N';
    console.log(task);
    this.api.postAssegnazioneTask(task).subscribe(_ =>{
      this.router.navigateByUrl('/task');
    })
  }

}
