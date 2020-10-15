export interface ordini{
    DocumentNo: string;
    IsSOTrx: boolean;
    bp_name: string;
    bp_value: string;
    id: number;
    C_Invoice_ID: number;
}

export interface DettaglioFatture{
    DateInvoiced: number;
    Description: string;
    DocumentNo: string;
    GrandTotal: number;
    IsPaid: boolean;
    IsSOTrx: boolean;
    Name: string;
    PriceEntered: number;
    PriceList: number;
    QtyEntered: number;
    bp_name: string;
    bp_value: string;
}