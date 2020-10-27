import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-materialreceipt',
  templateUrl: './materialreceipt.page.html',
  styleUrls: ['./materialreceipt.page.scss'],
})
export class MaterialreceiptPage implements OnInit {

  constructor(private Api: ApiServiceService) { }

list:object

  ngOnInit() {

    this.Api.getMaterialReceipt().subscribe((data)=>{
      console.log(data);
      this.list=data;
    })
  }

}
