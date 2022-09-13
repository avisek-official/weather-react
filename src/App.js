import Search from "./components/search/Search";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/Forecast/Forecast";

import { WeatherAPI_URL, WeatherAPI_KEY } from "./components/api/api";
import { useEffect, useState } from "react";

function App() {
  const [curWeatherData, setCurWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("locationData"));
    if (data !== null) {
      const newData = data.toString();
      searchChangeHandler({ value: newData, label: data[2] });
    }
  }, []);

  const searchChangeHandler = (searchData) => {
    setIsLoading(true);
    const [lat, lon] = searchData.value.split(",");

    const locationData = [lat, lon, searchData.label];
    localStorage.setItem("locationData", JSON.stringify(locationData));

    const curWeatherFetch = fetch(
      `${WeatherAPI_URL}/weather?lat=${lat}&lon=${lon}&appid=${WeatherAPI_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WeatherAPI_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WeatherAPI_KEY}&units=metric`
    );

    Promise.all([curWeatherFetch, forecastFetch])
      .then(async (response) => {
        const curWeatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurWeatherData({ city: searchData.label, ...curWeatherResponse });
        setForecastData({ city: searchData.label, ...forecastResponse });
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-auto">
      <Search onChangeSearch={searchChangeHandler} />
      <CurrentWeather isLoading={isLoading} curWeatherData={curWeatherData} />
      {forecastData && (
        <Forecast isLoading={isLoading} forecastData={forecastData} />
      )}
    </div>
  );
}

export default App;
