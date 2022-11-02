import './App.css';
import CurrentWeather from './components/current-weather/current-weather';
import Search from './components/search/search';
import React, { useState } from "react";

function App() {
  const [currentWeather1, setCurrentWeather1] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
    const [lat1, lon1] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(` https://api.openweathermap.org/data/2.5/weather?lat=${lat1}&lon=${lon1}&appid=9bfe551dac6bd3b33696f3030602616f`);
    const forecastWeatherFetch = fetch(` https://api.openweathermap.org/data/2.5/forecast?lat=${lat1}&lon=${lon1}&appid=9bfe551dac6bd3b33696f3030602616f`);
    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();
        setCurrentWeather1({ city: searchData.label, ...weatherResponse });
        setForecastWeather({ city: searchData.label, ...forcastResponse });
      })
      .catch((err) => console.log(err));
  }
  console.log("currentWeather1:- ", currentWeather1);
  console.log("forecastWeather:- ", forecastWeather);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather1 && <CurrentWeather data={currentWeather1} />}
    </div>
  );
}

export default App;
