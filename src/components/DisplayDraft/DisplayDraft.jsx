import PropTypes from 'prop-types';

const DisplayDraft = ({ name, image, powerstats, addHero }) => {
  return (
    <button className="perso" onClick={addHero} type="button">
      <img className="imgperso" src={image.url} alt="" />
      <h2>{name}</h2>
      <img className="draftlogo" src="/Images/icones/icone-force.png" alt="" />
      <p>{powerstats.strength}</p>
      <img
        className="draftlogo"
        src="/Images/icones/icone-defense.png"
        alt=""
      />
      <p>{powerstats.durability}</p>
      <img
        className="draftlogo"
        src="/Images/icones/icone-vitesse.png"
        alt=""
      />
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
