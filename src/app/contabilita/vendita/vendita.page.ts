import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { ordini } from 'src/models/OrdinieFatture';

@Component({
  selector: 'app-vendita',
  templateUrl: './vendita.page.html',
  styleUrls: ['./vendita.page.scss'],
})
export class VenditaPage implements OnInit {

  list: ordini[] = [];

  constructor(private Api: ApiServiceService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.Api.getInvoice('N').subscribe((data)=>{
      this.list = data;
      console.log(this.list);
    })
  }

}
