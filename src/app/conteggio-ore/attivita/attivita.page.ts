import { Router } from '@angular/router';
import { SalesRep, Activity, Act, COre } from './../../../models/ConteggioOre';
import { ApiServiceService } from 'src/app/api-service.service';
import { Component, OnInit } from '@angular/core';

import * as moment from 'moment'
import * as _ from 'underscore'
import { PostResponse } from 'src/models/TokenResponse';

@Component({
  selector: 'app-attivita',
  templateUrl: './attivita.page.html',
  styleUrls: ['./attivita.page.scss'],
})
export class AttivitaPage implements OnInit {

  constructor(private api: ApiServiceService, private router: Router) { }

  ngOnInit() {
    this.getSalesRep();
    this.getList();
    this.userid = parseInt(localStorage.getItem('ADuser'));
    this.getID(this.userid);
  }

  date = moment().toISOString(true).slice(0, 19).replace('T', ' ');

  userid: number;
  list: Act[];
  salesrep: SalesRep[] = [];
  actname = ""
  adOrg: number;
  act = new Activity();
  ResID: number;
  complete = false;

  getList() {
    this.api.getTaskList().subscribe((data) => {
      this.list = data;
      console.log(this.list);
    })
  }


  getSalesRep() {
    this.api.getSalesRepList().subscribe((data) => {
      this.salesrep = data;
    })
  }

  getID(srep){
    this.api.getResourceID(srep).subscribe((data)=>{
      this.ResID = data[0].id;
      console.log(this.ResID);
      
   })
  }

  insertActivity(activity: number, srep: number, data: string, time: number, descname: string, desc: string) {
    this.act.S_Resource_ID = this.ResID;
    this.act.AssignDateFrom = data.slice(0, 19).replace('T', ' ');
    this.act.C_ContactActivity_ID = activity;
    this.act.Name = descname;
    this.act.Description = desc;
    this.act.Qty = time;
    this.act.AD_Org_ID = this.adOrg;
    console.log(this.act);
    this.api.postActivity(this.act).subscribe((data) => {
      console.log(data);
      let id = new PostResponse();
      id = data;
      if (this.complete) {
        let task= new COre();
        task.Percent = '100';
        task.id = parseInt(id.record_id);
        task.S_Resource_ID = this.ResID;
        console.log(task.id);
        this.api.isCOreComplete(task, parseInt(id.record_id))
      }
      this.router.navigateByUrl('/conteggio-ore');
    })
  }

  setName(id: string) {
    let actname: Act[];
    actname = _.where(this.list, { id: parseInt(id) })
    this.actname = actname[0].Name;
    this.adOrg = actname[0].AD_Org_ID;
  }

}
