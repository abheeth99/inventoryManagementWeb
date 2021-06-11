import { reorderLevel } from "./Enum";

export class Inventory{
    id: number = 0;
    name: string = "";
    unitsCount: number = 0;
    unitPrice: number = 0;
    reorderLevel: reorderLevel = 0;
}
  
export default Inventory;