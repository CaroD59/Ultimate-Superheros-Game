import styled from 'styled-components';

const StyleMyHero = styled.div`
  h1 {
    color: white;
    font-family: rubik;
    font-weight: bold;
    letter-spacing: 0.3px;
    margin-bottom: 8px;
    font-size: 1.5em;
  }

  .underline {
    margin-left: 37px;
    background: linear-gradient(135deg, #148ba6, 40%, white);
    width: 145px;
    height: 5px;
  }

  .Hero {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }

  .myHero {
    padding: 5px;
    border: 1px solid black;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 15%;
    background-color: #e6e6e6;
  }
  h2 {
    font-family: rubik;
    font-weight: medium;
    font-size: 1.2em;
    margin: 1%;
  }
  .myHeroImg {
    width: 10vw;
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
