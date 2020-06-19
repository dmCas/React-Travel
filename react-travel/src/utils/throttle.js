function throttle(fn, delay){
  var flag = true
  return function (...args) {
    if(!flag) return 
    flag = false
    setTimeout(() => {
      fn.apply(this, args)
      flag = true
    }, 2000)
  }
}

export default throttle