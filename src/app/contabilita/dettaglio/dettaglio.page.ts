import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';
import { DettaglioFatture } from 'src/models/OrdinieFatture';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.page.html',
  styleUrls: ['./dettaglio.page.scss'],
})
export class DettaglioPage implements OnInit {

  documentID: string;
  fattura: DettaglioFatture [] = [];

  constructor(private Api: ApiServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getID();
  }

  getID(){
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
        this.documentID = id;
    });
    this.getFattura();
  }

  getFattura(){
    this.Api.getDettaglioFattura(this.documentID).subscribe((data)=>{
      console.log(data);
      this.fattura = data;
    })
  }

}
