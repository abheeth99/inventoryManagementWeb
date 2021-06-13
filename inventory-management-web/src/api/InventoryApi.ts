import InventoryItem from "../Models/inventoryItem"
import ServiceResponse from "../Models/serviceResponse"

export const getInventories = ():Promise<ServiceResponse<InventoryItem[]>> =>{
    return fetch("https://localhost:44368/inventory/GetAll").then(res => res.json())
}

export const removeInventories = (id: number):Promise<ServiceResponse<InventoryItem[]>> =>{
    return fetch("https://localhost:44368/inventory/"+id,{
        method: 'DELETE',
    }).then(res => res.json())
}

export const addInventory = (newInventory: InventoryItem):Promise<ServiceResponse<InventoryItem[]>> =>{
    return fetch("https://localhost:44368/inventory",{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newInventory),
    }).then(res => res.json())
}

export const updateInventory = (newInventory: InventoryItem):Promise<ServiceResponse<InventoryItem>> =>{
    return fetch("https://localhost:44368/inventory",{
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newInventory),
    }).then(res => res.json())
}