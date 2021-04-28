import styled from 'styled-components';

const StyleCards = styled.div`
  .cards {
    width: 75vw;
  }
  .titleDraft {
    font-family: rubik;
    font-weight: semibold;
    font-size: 1.5em;
  }
  .draft {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .draftcards {
    display: flex;
    flex-wrap: wrap;
  }
`;
export default StyleCards;
