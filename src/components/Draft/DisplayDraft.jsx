import PropTypes from 'prop-types';

const DisplayDraft = ({ name, image, powerstats, addHero }) => {
  return (
    <button className="perso" onClick={addHero} type="button">
      <img src={image.url} alt="" />
      <h2>{name}</h2>
      <img src="./Images/icones/icone-force" alt="" />
      <p>{powerstats.strength}</p>
      <img src="./Images/icones/icone-defense" alt="" />
      <p>{powerstats.durability}</p>
      <img src="./Images/icones/icone-vitesse" alt="" />
      <p>{powerstats.speed}</p>
    </button>
  );
};

DisplayDraft.propTypes = {
  name: PropTypes.string,
  powerstats: PropTypes.shape,
  image: PropTypes.shape,
  addHero: PropTypes.func,
};

DisplayDraft.defaultProps = {
  name: '',
  powerstats: {},
  image: {},
  addHero: () => {},
};

export default DisplayDraft;
