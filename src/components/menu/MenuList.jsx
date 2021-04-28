import { Switch, Route, NavLink } from 'react-router-dom';
import CSSMenuList from './CSSMenuList';
import Deck from './Deck';
import Battle from './Battle';
import Rules from './Rules';

export default function App() {
  return (
    <CSSMenuList>
      <NavLink activeClassName="NavBar" exact to="/">
        <img src="/images/icones/LogoUSG.png" alt="" className="LogoUSG" />
      </NavLink>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink activeClassName="NavBar" exact to="/Deck">
                <img
                  src="/images/icones/LogoDeck.png"
                  alt=""
                  className="LogoNavBar"
                />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="NavBar" to="/Battle">
                <img
                  src="/images/icones/LogoVS.png"
                  alt=""
                  className="LogoNavBar"
                />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="NavBar" to="/Rules">
                <img
                  src="/images/icones/LogoRegle.png"
                  alt=""
                  className="LogoNavBar"
                />
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <p className="Welcome">Welcome to Ultimate Superheroes Game</p>
          </Route>
          <Route path="/Deck" component={Deck} />
          <Route path="/Battle" component={Battle} />
          <Route path="/Rules" component={Rules} />
        </Switch>
      </main>
    </CSSMenuList>
  );
}
