import React, { useState, useEffect } from 'react'
import axios from 'axios'
import transWeekday from '../../utils/transWeekday'
import { Flex, Toast } from 'antd-mobile';
import './index.scss'


function WeatherCard({ city }) {
  const [weather, setWeather] = useState([])
  useEffect(() => {
    axios.get('https://api.66mz8.com/api/weather.php', {
      params: {
        location: '北京'
      }
    }).then(res => {
      console.log(res)
      if (res.data && res.data.code == 200) {
        setWeather(weather => [...weather, ...res.data.data])
      }else{
        Toast.fail(res.data.msg)
      }
    })
  }, [])

  const renderWeather = (weather) => {
    const flexChildren = []
    weather.map((item, index) => flexChildren.push(<Flex.Item key={item.days}>
      {transWeekday(item.week).slice(0,3)}
    </Flex.Item>))
    return flexChildren
  }
  console.log(weather)
  return (
    <div className="weather-card">
      <div className="city-weather">
        <span>{weather[0] ? transWeekday(weather[0].week) : ''}</span>
      </div>
      <div className="info-weather">
        <Flex>
          {
            renderWeather(weather)
          }
        </Flex>
      </div>
    </div>
  )
}

export default WeatherCard