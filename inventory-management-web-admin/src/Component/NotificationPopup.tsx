
import React from "react"
import { Button, Form, Modal, Toast } from "react-bootstrap";
import { reorderLevel } from "../Enum/enum";
import Inventory from "../Model/Inventory";
import MessagePayload from "../Model/MessagePayload";
import { getPayload } from "../Service/FirebaseService";

export default class NotificationPopup extends React.Component<{message : MessagePayload<Inventory>}> {

    state = {
        isDisplay : false 
    }
    
    constructor(props : any){      
        super(props)        
    }

    componentWillReceiveProps(){
        this.setShow(true);
    }
    

    setShow = (show: boolean) => {
        this.setState({ isDisplay: show })
    }

    render() {
        return (
            <React.Fragment>
                <Modal show={this.state.isDisplay}>
                    <Modal.Header>{this.props.message.notification.title}</Modal.Header>
                    <Modal.Body>
                        Inventory Id: {this.props.message.data.Id} <br/>
                        Inventory Name: {this.props.message.data.Name} <br/>
                        Inventory ReorderLevel: {reorderLevel[this.props.message.data.ReorderLevel]}

                    </Modal.Body>
                    <Modal.Footer><Button  onClick={()=>{this.setShow(false)}}>close</Button> </Modal.Footer>
                    {/* <Modal.Footer><Button>Add Inventory</Button>
                    </Modal.Footer> */}
                </Modal>
            </React.Fragment>
        )
    }
}