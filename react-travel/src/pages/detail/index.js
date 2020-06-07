import React, { useState } from 'react'
import Navbar from '../../components/NavBar'
import WeatherCard from '../../components/WeathCard'
import TravelPlan from '../../components/TravelPlan'
import {Button} from 'antd-mobile'
import { useHistory } from 'react-router-dom'
import './index.scss'



function Detail() {
  const [city, setCity] = useState('杭州')
  const getSelectCity = (city) => {
    setCity(city)
  }
  const history = useHistory()
  return (
    <div className="detail-wrapper" >
      <div className="bg-pic">
        <img src="assets/imgs/bg.jpg" alt=""></img>
      </div>
      <Navbar title='杭州一日游' img='assets/imgs/avator.jpg'></Navbar>
      <WeatherCard city={city}></WeatherCard>
      <TravelPlan getSelectCity={getSelectCity}></TravelPlan>
      <div className="button-style">
      <Button className="button-style" type="primary" onClick={() => history.push('/route')}>查看我的路线地图<svg t="1591513163052" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8449" width="20" height="20"><path d="M487.232 55.68A32 32 0 0 1 532.48 10.432l478.72 478.72a32 32 0 0 1 0 45.248l-478.72 478.72a32 32 0 1 1-45.248-45.248l456.128-456.064L487.232 55.68z" fill="#000000" p-id="8450"></path><path d="M32 555.2h896a32 32 0 1 0 0-64H32a32 32 0 1 0 0 64z" fill="#000000" p-id="8451"></path></svg></Button>
      </div>
    </div>
  )
}

export default Detail