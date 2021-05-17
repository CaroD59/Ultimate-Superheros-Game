import { useEffect, useState } from 'react';
import axios from 'axios';
import DeckCard from '../DeckCard/DeckCard';

function MyDeck() {
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

  const [cards, setCard] = useState(sampleCharacter);
  useEffect(() => {
    axios
      .get('https://superheroapi.com/api.php/4118415658211107/38')
      .then(({ data }) => {
        setCard(data);
      });
  }, []);

  return (
    <>
      <h1>My Deck</h1>
      <DeckCard cards={cards} />;
    </>
  );
}

export default MyDeck;
