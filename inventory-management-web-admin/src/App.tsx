import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { getToken, onMessageListener } from './firebase';
import {Button, Row, Col, Toast, Modal} from 'react-bootstrap';

function App() {

  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({title: '', body: '', data: {InventoryId : '', id: '', InventoryName : ''}});
  const [isTokenFound, setTokenFound] = useState(false);
  getToken(setTokenFound);

  onMessageListener().then((payload: any) => {
    setShow(true);
    setNotification({title: payload.notification.title, body: payload.notification.body, data : {InventoryId: payload.data.InventoryId, id: payload.data.InventoryLogId, InventoryName: payload.data.InventoryName,}})
    console.log(payload);
  }).catch((err: any) => console.log('failed: ', err));

  return (
    <div className="App">
      <header className="App-header">
        {isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}
        {!isTokenFound && <h1> Need notification permission ❗️ </h1>}
        <Button onClick={() => setShow(true)}>Show Popup</Button>
      </header>

      <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header>{notification.title}</Modal.Header>
        <Modal.Body>
          Inventory Id : {notification.data.InventoryId} <br/>
          Inventory Log Id : {notification.data.id} <br/>
          Inventory Name : {notification.data.InventoryName}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShow(false)}> Close</Button>
        </Modal.Footer>
      </Modal>
      
    </div>
  );
}

export default App;