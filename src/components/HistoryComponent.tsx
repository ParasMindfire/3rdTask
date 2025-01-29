import React, { useEffect } from "react";
import { useWeatherContext } from "../context/weatherContext";
import { useToastContext } from "../context/toastContext";

const cities = ["New York", "London", "Tokyo", "Delhi", "Paris"];

const HistoryComponent: React.FC = () => {
  const { city, weather, fetchWeather,search,setSearch,setCity} = useWeatherContext();
  const {openToast}=useToastContext();
  
  useEffect(() => {
    if (city) {
    console.log("city ",city);
      fetchWeather(city);
    }
  }, [city]);

  const handleCity=(citi:string)=>{
    if(citi.length==0)openToast("Search Can Not Be Empty","danger");
    else setCity(citi)
  }


  return (
    <div id="top">
      <div className="topbar">
        <div className="topbar-left">
          <h2>Weather Forcasting</h2>
        </div>

        <div className="topbar-right">
          {/* <h2>Weather</h2> */}
          <input
            type="text"
            placeholder="Search city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="selectBtn" onClick={()=>handleCity(search)}>Search</button>

          <div className="extraOr">
            or
          </div>

          <select onChange={(e)=>handleCity(e.target.value)}>
            <option>Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

          <div className="weatherBox">
            {weather && (
                <div className="weather-info">
                <p>City: {weather.name}</p>
                <p>Temperature: {weather.main.temp}°C</p>
                <p>Condition: {weather.weather[0].description}</p>
                </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HistoryComponent;
