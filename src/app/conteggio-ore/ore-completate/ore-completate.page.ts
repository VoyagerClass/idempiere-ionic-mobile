import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { COre, SalesRep } from 'src/models/ConteggioOre';

import * as _ from 'underscore'
import * as moment from 'moment';

@Component({
  selector: 'app-ore-completate',
  templateUrl: './ore-completate.page.html',
  styleUrls: ['./ore-completate.page.scss'],
})
export class OreCompletatePage implements OnInit {

  constructor(private api: ApiServiceService) { }

  ngOnInit() {
    this.getList(localStorage.getItem('ADuser'));
    this.data = moment(this.date).toISOString(true);
    this.repList();
    this.admin = localStorage.getItem('role').slice(20,21);
  }


  TotOre: number;
  date = new Date();
  data: string;
  admin: string; 
  SalesReps: SalesRep[];

  list: COre[]
  list1: COre[];

  repList(){
    this.api.getSalesRepList().subscribe((data)=>{
      this.SalesReps = data;
    })
  }

  getList(id: string){
    this.api.getOreCompletate(id).subscribe((data)=>{
      console.log(data);
      this.list = data;
      this.daySelect(this.data);
    }) 
  }

  daySelect(date:string){
    this.data= date;
    let day = date.slice(0,10);
    this.list1 = _.where(this.list, {completiondate: day});
    this.TotOre = this.list1.reduce( (acc, obj) => acc + obj.Qty, 0);
  }

  changeDay(op: number){
    if(op == 1){
      this.data = moment(this.data).add(1,'day').toISOString(true);
    }else{
      this.data = moment(this.data).subtract(1,'day').toISOString(true);
    }
    this.daySelect(this.data);
  }
}
