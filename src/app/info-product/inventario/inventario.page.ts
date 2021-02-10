import { Router } from '@angular/router';
import { InventoryItem } from './../../../models/InfoProduct';
import { ApiServiceService } from 'src/app/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.page.html',
  styleUrls: ['./inventario.page.scss'],
})
export class InventarioPage implements OnInit {

  constructor(private api: ApiServiceService, private router:Router) { }

  list:InventoryItem[];

  ngOnInit() {
    this.getInventoryList();
  }

  getInventoryList(){
    this.api.getInventory("").subscribe((data)=>{
      this.list = data;
      console.log(this.list);
    })
  }

  itemDetail(id: number){
    this.router.navigate(['/info-product/inventario/item-details/'+id]);
  }

  onSearchChange(ev: any){
    this.api.getInventory(ev.detail.value).subscribe((data)=>{
      this.list = data;
    })
  }


}
