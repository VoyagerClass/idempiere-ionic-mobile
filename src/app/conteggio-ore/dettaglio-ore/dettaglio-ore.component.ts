import { COre } from './../../../models/ConteggioOre';
import { ModalController } from '@ionic/angular';
import { ApiServiceService } from './../../api-service.service';
import { Component, Input, OnInit } from '@angular/core';

import * as moment from 'moment'

@Component({
  selector: 'app-dettaglio-ore',
  templateUrl: './dettaglio-ore.component.html',
  styleUrls: ['./dettaglio-ore.component.scss'],
})
export class DettaglioOreComponent implements OnInit {

  @Input() Task: COre;

  constructor(private Api: ApiServiceService, private ModalCtrl: ModalController) { }

  ngOnInit() {
    this.date = moment(this.Task.DateWorkStart).toISOString(true)
    console.log(this.date);
  }

  date: string;

  async closeModal(){
    this.ModalCtrl.dismiss();
  }

}
