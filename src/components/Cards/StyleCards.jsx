import styled from 'styled-components';

const StyleCards = styled.div`
  .cards {
  }
  .titleDraft {
    color: white;
    font-family: rubik;
    font-weight: bold;
    letter-spacing: 0.3px;
    margin-bottom: 8px;
    font-size: 1.5em;
    margin-left: 215px;
  }

  .draft h2 {
    display: block;
  }
  .underline {
    margin-left: 215px;
    background: linear-gradient(135deg, #148ba6, 40%, white);
    width: 90px;
    height: 5px;
    margin-bottom: 20px;
  }
  .draftcards {
    display: flex;
    flex-wrap: wrap;
    margin-left: 215px;
    margin-right: 215px;
  }
  @media screen and (max-width: 800px) {
    .draftcards {
      margin-left: 46px;
      margin-right: 20px;
    }
  }
`;
export default StyleCards;
