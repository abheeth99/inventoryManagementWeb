import React, { useEffect, useState } from 'react';
import Inventory from '../Models/Inventory';
import api from "../api/Inventory";

type InventoriesContextObj = {
    inventories: any;
}

export const InventoryContext = React.createContext<InventoriesContextObj>({
    inventories: [],
});

const InventoriesContextProvider: React.FC = (props) => {

    const retrieveInventories = async () => {
        const response = await api.get("/GetAll");
        return response.data.data;
      };
      
    const [inventories, setInventories] = useState<Inventory[]>([]);

    useEffect(() => {
        const getAllInventories = async () => {
          const allInventories = await retrieveInventories();
          if (allInventories) setInventories(allInventories);
        };
    
        getAllInventories();
      }, []);

    const contextValue: InventoriesContextObj = {
        inventories: inventories
    };

    return (
        <InventoryContext.Provider value={contextValue}>
            {props.children}
        </InventoryContext.Provider>
    )
}

export default InventoriesContextProvider;