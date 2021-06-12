import React, { useEffect, useRef, useState } from 'react'
import Inventory from '../Models/Inventory';

const InventoryForm: React.FC<{onSubmit: (inventory:Inventory)=>void}>=(props) =>{

    const [inventory, setInventory] = useState<Inventory>(new Inventory());

    const inputRef = useRef<HTMLInputElement>(null);
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const value = event.target.value;

        setInventory({
            ...inventory,[event.target.name]: value
        })
    }
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        props.onSubmit(inventory);
        setInventory(new Inventory());
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="add todo..." value={inventory.name} name='name' onChange={handleChange} ref={inputRef}/>
            <input type="text" placeholder="add todo..." value={inventory.unitsCount} name='UnitsCount' onChange={handleChange} ref={inputRef}/>
            <input type="text" placeholder="add todo..." value={inventory.unitPrice} name='UnitPrice' onChange={handleChange} ref={inputRef}/>
            <input type="text" placeholder="add todo..." value={inventory.reorderLevel} name='ReorderLevel' onChange={handleChange} ref={inputRef}/>
            <button>Add Todo</button>
        </form>

    )
}

export default InventoryForm
