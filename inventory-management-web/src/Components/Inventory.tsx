import React, { useContext, useState } from 'react';
import { reorderLevel } from '../Models/Enum';
import InventoryItem from '../Models/inventoryItem';
import { InventoryContext } from '../Store/inventory-context';
import InventoryForm from './InventoryForm';
import {Button} from 'react-bootstrap';

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

    return (
        <> 
        {edit.id? <InventoryForm onSubmit={handleUpdateSubmit} inventoryToEditId={edit.id}/> : null}
        <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Units Count </th>
                <th scope="col">Unit Price</th>
                <th scope="col">Reorder Level</th>
                <th scope="col">Options</th>
                </tr>
            </thead>
            <tbody>
            {
                inventoryContext.inventories.map((inventory : any, index: number)=>(
                    <tr key={index}>
                        <th>{inventory.id}</th>
                        <td>{inventory.name}</td>
                        <td>{inventory.unitsCount}</td>
                        <td>{inventory.unitPrice}</td>
                        <td>{inventory.reorderLevel ===  reorderLevel.low ? '🟢': inventory.reorderLevel === reorderLevel.medium ? '🟡' : '🔴'}</td>
                        <td>
                            <Button onClick={()=>{setEdit({id: inventory.id})}}>Edit</Button>
                            
                            <Button onClick={()=>{inventoryContext.removeInventory(inventory.id)}}>Delete</Button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
        </>
    )
}

export default Inventory;