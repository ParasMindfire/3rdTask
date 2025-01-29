import React, { createContext, useContext, useState,useEffect } from "react";
import { WeatherContextType } from "../interfaces/weatherInterface";
import { useToastContext } from "./toastContext";

const API_KEY = "3b5b4e6b7e9a4b00c4a8a2156203c385";

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [search, setSearch] = useState("");

  const {openToast}=useToastContext();

  const fetchWeather = async (selectedCity: string) => {
    if(selectedCity.length>0){
        setCity(selectedCity);
        try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        if(data.message=="city not found"){
            // console.log("holaa")
            openToast("Serach With Correct Spelling","danger");
        }else{
            setWeather(data);
            setSearch("");
        }
        //   console.log("weather ",data);
        } catch (error) {
        console.error("Error fetching weather:", error);
        }
    }else{
        openToast("Serach Can not be empty","danger");
    }
    
  };

  return (
    <WeatherContext.Provider value={{ city, weather, fetchWeather ,search,setSearch,setCity}}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) throw new Error("useWeatherContext must be used within WeatherProvider");
  return context;
};
