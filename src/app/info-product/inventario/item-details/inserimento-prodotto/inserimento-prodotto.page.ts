import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ApiServiceService } from 'src/app/api-service.service';
import { ProductList } from 'src/models/InfoProduct';

@Component({
  selector: 'app-inserimento-prodotto',
  templateUrl: './inserimento-prodotto.page.html',
  styleUrls: ['./inserimento-prodotto.page.scss'],
})
export class InserimentoProdottoPage implements OnInit {

  constructor(private barcode: BarcodeScanner, private api: ApiServiceService) { }

  Search = "";
  list: ProductList[];

  ngOnInit() {
  }

  scanCode(){
    this.barcode.scan().then(barcodeData => {
      this.Search = barcodeData.text;
    }).catch(err => {
         console.log('Error', err);
    });
  }

  showList(){
    this.api.getInventoryListProducts(this.Search).subscribe((data)=>{
      this.list=data;
      console.log(data);
    })
  }

  insertProduct(){
    
  }

}
