import { reorderLevel } from "./Enum";

export class ServiceResponse<T>{
    data: T ;
    success: Boolean;
    message: string;

    constructor() {
      this.data = <T>{}; 
      this.success = true;
      this.message = "";
    }
}
  
export default ServiceResponse;