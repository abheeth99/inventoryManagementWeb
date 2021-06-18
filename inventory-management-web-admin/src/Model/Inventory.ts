import { reorderLevel } from "../Enum/enum";
export class InventoryItem{
    Id: number;
    Name: string;
    UnitsCount: number;
    UnitPrice: number;
    ReorderLevel: reorderLevel; 
    
    constructor() {
        this.Id= 0;
        this.Name = "";
        this.UnitsCount = 0;
        this.UnitPrice = 0;
        this.ReorderLevel = reorderLevel.low;
    }
}

export default InventoryItem;