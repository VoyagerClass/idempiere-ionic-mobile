export class LogAgente{
    AD_User_ID: number;
    LIT_AD_UserFrom_ID: number;
    SalesRep_ID: number;
    Comments: string;
    Description: string;
    StartDate: string;
    AD_Org_ID: number;
    C_Activity_ID: number;
    Name: string;
    AD_Client_ID: number;
    ContactActivityType: string;
    IsComplete: string;
    LIT_isMobileLog: string;
    id: number;
}

export interface LogList{
    ContactActivityType: string;
    IsComplete: boolean;
    IsInTransit: boolean;
    LIT_isMobileLog: boolean;
    StartDate: string;
    id: number;
}