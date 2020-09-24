import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { COre } from './../../models/ConteggioOre';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';

import * as _ from 'underscore';

@Component({
  selector: 'app-conteggio-ore',
  templateUrl: './conteggio-ore.page.html',
  styleUrls: ['./conteggio-ore.page.scss'],
})
export class ConteggioOrePage {

  list: COre[] = [];

  constructor(private Api: ApiServiceService, private router: Router, private ModalCtrl: ModalController) { }

  /* ngOnInit() {
    this.getTasks();
  } */

  ionViewDidEnter(){
    this.getTasks();
  }

  getTasks(){
    this.Api.getConteggioOre().subscribe((data)=>{
      this.list = _.sortBy(data,x => x.DateWorkStart);
      console.log(this.list);
    })
  }


  getDetails(task: COre){
    this.router.navigate(['/dettaglio-ore'], {state:{task:task}})
  }

}
