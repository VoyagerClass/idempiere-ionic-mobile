import { OrdCompl, PrelievoCompl } from './../../models/OrderComp';
import { ActivatedRoute } from '@angular/router';
import { DistDetails } from './../../models/DistDetails';
import { ApiServiceService } from './../api-service.service';
import { Distinta } from './../../models/Distinta';
import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'


import * as moment from 'moment';

@Component({
  selector: 'app-prelievo',
  templateUrl: './prelievo.page.html',
  styleUrls: ['./prelievo.page.scss'],
})
export class PrelievoPage implements OnInit {

  prodCode = "";
  item: Distinta  = history.state.item;
  detail: DistDetails[];
  idArray: number;
  idMagazzino: number;
  itemId: number [] = [];
  qttCollector: string [] = [];
  submitEnable: boolean = true;

  constructor(private Api: ApiServiceService, private barcode: BarcodeScanner, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.idMagazzino = parseInt(param.get('id'));
    });
    this.materialList();
  }

  qtyArray(id: number, qtt: number){
    const pos = id -this.idArray;
    console.log(qtt);
    if(qtt){
      this.qttCollector[pos]= qtt+".0";
      this.itemId[pos] = id;
      this.submitEnable = false;
    }else{
      this.qttCollector[pos]= null;
      this.itemId[pos]= null;
    }

    this.submitEnable = this.isEmpty(this.qttCollector);
    console.log(this.submitEnable);
    console.log(this.qttCollector);
    console.log(this.itemId);
  }

  itemTaken(){
    let ordine: PrelievoCompl =  new PrelievoCompl;
    let qtt = this.qttCollector.filter(Boolean);
    let ids = this.itemId.filter(Boolean);
    let time = moment().format('DD/MM/YYYY HH:mm:ss').toString();
    console.log(qtt);
    console.log(ids);
    ordine.TableName = "M_ProductionLine"
    ordine.ids = ids;
    ordine.C_DocTypeMov_ID = 1000163;
    ordine.MovementDate = time;
    ordine.Qty= qtt;
    console.log(ordine);
    this.Api.postPrelevato(ordine).subscribe((data)=>{
      console.log(data);
    })
  }  


  materialList(){
    this.detail= [];
    this.Api.getDetailsDist(this.idMagazzino).subscribe((data)=>{
      console.log(data);
      this.detail=data;
      console.log(this.detail);
      this.idArray= this.detail[0].id;
    })
  }

  isEmpty(array: any){
    let bool : boolean = true;
    array.forEach(value => {
      if(value!=null){
        bool = false;
      }
    });
    return bool;
  }


}
