import styled from "styled-components";

const Header = styled.header`
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  position: fixed;
  width: 100%;
  & > .logo {
    font-size: 30px;
    font-family: fantasy;
    padding-left: 3%;
    a {
      text-decoration: none;
      padding: 0 10px;
      list-style: none;
      color: white;
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    color: white;
    list-style-type: none;

    li a {
      text-decoration: none;
      padding: 0 10px;
      list-style: none;
      color: white;
    }
  }
`;

export default Header;
