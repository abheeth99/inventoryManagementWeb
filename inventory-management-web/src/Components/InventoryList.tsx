import React, { useContext, useState } from 'react';
import { InventoryContext } from '../Store/inventory-context';
import Inventory from './Inventory';
import InventoryForm from './InventoryForm';
import {Button} from 'react-bootstrap'

function InventoryList() {
    
    const inventoryContext = useContext(InventoryContext);

    const [toggleForm, setToggleForm] = useState(false);
    
    return (
        <div>
            <h1>Inventory List</h1>
            <Button onClick={()=>{setToggleForm(!toggleForm)}}>Add Inventory</Button>

            {toggleForm == true? <InventoryForm onSubmit={inventoryContext.addInventory}/>: null}
            <Inventory/>
        </div>
    )
}

export default InventoryList;