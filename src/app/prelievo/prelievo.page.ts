import { ActivatedRoute } from '@angular/router';
import { DistDetails } from './../../models/DistDetails';
import { ApiServiceService } from './../api-service.service';
import { Distinta } from './../../models/Distinta';
import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'

@Component({
  selector: 'app-prelievo',
  templateUrl: './prelievo.page.html',
  styleUrls: ['./prelievo.page.scss'],
})
export class PrelievoPage implements OnInit {

  prodCode = "";
  item: Distinta  = history.state.item;
  detail: DistDetails[];
  idMagazzino: number;
  itemId: number [] = [];
  qttCollector: string [] = [];

  constructor(private Api: ApiServiceService, private barcode: BarcodeScanner, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.idMagazzino = parseInt(param.get('id'));
    });
    this.materialList();
  }

  qtyArray(id: number, qtt: number){
    if(qtt){
      this.qttCollector.push(qtt+".0");
      this.itemId.push(id);
    }
  }

  itemTaken(){
    console.log(this.qttCollector);
    console.log(this.itemId);
  }  


  materialList(){
    this.detail= [];
    this.Api.getDetailsDist(this.idMagazzino).subscribe((data)=>{
      this.detail=data;
      console.log(this.detail);
    })
  }


  


}
