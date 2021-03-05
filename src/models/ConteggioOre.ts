export class COre{
    BPName: string;
    id: number;
    DateWorkStart: string;
    Qty: number;
    task_description: string;
    task_documentno: string;
    taskdetail_name: string;
    task_name: string;
    taskdetail_description: string;
    IsConfirmed: string;
    Description: string;
    completiondate: string;
    Percent: string;
    S_Resource_ID: number;
    AssignDateFrom: string;
}

export class Act{
    C_BPartner_ID: number;
    id: number;
    Name: string;
    AD_Org_ID: number;
}

export class SalesRep{
    id: number;
    Name: string;
}

export class Activity{
    C_ContactActivity_ID: number;
    SalesRep_ID: number;
    S_Resource_ID: number;
    Name: string;
    Description: string;
    DateWorkStart: string;
    AssignDateFrom: string;
    Qty: number;
    AD_Org_ID: number;
    C_BPartner_ID: number;
}

export interface BPartner{
    id: number;
    Value: string;
    Name: string;
}