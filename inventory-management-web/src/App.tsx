import React from 'react';
import logo from './logo.svg';
import './App.css';
import InventoriesContextProvider from './Store/inventory-context';
import InventoryList from './Components/InventoryList';

function App() {
  return (
    <InventoriesContextProvider>
      <InventoryList/>
    </InventoriesContextProvider>
  );
}

export default App;
