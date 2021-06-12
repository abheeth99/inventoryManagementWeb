import React, { useContext, useState } from 'react';
import { InventoryContext } from '../Store/inventory-context';

const Inventory: React.FC=(props) =>{

    const inventoryContext = useContext(InventoryContext);

    if(inventoryContext.inventories.length <= 0){
        return (
            <div>
                Empty Inventories!
            </div>
        )
    }

    return inventoryContext.inventories.map((inventory : any, index: number)=>(
        <div key={index}>
            <div>
                <div>
                    Name : {inventory.name}
                </div>

                <div>
                    unitsCount : {inventory.unitsCount}
                </div>

                <div>
                    unitPrice : {inventory.unitPrice}
                </div>

                <div>
                    reorderLevel : {inventory.reorderLevel == 'low' ? '🔴': inventory.reorderLevel == 'medium' ? '🟡' : '🟢'}
                </div>
            </div>
            <div>
                <button>Edit</button>
                <button onClick={()=>{inventoryContext.removeInventory(inventory.id)}}>Delete</button>
            </div>
            <hr/>
        </div>
    ));
}

export default Inventory;