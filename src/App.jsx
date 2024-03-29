import './App.css';
import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import { ThreeDots } from "react-loader-spinner";


function App() {
  const defaultcity = "Amsterdam"
  let [city, setCity] = useState(defaultcity);
  let [weatherData, setWeatherData] = useState({ready: false});


  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      name: response.data.name,
      timeZone: response.data.timezone,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      tempMin: response.data.main.temp_min,
      tempMax: response.data.main.temp_max,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
    });
  }

  function search() {
    const apiKey = "2e8bd64850c67df6975e7d33a20dce47";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiURL).then(handleResponse)
  }

  function submitForm(event) {
    event.preventDefault();
    search();
  }

  function searchCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="body-container">
          <div className="weather-body container">
           <div className="Search">
             <div className="row search-container">
                <form onSubmit={submitForm}>
                  <div className="col-lg-6 col-sm-12 input-container">
                    <input
                      type="search"
                      id="current-localization-input"
                      name="current-localization-input"
                      placeholder="Enter your city"
                      onInput={searchCity}
                    />
                  </div>
                  <div className="col-lg-6 col-sm-12 search-button-container">
                    <button type="submit" id="search-button">Search</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="Results">
              <WeatherInfo data={weatherData}/>
            </div>
          </div>
          <p className='open-source'><a href='https://github.com/shallashuch/weather-app-react/tree/main' rel="noreferrer" target='_blank'>Open-source code </a>by Ilaria Massa</p>
        </div>
     </div>
    )
  } else {
    search();
    return (
      <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
    )
  }


}

export default App;
