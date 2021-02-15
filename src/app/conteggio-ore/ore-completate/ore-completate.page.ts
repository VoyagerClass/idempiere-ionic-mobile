import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { COre } from 'src/models/ConteggioOre';

@Component({
  selector: 'app-ore-completate',
  templateUrl: './ore-completate.page.html',
  styleUrls: ['./ore-completate.page.scss'],
})
export class OreCompletatePage implements OnInit {

  constructor(private api: ApiServiceService) { }

  ngOnInit() {
    this.getList(123);
  }

  list: COre[]

  getList(date: number){
    console.log(date);
    this.api.getOreCompletate().subscribe((data)=>{
      this.list = data;
      console.log(this.list);
    })
  }

}
