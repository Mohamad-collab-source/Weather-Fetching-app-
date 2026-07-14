import SearchInfo from "./SearchInfo"
import Search from "./Search"
import { useState } from "react"
export default function WeatherApp(){
    const [info,setInfo] = useState({
          city:"Mangalore",
        feelsLike: 27.61,
        humidity: 26,
        temp:28.93,
        tempMax: 28.93, 
        tempMin: 28.93,
        weather: "overcast clouds"
    })
    let updateWeather = (newinfo)=>{
        setInfo(newinfo);
    }
    return (
    
        <div>
            <h2 style={{textAlign:"center"}}>Weather App</h2>
            <Search updateWeather={updateWeather}/>
            <SearchInfo info={info}/>
        </div>
    )
}