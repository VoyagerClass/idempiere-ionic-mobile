import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dettaglio-bp',
  templateUrl: './dettaglio-bp.page.html',
  styleUrls: ['./dettaglio-bp.page.scss'],
})
export class DettaglioBPPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Direct(id: number){
    this.router.navigate(['/bp-details/'+id])
  }

}
