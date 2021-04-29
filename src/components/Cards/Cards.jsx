import PropTypes from 'prop-types';
import axios from 'axios';
import { useState, useEffect } from 'react';
import StyleCards from './StyleCards';
import MyHero from '../MyHero/MyHero';
import DisplayDraft from '../DisplayDraft/DisplayDraft';

const Cards = ({ selectedHero, setSelectedHero }) => {
  const [availableHeroes, setAvailableHeroes] = useState([]);

  useEffect(() => {
    const heroes = [];
    for (let i = 0; i < 30; i += 1) {
      const randomID = Math.floor(Math.random() * 730);
      axios
        .get(`https://superheroapi.com/api.php/4118415658211107/${randomID}`)
        .then(({ data }) => {
          if (
            data.powerstats.durability !== 'null' &&
            data.powerstats.speed !== 'null' &&
            data.powerstats.strength !== 'null' &&
            data.image.url !== 'null'
          ) {
            heroes.push(data);
          }
        });
    }
    setTimeout(() => {
      setAvailableHeroes(heroes.slice(0, 20));
    }, 1000);
  }, []);

  return (
    <StyleCards>
      <div className="cards">
        <MyHero heroData={selectedHero} />
        <section className="draft">
          <h2 className="titleDraft">Draft</h2>
          <div className="underline"> </div>
          <div className="draftcards">
            {availableHeroes.map((hero) => {
              return (
                <DisplayDraft
                  key={hero.name}
                  {...hero}
                  addHero={() => {
                    setSelectedHero(hero);
                  }}
                />
              );
            })}
          </div>
        </section>
      </div>
    </StyleCards>
  );
};

Cards.propTypes = {
  selectedHero: PropTypes.shape,
  setSelectedHero: PropTypes.func,
};

Cards.defaultProps = {
  selectedHero: {},
  setSelectedHero: () => {},
};

export default Cards;
