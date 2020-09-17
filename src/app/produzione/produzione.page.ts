import { Distinta } from './../../models/Distinta';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit} from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'


@Component({
  selector: 'app-produzione',
  templateUrl: './produzione.page.html',
  styleUrls: ['./produzione.page.scss'],
})
export class ProduzionePage implements OnInit {
  

  constructor(private barcode: BarcodeScanner, private Api: ApiServiceService) { }

 
  prodCode = "";
  item: Distinta;
  
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
    this.Api.getDistinta(this.prodCode).subscribe((data) => {
      console.log(data);
      this.item = data[0];
      console.log(this.item);
    });
  }
  

  

}
