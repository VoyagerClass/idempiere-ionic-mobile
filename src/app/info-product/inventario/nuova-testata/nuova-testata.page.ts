import { Router } from '@angular/router';
import { Orgs, Mags, Docs, Inventory } from './../../../../models/InfoProduct';
import { ApiServiceService } from 'src/app/api-service.service';
import { Component, OnInit } from '@angular/core';

import * as moment from 'moment'

@Component({
  selector: 'app-nuova-testata',
  templateUrl: './nuova-testata.page.html',
  styleUrls: ['./nuova-testata.page.scss'],
})
export class NuovaTestataPage implements OnInit {

  constructor(private api: ApiServiceService, private router: Router) { }

  orgsList: Orgs[];
  magsList: Mags[];
  docsList: Docs[];

  
  ngOnInit() {
    this.orgList();
    this.getDocList();
  }

  orgList(){
    this.api.getOrgs().subscribe((data)=>{
      console.log(data);
      this.orgsList = data;
    })
  }

  getDocList(){
    this.api.getDoc().subscribe((data)=>{
      console.log(data);
      this.docsList = data;
    })
  }

  getMagazziniList(id: number){
    this.api.getMagazzini(id).subscribe((data)=>{
      console.log(data);
      this.magsList = data;
    })
  }

  postInv(name: string, org: string, mag: number, doc: number){
    let inv = new Inventory;
    inv.Description = name;
    inv.AD_Org_ID = org;
    inv.C_DocType_ID = doc;
    inv.M_Warehouse_ID = mag;
    inv.MovementDate = moment().toISOString(true).slice(0, 19).replace('T', ' ');
    console.log(inv);
    this.api.postNewInventory(inv).subscribe((data)=>{
      console.log(data);
      this.router.navigateByUrl('/info-product/inventario/item-details/'+data.record_id+'&'+org, { skipLocationChange: true });
    })
  }

}
