import React, { useContext, useState } from 'react';
import { InventoryContext } from '../Store/inventory-context';
import Inventory from './Inventory';
import InventoryForm from './InventoryForm';
import {Button} from 'react-bootstrap'
import InventoryItem from '../Models/inventoryItem';

function InventoryList() {
    
    const inventoryContext = useContext(InventoryContext);

    const [toggleForm, setToggleForm] = useState(false);
    
    const formHandler = (InventoryItem: InventoryItem)=>{
        inventoryContext.addInventory(InventoryItem);
        setToggleForm(!toggleForm)
    }
    
    return (
        <div>
            <h1>Inventory List</h1>
            <Button onClick={()=>{setToggleForm(!toggleForm)}}>Add Inventory</Button>

            {toggleForm == true? <InventoryForm onSubmit={formHandler}/>: null}
            <Inventory/>
        </div>
    )
}

export default InventoryList;