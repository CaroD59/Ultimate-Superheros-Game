import styled from 'styled-components';

const StyleMyHero = styled.div`
  .myHero {
    padding: 5px;
    border: 1px solid black;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    background-color: E6E6E6;
  }
  h1 {
    font-family: rubik;
    font-weight: semibold;
    font-size: 1.5em;
  }
  h2 {
    font-family: rubik;
    font-weight: medium;
    font-size: 1.2em;
    margin: 1%;
  }
  .myHeroImg {
    width: 200px;
    height: auto;
  }
  .statsHero {
    display: flex;
    justify-content: center;
    margin: 2%;
  }
  .statsHero img {
    width: 10%;
    height: auto;
  }
  .statsHero p {
    font-family: rubik;
  }
`;

export default StyleMyHero;
