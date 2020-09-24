export class OrdCompl {
    ids: number[];
    MovementDate: string;
    C_DocTypeInv_ID: number;
    C_DocTypeMov_ID: number;
    Qty: string;
    TableName: string;
    LIT_IsPickingEndDeclaration: string;
}

export class PrelievoCompl{
    TableName: string;
    ids: number[];
    MovementDate: string;
    C_DocTypeInv_ID: number;
    C_DocTypeMov_ID: number;
    Qty: string[];
}

export interface ResResponse{
    cod: string;
    message: Response[];
}

export interface Response{
    msg: string;
    link: string;
}