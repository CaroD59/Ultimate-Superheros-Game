import { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayDraft from './DisplayDraft';
import MyHero from './MyHero/MyHero';

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
    for (let i = 0; i < 20; i += 1) {
      const randomID = Math.floor(Math.random() * 730);
      axios
        .get(`https://superheroapi.com/api.php/4118415658211107/${randomID}`)
        .then(({ data }) => {
          heroes.push(data);
        });
    }
    setTimeout(() => {
      setAvailableHeroes(heroes);
    }, 1000);
  }, []);

  return (
    <div className="Cards">
      <MyHero heroData={selectedHero} />
      <section className="draft">
        <h2>Draft</h2>
        <div>
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
  );
};

export default Cards;
