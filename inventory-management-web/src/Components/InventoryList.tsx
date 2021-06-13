import React, { useContext } from 'react';
import { InventoryContext } from '../Store/inventory-context';
import Inventory from './Inventory';
import InventoryForm from './InventoryForm';

function InventoryList() {
    
    const inventoryContext = useContext(InventoryContext);

    return (
        <div>
            <h1>Inventory List</h1>
            <InventoryForm onSubmit={inventoryContext.addInventory}/>
            <Inventory/>
        </div>
    )
}

export default InventoryList;