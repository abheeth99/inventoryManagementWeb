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
                <h4>Empty Inventories!</h4>
            </div>
        )
    }

    const handleUpdateSubmit = (inventory:InventoryItem)=>{
        inventoryContext.updateInventory(inventory, edit.id)
        setEdit({id: 0})
    }

    return (
        <> 
        {edit.id>0? <InventoryForm onSubmit={handleUpdateSubmit} inventoryToEditId={edit.id}/> : null}
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
                        <td>{reorderLevel[inventory.reorderLevel]}</td>
                        <td>
                            <Button size="sm" onClick={()=>{setEdit({id: inventory.id})}}>Edit</Button>
                            {' '}
                            <Button size="sm" onClick={()=>{inventoryContext.removeInventory(inventory.id)}}>Delete</Button>
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