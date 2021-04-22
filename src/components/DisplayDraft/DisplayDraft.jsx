import PropTypes from 'prop-types';
import StyleDisplayDraft from './StyleDisplayDraft';

const DisplayDraft = ({ name, image, powerstats, addHero }) => {
  return (
    <StyleDisplayDraft>
      <button className="perso" onClick={addHero} type="button">
        <h2>{name}</h2>
        <div className="imageperso">
          <img className="imgperso" src={image.url} alt="" />
        </div>
        <div className="powerstats">
          <img
            className="draftlogo"
            src="/Images/icones/icone-force.png"
            alt=""
          />
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
        </div>
      </button>
    </StyleDisplayDraft>
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
