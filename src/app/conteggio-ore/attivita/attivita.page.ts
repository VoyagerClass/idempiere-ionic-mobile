import { SalesRep } from './../../../models/ConteggioOre';
import { Task } from './../../../models/TaskLog';
import { ApiServiceService } from 'src/app/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attivita',
  templateUrl: './attivita.page.html',
  styleUrls: ['./attivita.page.scss'],
})
export class AttivitaPage implements OnInit {

  constructor(private api: ApiServiceService) { }

  ngOnInit() {
    this.getList();
    this.getSalesRep();
  }

  userid = localStorage.getItem('ADuser');
  list: Task[];
  salesrep: SalesRep[]

  getList(){
    this.api.getTaskList().subscribe((data)=>{
      this.list = data;
      console.log(this.list);
    })
  }

  getSalesRep(){
    this.api.getSalesRepList().subscribe((data)=>{
      this.salesrep = data;
      console.log(this.salesrep);
    })
  }

}
