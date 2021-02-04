import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-utente',
  templateUrl: './area-utente.page.html',
  styleUrls: ['./area-utente.page.scss'],
})
export class AreaUtentePage implements OnInit {

  constructor(private auth: AuthService) { }

  email = localStorage.getItem('username')

  ngOnInit() {
  }

  LogOut(){
    this.auth.logout();
  }

  
}
