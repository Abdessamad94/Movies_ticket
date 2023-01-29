import styled from "styled-components";

const Item = styled.div`
  width: 200px;
  height: 300px;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  border-radius: 8px;
  display: flex;
  position: relative;
  align-items: flex-end;
  & > div {
    padding: 15px;
  }

  & > .book-btn {
    display: none;
  }

  &:hover > .book-btn {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
    padding: 0;
    filter: blur(0px);
  }
`;

export default Item;
