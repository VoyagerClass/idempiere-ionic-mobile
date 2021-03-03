import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/api-service.service';
import { Opportunity, OppTasks } from 'src/models/OpportunityModel';

@Component({
  selector: 'app-dettaglio-opportunita',
  templateUrl: './dettaglio-opportunita.page.html',
  styleUrls: ['./dettaglio-opportunita.page.scss'],
})
export class DettaglioOpportunitaPage {

  constructor(private api: ApiServiceService, private route: ActivatedRoute, private router: Router, public actionSheetController: ActionSheetController) { }

  ionViewDidEnter() {
    this.getID();
  }

  opp= new Opportunity();
  task: OppTasks[];

  getID(){
    let Oppid =""
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
        Oppid = id;
    });
    this.api.getOpp(Oppid).subscribe((data)=>{
      console.log(data);
      this.opp = data[0];
      console.log(this.opp)
      this.getTasks(this.opp.C_BPartner_ID);
    })
  }

  getTasks(id: number){
    this.api.getOppTasks(id).subscribe((data)=>{
      console.log(data);
      this.task = data;
    })
  }

  newTask(bpid: number, id: number, org: string){
    this.router.navigateByUrl('/nuova-opp-task/'+bpid+'&'+id+'&'+org);
  }

  async opzioniOpportunita(bpid: number, id: number, org: string, bpname: string) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opzioni',
      cssClass: '',
      buttons: [{
        text: 'Inserisci Attività',
        icon: 'clipboard-outline',
        handler: () => {
          this.router.navigateByUrl('/nuova-opp-task/'+bpid+'&'+id+'&'+org);
        }
      }, {
        text: 'Modifica Opportunità',
        icon: 'pencil-outline',
        handler: () => {
          this.router.navigateByUrl('/modifica-opportunita/'+id+'&'+bpname)
        }
      }]
    });
    await actionSheet.present();
  }

}
