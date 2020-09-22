import { ProdDetailComponent } from './prod-detail/prod-detail.component';
import { ModalController } from '@ionic/angular';
import { m_product } from './../../models/Magazzino';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-prod-list',
  templateUrl: './info-prod-list.page.html',
  styleUrls: ['./info-prod-list.page.scss'],
})
export class InfoProdListPage implements OnInit {

  list: m_product;

  constructor(private Api: ApiServiceService, private ModalCtrl: ModalController) { }

  ngOnInit() {
    this.getList();
  }

  getList(){
    this.Api.getProdList("").subscribe((data)=>{
      this.list= data;
      console.log(this.list);
    });
  }

  async showModal(prod: m_product) {
    const modal = await this.ModalCtrl.create({
      component: ProdDetailComponent,
      componentProps: {
        Prod: prod
      }
    })
    await modal.present();
  }

  onSearchChange(ev: any){
    this.Api.getProdList(ev.detail.value).subscribe((data)=>{
      this.list = data;
      console.log(ev.detail.value);
      console.log(data);
      console.log(this.list);
    })
  }

}
