import { PopoverComponent } from './popover/popover.component';
import { MenuController } from '@ionic/angular';
import { MenuItem } from './../../models/Menu';
import { ApiServiceService } from './../api-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular'


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage {

  constructor(private router: Router, private Api: ApiServiceService, private menuCtrl: MenuController, private popoverController: PopoverController) { }

  menu: MenuItem;

  ionViewWillEnter() {
    this.menuCtrl.enable (false, 'CRMmenu');
  }

  goTo(link: string){
    this.router.navigateByUrl(link);
  }

  async popoverMenu(ev: any) {
    let popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'popover',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
