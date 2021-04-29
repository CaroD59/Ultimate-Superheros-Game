import PropTypes from 'prop-types';
import StyleMyHero from './StyleMyHero';

const MyHero = ({ heroData }) => {
  return (
    <StyleMyHero>
      <div className="Hero">
        <h1>Mon Héro</h1>
        <div className="underline"> </div>
        <div className="myHero">
          <h2>{heroData.name}</h2>
          <div>
            <img src={heroData.image.url} alt="" className="myHeroImg" />
          </div>

          <div className="statsHero">
            {heroData.image.url ===
              'https://i.ibb.co/hymsXgZ/carte-Vide.png' && <></>}
            {heroData.powerstats.strength > 0 && (
              <img src="/Images/icones/icone-force.png" alt="" />
            )}
            <p>{heroData.powerstats.strength}</p>
            {heroData.image.url ===
              'https://i.ibb.co/hymsXgZ/carte-Vide.png' && <></>}
            {heroData.powerstats.strength > 0 && (
              <img src="/Images/icones/icone-defense.png" alt="" />
            )}
            <p>{heroData.powerstats.durability}</p>
            {heroData.image.url ===
              'https://i.ibb.co/hymsXgZ/carte-Vide.png' && <></>}
            {heroData.powerstats.strength > 0 && (
              <img src="/Images/icones/icone-vitesse.png" alt="" />
            )}
            <p>{heroData.powerstats.speed}</p>
          </div>
        </div>
      </div>
    </StyleMyHero>
  );
};

MyHero.propTypes = {
  heroData: PropTypes.shape,
};

MyHero.defaultProps = {
  heroData: {},
};

export default MyHero;
