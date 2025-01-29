// import { Dispatch, SetStateAction } from "react";

export interface WeatherContextType {
  city: string;
  setCity:React.Dispatch<React.SetStateAction<string>>;
  weather: any;
  fetchWeather: (city: string) => void;
  search:any;
  setSearch:React.Dispatch<React.SetStateAction<string>>;
}