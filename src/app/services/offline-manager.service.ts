import { Injectable } from '@angular/core';
import { Network } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class OfflineManagerService {

  constructor() { }
  
  handler =  Network.addListener('networkStatusChange', (status => {
      console.log(status);
  }))

  
}
