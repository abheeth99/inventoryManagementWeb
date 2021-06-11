import React, { useContext, useState } from 'react'
import { InventoryContext } from '../Store/inventory-context';
import Inventory from './Inventory';
import InventoryForm from './InventoryForm';


function InventoryList() {
    
    const inventoryContext = useContext(InventoryContext);

    return (
        <div>
            <h1>Inventory List</h1>
            <Inventory />
        </div>
    )
}

export default InventoryList