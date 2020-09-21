import { SuppModalComponent } from './supp-modal/supp-modal.component';
import { ModalController } from '@ionic/angular';
import { FornitoriModel } from './../../models/FornitoriModel';
import { Router } from '@angular/router';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore'

@Component({
  selector: 'app-fornitori',
  templateUrl: './fornitori.page.html',
  styleUrls: ['./fornitori.page.scss'],
})
export class FornitoriPage implements OnInit {

  constructor(private Api: ApiServiceService,
              private router: Router,
              private ModalCtrl: ModalController) { }

  list: FornitoriModel[] = [];
  list1: FornitoriModel[] = [];
  supplier: FornitoriModel;

  ngOnInit() {
    this.queryBuild();
  }

  queryBuild = () => {
    this.list = [];
    this.Api.getSuppliers().subscribe((data) => { 
      this.list = data;
      this.list1 = data;
      console.log(this.list);
    });
  }

  leadDet(id: string) {
    this.router.navigate(['/lead-details/'+id.toString()]);
  }

  onSearchChange(ev: any){
    const regexp = new RegExp(ev.detail.value, 'i');
    if(ev.detail.value == ""){
      this.list1 = this.list;
    }else{
      this.list1 = this.list.filter(x => regexp.test(x.bpartnername))
      console.log(ev.detail.value);
      console.log(this.list1);
    }
    
  }


  async showModal(supp: FornitoriModel) {
    const modal = await this.ModalCtrl.create({
      component: SuppModalComponent,
      componentProps: {
        supplier: supp
      }
    })
    await modal.present();
  }


}
