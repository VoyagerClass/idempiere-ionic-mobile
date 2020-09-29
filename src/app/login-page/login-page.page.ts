import { AlertController } from '@ionic/angular';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Credentials } from './../../models/Credentials';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from '@auth0/angular-jwt';
import { trigger, transition, animate, style } from '@angular/animations'

import * as bcrypt from 'bcryptjs'

const helper = new JwtHelperService();
const salt = bcrypt.genSaltSync(10);

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class LoginPagePage implements OnInit {

  constructor(private Api: ApiServiceService,
              private router: Router,
              private storage: Storage,
              private auth: AuthService,
              private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  cred =  new Credentials;
  uName = localStorage.getItem('username');
  ip = localStorage.getItem('TargetIP');
  visible = false;

  Login(password: string, rme: boolean){
    this.ipConfig();
    this.cred.username = this.uName;
    //this.cred.password = bcrypt.hashSync(password, salt);
    this.cred.password = password;
    console.log(this.cred);
    this.auth.logMeIn(this.cred).subscribe(async res => {
      if (res){
        if(rme){
          localStorage.setItem('username', this.uName);
        }
        this.router.navigate(['']);
      }else{
        const alert = await this.alertCtrl.create({
          header: 'Login Fallito',
          message: 'Credenziali Sbagliate',
          buttons: ['OK']
        });
        await alert.present();
      }
    })
  }


  ipConfig(){
    console.log(this.ip);
    localStorage.setItem('TargetIP', this.ip);
    this.Api.setIP();
  }

  isLoggedin() {
    const token: string = localStorage.getItem('token');
    console.log(token != null && !helper.isTokenExpired(token));
    return token != null && !helper.isTokenExpired(token);
  }

}
