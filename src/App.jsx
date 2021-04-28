import './reset.css';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import MenuList from './components/menu/MenuList';
import Play from './components/Play/Play';

export default function App() {
  const Sbackground = styled.div`
  background: linear-gradient(135deg, #148ba6, 40%, #0c4459);
  min-height: 100vh;
  min-width: 100vw;
`;
  return (
    <Sbackground>
      <BrowserRouter>
        <MenuList />
        <Play />
      </BrowserRouter>
    </Sbackground>
  );
}
