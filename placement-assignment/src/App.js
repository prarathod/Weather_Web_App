import './App.css';
import CurrentWeather from './components/current-weather/current-weather';
import Search from './components/search/search';
import React, { useState } from "react";

function App() {


  const handleOnSearchChange = (searchData) => {
    
  }
  
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {/* {currentWeather1 && <CurrentWeather data={[Math.round(((Number(currentWeather1.main.temp-120)))*2/9),currentWeather1.weather.main]}/>} */}
    </div>
  );
}

export default App;
