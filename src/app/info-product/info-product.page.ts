import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-product',
  templateUrl: './info-product.page.html',
  styleUrls: ['./info-product.page.scss'],
})
export class InfoProductPage implements OnInit {

  constructor(private router: Router, private menuCtrl: MenuController) { }

  ngOnInit() {
    this.menuCtrl.enable (true, 'InfoProduct');
  }

  Direct(route: string){
    this.router.navigateByUrl(route);
  }
  

}
