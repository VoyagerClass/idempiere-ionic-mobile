import { Utente } from './../../models/Credentials';
import { ApiServiceService } from 'src/app/api-service.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-utente',
  templateUrl: './area-utente.page.html',
  styleUrls: ['./area-utente.page.scss'],
})
export class AreaUtentePage implements OnInit {

  constructor(private auth: AuthService, private api: ApiServiceService) { }

  user= new Utente;
  supervisor = new Utente;
  url = ""

  ngOnInit() {
    this.getUtente();
  }

  getUtente(){
    let id = localStorage.getItem('ADuser')
    this.api.getInfoUtente(id).subscribe((data)=>{
      this.user = data[0];
      console.log(data);
      this.url = this.getQrCode(this.user);
    })
  }

  getSupervisor(){
    if(this.user.Supervisor_ID){
      this.api.getInfoUtente(this.user.Supervisor_ID).subscribe((data)=>{
        this.supervisor=data[0];
        console.log(data);
      })
    }
  }

  getQrCode(item: Utente){
    let url= "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=BEGIN:VCARD%0AN: "+item.Name+"%20%20 %0ATEL;CELL: "+item.Phone+" %0AEMAIL: "+item.EMail+" %0AEND:VCARD"
    return (url);
  }

  LogOut(){
    this.auth.logout();
  }

  //QR CODE DA FAR SCANNERIZZARE SE SI VUOLE AGGIUNGERE IL CONTATTO, SOSTITUIRE NOME, COGNOME, TELEFONO E EMAIL.
  // https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=BEGIN:VCARD%0AN: NOME %20%20 COGNOME %0ATEL;CELL: TELEFONO %0AEMAIL: EMAIL %0AEND:VCARD
  
}
