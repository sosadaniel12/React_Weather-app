import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/Searchbar/Searchbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Weather App</h2>
        <SearchBar />
      </header>
    </div>
  );
}

export default App;
