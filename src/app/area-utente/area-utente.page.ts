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

  ngOnInit() {
    this.getUtente();
  }

  getUtente(){
    let id = localStorage.getItem('ADuser')
    this.api.getInfoUtente(id).subscribe((data)=>{
      this.user = data[0];
      console.log(data);
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

  LogOut(){
    this.auth.logout();
  }

  
}
