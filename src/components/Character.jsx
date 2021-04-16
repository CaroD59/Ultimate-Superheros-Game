import { useEffect, useState } from 'react';
import axios from 'axios';

function Character() {
  const [characters, setCharacters] = useState([]);
  let draft = [];
  useEffect(() => {
    for (let i = 0; i < 20; i += 1) {
      const min = 1;
      const max = 730;
      const random = () => {
        return Math.floor(Math.random() * (max - min)) + min;
      };
      const id = random();

      axios
        .get(
          `https://www.superheroapi.com/api.php/4118415658211107/${id}/powerstats`
        )
        .then(({ data }) => {
          setCharacters(data);
        });
      draft += characters;
      console.log(draft);
    }
  }, []);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default Character;
