import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayDraft = ({ id }) => {
  const sampleCards = {
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

  const [Cards, setCards] = useState(sampleCards);
  useEffect(() => {
    axios
      .get(`https://superheroapi.com/api.php/4118415658211107/${id}`)
      .then(({ data }) => {
        setCards(data);
      });
  }, []);

  console.log(Cards);
  return (
    <>
      <img src={Cards.image.url} alt="" />
      <h2>{Cards.name}</h2>
      <p>Force :{Cards.powerstats.strength}</p>
      <p>Defense :{Cards.powerstats.durability}</p>
      <p>Vitesse :{Cards.powerstats.speed}</p>
    </>
  );
};

DisplayDraft.propTypes = {
  id: PropTypes.number,
};

DisplayDraft.defaultProps = {
  id: null,
};

export default DisplayDraft;
