export interface InventoryItem{
    Description: string;
    DocumentNo: string;
    M_Warehouse_ID: number;
    Name: string;
    id: number;
    AD_Org_ID: number;
}

export interface InventoryDetails{
    Description: string;
    Name: string;
    QtyBook: number;
    QtyCount: number;
    Value: string;
    ​​id: number;
}

export interface ProductList{
    Description: string;
    Name: string;
    Value: string;
    id: number;
}

export class m_inventoryline{
    M_Inventory_ID: number;
    M_Product_ID: number;
    QtyCount: number;
    InventoryType: string;
    AD_Org_ID: number;
}

export interface Orgs{
    Name: string;
    id: number;
}

export interface Mags{
    Name: string;
    id: number;
}

export interface Docs{
    PrintName: string;
    id: number;
}

export class Inventory {
    Description: string;
    C_DocType_ID: number;
    M_Warehouse_ID: number;
    AD_Org_ID: string;
    MovementDate: string;
}