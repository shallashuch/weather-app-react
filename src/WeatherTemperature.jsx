import React, {useState} from "react";

export default function WeatherTemperature(props) {

  const [unit, setUnit] = useState("celsius");
  
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div className="col-auto number-degree">{Math.round(props.celsius)}</div>
        <div className="col-auto measurement-temperature">
        <p> °C | <a href="/" onClick={showFahrenheit}>°F</a></p>
        </div>
      </div>
    )
  } else {
    let fahrenheit = (props.celsius * 9/5) + 32;
    return (
      <div className="WeatherTemperature">
        <div className="col-auto number-degree">{Math.round(fahrenheit)}</div>
        <div className="col-auto measurement-temperature">
        <p><a href="/" onClick={showCelsius}> °C</a> | °F</p>
        </div>
      </div>
    )
  }
}