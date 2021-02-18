import { ApiServiceService } from 'src/app/api-service.service';
import { Component, OnInit } from '@angular/core';
import { COre } from 'src/models/ConteggioOre';

@Component({
  selector: 'app-modifica-core',
  templateUrl: './modifica-core.page.html',
  styleUrls: ['./modifica-core.page.scss'],
})
export class ModificaCOrePage implements OnInit {

  Task: COre = history.state.task;

  constructor(private api: ApiServiceService) { }

  ngOnInit() {
  }

  modifyTask( id: number, time: string, desc: string, duration: number) {
    let task = new COre;
    task.id = id;
    task.DateWorkStart = time.slice(0, 19).replace('T', ' ');
    task.Description = desc;
    task.Qty = duration;
    console.log(task);
    this.api.putCOre(task, id).subscribe((data)=>{
      console.log(data);
    });
  }

}
