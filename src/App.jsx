import './App.css';
import Axios from "axios";
import { useState } from 'react';
import Weather from "./Components/Weather";
import { BiErrorCircle } from "react-icons/bi";
function App() {
  const API_KEY = "c10ac7476f8c21e12f3b2ff2e74f6571";
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      setLoading(true); // Start loading
      Axios.get(url)
        .then((response) => {
          setData(response.data);
          setError("");
        })
        .catch(() => {
          setError("City not found. Please enter a correct city!");
          setData({});
        })
        .finally(() => {
          setLoading(false); // Stop loading
        });

      setLocation("");
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br to-indigo-700">
      <div className="text-center p-5">
        <h1 className="text-4xl font-bold text-black mb-5">Weather App</h1>
        <p className="text-2xl font-bold text-gray-700 mb-5">
          Find out the weather in your city
        </p>
        {/* Input Field */}
        <input
          type="text"
          className="py-3 px-8 w-[100%] md:w-[700px] text-lg rounded-3xl border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow-lg"
          placeholder="Enter Location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDownCapture={searchLocation}
        />
        {/* Loader Animation */}
        {loading && (
          <div className="mt-5 flex justify-center">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        {/* Error Message */}
        {error && (
          <div className="flex items-center text-red-500 mt-2">
            <BiErrorCircle className="w-6 h-6 mr-2" />
            <p>{error}</p>
          </div>
        )}

      </div>
      <Weather weatherdata={data} />
    </div>
  );
}

export default App;
