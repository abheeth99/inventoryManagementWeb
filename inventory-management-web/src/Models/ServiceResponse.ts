import Inventory from "./Inventory";

export class ServiceResponse<T>{
    Data: T = new Inventory() as any;
    Success: Boolean = true;
    Message: string = "";
  }
  
export default ServiceResponse;

