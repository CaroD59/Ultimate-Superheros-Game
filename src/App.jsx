import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import MenuList from './components/menu/MenuList';
import Play from './components/Play/Play';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MenuList />
         <Play />
      </BrowserRouter>
    </div>
  );
}