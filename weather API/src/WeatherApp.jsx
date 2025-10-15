import SearchBox from "./searchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp () {
    const [weatherInfo , setWeatherInfo] = useState({
        city:"Dehli",
        temp : 30.7 ,
        humidity: 92, 
        weather : "overcast clouds",
        feelsLike : 4.94,
    })

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }

    return (
        <div style={{textAlign : 'center'}}> 
            <h2>Weather App</h2>
            <SearchBox updateInfo = {updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    )
}