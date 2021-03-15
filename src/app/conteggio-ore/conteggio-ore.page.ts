import { ModalController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { COre } from './../../models/ConteggioOre';
import { ApiServiceService } from './../api-service.service';
import { Component } from '@angular/core';

import * as _ from 'underscore';

@Component({
  selector: 'app-conteggio-ore',
  templateUrl: './conteggio-ore.page.html',
  styleUrls: ['./conteggio-ore.page.scss'],
})
export class ConteggioOrePage {


  list: COre[] = [];
  list1: COre[] = [];
  visible = false;

  constructor(private Api: ApiServiceService, private router: Router, private ModalCtrl: ModalController, private menuCtrl: MenuController) { }


  ionViewDidEnter(){
    this.getTasks();
    this.menuCtrl.enable (true, 'TaskDetail');
  }

  getTasks(){
    this.Api.getConteggioOre().subscribe((data)=>{
      this.list = _.sortBy(data,x => x.DateWorkStart);
      this.list1 = this.list;
      console.log(this.list);
    })
  }

  getDetails(task: COre){
    this.router.navigate(['/dettaglio-ore'], {state:{task:task}})
  }

  Direct(){
    this.router.navigateByUrl('/attivita');
  }

  SearchAct(ev: any){
    const regexp = new RegExp(ev.detail.value, 'i');
    if(ev.detail.value == ""){
      this.list1 = this.list;
    }else{
      this.list1 = this.list.filter(x => regexp.test(x.BPName))
      console.log(ev.detail.value);
      console.log(this.list1);
    }
  }

}
