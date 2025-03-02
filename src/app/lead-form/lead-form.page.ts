import { SalesRep } from 'src/models/ConteggioOre';
import { LeadDetails } from './../../models/LeadDetails';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lead-form',
  templateUrl: './lead-form.page.html',
  styleUrls: ['./lead-form.page.scss'],
})
export class LeadFormPage implements OnInit {

  constructor(private Api: ApiServiceService, 
              private toastController: ToastController, 
              public fb: FormBuilder,
              private route: ActivatedRoute,
              private navCtrl: NavController) { }

    lead = new LeadDetails;
    title: string;
    salesrep: SalesRep[] = [];
    button = "";
  
  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      if(id != 'new'){
        this.title = "Modifica";
        this.Api.getData("_"+id).subscribe((data) => { 
          this.lead = data[0];
          this.lead.Name = this.lead.lead_name;
          this.button = "Modifica";
          console.log(this.lead);
         });
      }else{
        this.title = "Inserimento";
        this.lead.Name = "";
        this.lead.EMail = "";
        this.lead.Phone = "";
        this.button = "Inserisci"
      }
    });
    this.getAgent();
    
  }

  getAgent(){
    this.Api.getSalesRepList().subscribe((data)=>{
      this.salesrep = data;
      console.log(data);
    })
  }

  insertLead(name: string, phone: string, email: string, leads: string, repID: number){
    let lead = new LeadDetails();
    lead.Name = name;
    lead.Phone = phone;
    lead.EMail = email;
    lead.LeadStatus = leads;
    if(this.title == 'Modifica'){
      lead.SalesRep_ID = repID;
      lead.id = this.lead.id;
      lead.AD_User_ID = this.lead.id;
    }
    console.log(lead);
    this.Api.modifyLead(lead);
    this.ToastAccept();
    this.navCtrl.back();
  }


  async ToastError() {
    const toast = await this.toastController.create({
      cssClass: "Toasterror",
      message: "Inserisci i campi obbligatori",
      duration: 2500
    });
    toast.present();
  }

  async ToastAccept() {
    const toast = await this.toastController.create({
      cssClass: "Toastaccept",
      message: "Inserimento Effettuato",
      duration: 2500
    });
    toast.present();
  }

  addLead(Leads){
    let newLead = new LeadDetails;
    if(this.title == "Modifica"){
      newLead.id = this.lead.id;
      newLead.AD_User_ID = this.lead.id;
      if(Leads){
        newLead.LeadStatus = Leads;
      }else{
        newLead.LeadStatus = this.lead.LeadStatus;
      }
    }else{
      newLead.LeadStatus = Leads;
    }
    newLead.Name = this.lead.Name;
    newLead.Phone = this.lead.Phone;
    newLead.EMail = this.lead.EMail;  
    this.Api.modifyLead(newLead);
    this.ToastAccept();
    this.navCtrl.back();
  }
}
