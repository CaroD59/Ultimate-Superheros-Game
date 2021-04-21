import PropTypes from 'prop-types';

const MyHero = ({ heroData }) => {
  return (
    <>
      <h1>Mon héros</h1>
      <div className="myHero">
        <img src={heroData.image.url} alt="" />
        <h2>{heroData.name}</h2>
        <img src="/Images/icones/icone-force" alt="" />
        <p>{heroData.powerstats.strength}</p>
        <img src="/Images/icones/icone-defense" alt="" />
        <p>{heroData.powerstats.durability}</p>
        <img src="/Images/icones/icone-vitesse" alt="" />
        <p>{heroData.powerstats.speed}</p>
      </div>
    </>
  );
};

MyHero.propTypes = {
  heroData: PropTypes.shape,
};

MyHero.defaultProps = {
  heroData: {},
};

export default MyHero;
