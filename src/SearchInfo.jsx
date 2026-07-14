import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./SearchInfo.css"
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function SearchInfo({info}){
  const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL = "https://images.unsplash.com/photo-1617255469888-2da1a94c8030?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL = "https://images.unsplash.com/photo-1599806112354-67f8b5425a06?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
     <div className="Info">
        <div className="card-container">
 <Card sx={{ maxWidth: 345 }}>
      <CardMedia 
        sx={{ height: 140 }}
        image={
          info.humidity > 80 
          ? RAIN_URL
          : info.temp >15 
          ? HOT_URL
          : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}_
          {
          info.humidity > 80 
          ?  <ThunderstormIcon/>
          : info.temp >15 
          ?<SunnyIcon/>
          : <AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
           <p>feels_like = {info.feelsLike}</p>
             <p>Maximum Temp = {info.tempMax}</p>
               <p>Minimum Temp = {info.tempMin}</p>
               <b><p>The Weather can be described as {info.weather}</p></b>  
        </Typography>
      </CardContent>
    </Card>
        </div>
       
     </div>

    )
}