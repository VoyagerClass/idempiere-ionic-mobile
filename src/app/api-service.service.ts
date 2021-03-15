import { Vendor } from './../models/Acquisti';
import { InventoryItem, InventoryDetails, ProductList, m_inventoryline, Orgs, Mags, Docs, Inventory } from './../models/InfoProduct';
import { DettaglioFatture, ordini } from './../models/OrdinieFatture';
import { COre, SalesRep, Activity, Act, BPartner } from './../models/ConteggioOre';
import { m_product } from './../models/Magazzino';
import { DistDetails } from './../models/DistDetails';
import { OrdCompl, PrelievoCompl, ResResponse } from './../models/OrderComp';
import { Distinta } from './../models/Distinta';
import { MenuItem } from './../models/Menu';
import { PostResponse, TResponse } from './../models/TokenResponse';
import { Credentials, Utente } from './../models/Credentials';
import { Opportunity, OppTasks } from './../models/OpportunityModel';
import { FornitoriModel } from './../models/FornitoriModel';
import { Task } from './../models/TaskLog';
import { LogAgente, LogList } from './../models/LogModel';
import { LeadDetails } from './../models/LeadDetails';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WorkOrder } from 'src/models/WorkOrder';
import { Locator } from 'protractor';



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

  getOpp(id: string){
    return this.http.get<Opportunity[]>(this.EndPoint+"getOpportunity_"+id);
  }

  getOppTasks(id: number){
    return this.http.get<OppTasks[]>(this.EndPoint+"getOpportunityTasks_"+id);
  }

  postOppTasks(opp: OppTasks){
    return this.http.post(this.EndPoint+"postOpportunityTasks", opp);
  }

  getConteggioOre(){
    let id = localStorage.getItem('ADuser');
    return this.http.get<COre[]>(this.EndPoint+"getConteggioOre_"+id);
  }

  getOreCompletate(){
    let id = localStorage.getItem('ADuser');
    return this.http.get<COre[]>(this.EndPoint+"getOreCompletate_"+id);
  }

  getConteggioOreComplete(){
    let id = localStorage.getItem('ADuser');
    return this.http.get<COre[]>(this.EndPoint+"getConteggioOreComplete_"+id)
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

  getInvoice(id: string){
    return this.http.get<ordini[]>(this.EndPoint+"getMobileInvoice_"+id);
  }

  getMaterialReceipt(){
    return this.http.get(this.EndPoint+"getMaterialReceipt");
  }

  getDettaglioFattura(id: string){
    return this.http.get<DettaglioFatture[]>(this.EndPoint+"getFatturaAQ_"+id);
  }

  getCOrder(){
    return this.http.get<ordini[]>(this.EndPoint+"getCOrder");
  }

  getWorkOrder(id: string){
    return this.http.get<WorkOrder[]>(this.EndPoint+"getWorkOrder_%25"+id+"%25");
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
    log.IsComplete = 'Y';
    log.LIT_isMobileLog = 'Y';
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
    return this.http.get<LogList[]>(this.EndPoint+"getLogs"+id);
  }

  isTaskComplete(task){
    return this.http.post(this.EndPoint+"putTask_"+task.id , task);
  }

  logMeIn(cred: Credentials){
    console.log(cred);
    return this.http.post<TResponse>("http://"+this.IP+"/services/api/auth/login", cred);
  }

  postComplete(ordine: OrdCompl){
    return this.http.post<ResResponse>(this.EndPoint+"getProcProdottoFinito", ordine);
  }

  postPrelevato(prelievo: PrelievoCompl){
    return this.http.post<ResResponse>(this.EndPoint+"getProcEseguiPrelievo", prelievo);
  }

  postAllComplete(ordine: OrdCompl){
    return this.http.post<ResResponse>(this.EndPoint+"getProcPrelievoEFinito", ordine);
  }

  isCOreComplete(task: COre, id: number){
    return this.http.put(this.EndPoint+"putConteggioOreComplete", task);
  }

  putCOre(task: COre, id: number){
    return this.http.put(this.EndPoint+"putModificaConteggioOre", task);
  }

  getInfoUtente(id: string){
    return this.http.get<Utente>(this.EndPoint+"getDatiUtente_"+id);
  }

  getInventory(search: string){
    return this.http.get<InventoryItem[]>(this.EndPoint+"getInventory_%25"+search+"%25");
  }

  getInventoryList(id: string){
    return this.http.get<InventoryDetails[]>(this.EndPoint+"getInventoryLine_"+id);
  }

  getInventoryListProducts(search: string){
    return this.http.get<ProductList[]>(this.EndPoint+"getProdInventario_%25"+search+"%25");
  }

  postInventoryListProduct(product: m_inventoryline){
    return this.http.post(this.EndPoint+"postProdInventario", product);
  }

  leadSearch(search: string){
    return this.http.get<LeadDetails[]>(this.EndPoint+"getLeadSearch_%25"+search+"%25");
  }

  getTaskList(){
    let id = localStorage.getItem('ADuser');
    return this.http.get<Act[]>(this.EndPoint+"getTaskList_"+id);
  }

  getSalesRepList(){
    return this.http.get<SalesRep[]>(this.EndPoint+"getSalesRepList");
  }

  postActivity(activity: Activity){
    return this.http.post<PostResponse>(this.EndPoint+"postActivity", activity);
  }

  getOrgs(){
    return this.http.get<Orgs[]>(this.EndPoint+"getActiveOrgs");
  }
    
  getMagazzini(id: number){
    return this.http.get<Mags[]>(this.EndPoint+"getMagazzini_"+id);
  }
  
  getDoc(){
    return this.http.get<Docs[]>(this.EndPoint+"getDocType");
  }

  postNewInventory(inv: Inventory){
    return this.http.post<PostResponse>(this.EndPoint+"postNewInventory", inv)
  }

  getLocator(id: string){
    console.log(id);
    return this.http.get<Locator[]>(this.EndPoint+"getLocatorID_"+id);
  }

  getModificaOpp(id: string){
    return this.http.get<Opportunity>(this.EndPoint+"getModificaOpp_"+id);
  }

  putModificaOpp(opp: Opportunity){
    return this.http.put(this.EndPoint+"putModificaOpp", opp);
  }

  postAssegnazioneTask(task: Task){
    return this.http.post(this.EndPoint+"postAssegnazioneTask", task);
  }

  getResourceID(id: number){
    return this.http.get(this.EndPoint+"getResourceID_"+id);
  }

  getBPartner(){
    return this.http.get<BPartner[]>(this.EndPoint+"getBPartner");
  }

  getVendorsList(search: string){
    return this.http.get<Vendor[]>(this.EndPoint+"getVendorsList_%25"+search+"%25");
  }

  getVendor(id: string){
    return this.http.get<Vendor>(this.EndPoint+"getVendor_"+id);
  }
}
