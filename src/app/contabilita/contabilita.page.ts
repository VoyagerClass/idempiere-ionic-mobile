import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contabilita',
  templateUrl: './contabilita.page.html',
  styleUrls: ['./contabilita.page.scss'],
})
export class ContabilitaPage implements OnInit {

  constructor(private router: Router, private menuCtrl: MenuController) { }

  ngOnInit() {
    this.menuCtrl.enable (true, 'Contabilita');
  }

  Direct(route: string){
    this.router.navigateByUrl('/contabilita/'+route);
  }

}
