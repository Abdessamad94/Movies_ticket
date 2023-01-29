import React from "react";
import { Day } from "./style/SingleMovie";
import Button from "../components/style/Button";
import { formatMovieDate } from "../helper/date";

export default function DateCard({ schedule, id }) {
  const { dayOfMonth, dayName, monthName } = formatMovieDate(
    schedule.dayTimestamp
  );
  return (
    <Day>
      {console.log(dayOfMonth)}
      <div className="date">
        <div className="day">{dayName}</div>
        <div className="daynum">{dayOfMonth}</div>
        <div className="month">{monthName}</div>
      </div>
      <div className="time">
        {schedule.times.map((time) => {
          return (
            <Button
              as={Link}
              to={`/Movie/${id}/${time}/${schedule.dayTimestamp}`}
              bg="transparent"
              color="white"
              borderColor="white"
            >
              {time}
            </Button>
          );
        })}
      </div>
    </Day>
  );
}
