import React, { useState } from "react";
import "./Searchbar.css";
import axios from "axios";

const SearchBar = () => {
  const [formInput, setFormInput] = useState("city name");
  function handleSubmit(event) {
    event.preventDefault();
    const url = `api.openweathermap.org/data/2.5/forecast?q=${formInput}&appid=${process.env.REACT_APP_API_KEY}`;
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function onSearchChange(event) {
    setFormInput(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit} className="pa2">
      <input
        name="cityName"
        value={formInput}
        className="search"
        type="search"
        // placeholder="Search weather by city"
        onChange={onSearchChange}
      />
      <button className="search-button">Search</button>
    </form>
  );
};

export default SearchBar;
