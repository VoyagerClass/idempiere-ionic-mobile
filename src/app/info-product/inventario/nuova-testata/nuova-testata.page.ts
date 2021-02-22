import { Orgs } from './../../../../models/InfoProduct';
import { ApiServiceService } from 'src/app/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuova-testata',
  templateUrl: './nuova-testata.page.html',
  styleUrls: ['./nuova-testata.page.scss'],
})
export class NuovaTestataPage implements OnInit {

  constructor(private api: ApiServiceService) { }

  orgsList: Orgs[];
  
  ngOnInit() {
    this.orgList();
  }

  orgList(){
    this.api.getOrgs().subscribe((data)=>{
      console.log(data);
      this.orgsList = data;
    })
  }

}
