import InventoryItem from "../Models/inventoryItem"
import ServiceResponse from "../Models/serviceResponse"

export const getInventories = ():Promise<ServiceResponse<InventoryItem[]>> =>{
    return fetch("https://localhost:44368/inventory/GetAll").then(res => res.json())
}