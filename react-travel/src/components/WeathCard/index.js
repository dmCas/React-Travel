import React, { useState, useEffect } from 'react'
import axios from 'axios'
import transWeekday from '../../utils/transWeekday'
import transToPic from '../../utils/transToPic'
import { Flex, Toast } from 'antd-mobile';
import { CSSTransition } from 'react-transition-group';
import './index.scss'


function WeatherCard({ city }) {
  const [weather, setWeather] = useState([])
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)
  useEffect(() => {
    setLoading(true)
    // setShow(true)
    axios.get('https://api.66mz8.com/api/weather.php', {
      params: {
        location: city
      }
    }).then(res => {
      console.log(res)
      setUrl(transToPic('晴'))
      if (res.data && res.data.code == 200) {
        setWeather(weather => [...res.data.data.slice(0, 5)])
        if (weather) {
          setLoading(false)
          setShow(true)
        }
      } else {
        Toast.fail(res.data.msg)
      }
    })

  }, [city])

  const renderWeather = (weather) => {
    const flexChildren = []
    weather.map((item, index) => flexChildren.push(<Flex.Item key={item.days} style={{ fontSize: '14px', fontFamily: 'monospace' }}>
      {transWeekday(item.week).slice(0, 3)}
      <div style={{ marginTop: '8px' }}>
        <img src={transToPic(item.weather)} style={{ width: '20px', height: '20px' }}></img>
      </div>
      <div style={{ fontSize: '8px', marginTop: '8px' }}>{item.temperature}</div>
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
                <span style={{ fontSize: '16px' }}>{weather[0] ? transWeekday(weather[0].week) : ''}</span>
                {/* <span style={{ position: 'absolute', top: '3px', fontSize: 'inherit' }}>{weather[0] ? weather[0].days : ''}</span> */}
                <span style={{ position: 'absolute', right: '10px', fontSize: 'inherit' }}>{city}</span>
              </div>
              {/* <div className="spirt-line"></div>  */}
              <div className="info-weather">
                <Flex>
                  {
                    renderWeather(weather)
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