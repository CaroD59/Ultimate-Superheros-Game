import styled from 'styled-components';

const StyleDisplayDraft = styled.div`
  button {
    background: white;
    border-radius: 10px;
  }

  .perso {
    width: 7vw;
    height: 157px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e6e6e6;
    margin: 2px;
    overflow: hidden;
  }
  .perso h2 {
    font-size: 0.8em;
    margin: 2% 0 2% 0%;
  }

  .imgperso {
    width: 99px;
    height: 117px;
  }

  .draftlogo {
    height: auto;
    width: 15%;
  }
  .powerstats {
    margin: 1%;
    display: flex;
    justify-content: center;
    width: 120%;
  }
  .powerstats p {
    font-family: rubik;
    font-size: 0.7em;
  }
  @media screen and (max-width: 800px) {
    .perso {
      width: 14vw;
    }
  }
`;
export default StyleDisplayDraft;
