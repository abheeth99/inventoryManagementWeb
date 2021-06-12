import React, { useEffect, useState } from 'react';
import { getInventories, removeInventories } from '../api/InventoryApi';
import InventoryItem from '../Models/inventoryItem';

type InventoryContextObj = {
    inventories: any; // Todo: remove any and put : InventoryItem[]
    addInventory: (newInventory: InventoryItem) => void;
    setReorderLevel: (id: number) => void;
    removeInventory: (id: number) => void;
    updateInventory: (updatedInventory: InventoryItem, id: number) => void;
}

export const InventoryContext = React.createContext<InventoryContextObj>({
    inventories: [],
    addInventory: (newInventory: InventoryItem) => { },
    setReorderLevel: (id: number) => { },
    removeInventory: (id: number) => { },
    updateInventory: (updatedInventory: InventoryItem, id: number) => { },
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


    const addInventoryHandler = (newInventory: InventoryItem)=>{

    }

    const setReorderLevelHandler = (id: number)=>{
        
    }

    const removeInventoryHandler = async (id: number)=>{
        const allInventories = await removeInventories(id);
        if(allInventories.data)
            setInventories(allInventories.data);
    }

    const updateInventoryHandler = (updatedInventory: InventoryItem, id: number)=>{
        
    }

    const contextValue: InventoryContextObj = {
        inventories: inventories,
        addInventory: addInventoryHandler,
        setReorderLevel: setReorderLevelHandler,
        removeInventory: removeInventoryHandler,
        updateInventory: updateInventoryHandler
    };

    return(
        <InventoryContext.Provider value={contextValue}>
            {props.children}
        </InventoryContext.Provider>
    )
}

export default InventoriesContextProvider;