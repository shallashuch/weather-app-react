import React from "react";
import "./FormattedDate.css";

export default function FormattedDate(props) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if(hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if(minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="FormattedDate">
      <div className="col date-container">{day}</div>
      <div className=" col hour-container">{hours}:{minutes}</div>
    </div>
  );
}