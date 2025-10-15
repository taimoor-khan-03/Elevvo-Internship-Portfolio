import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infoBox.css'
//icons 
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox ({ info }) {

    const RAIN_URL = "https://media.istockphoto.com/id/503284599/photo/rainy-weather.webp?a=1&b=1&s=612x612&w=0&k=20&c=bPNkULHt-WSe1IfEM_QDPcwaVUhmzE6tWg9QTe9h_ps=";
    const COLD_URL = "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=775&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; 
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    return (
    <div className='infoBox'>
        <div className="cardContainer">
          <Card sx={{ maxWidth: 345 }} className='infoBox'>
            <CardMedia
            sx={{ height: 140 }}
            image= {
                info.humidity > 80 ? 
                RAIN_URL : info.temp > 15 ?
                HOT_URL : COLD_URL
            }
            title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {
                    info.humidity > 80 ? 
                    <p><BeachAccessIcon/> {info.city}</p> : info.temp > 15 ?
                    <p><WbSunnyIcon/> {info.city}</p> : <p><AcUnitIcon/> {info.city}</p>
                    }
                </Typography>
                {/* we use component = because we use nested p tags in component */}
                <Typography component="div" variant="body2" sx={{ color: 'text.secondary' }}>
                    <p>
                        Temperature = {info.temp}
                    </p>
                    <p>
                        Humidity = {info.humidity}
                    </p>
                    <p>
                        weather can be describe as <i>{info.weather}</i> feels like {info.feelsLike}
                    </p>
                </Typography>
            </CardContent>
          </Card>
        </div>
    </div>
    )
}