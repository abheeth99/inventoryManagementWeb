import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

import {Button, Row, Col, Toast} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getPayload, requestPermission } from './Service/FirebaseService';
import NotificationPopup from './Component/NotificationPopup';

function App() {
  
  const [notification, setNotification] = useState({title: '', body: ''});
  const [isTokenFound, setTokenFound] = useState(false);

  useEffect(() => {
    requestPermission().then(() => {
      setTokenFound(true);
    });
  }, [])

  useEffect(() => {
    requestPermission().then(() => {
      setTokenFound(true);
    });
  }, [])
  
  getPayload().then((payload: any) => {
    debugger
    setTokenFound(true);
    setNotification({title: payload.notification.title, body: payload.notification.body})
    console.log(payload);
  }).catch((err: any) => console.log('failed: ', err));

  return (
    <div className="App">       
      <header className="App-header">
        {isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}
        {!isTokenFound && <h1> Need notification permission ❗️ </h1>}
        <img src={logo} className="App-logo" alt="logo" />       
      </header>
      {/* <NotificationPopup text={notification}/> */}
    </div>
  );
}

export default App;