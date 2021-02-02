import { PopoverController } from '@ionic/angular';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(private auth: AuthService, private popoverController: PopoverController) { }

  ngOnInit() {}

  LogOut(){
    this.auth.logout();
    this.popoverController.dismiss();
  }
}
