import React, { useContext, useState } from 'react'
import { InventoryContext } from '../Store/inventory-context';

const Inventory: React.FC=(props) =>{

    const inventoryContext = useContext(InventoryContext);
    if(inventoryContext.inventories){
        return inventoryContext?.inventories?.map((inventory : any, index: number)=>(
                <div key={inventory.id}>
                    <div>
                        {inventory.name}
                    </div>
                    <div>
                        {inventory.unitsCount}
                    </div>
                    <div>
                        {inventory.unitPrice}
                    </div>
                    <div>
                        {inventory.reorderLevel}
                    </div>
                    <hr/>
            </div>
        ));
    }
    else
    {
        return(
            <div>Empty List!</div>
        )
    }
}

export default Inventory