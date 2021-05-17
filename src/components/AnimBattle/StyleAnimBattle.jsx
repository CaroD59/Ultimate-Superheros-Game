import styled from 'styled-components';

const StyleAnimBattle = styled.div`
  .pop1 {
    position: absolute;
    left: 20%;
    top: 20%;
    animation: pop1 16s ease-in-out;
    opacity: 0%;
  }

  @keyframes pop1 {
    20% {
      opacity: 0%;
    }
    24% {
      opacity: 100%;
      transform: scale(2);
    }
    28% {
      opacity: 0%;
    }
  }

  .pop2 {
    position: absolute;
    left: 80%;
    top: 60%;
    animation: pop2 16s ease-in-out;
    opacity: 0%;
  }

  @keyframes pop2 {
    10% {
      opacity: 0%;
    }
    14% {
      opacity: 100%;
      transform: scale(3);
    }
    18% {
      opacity: 0%;
    }
  }
  .pop3 {
    position: absolute;
    left: 50%;
    top: 40%;
    animation: pop3 16s ease-in-out;
    opacity: 0%;
  }
  @keyframes pop3 {
    48% {
      opacity: 0%;
    }
    52% {
      opacity: 100%;
      transform: scale(3);
    }
    56% {
      opacity: 0%;
    }
  }

  .pop4 {
    position: absolute;
    left: 10%;
    top: 75%;
    animation: pop4 16s ease-in-out;
    opacity: 0%;
  }
  @keyframes pop4 {
    70% {
      opacity: 0%;
    }
    74% {
      opacity: 100%;
      transform: scale(3);
    }
    78% {
      opacity: 0%;
    }
  }
  .pop5 {
    position: absolute;
    left: 45%;
    top: 50%;
    animation: pop5 16s ease-in-out;
    opacity: 0%;
  }
  @keyframes pop5 {
    40% {
      opacity: 0%;
    }
    44% {
      opacity: 100%;
      transform: scale(3);
    }
    48% {
      opacity: 0%;
    }
  }

  .pop6 {
    position: absolute;
    left: 90%;
    top: 75%;
    animation: pop6 16s ease-in-out;
    opacity: 0%;
  }
  @keyframes pop6 {
    30% {
      opacity: 0%;
    }
    34% {
      opacity: 100%;
      transform: scale(3);
    }
    38% {
      opacity: 0%;
    }
  }

  .pop7 {
    position: absolute;
    left: 30%;
    top: 35%;
    animation: pop7 16s ease-in-out;
    opacity: 0%;
  }
  @keyframes pop7 {
    65% {
      opacity: 0%;
    }
    69% {
      opacity: 100%;
      transform: scale(3);
    }
    73% {
      opacity: 0%;
    }
  }

  .pop8 {
    position: absolute;
    left: 50%;
    top: 50%;
    animation: pop8 16s ease-in-out;
    opacity: 0%;
  }
  @keyframes pop8 {
    50% {
      opacity: 0%;
    }
    54% {
      opacity: 100%;
      transform: scale(3);
    }
    58% {
      opacity: 0%;
    }
  }
`;

export default StyleAnimBattle;
