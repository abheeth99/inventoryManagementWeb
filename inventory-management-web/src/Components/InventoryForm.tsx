import React, { useContext, useEffect, useState, useRef} from 'react'
import { reorderLevel } from '../Models/Enum';
import InventoryItem from '../Models/inventoryItem';
import { InventoryContext } from '../Store/inventory-context';
import {Button, Modal, Form} from 'react-bootstrap'

type FormValidationObj = {
    disable: boolean;
    nameErrorMessage: string;
}

const InventoryForm: React.FC<{onSubmit: (inventory:InventoryItem)=>void, inventoryToEditId?: number}>=(props) =>{

    const [inventoryItem, setInventoryItem] = useState<InventoryItem>(new InventoryItem());

    const inventoryContext = useContext(InventoryContext);

    const firstRender = useRef(true);

    const [formVal, setFormVal] = useState<FormValidationObj>({disable: true, nameErrorMessage: 'Required'});

    const [modalState, setModalState] = useState(true);

    useEffect(() => {
        if(props.inventoryToEditId){
            (async function () {
                const inventoryToEdit = await inventoryContext.getInventoryToUpdate(props.inventoryToEditId?? 0);
                setInventoryItem(inventoryToEdit);
            })();
        }
        return () => {
            
        }
    }, [])

    useEffect(() => {
        if (firstRender.current) {
            debugger;
          firstRender.current = false
          return
        }
        setFormVal(validateForm())
    }, [inventoryItem])

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const value = event.target.value;

        setInventoryItem({
            ...inventoryItem,[event.target.name]: value
        });
    }

    const validateForm = () => {
        if (inventoryItem.name === "") {
            return {disable: true, nameErrorMessage: 'Name cant be blank!'}
        } else {
            return {disable: false, nameErrorMessage: ''}
        }
    }

    const handleSubmit = () => {
        props.onSubmit(inventoryItem);
        setInventoryItem(new InventoryItem());
        setModalState(!modalState);
    }
    return (
        <>
        <Modal show={modalState}>
        <Modal.Header>Add a Inventory to the list</Modal.Header>
        <Modal.Body>
            <Form noValidate validated={true}>
                <Form.Group>
                    <Form.Label>Inventory Name</Form.Label>
                    <Form.Control required type="text" placeholder="Inventory Name" value={inventoryItem.name} name='name' onChange={handleChange}/>
                    <Form.Control.Feedback type="invalid">
                        Please Enter a Name
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Units Count</Form.Label>
                    <Form.Control required type="number" placeholder="Units Count" value={inventoryItem.unitsCount} name='unitsCount' onChange={handleChange}/>
                    <Form.Control.Feedback type="invalid">
                        Please Enter a Units Count
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Unit Price</Form.Label>
                    <Form.Control required type="number" placeholder="Unit Price" value={inventoryItem.unitPrice} name='unitPrice' onChange={handleChange}/>
                    <Form.Control.Feedback type="invalid">
                        Please Enter a Unit Price
                    </Form.Control.Feedback>
                </Form.Group>
                {/* <Form.Group>
                    <Form.Check
                    />
                </Form.Group> */}
                        Reorder Level :
                        🟢
                        <input type="radio" placeholder="Low" checked={inventoryItem.reorderLevel == reorderLevel.low} value={reorderLevel.low} name='reorderLevel' onChange={handleChange}/>
                        🟡
                        <input type="radio" placeholder="Medium" checked={inventoryItem.reorderLevel == reorderLevel.medium} value={reorderLevel.medium} name='reorderLevel' onChange={handleChange}/>
                        🔴
                        <input type="radio" placeholder="Critical" checked={inventoryItem.reorderLevel == reorderLevel.critical} value={reorderLevel.critical} name='reorderLevel' onChange={handleChange}/> 
            </Form>
        </Modal.Body>
            <Modal.Footer><Button disabled={formVal.disable} onClick={()=>{handleSubmit()}}>Add Inventory</Button> </Modal.Footer>
        </Modal>
        </>

    )
}

export default InventoryForm;
