import { DistDetails } from './../../../models/DistDetails';
import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dettagli-modal',
  templateUrl: './dettagli-modal.component.html',
  styleUrls: ['./dettagli-modal.component.scss'],
})
export class DettagliModalComponent implements OnInit {

  @Input() item: DistDetails

  constructor(private ModalCtrl: ModalController) { }

  ngOnInit() {}

  async closeModal(){
    this.ModalCtrl.dismiss();
  }

}
