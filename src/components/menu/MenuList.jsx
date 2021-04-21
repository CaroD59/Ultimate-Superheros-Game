import styled from 'styled-components';
import { Switch, Route, NavLink } from 'react-router-dom';
import Deck from './Deck';
import Battle from './Battle';
import Rules from './Rules';

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
    width: 75px;
    height: 50px;
    position: relative;
    right: 22px;
    opacity: 1;
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }

  img:hover {
    opacity: 0.5;
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
            <li>
              <NavLink activeClassName="NavBar" exact to="/Deck">
                <img src="/images/icones/LogoDeck.png" alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="NavBar" to="/Battle">
                <img src="/images/icones/LogoVS.png" alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="NavBar" to="/Rules">
                <img src="/images/icones/LogoRegle.png" alt="" />
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
