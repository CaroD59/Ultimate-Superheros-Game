
import './reset.css';
import { BrowserRouter } from 'react-router-dom';
import Cards from './components/Cards/Cards';
import Play from './components/Play/Play';
import MenuList from './components/menu/MenuList';


export default function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <MenuList />
         <Play />
      </BrowserRouter>
    <Play />
      <div className="cartes">
        <Cards />
      </div>
    </div>
  );
}