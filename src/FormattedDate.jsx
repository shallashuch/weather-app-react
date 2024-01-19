import React from "react";
import "./FormattedDate.css";

export default function FormattedDate(props) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const formattedDate = new Date(props.date.getTime() + (props.timezone * 1000));
  
  let day = days[formattedDate.getUTCDay()];
  let monthDate = formattedDate.getUTCDate();
  let month = months[formattedDate.getUTCMonth()];
  let year = formattedDate.getUTCFullYear();
  let hours = formattedDate.getUTCHours();
  if(hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = formattedDate.getUTCMinutes();
  if(minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="FormattedDate">
      <div className="col date-container">
        <div>{day}</div>
        <div className="day-month-year-container">{monthDate} {month} {year}</div>
      </div>
      <div className=" col hour-container">{hours}:{minutes}</div>
    </div>
  );
}