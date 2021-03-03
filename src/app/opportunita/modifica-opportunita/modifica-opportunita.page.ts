import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';
import { Opportunity } from 'src/models/OpportunityModel';

import * as moment from 'moment'

@Component({
  selector: 'app-modifica-opportunita',
  templateUrl: './modifica-opportunita.page.html',
  styleUrls: ['./modifica-opportunita.page.scss'],
})
export class ModificaOpportunitaPage implements OnInit {

  constructor(private api: ApiServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getID();
  }

  bpname = "";
  bpid = "";
  opp= new Opportunity();

  getID(){
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
        let data = id.split('&');
        this.bpname = data[1];/* .replace('%20', ' '); */
        this.bpid = data[0];
        console.log(data);
        this.getData(this.bpid)
    });
  }

  getData(id: string){
    this.api.getModificaOpp(id).subscribe((data)=>{
      console.log(data);
      this.opp = data[0];
      let time = moment(this.opp.ExpectedCloseDate).toISOString(true);
      this.opp.ExpectedCloseDate = time.slice(0, 19).replace('T', ' ');
    })
  }

  editOpp(desc: string, salestatus: number, data: string, oppAmm: string, prob: string){
    let putOpp = new Opportunity();
    putOpp.id = parseInt(this.bpid);
    putOpp.Description = desc;
    putOpp.C_SalesStage_ID = salestatus;
    putOpp.ExpectedCloseDate = data;
    putOpp.OpportunityAmt = oppAmm;
    putOpp.Probability = prob.toString();
    putOpp.C_BPartner_ID = this.opp.C_BPartner_ID;
    putOpp.C_Currency_ID = 102;
    console.log(putOpp);
    this.api.putModificaOpp(putOpp).subscribe((data)=>{
      console.log(data);
    })
  }

}
