import {  InventoryDetails } from './../../../../models/InfoProduct';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {

  constructor(private route:ActivatedRoute, private api:ApiServiceService, private router: Router) { }

  itemId: string;
  items: InventoryDetails[];
  values: string[];

  ngOnInit() {
    this.getPageID();
    this.getItemDetails();
  }

  getPageID(){
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.values = id.split('&');
      this.itemId = this.values[0];
      console.log(this.values);
    });
  }

  getItemDetails(){
    this.api.getInventoryList(this.itemId).subscribe((data)=>{
      this.items = data;
      console.log(this.items);
    })
  }

  Direct(item: InventoryDetails){
    this.router.navigate([('/completa-inventario')], {state: {item: item}});
  }
  
  newItem(){
    this.router.navigateByUrl('/inserimento-prodotto/'+this.values[0]+'&'+this.values[1]);
  }

}
