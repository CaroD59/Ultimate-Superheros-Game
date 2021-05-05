import { Switch, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import CSSMenuList from './CSSMenuList';
import Cards from '../Cards/Cards';
import Battle from '../Battle/Battle';
import Rules from './Rules';

export default function App() {
  const sampleCharacter = {
    response: 'success',
    id: '',
    name: '',
    powerstats: {
      strength: '',
      speed: '',
      durability: '',
    },
    image: {
      url: 'https://i.ibb.co/hymsXgZ/carte-Vide.png',
    },
  };
  const [selectedHero, setSelectedHero] = useState(sampleCharacter);

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
              {selectedHero.image.url ===
                'https://i.ibb.co/hymsXgZ/carte-Vide.png' && (
                <img
                  src="/images/icones/LogoVS.png"
                  alt=""
                  className="LogoNavBar fightDisable"
                />
              )}
              {selectedHero.image.url !==
                'https://i.ibb.co/hymsXgZ/carte-Vide.png' && (
                <NavLink activeClassName="NavBar" to="/Battle">
                  <img
                    src="/images/icones/LogoVS.png"
                    alt=""
                    className="LogoNavBar"
                  />
                </NavLink>
              )}
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
          <Route path="/Deck">
            <Cards
              selectedHero={selectedHero}
              setSelectedHero={setSelectedHero}
            />
          </Route>
          <Route path="/Battle">
            <Battle heroToFight={selectedHero} />
          </Route>
          <Route path="/Rules" component={Rules} />
        </Switch>
      </main>
    </CSSMenuList>
  );
}
