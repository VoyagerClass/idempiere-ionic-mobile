import { Component, OnInit } from '@angular/core';
import { WorkOrder } from 'src/models/WorkOrder';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {

  list: WorkOrder[] = [];

  constructor(private Api: ApiServiceService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.Api.getWorkOrder().subscribe((data)=>{
      console.log(data);
      this.list = data;
    })
  }

}
