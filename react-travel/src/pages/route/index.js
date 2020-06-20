import React, { useEffect } from 'react'
import { Map } from 'react-amap';

const Route = () => {
  
  return <div style={{ width: '100%', height: '400px' }}>
    <Map
    center={{longitude: 120, latitude: 30}}
    zoom='8'>
    
      {/* <ZoomCtrl /> */}
    </Map>
  </div>

}

export default Route 