import "./current-weather.css";
import React, { useState } from "react";

const CurrentWeather = ({data, icon}) => {
    
    return (

        <div>
            <div className="top">
                
            </div>
            <div className="weather">

                <div className="Mail-body">
                    <p className="city">{`${data}`}<sup>o</sup>C</p>
                    <img alt="weather" className="weather-icon" src={`https://static.vecteezy.com/system/resources/previews/000/436/583/original/cloud-vector-icon.jpg`} />
                </div>

            </div>
        </div>
    );
}

export default CurrentWeather;