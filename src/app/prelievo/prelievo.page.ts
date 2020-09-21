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
  item: Distinta;
  detail: DistDetails[]=[];

  constructor(private Api: ApiServiceService, private barcode: BarcodeScanner) { }

  ngOnInit() {
  }

  scanCode(){
    this.barcode.scan().then(barcodeData => {
      this.prodCode = barcodeData.text;
      this.showDist();
    }).catch(err => {
         console.log('Error', err);
    });
  }

  showDist() {
    if(this.prodCode!=""){
      let ricerca = this.prodCode.split("/").join("%2F");
      this.Api.getDistinta(ricerca).subscribe((data) => {
        console.log(data);
        this.item = data[0];
        console.log(this.item);
        this.Api.getDetailsDist(this.item.id).subscribe((data)=>{
          console.log(data);
          this.detail=data;
          console.log(this.detail);
        })
      });
    }
  }


}
