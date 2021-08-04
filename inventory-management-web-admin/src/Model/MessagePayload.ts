export class MessagePayload<T>{
    data : T;
    notification: {
        body: string;
        title: string;
    };
    constructor() {
        this.data = <T>{}; 
        this.notification = {
            title: "",
            body: ""
        }
        
    }
}
  
export default MessagePayload;