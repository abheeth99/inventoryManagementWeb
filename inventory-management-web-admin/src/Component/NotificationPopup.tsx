
import React from "react"
import { Button, Form, Modal, Toast } from "react-bootstrap";
import { getPayload } from "../Service/FirebaseService";

type notification = {
    title : string,
    body : string
}

export default class NotificationPopup extends React.Component<{text : notification}> {

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
                    <Modal.Header>Add a Inventory to the list</Modal.Header>
                    <Modal.Body>
                        <Form noValidate validated={true}>
                            <Form.Group>
                                <Form.Label>{this.props.text.title}</Form.Label>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>{this.props.text.body}</Form.Label>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer><Button  onClick={()=>{this.setShow(false)}}>close</Button> </Modal.Footer>
                    {/* <Modal.Footer><Button>Add Inventory</Button>
                    </Modal.Footer> */}
                </Modal>
            </React.Fragment>
        )
    }
}