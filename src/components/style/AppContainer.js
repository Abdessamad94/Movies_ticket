import styled from "styled-components";

export const AppContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
    url(${({ background }) => background});
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-size: cover;
`;
