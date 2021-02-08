import { ProdDetailComponent } from './prod-detail/prod-detail.component';
import { m_product } from './../../models/Magazzino';
import { ApiServiceService } from './../api-service.service';
import { MenuController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-product',
  templateUrl: './info-product.page.html',
  styleUrls: ['./info-product.page.scss'],
})
export class InfoProductPage implements OnInit {

  list: m_product;

  constructor(private router: Router, private menuCtrl: MenuController, private Api: ApiServiceService, private ModalCtrl: ModalController) { }

  ngOnInit() {
    this.menuCtrl.enable (true, 'InfoProduct');
    this.getList();
  }

  Direct(route: string){
    this.router.navigateByUrl(route);
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
    })
  }
  

}
