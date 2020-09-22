import { m_product } from './../models/Magazzino';
import { DistDetails } from './../models/DistDetails';
import { OrdCompl, PrelievoCompl } from './../models/OrderComp';
import { Distinta } from './../models/Distinta';
import { MenuItem } from './../models/Menu';
import { TResponse } from './../models/TokenResponse';
import { Credentials } from './../models/Credentials';
import { Opportunity } from './../models/OpportunityModel';
import { FornitoriModel } from './../models/FornitoriModel';
import { Task } from './../models/TaskLog';
import { LogAgente } from './../models/LogModel';
import { LeadDetails } from './../models/LeadDetails';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

IP = localStorage.getItem('TargetIP'); 
EndPoint = "http://"+this.IP+"/services/api/idempierepara/web/search/";

  setIP(){
    this.IP = localStorage.getItem('TargetIP'); 
    this.EndPoint = "http://"+this.IP+"/services/api/idempierepara/web/search/";
  }

  getMenu(){
    return this.http.get<MenuItem>(this.EndPoint+"getMenu");
  }

  getData(id: string){
    return this.http.get<LeadDetails[]>(this.EndPoint+"getLead"+id);
  }

  getTask(){
    let id = localStorage.getItem('ADuser');
    return this.http.get<Task[]>(this.EndPoint+"getTask_"+id);
  }

  getSuppliers(){
    return this.http.get<FornitoriModel[]>(this.EndPoint+"getSuppliers");
  }

  getOpp(){
    return this.http.get<Opportunity[]>(this.EndPoint+"getOpportunity");
  }

  getDistinta(id: string){
    return this.http.get<Distinta[]>(this.EndPoint+"getDist_"+id);
  }

  getDetailsDist(id: number){
    return this.http.get<DistDetails[]>(this.EndPoint+"getDetailsDist_"+id);
  }

  getProdList(id: string){
    return this.http.get<m_product>(this.EndPoint+"getInfoProduct_%25"+id+"%25");
  }

  postOpp(opp: Opportunity){
    return this.http.post(this.EndPoint+"postOpp", opp);
  }

  importLead(lead: LeadDetails){
    lead.IsSalesLead = 'Y';
    lead.LeadStatus = 'N';
    return this.http.post(this.EndPoint+"postLead", lead).subscribe((data)=>{
      console.log(data);
    });
  }

  addLog(cliente: number, evento: string, act: string){
    const idA = parseInt(localStorage.getItem('ADuser'));
    let log = new LogAgente();
    log.LIT_AD_UserFrom_ID = idA;
    log.Comments = evento;
    log.Description= "LOG";
    log.SalesRep_ID = idA;
    log.AD_User_ID = cliente;
    log.C_Activity_ID = 1000010;
    log.Name = "-";
    log.ContactActivityType = act;
    console.log(log);
    this.http.post(this.EndPoint+"postTask", log).subscribe((data)=>{
      console.log(data);
    })
  }

  modifyLead(lead: LeadDetails){
    console.log(lead);
    lead.IsSalesLead = 'Y';
    if(lead.AD_User_ID){
      console.log(lead);
      this.http.put(this.EndPoint+"putLead_"+lead.AD_User_ID, lead).subscribe((data) => {
        console.log(data);
      });
    } else {
      this.http.post(this.EndPoint+"postLead", lead).subscribe((data) =>{
        console.log(data);
      });
    }
  }

  getLogs(id: string){
    return this.http.get<LogAgente[]>(this.EndPoint+"getLogs"+id);
  }

  isTaskComplete(task){
    return this.http.post(this.EndPoint+"putTask_"+task.id , task);
  }

  logMeIn(cred: Credentials){
    console.log(cred);
    return this.http.post<TResponse>("http://"+this.IP+"/services/api/auth/login", cred);
  }

  postComplete(ordine: OrdCompl){
    return this.http.post(this.EndPoint+"getProcProdottoFinito", ordine);
  }

  postPrelevato(prelievo: PrelievoCompl){
    return this.http.post(this.EndPoint+"getProcEseguiPrelievo", prelievo);
  }

  postAllComplete(ordine: OrdCompl){
    return this.http.post(this.EndPoint+"getProcPrelievoEFinito", ordine);
  }

  
  
}
