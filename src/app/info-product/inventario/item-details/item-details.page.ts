import { InventoryItem, InventoryDetails } from './../../../../models/InfoProduct';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {

  constructor(private route:ActivatedRoute, private api:ApiServiceService) { }

  itemId: string;
  items: InventoryDetails[];

  ngOnInit() {
    this.getPageID();
    this.getItemDetails();
  }

  getPageID(){
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.itemId = id;
    });
  }

  getItemDetails(){
    this.api.getInventoryList(this.itemId).subscribe((data)=>{
      this.items = data;
      console.log(this.items);
    })
  }

}
