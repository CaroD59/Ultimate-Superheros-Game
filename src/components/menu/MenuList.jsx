import { Switch, Route, NavLink } from 'react-router-dom';
import CSSMenuList from './CSSMenuList';
import Deck from './Deck';
import Battle from './Battle';
import Rules from './Rules';

export default function App() {
  return (
    <CSSMenuList>
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
    </CSSMenuList>
  );
}
