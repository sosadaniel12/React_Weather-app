import react from "react";
import SearchBar from "../components/Searchbar/Searchbar";
import axios from "axios";

const City = () => {
  const [city, setCity] = react.useState("");
  const [weather, setWeather] = react.useState("");
  const [error, setError] = react.useState("");
  const [isLoading, setIsLoading] = react.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const api_url = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${city}`;
    try {
      const { data } = await axios.get(api_url);
      setWeather(data.list[0].main.temp);
      setCity("");
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <SearchBar
        handleSubmit={handleSubmit}
        setCity={setCity}
        city={city}
        weather={weather}
        isLoading={isLoading}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default City;
