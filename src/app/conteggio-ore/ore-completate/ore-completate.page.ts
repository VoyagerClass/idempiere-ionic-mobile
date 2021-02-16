import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { COre } from 'src/models/ConteggioOre';

import * as _ from 'underscore'

@Component({
  selector: 'app-ore-completate',
  templateUrl: './ore-completate.page.html',
  styleUrls: ['./ore-completate.page.scss'],
})
export class OreCompletatePage implements OnInit {

  constructor(private api: ApiServiceService) { }

  ngOnInit() {
    this.getList();
    console.log(this.date);
  }


  TotOre: number;
  date = new Date();

  list: COre[]
  list1: COre[];

  getList(){
    this.api.getOreCompletate().subscribe((data)=>{
      this.list = data;
      console.log(this.list);
    }) 
  }

  daySelect(date:string){
    let day = date.slice(0,10);
    this.list1 = _.where(this.list, {completiondate: day});
    this.TotOre = this.list1.reduce( (acc, obj) => acc + obj.Qty, 0);
  }

  changeDay(op: number){
    this.date.setDate(this.date.getDate() + op);
    console.log(this.date);
  }
}
