import React, { useEffect, useState } from 'react';
import { addInventory, getInventories, getInventoryById, removeInventories, updateInventory } from '../api/InventoryApi';
import InventoryItem from '../Models/inventoryItem';

type InventoryContextObj = {
    inventories: any; // Todo: remove any and put : InventoryItem[]
    addInventory: (newInventory: InventoryItem) => void;
    setReorderLevel: (id: number) => void;
    removeInventory: (id: number) => void;
    updateInventory: (updatedInventory: InventoryItem, id: number) => void;
    getInventoryToUpdate: (id: number) => any;
}

export const InventoryContext = React.createContext<InventoryContextObj>({
    inventories: [],
    addInventory: (newInventory: InventoryItem) => { },
    setReorderLevel: (id: number) => { },
    removeInventory: (id: number) => { },
    updateInventory: (updatedInventory: InventoryItem, id: number) => { },
    getInventoryToUpdate: (id: number) => {}
});

const InventoriesContextProvider: React.FC = (props) => {
    //useState to store Inventories
    const [inventories, setInventories] = useState<InventoryItem[]>([]);

    useEffect(() => {
        const getAllInventories = async () => {
            const allInventories = await getInventories();
            if(allInventories.data)
                setInventories(allInventories.data);
        };
        getAllInventories();
    }, [])


    const addInventoryHandler = async (newInventory: InventoryItem)=>{
        const allInventories = await addInventory(newInventory);
        if(allInventories.data)
            setInventories(allInventories.data);
    }

    const setReorderLevelHandler = (id: number)=>{
        
    }

    const removeInventoryHandler = async (id: number)=>{
        const allInventories = await removeInventories(id);
        if(allInventories.data)
            setInventories(allInventories.data);
    }

    const updateInventoryHandler = async (updatedInventory: InventoryItem, id: number)=>{
        updatedInventory.id = id;
        const updatedInventoryItem = await updateInventory(updatedInventory);
        if(updatedInventoryItem.data){
            let updatedInventories = inventories.map(inventory=>{
                if(inventory.id === id){
                    inventory = updatedInventory;
                }
                return inventory;
            })
            setInventories(updatedInventories);
        }
    }

    const getInventoryToUpdateHandler = async (id: number)=>{
        const inventoryToUpdate = await getInventoryById(id);
        return inventoryToUpdate.data
    }

    const contextValue: InventoryContextObj = {
        inventories: inventories,
        addInventory: addInventoryHandler,
        setReorderLevel: setReorderLevelHandler,
        removeInventory: removeInventoryHandler,
        updateInventory: updateInventoryHandler,
        getInventoryToUpdate: getInventoryToUpdateHandler
    };

    return(
        <InventoryContext.Provider value={contextValue}>
            {props.children}
        </InventoryContext.Provider>
    )
}

export default InventoriesContextProvider;