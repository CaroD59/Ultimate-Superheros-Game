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
  @media screen and (max-width: 1600px) {
    .iconePlay {
      left: 90%;
      bottom: 89%;
    }
  }

  @media screen and (max-width: 800px) {
    .iconePlay {
      left: 80%;
      bottom: 89%;
    }
  }

  @media screen and (max-width: 700px) {
    .iconePlay {
      left: 85%;
      bottom: 89%;
    }
  }
  @media screen and (max-width: 600px) {
    .iconePlay {
      left: 53%;
      bottom: 82%;
    }
  }
`;
export default SPlay;
