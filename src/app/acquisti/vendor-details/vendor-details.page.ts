import { CallNumber } from '@ionic-native/call-number/ngx';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Vendor } from 'src/models/Acquisti';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare let cordova: any;

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.page.html',
  styleUrls: ['./vendor-details.page.scss'],
})
export class VendorDetailsPage implements OnInit {

  constructor(private route: ActivatedRoute, 
              private api: ApiServiceService,
              public actionSheetController: ActionSheetController, 
              private router: Router,
              public callnumber: CallNumber,
              public alertcontrol: AlertController) { }

  ngOnInit() {

    document.addEventListener('deviceready', function () {
      // cordova.plugins.email is now available
    }, false);

    cordova.plugins.email.isAvailable(
      function (isAvailable) {
          // alert('Service is not available') unless isAvailable;
      }
    );

    this.getID();
  }

  vendor = new Vendor();
  vendorID = "";

  getID(){
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.vendorID = id;
      this.getVendor(id);
    });
  }

  getVendor(id: string){
    this.api.getVendor(id).subscribe((data)=>{
      console.log(data);
      this.vendor = data[0];
    })
  }

  async opzioniContatto() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opzioni',
      cssClass: '',
      buttons: [ 
      {
        text: 'Telefona',
        icon: 'call-outline',
        handler: () => {
          this.callnumber.callNumber( this.vendor.Phone , true)
          .then(res => this.insertLog(this.vendor.id , 'Call', 'PC'))
          .catch(err => console.log('Error launching dialer', err));
        }
      }, 
      {
        text: 'Crea Task',
        icon: 'clipboard-outline',
        handler: () => {
          this.router.navigateByUrl('/nuova-task/'+this.vendorID+"&"+this.vendor.lead_name);
        }
      },
      {
        text: 'Invia E-mail',
        icon: 'mail-outline',
        handler: () => {
          let mail = {
            to: this.vendor.EMail,
            isHtml: true
          }
          cordova.plugins.email.open(mail);
          this.insertLog(this.vendor.id,'Email', 'EM');
        }
      },
      {
        text: 'Annulla',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  insertLog(idc: string, evento: string, act: string){
    const id = parseInt(idc);
    this.api.addLog(id, evento, act);
  }
}
