import styled from 'styled-components';

const SPlay = styled.div`
  .iconePlay {
    width: 70px;
    height: auto;
    position: absolute;
    bottom: 20%;
    left: 90px;
  }

  /* Responsive Media Queries */

  @media screen and (max-width: 800px) {
    .iconePlay {
      position: absolute;
      top: 30px;
      left: 650px;
      right: 0;
    }
  }

  @media screen and (max-width: 700px) {
    .iconePlay {
      left: 85%;
      bottom: 89%;
    }
  }
`;
export default SPlay;
