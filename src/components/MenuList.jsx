import styled from 'styled-components';
import { Switch, Route, NavLink } from 'react-router-dom';
import Deck from './Deck';
import Battle from './Battle';
import Rules from './Rules';
import LogoDeck from './LogoDeck.png';
import LogoVS from './LogoVS.png';
import LogoRegle from './LogoRegle.png';

const SApp = styled.div`
  header {
    background: linear-gradient(135deg, #148ba6, 40%, #0c4459);
    padding-top: 9px;
    margin-left: 20px;
    width: 110px;
    height: 25vh;
    border-radius: 30px;
    box-shadow: 0px 0px 19px 1px rgba(12, 53, 89, 0.91);
  }

  img {
    width: 70px;
    height: 50px;
    position: relative;
    right: 20px;
  }

  li {
    padding-bottom: 15px;
  }

  ul {
    list-style-type: none;
  }
`;

export default function App() {
  return (
    <SApp>
      <header>
        <nav>
          <ul>
            {/* <li>
              <NavLink activeClassName="toto" exact to="/Home">
                Home
              </NavLink>
            </li> */}
            <li>
              <NavLink activeClassName="NavBar" exact to="/Deck">
                <img src={LogoDeck} alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="NavBar" to="/Battle">
                <img src={LogoVS} alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="NavBar" to="/Rules">
                <img src={LogoRegle} alt="" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <p>WELCOME TO REACT BATTLE</p>
          </Route>
          <Route path="/Deck" component={Deck} />
          <Route path="/Battle" component={Battle} />
          <Route path="/Rules" component={Rules} />
        </Switch>
      </main>
    </SApp>
  );
}
