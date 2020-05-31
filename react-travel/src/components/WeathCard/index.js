import React, {useEffect} from 'react'
import './index.scss'
import axios from 'axios'

function WeatherCard({city}) {
  useEffect(() => {
    try{
      axios.get('https://api.66mz8.com/api/weather.php',{
        params:{
          location:'北京'
        }
      })
      .then(res => console.log(res))
    }
    catch{
     
    }
  }, [])
  return (
    <div className="weather-card">

    </div>
  )
}

export default WeatherCard