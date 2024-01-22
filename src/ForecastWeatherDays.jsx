import React from "react";
import WeatherIcon from "./WeatherIcon"
import "./ForecastWeatherDays.css"


export default function ForecastWeatherDays(props) {

  function maxTemperature() {
    let tempMax = Math.round(props.data.temp.max);
    return `${tempMax}°`;
  }

  function minTemperature() {
    let tempMin = Math.round(props.data.temp.min);
    return `${tempMin}°`;
  }

  function dayWeek() {
    let date= new Date(props.data.dt * 1000);
    let day = date.getDay();
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return daysOfWeek[day];
  }

  return(
    <div className="ForecastWeatherDays">
      <div className="col first-part-col">
        <div className="row weekday">
          <p>{dayWeek()}</p>
        </div>
        <div className="row degree-forecast">
          <p>{maxTemperature()} - {minTemperature()}</p>
        </div>
      </div>
      <div className="col icon-weather">
        <WeatherIcon size={40} code={props.data.weather[0].icon}/>
      </div>
    </div>
  )
}