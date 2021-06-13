import React, { useState } from 'react'
import InventoryItem from '../Models/inventoryItem';

const InventoryForm: React.FC<{onSubmit: (inventory:InventoryItem)=>void}>=(props) =>{

    const [inventoryItem, setInventoryItem] = useState<InventoryItem>(new InventoryItem());

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

    return (
        <form onSubmit={handleSubmit}>
            <div>
                Inventory Name :
                <input type="text" placeholder="Inventory Name" value={inventoryItem.name} name='name' onChange={handleChange}/>
            </div>
            <div>
                Units Count :
                <input type="number" placeholder="Units Count" value={inventoryItem.unitsCount} name='unitsCount' onChange={handleChange}/>
            </div>
            <div>
                Unit Price :
                <input type="number" placeholder="Unit Price" value={inventoryItem.unitPrice} name='unitPrice' onChange={handleChange}/>
            </div>
            <div>
                Reorder Level :
                Low
                <input type="radio" placeholder="Low" checked={inventoryItem.reorderLevel == 0} value={0} name='reorderLevel' onChange={handleChange}/>
                Medium
                <input type="radio" placeholder="Medium" checked={inventoryItem.reorderLevel == 1} value={1} name='reorderLevel' onChange={handleChange}/>
                Critical
                <input type="radio" placeholder="Critical" checked={inventoryItem.reorderLevel == 2} value={2} name='reorderLevel' onChange={handleChange}/>
            </div>
            <button>Add Inventory</button>
            <hr/>
        </form>

    )
}

export default InventoryForm;
