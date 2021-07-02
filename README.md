# inventoryManagementWeb
## Introduction

This repositary contains for a inventory management system front end application. This repository includes two React typescript apps to do basic CRUD operations and to notify when the DB is updated, respectively.

### inventoryManagementWeb
### inventory-management-web-admin

## Installation and Startup

1. Clone the repositary

    https://github.com/abheeth99/inventoryManagementWeb.git

2. Install npm dependencies
    * Navigate to **inventoryManagementWeb** folder and install dependencies
    * Navigate to **inventory-management-web-admin** folder and install   
    dependencies

    ```
    npm install
    ```

3. Start the servers
    * Navigate to **inventoryManagementWeb** folder and Start the servers
    * Navigate to **inventory-management-web-admin** folder and Start the servers 

    ```
    npm start
    ```
    _Note! This will start the server with_ PORT:3000 _and_ PORT:3001 _. If you want to set the PORT manually you can update the start script inside the_ package.json _as follows,_

    ```
    "start": "set PORT=3000 && react-scripts start",
    ``` 