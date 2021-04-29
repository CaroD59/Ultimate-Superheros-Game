import PropTypes from 'prop-types';
import axios from 'axios';
import { useState, useEffect } from 'react';
import StyleBattle from './StyleBattle';

export default function Battle({ heroToFight }) {
  const [CpuHero, setCpuHero] = useState({});
  useEffect(() => {
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
          setCpuHero(data);
        }
      });
  }, []);

  const [resultBattle, setResultBattle] = useState(null);

  const fight = () => {
    const Hero1 = {
      strength: parseInt(heroToFight.powerstats.strength, 10),
      speed: parseInt(heroToFight.powerstats.speed, 10),
      durability: parseInt(heroToFight.powerstats.durability, 10),
    };

    const Hero2 = {
      strength: parseInt(CpuHero.powerstats.strength, 10),
      speed: parseInt(CpuHero.powerstats.speed, 10),
      durability: parseInt(CpuHero.powerstats.durability, 10),
    };
    do {
      if (
        Hero1.speed > Hero2.speed &&
        Hero1.durability > 0 &&
        Hero2.durability > 0
      ) {
        Hero2.durability -= Hero1.strength;
      } else if (
        Hero2.speed > Hero1.speed &&
        Hero1.durability > 0 &&
        Hero2.durability > 0
      ) {
        Hero1.durability -= Hero2.strength;
      } else if (
        Hero1.speed === Hero2.speed &&
        Hero1.durability > 0 &&
        Hero2.durability > 0
      ) {
        Hero2.durability -= Hero1.strength;
      }

      if (
        Hero1.speed > Hero2.speed &&
        Hero1.durability > 0 &&
        Hero2.durability > 0
      ) {
        Hero1.durability -= Hero2.strength;
      } else if (
        Hero2.speed > Hero1.speed &&
        Hero1.durability > 0 &&
        Hero2.durability > 0
      ) {
        Hero2.durability -= Hero1.strength;
      } else if (
        Hero1.speed === Hero2.speed &&
        Hero1.durability > 0 &&
        Hero2.durability > 0
      ) {
        Hero1.durability -= Hero2.strength;
      }
    } while (Hero1.durability > 0 && Hero2.durability > 0);

    if (Hero1.durability > Hero2.durability) {
      setResultBattle(true);
    } else {
      setResultBattle(false);
    }
    return resultBattle;
  };

  return (
    <>
      {CpuHero.image && (
        <StyleBattle>
          <div className="container">
            <div className="myHeroToFight">
              <h2>{heroToFight.name}</h2>
              <div>
                <img src={heroToFight.image.url} alt="" className="myHeroImg" />
              </div>
              <div className="statsHero">
                {heroToFight.image.url ===
                  'https://i.ibb.co/hymsXgZ/carte-Vide.png' && <></>}
                {heroToFight.powerstats.strength > 0 && (
                  <img src="/Images/icones/icone-force.png" alt="" />
                )}
                <p>{heroToFight.powerstats.strength}</p>
                {heroToFight.image.url ===
                  'https://i.ibb.co/hymsXgZ/carte-Vide.png' && <></>}
                {heroToFight.powerstats.strength > 0 && (
                  <img src="/Images/icones/icone-defense.png" alt="" />
                )}
                <p>{heroToFight.powerstats.durability}</p>
                {heroToFight.image.url ===
                  'https://i.ibb.co/hymsXgZ/carte-Vide.png' && <></>}
                {heroToFight.powerstats.strength > 0 && (
                  <img src="/Images/icones/icone-vitesse.png" alt="" />
                )}
                <p>{heroToFight.powerstats.speed}</p>
              </div>
            </div>

            <button
              onClick={() => fight()}
              type="button"
              className="buttonFight"
            >
              FIGHT
            </button>

            <div className="CpuHero">
              <h2>{CpuHero.name}</h2>
              <div>
                <img src={CpuHero.image.url} alt="" className="myHeroImg" />
              </div>
              <div className="statsHero">
                <img src="/Images/icones/icone-force.png" alt="" />
                <p>{CpuHero.powerstats.strength}</p>
                <img src="/Images/icones/icone-defense.png" alt="" />
                <p>{CpuHero.powerstats.durability}</p>
                <img src="/Images/icones/icone-vitesse.png" alt="" />
                <p>{CpuHero.powerstats.speed}</p>
              </div>
            </div>
            <div>
              {resultBattle === null && <></>}
              {resultBattle === true && <h2>you win</h2>}
              {resultBattle === false && <h2>you loose</h2>}
            </div>
          </div>
        </StyleBattle>
      )}
    </>
  );
}

Battle.propTypes = {
  heroToFight: PropTypes.shape,
};

Battle.defaultProps = {
  heroToFight: {},
};