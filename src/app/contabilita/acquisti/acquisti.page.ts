import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';
import { ordini } from 'src/models/OrdinieFatture';

@Component({
  selector: 'app-acquisti',
  templateUrl: './acquisti.page.html',
  styleUrls: ['./acquisti.page.scss'],
})
export class AcquistiPage implements OnInit {

  list: ordini[] = [];

  constructor(private Api: ApiServiceService, private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.Api.getInvoice('N').subscribe((data)=>{
      this.list = data;
      console.log(this.list);
    })
  }

  getDettaglio(id: number){
    this.router.navigate(['/contabilita/dettaglio/'+id])
  }

}
