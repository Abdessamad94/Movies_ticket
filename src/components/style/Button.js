import styled from "styled-components";

const Botton = styled.button`
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 40px;
  margin-left: 8px;
  margin-bottom: 8px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};
  border: 1px solid white;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export default Botton;
