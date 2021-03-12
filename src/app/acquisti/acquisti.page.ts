import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/api-service.service';
import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/models/Acquisti';

@Component({
  selector: 'app-acquisti',
  templateUrl: './acquisti.page.html',
  styleUrls: ['./acquisti.page.scss'],
})
export class AcquistiPage implements OnInit {

  constructor(private api: ApiServiceService, private menuCtrl: MenuController, private router: Router) { }

  list: Vendor[];
  
  ngOnInit() {
    this.menuCtrl.enable (true, 'Acquisti');
    this.getList();
  }

  getList(){
    this.api.getVendorsList("").subscribe((data)=>{
      console.log(data);
      this.list = data;
    })
  }

  SearchVendor(ev: any){
    this.api.getVendorsList(ev.detail.value).subscribe((data)=>{
      this.list = data;
    })
  }

  vendorDetails(id: number){
    this.router.navigateByUrl('acquisti/'+id);
  }

}
