import React, {useState, useEffect} from "react"
import axios from "axios"
import ForecastWeatherDays from "./ForecastWeatherDays"

export default function Forecast(props) {
  let [forecastData, setForecastData] = useState(null)
  let [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(false)
  }, [props]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setReady(true);
  }

  function load() {
    const apiKey = "515c9ddbeb3cda9061acfab71031839e";
    let lon = props.coords.lon;
    let lat = props.coords.lat;
  
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  if (ready) {
    return (
      <div className="forecast-container">
        {forecastData.map(function (dailyForecast, index) {
          if (index < 5 ) {
            return (
            <div className="Forecast" key={index}>               
              <div className="row day-container">
                <ForecastWeatherDays data={dailyForecast}/>
              </div>
              <div className="separator-line"></div>
            </div>
          )} else {
            return null
          }
        })}
     </div>
    )
  } else {
    load();
    return null
  }
}
