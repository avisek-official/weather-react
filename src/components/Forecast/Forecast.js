const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const SHORT_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const Forecast = (props) => {
  const forecastData = props.forecastData;

  const today = new Date().getDay();

  const longday = WEEK_DAYS.slice(today, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, today)
  );

  const shortday = SHORT_DAYS.slice(today, SHORT_DAYS.length).concat(
    SHORT_DAYS.slice(0, today)
  );

  console.log(forecastData);

  return (
    <div
      className={`w-[90%] md:w-[80%] lg:w-[60%] m-2 h-auto bg-gradient-to-tr from-gray-800 to-gray-400 rounded-lg shadow-lg flex flex-col md:flex-row justify-center items-center p-2 text-white ${
        props.isLoading && "hidden"
      }`}
    >
      {forecastData.list.splice(0, 7).map((item, index) => {
        return (
          <div
            key={index}
            className="w-full p-2 flex md:flex-col justify-between items-center md:items-center"
          >
            <span className="w-[20%] md:w-auto text-start">
              <p className="hidden md:block">{longday[index]}</p>
              <p className="md:hidden">{shortday[index]}</p>
            </span>
            <span className="flex justify-evenly items-center md:flex-col w-[50%] md:w-auto">
              <img
                alt="weather-icon"
                src={`icons/${item.weather[0].icon}.png`}
                height="50px"
                width="50px"
              />
              <span className="w-full text-center">{item.weather[0].main}</span>
            </span>
            <span className="w-[30%] md:w-auto flex flex-shrink">
              <p className="w-full text-right md:text-center">
                {`${Math.round(item.main.temp_max)} / ${Math.round(
                  item.main.temp_min
                )}°C`}
              </p>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
