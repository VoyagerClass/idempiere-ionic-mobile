export class COre{
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
}

export class Act{
    id: number;
    Name: string;
}

export interface SalesRep{
    id: number;
    Name: string;
}

export class Activity{
    C_ContactActivity_ID: number;
    SalesRep_ID: number;
    Name: string;
    Description: string;
    DateWorkStart: string;
    Qty: number;
}