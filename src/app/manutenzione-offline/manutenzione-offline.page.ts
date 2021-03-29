import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-manutenzione-offline',
  templateUrl: './manutenzione-offline.page.html',
  styleUrls: ['./manutenzione-offline.page.scss'],
})
export class ManutenzioneOfflinePage implements OnInit {

  constructor(private api: ApiServiceService) { }

  ngOnInit() {
  }

}
