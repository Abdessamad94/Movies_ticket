import styled from "styled-components";

const MovieTitle = styled.section`
  max-width: 80%;
  display: flex;
  align-items: center;
  color: whitesmoke;
  h1 {
    padding-bottom: 15px;
    font-size: 3rem;
  }

  & > div {
    padding-left: 8%;
  }

  & .rate {
    display: flex;
    padding-top: 10px;
  }
  & .rate div {
    font-size: 30px;
  }
  & .icon {
    color: yellow;
    padding-right: 8px;
  }
  .btn {
    display: flex;
    align-items: center;
    padding-top: 10px;
    justify-content: flex-start;
  }
`;

export default MovieTitle;
