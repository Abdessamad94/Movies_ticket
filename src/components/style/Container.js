import styled from "styled-components";

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
    url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  .form {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 8px;
  }
  .movieInfo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 8px;
  }
  .form form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 350px;
    width: 50%;
    border-radius: 10px;
    background-color: whitesmoke;
    input,
    button {
      height: 30px;
      width: 70%;
      margin: 10px 0;
      border: 1px solid black;
      border-radius: 5px;
    }
    input {
      padding-left: 8px;
    }
    button {
      width: 70%;
      transition: all 0.5s;
    }
    button:hover {
      background-color: #ff4545;
      color: white;
      border-color: white;
    }
    .err {
      font-size: 12px;
      color: red;
      font-family: sans-serif;
      font-weight: 700;
      height: 8px;
    }

  }
`;

export default Container;
