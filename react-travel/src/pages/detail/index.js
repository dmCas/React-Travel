import React from 'react'
import Navbar from '../../components/NavBar'
import WeatherCard from '../../components/WeathCard'
import './index.scss'


function Detail() {

  return (
    <div className="detail-wrapper">
      {/* <div className="bg-pic">
        <img src="assets/imgs/bg_hangzhou.jpg" alt=""></img>
      </div> */}
      <Navbar title='杭州一日游' img='assets/imgs/avator.jpg'></Navbar>
      <WeatherCard city='杭州'></WeatherCard>
    </div>
  )
}

export default Detail