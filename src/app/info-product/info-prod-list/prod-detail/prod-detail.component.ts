import { m_product } from './../../../../models/Magazzino';
import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.component.html',
  styleUrls: ['./prod-detail.component.scss'],
})
export class ProdDetailComponent implements OnInit {

  @Input() Prod: m_product

  constructor(private ModalCtrl: ModalController) { }

  ngOnInit() {}

  async closeModal(){
    this.ModalCtrl.dismiss();
  }

}
