import axios from 'axios';
import { useState, useEffect } from 'react';
import StyleCards from './StyleCards';
import MyHero from '../MyHero/MyHero';
import DisplayDraft from '../DisplayDraft/DisplayDraft';

const Cards = () => {
  const sampleCharacter = {
    response: 'success',
    id: '70',
    name: 'Batman',
    powerstats: {
      intelligence: '100',
      strength: '26',
      speed: '27',
      durability: '50',
      power: '47',
      combat: '100',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg',
    },
  };

  const [selectedHero, setSelectedHero] = useState(sampleCharacter);
  const [availableHeroes, setAvailableHeroes] = useState([]);

  useEffect(() => {
    const heroes = [];
    for (let i = 0; i < 30; i += 1) {
      const randomID = Math.floor(Math.random() * 730);
      axios
        .get(`https://superheroapi.com/api.php/4118415658211107/${randomID}`)
        .then(({ data }) => {
          if (
            data.powerstats.power !== 'null' &&
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

export default Cards;
