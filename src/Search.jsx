import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Search.css'
import { useState } from 'react';

export default function Search({updateWeather}){

    let Api_Url = "https://api.openweathermap.org/data/2.5/weather";
    let Api_key = '6fa7838a8334d4f49232168b5661671f';
     const [city,setCity] = useState("");
     const [error,setError] = useState(false);
  
     // to call api 
     let getweatherInfo = async()=>{
      try {
         let response = await fetch(`${Api_Url}?q=${city}&appid=${Api_key}&units=metric`);
       let jsonResponse = await response.json();
       
       let weatherInfo = {
        city:city,
        temp : jsonResponse.main.temp,
         humidity : jsonResponse.main.humidity,
           tempMin: jsonResponse.main.temp_min,
           tempMax : jsonResponse.main.temp_max,
            feelsLike : jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
       }
       console.log(weatherInfo);
       return weatherInfo;
      } catch(err){
         throw error; 
      }
     }
      // to store city 
     let storeCity = (event)=>{
          setCity(event.target.value)
     }
  // to prevent defualt behaviour
     let preventDefault = async(event)=>{
     try {
       
        event.preventDefault();
       setCity("");
       let newInfo = await getweatherInfo();
    updateWeather(newInfo);
     } catch (err) {
      setError(true);
     }
     }
    return (
        <>
     <div  className='form-btn'>
        <h3 style={{color:'black'}}>Search for the weather</h3>
   
     <form onSubmit={preventDefault}>
           <TextField value={city} onChange={storeCity} id="outlined-basic" label="City Name" variant="outlined" required/>
           <br></br>
           <br></br>
            <Button variant="contained" type='submit'>Search</Button>
     </form>
     {error && <p style={{color:"red"}}>No such place Exists!</p>}
       </div>
        </>
    )
}