import { Contacts } from '@ionic-native/contacts/ngx';
import { LeadDetails } from './../../models/LeadDetails';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular'
import {Router} from '@angular/router'
import * as _ from 'underscore';
import { trigger, transition, animate, style } from '@angular/animations'




@Component({
  selector: 'crm-page',
  templateUrl: 'crm-page.page.html',
  styleUrls: ['crm-page.page.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('100ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('100ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ]),
    trigger('slideOutIn', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('100ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('100ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class CrmPagePage implements OnInit{


  list: LeadDetails[] = [];
  list1: LeadDetails[] = [];
  visible = false;

  constructor(private Api: ApiServiceService, 
              private menuCtrl: MenuController, 
              private router: Router,
              private contacts: Contacts,) { }

  ngOnInit(): void {
    this.getList();
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      console.log((navigator as any).contacts);
    }
    this.menuCtrl.enable (true, 'CRMmenu');
  }

  getList(){
    this.list = [];
    this.list1 = [];
    this.Api.getData('').subscribe((data) => { 
      this.list = data;
      this.list1 = _.where(data, {leadstatus_value: 'N'});
      console.log(this.list);
    });
  }

  leadDet(id: string) {
    this.router.navigate(['/lead-details/'+id.toString()]);
  }

  addLead(id: string){
    this.router.navigate(['/lead-form/'+id]);
  }

  importContact(){
    let newLead = new LeadDetails();
    this.contacts.pickContact().then((contact)=> {
      console.log(contact);
      newLead.Name = contact.name.givenName;
      newLead.Phone = contact.phoneNumbers[0].value;
      this.Api.importLead(newLead);
    })
  }

  segmentChanged(ev: any) {
   this.list1=_.where(this.list, {leadstatus_value: ev.detail.value});
  }

  doRefresh(event) {
    this.getList();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  SearchLead(ev: any){
    if(ev.detail.value != ""){
      this.Api.leadSearch(ev.detail.value).subscribe((data)=>{
        this.list1 = data;
      })
    }
  }

  

}
