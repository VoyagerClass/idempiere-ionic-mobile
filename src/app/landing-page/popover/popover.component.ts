import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(private popoverController: PopoverController, private router: Router) { }

  ngOnInit() {}

  Direct(){
    this.router.navigateByUrl('/area-utente');
    this.popoverController.dismiss();
  }
}
