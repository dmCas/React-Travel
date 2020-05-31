import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
import './index.scss'

function Navbar({img,title}) {
  return (
    <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <div key="0" className="avator-nav">
          <img src={img} alt=""></img>
        </div>,
      ]}
    >{title}</NavBar>
  )
}

export default Navbar