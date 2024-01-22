import React from "react";
import "./WeatherInfo.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import Forecast from "./Forecast"


export default function WeatherInfo(props) {
  return(
    <div className="WeatherInfo">
      <div className="row result-weather-row">
        <div className="col-lg-5 col-sm-3 forecast-result-container">
        <Forecast coords={props.data.coord}/>
        </div>
        <div className="col-lg-7 col-sm-9 complete-result-container">
          <div className="Temperature">
            <div className="Position">
              <div className="row position-result-container">
                <div className="row city-name-container">{props.data.name}</div>
                <div className="row date-hour-container">
                    <FormattedDate date={props.data.date} timezone={props.data.timeZone} />
                </div>
              </div>
              <div className="Daily">
                <div className="row temperature-container">
                  <div className="Degree">
                    <div className="row temperature-info">
                      <div className="col icon-temperature-container">
                        <WeatherIcon code={props.data.icon} size={100}/>
                      </div>
                      <div className="col today-degree-container">
                        <div className="row day-temperature-info">
                          <WeatherTemperature celsius={props.data.temperature}/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="WeatherInfo">
                    <div className="row day-info">                 
                      <div className="col-auto detail-day-info">
                        <div className="row min-temperature">
                          <div className="col text-detail">Min:</div>
                          <div className="col number-detail">{Math.round(props.data.tempMin)} °C</div>
                        </div>
                        <div className="row max-temperature">
                          <div className="col text-detail">Max:</div>
                          <div className="col number-detail">{Math.round(props.data.tempMax)} °C</div>
                        </div>
                        <div className="row windspeed">
                          <div className="col text-detail">Windspeed:</div>
                          <div className="col number-detail">{props.data.wind} km/h</div>
                        </div>
                        <div className="row description">
                          <div className="col text-detail">Description:</div>
                          <div className="col number-detail">{props.data.description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  }