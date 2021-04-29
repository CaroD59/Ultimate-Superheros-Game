import styled from 'styled-components';

const CSSRules = styled.div`
  p {
    color: white;
    font-family: rubik;
  }
  .Thor {
    height: 100px;
    width: 170px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
  }

  .BigContainerRules {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .LogoVSRules {
    background: linear-gradient(135deg, #148ba6, 40%, #0c4459);
    border-radius: 10px;
    width: 75px;
    height: 50px;
    margin-top: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .CardRules {
    width: 390px;
    height: 400px;
    position: relative;
    right: 10px;
  }

  .HowToPlay {
    width: 350px;
    height: 500px;
    padding: 20px;
    margin-right: 20px;
    text-overflow: clip;
    text-align: justify;
    background: linear-gradient(135deg, #148ba6, 40%, #0c4459);
    border-radius: 30px;
    box-shadow: 0px 0px 19px 1px rgba(12, 53, 89, 0.91);
  }

  .Preparation {
    width: 350px;
    height: 500px;
    padding: 20px;
    margin-right: 20px;
    text-overflow: clip;
    text-align: justify;
    background: linear-gradient(135deg, #148ba6, 40%, #0c4459);
    border-radius: 30px;
    box-shadow: 0px 0px 19px 1px rgba(12, 53, 89, 0.91);
  }

  .TheGame {
    width: 350px;
    height: 500px;
    padding: 20px;
    text-overflow: clip;
    text-align: justify;
    background: linear-gradient(135deg, #148ba6, 40%, #0c4459);
    border-radius: 30px;
    box-shadow: 0px 0px 19px 1px rgba(12, 53, 89, 0.91);
  }

  .pRules {
    margin-top: 20px;
    font-size: 1.1em;
    font-family: rubik;
  }

  .RulesTitles {
    font-size: 30px;
    font-family: rubik;
    background: -webkit-linear-gradient(#eee, #8b8989);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Responsive Media Queries */

  @media screen and (max-width: 1000px) {
    .BigContainerRules {
      flex-wrap: wrap;
    }

    .TheGame {
      width: 350px;
      height: 500px;
      margin-top: 20px;
    }
    .Preparation {
      width: 350px;
      height: 500px;
      margin-top: 20px;
    }
    .HowToPlay {
      width: 350px;
      height: 500px;
      margin-top: 20px;
    }
  }
`;

export default CSSRules;
