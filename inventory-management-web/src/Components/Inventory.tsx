import React, { useContext, useState } from 'react';
import InventoryItem from '../Models/inventoryItem';
import { InventoryContext } from '../Store/inventory-context';
import InventoryForm from './InventoryForm';

const Inventory: React.FC=(props) =>{

    const inventoryContext = useContext(InventoryContext);

    const [edit, setEdit] = useState({id: 0});

    // If the list is empty handle here
    if(inventoryContext.inventories.length <= 0){
        return (
            <div>
                Empty Inventories!
            </div>
        )
    }

    const handleUpdateSubmit = (inventory:InventoryItem)=>{
        inventoryContext.updateInventory(inventory, edit.id)
        setEdit({id: 0})
    }

    // When editing a Inventory
    if(edit.id){
        return <InventoryForm onSubmit={handleUpdateSubmit} inventoryToEditId={edit.id}/>
    }

    return inventoryContext.inventories.map((inventory : any, index: number)=>(
        <div key={index}>
            <div>
                <div>
                    Name : {inventory.name}
                </div>

                <div>
                    Units Count : {inventory.unitsCount}
                </div>

                <div>
                    Unit Price : {inventory.unitPrice}
                </div>

                <div>
                    Reorder Level : {inventory.reorderLevel == '0' ? '🟢': inventory.reorderLevel == '1' ? '🟡' : '🔴'}
                </div>
            </div>
            <div>
            <button onClick={()=>{setEdit({id: inventory.id})}}>Edit</button>
                <button onClick={()=>{inventoryContext.removeInventory(inventory.id)}}>Delete</button>
            </div>
            <hr/>
        </div>
    ));
}

export default Inventory;