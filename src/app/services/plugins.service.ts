import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PluginsService {

  constructor(private barcode: BarcodeScanner) { }

  scanCode(text: string){
    this.barcode.scan().then(barcodeData => {
      text = barcodeData.text;
    }).catch(err => {
         console.log('Error', err);
    });
  }

}
