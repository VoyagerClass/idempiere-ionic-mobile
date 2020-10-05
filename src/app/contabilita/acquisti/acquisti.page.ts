import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { ordini } from 'src/models/OrdinieFatture';

@Component({
  selector: 'app-acquisti',
  templateUrl: './acquisti.page.html',
  styleUrls: ['./acquisti.page.scss'],
})
export class AcquistiPage implements OnInit {

  list: ordini[] = [];

  constructor(private Api: ApiServiceService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.Api.getInvoice('Y').subscribe((data)=>{
      this.list = data;
      console.log(this.list);
    })
  }

}
