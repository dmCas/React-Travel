const transToPic = (weather) => {
  switch (weather) {
    case '晴':
      return 'assets/weather/晴.png'
    case '多云':
      return 'assets/weather/多云.png'
    case '大雨':
      return 'assets/weather/大雨.png'
    case '中雨-大雨':
      return 'assets/weather/大雨.png'
    case '阴转中雨':
      return 'assets/weather/大雨.png'
    case '阴转小雨':
      return 'assets/weather/大雨.png'
    case '中到大雨转小雨':
      return 'assets/weather/大雨.png'
    case '多云转晴':
      return 'assets/weather/多云转晴.png'
    case '雷阵雨':
      return 'assets/weather/雷阵雨.png'
    case '小雨':
      return 'assets/weather/小雨.png'
    case '阴':
      return 'assets/weather/多云.png'
    case '大雪':
      return 'assets/weather/大雪.png'
    default: return null
  }
}

export default transToPic