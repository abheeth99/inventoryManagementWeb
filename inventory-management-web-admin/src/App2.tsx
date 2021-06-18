import React from "react"
import logo from './logo.svg';
import NotificationPopup from "./Component/NotificationPopup";
import FirebaseService, { getPayload } from "./Service/FirebaseService-Class";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App2 extends React.Component {

    state = {
        title : "",
        body : "",
        isPermissionGranted : false
    }  

    async componentWillMount() {
        try {
            const firebasePermission = await new FirebaseService().grantFirebasePermission();
            this.setState({ isPermissionGranted: firebasePermission })
            debugger;
        } catch (error) {
            console.log("Permission grant issue", error)
        }
    }    

    componentDidUpdate() {
        getPayload().then((payload: any) => {
             this.setState({ title: payload.notification.title, body: payload.notification.body });
            
        }).catch((err: any) => console.log('failed: ', err));
    }

    render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.isPermissionGranted && <h1> Notification permission enabled 👍🏻 </h1>}
          {!this.state.isPermissionGranted && <h1> Need notification permission ❗️ </h1>}
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.state.isPermissionGranted && <NotificationPopup text={this.state}/>}
      </div>
    )
}
  
}