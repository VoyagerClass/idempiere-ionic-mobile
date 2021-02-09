import { Component, Input, OnInit } from '@angular/core';
import { Utente } from 'src/models/Credentials';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
})
export class QrcodeComponent implements OnInit {

  @Input() user: Utente; 

  constructor() { }
  
  url = ""

  ngOnInit() {
    this.url = this.getQrCode(this.user);
  }

  getQrCode(item: Utente){
    let url= "https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=BEGIN:VCARD%0AN: "+item.Name+"%20%20 %0ATEL;CELL: "+item.Phone+" %0AEMAIL: "+item.EMail+" %0AEND:VCARD"
    return (url);
  }

}
