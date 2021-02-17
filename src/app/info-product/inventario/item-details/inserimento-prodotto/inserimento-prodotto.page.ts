import { ActivatedRoute, Router } from '@angular/router';
import { m_inventoryline } from './../../../../../models/InfoProduct';
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

  constructor(private barcode: BarcodeScanner, private api: ApiServiceService, private route: ActivatedRoute, private router: Router) { }

  Search = "";
  list: ProductList[];
  itemId: string;

  ngOnInit() {
    this.getPageID();
  }

  getPageID(){
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.itemId = id;
    });
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

  insertProduct(qty, id){
    let prodotto = new m_inventoryline;
    prodotto.QtyCount = qty;
    prodotto.M_Product_ID = id;
    prodotto.M_Inventory_ID = parseInt(this.itemId);
    console.log(prodotto);
    this.api.postInventoryListProduct(prodotto).subscribe(_=>{
      this.router.navigateByUrl('/info-product/inventario/item-details/'+this.itemId);
    })
  }

}
