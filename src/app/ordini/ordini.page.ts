import { ordini } from './../../models/OrdinieFatture';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';

import * as _ from 'underscore';

@Component({
  selector: 'app-ordini',
  templateUrl: './ordini.page.html',
  styleUrls: ['./ordini.page.scss'],
})
export class OrdiniPage implements OnInit {

  list: ordini[] = [];
  list1: ordini[] = [];

  constructor(private Api: ApiServiceService) { }

  ngOnInit() {
    this.getOrdini();
  }

  getOrdini(){
    this.Api.getCOrder().subscribe((data)=> {
      this.list = data;
      this.list1 = _.where(data, {IsSOTrx: true});
    })
  }
  segmentChanged(ev: any){
    this.list1 = _.where(this.list, {IsSOTrx: ev.detail.value === "true"});
  }

}
