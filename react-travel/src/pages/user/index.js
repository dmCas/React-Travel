import React from 'react'
import { useHistory } from 'react-router-dom'
import './index.scss'
const User = () => {

  const history = useHistory()
  return (
    <div className="user-page">
      <div className="header-pic">
        <img src="assets/imgs/world.jpg"></img>
      </div>
      <div className="main-wrapper">
        <div className="avator-pic">
          <img src="assets/imgs/avator.jpg" alt=''></img>
        </div>
      </div>
      <button style={{position:'absolute', top:'0'}} onClick={() => history.push('/')}>返回</button>
    </div>
  )
}

export default User