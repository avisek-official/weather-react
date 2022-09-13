const OtherDetails = (props) => {
  const curWeatherData = props.curWeatherData;
  let dn = ["n", "n", "n"];
  let icon = "";
  let windSpeed = 0;
  let windDirection = "North";
  let feelsLike = 0;
  let humidity = 0;
  let pressure = 0;
  let visibility = 0;
  if (curWeatherData !== null) {
    icon = curWeatherData.weather[0].icon;
    dn = icon.split("");
    feelsLike = Math.round(curWeatherData.main.feels_like);
    windSpeed = Math.round(curWeatherData.wind.speed * 3.6);

    let windDeg = curWeatherData.wind.deg;
    if (windDeg === 0 || windDeg === 360) {
      windDirection = "North";
    } else if (windDeg === 90) {
      windDirection = "East";
    } else if (windDeg === 180) {
      windDirection = "South";
    } else if (windDeg === 270) {
      windDirection = "West";
    } else if (windDeg > 0 && windDeg < 90) {
      windDirection = "North-East";
    } else if (windDeg > 90 && windDeg < 180) {
      windDirection = "South-East";
    } else if (windDeg > 180 && windDeg < 270) {
      windDirection = "South-West";
    } else if (windDeg > 270 && windDeg < 360) {
      windDirection = "North-West";
    }

    humidity = curWeatherData.main.humidity;
    pressure = curWeatherData.main.pressure;
    visibility = (curWeatherData.visibility / 1000).toFixed(1);
  }

  return (
    <div
      id="main-details"
      className={`w-[90%] md:w-[80%] lg:w-[60%] m-2 h-auto bg-gradient-to-tr 
        ${dn[2] === "n" && "from-slate-800 to-sky-700"}
        ${dn[2] === "d" && "from-sky-700 to-sky-300"}  
        rounded-lg shadow-lg flex flex-col justify-center items-center p-4 text-white`}
    >
      <div className="text-lg font-bold w-full text-center mb-2">
        Weather Details
      </div>
      {/* Small Screen View */}
      <div
        id="mob-view"
        className="w-full flex justify-evenly text-center md:hidden"
      >
        <div id="left-col">
          <div className="flex flex-col my-3">
            <span
              className={`${
                dn[2] === "d" ? "text-gray-800" : "text-gray-300"
              } text-sm`}
            >
              Feels Like
            </span>
            <span className="text-xl font-bold">{feelsLike}° C</span>
          </div>
          <div className="flex flex-col my-3">
            <span
              className={`${
                dn[2] === "d" ? "text-gray-800" : "text-gray-300"
              } text-sm`}
            >
              Wind Speed
            </span>
            <span className="text-xl font-bold">{windSpeed} Km/h</span>
          </div>
          <div className="flex flex-col my-3">
            <span
              className={`${
                dn[2] === "d" ? "text-gray-800" : "text-gray-300"
              } text-sm`}
            >
              Wind Direction
            </span>
            <span className="text-xl font-bold">{windDirection}</span>
          </div>
        </div>
        <div id="right-col">
          <div className="flex flex-col my-3">
            <span
              className={`${
                dn[2] === "d" ? "text-gray-800" : "text-gray-300"
              } text-sm`}
            >
              Humidity
            </span>
            <span className="text-xl font-bold">{humidity}%</span>
          </div>
          <div className="flex flex-col my-3">
            <span
              className={`${
                dn[2] === "d" ? "text-gray-800" : "text-gray-300"
              } text-sm`}
            >
              Air Pressure
            </span>
            <span className="text-xl font-bold">{pressure} hPa</span>
          </div>
          <div className="flex flex-col my-3">
            <span
              className={`${
                dn[2] === "d" ? "text-gray-800" : "text-gray-300"
              } text-sm`}
            >
              Visibility
            </span>
            <span className="text-xl font-bold">{visibility} Km</span>
          </div>
        </div>
      </div>
      {/* Large Screen View */}
      <div
        id="desk-view"
        className="w-full justify-center items-center text-center hidden md:flex"
      >
        <div id="first-row" className="w-full flex flex-col justify-center">
          <div className="flex flex-col my-2">
            <span
              className={`${
                dn[2] === "d" ? "text-gray-700" : "text-gray-300"
              } text-lg`}
            >
              Feels Like
            </span>
            <span className="text-2xl font-bold">{feelsLike}° C</span>
          </div>
          <div className="flex flex-col my-2">
            <span
              className={`${
                dn[2] === "d" ? "text-gray-700" : "text-gray-300"
              } text-lg`}
            >
              Wind Speed
            </span>
            <span className="text-xl font-bold">{windSpeed} Km/h</span>
          </div>
        </div>

        <div id="mid-row" className="w-full flex flex-col justify-center">
          <div className="flex flex-col my-2">
            <span
              className={`${
                dn[2] === "d" ? "text-gray-700" : "text-gray-300"
              } text-lg`}
            >
              Wind Direction
            </span>
            <span className="text-xl font-bold">{windDirection}</span>
          </div>
          <div className="flex flex-col my-2">
            <span
              className={`${
                dn[2] === "d" ? "text-gray-700" : "text-gray-300"
              } text-lg`}
            >
              Humidity
            </span>
            <span className="text-xl font-bold">{humidity}%</span>
          </div>
        </div>

        <div id="last-row" className="w-full flex flex-col justify-center">
          <div className="flex flex-col my-2">
            <span
              className={`${
                dn[2] === "d" ? "text-gray-700" : "text-gray-300"
              } text-lg`}
            >
              Air Pressure
            </span>
            <span className="text-xl font-bold">{pressure} hPa</span>
          </div>
          <div className="flex flex-col my-2">
            <span
              className={`${
                dn[2] === "d" ? "text-gray-700" : "text-gray-300"
              } text-lg`}
            >
              Visibility
            </span>
            <span className="text-xl font-bold">{visibility} Km</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OtherDetails;
