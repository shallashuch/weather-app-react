import './App.css';
import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo"

function App() {
  const defaultcity = "Amsterdam"
  let [city, setCity] = useState(defaultcity);
  let [weatherData, setWeatherData] = useState({ready: false});


  function handleResponse(response) {
    setWeatherData({
      ready: true,
      name: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      tempMin: response.data.main.temp_min,
      tempMax: response.data.main.temp_max,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description
    });
  }

  function search() {
    const apiKey = "8161b4309ee03faae957729ba7104797";
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
                      onChange={searchCity}
                    />
                  </div>
                  <div className="col-lg-6 col-sm-12 search-button-container">
                    <button id="search-button">Search</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="Results">
              <WeatherInfo data={weatherData}/>
            </div>
          </div>
          <p><a href='https://github.com/shallashuch/weather-app-react/tree/main'>Open-source code </a>by Ilaria Massa</p>
        </div>
     </div>
    )
  } else {
    search();
    return (
      <p>Loading..</p>
    )
  }


}

export default App;
