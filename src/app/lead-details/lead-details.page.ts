import { Contacts, ContactField, ContactName } from '@ionic-native/contacts/ngx';
import { LeadDetails } from './../../models/LeadDetails';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit, Output } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';
import {Router} from  '@angular/router'

import { CallNumber } from '@ionic-native/call-number/ngx';


declare let cordova: any;

@Component({
  selector: 'app-lead-details',
  templateUrl: './lead-details.page.html',
  styleUrls: ['./lead-details.page.scss'],
})
export class LeadDetailsPage implements OnInit {


  lead = new LeadDetails();
  idLead: string;

  constructor(private route: ActivatedRoute, 
              private Api: ApiServiceService,
              public actionSheetController: ActionSheetController, 
              private router: Router,
              public callnumber: CallNumber,
              public alertcontrol: AlertController,
              private contacts: Contacts,
              private toastController: ToastController) { }

  ngOnInit() {

    document.addEventListener('deviceready', function () {
      // cordova.plugins.email is now available
    }, false);

    cordova.plugins.email.isAvailable(
      function (isAvailable) {
          // alert('Service is not available') unless isAvailable;
      }
    );

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      console.log((navigator as any).contacts);
    }

    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
        this.idLead = id;
        this.ComponentId = this.idLead;
        this.Api.getData('_'+this.idLead).subscribe((data) => { this.lead = data[0] });
    });


  }

  ComponentId: string;

  async opzioniContatto() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opzioni',
      cssClass: '',
      buttons: [{
        text: 'Modifica Lead',
        icon: 'cog-outline',
        handler: () => {
          this.router.navigate(['/lead-form/'+ this.idLead]);
        }
      }, 
      {
        text: 'Telefona',
        icon: 'call-outline',
        handler: () => {
          this.callnumber.callNumber( this.lead.Phone , true)
          .then(res => this.insertLog(this.lead.id , 'Call', 'PC'))
          .catch(err => console.log('Error launching dialer', err));
        }
      }, 
      {
        text: 'Crea Task',
        icon: 'clipboard-outline',
        handler: () => {
          this.router.navigateByUrl('/nuova-task/'+this.idLead+"&"+this.lead.lead_name);
        }
      },
      {
        text: 'Invia E-mail',
        icon: 'mail-outline',
        handler: () => {
          let mail = {
            to: this.lead.EMail,
            isHtml: true
          }
          cordova.plugins.email.open(mail);
          this.insertLog(this.lead.id,'Email', 'EM');
        }
      },
      {
        text: 'Salva su dispositivo',
        icon: 'save-outline',
        handler: () => {
         this.saveContact();
        }
      },  
      {
        text: 'Inserisci Opportunità',
        icon: 'cash-outline',
        handler: () => {

          this.router.navigate(['/descrizione/'+this.lead.id], {state: {lead: this.lead}});
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

  async deleteLead(){
    const alert = await this.alertcontrol.create({
      cssClass: '',
      header: 'Elimina Lead',
      message: 'Sei sicuro?',
      buttons: [
        {
          text: 'Annulla',
          role: 'cancel',
          cssClass: '',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Elimina',
          handler: () => {
            console.log('Confirm Okay');
          }
        },
      ]
    });

    await alert.present();
  }


  insertLog(idc: string, evento: string, act: string){
    const id = parseInt(idc);
    this.Api.addLog(id, evento, act);
  }


  saveContact(){
    var contact = this.contacts.create();
    contact.displayName = this.lead.lead_name;
    contact.nickname = this.lead.lead_name;
    contact.emails = [new ContactField('email', this.lead.EMail)];
    contact.phoneNumbers = [new ContactField('phone', this.lead.Phone)];
    var name = new ContactName();
    name.givenName = this.lead.lead_name;
    name.familyName = "";
    contact.name = name;
    contact.save().then(this.SuccessToast);
  }

  
  async SuccessToast() {
    const toast = await this.toastController.create({
      message: 'Contatto salvato nel telefono.',
      duration: 1000
    });
    toast.present();
  }

}
