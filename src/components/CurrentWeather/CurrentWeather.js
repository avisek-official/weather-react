import OtherDetails from "./OtherDetails";

const CurrentWeather = (props) => {
  const curWeatherData = props.curWeatherData;

  let curTemp = 0;
  let maxTemp = 0;
  let minTemp = 0;
  let cityName = "";
  let curSky = "";
  let dn = ["n", "n", "n"];
  let icon = "unknown";
  if (curWeatherData !== null) {
    curTemp = Math.round(curWeatherData.main.temp);
    maxTemp = Math.round(curWeatherData.main.temp_max);
    minTemp = Math.round(curWeatherData.main.temp_min);
    cityName = curWeatherData.city;
    curSky = curWeatherData.weather[0].main;
    icon = curWeatherData.weather[0].icon;
    dn = icon.split("");
  }

  return (
    <>
      <div
        id="main-details"
        className={`w-[90%] md:w-[80%] lg:w-[60%] m-2 h-auto bg-gradient-to-tr 
        ${dn[2] === "n" && "from-slate-800 to-sky-700"}
        ${dn[2] === "d" && "from-sky-700 to-sky-300"}  
        rounded-lg shadow-lg flex flex-col-reverse justify-center items-center md:flex-row md:justify-between`}
      >
        {props.isLoading && (
          <div className="w-full text-center text-white text-[40px] py-6 font-bold animate-pulse">
            Loading ...
          </div>
        )}
        {!props.isLoading && (
          <>
            <div
              id="left-col"
              className="w-full md:w-2/3 flex flex-col items-center justify-center md:items-start md:justify-start"
            >
              <div id="city-name" className="p-4 text-center md:text-right">
                <h1 className="text-white text-2xl font-bold">{cityName}</h1>
              </div>
              <div id="cur-temp" className="px-4 pt-2">
                <h1
                  className={`text-white ${
                    curTemp === 0 ? "text-[40px]" : "text-[50px]"
                  }  font-bold`}
                >
                  {curTemp === 0 ? "Select Your City" : curTemp + "° C"}
                </h1>
              </div>
              <div id="cur-sky-mob" className="px-4 py-1 md:hidden">
                <h1 className="text-white text-[30px] font-bold">{curSky}</h1>
              </div>
              <div id="max-min" className="px-2 sm:px-4 py-2">
                {maxTemp !== 0 && minTemp !== 0 && (
                  <h1 className="text-white text-[16px] sm:text-[20px] font-bold">
                    Maximum - <span className="font-normal"> {maxTemp}° C</span>{" "}
                    | Minimum -
                    <span className="font-normal"> {minTemp}° C</span>
                  </h1>
                )}
              </div>
            </div>
            <div
              id="right-col"
              className="w-full md:w-1/3 flex flex-col items-center justify-center"
            >
              <div id="weather-icon">
                <img alt="weather-icon" src={`icons/${icon}.png`} />
              </div>
              <div id="cur-sky-desk" className="px-4 py-1 hidden md:block">
                <h1 className="text-white text-[30px] font-bold">{curSky}</h1>
              </div>
            </div>
          </>
        )}
      </div>
      {!props.isLoading && <OtherDetails curWeatherData={curWeatherData} />}
    </>
  );
};

export default CurrentWeather;
