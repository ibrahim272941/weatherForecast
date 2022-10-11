import { useState } from 'react';

import './App.css';
import CurrentWeather from './component/current/CurrentWeather';
import Forecast from './component/forecast/Forecast';
import Search from './component/search/Search';
import Search1 from './component/search/Search1';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  // const handleOnSearchChange = (searchData) => {
  //   console.log(searchData);
  //   const [lat, lon] = searchData.value.split(' ');

  //   const currentWeatherFetch = fetch(
  //     `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
  //   );
  //   const forecastFetch = fetch(
  //     `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
  //   );

  console.log(process.env);
  const handleOnSearchChange = (searchData) => {
    fetch(
      `${process.env.REACT_APP_WEATHER_API_URL}/weather?q=${searchData}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    )
      .then(async (response) => {
        const weatherResponse = await response.json();
        setCurrentWeather(weatherResponse);
      })
      .catch((err) => console.log(err));
    fetch(
      `${process.env.REACT_APP_WEATHER_API_URL}/forecast?q=${searchData}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    )
      .then(async (response) => {
        const forecast = await response.json();
        setForecast(forecast);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <Search1 onSearchChange={handleOnSearchChange} />
      {/* <Search onSearchChange={handleOnSearchChange} /> */}
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
