import styled from "styled-components";

export const SingleMovie = styled.section`
  height: 90vh;
  width: 100%;
  display: flex;
  padding-top: 5%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
    url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const MovieInfoContianer = styled.section`
  width: 50%;
  height: calc(100% - 5%);
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  padding: 10px;
`;

export const MovieTrailer = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: black;
  display: grid;
  z-index: 2;
  grid-template-columns: 1fr 1fr;
  & > div {
    width: 100%;
    height: 100%;
    color: white;
  }
  .trailer {
    display: flex;
    align-items: baseline;
  }
`;

export const MovieScheduleContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Day = styled.div`
  width: 100%;
  height: 120px;
  margin: 8px auto;
  display: grid;
  grid-template-columns: 1fr 3fr;

  .date {
    display: flex;
    flex-direction: column;
    color: white;
    .day,
    .month {
      font-size: 20px;
      font-family: fantasy;
    }
    .daynum {
      font-size: 40px;
      font-family: fantasy;
    }
    .time {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;

export const MovieTicket = styled.div`
  width: 250px;
  height: 350px;
  border-radius: 10px;
  background-color: black;
  background-image: url(${(bg) => bg});
  display: flex;
  align-items: flex-end;
  .ticketinfo {
  }
`;
