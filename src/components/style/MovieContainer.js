import styled from "styled-components";

const MovieContainer = styled.section`
  display: flex;
  align-items: flex-end;
  width: 100%;
  overflow: hidden;
  color: white;
  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
    height: 70%;
    padding: 10px;
    overflow-x: hidden;
  }
  & > div::-webkit-scrollbar {
    display: none;
  }
`;

export default MovieContainer;
