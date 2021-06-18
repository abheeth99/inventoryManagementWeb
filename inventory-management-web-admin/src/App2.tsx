import React from "react"
import logo from './logo.svg';
import NotificationPopup from "./Component/NotificationPopup";
import FirebaseService, { getPayload } from "./Service/FirebaseService-Class";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MessagePayload from "./Model/MessagePayload";
import Inventory from "./Model/Inventory";


export default class App2 extends React.Component {

    state = {
        messagePayload: new MessagePayload<Inventory>(),
        isPermissionGranted : false
    }  

    async componentWillMount() {
        try {
            const firebasePermission = await new FirebaseService().grantFirebasePermission();
            this.setState({ isPermissionGranted: firebasePermission })
        } catch (error) {
            console.log("Permission grant issue", error)
        }
    }    

    componentDidUpdate() {
      getPayload().then((payload: any) => {
            console.log(payload)
             
            let InventoryData = JSON.parse(payload.data.Inventory);
            let newMessagePayload = new MessagePayload<Inventory>();
            
            newMessagePayload.notification = payload.notification;
            newMessagePayload.data = InventoryData;

            this.setState({ messagePayload:  newMessagePayload});
            
        }).catch((err: any) => console.log('failed: ', err));
    }

    render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.isPermissionGranted && <h1> Notification permission enabled 👍🏻 </h1>}
          {!this.state.isPermissionGranted && <h1> Need notification permission ❗️ </h1>}
        </header>
        {this.state.isPermissionGranted && <NotificationPopup message={this.state.messagePayload}/>}
      </div>
    )
}
  
}