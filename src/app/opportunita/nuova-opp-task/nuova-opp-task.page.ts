import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';
import { OppTasks } from 'src/models/OpportunityModel';

import * as moment from 'moment'

@Component({
  selector: 'app-nuova-opp-task',
  templateUrl: './nuova-opp-task.page.html',
  styleUrls: ['./nuova-opp-task.page.scss'],
})
export class NuovaOppTaskPage implements OnInit {

  constructor(private api: ApiServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getID();
    this.time = moment().toISOString(true).slice(0,19).replace('T', ' ');
  }

  ids: string[];
  time = "";

  getID(){
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.ids = id.split('&');
      console.log(this.ids);
    });
  }

  postOppTask(contact: string, desc: string){
    let OppTask = new OppTasks();
    OppTask.C_BPartner_ID = this.ids[0];
    OppTask.C_Opportunity_ID = this.ids[1];
    OppTask.ContactActivityType = contact;
    OppTask.C_Activity_ID= 1000012;
    OppTask.AD_Org_ID = this.ids[2];
    OppTask.Description = desc;
    OppTask.SalesRep_ID = localStorage.getItem('ADuser');
    OppTask.StartDate = moment().toISOString(true).slice(0,19).replace('T', ' ');
    OppTask.IsComplete = 'Y';
    console.log(OppTask);
    this.api.postOppTasks(OppTask).subscribe((data)=>{
      console.log(data);
      this.router.navigateByUrl('/dettaglio-opportunita/'+this.ids[1]);
    })
  }

}
