import { Router } from '@angular/router';
import { OrdCompl } from './../../models/OrderComp';
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
  

  constructor(private barcode: BarcodeScanner, private Api: ApiServiceService, private router: Router) { }

 
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
    if(this.prodCode!=""){
      let change = this.prodCode.split("-").join("%2D");
      let ricerca = change.split("/").join("%2F");
      this.Api.getDistinta(ricerca).subscribe((data) => {
        console.log(data);
        this.item = data[0];
        console.log(this.item);
      });
    }
  }

  isComplete(id: number, time: string, qty: number){
    let ordine: OrdCompl =  new OrdCompl;
    let ids: number[] = [];
    ids.push(id);
    ordine.ids = ids;
    ordine.C_DocTypeInv_ID = 1000164;
    ordine.MovementDate = time.slice(0, 19).replace('T', ' ');
    ordine.Qty= qty+".0";
    console.log(ordine);
    this.Api.postComplete(ordine).subscribe((data)=>{
      console.log(data);
      this.showDist();
    })
  }
  
  Prelievo(route: string, item: Distinta){
    this.router.navigate([('/prelievo/'+route)], {state: {item: item}});
  }

  PrelCompl(id: number, time: string, qty: number){
    let ordine: OrdCompl =  new OrdCompl;
    let ids: number[] = [];
    ids.push(id);
    ordine.ids = ids;
    ordine.C_DocTypeInv_ID = 1000164;
    ordine.C_DocTypeMov_ID = 1000163;
    ordine.MovementDate = time.slice(0, 19).replace('T', ' ');
    ordine.Qty= qty+".0";
    ordine.TableName = "M_Production";
    ordine.LIT_IsPickingEndDeclaration = "Y";
    console.log(ordine);
    this.Api.postAllComplete(ordine).subscribe((data)=>{
      console.log(data);
      this.showDist();
    })
  }


  

}
