export class Opportunity{
    AD_Client_ID: number;
    SalesRep_ID: number; 
    Description: string;
    Comments: string;
    C_SalesStage_ID: number;
    ExpectedCloseDate: string;
    C_BPartner_ID: number;
    C_Currency_ID: number;
    OpportunityAmt: string;
    Probability: string;
    id: number;
    Name: string;
    AD_Org_ID: string;
}

export class OppTasks{
    Description: string;
    StartDate: string;
    ContactActivityType: string;
    C_BPartner_ID: string;
    SalesRep_ID: string;
    IsComplete: string;
    C_Opportunity_ID: string;
    C_Activity_ID: number;
    Name: string;
    contact_description: string;
    AD_Org_ID: string;
}