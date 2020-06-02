import React, { useState } from 'react'
import Navbar from '../../components/NavBar'
import WeatherCard from '../../components/WeathCard'
import TravelPlan from '../../components/TravelPlan'
import './index.scss'


function Detail() {
  const [ city, setCity ] = useState('杭州')

  const getSelectCity = (city) => {
    setCity(city)
  }

  return (
    <div className="detail-wrapper" >
      <div className="bg-pic">
        <img src="assets/imgs/bg_hangZhou.jpg" alt=""></img>
      </div>
      <Navbar title='杭州一日游' img='assets/imgs/avator.jpg'></Navbar>
      <WeatherCard city={city}></WeatherCard>
      <TravelPlan getSelectCity={getSelectCity}></TravelPlan>
    </div>
  )
}

export default Detail