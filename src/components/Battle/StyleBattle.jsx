import styled from 'styled-components';

const StyleBattle = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -5%;
  }
  h1 {
    font-family: rubik;
    font-weight: semibold;
    font-size: 1.5em;
  }
  .myHeroToFight,
  .CpuHero {
    padding: 5px;
    border: 1px solid black;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 10%;
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

    img {
      width: 10%;
      height: auto;
    }
  }
  .statsHero .statsHero p {
    font-family: rubik;
  }

  .buttonFight {
    width: 10vw;
    margin: 0 5% 0 5%;
    border-radius: 50%;
    padding: 1%;

    img {
      width: 80%;
      height: auto;
    }
  }

  .buttonFight:hover {
    box-shadow: -1px 1px 43px -7px rgba(150, 150, 150, 0.76);
  }

  .cardHero {
    transition: all 0.2s ease-in-out;
  }

  .cardHero:hover {
    transform: scale(1.1);
    box-shadow: -1px 1px 43px -7px rgba(0, 0, 0, 0.76);
  }

  .resultBattle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #e6e6e6;
    width: 25vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: 2px solid #148ba6;

    h2 {
      font-size: 2em;
      font-weight: bold;
    }
  }

  @media screen and (max-width: 800px) {
    .container{
      margin-top : 35%;
    }
    .myHeroToFight,
  .CpuHero {
    width : 25vw;
    height : 100%;
  }
  .myHeroImg {
    width: 100%;
    height: auto;
  }
  .resultBattle{
    width : 80vw;
  }
`;

export default StyleBattle;
