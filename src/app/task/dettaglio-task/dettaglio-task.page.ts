import { Task } from './../../../models/TaskLog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from './../../api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dettaglio-task',
  templateUrl: './dettaglio-task.page.html',
  styleUrls: ['./dettaglio-task.page.scss'],
})
export class DettaglioTaskPage implements OnInit {

  constructor(private api: ApiServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getID();
  }

  task = new Task();

  getID(){
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.getTask(id);
    });
  }

  getTask(id: string){
    this.api.getTaskDetails(id).subscribe((data)=>{
      console.log(data);
      this.task = data[0];
    })
  }

  LeadDetail(id: string){
    this.router.navigateByUrl('/lead-details/'+id);
  }

}
