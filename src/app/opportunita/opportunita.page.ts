import { Opportunity } from './../../models/OpportunityModel';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opportunita',
  templateUrl: './opportunita.page.html',
  styleUrls: ['./opportunita.page.scss'],
})
export class OpportunitaPage {

  constructor(private Api: ApiServiceService, private router: Router) { }

  ionViewDidEnter() {
    this.getList();
  }

  list: Opportunity[] = [];
  list1: Opportunity[] = [];

  getList(){
    this.list = [];
    this.list1 = [];
    this.Api.getOpp("").subscribe((data) => { 
      this.list = data;
      this.list1 = data;
      console.log(this.list);
    });
  }

  oppDetails(id: number){
    this.router.navigateByUrl('/dettaglio-opportunita/'+id)
  }

}
