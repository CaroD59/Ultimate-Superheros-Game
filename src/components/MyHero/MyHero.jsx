import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
  .myHero {
    padding: 5px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    font-family: rubik;
  }
  .myHeroImg {
    width: 200px;
    height: auto;
  }
  .statsHero {
    display: flex;
  }
  .statsHero img {
    width: 5%;
    height: auto;
  }
`;

const MyHero = ({ heroData }) => {
  return (
    <Div>
      <h1>Mon héros</h1>
      <div className="myHero">
        <h2>{heroData.name}</h2>
        <div>
          <img src={heroData.image.url} alt="" className="myHeroImg" />
        </div>
        <div className="statsHero">
          <img src="/Images/icones/icone-force.png" alt="" />
          <p>{heroData.powerstats.strength}</p>
          <img src="/Images/icones/icone-defense.png" alt="" />
          <p>{heroData.powerstats.durability}</p>
          <img src="/Images/icones/icone-vitesse.png" alt="" />
          <p>{heroData.powerstats.speed}</p>
        </div>
      </div>
    </Div>
  );
};

MyHero.propTypes = {
  heroData: PropTypes.shape,
};

MyHero.defaultProps = {
  heroData: {},
};

export default MyHero;
