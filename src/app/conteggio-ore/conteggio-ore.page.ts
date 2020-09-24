import { DettaglioOreComponent } from './dettaglio-ore/dettaglio-ore.component';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { COre } from './../../models/ConteggioOre';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';

import * as _ from 'underscore';
import * as moment from 'moment'

@Component({
  selector: 'app-conteggio-ore',
  templateUrl: './conteggio-ore.page.html',
  styleUrls: ['./conteggio-ore.page.scss'],
})
export class ConteggioOrePage implements OnInit {

  list: COre[] = [];
  list1: COre[] = [];

  constructor(private Api: ApiServiceService, private router: Router, private ModalCtrl: ModalController) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(){
    this.Api.getConteggioOre().subscribe((data)=>{
      this.list= data;
      this.list1 = _.sortBy(this.list,x => x.DateWorkStart);
      console.log(this.list1);
    })
    //console.log(moment(1533541797*1000).toISOString()) funzione epoch to iso 8610
  }


  async showModal(task: COre) {
    const modal = await this.ModalCtrl.create({
      component: DettaglioOreComponent,
      componentProps: {
        Task: task
      }
    })
    await modal.present();
  }

  getDetails(task: COre){
    this.router.navigate(['/dettaglio-ore'], {state:{task:task}})
  }

}
