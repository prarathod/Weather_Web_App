import "./current-weather.css";

const CurrentWeather = (data) => {
    return (

        <div>
            <div className="top">
                
            </div>
            <div className="weather">

                <div className="Mail-body">
                    <p className="city">25<sup>o</sup>C</p>
                    <img alt="weather" className="weather-icon" src="icons/01d.png" />
                </div>

            </div>
        </div>
    );
}

export default CurrentWeather;