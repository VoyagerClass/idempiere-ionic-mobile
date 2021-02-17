import { Router } from '@angular/router';
import { SalesRep, Activity, Act } from './../../../models/ConteggioOre';
import { ApiServiceService } from 'src/app/api-service.service';
import { Component, OnInit } from '@angular/core';

import * as moment from 'moment'
import * as _ from 'underscore'
@Component({
  selector: 'app-attivita',
  templateUrl: './attivita.page.html',
  styleUrls: ['./attivita.page.scss'],
})
export class AttivitaPage implements OnInit {

  constructor(private api: ApiServiceService, private router: Router) { }

  ngOnInit() {
    this.getList();
    this.getSalesRep();
    this.userid = parseInt(localStorage.getItem('ADuser'));
  }

  date = moment().toISOString(true).slice(0,19).replace('T',' ');

  userid: number;
  list: Act[];
  salesrep: SalesRep[]
  actname= ""

  getList(){
    this.api.getTaskList().subscribe((data)=>{
      this.list = data;
    })
  }

  getSalesRep(){
    this.api.getSalesRepList().subscribe((data)=>{
      this.salesrep = data;
    })
  }

  insertActivity(activity, srep, data, time, descname, desc){
    let act = new Activity();
    act.C_ContactActivity_ID = activity;
    act.DateWorkStart = data.slice(0,19).replace('T',' ');
    act.SalesRep_ID = srep;
    act.Name = descname;
    act.Description = desc;
    act.Qty = time;
    this.api.postActivity(act).subscribe(_=>{
      this.router.navigateByUrl('/conteggio-ore');
    })
  }

  setName(id: string){
    let actname: Act[]; 
    actname = _.where(this.list, {id: parseInt(id)})
    this. actname = actname[0].Name;
  }

}
