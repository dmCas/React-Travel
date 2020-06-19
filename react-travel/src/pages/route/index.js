import React, { useEffect } from 'react'
import axios from 'axios'

const Route = () => {
  useEffect(() => {
    axios.get('https://restapi.amap.com/v3/staticmap', {
      key: '11e765c1a256bb9f2386012f60c7d06e',
      location:'116.481485,39.990464',
      zoom:'10'
    }).then((res) => {
      console.log(res)
    })
  })

  return (
    <div>123</div>
  )
}

export default Route 