import styled from 'styled-components';

const CSSMenuList = styled.div`
  .LogoUSG {
    width: 200px;
    height: 130px;
    position: relative;
    left: 150px;
    top: 20px;
  }
  header {
    position: relative;
    top: 100px;
    left: 80px;
    background: linear-gradient(135deg, #148ba6, 40%, #0c4459);
    padding-top: 9px;
    width: 110px;
    height: 25vh;
    border-radius: 30px;
    box-shadow: 0px 0px 19px 1px rgba(12, 53, 89, 0.91);
  }

  .LogoNavBar {
    width: 75px;
    height: 50px;
    padding-top: 10%;
    /* position: relative;
    top: 15px;
    left: 15px; */
    opacity: 1;
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }

  .LogoNavBar:hover {
    opacity: 0.5;
  }

  li {
    padding-bottom: 15px;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style-type: none;
  }

  p,
  h1,
  h2 {
    display: flex;
    justify-content: center;
  }
`;

export default CSSMenuList;
