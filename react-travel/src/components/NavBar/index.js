import React from 'react'
import { useHistory } from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile';
import './index.scss'


function Navbar({img,title}) {
  const history = useHistory()
  return (
    <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <div key="0" className="avator-nav" onClick={() => history.push('/detail')}>
          <img src={img} alt=""></img>
        </div>,
      ]}
    >{title}</NavBar>
  )
}

export default Navbar