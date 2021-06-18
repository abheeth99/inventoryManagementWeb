import { reorderLevel } from "../Enum/enum";

export class InventoryItem{
    id: number;
    name: string;
    unitsCount: number;
    unitPrice: number;
    reorderLevel: reorderLevel; 
    
    constructor() {
        this.id= 0;
        this.name = "";
        this.unitsCount = 0;
        this.unitPrice = 0;
        this.reorderLevel = reorderLevel.low;
    }
}