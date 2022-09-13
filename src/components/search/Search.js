import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

import { cityAPIOptions, CityAPI_URL } from "../api/api";

const Search = (props) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${CityAPI_URL}/cities?namePrefix=${inputValue}`,
      cityAPIOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude},${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const searchChangeHandler = (searchData) => {
    setSearch(searchData);
    props.onChangeSearch(searchData);
  };
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[60%] m-2">
      <AsyncPaginate
        placeholder="Search Your City"
        debounceTimeout={600}
        value={search}
        onChange={searchChangeHandler}
        loadOptions={loadOptions}
      />
    </div>
  );
};
export default Search;
