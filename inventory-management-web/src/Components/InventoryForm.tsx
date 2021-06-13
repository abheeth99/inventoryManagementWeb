import React, { useContext, useEffect, useState } from 'react'
import InventoryItem from '../Models/inventoryItem';
import { InventoryContext } from '../Store/inventory-context';

const InventoryForm: React.FC<{onSubmit: (inventory:InventoryItem)=>void, inventoryToEditId?: number}>=(props) =>{

    const [inventoryItem, setInventoryItem] = useState<InventoryItem>(new InventoryItem());

    const inventoryContext = useContext(InventoryContext);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        debugger;
        const value = event.target.value;

        setInventoryItem({
            ...inventoryItem,[event.target.name]: value
        });
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        props.onSubmit(inventoryItem);
        setInventoryItem(new InventoryItem());
    }

    useEffect(() => {
        if(props.inventoryToEditId){
            (async function () {
                const inventoryToEdit = await inventoryContext.getInventoryToUpdate(props.inventoryToEditId?? 0);
                setInventoryItem(inventoryToEdit);
            })();
        }
        return () => {
            
        }
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <table>
                <tr>
                    <td>
                        Inventory Name :
                    </td>
                    <td>
                        <input type="text" placeholder="Inventory Name" value={inventoryItem.name} name='name' onChange={handleChange}/>
                    </td>

                </tr>

                <tr>
                    <td>
                        Units Count :
                    </td>
                    <td>
                        <input type="text" placeholder="Units Count" value={inventoryItem.unitsCount} name='unitsCount' onChange={handleChange}/>
                    </td>

                </tr>

                <tr>
                    <td>
                        Unit Price :
                    </td>
                    <td>
                        <input type="number" placeholder="Unit Price" value={inventoryItem.unitPrice} name='unitPrice' onChange={handleChange}/>
                    </td>

                </tr>

                <tr>
                    <td>
                        Reorder Level :
                    </td>
                    <td>
                        🟢
                        <input type="radio" placeholder="Low" checked={inventoryItem.reorderLevel == 0} value={0} name='reorderLevel' onChange={handleChange}/>
                        🟡
                        <input type="radio" placeholder="Medium" checked={inventoryItem.reorderLevel == 1} value={1} name='reorderLevel' onChange={handleChange}/>
                        🔴
                        <input type="radio" placeholder="Critical" checked={inventoryItem.reorderLevel == 2} value={2} name='reorderLevel' onChange={handleChange}/> 
                    </td>

                </tr>

                <tr>
                    <td>
                        <button>Add Inventory</button> 
                    </td>

                </tr>

            </table>
            <hr/>
        </form>

    )
}

export default InventoryForm;
