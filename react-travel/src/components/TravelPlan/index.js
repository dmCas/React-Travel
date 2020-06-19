import React, { useState, useEffect } from 'react'
import { Steps, Input } from 'antd-mobile';
import throttle from '../../utils/throttle'
// import Scroll from '../Scroll'
import './index.scss'

const Step = Steps.Step;
// const options = {
//   pullUpLoad: true,
//   probeType: 2
// }
const TravelPlan = (props) => {
  const [travel, setTravel] = useState([])
  const [selected, setSelected] = useState(0)
  useEffect(() => {
    setTravel([
      {
        pic: 'assets/imgs/avator.jpg',
        time: '2020/6/2 16:30',
        location: '杭州-灵隐寺'
      },
      {
        pic: 'assets/imgs/avator.png',
        time: '2020/6/2 18:30',
        location: '杭州-动物园'
      },
      {
        pic: 'assets/imgs/avator.png',
        time: '2020/6/2 22:30',
        location: '嘉兴-乌镇'
      },
      {
        pic: 'assets/imgs/avator.png',
        time: '2020/6/2 23:30',
        location: '嘉兴-乌镇'
      },
      {
        pic: 'assets/imgs/avator.png',
        time: '2020/6/3 23:30',
        location: '杭州-河坊街'
      },
    ])
  }, [])

  const renderTime = (time) => {
    return (
    <span><svg t="1591511686929" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6958" width="20" height="20"><path d="M498.152399 349.200376s5.177799-20.109125 27.33396-13.606773c3.973659 1.204139 16.496707 2.047037 14.088429 36.485419-0.361242 4.816557 0.361242 103.555974 0.361242 103.555973l65.143932 64.662277s14.449671 28.056444-18.062088 31.30762c-3.732832 0.361242-10.476011-2.76952-10.476011-2.76952l-74.295391-72.248354s-4.816557-6.381938-3.973659-16.015052c0.60207-9.753528-0.120414-131.37159-0.120414-131.37159z" fill="#fff" p-id="6959"></path><path d="M513.806209 273.460019s94.284102-8.188147 162.67921 73.211665c3.973659 4.816557 76.462841 86.336783 36.605832 202.054562-1.083725 3.010348-49.610536 144.376294-208.556914 136.308561-4.816557-0.240828-162.920038-9.5127-190.01317-179.657573-0.60207-3.612418-20.109125-127.036689 97.414863-202.054562 5.177799-3.37159 49.971778-29.862653 93.200376-29.501411 3.251176 0 4.455315-41.301976 4.455316-41.301976s-84.650988 0-151.360301 59.725306c-4.575729 4.094073-88.263405 68.395108-85.01223 192.421449 0.240828 10.837253-0.120414 108.372531 80.797742 175.563499 2.528692 2.167451 78.509878 76.824083 192.060207 62.01317 3.130762-0.361242 195.070555-15.65381 217.828787-226.739416 0.722484-6.381938 11.800564-121.618062-84.048919-202.89746-4.936971-4.214487-57.437441-55.149577-146.904985-59.725306-6.020696-0.120414-19.145814 40.579492-19.145814 40.579492z" fill="#fff" p-id="6960"></path><path d="M501.764817 232.639699l31.30762 0.481656-14.088429 40.338664-17.219191 0.481656z" fill="#040000" p-id="6961"></path></svg>{time}</span>
    
    )
  }

  return (
    <div className="travel-plan">
      <Steps direction="horizontal">
        {
          travel.map((item, index) => {
            return <Step key={item.time+Math.random()} onClick={() => {
              setSelected(index)
              props.getSelectCity(item.location.slice(0,2))
            }} title={item.location} description={renderTime(item.time)} icon={<img className={selected == index ? 'avator-style' : ''} style={{ width: '30px', height: '30px', borderRadius: '50%',left: '-11px' }} src={travel[0] ? travel[0].pic : ''}></img>} />
          })
        }
      </Steps>
    </div>
  )
}

export default TravelPlan