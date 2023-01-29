import React from "react";
import { Day, Time } from "./style/SingleMovie";
import { formatMovieDate } from "../helper/date";
import { Link } from "react-router-dom";

export default function DateCard({ schedule, id }) {
  const { dayOfMonth, dayName, monthName } = formatMovieDate(
    schedule.dayTimestamp
  );
  return (
    <Day>
      <div className="date">
        <div className="day">{dayName}</div>
        <div className="daynum">{dayOfMonth}</div>
        <div className="month">{monthName}</div>
      </div>
      <div className="time">
        {schedule.times.map((time) => {
          return (
            <Time
              as={Link}
              to={`/Checkout/${id}/${time}/${schedule.dayTimestamp}`}
              bg="transparent"
              color="white"
              borderColor="white"
            >
              {time}
            </Time>
          );
        })}
      </div>
    </Day>
  );
}
