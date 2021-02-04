import { MenuController } from '@ionic/angular';
import { MenuItem } from './../../models/Menu';
import { ApiServiceService } from './../api-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage {

  constructor(private router: Router, private Api: ApiServiceService, private menuCtrl: MenuController) { }

  menu: MenuItem;

  ionViewWillEnter() {
    this.menuCtrl.enable (false, 'CRMmenu');
  }

  goTo(link: string){
    this.router.navigateByUrl(link);
  }

  Direct(){
    this.router.navigateByUrl('/area-utente');
  }
}
