import styled from "styled-components";

export const SingleMovie = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
  padding-top: 5%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${({ back }) => back});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const MovieInfoContianer = styled.section`
  width: 55%;
  height: calc(90% - 5%);
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  padding: 10px;
`;

export const MovieTrailer = styled.div`
  width: 100%;
  display: grid;
  padding-bottom: 10px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  & > div {
    width: 100%;
    height: 100%;
    color: white;
  }
  .trailer {
    display: flex;
    align-items: baseline;
  }
  .infomovie {
    h1 {
      margin-bottom: 8px;
      font-size: 30px;
    }
    p {
      margin-bottom: 8px;
    }
    div {
      background-color: #ff3030;
      width: 70px;
      padding: 6px;
      text-align: center;
      border-radius: 20px;
      font-family: sans-serif;
      font-weight: 700;
    }
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
  }

  .time {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const MovieTicket = styled.div`
  width: 250px;
  height: 350px;
  border-radius: 10px;
  background-color: black;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
    url(${({ img }) => img});
  background-size: cover;
  display: flex;
  align-items: flex-end;
  .ticketinfo {
    color: white;
    width: 100%;
    padding: 15px;
    .pt {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const Time = styled.button`
  border-radius: 20px;
  cursor: pointer;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};
  border: 1px solid white;
  width: 60%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  &:hover {
    transform: scale(0.98);
    background-color: #ff3030;
  }
`;

export const ThankYouContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
    url(${({ bg }) => bg});
  background-size: cover;
  .thankyou {
    width: 350px;
    display: flex;
    align-items: center;
    background-color: whitesmoke;
    padding: 20px;
    text-align: center;
    font-size: medium;
    font-family: system-ui;
    border-radius: 10px;
    .qr {
      padding-top: 20px;
      img {
        width: 300px;
        height: 300px;
      }
    }
  }
`;
