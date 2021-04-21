import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import MenuList from './components/menu/MenuList';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MenuList />
      </BrowserRouter>
    </div>
  );
}
