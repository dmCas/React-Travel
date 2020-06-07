import React, { useState, useEffect } from 'react'
import axios from 'axios'
import transWeekday from '../../utils/transWeekday'
import transToPic from '../../utils/transToPic'
import { Flex, Toast } from 'antd-mobile';
import { CSSTransition } from 'react-transition-group';
import './index.scss'


function WeatherCard({ city }) {
  const [foreWeaher, setForeWeaher] = useState([])
  const [change, setChange] = useState('')
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)
  useEffect(() => {
    setLoading(true)
    initWeather(city)
    var t = setInterval(() => {
      initWeather(city)
    },5000)
    return clearInterval.bind(undefined, t)
  }, [city])

  const initWeather = (city) => {
    console.log('不需要执行的发生了执行')
    //eslint-disable-next-line
    AMap.plugin('AMap.Weather', function () {
      //eslint-disable-next-line
      var weather = new AMap.Weather();
      weather.getForecast(city, function (err, data) {
        setChange(data.reportTime)
        if (data.info) {
          setForeWeaher([...data.forecasts])
        }
        else {
          Toast.fail(err)
        }
      });
    });
  }
  const renderWeather = (weather) => {
    const flexChildren = []
    weather.map((item, index) => flexChildren.push(<Flex.Item key={item.date} style={{ fontSize: '14px', fontFamily: 'monospace' }}>
      {transWeekday(item.week).slice(0, 3)}
      <div style={{ marginTop: '8px' }}>
        <img src={transToPic(item.dayWeather)} style={{ width: '20px', height: '20px' }}></img>
      </div>
      <div style={{ fontSize: '8px', marginTop: '8px' }}>{item.dayTemp}℃/{item.nightTemp}℃</div>
    </Flex.Item>))
    return flexChildren
  }
  return (
    // <CSSTransition
    //   classNames="card"
    //   timeout={200}
    //   in={show}>
    <div className="weather-card" >
      {
        // loading ? <div>loading...</div> :
        <>
          <div className="city-weather" style={{ position: 'relative' }}>
            <span style={{ fontSize: '14px' }}>{change}</span>
            {/* <span style={{ position: 'absolute', top: '3px', fontSize: 'inherit' }}>{weather[0] ? weather[0].days : ''}</span> */}
            <span style={{ position: 'absolute', right: '0', fontSize: 'inherit' }}>{city}</span>
            <span className='svg-style'><svg t="1591508439205" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4615" width="16" height="16"><path d="M808.6 403.2c0-178.8-129.8-308.5-308.5-308.5-170.1 0-308.5 138.4-308.5 308.5 0 125.6 170.6 338.3 262.3 452.6l6.8 8.4c9.6 12 24 18.9 39.5 18.9 15.4 0 29.8-6.9 39.5-18.9l6.8-8.4c91.5-114.3 262.1-327 262.1-452.6z m-310.1 89.4c-62.9 0-114-51.1-114-114s51.1-114 114-114 114 51.1 114 114-51.1 114-114 114z" fill="#ffffff" p-id="4616"></path><path d="M500.1 67.8c-184.9 0-335.4 150.4-335.4 335.4 0 135 174.5 352.5 268.2 469.4l6.7 8.4c14.8 18.4 36.8 29 60.4 29s45.6-10.6 60.4-29l6.8-8.4C661 755.7 835.4 538.2 835.4 403.2c0-194.3-141-335.4-335.3-335.4z m0 815.3c-15.4 0-29.8-6.9-39.5-18.9l-6.8-8.4c-91.7-114.3-262.3-327-262.3-452.6 0-170.1 138.4-308.5 308.5-308.5 178.8 0 308.5 129.8 308.5 308.5 0 125.6-170.6 338.3-262.3 452.6l-6.8 8.4c-9.5 12-23.9 18.9-39.3 18.9z" fill="#006666" p-id="4617"></path><path d="M498.5 378.6m-87.2 0a87.2 87.2 0 1 0 174.4 0 87.2 87.2 0 1 0-174.4 0Z" fill="#ffffff" p-id="4618"></path><path d="M612.5 378.6c0-62.9-51.1-114-114-114s-114 51.1-114 114 51.1 114 114 114 114-51.1 114-114z m-201.2 0c0-48.1 39.1-87.2 87.2-87.2s87.2 39.1 87.2 87.2-39.1 87.2-87.2 87.2-87.2-39.1-87.2-87.2z" fill="#006666" p-id="4619"></path></svg></span>
          </div>
          {/* <div className="spirt-line"></div>  */}
          <div className="info-weather">
            <Flex>
              {
                renderWeather(foreWeaher)
              }
            </Flex>
          </div>
        </>
      }
    </div>
    // </CSSTransition>
  )
}

export default WeatherCard