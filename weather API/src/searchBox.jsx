import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox ({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error ,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = ;

    let getWeatherInfo = async ( ) =>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            // extract from jsonResponse
            let result =  {
            city : city ,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description
           }
          console.log(result);
           return result; 
        }catch(err){
            throw err;
        }
    } 

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let res =  await getWeatherInfo();
            updateInfo(res);
        }catch(err){
            setError(true);
        }
    }

    return (
        <div className='searchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City name" variant="outlined" required value={city} onChange={handleChange}/>
                <br /><br /><br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
            { error == true && <p style={{color : 'red'}}>No Such Place Exists!</p>}
        </div>
    )
}